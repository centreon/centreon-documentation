---
id: network-cisco-wlc-snmp
title: Cisco WLC
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Cisco WLC** apporte un modèle d'hôte :

* Net-Cisco-Wlc-SNMP-custom

Il apporte les modèles de service suivants :

| Alias                          | Modèle de service                                 | Description                                                         | Défaut | Découverte |
|:-------------------------------|:--------------------------------------------------|:--------------------------------------------------------------------|:-------|:-----------|
| Ap-Channel-Interference-Global | Net-Cisco-Wlc-Ap-Channel-Interference-Global-SNMP | Contrôle les interférences sur les canaux de l'ensemble des relais  |        |            |
| Ap-Channel-Noise-Global        | Net-Cisco-Wlc-Ap-Channel-Noise-Global-SNMP        | Contrôle le bruit sur les canaux de l'ensemble des relais           |        |            |
| Ap-Status-Global               | Net-Cisco-Wlc-Ap-Status-Global-SNMP               | Contrôle le statut de l'ensemble des relais                         | X      |            |
| Ap-Users                       | Net-Cisco-Wlc-Ap-Users-SNMP                       | Contrôle le nombre d'utilisateurs sur l'ensemble des relais         |        |            |
| Cpu                            | Net-Cisco-Wlc-Cpu-SNMP                            | Contrôle le taux d'utilisation du CPU                               | X      |            |
| Hardware-Global                | Net-Cisco-Wlc-Hardware-Global-SNMP                | Contrôle l'ensemble du matériel                                     | X      |            |
| Memory                         | Net-Cisco-Wlc-Memory-SNMP                         | Contrôle du taux d'utilisation de la mémoire vive                   | X      |            |
| Traffic-Generic-Id             | Net-Cisco-Wlc-Traffic-Generic-Id-SNMP             | Contrôle le traffic réseau d'une interface réseau                   |        |            |
| Traffic-Generic-Name           | Net-Cisco-Wlc-Traffic-Generic-Name-SNMP           | Contrôle le traffic réseau d'une interface réseau                   |        |            |
| Traffic-Global                 | Net-Cisco-Wlc-Traffic-Global-SNMP                 | Contrôle le traffic réseau de plusieurs interfaces réseau           |        | X          |

### Règles de découverte

| Nom de la règle                 | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| Net-Cisco-Wlc-SNMP-Traffic-Name | Discover network interfaces and monitor bandwidth utilization |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Ap-Channel-Interference-Global" label="Ap-Channel-Interference-Global">

| Métrique                                                   | Unité |
|:-----------------------------------------------------------|:------|
| *channels*#accesspoint.interference.power.count            | count |
| *channels*#accesspoint.interference.utilization.percentage | %     |

</TabItem>
<TabItem value="Ap-Channel-Noise-Global" label="Ap-Channel-Noise-Global">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *channels*#accesspoint.noise.power.dbm | dBm   |

</TabItem>
<TabItem value="Ap-Status-Global" label="Ap-Status-Global">

| Métrique                                                                 | Unité |
|:-------------------------------------------------------------------------|:------|
| accesspoints.total.count                                                 | count |
| accesspoints.associated.count                                            | count |
| accesspoints.disabled.count                                              | count |
| accesspoints.disassociating.count                                        | count |
| accesspoints.downloading.count                                           | count |
| accesspoints.enabled.count                                               | count |
| status                                                                   |       |
| *interfaces*#accesspoint.radio.interface.channels.utilization.percentage | %     |
| *interfaces*#radio-status                                                |       |

</TabItem>
<TabItem value="Ap-Users" label="Ap-Users">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| users.total.count                  | users |
| users.aaapending.count             | users |
| users.associated.count             | users |
| users.authenticated.count          | users |
| users.blacklisted.count            | users |
| users.disassociated.count          | users |
| users.idle.count                   | users |
| users.powersave.count              | users |
| users.probing.count                | users |
| users.tobedeleted.count            | users |
| *ssid*#ssid.users.total.count      | users |
| *ap*#accesspoint.users.total.count | users |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                   | Unité |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

Could not retrive metrics

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Cisco WLC** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [CISCO WLC](https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/snmp.html)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Cisco WLC** :

```bash
yum install centreon-plugin-Network-Cisco-Wlc-Snmp
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Cisco WLC** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Cisco WLC** :

```bash
yum install centreon-plugin-Network-Cisco-Wlc-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Cisco WLC** :

```bash
yum install centreon-pack-network-cisco-wlc-snmp
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Cisco WLC** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Cisco WLC**.
* Appliquez le modèle d'hôte **Net-Cisco-Wlc-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --mode=ap-status \
    --hostname=10.0.0.1 \
    --snmp-community='my-snmp-community' \
    --snmp-version=2c \
    --filter-name='' \
    --filter-group='' \
    --warning-radio-status='' \
    --critical-radio-status='' \
    --warning-radio-interface-channels-utilization='' \
    --critical-radio-interface-channels-utilization='' \
    --warning-total='' \
    --critical-total='' \
    --warning-total-associated='' \
    --critical-total-associated='' \
    --warning-total-disassociating='' \
    --critical-total-disassociating='' \
    --warning-total-enabled='' \
    --critical-total-enabled='' \
    --warning-total-disabled='' \
    --critical-total-disabled='' \
    --warning-status='' \
    --critical-status='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: total: %s associated: %s disassociating: %s downloading: %s enabled: %s disabled: %s   channels utilization: %s %% | 'accesspoints.total.count'=9000;;;0; 'accesspoints.associated.count'=9000;;;0; 'accesspoints.disassociating.count'=9000;;;0; 'accesspoints.downloading.count'=9000;;;0; 'accesspoints.enabled.count'=9000;;;0; 'accesspoints.disabled.count'=9000;;;0; 'accesspoint.radio.interface.channels.utilization.percentage'=9000%;;;0;100 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --mode=ap-status \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.