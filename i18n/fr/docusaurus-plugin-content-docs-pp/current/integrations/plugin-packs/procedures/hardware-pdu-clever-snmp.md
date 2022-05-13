---
id: hardware-pdu-clever-snmp
title: Clever PDU
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Clever PDU** apporte un modèle d'hôte :

* HW-Pdu-Clever-SNMP-custom

Il apporte le modèle de service suivant :

| Alias              | Modèle de service                     | Description                                   | Défaut |
|:-------------------|:--------------------------------------|:----------------------------------------------|:-------|
| Power-Source-Usage | HW-Pdu-Clever-Power-Source-Usage-SNMP | Contrôle l'utilisation des sources de courant | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Power-Source-Usage" label="Power-Source-Usage">

| Métrique    | Unité |
|:------------|:------|
| current     | A     |
| power       | W     |
| voltage     | V     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Clever PDU** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [Clever](https://www.china-clever.com/en/resources/specification/index.html)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Clever PDU** :

```bash
yum install centreon-plugin-Hardware-Pdu-Clever-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Clever PDU** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Clever PDU** :

```bash
yum install centreon-plugin-Hardware-Pdu-Clever-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Clever PDU** :

```bash
yum install centreon-pack-hardware-pdu-clever-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Clever PDU** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Clever PDU**.
* Appliquez le modèle d'hôte **HW-Pdu-Clever-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_pdu_clever_snmp.pl \
    --plugin=hardware::pdu::clever::snmp::plugin \
    --mode=ps-usage \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-power='' \
    --critical-power='' \
    --warning-voltage='' \
    --critical-voltage='' \
    --warning-current='' \
    --critical-current='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Input power : %s W Current : %s A Voltage : %s V | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pdu_clever_snmp.pl \
    --plugin=hardware::pdu::clever::snmp::plugin \
    --mode=ps-usage \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pdu_clever_snmp.pl \
    --plugin=hardware::pdu::clever::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.