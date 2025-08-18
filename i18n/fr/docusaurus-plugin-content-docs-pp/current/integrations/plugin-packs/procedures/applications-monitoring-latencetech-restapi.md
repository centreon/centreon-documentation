---
id: applications-monitoring-latencetech-restapi
title: LatenceTech RestAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **LatenceTech RestAPI** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **LatenceTech RestAPI** apporte un modèle d'hôte :

* **App-Monitoring-Latencetech-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Latencetech-Restapi-custom" label="App-Monitoring-Latencetech-Restapi-custom">

| Alias        | Modèle de service                                      | Description                                                                              |
|:-------------|:-------------------------------------------------------|:-----------------------------------------------------------------------------------------|
| Connectivity | App-Monitoring-Latencetech-Connectivity-Restapi-custom | Contrôle des statistiques de connectivité de l'agent                                     |
| Forecast     | App-Monitoring-Latencetech-Forecast-Restapi-custom     | Contrôle des statistiques de prévision de l'agent                                        |
| Latency      | App-Monitoring-Latencetech-Latency-Restapi-custom      | Contrôle des statistiques de latence de l'agent                                          |
| Radio        | App-Monitoring-Latencetech-Radio-Restapi-custom        | Contrôle des statistiques radio de l'agent                                               |
| Throughput   | App-Monitoring-Latencetech-Throughput-Restapi-custom   | Contrôle des statistiques de débit de l'agent                                            |
| Twamp        | App-Monitoring-Latencetech-Twamp-Restapi-custom        | Contrôle des statistiques TWAMP (protocole de mesure active bidirectionnelle) de l'agent |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Latencetech-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                     |
|:----------------|:------------------------------------------------|
| LatenceTech     | Discover LatenceTech agents using the Rest API. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Connectivity" label="Connectivity">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| *kpis*#tcp.response.time.milliseconds      | ms    |
| *kpis*#udp.response.time.milliseconds      | ms    |
| *kpis*#http.response.time.milliseconds     | ms    |
| *kpis*#https.response.time.milliseconds    | ms    |
| *kpis*#icmp.response.time.milliseconds     | ms    |
| *kpis*#twamp.response.time.milliseconds    | ms    |
| *kpis*#download.bandwidth.bps              | bps   |
| *kpis*#upload.bandwidth.bps                | bps   |
| *kpis*#jitter.time.milliseconds            | ms    |
| *kpis*#application.latency.milliseconds    | ms    |
| *kpis*#network.latency.milliseconds        | ms    |
| *kpis*#expected.latency.milliseconds       | ms    |
| *kpis*#network.stability.percentage        | %     |
| *kpis*#expected.stability.percentage       | %     |
| *kpis*#volatility.percentage               | %     |
| qoe-rate                                   | N/A   |
| *kpis*#packetloss.rate.percentage          | %     |
| *kpis*#expected.packetloss.rate.percentage | %     |
| connectivity-health                        | N/A   |

</TabItem>
<TabItem value="Forecast" label="Forecast">

| Nom                                 | Unité |
|:------------------------------------|:------|
| latency.projected.time.milliseconds | ms    |

</TabItem>
<TabItem value="Latency" label="Latency">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| *latency*#latency.average.milliseconds | ms    |
| *latency*#latency.minimum.milliseconds | ms    |
| *latency*#latency.maximum.milliseconds | ms    |

</TabItem>
<TabItem value="Radio" label="Radio">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| *kpis*#tcp.response.time.milliseconds      | ms    |
| *kpis*#udp.response.time.milliseconds      | ms    |
| *kpis*#http.response.time.milliseconds     | ms    |
| *kpis*#https.response.time.milliseconds    | ms    |
| *kpis*#icmp.response.time.milliseconds     | ms    |
| *kpis*#twamp.response.time.milliseconds    | ms    |
| *kpis*#download.bandwidth.bps              | bps   |
| *kpis*#upload.bandwidth.bps                | bps   |
| *kpis*#jitter.time.milliseconds            | ms    |
| *kpis*#application.latency.milliseconds    | ms    |
| *kpis*#network.latency.milliseconds        | ms    |
| *kpis*#expected.latency.milliseconds       | ms    |
| *kpis*#network.stability.percentage        | %     |
| *kpis*#expected.stability.percentage       | %     |
| *kpis*#volatility.percentage               | %     |
| qoe-rate                                   | N/A   |
| *kpis*#packetloss.rate.percentage          | %     |
| *kpis*#expected.packetloss.rate.percentage | %     |
| connectivity-health                        | N/A   |

</TabItem>
<TabItem value="Throughput" label="Throughput">

Coming soon

</TabItem>
<TabItem value="Twamp" label="Twamp">

| Nom                                 | Unité |
|:------------------------------------|:------|
| latency.projected.time.milliseconds | ms    |

</TabItem>
</Tabs>

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link\n\
to the manufacturer official documentation BUT you should try to be as complete\n\
as possible here as it will save time to everybody.*

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
dnf install centreon-pack-applications-monitoring-latencetech-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-latencetech-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-monitoring-latencetech-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-latencetech-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **LatenceTech RestAPI**
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
dnf install centreon-plugin-Applications-Monitoring-Latencetech-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Latencetech-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-monitoring-latencetech-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Latencetech-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Latencetech-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                  | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| LATENCETECHAPIPROTOCOL | Specify https if needed (default: 'https')                                                           | https             |             |
| LATENCETECHAPIPORT     | Port used (default: 12099)                                                                           | 12099             |             |
| AGENTID                | Set the ID of the agent (mandatory option)                                                           |                   |             |
| LATENCETECHAPIKEY      | Set API key (mandatory)                                                                              |                   | X           |
| LATENCETECHAPIPATH     | Set API path (default: '/api/v1')                                                                    | /api/v1           |             |
| LATENCETECHCUSTOMERID  | Set cutomer/network ID (mandatory)                                                                   |                   | X           |
| EXTRAOPTIONS           | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connectivity" label="Connectivity">

| Macro                          | Description                                                                                                                         | Valeur par défaut                           | Obligatoire |
|:-------------------------------|:------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|:-----------:|
| WARNINGAPPLICATIONLATENCY      | Warning thresholds for application latency in milliseconds                                                                          |                                             |             |
| CRITICALAPPLICATIONLATENCY     | Critical thresholds for application latency in milliseconds                                                                         |                                             |             |
| WARNINGCONNECTIVITYHEALTH      | Define the conditions to match for the connectivity status to be WARNING. (default: '%\{connectivityHealth\} =~ "Warning"')         | %\{connectivityHealth\} =~ "Warning"        |             |
| CRITICALCONNECTIVITYHEALTH     | Define the conditions to match for the connectivity status to be CRITICAL. (default: '%\{connectivityHealth\} =~ "Need Attention"') | %\{connectivityHealth\} =~ "Need Attention" |             |
| WARNINGDOWNLOADBANDWIDTH       | Warning thresholds for download bandwidth in bps                                                                                    |                                             |             |
| CRITICALDOWNLOADBANDWIDTH      | Critical thresholds for download bandwidth in bps                                                                                   |                                             |             |
| WARNINGEXPECTEDLATENCY         | Warning thresholds for expected latency in milliseconds                                                                             |                                             |             |
| CRITICALEXPECTEDLATENCY        | Critical thresholds for expected latency in milliseconds                                                                            |                                             |             |
| WARNINGEXPECTEDPACKETLOSSPRCT  | Warning thresholds for expected packet loss percentage                                                                              |                                             |             |
| CRITICALEXPECTEDPACKETLOSSPRCT | Critical thresholds for expected packet loss percentage                                                                             |                                             |             |
| WARNINGEXPECTEDSTABILITYPRCT   | Warning thresholds for expected stability percentage                                                                                |                                             |             |
| CRITICALEXPECTEDSTABILITYPRCT  | Critical thresholds for expected stability percentage                                                                               |                                             |             |
| WARNINGHTTPRESPONSETIME        | Warning thresholds for HTTP response time in milliseconds                                                                           |                                             |             |
| CRITICALHTTPRESPONSETIME       | Critical thresholds for HTTP response time in milliseconds                                                                          |                                             |             |
| WARNINGHTTPSRESPONSETIME       | Warning thresholds for HTTPS response time in milliseconds                                                                          |                                             |             |
| CRITICALHTTPSRESPONSETIME      | Critical thresholds for HTTPS response time in milliseconds                                                                         |                                             |             |
| WARNINGICMPRESPONSETIME        | Warning thresholds for ICMP response time in milliseconds                                                                           |                                             |             |
| CRITICALICMPRESPONSETIME       | Critical thresholds for ICMP response time in milliseconds                                                                          |                                             |             |
| WARNINGJITTERTIME              | Warning thresholds for jitter time in milliseconds                                                                                  |                                             |             |
| CRITICALJITTERTIME             | Critical thresholds for jitter time in milliseconds                                                                                 |                                             |             |
| WARNINGNETWORKLATENCY          | Warning thresholds for network latency in milliseconds                                                                              |                                             |             |
| CRITICALNETWORKLATENCY         | Critical thresholds for network latency in milliseconds                                                                             |                                             |             |
| WARNINGNETWORKSTABILITYPRCT    | Warning thresholds for network stability percentage                                                                                 |                                             |             |
| CRITICALNETWORKSTABILITYPRCT   | Critical thresholds for network stability percentage                                                                                |                                             |             |
| WARNINGPACKETLOSSPRCT          | Warning thresholds for packet loss percentage                                                                                       |                                             |             |
| CRITICALPACKETLOSSPRCT         | Critical thresholds for packet loss percentage                                                                                      |                                             |             |
| WARNINGQOERATE                 | Warning thresholds for Quality of Experience rate                                                                                   |                                             |             |
| CRITICALQOERATE                | Critical thresholds for Quality of Experience rate                                                                                  |                                             |             |
| WARNINGTCPRESPONSETIME         | Warning thresholds for TCP response time in milliseconds                                                                            |                                             |             |
| CRITICALTCPRESPONSETIME        | Critical thresholds for TCP response time in milliseconds                                                                           |                                             |             |
| WARNINGTWAMPRESPONSETIME       | Warning thresholds for TWAMP response time in milliseconds                                                                          |                                             |             |
| CRITICALTWAMPRESPONSETIME      | Critical thresholds for TWAMP response time in milliseconds                                                                         |                                             |             |
| WARNINGUDPRESPONSETIME         | Warning thresholds for UDP response time in milliseconds                                                                            |                                             |             |
| CRITICALUDPRESPONSETIME        | Critical thresholds for UDP response time in milliseconds                                                                           |                                             |             |
| WARNINGUPLOADBANDWIDTH         | Warning thresholds for upload bandwidth in bps                                                                                      |                                             |             |
| CRITICALUPLOADBANDWIDTH        | Critical thresholds for upload bandwidth in bps                                                                                     |                                             |             |
| WARNINGVOLATILITYPRCT          | Warning thresholds for volatility percentage                                                                                        |                                             |             |
| CRITICALVOLATILITYPRCT         | Critical thresholds for volatility percentage                                                                                       |                                             |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                  |                                             |             |

</TabItem>
<TabItem value="Forecast" label="Forecast">

| Macro                    | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPROJECTEDLATENCY  | Warning thresholds for projected latency                                                           |                   |             |
| CRITICALPROJECTEDLATENCY | Critical thresholds for projected latency                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Latency" label="Latency">

| Macro                  | Description                                                                                                    | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMERANGE              | Choose a timerange of values on wich datas shoud be aggregated (in seconds). (default: '300')                  | 300               |             |
| FILTERPROTO            | Filter protocol if needed (can be a regexp) Accepted values are `tcp`, `udp`, `http`, `https`, `icmp`, `twamp` |                   |             |
| WARNINGLATENCYAVERAGE  | Warning thresholds for average latency                                                                         |                   |             |
| CRITICALLATENCYAVERAGE | Critical thresholds for average latency                                                                        |                   |             |
| WARNINGLATENCYMAXIMUM  | Warning thresholds for maximum latency                                                                         |                   |             |
| CRITICALLATENCYMAXIMUM | Critical thresholds for maximum latency                                                                        |                   |             |
| WARNINGLATENCYMINIMUM  | Warning thresholds for minimum latency                                                                         |                   |             |
| CRITICALLATENCYMINIMUM | Critical thresholds for minimum latency                                                                        |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).             |                   |             |

</TabItem>
<TabItem value="Radio" label="Radio">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRSRPDBM  |                                                                                                    |                   |             |
| CRITICALRSRPDBM |                                                                                                    |                   |             |
| WARNINGRSRQDB   |                                                                                                    |                   |             |
| CRITICALRSRQDB  |                                                                                                    |                   |             |
| WARNINGRSSIDBM  |                                                                                                    |                   |             |
| CRITICALRSSIDBM |                                                                                                    |                   |             |
| WARNINGSNRDBM   |                                                                                                    |                   |             |
| CRITICALSNRDBM  |                                                                                                    |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGJITTERDOWNLOAD  | Warning thresholds for jitter download time (in milliseconds)                                       |                   |             |
| CRITICALJITTERDOWNLOAD | Critical thresholds for jitter download time (in milliseconds)                                      |                   |             |
| WARNINGJITTERUPLOAD    | Warning thresholds for jitter upload time (in milliseconds)                                         |                   |             |
| CRITICALJITTERUPLOAD   | Critical thresholds for jitter upload time (in milliseconds)                                        |                   |             |
| WARNINGLIFBEDOWNLOAD   | Warning thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) download bandwidth (in bps)  |                   |             |
| CRITICALLIFBEDOWNLOAD  | Critical thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) download bandwidth (in bps) |                   |             |
| WARNINGLIFBEUPLOAD     | Warning thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) upload bandwidth (in bps)    |                   |             |
| CRITICALLIFBEUPLOAD    | Critical thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) upload bandwidth (in bps)   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).  |                   |             |

</TabItem>
<TabItem value="Twamp" label="Twamp">

| Macro                   | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGTWAMPFORWARD     |                                                                                                    |                   |             |
| CRITICALTWAMPFORWARD    |                                                                                                    |                   |             |
| WARNINGTWAMPPROCESSING  |                                                                                                    |                   |             |
| CRITICALTWAMPPROCESSING |                                                                                                    |                   |             |
| WARNINGTWAMPREVERSE     |                                                                                                    |                   |             |
| CRITICALTWAMPREVERSE    |                                                                                                    |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_latencetech_restapi.pl \
	--plugin=apps::monitoring::latencetech::restapi::plugin \
	--mode=connectivity \
	--hostname='10.0.0.1' \
	--port='12099' \
	--proto='https' \
	--api-path='/api/v1' \
	--api-key='' \
	--customer-id='' \
	--agent-id=''  \
	--warning-snr-dbm='' \
	--critical-snr-dbm='' \
	--warning-rssi-dbm='' \
	--critical-rssi-dbm='' \
	--warning-rsrp-dbm='' \
	--critical-rsrp-dbm='' \
	--warning-rsrq-db='' \
	--critical-rsrq-db='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All KPIs are OK | 'kpis1#tcp.response.time.milliseconds'=47241ms;;;0; 'kpis2#tcp.response.time.milliseconds'=20008ms;;;0; 'kpis1#udp.response.time.milliseconds'=16262ms;;;0; 'kpis2#udp.response.time.milliseconds'=72220ms;;;0; 'kpis1#http.response.time.milliseconds'=88210ms;;;0; 'kpis2#http.response.time.milliseconds'=6470ms;;;0; 'kpis1#https.response.time.milliseconds'=78047ms;;;0; 'kpis2#https.response.time.milliseconds'=5800ms;;;0; 'kpis1#icmp.response.time.milliseconds'=80229ms;;;0; 'kpis2#icmp.response.time.milliseconds'=43857ms;;;0; 'kpis1#twamp.response.time.milliseconds'=54777ms;;;0; 'kpis2#twamp.response.time.milliseconds'=51265ms;;;0; 'kpis1#download.bandwidth.bps'=73916bps;;;0; 'kpis2#download.bandwidth.bps'=80063bps;;;0; 'kpis1#upload.bandwidth.bps'=60152bps;;;0; 'kpis2#upload.bandwidth.bps'=160bps;;;0; 'kpis1#jitter.time.milliseconds'=4617ms;;;0; 'kpis2#jitter.time.milliseconds'=28168ms;;;0; 'kpis1#application.latency.milliseconds'=87772ms;;;0; 'kpis2#application.latency.milliseconds'=42434ms;;;0; 'kpis1#network.latency.milliseconds'=13704ms;;;0; 'kpis2#network.latency.milliseconds'=32074ms;;;0; 'kpis1#expected.latency.milliseconds'=4786ms;;;0; 'kpis2#expected.latency.milliseconds'=84028ms;;;0; 'kpis1#network.stability.percentage'=3152%;;;0;100 'kpis2#network.stability.percentage'=3995%;;;0;100 'kpis1#expected.stability.percentage'=57455%;;;0;100 'kpis2#expected.stability.percentage'=76822%;;;0;100 'kpis1#volatility.percentage'=58275%;;;0;100 'kpis2#volatility.percentage'=97335%;;;0;100 'kpis1#packetloss.rate.percentage'=48912%;;;0;100 'kpis2#packetloss.rate.percentage'=15957%;;;0;100 'kpis1#expected.packetloss.rate.percentage'=42927%;;;0;100 'kpis2#expected.packetloss.rate.percentage'=24358%;;;0;100 
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
/usr/lib/centreon/plugins/centreon_latencetech_restapi.pl \
	--plugin=apps::monitoring::latencetech::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                          | Modèle de service associé                                                                                   |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------|
| connectivity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/connectivity.pm)] | App-Monitoring-Latencetech-Connectivity-Restapi-custom<br />App-Monitoring-Latencetech-Radio-Restapi-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/discovery.pm)]       | Utilisé pour la découverte d'hôtes                                                                          |
| forecast [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/forecast.pm)]         | App-Monitoring-Latencetech-Forecast-Restapi-custom<br />App-Monitoring-Latencetech-Twamp-Restapi-custom     |
| latency [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/latency.pm)]           | App-Monitoring-Latencetech-Latency-Restapi-custom                                                           |
| radio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/radio.pm)]               | Pas utilisé dans ce connecteur de supervision                                                               |
| throughput [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/throughput.pm)]     | App-Monitoring-Latencetech-Throughput-Restapi-custom                                                        |
| twamp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/monitoring/latencetech/restapi/mode/twamp.pm)]               | Pas utilisé dans ce connecteur de supervision                                                               |

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
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --hostname                                 | Set Latencetech hostname or IP address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --port                                     | Port used (default: 12099).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    | Specify https if needed (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --api-path                                 | Set API path (default: '/api/v1').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --api-key                                  | Set API key (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --customer-id                              | Set cutomer/network ID (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --agent-id                                 | Set Agent ID (for modes that require it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeout                                  | Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Connectivity" label="Connectivity">

| Option                               | Description                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| --agent-id                           | Set the ID of the agent (mandatory option).                                                                                          |
| --warning-tcp-response-time          | Warning thresholds for TCP response time in milliseconds.                                                                            |
| --critical-tcp-response-time         | Critical thresholds for TCP response time in milliseconds.                                                                           |
| --warning-udp-response-time          | Warning thresholds for UDP response time in milliseconds.                                                                            |
| --critical-udp-response-time         | Critical thresholds for UDP response time in milliseconds.                                                                           |
| --warning-http-response-time         | Warning thresholds for HTTP response time in milliseconds.                                                                           |
| --critical-http-response-time        | Critical thresholds for HTTP response time in milliseconds.                                                                          |
| --warning-https-response-time        | Warning thresholds for HTTPS response time in milliseconds.                                                                          |
| --critical-https-response-time       | Critical thresholds for HTTPS response time in milliseconds.                                                                         |
| --warning-icmp-response-time         | Warning thresholds for ICMP response time in milliseconds.                                                                           |
| --critical-icmp-response-time        | Critical thresholds for ICMP response time in milliseconds.                                                                          |
| --warning-twamp-response-time        | Warning thresholds for TWAMP response time in milliseconds.                                                                          |
| --critical-twamp-response-time       | Critical thresholds for TWAMP response time in milliseconds.                                                                         |
| --warning-download-bandwidth         | Warning thresholds for download bandwidth in bps.                                                                                    |
| --critical-download-bandwidth        | Critical thresholds for download bandwidth in bps.                                                                                   |
| --warning-upload-bandwidth           | Warning thresholds for upload bandwidth in bps.                                                                                      |
| --critical-upload-bandwidth          | Critical thresholds for upload bandwidth in bps.                                                                                     |
| --warning-jitter-time                | Warning thresholds for jitter time in milliseconds.                                                                                  |
| --critical-jitter-time               | Critical thresholds for jitter time in milliseconds.                                                                                 |
| --warning-application-latency        | Warning thresholds for application latency in milliseconds.                                                                          |
| --critical-application-latency       | Critical thresholds for application latency in milliseconds.                                                                         |
| --warning-network-latency            | Warning thresholds for network latency in milliseconds.                                                                              |
| --critical-network-latency           | Critical thresholds for network latency in milliseconds.                                                                             |
| --warning-expected-latency           | Warning thresholds for expected latency in milliseconds.                                                                             |
| --critical-expected-latency          | Critical thresholds for expected latency in milliseconds.                                                                            |
| --warning-network-stability-prct     | Warning thresholds for network stability percentage.                                                                                 |
| --critical-network-stability-prct    | Critical thresholds for network stability percentage.                                                                                |
| --warning-expected-stability-prct    | Warning thresholds for expected stability percentage.                                                                                |
| --critical-expected-stability-prct   | Critical thresholds for expected stability percentage.                                                                               |
| --warning-volatility-prct            | Warning thresholds for volatility percentage.                                                                                        |
| --critical-volatility-prct           | Critical thresholds for volatility percentage.                                                                                       |
| --warning-qoe-rate                   | Warning thresholds for Quality of Experience rate.                                                                                   |
| --critical-qoe-rate                  | Critical thresholds for Quality of Experience rate.                                                                                  |
| --warning-packet-loss-prct           | Warning thresholds for packet loss percentage.                                                                                       |
| --critical-packet-loss-prct          | Critical thresholds for packet loss percentage.                                                                                      |
| --warning-expected-packet-loss-prct  | Warning thresholds for expected packet loss percentage.                                                                              |
| --critical-expected-packet-loss-prct | Critical thresholds for expected packet loss percentage.                                                                             |
| --warning-connectivity-health        | Define the conditions to match for the connectivity status to be WARNING. (default: '%\{connectivityHealth\} =~ "Warning"').         |
| --critical-connectivity-health       | Define the conditions to match for the connectivity status to be CRITICAL. (default: '%\{connectivityHealth\} =~ "Need Attention"'). |

</TabItem>
<TabItem value="Forecast" label="Forecast">

| Option                       | Description                                 |
|:-----------------------------|:--------------------------------------------|
| --agent-id                   | Set the ID of the agent (mandatory option). |
| --warning-projected-latency  | Warning thresholds for projected latency.   |
| --critical-projected-latency | Critical thresholds for projected latency.  |

</TabItem>
<TabItem value="Latency" label="Latency">

| Option                     | Description                                                                                                     |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------|
| --agent-id                 | Set the ID of the agent (mandatory option).                                                                     |
| --filter-protocol          | Filter protocol if needed (can be a regexp) Accepted values are `tcp`, `udp`, `http`, `https`, `icmp`, `twamp`. |
| --timerange                | Choose a timerange of values on wich datas shoud be aggregated (in seconds). (default: '300')                   |
| --warning-latency-average  | Warning thresholds for average latency.                                                                         |
| --critical-latency-average | Critical thresholds for average latency.                                                                        |
| --warning-latency-minimum  | Warning thresholds for minimum latency.                                                                         |
| --critical-latency-minimum | Critical thresholds for minimum latency.                                                                        |
| --warning-latency-maximum  | Warning thresholds for maximum latency.                                                                         |
| --critical-latency-maximum | Critical thresholds for maximum latency.                                                                        |

</TabItem>
<TabItem value="Radio" label="Radio">

| Option                               | Description                                                                                                                          |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| --agent-id                           | Set the ID of the agent (mandatory option).                                                                                          |
| --warning-tcp-response-time          | Warning thresholds for TCP response time in milliseconds.                                                                            |
| --critical-tcp-response-time         | Critical thresholds for TCP response time in milliseconds.                                                                           |
| --warning-udp-response-time          | Warning thresholds for UDP response time in milliseconds.                                                                            |
| --critical-udp-response-time         | Critical thresholds for UDP response time in milliseconds.                                                                           |
| --warning-http-response-time         | Warning thresholds for HTTP response time in milliseconds.                                                                           |
| --critical-http-response-time        | Critical thresholds for HTTP response time in milliseconds.                                                                          |
| --warning-https-response-time        | Warning thresholds for HTTPS response time in milliseconds.                                                                          |
| --critical-https-response-time       | Critical thresholds for HTTPS response time in milliseconds.                                                                         |
| --warning-icmp-response-time         | Warning thresholds for ICMP response time in milliseconds.                                                                           |
| --critical-icmp-response-time        | Critical thresholds for ICMP response time in milliseconds.                                                                          |
| --warning-twamp-response-time        | Warning thresholds for TWAMP response time in milliseconds.                                                                          |
| --critical-twamp-response-time       | Critical thresholds for TWAMP response time in milliseconds.                                                                         |
| --warning-download-bandwidth         | Warning thresholds for download bandwidth in bps.                                                                                    |
| --critical-download-bandwidth        | Critical thresholds for download bandwidth in bps.                                                                                   |
| --warning-upload-bandwidth           | Warning thresholds for upload bandwidth in bps.                                                                                      |
| --critical-upload-bandwidth          | Critical thresholds for upload bandwidth in bps.                                                                                     |
| --warning-jitter-time                | Warning thresholds for jitter time in milliseconds.                                                                                  |
| --critical-jitter-time               | Critical thresholds for jitter time in milliseconds.                                                                                 |
| --warning-application-latency        | Warning thresholds for application latency in milliseconds.                                                                          |
| --critical-application-latency       | Critical thresholds for application latency in milliseconds.                                                                         |
| --warning-network-latency            | Warning thresholds for network latency in milliseconds.                                                                              |
| --critical-network-latency           | Critical thresholds for network latency in milliseconds.                                                                             |
| --warning-expected-latency           | Warning thresholds for expected latency in milliseconds.                                                                             |
| --critical-expected-latency          | Critical thresholds for expected latency in milliseconds.                                                                            |
| --warning-network-stability-prct     | Warning thresholds for network stability percentage.                                                                                 |
| --critical-network-stability-prct    | Critical thresholds for network stability percentage.                                                                                |
| --warning-expected-stability-prct    | Warning thresholds for expected stability percentage.                                                                                |
| --critical-expected-stability-prct   | Critical thresholds for expected stability percentage.                                                                               |
| --warning-volatility-prct            | Warning thresholds for volatility percentage.                                                                                        |
| --critical-volatility-prct           | Critical thresholds for volatility percentage.                                                                                       |
| --warning-qoe-rate                   | Warning thresholds for Quality of Experience rate.                                                                                   |
| --critical-qoe-rate                  | Critical thresholds for Quality of Experience rate.                                                                                  |
| --warning-packet-loss-prct           | Warning thresholds for packet loss percentage.                                                                                       |
| --critical-packet-loss-prct          | Critical thresholds for packet loss percentage.                                                                                      |
| --warning-expected-packet-loss-prct  | Warning thresholds for expected packet loss percentage.                                                                              |
| --critical-expected-packet-loss-prct | Critical thresholds for expected packet loss percentage.                                                                             |
| --warning-connectivity-health        | Define the conditions to match for the connectivity status to be WARNING. (default: '%\{connectivityHealth\} =~ "Warning"').         |
| --critical-connectivity-health       | Define the conditions to match for the connectivity status to be CRITICAL. (default: '%\{connectivityHealth\} =~ "Need Attention"'). |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Option                     | Description                                                                                          |
|:---------------------------|:-----------------------------------------------------------------------------------------------------|
| --agent-id                 | Set the ID of the agent (mandatory option).                                                          |
| --warning-lifbe-download   | Warning thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) download bandwidth (in bps).  |
| --critical-lifbe-download  | Critical thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) download bandwidth (in bps). |
| --warning-lifbe-upload     | Warning thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) upload bandwidth (in bps).    |
| --critical-lifbe-upload    | Critical thresholds for LIFBE (Low Intrusive Fast Bandwidth Estimation) upload bandwidth (in bps).   |
| --warning-jitter-download  | Warning thresholds for jitter download time (in milliseconds).                                       |
| --critical-jitter-download | Critical thresholds for jitter download time (in milliseconds).                                      |
| --warning-jitter-upload    | Warning thresholds for jitter upload time (in milliseconds).                                         |
| --critical-jitter-upload   | Critical thresholds for jitter upload time (in milliseconds).                                        |

</TabItem>
<TabItem value="Twamp" label="Twamp">

| Option                       | Description                                 |
|:-----------------------------|:--------------------------------------------|
| --agent-id                   | Set the ID of the agent (mandatory option). |
| --warning-projected-latency  | Warning thresholds for projected latency.   |
| --critical-projected-latency | Critical thresholds for projected latency.  |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_latencetech_restapi.pl \
	--plugin=apps::monitoring::latencetech::restapi::plugin \
	--mode=connectivity \
	--help
```
