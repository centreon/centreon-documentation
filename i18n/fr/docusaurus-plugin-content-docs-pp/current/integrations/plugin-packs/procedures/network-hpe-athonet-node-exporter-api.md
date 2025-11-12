---
id: network-hpe-athonet-node-exporter-api
title: HPE Athonet w/ Prometheus API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du Connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **HPE Athonet w/ Prometheus API** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **HPE Athonet w/ Prometheus API** apporte un modèle d'hôte :

* **Net-HPE-Athonet-Node-Exporter-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-HPE-Athonet-Node-Exporter-Api-custom" label="Net-HPE-Athonet-Node-Exporter-Api-custom">

| Alias    | Modèle de service                                 | Description                               |
|:---------|:--------------------------------------------------|:------------------------------------------|
| Licenses | Net-HPE-Athonet-Node-Exporter-Licenses-Api-custom | Contrôle le statut des licences d'Athonet |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-HPE-Athonet-Node-Exporter-Api-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias | Modèle de service                             | Description                                                     |
|:------|:----------------------------------------------|:----------------------------------------------------------------|
| Chf   | Net-HPE-Athonet-Node-Exporter-Chf-Api-custom  | Contrôle la fonction *charging* d'Athonet.                      |
| Dra   | Net-HPE-Athonet-Node-Exporter-Dra-Api-custom  | Contrôle la fonction *diameter routing agent* d'Athonet.        |
| Eir   | Net-HPE-Athonet-Node-Exporter-Eir-Api-custom  | Contrôle la fonction equipment identity register d'Athonet      |
| Mme   | Net-HPE-Athonet-Node-Exporter-Mme-Api-custom  | Contrôle la fonction *mobility management entity* d'Athonet.    |
| Nrf   | Net-HPE-Athonet-Node-Exporter-Nrf-Api-custom  | Contrôle la fonction *network repository* d'Athonet.            |
| Pcf   | Net-HPE-Athonet-Node-Exporter-Pcf-Api-custom  | Contrôle la fonction *policy control* d'Athonet.                |
| Sgwc  | Net-HPE-Athonet-Node-Exporter-Sgwc-Api-custom | Contrôle la fonction *serving gateway control plane* d'Athonet. |
| Smf   | Net-HPE-Athonet-Node-Exporter-Smf-Api-custom  | Contrôle la fonction *session management* d'Athonet.            |
| Smsf  | Net-HPE-Athonet-Node-Exporter-Smsf-Api-custom | Contrôle la fonction *short message service* d'Athonet.         |
| Udm   | Net-HPE-Athonet-Node-Exporter-Udm-Api-custom  | Contrôle la fonction *unified data management* d'Athonet.       |
| Udr   | Net-HPE-Athonet-Node-Exporter-Udr-Api-custom  | Contrôle la fonction *unified data repository* d'Athonet.       |
| Upf   | Net-HPE-Athonet-Node-Exporter-Upf-Api-custom  | Contrôle la fonction *user plane* d'Athonet.                    |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Chf" label="Chf">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| chf.sessions.active.charging.count   | count |
| sbi-nf-registration-status           | N/A   |
| sbi.nf.registration.detected.count   | count |
| sbi.nf.registration.registered.count | count |
| sbi.nf.registration.suspended.count  | count |

</TabItem>
<TabItem value="Dra" label="Dra">

| Nom                                 | Unité |
|:------------------------------------|:------|
| diameter.connections.detected.count | count |
| diameter.connections.up.count       | count |
| diameter.connections.down.count     | count |
| diameter-connection-status          | N/A   |

</TabItem>
<TabItem value="Eir" label="Eir">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| clusters.detected.count                   | count |
| *clusters*~cluster.nodes.detected.count   | count |
| *clusters*~cluster.nodes.running.count    | count |
| *clusters*~cluster.nodes.notrunning.count | count |
| node-status                               | N/A   |
| diameter-connection-status                | N/A   |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Nom                     | Unité |
|:------------------------|:------|
| licenses.detected.count | count |
| licenses.valid.count    | count |
| licenses.invalid.count  | count |
| license-status          | N/A   |

</TabItem>
<TabItem value="Mme" label="Mme">

| Nom                                                | Unité |
|:---------------------------------------------------|:------|
| mme.imsi.tracked.count                             | count |
| mme.ue.registered.count                            | count |
| mme.enb.connections.active.count                   | count |
| mme.ue.connections.active.count                    | count |
| mme.enb.cells.count                                | count |
| interface-s1enb-status                             | N/A   |
| mme.license.ue.usage.count                         | count |
| mme.license.ue.free.count                          | count |
| mme.license.ue.percentage                          | %     |
| mme.license.enb.usage.count                        | count |
| mme.license.enb.free.count                         | count |
| mme.license.enb.percentage                         | %     |
| diameter-connection-status                         | N/A   |
| gtpc-connection-status                             | N/A   |
| *gtpc*#mme.gtpc.connection.tunnels.allocated.count | count |

</TabItem>
<TabItem value="Nrf" label="Nrf">

| Nom                                          | Unité |
|:---------------------------------------------|:------|
| clusters.detected.count                      | count |
| nf.registrations.detected.count              | count |
| nf.registrations.registered.count            | count |
| nf.registrations.suspended.count             | count |
| nf-registration-status                       | N/A   |
| *registrations*#nf.registration.last.seconds | s     |
| *clusters*~cluster.nodes.detected.count      | count |
| *clusters*~cluster.nodes.running.count       | count |
| *clusters*~cluster.nodes.notrunning.count    | count |
| node-status                                  | N/A   |

</TabItem>
<TabItem value="Pcf" label="Pcf">

| Nom                        | Unité |
|:---------------------------|:------|
| pcf.pdn.n7.connected.count | count |
| pcf.sessions.n5.count      | count |
| diameter-connection-status | N/A   |

</TabItem>
<TabItem value="Sgwc" label="Sgwc">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| sgwc.ue.count                            | count |
| sgwc.dfb.count                           | count |
| pfcp-node-status                         | N/A   |
| gtpc-connection-status                   | N/A   |
| *blacklist_nodes*#peer.blacklisted.count | count |

</TabItem>
<TabItem value="Smf" label="Smf">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| smf.sessions.count                       | count |
| smf.supi.count                           | count |
| sbi-nf-registration-status               | N/A   |
| sbi.nf.registration.detected.count       | count |
| sbi.nf.registration.registered.count     | count |
| sbi.nf.registration.suspended.count      | count |
| pfcp-node-status                         | N/A   |
| *blacklist_nodes*#peer.blacklisted.count | count |

</TabItem>
<TabItem value="Smsf" label="Smsf">

| Nom                        | Unité |
|:---------------------------|:------|
| smsf.sms.stored.count      | count |
| diameter-connection-status | N/A   |

</TabItem>
<TabItem value="Udm" label="Udm">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| clusters.detected.count                   | count |
| sbi-nf-registration-status                | N/A   |
| sbi.nf.registration.detected.count        | count |
| sbi.nf.registration.registered.count      | count |
| sbi.nf.registration.suspended.count       | count |
| *clusters*~cluster.nodes.detected.count   | count |
| *clusters*~cluster.nodes.running.count    | count |
| *clusters*~cluster.nodes.notrunning.count | count |
| node-status                               | N/A   |
| diameter-connection-status                | N/A   |

</TabItem>
<TabItem value="Udr" label="Udr">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| clusters.detected.count                   | count |
| udr.supi.change.last24h.percentage        | %     |
| sbi-nf-registration-status                | N/A   |
| sbi.nf.registration.detected.count        | count |
| sbi.nf.registration.registered.count      | count |
| sbi.nf.registration.suspended.count       | count |
| udr.license.supi.usage.count              | count |
| udr.license.supi.free.count               | count |
| udr.license.supi.percentage               | %     |
| *clusters*~cluster.nodes.detected.count   | count |
| *clusters*~cluster.nodes.running.count    | count |
| *clusters*~cluster.nodes.notrunning.count | count |
| node-status                               | N/A   |

</TabItem>
<TabItem value="Upf" label="Upf">

| Nom                           | Unité |
|:------------------------------|:------|
| upf.pfcp.nodes.detected.count | count |
| upf.sessions.count            | count |
| upf.gtpu.interfaces.count     | count |
| upf.ip.interfaces.count       | count |
| upf.dnn.count                 | count |
| upf-pfcp-node-status          | N/A   |

</TabItem>
</Tabs>

## Prérequis

Le Collecteur Centreon doit être en mesure d'executer des requêtes HTTP(S) vers le Node Exporter Prometheus des serveurs à superviser.

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
dnf install centreon-pack-network-hpe-athonet-node-exporter-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-hpe-athonet-node-exporter-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-hpe-athonet-node-exporter-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-hpe-athonet-node-exporter-api
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **HPE Athonet w/ Prometheus API**
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
dnf install centreon-plugin-Network-Hp-Athonet-Node-Exporter-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Hp-Athonet-Node-Exporter-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-hp-athonet-node-exporter-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Hp-Athonet-Node-Exporter-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-HPE-Athonet-Node-Exporter-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                  | Description                                                                                                                                        | Valeur par défaut       | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| ATHONETAPIUSERNAME     | Define the username for authentication                                                                                                             | login                   |      X      |
| ATHONETAPIPASSWORD     | Define the password for authentication                                                                                                             | password                |      X      |
| ATHONETAPIPROTOCOL     | Define https if needed (default: `https`)                                                                                                          | https                   |             |
| ATHONETAPIPORT         | API port (default: 443)                                                                                                                            | 443                     |             |
| ATHONETAPIURLPATH      | API url path (default: `/core/prometheus/api/v1`)                                                                                                  | /core/prometheus/api/v1 |             |
| ATHONETAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                         |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Chf" label="Chf">

| Macro                               | Description                                                                                                                                             | Valeur par défaut           | Obligatoire |
|:------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERCOUNTERSBLOCK                 | Only display some counters blocks.                                                                                                                      |                             |             |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                               |                             |             |
| UNKNOWNSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}                                           |                             |             |
| WARNINGSBINFREGISTRATIONDETECTED    | Threshold                                                                                                                                               |                             |             |
| CRITICALSBINFREGISTRATIONDETECTED   | Threshold                                                                                                                                               |                             |             |
| WARNINGSBINFREGISTRATIONREGISTERED  | Threshold                                                                                                                                               |                             |             |
| CRITICALSBINFREGISTRATIONREGISTERED | Threshold                                                                                                                                               |                             |             |
| CRITICALSBINFREGISTRATIONSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /suspended/i'). You can use the following variables: %\{status\} | %\{status\} =~ /suspended/i |             |
| WARNINGSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                                           |                             |             |
| WARNINGSBINFREGISTRATIONSUSPENDED   | Threshold                                                                                                                                               |                             |             |
| CRITICALSBINFREGISTRATIONSUSPENDED  | Threshold                                                                                                                                               |                             |             |
| WARNINGSESSIONSACTIVECHARGING       | Threshold                                                                                                                                               |                             |             |
| CRITICALSESSIONSACTIVECHARGING      | Threshold.  =cut                                                                                                                                        |                             |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).        | --verbose                   |             |

</TabItem>
<TabItem value="Dra" label="Dra">

| Macro                               | Description                                                                                                                                                                           | Valeur par défaut      | Obligatoire |
|:------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERCOUNTERSBLOCK                 | Only display some counters blocks.                                                                                                                                                    |                        |             |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                             |                        |             |
| FILTERORIGINHOST                    | Filter diameter peers by origin host                                                                                                                                                  |                        |             |
| FILTERSTACK                         | Filter diameter peers by stack                                                                                                                                                        |                        |             |
| UNKNOWNDIAMETERCONNECTIONSTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |                        |             |
| WARNINGDIAMETERCONNECTIONSDETECTED  | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALDIAMETERCONNECTIONSDETECTED | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGDIAMETERCONNECTIONSDOWN      | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALDIAMETERCONNECTIONSDOWN     | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALDIAMETERCONNECTIONSTATUS    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}` | %\{status\} =~ /down/i |             |
| WARNINGDIAMETERCONNECTIONSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |                        |             |
| WARNINGDIAMETERCONNECTIONSUP        | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALDIAMETERCONNECTIONSUP       | Thresholds                                                                                                                                                                            |                        |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                      | --verbose              |             |

</TabItem>
<TabItem value="Eir" label="Eir">

| Macro                            | Description                                                                                                                                                                          | Valeur par défaut            | Obligatoire |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERCOUNTERSBLOCK              | Only display some counters blocks.                                                                                                                                                   |                              |             |
| FILTERCOUNTERS                   | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                            |                              |             |
| FILTERCLUSTERREPOSITORY          | Filter clusters by repository name                                                                                                                                                   |                              |             |
| UNKNOWNNODESTATUS                | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{repository\}, %\{node\}                                            |                              |             |
| UNKNOWNDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                           |                              |             |
| WARNINGCLUSTERNODESDETECTED      | Thresholds                                                                                                                                                                           |                              |             |
| CRITICALCLUSTERNODESDETECTED     | Thresholds                                                                                                                                                                           |                              |             |
| WARNINGCLUSTERNODESNOTRUNNING    | Thresholds                                                                                                                                                                           |                              |             |
| CRITICALCLUSTERNODESNOTRUNNING   | Thresholds                                                                                                                                                                           |                              |             |
| WARNINGCLUSTERNODESRUNNING       | Thresholds                                                                                                                                                                           |                              |             |
| CRITICALCLUSTERNODESRUNNING      | Thresholds                                                                                                                                                                           |                              |             |
| WARNINGCLUSTERSDETECTED          | Thresholds                                                                                                                                                                           |                              |             |
| CRITICALCLUSTERSDETECTED         | Thresholds                                                                                                                                                                           |                              |             |
| CRITICALDIAMETERCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /down/i'). You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}      | %\{status\} =~ /down/i       |             |
| WARNINGDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                           |                              |             |
| CRITICALNODESTATUS               | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /notRunning/i'). You can use the following variables: %\{status\}, %\{repository\}, %\{node\} | %\{status\} =~ /notRunning/i |             |
| WARNINGNODESTATUS                | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{repository\}, %\{node\}                                            |                              |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                     | --verbose                    |             |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro                    | Description                                                                                                                                                            | Valeur par défaut         | Obligatoire |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:-----------:|
| FILTERTARGETTYPE         | Filter licenses by target type                                                                                                                                         |                           |             |
| UNKNOWNLICENSESTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{targetType\}                                         |                           |             |
| WARNINGLICENSESDETECTED  | Thresholds                                                                                                                                                             |                           |             |
| CRITICALLICENSESDETECTED | Thresholds                                                                                                                                                             |                           |             |
| WARNINGLICENSESINVALID   | Thresholds                                                                                                                                                             |                           |             |
| CRITICALLICENSESINVALID  | Thresholds                                                                                                                                                             |                           |             |
| CRITICALLICENSESTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /invalid/i'). You can use the following variables: %\{status\}, %\{targetType\} | %\{status\} =~ /invalid/i |             |
| WARNINGLICENSESTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{targetType\}                                         |                           |             |
| WARNINGLICENSESVALID     | Thresholds                                                                                                                                                             |                           |             |
| CRITICALLICENSESVALID    | Thresholds                                                                                                                                                             |                           |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                       | --verbose                 |             |

</TabItem>
<TabItem value="Mme" label="Mme">

| Macro                            | Description                                                                                                                                                                           | Valeur par défaut      | Obligatoire |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERCOUNTERSBLOCK              | Only display some counters blocks.                                                                                                                                                    |                        |             |
| FILTERCOUNTERS                   | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                             |                        |             |
| UNKNOWNINTERFACES1ENBSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{enbId\}`                                                         |                        |             |
| UNKNOWNDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |                        |             |
| UNKNOWNGTPCCONNECTIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                      |                        |             |
| CRITICALDIAMETERCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}` | %\{status\} =~ /down/i |             |
| WARNINGDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |                        |             |
| WARNINGENBCELLS                  | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALENBCELLS                 | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGENBCONNECTIONSACTIVE      | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALENBCONNECTIONSACTIVE     | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGGTPCALLOCATEDTUNNELS      | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALGTPCALLOCATEDTUNNELS     | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALGTPCCONNECTIONSTATUS     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}` | %\{status\} =~ /down/i |             |
| WARNINGGTPCCONNECTIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                      |                        |             |
| WARNINGIMSITRACKED               | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALIMSITRACKED              | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALINTERFACES1ENBSTATUS     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{enbId\}`                    | %\{status\} =~ /down/i |             |
| WARNINGINTERFACES1ENBSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{enbId\}`                                                         |                        |             |
| WARNINGLICENSEENBUSAGE           | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALLICENSEENBUSAGE          | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGLICENSEENBUSAGEFREE       | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALLICENSEENBUSAGEFREE      | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGLICENSEENBUSAGEPRCT       | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALLICENSEENBUSAGEPRCT      | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGLICENSEUEUSAGE            | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALLICENSEUEUSAGE           | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGLICENSEUEUSAGEFREE        | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALLICENSEUEUSAGEFREE       | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGLICENSEUEUSAGEPRCT        | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALLICENSEUEUSAGEPRCT       | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGUECONNECTIONSACTIVE       | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALUECONNECTIONSACTIVE      | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGUEREGISTERED              | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALUEREGISTERED             | Thresholds                                                                                                                                                                            |                        |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                      | --verbose              |             |

</TabItem>
<TabItem value="Nrf" label="Nrf">

| Macro                             | Description                                                                                                                                                                                | Valeur par défaut            | Obligatoire |
|:----------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERCOUNTERSBLOCK               | Only display some counters blocks.                                                                                                                                                         |                              |             |
| FILTERCOUNTERS                    | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                  |                              |             |
| FILTERCLUSTERREPOSITORY           | Filter clusters by repository name                                                                                                                                                         |                              |             |
| FILTERREGISTRATIONNFTYPE          | Filter registrations by network function type                                                                                                                                              |                              |             |
| UNKNOWNNODESTATUS                 | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`                                            |                              |             |
| UNKNOWNNFREGISTRATIONSTATUS       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{nfType\}`                                                             |                              |             |
| WARNINGCLUSTERNODESDETECTED       | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERNODESDETECTED      | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGCLUSTERNODESNOTRUNNING     | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERNODESNOTRUNNING    | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGCLUSTERNODESRUNNING        | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERNODESRUNNING       | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGCLUSTERSDETECTED           | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERSDETECTED          | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGNFREGISTRATIONLAST         | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALNFREGISTRATIONLAST        | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGNFREGISTRATIONSDETECTED    | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALNFREGISTRATIONSDETECTED   | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGNFREGISTRATIONSREGISTERED  | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALNFREGISTRATIONSREGISTERED | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGNFREGISTRATIONSSUSPENDED   | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALNFREGISTRATIONSSUSPENDED  | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALNFREGISTRATIONSTATUS      | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`, `%\{nfType\}`                   | %\{status\} =~ /suspended/i  |             |
| WARNINGNFREGISTRATIONSTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{nfType\}`                                                             |                              |             |
| CRITICALNODESTATUS                | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /notRunning/i`). You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}` | %\{status\} =~ /notRunning/i |             |
| WARNINGNODESTATUS                 | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`                                            |                              |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                           | --verbose                    |             |

</TabItem>
<TabItem value="Pcf" label="Pcf">

| Macro                            | Description                                                                                                                                                                     | Valeur par défaut      | Obligatoire |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERCOUNTERSBLOCK              | Only display some counters blocks.                                                                                                                                              |                        |             |
| FILTERCOUNTERS                   | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                       |                        |             |
| UNKNOWNDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                      |                        |             |
| CRITICALDIAMETERCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /down/i'). You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\} | %\{status\} =~ /down/i |             |
| WARNINGDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                      |                        |             |
| WARNINGPDNN7CONNECTED            | Thresholds                                                                                                                                                                      |                        |             |
| CRITICALPDNN7CONNECTED           | Thresholds                                                                                                                                                                      |                        |             |
| WARNINGSESSIONSN5                | Thresholds                                                                                                                                                                      |                        |             |
| CRITICALSESSIONSN5               | Thresholds                                                                                                                                                                      |                        |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                | --verbose              |             |

</TabItem>
<TabItem value="Sgwc" label="Sgwc">

| Macro                        | Description                                                                                                                                                                                           | Valeur par défaut            | Obligatoire |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERCOUNTERSBLOCK          | Only display some counters blocks.                                                                                                                                                                    |                              |             |
| FILTERCOUNTERS               | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                             |                              |             |
| UNKNOWNPFCPNODESTATUS        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                                      |                              |             |
| UNKNOWNGTPCCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                                      |                              |             |
| UNKNOWNBLACKLISTNODESTATUS   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`                                            |                              |             |
| CRITICALBLACKLISTNODESTATUS  | Define the conditions to match for the status to be CRITICAL (default: `%\{isBlacklisted\} =~ /yes/i`). You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}` | %\{isBlacklisted\} =~ /yes/i |             |
| WARNINGBLACKLISTNODESTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`                                            |                              |             |
| WARNINGDFB                   | Thresholds                                                                                                                                                                                            |                              |             |
| CRITICALDFB                  | Thresholds                                                                                                                                                                                            |                              |             |
| CRITICALGTPCCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                 | %\{status\} =~ /down/i       |             |
| WARNINGGTPCCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                                      |                              |             |
| CRITICALPFCPNODESTATUS       | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                 | %\{status\} =~ /down/i       |             |
| WARNINGPFCPNODESTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                                      |                              |             |
| WARNINGUE                    | Thresholds                                                                                                                                                                                            |                              |             |
| CRITICALUE                   | Thresholds                                                                                                                                                                                            |                              |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                      | --verbose                    |             |

</TabItem>
<TabItem value="Smf" label="Smf">

| Macro                               | Description                                                                                                                                                                                           | Valeur par défaut            | Obligatoire |
|:------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERCOUNTERSBLOCK                 | Only display some counters blocks.                                                                                                                                                                    |                              |             |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                             |                              |             |
| UNKNOWNSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`                                                                                       |                              |             |
| UNKNOWNPFCPNODESTATUS               | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                                      |                              |             |
| UNKNOWNBLACKLISTNODESTATUS          | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`                                            |                              |             |
| CRITICALBLACKLISTNODESTATUS         | Define the conditions to match for the status to be CRITICAL (default: `%\{isBlacklisted\} =~ /yes/i`). You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}` | %\{isBlacklisted\} =~ /yes/i |             |
| WARNINGBLACKLISTNODESTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`                                            |                              |             |
| CRITICALPFCPNODESTATUS              | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                 | %\{status\} =~ /down/i       |             |
| WARNINGPFCPNODESTATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                                      |                              |             |
| WARNINGSBINFREGISTRATIONDETECTED    | Thresholds                                                                                                                                                                                            |                              |             |
| CRITICALSBINFREGISTRATIONDETECTED   | Thresholds                                                                                                                                                                                            |                              |             |
| WARNINGSBINFREGISTRATIONREGISTERED  | Thresholds                                                                                                                                                                                            |                              |             |
| CRITICALSBINFREGISTRATIONREGISTERED | Thresholds                                                                                                                                                                                            |                              |             |
| CRITICALSBINFREGISTRATIONSTATUS     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`                                             | %\{status\} =~ /suspended/i  |             |
| WARNINGSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`                                                                                       |                              |             |
| WARNINGSBINFREGISTRATIONSUSPENDED   | Thresholds                                                                                                                                                                                            |                              |             |
| CRITICALSBINFREGISTRATIONSUSPENDED  | Thresholds                                                                                                                                                                                            |                              |             |
| WARNINGSESSIONS                     | Thresholds                                                                                                                                                                                            |                              |             |
| CRITICALSESSIONS                    | Thresholds                                                                                                                                                                                            |                              |             |
| WARNINGSUPI                         | Thresholds                                                                                                                                                                                            |                              |             |
| CRITICALSUPI                        | Thresholds                                                                                                                                                                                            |                              |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                      | --verbose                    |             |

</TabItem>
<TabItem value="Smsf" label="Smsf">

| Macro                            | Description                                                                                                                                                                           | Valeur par défaut      | Obligatoire |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERCOUNTERSBLOCK              | Only display some counters blocks.                                                                                                                                                    |                        |             |
| FILTERCOUNTERS                   | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                             |                        |             |
| UNKNOWNDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |                        |             |
| CRITICALDIAMETERCONNECTIONSTATUS | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}` | %\{status\} =~ /down/i |             |
| WARNINGDIAMETERCONNECTIONSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |                        |             |
| WARNINGSMSSTORED                 | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALSMSSTORED                | Thresholds                                                                                                                                                                            |                        |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                      | --verbose              |             |

</TabItem>
<TabItem value="Udm" label="Udm">

| Macro                               | Description                                                                                                                                                                                | Valeur par défaut            | Obligatoire |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERCOUNTERSBLOCK                 | Only display some counters blocks.                                                                                                                                                         |                              |             |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                  |                              |             |
| FILTERCLUSTERREPOSITORY             | Filter clusters by repository name                                                                                                                                                         |                              |             |
| UNKNOWNNODESTATUS                   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`                                            |                              |             |
| UNKNOWNDIAMETERCONNECTIONSTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                           |                              |             |
| UNKNOWNSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`                                                                            |                              |             |
| WARNINGCLUSTERNODESDETECTED         | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERNODESDETECTED        | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGCLUSTERNODESNOTRUNNING       | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERNODESNOTRUNNING      | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGCLUSTERNODESRUNNING          | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERNODESRUNNING         | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGCLUSTERSDETECTED             | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERSDETECTED            | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALDIAMETERCONNECTIONSTATUS    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`      | %\{status\} =~ /down/i       |             |
| WARNINGDIAMETERCONNECTIONSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                           |                              |             |
| CRITICALNODESTATUS                  | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /notRunning/i`). You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}` | %\{status\} =~ /notRunning/i |             |
| WARNINGNODESTATUS                   | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`                                            |                              |             |
| WARNINGSBINFREGISTRATIONDETECTED    | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALSBINFREGISTRATIONDETECTED   | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGSBINFREGISTRATIONREGISTERED  | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALSBINFREGISTRATIONREGISTERED | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALSBINFREGISTRATIONSTATUS     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`                                  | %\{status\} =~ /suspended/i  |             |
| WARNINGSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`                                                                            |                              |             |
| WARNINGSBINFREGISTRATIONSUSPENDED   | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALSBINFREGISTRATIONSUSPENDED  | Thresholds                                                                                                                                                                                 |                              |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                           | --verbose                    |             |

</TabItem>
<TabItem value="Udr" label="Udr">

| Macro                               | Description                                                                                                                                                                                | Valeur par défaut            | Obligatoire |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERCOUNTERSBLOCK                 | Only display some counters blocks.                                                                                                                                                         |                              |             |
| FILTERCOUNTERS                      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                  |                              |             |
| FILTERCLUSTERREPOSITORY             | Filter clusters by repository name                                                                                                                                                         |                              |             |
| UNKNOWNNODESTATUS                   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`                                            |                              |             |
| UNKNOWNSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`                                                                            |                              |             |
| WARNINGCLUSTERNODESDETECTED         | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERNODESDETECTED        | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGCLUSTERNODESNOTRUNNING       | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERNODESNOTRUNNING      | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGCLUSTERNODESRUNNING          | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERNODESRUNNING         | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGCLUSTERSDETECTED             | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALCLUSTERSDETECTED            | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGLICENSESUPIUSAGE             | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALLICENSESUPIUSAGE            | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGLICENSESUPIUSAGEFREE         | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALLICENSESUPIUSAGEFREE        | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGLICENSESUPIUSAGEPRCT         | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALLICENSESUPIUSAGEPRCT        | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALNODESTATUS                  | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /notRunning/i`). You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}` | %\{status\} =~ /notRunning/i |             |
| WARNINGNODESTATUS                   | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`                                            |                              |             |
| WARNINGSBINFREGISTRATIONDETECTED    | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALSBINFREGISTRATIONDETECTED   | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGSBINFREGISTRATIONREGISTERED  | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALSBINFREGISTRATIONREGISTERED | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALSBINFREGISTRATIONSTATUS     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`                                  | %\{status\} =~ /suspended/i  |             |
| WARNINGSBINFREGISTRATIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`                                                                            |                              |             |
| WARNINGSBINFREGISTRATIONSUSPENDED   | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALSBINFREGISTRATIONSUSPENDED  | Thresholds                                                                                                                                                                                 |                              |             |
| WARNINGSUPICHANGELAST24H            | Thresholds                                                                                                                                                                                 |                              |             |
| CRITICALSUPICHANGELAST24H           | Thresholds                                                                                                                                                                                 |                              |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                           | --verbose                    |             |

</TabItem>
<TabItem value="Upf" label="Upf">

| Macro                        | Description                                                                                                                                                                           | Valeur par défaut      | Obligatoire |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERCOUNTERSBLOCK          | Only display some counters blocks.                                                                                                                                                    |                        |             |
| FILTERCOUNTERS               | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                             |                        |             |
| UNKNOWNUPFPFCPNODESTATUS     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                      |                        |             |
| WARNINGUPFDNN                | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALUPFDNN               | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGUPFFPCFNODESDETECTED  | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALUPFFPCFNODESDETECTED | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGUPFGTPUINTERFACES     | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALUPFGTPUINTERFACES    | Thresholds                                                                                                                                                                            |                        |             |
| WARNINGUPFIPINTERFACES       | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALUPFIPINTERFACES      | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALUPFPFCPNODESTATUS    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}` | %\{status\} =~ /down/i |             |
| WARNINGUPFPFCPNODESTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`                                      |                        |             |
| WARNINGUPFSESSIONS           | Thresholds                                                                                                                                                                            |                        |             |
| CRITICALUPFSESSIONS          | Thresholds                                                                                                                                                                            |                        |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                      | --verbose              |             |

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
/usr/lib/centreon/plugins/centreon_hp_athonet_node_exporter_api.pl \
	--plugin=network::hp::athonet::nodeexporter::api::plugin \
	--custommode=api \
	--mode=upf \
	--hostname=10.0.0.1 \
	--url-path='/core/prometheus/api/v1' \
	--port='443' \
	--proto='https' \
	--api-username='login' \
	--api-password='password'  \
	--filter-counters-block='' \
	--filter-counters='' \
	--unknown-upf-pfcp-node-status='' \
	--warning-upf-pfcp-node-status='' \
	--critical-upf-pfcp-node-status='%\{status\} =~ /down/i' \
	--warning-upf-fpcf-nodes-detected='' \
	--critical-upf-fpcf-nodes-detected='' \
	--warning-upf-sessions='' \
	--critical-upf-sessions='' \
	--warning-upf-gtpu-interfaces='' \
	--critical-upf-gtpu-interfaces='' \
	--warning-upf-ip-interfaces='' \
	--critical-upf-ip-interfaces='' \
	--warning-upf-dnn='' \
	--critical-upf-dnn='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: fpcf nodes detected: 25250 sessions: 4012 GTP-U interfaces: 55083 IP interfaces: 55599 DNN: 26887 All PFCP nodes are ok | 'upf.pfcp.nodes.detected.count'=25250;;;0; 'upf.sessions.count'=4012;;;0; 'upf.gtpu.interfaces.count'=55083;;;0; 'upf.ip.interfaces.count'=55599;;;0; 'upf.dnn.count'=26887;;;0; 

```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_athonet_node_exporter_api.pl \
	--plugin=network::hp::athonet::nodeexporter::api::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                             | Modèle de service associé                         |
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| chf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/chf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Chf-Api-custom      |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/cpu.pm)]                  | Not used in this Monitoring Connector             |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/cpudetailed.pm)] | Not used in this Monitoring Connector             |
| dra [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/dra.pm)]                      | Net-HPE-Athonet-Node-Exporter-Dra-Api-custom      |
| eir [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/eir.pm)]                      | Net-HPE-Athonet-Node-Exporter-Eir-Api-custom      |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/interfaces.pm)]    | Not used in this Monitoring Connector             |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/licenses.pm)]            | Net-HPE-Athonet-Node-Exporter-Licenses-Api-custom |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/load.pm)]                | Not used in this Monitoring Connector             |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/memory.pm)]            | Not used in this Monitoring Connector             |
| mme [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/mme.pm)]                      | Net-HPE-Athonet-Node-Exporter-Mme-Api-custom      |
| nrf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/nrf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Nrf-Api-custom      |
| pcf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/pcf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Pcf-Api-custom      |
| sgwc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/sgwc.pm)]                    | Net-HPE-Athonet-Node-Exporter-Sgwc-Api-custom     |
| smf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/smf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Smf-Api-custom      |
| smsf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/smsf.pm)]                    | Net-HPE-Athonet-Node-Exporter-Smsf-Api-custom     |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/storage.pm)]          | Not used in this Monitoring Connector             |
| udm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/udm.pm)]                      | Net-HPE-Athonet-Node-Exporter-Udm-Api-custom      |
| udr [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/udr.pm)]                      | Net-HPE-Athonet-Node-Exporter-Udr-Api-custom      |
| upf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/athonet/nodeexporter/api/mode/upf.pm)]                      | Net-HPE-Athonet-Node-Exporter-Upf-Api-custom      |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/prometheus/exporters/nodeexporter/mode/uptime.pm)]            | Not used in this Monitoring Connector             |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeframe                                | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --step                                     | Set the step of the metric query (examples: `30s`, `1m`, `15m`, C\<1hC\<).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --hostname                                 | Prometheus hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --url-path                                 | API url path (default: `/core/prometheus/api/v1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --port                                     | API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Define https if needed (default: `https`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --credentials                              | Specify this option if you access the API with authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --username                                 | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --password                                 | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --basic                                    | Specify this option if you access the API over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access the API over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --header                                   | Set HTTP header (can be multiple, example: --header='Authorization:Bearer ABCD')  Useful to access Prometheus API hosted in a specific environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --api-backend                              | Define the backend for authentication (default: `local`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | Define the username for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-password                             | Define the password for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Chf" label="Chf">

| Option                                    | Description                                                                                                                                             |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-sbi-nf-registration-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}                                           |
| --warning-sbi-nf-registration-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                                           |
| --critical-sbi-nf-registration-status     | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /suspended/i'). You can use the following variables: %\{status\} |
| --warning-sbi-nf-registration-detected    | Threshold.                                                                                                                                              |
| --critical-sbi-nf-registration-detected   | Threshold.                                                                                                                                              |
| --warning-sbi-nf-registration-registered  | Threshold.                                                                                                                                              |
| --critical-sbi-nf-registration-registered | Threshold.                                                                                                                                              |
| --warning-sbi-nf-registration-suspended   | Threshold.                                                                                                                                              |
| --critical-sbi-nf-registration-suspended  | Threshold.                                                                                                                                              |
| --warning-sessions-active-charging        | Threshold.                                                                                                                                              |
| --critical-sessions-active-charging       | Threshold.  =cut                                                                                                                                        |

</TabItem>
<TabItem value="Dra" label="Dra">

| Option                                   | Description                                                                                                                                                                           |
|:-----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-origin-host                     | Filter diameter peers by origin host.                                                                                                                                                 |
| --filter-stack                           | Filter diameter peers by stack.                                                                                                                                                       |
| --unknown-diameter-connection-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |
| --warning-diameter-connection-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`                                      |
| --critical-diameter-connection-status    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}` |
| --warning-diameter-connections-detected  | Thresholds.                                                                                                                                                                           |
| --critical-diameter-connections-detected | Thresholds.                                                                                                                                                                           |
| --warning-diameter-connections-up        | Thresholds.                                                                                                                                                                           |
| --critical-diameter-connections-up       | Thresholds.                                                                                                                                                                           |
| --warning-diameter-connections-down      | Thresholds.                                                                                                                                                                           |
| --critical-diameter-connections-down     | Thresholds.                                                                                                                                                                           |

</TabItem>
<TabItem value="Eir" label="Eir">

| Option                                | Description                                                                                                                                                                          |
|:--------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-repository           | Filter clusters by repository name.                                                                                                                                                  |
| --unknown-node-status                 | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{repository\}, %\{node\}                                            |
| --warning-node-status                 | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{repository\}, %\{node\}                                            |
| --critical-node-status                | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /notRunning/i'). You can use the following variables: %\{status\}, %\{repository\}, %\{node\} |
| --unknown-diameter-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                           |
| --warning-diameter-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                           |
| --critical-diameter-connection-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /down/i'). You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}      |
| --warning-clusters-detected           | Thresholds.                                                                                                                                                                          |
| --critical-clusters-detected          | Thresholds.                                                                                                                                                                          |
| --warning-cluster-nodes-detected      | Thresholds.                                                                                                                                                                          |
| --critical-cluster-nodes-detected     | Thresholds.                                                                                                                                                                          |
| --warning-cluster-nodes-running       | Thresholds.                                                                                                                                                                          |
| --critical-cluster-nodes-running      | Thresholds.                                                                                                                                                                          |
| --warning-cluster-nodes-notrunning    | Thresholds.                                                                                                                                                                          |
| --critical-cluster-nodes-notrunning   | Thresholds.                                                                                                                                                                          |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option                       | Description                                                                                                                                                            |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-target-type         | Filter licenses by target type.                                                                                                                                        |
| --unknown-license-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{targetType\}                                         |
| --warning-license-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{targetType\}                                         |
| --critical-license-status    | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /invalid/i'). You can use the following variables: %\{status\}, %\{targetType\} |
| --warning-licenses-detected  | Thresholds.                                                                                                                                                            |
| --critical-licenses-detected | Thresholds.                                                                                                                                                            |
| --warning-licenses-valid     | Thresholds.                                                                                                                                                            |
| --critical-licenses-valid    | Thresholds.                                                                                                                                                            |
| --warning-licenses-invalid   | Thresholds.                                                                                                                                                            |
| --critical-licenses-invalid  | Thresholds.                                                                                                                                                            |

</TabItem>
<TabItem value="Mme" label="Mme">

| Option                                | Description                                                                                                                                                                            |
|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-interface-s1enb-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{enbId\}`.                                                         |
| --warning-interface-s1enb-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{enbId\}`.                                                         |
| --critical-interface-s1enb-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{enbId\}`.                    |
| --unknown-diameter-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                      |
| --warning-diameter-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                      |
| --critical-diameter-connection-status | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`. |
| --unknown-gtpc-connection-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                      |
| --warning-gtpc-connection-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                      |
| --critical-gtpc-connection-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`. |
| --warning-imsi-tracked                | Thresholds.                                                                                                                                                                            |
| --critical-imsi-tracked               | Thresholds.                                                                                                                                                                            |
| --warning-ue-registered               | Thresholds.                                                                                                                                                                            |
| --critical-ue-registered              | Thresholds.                                                                                                                                                                            |
| --warning-enb-connections-active      | Thresholds.                                                                                                                                                                            |
| --critical-enb-connections-active     | Thresholds.                                                                                                                                                                            |
| --warning-ue-connections-active       | Thresholds.                                                                                                                                                                            |
| --critical-ue-connections-active      | Thresholds.                                                                                                                                                                            |
| --warning-enb-cells                   | Thresholds.                                                                                                                                                                            |
| --critical-enb-cells                  | Thresholds.                                                                                                                                                                            |
| --warning-license-ue-usage            | Thresholds.                                                                                                                                                                            |
| --critical-license-ue-usage           | Thresholds.                                                                                                                                                                            |
| --warning-license-ue-usage-free       | Thresholds.                                                                                                                                                                            |
| --critical-license-ue-usage-free      | Thresholds.                                                                                                                                                                            |
| --warning-license-ue-usage-prct       | Thresholds.                                                                                                                                                                            |
| --critical-license-ue-usage-prct      | Thresholds.                                                                                                                                                                            |
| --warning-license-enb-usage           | Thresholds.                                                                                                                                                                            |
| --critical-license-enb-usage          | Thresholds.                                                                                                                                                                            |
| --warning-license-enb-usage-free      | Thresholds.                                                                                                                                                                            |
| --critical-license-enb-usage-free     | Thresholds.                                                                                                                                                                            |
| --warning-license-enb-usage-prct      | Thresholds.                                                                                                                                                                            |
| --critical-license-enb-usage-prct     | Thresholds.                                                                                                                                                                            |
| --warning-gtpc-allocated-tunnels      | Thresholds.                                                                                                                                                                            |
| --critical-gtpc-allocated-tunnels     | Thresholds.                                                                                                                                                                            |

</TabItem>
<TabItem value="Nrf" label="Nrf">

| Option                                 | Description                                                                                                                                                                                 |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-repository            | Filter clusters by repository name.                                                                                                                                                         |
| --filter-registration-nftype           | Filter registrations by network function type.                                                                                                                                              |
| --unknown-node-status                  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --warning-node-status                  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --critical-node-status                 | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /notRunning/i`). You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`. |
| --unknown-nf-registration-status       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{nfType\}`.                                                             |
| --warning-nf-registration-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{nfType\}`.                                                             |
| --critical-nf-registration-status      | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`, `%\{nfType\}`.                   |
| --warning-clusters-detected            | Thresholds.                                                                                                                                                                                 |
| --critical-clusters-detected           | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-detected       | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-detected      | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-running        | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-running       | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-notrunning     | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-notrunning    | Thresholds.                                                                                                                                                                                 |
| --warning-nf-registration-last         | Thresholds.                                                                                                                                                                                 |
| --critical-nf-registration-last        | Thresholds.                                                                                                                                                                                 |
| --warning-nf-registrations-detected    | Thresholds.                                                                                                                                                                                 |
| --critical-nf-registrations-detected   | Thresholds.                                                                                                                                                                                 |
| --warning-nf-registrations-registered  | Thresholds.                                                                                                                                                                                 |
| --critical-nf-registrations-registered | Thresholds.                                                                                                                                                                                 |
| --warning-nf-registrations-suspended   | Thresholds.                                                                                                                                                                                 |
| --critical-nf-registrations-suspended  | Thresholds.                                                                                                                                                                                 |

</TabItem>
<TabItem value="Pcf" label="Pcf">

| Option                                | Description                                                                                                                                                                     |
|:--------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-diameter-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                      |
| --warning-diameter-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\}                                      |
| --critical-diameter-connection-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /down/i'). You can use the following variables: %\{status\}, %\{originHost\}, %\{stack\} |
| --warning-pdn-n7-connected            | Thresholds.                                                                                                                                                                     |
| --critical-pdn-n7-connected           | Thresholds.                                                                                                                                                                     |
| --warning-sessions-n5                 | Thresholds.                                                                                                                                                                     |
| --critical-sessions-n5                | Thresholds.                                                                                                                                                                     |

</TabItem>
<TabItem value="Sgwc" label="Sgwc">

| Option                            | Description                                                                                                                                                                                            |
|:----------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-pfcp-node-status        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --warning-pfcp-node-status        | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --critical-pfcp-node-status       | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                 |
| --unknown-gtpc-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --warning-gtpc-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --critical-gtpc-connection-status | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                 |
| --unknown-blacklist-node-status   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`.                                            |
| --warning-blacklist-node-status   | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`.                                            |
| --critical-blacklist-node-status  | Define the conditions to match for the status to be CRITICAL (default: `%\{isBlacklisted\} =~ /yes/i`). You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`. |
| --warning-ue                      | Thresholds.                                                                                                                                                                                            |
| --critical-ue                     | Thresholds.                                                                                                                                                                                            |
| --warning-dfb                     | Thresholds.                                                                                                                                                                                            |
| --critical-dfb                    | Thresholds.                                                                                                                                                                                            |

</TabItem>
<TabItem value="Smf" label="Smf">

| Option                                    | Description                                                                                                                                                                                            |
|:------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-sbi-nf-registration-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`.                                                                                       |
| --warning-sbi-nf-registration-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`.                                                                                       |
| --critical-sbi-nf-registration-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`.                                             |
| --unknown-pfcp-node-status                | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --warning-pfcp-node-status                | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                                      |
| --critical-pfcp-node-status               | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                 |
| --unknown-blacklist-node-status           | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`.                                            |
| --warning-blacklist-node-status           | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`.                                            |
| --critical-blacklist-node-status          | Define the conditions to match for the status to be CRITICAL (default: `%\{isBlacklisted\} =~ /yes/i`). You can use the following variables: `%\{isBlacklisted\}`, `%\{remoteIP\}`, `%\{targetType\}`. |
| --warning-sessions                        | Thresholds.                                                                                                                                                                                            |
| --critical-sessions                       | Thresholds.                                                                                                                                                                                            |
| --warning-supi                            | Thresholds.                                                                                                                                                                                            |
| --critical-supi                           | Thresholds.                                                                                                                                                                                            |
| --warning-sbi-nf-registration-detected    | Thresholds.                                                                                                                                                                                            |
| --critical-sbi-nf-registration-detected   | Thresholds.                                                                                                                                                                                            |
| --warning-sbi-nf-registration-registered  | Thresholds.                                                                                                                                                                                            |
| --critical-sbi-nf-registration-registered | Thresholds.                                                                                                                                                                                            |
| --warning-sbi-nf-registration-suspended   | Thresholds.                                                                                                                                                                                            |
| --critical-sbi-nf-registration-suspended  | Thresholds.                                                                                                                                                                                            |

</TabItem>
<TabItem value="Smsf" label="Smsf">

| Option                                | Description                                                                                                                                                                            |
|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-diameter-connection-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                      |
| --warning-diameter-connection-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                      |
| --critical-diameter-connection-status | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`. |
| --warning-sms-stored                  | Thresholds.                                                                                                                                                                            |
| --critical-sms-stored                 | Thresholds.                                                                                                                                                                            |

</TabItem>
<TabItem value="Udm" label="Udm">

| Option                                    | Description                                                                                                                                                                                 |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-repository               | Filter clusters by repository name.                                                                                                                                                         |
| --unknown-node-status                     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --warning-node-status                     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --critical-node-status                    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /notRunning/i`). You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`. |
| --unknown-diameter-connection-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                           |
| --warning-diameter-connection-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.                                           |
| --critical-diameter-connection-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{originHost\}`, `%\{stack\}`.      |
| --unknown-sbi-nf-registration-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`.                                                                            |
| --warning-sbi-nf-registration-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`.                                                                            |
| --critical-sbi-nf-registration-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`.                                  |
| --warning-clusters-detected               | Thresholds.                                                                                                                                                                                 |
| --critical-clusters-detected              | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-detected          | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-detected         | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-running           | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-running          | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-notrunning        | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-notrunning       | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-detected    | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-detected   | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-registered  | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-registered | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-suspended   | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-suspended  | Thresholds.                                                                                                                                                                                 |

</TabItem>
<TabItem value="Udr" label="Udr">

| Option                                    | Description                                                                                                                                                                                 |
|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cluster-repository               | Filter clusters by repository name.                                                                                                                                                         |
| --unknown-node-status                     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --warning-node-status                     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`.                                            |
| --critical-node-status                    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /notRunning/i`). You can use the following variables: `%\{status\}`, `%\{repository\}`, `%\{node\}`. |
| --unknown-sbi-nf-registration-status      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`.                                                                            |
| --warning-sbi-nf-registration-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`.                                                                            |
| --critical-sbi-nf-registration-status     | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /suspended/i`). You can use the following variables: `%\{status\}`.                                  |
| --warning-clusters-detected               | Thresholds.                                                                                                                                                                                 |
| --critical-clusters-detected              | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-detected          | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-detected         | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-running           | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-running          | Thresholds.                                                                                                                                                                                 |
| --warning-cluster-nodes-notrunning        | Thresholds.                                                                                                                                                                                 |
| --critical-cluster-nodes-notrunning       | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-detected    | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-detected   | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-registered  | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-registered | Thresholds.                                                                                                                                                                                 |
| --warning-sbi-nf-registration-suspended   | Thresholds.                                                                                                                                                                                 |
| --critical-sbi-nf-registration-suspended  | Thresholds.                                                                                                                                                                                 |
| --warning-license-supi-usage              | Thresholds.                                                                                                                                                                                 |
| --critical-license-supi-usage             | Thresholds.                                                                                                                                                                                 |
| --warning-license-supi-usage-free         | Thresholds.                                                                                                                                                                                 |
| --critical-license-supi-usage-free        | Thresholds.                                                                                                                                                                                 |
| --warning-license-supi-usage-prct         | Thresholds.                                                                                                                                                                                 |
| --critical-license-supi-usage-prct        | Thresholds.                                                                                                                                                                                 |
| --warning-supi-change-last24h             | Thresholds.                                                                                                                                                                                 |
| --critical-supi-change-last24h            | Thresholds.                                                                                                                                                                                 |

</TabItem>
<TabItem value="Upf" label="Upf">

| Option                             | Description                                                                                                                                                                            |
|:-----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-upf-pfcp-node-status     | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                      |
| --warning-upf-pfcp-node-status     | Define the conditions to match for the status to be WARNING. You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`.                                      |
| --critical-upf-pfcp-node-status    | Define the conditions to match for the status to be CRITICAL (default: `%\{status\} =~ /down/i`). You can use the following variables: `%\{status\}`, `%\{localIP\}`, `%\{remoteIP\}`. |
| --warning-upf-fpcf-nodes-detected  | Thresholds.                                                                                                                                                                            |
| --critical-upf-fpcf-nodes-detected | Thresholds.                                                                                                                                                                            |
| --warning-upf-sessions             | Thresholds.                                                                                                                                                                            |
| --critical-upf-sessions            | Thresholds.                                                                                                                                                                            |
| --warning-upf-gtpu-interfaces      | Thresholds.                                                                                                                                                                            |
| --critical-upf-gtpu-interfaces     | Thresholds.                                                                                                                                                                            |
| --warning-upf-ip-interfaces        | Thresholds.                                                                                                                                                                            |
| --critical-upf-ip-interfaces       | Thresholds.                                                                                                                                                                            |
| --warning-upf-dnn                  | Thresholds.                                                                                                                                                                            |
| --critical-upf-dnn                 | Thresholds.                                                                                                                                                                            |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_athonet_node_exporter_api.pl \
	--plugin=network::hp::athonet::nodeexporter::api::plugin \
	--custommode=api \
	--help
```