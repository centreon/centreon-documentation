---
id: backup
title: Sauvegarde
---

## Fonctionnement

### Exécution journalière

Le script de sauvegarde est exécuté de manière journalière par une tâche
planifiée située dans **/etc/cron.d/centreon**:

```text
##########################
# Cron for Centreon-Backup
30 3 * * * root /usr/share/centreon/cron/centreon-backup.pl >> /var/log/centreon/centreon-backup.log 2&>1
```

Chaque jour à 3H30, Le script de sauvegarde vérifie sur une sauvegarde doit être
réalisée ce jour.

### Types de sauvegarde

Il y a deux types de sauvegarde : base de données et fichiers de configuration.

#### Sauvegarde de la base de données

La sauvegarde de la base de données peut être réalisée sur deux bases :
**centreon** et **centreon\_storage**

Il y a deux types de sauvegarde :

  - MySQLdump : la commande mysqldump est utilisée pour sauvegarder la base de
    données. Attention, cette commande peut prendre un certain temps si la base
    est volumineuse.
  - LVM Snapshot : Copie binaire des fichiers MySQL. Vous devez avoir un volume
    logique dédiée à MySQL (ex: /var/lib/mysql) et 1Go d'espace disponible dans
    son groupe de volumes.

Format de la sauvegarde :

  - YYYY-MM-DD-centreon.sql.gz
  - YYYY-MM-DD-centreon\_storage.sql.gz

#### Sauvegarde des fichiers de configuration

Tous les fichiers de configuration du serveur central sont sauvegardés : MySQL,
Apache, PHP, SNMP, centreon, centreon-broker

Format de la sauvegarde :

  - YYYY-MM-DD-centreon-engine.tar.gz (fichiers de configuration
    centreon-engine)
  - YYYY-MM-DD-central.tar.gz (autres fichiers de configuration)

## Configuration

Ce chapitre décrit la configuration de la sauvegarde.

1.  Se rendre dans le menu: `Administration > Paramètres > Backup`

La fenêtre suivante est affichée:

![image](../assets/administration/parameters-backup.png)

  - **Activer la sauvegarde** Activer/Désactiver la sauvegarde
  - **Répertoire des sauvegardes** Répertoire de stockage des sauvegardes
  - **Répertoire temporaire** Répertoire utilisé durant le processus de
    sauvegarde
  - **Sauvegarder la base de données Centreon** Activer la sauvegarde de la
    base de données centreon
  - **Sauvegarder la base de données 'centreon\_storage'** Activer la
    sauvegarde de la base de données centreon\_storage
  - **Méthode de sauvegarde** Type de sauvegarde (MySQL dump ou snapshot LVM)
  - **Sauvegarde complète** Période pour la sauvegarde complète
  - **Sauvegarde de type partielle** Période pour la sauvegarde partielle (seulement
    disponible pour la sauvegarde par LVM snapshot)
  - **Durée de rétention des sauvegardes** Durée de rétention des sauvegardes (en jours)
  - **Sauvegarder les fichiers de configuration** Activer la sauvegarde des fichiers de
    configuration
  - **Chemin d'accès au fichier de configuration MySQL** Chemin d'accès au fichier de configuration
    MySQL
  - **SActiver l'export SCP** Activer l'export des sauvegardes par SCP
  - **Utilisateur** Utilisateur distant pour l'export SCP
  - **Hôte distant** Hôte distant pour l'export SCP
  - **Répertoire distant** Répertoire distant pour l'export SCP

> **Répertoire temporaire** ne peut pas être un sous répertoire de **Répertoire
> des sauvegardes**.

## Restauration d'un serveur central Centreon

Le processus de restauration consiste en deux étapes :

  - Réinstaller la plate-forme suivant le documentation d'installation de
    Centreon. Ne pas oublier de faire la mise à jour du système.
  - Restaurer les différents fichiers de configuration, puis les bases de
    données Centreon.

### Restauration des fichiers de configuration de Centreon

Avant de restaurer les bases de données, il faudra restaurer certains fichiers
de configuration dans un premier temps:

```shell
cd /var/cache/centreon/backup/
tar -xvf YYYY-MM-DD-central.tar.gz
cd central/etc/centreon/
cp -r * /etc/centreon/
```

### Restauration des bases de données

Une fois le serveur Centreon réinstallé (**même version de Centreon**), il
suffit de décompresser les sauvegardes des bases de données centreon et
centreon\_storage.

Commencez par recréer les bases de données avec les commandes suivantes :

```sql
DROP DATABASE centreon;
DROP DATABASE centreon_storage;
CREATE DATABASE centreon;
CREATE DATABASE centreon_storage;
```

Puis décompressez et chargez les dumps dans les bases :

```shell
cd /var/cache/centreon/backup/
gzip -d YYYY-MM-DD-centreon.sql.gz
mysql centreon < YYYY-MM-DD-centreon.sql
gzip -d YYYY-MM-DD-centreon_storage.sql.gz
mysql centreon_storage < YYYY-MM-DD-centreon_storage.sql
```

Ces opérations peuvent prendre un certain temps du fait de la taille de la base
"centreon\_storage".

> Le mot de passe (**password** ci-dessus), est stocké dans les fichiers de
> configuration restaurés précédemment. Par exemple le champ **$mysql\_passwd**
> dans le fichier "/etc/centreon/conf.pm".

> Par défaut, il n'y a pas de mot de passe pour le compte root de mysql lors de
> l'installation d'un serveur via Centreon ISO.

La manipulation ci-dessus est valide pour des versions identiques de Centreon.

### Restauration des clés SSH

Cette étape consiste à restaurer les clés SSH de l'utilisateur **centreon**,
voir **centreon-engine** dans le cadre d'un environnement distribué. Leur
restauration doit être manuelle. Il faut donc dans un premier temps extraire
cette archive dans un répertoire temporaire puis déplacer un à un les fichiers
suivant leur emplacement.

Sur le serveur central:

```shell
cd /var/cache/centreon/backup/
tar -xvf YYYY-MM-DD-centreon-engine.tar.gz
cd central/ssh/
mkdir -p /var/spool/centreon/.ssh/
chmod 700 /var/spool/centreon/.ssh/
cp -p id_rsa /var/spool/centreon/.ssh/
cp -p id_rsa.pub /var/spool/centreon/.ssh/
```

Test de connexion du central central vers les satellites:

```shell
su - centreon
ssh <adresse_ip_address>
```

Répondre "Oui" à la question.

> Cette opération est à effectuer si et seulement si votre plate-forme est
> distribuée.

### Restauration des plugins

Les plugins ont été sauvegardés dans l'archive :
"AAAA-MM-JJ-centreon-engine.tar.gz". Leur restauration doit être manuelle. Il
faut donc dans un premier temps extraire cette archive dans un répertoire
temporaire puis déplacer un à un les fichiers suivant leur emplacement.

Sur chaque collecteur, il faudra réaliser l'action suivante :

```shell
cd /var/cache/centreon/backup/
tar -xvf YYYY-MM-DD-centreon-engine.tar.gz
cd central/plugins
cp -pRf * /usr/lib64/nagios/plugins/
```

### Restauration des scripts d'initialisation

Certains points de contrôles concernant Oracle ou SAP entraînent la modification
du script d'initialisation de l'ordonnanceur afin d'y ajouter des variables
d'environnements. Si vous avez modifié le script d'initialisation de votre
ordonnanceur, il faudra le restaurer.

Dans un premier temps extraire cette archive dans un répertoire temporaire puis
déplacer un à un les fichiers suivant leurs emplacements :

```shell
cd /var/backup
tar -xvf YYYY-MM-DD-centreon-engine.tar.gz
cd backup
cp init_d_centengine /etc/init.d/centengine
```

### Restauration des agents de supervision

Si vous utilisez les agents NRPE, ou NSCA il faudra les réinstaller puis
restaurer leur configuration:

```shell
cd /var/backup
tar -xvf YYYY-MM-DD-centreon-engine.tar.gz
cd backup/etc
cp nrpe.cfg /etc/centreon-engine/
cp nsca.cfg /etc/centreon-engine/
```

> Cette manipulation est à utiliser si et seulement si vous utilisez les agents
> NRPE ou NSCA. Si vous utiliser NSCA le fichier de configuration à copier n'est
> pas nrpe.cfg mais nsca.cfg.

### Génération de la configuration du central

Une fois toutes les étapes (nécessaires) effectuées, il faudra générer la
configuration de chaque collecteur.

### Reconstruction des graphiques

Une fois que vous avez restauré votre plate-forme de supervision et que tout est
en ordre, il faudra reconstruire les fichiers RRD afin de retrouver tous vos
"anciens" graphiques de performance.

Pour reconstruire les graphiques de performance, il faudra vous rendre dans le
menu `Administration > Paramètres > Données`. Sur cette page, il
faudra sélectionner tous les services et cliquer sur **Regénérer les bases de
données RRD**.

**Le serveur central est maintenant restauré.**
