---
id: import-into-map-web
title: Passer de MAP (Legacy) à MAP
---

Cette page décrit comment passer de Centreon MAP (Legacy) à Centreon MAP en important vos anciennes cartes dans le module MAP.

> **À partir de Centreon 24.10, MAP Legacy n'est plus disponible.** Si vous utilisiez toujours MAP Legacy, consultez la page [Fin de vie de MAP Legacy](https://docs.centreon.com/fr/docs/graph-views/map-legacy-eol/).

## Prérequis

- Centreon MAP doit être installé dans votre environnement. Consultez la procédure [Installer MAP](map-web-install.md) si besoin.

- Avant de démarrer la procédure pour importer les anciennes cartes dans MAP, vous devez basculer de MAP (Legacy) à MAP en [activant le module MAP](./map-web-install.md#étape-3--activer-le-module-map).

- Si vous souhaitez installer MAP sur le même serveur que MAP (Legacy), assurez-vous que l'espace disque disponible est au moins égal à l'espace utilisé. En effet, après la migration, la nouvelle base de données coexistera avec l'ancienne (du Legacy).

## Importer les cartes Legacy dans MAP

> Toute migration de MAP Legacy à MAP est définitive : importer vos cartes depuis MAP Legacy vers MAP doit être fait une seule fois. N'utilisez plus MAP Legacy une fois que vous avez migré vos cartes legacy vers MAP. Si vous migrez vos cartes de MAP Legacy à MAP plus d'une fois, tout contenu créé dans MAP entre-temps sera supprimé, sans possibilité de récupération.

### Étape 1 : installer MAP

Vous devez d'abord installer Centreon MAP. Allez à cette [page](map-web-install.md) pour procéder à l'installation et basculer sur le serveur MAP Engine.

### Étape 2 : mettre à jour MAP (Legacy)

Pour que les icônes s'affichent correctement après avoir migré vos cartes, vous devez mettre à jour votre MAP (legacy) en exécutant les commandes suivantes :

```shell
systemctl stop centreon-map
yum update centreon-map-server
systemctl daemon-reload
systemctl start centreon-map
```

### Étape 3 : migrer les cartes

1. Si vous avez des images personnalisées dans vos anciennes cartes, vous devez créer un répertoire dédié (**/usr/share/centreon/www/img/media/**) sur le serveur MAP Legacy :
  
  ```shell
  mkdir -p /usr/share/centreon/www/img/media/
  chown -R centreon-map:centreon-map /usr/share/centreon/
  chmod -R 775 /usr/share/centreon/*
  ```

2. Pour importer vos anciennes cartes dans MAP, allez sur la page **Supervision > Map**, puis cliquez sur le bouton **Migrer**. La fenêtre suivante apparaît :
  
3. Cliquez sur **Migrer**.

4. Lorsque la migration a réussi, vous pouvez fermer la fenêtre.

5. Si vous avez créé un répertoire dédié comme indiqué précédemment, vous devez maintenant le copier dans **/usr/share/centreon/www/img/media/** sur le serveur central. En supposant que vous ayez les droits d'accès aux serveurs concernés, entrez la commande suivante :
  
  ```shell
  scp -r /usr/share/centreon/www/img/media/* root@<IP_CENTREON_CENTRAL>:/usr/share/centreon/www/img/media/
  ```

Vos anciennes cartes sont maintenant affichées dans la page **Map**. 

## À propos des images

Le processus de migration a permis de migrer les images de MAP Legacy vers Centreon MAP. L'exemple suivant explique comment le nom du fichier image est défini après la migration :

- Dans MAP Legacy, votre image était placée dans le panneau **Médias** dans le format suivant :
  
  ```shell
  pays > france > hardware > hardware_green.png
  ```

- Après la migration, cette image sera placée dans Centreon dans **Administration > Paramètres > Images**, dans le format suivant :
  
  ```shell
  pays_france_hardware > hardware_green.png
  ```

## Après avoir migré de MAP Legacy à MAP dans Centreon 24.10

Une fois la migration vers MAP effectuée, vous devez [désinstaller MAP Legacy de votre plateforme Centreon 24.10](map-legacy-eol.md#how-to-fully-uninstall-map-legacy).
