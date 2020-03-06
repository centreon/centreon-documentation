---
id: pluginpacks
title: Les Plugin Packs
---

Les Plugin Packs (ou pack de supervision en français) sont un ensemble de modèles de configuration Centreon (packs)
développés et validés par la société Centreon. Ils offrent une supervision, simplifiée, standardisée et optimisée pour
votre infrastructure IT. En effet, les modèles de supervision préconfigurés permettent un déploiement rapide et
performant de la supervision.

Cette documentation explique comment utiliser les Centreon Plugin Packs.

![image](assets/configuration/pluginpacks/pp_list.png)

## Prérequis

### Centreon Plugin Pack Manager

Le module **Centreon Plugin Pack Manager** est un module natif Centreon qui permet de gérer l’installation et de la
suppression des Plugin Packs. C’est un élément clé, il fait régulièrement l’object de mises à jour. Il est donc
recommandé de rester à jour sur ce composant.

Pour mettre à jour le module, lancez la commande :
```Bash
yum update centreon-pp-manager
```

> Le module centreon-pp-manager est installé par défaut. Vous n’aurez logiquement pas à l’installer.

### Licence

Une licence est nécessaire pour accéder au catalogue complet des Plugin Packs. Si votre plate-forme Centreon est
connectée à une souscription en ligne, celle-ci sera automatiquement téléchargée sur votre serveur. Sinon contactez
les équipes [support Centreon](https://centreon.force.com)

### Accès aux Plugin Pack

Si votre plate-forme Centreon est connectée à une souscription en ligne vous pouvez télécharger les Plugin Packs depuis
l’interface utilisateur Plugin Pack Manager. Sinon, un dépôt RPM vous sera délivré par les équipes
[support Centreon](https://centreon.force.com)

## Vue d’ensemble

Les **Centreon Plugin Pack** sont des ensembles de **modèles** de supervision **standardisés**, **préconfigurés**
permettant un **déploiement rapide** de la supervision de votre infrastructure IT.

Ces modèles (commandes, modèles de services et d’hôtes) sont rattachés à des **plugins** (sondes) de supervision. Ces
plugins peuvent être :

* des plugins existants provenant de la communauté, ayant été sélectionnés et validés par Centreon comme étant
  fonctionnels et optimisés,
* des plugins développés par Centreon, distribués gratuitement et disponibles soit au travers de paquets RPM, soit via
  le projet [Centreon Plugins](https://github.com/centreon/centreon-plugins)

La valeur ajoutée des **Plugin Packs** est la **préconfiguration** de la **supervision** dans le logiciel Centreon.
Lors de leur installation, **ils apportent** dans Centreon des **objets pré-paramétrés** tels que les **commandes**,
des **modèles d’hôtes** et des **modèles de services**.

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

Pour celà, rendez-vous dans le menu **Administration \> Extension \> Subscription** puis utilisez vos identifiants
pour vous identifier.

![image](assets/configuration/pluginpacks/imp_authentification.png)

Cliquez sur **Install** pour pour accéder au catalogue :

![image](assets/configuration/pluginpacks/imp_install.png)

Vous pouvez maintenant installer vos packs.

<!--Hors ligne-->

Pour installer ou mettre à jour le catalogue, exécutez :
```Bash
yum install centreon-pack-*
```

Ou:
```Bash
yum update centreon-pack-*
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Installation du pack

Vous avez maintenant accès au catalogue des Plugin Packs :

![image](assets/configuration/pluginpacks/pp_list.png)

Pour installer un plugin pack, cliquez sur le ``+``

![image](assets/configuration/pluginpacks/install_pp.png)

Vous pouvez aussi cliquer sur le Plugin Pack. Vous accéderez à sa description et un bouton ``+`` permettant
de l’installer.

![image](assets/configuration/pluginpacks/install_pp_2.png)

Une fois le plugin pack installé, il apparaitra avec un contour vert et une flèche indiquant qu’il est installé.

| **avant installation**                                        | **après installation**                                       |
|---------------------------------------------------------------|--------------------------------------------------------------|
| ![image](assets/configuration/pluginpacks/before_install.png) | ![image](assets/configuration/pluginpacks/after_install.png) | 

> Veuillez lire la **monitoring procedure** associée à chaque pack installé pour comprendre le contenu du pack ainsi
> que les prérequis nécessaires à son fonctionnement, en cliquant sur le ``?`` icône de chaque pack ou en allant dans
> le chapitre [Intégration / Plugin Packs](../integrations/plugin-packs/init-plugin-packs)

#### Gestion les dépendances

Il se peut que durant l’installation, certains objets du pack ne soient pas installés. Ces objets sont souvent des
objets de configuration additionnels et ne sont pas obligatoire pour déployer les modèles de configuration apportés par
le pack.

La plupart du temps, il est nécessaire de mettre à jour votre plate-forme Centreon, puis de réinstaller votre pack.

Dans l’exemple ci-dessus, l’objet “autodiscover” concerne une règle de découverte pour le module “Centreon Auto Discovery”,
mais celles-ci ne sont disponibles que pour Centreon en version 18.10.x :

![image](assets/configuration/pluginpacks/objects_not_installed.png)

#### Installation des plugins

Installez maintenant les plugins nécessaires référencés par les modèles installés dans les étapes précédentes.

Utilisez la commande suivante sur **tous les pollers qui exécuteront les contrôles** :
```Bash
yum install centreon-plugin-$PLUGIN-PACK$
```

dans laquelle ``$PLUGIN-PACK$`` correspond au nom du Pack listé par la commande de recherche Yum.

### Mise à jour

#### Mise à jour du Plugin Pack

Si vous constatez une icône représentant une flèche sur un Plugin Pack, cela veut dire qu’une mise à jour du pack est
disponible..

![image](assets/configuration/pluginpacks/update.png)

Pour le mettre à jour, cliquez sur la flèche,

![image](assets/configuration/pluginpacks/update2.png)

ou cliquez sur le Plugin Pack. Une fenêtre affiche alors des informations relatives au Plugin Pack ainsi qu’une flèche
permettant de le mettre à jour s’ouvre. Cliquer sur la flèche pour enclencher la mise à jour

![image](assets/configuration/pluginpacks/update3.png)

Confirmez la mise à jour.

![image](assets/configuration/pluginpacks/update_confirm.png)

Votre Plugin Pack est maintenant à jour.

![image](assets/configuration/pluginpacks/update_finish.png)

#### Mise à jour du plugin

To update the plugins, Exécutez la commande suivante sur **tous les collecteurs**
```Bash
yum update centreon-plugins*
```

Puis redémarrez **tous les collecteurs**.

Then check that you do not have new errors while executing new plugins.

> It is your choice whether to install all the plugins on every poller, or just the required plugins. Keep in mind that
> you may encounter errors if you migrate a monitored host to a poller that happens to be missing the necessary plugins.
> If you update the plugins on the Centreon central server, be sure also to update them on each poller.

### Deletion

as with installation, you can remove a pack either by hovering over the desired pack in the UI and clicking on the red
cross,

![image](assets/configuration/pluginpacks/uninstall.png)

or by clicking first on the pack and then on the red cross:

![image](assets/configuration/pluginpacks/uninstall_2.png)

Confirm the uninstallation.

![image](assets/configuration/pluginpacks/uninstall_confirm.png)

Your Plugin Pack is now uninstalled.

![image](assets/configuration/pluginpacks/uninstall_3.png)

#### Managing dependencies

You will not be able remove a pack if host and service templates created by the Plugin Pack are being used by any
monitored hosts and services.

![image](assets/configuration/pluginpacks/uninstall_pp_used.png)

To uninstall the pack you will need either to:

* delete the hosts and services linked to the templates provided by the Plugin Pack,
* or unlink the hosts and services from the corresponding templates.

Attempting to uninstall a pack that is a dependency of another pack will cause the uninstallation process to stop if
the pack or its dependency is used by any hosts and services. Otherwise, the pack and its dependencies can be removed.