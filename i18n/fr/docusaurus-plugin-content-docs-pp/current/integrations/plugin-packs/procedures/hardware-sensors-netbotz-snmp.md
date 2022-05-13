---
id: hardware-sensors-netbotz-snmp
title: Netbotz Sensor
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Netbotz Sensor** apporte un modèle d'hôte :

* HW-Sensor-Netbotz-SNMP-custom

Il apporte le modèle de service suivant :

| Alias          | Modèle de service                      | Description                                    | Défaut |
|:---------------|:---------------------------------------|:-----------------------------------------------|:-------|
| Sensors-Global | HW-Sensors-Netbotz-Sensors-Global-SNMP | Contrôle l'ensemble des sondes de l'équipement | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Sensors-Global" label="Sensors-Global">

Could not retrive metrics

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Netbotz Sensor** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [Netbotz Sensor](https://docs.fortinet.com/document/fortisiem/6.5.0/external-systems-configuration-guide/325357/apc-netbotz-environmental-monitor)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Netbotz Sensor** :

```bash
yum install centreon-plugin-Hardware-Sensors-Netbotz-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Netbotz Sensor** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Netbotz Sensor** :

```bash
yum install centreon-plugin-Hardware-Sensors-Netbotz-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Netbotz Sensor** :

```bash
yum install centreon-pack-hardware-sensors-netbotz-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Netbotz Sensor** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Netbotz Sensor**.
* Appliquez le modèle d'hôte **HW-Sensor-Netbotz-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_netbotz.pl \
    --plugin=hardware::sensors::netbotz::snmp::plugin \
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
/usr/lib/centreon/plugins//centreon_netbotz.pl \
    --plugin=hardware::sensors::netbotz::snmp::plugin \
    --mode=sensors \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_netbotz.pl \
    --plugin=hardware::sensors::netbotz::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.