---
id: network-cisco-standard-snmp
title: Cisco Standard SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco Standard** apporte un modèle d'hôte :

* **Net-Cisco-Standard-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Standard-SNMP-custom" label="Net-Cisco-Standard-SNMP-custom">

| Alias       | Modèle de service                   | Description                                                                                                               |
|:------------|:------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| Cpu         | Net-Cisco-Standard-Cpu-SNMP         | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU |
| Environment | Net-Cisco-Standard-Environment-SNMP | Contrôle l'état du matériel                                                                                               |
| Memory      | Net-Cisco-Standard-Memory-SNMP      | Contrôle l'utilisation mémoire du matériel                                                                                |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Standard-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias         | Modèle de service                     | Description                                            | Découverte |
|:--------------|:--------------------------------------|:-------------------------------------------------------|:-----------|
| Aaa-Servers   | Net-Cisco-Standard-Aaa-Servers-SNMP   | Contrôle les serveurs AAA                              | X          |
| Anycast       | Net-Cisco-Standard-Anycast-SNMP       | Contrôle le type de trafic                             |            |
| Arp           | Net-Cisco-Standard-Arp-SNMP           | Contrôle la table ARP                                  |            |
| Bgp           | Net-Cisco-Standard-Bgp-SNMP           | Contrôle le BGP                                        |            |
| Configuration | Net-Cisco-Standard-Configuration-SNMP | Contrôle si la configuration "running" est sauvegardée |            |
| Hsrp          | Net-Cisco-Standard-Hsrp-SNMP          | Contrôle Cisco HSRP                                    |            |
| Interfaces    | Net-Cisco-Standard-Interfaces-SNMP    | Contrôle les interfaces                                | X          |
| Ipsla         | Net-Cisco-Standard-Ipsla-SNMP         | Contrôle Cisco Round-Trip Time Monitor                 |            |
| Memory-Flash  | Net-Cisco-Standard-Memory-Flash-SNMP  | Contrôle l'utilisation de la mémoire flash             |            |
| Qos-Usage     | Net-Cisco-Standard-Qos-Usage-SNMP     | Contrôle la QoS                                        |            |
| Spanning-Tree | Net-Cisco-Standard-SpanningTree-SNMP  | Contrôle l'état du spanning tree sur les interfaces    |            |
| Stack         | Net-Cisco-Standard-Stack-SNMP         | Contrôle l'état de la stack Cisco                      |            |
| Voice-Call    | Net-Cisco-Standard-Voice-Call-SNMP    | Contrôle les statistiques d'appels                     |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                         | Description                                          |
|:----------------------------------------|:-----------------------------------------------------|
| Net-Cisco-Standard-SNMP-Aaa-Server-Name | Découvre les serveurs AAA et supervise l'utilisation |
| Net-Cisco-Standard-SNMP-Interface-Name  | Découvre les interfaces et supervise l'utilisation   |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Métrique                                                                                  | Unité |
|:------------------------------------------------------------------------------------------|:------|
| aaa_servers.total.count                                                                   |       |
| aaa server status                                                                         |       |
| *address:authen_port:acc_port*#aaa_server.authentication.requests.persecond               | /s    |
| *address:authen_port:acc_port*#aaa_server.authentication.requests.timeout.count           |       |
| *address:authen_port:acc_port*#aaa_server.authentication.transactions.succeeded.persecond | /s    |
| *address:authen_port:acc_port*#aaa_server.authentication.roundtrip.time.milliseconds      | ms    |
| *address:authen_port:acc_port*#aaa_server.accounting.requests.persecond                   | /s    |
| *address:authen_port:acc_port*#aaa_server.accounting.requests.timeout.count               |       |
| *address:authen_port:acc_port*#aaa_server.accounting.transactions.succeeded.persecond     | /s    |
| *address:authen_port:acc_port*#aaa_server.accounting.roundtrip.time.milliseconds          | ms    |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Métrique                                               | Unité |
|:-------------------------------------------------------|:------|
| interface status                                       |       |
| *interface_name*#interface.packets.in.unicast.count    |       |
| *interface_name*#interface.packets.in.broadcast.count  |       |
| *interface_name*#interface.packets.in.multicast.count  |       |
| *interface_name*#interface.packets.out.unicast.count   |       |
| *interface_name*#interface.packets.out.broadcast.count |       |
| *interface_name*#interface.packets.out.multicast.count |       |

</TabItem>
<TabItem value="Arp" label="Arp">

| Métrique                    | Unité |
|:----------------------------|:------|
| arp.total.entries.count     | count |
| arp.duplicate.macaddr.count | count |
| arp.duplicate.ipaddr.count  | count |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Métrique                                                   | Unité |
|:-----------------------------------------------------------|:------|
| bgp.peers.detected.count                                   |       |
| peers status                                               |       |
| *remote_addr~remote_port*#bgp.peer.update.last.seconds     | s     |
| *remote_addr~remote_port*#bgp.peer.prefixes.accepted.count |       |
| *remote_addr~remote_port*#bgp.peer.prefixes.denied.count   |       |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Métrique             | Unité |
|:---------------------|:------|
| running_last_changed | s     |
| running_last_saved   | s     |
| startup_last_changed | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| cpu.utilization.5s.percentage                | %     |
| cpu.utilization.1m.percentage                | %     |
| cpu.utilization.5m.percentage                | %     |
| *cpu_num*#core.cpu.utilization.5s.percentage | %     |
| *cpu_num*#core.cpu.utilization.1m.percentage | %     |
| *cpu_num*#core.cpu.utilization.5m.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Environment" label="Environment">

Coming soon

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Métrique    | Unité |
|:------------|:------|
| hsrp status |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                   | Unité |
|:-----------------------------------------------------------|:------|
| status                                                     |       |
| *interface_name*#interface.traffic.in.bitspersecond        |  b/s  |
| *interface_name*#interface.traffic.in.limit.bitspersecond  |  b/s  |
| *interface_name*#interface.traffic.out.bitspersecond       |  b/s  |
| *interface_name*#interface.traffic.out.limit.bitspersecond |  b/s  |
| *interface_name*#interface.packets.in.error.percentage     |  %    |
| *interface_name*#interface.packets.in.discard.percentage   |  %    |
| *interface_name*#interface.packets.out.error.percentage    |  %    |
| *interface_name*#interface.packets.out.discard.percentage  |  %    |
| *interface_name*#interface.packets.in.crc.count            |       |
| *interface_name*#interface.packets.in.fcserror.count       |       |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| tag#status                                    |       |
| tag#CompletionTime                            |       |
| tag#NumberOverThresholds                      |       |
| tag#AverageDelaySD                            | ms    |
| tag#AverageDelayDS                            | ms    |
| tag#PacketLossRatio                           | %     |
| tag#PercentagePacketsPositiveJitter           |       |
| tag#AverageJitterPerPacketPositiveJitter      |       |
| tag#PercentagePacketsNegativeJitter           |       |
| tag#AverageJitterPerPacketNegativeJitter      |       |
| tag#AverageJitter                             | ms    |
| tag#RTTStandardDeviation                      | ms    |
| tag#DelaySource2DestinationStandardDeviation  | ms    |
| tag#DelayDestination2SourceStandardDeviation  | ms    |
| tag#JitterSource2DestinationStandardDeviation | ms    |
| tag#JitterDestination2SourceStandardDeviation | ms    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| *name*#memory.usage.percentage |       |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| memory partition status                        |       |
| *partition_name*#memory.flash.usage.bytes      | B     |
| *partition_name*#memory.flash.free.bytes       | B     |
| *partition_name*#memory.flash.usage.percentage | %     |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Métrique                                                                    | Unité |
|:----------------------------------------------------------------------------|:------|
| qos.traffic.bitspersecond                                                   | b/s   |
| qos.drop.bitspersecond                                                      | b/s   |
| *interface_name:classmap_name*#qos.interface.classmap.traffic.bitspersecond |       |
| *interface_name:classmap_name*#qos.interface.classmap.drop.bitspersecond    | b/s   |
| *classmap_name*#qos.classmap.traffic.bitspersecond                          | b/s   |
| *classmap_name*#qos.classmap.drop.bitspersecond                             | b/s   |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Métrique             | Unité |
|:---------------------|:------|
| spanning tree status |       |

</TabItem>
<TabItem value="Stack" label="Stack">

Coming soon

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Métrique                                        | Unité |
|:------------------------------------------------|:------|
| calls.active.1m.average.count                   |       |
| calls.active.5m.average.count                   |       |
| calls.active.15m.average.count                  |       |
| *connection_type*#connection.calls.active.count |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Pour utiliser ce connecteur de supervision, vous devez configurer le service SNMP sur l'équipement. Une description complète est disponible sur le site officiel de Cisco: https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html

Voici un exemple: 

  * Se connecter à l'équipement en mode configuration 

```
Router#configure terminal 
Enter configuration commands, one per line.  End with CNTL/Z. 
Router(config)#
```

  * Activer le SNMP en configurant une communauté en lecture seule 

```
Router(config)#snmp-server community public RO 
```

Dans l'exemple ci-dessus, la communauté choisie est 'public'. Cette valeur est ici utilisée à titre d'exemple et est à proscrire en utilisation normale. 

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
dnf install centreon-pack-network-cisco-standard-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-standard-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-standard-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cisco Standard**
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
dnf install centreon-plugin-Network-Cisco-Standard-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Standard-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Standard-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Standard-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Macro                            | Description                                                                                                                  | Valeur par défaut    | Obligatoire |
|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------|:------------|
| FILTERNAME                       | Filter AAA server by name (E.g.: 10.199.126.100:1812:1813. Format: \[address\]:\[authPort\]:\[accPort\])                     |                      |             |
| WARNINGACCREQUESTS               | Thresholds                                                                                                                   |                      |             |
| CRITICALACCREQUESTS              | Thresholds                                                                                                                   |                      |             |
| WARNINGACCREQUESTSTIMEOUT        | Thresholds                                                                                                                   |                      |             |
| CRITICALACCREQUESTSTIMEOUT       | Thresholds                                                                                                                   |                      |             |
| WARNINGACCROUNDTRIPTIME          | Thresholds                                                                                                                   |                      |             |
| CRITICALACCROUNDTRIPTIME         | Thresholds                                                                                                                   |                      |             |
| WARNINGACCTRANSACTIONSSUCEEDED   | Thresholds                                                                                                                   |                      |             |
| CRITICALACCTRANSACTIONSSUCEEDED  | Thresholds                                                                                                                   |                      |             |
| WARNINGAUTHREQUESTS              | Thresholds                                                                                                                   |                      |             |
| CRITICALAUTHREQUESTS             | Thresholds                                                                                                                   |                      |             |
| WARNINGAUTHREQUESTSTIMEOUT       | Thresholds                                                                                                                   |                      |             |
| CRITICALAUTHREQUESTSTIMEOUT      | Thresholds                                                                                                                   |                      |             |
| WARNINGAUTHROUNDTRIPTIME         | Thresholds                                                                                                                   |                      |             |
| CRITICALAUTHROUNDTRIPTIME        | Thresholds                                                                                                                   |                      |             |
| WARNINGAUTHTRANSACTIONSSUCEEDED  | Thresholds                                                                                                                   |                      |             |
| CRITICALAUTHTRANSACTIONSSUCEEDED | Thresholds                                                                                                                   |                      |             |
| CRITICALSTATUS                   | Set critical threshold for status (Default: '%{status} =~ /dead/i'). You can use the following variables: %{status}, %{name} | %{status} =~ /dead/i |             |
| WARNINGSTATUS                    | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                    |                      |             |
| WARNINGTOTAL                     | Thresholds                                                                                                                   |                      |             |
| CRITICALTOTAL                    | Thresholds                                                                                                                   |                      |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                          | --verbose            |             |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Macro            | Description                                                                                                                                                                                             | Valeur par défaut | Obligatoire |
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTER           | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface')                                                                                                                     | .*                |             |
| CRITICALINUCAST  | Thresholds                                                                                                                                                                                              |                   |             |
| WARNINGINUCAST   | Thresholds                                                                                                                                                                                              |                   |             |
| CRITICALOUTUCAST | Thresholds                                                                                                                                                                                              |                   |             |
| WARNINGOUTUCAST  | Thresholds                                                                                                                                                                                              |                   |             |
| CRITICALSTATUS   | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display} |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                     | --verbose         |             |

</TabItem>
<TabItem value="Arp" label="Arp">

| Macro                    | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGDUPLICATEIPADDR   | Thresholds                                                                                          |                   |             |
| CRITICALDUPLICATEIPADDR  | Thresholds                                                                                          |                   |             |
| WARNINGDUPLICATEMACADDR  | Thresholds                                                                                          |                   |             |
| CRITICALDUPLICATEMACADDR | Thresholds                                                                                          |                   |             |
| WARNINGTOTALENTRIES      | Thresholds                                                                                          |                   |             |
| CRITICALTOTALENTRIES     | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Macro                  | Description                                                                                                                                                                                                    | Valeur par défaut                                      | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:------------|
| FILTERREMOTEADDR       | Filter based on IP of peers (regexp allowed)                                                                                                                                                                   |                                                        |             |
| FILTERREMOTEAS         | Filter based on remote AS number (regexp allowed)                                                                                                                                                              |                                                        |             |
| WARNINGPEERSDETECTED   | Thresholds                                                                                                                                                                                                     |                                                        |             |
| CRITICALPEERSDETECTED  | Thresholds                                                                                                                                                                                                     |                                                        |             |
| WARNINGPEERUPDATELAST  | Thresholds                                                                                                                                                                                                     |                                                        |             |
| CRITICALPEERUPDATELAST | Thresholds                                                                                                                                                                                                     |                                                        |             |
| CRITICALSTATUS         | Set critical threshold for status (Default: '%{adminStatus} =~ /start/ && %{state} !~ /established/'). You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs} | %{adminStatus} =~ /start/ && %{state} !~ /established/ |             |
| WARNINGSTATUS          | Set warning threshold for status. You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                                                      |                                                        |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                            | --verbose                                              |             |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Macro          | Description                                                                                                                                                                                                             | Valeur par défaut                               | Obligatoire |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|:------------|
| CRITICALSTATUS | Set critical threshold for status (Default: '%{running\_last\_changed} \> %{running\_last\_saved}'). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed} | %{running_last_changed} > %{running_last_saved} |             |
| WARNINGSTATUS  | Set warning threshold for status (Default: ''). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed}                                                      |                                                 |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                     |                                                 |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGAVERAGE1M  | Thresholds                                                                                          |                   |             |
| CRITICALAVERAGE1M | Thresholds                                                                                          |                   |             |
| WARNINGAVERAGE5M  | Thresholds                                                                                          |                   |             |
| CRITICALAVERAGE5M | Thresholds                                                                                          |                   |             |
| WARNINGAVERAGE5S  | Thresholds                                                                                          |                   |             |
| CRITICALAVERAGE5S | Thresholds                                                                                          |                   |             |
| WARNINGCORE1M     | Thresholds                                                                                          |                   |             |
| CRITICALCORE1M    | Thresholds                                                                                          |                   |             |
| WARNINGCORE5M     | Thresholds                                                                                          | 90                |             |
| CRITICALCORE5M    | Thresholds                                                                                          | 95                |             |
| WARNINGCORE5S     | Thresholds                                                                                          |                   |             |
| CRITICALCORE5S    | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Environment" label="Environment">

| Macro                    | Description                                                                                                              | Valeur par défaut                                               | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|:------------|
| COMPONENT                | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature', 'voltage', 'module', 'physical', 'sensor' | .*                                                              |             |
| WARNINGCOUNTFAN          |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTFAN         |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTMODULE       |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTMODULE      |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTPHYSICAL     |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTPHYSICAL    |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTPSU          |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTPSU         |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTSENSOR       |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTSENSOR      |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTTEMPERATURE  |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTTEMPERATURE |                                                                                                                          |                                                                 |             |
| WARNINGCOUNTVOLTAGE      |                                                                                                                          |                                                                 |             |
| CRITICALCOUNTVOLTAGE     |                                                                                                                          |                                                                 |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                      | --verbose  --filter-perfdata='^(sensor\.(celsius_|rpm_)|temp_)' |             |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| ROLE         | If role is 'primary', an error if HSRPs are 'standby' states. Ifrole is 'secondary', an error if HSRPs are 'active' states. (Default: 'primary') | primary           |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                              | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                   | Description                                                                                                                                                                                             | Valeur par défaut                                    | Obligatoire |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:------------|
| UNITSTRAFFIC            | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter')                                                                                                    | percent_delta                                        |             |
| UNITSERROR              | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter')                                                                        | percent_delta                                        |             |
| OIDFILTER               | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                         | ifname                                               |             |
| OIDDISPLAY              | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                        | ifname                                               |             |
| INTERFACENAME           | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface')                                                                                                                     |                                                      |             |
| WARNINGINBCAST          | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINBCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINCRC            | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINCRC           | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINDISCARD        | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINDISCARD       | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINERROR          | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINERROR         | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINFCSERROR       | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINFCSERROR      | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINMCAST          | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINMCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINTRAFFIC        | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINTRAFFIC       | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINTRAFFICLIMIT   | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINTRAFFICLIMIT  | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINUCAST          | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALINUCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGINVOLUME         |                                                                                                                                                                                                         |                                                      |             |
| CRITICALINVOLUME        |                                                                                                                                                                                                         |                                                      |             |
| WARNINGOUTBCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTBCAST        | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTDISCARD       | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTDISCARD      | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTERROR         | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTERROR        | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTMCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTMCAST        | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTTRAFFIC       | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTTRAFFIC      | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTTRAFFICLIMIT  | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTTRAFFICLIMIT | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTUCAST         | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALOUTUCAST        | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGOUTVOLUME        |                                                                                                                                                                                                         |                                                      |             |
| CRITICALOUTVOLUME       |                                                                                                                                                                                                         |                                                      |             |
| WARNINGSPEED            | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALSPEED           | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALSTATUS          | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display} | %{admstatus} eq "up" and %{opstatus} !~ /up|dormant/ |             |
| WARNINGSTATUS           | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                            |                                                      |             |
| WARNINGTOTALADMINDOWN   | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALADMINDOWN  | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGTOTALADMINUP     | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALADMINUP    | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGTOTALOPERDOWN    | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALOPERDOWN   | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGTOTALOPERUP      | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALOPERUP     | Thresholds                                                                                                                                                                                              |                                                      |             |
| WARNINGTOTALPORT        | Thresholds                                                                                                                                                                                              |                                                      |             |
| CRITICALTOTALPORT       | Thresholds                                                                                                                                                                                              |                                                      |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                                     | --verbose --use-new-perfdata                         |             |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERTAG    | Filter tag (Default: '.*')                                                                          | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERPOOL   | Filter pool to check (can use regexp)                                                               |                   |             |
| CRITICAL     | Threshold critical in percent                                                                       | 90                |             |
| WARNING      | Threshold warning in percent                                                                        | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Macro             | Description                                                                                                 | Valeur par défaut | Obligatoire |
|:------------------|:------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME        | Filter partition name (can be a regexp)                                                                     | .*                |             |
| WARNINGSTATUS     | Set warning threshold for status (Default: ''). You can use the following variables: %{status}, %{display}  |                   |             |
| CRITICALSTATUS    | Set critical threshold for status (Default: ''). You can use the following variables: %{status}, %{display} |                   |             |
| WARNINGUSAGE      | Thresholds                                                                                                  |                   |             |
| CRITICALUSAGE     | Thresholds                                                                                                  |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                                  |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                                  |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                                  |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                                  |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)         |                   |             |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Macro                  | Description                                                                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERSOURCE           | Filter interface name and class-map (can be a regexp). Example of a source (interfacename:servicepolicy:classmap:...): FastEthernet1:Visioconference | .*                |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='^(total-traffic)$'                                                      |                   |             |
| WARNINGCMAPDROP        | Threshold warning                                                                                                                                    |                   |             |
| CRITICALCMAPDROP       | Threshold critical                                                                                                                                   |                   |             |
| WARNINGCMAPTRAFFIC     | Threshold warning                                                                                                                                    |                   |             |
| CRITICALCMAPTRAFFIC    | Threshold critical                                                                                                                                   |                   |             |
| WARNINGINTCMAPDROP     | Threshold warning                                                                                                                                    |                   |             |
| CRITICALINTCMAPDROP    | Threshold critical                                                                                                                                   |                   |             |
| WARNINGINTCMAPTRAFFIC  | Threshold warning                                                                                                                                    |                   |             |
| CRITICALINTCMAPTRAFFIC | Threshold critical                                                                                                                                   |                   |             |
| WARNINGTOTALDROP       | Threshold warning                                                                                                                                    |                   |             |
| CRITICALTOTALDROP      | Threshold critical                                                                                                                                   |                   |             |
| WARNINGTOTALTRAFFIC    | Threshold warning                                                                                                                                    |                   |             |
| CRITICALTOTALTRAFFIC   | Threshold critical                                                                                                                                   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Macro          | Description                                                                                                                                                                                               | Valeur par défaut             | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:------------|
| FILTERPORT     | Filter on port description (can be a regexp)                                                                                                                                                              | .*                            |             |
| CRITICALSTATUS | Set critical threshold for status (Default: '%{op\_status} =~ /up/ && %{state} =~ /blocking\|broken/'). You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index} | %{state} =~ /blocking|broken/ |             |
| WARNINGSTATUS  | Set warning threshold for status. You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index}                                                                       |                               |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                                       | --verbose                     |             |

</TabItem>
<TabItem value="Stack" label="Stack">

| Macro                   | Description                                                                                                                                                                                                                                                                                                                                                                                        | Valeur par défaut                                | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|:------------|
| WARNINGADDED            | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALADDED           | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGFEATUREMISMATCH  | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALFEATUREMISMATCH | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGINVALID          | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALINVALID         | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGNEWMASTERINIT    | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALNEWMASTERINIT   | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGPROGRESSING      | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALPROGRESSING     | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGPROVISIONED      | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALPROVISIONED     | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGREADY            | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALREADY           | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGREMOVED          | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALREMOVED         | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGSDMMISMATCH      | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALSDMMISMATCH     | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALSTACKSTATUS     | Set critical threshold for stack status (Default: '%{stack\_status} =~ /notredundant/'). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                     | %{stack_status} =~ /notredundant/                |             |
| WARNINGSTACKSTATUS      | Set warning threshold for stack status (Default: ''). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                                                        |                                                  |             |
| CRITICALSTATUS          | Set critical threshold for member status (Default: '%{state} !~ /ready/ && %{state} !~ /provisioned/'). You can use the following variables: %{name}, %{role}, %{state}  Role can be: 'master', 'member', 'notMember', 'standby'.  State can be: 'waiting', 'progressing', 'added', 'ready', 'sdmMismatch', 'verMismatch', 'featureMismatch', 'newMasterInit', 'provisioned', 'invalid', 'removed' | %{state} !~ /ready/ && %{state} !~ /provisioned/ |             |
| WARNINGSTATUS           | Set warning threshold for members status (Default: ''). You can use the following variables: %{name}, %{role}, %{state}                                                                                                                                                                                                                                                                            |                                                  |             |
| WARNINGVERSIONMISMATCH  | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALVERSIONMISMATCH | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGWAITING          | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALWAITING         | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                                                                                                                                                                                                                                | --verbose                                        |             |

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Macro                         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGACTIVE15MAVERAGE       | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE15MAVERAGE      | Thresholds                                                                                          |                   |             |
| WARNINGACTIVE1MAVERAGE        | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE1MAVERAGE       | Thresholds                                                                                          |                   |             |
| WARNINGACTIVE5MAVERAGE        | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE5MAVERAGE       | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONCALLSACTIVE  | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONCALLSACTIVE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=cpu \
	--hostname=10.30.2.114 \
	--snmp-version='2c' \
	--snmp-community='cisco_ro' \
  	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 2 CPU(s) average usage is 5.50 % (1m) 6.00 % (5m) - All core cpu are ok | 'cpu.utilization.1m.percentage'=5.50%;;;0;100 'cpu.utilization.5m.percentage'=6.00%;;;0;100 '4097#core.cpu.utilization.1m.percentage'=11.00%;;;0;100 '4097#core.cpu.utilization.5m.percentage'=12.00%;;;0;100 '4129#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 '4129#core.cpu.utilization.5m.percentage'=0.00%;;;0;100
CPU '4097' usage 11.00 % (1m) 12.00 % (5m)
CPU '4129' usage 0.00 % (1m) 0.00 % (5m)
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode                | Modèle de service associé                                               |
|:--------------------|:------------------------------------------------------------------------|
| aaa-servers         | Net-Cisco-Standard-Aaa-Servers-SNMP                                     |
| arp                 | Net-Cisco-Standard-Arp-SNMP                                             |
| bgp                 | Net-Cisco-Standard-Bgp-SNMP                                             |
| configuration       | Net-Cisco-Standard-Configuration-SNMP                                   |
| cpu                 | Net-Cisco-Standard-Cpu-SNMP                                             |
| environment         | Net-Cisco-Standard-Environment-SNMP                                     |
| hsrp                | Net-Cisco-Standard-Hsrp-SNMP                                            |
| interfaces          | Net-Cisco-Standard-Anycast-SNMP<br />Net-Cisco-Standard-Interfaces-SNMP |
| ipsla               | Net-Cisco-Standard-Ipsla-SNMP                                           |
| list-aaa-servers    | Used for service discovery                                              |
| list-interfaces     | Used for service discovery                                              |
| list-spanning-trees | Not used in this Monitoring Connector                                   |
| load                | Not used in this Monitoring Connector                                   |
| memory              | Net-Cisco-Standard-Memory-SNMP                                          |
| memory-flash        | Net-Cisco-Standard-Memory-Flash-SNMP                                    |
| qos-usage           | Net-Cisco-Standard-Qos-Usage-SNMP                                       |
| spanning-tree       | Net-Cisco-Standard-SpanningTree-SNMP                                    |
| stack               | Net-Cisco-Standard-Stack-SNMP                                           |
| uptime              | Not used in this Monitoring Connector                                   |
| voice-call          | Net-Cisco-Standard-Voice-Call-SNMP                                      |
| vpc                 | Not used in this Monitoring Connector                                   |
| vss                 | Not used in this Monitoring Connector                                   |
| wan3g               | Not used in this Monitoring Connector                                   |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | SNMP   |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-autoreduce                          | Progressively reduce the number requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-force-getnext                       | Use snmp getnext function in snmp v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP   |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP   |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP   |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Option                   | Description                                                                                                                                                                                                                                   | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='auth'                                                                                                                                                            | Mode      |
| --filter-name            | Filter AAA server by name (E.g.: 10.199.126.100:1812:1813. Format: \[address\]:\[authPort\]:\[accPort\]).                                                                                                                                     | Mode      |
| --unknown-status         | Set unknown threshold for status. You can use the following variables: %{status}, %{name}                                                                                                                                                     | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{status}, %{name}                                                                                                                                                     | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{status} =~ /dead/i'). You can use the following variables: %{status}, %{name}                                                                                                                  | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'auth-requests', 'auth-requests-timeout', 'auth-transactions-suceeded', 'auth-roundtrip-time', 'acc-requests', 'acc-requests-timeout', 'acc-transactions-suceeded', 'acc-roundtrip-time'.                        | Mode      |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                  | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                   | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                              | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                      | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                                                                                    | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                         | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                               | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                       | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                               | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                  | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                        | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                 | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                           | Retention |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                                                                                       | Mode      |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                                                                                      | Mode      |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           | Mode      |
| --add-err-disable        | Check error disable (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           | Mode      |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                                                                                     | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                                                                                      | Mode      |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                                                                                        | Mode      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                        | Mode      |
| --add-qos-limit          | Check QoS traffic limit rate.                                                                                                                                                                                                                                                                                                                                | Mode      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                                                                                             | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                                                                                 | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                      | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-traffic-limit', 'out-traffic-limit', 'in-crc', 'in-fcserror', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                        | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                            | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                        | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                                                                                                | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                                                                                         | Mode      |
| --name                   | Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                                                                                         | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                   | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                            | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                            | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                     | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                  | Mode      |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                             | Mode      |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                            | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                                                                                       | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                                                                                       | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                                                                                               | Mode      |

</TabItem>
<TabItem value="Arp" label="Arp">

| Option                   | Description                                                                      | Type |
|:-------------------------|:---------------------------------------------------------------------------------|:-----|
| --filter-macaddr         | Filter mac addresses (can be a regexp).                                          | Mode |
| --filter-ipaddr          | Filter ip addresses (can be a regexp).                                           | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'total-entries', 'duplicate-macaddr', 'duplicate-ipaddr'.    | Mode |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Option                   | Description                                                                                                                                                                                                                                   | Type      |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --filter-remote-as       | Filter based on remote AS number (regexp allowed)                                                                                                                                                                                             | Mode      |
| --filter-remote-addr     | Filter based on IP of peers (regexp allowed)                                                                                                                                                                                                  | Mode      |
| --unknown-status         | Set unknown threshold for status. You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                                                                                     | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                                                                                     | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{adminStatus} =~ /start/ && %{state} !~ /established/'). You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'peers-detected', 'peer-update-last', 'peer-prefixes-accepted', 'peer-prefixes-denied'.                                                                                                                                   | Mode      |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Option            | Description                                                                                                                                                                                                                | Type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status (Default: ''). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed}                                                         | Mode |
| --critical-status | Set critical threshold for status (Default: '%{running\_last\_changed} \> %{running\_last\_saved}'). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed}    | Mode |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                                                                                                                              | Type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --check-order            | Check cpu in standard cisco mib. If you have some issue (wrong cpu information in a specific mib), you can change the order (Default: 'process,old\_sys,system\_ext').   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'core-5s', 'core-1m', 'core-5m', 'average-5s', 'average-1m', 'average-5m'.                                                                           | Mode |

</TabItem>
<TabItem value="Environment" label="Environment">

| Option               | Description                                                                                                                                                                                 | Type |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --component          | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature', 'voltage', 'module', 'physical', 'sensor'.                                                                   | Mode |
| --filter             | Exclude some parts (comma seperated list) (Example: --filter=fan --filter=psu) Can also exclude specific instance: --filter=fan,1                                                           | Mode |
| --add-name-instance  | Add literal description for instance value (used in filter, absent-problem and threshold options).                                                                                          | Mode |
| --use-physical-name  | Use entPhysicalName OID instead of entPhysicalDescr.                                                                                                                                        | Mode |
| --add-fru-power      | Check FRU power status.                                                                                                                                                                     | Mode |
| --absent-problem     | Return an error if an entity is not 'present' (default is skipping) (comma seperated list) Can be specific or global: --absent-problem=fan,1                                                | Mode |
| --no-component       | Return an error if no compenents are checked. If total (with skipped) is 0. (Default: 'critical' returns).                                                                                  | Mode |
| --threshold-overload | Set to overload default threshold values (syntax: section,status,regexp) It used before default thresholds (order stays). Example: --threshold-overload='fan,CRITICAL,^(?!(up\|normal)$)'   | Mode |
| --warning            | Set warning threshold for temperatures, voltages, sensors (syntax: type,regexp,threshold) Example: --warning='temperature,.*,30'                                                            | Mode |
| --critical           | Set critical threshold for temperatures, voltages, sensors (syntax: type,regexp,threshold) Example: --critical='temperature,.*,40'                                                          | Mode |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Option        | Description                                                                                                                                         | Type |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-vrid | Filter VRID (can be a regexp).                                                                                                                      | Mode |
| --role        | If role is 'primary', an error if HSRPs are 'standby' states. Ifrole is 'secondary', an error if HSRPs are 'active' states. (Default: 'primary')    | Mode |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                  | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                   | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                              | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                      | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                                                                                    | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                         | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                               | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                       | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                               | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                  | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                        | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                 | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                           | Retention |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                                                                                       | Mode      |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                                                                                      | Mode      |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           | Mode      |
| --add-err-disable        | Check error disable (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           | Mode      |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                                                                                     | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                                                                                      | Mode      |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                                                                                        | Mode      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                        | Mode      |
| --add-qos-limit          | Check QoS traffic limit rate.                                                                                                                                                                                                                                                                                                                                | Mode      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                                                                                             | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                                                                                 | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                      | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-traffic-limit', 'out-traffic-limit', 'in-crc', 'in-fcserror', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                        | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                            | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                        | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                                                                                                | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                                                                                         | Mode      |
| --name                   | Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                                                                                         | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                   | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                            | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                            | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                     | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                  | Mode      |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                             | Mode      |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                            | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                                                                                       | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                                                                                       | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                                                                                               | Mode      |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Option                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Type      |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Retention |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                           | Retention |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Retention |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                      | Retention |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                            | Retention |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Retention |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                               | Retention |
| --filter-tag           | Filter tag (Default: '.*')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Mode      |
| --threshold-overload   | Set to overload default threshold values (syntax: section,status,regexp) It used before default thresholds (order stays). Example: --threshold-overload='opersense,CRITICAL,^(?!(ok)$)'                                                                                                                                                                                                                                                                                                                          | Mode      |
| --warning-*            | Threshold warning. Can be: 'CompletionTime', 'NumberOverThresholds', 'AverageDelaySD', 'AverageDelayDS', 'PacketLossRatio', 'PercentagePacketsPositiveJitter', 'AverageJitterPerPacketPositiveJitter', 'PercentagePacketsNegativeJitter', 'AverageJitterPerPacketNegativeJitter', 'AverageJitter', 'RTTStandardDeviation', 'DelaySource2DestinationStandardDeviation', 'DelayDestination2SourceStandardDeviation', 'JitterSource2DestinationStandardDeviation', 'JitterDestination2SourceStandardDeviation'.     | Mode      |
| --critical-*           | Threshold critical. Can be: 'CompletionTime', 'NumberOverThresholds', 'AverageDelaySD', 'AverageDelayDS', 'PacketLossRatio', 'PercentagePacketsPositiveJitter', 'AverageJitterPerPacketPositiveJitter', 'PercentagePacketsNegativeJitter', 'AverageJitterPerPacketNegativeJitter', 'AverageJitter', 'RTTStandardDeviation', 'DelaySource2DestinationStandardDeviation', 'DelayDestination2SourceStandardDeviation', 'JitterSource2DestinationStandardDeviation', 'JitterDestination2SourceStandardDeviation'.    | Mode      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description                                                                                                                                                                                | Type |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-usage  | Threshold warning in percent.                                                                                                                                                              | Mode |
| --critical-usage | Threshold critical in percent.                                                                                                                                                             | Mode |
| --filter-pool    | Filter pool to check (can use regexp).                                                                                                                                                     | Mode |
| --check-order    | Check memory in standard cisco mib. If you have some issue (wrong memory information in a specific mib), you can change the order (Default: 'enhanced\_pool,pool,process,system\_ext').    | Mode |

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Option                   | Description                                                                                                                          | Type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --unknown-status         | Set unknown threshold for status (Default: '%{status} =~ /readOnly/i'). You can use the following variables: %{status}, %{display}   | Mode |
| --warning-status         | Set warning threshold for status (Default: ''). You can use the following variables: %{status}, %{display}                           | Mode |
| --critical-status        | Set critical threshold for status (Default: ''). You can use the following variables: %{status}, %{display}                          | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                 | Mode |
| --filter-name            | Filter partition name (can be a regexp).                                                                                             | Mode |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Option                 | Description                                                                                                                                                                                                                                   | Type      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --filter-source        | Filter interface name and class-map (can be a regexp). Example of a source (interfacename:servicepolicy:classmap:...): FastEthernet1:Visioconference                                                                                          | Mode      |
| --filter-counters      | Only display some counters (regexp can be used). Example: --filter-counters='^(total-traffic)$'                                                                                                                                               | Mode      |
| --warning-*            | Threshold warning. Can be: 'int-cmap-traffic', 'int-cmap-drop', 'cmap-traffic', 'cmap-drop', 'total-traffic', 'total-drop'.                                                                                                                   | Mode      |
| --critical-*           | Threshold critical. Can be: 'int-cmap-traffic', 'int-cmap-drop', 'cmap-traffic', 'cmap-drop', 'total-traffic', 'total-drop'.                                                                                                                  | Mode      |
| --units-traffic        | Units of thresholds for the traffic (Default: '%') ('%', 'b/s'). Only for --warning-int-traffic and --critical-int-traffic options.                                                                                                           | Mode      |
| --oid-filter           | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName).                                                                                                                                                      | Mode      |
| --oid-display          | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName).                                                                                                                                                     | Mode      |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Option            | Description                                                                                                                                                                                                   | Type |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-port     | Filter on port description (can be a regexp).                                                                                                                                                                 | Mode |
| --warning-status  | Set warning threshold for status. You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index}.                                                                          | Mode |
| --critical-status | Set critical threshold for status (Default: '%{op\_status} =~ /up/ && %{state} =~ /blocking\|broken/'). You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index}.    | Mode |

</TabItem>
<TabItem value="Stack" label="Stack">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                            | Type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-* --critical-* | Set thresholds on members count for each states. (Can be: 'waiting', 'progressing', 'added', 'ready', 'sdm-mismatch', 'version-mismatch', 'feature-mismatch', 'new-master-init', 'provisioned', 'invalid', 'removed')                                                                                                                                                                                  | Mode |
| --warning-stack-status   | Set warning threshold for stack status (Default: ''). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                                                            | Mode |
| --critical-stack-status  | Set critical threshold for stack status (Default: '%{stack\_status} =~ /notredundant/'). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                         | Mode |
| --warning-status         | Set warning threshold for members status (Default: ''). You can use the following variables: %{name}, %{role}, %{state}                                                                                                                                                                                                                                                                                | Mode |
| --critical-status        | Set critical threshold for member status (Default: '%{state} !~ /ready/ && %{state} !~ /provisioned/'). You can use the following variables: %{name}, %{role}, %{state}  Role can be: 'master', 'member', 'notMember', 'standby'.  State can be: 'waiting', 'progressing', 'added', 'ready', 'sdmMismatch', 'verMismatch', 'featureMismatch', 'newMasterInit', 'provisioned', 'invalid', 'removed'.    | Mode |

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Option                   | Description                                                                                                       | Type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-* --critical-* | Thresholds. Can be: 'active-1m-average', 'active-5m-average', 'active-15m-average', 'connection-calls-active'.    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=cpu \
    --help
```
