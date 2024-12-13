---
id: prerequisites
title: Prérequis
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette page vous donne des recommandations générales afin de déterminer la taille de votre plateforme.

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
* La période de rétention est de 12 mois.
* Chaque service a en moyenne 8 métriques.

Adaptez les chiffres suivants à vos valeurs réelles. Au cours du temps, vous serez peut-être amenés à ajuster la taille de votre plateforme au fur et à mesure que vous ajoutez plus d'hôtes.

<Tabs groupId="sync">
<TabItem value="Jusqu'à 500 hôtes" label="Jusqu'à 500 hôtes">

Serveur central seul :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 4 Go      |

Votre serveur central doit être partitionné de la manière suivante :

| Groupe de volumes (LVM) | Partition               | Description | Taille                                                     |
|---------| ---------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go                                                                          |
| vg_root | /                          | racine du système            | 20 Go                               |
| vg_root | swap                       | swap | 4 Go                                |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                              |
| vg_data | /var/lib/centreon          | contient en majorité des fichiers RRD | 34 Go       |
| vg_data | /var/lib/centreon-broker   | contient les fichiers de rétention de Broker | 5 Go                           |
| vg_data | /var/lib/centreon-engine   | contient les fichiers de rétention d'Engine  | 5 Go                           |
| vg_data | /var/lib/mysql (seulement si le SGBD est situé sur le serveur central)          | base de données | 106 Go        |
| vg_data | /var/cache/centreon/backup | répertoire de sauvegarde | 10 Go <br/>Si vous utilisez la fonctionnalité de sauvegarde, prévoyez les caractéristiques suivantes : <ul><li>taille de la partition /var/lib/mysql * 0,6</li><li>valable pour 1 sauvegarde complète et 6 partielles</li><li>attention, cela reste une estimation et n'exclut pas un contrôle humain</li></ul> |
| vg_data || Espace libre (non alloué) | 5 Go |

> Votre système doit utiliser LVM pour gérer vos partitions.

Dans certains cas, il peut être nécessaire de mettre en place une architecture distribuée, même pour moins de 500 hôtes. Le collecteur aura alors les mêmes caractéristiques que dans l'onglet "Jusqu'à 1 000 hôtes".

</TabItem>
<TabItem value="Jusqu'à 1 000 hôtes" label="Jusqu'à 1 000 hôtes">

Architecture distribuée :

* 1 serveur central
* 1 collecteur par tranche de 500 hôtes

**Serveur central**

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 8 Go      |

Votre serveur central doit être partitionné de la manière suivante :

| Groupe de volumes (LVM) | Partition               | Description | Taille                                                     |
|---------| ---------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go                                                                          |
| vg_root | /                          | racine du système            | 20 Go                               |
| vg_root | swap                       | swap | 4 Go                                |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                              |
| vg_data | /var/lib/centreon          | contient en majorité des fichiers RRD | 68 Go       |
| vg_data | /var/lib/centreon-broker   | contient les fichiers de rétention de Broker | 10 Go                           |
| vg_data | /var/lib/centreon-engine   | contient les fichiers de rétention d'Engine  | 5 Go                           |
| vg_data | /var/lib/mysql (seulement si le SGBD est situé sur le serveur central)          | base de données | 213 Go        |
| vg_data | /var/cache/centreon/backup | répertoire de sauvegarde |  10 Go <br/>Si vous utilisez la fonctionnalité de sauvegarde, prévoyez les caractéristiques suivantes : <ul><li>taille de la partition /var/lib/mysql * 0,6</li><li>valable pour 1 sauvegarde complète et 6 partielles</li><li>attention, cela reste une estimation et n'exclut pas un contrôle humain</li></ul>   |
| vg_data | | Espace libre (non alloué) | 5 Go |

> Votre système doit utiliser LVM pour gérer vos partitions.

**Collecteurs**

* Pour traiter des environnements de test ou des petits périmètres (jusqu'à 2000 services avec des contrôles toutes les 5 minutes et 500 services avec des contrôles toutes les minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* Pour traiter des environnements de production (jusqu'à 7000 services avec des contrôles toutes les 5 minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

Vos collecteurs doivent être partitionnés de la manière suivante :

| Groupe de volumes (LVM) | Partition                  | Description | Taille                                                     |
|-------------------------|----------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go    |
| vg_root | /                          | racine du système          | 20 Go                                |
| vg_root | swap                       | swap | 4 Go                               |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                                |
| vg_data | /var/lib/centreon-engine   | contient les fichiers de rétention d'Engine | 5 Go                               |

> Votre système doit utiliser LVM pour gérer vos partitions.

> Le nombre de vCPU par collecteur dépend principalement de la complexité des contrôles. Si vous utilisez des connecteurs ou réalisez de nombreux appels vers des applications tierces, ajoutez des vCPU supplémentaires.

</TabItem>
<TabItem value="Jusqu'à 2 500 hôtes" label="Jusqu'à 2 500 hôtes">

Architecture distribuée :

* 1 serveur central
* 1 collecteur par tranche de 500 hôtes

**Serveur central**

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 8 Go      |

Votre serveur central doit être partitionné de la manière suivante :

| Groupe de volumes (LVM) | Partition               | Description | Taille                                                     |
|---------| ---------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go                                                                          |
| vg_root | /                          | racine du système            | 20 Go                               |
| vg_root | swap                       | swap | 4 Go                                |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                              |
| vg_data | /var/lib/centreon          | contient en majorité des fichiers RRD | 169 Go       |
| vg_data | /var/lib/centreon-broker   | contient les fichiers de rétention de Broker | 25 Go                           |
| vg_data | /var/lib/centreon-engine   | contient les fichiers de rétention d'Engine  | 5 Go                           |
| vg_data | /var/lib/mysql (seulement si le SGBD est situé sur le serveur central)          | base de données | 538 Go        |
| vg_data | /var/cache/centreon/backup | répertoire de sauvegarde |  10 Go <br/>Si vous utilisez la fonctionnalité de sauvegarde, prévoyez les caractéristiques suivantes : <ul><li>taille de la partition /var/lib/mysql * 0,6</li><li>valable pour 1 sauvegarde complète et 6 partielles</li><li>attention, cela reste une estimation et n'exclut pas un contrôle humain</li></ul>   |
| vg_data | | Espace libre (non alloué) | 5 Go |

> Votre système doit utiliser LVM pour gérer vos partitions.

**Collecteurs**

* Pour traiter des environnements de test ou des petits périmètres (jusqu'à 2000 services avec des contrôles toutes les 5 minutes et 500 services avec des contrôles toutes les minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* Pour traiter des environnements de production (jusqu'à 7000 services avec des contrôles toutes les 5 minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

Vos collecteurs doivent être partitionnés de la manière suivante :

| Groupe de volumes (LVM) | Partition                  | Description | Taille                                                     |
|-------------------------|----------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go    |
| vg_root | /                          | racine du système          | 20 Go                                |
| vg_root | swap                       | swap | 4 Go                               |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                                |
| vg_data | /var/lib/centreon-engine   | contient les fichiers de rétention d'Engine | 5 Go                               |

> Votre système doit utiliser LVM pour gérer vos partitions.

> Le nombre de vCPU par collecteur dépend principalement de la complexité des contrôles. Si vous utilisez des connecteurs ou réalisez de nombreux appels vers des applications tierces, ajoutez des vCPU supplémentaires.

</TabItem>
<TabItem value="Jusqu'à 5 000 hôtes" label="Jusqu'à 5 000 hôtes">

Architecture distribuée :

* 1 serveur central sans base de données
* 1 serveur de base de données
* 1 collecteur par tranche de 500 hôtes

**Serveur central**

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 8 Go      |

Votre serveur central doit être partitionné de la manière suivante :

| Groupe de volumes (LVM) | Partition               | Description | Taille                                                     |
|---------| ---------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go                                                                          |
| vg_root | /                          | racine du système            | 20 Go                               |
| vg_root | swap                       | swap | 4 Go                                |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                              |
| vg_data | /var/lib/centreon          | contient en majorité des fichiers RRD | 339 Go       |
| vg_data | /var/lib/centreon-broker   | contient les fichiers de rétention de Broker | 50 Go                           |
| vg_data | /var/lib/centreon-engine   | contient les fichiers de rétention d'Engine  | 5 Go                           |
| vg_data | /var/cache/centreon/backup | répertoire de sauvegarde |  10 Go <br/>Si vous utilisez la fonctionnalité de sauvegarde, prévoyez les caractéristiques suivantes : <ul><li>taille de la partition /var/lib/mysql * 0,6</li><li>valable pour 1 sauvegarde complète et 6 partielles</li><li>attention, cela reste une estimation et n'exclut pas un contrôle humain</li></ul>   |

**Serveur de bases de données**

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU                         | 4 vCPU    |
| RAM                         | 8 Go      |

Votre serveur doit être partitionné de la manière suivante :

| Groupe de volumes (LVM) | Partition               | Description | Taille                                                     |
|---------| ---------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go                                                                          |
| vg_root | /                          | racine du système            | 20 Go                               |
| vg_root | swap                       | swap | 4 Go                                |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                              |
| vg_data | /var/lib/mysql             | base de données | 1094 Go        |
| vg_data | | Espace libre (non alloué) | 5 Go |

> Votre système doit utiliser LVM pour gérer vos partitions.

**Collecteurs**

* Pour traiter des environnements de test ou des petits périmètres (jusqu'à 2000 services avec des contrôles toutes les 5 minutes et 500 services avec des contrôles toutes les minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* Pour traiter des environnements de production (jusqu'à 7000 services avec des contrôles toutes les 5 minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

Vos collecteurs doivent être partitionnés de la manière suivante :

| Groupe de volumes (LVM) | Partition                  | Description | Taille                                                     |
|-------------------------|----------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go    |
| vg_root | /                          | racine du système          | 20 Go                                |
| vg_root | swap                       | swap | 4 Go                               |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                                |
| vg_data| /var/lib/centreon-engine   | contient les fichiers de rétention d'Engine | 5 Go                               |

> Votre système doit utiliser LVM pour gérer vos partitions.

> Le nombre de vCPU par collecteur dépend principalement de la complexité des contrôles. Si vous utilisez des connecteurs ou réalisez de nombreux appels vers des applications tierces, ajoutez des vCPU supplémentaires.

</TabItem>
<TabItem value="Jusqu'à 10 000 hôtes" label="Jusqu'à 10 000 hôtes">

Architecture distribuée :

* 1 serveur central sans base de données
* 1 serveur de base de données
* 1 collecteur par tranche de 500 hôtes

**Serveur central**

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU (cœur logique à 3Ghz)   | 8 vCPU    |
| RAM                         | 8 Go      |

Votre serveur central doit être partitionné de la manière suivante :

| Groupe de volumes (LVM) | Partition               | Description | Taille                                                     |
|---------| ---------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go                                                                          |
| vg_root | /                          | racine du système            | 20 Go                               |
| vg_root | swap                       | swap | 4 Go                                |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                              |
| vg_data | /var/lib/centreon          | contient en majorité des fichiers RRD | 677 Go       |
| vg_data | /var/lib/centreon-broker   | contient les fichiers de rétention de Broker | 50 Go                           |
| vg_data | /var/lib/centreon-engine   | contient les fichiers de rétention d'Engine  | 5 Go                           |
| vg_data | /var/cache/centreon/backup | répertoire de sauvegarde |  10 Go <br/>Si vous utilisez la fonctionnalité de sauvegarde, prévoyez les caractéristiques suivantes : <ul><li>taille de la partition /var/lib/mysql * 0,6</li><li>valable pour 1 sauvegarde complète et 6 partielles</li><li>attention, cela reste une estimation et n'exclut pas un contrôle humain</li></ul>   |

> Votre système doit utiliser LVM pour gérer vos partitions.

**Serveur de bases de données**

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU                         | 8 vCPU    |
| RAM                         | 8 Go      |

Votre serveur doit être partitionné de la manière suivante :

| Groupe de volumes (LVM) | Partition               | Description | Taille                                                     |
|---------| ---------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go                                                                          |
| vg_root | /                          | racine du système            | 20 Go                               |
| vg_root | swap                       | swap | 4 Go                                |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                              |
| vg_data | /var/lib/mysql             | base de données | 2257 Go        |
| vg_data | | Espace libre (non alloué) | 5 Go |

> Votre système doit utiliser LVM pour gérer vos partitions.

**Collecteurs**

* Pour traiter des environnements de test ou des petits périmètres (jusqu'à 2000 services avec des contrôles toutes les 5 minutes et 500 services avec des contrôles toutes les minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* Pour traiter des environnements de production (jusqu'à 7000 services avec des contrôles toutes les 5 minutes) :

| Élément                     | Valeur    |
| ----------------------------| --------- |
| CPU  (cœur logique à 3Ghz)  | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

Vos collecteurs doivent être partitionnés de la manière suivante :

| Groupe de volumes (LVM) | Partition                  | Description | Taille                                                     |
|-------------------------|----------------------------|-------------|----------------------------------------------------------|
|         | /boot                      | images de boot | 1 Go    |
| vg_root | /                          | racine du système          | 20 Go                                |
| vg_root | swap                       | swap | 4 Go                               |
| vg_root | /var/log                   | contient tous les fichiers de log | 10 Go                                |
| vg_data | /var/lib/centreon-engine   | contient les fichiers de rétention d'Engine | 5 Go                               |

> Votre système doit utiliser LVM pour gérer vos partitions.

> Le nombre de vCPU par collecteur dépend principalement de la complexité des contrôles. Si vous utilisez des connecteurs ou réalisez de nombreux appels vers des applications tierces, ajoutez des vCPU supplémentaires.

</TabItem>
<TabItem value="Plus de 10 000 hôtes" label="Plus de 10 000 hôtes">

Pour de grosses volumétries de données, contactez votre commercial Centreon.

</TabItem>
</Tabs>

## Flux réseau

Si vous avez des pare-feu ou des équipements de sécurité en place, vérifiez le [tableau des flux réseau](./technical.md#tableaux-des-flux-réseau).
