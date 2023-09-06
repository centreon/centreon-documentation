---
id: applications-monitoring-centreon-map-jmx
title: Centreon Map 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Centreon Map** apporte un modèle d'hôte :

* **App-Monitoring-Centreon-Map-JMX-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Centreon-Map-JMX-custom" label="App-Monitoring-Centreon-Map-JMX-custom">

| Alias        | Modèle de service                          | Description                                                                                      |
|:-------------|:-------------------------------------------|:-------------------------------------------------------------------------------------------------|
| Broker-Stats | App-Monitoring-Map-Broker-Stats-JMX-custom | Contrôle le taux des paquets Broker reçus et traités                                             |
| Engine-Stats | App-Monitoring-Map-Engine-Stats-JMX-custom | Contrôle les statistiques du moteur de calcul                                                    |
| Events       | App-Monitoring-Map-Events-JMX-custom       | Contrôle le taux d'évènements de chaque types                                                    |
| Open-Views   | App-Monitoring-Map-Open-Views-JMX-custom   | Contrôle le nombre de vues ouvertes                                                              |
| Sessions     | App-Monitoring-Map-Sessions-JMX-custom     | Contrôle le nombre de sessions actives et le nombre d'évènement whatsup par sessions utilisateur |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Centreon-Map-JMX-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                             | Description                                                                                              |
|:----------------|:----------------------------------------------|:---------------------------------------------------------------------------------------------------------|
| Sync-Statistics | App-Monitoring-Map-Sync-Statistics-JMX-custom | Contrôle remontant les statistiques des événements de synchronisation entre les serveurs MAP et Centreon |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Métrique               | Unité     |
|:-----------------------|:----------|
| status                 | N/A       |
| received-packets-rate  | packets/s |
| processed-packets-rate | packets/s |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Engine-Stats" label="Engine-Stats">

| Métrique                   | Unité |
|:---------------------------|:------|
| drilldown-candidates-queue | N/A   |
| cutback-computation-rate   | N/A   |
| minimal-computation-rate   | N/A   |
| recursive-computation-rate | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Events" label="Events">

Coming soon

</TabItem>
<TabItem value="Open-Views" label="Open-Views">

| Métrique    | Unité |
|:------------|:------|
| open-views  | views |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Métrique       | Unité    |
|:---------------|:---------|
| active-session | sessions |
| queue-size     | N/A      |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Sync-Statistics" label="Sync-Statistics">

| Métrique                                                              | Unité |
|:----------------------------------------------------------------------|:------|
| map.synchronization.centreon.count                                    | count |
| map.synchronization.centreon.duration.average.milliseconds            | ms    |
| map.synchronization.centreon.duration.max.milliseconds                | ms    |
| *acl*#map.synchronization.acl.count                                   | count |
| *acl*#map.synchronization.acl.duration.average.milliseconds           | ms    |
| *acl*#map.synchronization.acl.duration.max.milliseconds               | ms    |
| *resource*#map.synchronization.resource.count                         | count |
| *resource*#map.synchronization.resource.duration.average.milliseconds | ms    |
| *resource*#map.synchronization.resource.duration.max.milliseconds     | ms    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link\n\
to the manufacturer official documentation BUT you should try to be as complete\n\
as possible here as it will save time to everybody.*

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
dnf install centreon-pack-applications-monitoring-centreon-map-jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-map-jmx
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-centreon-map-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-map-jmx
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Centreon Map**
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
dnf install centreon-plugin-Applications-Monitoring-Centreon-Map-Jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Centreon-Map-Jmx
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-centreon-map-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Map-Jmx
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Centreon-Map-JMX-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro               | Description                                                                                           | Valeur par défaut | Obligatoire |
|:--------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| JOLOKIAUSERNAME     | Credentials to use for the HTTP request                                                               |                   |             |
| JOLOKIAPASSWORD     | Credentials to use for the HTTP request                                                               |                   |             |
| JOLOKIAURL          | Url where the jolokia agent is deployed (required). Example:http://localhost:8080/jolokia             |                   | X           |
| JOLOKIAEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Macro                        | Description                                                                                                                                                                                                             | Valeur par défaut                             | Obligatoire |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|:-----------:|
| WARNINGPROCESSEDPACKETSRATE  | Warning threshold                                                                                                                                                                                                       |                                               |             |
| CRITICALPROCESSEDPACKETSRATE | Critical threshold                                                                                                                                                                                                      |                                               |             |
| WARNINGRECEIVEDPACKETSRATE   | Warning threshold                                                                                                                                                                                                       |                                               |             |
| CRITICALRECEIVEDPACKETSRATE  | Critical threshold                                                                                                                                                                                                      |                                               |             |
| CRITICALSTATUS               | Define the conditions to match for the status to be CRITICAL. (Default: '%{processed\_packets} \< %{received\_packets}'). Can use special variables like: %{processed\_packets}, %{received\_packets}, %{diff\_packets} | %{processed\_packets} \< %{received\_packets} |             |
| WARNINGSTATUS                | Define the conditions to match for the status to be WARNING. (Default: ''). Can use special variables like: %{processed\_packets}, %{received\_packets}, %{diff\_packets}                                               |                                               |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                     |                                               |             |

</TabItem>
<TabItem value="Engine-Stats" label="Engine-Stats">

| Macro                            | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCUTBACKCOMPUTATIONRATE    | Warning threshold                                                                                   |                   |             |
| CRITICALCUTBACKCOMPUTATIONRATE   | Critical threshold                                                                                  |                   |             |
| WARNINGDRILLDOWNCANDIDATESQUEUE  | Warning threshold                                                                                   |                   |             |
| CRITICALDRILLDOWNCANDIDATESQUEUE | Critical threshold                                                                                  |                   |             |
| WARNINGMINIMALCOMPUTATIONRATE    | Warning threshold                                                                                   |                   |             |
| CRITICALMINIMALCOMPUTATIONRATE   | Critical threshold                                                                                  |                   |             |
| WARNINGRECURSIVECOMPUTATIONRATE  | Warning threshold                                                                                   |                   |             |
| CRITICALRECURSIVECOMPUTATIONRATE | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Events" label="Events">

| Macro                               | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGADDCHILDRATE                 | Warning threshold                                                                                   |                   |             |
| CRITICALADDCHILDRATE                | Critical threshold                                                                                  |                   |             |
| WARNINGADDPARENTRATE                | Warning threshold                                                                                   |                   |             |
| CRITICALADDPARENTRATE               | Critical threshold                                                                                  |                   |             |
| WARNINGADDPREFERENCERATE            | Warning threshold                                                                                   |                   |             |
| CRITICALADDPREFERENCERATE           | Critical threshold                                                                                  |                   |             |
| WARNINGADDRESOURCERATE              | Warning threshold                                                                                   |                   |             |
| CRITICALADDRESOURCERATE             | Critical threshold                                                                                  |                   |             |
| WARNINGADDSELFRATE                  | Warning threshold                                                                                   |                   |             |
| CRITICALADDSELFRATE                 | Critical threshold                                                                                  |                   |             |
| WARNINGCLOSEGATERATE                | Warning threshold                                                                                   |                   |             |
| CRITICALCLOSEGATERATE               | Critical threshold                                                                                  |                   |             |
| WARNINGCREATEGATERATE               | Warning threshold                                                                                   |                   |             |
| CRITICALCREATEGATERATE              | Critical threshold                                                                                  |                   |             |
| WARNINGDESYNCCHILDRENRATE           | Warning threshold                                                                                   |                   |             |
| CRITICALDESYNCCHILDRENRATE          | Critical threshold                                                                                  |                   |             |
| WARNINGOPENGATERATE                 | Warning threshold                                                                                   |                   |             |
| CRITICALOPENGATERATE                | Critical threshold                                                                                  |                   |             |
| WARNINGPOLLERRESTARTRATE            | Warning threshold                                                                                   |                   |             |
| CRITICALPOLLERRESTARTRATE           | Critical threshold                                                                                  |                   |             |
| WARNINGREMOVECHILDRATE              | Warning threshold                                                                                   |                   |             |
| CRITICALREMOVECHILDRATE             | Critical threshold                                                                                  |                   |             |
| WARNINGREMOVEPARENTRATE             |                                                                                                     |                   |             |
| CRITICALREMOVEPARENTRATE            |                                                                                                     |                   |             |
| WARNINGREMOVEPREFERENCERATE         | Warning threshold                                                                                   |                   |             |
| CRITICALREMOVEPREFERENCERATE        | Critical threshold                                                                                  |                   |             |
| WARNINGREMOVERESOURCERATE           | Warning threshold                                                                                   |                   |             |
| CRITICALREMOVERESOURCERATE          | Critical threshold                                                                                  |                   |             |
| WARNINGREMOVESELFRATE               | Warning threshold                                                                                   |                   |             |
| CRITICALREMOVESELFRATE              | Critical threshold                                                                                  |                   |             |
| WARNINGSESSIONEXPIREDRATE           | Warning threshold                                                                                   |                   |             |
| CRITICALSESSIONEXPIREDRATE          | Critical threshold                                                                                  |                   |             |
| WARNINGSYNCHILDRENRATE              | Warning threshold                                                                                   |                   |             |
| CRITICALSYNCHILDRENRATE             | Critical threshold                                                                                  |                   |             |
| WARNINGUPDATEACLCHILDRENRATE        | Warning threshold                                                                                   |                   |             |
| CRITICALUPDATEACLCHILDRENRATE       | Critical threshold                                                                                  |                   |             |
| WARNINGUPDATEACLRATE                | Warning threshold                                                                                   |                   |             |
| CRITICALUPDATEACLRATE               | Critical threshold                                                                                  |                   |             |
| WARNINGUPDATEPREFERENCERATE         | Warning threshold                                                                                   |                   |             |
| CRITICALUPDATEPREFERENCERATE        | Critical threshold                                                                                  |                   |             |
| WARNINGUPDATERESOURCERATE           | Warning threshold                                                                                   |                   |             |
| CRITICALUPDATERESOURCERATE          | Critical threshold                                                                                  |                   |             |
| WARNINGUPDATESELFRATE               | Warning threshold                                                                                   |                   |             |
| CRITICALUPDATESELFRATE              | Critical threshold                                                                                  |                   |             |
| WARNINGUPDATESTATUSINHERITEDSTATUS  | Warning threshold                                                                                   |                   |             |
| CRITICALUPDATESTATUSINHERITEDSTATUS | Critical threshold                                                                                  |                   |             |
| WARNINGUPDATESTATUSRESOURCERATE     | Warning threshold                                                                                   |                   |             |
| CRITICALUPDATESTATUSRESOURCERATE    | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Open-Views" label="Open-Views">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGOPENVIEWS  | Warning threshold                                                                                   |                   |             |
| CRITICALOPENVIEWS | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                 | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVESESSION  | Warning threshold                                                                                   |                   |             |
| CRITICALACTIVESESSION | Critical threshold                                                                                  |                   |             |
| WARNINGQUEUESIZE      | Warning threshold                                                                                   |                   |             |
| CRITICALQUEUESIZE     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Sync-Statistics" label="Sync-Statistics">

| Macro                                                         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------------------------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGMAPSYNCHRONISATIONCENTREONCOUNT                        | Warning threshold                                                                                   |                   |             |
| CRITICALMAPSYNCHRONISATIONCENTREONCOUNT                       | Critical threshold                                                                                  |                   |             |
| WARNINGMAPSYNCHRONISATIONCENTREONDURATIONAVERAGEMILLISECONDS  | Warning threshold                                                                                   |                   |             |
| CRITICALMAPSYNCHRONISATIONCENTREONDURATIONAVERAGEMILLISECONDS | Critical threshold                                                                                  |                   |             |
| WARNINGMAPSYNCHRONISATIONCENTREONDURATIONMAXMILLISECONDS      | Warning threshold                                                                                   |                   |             |
| CRITICALMAPSYNCHRONISATIONCENTREONDURATIONMAXMILLISECONDS     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS                                                  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

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
/usr/lib/centreon/plugins/centreon_centreon_map_jmx.pl \
	--plugin=apps::centreon::map::jmx::plugin \
	--mode=sync-stats \
	--custommode=jolokia \
	--url='' \
	--username='' \
	--password=''  \
	--warning-map-synchronization-centreon-count='' \
	--critical-map-synchronization-centreon-count='' \
	--warning-map-synchronization-centreon-duration-average-milliseconds='' \
	--critical-map-synchronization-centreon-duration-average-milliseconds='' \
	--warning-map-synchronization-centreon-duration-max-milliseconds='' \
	--critical-map-synchronization-centreon-duration-max-milliseconds='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Count: 29 Average Duration: 75 ms Max Duration: 47 ms Count: 80 Average Duration: 36 ms Max Duration: 91 ms Count: 69 Average Duration: 71 ms Max Duration: 90 ms | 'map.synchronization.centreon.count'=29;;;0; 'map.synchronization.centreon.duration.average.milliseconds'=75ms;;;0; 'map.synchronization.centreon.duration.max.milliseconds'=47ms;;;0; 'map.synchronization.acl.count'=80;;;0; 'map.synchronization.acl.duration.average.milliseconds'=36ms;;;0; 'map.synchronization.acl.duration.max.milliseconds'=91ms;;;0; 'map.synchronization.resource.count'=69;;;0; 'map.synchronization.resource.duration.average.milliseconds'=71ms;;;0; 'map.synchronization.resource.duration.max.milliseconds'=90ms;;;0; 
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
/usr/lib/centreon/plugins/centreon_centreon_map_jmx.pl \
	--plugin=apps::centreon::map::jmx::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                               | Modèle de service associé                     |
|:-----------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| broker-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/map/jmx/mode/brokerstats.pm)]     | App-Monitoring-Map-Broker-Stats-JMX-custom    |
| class-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/classcount.pm)]         | Not used in this Monitoring Connector         |
| connector-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/connectorusage.pm)]     | Not used in this Monitoring Connector         |
| cpu-load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/cpuload.pm)]               | Not used in this Monitoring Connector         |
| datasource-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/datasourceusage.pm)]   | Not used in this Monitoring Connector         |
| engine-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/map/jmx/mode/enginestats.pm)]     | App-Monitoring-Map-Engine-Stats-JMX-custom    |
| events [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/map/jmx/mode/events.pm)]                | App-Monitoring-Map-Events-JMX-custom          |
| fd-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/fdusage.pm)]               | Not used in this Monitoring Connector         |
| gc-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/gcusage.pm)]               | Not used in this Monitoring Connector         |
| list-datasources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/listdatasources.pm)]   | Not used in this Monitoring Connector         |
| list-webapps [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/listwebapps.pm)]           | Not used in this Monitoring Connector         |
| load-average [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/loadaverage.pm)]       | Not used in this Monitoring Connector         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memory.pm)]                  | Not used in this Monitoring Connector         |
| memory-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memorydetailed.pm)] | Not used in this Monitoring Connector         |
| open-views [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/map/jmx/mode/openviews.pm)]         | App-Monitoring-Map-Open-Views-JMX-custom      |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/map/jmx/mode/sessions.pm)]            | App-Monitoring-Map-Sessions-JMX-custom        |
| sync-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/map/jmx/mode/syncstats.pm)]         | App-Monitoring-Map-Sync-Statistics-JMX-custom |
| threads [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/threads.pm)]                | Not used in this Monitoring Connector         |
| webapps-sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/webappssessions.pm)]   | Not used in this Monitoring Connector         |

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
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --url                                      | Url where the jolokia agent is deployed (required). Example:http://localhost:8080/jolokia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  | Timeout in seconds for HTTP requests (Defaults: 30 seconds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --username                                 | Credentials to use for the HTTP request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 | Credentials to use for the HTTP request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proxy-url                                | Optional HTTP proxy to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --proxy-username                           | Credentials to use for the proxy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --proxy-password                           | Credentials to use for the proxy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --target-url                               | Target to use (if you use jolokia agent as a proxy in --url option).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --target-username                          | Credentials to use for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --target-password                          | Credentials to use for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

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
| --filter-counters      | Only display some counters (regexp can be used). (Example: --filter-counters='session')                                                                                                                                                       |
| --warning-status       | Define the conditions to match for the status to be WARNING. (Default: ''). Can use special variables like: %{processed\_packets}, %{received\_packets}, %{diff\_packets}.                                                                    |
| --critical-status      | Define the conditions to match for the status to be CRITICAL. (Default: '%{processed\_packets} \< %{received\_packets}'). Can use special variables like: %{processed\_packets}, %{received\_packets}, %{diff\_packets}.                      |
| --warning-*            | Warning threshold. Can be: 'received-packets-rate', 'processed-packets-rate'.                                                                                                                                                                 |
| --critical-*           | Critical threshold. Can be: 'received-packets-rate', 'processed-packets-rate'.                                                                                                                                                                |

</TabItem>
<TabItem value="Engine-Stats" label="Engine-Stats">

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
| --filter-counters      | Only display some counters (regexp can be used). (Example: --filter-counters='computation')                                                                                                                                                   |
| --warning-*            | Warning threshold. Can be: ''drilldown-candidates-queue', 'cutback-computation-rate', 'minimal-computation-rate', 'recursive-computation-rate'.                                                                                               |
| --critical-*           | Critical threshold. Can be: ''drilldown-candidates-queue', 'cutback-computation-rate', 'minimal-computation-rate', 'recursive-computation-rate'.                                                                                              |

</TabItem>
<TabItem value="Events" label="Events">

| Option                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-counters      | Only display some counters (regexp can be used). (Example: --filter-counters='session')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-*            | Warning threshold. Can be: 'open-gate-rate', 'close-gate-rate', 'add-resource-rate', 'poller-restart-rate', 'update-resource-rate', 'session-expired-rate', 'update-acl-children-rate', 'sync-children-rate', 'remove-child-rate', 'update-status-resource-rate', 'remove-resource-rate', 'update-status-inherited-rate', 'add-child-rate', 'remove-self-rate',' remove-parent-rate','add-preference-rate', 'create-gate-rate', 'add-parent-rate', 'update-acl-rate', 'remove-preference-rate', 'update-self-rate', 'add-self-rate', 'desync-children-rate', 'update-preference-rate'.     |
| --critical-*           | Critical threshold. Can be: 'open-gate-rate', 'close-gate-rate', 'add-resource-rate', 'poller-restart-rate', 'update-resource-rate', 'session-expired-rate', 'update-acl-children-rate', 'sync-children-rate', 'remove-child-rate', 'update-status-resource-rate', 'remove-resource-rate', 'update-status-inherited-rate', 'add-child-rate', 'remove-self-rate',' remove-parent-rate','add-preference-rate', 'create-gate-rate', 'add-parent-rate', 'update-acl-rate', 'remove-preference-rate', 'update-self-rate', 'add-self-rate', 'desync-children-rate', 'update-preference-rate'.    |

</TabItem>
<TabItem value="Open-Views" label="Open-Views">

| Option       | Description                                  |
|:-------------|:---------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'open-views'.     |
| --critical-* | Critical threshold. Can be: 'open-views'.    |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option            | Description                                                                               |
|:------------------|:------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). (Example: --filter-counters='session')   |
| --warning-*       | Warning threshold. Can be: 'active-session', 'queue-size'.                                |
| --critical-*      | Critical threshold. Can be: 'active-session', 'queue-size'.                               |

</TabItem>
<TabItem value="Sync-Statistics" label="Sync-Statistics">

| Option                | Description                                                                                                                                                                                                                                                                                                                                 |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters     | Only display some counters (regexp can be used). (Example: --filter-counters='centreon')                                                                                                                                                                                                                                                    |
| --warning-*           | Warning threshold. Can be: 'map-synchronization-centreon-count', 'map-synchronization-centreon-duration-average-milliseconds', 'map-synchronization-centreon-duration-max-milliseconds'.                                                                                                                                                    |
| --critical-*          | Critical threshold. Can be: 'map-synchronization-centreon-count', 'map-synchronization-centreon-duration-average-milliseconds', 'map-synchronization-centreon-duration-max-milliseconds'.                                                                                                                                                   |
| --warning-instance-*  | Warning threshold. Can be: 'map-synchronization-acl-count', 'map-synchronization-acl-duration-average-milliseconds', 'map-synchronization-acl-duration-max-milliseconds', 'map-synchronization-resource-count', 'map-synchronization-resource-duration-average-milliseconds', 'map-synchronization-resource-duration-max-milliseconds'.     |
| --critical-instance-* | Critical threshold. Can be: 'map-synchronization-acl-count', 'map-synchronization-acl-duration-average-milliseconds', 'map-synchronization-acl-duration-max-milliseconds', 'map-synchronization-resource-count', 'map-synchronization-resource-duration-average-milliseconds', 'map-synchronization-resource-duration-max-milliseconds'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_centreon_map_jmx.pl \
	--plugin=apps::centreon::map::jmx::plugin \
	--mode=sync-stats \
	--help
```
