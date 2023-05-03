---
id: import-into-map-web
title: Passer de MAP (Legacy) à MAP
---

Cette page décrit comment passer de Centreon MAP (Legacy) à Centreon MAP en important vos anciennes cartes dans le module MAP.

## Prérequis

- Centreon MAP doit être installé dans votre environnement. Consultez la procédure [Installer MAP](map-web-install.md) si besoin.

- Avant de démarrer la procédure pour importer les anciennes cartes dans MAP, vous devez basculer de MAP (Legacy) à MAP en [activant le module MAP](./map-web-install.md#étape-3--activer-le-module-map).

- Si vous souhaitez installer MAP sur le même serveur que MAP (Legacy), assurez-vous que l'espace disque disponible est au moins égal à l'espace utilisé. En effet, après la migration, la nouvelle base de données coexistera avec l'ancienne (du Legacy).

## Importer les cartes Legacy dans MAP

> Lorsque vous importez vos anciennes cartes, tout le contenu créé dans MAP est supprimé.

### Étape 1 : installer MAP

Vous devez d'abord installer Centreon MAP. Allez à cette [page](map-web-install.md) pour procéder à l'installation et basculer sur le serveur MAP Engine.

### Étape 2 : migrer les images

Si vous avez importé des images dans le client lourd (dans des dossiers personnalisés en dehors du dossier Centreon), et que vous les avez utilisées dans vos cartes, vous devez d'abord les migrer vers votre serveur central.

1. Dans le client lourd MAP (Legacy), dans le panneau **Media**, sélectionnez toutes les images que vous souhaitez migrer depuis vos dossiers personnalisés, faites un clic-droit et sélectionnez **Exporter**.

2. Sauvegardez les images sur votre machine.

3. Sur le serveur central, allez dans **Administration > Paramètres > Images**, puis téléchargez toutes les images de votre ordinateur dans le répertoire **centreon-map**. Veillez à ne pas changer le nom de vos images au cours de ce processus.

### Étape 3 : mettre à jour MAP (Legacy)

Pour que les icônes s'affichent correctement après avoir migré vos cartes, vous devez mettre à jour votre MAP (legacy) en exécutant les commandes suivantes :

```shell
yum stop centreon-map
yum update centreon-map-server
systemctl daemon-reload
systemctl start centreon-map
```

### Étape 4 : migrer les cartes

1. Pour importer vos anciennes cartes dans MAP, allez à la page **Supervision > Map**, puis cliquez sur le bouton **Migrer**. La fenêtre suivante apparaît :

  ![image](../assets/graph-views/ng/map-migrate-1.png)

2. Cliquez sur **Migrate**.
 
  ![image](../assets/graph-views/ng/map-migrate-2.png)

3. Lorsque la migration a réussi, vous pouvez fermer la fenêtre.

Vos anciennes cartes sont maintenant affichées dans la page **Map**. 
