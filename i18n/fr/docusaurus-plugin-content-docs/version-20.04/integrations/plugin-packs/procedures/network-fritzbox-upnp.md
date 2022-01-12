---
id: network-fritzbox-upnp
title: Fritz!Box UPnP
---

## Contenu du Pack

### Objets supervisés

Le Pack Fritz!Box collecte les données pour:
* System
* Traffic

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--System-->

| Metric name           | Description                         | Unit  |
| :-------------------- | :---------------------------------- | :---- |
| connection status     | Connection and physical link status |       |
| system.uptime.seconds | Elapsed time since the last reboot  | s     |

<!--Traffic-->

| Metric name                                    | Description                                      | Unit  |
| :--------------------------------------------- | :----------------------------------------------- | :---- |
| system.interface.wan.traffic.in.bitspersecond  | Incoming traffic going through the WAN interface | b/s   |
| system.interface.wan.traffic.out.bitspersecond | Outgoing traffic going through the WAN interface | b/s   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Fritz!Box, l'UPnP doit être configuré.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Fritzbox-Upnp
```

2. Sur l'interface Web de Centreon, installer le Pack *Fritz!Box UPnP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Fritzbox-Upnp
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-network-fritzbox-upnp
```

3. Sur l'interface Web de Centreon, installer le Pack *Fritz!Box UPnP* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Fritzbox-UPNP-custom*

> Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name             | Description                                                                |
| :-------- | :--------------- | :------------------------------------------------------------------------- |
| X         | UPNPPORT         | Port used (Default: 49000)                                                 |
| X         | UPNPPROTO        | Specify https if needed (Default: 'http')                                  |
|           | UPNPEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_fritzbox_upnp.pl \
    --plugin=network::fritzbox::upnp::plugin \
    --mode=traffic \
    --hostname='10.30.2.79' \
    --port='49000' \
    --proto='http'
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Traffic In: 1.29 Mb/s, Traffic Out: 1.49 Mb/s | 'system.interface.wan.traffic.in.bitspersecond'=1287234b/s;;;0;10000000 'system.interface.wan.traffic.in.bitspersecond'=1487235b/s;;;0;10000000
```

Cette commande contrôle le traffic de l'interface WAN (```--mode=traffic```).

La commande se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _49000_ (```--port='49000'```) utilisant le protocol _http_ (```--proto='http'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fritzbox_upnp.pl \
    --plugin=network::fritzbox::upnp::plugin \
    --mode=traffic \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins)
