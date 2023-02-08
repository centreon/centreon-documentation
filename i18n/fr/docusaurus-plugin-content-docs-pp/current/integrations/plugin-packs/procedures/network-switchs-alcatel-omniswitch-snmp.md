---
id: network-switchs-alcatel-omniswitch-snmp
title: Alcatel Omniswitch
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Alcatel Omniswitch** apporte un modèle d'hôte :

* Net-Alcatel-OmniSwitch-SNMP-custom

Il apporte les modèles de service suivants :

| Alias           | Modèle de service                           | Description                                               | Défaut |
|:----------------|:--------------------------------------------|:----------------------------------------------------------|:-------|
| Cpu             | Net-Alcatel-Omniswitch-Cpu-SNMP             | Contrôle le taux d'utilisation du CPU                     | X      |
| Flash-Memory    | Net-Alcatel-Omniswitch-Flash-Memory-SNMP    | Contrôle le taux d'utilisation de la mémoire Flash        | X      |
| Hardware        | Net-Alcatel-Omniswitch-Hardware-SNMP        | Contrôle l'état du hardware                               | X      |
| Interfaces      | Net-Alcatel-Omniswitch-Interfaces-SNMP      | Contrôle les interfaces                                   |        |
| Memory          | Net-Alcatel-Omniswitch-Memory-SNMP          | Contrôle le taux d'utilisation de la mémoire              | X      |
| Spanning-Tree   | Net-Alcatel-Omniswitch-SpanningTree-SNMP    | Contrôle l'état du spanning tree sur les interfaces       |        |
| Virtual-Chassis | Net-Alcatel-Omniswitch-Virtual-Chassis-SNMP | Contrôle l'état des châssis virtuels                      |        |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                            | Description                                                           |
|:-------------------------------------------|:----------------------------------------------------------------------|
| Net-Alcatel-Omniswitch-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization         |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

Could not retrieve metrics

</TabItem>
<TabItem value="Flash-Memory" label="Flash-Memory">

| Métrique                   | Unité |
|:---------------------------|:------|
| *memory*#flash.usage.bytes | B     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

Could not retrieve metrics

</TabItem>
<TabItem value="Memory" label="Memory">

Could not retrieve metrics

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                  | Unité |
|:--------------------------------------------------------- |:----- |
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Métrique               | Unité |
|:-----------------------|:------|
| *spanningtrees*#status |       |

</TabItem>
<TabItem value="Virtual-Chassis" label="Virtual-Chassis">

| Metric Name            | Unit  |
|:-----------------------|:------|
| chassis.detected.count |       |
| virtual chassis status |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Alcatel Omniswitch** en SNMP, il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
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

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** et **IP Address / DNS** correspondant à votre équipement **Alcatel Omniswitch**.
* Appliquez le modèle d'hôte **Net-Alcatel-OmniSwitch-SNMP-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Nom              | Description                                              |
| :---------- | :--------------- | :------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_alcatel_omniswitch_snmp.pl \
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
/usr/lib/centreon/plugins/centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --mode=interfaces \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
