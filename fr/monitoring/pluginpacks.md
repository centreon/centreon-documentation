---
id: pluginpacks
title: Les Plugin Packs
---

Un Plugin Pack (ou pack de supervision en français) est un jeu téléchargeable
de modèles de configuration qui rendent la supervision de votre infrastructure
facile et intuitive.

Ces modèles (modèles d’hôtes et de services, commandes associées) configurent
une sonde (aussi appelée plugin) qui elle-même exécute les commandes de
supervision depuis un Centreon Poller. Les sondes ne sont pas téléchargées avec
les Plugin Packs et doivent être installées par ailleurs : ceci est expliqué
dans la procédure de mise en supervision associée à chaque Plugin Pack.
Certains Plugin Packs nécessitent aussi un Connecteur (ex : AS400 ou VMware)
ou un agent (ex : Windows NRPE).

Pour chaque type d’équipement, les modèles déterminent quels indicateurs seront
supervisés et définissent les valeurs par défaut des seuils Warning et
Critical. Ceux-ci sont modifiables par la suite.

Certains Plugin Packs contiennent aussi des règles de découverte. Ces règles
sont exécutées par le moteur de découverte Centreon pour déterminer une liste
de ressources supplémentaires à superviser. Les règles de découverte d'hôtes
listent de nouveaux hôtes (ex : des ressources AWS EC2, des machines virtuelles
VMware) alors que les règles de découverte de services listent des services
supplémentaires (ex : volumes disques ou interfaces Ethernet sur un serveur).

Les Plugin Packs de votre plateforme Centreon sont gérés à travers l’IHM Plugin
Pack Manager décrites dans ce chapitre.

Pour obtenir une liste à jour de tous les Plugin Packs disponibles dans la
bibliothèque en ligne Centreon et lire leur procédure de mise en supervision
associée, référez-vous au chapitre Plugin Packs de cette documentation.

![image](../assets/configuration/pluginpacks/pp_list.png)

## Prérequis

### Centreon Plugin Pack Manager

Le module **Centreon Plugin Pack Manager** est un module natif Centreon qui permet de gérer l’installation et la
suppression des Plugin Packs. C’est un élément clé, il fait régulièrement l’objet de mises à jour. Il est donc
recommandé de rester à jour sur ce composant.

Pour mettre à jour le module, lancez la commande :

```shell
yum update centreon-pp-manager
```

> Le module centreon-pp-manager est installé par défaut. Vous n’aurez logiquement pas à l’installer.

### Licence

Une licence est nécessaire pour accéder au catalogue complet des Plugin Packs. Si votre plate-forme Centreon est
connectée à une souscription en ligne, celle-ci sera automatiquement téléchargée sur votre serveur. Sinon contactez
les équipes *[support Centreon](https://centreon.force.com)*.

### Accès aux Plugin Pack

Si votre plate-forme Centreon est connectée à une souscription en ligne vous pouvez télécharger les Plugin Packs depuis
l’interface utilisateur Plugin Pack Manager. Sinon, vous devez installer le dépôt dédié, vous le trouverez sur le
[portail du support](https://support.centreon.com/s/repositories).

## Vue d’ensemble

Les **Centreon Plugin Packs** sont des ensembles de modèles de supervision standardisés, préconfigurés
permettant un déploiement rapide de la supervision de votre infrastructure IT.

Ces modèles (commandes, modèles de services et d’hôtes) sont rattachés à des plugins (sondes) de supervision. Ces
plugins peuvent être :

* des plugins existants provenant de la communauté, ayant été sélectionnés et validés par Centreon comme étant
  fonctionnels et optimisés,
* des plugins développés par Centreon, distribués gratuitement et disponibles soit au travers de paquets RPM, soit via
  le projet *[Centreon Plugins](https://github.com/centreon/centreon-plugins)*.

La valeur ajoutée des **Plugin Packs** est la préconfiguration de la supervision dans le logiciel Centreon.
Lors de leur installation, ils apportent dans Centreon des objets pré-paramétrés tels que les commandes,
des modèles d’hôtes et des modèles de services.

Une fois le Plugin Pack installé, l’étape suivante consiste à installer les plugins de supervision utilisés par les
commandes du Plugin Pack. Pour cela, se référer à la documentation du pack (dans le cas où quelque chose doit être
configuré ou activé), puis créer les hôtes et services basés sur ces modèles.

### Contenu d’un Plugin Pack

Un Plugin Pack contient :

* une description du contenu de pack ainsi que des indicateurs pouvant être contrôlés,
* une préconfiguration d’objets Centreon (commandes, modèles d’hôtes, modèles de services) packagée et validée,
* une documentation de déploiement, disponible dès l’installation du pack pour un déploiement rapide et simple

### Connecteurs

La souscription aux Centreon Plugin Packs vous donne accès à certains connecteurs spécifiques listés ci-dessous :

| Connecteur | Description                                                                                          |
|------------|------------------------------------------------------------------------------------------------------|
| NRPE       | Serveur NRPE packagé par Centreon avec les patchs nécessaires pour fonctionner avec les Plugin Packs |
| NSClient++ | NSClient++ packagé par Centreon et prêt à l’emploi à l’aide de Centreon plugins embarqués            |
| VMWare     | Démon Perl utilisant le SDK VMware pour contrôler les plateformes VMware                             |
| AS400      | Connecteur basé sur Java permettant d’exécuter des contrôles sur AS400                               |

## Gestion des Plugin Packs

### Installation

L’installation est en 3 étapes :

1. Accès au catalogue des Plugin Packs
2. Installation du pack
3. Installation des plugins

#### Accès au catalogue des Plugin Packs

* **en ligne**: if your platform is linked to an online subscription
* **hors ligne** otherwise

<!--DOCUSAURUS_CODE_TABS-->
<!--En ligne-->

Si vous bénéficiez d’une souscription en ligne, vous devez vous authentifier.

Pour celà, rendez-vous dans le menu `Administration > Extension > Subscription`
puis utilisez vos identifiants pour vous identifier.

![image](../assets/configuration/pluginpacks/imp_authentification.png)

Cliquez sur **Install** pour pour accéder au catalogue :

![image](../assets/configuration/pluginpacks/imp_install.png)

Vous pouvez maintenant installer vos packs.

<!--Hors ligne-->

Pour installer ou mettre à jour le catalogue, exécutez :

```shell
yum install centreon-pack-*
```

Ou:

```shell
yum update centreon-pack-*
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Installation du pack

Vous avez maintenant accès au catalogue des Plugin Packs :

![image](../assets/configuration/pluginpacks/pp_list.png)

Pour installer un plugin pack, cliquez sur le ``+``

![image](../assets/configuration/pluginpacks/install_pp.png)

Vous pouvez aussi cliquer sur le Plugin Pack. Vous accéderez à sa description et un bouton ``+`` permettant
de l’installer.

![image](../assets/configuration/pluginpacks/install_pp_2.png)

Une fois le plugin pack installé, il apparaitra avec un contour vert et une flèche indiquant qu’il est installé.

| **Avant installation**                                           | **Après installation**                                          |
|------------------------------------------------------------------|-----------------------------------------------------------------|
| ![image](../assets/configuration/pluginpacks/before_install.png) | ![image](../assets/configuration/pluginpacks/after_install.png) |

> Veuillez lire la **monitoring procedure** associée à chaque pack installé pour comprendre le contenu du pack ainsi
> que les prérequis nécessaires à son fonctionnement, en cliquant sur le ``?`` icône de chaque pack ou en allant dans
> le chapitre *[Intégration / Plugin Packs](../integrations/plugin-packs/introduction.html)*

#### Gestion les dépendances

Il se peut que durant l’installation, certains objets du pack ne soient pas installés. Ces objets sont souvent des
objets de configuration additionnels et ne sont pas obligatoire pour déployer les modèles de configuration apportés par
le pack.

La plupart du temps, il est nécessaire de mettre à jour votre plate-forme Centreon, puis de réinstaller votre pack.

Dans l’exemple ci-dessus, l’objet “autodiscover” concerne une règle de découverte pour le module “Centreon Auto Discovery”,
mais celles-ci ne sont disponibles que pour Centreon en version 18.10.x :

![image](../assets/configuration/pluginpacks/objects_not_installed.png)

#### Installation des plugins

Installez maintenant les plugins nécessaires référencés par les modèles installés dans les étapes précédentes.

Utilisez la commande suivante sur **tous les pollers qui exécuteront les contrôles** :

```shell
yum install centreon-plugin-$PLUGIN-PACK$
```

dans laquelle ``$PLUGIN-PACK$`` correspond au nom du Pack listé par la commande de recherche Yum.

### Mise à jour

#### Mise à jour du Plugin Pack

Si vous constatez une icône représentant une flèche sur un Plugin Pack, cela veut dire qu’une mise à jour du pack est
disponible..

![image](../assets/configuration/pluginpacks/update.png)

Pour le mettre à jour, cliquez sur la flèche,

![image](../assets/configuration/pluginpacks/update2.png)

ou cliquez sur le Plugin Pack. Une fenêtre affiche alors des informations relatives au Plugin Pack ainsi qu’une flèche
permettant de le mettre à jour s’ouvre. Cliquer sur la flèche pour enclencher la mise à jour

![image](../assets/configuration/pluginpacks/update3.png)

Confirmez la mise à jour.

![image](../assets/configuration/pluginpacks/update_confirm.png)

Votre Plugin Pack est maintenant à jour.

![image](../assets/configuration/pluginpacks/update_finish.png)

#### Mise à jour du plugin

Exécutez la commande suivante sur **tous les collecteurs**:

```shell
yum update centreon-plugins\*
```

Puis redémarrez **tous les collecteurs**.

Vérifier ensuite qu’il n’y a pas de nouvelles erreurs suite à l’exécution des nouvelles sondes.

> C’est à vous de choisir si vous désirez installer les plugins sur tous les pollers, ou seulement sur le poller qui
> exécutera les contrôles. Gardez en tête que si vous n’installez par le plugin sur un poller, vous pourriez avoir des
> erreurs si vous décidez un jour de déplacer un hôte supervisé d’un poller avec le plugin vers un poller ne possédant
> pas le plugin. Par ailleurs, si vous mettez à jour les packs sur le serveur central, il est fortement recommandé de
> mettre à jour également les plugins associés sur les pollers, car de nouveaux contrôles sont parfois définis dans les
> packs, et ne fonctionneront pas s’ils n’ont pas la commande correspondante.

### Désinstallation

Comme pour l’installation, la désinstallation du pack peut se faire soit en survolant le pack souhaité puis en cliquant
sur la croix rouge :

![image](../assets/configuration/pluginpacks/uninstall.png)

Ou alors en cliquant sur le pack, s’ouvre un pop-up affichant le nom, la version et la description du pack, ainsi qu’une
croix permettant la désinstallation :

![image](../assets/configuration/pluginpacks/uninstall_2.png)

Confirmez la désinstallation.

![image](../assets/configuration/pluginpacks/uninstall_confirm.png)

Votre Plugin Pack est désinstallé.

![image](../assets/configuration/pluginpacks/uninstall_3.png)

#### Gestion des dépendances

Si les modèles d’hôtes et de services créés par le Plugin Pack sont utilisés par des hôtes et services actifs, le Plugin
Pack ne pourra être désinstallé.

![image](../assets/configuration/pluginpacks/uninstall_pp_used.png)

Pour pouvoir le désinstaller, soit vous :

* supprimez les hôtes ou services liés aux modèles fournis par ce Plugin Pack
* déliez les hôtes ou services liés aux modèles fournis par ce Plugin Pack

De plus, si vous tentez de désinstaller un pack dépendant d’un autre pack, la désinstallation ne pourra être faite que
si et seulement si ce pack n’est pas utilisé ni le(s) pack(s) dépendant(s). De plus, les packs dépendant seront
également supprimés.
