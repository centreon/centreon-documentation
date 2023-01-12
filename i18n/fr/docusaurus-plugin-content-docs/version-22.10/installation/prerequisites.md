---
id: prerequisites
title: Prérequis
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette page vous donne des recommandations générales afin de déterminer la taille de votre plateforme. Pour des cas plus complexes, voici un [fichier](../assets/files/Centreon_platform_sizing.xlsx) permettant de calculer le dimensionnement de votre plateforme (nombre de serveurs, espace disque, etc).

## Architecture

Utilisez d'abord les recommandations de la page [Architectures](./architectures.md#de-quel-type-darchitecture-avez-vous-besoin) pour déterminer le type d'architcture dont vous avez besoin.

## Caractéristiques des serveurs

* Plus vous supervisez de services, plus vous avez besoin de CPU.
* L'espace utilisé pour collecter les données de performance dépend de plusieurs critères :

   * Fréquence des contrôles
   * Nombre de contrôles
   * Période de rétention
   * Nombre moyen de métriques par service

* Le nombre d'utilisateurs connectés simultanément à l'interface du central ou du serveur distant a un impact sur la performance. Si beaucoup d'utilisateurs devront de se connecter à l'interface Centreon en même temps, vous aurez besoin de plus de CPU.

Les données ci-après sont des estimations en fonction des critères suivants :

* Une moyenne de 10 services par hôte.
* Les données sont collectées toutes les 5 minutes.
* La période de rétention est de 6 mois.
* Chaque service a 2 métriques.

Adaptez les chiffres suivants à vos valeurs réelles.

<Tabs groupId="sync">
<TabItem value="<200 hôtes" label="<200 hôtes">

Serveur central seul :

* 4 CPU
* RAM: 4 GB

Votre serveur central doit être partitionné de la manière suivante :

| Partition               | Description | Taille                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 à 1.5 la taille totale de la mémoire vive                                |
| /                          | racine du système            | au moins 20 Go                               |
| /var/log                   | contient tous les fichiers de log | au moins 10 Go                              |
| /var/lib/centreon-broker   | contient les fichiers de rétention | au moins 5 Go                           |
| /var/cache/centreon/backup | répertoire de sauvegarde | au moins 10 Go (penser à exporter les sauvegardes de manière régulière puis supprimer les données exportées) |
| /var/lib/centreon          | contient en majorité des fichiers RRD | 2 Go       |
| /var/lib/mysql (seulement si le SGBD est situé sur le serveur central)          | base de données | 5 Go        |

> Votre système doit utiliser LVM pour gérer vos partitions.

</TabItem>
<TabItem value="200 à 2000 hôtes" label="200 à 2000 hôtes">

Architecture distribuée :

* 1 serveur central
* 1 collecteur par tranche de 500 hôtes

### Serveur central

* 4 CPU
* RAM: 4 Go

Votre serveur central doit être partitionné de la manière suivante :

| Partition               | Description | Taille                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 à 1.5 la taille totale de la mémoire vive                                |
| /                          | racine du système            | au moins 20 Go                               |
| /var/log                   | contient tous les fichiers de log | au moins 10 Go                              |
| /var/lib/centreon-broker   | contient les fichiers de rétention | au moins 5 Go                           |
| /var/cache/centreon/backup | répertoire de sauvegarde | au moins 10 Go (penser à exporter les sauvegardes de manière régulière puis supprimer les données exportées) |
| /var/lib/centreon          | contient en majorité des fichiers RRD | 2 à 5 Go       |
| /var/lib/mysql (seulement si le SGBD est situé sur le serveur central)          | base de données | 5 à 10 Go        |

> Votre système doit utiliser LVM pour gérer vos partitions.

> 1 Go d'espace libre non alloué doit être disponible sur le **volum group** hébergeant la partition **/var/lib/mysql**
> lorsque vous souhaitez utiliser le mode de sauvegarde **snapshot LVM**.

### Collecteurs

Pour traiter jusqu'à 7000 services avec des contrôles toutes les 5 minutes :

  | Élément                     | Valeur    |
  | ----------------------------| --------- |
  | CPU (cœur logique à 3Ghz)   | 4 vCPU    |
  | RAM                         | 4 Go      |

Vos collecteurs doivent être partitionnés de la manière suivante :

| Partition                  | Description | Taille                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 à 1.5 la taille totale de la mémoire vive                               |
| /                          | racine du système          | au moins 20 Go                                |
| /var/log                   | contient tous les fichiers de log | au moins 10 Go                                |
| /var/lib/centreon-broker   | contient les fichiers de rétention | au moins 5 Go                               |

> Votre système doit utiliser LVM pour gérer vos partitions.

> Le nombre de vCPU par collecteur dépend principalement de la complexité des contrôles. Si vous utilisez des connecteurs ou réalisez de nombreux appels vers des applications tierces, ajoutez des vCPU supplémentaires.

</TabItem>
<TabItem value="2000 to 10000 hosts" label="2000 to 10000 hosts">

Architecture distribuée :

* 1 serveur central
* 1 collecteur par tranche de 500 hôtes

### Serveur central

* 8 CPU
* RAM: 8 Go

Votre serveur central doit être partitionné de la manière suivante :

| Partition               | Description | Taille                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 à 1.5 la taille totale de la mémoire vive                                |
| /                          | racine du système            | au moins 20 Go                               |
| /var/log                   | contient tous les fichiers de log | au moins 10 Go                              |
| /var/lib/centreon-broker   | contient les fichiers de rétention | au moins 5 Go                           |
| /var/cache/centreon/backup | répertoire de sauvegarde | au moins 10 Go (penser à exporter les sauvegardes de manière régulière puis supprimer les données exportées) |
| /var/lib/centreon          | contient en majorité des fichiers RRD | 54 à 270 Go       |
| /var/lib/mysql (seulement si le SGBD est situé sur le serveur central)          | base de données | 186 à 930 Go        |

> Votre système doit utiliser LVM pour gérer vos partitions.

> 1 Go d'espace libre non alloué doit être disponible sur le **volum group** hébergeant la partition **/var/lib/mysql**
> lorsque vous souhaitez utiliser le mode de sauvegarde **snapshot LVM**.

### Collecteurs

Pour traiter jusqu'à 7000 services avec des contrôles toutes les 5 minutes :

  | Élément                     | Valeur    |
  | ----------------------------| --------- |
  | CPU (cœur logique à 3Ghz)   | 4 vCPU    |
  | RAM                         | 4 Go      |

Vos collecteurs doivent être partitionnés de la manière suivante :

| Partition                  | Description | Taille                                                     |
|----------------------------|-------------|----------------------------------------------------------|
| swap                       | swap | 1 à 1.5 la taille totale de la mémoire vive                               |
| /                          | racine du système          | au moins 20 Go                                |
| /var/log                   | contient tous les fichiers de log | au moins 10 Go                                |
| /var/lib/centreon-broker   | contient les fichiers de rétention | au moins 5 Go                               |

> Votre système doit utiliser LVM pour gérer vos partitions.

> Le nombre de vCPU par collecteur dépend principalement de la complexité des contrôles. Si vous utilisez des connecteurs ou réalisez de nombreux appels vers des applications tierces, ajoutez des vCPU supplémentaires.

</TabItem>
<TabItem value=">10000 hosts" label=">10000 hosts">

Pour de grosses volumétries de données, contactez votre commercial Centreon.

</TabItem>
</Tabs>
