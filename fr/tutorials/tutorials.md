---
id: tutorials
title: Premiers pas
---

Ce chapitre vous explique comment démarrer rapidement la configuration des principaux objets contrôlés par Centreon.

## Connexion à l'interface

Pour se connecter à l'interface se rendre à l'adresse : http://IP_ADDRESS/centreon

> Remplacer **IP_ADDRESS** par l'adresse IP ou FQDN du serveur web Centreon.

Renseigner le nom d'utilisateur et le mot de passe associé et cliquer sur le bouton **Connect** :

![image](assets/tutorials/aconnection.png)

Vous êtes maintenant connecté à l'interface web Centreon.

## Présentation rapide des menus

L'interface web de Centreon est composée de plusieurs menus, chaque menu a une fonction bien précise :

![image](assets/tutorials/amenu.png)

* Le menu **Accueil** permet d'accéder au premier écran d'accueil après s'être connecté. Il résume l'état général de
  la supervision. Votre espace de travail peut être vide pour l'instant. Une fois que vous avez configuré les widgets
  personnalisables, vous verrez les données et les graphiques en fonction de votre personnalisation.
* Le menu **Supervision** regroupe l'état de tous les éléments supervisés en temps réel et en différé au travers de la
  visualisation des logs.
* Le menu **Vues** permet de visualiser et de configurer les graphiques de performances pour chaque élément du système
  d'informations.
* Le menu **Rapports** permet de visualiser de manière intuitive (via des diagrammes) l'évolution de la supervision sur
  une période donnée.
* Le menu **Configuration** permet de configurer l'ensemble des éléments supervisés ainsi que l'infrastructure de supervision.
* Le menu **Administration** permet de configurer l'interface web Centreon ainsi que de visualiser l'état général des serveurs.

## Choisissez la langue de l'interface utilisateur

Dans le bandeau, cliquez sur l'icône profile, puis cliquez sur **Edit profile**:

![image](assets/tutorials/change_language_1.png)

Dans la liste de sélection des langages, sélectionnez le vôtre :

![image](assets/tutorials/change_language_2.png)

Puis cliquez sur **Save**. Votre interface est maintenant traduite dans votre
langue.

> Si votre langue n'apparaît pas dans la liste, vous pouvez aider la communauté Centreon à traduire l'interface web.
> Rendez-vous dans le chapitre @TODO@(:ref:`How to translate Centreon<howtotranslate>`) pour plus d'informations.

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

Néanmoins, pour simplifier drastiquement la configuration on s'appuyera avantageusement sur des modèles de supervision :

* Un **modèle d'hôte** (**host template** en anglais) définit la configuration des indicateurs pour un type d'équipement donné.
* Il s'appuie sur des **modèles de service** (**service templates**) qui définissent la configuration des commandes
  nécessaires à la mesure de ces indicateurs.
* Centreon fournit des **Plugins Packs** téléchargeables à installer sur sa plateforme de supervision: chaque Plugin
  Pack regroupe modèles de hôte et de services pour configurer en quelques clics la supervision d'un équipement
  particulier.

Ce guide de démarrage rapide propose d'installer les modèles de supervision fournis gratuitement avec la solution
Centreon puis de les mettre en oeuvre pour superviser vos premiers équipements. 

![image](assets/tutorials/host_service_command.png)

> Pour aller plus loin avec les modèles de configuration, lisez le chapitre Les modèles @TODO@(ref:hosttemplates>).

## Installation des modèles de supervision de base

Rendez-vous dans le menu **Configuration \> Plugin Packs**.

> Avant toute chose, appliquez la procédure de configuration du proxy @TODO@(add the link ref:proxyimp)
> pour configurer et vérifier la connexion de votre serveur Centreon à Internet.

Commencez par installer le Plugin Pack **base-generic** en déplaçant votre curseur sur ce dernier et en cliquant sur
l'icône **+** (il s'agit d'un pré-requis à l'installation de tout autre Plugin Pack) :

![image](assets/tutorials/pp_base_generic.png)

Installez ensuite les Plugin Packs inclus gratuitement avec la solution, par exemple **Linux SNMP** et **Windows SNMP** :

![image](assets/tutorials/pp_install_basic.gif)

Vous disposez maintenant des modèles de base pour configurer votre supervision !

Five additional Packs are available once you register on [our web site](https://store.centreon.com), and over 300
more if you subscribe to the [IMP offer](https://store.centreon.com). @TODO@(change this sentence!!!)

Cinq Plugin Packs supplémentaires sont débloqués après vous être inscrit sur [notre site web](https://store.centreon.com)
et plus de 300 packs sont disponibles si vous souscrivez à [l'offre IMP](https://store.centreon.com). @TODO@(change this sentence!!!)

> Si vous avez déjà un compte Centreon, [vous pouvez maintenant authentifier votre plate-forme](https://documentation-fr.centreon.com/docs/plugins-packs/en/latest/installation.html>)
> afin de recevoir ces Plugin Packs additionnels ainsi que tout autre service associé à votre compte.
