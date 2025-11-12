---
id: sql-proxy
title: Optimiser le trafic vers les bases de données
---

> Cette procédure concerne les très gros environnements de production avec de nombreux utilisateurs, devant faire face à des problèmes de temps de réponse de l'interface.

Lorsque la plateforme Centreon supervise de nombreux services et que l’application web sollicite fortement la base de données temps-réel, Broker peut avoir du mal à enregistrer l’ensemble des métriques. Cela aura pour effet de créer des fichiers de rétention, entraînant ainsi un délai entre la réception des nouveaux statuts et leur disponibilité dans l’interface web.

Cette procédure a pour but de permettre une réduction de charge de la base de données en redirigeant une partie des requêtes vers un second serveur de bases de données.

L’objectif est de soulager la base de données temps-réel (**centreon_storage**) pour éviter à Broker de faire de la rétention. Toutes les requêtes de lecture (SELECT) à destination de la base de données temps-réel seront redirigées vers la base de données répliquée.

Le cas d’usage minimal consiste à mettre en place une réplication des bases de données. Pour assurer correctement ce routage, nous installerons entre la plateforme Centreon et les bases de données un serveur **ProxySQL**.

![image](../assets/administration/sql_proxy.png)

Votre architecture contiendra les 3 éléments suivants :

* un serveur central Centreon, et ProxySQL installé sur celui-ci
* la base de données principale (qui sera une base de données déportée puisqu'il s'agit d'une plateforme à haute volumétrie)
* une base de données secondaire.

> Attention : en cas de défaillance, ProxySQL ne pourra pas gérer le basculement de base de données automatiquement et votre site ne sera plus fonctionnel, c'est donc à vous de mettre en place une stratégie de tolérance aux pannes.
> Il faudra vous assurer de rediriger au plus vite l'ensemble des requêtes SQL vers votre nouveau serveur SQL Master le temps de la résolution de votre incident.

> Il est fortement conseillé d'utiliser des FQDN plutôt que des adresses IP fixes.

## Installation

Afin de permettre la répartition des requêtes, nous utiliserons le logiciel [ProxySQL](https://proxysql.com/).

1. Sur votre serveur central, [téléchargez puis installez](https://proxysql.com/documentation/installing-proxysql/) la version de ProxySQL correspondant à votre OS.

2. Démarrez le service :

   ```shell
   service proxysql start
   ```

## Configuration

### ProxySQL

1. Sur le serveur central, connectez-vous à ProxySQL (le mot de passe par defaut est **admin**):

   ```shell
   mysql -h127.0.0.1 -uadmin -P6032 -p
   ```

2. Définissez dans ProxySQL les adresses IP des deux serveurs SQL, Master & Slave. Pour rappel, le serveur SQL Slave sera destiné à recevoir l'ensemble des requêtes de lecture (SELECT) liées aux données temps-réel.

   ```shell
   INSERT INTO mysql_servers (hostgroup_id, hostname) VALUES (0, ip_SQL_server_master);
   INSERT INTO mysql_servers (hostgroup_id, hostname) VALUES (1, ip_SQL_server_slave);
   ```

   Exemple :

   ```shell
   INSERT INTO mysql_servers (hostgroup_id, hostname) VALUES (0, "192.168.0.2");
   INSERT INTO mysql_servers (hostgroup_id, hostname) VALUES (1, "192.168.0.3");
   ```

3. Créez l'utilisateur qui se connectera aux deux serveurs. Cet utilisateur doit être identique sur ProxySQL et sur vos deux bases de données.

   ```shell
   INSERT INTO mysql_users (default_hostgroup, username, password) VALUES (0, SQL_user_login, SQL_user_password);
   ```

   Exemple :

   ```shell
   INSERT INTO mysql_users (default_hostgroup, username, password) VALUES (0, "centreon", "centreon");
   ```

   (La valeur **0** attribuée à la propriété **default_hostgroup** correspond à l'index du serveur SQL Master. Cela permet d'indiquer quel sera le serveur de destination par défaut pour l'ensemble des requêtes SQL.)

4. Définissez quelles requêtes SQL doivent être redirigées vers le serveur SQL Slave :

   ```shell
   INSERT INTO mysql_query_rules (rule_id, active, match_digest, destination_hostgroup, apply) VALUES (1, 1, '.*? AS REALTIME.*', 1,1);
   INSERT INTO mysql_query_rules (rule_id, active, match_digest, destination_hostgroup, apply) VALUES (2, 1, '^SELECT.*FOUND_ROWS\(\).*AS.*REALTIME$', 1,1);
   ```

   **Explication** : Toutes les requêtes temps-réel pouvant être routées par le serveur proxy contiennent le mot clef **REALTIME**. Les requêtes ci-dessus contiennent des regex permettant d'identifier les requêtes temps-réel en provenance de Centreon.

   (La valeur **1** attribuée à la propriété **destination_hostgroup** correspond à l'index du serveur serveur SQL Slave. Cela permet d'indiquer quel sera le serveur de destination pour l'ensemble des requêtes SQL de type temps-réel.)

5. Exécutez les commandes suivantes afin que ProxySQL prenne en compte la nouvelle configuration.

   ```shell
   LOAD MYSQL SERVERS TO RUNTIME;
   LOAD MYSQL USERS TO RUNTIME;
   LOAD MYSQL QUERY RULES TO RUNTIME;
   ```

6. Sauvegardez la configuration afin qu’elle soit prise en compte si le serveur ProxySQL redémarrait.

   ```shell
   SAVE MYSQL SERVERS TO DISK;
   SAVE MYSQL USERS TO DISK;
   SAVE MYSQL QUERY RULES TO DISK;
   ```

### Centreon

Une fois le serveur ProxySQL correctement configuré, modifiez la configuration de Centreon afin de faire passer toutes les requêtes par ProxySQL :

1. Faites une sauvegarde du fichier **/etc/centreon/centreon.conf.php**.

2. Ouvrez le fichier **/etc/centreon/centreon.conf.php**, puis modifiez l'adresse des bases de données ainsi que le port de connexion.

   ```shell
   $conf_centreon['hostCentreon'] = ip_serveur_proxy;
   $conf_centreon['hostCentstorage'] = ip_serveur_proxy;
   $conf_centreon['port'] = "6033";
   ```

Exemple :

   ```shell
   $conf_centreon['hostCentreon'] = "127.0.0.1";
   $conf_centreon['hostCentstorage'] = "127.0.0.1";
   $conf_centreon['port'] = "6033";
   ```
