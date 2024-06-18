---
id: network-hp-moonshot-snmp
title: HP Moonshot SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Objets supervisés

Le Pack Centreon **HP Moonshot SNMP** apporte un modèle d'hôte :
* Net-Hp-Moonshot-SNMP-custom

Il apporte les modèles de services suivants :

| Alias      | Modèle de services              | Description                             | Défaut  |
|:-----------|:--------------------------------|:----------------------------------------|:--------|
| Cpu        | Net-Hp-Moonshot-Cpu-SNMP        | Contrôle l'utilisation processeur       | X       |
| Interfaces | Net-Hp-Moonshot-Interfaces-SNMP | Contrôle les interfaces                 |         |
| Memory     | Net-Hp-Moonshot-Memory-SNMP     | Contrôle l'utilisation mémoire          | X       |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                     | Description                                                             |
|:------------------------------------|:------------------------------------------------------------------------|
| Net-Hp-Moonshot-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric name                    | Unit |
| :----------------------------- | :--- |
| cpu.utilization.5s.percentage  | %    |
| cpu.utilization.1m.percentage  | %    |
| cpu.utilization.15m.percentage | %    |

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

| Metric name             | Unit |
| :---------------------- | :--- |
| memory.usage.bytes      | B    |
| memory.free.bytes       | B    |
| memory.usage.percentage | %    |

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

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **HP Moonshot** :

```bash
yum install centreon-plugin-Network-Hp-Moonshot-Snmp
```

2. Sur l'interface web de Centreon, installer le Pack **HP Moonshot SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **HP Moonshot** :

```bash
yum install centreon-plugin-Network-Hp-Moonshot-Snmp
```

2. Sur le serveur central Centreon, installer le RPM du Pack **HP Moonshot SNMP** :

```bash
yum install centreon-pack-network-hp-moonshot-snmp
```

3. Sur l'interface web de Centreon, installer le Pack **HP Moonshot SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** et **IP Address / DNS** correspondant à votre équipement **HP Moonshot**.
* Appliquez le modèle d'hôte **Net-Hp-Moonshot-SNMP-custom**.
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
/usr/lib/centreon/plugins/centreon_hp_moonshot_snmp.pl \
    --plugin=network::hp::moonshot::snmp::plugin \
    --mode=cpu \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='hp_ro' \
    --warning-cpu-utilization-15m='90' \
    --critical-cpu-utilization-15m='95' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: cpu average usage: 27.13 % (5s), 22.34 % (1m), 17.98 % (15m) | 'cpu.utilization.5s.percentage'=27.13%;;;0;100 'cpu.utilization.1m.percentage'=22.34%;;;0;100 'cpu.utilization.15m.percentage'=17.98%;0:90;0:95;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_moonshot_snmp.pl \
    --plugin=network::hp::moonshot::snmp::plugin \
    --mode=cpu \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_moonshot_snmp.pl \
    --plugin=network::hp::moonshot::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
