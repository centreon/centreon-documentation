---
id: network-firewalls-fortinet-fortigate-snmp
title: Fortinet Fortigate
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Fortinet Fortigate** apporte un modèle d'hôte :

* **Net-Fortinet-Fortigate-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Fortinet-Fortigate-SNMP-custom" label="Net-Fortinet-Fortigate-SNMP-custom">

| Alias    | Modèle de service                           | Description                                                                                                               |
|:---------|:--------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| Cpu      | Net-Fortinet-Fortigate-Cpu-SNMP-custom      | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU |
| Memory   | Net-Fortinet-Fortigate-Memory-SNMP-custom   | Contrôle du taux d'occupation de la mémoire                                                                               |
| Sessions | Net-Fortinet-Fortigate-Sessions-SNMP-custom | Contrôle les sessions actives                                                                                             |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Fortinet-Fortigate-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias            | Modèle de service                                   | Description                                                                          | Découverte |
|:-----------------|:----------------------------------------------------|:-------------------------------------------------------------------------------------|:----------:|
| Cluster-Status   | Net-Fortinet-Fortigate-Cluster-Status-SNMP-custom   | Contrôle le statut du cluster                                                        |            |
| Disk             | Net-Fortinet-Fortigate-Disk-SNMP-custom             | Contrôle du taux d'utilisation du disque de la machine                               |            |
| Hardware         | Net-Fortinet-Fortigate-Hardware-SNMP-custom         | Contrôle l'état des sondes matérielles                                               |            |
| Ips-Stats-Global | Net-Fortinet-Fortigate-Ips-Stats-Global-SNMP-custom | Contrôle les statistiques IPS des domaines virtuel                                   |            |
| SDWan            | Net-Fortinet-Fortigate-SDWan-SNMP-custom            | Contrôle les liens SDWan                                                             |            |
| Traffic-Global   | Net-Fortinet-Fortigate-Traffic-Global-SNMP-custom   | Contrôle le traffic réseau de plusieurs interfaces réseau                            | X          |
| Traffic-Id       | Net-Fortinet-Fortigate-Traffic-Id-SNMP-custom       | Contrôle le traffic réseau d'une interface réseau                                    |            |
| Traffic-Name     | Net-Fortinet-Fortigate-Traffic-Name-SNMP-custom     | Contrôle le traffic réseau d'une interface réseau                                    |            |
| VPN-Global       | Net-Fortinet-Fortigate-VPN-Global-SNMP-custom       | Contrôle le statut des liens VPN                                                     |            |
| Vdom-Usage       | Net-Fortinet-Fortigate-Vdom-Usage-SNMP-custom       | Contrôle les domaines virtuelles                                                     |            |
| Virus            | Net-Fortinet-Fortigate-Virus-SNMP-custom            | Contrôle le nombre de virus bloqués et détecté pour l'ensemble des domaines virtuels |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Fortinet-Fortigate-SNMP-custom** host template |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de service

| Nom de la règle                          | Description                                                   |
|:-----------------------------------------|:--------------------------------------------------------------|
| Net-Fortinet-Fortigate-SNMP-Traffic-Name | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| cluster.nodes.count                     | count |
| cluster.nodes.synchronized.count        | count |
| cluster.nodes.unsynchronized.count      | count |
| cluster.checksums.total.count           | count |
| *nodes*~status                          | N/A   |
| *nodes*~node.cpu.utilization.percentage | %     |
| *nodes*~node.memory.usage.percentage    | %     |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| cpu.utilization.percentage                   | %     |
| *cpu_core*#core.cpu.utilization.percentage   | %     |
| *cluster*#cluster.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk" label="Disk">

| Métrique                  | Unité |
|:--------------------------|:------|
| storage.space.usage.bytes | B     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                 | Unité |
|:-------------------------|:------|
| hardware.sensors.measure | N/A   |

</TabItem>
<TabItem value="Ips-Stats-Global" label="Ips-Stats-Global">

| Métrique                                                    | Unité |
|:------------------------------------------------------------|:------|
| *domain*#domain.intrusions.detected.count                   | count |
| *domain*#domain.intrusions.blocked.count                    | count |
| *domain*#domain.intrusions.detected.critical.severity.count | count |
| *domain*#domain.intrusions.detected.high.severity.count     | count |
| *domain*#domain.intrusions.detected.medium.severity.count   | count |
| *domain*#domain.intrusions.detected.low.severity.count      | count |
| *domain*#domain.intrusions.detected.info.severity.count     | count |
| *domain*#domain.intrusions.detected.signature.count         | count |
| *domain*#domain.intrusions.detected.anomaly.count           | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| memory.usage.bytes                        | B     |
| memory.free.bytes                         | B     |
| memory.usage.percentage                   | %     |
| *cluster*#cluster.memory.usage.percentage | %     |

</TabItem>
<TabItem value="SDWan" label="SDWan">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| *sdwan*~status                          | N/A   |
| *sdwan*~sdwan.traffic.in.bitspersecond  | b/s   |
| *sdwan*~sdwan.traffic.out.bitspersecond | b/s   |
| *sdwan*~sdwan.traffic.bi.bitspersecond  | b/s   |
| *sdwan*~sdwan.latency.milliseconds      | ms    |
| *sdwan*~sdwan.jitter.milliseconds       | ms    |
| *sdwan*~sdwan.packetloss.percentage     | %     |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Métrique                   | Unité |
|:---------------------------|:------|
| sessions.active.count      | count |
| sessions.setup.1min.count  | count |
| sessions.setup.10min.count | count |
| sessions.setup.30min.count | count |
| sessions.setup.60min.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| *interface_name*#status                              | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Id" label="Traffic-Id">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| *interface_name*#status                              | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Name" label="Traffic-Name">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| *interface_name*#status                              | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="VPN-Global" label="VPN-Global">

| Métrique                                 | Unité    |
|:-----------------------------------------|:---------|
| *vd*~vpn.users.logged.count              | users    |
| *vd*~vpn.websessions.active.count        | sessions |
| *vd*~vpn.tunnels.active.count            | tunnels  |
| *vd*~*vpn*#status                        | N/A      |
| *vd*~*vpn*#vpn.traffic.in.bitspersecond  | b/s      |
| *vd*~*vpn*#vpn.traffic.out.bitspersecond | b/s      |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vdom-Usage" label="Vdom-Usage">

| Métrique                                        | Unité |
|:------------------------------------------------|:------|
| virtualdomains.license.usage.count              | count |
| virtualdomains.license.free.count               | count |
| virtualdomains.license.usage.percentage         | %     |
| *vdom*~virtualdomain.cpu.utilization.percentage | %     |
| *vdom*~virtualdomain.memory.usage.percentage    | %     |
| *vdom*~virtualdomain.sessions.active.count      | count |
| *vdom*~virtualdomain.sessions.rate.persecond    | /s    |
| *vdom*~virtualdomain.traffic.in.bitspersecond   | b/s   |
| *vdom*~virtualdomain.traffic.out.bitspersecond  | b/s   |
| *vdom*~virtualdomain.policies.active.count      | count |
| *vdom*~status                                   | N/A   |

</TabItem>
<TabItem value="Virus" label="Virus">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| *domain*#domain.virus.detected.count     | count |
| *domain*#domain.virus.detected.persecond | /s    |
| *domain*#domain.virus.blocked.count      | count |
| *domain*#domain.virus.blocked.persecond  | /s    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Le service SNMP doit être activé et configuré sur l'équipement. Veuillez vous référer à la documentation officielle du constructeur/éditeur.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers la ressource supervisée.

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
dnf install centreon-pack-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Fortinet Fortigate**
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
dnf install centreon-plugin-Network-Firewalls-Fortinet-Fortigate-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Firewalls-Fortinet-Fortigate-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-firewalls-fortinet-fortigate-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Firewalls-Fortinet-Fortigate-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Fortinet-Fortigate-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                   | Valeur par défaut | Obligatoire |
|:-----------------|:----------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Macro                  | Description                                                                                                                                                                                                                                 | Valeur par défaut                                             | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------|:-----------:|
| WARNINGCPUUTILIZATION  | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALCPUUTILIZATION | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| WARNINGMEMORYUSAGE     | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALMEMORYUSAGE    | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{role} ne %{roleLast} or %{sync\_status} =~ /unsynchronized/'). You can use the following variables: %{serial}, %{hostname}, %{sync\_status}, %{role}, %{roleLast} | %{role} ne %{roleLast} or %{sync\_status} =~ /unsynchronized/ |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{serial}, %{hostname}, %{sync\_status}, %{role}, %{roleLast}                                                                             |                                                               |             |
| WARNINGSYNCHRONIZED    | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALSYNCHRONIZED   | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| WARNINGTOTALCHECKSUMS  | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALTOTALCHECKSUMS | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| WARNINGTOTALNODES      | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALTOTALNODES     | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| WARNINGUNSYNCHRONIZED  | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| CRITICALUNSYNCHRONIZED | Set thresholds                                                                                                                                                                                                                              |                                                               |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                 | --verbose                                                     |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                  | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE         | Thresholds                                                                                  |                   |             |
| CRITICALAVERAGE        | Thresholds                                                                                  |                   |             |
| WARNINGCLUSTERAVERAGE  | Thresholds                                                                                  |                   |             |
| CRITICALCLUSTERAVERAGE | Thresholds                                                                                  |                   |             |
| WARNINGCORE            | Thresholds                                                                                  |                   |             |
| CRITICALCORE           | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Disk" label="Disk">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                |                   |             |
| CRITICAL     | Critical threshold in percent                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Ips-Stats-Global" label="Ips-Stats-Global">

| Macro                      | Description                                                                                 | Valeur par défaut | Obligatoire |
|:---------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                     | Filter virtual domain name (can be a regexp)                                                | .*                |             |
| WARNINGINTRUSIONSBLOCKED   | Thresholds                                                                                  |                   |             |
| CRITICALINTRUSIONSBLOCKED  | Thresholds                                                                                  |                   |             |
| WARNINGINTRUSIONSDETECTED  | Thresholds                                                                                  |                   |             |
| CRITICALINTRUSIONSDETECTED | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                    | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCLUSTERUSAGEPRCT  | Thresholds                                                                                  |                   |             |
| CRITICALCLUSTERUSAGEPRCT | Thresholds                                                                                  |                   |             |
| WARNINGUSAGE             | Thresholds                                                                                  |                   |             |
| CRITICALUSAGE            | Thresholds                                                                                  |                   |             |
| WARNINGUSAGEFREE         | Thresholds                                                                                  |                   |             |
| CRITICALUSAGEFREE        | Thresholds                                                                                  |                   |             |
| WARNINGUSAGEPRCT         | Thresholds                                                                                  |                   |             |
| CRITICALUSAGEPRCT        | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="SDWan" label="SDWan">

| Macro              | Description                                                                                                                                                                     | Valeur par défaut  | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| FILTERVDOMAIN      | Filter sd-wan links by vdom name (can be a regexp)                                                                                                                              |                    |             |
| FILTERLINKNAME     | Filter sd-wan links by name (can be a regexp)                                                                                                                                   |                    |             |
| FILTERLINKID       | Filter sd-wan links by ID (can be a regexp)                                                                                                                                     |                    |             |
| WARNINGJITTER      | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALJITTER     | Thresholds                                                                                                                                                                      |                    |             |
| WARNINGLATENCY     | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALLATENCY    | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{state} eq "down"'). You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName} | %{state} eq "down" |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName}                                  |                    |             |
| WARNINGTRAFFICBI   | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALTRAFFICBI  | Thresholds                                                                                                                                                                      |                    |             |
| WARNINGTRAFFICIN   | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALTRAFFICIN  | Thresholds                                                                                                                                                                      |                    |             |
| WARNINGTRAFFICOUT  | Thresholds                                                                                                                                                                      |                    |             |
| CRITICALTRAFFICOUT | Thresholds                                                                                                                                                                      |                    |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                     |                    |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro              | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVE      | Thresholds                                                                                  |                   |             |
| CRITICALACTIVE     | Thresholds                                                                                  |                   |             |
| WARNINGSETUP10MIN  | Thresholds                                                                                  |                   |             |
| CRITICALSETUP10MIN | Thresholds                                                                                  |                   |             |
| WARNINGSETUP1MIN   | Thresholds                                                                                  |                   |             |
| CRITICALSETUP1MIN  | Thresholds                                                                                  |                   |             |
| WARNINGSETUP30MIN  | Thresholds                                                                                  |                   |             |
| CRITICALSETUP30MIN | Thresholds                                                                                  |                   |             |
| WARNINGSETUP60MIN  | Thresholds                                                                                  |                   |             |
| CRITICALSETUP60MIN | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro          | Description                                                                                                                                                                                                         | Valeur par défaut                            | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|:-----------:|
| FILTER         | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                           | .*                                           |             |
| WARNINGIN      | Thresholds                                                                                                                                                                                                          |                                              |             |
| CRITICALIN     | Thresholds                                                                                                                                                                                                          |                                              |             |
| WARNINGOUT     | Thresholds                                                                                                                                                                                                          |                                              |             |
| CRITICALOUT    | Thresholds                                                                                                                                                                                                          |                                              |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} | %{admstatus} eq "up" and %{opstatus} ne "up" |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                         | --verbose                                    |             |

</TabItem>
<TabItem value="Traffic-Id" label="Traffic-Id">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACEID  | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGIN    | Thresholds                                                                                  |                   |             |
| CRITICALIN   | Thresholds                                                                                  |                   |             |
| WARNINGOUT   | Thresholds                                                                                  |                   |             |
| CRITICALOUT  | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Name" label="Traffic-Name">

| Macro         | Description                                                                                 | Valeur par défaut | Obligatoire |
|:--------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGIN     | Thresholds                                                                                  |                   |             |
| CRITICALIN    | Thresholds                                                                                  |                   |             |
| WARNINGOUT    | Thresholds                                                                                  |                   |             |
| CRITICALOUT   | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="VPN-Global" label="VPN-Global">

| Macro              | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             | Filter name with regexp. Can be ('vdomain', 'vpn')                                          | .*                |             |
| VDOMAIN            | Filter name with regexp. Can be ('vdomain', 'vpn')                                          |                   |             |
| WARNINGSESSIONS    | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALSESSIONS   | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| WARNINGTRAFFICIN   | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALTRAFFICIN  | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| WARNINGTRAFFICOUT  | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALTRAFFICOUT | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| WARNINGTUNNELS     | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALTUNNELS    | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| WARNINGUSERS       | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| CRITICALUSERS      | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')   |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Vdom-Usage" label="Vdom-Usage">

| Macro                    | Description                                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERVDOMAIN            | Filter by virtual domain name (can be a regexp)                                                                                            |                   |             |
| WARNINGCPUUTILIZATION    | Thresholds                                                                                                                                 |                   |             |
| CRITICALCPUUTILIZATION   | Thresholds                                                                                                                                 |                   |             |
| WARNINGLICENSEFREE       | Thresholds                                                                                                                                 |                   |             |
| CRITICALLICENSEFREE      | Thresholds                                                                                                                                 |                   |             |
| WARNINGLICENSEUSAGE      | Thresholds                                                                                                                                 |                   |             |
| CRITICALLICENSEUSAGE     | Thresholds                                                                                                                                 |                   |             |
| WARNINGLICENSEUSAGEPRCT  | Thresholds                                                                                                                                 |                   |             |
| CRITICALLICENSEUSAGEPRCT | Thresholds                                                                                                                                 |                   |             |
| WARNINGMEMORYUSAGEPRCT   | Thresholds                                                                                                                                 |                   |             |
| CRITICALMEMORYUSAGEPRCT  | Thresholds                                                                                                                                 |                   |             |
| WARNINGSESSIONSACTIVE    | Thresholds                                                                                                                                 |                   |             |
| CRITICALSESSIONSACTIVE   | Thresholds                                                                                                                                 |                   |             |
| WARNINGSESSIONSRATE      Thresholds                                                                                                                                   |                   |             |
| CRITICALSESSIONSRATE     Thresholds                                                                                                                                   |                   |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{op\_mode}, %{ha\_state}  |                   |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{op\_mode}, %{ha\_state} |                   |             |
| WARNINGTRAFFICIN         | Thresholds                                                                                                                                 |                   |             |
| CRITICALTRAFFICIN        | Thresholds                                                                                                                                 |                   |             |
| WARNINGTRAFFICOUT        | Thresholds                                                                                                                                 |                   |             |
| CRITICALTRAFFICOUT       | Thresholds                                                                                                                                 |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                | --verbose         |             |

</TabItem>
<TabItem value="Virus" label="Virus">

| Macro                     | Description                                                                                 | Valeur par défaut | Obligatoire |
|:--------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                | Filter virtual domain name (can be a regexp)                                                |                   |             |
| WARNINGVIRUSBLOCKED       | Thresholds                                                                                  |                   |             |
| CRITICALVIRUSBLOCKED      | Thresholds                                                                                  |                   |             |
| WARNINGVIRUSBLOCKEDPSEC   | Thresholds                                                                                  |                   |             |
| CRITICALVIRUSBLOCKEDPSEC  | Thresholds                                                                                  |                   |             |
| WARNINGVIRUSDETECTED      | Thresholds                                                                                  |                   |             |
| CRITICALVIRUSDETECTED     | Thresholds                                                                                  |                   |             |
| WARNINGVIRUSDETECTEDPSEC  | Thresholds                                                                                  |                   |             |
| CRITICALVIRUSDETECTEDPSEC | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_fortinet_fortigate.pl \
	--plugin=network::fortinet::fortigate::snmp::plugin \
	--mode=virus \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-name='' \
	--warning-virus-detected='' \
	--critical-virus-detected='' \
	--warning-virus-detected-psec='' \
	--critical-virus-detected-psec='' \
	--warning-virus-blocked='' \
	--critical-virus-blocked='' \
	--warning-virus-blocked-psec='' \
	--critical-virus-blocked-psec='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All virtualdomains virus stats are ok | '*domain*#domain.virus.detected.count'=;;;0;'*domain*#domain.virus.detected.persecond'=/s;;;0;'*domain*#domain.virus.blocked.count'=;;;0;'*domain*#domain.virus.blocked.persecond'=/s;;;0;
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
/usr/lib/centreon/plugins/centreon_fortinet_fortigate.pl \
	--plugin=network::fortinet::fortigate::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                           | Modèle de service associé                                                                                                                                 |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| ap-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/apusage.pm)]                       | Not used in this Monitoring Connector                                                                                                                     |
| cluster-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/clusterstatus.pm)]           | Net-Fortinet-Fortigate-Cluster-Status-SNMP-custom                                                                                                         |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/cpu.pm)]                                | Net-Fortinet-Fortigate-Cpu-SNMP-custom                                                                                                                    |
| disk [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/disk.pm)]                              | Net-Fortinet-Fortigate-Disk-SNMP-custom                                                                                                                   |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/hardware.pm)]                      | Net-Fortinet-Fortigate-Hardware-SNMP-custom                                                                                                               |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/interfaces.pm)]                  | Net-Fortinet-Fortigate-Traffic-Global-SNMP-custom<br />Net-Fortinet-Fortigate-Traffic-Id-SNMP-custom<br />Net-Fortinet-Fortigate-Traffic-Name-SNMP-custom |
| ips-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/ipsstats.pm)]                     | Net-Fortinet-Fortigate-Ips-Stats-Global-SNMP-custom                                                                                                       |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                                   | Used for service discovery                                                                                                                                |
| list-virtualdomains [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/listvirtualdomains.pm)] | Not used in this Monitoring Connector                                                                                                                     |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/memory.pm)]                          | Net-Fortinet-Fortigate-Memory-SNMP-custom                                                                                                                 |
| sdwan [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/sdwan.pm)]                            | Net-Fortinet-Fortigate-SDWan-SNMP-custom                                                                                                                  |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/sessions.pm)]                      | Net-Fortinet-Fortigate-Sessions-SNMP-custom                                                                                                               |
| signatures [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/signatures.pm)]                  | Not used in this Monitoring Connector                                                                                                                     |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                                    | Not used in this Monitoring Connector                                                                                                                     |
| vdom-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/vdomusage.pm)]                   | Net-Fortinet-Fortigate-Vdom-Usage-SNMP-custom                                                                                                             |
| virus [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/virus.pm)]                            | Net-Fortinet-Fortigate-Virus-SNMP-custom                                                                                                                  |
| vpn [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/fortinet/fortigate/snmp/mode/vpn.pm)]                                | Net-Fortinet-Fortigate-VPN-Global-SNMP-custom                                                                                                             |

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
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
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
<TabItem value="Cluster-Status" label="Cluster-Status">

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
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{serial}, %{hostname}, %{sync\_status}, %{role}, %{roleLast}                                                                               |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{role} ne %{roleLast} or %{sync\_status} =~ /unsynchronized/'). You can use the following variables: %{serial}, %{hostname}, %{sync\_status}, %{role}, %{roleLast}   |
| --warning-* --critical-* | Set thresholds. Can be: 'total-nodes', 'synchronized', 'unsynchronized', 'total-checksums', 'cpu-utilization', 'memory-usage'.                                                                                                                |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                 |
|:-------------------------|:------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'core', 'average', 'cluster-average'.   |
| --cluster                | Add cluster cpu informations.                               |
| --filter-core            | Core cpu to monitor (can be a regexp).                      |

</TabItem>
<TabItem value="Disk" label="Disk">

| Option     | Description                       |
|:-----------|:----------------------------------|
| --warning  | Warning threshold in percent.     |
| --critical | Critical threshold in percent.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                          |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'sensors'.                                                                                                                                                         |
| --add-name-instance  | Add literal description for instance value (used in filter, and threshold options).                                                                                                                                  |
| --filter             | Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter=sensors,1                                                                                                     |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                           |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='sensors,WARNING,off'   |
| --warning            | Set warning threshold for 'sensors' (syntax: type,regexp,threshold) Example: --warning='sensors,.*,30'                                                                                                               |
| --critical           | Set critical threshold for 'sensors' (syntax: type,regexp,threshold) Example: --critical='sensors,.*,50'                                                                                                             |

</TabItem>
<TabItem value="Ips-Stats-Global" label="Ips-Stats-Global">

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
| --warning-* --critical-* | Thresholds. Can be: 'intrusions-detected', 'intrusions-blocked', 'crit-sev-detections', 'high-sev-detections', 'med-sev-detections', 'low-sev-detections', 'info-sev-detections', 'signature-detections', 'anomaly-detections'.               |
| --filter-name            | Filter virtual domain name (can be a regexp).                                                                                                                                                                                                 |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'usage-free', 'usage-prct', 'cluster-usage-prct'.   |
| --cluster                | Add cluster memory informations.                                        |

</TabItem>
<TabItem value="SDWan" label="SDWan">

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
| --filter-id              | Filter sd-wan links by ID (can be a regexp).                                                                                                                                                                                                  |
| --filter-name            | Filter sd-wan links by name (can be a regexp).                                                                                                                                                                                                |
| --filter-vdom            | Filter sd-wan links by vdom name (can be a regexp).                                                                                                                                                                                           |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName}                                                                                                |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName}                                                                                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{state} eq "down"'). You can use the following variables: %{state}, %{vdom}, %{id}, %{name}, %{ifName}                                                               |
| --warning-* --critical-* | Thresholds. Can be: 'traffic-in', 'traffic-out', 'traffic-bi', 'latency', 'jitter', 'packetloss'.                                                                                                                                             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                 |
|:-------------------------|:--------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'active', 'setup-1min', 'setup-10min', 'setup-30min', 'setup-60min'.    |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

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
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                          |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                 |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Traffic-Id" label="Traffic-Id">

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
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                          |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                 |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Traffic-Name" label="Traffic-Name">

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
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                          |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr, Vdom).                                                                                                                                                                 |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="VPN-Global" label="VPN-Global">

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
| --filter-*             | Filter name with regexp. Can be ('vdomain', 'vpn')                                                                                                                                                                                            |
| --warning-*            | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')                                                                                                                                                     |
| --critical-*           | Warning on counters. Can be ('users', 'sessions', 'tunnels', 'traffic-in', 'traffic-out')                                                                                                                                                     |
| --warning-status       | Define the conditions to match for the status to be WARNING. Use "%{state}" as a special variable. Useful to be notified when tunnel is up "%{state} eq 'up'"                                                                                 |
| --critical-status      | Define the conditions to match for the status to be CRITICAL. Use "%{state}" as a special variable. Useful to be notified when tunnel is up "%{state} eq 'up'"                                                                                |

</TabItem>
<TabItem value="Vdom-Usage" label="Vdom-Usage">

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
| --filter-vdomain         | Filter by virtual domain name (can be a regexp).                                                                                                                                                                                              |
| --add-traffic            | Add traffic usage by virtual domain.                                                                                                                                                                                                          |
| --add-policy             | Add number of policies by virtual domain.                                                                                                                                                                                                     |
| --policy-cache-time      | Time in minutes before reloading cache file (default: 60).                                                                                                                                                                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{op\_mode}, %{ha\_state}                                                                                                     |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{op\_mode}, %{ha\_state}                                                                                                    |
| --warning-* --critical-* | Thresholds. Can be: 'cpu-utilization', 'sessions-active', 'session-rate', 'memory-usage-prct', 'license-usage', 'license-free', 'license-usage-prct', 'traffic-in', 'traffic-out', 'policies-active'.                                         |

</TabItem>
<TabItem value="Virus" label="Virus">

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
| --warning-* --critical-* | Thresholds. Can be: 'virus-detected', ''virus-detected-psec', 'virus-blocked', 'virus-blocked-psec'.                                                                                                                                          |
| --filter-name            | Filter virtual domain name (can be a regexp).                                                                                                                                                                                                 |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortigate.pl \
	--plugin=network::fortinet::fortigate::snmp::plugin \
	--mode=virus \
	--help
```
