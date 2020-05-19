---
id: install
title: Installer l'extension Centreon BAM
---

> Centreon BAM est une **extension** Centreon qui requiert une license valide. Pour plus d'information,
> contactez [Centreon](mailto:sales@centreon.com).

## Prerequisites

La version de Centreon nécessaire au fonctionnement de Centreon BAM est la version  **Centreon 20.04**

## Installation

### Installation du paquet

Ajouter le dépôt Centreon BAM fourni par Centreon et installer le paquet
en exécutant les commandes ci-dessous :

```
yum install centreon-bam-server
```

### Uploder la license

Le fichier de licence "bam.license" est fourni par Centreon, pour
l'installer, rendez vous dans `Administration > Extensions > Manager` puis
télécharger la via l'interface.

### Installation sur l'interface

Se connecter sur l'interface web de Centreon en utilisant un compte
ayant les droits d'installer des modules et se rendre dans le menu
`Administration > Extensions > Manager`.

Cliquer sur l'icône d'installation correspondante au module **Centreon
BAM** située dans la colonne Actions:

![image](../assets/service-mapping/installation/install_module_1.png)

Cliquer sur le bouton **Install module** :

![image](../assets/service-mapping/installation/install_module_2.png)

Cliquer sur "Back", le module est maintenant installé :

![image](../assets/service-mapping/installation/install_module_4.png)

> Si vous utilisez une réplication MariaDB pour vos bases de données de
> **monitoring**, lors de l'installation de Centreon BAM, une vue est
> créée. Il faut l'exclure de la réplication en rajoutant la ligne
> suivante dans le fichier my.cnf du slave
> ```
> replicate-ignore-table=centreon.mod_bam_view_kpi
> ```
> puis créer les vues sur le slave en lançant la commande:
>
> ````
> myqsl> centreon < view_creation.sql