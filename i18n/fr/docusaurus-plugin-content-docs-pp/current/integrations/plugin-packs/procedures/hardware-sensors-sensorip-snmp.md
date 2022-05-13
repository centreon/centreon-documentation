---
id: hardware-sensors-sensorip-snmp
title: Sensor IP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Sensor IP** apporte un modèle d'hôte :

* HW-Sensor-Sensorip-SNMP-custom

Il apporte les modèles de service suivants :

| Alias               | Modèle de service                            | Description                                           | Défaut |
|:--------------------|:---------------------------------------------|:------------------------------------------------------|:-------|
| Sensors-Global      | HW-Sensors-Sensorip-Sensors-Global-SNMP      | Contrôle l'ensemble des sondes                        | X      |
| Sensors-Humidity    | HW-Sensors-Sensorip-Sensors-Humidity-SNMP    | Contrôle les sondes d'humidité de l'équipement        |        |
| Sensors-Sp          | HW-Sensors-Sensorip-Sensors-Sp-SNMP          | Contrôle le statut global des sondes  de l'équipement |        |
| Sensors-Switch      | HW-Sensors-Sensorip-Sensors-Switch-SNMP      | Contrôle les sondes de contact de l'équipement        |        |
| Sensors-Temperature | HW-Sensors-Sensorip-Sensors-Temperature-SNMP | Contrôle les sondes de température de l'équipement    |        |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Sensors-Global" label="Sensors-Global">

Could not retrive metrics

</TabItem>
<TabItem value="Sensors-Humidity" label="Sensors-Humidity">

Could not retrive metrics

</TabItem>
<TabItem value="Sensors-Sp" label="Sensors-Sp">

Could not retrive metrics

</TabItem>
<TabItem value="Sensors-Switch" label="Sensors-Switch">

Could not retrive metrics

</TabItem>
<TabItem value="Sensors-Temperature" label="Sensors-Temperature">

Could not retrive metrics

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Sensor IP** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [AKCP](https://www.akcp.com/knowledge-base/)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Sensor IP** :

```bash
yum install centreon-plugin-Hardware-Sensors-Sensorip-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Sensor IP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Sensor IP** :

```bash
yum install centreon-plugin-Hardware-Sensors-Sensorip-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Sensor IP** :

```bash
yum install centreon-pack-hardware-sensors-sensorip-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Sensor IP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Sensor IP**.
* Appliquez le modèle d'hôte **HW-Sensor-Sensorip-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_sensorip.pl \
    --plugin=hardware::sensors::sensorip::snmp::plugin \
    --mode=sensors \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='.*' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_sensorip.pl \
    --plugin=hardware::sensors::sensorip::snmp::plugin \
    --mode=sensors \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_sensorip.pl \
    --plugin=hardware::sensors::sensorip::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.