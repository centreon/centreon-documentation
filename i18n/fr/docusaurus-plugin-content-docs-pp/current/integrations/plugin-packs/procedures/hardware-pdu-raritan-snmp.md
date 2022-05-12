---
id: hardware-pdu-raritan-snmp
title: Raritan PDU
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Raritan PDU** apporte un modèle d'hôte :

* HW-Pdu-Raritan-SNMP-custom

Il apporte les modèles de service suivants :

| Alias          | Modèle de service                 | Description                      | Défaut |
|:---------------|:----------------------------------|:---------------------------------|:-------|
| Inlet-Sensors  | HW-Pdu-Raritan-InletSensors-SNMP  | ContrÃ                           | X      |
| Ocprt-Sensors  | HW-Pdu-Raritan-Ocprt-Sensors-SNMP | Contrôle les sondes OCPRT du PDU | X      |
| Outlet-Sensors | HW-Pdu-Raritan-OutletSensors-SNMP | Contrôle les sorties PDU         | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Inlet-Sensors" label="Inlet-Sensors">

Could not retrive metrics

</TabItem>
<TabItem value="Ocprt-Sensors" label="Ocprt-Sensors">

Could not retrive metrics

</TabItem>
<TabItem value="Outlet-Sensors" label="Outlet-Sensors">

Could not retrive metrics

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Raritan PDU** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* LINK

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Raritan PDU** :

```bash
yum install centreon-plugin-Hardware-Pdu-Raritan-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Raritan PDU** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Raritan PDU** :

```bash
yum install centreon-plugin-Hardware-Pdu-Raritan-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Raritan PDU** :

```bash
yum install centreon-pack-hardware-pdu-raritan-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Raritan PDU** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Raritan PDU**.
* Appliquez le modèle d'hôte **HW-Pdu-Raritan-SNMP-custom**.

Si vous utilisez SNMP en version 3, vous devez configurer les paramètres
spécifiques associés via la macro **SNMPEXTRAOPTIONS**.

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTS    |                                              |
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --mode=outlet-sensors \
    --hostname 10.0.0.1 \
    --snmp-version 2c \
    --snmp-community my-snmp-community \
    --component .* \
    --warning  \
    --verbose \
    --critical \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --mode=outlet-sensors \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.