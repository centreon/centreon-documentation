---
id: network-switchs-alcatel-omniswitch-snmp
title: Alcatel Omniswitch
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Alcatel Omniswitch** apporte un modèle d'hôte :

* Net-Alcatel-OmniSwitch-SNMP-custom

Il apporte les modèles de service suivants :

| Alias                      | Modèle de service                                      | Description                                               | Défaut | Découverte |
|:---------------------------|:-------------------------------------------------------|:----------------------------------------------------------|:-------|:-----------|
| Traffic-Global             | Net-Alcatel-Omniswitc-Traffic-Global-SNMP              | Contrôle le traffic réseau de plusieurs interfaces réseau |        |            |
| Cpu                        | Net-Alcatel-Omniswitch-Cpu-SNMP                        | Contrôle le taux d'utilisation du CPU                     | X      |            |
| Flash-Memory               | Net-Alcatel-Omniswitch-Flash-Memory-SNMP               | Contrôle le taux d'utilisation de la mémoire Flash        | X      |            |
| Hardware                   | Net-Alcatel-Omniswitch-Hardware-SNMP                   | Contrôle l'état du hardware                               | X      |            |
| Memory                     | Net-Alcatel-Omniswitch-Memory-SNMP                     | Contrôle le taux d'utilisation de la mémoire              | X      |            |
| Packet-Errors-Generic-Id   | Net-Alcatel-Omniswitch-Packet-Errors-Generic-Id-SNMP   | Contrôle le pourcentage de paquets en erreur              |        |            |
| Packet-Errors-Generic-Name | Net-Alcatel-Omniswitch-Packet-Errors-Generic-Name-SNMP | Contrôle le pourcentage de paquets en erreur              |        |            |
| Packet-Errors-Global       | Net-Alcatel-Omniswitch-Packet-Errors-Global-SNMP       | Contrôle le pourcentage de paquets en erreur              |        | X          |
| Spanning-Tree              | Net-Alcatel-Omniswitch-SpanningTree-SNMP               | Contrôle l'état du spanning tree sur les interfaces       |        |            |
| Traffic-Generic-Id         | Net-Alcatel-Omniswitch-Traffic-Generic-Id-SNMP         | Contrôle le traffic réseau d'une interface réseau         |        |            |
| Traffic-Generic-Name       | Net-Alcatel-Omniswitch-Traffic-Generic-Name-SNMP       | Contrôle le traffic réseau d'une interface réseau         |        |            |
| Traffic-Global             | Net-Alcatel-Omniswitch-Traffic-Global-SNMP             | Contrôle le traffic réseau d'une interface réseau         |        | X          |

### Règles de découverte

| Nom de la règle                                | Description                                                           |
|:-----------------------------------------------|:----------------------------------------------------------------------|
| Net-Alcatel-Omniswitch-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Alcatel-Omniswitch-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

Could not retrive metrics

</TabItem>
<TabItem value="Flash-Memory" label="Flash-Memory">

| Métrique                   | Unité |
|:---------------------------|:------|
| *memory*#flash.usage.bytes | B     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

Could not retrive metrics

</TabItem>
<TabItem value="Memory" label="Memory">

Could not retrive metrics

</TabItem>
<TabItem value="Packet-Errors-Generic-Id" label="Packet-Errors-Generic-Id">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Packet-Errors-Generic-Name" label="Packet-Errors-Generic-Name">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Packet-Errors-Global" label="Packet-Errors-Global">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Métrique               | Unité |
|:-----------------------|:------|
| *spanningtrees*#status |       |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Alcatel Omniswitch** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [OmniSwitch](https://www.al-enterprise.com/en/search#q=omniswitch&t=all&sort=relevancy)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Alcatel Omniswitch** :

```bash
yum install centreon-plugin-Network-Switchs-Alcatel-Omniswitch-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Alcatel Omniswitch** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Alcatel Omniswitch** :

```bash
yum install centreon-plugin-Network-Switchs-Alcatel-Omniswitch-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Alcatel Omniswitch** :

```bash
yum install centreon-pack-network-switchs-alcatel-omniswitch-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Alcatel Omniswitch** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Alcatel Omniswitch**.
* Appliquez le modèle d'hôte **Net-Alcatel-OmniSwitch-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro **SNMPEXTRAOPTIONS**.

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --mode=interfaces \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --interface='' \
    --name \
    --warning-in-traffic='' \
    --critical-in-traffic='' \
    --warning-out-traffic='' \
    --critical-out-traffic='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Traffic In : 321.02b/s (-) Traffic Out : 382.02b/s (-) | 'interface.traffic.in.bitspersecond'=9000b/s;;;0; 'interface.traffic.out.bitspersecond'=9000b/s;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --mode=interfaces \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.