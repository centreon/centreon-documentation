---
id: network-loadbalancers-f5-bigip-snmp
title: F5 BigIP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **F5 BigIP** apporte un modèle d'hôte :

* **Net-F5-Bigip-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-F5-Bigip-SNMP-custom" label="Net-F5-Bigip-SNMP-custom">

| Alias                       | Modèle de service                                    | Description                              | Découverte |
|:----------------------------|:-----------------------------------------------------|:-----------------------------------------|:----------:|
| Connections                 | Net-F5-Bigip-Connections-SNMP-custom                 | Contrôle les connexions courantes        |            |
| Hardware-Global             | Net-F5-Bigip-Hardware-Global-SNMP-custom             | Contrôle l'ensemble du matériel          |            |
| Virtualserver-Status-Global | Net-F5-Bigip-Virtualserver-Status-Global-SNMP-custom | Contrôle le statut des 'virtual servers' | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-F5-Bigip-SNMP-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                | Modèle de service                             | Description                               | Découverte |
|:---------------------|:----------------------------------------------|:------------------------------------------|:----------:|
| APM-Sessions         | Net-F5-Bigip-APM-Sessions-SNMP-custom         | Contrôle les sessions APM                 |            |
| Failover             | Net-F5-Bigip-Failover-SNMP-custom             | Contrôle l'état du failover               |            |
| Hardware-Fan         | Net-F5-Bigip-Hardware-Fan-SNMP-custom         | Contrôle les ventilateurs de l'équipement |            |
| Hardware-Psu         | Net-F5-Bigip-Hardware-Psu-SNMP-custom         | Contrôle les ventilateurs de l'équipement |            |
| Hardware-Temperature | Net-F5-Bigip-Hardware-Temperature-SNMP-custom | Contrôle les températures de l'équipement |            |
| Node-Status-Global   | Net-F5-Bigip-Node-Status-Global-SNMP-custom   | Contrôle le statut des nodes              | X          |
| Pool-Status-Global   | Net-F5-Bigip-Pool-Status-Global-SNMP-custom   | Contrôle le statut des pools              | X          |
| Tmm-Usage            | Net-F5-Bigip-Tmm-Usage-SNMP-custom            | Contrôle l'utilisation TMM                |            |
| Trunk-Usage          | Net-F5-Bigip-Trunk-Usage-SNMP-custom          | Controle l'utilisation des trunks         |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                          |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resource through a SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) to get the discovery rule and create a template mapper for the **Net-F5-Bigip-SNMP-custom** host template |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de service

| Nom de la règle                       | Description |
|:--------------------------------------|:------------|
| App-F5-Bigip-Node-Status              | Découvre les nodes et supervise le statut                   |
| App-F5-Bigip-Pool-Status              | Découvre les pools et supervise le statut                   |
| Net-F5-Bigip-SNMP-Virtualservers-Name | Découvre les serveurs virtuelles et supervise l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="APM-Sessions" label="APM-Sessions">

| Métrique                                                          | Unité |
|:------------------------------------------------------------------|:------|
| system.sessions.created.count                                     |       |
| system.sessions.active.count                                      |       |
| system.sessions.pending.count                                     |       |
| *vs_name~accessprofile_name*#accessprofile.sessions.created.count |       |
| *vs_name~accessprofile_name*#accessprofile.sessions.active.count  |       |
| *vs_name~accessprofile_name*#accessprofile.sessions.pending.count |       |

</TabItem>
<TabItem value="Connections" label="Connections">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| connections.client.current.count     |       |
| connections.client.ssl.current.count |       |
| connections.client.ssl.persecond     |       |
| connections.server.current.count     |       |
| connections.server.ssl.current.count |       |

</TabItem>
<TabItem value="Failover" label="Failover">

| Métrique        | Unité |
|:----------------|:------|
| sync status     |       |
| failover status |       |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| fan status                                       |       |
| *fan_index*#hardware.fan.speed.rpm               | rpm   |
| power supply status                              |       |
| temperature status                               |       |
| *temperature_index*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Node-Status-Global" label="Node-Status-Global">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| node status                                       |       |
| *node_name*#node.connections.server.current.count |       |

</TabItem>
<TabItem value="Pool-Status-Global" label="Pool-Status-Global">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| pool  status                                      |       |
| *pool_name*#pool.connections.server.current.count |       |
| *pool_name*#ppool.members.active.count            |       |
| *pool_name*#ppool.members.total.count             |       |
| pool members status                               |       |

</TabItem>
<TabItem value="Tmm-Usage" label="Tmm-Usage">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| *tmm_id*#tmm.memory.usage.bytes               | B     |
| *tmm_id*#tmm.cpu.utilization.1m.percentage    | %     |
| *tmm_id*#tmm.cpu.utilization.5m.percentage    | %     |
| *tmm_id*#tmm.connections.client.curent.count  |       |
| *tmm_id*#tmm.connections.client.total.count   |       |
| *tmm_id*#tmm.connections.server.current.count |       |
| *tmm_id*#tmm.connections.server.total.count   |       |

</TabItem>
<TabItem value="Trunk-Usage" label="Trunk-Usage">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| trunk status                                      |       |
| *trunk_name*trunk.traffic.in.bitspersecond        | b/s   |
| *trunk_name*ttrunk.traffic.out.bitspersecond      | b/s   |
| *trunk_name*ttrunk.packets.in.error.percentage    | %     |
| *trunk_name*ttrunk.packets.out.error.percentage   | %     |
| *trunk_name*ttrunk.packets.in.dropped.percentage  | %     |
| *trunk_name*ttrunk.packets.out.dropped.percentage | %     |
| *trunk_name*ttrunk.interfaces.total.count         |       |
| trunk interface status                            |       |

</TabItem>
<TabItem value="Virtualserver-Status-Global" label="Virtualserver-Status-Global">

| Métrique                                                 | Unité |
|:---------------------------------------------------------|:------|
| virtual server status                                    |       |
| *vs_name*#virtualserver.connections.client.current.count |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre ressource en SNMP,  il est nécessaire de configurer l'agent SNMP
sur la ressource comme indiqué sur la documentation officielle du constructeur.

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
dnf install centreon-pack-network-loadbalancers-f5-bigip-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-loadbalancers-f5-bigip-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-loadbalancers-f5-bigip-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-loadbalancers-f5-bigip-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **F5 BigIP**
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
dnf install centreon-plugin-Network-Loadbalancers-F5-Bigip-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Loadbalancers-F5-Bigip-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-loadbalancers-f5-bigip-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Loadbalancers-F5-Bigip-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-F5-Bigip-SNMP-custom**.

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
<TabItem value="APM-Sessions" label="APM-Sessions">

| Macro                     | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VSFILTER                  | Filter virtual server name (can be a regexp)                                                        | .*                |             |
| APFILTER                  | Filter access profile name (can be a regexp)                                                        | .*                |             |
| ACTIVESESSIONSWARNING     | Thresholds                                                                                          |                   |             |
| ACTIVESESSIONSCRITICAL    | Thresholds                                                                                          |                   |             |
| APACTIVESESSIONSWARNING   | Thresholds                                                                                          |                   |             |
| APACTIVESESSIONSCRITICAL  | Thresholds                                                                                          |                   |             |
| APCREATEDSESSIONSWARNING  | Thresholds                                                                                          |                   |             |
| APCREATEDSESSIONSCRITICAL | Thresholds                                                                                          |                   |             |
| APPENDINGSESSIONSWARNING  | Thresholds                                                                                          |                   |             |
| APPENDINGSESSIONSCRITICAL | Thresholds                                                                                          |                   |             |
| CREATEDSESSIONSWARNING    | Thresholds                                                                                          |                   |             |
| CREATEDSESSIONSCRITICAL   | Thresholds                                                                                          |                   |             |
| PENDINGSESSIONSWARNING    | Thresholds                                                                                          |                   |             |
| PENDINGSESSIONSCRITICAL   | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro                | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICALCLIENT       | Critical threshold                                                                                  |                   |             |
| WARNINGCLIENT        | Warning threshold                                                                                   |                   |             |
| WARNINGCLIENTSSLTPS  | Warning threshold                                                                                   |                   |             |
| CRITICALCLIENTSSLTPS | Critical threshold                                                                                  |                   |             |
| CRITICALSERVER       | Critical threshold                                                                                  |                   |             |
| WARNINGSERVER        | Warning threshold                                                                                   |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Failover" label="Failover">

| Macro                  | Description                                                                                                                                                                                                 | Valeur par défaut                                                             | Obligatoire |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------|:-----------:|
| CRITICALFAILOVERSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{failoverstatus} =~ /unknown/'). You can use the following variables: %{failoverstatus}                                            | %{failoverstatus} =~ /unknown/                                                |             |
| WARNINGFAILOVERSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{failoverstatus}                                                                                         |                                                                               |             |
| CRITICALSYNCSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{syncstatus} =~ /unknown\|syncFailed\|syncDisconnected\|incompatibleVersion/'). You can use the following variables: %{syncstatus} | %{syncstatus} =~ /unknown\|syncFailed\|syncDisconnected\|incompatibleVersion/ |             |
| WARNINGSYNCSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{syncstatus}                                                                                             |                                                                               |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                         |                                                                               |             |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature'                       | fan               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature'                       | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature'                       | psu               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Temperature" label="Hardware-Temperature">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature'                       | temperature       |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Node-Status-Global" label="Node-Status-Global">

| Macro                            | Description                                                                                                                                                                                    | Valeur par défaut                               | Obligatoire |
|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|:-----------:|
| FILTER                           | Filter by name (regexp can be used)                                                                                                                                                            | .*                                              |             |
| UNKNOWNSTATUS                    | Define the conditions to match for the status to be UNKNOWN (Default: ''). You can use the following variables: %{state}, %{status}, %{display}                                                |                                                 |             |
| WARNINGCURRENTSERVERCONNECTIONS  | Thresholds                                                                                                                                                                                     |                                                 |             |
| CRITICALCURRENTSERVERCONNECTIONS | Thresholds                                                                                                                                                                                     |                                                 |             |
| WARNINGSTATUS                    | Define the conditions to match for the status to be WARNING (Default: '%{state} eq "enabled" and %{status} eq "yellow"'). You can use the following variables: %{state}, %{status}, %{display} | %{state} eq "enabled" and %{status} eq "yellow" |             |
| CRITICALSTATUS                   | Define the conditions to match for the status to be CRITICAL (Default: '%{state} eq "enabled" and %{status} eq "red"'). You can use the following variables: %{state}, %{status}, %{display}   | %{state} eq "enabled" and %{status} eq "red"    |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                            | --verbose                                       |             |

</TabItem>
<TabItem value="Pool-Status-Global" label="Pool-Status-Global">

| Macro                            | Description                                                                                                                                                                                                                                             | Valeur par défaut                               | Obligatoire |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|:-----------:|
| FILTER                           | Filter by name (regexp can be used)                                                                                                                                                                                                                     | .*                                              |             |
| UNKNOWNSTATUS                    | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{status}, %{membersAllDisabled}, %{display}                                                                                                |                                                 |             |
| WARNINGCURRENTACTIVEMEMBERS      | Thresholds                                                                                                                                                                                                                                              |                                                 |             |
| CRITICALCURRENTACTIVEMEMBERS     | Thresholds                                                                                                                                                                                                                                              |                                                 |             |
| WARNINGCURRENTSERVERCONNECTIONS  | Thresholds                                                                                                                                                                                                                                              |                                                 |             |
| CRITICALCURRENTSERVERCONNECTIONS | Thresholds                                                                                                                                                                                                                                              |                                                 |             |
| WARNINGCURRENTTOTALMEMBERS       | Thresholds                                                                                                                                                                                                                                              |                                                 |             |
| CRITICALCURRENTTOTALMEMBERS      | Thresholds                                                                                                                                                                                                                                              |                                                 |             |
| WARNINGSTATUS                    | Define the conditions to match for the status to be WARNING (Default: '%{membersAllDisabled} eq "no" and %{state} eq "enabled" and %{status} eq "yellow"'). You can use the following variables: %{state}, %{status}, %{membersAllDisabled}, %{display} | %{state} eq "enabled" and %{status} eq "yellow" |             |
| CRITICALSTATUS                   | Define the conditions to match for the status to be CRITICAL (Default: '%{membersAllDisabled} eq "no" and %{state} eq "enabled" and %{status} eq "red"'). You can use the following variables: %{state}, %{status}, %{membersAllDisabled}, %{display}   | %{state} eq "enabled" and %{status} eq "red"    |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                     | --verbose                                       |             |

</TabItem>
<TabItem value="Tmm-Usage" label="Tmm-Usage">

| Macro                            | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS                   | Only display some counters (regexp can be used). Example : --filter-counters='^memory-usage$'       |                   |             |
| FILTERNAME                       | Filter by TMM name (regexp can be used)                                                             |                   |             |
| WARNINGCPU1M                     | Warning threshold                                                                                   |                   |             |
| CRITICALCPU1M                    | Critical threshold                                                                                  |                   |             |
| WARNINGCPU5M                     | Warning threshold                                                                                   |                   |             |
| CRITICALCPU5M                    | Critical threshold                                                                                  |                   |             |
| WARNINGCURRENTCLIENTCONNECTIONS  | Warning threshold                                                                                   |                   |             |
| CRITICALCURRENTSERVERCONNECTIONS | Critical threshold                                                                                  |                   |             |
| WARNINGCURRENTSERVERCONNECTIONS  | Warning threshold                                                                                   |                   |             |
| WARNINGMEMORYUSAGE               | Warning threshold                                                                                   | 80                |             |
| CRITICALMEMORYUSAGE              | Critical threshold                                                                                  | 90                |             |
| WARNINGTOTALCLIENTCONNECTIONS    | Warning threshold                                                                                   |                   |             |
| CRITICALTOTALCLIENTCONNECTIONS   | Critical threshold                                                                                  |                   |             |
| WARNINGTOTALSERVERCONNECTIONS    | Warning threshold                                                                                   |                   |             |
| CRITICALTOTALSERVERCONNECTIONS   | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Trunk-Usage" label="Trunk-Usage">

| Macro                   | Description                                                                                                                                                              | Valeur par défaut                  | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| UNITS                   | Units of thresholds for the traffic (Default: '%') ('%', 'b/s')                                                                                                          | %                                  |             |
| FILTERNAME              | Filter by trunks name (regexp can be used)                                                                                                                               |                                    |             |
| UNKNOWNINTERFACESTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                                                  |                                    |             |
| UNKNOWNSTATUS           | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                                                  |                                    |             |
| WARNINGINTERFACESTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                  |                                    |             |
| CRITICALINTERFACESTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{display}                                                 |                                    |             |
| WARNINGINTERFACESTOTAL  | Thresholds                                                                                                                                                               |                                    |             |
| CRITICALINTERFACESTOTAL | Thresholds                                                                                                                                                               |                                    |             |
| WARNINGPACKETSDROPIN    | Thresholds                                                                                                                                                               |                                    |             |
| CRITICALPACKETSDROPIN   | Thresholds                                                                                                                                                               |                                    |             |
| WARNINGPACKETSDROPOUT   | Thresholds                                                                                                                                                               |                                    |             |
| CRITICALPACKETSDROPOUT  | Thresholds                                                                                                                                                               |                                    |             |
| WARNINGPACKETSERRORIN   | Thresholds                                                                                                                                                               |                                    |             |
| CRITICALPACKETSERRORIN  | Thresholds                                                                                                                                                               |                                    |             |
| WARNINGPACKETSERROROUT  | Thresholds                                                                                                                                                               |                                    |             |
| CRITICALPACKETSERROROUT | Thresholds                                                                                                                                                               |                                    |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /uninitialized\|down/'). You can use the following variables: %{status}, %{display} | %{status} =~ /uninitialized\|down/ |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                  |                                    |             |
| WARNINGTRAFFICIN        | Thresholds                                                                                                                                                               |                                    |             |
| CRITICALTRAFFICIN       | Thresholds                                                                                                                                                               |                                    |             |
| WARNINGTRAFFICOUT       | Thresholds                                                                                                                                                               |                                    |             |
| CRITICALTRAFFICOUT      | Thresholds                                                                                                                                                               |                                    |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                      | --verbose                          |             |

</TabItem>
<TabItem value="Virtualserver-Status-Global" label="Virtualserver-Status-Global">

| Macro          | Description                                                                                                                                                                                    | Valeur par défaut                               | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|:-----------:|
| FILTER         | Filter by name (regexp can be used)                                                                                                                                                            | .*                                              |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: ''). You can use the following variables: %{state}, %{status}, %{display}                                                |                                                 |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{state} eq "enabled" and %{status} eq "yellow"'). You can use the following variables: %{state}, %{status}, %{display} | %{state} eq "enabled" and %{status} eq "yellow" |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{state} eq "enabled" and %{status} eq "red"'). You can use the following variables: %{state}, %{status}, %{display}   | %{state} eq "enabled" and %{status} eq "red"    |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                            | --verbose                                       |             |

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
/usr/lib/centreon/plugins/centreon_f5_bigip_snmp.pl \
	--plugin=network::f5::bigip::snmp::plugin \
	--mode=pool-status \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All pools are ok | '/Common/QuickSilverCatalogueService#pool.connections.server.current.count'=0;;;0; '/Common/QuickSilverCatalogueService#pool.members.active.count'=4;;;0; '/Common/QuickSilverCatalogueService#pool.members.total.count'=4;;;0; '/Common/BusinessEPGDataManagementService#pool.connections.server.current.count'=0;;;0; '/Common/BusinessEPGDataManagementService#pool.members.active.count'=4;;;0; '/Common/BusinessEPGDataManagementService#pool.members.total.count'=4;;;0;
checking pool '/Common/QuickSilverCatalogueService'
    status: green [state: enabled] [reason: The pool is available]
    current server connections: 0, current active members: 4
    member node '/Common/10.96.55.85' [port: 11700] status: green [state: enabled] [reason: Pool member is available]
    member node '/Common/10.96.55.86' [port: 11700] status: green [state: enabled] [reason: Pool member is available]
    member node '/Common/10.96.55.87' [port: 11700] status: green [state: enabled] [reason: Pool member is available]
    member node '/Common/10.96.55.88' [port: 11700] status: green [state: enabled] [reason: Pool member is available]
checking pool '/Common/BusinessEPGDataManagementService'
    status: green [state: enabled] [reason: The pool is available]
    current server connections: 0, current active members: 4
    member node '/Common/10.96.55.89' [port: 11300] status: green [state: enabled] [reason: Pool member is available]
    member node '/Common/10.96.55.90' [port: 11300] status: green [state: enabled] [reason: Pool member is available]
    member node '/Common/10.96.55.91' [port: 11300] status: green [state: enabled] [reason: Pool member is available]
    member node '/Common/10.96.55.92' [port: 11300] status: green [state: enabled] [reason: Pool member is available] 
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
/usr/lib/centreon/plugins/centreon_f5_bigip_snmp.pl \
	--plugin=network::f5::bigip::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                           | Modèle de service associé                                                                                                                                                         |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| apm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/apm.pm)]                                  | Net-F5-Bigip-APM-Sessions-SNMP-custom                                                                                                                                             |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/connections.pm)]                  | Net-F5-Bigip-Connections-SNMP-custom                                                                                                                                              |
| failover [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/failover.pm)]                        | Net-F5-Bigip-Failover-SNMP-custom                                                                                                                                                 |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/hardware.pm)]                        | Net-F5-Bigip-Hardware-Fan-SNMP-custom<br />Net-F5-Bigip-Hardware-Global-SNMP-custom<br />Net-F5-Bigip-Hardware-Psu-SNMP-custom<br />Net-F5-Bigip-Hardware-Temperature-SNMP-custom |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/listnodes.pm)]                     | Used for service discovery                                                                                                                                                        |
| list-pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/listpools.pm)]                     | Used for service discovery                                                                                                                                                        |
| list-trunks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/listtrunks.pm)]                   | Not used in this Monitoring Connector                                                                                                                                             |
| list-virtualservers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/listvirtualservers.pm)]   | Used for service discovery                                                                                                                                                        |
| node-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/nodestatus.pm)]                   | Net-F5-Bigip-Node-Status-Global-SNMP-custom                                                                                                                                       |
| pool-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/poolstatus.pm)]                   | Net-F5-Bigip-Pool-Status-Global-SNMP-custom                                                                                                                                       |
| tmm-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/tmmusage.pm)]                       | Net-F5-Bigip-Tmm-Usage-SNMP-custom                                                                                                                                                |
| trunks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/trunks.pm)]                            | Net-F5-Bigip-Trunk-Usage-SNMP-custom                                                                                                                                              |
| virtualserver-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/f5/bigip/snmp/mode/virtualserverstatus.pm)] | Net-F5-Bigip-Virtualserver-Status-Global-SNMP-custom                                                                                                                              |

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
<TabItem value="APM-Sessions" label="APM-Sessions">

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
| --filter-vs              | Filter virtual server name (can be a regexp).                                                                                                                                                                                                 |
| --filter-ap              | Filter access profile name (can be a regexp).                                                                                                                                                                                                 |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-active', 'sessions-pending', 'ap-sessions-created', 'ap-sessions-active', 'ap-sessions-pending'.                                                                                            |

</TabItem>
<TabItem value="Connections" label="Connections">

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
| --filter-counters      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^client-ssl\|server-ssl$'                                                                                                         |
| --warning-*            | Warning threshold. Can be: 'client', 'server', 'client-ssl', 'server-ssl', 'client-ssl-tps'.                                                                                                                                                  |
| --critical-*           | Critical threshold. Can be: 'client', 'server', 'client-ssl', 'server-ssl', 'client-ssl-tps'.                                                                                                                                                 |

</TabItem>
<TabItem value="Failover" label="Failover">

| Option                     | Description                                                                                                                                                                                                   |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters          | Only display some counters (regexp can be used).                                                                                                                                                              |
| --warning-sync-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{syncstatus}                                                                                               |
| --critical-sync-status     | Define the conditions to match for the status to be CRITICAL (default: '%{syncstatus} =~ /unknown\|syncFailed\|syncDisconnected\|incompatibleVersion/'). You can use the following variables: %{syncstatus}   |
| --warning-failover-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{failoverstatus}                                                                                           |
| --critical-failover-status | Define the conditions to match for the status to be CRITICAL (Default: '%{failoverstatus} =~ /unknown/'). You can use the following variables: %{failoverstatus}                                              |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

| Option               | Description                                                                                                                                                                                                                |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature'.                                                                                                                                             |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                                 |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                 |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,CRITICAL,^(?!(good)$)'   |
| --warning            | Set warning threshold for temperatures, fan speed (syntax: type,instance,threshold) Example: --warning='temperature,.*,30'                                                                                                 |
| --critical           | Set critical threshold for temperatures, fan speed (syntax: type,instance,threshold) Example: --critical='temperature,.*,40'                                                                                               |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Option               | Description                                                                                                                                                                                                                |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature'.                                                                                                                                             |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                                 |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                 |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,CRITICAL,^(?!(good)$)'   |
| --warning            | Set warning threshold for temperatures, fan speed (syntax: type,instance,threshold) Example: --warning='temperature,.*,30'                                                                                                 |
| --critical           | Set critical threshold for temperatures, fan speed (syntax: type,instance,threshold) Example: --critical='temperature,.*,40'                                                                                               |

</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

| Option               | Description                                                                                                                                                                                                                |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature'.                                                                                                                                             |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                                 |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                 |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,CRITICAL,^(?!(good)$)'   |
| --warning            | Set warning threshold for temperatures, fan speed (syntax: type,instance,threshold) Example: --warning='temperature,.*,30'                                                                                                 |
| --critical           | Set critical threshold for temperatures, fan speed (syntax: type,instance,threshold) Example: --critical='temperature,.*,40'                                                                                               |

</TabItem>
<TabItem value="Hardware-Temperature" label="Hardware-Temperature">

| Option               | Description                                                                                                                                                                                                                |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'fan', 'psu', 'temperature'.                                                                                                                                             |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                                 |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                 |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,CRITICAL,^(?!(good)$)'   |
| --warning            | Set warning threshold for temperatures, fan speed (syntax: type,instance,threshold) Example: --warning='temperature,.*,30'                                                                                                 |
| --critical           | Set critical threshold for temperatures, fan speed (syntax: type,instance,threshold) Example: --critical='temperature,.*,40'                                                                                               |

</TabItem>
<TabItem value="Node-Status-Global" label="Node-Status-Global">

| Option                   | Description                                                                                                                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter by name (regexp can be used).                                                                                                                                                             |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: ''). You can use the following variables: %{state}, %{status}, %{display}                                                  |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: '%{state} eq "enabled" and %{status} eq "yellow"'). You can use the following variables: %{state}, %{status}, %{display}   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{state} eq "enabled" and %{status} eq "red"'). You can use the following variables: %{state}, %{status}, %{display}     |
| --warning-* --critical-* | Thresholds. Can be: 'current-server-connections'.                                                                                                                                                |

</TabItem>
<TabItem value="Pool-Status-Global" label="Pool-Status-Global">

| Option                   | Description                                                                                                                                                                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter by name (regexp can be used).                                                                                                                                                                                                                      |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{status}, %{membersAllDisabled}, %{display}                                                                                                  |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: '%{membersAllDisabled} eq "no" and %{state} eq "enabled" and %{status} eq "yellow"'). You can use the following variables: %{state}, %{status}, %{membersAllDisabled}, %{display}   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{membersAllDisabled} eq "no" and %{state} eq "enabled" and %{status} eq "red"'). You can use the following variables: %{state}, %{status}, %{membersAllDisabled}, %{display}     |
| --unknown-member-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{status}, %{poolName}, %{nodeName}                                                                                                           |
| --warning-member-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{status}, %{poolName}, %{nodeName}                                                                                                           |
| --critical-member-status | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{status}, %{poolName}, %{nodeName}                                                                                                          |
| --warning-* --critical-* | Thresholds. Can be: 'current-server-connections', 'current-active-members', 'current-total-members'.                                                                                                                                                      |

</TabItem>
<TabItem value="Tmm-Usage" label="Tmm-Usage">

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
| --filter-counters      | Only display some counters (regexp can be used). Example : --filter-counters='^memory-usage$'                                                                                                                                                 |
| --filter-name          | Filter by TMM name (regexp can be used).                                                                                                                                                                                                      |
| --warning-*            | Warning threshold. Can be: 'cpu-1m', 'cpu-5m', 'memory-usage' (%), 'total-client-connections', 'current-client-connections', 'total-server-connections', 'current-server-connections'.                                                        |
| --critical-*           | Critical threshold. Can be: 'cpu-1m', 'cpu-5m', 'memory-usage' (%), 'total-client-connections', 'current-client-connections', 'total-server-connections', 'current-server-connections'.                                                       |

</TabItem>
<TabItem value="Trunk-Usage" label="Trunk-Usage">

| Option                      | Description                                                                                                                                                                                                                                   |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                 | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server              | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute           | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                  | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file             | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration             | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir             | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix          | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd      | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format          | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key             | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher          | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-name               | Filter by trunks name (regexp can be used).                                                                                                                                                                                                   |
| --units-traffic             | Units of thresholds for the traffic (Default: '%') ('%', 'b/s').                                                                                                                                                                              |
| --speed                     | Set trunk speed in Mbps (Default: sysTrunkOperBw). If not setand sysTrunkOperBw OID value is 0, percentage thresholds will not be applied on traffic metrics.                                                                                 |
| --add-interfaces            | Monitor trunk interfaces.                                                                                                                                                                                                                     |
| --unknown-status            | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                                                                                                                       |
| --warning-status            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                                                                                       |
| --critical-status           | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /uninitialized\|down/'). You can use the following variables: %{status}, %{display}                                                                      |
| --unknown-interface-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                                                                                                                       |
| --warning-interface-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                                                                                       |
| --critical-interface-status | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{display}                                                                                                                      |
| --warning-* --critical-*    | Thresholds. Can be: 'traffic-in', 'traffic-out', 'packets-error-in' (%), 'packets-error-out' (%), 'packets-drop-in' (%), 'packets-drop-out' (%), 'total-interfaces'.                                                                          |

</TabItem>
<TabItem value="Virtualserver-Status-Global" label="Virtualserver-Status-Global">

| Option                   | Description                                                                                                                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter by name (regexp can be used).                                                                                                                                                             |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: ''). You can use the following variables: %{state}, %{status}, %{display}                                                  |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: '%{state} eq "enabled" and %{status} eq "yellow"'). You can use the following variables: %{state}, %{status}, %{display}   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{state} eq "enabled" and %{status} eq "red"'). You can use the following variables: %{state}, %{status}, %{display}     |
| --warning-* --critical-* | Thresholds. Can be: 'current-client-connections'.                                                                                                                                                |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_f5_bigip_snmp.pl \
	--plugin=network::f5::bigip::snmp::plugin \
	--mode=pool-status \
	--help
```
