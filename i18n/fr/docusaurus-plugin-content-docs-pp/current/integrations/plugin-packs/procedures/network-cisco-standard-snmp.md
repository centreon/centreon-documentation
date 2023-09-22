---
id: network-cisco-standard-snmp
title: Cisco Standard
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cisco développe et fabrique des équipements de télécommunications, réseaux et logiciels. Les solutions proposées répondent à de multiples usages (mobiles, IOT, routage, etc.). Vous pouvez superviser tous les équipements embarquant les MIBs standard de Cisco.

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco Standard** apporte un modèle d'hôte :

* **Net-Cisco-Standard-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Standard-SNMP-custom" label="Net-Cisco-Standard-SNMP-custom">

| Alias       | Modèle de service                          | Description                                                                                                               |
|:------------|:-------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| Cpu         | Net-Cisco-Standard-Cpu-SNMP-custom         | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU |
| Environment | Net-Cisco-Standard-Environment-SNMP-custom | Contrôle l'état du matériel                                                                                               |
| Memory      | Net-Cisco-Standard-Memory-SNMP-custom      | Contrôle l'utilisation mémoire du matériel                                                                                |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Standard-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias         | Modèle de service                            | Description                                            | Découverte |
|:--------------|:---------------------------------------------|:-------------------------------------------------------|:----------:|
| Aaa-Servers   | Net-Cisco-Standard-Aaa-Servers-SNMP-custom   | Contrôle les serveurs AAA                              | X          |
| Anycast       | Net-Cisco-Standard-Anycast-SNMP-custom       | Contrôle le type de trafic                             |            |
| Arp           | Net-Cisco-Standard-Arp-SNMP-custom           | Contrôle la table arp                                  |            |
| Bgp           | Net-Cisco-Standard-Bgp-SNMP-custom           | Contrôle le BGP                                        |            |
| Configuration | Net-Cisco-Standard-Configuration-SNMP-custom | Contrôle si la configuration "running" est sauvegardée |            |
| Hsrp          | Net-Cisco-Standard-Hsrp-SNMP-custom          | Contrôle Cisco HSRP                                    |            |
| Interfaces    | Net-Cisco-Standard-Interfaces-SNMP-custom    | Contrôle les interfaces                                | X          |
| Ipsla         | Net-Cisco-Standard-Ipsla-SNMP-custom         | Contrôle "Cisco Round-Trip Time Monitor"               |            |
| Memory-Flash  | Net-Cisco-Standard-Memory-Flash-SNMP-custom  | Contrôle l'utilisation de la mémoire flash             |            |
| Qos-Usage     | Net-Cisco-Standard-Qos-Usage-SNMP-custom     | Contrôle la QoS                                        |            |
| Spanning-Tree | Net-Cisco-Standard-SpanningTree-SNMP-custom  | Contrôle l'état du spanning tree sur les interfaces    |            |
| Stack         | Net-Cisco-Standard-Stack-SNMP-custom         | Contrôle l'état de la "stack" Cisco                    |            |
| Voice-Call    | Net-Cisco-Standard-Voice-Call-SNMP-custom    | Contrôle les statistiques d'appels                     |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                          |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resource through a SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de service

| Nom de la règle                         | Description                                                   |
|:----------------------------------------|:--------------------------------------------------------------|
| Net-Cisco-Standard-SNMP-Aaa-Server-Name |                                                               |
| Net-Cisco-Standard-SNMP-Interface-Name  | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Métrique                                                         | Unité |
|:-----------------------------------------------------------------|:------|
| aaa_servers.total.count                                          | count |
| *aaa*~status                                                     | N/A   |
| *aaa*~aaa_server.authentication.requests.persecond               | /s    |
| *aaa*~aaa_server.authentication.requests.timeout.count           | count |
| *aaa*~aaa_server.authentication.transactions.succeeded.persecond | /s    |
| *aaa*~aaa_server.authentication.roundtrip.time.milliseconds      | ms    |
| *aaa*~aaa_server.accounting.requests.persecond                   | /s    |
| *aaa*~aaa_server.accounting.requests.timeout.count               | count |
| *aaa*~aaa_server.accounting.transactions.succeeded.persecond     | /s    |
| *aaa*~aaa_server.accounting.roundtrip.time.milliseconds          | ms    |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| *int*#status                                     | N/A   |
| *int*#interface.packets.in.unicast.percentage    | %     |
| *int*#interface.packets.in.broadcast.percentage  | %     |
| *int*#interface.packets.in.multicast.percentage  | %     |
| *int*#interface.packets.out.unicast.percentage   | %     |
| *int*#interface.packets.out.broadcast.percentage | %     |
| *int*#interface.packets.out.multicast.percentage | %     |

</TabItem>
<TabItem value="Arp" label="Arp">

| Métrique                    | Unité |
|:----------------------------|:------|
| arp.total.entries.count     | count |
| arp.duplicate.macaddr.count | count |
| arp.duplicate.ipaddr.count  | count |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| bgp.peers.detected.count                 | count |
| *peers*#status                           | N/A   |
| *peers*#bgp.peer.update.last.seconds     | s     |
| *peers*#bgp.peer.prefixes.accepted.count | count |
| *peers*#bgp.peer.prefixes.denied.count   | count |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Métrique             | Unité |
|:---------------------|:------|
| startup_last_changed | s     |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| cpu.utilization.5s.percentage                 | %     |
| cpu.utilization.1m.percentage                 | %     |
| cpu.utilization.5m.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.5s.percentage | %     |
| *cpu_core*#core.cpu.utilization.1m.percentage | %     |
| *cpu_core*#core.cpu.utilization.5m.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Environment" label="Environment">

| Métrique           | Description                                |
|:-------------------|:-------------------------------------------|
| entPhysicalDescr   | A text description of the physical device  |
| ciscoEnvMonPresent | Environment sensors of the physical device |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">


Pas de métrique pour ce mode.

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *int*#status                                   | N/A   |
| *int*#interface.traffic.in.bitspersecond       | b/s   |
| *int*#interface.traffic.out.bitspersecond      | b/s   |
| *int*#interface.packets.in.discard.percentage  | %     |
| *int*#interface.packets.in.error.percentage    | %     |
| *int*#interface.packets.out.discard.percentage | %     |
| *int*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Métrique                                        | Unité |
|:------------------------------------------------|:------|
| *tag*#status                                    | N/A   |
| *tag*#CompletionTime                            | N/A   |
| *tag*#NumberOverThresholds                      | N/A   |
| *tag*#AverageDelaySD                            | ms    |
| *tag*#AverageDelayDS                            | ms    |
| *tag*#PacketLossRatio                           | %     |
| *tag*#PercentagePacketsPositiveJitter           | N/A   |
| *tag*#AverageJitterPerPacketPositiveJitter      | N/A   |
| *tag*#PercentagePacketsNegativeJitter           | N/A   |
| *tag*#AverageJitterPerPacketNegativeJitter      | N/A   |
| *tag*#AverageJitter                             | ms    |
| *tag*#RTTStandardDeviation                      | ms    |
| *tag*#DelaySource2DestinationStandardDeviation  | ms    |
| *tag*#DelayDestination2SourceStandardDeviation  | ms    |
| *tag*#JitterSource2DestinationStandardDeviation | ms    |
| *tag*#JitterDestination2SourceStandardDeviation | ms    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                    | Unité |
|:----------------------------|:------|
| *memory*#memory.usage.bytes | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *memory*#status                        | N/A   |
| *memory*#memory.flash.usage.bytes      | B     |
| *memory*#memory.flash.free.bytes       | B     |
| *memory*#memory.flash.usage.percentage | %     |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Métrique                                                          | Unité |
|:------------------------------------------------------------------|:------|
| qos.traffic.bitspersecond                                         | b/s   |
| qos.drop.bitspersecond                                            | b/s   |
| *interface_classmap*#qos.interface.classmap.traffic.bitspersecond | b/s   |
| *interface_classmap*#qos.interface.classmap.drop.bitspersecond    | b/s   |
| *classmap*#qos.classmap.traffic.bitspersecond                     | b/s   |
| *classmap*#qos.classmap.drop.bitspersecond                        | b/s   |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Métrique               | Unité |
|:-----------------------|:------|
| *spanningtrees*#status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Stack" label="Stack">

| Métrique         | Unité |
|:-----------------|:------|
| stack-status     | N/A   |
| waiting          | N/A   |
| progressing      | N/A   |
| added            | N/A   |
| ready            | N/A   |
| sdm-mismatch     | N/A   |
| version-mismatch | N/A   |
| feature-mismatch | N/A   |
| new-master-init  | N/A   |
| provisioned      | N/A   |
| invalid          | N/A   |
| removed          | N/A   |
| *members*#status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| calls.active.1m.average.count         | count |
| calls.active.5m.average.count         | count |
| calls.active.15m.average.count        | count |
| *ctype*#connection.calls.active.count | count |

</TabItem>
</Tabs>

## Prérequis

### Configuration de l'équipement

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

### Flux réseaux

Les collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP avec l'équipement.

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
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Macro                            | Description                                                                                                                                             | Valeur par défaut    | Obligatoire |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| FILTERNAME                       | Filter AAA server by name (E.g.: 10.199.126.100:1812:1813. Format: \[address\]:\[authPort\]:\[accPort\])                                                |                      |             |
| WARNINGACCREQUESTS               | Thresholds                                                                                                                                              |                      |             |
| CRITICALACCREQUESTS              | Thresholds                                                                                                                                              |                      |             |
| WARNINGACCREQUESTSTIMEOUT        | Thresholds                                                                                                                                              |                      |             |
| CRITICALACCREQUESTSTIMEOUT       | Thresholds                                                                                                                                              |                      |             |
| WARNINGACCROUNDTRIPTIME          | Thresholds                                                                                                                                              |                      |             |
| CRITICALACCROUNDTRIPTIME         | Thresholds                                                                                                                                              |                      |             |
| WARNINGACCTRANSACTIONSSUCEEDED   | Thresholds                                                                                                                                              |                      |             |
| CRITICALACCTRANSACTIONSSUCEEDED  | Thresholds                                                                                                                                              |                      |             |
| WARNINGAUTHREQUESTS              | Thresholds                                                                                                                                              |                      |             |
| CRITICALAUTHREQUESTS             | Thresholds                                                                                                                                              |                      |             |
| WARNINGAUTHREQUESTSTIMEOUT       | Thresholds                                                                                                                                              |                      |             |
| CRITICALAUTHREQUESTSTIMEOUT      | Thresholds                                                                                                                                              |                      |             |
| WARNINGAUTHROUNDTRIPTIME         | Thresholds                                                                                                                                              |                      |             |
| CRITICALAUTHROUNDTRIPTIME        | Thresholds                                                                                                                                              |                      |             |
| WARNINGAUTHTRANSACTIONSSUCEEDED  | Thresholds                                                                                                                                              |                      |             |
| CRITICALAUTHTRANSACTIONSSUCEEDED | Thresholds                                                                                                                                              |                      |             |
| CRITICALSTATUS                   | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /dead/i'). You can use the following variables: %{status}, %{name} | %{status} =~ /dead/i |             |
| WARNINGSTATUS                    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                    |                      |             |
| WARNINGTOTAL                     | Thresholds                                                                                                                                              |                      |             |
| CRITICALTOTAL                    | Thresholds                                                                                                                                              |                      |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                     | --verbose            |             |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Macro            | Description                                                                                                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER           | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                                                                                                                                               | .*                |             |
| CRITICALINUCAST  | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGINUCAST   | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALOUTUCAST | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGOUTUCAST  | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSTATUS   | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display} |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                | --verbose         |             |

</TabItem>
<TabItem value="Arp" label="Arp">

| Macro                    | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDUPLICATEIPADDR   | Thresholds                                                                                          |                   |             |
| CRITICALDUPLICATEIPADDR  | Thresholds                                                                                          |                   |             |
| WARNINGDUPLICATEMACADDR  | Thresholds                                                                                          |                   |             |
| CRITICALDUPLICATEMACADDR | Thresholds                                                                                          |                   |             |
| WARNINGTOTALENTRIES      | Thresholds                                                                                          |                   |             |
| CRITICALTOTALENTRIES     | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Macro                  | Description                                                                                                                                                                                                                               | Valeur par défaut                                      | Obligatoire |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:-----------:|
| FILTERREMOTEADDR       | Filter based on IP of peers (regexp allowed)                                                                                                                                                                                              |                                                        |             |
| FILTERREMOTEAS         | Filter based on remote AS number (regexp allowed)                                                                                                                                                                                         |                                                        |             |
| WARNINGPEERSDETECTED   | Thresholds                                                                                                                                                                                                                                |                                                        |             |
| CRITICALPEERSDETECTED  | Thresholds                                                                                                                                                                                                                                |                                                        |             |
| WARNINGPEERUPDATELAST  | Thresholds                                                                                                                                                                                                                                |                                                        |             |
| CRITICALPEERUPDATELAST | Thresholds                                                                                                                                                                                                                                |                                                        |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: '%{adminStatus} =~ /start/ && %{state} !~ /established/'). You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs} | %{adminStatus} =~ /start/ && %{state} !~ /established/ |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                                                      |                                                        |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                       | --verbose                                              |             |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Macro          | Description                                                                                                                                                                                                                                        | Valeur par défaut                                    | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{running\_last\_changed} \> %{running\_last\_saved}'). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed} | %{running\_last\_changed} \> %{running\_last\_saved} |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed}                                                      |                                                      |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                |                                                      |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
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

| Macro                    | Description                                                                                                              | Valeur par défaut                                                    | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------|:-----------:|
| COMPONENT                | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature', 'voltage', 'module', 'physical', 'sensor' | .*                                                                   |             |
| WARNINGCOUNTFAN          |                                                                                                                          |                                                                      |             |
| CRITICALCOUNTFAN         |                                                                                                                          |                                                                      |             |
| WARNINGCOUNTMODULE       |                                                                                                                          |                                                                      |             |
| CRITICALCOUNTMODULE      |                                                                                                                          |                                                                      |             |
| WARNINGCOUNTPHYSICAL     |                                                                                                                          |                                                                      |             |
| CRITICALCOUNTPHYSICAL    |                                                                                                                          |                                                                      |             |
| WARNINGCOUNTPSU          |                                                                                                                          |                                                                      |             |
| CRITICALCOUNTPSU         |                                                                                                                          |                                                                      |             |
| WARNINGCOUNTSENSOR       |                                                                                                                          |                                                                      |             |
| CRITICALCOUNTSENSOR      |                                                                                                                          |                                                                      |             |
| WARNINGCOUNTTEMPERATURE  |                                                                                                                          |                                                                      |             |
| CRITICALCOUNTTEMPERATURE |                                                                                                                          |                                                                      |             |
| WARNINGCOUNTVOLTAGE      |                                                                                                                          |                                                                      |             |
| CRITICALCOUNTVOLTAGE     |                                                                                                                          |                                                                      |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      | --verbose  --filter-perfdata='^(sensor\.(celsius\_\|rpm\_)\|temp\_)' |             |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ROLE         | If role is 'primary', an error if HSRPs are 'standby' states. If role is 'secondary', an error if HSRPs are 'active' states. (Default: 'primary') | primary           | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                              | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                   | Description                                                                                                                                                                                                                        | Valeur par défaut                                     | Obligatoire |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| UNITSTRAFFIC            | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter')                                                                                                                               | percent\_delta                                        |             |
| UNITSERROR              | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter')                                                                                                   | percent\_delta                                        |             |
| UNITSCAST               | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter')                                                                                               | percent\_delta                                        |             |
| OIDFILTER               | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                                         | ifname                                                |             |
| OIDDISPLAY              | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                                | ifname                                                |             |
| INTERFACENAME           | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                                                                                                                                               |                                                       |             |
| WARNINGINBCAST          | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALINBCAST         | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGINCRC            | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALINCRC           | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGINDISCARD        | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALINDISCARD       | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGINERROR          | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALINERROR         | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGINFCSERROR       | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALINFCSERROR      | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGINMCAST          | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALINMCAST         | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGINTRAFFIC        | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALINTRAFFIC       | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGINTRAFFICLIMIT   | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALINTRAFFICLIMIT  | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGINUCAST          | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALINUCAST         | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGINVOLUME         |                                                                                                                                                                                                                                    |                                                       |             |
| CRITICALINVOLUME        |                                                                                                                                                                                                                                    |                                                       |             |
| WARNINGOUTBCAST         | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALOUTBCAST        | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGOUTDISCARD       | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALOUTDISCARD      | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGOUTERROR         | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALOUTERROR        | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGOUTMCAST         | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALOUTMCAST        | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGOUTTRAFFIC       | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALOUTTRAFFIC      | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGOUTTRAFFICLIMIT  | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALOUTTRAFFICLIMIT | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGOUTUCAST         | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALOUTUCAST        | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGOUTVOLUME        |                                                                                                                                                                                                                                    |                                                       |             |
| CRITICALOUTVOLUME       |                                                                                                                                                                                                                                    |                                                       |             |
| WARNINGSPEED            | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALSPEED           | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display} | %{admstatus} eq "up" and %{opstatus} !~ /up\|dormant/ |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                            |                                                       |             |
| WARNINGTOTALADMINDOWN   | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALTOTALADMINDOWN  | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGTOTALADMINUP     | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALTOTALADMINUP    | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGTOTALOPERDOWN    | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALTOTALOPERDOWN   | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGTOTALOPERUP      | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALTOTALOPERUP     | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| WARNINGTOTALPORT        | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| CRITICALTOTALPORT       | Thresholds                                                                                                                                                                                                                         |                                                       |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                | --verbose --use-new-perfdata                          |             |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTAG    | Filter tag (Default: '.*')                                                                          | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERPOOL   | Filter pool to check (can use regexp)                                                               |                   |             |
| CRITICAL     | Critical threshold in percent                                                                       | 90                |             |
| WARNING      | Warning threshold in percent                                                                        | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Macro             | Description                                                                                                                            | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME        | Filter partition name (can be a regexp)                                                                                                | .*                |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{display}  |                   |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}, %{display} |                   |             |
| WARNINGUSAGE      | Thresholds                                                                                                                             |                   |             |
| CRITICALUSAGE     | Thresholds                                                                                                                             |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                                                             |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                                                             |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                                                             |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                    |                   |             |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Macro                  | Description                                                                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSOURCE           | Filter interface name and class-map (can be a regexp). Example of a source (interfacename:servicepolicy:classmap:...): FastEthernet1:Visioconference | .*                |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='^(total-traffic)$'                                                      |                   |             |
| WARNINGCMAPDROP        | Warning threshold                                                                                                                                    |                   |             |
| CRITICALCMAPDROP       | Critical threshold                                                                                                                                   |                   |             |
| WARNINGCMAPTRAFFIC     | Warning threshold                                                                                                                                    |                   |             |
| CRITICALCMAPTRAFFIC    | Critical threshold                                                                                                                                   |                   |             |
| WARNINGINTCMAPDROP     | Warning threshold                                                                                                                                    |                   |             |
| CRITICALINTCMAPDROP    | Critical threshold                                                                                                                                   |                   |             |
| WARNINGINTCMAPTRAFFIC  | Warning threshold                                                                                                                                    |                   |             |
| CRITICALINTCMAPTRAFFIC | Critical threshold                                                                                                                                   |                   |             |
| WARNINGTOTALDROP       | Warning threshold                                                                                                                                    |                   |             |
| CRITICALTOTALDROP      | Critical threshold                                                                                                                                   |                   |             |
| WARNINGTOTALTRAFFIC    | Warning threshold                                                                                                                                    |                   |             |
| CRITICALTOTALTRAFFIC   | Critical threshold                                                                                                                                   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Macro          | Description                                                                                                                                                                                                                          | Valeur par défaut              | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| FILTERPORT     | Filter on port description (can be a regexp)                                                                                                                                                                                         | .*                             |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{op\_status} =~ /up/ && %{state} =~ /blocking\|broken/'). You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index} | %{state} =~ /blocking\|broken/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index}                                                                       |                                |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                  | --verbose                      |             |

</TabItem>
<TabItem value="Stack" label="Stack">

| Macro                   | Description                                                                                                                                                                                                                                                                                                                                                                                        | Valeur par défaut                                | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|:-----------:|
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
| CRITICALSTACKSTATUS     | Set critical threshold for stack status (Default: '%{stack\_status} =~ /notredundant/'). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                     | %{stack\_status} =~ /notredundant/               |             |
| WARNINGSTACKSTATUS      | Set warning threshold for stack status (Default: ''). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                                                        |                                                  |             |
| CRITICALSTATUS          | Set critical threshold for member status (Default: '%{state} !~ /ready/ && %{state} !~ /provisioned/'). You can use the following variables: %{name}, %{role}, %{state}  Role can be: 'master', 'member', 'notMember', 'standby'.  State can be: 'waiting', 'progressing', 'added', 'ready', 'sdmMismatch', 'verMismatch', 'featureMismatch', 'newMasterInit', 'provisioned', 'invalid', 'removed' | %{state} !~ /ready/ && %{state} !~ /provisioned/ |             |
| WARNINGSTATUS           | Set warning threshold for members status (Default: ''). You can use the following variables: %{name}, %{role}, %{state}                                                                                                                                                                                                                                                                            |                                                  |             |
| WARNINGVERSIONMISMATCH  | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALVERSIONMISMATCH | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| WARNINGWAITING          | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| CRITICALWAITING         | Set thresholds on members count for each states. (                                                                                                                                                                                                                                                                                                                                                 |                                                  |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                                                                                                                                                                | --verbose                                        |             |

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Macro                         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVE15MAVERAGE       | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE15MAVERAGE      | Thresholds                                                                                          |                   |             |
| WARNINGACTIVE1MAVERAGE        | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE1MAVERAGE       | Thresholds                                                                                          |                   |             |
| WARNINGACTIVE5MAVERAGE        | Thresholds                                                                                          |                   |             |
| CRITICALACTIVE5MAVERAGE       | Thresholds                                                                                          |                   |             |
| WARNINGCONNECTIONCALLSACTIVE  | Thresholds                                                                                          |                   |             |
| CRITICALCONNECTIONCALLSACTIVE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=voice-call \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--warning-active-1m-average='' \
	--critical-active-1m-average='' \
	--warning-active-5m-average='' \
	--critical-active-5m-average='' \
	--warning-active-15m-average='' \
	--critical-active-15m-average='' \
	--warning-connection-calls-active='' \
	--critical-connection-calls-active='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 7 (1m) 47 (5m) 58 (15m) All connection types are ok | 'calls.active.1m.average.count'=7;;;0;'calls.active.5m.average.count'=47;;;0;'calls.active.15m.average.count'=58;;;0;'*ctype*#connection.calls.active.count'=;;;0;
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
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                | Modèle de service associé                                                             |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------|
| aaa-servers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/aaaservers.pm)]          | Net-Cisco-Standard-Aaa-Servers-SNMP-custom                                            |
| arp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/arp.pm)]                                               | Net-Cisco-Standard-Arp-SNMP-custom                                                    |
| bgp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/bgp.pm)]                         | Net-Cisco-Standard-Bgp-SNMP-custom                                                    |
| configuration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/configuration.pm)]     | Net-Cisco-Standard-Configuration-SNMP-custom                                          |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/cpu.pm)]                         | Net-Cisco-Standard-Cpu-SNMP-custom                                                    |
| environment [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/environment.pm)]         | Net-Cisco-Standard-Environment-SNMP-custom                                            |
| hsrp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/hsrp.pm)]                       | Net-Cisco-Standard-Hsrp-SNMP-custom                                                   |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/interfaces.pm)]           | Net-Cisco-Standard-Anycast-SNMP-custom<br />Net-Cisco-Standard-Interfaces-SNMP-custom |
| ipsla [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/ipsla.pm)]                     | Net-Cisco-Standard-Ipsla-SNMP-custom                                                  |
| list-aaa-servers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/listaaaservers.pm)] | Used for service discovery                                                            |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                        | Used for service discovery                                                            |
| list-spanning-trees [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listspanningtrees.pm)]                 | Not used in this Monitoring Connector                                                 |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/load.pm)]                       | Not used in this Monitoring Connector                                                 |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/memory.pm)]                   | Net-Cisco-Standard-Memory-SNMP-custom                                                 |
| memory-flash [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/memoryflash.pm)]        | Net-Cisco-Standard-Memory-Flash-SNMP-custom                                           |
| qos-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/qosusage.pm)]              | Net-Cisco-Standard-Qos-Usage-SNMP-custom                                              |
| spanning-tree [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/spanningtree.pm)]                            | Net-Cisco-Standard-SpanningTree-SNMP-custom                                           |
| stack [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/stack.pm)]                     | Net-Cisco-Standard-Stack-SNMP-custom                                                  |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                         | Not used in this Monitoring Connector                                                 |
| voice-call [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/voicecall.pm)]            | Net-Cisco-Standard-Voice-Call-SNMP-custom                                             |
| vpc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/vpc.pm)]                         | Not used in this Monitoring Connector                                                 |
| vss [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/vss.pm)]                         | Not used in this Monitoring Connector                                                 |
| wan3g [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/wan3g.pm)]                     | Not used in this Monitoring Connector                                                 |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
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
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
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
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='auth'                                                                                                                                                            |
| --filter-name            | Filter AAA server by name (E.g.: 10.199.126.100:1812:1813. Format: \[address\]:\[authPort\]:\[accPort\]).                                                                                                                                     |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                                                                                                          |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                                                                                                          |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /dead/i'). You can use the following variables: %{status}, %{name}                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'auth-requests', 'auth-requests-timeout', 'auth-transactions-suceeded', 'auth-roundtrip-time', 'acc-requests', 'acc-requests-timeout', 'acc-transactions-suceeded', 'acc-roundtrip-time'.                        |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Option                                          | Description                                                                                                                                                                                                                                                                                                                                                  |
|:------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                   |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                              |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                      |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                                                                                                                                    |
| --failback-file                                 | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                         |
| --memexpiration                                 | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                               |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                       |
| --statefile-suffix                              | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                               |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                  |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                        |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                 |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                           |
| --add-global                                    | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                                                                                       |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                                                                                      |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           |
| --add-err-disable                               | Check error disable (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                                                                                     |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                                                                                      |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                                                                                        |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                                                                                       |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                        |
| --add-qos-limit                                 | Check QoS traffic limit rate.                                                                                                                                                                                                                                                                                                                                |
| --check-metrics                                 | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                                                                                             |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                                                      |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                           |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-traffic-limit', 'out-traffic-limit', 'in-crc', 'in-fcserror', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                        |
| --units-errors                                  | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                            |
| --units-cast                                    | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                        |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                                                                                                |
| --interface                                     | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                                                                                        |
| --name                                          | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                                                                                                 |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                   |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                            |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                            |
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                     |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                  |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                  |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                         |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                                                                                       |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Eg: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                                                                                                  |
| --show-cache                                    | Display cache interface datas.                                                                                                                                                                                                                                                                                                                               |

</TabItem>
<TabItem value="Arp" label="Arp">

| Option                   | Description                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------|
| --filter-macaddr         | Filter mac addresses (can be a regexp).                                          |
| --filter-ipaddr          | Filter IP addresses (can be a regexp).                                           |
| --warning-* --critical-* | Thresholds. Can be: 'total-entries', 'duplicate-macaddr', 'duplicate-ipaddr'.    |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-remote-as       | Filter based on remote AS number (regexp allowed)                                                                                                                                                                                             |
| --filter-remote-addr     | Filter based on IP of peers (regexp allowed)                                                                                                                                                                                                  |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                                                          |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}                                                                          |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{adminStatus} =~ /start/ && %{state} !~ /established/'). You can use the following variables: %{adminStatus}, %{state}, %{localAddr}, %{remoteAddr}, %{remoteAs}     |
| --warning-* --critical-* | Thresholds. Can be: 'peers-detected', 'peer-update-last', 'peer-prefixes-accepted', 'peer-prefixes-denied'.                                                                                                                                   |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Option            | Description                                                                                                                                                                                                                                           |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed}                                                         |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{running\_last\_changed} \> %{running\_last\_saved}'). You can use the following variables: %{running\_last\_changed}, %{running\_last\_saved}, %{startup\_last\_changed}    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                                                                                                                              |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --check-order            | Check cpu in standard cisco mib. If you have some issue (wrong cpu information in a specific mib), you can change the order (Default: 'process,old\_sys,system\_ext').   |
| --warning-* --critical-* | Thresholds. Can be: 'core-5s', 'core-1m', 'core-5m', 'average-5s', 'average-1m', 'average-5m'.                                                                           |

</TabItem>
<TabItem value="Environment" label="Environment">

| Option               | Description                                                                                                                                                                                                         |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature', 'voltage', 'module', 'physical', 'sensor'.                                                                                           |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                          |
| --add-name-instance  | Add literal description for instance value (used in filter, absent-problem and threshold options).                                                                                                                  |
| --use-physical-name  | Use entPhysicalName OID instead of entPhysicalDescr.                                                                                                                                                                |
| --add-fru-power      | Check FRU power status.                                                                                                                                                                                             |
| --absent-problem     | Return an error if an entity is not 'present' (default is skipping) (comma seperated list) Can be specific or global: --absent-problem=fan,1                                                                        |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                          |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='fan,CRITICAL,^(?!(up\|normal)$)'   |
| --warning            | Set warning threshold for temperatures, voltages, sensors (syntax: type,regexp,threshold) Example: --warning='temperature,.*,30'                                                                                    |
| --critical           | Set critical threshold for temperatures, voltages, sensors (syntax: type,regexp,threshold) Example: --critical='temperature,.*,40'                                                                                  |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Option        | Description                                                                                                                                         |
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-vrid | Filter VRID (can be a regexp).                                                                                                                      |
| --role        | If role is 'primary', an error if HSRPs are 'standby' states. Ifrole is 'secondary', an error if HSRPs are 'active' states. (Default: 'primary')    |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                                          | Description                                                                                                                                                                                                                                                                                                                                                  |
|:------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                   |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                              |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                      |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                                                                                                                                    |
| --failback-file                                 | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                         |
| --memexpiration                                 | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                               |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                       |
| --statefile-suffix                              | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                               |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                  |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                        |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                 |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                           |
| --add-global                                    | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                                                                                       |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                                                                                      |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           |
| --add-err-disable                               | Check error disable (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                           |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                                                                                     |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                                                                                      |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                                                                                        |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                                                                                       |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                        |
| --add-qos-limit                                 | Check QoS traffic limit rate.                                                                                                                                                                                                                                                                                                                                |
| --check-metrics                                 | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                                                                                             |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                                                                                      |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{errdisable}, %{display}                                                                                                                           |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-traffic-limit', 'out-traffic-limit', 'in-crc', 'in-fcserror', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                        |
| --units-errors                                  | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                            |
| --units-cast                                    | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                        |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                                                                                                |
| --interface                                     | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                                                                                        |
| --name                                          | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                                                                                                 |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                   |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                            |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                            |
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                     |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                  |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                  |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                         |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                                                                                       |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Eg: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                                                                                                  |
| --show-cache                                    | Display cache interface datas.                                                                                                                                                                                                                                                                                                                               |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Option                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                      |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                            |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --filter-tag           | Filter tag (Default: '.*')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --threshold-overload   | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='opersense,CRITICAL,^(?!(ok)$)'                                                                                                                                                                                                                                                                                                  |
| --warning-*            | Warning threshold. Can be: 'CompletionTime', 'NumberOverThresholds', 'AverageDelaySD', 'AverageDelayDS', 'PacketLossRatio', 'PercentagePacketsPositiveJitter', 'AverageJitterPerPacketPositiveJitter', 'PercentagePacketsNegativeJitter', 'AverageJitterPerPacketNegativeJitter', 'AverageJitter', 'RTTStandardDeviation', 'DelaySource2DestinationStandardDeviation', 'DelayDestination2SourceStandardDeviation', 'JitterSource2DestinationStandardDeviation', 'JitterDestination2SourceStandardDeviation'.     |
| --critical-*           | Critical threshold. Can be: 'CompletionTime', 'NumberOverThresholds', 'AverageDelaySD', 'AverageDelayDS', 'PacketLossRatio', 'PercentagePacketsPositiveJitter', 'AverageJitterPerPacketPositiveJitter', 'PercentagePacketsNegativeJitter', 'AverageJitterPerPacketNegativeJitter', 'AverageJitter', 'RTTStandardDeviation', 'DelaySource2DestinationStandardDeviation', 'DelayDestination2SourceStandardDeviation', 'JitterSource2DestinationStandardDeviation', 'JitterDestination2SourceStandardDeviation'.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description                                                                                                                                                                                |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-usage  | Warning threshold in percent.                                                                                                                                                              |
| --critical-usage | Critical threshold in percent.                                                                                                                                                             |
| --filter-pool    | Filter pool to check (can use regexp).                                                                                                                                                     |
| --check-order    | Check memory in standard cisco mib. If you have some issue (wrong memory information in a specific mib), you can change the order (Default: 'enhanced\_pool,pool,process,system\_ext').    |

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Option                   | Description                                                                                                                                                     |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /readOnly/i'). You can use the following variables: %{status}, %{display}   |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{display}                           |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}, %{display}                          |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                            |
| --filter-name            | Filter partition name (can be a regexp).                                                                                                                        |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-source        | Filter interface name and class-map (can be a regexp). Example of a source (interfacename:servicepolicy:classmap:...): FastEthernet1:Visioconference                                                                                          |
| --filter-counters      | Only display some counters (regexp can be used). Example: --filter-counters='^(total-traffic)$'                                                                                                                                               |
| --warning-*            | Warning threshold. Can be: 'int-cmap-traffic', 'int-cmap-drop', 'cmap-traffic', 'cmap-drop', 'total-traffic', 'total-drop'.                                                                                                                   |
| --critical-*           | Critical threshold. Can be: 'int-cmap-traffic', 'int-cmap-drop', 'cmap-traffic', 'cmap-drop', 'total-traffic', 'total-drop'.                                                                                                                  |
| --units-traffic        | Units of thresholds for the traffic (Default: '%') ('%', 'b/s'). Only for --warning-int-traffic and --critical-int-traffic options.                                                                                                           |
| --oid-filter           | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName).                                                                                                                                           |
| --oid-display          | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName).                                                                                                                                  |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Option            | Description                                                                                                                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-port     | Filter on port description (can be a regexp).                                                                                                                                                                                            |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index}.                                                                          |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{op\_status} =~ /up/ && %{state} =~ /blocking\|broken/'). You can use the following variables: %{state}, %{op\_status}, %{admin\_status}, %{port}, %{index}.    |

</TabItem>
<TabItem value="Stack" label="Stack">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Set thresholds on members count for each states. (Can be: 'waiting', 'progressing', 'added', 'ready', 'sdm-mismatch', 'version-mismatch', 'feature-mismatch', 'new-master-init', 'provisioned', 'invalid', 'removed')                                                                                                                                                                                  |
| --warning-stack-status   | Set warning threshold for stack status (Default: ''). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                                                            |
| --critical-stack-status  | Set critical threshold for stack status (Default: '%{stack\_status} =~ /notredundant/'). You can use the following variables: %{stack\_status}                                                                                                                                                                                                                                                         |
| --warning-status         | Set warning threshold for members status (Default: ''). You can use the following variables: %{name}, %{role}, %{state}                                                                                                                                                                                                                                                                                |
| --critical-status        | Set critical threshold for member status (Default: '%{state} !~ /ready/ && %{state} !~ /provisioned/'). You can use the following variables: %{name}, %{role}, %{state}  Role can be: 'master', 'member', 'notMember', 'standby'.  State can be: 'waiting', 'progressing', 'added', 'ready', 'sdmMismatch', 'verMismatch', 'featureMismatch', 'newMasterInit', 'provisioned', 'invalid', 'removed'.    |

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Option                   | Description                                                                                                       |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'active-1m-average', 'active-5m-average', 'active-15m-average', 'connection-calls-active'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_standard_snmp.pl \
	--plugin=network::cisco::standard::snmp::plugin \
	--mode=voice-call \
	--help
```
