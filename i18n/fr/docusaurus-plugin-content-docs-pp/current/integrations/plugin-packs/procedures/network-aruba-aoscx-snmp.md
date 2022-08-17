---
id: network-aruba-aoscx-snmp
title: ArubaOS-CX SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Objets supervisés

Le Pack Centreon **ArubaOS-CX SNMP** apporte un modèle d'hôte :
* Net-Aruba-Aoscx-SNMP-custom

Il apporte les modèles de services suivants :

| Alias      | Modèle de services              | Description                             | Défaut  |
|:-----------|:--------------------------------|:----------------------------------------|:--------|
| Cpu        | Net-Aruba-Aoscx-Cpu-SNMP        | Contrôle l'utilisation processeur       | X       |
| Hardware   | Net-Aruba-Aoscx-Hardware-SNMP   | Contrôle l'état du matériel             | X       |
| Interfaces | Net-Aruba-Aoscx-Interfaces-SNMP | Contrôle les interfaces                 |         |
| Memory     | Net-Aruba-Aoscx-Memory-SNMP     | Contrôle l'utilisation mémoire          | X       |
| Vsf        | Net-Aruba-Aoscx-Vsf-SNMP        | Contrôle le virtual switching fabric    | X       |
| Vsx        | Net-Aruba-Aoscx-Vsx-SNMP        | Contrôle le virtual switching extension | X       |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                     | Description                                                             |
|:------------------------------------|:------------------------------------------------------------------------|
| Net-Aruba-Aoscx-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                              | Unit |
| :--------------------------------------- | :--- |
| *module_name*#cpu.utilization.percentage | %    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                | Unit |
| :----------------------------------------- | :--- |
| *fan_name*#hardware.fan.speed.rpm          | rpm  |
| fan tray status                            |      |
| psu status                                 |      |
| *psu_name*#hardware.psu.power.watt         | W    |
| temperature status                         |      |
| *sensor_name*#hardware.temperature.celsius | C    |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

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

| Metric name                           | Unit |
| :------------------------------------ | :--- |
| *module_name*#memory.usage.percentage | %    |

</TabItem>
<TabItem value="Vsf" label="Vsf">

| Metric name                                   | Unit |
| :-------------------------------------------- | :--- |
| vsf status                                    |      |
| member status                                 |      |
| stack.members.total.count                     |      |
| *member_id*#member.cpu.utilization.percentage | %    |
| *member_id*#member.memory.usage.percentage    | %    |

</TabItem>
<TabItem value="Vsx" label="Vsx">

| Metric name                     | Unit |
| :------------------------------ | :--- |
| device status                   |      |
| isl status                      |      |
| vsx.isl.packets.in.count        |      |
| vsx.isl.packets.out.count       |      |
| keepalive status                |      |
| vsx.keepalive.packets.in.count  |      |
| vsx.keepalive.packets.out.count |      |

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

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **ArubaOS-CX** :

```bash
yum install centreon-plugin-Network-Aruba-Aoscx-Snmp
```

2. Sur l'interface web de Centreon, installer le Pack **ArubaOS-CX SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **ArubaOS-CX** :

```bash
yum install centreon-plugin-Network-Aruba-Aoscx-Snmp
```

2. Sur le serveur central Centreon, installer le RPM du Pack **ArubaOS-CX SNMP** :

```bash
yum install centreon-pack-network-aruba-aoscx-snmp
```

3. Sur l'interface web de Centreon, installer le Pack **ArubaOS-CX SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre équipement **ArubaOS-CX**.
* Appliquez le modèle d'hôte **Net-Aruba-Aoscx-SNMP-custom**.
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
/usr/lib/centreon/plugins/centreon_aruba_aoscx_snmp.pl \
    --plugin=network::aruba::aoscx::snmp::plugin \
    --mode=vsf \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='aruba_ro' \
    --warning-cpu-utilization='90' \
    --critical-cpu-utilization='95' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: vsf operational status: no_split - All stack members are ok | '1#member.cpu.utilization.percentage'=16.00%;0:90;0:95;0;100 '1#member.memory.usage.percentage'=24.00%;;;0;100 '2#member.cpu.utilization.percentage'=4.00%;0:90;0:95;0;100 '2#member.memory.usage.percentage'=14.00%;;;0;100 '3#member.cpu.utilization.percentage'=4.00%;0:90;0:95;0;100 '3#member.memory.usage.percentage'=8.00%;;;0;100 '4#member.cpu.utilization.percentage'=4.00%;0:90;0:95;0;100 '4#member.memory.usage.percentage'=8.00%;;;0;100
checking stack member '1'
    role: master [status: ready]
    cpu usage: 16.00%
    memory used: 24.00 %
checking stack member '2'
    role: standby [status: ready]
    cpu usage: 4.00%
    memory used: 14.00 %
checking stack member '3'
    role: member [status: ready]
    cpu usage: 4.00%
    memory used: 8.00 %
checking stack member '4'
    role: member [status: ready]
    cpu usage: 4.00%
    memory used: 8.00 %
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aruba_aoscx_snmp.pl \
    --plugin=network::aruba::aoscx::snmp::plugin \
    --mode=vsf \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aruba_aoscx_snmp.pl \
    --plugin=network::aruba::aoscx::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
