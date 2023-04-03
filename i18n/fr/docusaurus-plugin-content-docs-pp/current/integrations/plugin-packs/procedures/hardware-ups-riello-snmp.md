---
id: hardware-ups-riello-snmp
title: Riello UPS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Riello UPS SNMP** apporte un modèle d'hôte :

* HW-UPS-Riello-SNMP-custom

Il apporte les modèles de service suivants :

| Alias        | Modèle de service               | Description                                        | Défaut |
|:-------------|:--------------------------------|:---------------------------------------------------|:-------|
| Alarms       | HW-UPS-Riello-Alarms-SNMP       | Contrôle les alarmes courantes                     | X      |
| Battery      | HW-UPS-Riello-Battery-SNMP      | Contrôle l'état de la batterie                     | X      |
| Input-Lines  | HW-UPS-Riello-Input-Lines-SNMP  | Contrôle les métriques de la source d'alimentation | X      |
| Output-Lines | HW-UPS-Riello-Output-Lines-SNMP | Contrôle les métriques des lignes de sortie        | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Alarms" label="Alarms">

| Métrique             | Unité |
|:---------------------|:------|
| alarms.current.count | count |

</TabItem>
<TabItem value="Battery" label="Battery">

| Métrique                         | Unité |
|:---------------------------------|:------|
| battery status                   |       |
| battery.charge.remaining.percent | %     |
| battery.charge.remaining.minutes |       |
| battery.current.ampere           | A     |
| battery.temperature.celsius      | C     |
| battery.voltage.volt             | V     |

</TabItem>
<TabItem value="Input-Lines" label="Input-Lines">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| *line_id*#line.input.current.ampere  | A     |
| *line_id*#line.input.frequence.hertz | Hz    |
| *line_id*#line.input.voltage.volt    | V     |

</TabItem>
<TabItem value="Output-Lines" label="Output-Lines">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| output source status                  |       |
| *line_id*#line.output.current.ampere  | A     |
| *line_id*#line.output.load.percentage | %     |
| *line_id*#line.output.voltage.volt    | V     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement **Riello UPS** en SNMP, il est nécessaire de configurer l'agent sur l'équipement.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-ups-riello-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-ups-riello-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-ups-riello-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Riello UPS SNMP**
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
dnf install centreon-plugin-Hardware-Ups-Riello-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Ups-Riello-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-ups-riello-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Riello UPS**.
* Appliquez le modèle d'hôte **HW-UPS-Riello-SNMP-custom**.

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
/usr/lib/centreon/plugins/centreon_ups_riello_snmp.pl \
    --plugin=hardware::ups::riello::snmp::plugin \
    --mode=battery \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: battery status is normal - charge remaining: 100% (135 minutes remaining) | 'battery.charge.remaining.percent'=100%;;;0;100 'battery.charge.remaining.minutes'=135;;;0; 'battery.voltage.volt'=122.5V;;;; 'battery.temperature.celsius'=37C;;;;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_ups_riello_snmp.pl \
    --plugin=hardware::ups::riello::snmp::plugin \
    --mode=battery \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_ups_riello_snmp.pl \
    --plugin=hardware::ups::riello::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
