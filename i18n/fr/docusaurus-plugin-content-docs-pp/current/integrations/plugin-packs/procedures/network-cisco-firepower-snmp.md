---
id: network-cisco-firepower-snmp
title: Cisco Firepower SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco Firepower SNMP** apporte un modèle d'hôte :

* **Net-Cisco-Firepower-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Firepower-SNMP-custom" label="Net-Cisco-Firepower-SNMP-custom">

| Alias    | Modèle de service                        | Description                                    |
|:---------|:-----------------------------------------|:-----------------------------------------------|
| Cpu      | Net-Cisco-Firepower-Cpu-SNMP-custom      | Contrôle du taux d'utilisation des processeurs |
| Faults   | Net-Cisco-Firepower-Faults-SNMP-custom   | Contrôle les messages d'erreurs                |
| Hardware | Net-CIsco-Firepower-Hardware-SNMP-custom | Contrôle l'état du matériel                    |
| Memory   | Net-Cisco-Firepower-Memory-SNMP-custom   | Contrôle du taux d'utilisation des mémoire     |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Firepower-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service                          | Description             | Découverte |
|:-----------|:-------------------------------------------|:------------------------|:----------:|
| Interfaces | Net-Cisco-Firepower-Interfaces-SNMP-custom | Contrôle les interfaces | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                     |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **Net-Cisco-Firepower-SNMP-custom** |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                             | Description                                                                  |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| Net-Cisco-Firepower-SNMP-Packet-Errors-Name | Découvrir les interfaces réseaux et supervise les paquets erronés et rejetés |
| Net-Cisco-Firepower-SNMP-Traffic-Name       | Découvre les interfaces réseaux et supervise le statut et l'utilisation      |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| *cpu*#cpu.utilization.1m.percentage  | %     |
| *cpu*#cpu.utilization.5m.percentage  | %     |
| *cpu*#cpu.utilization.15m.percentage | %     |

</TabItem>
<TabItem value="Faults" label="Faults">

| Métrique              | Unité |
|:----------------------|:------|
| faults.total.count    | count |
| faults.critical.count | count |
| faults.major.count    | count |
| faults.warning.count  | count |
| faults.minor.count    | count |
| faults.info.count     | count |
| status                | N/A   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                                      | Description                     | Unité |
|:----------------------------------------------|:--------------------------------|:------|
| chassis status                                | Status of the chassis           |       |
| *dn*#hardware.chassis.input.power.watt        | Input power of the chassis      | W     |
| *dn*#hardware.chassis.output.power.watt       | Output power of the chassis     | W     |
| cpuunit status                                | Status of the cpu unit          |       |
| *dn*#hardware.cpuunit.temperature.celsius     | Status of the cpu unit          | C     |
| fan status                                    | Status of the fan               |       |
| *dn*#hardware.fan.speed.rpm                   | Speed of the fan                | rpm   |
| fanmodule status                              | Status of the fan module        |       |
| *dn*#hardware.fanmodule.temperature.celsius   | Temperature of the fan module   | C     |
| memoryunit status                             | Status of the memory unit       |       |
| *dn*#hardware.memoryunit.temperature.celsius  | Temperature of the memory unit  | C     |
| psu status                                    | Status of the power supply      |       |
| *dn*#hardware.powersupply.temperature.celsius | Temperature of the power supply | C     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                         | Unité |
|:---------------------------------|:------|
| *memory*#memory.usage.bytes      | B     |
| *memory*#memory.free.bytes       | B     |
| *memory*#memory.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Pour utiliser ce connecteur de supervision, le service SNMP doit démarré et configuré sur le serveur **HP Proliant**.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

### Configuration de l'équipement Cisco Firepower

Afin de contrôler vos équipements Cisco Firepower, le SNMP doit être configuré (voir la documentation officielle : https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/213971-configure-snmp-on-firepower-ngfw-applian).

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-cisco-firepower-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-firepower-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-firepower-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-firepower-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cisco Firepower SNMP**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Cisco-Firepower-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Firepower-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-firepower-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Firepower-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSECURITYMODULE | Filter security module name                                                                                                                      |                   |             |
| WARNINGAVERAGE15M    | Warning threshold for 'average-15m' (%)                                                                                                          |                   |             |
| CRITICALAVERAGE15M   | Critical threshold for 'average-15m' (%)                                                                                                         |                   |             |
| WARNINGAVERAGE1M     | Warning threshold for 'average-1m' (%)                                                                                                           |                   |             |
| CRITICALAVERAGE1M    | Critical threshold for 'average-1m' (%)                                                                                                          |                   |             |
| WARNINGAVERAGE5M     | Warning threshold for 'average-5m' (%)                                                                                                           |                   |             |
| CRITICALAVERAGE5M    | Critical threshold for 'average-5m' (%)                                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Faults" label="Faults">

| Macro                  | Description                                                                                                                                                                  | Valeur par défaut                | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| WARNINGFAULTSCRITICAL  | Warning threshold for 'faults-critical'                                                                                                                                      |                                  |             |
| CRITICALFAULTSCRITICAL | Critical threshold for 'faults-critical'                                                                                                                                     |                                  |             |
| WARNINGFAULTSWARNING   | Warning threshold for 'faults-warning'                                                                                                                                       |                                  |             |
| CRITICALFAULTSWARNING  | Critical threshold for 'faults-warning'                                                                                                                                      |                                  |             |
| WARNINGFAULTSINFO      | Warning threshold for 'faults-info'                                                                                                                                          |                                  |             |
| CRITICALFAULTSINFO     | Critical threshold for 'faults-info'                                                                                                                                         |                                  |             |
| WARNINGFAULTSMAJOR     | Warning threshold for 'faults-major'                                                                                                                                         |                                  |             |
| CRITICALFAULTSMAJOR    | Critical threshold for 'faults-major'                                                                                                                                        |                                  |             |
| WARNINGFAULTSMINOR     | Warning threshold for 'faults-info'                                                                                                                                          |                                  |             |
| CRITICALFAULTSMINOR    | Critical threshold for 'faults-info'                                                                                                                                         |                                  |             |
| WARNINGFAULTSTOTAL     | Warning threshold for 'faults-total'                                                                                                                                         |                                  |             |
| CRITICALFAULTSTOTAL    | Critical threshold for 'faults-total'                                                                                                                                        |                                  |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{description}, %{object}, %{severity}, %{type}, %{acknowledged}, %{since} | %{severity} =~ /minor\|warning/  |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{description}, %{object}, %{severity}, %{type}, %{since}                 | %{severity} =~ /major\|critical/ |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                             | --verbose                        |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    |                                                                                                                                                  | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                               | Valeur par défaut                                     | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| OIDFILTER          | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                               | ifname                                                |             |
| OIDDISPLAY         | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                      | ifname                                                |             |
| INTERFACENAME      | Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored                                               |                                                       |             |
| WARNINGINDISCARD   | Warning threshold for 'faults-total'                                                                                                                      |                                                       |             |
| CRITICALINDISCARD  | Critical threshold for 'faults-total'                                                                                                                     |                                                       |             |
| WARNINGINERROR     | Warning threshold for 'in-error'                                                                                                                          |                                                       |             |
| CRITICALINERROR    | Critical threshold for 'in-error'                                                                                                                         |                                                       |             |
| WARNINGINTRAFFIC   | Warning threshold for 'in-traffic'                                                                                                                        |                                                       |             |
| CRITICALINTRAFFIC  | Critical threshold for 'in-traffic'                                                                                                                       |                                                       |             |
| WARNINGOUTDISCARD  | Warning threshold for 'in-traffic'                                                                                                                        |                                                       |             |
| CRITICALOUTDISCARD | Critical threshold for 'in-traffic'                                                                                                                       |                                                       |             |
| WARNINGOUTERROR    | Warning threshold for 'out-error'                                                                                                                         |                                                       |             |
| CRITICALOUTERROR   | Critical threshold for 'out-error'                                                                                                                        |                                                       |             |
| WARNINGOUTTRAFFIC  | Warning threshold for 'out-traffic'                                                                                                                       |                                                       |             |
| CRITICALOUTTRAFFIC | Critical threshold for 'out-traffic'                                                                                                                      |                                                       |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} | %{admstatus} eq "up" and %{opstatus} !~ /up\|dormant/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}  |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).          | --verbose --no-skipped-counters                       |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSECURITYMODULE | Filter switch number.                                                                                                                            |                   |             |
| WARNINGUSAGE         | Warning threshold for 'usage' (B)                                                                                                                |                   |             |
| CRITICALUSAGE        | Critical threshold for 'usage' (B)                                                                                                               |                   |             |
| WARNINGUSAGEFREE     | Warning threshold for 'usage-free' (B)                                                                                                           |                   |             |
| CRITICALUSAGEFREE    | Critical threshold for 'usage-free' (B)                                                                                                          |                   |             |
| WARNINGUSAGEPRCT     | Warning threshold for 'usage-free' (B)                                                                                                           |                   |             |
| CRITICALUSAGEPRCT    | Critical threshold for 'usage-free' (B)                                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
	--plugin=network::cisco::firepower::fxos::snmp::plugin \
	--mode=memory \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-security-module='' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All memory usages are ok | '*memory*#memory.usage.bytes'=B;;;0;total'*memory*#memory.free.bytes'=B;;;0;total'*memory*#memory.usage.percentage'=%;;;0;100
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
	--plugin=network::cisco::firepower::fxos::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                | Modèle de service associé                  |
|:------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fxos/snmp/mode/cpu.pm)]           | Net-Cisco-Firepower-Cpu-SNMP-custom        |
| faults [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fxos/snmp/mode/faults.pm)]     | Net-Cisco-Firepower-Faults-SNMP-custom     |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fxos/snmp/mode/hardware.pm)] | Net-CIsco-Firepower-Hardware-SNMP-custom   |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                 | Net-Cisco-Firepower-Interfaces-SNMP-custom |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]        | Used for service discovery                 |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fxos/snmp/mode/memory.pm)]     | Net-Cisco-Firepower-Memory-SNMP-custom     |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option | Description |
|:-------|:------------|

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Faults" label="Faults">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Memory" label="Memory">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fxos_snmp.pl \
	--plugin=network::cisco::firepower::fxos::snmp::plugin \
	--mode=memory \
	--help
```
