---
id: hardware-servers-ibm-bladecenter-snmp
title: IBM BladeCenter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **IBM BladeCenter** apporte un modèle d'hôte :

* HW-Server-IBM-Bladecenter-SNMP-custom

Il apporte les modèles de service suivants :

| Alias                   | Modèle de service                               | Description                                                    | Défaut |
|:------------------------|:------------------------------------------------|:---------------------------------------------------------------|:-------|
| Hardware-Ambient        | HW-IBM-Bladecenter-Hardware-Ambient-SNMP        | Contrôle les températures ambiantes du chassis bladecenter IBM |        |
| Hardware-Blade          | HW-IBM-Bladecenter-Hardware-Blade-SNMP          | Contrôle les blades du chassis bladecenter IBM                 |        |
| Hardware-Blower         | HW-IBM-Bladecenter-Hardware-Blower-SNMP         | Contrôle les blower du chassis bladecenter IBM                 |        |
| Hardware-Chassis-Status | HW-IBM-Bladecenter-Hardware-Chassis-Status-SNMP | Contrôle les tests du chassis bladecenter IBM                  |        |
| Hardware-Global         | HW-IBM-Bladecenter-Hardware-Global-SNMP         | Contrôle tous les indicateurs disponibles en un contrôle       | X      |
| Hardware-Power-Module   | HW-IBM-Bladecenter-Hardware-Power-Module-SNMP   | Contrôle les power modules du chassis bladecenter IBM          |        |
| Hardware-System-Health  | HW-IBM-Bladecenter-Hardware-System-Health-SNMP  | Contrôle l'état du système du chassis bladecenter IBM          |        |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Metric name                           | Description                   | Unit  |
| :------------------------------------ | :-----------------------------| :---- |
| Blade health state                    | Status                        |       |
| Blade power state                     | Status                        |       |
| Chassis status/state                  | Key/value string status/state |       |
| hardware.ambient.temperature.celsius  | Ambient temperature           |  C    |
| hardware.blower.speed.percentage      | Blower speed percentage       |  %    |
| Overall system health                 | Status string                 |       |
| Power module status/state             | Key/value string status/state |       |

</TabItem>
<TabItem value="Hardware-Ambient" label="Hardware-Ambient">

| Metric name                           | Description               | Unit  |
| :------------------------------------ | :------------------------ | :---- |
| hardware.ambient.temperature.celsius  | Ambient temperature       |  C    |

</TabItem>
<TabItem value="Hardware-Blade" label="Hardware-Blade">

| Metric name         | Description               | Unit  |
| :-------------------| :------------------------ | :---- |
| Blade health state  | Status                    |       |
| Blade power state   | Status                    |       |

</TabItem>
<TabItem value="Hardware-Blower" label="Hardware-Blower">

| Metric name                           | Description               | Unit  |
| :------------------------------------ | :------------------------ | :---- |
| hardware.blower.speed.percentage      | Blower speed percentage   |  %    |

</TabItem>
<TabItem value="Hardware-Chassis-Status" label="Hardware-Chassis-Status">

| Metric name          | Description                   | Unit  |
| :--------------------| :-----------------------------| :---- |
| Chassis status/state | Key/value string status/state |       |

</TabItem>
<TabItem value="Hardware-Power-Module" label="Hardware-Power-Module">

| Metric name               | Description                   | Unit  |
| :-------------------------| :-----------------------------| :---- |
| Power module status/state | Key/value string status/state |       |

</TabItem>
<TabItem value="Hardware-System-Health" label="Hardware-System-Health">

| Metric name             | Description               | Unit  |
| :-----------------------| :------------------------ | :---- |
| Overall system health   | Status string             |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **IBM Bladecenter** en SNMP,  il est nécessaire de configurer l'agent sur le manager comme indiqué sur la documentation officielle :
* https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.mgtmod.doc%2Fkp1ag_bc_mmug_configsnmp.html 

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le manager à superviser.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **IBM Bladecenter** :

```bash
yum install centreon-plugin-Hardware-Servers-Ibm-Bladecenter-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **IBM BladeCenter** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **IBM Bladecenter** :

```bash
yum install centreon-plugin-Hardware-Servers-Ibm-Bladecenter-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **IBM BladeCenter** :

```bash
yum install centreon-pack-hardware-servers-ibm-bladecenter-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **IBM BladeCenter** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **IBM Bladecenter**.
* Appliquez le modèle d'hôte **HW-Server-IBM-Bladecenter-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_ibm_bladecenter.pl \
    --plugin=hardware::server::ibm::bladecenter::snmp::plugin \
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
OK: All components are OK | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ibm_bladecenter.pl \
    --plugin=hardware::server::ibm::bladecenter::snmp::plugin \
    --mode=hardware \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ibm_bladecenter.pl \
    --plugin=hardware::server::ibm::bladecenter::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.