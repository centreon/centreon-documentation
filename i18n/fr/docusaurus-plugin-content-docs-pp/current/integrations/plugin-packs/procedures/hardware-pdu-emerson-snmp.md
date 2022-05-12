---
id: hardware-pdu-emerson-snmp
title: Emerson PDU
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Emerson PDU** apporte un modèle d'hôte :

* HW-Pdu-Emerson-SNMP-custom

Il apporte les modèles de service suivants :

| Alias              | Modèle de service                      | Description                                   | Défaut |
|:-------------------|:---------------------------------------|:----------------------------------------------|:-------|
| Global-Status      | HW-Pdu-Emerson-Global-Status-SNMP      | Contrôle le statut global                     | X      |
| Power-Source-Usage | HW-Pdu-Emerson-Power-Source-Usage-SNMP | Contrôle l'utilisation des sources de courant | X      |
| Receptacles        | HW-Pdu-Emerson-Receptacles-SNMP        | Contrôle l'utilisation des 'receptacles'      | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Global-Status" label="Global-Status">

| Métrique     | Unité |
|:-------------|:------|
| *pdu*#status |       |

</TabItem>
<TabItem value="Power-Source-Usage" label="Power-Source-Usage">

| Métrique                                          | Unité    |
|:--------------------------------------------------|:---------|
| powersource.neutral.current.ampacrms              | AmpAcRMS |
| powersource.total.accumulated.energy.kilowatthour | kWh      |
| powersource.total.input.power.watt                | W        |
| *line*#line.neutral.current.ampere                | A        |
| *line*#line.load.percentage                       | %        |

</TabItem>
<TabItem value="Receptacles" label="Receptacles">

| Métrique                                                | Unité    |
|:--------------------------------------------------------|:---------|
| receptaclebranch.line2neutral.current.ampacrms          | AmpAcRMS |
| receptaclebranch.line2neutral.apparent.power.voltampere | VA       |
| receptaclebranch.line2neutral.real.power.watt           | W        |
| receptaclebranch.line2neutral.potential.voltrms         | VoltRMS  |
| receptaclebranch.total.accumulated.energy.kilowatthour  | kWh      |
| *rcp*#rcp-status                                        |          |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Emerson PDU** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* LINK

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Emerson PDU** :

```bash
yum install centreon-plugin-Hardware-Pdu-Emerson-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Emerson PDU** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Emerson PDU** :

```bash
yum install centreon-plugin-Hardware-Pdu-Emerson-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Emerson PDU** :

```bash
yum install centreon-pack-hardware-pdu-emerson-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Emerson PDU** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Emerson PDU**.
* Appliquez le modèle d'hôte **HW-Pdu-Emerson-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_pdu_emerson_snmp.pl \
    --plugin=hardware::pdu::emerson::snmp::plugin \
    --mode=global-status \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-name='' \
    --warning-status='' \
    --critical-status='' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pdu_emerson_snmp.pl \
    --plugin=hardware::pdu::emerson::snmp::plugin \
    --mode=global-status \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pdu_emerson_snmp.pl \
    --plugin=hardware::pdu::emerson::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.