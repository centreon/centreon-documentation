---
id: hardware-servers-cisco-ucs-snmp
title: Cisco UCS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Cisco UCS** apporte un modèle d'hôte :

* HW-Server-Cisco-Ucs-SNMP-custom

Il apporte les modèles de service suivants :

| Alias           | Modèle de service                        | Description                            | Défaut |
|:----------------|:-----------------------------------------|:---------------------------------------|:-------|
| Audit-Logs      | HW-Server-Cisco-Ucs-Audit-Logs-SNMP      | Contrôle les journaux d'audit          | X      |
| Equipment       | HW-Server-Cisco-Ucs-Equipment-SNMP       | Contrôle l'état du hardware            | X      |
| Faults          | HW-Server-Cisco-Ucs-Faults-SNMP          | Contrôle les erreurs                   | X      |
| Mgmt-Entities   | HW-Server-Cisco-Ucs-Mgmt-Entities-SNMP   | Contrôle les entités de management     |        |
| Service-Profile | HW-Server-Cisco-Ucs-Service-Profile-SNMP | Contrôle le nombre de service profiles |        |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Audit-Logs" label="Audit-Logs">

| Métrique          | Unité |
|:------------------|:------|
| audit.            |       |
| audit.total.count | count |
| status            |       |

</TabItem>
<TabItem value="Equipment" label="Equipment">

Could not retrive metrics

</TabItem>
<TabItem value="Faults" label="Faults">

| Métrique           | Unité |
|:-------------------|:------|
| faults.            |       |
| faults.total.count | count |
| status             |       |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Métrique      | Unité |
|:--------------|:------|
| total         |       |
| *mgmt*#status |       |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Métrique                      | Unité |
|:------------------------------|:------|
| serviceprofiles.offline.count | count |
| serviceprofiles.online.count  | count |
| serviceprofiles.total.count   | count |
| *sp*#status                   |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Cisco UCS** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [Cisco UCS](https://www.cisco.com/c/en/us/td/docs/unified_computing/ucs/ucs-manager/GUI-User-Guides/System-Monitoring/3-1/b_UCSM_GUI_System_Monitoring_Guide_3_1/b_UCSM_GUI_System_Monitoring_Guide_3_1_chapter_0101.html)


### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Cisco UCS**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-servers-cisco-ucs-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Cisco UCS**.
* Appliquez le modèle d'hôte **HW-Server-Cisco-Ucs-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::snmp::plugin \
    --mode=service-profile \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-total='' \
    --critical-total='' \
    --warning-online='' \
    --critical-online='' \
    --warning-offline='' \
    --critical-offline='' \
    --warning-status='%{severity} =~ /minor|warning/' \
    --critical-status='%{severity} =~ /major|critical/' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: total: %s online: %s offline: %s  | 'serviceprofiles.total.count'=9000;;;0; 'serviceprofiles.online.count'=9000;;;0; 'serviceprofiles.offline.count'=9000;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::snmp::plugin \
    --mode=service-profile \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \
    --plugin=hardware::server::cisco::ucs::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.