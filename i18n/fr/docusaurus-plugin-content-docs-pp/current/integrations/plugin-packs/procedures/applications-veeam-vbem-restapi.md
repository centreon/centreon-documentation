---
id: applications-veeam-vbem-restapi
title: Veeam Backup Enterprise Manager
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Veeam Backup Enterprise Manager Rest API** apporte un modèle d'hôte :

* **App-Veeam-Vbem-Restapi**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Veeam-Vbem-Restapi" label="App-Veeam-Vbem-Restapi">

| Alias        | Modèle de service                   | Description         | Découverte |
|:-------------|:------------------------------------|:--------------------|:-----------|
| Repositories | App-Veeam-Vbem-Restapi-Repositories | Contrôle les dépôts | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Veeam-Vbem-Restapi** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias | Modèle de service           | Description       | Découverte |
|:------|:----------------------------|:------------------|:-----------|
| Jobs  | App-Veeam-Vbem-Restapi-Jobs | Contrôle les jobs | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                        | Description                                    |
|:---------------------------------------|:-----------------------------------------------|
| App-Veeam-Vbem-Restapi-Job-Name        | Découvre les jobs et supervise le statut       |
| App-Veeam-Vbem-Restapi-Repository-Name | Découvre les dépôts et supervise l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| jobs.executions.detected.count              |       |
| *job_name*#job.executions.failed.percentage | %     |
| *job_name*#job.execution.last.seconds       | s     |
| *job_name*#job.running.duration.seconds     | s     |
| job execution status                        |       |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Métrique                                            | Unité |
|:----------------------------------------------------|:------|
| *repository_name*#repository.space.usage.bytes      | B     |
| *repository_name*#repository.space.free.bytes       | B     |
| *repository_name*#repository.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec des droits de lecture sur l'[API](https://helpcenter.veeam.com/docs/backup/em_rest/em_web_api_reference.html?ver=120) Veeam Backup Enterprise Manager est nécessaire.

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
dnf install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-veeam-vbem-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Veeam Backup Enterprise Manager Rest API**
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
dnf install centreon-plugin-Applications-Veeam-Vbem-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Veeam-Vbem-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-veeam-vbem-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Veeam-Vbem-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Veeam-Vbem-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro               | Description                                                                                           | Valeur par défaut | Obligatoire |
|:--------------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| VBEMAPIPASSWORD     | Set password                                                                                          |                   |             |
| VBEMAPIPORT         | Port used                                                                                             | 9398              |             |
| VBEMAPIPROTOCOL     | Specify https if needed                                                                               | https             |             |
| VBEMAPIUSERNAME     | Set username                                                                                          |                   |             |
| VBEMAPIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Macro                           | Description                                                                                                                                               | Valeur par défaut       | Obligatoire |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:------------|
| TIMEFRAME                       | Timeframe to get BackupJobSession (in seconds. Default: 86400)                                                                                            | 86400                   |             |
| UNIT                            | Select the unit for last execution time threshold. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds | s                       |             |
| FILTERUID                       | Filter jobs by UID                                                                                                                                        |                         |             |
| FILTERNAME                      | Filter jobs by name                                                                                                                                       |                         |             |
| FILTERTYPE                      | Filter jobs by type                                                                                                                                       |                         |             |
| WARNINGEXECUTIONSTATUS          | Set warning threshold for last job execution status (Default: %{status} =~ /warning/i). Can use special variables like: %{status}, %{jobName}            | %{status} =~ /warning/i |             |
| CRITICALEXECUTIONSTATUS         | Set critical threshold for last job execution status (Default: %{status} =~ /failed/i). Can use special variables like: %{status}, %{jobName}            | %{status} =~ /failed/i  |             |
| WARNINGJOBEXECUTIONLAST         | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBEXECUTIONLAST        | Thresholds                                                                                                                                                |                         |             |
| WARNINGJOBEXECUTIONSFAILEDPRCT  | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBEXECUTIONSFAILEDPRCT | Thresholds                                                                                                                                                |                         |             |
| WARNINGJOBRUNNINGDURATION       | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBRUNNINGDURATION      | Thresholds                                                                                                                                                |                         |             |
| WARNINGJOBSEXECUTIONSDETECTED   | Thresholds                                                                                                                                                |                         |             |
| CRITICALJOBSEXECUTIONSDETECTED  | Thresholds                                                                                                                                                |                         |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                       | --verbose               |             |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME             | Filter repositories by name (can be a regexp)                                                       |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_veeam_vbem_restapi.pl \
	--plugin=apps::backup::veeam::vbem::restapi::plugin \
	--mode=repositories \
	--hostname='10.0.0.1' \
	--port='9398' \
	--proto='https' \
	--api-username='myuser' \
	--api-password='mypass'  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All repositories are ok | 'Default Backup Repository#repository.space.usage.bytes'=136771342336B;;;0;268368347136 'Default Backup Repository#repository.space.free.bytes'=131597004800B;;;0;268368347136 'Default Backup Repository#repository.space.usage.percentage'=50.96%;;;0;100 'Repository-SCALITY-veeam#repository.space.usage.bytes'=0B;;;0;1048576000000000 'Repository-SCALITY-veeam#repository.space.free.bytes'=1048576000000000B;;;0;1048576000000000 'Repository-SCALITY-veeam#repository.space.usage.percentage'=0.00%;;;0;100 'Scale-out Backup Repository I3M#repository.space.usage.bytes'=1123733454848B;;;0;23890250670080 'Scale-out Backup Repository I3M#repository.space.free.bytes'=22766517215232B;;;0;23890250670080 'Scale-out Backup Repository I3M#repository.space.usage.percentage'=4.70%;;;0;100 'Scale-out Backup Repository INFRASTRUCTURE#repository.space.usage.bytes'=158555994574848B;;;0;280007584776192 'Scale-out Backup Repository INFRASTRUCTURE#repository.space.free.bytes'=121451590201344B;;;0;280007584776192 'Scale-out Backup Repository INFRASTRUCTURE#repository.space.usage.percentage'=56.63%;;;0;100 'Scale-out Backup Repository MEDICAL & FONCTIONNEL#repository.space.usage.bytes'=163895073898496B;;;0;280007584776192 'Scale-out Backup Repository MEDICAL & FONCTIONNEL#repository.space.free.bytes'=116112510877696B;;;0;280007584776192 'Scale-out Backup Repository MEDICAL & FONCTIONNEL#repository.space.usage.percentage'=58.53%;;;0;100 'Scale-out Backup Repository ORACLE & SQL#repository.space.usage.bytes'=163858194489344B;;;0;280007584776192 'Scale-out Backup Repository ORACLE & SQL#repository.space.free.bytes'=116149390286848B;;;0;280007584776192 'Scale-out Backup Repository ORACLE & SQL#repository.space.usage.percentage'=58.52%;;;0;100
repository 'Default Backup Repository' space usage total: 249.94 GB used: 127.38 GB (50.96%) free: 122.56 GB (49.04%)
repository 'Repository-SCALITY-veeam' space usage total: 953.67 TB used: 0.00 B (0.00%) free: 953.67 TB (100.00%)
repository 'Scale-out Backup Repository I3M' space usage total: 21.73 TB used: 1.02 TB (4.70%) free: 20.71 TB (95.30%)
repository 'Scale-out Backup Repository INFRASTRUCTURE' space usage total: 254.67 TB used: 144.21 TB (56.63%) free: 110.46 TB (43.37%)
repository 'Scale-out Backup Repository MEDICAL & FONCTIONNEL' space usage total: 254.67 TB used: 149.06 TB (58.53%) free: 105.60 TB (41.47%)
repository 'Scale-out Backup Repository ORACLE & SQL' space usage total: 254.67 TB used: 149.03 TB (58.52%) free: 105.64 TB (41.48%)
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_veeam_vbem_restapi.pl \
	--plugin=apps::backup::veeam::vbem::restapi::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode              | Modèle de service associé             |
|:------------------|:--------------------------------------|
| cache             | Not used in this Monitoring Connector |
| jobs              | App-Veeam-Vbem-Restapi-Jobs           |
| list-jobs         | Used for service discovery            |
| list-repositories | Used for service discovery            |
| repositories      | App-Veeam-Vbem-Restapi-Repositories   |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type         |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global       |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global       |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --custommode                               | Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global       |
| --list-custommode                          | List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global       |
| --multiple                                 | Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global       |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global       |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output       |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output       |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output       |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output       |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output       |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output       |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output       |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output       |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output       |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output       |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output       |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output       |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output       |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').      Veeam Backup Enterprise Manager Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output       |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --port                                     | Port used (Default: 9398)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Api          |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Api          |
| --api-username                             | Set username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --api-password                             | Set password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --timeout                                  | Set timeout in seconds (Default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Api          |
| --cache-use                                | Use the cache file (created with cache mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Api          |
| --http-peer-addr                           | Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Http global  |
| --proxyurl                                 | Proxy URL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --proxypac                                 | Proxy pac file (can be an url or local file)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Http global  |
| --insecure                                 | Insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Http global  |
| --http-backend                             | Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Http global  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Backend lwp  |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Backend curl |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Retention    |
| --redis-server                             | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Retention    |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Retention    |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Retention    |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Retention    |
| --statefile-dir                            | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Retention    |
| --statefile-suffix                         | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Retention    |
| --statefile-concat-cwd                     | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Retention    |
| --statefile-format                         | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Retention    |
| --statefile-key                            | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Retention    |
| --statefile-cipher                         | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Retention    |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Option                      | Description                                                                                                                                                  | Type |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-uid                | Filter jobs by UID.                                                                                                                                          | Mode |
| --filter-name               | Filter jobs by name.                                                                                                                                         | Mode |
| --filter-type               | Filter jobs by type.                                                                                                                                         | Mode |
| --timeframe                 | Timeframe to get BackupJobSession (in seconds. Default: 86400).                                                                                              | Mode |
| --unit                      | Select the unit for last execution time threshold. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   | Mode |
| --unknown-execution-status  | Set unknown threshold for last job execution status. Can used special variables like: %{status}, %{jobName}                                                  | Mode |
| --warning-execution-status  | Set warning threshold for last job execution status (Default: %{status} =~ /warning/i). Can used special variables like: %{status}, %{jobName}               | Mode |
| --critical-execution-status | Set critical threshold for last job execution status (Default: %{status} =~ /failed/i). Can used special variables like: %{status}, %{jobName}               | Mode |
| --warning-* --critical-*    | Thresholds. Can be: 'jobs-executions-detected', 'job-executions-failed-prct', 'job-execution-last', 'job-running-duration'.                                  | Mode |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Option                   | Description                                                                   | Type |
|:-------------------------|:------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter repositories by name (can be a regexp).                                | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_veeam_vbem_restapi.pl \
	--plugin=apps::backup::veeam::vbem::restapi::plugin \
	--mode=repositories \
    --help
```
