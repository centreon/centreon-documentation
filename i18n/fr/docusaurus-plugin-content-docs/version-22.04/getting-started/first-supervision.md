---
id: first-supervision
title: Superviser votre premier hôte
---

## Principe de base de la supervision

Avant de commencer à superviser, voyons ensemble quelques notions principales :

* Un **hôte** (ou **host** en anglais) est tout équipement qui possède une adresse IP et que l'on souhaite superviser :
  un serveur physique, une machine virtuelle, une sonde de température, une caméra IP, une imprimante ou un espace de
  stockage, par exemple.
* Un **service** est un point de contrôle, ou indicateur, à superviser sur un hôte. Cela peut être le taux d'utilisation
  du CPU, la température, la détection de mouvement, le taux d'utilisation de la bande passante, les E/S disque, etc.
* Afin de mesurer chaque indicateur, on utilise des **sondes** de supervision (**plugin** en anglais) qui sont exécutées
  périodiquement par un moteur de collecte appelé **Centreon Engine**.
* Pour être exécutée, une sonde a besoin d'un ensemble d'arguments qui définissent par exemple à quel hôte se connecter
  ou via quel protocole. La sonde et ses arguments associés forment une **commande** (**command** en anglais).
  
Ainsi, superviser un hôte avec Centreon consiste à configurer l'ensemble des commandes nécessaires à la mesure des
indicateurs désirés, puis à déployer cette configuration sur le moteur de collecte afin que ces commandes soient
exécutées périodiquement.

Pour simplifier la configuration, on utilise des modèles de supervision :

* Un **modèle d'hôte** (**host template** en anglais) définit la configuration des indicateurs pour un type d'équipement donné.
* Il s'appuie sur des **modèles de service** (**service templates**) qui définissent la configuration des commandes
  nécessaires à la mesure de ces indicateurs.
* Centreon fournit des **Plugins Packs** téléchargeables à installer sur sa plateforme de supervision : chaque Plugin
  Pack regroupe des modèles d'hôtes et de services pour configurer en quelques clics la supervision d'un équipement
  particulier.

Ce guide de démarrage rapide propose d'installer les modèles de supervision fournis gratuitement avec la solution
Centreon puis de les mettre en oeuvre pour superviser vos premiers équipements. 

![image](../assets/getting-started/host_service_command.png)

> Pour aller plus loin avec les modèles de configuration, lisez le chapitre [modèles](../monitoring/templates.md).

> Si vous disposez d'une licence adéquate, vous pouvez utiliser notre [module d'autodécouverte](../monitoring/discovery/introduction.md) afin de trouver et de configurer vos hôtes facilement. Voir aussi notre tutoriel [sur la détection d'instances AWS EC2](autodisco-aws.md).

### Installation des modèles de supervision de base

Rendez-vous dans le menu **Configuration > Packs de plugins**.

> Avant toute chose, appliquez la procédure de [configuration du proxy](../administration/parameters/centreon-ui.md#configuration-du-proxy)
> pour configurer et vérifier la connexion de votre serveur Centreon à internet.

Commencez par installer le Plugin Pack **Base Pack** (s'il n'est pas déjà installé) en déplaçant votre curseur sur ce dernier et en cliquant sur
l'icône **+** (il s'agit d'un pré-requis à l'installation de tout autre Plugin Pack) :

![image](../assets/getting-started/pp_base_generic_1.png)

Vous pouvez aussi cliquer sur le Plugin Pack afin d'en connaître son contenu avant de l'installer :

![image](../assets/getting-started/pp_base_generic_2.png)

Installez ensuite les Plugin Packs inclus gratuitement avec la solution, par exemple **Linux SNMP** et **Windows SNMP** :

![image](../assets/getting-started/pp_install_basic.gif)

Vous disposez maintenant des modèles de base pour configurer votre supervision !

## Superviser votre premier hôte

### Superviser une imprimante en SNMP

Rendez-vous dans le menu **Configuration > Packs de plugins** et installez le Plugin Pack **Printer Standard** :

![image](../assets/getting-started/quick_start_printer_0.gif)

Rendez-vous maintenant dans le menu **Configuration > Hôtes > Hôtes** et cliquez sur le bouton **Ajouter** :

![image](../assets/getting-started/quick_start_printer_1.png)

Renseignez les informations suivantes :

* Le nom de votre serveur
* Une description de votre serveur
* Son adresse IP
* La communauté et la version SNMP

Cliquez sur le bouton **+ Ajouter une nouvelle entrée** pour le champ **Modèles** puis
sélectionnez le modèle **HW-Printer-standard-rfc3805-custom**.

Cliquez sur le bouton **Sauvegarder**.

Votre équipement a été ajouté à la configuration de la supervision :

![image](../assets/getting-started/quick_start_printer_2.png)

Rendez-vous dans le menu **Configuration > Services > Services par hôte**. Un ensemble d'indicateurs a été déployé
automatiquement :

![image](../assets/getting-started/quick_start_printer_3.png)

Il est maintenant temps de [déployer la supervision](#déployer-une-configuration).

Rendez-vous ensuite dans le menu **Supervision > Détails des statuts > Regroupement par hôte** et sélectionnez la valeur **Tous** pour le
filtre **Afficher les détails**. Après quelques minutes, les premiers résultats de la supervision apparaissent :

![image](../assets/getting-started/quick_start_printer_4.png)

### Superviser un onduleur en SNMP

Rendez-vous dans le menu **Configuration > Packs de plugins** et installez le Plugin Pack **UPS Standard** :

![image](../assets/getting-started/quick_start_ups_0.gif)

Rendez-vous maintenant dans le menu **Configuration > Hôtes > Hôtes** et cliquez sur le bouton **Ajouter** :

![image](../assets/getting-started/quick_start_ups_1.png)

Renseignez les informations suivantes :

* Le nom de votre serveur
* Une description de votre serveur
* Son adresse IP
* La communauté et la version SNMP

Cliquez sur le bouton **+ Ajouter une nouvelle entrée** pour le champ **Modèles** puis sélectionnez le modèle
**HW-UPS-Standard-Rfc1628-SNMP-custom**.

Cliquez sur le bouton **Sauvegarder**.

Votre équipement a été ajouté à la configuration de la supervision :

![image](../assets/getting-started/quick_start_ups_2.png)

Rendez-vous dans le menu **Configuration > Services > Services par hôte**. Un ensemble d'indicateurs a été déployé
automatiquement :

![image](../assets/getting-started/quick_start_ups_3.png)

Il est maintenant temps de [déployer la supervision](#déployer-une-configuration).

Rendez-vous ensuite dans le menu **Supervision > Détails des statuts > Regroupement par hôte** et sélectionnez la valeur **Tous** pour le
filtre **Afficher les détails**. Après quelques minutes, les premiers résultats de la supervision apparaissent :

![image](../assets/getting-started/quick_start_ups_4.png)

## Déployer une configuration

Lors de la création/suppression/modification des objets via l'interface de configuration, les changements effectués ne
sont pas appliqués de manière automatique aux serveurs de supervision. Afin de pouvoir appliquer les modifications
effectuées, il est nécessaire de suivre la procédure ci-dessous.

1. Rendez-vous dans le menu **Configuration > Collecteurs > Collecteurs**.
2. Choisissez les collecteurs sur lesquels exporter la configuration.
3. Cliquez sur **Exporter la configuration**.

    ![image](../assets/monitoring/monitoring-servers/export_conf.png)

4. Cochez les cases suivantes :
  - **Générer les fichiers de configuration**
  - **Lancer le débogage du moteur de supervision (-v)**
  - **Déplacer les fichiers générés**
  - **Redémarrer l'ordonnanceur**.

5. Cliquez sur **Exporter**.

    ![image](../assets/monitoring/monitoring-servers/export_conf_done.png)

6. Vérifiez qu'aucune erreur n'apparaît lors de la génération.
