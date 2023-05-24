---
id: network-huawei-snmp
title: Huawei
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Huawei** apporte un modèle d'hôte :

* Net-Huawei-SNMP-custom

Il apporte les modèles de service suivants :

| Alias      | Modèle de service          | Description                                    | Défaut | Découverte |
|:-----------|:---------------------------|:-----------------------------------------------|:-------|:-----------|
| Cpu        | Net-Huawei-Cpu-SNMP        | Contrôle du taux d'utilisation des processeurs | X      |            |
| Interfaces | Net-Huawei-Interfaces-SNMP | Contrôle les interfaces                        |        | X          |
| Memory     | Net-Huawei-Memory-SNMP     | Contrôle du taux d'utilisation des mémoire     | X      |            |
| Uptime     | Net-Huawei-Uptime-SNMP     | Contrôle l'uptime                              | X      |            |

### Règles de découverte

| Nom de la règle                    | Description                                                           |
|:-----------------------------------|:----------------------------------------------------------------------|
| Net-Huawei-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Huawei-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique    | Unité |
|:------------|:------|
| *cpu*#usage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique       | Unité |
|:---------------|:------|
| *memory*#usage |       |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique    | Unité |
|:------------|:------|
| uptime      |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Huawei** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [Configuring a switch to communicate with an NMS](https://support.huawei.com/enterprise/en/doc/EDOC1000141939/4dc2df25/example-for-configuring-a-switch-to-communicate-with-an-nms-using-snmpv2c)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Huawei** :

```bash
yum install centreon-plugin-Network-Huawei-Snmp
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **Huawei** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Huawei** :

```bash
yum install centreon-plugin-Network-Huawei-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **Huawei** :

```bash
yum install centreon-pack-network-huawei-snmp
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **Huawei** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Huawei**.
* Appliquez le modèle d'hôte **Net-Huawei-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description         |
|:------------|:-----------------|:--------------------|
|             | SNMPEXTRAOPTIONS |                     |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_huawei_snmp.pl \
    --plugin=network::huawei::snmp::plugin \
    --mode=uptime \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --maxrepetitions=20 \
    --warning-uptime='' \
    --critical-uptime='3600:' \
    --check-overload \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: System uptime is: 137d 20h 37m 57s | 'uptime'=11911077s;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_huawei_snmp.pl \
    --plugin=network::huawei::snmp::plugin \
    --mode=uptime \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_huawei_snmp.pl \
    --plugin=network::huawei::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.