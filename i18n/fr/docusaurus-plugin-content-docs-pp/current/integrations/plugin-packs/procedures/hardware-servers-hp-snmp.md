---
id: hardware-servers-hp-snmp
title: HP Proliant
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **HP Proliant** apporte un modèle d'hôte :

* HW-Server-Hp-Server-SNMP-custom

Il apporte les modèles de service suivants :

| Alias                | Modèle de service                      | Description                              | Défaut |
|:---------------------|:---------------------------------------|:-----------------------------------------|:-------|
| Hardware-Cpu         | HW-Hp-Server-Hardware-Cpu-SNMP         | Contrôle les cpu                         |        |
| Hardware-Fan         | HW-Hp-Server-Hardware-Fan-SNMP         | Contrôle les ventilateurs                |        |
| Hardware-Global      | HW-Hp-Server-Hardware-Global-SNMP      | Contrôle l'ensemble des sondes           | X      |
| Hardware-Network     | HW-Hp-Server-Hardware-Network-SNMP     | Contrôle les cartes réseaux              |        |
| Hardware-Pc          | HW-Hp-Server-Hardware-Pc-SNMP          | Contrôle les convertisseurs de puissance |        |
| Hardware-Psu         | HW-Hp-Server-Hardware-Psu-SNMP         | Contrôle les alimentations               |        |
| Hardware-Storage     | HW-Hp-Server-Hardware-Storage-SNMP     | Contrôle le stockage                     |        |
| Hardware-Temperature | HW-Hp-Server-Hardware-Temperature-SNMP | Contrôle les températures matérielles    |        |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Hardware-Cpu" label="Hardware-Cpu">

| Metric name           | Description            | Unit  |
| :-------------------- | :--------------------- | :---- |
| status                | CPU status             |       |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

| Metric name            | Description            | Unit  |
| :--------------------- | :--------------------- | :---- |
| status                 | Fan status             |       |
| hardware.fan.speed.rpm | Fan speed              | Rpm   |


</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Metric name           | Description               | Unit  |
| :-------------------- | :------------------------ | :---- |
| status                | Components global status  |       |

</TabItem>
<TabItem value="Hardware-Network" label="Hardware-Network">

| Metric name           | Description            | Unit  |
| :-------------------- | :--------------------- | :---- |
| status                | NIC status             |       |

</TabItem>
<TabItem value="Hardware-Pc" label="Hardware-Pc">

| Metric name           | Description            | Unit  |
| :-------------------- | :--------------------- | :---- |
| status                | Power Converter status |       |


</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

| Metric name                       | Description                     | Unit  |
| :-------------------------------- | :------------------------------ | :---- |
| status                            | Power supply status             |       |
| hardware.powersupply.power.watt   | Power supply watt capacity used | W     |
| hardware.powersupply.voltage.volt | Power supply voltage            | V     |

</TabItem>
<TabItem value="Hardware-Storage" label="Hardware-Storage">

| Metric name           | Description            | Unit  |
| :-------------------- | :--------------------- | :---- |
| status                | Storage status         |       |

</TabItem>
<TabItem value="Hardware-Temperature" label="Hardware-Temperature">

| Metric name                  | Description             | Unit  |
| :--------------------------- | :---------------------- | :---- |
| status                       | Temperature status      |       |
| hardware.temperature.celsius | Temperature  in celsius | C     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Pour utiliser ce Plugin pack, le service SNMP doit démarré et configuré sur le serveur **HP Proliant**.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Configuration de l'agent snmp HP sur le collecteur Centreon

> Attention : La procédure qui suit est valide seulement pour Centos 7. Les paquets HP health et HP snmp-agents sont en version 10.50 et disponibles uniquement pour Centos 7.

> Pour le bon fonctionnement de l'agent et du plugin, le collecteur Centreon doit être installé sur un HP Proliant.

<Tabs groupId="sync">
<TabItem value="Centos 7" label="Centos 7">

Installez les paquets HP health et snmp-agents sur le collecteur Centreon : 

```bash
yum install https://downloads.linux.hpe.com/SDR/repo/mcp/centos/7.0/x86_64/10.50/hp-health-10.50-1826.40.rhel7.x86_64.rpm
yum install https://downloads.linux.hpe.com/SDR/repo/mcp/centos/7.0/x86_64/10.50/hp-snmp-agents-10.50-2926.49.rhel7.x86_64.rpm
```

Ajoutez la ligne suivante dans */etc/snmp/snmpd.conf* :

```bash
dlmod cmaX /usr/lib64/libcmaX64.so
```

Redémarrez les services suivants : 

```bash
systemctl restart hp-snmp-agents
systemctl restart snmpd
```

</TabItem>
</Tabs>


## Installation du plugin

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **HP Proliant** :

```bash
yum install centreon-plugin-Hardware-Servers-Hp-Snmp
```

2. Sur l'interface Web de Centreon, installez le Plugin Pack **HP Proliant** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **HP Proliant** :

```bash
yum install centreon-plugin-Hardware-Servers-Hp-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **HP Proliant** :

```bash
yum install centreon-pack-hardware-servers-hp-snmp
```

3. Sur l'interface Web de Centreon, installez le Plugin Pack **HP Proliant** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **HP Proliant**.
* Appliquez le Modèle d'hôte **HW-Server-Hp-Server-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètresspécifiques associés via la macro **SNMPEXTRAOPTIONS**. <br/>
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_hp_proliant.pl \
    --plugin=hardware::server::hp::proliant::snmp::plugin \
    --mode=hardware \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='.*' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All 18 components are ok [1/1 cpus, 1/1 da accelerator boards, 1/1 da controllers, 3/3 da logical drives, 12/12 da physical drives]. | 'hardware.cpu.count'=1;;;; 'hardware.daacc.count'=1;;;; 'hardware.dactl.count'=1;;;; 'hardware.daldrive.count'=3;;;; 'hardware.dapdrive.count'=12;;;;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_hp_proliant.pl \
    --plugin=hardware::server::hp::proliant::snmp::plugin \
    --mode=hardware \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_hp_proliant.pl \
    --plugin=hardware::server::hp::proliant::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.