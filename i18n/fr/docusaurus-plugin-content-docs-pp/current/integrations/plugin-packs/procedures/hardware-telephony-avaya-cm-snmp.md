---
id: hardware-telephony-avaya-cm-snmp
title: Avaya CM SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Avaya CM SNMP** (communication manager) apporte un modèle d'hôte :

* HW-Telephony-Avaya-Cm-SNMP-custom

Il apporte les modèles de service suivants :

| Alias    | Modèle de service                   | Description                         | Défaut |
|:---------|:------------------------------------|:------------------------------------|:-------|
| Calls    | HW-Telephony-Avaya-Cm-Calls-SNMP    | Contrôle le nombre d'appels         | X      |
| Licenses | HW-Telephony-Avaya-Cm-Licenses-SNMP | Contrôle l'utilisation des licences | X      |
| Trunks   | HW-Telephony-Avaya-Cm-Trunks-SNMP   | Contrôle les trunks                 | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Calls" label="Calls">

| Métrique                   | Unité |
|:---------------------------|:------|
| calls.total.lasthour.count |       |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| stations.capacity.usage.count      |       |
| stations.capacity.free.count       |       |
| stations.capacity.usage.percentage | %     |

</TabItem>
<TabItem value="Trunks" label="Trunks">

| Métrique            | Unité |
|:--------------------|:------|
| trunk signal status |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Avaya CM** en SNMP, il est nécessaire de configurer l'agent sur votre équipement.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-telephony-avaya-cm-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-telephony-avaya-cm-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-telephony-avaya-cm-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Avaya CM SNMP**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Telephony-Avaya-Cm-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Telephony-Avaya-Cm-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-telephony-avaya-cm-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Avaya CM**.
* Appliquez le modèle d'hôte **HW-Telephony-Avaya-Cm-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_avaya_cm_snmp.pl \
    --plugin=hardware::telephony::avaya::cm::snmp::plugin \
    --mode=licenses \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: station capacity total: 2766 used: 2432 (87.92%) free: 334 (12.08%) | 'stations.capacity.usage.count'=2432;;;0;2766 'stations.capacity.free.count'=334;;;0;2766 'stations.capacity.usage.percentage'=87.92%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_avaya_cm_snmp.pl \
    --plugin=hardware::telephony::avaya::cm::snmp::plugin \
    --mode=licenses \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_avaya_cm_snmp.pl \
    --plugin=hardware::telephony::avaya::cm::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
