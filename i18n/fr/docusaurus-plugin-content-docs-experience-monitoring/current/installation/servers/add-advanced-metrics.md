---
id: add-advanced-metrics
description: Installer des agents d'application pour Apache, MySQL, Redis, et plus
title: Installer des agents d'application
--- 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Les agents d'application vous permettent de collecter des données système à partir de divers composants de votre infrastructure, tels qu'Apache, MySQL, Redis, Varnish, PostgreSQL, etc. Les données collectées s'afficheront dans des onglets dédiés sur la page **Données système**.

## Prérequis

> Avant d'installer les agents d'application, vous devez installer l'[agent système](./install-system-agents.md).

## Apache

1. Installez le paquet.

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-apache
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-apache
    ```

   </TabItem>
   </Tabs>

2. Vérifiez que le module de statut (module **mod_status** d'Apache) est correctement configuré sur votre serveur à l'aide de la commande suivante :

    ```shell
    curl http://127.0.0.1/server-status
    ```

3. Si ce n'est pas le cas, vous devrez [activer le module **mod_status** dans Apache](https://httpd.apache.org/docs/current/en/mod/mod_status.html).
4. Si vous souhaitez modifier l'URL utilisée par notre module, vous pouvez modifier le fichier suivant :

   ```shell
   /etc/quanta/modules.d/apache.yml
   ```

5. Redémarrez l’agent :

    ```bash
    systemctl restart quanta-agent
    ```

   Un onglet **Apache** contenant des métriques devrait apparaître sur la page **Données système** au bout de quelques minutes. Si ce n’est pas le cas, vérifiez les logs à l’aide de la commande **journalctl**.

## MySQL

1. Installez le paquet :

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-mysql
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-mysql
    ```

   </TabItem>
   </Tabs>

2. Nous vous recommandons de créer un utilisateur MySQL dédié à notre sonde, bien que cela ne soit pas obligatoire. Utilisez par exemple la commande ci-dessous :

    ```bash
    echo « CREATE USER quanta@localhost IDENTIFIED BY “XXXXX”; » | mysql -u root -p
    ```

3. Saisissez le nom d'utilisateur et le mot de passe que vous avez choisis dans le fichier suivant :

    ```shell
    /etc/quanta/modules.d/mysqlstat.yml
    ```

4. Redémarrez l'agent :

    ```bash
    systemctl restart quanta-agent
    ```

   Un onglet **MySQL** contenant les métriques devrait apparaître sur la page **Données système** au bout de quelques minutes. Si ce n'est pas le cas, vérifiez les logs à l'aide de la commande **journalctl**.

## PostgreSQL

1. Installez le paquet :

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-postgresql
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-postgresql
    ```

   </TabItem>
   </Tabs>

2. Nous vous recommandons de créer un utilisateur PostgreSQL dédié à notre sonde, bien que cela ne soit pas obligatoire. Utilisez par exemple la commande ci-dessous :

    ```bash
    echo « CREATE ROLE quanta LOGIN password “XXXXX”; » | sudo -u postgres psql postgres
    ```

3. Saisissez le nom d'utilisateur et le mot de passe que vous avez choisis dans le fichier suivant :

   ```shell
   /etc/quanta/modules.d/postgresql.yml.
   ```

4. Redémarrez l’agent :

    ```bash
    systemctl restart quanta-agent
    ```

   Un onglet **PostgreSQL** contenant des métriques devrait apparaître sur la page **Données système** au bout de quelques minutes. Si ce n’est pas le cas, vérifiez les logs à l’aide de la commande **journalctl**.

## Nginx

1. Installez le paquet :

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-nginx
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-nginx
    ```

   </TabItem>
   </Tabs>

2. Vérifiez que le module de statut est correctement configuré sur votre serveur à l'aide de la commande suivante :

    ```bash
    curl http://127.0.0.1/status
    ```

3. Si ce n'est pas le cas, vous devrez définir la configuration appropriée comme [décrit ici](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html).

4. Si vous souhaitez modifier l'URL utilisée par notre module, vous pouvez éditer le fichier suivant :

   ```shell
   /etc/quanta/modules.d/nginx.yml
   ```

5. Redémarrez l’agent :

    ```bash
    systemctl restart quanta-agent
    ```

   Un onglet **Nginx** contenant des métriques devrait apparaître sur la page **Données système** au bout de quelques minutes. Si ce n’est pas le cas, vérifiez les logs à l’aide de la commande **journalctl**.

## Varnish

1. Installez le paquet :

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-varnish
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-varnish
    ```

   </TabItem>
   </Tabs>

2. Si vous utilisez plusieurs instances de Varnish, précisez vers quelle instance vous souhaitez envoyer les données à Centreon Experience Monitoring en ajoutant les lignes suivantes à la fin du fichier **/etc/quanta/modules.d/varnish.yml** :

    ```bash
    varnish:
        instance: nom_de_votre_instance
    ```

3. Redémarrez l’agent :

    ```bash
    systemctl restart quanta-agent
    ```

   Un onglet **Varnish** contenant des métriques devrait apparaître sur la page **Données système** au bout de quelques minutes. Si ce n’est pas le cas, consultez les logs à l’aide de la commande **journalctl** et reportez-vous aux informations de dépannage ci-dessous.

### Dépannage de Varnish

**J'ai installé Varnish sur mon serveur ainsi que le module Varnish, mais je ne vois aucune donnée. Comment puis-je résoudre ce problème ?**

Il est probable que votre instance Varnish ne soit pas celle par défaut, ce qui signifie que vous utilisez l'option -n `nom` pour démarrer Varnish et pour les commandes d'administration.
Si tel est le cas, ajoutez simplement la configuration suivante dans **/etc/quanta/modules.d/varnish.yml** :

```shell
varnish:
instance: nom_de_votre_instance
```

## Redis

1. Installez le paquet :

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-redis
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-redis
    ```

   </TabItem>
   </Tabs>

2. Si vous n'utilisez pas le port par défaut (6379), modifiez le fichier suivant :

   ```shell
   /etc/quanta/modules.d/redis.yml
   ```

3. Si vous utilisez l’authentification Redis, décommentez la ligne et saisissez le mot de passe dans le fichier **/etc/quanta/modules.d/redis.yml** :

    ```bash
    auth: password
    ```

4. Si vous utilisez plusieurs instances Redis, précisez l’instance vers laquelle vous souhaitez envoyer les données à Experience Monitoring en ajoutant les lignes suivantes à la fin du fichier **/etc/quanta/modules.d/redis.yml** :

    ```bash
    instance: nom_de_votre_instance
    ```

5. Redémarrez l’agent :

    ```bash
    systemctl restart quanta-agent
    ```

   Un onglet **Redis** contenant des métriques devrait apparaître sur la page **Données système** au bout de quelques minutes. Si ce n'est pas le cas, vérifiez les logs à l'aide de la commande **journalctl**.

## Memcached

1. Installez le paquet :

   <Tabs groupId="os">
   <TabItem value="Debian" label="Debian">

    ```bash
    apt-get install quanta-agent-memcached
    ```

   </TabItem>
   <TabItem value="CentOS" label="CentOS">

    ```bash
    yum install quanta-agent-memcached
    ```

   </TabItem>
   </Tabs>

2. Si vous n'utilisez pas le port par défaut (11211), modifiez le fichier suivant :

   ```shell
   /etc/quanta/modules.d/memcached.yml
   ```

3. Redémarrez l’agent :

    ```bash
    systemctl restart quanta-agent
    ```

   Un onglet **Memcached** contenant des métriques devrait apparaître sur la page **Données système** au bout de quelques minutes. Si ce n’est pas le cas, vérifiez les logs à l’aide de la commande **journalctl**.

## Adaptation aux services gérés/cloud

Certains fournisseurs de cloud proposent des services gérés — par exemple, AWS fournit RDS et ElastiCache pour les bases de données et la mise en cache gérées. Ces services gérés sont généralement fournis sous forme de « boîte noire » et ne vous permettent pas d’installer de paquets sur leurs instances.

Pour contourner cette limitation, installez un agent sur une autre instance que vous contrôlez (par exemple, un serveur front) et configurez-le pour qu’il supervise le service géré distant en le pointant vers l’adresse IP et le port du service.

Par exemple, pour RDS, vous pouvez déployer l’agent `quanta-agent-mysql` (voir le [guide standard](install-system-agents.md)) et modifier le fichier de configuration de l’agent `/etc/quanta/modules.d/mysqlstat.yml` afin de spécifier l’hôte et le port du service géré (adresse IP et port).

Si vous utilisez plusieurs instances ElastiCache ou équivalentes (plusieurs types de cache et de magasins de sessions), vous pouvez configurer l’agent Redis (ou Memcached) pour qu’il cible les différents backends.
