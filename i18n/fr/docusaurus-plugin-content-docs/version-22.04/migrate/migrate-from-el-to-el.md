---
id: migrate-from-el-to-el
title: Migrer depuis un OS de type EL vers un autre OS de type EL (depuis un Centreon 18.10 ou plus récent)
---

## Prérequis

Cette procédure ne s'applique que dans les conditions suivantes :

- Vous souhaitez migrer d'un OS de type EL 64-bits vers un autre OS de type EL 64-bits supporté. Par exemple, vous souhaitez migrer d'un CentOS 7 à un Alma 8.
- Votre version de Centreon est 18.10 ou plus récente.

> En cas de migration d'une plateforme disposant du système de redondance
> Centreon, il est nécessaire de contacter le
> [support Centreon](https://centreon.force.com).

## Migrer un serveur central

### Étape 1 : Installer le nouveau serveur

1. Installez votre nouvel OS en suivant les [prérequis](../installation/prerequisites.md).

2. Installez un nouveau serveur central Centreon à partir des [paquets](../installation/installation-of-a-central-server/using-packages.md)
   jusqu'à terminer le processus d'installation en vous connectant à l'interface web.

   > Pendant le processus d'installation web, utilisez le même mot de passe pour l'utilisateur **centreon** que sur l'ancienne plateforme.

3. Réalisez les mises à jour logicielle et système :

```shell
dnf update
```

### Étape 2 : Synchroniser les données

1. Connectez-vous à votre ancien serveur Centreon.

2. Générez une paire de clés ssh pour **root** :

   ```shell
   ssh-keygen -t rsa
   ```

3. Copiez la clé publique de **root** (**/root/.ssh/id_rsa.pub**) dans le fichier **/root/.ssh/authorized_keys** du nouveau serveur. Si vous n'utilisez pas le compte **root** pour la synchronisation, assurez-vous que votre utilisateur dispose de droits d'écriture sur le dossier cible.

4. Synchronisez les répertoires suivants :

   ```shell
   rsync -avz /etc/centreon root@<IP_NOUVEAU_CENTREON>:/etc
   rsync -avz /etc/centreon-broker root@<IP_NOUVEAU_CENTREON>:/etc
   rsync -avz /var/log/centreon-engine/archives/ root@<IP_NOUVEAU_CENTREON>:/var/log/centreon-engine
   rsync -avz --exclude centcore/ --exclude log/ /var/lib/centreon root@<IP_NOUVEAU_CENTREON>:/var/lib
   ```

   > Remplacez **\<IP_NOUVEAU_CENTREON\>** par l'adresse IP de votre nouveau serveur Centreon.

### Étape 3 : Récupérer les bases de données

1. Sur l'ancien serveur, faitez un dump des bases de données :

   ```shell
   mysqldump -u root -p centreon > /tmp/centreon.sql
   mysqldump -u root -p centreon_storage > /tmp/centreon_storage.sql
   ```

2. Sur l'ancien serveur, arrêtez MariaDB :

   ```shell
   service mysqld stop
   ```

3. Depuis l'ancien serveur, exportez les dumps vers le nouveau serveur de base de données (assurez-vous d'avoir assez d'espace):

   ```shell
   rsync -avz /tmp/centreon.sql root@<IP_NOUVEAU_CENTREON>:/tmp/
   rsync -avz /tmp/centreon_storage.sql root@<IP_NOUVEAU_CENTREON>:/tmp/
   ```

4. Sur le nouveau serveur de base de données, supprimez les bases de
   données vierges et recréez-les :

   ```shell
   mysql -u root -p
   ```

   ```SQL
   DROP DATABASE centreon;
   DROP DATABASE centreon_storage;
   CREATE DATABASE centreon;
   CREATE DATABASE centreon_storage;
   ```

5. Sur le nouveau serveur de bases de données, importez dans la base les dumps précédemment transférés :

   ```shell
   mysql -u root centreon -p </tmp/centreon.sql
   mysql -u root centreon_storage -p </tmp/centreon_storage.sql
   ```

6. Exécutez l'upgrade des tables :

   ```shell
   mysql_upgrade
   ```

   Si votre base de données est protégée par mot de passe, entrez :

   ```shell
   mysql_upgrade -u <utilisateur_admin_bdd> -p
   ```

   Exemple : si votre utilisateur_admin_bdd est `root`, entrez:

   ```shell
   mysql_upgrade -u root -p
   ```

7. Démarrez le processus **mariadb** sur le nouveau serveur :

   ```shell
   systemctl start mariadb
   ```

> Remplacez **\<IP_NOUVEAU_CENTREON\>** par l'adresse IP de votre nouveau serveur
> Centreon.

### Étape 4 : Synchroniser les plugins

Si vous n'utilisez que des plugins Centreon, réinstallez-les sur le nouveau serveur:

```shell
yum install centreon-plugin-\*
```

Si vous utilisez vos propres plugins personnalisés, synchronisez les répertoires qui contiennent ceux-ci, ainsi que toutes éventuelles dépendances.

### Étape 5 : Montée de version de la solution Centreon

1. Sur le nouveau serveur, forcez la montée de version en déplacant le contenu du répertoire
   **/var/lib/centreon/installs/install-22.04.0-YYYYMMDD_HHMMSS** dans le
   répertoire **/usr/share/centreon/www/install** :

   ```shell
   cd /var/lib/centreon/installs/
   mv install-22.04.0-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/
   ```

2. Si vous utilisez la meme adresse IP ou le même nom DNS entre l'ancien serveur
   web Centreon et le nouveau, videz complètement le cache de votre navigateur pour
   éviter des problemes de scripts JS.

3. Connectez-vous à l'URL `http://<IP_NEW_CENTREON>/centreon` et suivez les étapes
   de la mise à jour.

4. Si vous avez modifié le mot de passe de l'utilisateur **centreon** lors de
   l'installation de votre nouveau serveur Centreon pour accéder aux bases de
   données, il sera nécessaire de réaliser les actions suivantes sur le nouveau
   serveur Centreon :

   1. Modifiez le fichier **/etc/centreon/centreon.conf.php**,
   2. Modifiez le fichier **/etc/centreon/conf.pm**,
   3. Éditez la configuration du Centreon Broker central, via l'interface web
      Centreon et modifiez le mot de passe pour les deux outputs Broker **Perfdata
      generator** et **Broker SQL database**,
   4. Modifiez le fichier **/etc/centreon/config.d/10-database.yaml**.

5. Si l'adresse IP de votre serveur Centreon a changé, éditez la configuration de
   l'ensemble des modules Broker de vos collecteurs et modifiez l'adresse IP de
   connexion au serveur Centreon central (output IPv4). Consultez le chapitre
   [Configuration
   avancée](../monitoring/monitoring-servers/advanced-configuration.md#tcp-outputs)
   pour plus d'information.

6. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) de tous vos serveurs de supervision (y compris celle du central).

7. Redémarrez les processus suivants :

   ```shell
   systemctl restart cbd centengine
   systemctl restart gorgoned
   systemctl start snmptrapd centreontrapd
   systemctl start snmpd
   ```

### Étape 6 (anciennes versions uniquement): Migrer vers Gorgone

Si vous migrez depuis un Centreon 18.10, 19.04 ou 19.10, vous devez également [migrer de Centcore à Gorgone](../developer/developer-gorgone-migrate-from-centcore.md).

### Étape 7: Mettre à jour les modules

Pour mettre à jour les modules, allez à la page **Administration > Extensions > Gestionnaire** et cliquez sur **Update all**.
Si vous avez un serveur MAP ou MBI, suivez les procédures de migration correspondantes :

- Procédure de migration pour [MAP](../graph-views/migrate.md),
- Procédure de migration pour [MBI](../reporting/migrate.md).

## Migrer un serveur distant

Pour migrer un serveur distant :

1. Suivez la même procédure que pour un serveur central.
2. [Rattachez le nouveau serveur distant](../monitoring/monitoring-servers/add-a-remote-server-to-configuration.md) à votre serveur central.

## Migrer un collecteur

Pour migrer un collecteur :

1. Effectuez les étapes 1 et 4 de la procédure de migration d'un serveur central (c'est-à-dire [installer le nouveau serveur](#étape-1--installer-le-nouveau-serveur) et [synchronisez les plugins](#étape-4--synchroniser-les-plugins)).
2. [Rattachez le nouveu collecteur](../monitoring/monitoring-servers/add-a-poller-to-configuration.md) à un serveur distant ou bien directement au serveur central.
