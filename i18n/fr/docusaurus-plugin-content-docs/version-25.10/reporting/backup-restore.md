---
id: backup-restore
title: Sauvegarde et restauration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Sauvegarde de Centreon MBI

La sauvegarde Centreon MBI déclenche des crons pour sauvegarder tous vos fichiers :

- sur votre Central pour sauvegarder le module MBI, tous vos rapports et la base de données contenant la configuration ETL.
- sur votre serveur MBI pour sauvegarder l'entrepôt de données MBI, vos bases de données, les fichiers de configuration CBI et les fichiers BIRT.

> Chaque script de sauvegarde utilise un mécanisme de purge pour supprimer les anciennes données.

### Sauvegarde de votre serveur Central

#### Éléments à sauvegarder

- Rapports générés (fichiers PDF, docx, xlsx ou autres formats).
- Dumps SQL (dump_centreon.sql, dump_centreon_storage.sql) représentant l'intégralité de la configuration de vos modules MBI sur votre serveur Central.

#### Fréquence de sauvegarde

- Quotidienne
- Rotation des purges : 8 jours.

#### Fonctionnement du script de sauvegarde

Le script de sauvegarde est exécuté quotidiennement à l'aide d'une tâche cron située dans:
```/etc/cron.d/centreon-bi-interface-crons```:

```
#
# Cron to backup Centreon BI Engine frontend module
#
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# rewrite file with new cron line
CRONTAB_EXEC_USER=""

0 12 * * * root bash /usr/share/centreon-bi-backup/centreon-bi-backup-web.sh >> /var/log/centreon/centreon-bi-backup-web.log 2>&1

0 3 * * * root /usr/bin/php -q /usr/share/centreon/www/modules/centreon-bi-server/tools/purgeArchivesFiles.php >> /var/log/centreon/centreon-bi-archive-retention.log 2>&1
```

Le format de sauvegarde est
```centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz```

Par défaut, les sauvegardes sont enregistrées dans « /var/backup ». Pour modifier ce dossier, mettez à jour la valeur « BACKUP_DIR » dans le script de sauvegarde (ligne **63**) situé ici :
```/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh```

Par défaut, la rétention est définie sur 8 jours. Pour modifier cette valeur, mettez à jour « RETENTION_AGE » dans le script de sauvegarde (ligne **67**) situé ici :
```/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh```

> **Remarques**
>
> - Nous vous conseillons d'exporter les sauvegardes vers une autre ressource afin de les sécuriser.
>  
> - Le script « /usr/share/centreon/www/modules/centreon-bi-server/tools/purgeArchivesFiles.php » vérifie la configuration de la rétention et supprime les anciens rapports (36 mois par défaut).

### Sauvegarde du serveur de reporting dédié

> Il est important de disposer d'au moins 5 Go d'espace libre sur le
> **Volume Group** hébergeant l'espace de stockage **data** du SGBD
> MariaDB/MySQL. Pour cela, exécuter la commande suivante en renseignant
> le nom du **Volume Group** :
>
> ```vgdisplay vg_data | grep -i free```


#### Éléments sauvegardés

- Fichiers de configuration (configuration mariadb).
- Données agrégées (tout votre dossier datadir, ex : /var/lib/mysql).
- Rapports et ressources rptidesign/rptlibrary et paramètres XML.

#### Fréquence de sauvegarde

- Quotidienne
- Rotation : 8 jours.

#### Fonctionnement du script de sauvegarde sur un serveur central

Le script de sauvegarde est exécuté de manière journalière via un cron
défini dans le fichier
**/etc/cron.d/centreon-bi-backup-reporting-server** :

```
    #
    # Cron to backup Centreon MBI Engine server
    #
    PATH=/sbin:/bin:/usr/sbin:/usr/bin

    # rewrite file with new cron line
    CRONTAB_EXEC_USER=""

    30 12 * * 0 root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --total >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log 2>&1
    30 12 * * 1-6 root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --totalincr >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log 2>&1
    0 12 * * * root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --centreonbifiles >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-files.log 2>&1
```

Trois types de sauvegarde sont exécutés chaque semaine :

- Sauvegarde quotidienne des fichiers de configuration du moteur de génération de rapports. Format : « centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz »
- Sauvegarde ETL complète tous les dimanches. Format : « mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz »
- Sauvegarde ETL incrémentielle du lundi au samedi (toutes les tables et uniquement la dernière partition des tables partitionnées). Format : « mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz »

Par défaut, les sauvegardes sont enregistrées dans « /var/backup ». Pour modifier ce dossier, mettez à jour la valeur « BACKUP_DIR » dans le script de sauvegarde (ligne **83**) situé ici :
```/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh```

Par défaut, la rétention des sauvegarde est configurée sur 8 jours. Pour modifier cette valeur, mettez à jour **RETENTION_AGE** dans le script de sauvegarde (ligne **88**) situé ici :
```/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh```

> **Important**
>
> - Bien s'assurer que pendant la sauvegarde du serveur de reporting, les
> scripts ETL ne soient pas en cours d'exécution. De plus, aucun
> rapport ne doit être en cours de génération.
> - Nous vous conseillons d'exporter les sauvegardes vers un autre serveur pour une sécurité accrue.
> Il est important d'exporter les sauvegardes sur une autre machine
> afin d'assurer leurs pérennités.


## Restauration de Centreon MBI

### Restauration des données de configuration sur le Central

Le processus de restauration comprend plusieurs étapes :

- Réinstallation du module **centreon-bi-server** dans une version
  identique à celle sauvegardée.
- Intégration des anciens rapports générés.
- Intégration des paramètres de rapports personnalisés.
- Intégration des données de configuration Centreon MBI.
- Intégration des données MariaDB/MySQL.
- Supprimer les données extraites de la sauvegarde.
- Réinstaller la sauvegarde.

#### Réinstallation du module web Centreon MBI

Sur le serveur central Centreon, lancer la commande :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-bi-server-x.y.z
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-bi-server-x.y.z
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

IInstallez **gpg** :

```shell
apt install gpg
```

Importez la clé du dépôt :

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

Puis installez Centreon MBI :

```shell
apt update && apt install centreon-bi-server-x.y.z
```

</TabItem>
</Tabs>

#### Intégrer les rapports générés

Prenez la dernière sauvegarde de « centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz » et extrayez-la dans le répertoire « /tmp » :

> **Remarques** : Par défaut, le dossier de sauvegarde utilisé est /var/backup. Modifiez le dossier dans la commande ci-dessous si nécessaire.

```
tar xzf /var/backup/centreon-bi-front-reports-and-custom-conf-YYYY-MM-DD.tar.gz -C /tmp
```

Copiez ensuite les rapports sauvegardés :

```
cp -rf /tmp/var/lib/centreon/centreon-bi-server/archives/* /var/lib/centreon/centreon-bi-server/archives
```

> Si le répertoire est différent de celui prévu, vous devez modifier les paramètres par défaut. Spécifiez simplement le chemin correct.

Modifiez les droits d'accès aux fichiers :

```
chown -R centreonBI:centreonBI /var/lib/centreon/centreon-bi-server/archives
```

#### Intégrer les paramètres de rapport personnalisés (facultatif)

Copiez les paramètres enregistrés :

```
cp -rf /tmp/usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl/* /usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl
```

et

```
cp -rf /tmp/var/lib/centreon/centreon-bi-server/reports/infos/* /var/lib/centreon/centreon-bi-server/reports/infos
```

Modifiez les droits d'accès aux fichiers :

```
chown -R apache:apache /usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl
```

#### Intégrer les données de configuration de Centreon MBI

Importer la sauvegarde SQL à l'aide de la commande :

```
mysql -u root -p centreon_storage < /tmp/var/backup/dump_centreon_storage.sql
```

#### Supprimer les données extraites de la sauvegarde

Supprimer les données extraites via les commandes suivantes ::

```
cd /tmp
rm -Rf /tmp/usr
rm -Rf /tmp/var
```

### Restauration des paramètres du serveur de reporting Centreon MBI

Le processus de restauration comprend plusieurs étapes :

- Réinstallation du module **centreon-bi-reporting-server** dans une
    version identique à celle sauvegardée.
- Intégration de la configuration du moteur CBIS.
- Intégration des modèles de rapports personnalisés.
- Intégration des données.
- Redémarrer le moteur CBIS.
- Supprimer les données extraites de la sauvegarde.
- Réinstaller la sauvegarde.

> Si vous provisionnez un nouveau serveur, suivez les prérequis de configuration du serveur et installez le référentiel Centreon Business

#### Réinstallation du module Centreon MBI

Sur le serveur MBI, exécutez la commande suivante :

```
yum install centreon-bi-reporting-server-x.y.z
```

***x.y.z** correspond à la version exacte du module sauvegardé.*

Si votre version est à jour, exécutez simplement :

```
yum install centreon-bi-reporting-server
```
#### Intégration de la configuration CBIS

Prenez la dernière sauvegarde **centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz**
et extrayez-la dans le répertoire **/tmp** :

> **Remarques** : Par défaut, le dossier de sauvegarde utilisé est /var/backup. Modifiez le dossier dans la commande ci-dessous si nécessaire.

```
tar xzf /var/backup/centreon-bin-reports-and-conf-YYYY-MM-DD.tar.gz -C /tmp
```

Copiez ensuite les paramètres CBIS :

```
cp -rf /tmp/etc/centreon-bi/* /etc/centreon-bi
```

#### Intégration des paramètres des rapports personnalisés

Copiez ensuite les modèles de rapport :

```
cp -rf /tmp/usr/share/centreon-bi/reports/* /usr/share/centreon-bi/reports
chown -R centreonBI:centreonBI /usr/share/centreon-bi/reports
cp -rf /tmp/usr/share/centreon-bi/Resources/* /usr/share/centreon-bi/Resources
chown -R centreonBI:centreonBI /usr/share/centreon-bi/Resources
```

### Intégration des données MariaDB/MySQL

Arrêter le service MariaDB/MySQL :

```
systemctl stop mysql
```

Supprimer le répertoire */var/lib/mysql* du serveur de reporting :

```
rm -rf /var/lib/mysql
```

> **Remarque** : Si vous recevez le message d'erreur « rm: impossible de supprimer '/var/lib/mysql': Périphérique ou ressource occupée », vous devez démonter/monter la partition datadir.
```
umount /var/lib/mysql
rm -rf /var/lib/mysql/*
mount /var/lib/mysql
```

Extraire la dernière sauvegarde complète (créée par défaut le dimanche) :

```
tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /var/lib/mysql
```

Extraire toutes les sauvegardes incrémentielles créées entre la dernière sauvegarde complète et la date actuelle, de la plus ancienne à la plus récente, via la commande :

```
tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /var/lib/mysql
```

Modifier les droits sur le répertoire */var/lib/mysql* :

```
chown -R mysql:root /var/lib/mysql
```

Démarrer le service MariaDB/MySQL :

```
systemctl start mysql
```

#### Redémarrage du moteur CBIS

Redémarrez CBIS avec la commande :

```
systemctl restart cbis
Arrêt du planificateur Centreon MBI : cbis
Attente de la fermeture de cbis… terminé.
Démarrage du planificateur Centreon MBI : cbis
Service démarré…
```

#### Supprimer les données de la sauvegarde extraite

Supprimer les données extraites de la sauvegarde :

```
cd /tmp
rm -Rf /tmp/usr
rm -Rf /tmp/var
```