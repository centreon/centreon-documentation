---
id: prerequisites
title: Prérequis
---

L'interface Centreon web est compatible avec les navigateurs web suivants :

* Google Chrome (dernière version)
* Mozilla Firefox (dernière version)
* Apple Safari (dernière version)

Votre résolution doit être au minimum à 1280 x 768.

## Logiciels

### Système d'exploitation

Centreon fournit des RPM pour ses produits au travers de la solution
Centreon Open Sources disponible gratuitement sur notre dépôt.

Ces paquets ont été testés avec succès sur les environnements CentOS
en version 7 et 8.

> Cependant, suite au changement de stratégie effectué par Red Hat, nous pensons
> qu'il est préférable de ne pas utiliser CentOS 8 en production. Ces paquets
> pour CentOS 8 sont compatible avec RHEL et Oracle Linux en version 8.

Les utilisateurs Open Source, sans contrat de support, peuvent utiliser une autre distribution GNU/Linux.
L'installation de la plate-forme sera plus complexe à partir des fichiers sources de chaque composant. sera plus
complexe à partir des fichiers sources de chaque composant.

> Seuls les systèmes d'exploitation 64bits (x86_64) sont supportés.

### SGBD

> Centreon vous recommande d'utiliser MariaDB.

| Logiciel | Version |
|----------|---------|
| MariaDB  | 10.5.x  |

### Dépendances logicielles

Le tableau suivant décrit les dépendances logicielles :

| Logiciel | Version    |
| -------- | ---------- |
| Apache   | 2.4        |
| GnuTLS   | \>= 2.0    |
| Net-SNMP | 5.7        |
| openssl  | \>= 1.0.1k |
| PHP      | 7.3        |
| Qt       | \>= 4.7.4  |
| RRDtools | 1.4.7      |
| zlib     | 1.2.3      |

## Sélectionner votre architecture

> Centreon propose un [classeur](../assets/files/Centreon_platform_sizing.xlsx) permettant de calculer le dimensionnement
> de votre plate-forme.

Le tableau suivant présente les prérequis pour une installation de Centreon :

| Nombre de services | Nombre d'hôtes estimé | Nombre de collecteurs     | Central       | Collecteur    |
| ------------------ | --------------------- | ------------------------- | ------------- | ------------- |
| \< 500             | 50                    | 1 central                 | 1 vCPU / 1 GB |               |
| 500 - 2000         | 50 - 200              | 1 central                 | 2 vCPU / 2 GB |               |
| 2000 - 7000        | 200 - 700             | 1 central + 1 collecteur  | 4 vCPU / 4 GB | 1 vCPU / 4 GB |
| 7000 - 14000       | 700 - 1400            | 1 central + 1 collecteur  | 4 vCPU / 8 GB | 2 vCPU / 4 GB |
| 14000 - 21000      | 1400 - 2100           | 1 central + 2 collecteurs | 4 vCPU / 8 GB | 2 vCPU / 4 GB |
| 21000 - 28000      | 2100 - 2800           | 1 central + 3 collecteurs | 4 vCPU / 8 GB | 2 vCPU / 4 GB |
| ...                | ...                   | ...                       | ...           | ...           |

> Un collecteur peut superviser en moyenne 7000 services actifs. Les vCPU doivent avoir une fréquence avoisinant les 3 GHz.
> Le nombre de vCPU par collecteur dépend principalement de la complexité des contrôles. Si vous utilisez des connecteurs
> ou réalisez de nombreux appels vers des applications tierces, ajoutez des vCPU supplémentaires.

### Définition de l'espace disque

> Centreon propose un [classeur](../assets/files/Centreon_platform_sizing.xlsx) permettant de calculer le dimensionnement
> de votre plate-forme.

L'espace disque utilisé pour supporter les données issues de la collecte dépend de plusieurs critères :

* Fréquence des contrôles
* Nombre de contrôles
* Durée de rétention programmée

Le tableau suivant propose une idée de la volumétrie de votre plate-forme :

* Les données sont collectées toutes les 5 minutes
* La période de rétention programmée est de 6 mois
* Deux courbes sont présentes par graphique de performance

| Nombre de services | /var/lib/mysql (en Go) | /var/lib/centreon (en Go) |
|--------------------|------------------------|---------------------------|
| 500                | 10                     | 2.5                       |
| 2000               | 42                     | 10                        |
| 10 000             | 93                     | 27                        |
| 20 000             | 186                    | 54                        |
| 50 000             | 465                    | 135                       |
| 100 000            | 930                    | 270                       |
| ...                | ...                    | ...                       |

### Définition des partitions

> Votre système doit utiliser LVM pour gérer vos partitions.

#### Serveur Centreon

Description des partitions :

| Partition                  | Taille                                                                                                      |
|----------------------------|-------------------------------------------------------------------------------------------------------------|
| swap                       | 1 à 1.5 la taille totale de la mémoire vive                                                                 |
| /                          | au moins 20 Go                                                                                              |
| /var/log                   | au moins 10 Go                                                                                              |
| /var/lib/centreon          | [défini dans le chapitre précédant](#define-disk-space)                                                     |
| /var/lib/centreon-broker   | au moins 5 Go                                                                                               |
| /var/cache/centreon/backup | au moins 10 Go (penser à exporter les sauvegarde de manière régulière puis supprimer les données exportées) |

#### MariaDB DBMS

> 1 Go d'espace libre non alloué doit être disponible sur le **volum group** hébergeant la partition **/var/lib/mysql**
> lorsque vous souhaitez utiliser le mode de sauvegarde **snapshot LVM**.

Description des partitions :

| Partition                  | Taille                                                                                                      |
|----------------------------|-------------------------------------------------------------------------------------------------------------|
| swap                       | 1 à 1.5 la taille totale de la mémoire vive                                                                 |
| /                          | au moins 20 Go                                                                                              |
| /var/log                   | au moins 10 Go                                                                                              |
| /var/lib/mysql             | [défini dans le chapitre précédant](#define-disk-space)                                                     |
| /var/cache/centreon/backup | au moins 10 Go (penser à exporter les sauvegarde de manière régulière puis supprimer les données exportées) |


#### Collecteur de supervision

Description des partitions :

| Partition                  | Taille                                                                                                     |
|----------------------------|------------------------------------------------------------------------------------------------------------|
| swap                       | 1 à 1.5 la taille totale de la mémoire vive                                                                |
| /                          | au moins 20 Go                                                                                             |
| /var/log                   | au moins 10 Go                                                                                             |
| /var/lib/centreon-broker   | au moins 5 Go                                                                                              |
| /var/cache/centreon/backup | au moins 5 Go (penser à exporter les sauvegarde de manière régulière puis supprimer les données exportées) |

### Utilisateurs et groupes

> Ces données sont présentées pour les systèmes Red Hat / CentOS. Les noms des groupes, utilisateurs et services peuvent
> changer suivant la distribution GNU/Linux.

Description des logiciels et utilisateurs liés :

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
| Logiciel          | Service          | Utilisateur      | Commentaire     |
| ----------------- | ---------------- | ---------------- | --------------- |
| Apache            | httpd            | apache           | automatic start |
| PHP-FPM           | php-fpm          | apache           | automatic start |
| MariaDB           | mariadb          | mysql            | automatic start |
| Centreon          | centreontrapd    | centreon         | automatic start |
| Centreon Broker   | cbwd             | centreon-broker  | automatic start |
| Centreon Broker   | cbd              | centreon-broker  | automatic start |
| Centreon Engine   | centengine       | centreon-engine  | automatic start |
| Centreon Gorgone  | gorgoned         | centreon-gorgone | automatic start |
<!--CentOS 7-->
| Logiciel          | Service          | Utilisateur      | Commentaire     |
|-------------------|------------------|------------------|-----------------|
| Apache            | httpd24-httpd    | apache           | automatic start |
| PHP-FPM           | rh-php73-php-fpm | apache           | automatic start |
| MariaDB           | mariadb          | mysql            | automatic start |
| Centreon          | centreontrapd    | centreon         | automatic start |
| Centreon Broker   | cbwd             | centreon-broker  | automatic start |
| Centreon Broker   | cbd              | centreon-broker  | automatic start |
| Centreon Engine   | centengine       | centreon-engine  | automatic start |
| Centreon Gorgone  | gorgoned         | centreon-gorgone | automatic start |
<!--END_DOCUSAURUS_CODE_TABS-->

Description des logiciels optionnels et utilisateurs liés :

| Logiciel        | Service         | User      | Commentaire                                          |
|-----------------|-----------------|-----------|------------------------------------------------------|
| Centreon VMware | centreon_vmware | centreon  | non installé par défaut                              |
| RRDtool         | rrdcached       | rrdcached | non activé et non parémétré dans Centreon par défaut |

Description des groupes et utilisateurs liés pour les éditions Centreon Open Source et IT Edition :

| Groupe           | Utilisateurs                                                     |
|------------------|------------------------------------------------------------------|
| apache           | nagios,centreon,centreon-gorgone                                 |
| centreon         | centreon-engine,centreon-broker,apache,centreon-gorgone          |
| centreon-broker  | centreon,nagios,centreon-engine,apache,centreon-gorgone          |
| centreon-engine  | centreon-broker,apache,nagios,centreon,centreon-gorgone          |
| centreon-gorgone | centreon,apache,centreon-gorgone,centreon-engine,centreon-broker |
| rrdcached        | centreon-broker,apache                                           |

Description des groupes et utilisateurs liés pour l'édition Centreon Business Edition :

| Groupe           | Utilisateurs                                                                 |
|----------------- |------------------------------------------------------------------------------|
| apache           | nagios,centreonBI,centreon,centreon-gorgone                                  |
| centreon         | centreon-engine,centreon-broker,apache,rrdcached,centreonBI,centreon-gorgone |
| centreon-broker  | centreon,nagios,centreon-engine,apache,rrdcached,centreon-gorgone            |
| centreon-engine  | centreon-broker,apache,nagios,centreon,centreon-gorgone                      |
| centreon-gorgone | centreon,apache,centreon-gorgone,centreon-engine,centreon-broker             |
| centreonBI       | apache                                                                       |
| centreon-map     |                                                                              |
| mysql            | centreonBI                                                                   |

Description des utilisateurs, umask et répertoire utilisateur pour les éditions Centreon Open Source et IT Edition :

| Utilisateur      | umask | home                      | Shell         |
|------------------|-------|---------------------------|---------------|
| root             | 0022  | /root                     | /bin/bash     |
| apache           | 0022  | /var/www                  | /sbin/nologin |
| centreon         | 0002  | /var/spool/centreon       | /bin/bash     |
| centreon-broker  | 0002  | /var/lib/centreon-broker  | /bin/bash     |
| centreon-engine  | 0002  | /var/lib/centreon-engine  | /bin/bash     |
| centreon-gorgone | 0002  | /var/lib/centreon-gorgone | /bin/bash     |
| mysql            | 0002  | /var/lib/mysql            | /sbin/nologin |
| rrdcached        | 0002  | /var/rrdtool/rrdcached    | /bin/bash     |

Description des utilisateurs, umask et répertoire utilisateur pour l'édition Centreon Business Edition :

| Utilisateur      | umask | home                      | Shell         |
|------------------|-------|---------------------------|---------------|
| root             | 0022  | /root                     | /bin/bash     |
| apache           | 0022  | /var/www                  | /sbin/nologin |
| centreon         | 0002  | /var/spool/centreon       | /bin/bash     |
| centreonBI       | 0002  | /home/centreonBI          | /bin/bash     |
| centreon-agent   | 0002  | /var/lib/centreon-agent   | /bin/bash     |
| centreon-broker  | 0002  | /var/lib/centreon-broker  | /bin/bash     |
| centreon-engine  | 0002  | /var/lib/centreon-engine  | /bin/bash     |
| centreon-gorgone | 0002  | /var/lib/centreon-gorgone | /bin/bash     |
| centreon-map     | 0002  | /home/centreon-map        | /bin/bash     |
| mysql            | 0002  | /var/lib/mysql            | /sbin/nologin |
| rrdcached        | 0002  | /var/rrdtool/rrdcached    | /bin/bash     |
