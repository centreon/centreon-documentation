---
id: network-netgear-sseries-snmp
title: Netgear SSeries SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Netgear Smart Switches apporte un modèle d'hôte :
* Net-Netgear-Sseries-SNMP-custom

Il apporte les modèles de service suivants :

| Alias      | Modèle de services                  | Description                       | Défaut  |
|:-----------|:------------------------------------|:----------------------------------|:--------|
| Cpu        | Net-Netgear-Sseries-Cpu-SNMP        | Contrôle l'utilisation processeur | X       |
| Hardware   | Net-Netgear-Sseries-Hardware-SNMP   | Contrôle l'état du matériel       | X       |
| Interfaces | Net-Netgear-Sseries-Interfaces-SNMP | Contrôle les interfaces           | X       |
| Memory     | Net-Netgear-Sseries-Memory-SNMP     | Contrôle l'utilisation mémoire    |         |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                         | Description                                                             |
|:----------------------------------------|:------------------------------------------------------------------------|
| Net-Netgear-Sseries-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                   | Unit  |
| :---------------------------- | :---- |
| cpu.utilization.5s.percentage | %     |
| cpu.utilization.1m.percentage | %     |
| cpu.utilization.5m.percentage | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                    | Unit  |
| :--------------------------------------------- | :---- |
| fan status                                     |       |
| *fan_instance*#hardware.fan.speed.rpm          | rpm   |
| power supply status                            |       |
| temperature status                             |       |
| *sensor_instance*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Interface" label="Interface">

| Metric name                                               | Unit  |
| :-------------------------------------------------------- | :---- |
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       |  b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      |  b/s  |
| *interface_name*#interface.packets.in.error.percentage    |  %    |
| *interface_name*#interface.packets.in.discard.percentage  |  %    |
| *interface_name*#interface.packets.out.error.percentage   |  %    |
| *interface_name*#interface.packets.out.discard.percentage |  %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Unit  |
| :---------------------- | :---- |
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Netgear Smart Switches** :

```bash
yum install centreon-plugin-Network-Netgear-Sseries-Snmp
```

2. Sur l'interface web de Centreon, installer le Pack **Netgear SSeries SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Netgear Smart Switches** :

```bash
yum install centreon-plugin-Network-Netgear-Sseries-Snmp
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Netgear SSeries SNMP** :

```bash
yum install centreon-pack-network-netgear-sseries-snmp
```

3. Sur l'interface web de Centreon, installer le Pack **Netgear SSeries SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre équipement **Netgear Smart Switches**.
* Appliquez le modèle d'hôte **Net-Netgear-Sseries-SNMP-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping). 

| Obligatoire | Nom              | Description                                              |
| :---------- | :--------------- | :------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_netgear_sseries_snmp.pl \
    --plugin=network::netgear::sseries::snmp \
    --mode=cpu \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: cpu average usage: 48.83 % (5s), 40.43 % (1m), 19.85 % (5m) | 'cpu.utilization.5s.percentage'=48.83%;;;0;100 'cpu.utilization.1m.percentage'=40.43%;;;0;100 'cpu.utilization.5m.percentage'=19.85%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netgear_sseries_snmp.pl \
    --plugin=network::netgear::sseries::snmp \
    --mode=cpu \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netgear_sseries_snmp.pl \
    --plugin=network::netgear::sseries::snmp \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
