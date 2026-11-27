---
id: architectures
title: Architectures
description: "Comparez les architectures Centreon (central seul, distribuée avec collecteurs et serveurs distants, SGBD déporté) et choisissez la plus adaptée."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Si vous ne supervisez qu'un petit nombre d'hôtes et de services, un serveur central est suffisant. Cependant, si vous supervisez un grand nombre d'hôtes et de services, vous devrez distribuer la charge sur plusieurs serveurs.

> Si vous ne connaissez pas les termes "serveur distant" et "collecteur", voyez [Éléments d'une plateforme Centreon](../getting-started/platform.md).

## Architectures disponibles

### Serveur central seul

Si vous ne supervisez que peu d'hôtes, vous n'aurez besoin que d'un serveur central. Le serveur central effectuera toute la supervision lui-même. Consultez notre [guide de dimensionnement](./prerequisites.md#architecture-et-dimensionnement-du-serveur-central-et-de-la-base-de-données) pour déterminer l'architecture qui correspond à votre cas.

### Architecture distribuée

Une architecture distribuée consiste en :

* Un serveur central qui permet de configurer la supervision, d'afficher les données collectées et d'agir dessus.
* Un ou plusieurs serveurs distants qui permettent d'afficher les données collectées et d'agir dessus.

et/ou

* Un ou plusieurs collecteurs, qui collectent les données.

Tous les serveurs de votre architecture (serveur central, serveurs distants et collecteurs) doivent avoir la même version majeure de Centreon. Il est également recommandé d'avoir la même version mineure.

Exemple d'architecture distribuée avec 3 serveurs distants et 7 collecteurs. Un collecteur peut être rattaché à un serveur distant ou directement au serveur central.

```mermaid
flowchart LR
  accTitle: Exemple d'architecture distribuée
  accDescr: Un serveur central, auquel sont rattachés 3 serveurs distants et un collecteur. Chaque serveur distant a 2 collecteurs.

  central["Serveur central"]:::central

  remote1["Serveur distant 1"]:::remote
  remote2["Serveur distant 2"]:::remote
  remote3["Serveur distant 3"]:::remote

  poller1(["Collecteur 1"]):::poller
  poller2(["Collecteur 2"]):::poller
  poller3(["Collecteur 3"]):::poller
  poller4(["Collecteur 4"]):::poller
  poller5(["Collecteur 5"]):::poller
  poller6(["Collecteur 6"]):::poller
  poller7(["Collecteur 7"]):::poller

  central --- remote1 & remote2 & remote3 & poller7
  remote1 --- poller1 & poller2
  remote2 --- poller3 & poller4
  remote3 --- poller5 & poller6
```

### SGBD déporté

Votre serveur central peut avoir une base de données déportée. Une architecture avec base de données déportée consiste en :

* Un serveur central qui permet de configurer la supervision, d'afficher les données collectées et d'agir dessus.
* Un serveur de base de données chargé de stocker toutes les données collectées
* En option, un ou plusieurs serveurs distants/collecteurs qui collectent des données.

## De quel type d'architecture avez-vous besoin ?

**Faut-il des collecteurs ?**

```mermaid
flowchart LR
  accTitle: Faut-il des collecteurs ?
  accDescr: Si vous supervisez des réseaux cloisonnés ou des sites distants, ou 500 hôtes ou plus, ajoutez des collecteurs au serveur central. Sinon, un serveur central seul suffit.

  sites("Réseaux cloisonnés ou sites distants à superviser ?"):::question
  hosts("Combien d'hôtes à superviser ?"):::question
  withPollers["Serveur central + collecteurs"]:::answer
  standalone["Serveur central seul"]:::answer

  sites -- Oui --> withPollers
  sites -- Non --> hosts
  hosts -- "500 ou plus" --> withPollers
  hosts -- "Moins de 500" --> standalone
```

**Où installer la base de données ?**

```mermaid
flowchart LR
  accTitle: Où installer la base de données ?
  accDescr: Au-delà de 5 000 hôtes, la base de données doit être sur un serveur séparé. Sinon, elle peut être sur le serveur central.

  volume("Plus de 5 000 hôtes à superviser ?"):::question
  remoteDb[("Serveur de base de données séparé")]:::database
  localDb[("Base de données sur le serveur central")]:::answer

  volume -- Oui --> remoteDb
  volume -- Non --> localDb
```

Lorsque vous construirez votre plateforme Centreon, gardez les points suivants à l'esprit :

* Le nombre d'hôtes à superviser n'est pas suffisant pour déterminer la taille de votre plateforme. Vous devrez également prendre en compte le nombre de services par hôtes, ainsi que le nombre de métriques par service.
* Un autre critère à prendre en compte est si vous devez utiliser des collecteurs ou des serveurs distants pour séparer vos ressources suivant des critères géographiques ou logiques. Exemple : Si votre plateforme doit superviser une DMZ, il est plus simple (et plus sûr) de placer un serveur distant dans le réseau de la DMZ.
* Un serveur central ne doit superviser qu'un petit nombre d'hôtes et de services, car son CPU doit d'abord gérer les données en provenance des serveurs distants et des collecteurs (la remarque est également vraie pour des serveurs distants). Plus vous supervisez d'hôtes et de services sur votre serveur central, plus il existe de risque que l'interface soit ralentie, car le moteur de supervision utilisera plus de ressources.
* Le serveur central doit superviser tous les serveurs distants et les collecteurs de votre architecture.
* Le serveur central doit être supervisé par un collecteur ou un serveur distant.
* Utilisez un serveur distant au lieu d'un collecteur si vous avez besoin de visulaser des données sur un site autre que celui du serveur central.
