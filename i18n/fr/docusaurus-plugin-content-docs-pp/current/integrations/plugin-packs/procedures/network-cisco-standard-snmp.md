---
id: network-cisco-standard-snmp
title: Cisco Standard SNMP
description: "Supervisez les commutateurs et routeurs Cisco via SNMP : CPU, mémoire, interfaces, BGP, HSRP, QoS et environnement matériel."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Cisco Standard SNMP** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco Standard SNMP** apporte un modèle d'hôte :

* **Net-Cisco-Standard-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Standard-SNMP-custom" label="Net-Cisco-Standard-SNMP-custom">

| Alias       | Modèle de service                          | Description                                                                                                               |
|:------------|:-------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| Cpu         | Net-Cisco-Standard-Cpu-SNMP-custom         | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU |
| Environment | Net-Cisco-Standard-Environment-SNMP-custom | Contrôle l'état du matériel (Ventilateurs, alimentations, températures, voltages)                                         |
| Memory      | Net-Cisco-Standard-Memory-SNMP-custom      | Contrôle l'utilisation mémoire du matériel                                                                                |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Standard-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias         | Modèle de service                            | Description                                                               | Découverte |
|:--------------|:---------------------------------------------|:--------------------------------------------------------------------------|:----------:|
| Aaa-Servers   | Net-Cisco-Standard-Aaa-Servers-SNMP-custom   | Contrôle les serveurs AAA                                                 | X          |
| Anycast       | Net-Cisco-Standard-Anycast-SNMP-custom       | Contrôle le type de trafic (unicast, broadcast, multicast) des interfaces |            |
| Arp           | Net-Cisco-Standard-Arp-SNMP-custom           | Contrôle la table ARP                                                     |            |
| Bgp           | Net-Cisco-Standard-Bgp-SNMP-custom           | Contrôle le BGP                                                           |            |
| Configuration | Net-Cisco-Standard-Configuration-SNMP-custom | Contrôle si la configuration "running" est sauvegardée                    |            |
| Hsrp          | Net-Cisco-Standard-Hsrp-SNMP-custom          | Contrôle Cisco HSRP                                                       |            |
| Interfaces    | Net-Cisco-Standard-Interfaces-SNMP-custom    | Contrôle les interfaces                                                   | X          |
| Ipsla         | Net-Cisco-Standard-Ipsla-SNMP-custom         | Contrôle "Cisco Round-Trip Time Monitor"                                  |            |
| Memory-Flash  | Net-Cisco-Standard-Memory-Flash-SNMP-custom  | Contrôle l'utilisation de la mémoire flash                                |            |
| Qos-Usage     | Net-Cisco-Standard-Qos-Usage-SNMP-custom     | Contrôle la QoS                                                           |            |
| Spanning-Tree | Net-Cisco-Standard-SpanningTree-SNMP-custom  | Contrôle l'état du protocole Spanning Tree sur les interfaces             |            |
| Stack         | Net-Cisco-Standard-Stack-SNMP-custom         | Contrôle l'état de la "stack" Cisco                                       |            |
| Voice-Call    | Net-Cisco-Standard-Voice-Call-SNMP-custom    | Contrôle les statistiques d'appels                                        |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                     |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **Net-Cisco-Standard-SNMP-custom**. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                         | Description                                                                                       |
|:----------------------------------------|:--------------------------------------------------------------------------------------------------|
| Net-Cisco-Standard-SNMP-Aaa-Server-Name | Découvre les serveurs AAA et supervise leur utilisation                                           |
| Net-Cisco-Standard-SNMP-Interface-Name  | Découvre les interfaces réseau en utilisant leur nom et supervise leur statut et leur utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Nom                                                              | Unité |
|:-----------------------------------------------------------------|:------|
| aaa_servers.total.count                                          | count |
| status                                                           | N/A   |
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

| Nom                                                         | Unité |
|:------------------------------------------------------------|:------|
| *interface_name*#status                                     | N/A   |
| *interface_name*#interface.packets.in.unicast.percentage    | %     |
| *interface_name*#interface.packets.in.broadcast.percentage  | %     |
| *interface_name*#interface.packets.in.multicast.percentage  | %     |
| *interface_name*#interface.packets.out.unicast.percentage   | %     |
| *interface_name*#interface.packets.out.broadcast.percentage | %     |
| *interface_name*#interface.packets.out.multicast.percentage | %     |
</TabItem>
<TabItem value="Arp" label="Arp">

| Nom                         | Unité |
|:----------------------------|:------|
| arp.total.entries.count     | count |
| arp.duplicate.macaddr.count | count |
| arp.duplicate.ipaddr.count  | count |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| bgp.peers.detected.count                 | count |
| status                                   | N/A   |
| *peers*#bgp.peer.update.last.seconds     | s     |
| *peers*#bgp.peer.prefixes.accepted.count | count |
| *peers*#bgp.peer.prefixes.denied.count   | count |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| configuration.running.ahead.since.seconds | s     |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Nom                                           | Unité |
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

| Nom                        | Unité |
|:---------------------------|:------|
| hardware.fan.count         | count |
| fan status                 | N/A   |
| hardware.psu.count         | count |
| psu status                 | N/A   |
| hardware.temperature.count | count |
| temperature status         | N/A   |
| hardware.voltage.count     | count |
| voltage status             | N/A   |
| hardware.module.count      | count |
| module status              | N/A   |
| hardware.physical.count    | count |
| physical status            | N/A   |
| hardware.sensor.count      | count |
| sensor status              | N/A   |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

Pas de métrique pour ce service

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Nom                                                       | Unité |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Nom                                             | Unité |
|:------------------------------------------------|:------|
| status                                          | N/A   |
| CompletionTime                                  | N/A   |
| NumberOverThresholds                            | N/A   |
| *tag*#AverageDelaySD                            | ms    |
| *tag*#AverageDelayDS                            | ms    |
| *tag*#PacketLossRatio                           | %     |
| PercentagePacketsPositiveJitter                 | N/A   |
| AverageJitterPerPacketPositiveJitter            | N/A   |
| PercentagePacketsNegativeJitter                 | N/A   |
| AverageJitterPerPacketNegativeJitter            | N/A   |
| *tag*#AverageJitter                             | ms    |
| *tag*#RTTStandardDeviation                      | ms    |
| *tag*#DelaySource2DestinationStandardDeviation  | ms    |
| *tag*#DelayDestination2SourceStandardDeviation  | ms    |
| *tag*#JitterSource2DestinationStandardDeviation | ms    |
| *tag*#JitterDestination2SourceStandardDeviation | ms    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                         | Unité |
|:----------------------------|:------|
| *memory*#memory.usage.bytes | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| status                                 | N/A   |
| *memory*#memory.flash.usage.bytes      | B     |
| *memory*#memory.flash.free.bytes       | B     |
| *memory*#memory.flash.usage.percentage | %     |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Nom                                                               | Unité |
|:------------------------------------------------------------------|:------|
| qos.traffic.bitspersecond                                         | b/s   |
| qos.drop.bitspersecond                                            | b/s   |
| *interface_classmap*#qos.interface.classmap.traffic.bitspersecond | b/s   |
| *interface_classmap*#qos.interface.classmap.drop.bitspersecond    | b/s   |
| *classmap*#qos.classmap.traffic.bitspersecond                     | b/s   |
| *classmap*#qos.classmap.drop.bitspersecond                        | b/s   |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Stack" label="Stack">

| Nom              | Unité |
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
| status           | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| calls.active.1m.average.count         | count |
| calls.active.5m.average.count         | count |
| calls.active.15m.average.count        | count |
| *ctype*#connection.calls.active.count | count |

</TabItem>
</Tabs>

## Prérequis

### Configuration de l'équipement

Pour utiliser ce connecteur de supervision, vous devez configurer le service SNMP sur l'équipement. Une description complète est disponible sur le [site officiel de Cisco](https://www.cisco.com/c/en/us/support/docs/ip/simple-network-management-protocol-snmp/7282-12.html)

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

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

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

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cisco Standard SNMP**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

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


| Macro                   | Description                                                                                                                                                            | Valeur par défaut | Obligatoire |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMP_V3_USERNAME        | SNMP v3 only: User name (`securityName`)                                                                                                                               |                   |             |
| SNMP_V3_AUTH_PROTOCOL   | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512                                                                  |                   |             |
| SNMP_V3_PRIV_PROTOCOL   | SNMP v3 only: Privacy protocol (`privProtocol`) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C |                   |             |
| SNMP_V3_AUTH_PASSPHRASE | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option                                                               |                   |             |
| SNMP_V3_PRIV_PASSPHRASE | SNMP v3 only: Privacy pass phrase (`privPassword`) to encrypt messages using the protocol defined in the --privprotocol option                                         |                   |             |
| SNMPEXTRAOPTIONS        | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                     |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Macro                            | Description                                                                                                                                      | Valeur par défaut      | Obligatoire |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERNAME                       | Filter AAA server by name (E.g.: 10.199.126.100:1812:1813. Format: \[address\]:\[authPort\]:\[accPort\])                                         |                        |             |
| WARNINGACCREQUESTS               | Threshold                                                                                                                                        |                        |             |
| CRITICALACCREQUESTS              | Threshold                                                                                                                                        |                        |             |
| WARNINGACCREQUESTSTIMEOUT        | Threshold                                                                                                                                        |                        |             |
| CRITICALACCREQUESTSTIMEOUT       | Threshold                                                                                                                                        |                        |             |
| WARNINGACCROUNDTRIPTIME          | Threshold                                                                                                                                        |                        |             |
| CRITICALACCROUNDTRIPTIME         | Threshold                                                                                                                                        |                        |             |
| WARNINGACCTRANSACTIONSSUCEEDED   | Threshold                                                                                                                                        |                        |             |
| CRITICALACCTRANSACTIONSSUCEEDED  | Threshold                                                                                                                                        |                        |             |
| WARNINGAUTHREQUESTS              | Threshold                                                                                                                                        |                        |             |
| CRITICALAUTHREQUESTS             | Threshold                                                                                                                                        |                        |             |
| WARNINGAUTHREQUESTSTIMEOUT       | Threshold                                                                                                                                        |                        |             |
| CRITICALAUTHREQUESTSTIMEOUT      | Threshold                                                                                                                                        |                        |             |
| WARNINGAUTHROUNDTRIPTIME         | Threshold                                                                                                                                        |                        |             |
| CRITICALAUTHROUNDTRIPTIME        | Threshold                                                                                                                                        |                        |             |
| WARNINGAUTHTRANSACTIONSSUCEEDED  | Threshold                                                                                                                                        |                        |             |
| CRITICALAUTHTRANSACTIONSSUCEEDED | Threshold                                                                                                                                        |                        |             |
| CRITICALSTATUS                   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{name\}                        | %\{status\} =~ /dead/i |             |
| WARNINGSTATUS                    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                         |                        |             |
| WARNINGTOTAL                     | Threshold                                                                                                                                        |                        |             |
| CRITICALTOTAL                    | Threshold                                                                                                                                        |                        |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose              |             |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Macro            | Description                                                                                                                                                                        | Valeur par défaut                                | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|:-----------:|
| FILTER           | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                          | .*                                               |             |
| CRITICALINUCAST  | Threshold                                                                                                                                                                          |                                                  |             |
| WARNINGINUCAST   | Threshold                                                                                                                                                                          |                                                  |             |
| CRITICALOUTUCAST | Threshold                                                                                                                                                                          |                                                  |             |
| WARNINGOUTUCAST  | Threshold                                                                                                                                                                          |                                                  |             |
| CRITICALSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{errdisable\}, %\{display\} | %\{admstatus\} eq "up" and %\{opstatus\} ne "up" |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                   | --verbose                                        |             |

</TabItem>
<TabItem value="Arp" label="Arp">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDUPLICATEIPADDR   | Threshold                                                                                                                                        |                   |             |
| CRITICALDUPLICATEIPADDR  | Threshold                                                                                                                                        |                   |             |
| WARNINGDUPLICATEMACADDR  | Threshold                                                                                                                                        |                   |             |
| CRITICALDUPLICATEMACADDR | Threshold                                                                                                                                        |                   |             |
| WARNINGTOTALENTRIES      | Threshold                                                                                                                                        |                   |             |
| CRITICALTOTALENTRIES     | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Macro                  | Description                                                                                                                                                                     | Valeur par défaut                                          | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:-----------:|
| FILTERREMOTEADDR       | Filter based on IP of peers (regexp allowed)                                                                                                                                    |                                                            |             |
| FILTERREMOTEAS         | Filter based on remote AS number (regexp allowed)                                                                                                                               |                                                            |             |
| WARNINGPEERSDETECTED   | Threshold                                                                                                                                                                       |                                                            |             |
| CRITICALPEERSDETECTED  | Threshold                                                                                                                                                                       |                                                            |             |
| WARNINGPEERUPDATELAST  | Threshold                                                                                                                                                                       |                                                            |             |
| CRITICALPEERUPDATELAST | Threshold                                                                                                                                                                       |                                                            |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{adminStatus\}, %\{state\}, %\{localAddr\}, %\{remoteAddr\}, %\{remoteAs\} | %\{adminStatus\} =~ /start/ && %\{state\} !~ /established/ |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{adminStatus\}, %\{state\}, %\{localAddr\}, %\{remoteAddr\}, %\{remoteAs\}  |                                                            |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                | --verbose                                                  |             |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Macro                      | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONFIGRUNNINGAHEAD  | Thresholds                                                                                                                                       |                   |             |
| CRITICALCONFIGRUNNINGAHEAD | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE1M  | Threshold                                                                                                                                        |                   |             |
| CRITICALAVERAGE1M | Threshold                                                                                                                                        |                   |             |
| WARNINGAVERAGE5M  | Threshold                                                                                                                                        |                   |             |
| CRITICALAVERAGE5M | Threshold                                                                                                                                        |                   |             |
| WARNINGAVERAGE5S  | Threshold                                                                                                                                        |                   |             |
| CRITICALAVERAGE5S | Threshold                                                                                                                                        |                   |             |
| WARNINGCORE1M     | Threshold                                                                                                                                        |                   |             |
| CRITICALCORE1M    | Threshold                                                                                                                                        |                   |             |
| WARNINGCORE5M     | Threshold                                                                                                                                        | 90                |             |
| CRITICALCORE5M    | Threshold                                                                                                                                        | 95                |             |
| WARNINGCORE5S     | Threshold                                                                                                                                        |                   |             |
| CRITICALCORE5S    | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Environment" label="Environment">

| Macro                    | Description                                                                                                                                      | Valeur par défaut                                                    | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------|:-----------:|
| COMPONENT                | Which component to check. Can be: 'fan', 'psu', 'temperature', 'voltage', 'module', 'physical', 'sensor'                                         | .*                                                                   |             |
| WARNINGCOUNTFAN          | Threshold                                                                                                                                        |                                                                      |           |
| CRITICALCOUNTFAN         | Threshold                                                                                                                                        |                                                                      |           |
| WARNINGCOUNTMODULE       | Threshold                                                                                                                                        |                                                                      |           |
| CRITICALCOUNTMODULE      | Threshold                                                                                                                                        |                                                                      |           |
| WARNINGCOUNTPHYSICAL     | Threshold                                                                                                                                        |                                                                      |           |
| CRITICALCOUNTPHYSICAL    | Threshold                                                                                                                                        |                                                                      |           |
| WARNINGCOUNTPSU          | Threshold                                                                                                                                        |                                                                      |           |
| CRITICALCOUNTPSU         | Threshold                                                                                                                                        |                                                                      |           |
| WARNINGCOUNTSENSOR       | Threshold                                                                                                                                        |                                                                      |           |
| CRITICALCOUNTSENSOR      | Threshold                                                                                                                                        |                                                                      |           |
| WARNINGCOUNTTEMPERATURE  | Threshold                                                                                                                                        |                                                                      |           |
| CRITICALCOUNTTEMPERATURE | Threshold                                                                                                                                        |                                                                      |           |
| WARNINGCOUNTVOLTAGE      | Threshold                                                                                                                                        |                                                                      |           |
| CRITICALCOUNTVOLTAGE     | Threshold                                                                                                                                        |                                                                      |           |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose  --filter-perfdata='^(sensor\.(celsius\_\|rpm\_)\|temp\_)' |             |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ROLE         | If role is 'primary', an error if HSRPs are 'standby' states.  If role is 'secondary', an error if HSRPs are 'active' states.                    | primary           |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                   | Description                                                                                                                                                                        | Valeur par défaut                                         | Obligatoire |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:-----------:|
| UNITSTRAFFIC            | Units of thresholds for the traffic ('percent\_delta', 'bps', 'counter')                                                                                                           | percent\_delta                                            |             |
| UNITSERROR              | Units of thresholds for errors/discards ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter')                                                                               | percent\_delta                                            |             |
| UNITSCAST               | Units of thresholds for communication types ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter')                                                                           | percent\_delta                                            |             |
| OIDFILTER               | Define the OID to be used to filter interfaces (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                           | ifname                                                    |             |
| OIDDISPLAY              | Define the OID that will be used to name the interfaces (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                  | ifname                                                    |             |
| INTERFACENAME           | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                          |                                                           |             |
| WARNINGINBCAST          | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINBCAST         | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGINCRC            | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINCRC           | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGINDISCARD        | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINDISCARD       | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGINERROR          | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINERROR         | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGINFCSERROR       | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINFCSERROR      | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGINMCAST          | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINMCAST         | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGINTRAFFIC        | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINTRAFFIC       | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGINTRAFFICLIMIT   | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINTRAFFICLIMIT  | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGINUCAST          | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINUCAST         | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGINVOLUME         |                                                                                                                                                                                    |                                                           |             |
| WARNINGINVOLUME         | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALINVOLUME        | Threshold                                                                                                                                                                          | 
| WARNINGOUTBCAST         | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALOUTBCAST        | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGOUTDISCARD       | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALOUTDISCARD      | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGOUTERROR         | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALOUTERROR        | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGOUTMCAST         | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALOUTMCAST        | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGOUTTRAFFIC       | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALOUTTRAFFIC      | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGOUTTRAFFICLIMIT  | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALOUTTRAFFICLIMIT | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGOUTUCAST         | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALOUTUCAST        | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGOUTVOLUME        | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALOUTVOLUME       | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGSPEED            | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALSPEED           | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{errdisable\}, %\{display\} | %\{admstatus\} eq "up" and %\{opstatus\} !~ /up\|dormant/ |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{errdisable\}, %\{display\}  |                                                           |             |
| WARNINGTOTALADMINDOWN   | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALTOTALADMINDOWN  | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGTOTALADMINUP     | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALTOTALADMINUP    | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGTOTALOPERDOWN    | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALTOTALOPERDOWN   | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGTOTALOPERUP      | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALTOTALOPERUP     | Threshold                                                                                                                                                                          |                                                           |             |
| WARNINGTOTALPORT        | Threshold                                                                                                                                                                          |                                                           |             |
| CRITICALTOTALPORT       | Threshold                                                                                                                                                                          |                                                           |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                   | --verbose --use-new-perfdata                              |             |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTAG    | Filter tag                                                                                                                                       | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERPOOL   | Filter pool to check (can use regexp)                                                                                                            |                   |             |
| CRITICAL     | Critical threshold in percent                                                                                                                    | 90                |             |
| WARNING      | Warning threshold in percent                                                                                                                     | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME        | Filter partition name (can be a regexp)                                                                                                          | .*                |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                      |                   |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}                     |                   |             |
| WARNINGUSAGE      | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGE     | Threshold                                                                                                                                        |                   |             |
| WARNINGUSAGEFREE  | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGEFREE | Threshold                                                                                                                                        |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Macro                  | Description                                                                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSOURCE           | Filter interface name and class-map (can be a regexp). Example of a source (interfacename:servicepolicy:classmap:...): FastEthernet1:Visioconference | .*                |             |
| FILTERCOUNTERS         | Only display some counters (regexp can be used). Example: --filter-counters='^(total-traffic)$'                                                      |                   |             |
| WARNINGCMAPDROP        | Threshold                                                                                                                                            |                   |             |
| CRITICALCMAPDROP       | Threshold                                                                                                                                            |                   |             |
| WARNINGCMAPTRAFFIC     | Threshold                                                                                                                                            |                   |             |
| CRITICALCMAPTRAFFIC    | Threshold                                                                                                                                            |                   |             |
| WARNINGINTCMAPDROP     | Threshold                                                                                                                                            |                   |             |
| CRITICALINTCMAPDROP    | Threshold                                                                                                                                            |                   |             |
| WARNINGINTCMAPTRAFFIC  | Threshold                                                                                                                                            |                   |             |
| CRITICALINTCMAPTRAFFIC | Threshold                                                                                                                                            |                   |             |
| WARNINGTOTALDROP       | Threshold                                                                                                                                            |                   |             |
| CRITICALTOTALDROP      | Threshold                                                                                                                                            |                   |             |
| WARNINGTOTALTRAFFIC    | Threshold                                                                                                                                            |                   |             |
| CRITICALTOTALTRAFFIC   | Threshold                                                                                                                                            |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).     | --verbose         |             |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Macro          | Description                                                                                                                                                               | Valeur par défaut                | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERPORT     | Filter on port description (can be a regexp)                                                                                                                              | .*                               |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{op\_status\}, %\{admin\_status\}, %\{port\}, %\{index\} | %\{state\} =~ /blocking\|broken/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{op\_status\}, %\{admin\_status\}, %\{port\}, %\{index\}  |                                  |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                          | --verbose                        |             |

</TabItem>
<TabItem value="Stack" label="Stack">

| Macro                   | Description                                                                                                                                                                                                                                                                                                                                | Valeur par défaut                                    | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:-----------:|
| WARNINGADDED            | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALADDED           | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| WARNINGFEATUREMISMATCH  | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALFEATUREMISMATCH | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| WARNINGINVALID          | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALINVALID         | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| WARNINGNEWMASTERINIT    | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALNEWMASTERINIT   | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| WARNINGPROGRESSING      | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALPROGRESSING     | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| WARNINGPROVISIONED      | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALPROVISIONED     | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| WARNINGREADY            | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALREADY           | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| WARNINGREMOVED          | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALREMOVED         | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| WARNINGSDMMISMATCH      | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALSDMMISMATCH     | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALSTACKSTATUS     | Set critical threshold for stack status. You can use the following variables: %\{stack\_status\}                                                                                                                                                                                                                                           | %\{stack\_status\} =~ /notredundant/                 |             |
| WARNINGSTACKSTATUS      | Set warning threshold for stack status. You can use the following variables: %\{stack\_status\}                                                                                                                                                                                                                                            |                                                      |             |
| CRITICALSTATUS          | Set critical threshold for member status. You can use the following variables: %\{name\}, %\{role\}, %\{state\}  Role can be: 'master', 'member', 'notMember', 'standby'.  State can be: 'waiting', 'progressing', 'added', 'ready', 'sdmMismatch', 'verMismatch', 'featureMismatch', 'newMasterInit', 'provisioned', 'invalid', 'removed' | %\{state\} !~ /ready/ && %\{state\} !~ /provisioned/ |             |
| WARNINGSTATUS           | Set warning threshold for members status. You can use the following variables: %\{name\}, %\{role\}, %\{state\}                                                                                                                                                                                                                            |                                                      |             |
| WARNINGVERSIONMISMATCH  | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALVERSIONMISMATCH | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| WARNINGWAITING          | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| CRITICALWAITING         | Threshold                                                                                                                                                                                                                                                                                                                                  |                                                      |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                                                           | --verbose                                            |             |

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Macro                         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVE15MAVERAGE       | Threshold                                                                                                                                        |                   |             |
| CRITICALACTIVE15MAVERAGE      | Threshold                                                                                                                                        |                   |             |
| WARNINGACTIVE1MAVERAGE        | Threshold                                                                                                                                        |                   |             |
| CRITICALACTIVE1MAVERAGE       | Threshold                                                                                                                                        |                   |             |
| WARNINGACTIVE5MAVERAGE        | Threshold                                                                                                                                        |                   |             |
| CRITICALACTIVE5MAVERAGE       | Threshold                                                                                                                                        |                   |             |
| WARNINGCONNECTIONCALLSACTIVE  | Threshold                                                                                                                                        |                   |             |
| CRITICALCONNECTIONCALLSACTIVE | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
	--snmp-community='my-snmp-community' \
	--snmp-username='' \
	--authpassphrase='' \
	--authprotocol='' \
	--privpassphrase='' \
	--privprotocol=''  \
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
OK: 47 (1m) 81 (5m) 35 (15m) All connection types are ok | 'calls.active.1m.average.count'=47;;;0;'calls.active.5m.average.count'=81;;;0;'calls.active.15m.average.count'=35;;;0;'ctype1#connection.calls.active.count'=741;;;0; 'ctype2#connection.calls.active.count'=14943;;;0; 
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
| list-aaa-servers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/listaaaservers.pm)] | Utilisé pour la découverte de services                                                |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                        | Utilisé pour la découverte de services                                                |
| list-spanning-trees [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listspanningtrees.pm)]                 | Non utilisé dans ce connecteur de supervision                                         |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/load.pm)]                       | Non utilisé dans ce connecteur de supervision                                         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/memory.pm)]                   | Net-Cisco-Standard-Memory-SNMP-custom                                                 |
| memory-flash [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/memoryflash.pm)]        | Net-Cisco-Standard-Memory-Flash-SNMP-custom                                           |
| qos-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/qosusage.pm)]              | Net-Cisco-Standard-Qos-Usage-SNMP-custom                                              |
| spanning-tree [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/spanningtree.pm)]                            | Net-Cisco-Standard-SpanningTree-SNMP-custom                                           |
| stack [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/stack.pm)]                     | Net-Cisco-Standard-Stack-SNMP-custom                                                  |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                         | Non utilisé dans ce connecteur de supervision                                         |
| voice-call [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/voicecall.pm)]            | Net-Cisco-Standard-Voice-Call-SNMP-custom                                             |
| vpc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/vpc.pm)]                         | Non utilisé dans ce connecteur de supervision                                         |
| vss [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/vss.pm)]                         | Non utilisé dans ce connecteur de supervision                                         |
| wan3g [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/standard/snmp/mode/wan3g.pm)]                     | Non utilisé dans ce connecteur de supervision                                         |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-force-getnext                       | Use SNMP get-next function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-username                            | SNMP v3 only: User name (`securityName`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (`privPassword`) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --privprotocol                             | SNMP v3 only: Privacy protocol (`privProtocol`) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --contextname                              | SNMP v3 only: Context name (`contextName`), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --contextengineid                          | SNMP v3 only: Context engine ID (`contextEngineID`), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are ok, warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: `dtlsudp`, `tlstcp`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-their-hostname                  | Common Name (`CN`) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the C option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Aaa-Servers" label="Aaa-Servers">

| Option                   | Description                                                                                                                                                                                                            |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='auth'                                                                                                                                     |
| --warning-xxx            | Warning threshold.                                                                                                                                                                                                     |
| --critical-xxx           | Critical threshold.                                                                                                                                                                                                    |
| --filter-name            | Filter AAA server by name (E.g.: 10.199.126.100:1812:1813. Format: \[address\]:\[authPort\]:\[accPort\]).                                                                                                              |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{name\}                                                                                               |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{name\}                                                                                               |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /dead/i'). You can use the following variables: %\{status\}, %\{name\}                                                          |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'auth-requests', 'auth-requests-timeout', 'auth-transactions-suceeded', 'auth-roundtrip-time', 'acc-requests', 'acc-requests-timeout', 'acc-transactions-suceeded', 'acc-roundtrip-time'. |

</TabItem>
<TabItem value="Anycast" label="Anycast">

| Option                                          | Description                                                                                                                                                                                                                                                                                                                                                               |
|:------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                               | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                 |
| --warning-xxx                                   | Warning threshold.                                                                                                                                                                                                                                                                                                                                                        |
| --critical-xxx                                  | Critical threshold.                                                                                                                                                                                                                                                                                                                                                       |
| --add-global                                    | Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                                                                                                    |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                                                                                                   |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                                        |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                                                                                                  |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                                                                                                   |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                                                                                                     |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                                                                                                    |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                                     |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%\{opstatus\} eq "up"').                                                                                                                                                                                                                                                                                        |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{errdisable\}, %\{display\}                                                                                                                                                                                         |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (default: '%\{admstatus\} eq "up" and %\{opstatus\} ne "up"'). You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{errdisable\}, %\{display\}                                                                                                                          |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                                     |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                                         |
| --units-cast                                    | Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                                     |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with NagVis widget.                                                                                                                                                                                                                                                                                                             |
| --interface                                     | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                                                                                                |
| --name                                          | Allows you to define the interface (in option --interface) by name instead of OID index. The name matching mode supports regular expressions.                                                                                                                                                                                                                             |
| --regex-id                                      | With this option, interface IDs will be filtered using the --interface parameter as a regular expression instead of a list of IDs.                                                                                                                                                                                                                                        |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                                |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                                         |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                                         |
| --map-speed-dsl                                 | Get interface speed configuration for interfaces of type 'ADSL' and 'VDSL2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                                                                                                        |
| --force-counters64                              | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                                                                                                   |
| --force-counters32                              | Force to use 32 bits counters (even in SNMP version 2c and version 3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                    |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                               |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                               |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                      |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                                                                                                    |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens'  will replace all occurrences of 'eth' with 'ens'                                                                                                                                                                         |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                                                                                                             |
| --no-cache-lock                                 | Set to disable locking when accessing cache.                                                                                                                                                                                                                                                                                                                              |
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                           |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                   |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                 |
| --failback-file                                 | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                            |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                    |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                            |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                               |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                     |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                              |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                        |
| --add-err-disable                               | Check error disable (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                                        |
| --add-fc-fe-errors                              | Check interface fiber channel fiber element errors.                                                                                                                                                                                                                                                                                                                       |
| --add-qos-limit                                 | Check QoS traffic limit rate.                                                                                                                                                                                                                                                                                                                                             |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-traffic-limit', 'out-traffic-limit', 'in-crc', 'in-fcserror', 'out-fc-wait', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s). |

</TabItem>
<TabItem value="Arp" label="Arp">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --warning-xxx            | Warning threshold.                                                                                                        |
| --critical-xxx           | Critical threshold.                                                                                                       |
| --filter-macaddr         | Filter mac addresses (can be a regexp).                                                                                   |
| --filter-ipaddr          | Filter ip addresses (can be a regexp).                                                                                    |
| --warning-* --critical-* | Thresholds. Can be: 'total-entries', 'duplicate-macaddr', 'duplicate-ipaddr'.                                             |

</TabItem>
<TabItem value="Bgp" label="Bgp">

| Option                   | Description                                                                                                                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                               |
| --warning-xxx            | Warning threshold.                                                                                                                                                                                                                                      |
| --critical-xxx           | Critical threshold.                                                                                                                                                                                                                                     |
| --filter-remote-as       | Filter based on remote AS number (regexp allowed)                                                                                                                                                                                                       |
| --filter-remote-addr     | Filter based on IP of peers (regexp allowed)                                                                                                                                                                                                            |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{adminStatus\}, %\{state\}, %\{localAddr\}, %\{remoteAddr\}, %\{remoteAs\}                                                                          |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{adminStatus\}, %\{state\}, %\{localAddr\}, %\{remoteAddr\}, %\{remoteAs\}                                                                          |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{adminStatus\} =~ /start/ && %\{state\} !~ /established/'). You can use the following variables: %\{adminStatus\}, %\{state\}, %\{localAddr\}, %\{remoteAddr\}, %\{remoteAs\} |
| --warning-* --critical-* | Thresholds. Can be: 'peers-detected', 'peer-update-last', 'peer-prefixes-accepted', 'peer-prefixes-denied'.                                                                                                                                             |

</TabItem>
<TabItem value="Configuration" label="Configuration">

| Option                          | Description                                                                                                               |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --warning-xxx                   | Warning threshold.                                                                                                        |
| --critical-xxx                  | Critical threshold.                                                                                                       |
| --warning-config-running-ahead  | Thresholds.                                                                                                               |
| --critical-config-running-ahead | Thresholds.                                                                                                               |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                               |
| --warning-xxx            | Warning threshold.                                                                                                                                                      |
| --critical-xxx           | Critical threshold.                                                                                                                                                     |
| --check-order            | Check CPU in standard cisco mib. If you have some issue (wrong CPU information in a specific mib), you can change the order  (default: 'process,old\_sys,system\_ext'). |
| --warning-* --critical-* | Thresholds. Can be: 'core-5s', 'core-1m', 'core-5m', 'average-5s', 'average-1m', 'average-5m'.                                                                          |

</TabItem>
<TabItem value="Environment" label="Environment">

| Option               | Description                                                                                                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'temperature', 'voltage', 'module', 'physical', 'sensor'.                                                                                         |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                        |
| --add-name-instance  | Add literal description for instance value (used in filter, absent-problem and threshold options).                                                                                                                |
| --use-physical-name  | Use entPhysicalName OID instead of entPhysicalDescr.                                                                                                                                                              |
| --add-fru-power      | Check FRU power status.                                                                                                                                                                                           |
| --absent-problem     | Return an error if an entity is not 'present' (default is skipping) (comma separated list) Can be specific or global: --absent-problem=fan,1                                                                      |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='fan,CRITICAL,^(?!(up\|normal)$)' |
| --warning            | Set warning threshold for temperatures, voltages, sensors (syntax: type,regexp,threshold) Example: --warning='temperature,.*,30'                                                                                  |
| --critical           | Set critical threshold for temperatures, voltages, sensors (syntax: type,regexp,threshold) Example: --critical='temperature,.*,40'                                                                                |
| --warning-count-*    | Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                      |
| --critical-count-*   | Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                     |

</TabItem>
<TabItem value="Hsrp" label="Hsrp">

| Option        | Description                                                                                                                                        |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-vrid | Filter VRID (can be a regexp).                                                                                                                     |
| --role        | If role is 'primary', an error if HSRPs are 'standby' states.  If role is 'secondary', an error if HSRPs are 'active' states. (default: 'primary') |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                                          | Description                                                                                                                                                                                                                                                                                                                                                               |
|:------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-global                                    | Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                                                                                                    |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                                                                                                   |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                                        |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                                                                                                  |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                                                                                                   |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                                                                                                     |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                                                                                                    |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                                     |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%\{opstatus\} eq "up"').                                                                                                                                                                                                                                                                                        |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{errdisable\}, %\{display\}                                                                                                                                                                                         |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (default: '%\{admstatus\} eq "up" and %\{opstatus\} ne "up"'). You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{errdisable\}, %\{display\}                                                                                                                          |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                                     |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                                         |
| --units-cast                                    | Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                                     |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with NagVis widget.                                                                                                                                                                                                                                                                                                             |
| --interface                                     | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                                                                                                |
| --name                                          | Allows you to define the interface (in option --interface) by name instead of OID index. The name matching mode supports regular expressions.                                                                                                                                                                                                                             |
| --regex-id                                      | With this option, interface IDs will be filtered using the --interface parameter as a regular expression instead of a list of IDs.                                                                                                                                                                                                                                        |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                                |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                                         |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                                         |
| --map-speed-dsl                                 | Get interface speed configuration for interfaces of type 'ADSL' and 'VDSL2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                                                                                                        |
| --force-counters64                              | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                                                                                                   |
| --force-counters32                              | Force to use 32 bits counters (even in SNMP version 2c and version 3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                    |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                               |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                               |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                      |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                                                                                                    |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens'  will replace all occurrences of 'eth' with 'ens'                                                                                                                                                                         |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                                                                                                             |
| --no-cache-lock                                 | Set to disable locking when accessing cache.                                                                                                                                                                                                                                                                                                                              |
| --add-err-disable                               | Check error disable (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                                        |
| --add-fc-fe-errors                              | Check interface fiber channel fiber element errors.                                                                                                                                                                                                                                                                                                                       |
| --add-qos-limit                                 | Check QoS traffic limit rate.                                                                                                                                                                                                                                                                                                                                             |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-traffic-limit', 'out-traffic-limit', 'in-crc', 'in-fcserror', 'out-fc-wait', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s). |

</TabItem>
<TabItem value="Ipsla" label="Ipsla">

| Option                                               | Description                                                                                                                                                                                                     |
|:-----------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                                    | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                       |
| --warning-xxx                                        | Warning threshold.                                                                                                                                                                                              |
| --critical-xxx                                       | Critical threshold.                                                                                                                                                                                             |
| --filter-tag                                         | Filter tag (default: '.*')                                                                                                                                                                                      |
| --threshold-overload                                 | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='opersense,CRITICAL,^(?!(ok)$)' |
| --warning-AverageDelayDS                             | Threshold in milliseconds.                                                                                                                                                                                      |
| --critical-AverageDelayDS                            | Threshold in milliseconds.                                                                                                                                                                                      |
| --warning-AverageDelaySD                             | Threshold in milliseconds.                                                                                                                                                                                      |
| --critical-AverageDelaySD                            | Threshold in milliseconds.                                                                                                                                                                                      |
| --warning-AverageJitter                              | Threshold in milliseconds.                                                                                                                                                                                      |
| --critical-AverageJitter                             | Threshold in milliseconds.                                                                                                                                                                                      |
| --warning-AverageJitterPerPacketNegativeJitter       | Threshold.                                                                                                                                                                                                      |
| --critical-AverageJitterPerPacketNegativeJitter      | Threshold.                                                                                                                                                                                                      |
| --warning-AverageJitterPerPacketPositiveJitter       | Threshold.                                                                                                                                                                                                      |
| --critical-AverageJitterPerPacketPositiveJitter      | Threshold.                                                                                                                                                                                                      |
| --warning-CompletionTime                             | Threshold.                                                                                                                                                                                                      |
| --critical-CompletionTime                            | Threshold.                                                                                                                                                                                                      |
| --warning-DelayDestination2SourceStandardDeviation   | Threshold in milliseconds.                                                                                                                                                                                      |
| --critical-DelayDestination2SourceStandardDeviation  | Threshold in milliseconds.                                                                                                                                                                                      |
| --warning-DelaySource2DestinationStandardDeviation   | Threshold in milliseconds.                                                                                                                                                                                      |
| --critical-DelaySource2DestinationStandardDeviation  | Threshold in milliseconds.                                                                                                                                                                                      |
| --warning-JitterDestination2SourceStandardDeviation  | Threshold in milliseconds.                                                                                                                                                                                      |
| --critical-JitterDestination2SourceStandardDeviation | Threshold in milliseconds.                                                                                                                                                                                      |
| --warning-JitterSource2DestinationStandardDeviation  | Threshold in milliseconds.                                                                                                                                                                                      |
| --critical-JitterSource2DestinationStandardDeviation | Threshold in milliseconds.                                                                                                                                                                                      |
| --warning-NumberOverThresholds                       | Threshold.                                                                                                                                                                                                      |
| --critical-NumberOverThresholds                      | Threshold.                                                                                                                                                                                                      |
| --warning-PacketLossRatio                            | Threshold in percentage.                                                                                                                                                                                        |
| --critical-PacketLossRatio                           | Threshold in percentage.                                                                                                                                                                                        |
| --warning-PercentagePacketsNegativeJitter            | Threshold.                                                                                                                                                                                                      |
| --critical-PercentagePacketsNegativeJitter           | Threshold.                                                                                                                                                                                                      |
| --warning-PercentagePacketsPositiveJitter            | Threshold.                                                                                                                                                                                                      |
| --critical-PercentagePacketsPositiveJitter           | Threshold.                                                                                                                                                                                                      |
| --warning-RTTStandardDeviation                       | Threshold in milliseconds.                                                                                                                                                                                      |
| --critical-RTTStandardDeviation                      | Threshold in milliseconds.                                                                                                                                                                                      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option            | Description                                                                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                |
| --warning-xxx     | Warning threshold.                                                                                                                                                                       |
| --critical-xxx    | Critical threshold.                                                                                                                                                                      |
| --warning-usage   | Warning threshold in percent.                                                                                                                                                            |
| --critical-usage  | Critical threshold in percent.                                                                                                                                                           |
| --filter-pool     | Filter pool to check (can use regexp).                                                                                                                                                   |
| --check-order     | Check memory in standard cisco mib. If you have some issue (wrong memory information in a specific mib), you can change the order  (default: 'enhanced\_pool,pool,process,system\_ext'). |

</TabItem>
<TabItem value="Memory-Flash" label="Memory-Flash">

| Option                   | Description                                                                                                                                                         |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                           |
| --warning-xxx            | Warning threshold.                                                                                                                                                  |
| --critical-xxx           | Critical threshold.                                                                                                                                                 |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /readOnly/i'). You can use the following variables: %\{status\}, %\{display\} |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{display\}                           |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{status\}, %\{display\}                          |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                                |
| --filter-name            | Filter partition name (can be a regexp).                                                                                                                            |

</TabItem>
<TabItem value="Qos-Usage" label="Qos-Usage">

| Option            | Description                                                                                                                                          |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example: --filter-counters='^(total-traffic)$'                                                      |
| --warning-xxx     | Warning threshold.                                                                                                                                   |
| --critical-xxx    | Critical threshold.                                                                                                                                  |
| --filter-source   | Filter interface name and class-map (can be a regexp). Example of a source (interfacename:servicepolicy:classmap:...): FastEthernet1:Visioconference |
| --warning-*       | Warning threshold. Can be: 'int-cmap-traffic', 'int-cmap-drop',  'cmap-traffic', 'cmap-drop', 'total-traffic', 'total-drop'.                         |
| --critical-*      | Critical threshold. Can be: 'int-cmap-traffic', 'int-cmap-drop',  'cmap-traffic', 'cmap-drop', 'total-traffic', 'total-drop'.                        |
| --units-traffic   | Units of thresholds for the traffic (default: '%') ('%', 'b/s'). Only for --warning-int-traffic and --critical-int-traffic options.                  |
| --oid-filter      | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName).                                                  |
| --oid-display     | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName).                                         |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Option            | Description                                                                                                                                                                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                           |
| --warning-xxx     | Warning threshold.                                                                                                                                                                                                                                  |
| --critical-xxx    | Critical threshold.                                                                                                                                                                                                                                 |
| --filter-port     | Filter on port description (can be a regexp).                                                                                                                                                                                                       |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{op\_status\}, %\{admin\_status\}, %\{port\}, %\{index\}.                                                                           |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{op\_status\} =~ /up/ && %\{state\} =~ /blocking\|broken/'). You can use the following variables: %\{state\}, %\{op\_status\}, %\{admin\_status\}, %\{port\}, %\{index\}. |

</TabItem>
<TabItem value="Stack" label="Stack">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                     |
| --warning-xxx            | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                            |
| --critical-xxx           | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                           |
| --warning-* --critical-* | Set thresholds for members count for each states. (can be: 'waiting', 'progressing', 'added', 'ready', 'sdm-mismatch', 'version-mismatch', 'feature-mismatch', 'new-master-init', 'provisioned', 'invalid', 'removed')                                                                                                                                                                                        |
| --warning-stack-status   | Set warning threshold for stack status (default: ''). You can use the following variables: %\{stack\_status\}                                                                                                                                                                                                                                                                                                 |
| --critical-stack-status  | Set critical threshold for stack status (default: '%\{stack\_status\} =~ /notredundant/'). You can use the following variables: %\{stack\_status\}                                                                                                                                                                                                                                                            |
| --warning-status         | Set warning threshold for members status (default: ''). You can use the following variables: %\{name\}, %\{role\}, %\{state\}                                                                                                                                                                                                                                                                                 |
| --critical-status        | Set critical threshold for member status (default: '%\{state\} !~ /ready/ && %\{state\} !~ /provisioned/'). You can use the following variables: %\{name\}, %\{role\}, %\{state\}  Role can be: 'master', 'member', 'notMember', 'standby'.  State can be: 'waiting', 'progressing', 'added', 'ready', 'sdmMismatch', 'verMismatch', 'featureMismatch', 'newMasterInit', 'provisioned', 'invalid', 'removed'. |

</TabItem>
<TabItem value="Voice-Call" label="Voice-Call">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --warning-xxx            | Warning threshold.                                                                                                        |
| --critical-xxx           | Critical threshold.                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'active-1m-average', 'active-5m-average', 'active-15m-average',  'connection-calls-active'.           |

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
