---
id: update-centreon-ha
title: Mise à jour d'une plateforme Centreon-HA
---

La procédure suivante est à utiliser lors de l'application d'une mise à jour mineure sur un cluster Centreon-HA installé suivant [cette documentation](../installation/installation-of-centreon-ha/installation-2-nodes.html), dans le cas où il n'y a pas de rupture de compatibilité Engine/broker entre l'ancienne et la nouvelle version. Celle-ci peut se faire sans interrompre la supervision, mais en rendant l'interface indisponible pendant un court instant.

## Suspension de la gestion des resources par le cluster

Cette opération nécessite de suspendre la gestion des ressources Centreon et MariaDB par le cluster pour éviter qu'une bascule se produise en pleine mise à jour.

```bash
pcs resource unmanage centreon
pcs resource unmanage ms_mysql
```

## Déroulement de la mise à jour

### Mise à jour de Centreon-Web

Lancer la mise à jour sur les deux serveurs centraux :

```bash
yum update
```

Une fois les mises à jour terminées sur les deux serveurs, il reste à appliquer la mise à jour via l'interface web en fermant la session en cours ou en rafraichissant la page de login.

En parallèle, sur le central "esclave", il faut déplacer le répertoire "install" pour éviter d'afficher à nouveau l'interface de mise à jour suite à une bascule et regénérer le cache Symfony :

```bash
mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-YYYY-MM-DD
sudo -u apache /usr/share/centreon/bin/console cache:clear
```

### Suppression des crons

Les crons sont remis en place lors de la mise à jour des RPMs. Supprimer les sur les deux noeuds centraux afin d'éviter les executions concurrentes.

```bash
rm /etc/cron.d/centreon
rm /etc/cron.d/centstorage
rm /etc/cron.d/centreon-auto-disco
```

### Mise à jour des extensions

Les extensions (ou modules) Centreon nécessitent également d'être mis à jour *via* l'interface, depuis le menu "Administration > Extensions > Gestionnaire" en utilisant le bouton "Update all".

### Mise à jour des Plugin Packs

Afin de maintenir la compatibilité entre les [Plugin Packs](../../monitoring/pluginpacks.html) et les plugins installés (qui  ont été mis à jour sur les serveurs centraux par la commande `yum update`) il faut appliquer les mises à jour des plugin packs depuis le menu "Configuration > Plugin Packs".

### Mise à jour des pollers

Il est recommandé de mettre également à jour les pollers Centreon, **en particulier dans le cas où les paquets `centreon-engine` et/ou `centreon-broker` ont été mis à jour**.

```bash
yum update
```

### Export de la configuration Broker/Engine

Générer une nouvelle configuration pour tous les pollers (central compris) via le menu "Configuration -> Pollers" en cochant les options :

* Générer les fichiers de configuration
* Lancer le débogage du moteur de supervision (-v)
* Deplacer les fichiers générés

Puis les redémarrer **un à un** à partir du même menu, en sélectionnant l'option "Redémarrer" plutôt que "Recharger" dans le cas où les paquets `centreon-engine` et/ou `centreon-broker` ont été mis à jour.

En complément, dans le cas où `centreon-broker` a été mis à jour, il faut redémarrer le broker central **sur le serveur central maître** :

```bash
service cbd-sql restart
```


Dans le cas où des [Remote Servers](../../installation/architectures.html#description) seraient présents, il faut y redémarrer le service `cbd` :

```bash
service cbd restart
```

## Rétablissement de la gestion des ressources par le cluster

Tous les composants devraient à présent être à jour et fonctionnels, il faut donc rétablir la gestion des ressources par le cluster :

```bash
pcs resource manage centreon
pcs resource manage ms_mysql
```

## Vérification de la stabilité de la plateforme

Il est toujours recommandé, après une mise à jour, de contrôler que tout fonctionne bien :

* Accès aux menus dans l'interface.
* Génération de configuration + reload ou restart de Centreon Engine
* Plannifier un contrôle immédiat dans le menu "Monitoring" et contrôler que c'est bien pris en compte (dans un délai raisonnable). Faire de même avec un acquittement, un arrêt prévu...
* Migrer une ressource ou un groupe de ressources d'un nœud à l'autre, rebooter un serveur maître et contrôler que tout continue de fonctionner (refaire le tests ci-dessus).



