---
id: map-web-backup-restore
title: Sauvegarder et restaurer votre serveur Centreon MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Sauvegarder votre serveur MAP

### Éléments sauvegardés

Les éléments sauvegardés sont :

- Les fichiers de configuration (**/etc/centreon-map**)
- La base de données **centreon\_map**

### Comment ça marche ?

Le script de sauvegarde est exécuté quotidiennement (2 heures du matin) avec une tâche cron située dans **/etc/cron.d/centreon-map-server-backup** :

```text
#
# Cron to backup Centreon MAP server
#
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# rewrite file with new cron line
CRONTAB_EXEC_USER=""

0 2 * * * root bash /usr/share/centreon-map-server/bin/centreon-map-server-backup.sh >> /var/log/centreon-studio/backup.log 2>&1
```

La sauvegarde **centreon-map-server-yyyy-mm-dd.tar.gz** est stockée dans **BACKUP\_DIR**, qui est défini dans le fichier de configuration.

### Paramètres de sauvegarde

Les paramètres de sauvegarde sont enregistrés dans **/etc/centreon-map/backup.conf**.

- ENABLE : activer/désactiver le mécanisme de sauvegarde (valeur par défaut : 0)
- BACKUP\_DIR : emplacement où la sauvegarde est stockée (valeur par défaut : /var/cache/centreon-map/backup)
- RETENTION\_AGE : rétention de la sauvegarde en jours (valeur par défaut : 8)

> **Nous conseillons d'exporter les sauvegardes vers un autre serveur que votre serveur Centreon afin de les sécuriser.**

## Restaurer les données du serveur Centreon MAP

Le processus de restauration est divisé en plusieurs étapes :

- Extraction de la sauvegarde
- Restauration des fichiers de configuration
- Restauration de la base de données

> **Nous supposons que vous avez suivi la procédure d'installation du serveur Centreon MAP pour obtenir une nouvelle installation.**

### Extraire la sauvegarde

Récupérez la dernière sauvegarde **centreon-map-server-yyyy-mm-dd.tar.gz** et extrayez-la dans le répertoire **/tmp** :

```shell
cd /tmp
tar xzf centreon-map-server-yyyy-mm-dd.tar.gz
```

### Restaurer les fichiers de configuration

Pour restaurer les fichiers de configuration, exécutez la commande suivante :

```shell
cp -R etc/centreon-map/* /etc/centreon-map/
```

### Restaurer la base de données

Pour restaurer la base de données **centreon\_map**, exécutez la commande suivante :

```shell
systemctl stop centreon-map-engine
mysql -h <db_host> -u <db_user> -p<db_password> <centreon_map> < centreon-map-server.dump
systemctl start centreon-map-engine
```
