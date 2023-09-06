---
id: cloud-azure-compute-virtualmachine
title: Azure Virtual Machine
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Azure Virtual Machine** apporte un modèle d'hôte :

* **Cloud-Azure-Compute-VirtualMachine-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Azure-Compute-VirtualMachine-custom" label="Cloud-Azure-Compute-VirtualMachine-custom">

| Alias     | Modèle de service                                       | Description                          |
|:----------|:--------------------------------------------------------|:-------------------------------------|
| Cpu-Usage | Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api-custom | Contrôle l'utilisation CPU           |
| Diskio    | Cloud-Azure-Compute-VirtualMachine-Diskio-Api-custom    | Contrôle l'utilisation des écritures |
| Health    | Cloud-Azure-Compute-VirtualMachine-Health-Api-custom    | Contrôle le statut de la VM          |
| Memory    | Cloud-Azure-Compute-VirtualMachine-Memory-Api-custom    | Contrôle l'utilisation de la memoire |
| Network   | Cloud-Azure-Compute-VirtualMachine-Network-Api-custom   | Contrôle l'utilisation réseau        |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Azure-Compute-VirtualMachine-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                                             | Description                                                                |
|:----------------|:--------------------------------------------------------------|:---------------------------------------------------------------------------|
| Cpu-Credit      | Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api-custom      | Contrôle l'utilisation des crédits CPU                                     |
| Vm-Sizes-Global | Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api-custom | Contrôle permettant de remonter le nombre de machines virtuelles par types |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

Le connecteur de supervision Centreon **Azure Virtual Machine** inclut un fournisseur de découverte
d'hôtes nommé **Microsoft Azure Virtual Machine**. Celui-ci permet de découvrir l'ensemble des instances
rattachées à une souscription Microsoft Azure donnée et de les ajouter à la liste des hôtes supervisés.

> Cette découverte n'est compatible qu'avec le [mode **api**. Le mode **azcli**](../getting-started/how-to-guides/azure-credential-configuration.md) n'est pas supporté dans le cadre
> de cette utilisation.

Rendez-vous sur la documentation dédiée pour en savoir plus sur la [découverte automatique d'hôtes](/docs/monitoring/discovery/hosts-discovery).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Métrique                         | Unité |
|:---------------------------------|:------|
| azvm.cpu.credits.consumed.count  | count |
| azvm.cpu.credits.remaining.count | count |
| azvm.cpu.utilization.percentage  | %     |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Métrique                         | Unité |
|:---------------------------------|:------|
| azvm.cpu.credits.consumed.count  | count |
| azvm.cpu.credits.remaining.count | count |
| azvm.cpu.utilization.percentage  | %     |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Métrique                  | Unité |
|:--------------------------|:------|
| azvm.disk.read.bytes      | B     |
| azvm.disk.write.bytes     | B     |
| azvm.disk.read.persecond  | N/A   |
| azvm.disk.write.persecond | N/A   |

</TabItem>
<TabItem value="Health" label="Health">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                    | Unité |
|:----------------------------|:------|
| azvm.memory.available.bytes | B     |

</TabItem>
<TabItem value="Network" label="Network">

| Métrique               | Unité |
|:-----------------------|:------|
| azvm.network.out.bytes | B     |
| azvm.network.in.bytes  | B     |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

Coming soon

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir
les prérequis nécessaires pour interroger les API d'Azure.

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
dnf install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-compute-virtualmachine
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Azure Virtual Machine**
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
dnf install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-compute-virtualmachine-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
3. Appliquez le modèle d'hôte **Cloud-Azure-Compute-VirtualMachine-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires. Par exemple, pour ce connecteur, **AZURECUSTOMMODE** (valeurs possibles : **api** ou **azcli**). En effet, il existe plusieurs modes de communication avec l'équipement supervisé : soit l'outil en ligne de commande azcli, soit une interrogation directe de l'api.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Macro              | Description                                                                                                                                                        | Valeur par défaut            | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| AZURECLIENTID      | Set Azure client ID                                                                                                                                                |                              | X           |
| AZURECLIENTSECRET  | Set Azure client secret                                                                                                                                            |                              | X           |
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                                         | api                          |             |
| AZURERESOURCE      | Set resource name or id (Required)                                                                                                                                 |                              |             |
| AZURERESOURCEGROUP | Set resource group (Required if resource's name is used)                                                                                                           |                              | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (Required if logged to several subscriptions)                                                                                               |                              | X           |
| AZURETENANT        | Set Azure tenant ID                                                                                                                                                |                              | X           |
| PROXYURL           | Proxy URL if any                                                                                                                                                   |                              |             |
| STATUSCRITICAL     | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /^Unavailable$/'). You can use the following variables: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |             |
| STATUSOK           | Define the conditions to match for the status to be OK (Default: '%{status} =~ /^Available$/'). You can use the following variables: %{status}, %{summary}         | %{status} =~ /^Available$/   |             |
| STATUSUNKNOWN      | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /^Unknown$/'). You can use the following variables: %{status}, %{summary}      | %{status} =~ /^Unknown$/     |             |
| STATUSWARNING      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{summary}                              |                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                              |                              |             |

> Paramétrez les options suivantes dans la macro EXTRAOPTIONS si vous superviser des ressources Microsoft Azure géré par 21Vianet (Azure China):
--management-endpoint='https://management.chinacloudapi.cn' --login-endpoint='https://login.partner.microsoftonline.cn'.

</TabItem>
<TabItem value="Azure AZ CLI" label="Azure AZ CLI">

| Macro              | Description                                                                                                                                                        | Valeur par défaut            | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| AZURECUSTOMMODE    | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                                         | api                          |             |
| AZURERESOURCE      | Set resource name or id (Required)                                                                                                                                 |                              |             |
| AZURERESOURCEGROUP | Set resource group (Required if resource's name is used)                                                                                                           |                              | X           |
| AZURESUBSCRIPTION  | Set Azure subscription (Required if logged to several subscriptions)                                                                                               |                              | X           |
| PROXYURL           | Proxy URL if any                                                                                                                                                   |                              |             |
| STATUSCRITICAL     | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /^Unavailable$/'). You can use the following variables: %{status}, %{summary} | %{status} =~ /^Unavailable$/ |             |
| STATUSOK           | Define the conditions to match for the status to be OK (Default: '%{status} =~ /^Available$/'). You can use the following variables: %{status}, %{summary}         | %{status} =~ /^Available$/   |             |
| STATUSUNKNOWN      | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /^Unknown$/'). You can use the following variables: %{status}, %{summary}      | %{status} =~ /^Unknown$/     |             |
| STATUSWARNING      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{summary}                              |                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                              |                              |             |

</TabItem>
</Tabs>

> Deux méthodes peuvent être utilisées pour définir l'authentification :
>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro **AZURERESOURCE**.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Macro                       | Description                                                                                                            | Valeur par défaut | Obligatoire |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp)           | Credits           |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                | 900               |             |
| INTERVAL                    | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                         | PT1M              |             |
| AGGREGATION                 | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGCPUCREDITSCONSUMED   | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUCREDITSCONSUMED  | Critical threshold                                                                                                     |                   |             |
| WARNINGCPUCREDITSREMAINING  | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUCREDITSREMAINING | Critical threshold                                                                                                     |                   |             |
| WARNINGCPUUTILIZATION       | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUUTILIZATION      | Critical threshold                                                                                                     |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                    | --verbose         |             |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Macro                       | Description                                                                                                            | Valeur par défaut | Obligatoire |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp)           | Percentage        |             |
| TIMEFRAME                   | Set timeframe in seconds (i.e. 3600 to check last hour)                                                                | 900               |             |
| INTERVAL                    | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H)                         | PT1M              |             |
| AGGREGATION                 | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times | average           |             |
| WARNINGCPUCREDITSCONSUMED   | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUCREDITSCONSUMED  | Critical threshold                                                                                                     |                   |             |
| WARNINGCPUCREDITSREMAINING  | Warning threshold                                                                                                      |                   |             |
| CRITICALCPUCREDITSREMAINING | Critical threshold                                                                                                     |                   |             |
| WARNINGCPUUTILIZATION       | Warning threshold                                                                                                      | 80                |             |
| CRITICALCPUUTILIZATION      | Critical threshold                                                                                                     | 90                |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                    | --verbose         |             |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Macro                     | Description                                                                                                                               | Valeur par défaut   | Obligatoire |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| TIMEFRAME                 |                                                                                                                                           | 900                 |             |
| INTERVAL                  |                                                                                                                                           | PT1M                |             |
| AGGREGATION               |                                                                                                                                           | average             |             |
| FILTERMETRIC              | Filter metrics (Can be: 'Disk Read Bytes', 'Disk Write Bytes', 'Disk Read Operations/Sec', 'Disk Write Operations/Sec') (Can be a regexp) |                     |             |
| WARNINGREADBYTES          | Warning thresholds                                                                                                                        |                     |             |
| CRITICALREADBYTES         | Critical thresholds                                                                                                                       |                     |             |
| WARNINGREADOPSPERSECOND   | Warning thresholds                                                                                                                        |                     |             |
| CRITICALREADOPSPERSECOND  | Critical thresholds                                                                                                                       |                     |             |
| WARNINGWRITEBYTES         | Warning thresholds                                                                                                                        |                     |             |
| CRITICALWRITEBYTES        | Critical thresholds                                                                                                                       |                     |             |
| WARNINGWRITEOPSPERSECOND  | Warning thresholds                                                                                                                        |                     |             |
| CRITICALWRITEOPSPERSECOND | Critical thresholds                                                                                                                       |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                       | --per-sec --verbose |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                   | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME               |                                                                                                     | 900               |             |
| INTERVAL                |                                                                                                     | PT1M              |             |
| AGGREGATION             |                                                                                                     | average           |             |
| WARNINGMEMORYAVAILABLE  | Warning threshold                                                                                   |                   |             |
| CRITICALMEMORYAVAILABLE | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro            | Description                                                                                         | Valeur par défaut   | Obligatoire |
|:-----------------|:----------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| TIMEFRAME        |                                                                                                     | 900                 |             |
| INTERVAL         |                                                                                                     | PT1M                |             |
| AGGREGATION      |                                                                                                     | average             |             |
| FILTERMETRIC     | Filter metrics (Can be: 'Network In', 'Network Out') (Can be a regexp)                              |                     |             |
| WARNINGBYTESIN   | Warning thresholds                                                                                  |                     |             |
| CRITICALBYTESIN  | Critical thresholds                                                                                 |                     |             |
| WARNINGBYTESOUT  | Warning thresholds                                                                                  |                     |             |
| CRITICALBYTESOUT | Critical thresholds                                                                                 |                     |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --per-sec --verbose |             |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

| Macro        | Description                                                                                                             | Valeur par défaut | Obligatoire |
|:-------------|:------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTYPE   | Filter by virtual machine type (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'gpu', 'high\_performance') | .*                |             |
| FILTERSIZE   | Filter by virtual machine size (regexp)                                                                                 | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                     | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une instance Azure en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--mode=network \
	--custommode='api' \
	--resource='' \
	--resource-group='' \
	--subscription='' \
	--tenant='' \
	--client-id='' \
	--client-secret='' \
	--proxyurl=''  \
	--filter-metric='' \
	--timeframe='900' \
	--interval='PT1M' \
	--aggregation='average' \
	--warning-bytes-out='' \
	--critical-bytes-out='' \
	--warning-bytes-in='' \
	--critical-bytes-in='' \
	--per-sec \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Network Out: 4 B Network In: 33 B | 'azvm.network.out.bytes'=4B;;;0; 'azvm.network.in.bytes'=33B;;;0; 
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
/usr/lib/centreon/plugins/centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                            | Modèle de service associé                                                                                             |
|:------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/cpu.pm)]                      | Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api-custom<br />Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/discovery.pm)]          | Used for host discovery                                                                                               |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/diskio.pm)]                | Cloud-Azure-Compute-VirtualMachine-Diskio-Api-custom                                                                  |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/health.pm)]                | Cloud-Azure-Compute-VirtualMachine-Health-Api-custom                                                                  |
| list-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/listresources.pm)] | Not used in this Monitoring Connector                                                                                 |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/memory.pm)]                | Cloud-Azure-Compute-VirtualMachine-Memory-Api-custom                                                                  |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/network.pm)]              | Cloud-Azure-Compute-VirtualMachine-Network-Api-custom                                                                 |
| vm-sizes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/azure/compute/virtualmachine/mode/vmsizes.pm)]             | Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api-custom                                                         |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--list-custommode
```

Le plugin apporte les custom modes suivants :

* api
* azcli

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

#### Options des custom modes

Les options spécifiques aux **custom modes** sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="api" label="api">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --subscription         | Set Azure subscription ID.                                                                                                                                                                                                                    |
| --tenant               | Set Azure tenant ID.                                                                                                                                                                                                                          |
| --client-id            | Set Azure client ID.                                                                                                                                                                                                                          |
| --client-secret        | Set Azure client secret.                                                                                                                                                                                                                      |
| --login-endpoint       | Set Azure login endpoint URL (Default: 'https://login.microsoftonline.com')                                                                                                                                                                   |
| --management-endpoint  | Set Azure management endpoint URL (Default: 'https://management.azure.com')                                                                                                                                                                   |
| --timeframe            | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                                                                                                                                      |
| --interval             | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                                                                                                                               |
| --aggregation          | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                                                                                                                       |
| --zeroed               | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                                                                                                                           |
| --timeout              | Set timeout in seconds (Default: 10).                                                                                                                                                                                                         |
| --http-peer-addr       | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                           |
| --proxyurl             | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                           |
| --proxypac             | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                |
| --insecure             | Accept insecure SSL connections.                                                                                                                                                                                                              |
| --http-backend         | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                       |
| --ssl-opt              | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                     |
| --curl-opt             | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                              |
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
| --filter-dimension     | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"                                                                                                          |
| --per-sec              | Display the statistics based on a per-second period.                                                                                                                                                                                          |

</TabItem>
<TabItem value="azcli" label="azcli">

| Option             | Description                                                                                                                            |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| --subscription     | Set Azure subscription (Required if logged to several subscriptions).                                                                  |
| --timeframe        | Set timeframe in seconds (i.e. 3600 to check last hour).                                                                               |
| --interval         | Set interval of the metric query (Can be : PT1M, PT5M, PT15M, PT30M, PT1H, PT6H, PT12H, PT24H).                                        |
| --aggregation      | Aggregate monitoring. Can apply to: 'minimum', 'maximum', 'average', 'total' and 'count'. Can be called multiple times.                |
| --zeroed           | Set metrics value to 0 if they are missing. Useful when some metrics are undefined.                                                    |
| --timeout          | Set timeout in seconds (Default: 50).                                                                                                  |
| --sudo             | Use 'sudo' to execute the command.                                                                                                     |
| --command          | Command to get information (Default: 'az'). Can be changed if you have output in a file.                                               |
| --command-path     | Command path (Default: none).                                                                                                          |
| --command-options  | Command options (Default: none).                                                                                                       |
| --proxyurl         | Proxy URL if any                                                                                                                       |
| --filter-dimension | Specify the metric dimension (required for some specific metrics) Syntax example: --filter-dimension="$metricname eq '$metricvalue'"   |
| --per-sec          | Display the statistics based on a per-second period.                                                                                   |

</TabItem>
</Tabs>

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu-Credit" label="Cpu-Credit">

| Option             | Description                                                                                                     |
|:-------------------|:----------------------------------------------------------------------------------------------------------------|
| --resource         | Set resource name or id (Required).                                                                             |
| --resource-group   | Set resource group (Required if resource's name is used).                                                       |
| --filter-metric    | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp).   |
| --warning-$label$  | Warning threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')          |
| --critical-$label$ | Critical threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')         |

</TabItem>
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Option             | Description                                                                                                     |
|:-------------------|:----------------------------------------------------------------------------------------------------------------|
| --resource         | Set resource name or id (Required).                                                                             |
| --resource-group   | Set resource group (Required if resource's name is used).                                                       |
| --filter-metric    | Filter metrics (Can be: 'CPU Credits Remaining', 'CPU Credits Consumed', 'Percentage CPU') (Can be a regexp).   |
| --warning-$label$  | Warning threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')          |
| --critical-$label$ | Critical threshold ($label$ can be: 'cpu-credits-remaining', 'cpu-credits-consumed', 'cpu-utilization')         |

</TabItem>
<TabItem value="Diskio" label="Diskio">

| Option             | Description                                                                                                                                  |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| --resource         | Set resource name or id (Required).                                                                                                          |
| --resource-group   | Set resource group (Required if resource's name is used).                                                                                    |
| --filter-metric    | Filter metrics (Can be: 'Disk Read Bytes', 'Disk Write Bytes', 'Disk Read Operations/Sec', 'Disk Write Operations/Sec') (Can be a regexp).   |
| --warning-$label$  | Warning thresholds. ($label$ can be: 'read-bytes', 'write-bytes', 'read-ops-persecond', 'write-ops-persecond')                               |
| --critical-$label$ | Critical thresholds. ($label$ can be: 'read-bytes', 'write-bytes', 'read-ops-persecond', 'write-ops-persecond')                              |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource        | Set resource name or id (Required).                                                                                                                                  |
| --resource-group  | Set resource group (Required if resource's name is used).                                                                                                            |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}, %{summary}                                |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /^Unavailable$/'). You can use the following variables: %{status}, %{summary}   |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} =~ /^Unknown$/'). You can use the following variables: %{status}, %{summary}        |
| --ok-status       | Define the conditions to match for the status to be OK (Default: '%{status} =~ /^Available$/'). You can use the following variables: %{status}, %{summary}           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                      | Description                                                 |
|:----------------------------|:------------------------------------------------------------|
| --resource                  | Set resource name or id (Required).                         |
| --resource-group            | Set resource group (Required if resource's name is used).   |
| --warning-memory-available  | Warning threshold.                                          |
| --critical-memory-available | Critical threshold.                                         |

</TabItem>
<TabItem value="Network" label="Network">

| Option             | Description                                                               |
|:-------------------|:--------------------------------------------------------------------------|
| --resource         | Set resource name or id (Required).                                       |
| --resource-group   | Set resource group (Required if resource's name is used).                 |
| --filter-metric    | Filter metrics (Can be: 'Network In', 'Network Out') (Can be a regexp).   |
| --warning-$label$  | Warning thresholds ($label$ can be: 'bytes-in', 'bytes-out').             |
| --critical-$label$ | Critical thresholds ($label$ can be: 'bytes-in', 'bytes-out').            |

</TabItem>
<TabItem value="Vm-Sizes-Global" label="Vm-Sizes-Global">

| Option           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --resource-group | Set resource group (Optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-type    | Filter by virtual machine type (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'gpu', 'high\_performance')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --filter-size    | Filter by virtual machine size (regexp)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --warning-*      | Warning threshold. Can be: 'standard-b1s', 'standard-b1ms', 'standard-b2s', 'standard-b2ms', 'standard-b4ms', 'standard-b8ms', 'standard-d2s-v3', 'standard-d4s-v3', 'standard-d8s-v3', 'standard-d16s-v3', 'standard-d32s-v3', 'standard-d64s-v3', 'standard-d2-v3', 'standard-d4-v3', 'standard-d8-v3', 'standard-d16-v3', 'standard-d32-v3', 'standard-d64-v3', 'standard-ds1-v2', 'standard-ds2-v2', 'standard-ds3-v2', 'standard-ds4-v2', 'standard-ds5-v2', 'standard-d1-v2', 'standard-d2-v2', 'standard-d3-v2', 'standard-d4-v2', 'standard-d5-v2', 'standard-a1-v2', 'standard-a2-v2', 'standard-a4-v2', 'standard-a8-v2', 'standard-a2m-v2', 'standard-a4m-v2', 'standard-a8m-v2', 'standard-f2s-v2', 'standard-f4s-v2', 'standard-f8s-v2', 'standard-f16s-v2', 'standard-f32s-v2', 'standard-f64s-v2', 'standard-f72s-v2', 'standard-f1s', 'standard-f2s', 'standard-f4s', 'standard-f8s', 'standard-f16s', 'standard-f1', 'standard-f2', 'standard-f4', 'standard-f8', 'standard-f16', 'standard-e2s-v3', 'standard-e4s-v3', 'standard-e8s-v3', 'standard-e16s-v3', 'standard-e32s-v3', 'standard-e64s-v3', 'standard-e64is-v3', 'standard-e2-v3', 'standard-e4-v3', 'standard-e8-v3', 'standard-e16-v3', 'standard-e32-v3', 'standard-e64-v3', 'standard-e64i-v3', 'standard-m8ms3', 'standard-m16ms', 'standard-m32ts', 'standard-m32ls', 'standard-m32ms', 'standard-m64s', 'standard-m64ls', 'standard-m64ms', 'standard-m128s', 'standard-m128ms', 'standard-m64', 'standard-m64m', 'standard-m128', 'standard-m128m', 'standard-gs1', 'standard-gs2', 'standard-gs3', 'standard-gs4', 'standard-gs5', 'standard-g1', 'standard-g2', 'standard-g3', 'standard-g4', 'standard-g5', 'standard-ds11-v2', 'standard-ds12-v2', 'standard-ds13-v2', 'standard-ds14-v2', 'standard-ds15-v2', 'standard-d11-v2', 'standard-d12-v2', 'standard-d13-v2', 'standard-d14-v2', 'standard-d15-v2', 'standard-l4s', 'standard-l8s', 'standard-l16s', 'standard-l32s', 'standard-nc6', 'standard-nc12', 'standard-nc24', 'standard-nc24r', 'standard-nc6s-v2', 'standard-nc12s-v2', 'standard-nc24s-v2', 'standard-nc24rs-v2', 'standard-nc6s-v3', 'standard-nc12s-v3', 'standard-nc24s-v3', 'standard-nc24rs-v3', 'standard-nd6s', 'standard-nd12s', 'standard-nd24s', 'standard-nd24rs', 'standard-nv6', 'standard-nv12', 'standard-nv24','standard-h8', 'standard-h16', 'standard-h8m', 'standard-h16m', 'standard-h16r', 'standard-h16mr'.    |
| --critical-*     | Critical threshold. Can be: 'standard-b1s', 'standard-b1ms', 'standard-b2s', 'standard-b2ms', 'standard-b4ms', 'standard-b8ms', 'standard-d2s-v3', 'standard-d4s-v3', 'standard-d8s-v3', 'standard-d16s-v3', 'standard-d32s-v3', 'standard-d64s-v3', 'standard-d2-v3', 'standard-d4-v3', 'standard-d8-v3', 'standard-d16-v3', 'standard-d32-v3', 'standard-d64-v3', 'standard-ds1-v2', 'standard-ds2-v2', 'standard-ds3-v2', 'standard-ds4-v2', 'standard-ds5-v2', 'standard-d1-v2', 'standard-d2-v2', 'standard-d3-v2', 'standard-d4-v2', 'standard-d5-v2', 'standard-a1-v2', 'standard-a2-v2', 'standard-a4-v2', 'standard-a8-v2', 'standard-a2m-v2', 'standard-a4m-v2', 'standard-a8m-v2', 'standard-f2s-v2', 'standard-f4s-v2', 'standard-f8s-v2', 'standard-f16s-v2', 'standard-f32s-v2', 'standard-f64s-v2', 'standard-f72s-v2', 'standard-f1s', 'standard-f2s', 'standard-f4s', 'standard-f8s', 'standard-f16s', 'standard-f1', 'standard-f2', 'standard-f4', 'standard-f8', 'standard-f16', 'standard-e2s-v3', 'standard-e4s-v3', 'standard-e8s-v3', 'standard-e16s-v3', 'standard-e32s-v3', 'standard-e64s-v3', 'standard-e64is-v3', 'standard-e2-v3', 'standard-e4-v3', 'standard-e8-v3', 'standard-e16-v3', 'standard-e32-v3', 'standard-e64-v3', 'standard-e64i-v3', 'standard-m8ms3', 'standard-m16ms', 'standard-m32ts', 'standard-m32ls', 'standard-m32ms', 'standard-m64s', 'standard-m64ls', 'standard-m64ms', 'standard-m128s', 'standard-m128ms', 'standard-m64', 'standard-m64m', 'standard-m128', 'standard-m128m', 'standard-gs1', 'standard-gs2', 'standard-gs3', 'standard-gs4', 'standard-gs5', 'standard-g1', 'standard-g2', 'standard-g3', 'standard-g4', 'standard-g5', 'standard-ds11-v2', 'standard-ds12-v2', 'standard-ds13-v2', 'standard-ds14-v2', 'standard-ds15-v2', 'standard-d11-v2', 'standard-d12-v2', 'standard-d13-v2', 'standard-d14-v2', 'standard-d15-v2', 'standard-l4s', 'standard-l8s', 'standard-l16s', 'standard-l32s', 'standard-nc6', 'standard-nc12', 'standard-nc24', 'standard-nc24r', 'standard-nc6s-v2', 'standard-nc12s-v2', 'standard-nc24s-v2', 'standard-nc24rs-v2', 'standard-nc6s-v3', 'standard-nc12s-v3', 'standard-nc24s-v3', 'standard-nc24rs-v3', 'standard-nd6s', 'standard-nd12s', 'standard-nd24s', 'standard-nd24rs', 'standard-nv6', 'standard-nv12', 'standard-nv24','standard-h8', 'standard-h16', 'standard-h8m', 'standard-h16m', 'standard-h16r', 'standard-h16mr'.   |
| --running        | Only check running virtual machines (only with az CLI).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_compute_virtualmachine_api.pl \
	--plugin=cloud::azure::compute::virtualmachine::plugin \
	--mode=network \
	--custommode='azcli' \
	--help
```
