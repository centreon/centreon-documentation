---
id: network-raisecom-snmp
title: Raisecom SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Raisecom** apporte un modèle d'hôte :

* Net-Raisecom-SNMP-custom

Il apporte les modèles de service suivants :

| Alias      | Modèle de service            | Description                                               | Défaut | Découverte |
|:-----------|:-----------------------------|:----------------------------------------------------------|:-------|:-----------|
| Cpu        | Net-Raisecom-Cpu-SNMP        | Contrôle du taux d'utilisation du CPU de la machine       | X      |            |
| Hardware   | Net-Raisecom-Hardware-SNMP   | Contrôle l'état du matériel                               | X      |            |
| Interfaces | Net-Raisecom-Interfaces-SNMP | Contrôle le traffic réseau de plusieurs interfaces réseau |        | X          |
| Memory     | Net-Raisecom-Memory-SNMP     | Contrôle du taux d'utilisation mémoire                    | X      |            |

### Règles de découverte

| Nom de la règle                  | Description                                                              |
|:---------------------------------|:-------------------------------------------------------------------------|
| Net-Raisecom-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation  |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                  | Unité |
|:--------------------------------------------------------- |:------|
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
</Tabs>

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| *cpu*#cpu.utilization.1s.percentage  | %     |
| *cpu*#cpu.utilization.5s.percentage  | %     |
| *cpu*#cpu.utilization.1m.percentage  | %     |
| *cpu*#cpu.utilization.10m.percentage | %     |
| *cpu*#cpu.utilization.2h.percentage  | %     |


</TabItem>
<TabItem value="Cpu xPON" label="Cpu xPON">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| *cpu*#cpu.utilization.1s.percentage  | %     |
| *cpu*#cpu.utilization.10m.percentage | %     |
| *cpu*#cpu.utilization.2h.percentage  | %     |

</TabItem>
</Tabs>

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Métrique                                | Unité |
| :-------------------------------------- | :---- |
| Fan status                              |       |
| *instance*#hardware.fan.speed.rpm       | rpm   |
| *instance*#hardware.voltage.millivolt   | mv    |
| *instance*#hardware.temperature.celsius | C     |

</TabItem>

<TabItem value="Hardware xPON" label="Hardware xPON">

| Métrique                                     | Unité |
| :------------------------------------------- | :---- |
| Fan status                                   |       |
| *instance*#hardware.fan.speed.rpm            | rpm   |
| *instance*#hardware.voltage.output.millivolt | mv    |
| *instance*#hardware.voltage.input.millivolt  | mv    |
| *instance*#hardware.temperature.celsius      | C     |

</TabItem>
</Tabs>



## Prérequis

### Configuration SNMP

Afin de superviser votre équipement **Raisecom** en SNMP,  il est nécessaire de configurer l'agent sur le serveur.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Raisecom SNMP** :

```bash
yum install centreon-plugin-Network-Raisecom-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Raisecom** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Raisecom SNMP** :

```bash
yum install centreon-plugin-Network-Raisecom-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Raisecom** :

```bash
yum install centreon-pack-network-raisecom-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Raisecom** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Raisecom SNMP**.
* Appliquez le modèle d'hôte **Net-Raisecom-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_raisecom_snmp.pl \
    --plugin=network::raisecom::snmp::plugin \
    --mode=memory \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage= \
    --critical-usage= \
    --warning-usage-free= \
    --critical-usage-free= \
    --warning-usage-prct= \
    --critical-usage-prct= \
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Memory total: 128.00 MB used: 106.21 MB (82.97%) free: 21.79 MB (17.03%) | 'memory.usage.bytes'=111366736B;;;0;134217728 'memory.free.bytes'=22850992B;;;0;134217728 'memory.usage.percentage'=82.97%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_raisecom_snmp.pl \
    --plugin=network::raisecom::snmp::plugin \
    --mode=memory \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_raisecom_snmp.pl \
    --plugin=network::raisecom::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.