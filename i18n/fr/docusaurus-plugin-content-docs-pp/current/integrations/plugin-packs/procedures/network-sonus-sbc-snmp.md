---
id: network-sonus-sbc-snmp
title: Sonus SBC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Sonus SBC** apporte un modèle d'hôte :

* Net-Sonus-Sbc-SNMP-custom-custom

Il apporte les modèles de service suivants :

| Alias           | Modèle de service                  | Description                                                                                                                                                                  | Défaut | Découverte |
|:----------------|:-----------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|:-----------|
| Swap            | Net-Sonus-Sbc-Swap-SNMP            | Contrôle du taux d'utilisation de la SWAP du Sonus                                                                                                                           | X      |            |
| Memory          | Net-Sonus-Sbc-Memory-SNMP          | Contrôle l'utilisation mémoire sur l'équipement Sonus SBC                                                                                                                    | X      |            |
| Load            | Net-Sonus-Sbc-Load-SNMP            | Contrôle la charge actuelle de l'équipement                                                                                                                                  | X      |            |
| Interfaces      | Net-Sonus-Sbc-Interfaces-SNMP      | Contrôle les interfaces                                                                                                                                                      | X      | X          |
| Dsp-Statistics  | Net-Sonus-Sbc-Dsp-Statistics-SNMP  | Contrôle les statistiques liés au traitement du signal effectué par la SBC Sonus                                                                                             | X      |            |
| Disks           | Net-Sonus-Sbc-Disks-SNMP           | Contrôle du taux d'utilisation du stockage                                                                                                                                   | X      |            |
| Cpu-Detailed    | Net-Sonus-Sbc-Cpu-Detailed-SNMP    | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter d'avantage de détails sur son utilisation                                                   | X      |            |
| Channels        | Net-Sonus-Sbc-Channels-SNMP        | Contrôle l'état et le statut des channels configurés sur l'équipement                                                                                                        | X      |            |
| Call-Statistics | Net-Sonus-Sbc-Call-Statistics-SNMP | Contrôle les statistiques liés aux appels passés au travers de l'équipement                                                                                                  | X      |            |
| Cpu             | Net-Sonus-Sbc-Cpu-SNMP             | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |        |            |


> Les services par **Défaut** sont créés automatiquement lorsque le modèle d'hôte est appliqué.
>
> Les modèles de service avec le champ "Découverte" sont liés à une règle de découverte automatique de service.

### Règles de découverte

| Nom de la règle                   | Description                                                             |
|:----------------------------------|:------------------------------------------------------------------------|
| Net-Sonus-Sbc-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Call-Statistics" label="Call-Statistics">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| *port_id*#port.calls.current.count   |       |
| *port_id*#port.calls.total.count     |       |
| *port_id*#port.calls.connected.count |       |
| *port_id*#port.calls.refused.count   |       |
| *port_id*#port.calls.errored.count   |       |
| *port_id*#port.calls.blocked.count   |       |

</TabItem>
<TabItem value="Channels" label="Channels">

| Métrique                                                       | Unité |
|:---------------------------------------------------------------|:------|
| channels.total.count                                           |       |
| channels.outofservice.count                                    |       |
| channels.idle.count                                            |       |
| channels.pending.count                                         |       |
| channels.waiting_for_route.count                               |       |
| channels.action_list.count                                     |       |
| channels.waiting_for_digits.count                              |       |
| channels.remote_setup.count                                    |       |
| channels.peer_setup.count                                      |       |
| channels.alerting.count                                        |       |
| channels.inband_info.count                                     |       |
| channels.connected.count                                       |       |
| channels.tone_generation.count                                 |       |
| channels.releasing.count                                       |       |
| channels.aborting.count                                        |       |
| channels.resetting.count                                       |       |
| channels.up.count                                              |       |
| channels.down.count                                            |       |
| channel status                                                 |       |
| *shelf_id~slot_id~port_id~channel_id*#channel.lifetime.seconds |       |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *core_num*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| cpu.user.utilization.percentage       | %     |
| cpu.nice.utilization.percentage       | %     |
| cpu.system.utilization.percentage     | %     |
| cpu.idle.utilization.percentage       | %     |
| cpu.wait.utilization.percentage       | %     |
| cpu.kernel.utilization.percentage     | %     |
| cpu.interrupt.utilization.percentage  | %     |
| cpu.softirq.utilization.percentage    | %     |
| cpu.steal.utilization.percentage      | %     |
| cpu.guest.utilization.percentage      | %     |
| cpu.guestnice.utilization.percentage  | %     |

</TabItem>
<TabItem value="Disks" label="Disks">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| storage.partitions.count                |       |
| *mount_point*#storage.space.usage.bytes | B     |
| *mount_point*#storage.access.count      |       |

</TabItem>
<TabItem value="Dsp-Statistics" label="Dsp-Statistics">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| dsp status                              |       |
| *dsp_id*#dsp.cpu.utilization.percentage | %     |
| *dsp_id*#dsp.channels.active.count      |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       |  b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      |  b/s  |
| *interface_name*#interface.packets.in.error.percentage    |  %    |
| *interface_name*#interface.packets.in.discard.percentage  |  %    |
| *interface_name*#interface.packets.out.error.percentage   |  %    |
| *interface_name*#interface.packets.out.discard.percentage |  %    |

</TabItem>
<TabItem value="Load" label="Load">

| Métrique       | Unité |
|:---------------|:------|
| load.1m.count  |       |
| load.5m.count  |       |
| load.15m.count |       |

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

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique              | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre ressource en SNMP,  il est nécessaire de configurer l'agent sur l'équipement.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

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
dnf install centreon-pack-network-sonus-sbc-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-sonus-sbc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-sonus-sbc-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-sonus-sbc-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Sonus SBC **
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
dnf install centreon-plugin-Network-Sonus-SBC-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Sonus-SBC-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Sonus-SBC-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-sonus-sbc-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Sonus-Sbc-SNMP-custom-custom**.
4. Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire    | Macro            | Description                                                                       | Défaut  |
|:---------------|:-----------------|:----------------------------------------------------------------------------------|:--------|
|                | SNMPEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag) |         |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

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

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_sonus_sbc_snmp.pl \
	--plugin=network::sonus::sbc::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode            | Modèle                             |
|:----------------|:-----------------------------------|
| call-statistics | Net-Sonus-Sbc-Call-Statistics-SNMP |
| channels        | Net-Sonus-Sbc-Channels-SNMP        |
| cpu             | Net-Sonus-Sbc-Cpu-SNMP             |
| cpu-detailed    | Net-Sonus-Sbc-Cpu-Detailed-SNMP    |
| dsp-stats       | Net-Sonus-Sbc-Dsp-Statistics-SNMP  |
| interfaces      | Net-Sonus-Sbc-Interfaces-SNMP      |
| list-interfaces | Used for service discovery         |
| load            | Net-Sonus-Sbc-Load-SNMP            |
| memory          | Net-Sonus-Sbc-Memory-SNMP          |
| storage         | Net-Sonus-Sbc-Disks-SNMP           |
| swap            | Net-Sonus-Sbc-Swap-SNMP            |

### Options complémentaires

#### Options globales

Les options globales aux modes sont listées ci-dessus :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --hostname                                 | Hostname to query (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Snmp   |
| --snmp-community                           | Read community (defaults to public).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp   |
| --snmp-version                             | Version: 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Snmp   |
| --snmp-port                                | Port (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp   |
| --snmp-timeout                             | Timeout in secondes (default: 1) before retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Snmp   |
| --snmp-retries                             | Set the number of retries (default: 5) before failure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Snmp   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Snmp   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                   | Snmp   |
| --snmp-autoreduce                          | Auto reduce SNMP request size in case of SNMP errors (By default, the divisor is 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp   |
| --snmp-force-getnext                       | Use snmp getnext function (even in snmp v2c and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp   |
| --snmp-username                            | Security name (only for SNMP v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Snmp   |
| --authpassphrase                           | Authentication protocol pass phrase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Snmp   |
| --authprotocol                             | Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Snmp   |
| --privpassphrase                           | Privacy protocol pass phrase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Snmp   |
| --privprotocol                             | Privacy protocol: DES\|AES. Since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Snmp   |
| --contextname                              | Context name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Snmp   |
| --contextengineid                          | Context engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Snmp   |
| --securityengineid                         | Security engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Snmp   |
| --snmp-errors-exit                         | Exit code for SNMP Errors (default: unknown)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Snmp   |
| --snmp-tls-transport                       | TLS Transport communication used (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Snmp   |
| --snmp-tls-our-identity                    | Our X.509 identity to use, which should either be a fingerprint or the filename that holds the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Snmp   |
| --snmp-tls-their-identity                  | The remote server's identity to connect to, specified as either a fingerprint or a file name. Either this must be specified, or the hostname below along with a trust anchor.                                                                                                                                                                                                                                                                                                                                                                                              | Snmp   |
| --snmp-tls-their-hostname                  | The remote server's hostname that is expected. If their certificate was signed by a CA then their hostname presented in the certificate must match this value or the connection fails to be established (to avoid man-in-the-middle attacks).                                                                                                                                                                                                                                                                                                                              | Snmp   |
| --snmp-tls-trust-cert                      | A trusted certificate to use as trust anchor (like a CA certificate) for verifying a remote server's certificate. If a CA certificate is used to validate a certificate then the TheirHostname parameter must also be specified to ensure their presented hostname in the certificate matches.                                                                                                                                                                                                                                                                             | Snmp   |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Call-Statistics" label="Call-Statistics">

| Option                   | Description                                                                                                  | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                   | Retention |
| --redis-server           | Redis server to use (only one server). SYntax: address\[:port\]                                              | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                      | Retention |
| --redis-db               | Set Redis database index.                                                                                    | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                         | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                               | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                          | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                           | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.   | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                           | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                    | Retention |
| --warning-* --critical-* | Thresholds. Can be: 'current', 'total', 'connected', 'refused', 'errored', 'blocked'.                        | Mode      |

</TabItem>
<TabItem value="Channels" label="Channels">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            | Type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters.                                                                                                                                                                                                                                                                                                                                                                                                                            | Mode |
| --filter-shelf-id        | Filter channels by shelf id (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                         | Mode |
| --filter-slot-id         | Filter channels by slot id (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                          | Mode |
| --filter-port-id         | Filter channels by port id (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                          | Mode |
| --filter-channel-id      | Filter channels by channel id (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                       | Mode |
| --warning-status         | Set warning threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{display}                                                                                                                                                                                                                                                                                                                                               | Mode |
| --critical-status        | Set critical threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{display}                                                                                                                                                                                                                                                                                                                                              | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'channels-total', 'channels-outofservice', 'channels-idle', 'channels-pending', 'channels-waitingforroute', 'channels-actionlist', 'channels-waitingfordigits', 'channels-remotesetup', 'channels-peersetup', 'channels-alerting', 'channels-inbandinfo', 'channels-connected', 'channels-tonegeneration', 'channels-releasing', 'channels-aborting', 'channels-resetting', 'channels-up', 'channels-down', 'channel-lifetime'.    | Mode |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                   | Type |
|:-------------------|:----------------------------------------------|:-----|
| --use-ucd          | Use UCD mib for cpu average.                  | Mode |
| --warning-average  | Warning threshold average CPU utilization.    | Mode |
| --critical-average | Critical threshold average CPU utilization.   | Mode |
| --warning-core     | Warning thresholds for each CPU core          | Mode |
| --critical-core    | Critical thresholds for each CPU core         | Mode |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                          | Type      |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                           | Retention |
| --redis-server         | Redis server to use (only one server). SYntax: address\[:port\]                                                                                      | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                              | Retention |
| --redis-db             | Set Redis database index.                                                                                                                            | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                 | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                       | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                  | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                   | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                           | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                   | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                        | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                            | Retention |
| --warning-*            | Threshold warning in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.     | Mode      |
| --critical-*           | Threshold critical in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.    | Mode      |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                  | Description                                                                                                                              | Type      |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached             | Memcached server to use (only one server).                                                                                               | Retention |
| --redis-server          | Redis server to use (only one server). SYntax: address\[:port\]                                                                          | Retention |
| --redis-attribute       | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                  | Retention |
| --redis-db              | Set Redis database index.                                                                                                                | Retention |
| --failback-file         | Failback on a local file if redis connection failed.                                                                                     | Retention |
| --memexpiration         | Time to keep data in seconds (Default: 86400).                                                                                           | Retention |
| --statefile-dir         | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                      | Retention |
| --statefile-suffix      | Add a suffix for the statefile name (Default: '').                                                                                       | Retention |
| --statefile-concat-cwd  | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                               | Retention |
| --statefile-format      | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                       | Retention |
| --statefile-key         | Key to encrypt/decrypt cache.                                                                                                            | Retention |
| --statefile-cipher      | Cipher to encrypt cache (Default: 'AES').                                                                                                | Retention |
| --warning-usage         | Threshold warning.                                                                                                                       | Mode      |
| --critical-usage        | Threshold critical.                                                                                                                      | Mode      |
| --warning-access        | Threshold warning.                                                                                                                       | Mode      |
| --critical-access       | Threshold critical. Check if storage is readOnly: --critical-access=readOnly                                                             | Mode      |
| --add-access            | Check storage access (readOnly, readWrite).                                                                                              | Mode      |
| --units                 | Units of thresholds (Default: '%') ('%', 'B').                                                                                           | Mode      |
| --free                  | Thresholds are on free space left.                                                                                                       | Mode      |
| --storage               | Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage').                                                        | Mode      |
| --name                  | Allows to use storage name with option --storage instead ofstorage oid index.                                                            | Mode      |
| --regexp                | Allows to use regexp to filter storage (with option --name).                                                                             | Mode      |
| --regexp-isensitive     | Allows to use regexp non case-sensitive (with --regexp).                                                                                 | Mode      |
| --path-best-match       | Allows to select best path mount point (with --name).                                                                                    | Mode      |
| --reload-cache-time     | Time in minutes before reloading cache file (default: 180).                                                                              | Mode      |
| --oid-filter            | Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                    | Mode      |
| --oid-display           | Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                   | Mode      |
| --display-transform-src | Regexp src to transform display value. (security risk!!!)                                                                                | Mode      |
| --display-transform-dst | Regexp dst to transform display value. (security risk!!!)                                                                                | Mode      |
| --show-cache            | Display cache storage datas.                                                                                                             | Mode      |
| --space-reservation     | Some filesystem has space reserved (like ext4 for root). The value is in percent of total (Default: none) (results like 'df' command).   | Mode      |
| --filter-duplicate      | Filter duplicate storages (in used size and total size).                                                                                 | Mode      |
| --filter-storage-type   | Filter storage types with a regexp (Default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                           | Mode      |

</TabItem>
<TabItem value="Dsp-Statistics" label="Dsp-Statistics">

| Option                   | Description                                                                                                                 | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-* --critical-* | Thresholds. Can be: 'cpu-utilization', 'channels-active'.                                                                   | Mode |
| --warning-status         | Set warning threshold for status. Can used special variables like: %{state}, %{display}                                     | Mode |
| --critical-status        | Set critical threshold for status (Default: '%{state} eq "down"'). Can used special variables like: %{state}, %{display}    | Mode |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                                                                                                                                | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention |
| --redis-server           | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                            | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode      |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    | Mode      |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode      |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    | Mode      |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      | Mode      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     | Mode      |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode      |
| --warning-status         | Set warning threshold for status. Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can used special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode      |
| --name                   | Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode      |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode      |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode      |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             | Mode      |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             | Type |
|:-----------|:----------------------------------------|:-----|
| --warning  | Threshold warning (1min,5min,15min).    | Mode |
| --critical | Threshold critical (1min,5min,15min).   | Mode |
| --average  | Load average for the number of CPUs.    | Mode |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                     | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --units                  | Units of thresholds (Default: '%') ('%', 'absolute')(Deprecated. Please use new counters directly)                                                              | Mode |
| --free                   | Thresholds are on free space left (Deprecated. Please use newcounters directly)                                                                                 | Mode |
| --swap                   | Check swap also.                                                                                                                                                | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'shared' (B).    | Mode |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                             | Type |
|:-------------------------|:------------------------------------------------------------------------|:-----|
| --no-swap                | Threshold if no active swap (default: 'critical').                      | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_sonus_sbc_snmp.pl \
	--plugin=network::sonus::sbc::snmp::plugin \
	--mode=channels \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
