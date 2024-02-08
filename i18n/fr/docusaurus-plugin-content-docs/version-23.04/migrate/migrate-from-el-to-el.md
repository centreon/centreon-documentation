---
id: migrate-from-el-to-el
title: Migrer depuis un OS de type EL vers un autre OS de type EL (depuis un Centreon 18.10 ou plus récent)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prérequis

Cette procédure ne s'applique que dans les conditions suivantes :

- Vous souhaitez migrer d'un OS de type EL 64-bits vers un autre OS de type EL 64-bits supporté. Par exemple, vous souhaitez migrer d'un CentOS 7 à un Alma 8 ou 9.
- Votre version de Centreon est 18.10 ou plus récente.

Tous les serveurs de votre architecture (serveur central, serveurs distants et collecteurs) doivent avoir la même version majeure de Centreon. Il est également recommandé d'avoir la même version mineure.

> En cas de migration d'une plateforme disposant du système de redondance
> Centreon, il est nécessaire de contacter le
> [support Centreon](https://support.centreon.com).

## Migrer une plateforme

### Étape 1 : Installer le nouveau serveur central

1. Installez votre nouvel OS: voir la liste des [OS supportés](../installation/compatibility.md#système-dexploitation).

2. Installez un nouveau serveur central Centreon à partir des [paquets](../installation/installation-of-a-central-server/using-packages.md)
   jusqu'à terminer le processus d'installation en vous connectant à l'interface web.

   > Pendant le processus d'installation web, utilisez le même mot de passe pour l'utilisateur **centreon** que sur l'ancienne plateforme.

3. Réalisez les mises à jour logicielle et système :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update
```

</TabItem>
</Tabs>

### Étape 2 : Synchroniser les données

1. Connectez-vous à votre ancien serveur Centreon.

2. Générez une paire de clés ssh pour **root** :

   ```shell
   ssh-keygen -t rsa
   ```

   Par défaut, la paire de clés générée sera **/root/.ssh/id_rsa.pub** et **/root/.ssh/id_rsa**.

3. Copiez la clé publique de **root** (**/root/.ssh/id_rsa.pub**) dans le fichier **/root/.ssh/authorized_keys** du nouveau serveur. Si vous n'utilisez pas le compte **root** pour la synchronisation, assurez-vous que votre utilisateur dispose de droits d'écriture sur le dossier cible.

4. Depuis l'ancien serveur, synchronisez les répertoires suivants vers le nouveau serveur :

   ```shell
   rsync -avz /etc/centreon root@<IP_NOUVEAU_CENTREON>:/etc
   rsync -avz /etc/centreon-broker root@<IP_NOUVEAU_CENTREON>:/etc
   rsync -avz /var/log/centreon-engine/archives/ root@<IP_NOUVEAU_CENTREON>:/var/log/centreon-engine
   rsync -avz --exclude centcore/ --exclude log/ /var/lib/centreon root@<IP_NOUVEAU_CENTREON>:/var/lib
   rsync -avz /usr/share/centreon/www/img/media root@<IP_NEW_CENTREON>:/usr/share/centreon/www/img
   ```

  Si vous avez personnalisé le nom de votre fichier de clé privée, utilisez le format suivant (remplacez **id_rsa_custom** par le nom de votre fichier, et `<commande>` par les commandes ci-dessus):

   ```shell
   rsync -avz -e "ssh -i /root/.ssh/id_rsa_custom" <commande>
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
   systemctl stop mariadb
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

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-plugin-\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-plugin-\*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install centreon-plugin-\*
```

</TabItem>
</Tabs>

Si vous utilisez vos propres plugins personnalisés, synchronisez les répertoires qui contiennent ceux-ci, ainsi que toutes éventuelles dépendances.

### Étape 5 : Montée de version de la solution Centreon

1. Sur le nouveau serveur, forcez la montée de version en déplacant le contenu du répertoire
   **/var/lib/centreon/installs/install-23.04.x-YYYYMMDD_HHMMSS** dans le
   répertoire **/usr/share/centreon/www/install** (**x** est le numéro de version cible pour votre machine migrée):

   ```shell
   cd /var/lib/centreon/installs/
   mv install-23.04.x-YYYYMMDD_HHMMSS/ /usr/share/centreon/www/install/
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
      Centreon et modifiez le mot de passe pour l'output **unfied-sql**,
   4. Modifiez le fichier **/etc/centreon/config.d/10-database.yaml**.

5. Si l'adresse IP de votre serveur Centreon a changé :
   - Éditez la configuration de l'ensemble des modules Broker de vos collecteurs et modifiez l'adresse IP de
   connexion au serveur Centreon central (output IPv4). Consultez le chapitre
   [Configuration
   avancée](../monitoring/monitoring-servers/advanced-configuration.md#tcp-outputs)
   pour plus d'information.
   - L'empreinte de votre plateforme a également changé : [contactez Centreon](mailto:support@centreon.com) pour obtenir une nouvelle licence.

6. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) de tous vos serveurs de supervision (y compris celle du central).

7. Redémarrez les processus suivants :

   ```shell
   systemctl restart cbd centengine
   systemctl restart gorgoned
   systemctl start snmptrapd centreontrapd
   systemctl start snmpd
   ```

8. Si vous supervisiez votre ancienne machine Centreon, et que vous avez changé le nom d'utilisateur/mot de passe de la base pendant la migration, mettez à jour la configuration des ressources concernées (hôte, services dépendant de cet hôte).

9. Allez à la page **Configuration > Gestionnaire de connecteurs de supervision**, puis [mettez à jour tous les connecteurs de supervision](../monitoring/pluginpacks.md#mettre-à-jour-un-ou-plusieurs-packs).

### Étape 6 (anciennes versions uniquement): Migrer vers Gorgone

Si vous migrez depuis un Centreon 18.10, 19.04 ou 19.10, vous devez également [migrer de Centcore à Gorgone](../developer/developer-gorgone-migrate-from-centcore.md).

### Étape 7: Mettre à jour les modules

Pour mettre à jour les modules, allez à la page **Administration > Extensions > Gestionnaire** et cliquez sur **Update all**.
Si vous avez un serveur MAP ou MBI, suivez les procédures de migration correspondantes :

- Procédure de migration pour [MAP](../graph-views/migrate.md),
- Procédure de migration pour [MBI](../reporting/migrate.md).

### Étape 8: Migrer vos autres serveurs (architecture distribuée)

#### Migrer un serveur distant

Pour migrer un serveur distant :

1. Suivez la même procédure que pour un serveur central.
2. [Rattachez le nouveau serveur distant](../monitoring/monitoring-servers/add-a-remote-server-to-configuration.md) à votre serveur central.

#### Migrer un collecteur

Pour migrer un collecteur :

1. [Installez un nouveau collecteur](../installation/installation-of-a-poller/using-packages.md).
2. Synchronisez les plugins, comme décrit à [l'étape 4 de la procédure de migration pour un serveur central](#étape-4--synchroniser-les-plugins).
3. Sur le serveur central, allez à la page **Configuration > Collecteurs**. Sélectionnez le collecteur migré et mettez à jour son adresse IP (si celle-ci a changé).
4. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).
5. Si votre collecteur rencontre des problèmes suite à la migration (impossible de déployer la configuration, d'effectuer des actions de supervision...), mettez à jour l'empreinte du collecteur comme décrit dans [cet article de base de connaissances](https://thewatch.centreon.com/troubleshooting-41/poller-does-not-work-after-migration-or-reinstallation-fingerprint-changed-for-target-1177).
