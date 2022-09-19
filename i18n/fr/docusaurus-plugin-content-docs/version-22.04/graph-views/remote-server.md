---
id: remote-server
title: Installer MAP sur un serveur distant
---

## Installation de Centreon MAP sur un serveur distant Centreon

L'installation de l'extension **Centreon MAP** sur un **serveur distant Centreon** doit se faire exactement comme l'installation sur un serveur central, seules la configuration et la désinstallation sont différentes.

Si votre serveur distant Centreon n'a pas encore été installé, veuillez vous référer à la [documentation](../installation/installation-of-a-remote-server/using-packages.md) suivante.

Reportez-vous ensuite à la [procédure d'installation](install.md) pour installer les 2 composants principaux :

- L'interface web
- Le serveur

Après cela, vous devrez effectuer des étapes supplémentaires, expliquées ci-dessous, pour terminer l'installation de Centreon MAP pour votre serveur distant Centreon.

## Synchronisation des images

Ajouter l'accès à la page de synchronisation des images **Administration > Paramètres > Images**.

```shell
[root@remote ~]# mysql centreon
MariaDB [centreon]> update topology SET topology_show='1' where topology_name='Images' ;
```

## Configuration de Centreon Broker

La configuration de **Centreon MAP** pour un serveur distant Centreon consiste à créer la configuration pour le Broker du serveur distant Centreon **à partir** du serveur central afin que, avec une sortie dédiée au Broker sur le serveur distant Centreon, Centreon MAP puisse recevoir des données en temps réel directement de son serveur distant.

Pour ce faire, vous devez modifier la configuration du **Centreon Broker Master** du serveur distant. Allez dans le menu **Configuration > Collecteurs > Configuration de Centreon Broker** et modifiez la configuration du serveur distant.

Dans l'onglet **Sortie**, créez une nouvelle sortie avec les paramètres suivants :

![image](../assets/graph-views/output_broker.png)

Pour terminer l'installation, générez, exportez la configuration et **redémarrez** Centreon Broker manuellement.

## Désinstallation de Centreon MAP

Sur un serveur distant, vous pouvez désinstaller le module **Centreon MAP** de la même manière que sur le serveur central Centreon. Toutes les configurations de **Centreon Broker** pour le serveur distant Centreon liées au module **Centreon MAP** doivent être supprimées manuellement. Consultez le chapitre ci-dessus pour savoir quelles sorties vous devez supprimer pour votre ou vos serveurs distants Centreon.
