---
id: backup-restore
title: Sauvegarder et restaurer MBI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Lorsque vous installez Centreon MBI, des crons sont automatiquement installés pour sauvegarder tous vos fichiers, un sur le serveur central et un sur le serveur MBI.
Chaque cron sauvegarde les données stockées sur chaque serveur. En fonction du problème rencontré, vous pourrez restaurer le composant concerné (module MBI sur le serveur central, serveur MBI ou données ETL...).

Chaque script de sauvegarde utilise un mécanisme de purge pour supprimer les anciennes données de sauvegarde.

## Sauvegarde de votre serveur Central

### Éléments sauvegardés

- Rapports générés (fichiers PDF, docx, xlsx ou autres formats).
- La configuration complète de votre module MBI stockée sur votre serveur central (tables MBI dans 2 dumps SQL : **dump_centreon.sql**, **dump_centreon_storage.sql**).

### Fréquence de sauvegarde

- Quotidienne
- Les anciennes sauvegardes sont supprimées après 8 jours.

### Fonctionnement du script de sauvegarde sur le serveur central

Le script de sauvegarde est exécuté quotidiennement à l'aide d'une tâche cron située sur votre serveur central, dans : **/etc/cron.d/centreon-bi-interface-crons** :

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

Les fichiers générés respectent le format de nommage suivant : **centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz**.

Le script de sauvegarde lui-même est stocké ici : **/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh**. Vous pouvez modifier certains paramètres si vous le souhaitez :

| Paramètre| Valeur par défaut | À modifier dans le script |
|---|---|---|
| Emplacement de la sauvegarde | **/var/backup** | **BACKUP_DIR**, ligne 63 |
| Durée de conservation | 8 jours | **RETENTION_AGE**, ligne 67 |

> Nous vous recommandons d'exporter les sauvegardes vers un autre serveur afin de les sécuriser.

Chaque jour, le script **/usr/share/centreon/www/modules/centreon-bi-server/tools/purgeArchivesFiles.php** vérifie les paramètres de conservation et supprime les rapports plus anciens que cette durée (36 mois par défaut).

## Sauvegarde du serveur MBI

> Pour que la sauvegarde s'exécute correctement, il est important de disposer d'au moins 5 Go d'espace libre sur le **Volume Group** hébergeant la base de données MBI. Pour vérifier votre espace libre, exécutez la commande suivante (entrez le nom du **Volume Group**) :
>
> ```vgdisplay vg_data | grep -i free```

### Éléments sauvegardés

<!-- Fichiers de configuration de base de données.-->
- Toutes les données agrégées par l'ETL (le contenu de votre dossier datadir, par défaut : **/var/lib/mysql**).
- Les modèles de rapports et la bibliothèque de rapports, ainsi que les paramètres XML correspondants.

### Fréquence de sauvegarde

- Quotidienne
- Les anciennes sauvegardes sont supprimées après 8 jours.

### Fonctionnement du script de sauvegarde sur le serveur MBI

Le script de sauvegarde est exécuté quotidiennement à l'aide d'une tâche cron située sur le serveur MBI, dans **/etc/cron.d/centreon-bi-backup-reporting-server** :

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

Trois types de sauvegarde sont effectués chaque semaine :

- Une sauvegarde quotidienne des modèles de rapports et de la bibliothèque de rapports, ainsi que des fichiers de configuration du moteur de génération de rapports (cbis). Les fichiers générés respectent le format de nommage suivant : ```centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz```
- Chaque dimanche, une sauvegarde complète de toutes les données agrégées par l'ETL. Les fichiers générés respectent le format de nommage suivant  : ```mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz```
- Du lundi au samedi, une sauvegarde incrémentielle des données agrégées par l'ETL pour la veille (uniquement la dernière partition de chaque table partitionnée, plus toutes les tables non partitionnées). Les fichiers générés respectent le format de nommage suivant : ```mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz```


Le script de sauvegarde lui-même est stocké ici : **/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh**. Vous pouvez modifier certains paramètres si vous le souhaitez :

| Paramètre| Valeur par défaut | À modifier dans le script |
|---|---|---|
| Emplacement de la sauvegarde | **/var/backup** | **BACKUP_DIR**, ligne 83 |
| Durée de conservation | 8 jours | **RETENTION_AGE**, ligne 88 |

> Pendant la sauvegarde du serveur MBI, assurez-vous qu'aucun script ETL ni aucune tâche de rapport n'est en cours d'exécution.
> Nous vous recommandons d'exporter les sauvegardes vers un autre serveur afin de les sécuriser.

## Restauration de Centreon MBI

Si vous devez complètement réinstaller votre MBI à partir d'une sauvegarde, suivez ces étapes. Si vous devez seulement restaurer une partie de votre MBI, effectuez simplement l'étape correspondante.

### Restauration des données de configuration sur le serveur central

#### Réinstaller le module web Centreon MBI sur le serveur central dans la même version que celle utilisée précédemment

Voir [la procédure d'installation correspondante](installation.md#étape-2--installez-linterface-centreon-mbi-dans-lapplication-centreon).

#### Extraire votre sauvegarde dans votre dossier /tmp

Prenez la dernière sauvegarde **centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz** et extrayez-la dans le répertoire **/tmp** (par défaut, le dossier de sauvegarde utilisé est **/var/backup**, modifiez-le dans la commande ci-dessous si nécessaire) :

```shell
tar xzf /var/backup/centreon-bi-front-reports-and-custom-conf-YYYY-MM-DD.tar.gz -C /tmp
```

#### Restaurer les rapports générés

Copiez ensuite les rapports sauvegardés :

```
cp -rf /tmp/var/lib/centreon/centreon-bi-server/archives/* /var/lib/centreon/centreon-bi-server/archives
```

> Si le répertoire est différent de celui prévu, vous devez modifier les paramètres par défaut. Spécifiez simplement le chemin correct.

Modifiez les droits d'accès aux fichiers :

```
chown -R centreonBI:centreonBI /var/lib/centreon/centreon-bi-server/archives
```

#### Restaurer les modèles de rapports personnalisés et les bibliothèques (facultatif)

Cette étape ne s'applique que si vous utilisiez des modèles de rapports personnalisés. Copiez les paramètres enregistrés depuis votre dossier **/tmp** :

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

#### Restaurer les données du module MBI de Centreon

Importez la sauvegarde SQL à l'aide de la commande :

```
mysql -u root -p centreon_storage < /tmp/var/backup/dump_centreon_storage.sql
```

#### Supprimer les données extraites de la sauvegarde

Supprimez les données extraites à l'aide des commandes suivantes :

```
cd /tmp
rm -Rf /tmp/usr
rm -Rf /tmp/var
```

### Restaurer le serveur MBI

Le processus complet de restauration se divise en plusieurs étapes (vous pouvez ignorer celles qui ne s'appliquent pas à votre cas).

#### Réinstaller le module Centreon MBI dans la même version que celle utilisée précédemment

> Si vous provisionnez un nouveau serveur, suivez [la procédure d'installation correspondante](installation.md#étape-3--installez-le-serveur-de-reporting).

### Extraire votre sauvegarde dans votre dossier /tmp

Prenez la dernière sauvegarde **centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz** et extrayez-la dans le répertoire **/tmp** (par défaut, le dossier de sauvegarde utilisé est /var/backup, modifiez-le dans la commande ci-dessous si nécessaire) :

```
tar xzf /var/backup/centreon-bin-reports-and-conf-YYYY-MM-DD.tar.gz -C /tmp
```

#### Restaurer la configuration CBIS

Copiez ensuite les paramètres CBIS :

```
cp -rf /tmp/etc/centreon-bi/* /etc/centreon-bi
```

#### Restaurer les paramètres des rapports

Copiez ensuite les modèles de rapport :

```
cp -rf /tmp/usr/share/centreon-bi/reports/* /usr/share/centreon-bi/reports
chown -R centreonBI:centreonBI /usr/share/centreon-bi/reports
cp -rf /tmp/usr/share/centreon-bi/Resources/* /usr/share/centreon-bi/Resources
chown -R centreonBI:centreonBI /usr/share/centreon-bi/Resources
```

### Restaurer les données de la base

Arrêtez le service MariaDB/MySQL :

```
systemctl stop mysql
```

Supprimez le répertoire */var/lib/mysql* du serveur de reporting :

```
rm -rf /var/lib/mysql
```

> Si vous recevez le message d'erreur « rm: impossible de supprimer '/var/lib/mysql': Périphérique ou ressource occupée », vous devez démonter/monter la partition datadir.
```
umount /var/lib/mysql
rm -rf /var/lib/mysql/*
mount /var/lib/mysql
```

Extrayez la dernière sauvegarde complète (créée par défaut le dimanche) :

```
tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /var/lib/mysql
```

Extrayez toutes les sauvegardes incrémentielles créées entre la dernière sauvegarde complète et la date actuelle, de la plus ancienne à la plus récente, en utilisant la commande suivante :

```
tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /var/lib/mysql
```

Modifiez les droits sur le répertoire */var/lib/mysql* :

```
chown -R mysql:root /var/lib/mysql
```

Démarrez le service MariaDB/MySQL :

```
systemctl start mysql
```

#### Redémarrer le moteur CBIS

Redémarrez CBIS avec la commande :

```
systemctl restart cbis
Arrêt du planificateur Centreon MBI : cbis
Attente de la fermeture de cbis… terminé.
Démarrage du planificateur Centreon MBI : cbis
Service démarré…
```

#### Supprimer les données de la sauvegarde extraite

Supprimez les données extraites de la sauvegarde :

```
cd /tmp
rm -Rf /tmp/usr
rm -Rf /tmp/var
```
