---
id: network-sonus-sbc-snmp
title: Sonus SBC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Sonus SBC** apporte un modèle d'hôte :

* **Net-Sonus-Sbc-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Sonus-Sbc-SNMP-custom" label="Net-Sonus-Sbc-SNMP-custom">

| Alias           | Modèle de service                         | Description                                                                                                                                                                  |
|:----------------|:------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Call-Statistics | Net-Sonus-Sbc-Call-Statistics-SNMP-custom | Contrôle les statistiques liés aux appels passés au travers de l'équipement                                                                                                  |
| Channels        | Net-Sonus-Sbc-Channels-SNMP-custom        | Contrôle l'état et le statut des channels configurés sur l'équipement                                                                                                        |
| Cpu             | Net-Sonus-Sbc-Cpu-SNMP-custom             | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Disks           | Net-Sonus-Sbc-Disks-SNMP-custom           | Contrôle du taux d'utilisation du stockage                                                                                                                                   |
| Dsp-Statistics  | Net-Sonus-Sbc-Dsp-Statistics-SNMP-custom  | Contrôle les statistiques liés au traitement du signal effectué par la SBC Sonus                                                                                             |
| Load            | Net-Sonus-Sbc-Load-SNMP-custom            | Contrôle la charge actuelle de l'équipement                                                                                                                                  |
| Memory          | Net-Sonus-Sbc-Memory-SNMP-custom          | Contrôle l'utilisation mémoire sur l'équipement Sonus SBC                                                                                                                    |
| Swap            | Net-Sonus-Sbc-Swap-SNMP-custom            | Contrôle du taux d'utilisation de la SWAP du Sonus                                                                                                                           |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Sonus-Sbc-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias        | Modèle de service                      | Description                                                                                                                 | Découverte |
|:-------------|:---------------------------------------|:----------------------------------------------------------------------------------------------------------------------------|:----------:|
| Cpu-Detailed | Net-Sonus-Sbc-Cpu-Detailed-SNMP-custom | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter d'avantage de détails sur son utilisation  |            |
| Interfaces   | Net-Sonus-Sbc-Interfaces-SNMP-custom   | Contrôle les interfaces                                                                                                     | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                      |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) cpour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **Net-Sonus-Sbc-SNMP-custom** |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                   | Description                                                             |
|:----------------------------------|:------------------------------------------------------------------------|
| Net-Sonus-Sbc-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Call-Statistics" label="Call-Statistics">

| Métrique                          | Unité |
|:----------------------------------|:------|
| *port*#port.calls.current.count   | count |
| *port*#port.calls.total.count     | count |
| *port*#port.calls.connected.count | count |
| *port*#port.calls.refused.count   | count |
| *port*#port.calls.errored.count   | count |
| *port*#port.calls.blocked.count   | count |

</TabItem>
<TabItem value="Channels" label="Channels">

| Métrique                            | Unité |
|:------------------------------------|:------|
| channels.total.count                | count |
| channels.outofservice.count         | count |
| channels.idle.count                 | count |
| channels.pending.count              | count |
| channels.waiting_for_route.count    | count |
| channels.action_list.count          | count |
| channels.waiting_for_digits.count   | count |
| channels.remote_setup.count         | count |
| channels.peer_setup.count           | count |
| channels.alerting.count             | count |
| channels.inband_info.count          | count |
| channels.connected.count            | count |
| channels.tone_generation.count      | count |
| channels.releasing.count            | count |
| channels.aborting.count             | count |
| channels.resetting.count            | count |
| channels.up.count                   | count |
| channels.down.count                 | count |
| *channels*#status                   | N/A   |
| *channels*#channel.lifetime.seconds | s     |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| cpu.user.utilization.percentage      | %     |
| cpu.nice.utilization.percentage      | %     |
| cpu.system.utilization.percentage    | %     |
| cpu.idle.utilization.percentage      | %     |
| cpu.wait.utilization.percentage      | %     |
| cpu.kernel.utilization.percentage    | %     |
| cpu.interrupt.utilization.percentage | %     |
| cpu.softirq.utilization.percentage   | %     |
| cpu.steal.utilization.percentage     | %     |
| cpu.guest.utilization.percentage     | %     |
| cpu.guestnice.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disks" label="Disks">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| storage.partitions.count              | count |
| *disk_name*#storage.space.usage.bytes | B     |
| *disk_name*#storage.access.count      | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Dsp-Statistics" label="Dsp-Statistics">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| *dsp*#status                         | N/A   |
| *dsp*#dsp.cpu.utilization.percentage | %     |
| *dsp*#dsp.channels.active.count      | count |

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
<TabItem value="Load" label="Load">

| Métrique               | Unité |
|:-----------------------|:------|
| load.1m.average.count  | count |
| load.5m.average.count  | count |
| load.15m.average.count | count |
| load.1m.count          | count |
| load.5m.count          | count |
| load.15m.count         | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |
| swap.usage.bytes        | B     |
| swap.free.bytes         | B     |
| swap.usage.percentage   | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique              | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre ressource en SNMP,  il est nécessaire de configurer l'agent sur l'équipement.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

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
dnf install centreon-pack-network-sonus-sbc-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-sonus-sbc-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-sonus-sbc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-sonus-sbc-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Sonus SBC **
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
dnf install centreon-plugin-Network-Sonus-SBC-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Sonus-SBC-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-sonus-sbc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Sonus-SBC-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Sonus-Sbc-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Call-Statistics" label="Call-Statistics">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBLOCKED    | Thresholds                                                                                         |                   |             |
| CRITICALBLOCKED   | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTED  | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTED | Thresholds                                                                                         |                   |             |
| WARNINGCURRENT    | Thresholds                                                                                         |                   |             |
| CRITICALCURRENT   | Thresholds                                                                                         |                   |             |
| WARNINGERRORED    | Thresholds                                                                                         |                   |             |
| CRITICALERRORED   | Thresholds                                                                                         |                   |             |
| WARNINGREFUSED    | Thresholds                                                                                         |                   |             |
| CRITICALREFUSED   | Thresholds                                                                                         |                   |             |
| WARNINGTOTAL      | Thresholds                                                                                         |                   |             |
| CRITICALTOTAL     | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Channels" label="Channels">

| Macro                            | Description                                                                                                                              | Valeur par défaut                                                 | Obligatoire |
|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|:-----------:|
| FILTERSHELFID                    | Filter channels by shelf ID (can be a regexp)                                                                                            |                                                                   |             |
| FILTERSLOTID                     | Filter channels by slot ID (can be a regexp)                                                                                             |                                                                   |             |
| FILTERPORTID                     | Filter channels by port ID (can be a regexp)                                                                                             |                                                                   |             |
| FILTERCHANNELID                  | Filter channels by channel ID (can be a regexp)                                                                                          |                                                                   |             |
| WARNINGCHANNELLIFETIME           | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELLIFETIME          | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSABORTING          | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSABORTING         | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSACTIONLIST        | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSACTIONLIST       | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSALERTING          | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSALERTING         | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSCONNECTED         | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSCONNECTED        | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSDOWN              | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSDOWN             | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSIDLE              | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSIDLE             | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSINBANDINFO        | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSINBANDINFO       | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSOUTOFSERVICE      | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSOUTOFSERVICE     | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSPEERSETUP         | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSPEERSETUP        | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSPENDING           | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSPENDING          | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSRELEASING         | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSRELEASING        | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSREMOTESETUP       | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSREMOTESETUP      | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSRESETTING         | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSRESETTING        | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSTONEGENERATION    | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSTONEGENERATION   | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSTOTAL             | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSTOTAL            | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSUP                | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSUP               | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSWAITINGFORDIGITS  | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSWAITINGFORDIGITS | Thresholds                                                                                                                               |                                                                   |             |
| WARNINGCHANNELSWAITINGFORROUTE   | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALCHANNELSWAITINGFORROUTE  | Thresholds                                                                                                                               |                                                                   |             |
| CRITICALSTATUS                   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admstatus}, %{opstatus}, %{display} | %{admstatus} eq "enable" and %{opstatus} !~ /up\|idle\|connected/ |             |
| WARNINGSTATUS                    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}  |                                                                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                       | --verbose                                                         |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold average CPU utilization                                                          |                   |             |
| CRITICAL     | Critical threshold average CPU utilization                                                         |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLE  | Warning threshold in percent                                                                       |                   |             |
| CRITICALIDLE | Critical threshold in percent                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro        | Description                                                                                                                                                                                    | Valeur par défaut | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage')                                                                                                          |                   |             |
| TRANSFORMSRC | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' |                   |             |
| TRANSFORMDST | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run' |                   |             |
| WARNING      | Warning threshold                                                                                                                                                                              |                   |             |
| CRITICAL     | Critical threshold                                                                                                                                                                             |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                             | --verbose         |             |

</TabItem>
<TabItem value="Dsp-Statistics" label="Dsp-Statistics">

| Macro                  | Description                                                                                                                                             | Valeur par défaut  | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGCHANNELSACTIVE  | Thresholds                                                                                                                                              |                    |             |
| CRITICALCHANNELSACTIVE | Thresholds                                                                                                                                              |                    |             |
| WARNINGCPUUTILIZATION  | Thresholds                                                                                                                                              |                    |             |
| CRITICALCPUUTILIZATION | Thresholds                                                                                                                                              |                    |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{state} eq "down"'). You can use the following variables: %{state}, %{display} | %{state} eq "down" |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                  |                    |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                      | --verbose          |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                                                                                         | Valeur par défaut                                     | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| OIDFILTER          | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                          | ifname                                                |             |
| OIDDISPLAY         | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                 | ifname                                                |             |
| INTERFACENAME      | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                           |                                                       |             |
| WARNINGINDISCARD   | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALINDISCARD  | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGINERROR     | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALINERROR    | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGINTRAFFIC   | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALINTRAFFIC  | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALOUTDISCARD | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGOUTERROR    | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALOUTERROR   | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGOUTTRAFFIC  | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALOUTTRAFFIC | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} | %{admstatus} eq "up" and %{opstatus} !~ /up\|dormant/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                            |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                  | --verbose                                             |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                |                   |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Thresholds                                                                                         |                   |             |
| CRITICAL     | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Thresholds                                                                                         |                   |             |
| CRITICAL     | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_sonus_sbc_snmp.pl \
	--plugin=network::sonus::sbc::snmp::plugin \
	--mode=channels \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-shelf-id=1 \
	--filter-port-id=1 \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All channels are ok | 'channels.total.count'=40;;;0; 'channels.outofservice.count'=0;;;0; 'channels.idle.count'=40;;;0; 'channels.pending.count'=0;;;0; 'channels.waiting_for_route.count'=0;;;0; 'channels.action_list.count'=0;;;0; 'channels.waiting_for_digits.count'=0;;;0; 'channels.remote_setup.count'=0;;;0; 'channels.peer_setup.count'=0;;;0; 'channels.alerting.count'=0;;;0; 'channels.inband_info.count'=0;;;0; 'channels.connected.count'=0;;;0; 'channels.tone_generation.count'=0;;;0; 'channels.releasing.count'=0;;;0; 'channels.aborting.count'=0;;;0; 'channels.resetting.count'=0;;;0; 'channels.up.count'=0;;;0; 'channels.down.count'=0;;;0; 'shelf1~slot0~port1~channel1#channel.lifetime.seconds'=371s;;;0; 'shelf1~slot0~port1~channel10#channel.lifetime.seconds'=856s;;;0; 'shelf1~slot0~port1~channel11#channel.lifetime.seconds'=961s;;;0; 'shelf1~slot0~port1~channel12#channel.lifetime.seconds'=461s;;;0; 'shelf1~slot0~port1~channel13#channel.lifetime.seconds'=667s;;;0; 'shelf1~slot0~port1~channel14#channel.lifetime.seconds'=330s;;;0; 'shelf1~slot0~port1~channel15#channel.lifetime.seconds'=489s;;;0; 'shelf1~slot0~port1~channel16#channel.lifetime.seconds'=797s;;;0; 'shelf1~slot0~port1~channel17#channel.lifetime.seconds'=1436s;;;0; 'shelf1~slot0~port1~channel18#channel.lifetime.seconds'=1029s;;;0; 'shelf1~slot0~port1~channel19#channel.lifetime.seconds'=405s;;;0; 'shelf1~slot0~port1~channel2#channel.lifetime.seconds'=1559s;;;0; 'shelf1~slot0~port1~channel20#channel.lifetime.seconds'=618s;;;0; 'shelf1~slot0~port1~channel21#channel.lifetime.seconds'=929s;;;0; 'shelf1~slot0~port1~channel22#channel.lifetime.seconds'=807s;;;0; 'shelf1~slot0~port1~channel23#channel.lifetime.seconds'=748s;;;0; 'shelf1~slot0~port1~channel24#channel.lifetime.seconds'=767s;;;0; 'shelf1~slot0~port1~channel25#channel.lifetime.seconds'=783s;;;0; 'shelf1~slot0~port1~channel26#channel.lifetime.seconds'=703s;;;0; 'shelf1~slot0~port1~channel27#channel.lifetime.seconds'=1293s;;;0; 'shelf1~slot0~port1~channel28#channel.lifetime.seconds'=2405s;;;0; 'shelf1~slot0~port1~channel29#channel.lifetime.seconds'=1371s;;;0; 'shelf1~slot0~port1~channel3#channel.lifetime.seconds'=1701s;;;0; 'shelf1~slot0~port1~channel30#channel.lifetime.seconds'=653s;;;0; 'shelf1~slot0~port1~channel31#channel.lifetime.seconds'=400s;;;0; 'shelf1~slot0~port1~channel32#channel.lifetime.seconds'=876s;;;0; 'shelf1~slot0~port1~channel33#channel.lifetime.seconds'=780s;;;0; 'shelf1~slot0~port1~channel34#channel.lifetime.seconds'=2461s;;;0; 'shelf1~slot0~port1~channel35#channel.lifetime.seconds'=1382s;;;0; 'shelf1~slot0~port1~channel36#channel.lifetime.seconds'=1595s;;;0; 'shelf1~slot0~port1~channel37#channel.lifetime.seconds'=2531s;;;0; 'shelf1~slot0~port1~channel38#channel.lifetime.seconds'=1604s;;;0; 'shelf1~slot0~port1~channel39#channel.lifetime.seconds'=2160s;;;0; 'shelf1~slot0~port1~channel4#channel.lifetime.seconds'=340s;;;0; 'shelf1~slot0~port1~channel40#channel.lifetime.seconds'=1487s;;;0; 'shelf1~slot0~port1~channel5#channel.lifetime.seconds'=1130s;;;0; 'shelf1~slot0~port1~channel6#channel.lifetime.seconds'=2739s;;;0; 'shelf1~slot0~port1~channel7#channel.lifetime.seconds'=1688s;;;0; 'shelf1~slot0~port1~channel8#channel.lifetime.seconds'=1909s;;;0; 'shelf1~slot0~port1~channel9#channel.lifetime.seconds'=336s;;;0;
channel '1/0/1/1' oper status: idle, lifetime: 371 seconds
channel '1/0/1/10' oper status: idle, lifetime: 856 seconds
channel '1/0/1/11' oper status: idle, lifetime: 961 seconds
channel '1/0/1/12' oper status: idle, lifetime: 461 seconds
channel '1/0/1/13' oper status: idle, lifetime: 667 seconds
channel '1/0/1/14' oper status: idle, lifetime: 330 seconds
channel '1/0/1/15' oper status: idle, lifetime: 489 seconds
channel '1/0/1/16' oper status: idle, lifetime: 797 seconds
channel '1/0/1/17' oper status: idle, lifetime: 1436 seconds
channel '1/0/1/18' oper status: idle, lifetime: 1029 seconds
channel '1/0/1/19' oper status: idle, lifetime: 405 seconds
channel '1/0/1/2' oper status: idle, lifetime: 1559 seconds
channel '1/0/1/20' oper status: idle, lifetime: 618 seconds
channel '1/0/1/21' oper status: idle, lifetime: 929 seconds
channel '1/0/1/22' oper status: idle, lifetime: 807 seconds
channel '1/0/1/23' oper status: idle, lifetime: 748 seconds
channel '1/0/1/24' oper status: idle, lifetime: 767 seconds
channel '1/0/1/25' oper status: idle, lifetime: 783 seconds
channel '1/0/1/26' oper status: idle, lifetime: 703 seconds
channel '1/0/1/27' oper status: idle, lifetime: 1293 seconds
channel '1/0/1/28' oper status: idle, lifetime: 2405 seconds
channel '1/0/1/29' oper status: idle, lifetime: 1371 seconds
channel '1/0/1/3' oper status: idle, lifetime: 1701 seconds
channel '1/0/1/30' oper status: idle, lifetime: 653 seconds
channel '1/0/1/31' oper status: idle, lifetime: 400 seconds
channel '1/0/1/32' oper status: idle, lifetime: 876 seconds
channel '1/0/1/33' oper status: idle, lifetime: 780 seconds
channel '1/0/1/34' oper status: idle, lifetime: 2461 seconds
channel '1/0/1/35' oper status: idle, lifetime: 1382 seconds
channel '1/0/1/36' oper status: idle, lifetime: 1595 seconds
channel '1/0/1/37' oper status: idle, lifetime: 2531 seconds
channel '1/0/1/38' oper status: idle, lifetime: 1604 seconds
channel '1/0/1/39' oper status: idle, lifetime: 2160 seconds
channel '1/0/1/4' oper status: idle, lifetime: 340 seconds
channel '1/0/1/40' oper status: idle, lifetime: 1487 seconds
channel '1/0/1/5' oper status: idle, lifetime: 1130 seconds
channel '1/0/1/6' oper status: idle, lifetime: 2739 seconds
channel '1/0/1/7' oper status: idle, lifetime: 1688 seconds
channel '1/0/1/8' oper status: idle, lifetime: 1909 seconds
channel '1/0/1/9' oper status: idle, lifetime: 336 seconds
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
/usr/lib/centreon/plugins/centreon_sonus_sbc_snmp.pl \
	--plugin network::sonus::sbc::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                             | Modèle de service associé                 |
|:---------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| call-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/callstats.pm)] | Net-Sonus-Sbc-Call-Statistics-SNMP-custom |
| channels [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/channels.pm)]         | Net-Sonus-Sbc-Channels-SNMP-custom        |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/cpu.pm)]                   | Net-Sonus-Sbc-Cpu-SNMP-custom             |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/cpudetailed.pm)]  | Net-Sonus-Sbc-Cpu-Detailed-SNMP-custom    |
| dsp-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/dspstats.pm)]        | Net-Sonus-Sbc-Dsp-Statistics-SNMP-custom  |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/interfaces.pm)]     | Net-Sonus-Sbc-Interfaces-SNMP-custom      |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]     | Used for service discovery                |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/load.pm)]                 | Net-Sonus-Sbc-Load-SNMP-custom            |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/memory.pm)]             | Net-Sonus-Sbc-Memory-SNMP-custom          |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/storage.pm)]           | Net-Sonus-Sbc-Disks-SNMP-custom           |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/sonus/sbc/snmp/mode/swap.pm)]                 | Net-Sonus-Sbc-Swap-SNMP-custom            |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Call-Statistics" label="Call-Statistics">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'current', 'total', 'connected', 'refused', 'errored', 'blocked'.                                                                                                                                                         |

</TabItem>
<TabItem value="Channels" label="Channels">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --filter-shelf-id        | Filter channels by shelf ID (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-slot-id         | Filter channels by slot ID (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                          |
| --filter-port-id         | Filter channels by port ID (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                          |
| --filter-channel-id      | Filter channels by channel ID (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                       |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                                                                                                                                                                                                                                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                                                                                                                                                                                                                                               |
| --warning-* --critical-* | Thresholds. Can be: 'channels-total', 'channels-outofservice', 'channels-idle', 'channels-pending', 'channels-waitingforroute', 'channels-actionlist', 'channels-waitingfordigits', 'channels-remotesetup', 'channels-peersetup', 'channels-alerting', 'channels-inbandinfo', 'channels-connected', 'channels-tonegeneration', 'channels-releasing', 'channels-aborting', 'channels-resetting', 'channels-up', 'channels-down', 'channel-lifetime'.    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                   |
|:-------------------|:----------------------------------------------|
| --use-ucd          | Use UCD MIB for CPU average.                  |
| --warning-average  | Warning threshold average CPU utilization.    |
| --critical-average | Critical threshold average CPU utilization.   |
| --warning-core     | Warning thresholds for each CPU core          |
| --critical-core    | Critical thresholds for each CPU core         |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                              |
| --critical-*           | Critical threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                                          | Description                                                                                                                                                                                                                                   |
|:------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file                                 | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-usage                                 | Warning threshold.                                                                                                                                                                                                                            |
| --critical-usage                                | Critical threshold.                                                                                                                                                                                                                           |
| --warning-access                                | Warning threshold.                                                                                                                                                                                                                            |
| --critical-access                               | Critical threshold. Check if storage is readOnly: --critical-access=readOnly                                                                                                                                                                  |
| --add-access                                    | Check storage access (readOnly, readWrite).                                                                                                                                                                                                   |
| --units                                         | Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                                                |
| --free                                          | Thresholds are on free space left.                                                                                                                                                                                                            |
| --storage                                       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage').                                                                                                                                                        |
| --name                                          | Allows to use storage name with option --storage instead ofstorage oid index.                                                                                                                                                                 |
| --regexp                                        | Allows to use regexp to filter storage (with option --name).                                                                                                                                                                                  |
| --regexp-insensitive                            | Allows to use regexp non case-sensitive (with --regexp).                                                                                                                                                                                      |
| --path-best-match                               | Allows to select best path mount point (with --name).                                                                                                                                                                                         |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                   |
| --oid-filter                                    | Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                         |
| --oid-display                                   | Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                        |
| --display-transform-src --display-transform-dst | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run' will replace all occurrences of 'dev' with 'run'                                                |
| --show-cache                                    | Display cache storage data.                                                                                                                                                                                                                   |
| --space-reservation                             | Some filesystem has space reserved (like ext4 for root). The value is in percent of total (default: none) (results like 'df' command).                                                                                                        |
| --filter-duplicate                              | Filter duplicate storages (in used size and total size).                                                                                                                                                                                      |
| --filter-storage-type                           | Filter storage types with a regexp (default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                                                                                                                                |

</TabItem>
<TabItem value="Dsp-Statistics" label="Dsp-Statistics">

| Option                   | Description                                                                                                                                                |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'cpu-utilization', 'channels-active'.                                                                                                  |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                     |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{state} eq "down"'). You can use the following variables: %{state}, %{display}    |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                                          | Description                                                                                                                                                                                                                                                                                |
|:------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file                                 | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                        |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                         |
| --add-global                                    | Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast                                    | Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface                                     | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                 |
| --name                                          | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl                                 | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            |
| --force-counters64                              | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             |
|:-----------|:----------------------------------------|
| --warning  | Warning threshold (1min,5min,15min).    |
| --critical | Critical threshold (1min,5min,15min).   |
| --average  | Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                     |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --units                  | Units of thresholds (default: '%') ('%', 'absolute')(deprecated. Please use new counters directly)                                                              |
| --free                   | Thresholds are on free space left (deprecated. Please use newcounters directly)                                                                                 |
| --swap                   | Check swap also.                                                                                                                                                |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'shared' (B).    |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --no-swap                | Threshold if no active swap (default: 'critical').                      |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_sonus_sbc_snmp.pl \
	--plugin network::sonus::sbc::snmp::plugin \
	--mode=interfaces \
	--help
```
