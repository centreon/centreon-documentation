---
id: hardware-storage-emc-unisphere-restapi
slug: /hardware-storage-emc-unisphere-restapi
title: EMC Unisphere Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **EMC Unisphere Rest API**
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **EMC Unisphere Rest API** apporte un modèle d'hôte :

* **HW-Storage-EMC-Unisphere-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-EMC-Unisphere-Restapi-custom" label="HW-Storage-EMC-Unisphere-Restapi-custom">

| Alias             | Modèle de service                                         | Description                         | Découverte |
|:------------------|:----------------------------------------------------------|:------------------------------------|:----------:|
| Hardware-Global   | HW-Storage-EMC-Unisphere-Hardware-Global-Restapi-custom   | Contrôle le matériel                |            |
| Pools             | HW-Storage-EMC-Unisphere-Pools-Restapi-custom             | Contrôle les pools                  | X          |
| Replications      | HW-Storage-EMC-Unisphere-Replications-Restapi-custom      | Contrôle les réplications           | X          |
| Storage-Resources | HW-Storage-EMC-Unisphere-Storage-Resources-Restapi-custom | Contrôle les ressources de stockage | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-EMC-Unisphere-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                                    | Description                                                                         |
|:---------------------------------------------------|:------------------------------------------------------------------------------------|
| HW-Storage-EMC-Unisphere-Restapi-Pools             | Découvre les pools et les supervise |
| HW-Storage-EMC-Unisphere-Restapi-Replications      | Découvre les réplications et supervise leurs statuts |
| HW-Storage-EMC-Unisphere-Restapi-Storage-Resources | Découvre les ressources de stockage et les supervise |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| battery.status                                  | N/A   |
| disk.status           | N/A     |
| fan.status            | N/A     |
| iomodule.status      | N/A     |
| memmodule.status      | N/A     |
| psu.status | N/A     |
| dpe.status                                  | N/A   |
| ssd.status           | N/A     |
| sp.status            | N/A     |


</TabItem>
<TabItem value="Pools" label="Pools">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| status                                  | N/A   |
| *pool*#pool.space.usage.bytes           | B     |
| *pool*#pool.space.free.bytes            | B     |
| *pool*#pool.space.usage.percentage      | %     |
| *pool*#pool.subscribed.usage.bytes      | B     |
| *pool*#pool.subscribed.usage.percentage | %     |

</TabItem>
<TabItem value="Replications" label="Replications">

| Nom                | Unité |
|:-------------------|:------|
| health-status      | N/A   |
| replication-status | N/A   |

</TabItem>
<TabItem value="Storage-Resources" label="Storage-Resources">

| Nom                                              | Unité |
|:-------------------------------------------------|:------|
| status                                           | N/A   |
| status                                           | N/A   |
| *sr1*#storageresource.space.usage.bytes          | B     |
| *sr2*#storageresource.space.usage.bytes          | B     |
| *sr1*#storageresource.space.free.bytes           | B     |
| *sr2*#storageresource.space.free.bytes           | B     |
| *sr1*#storageresource.space.usage.percentage     | %     |
| *sr2*#storageresource.space.usage.percentage     | %     |
| *sr1*#storageresource.allocated.usage.bytes      | B     |
| *sr2*#storageresource.allocated.usage.bytes      | B     |
| *sr1*#storageresource.allocated.usage.percentage | %     |
| *sr2*#storageresource.allocated.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Un identifiant et un mot de passe API sont requis pour superviser EMC Unisphere via son API REST.

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
dnf install centreon-pack-hardware-storage-emc-unisphere-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-emc-unisphere-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-emc-unisphere-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-emc-unisphere-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **EMC Unisphere Rest API**
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
dnf install centreon-plugin-Hardware-Storage-Emc-Unisphere-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Emc-Unisphere-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-emc-unisphere-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Emc-Unisphere-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-EMC-Unisphere-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | EMC Unisphere API username                                                                           |                   | X           |
| APIPASSWORD     | EMC Unisphere API password                                                                           |                   | X           |
| APIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| APIPORT         | Port used (default: 443)                                                                             | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro        | Description                                                                                                                    | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'iomodule', 'memmodule', 'psu', 'dpe', 'battery', 'ssd', 'sp' | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                             | --verbose         |             |

</TabItem>
<TabItem value="Pools" label="Pools">

| Macro                  | Description                                                                                                                                                                                   | Valeur par défaut                                   | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}                            | %\{status\} =~ /unknown/i                           |             |
| FILTERNAME             | Filter pool name (can be a regexp)                                                                                                                                                            |                                                     |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{status\}, %\{display\}           | %\{status\} =~ /ok\_but\|degraded\|minor/i          |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{status\}, %\{display\} | %\{status\} =~ /major\|critical\|non\_recoverable/i |             |
| WARNINGSUBSCRIBED      | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALSUBSCRIBED     | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGSUBSCRIBEDPRCT  | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALSUBSCRIBEDPRCT | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGE           | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGE          | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGEFREE       | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGEFREE      | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGEPRCT       | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGEPRCT      | Threshold                                                                                                                                                                                     |                                                     |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                            | --verbose                                           |             |

</TabItem>
<TabItem value="Replications" label="Replications">

| Macro                     | Description                                                                                                                                                                                                   | Valeur par défaut                                           | Obligatoire |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------|:-----------:|
| FILTERNAME                | Filter replication name (can be a regexp)                                                                                                                                                                     |                                                             |             |
| WARNINGHEALTHSTATUS       | Define the conditions to match for the status to be WARNING (default: '%\{health\_status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{health\_status\}, %\{display\}           | %\{health\_status\} =~ /ok\_but\|degraded\|minor/i          |             |
| CRITICALHEALTHSTATUS      | Define the conditions to match for the status to be CRITICAL (default: '%\{health\_status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{health\_status\}, %\{display\} | %\{health\_status\} =~ /major\|critical\|non\_recoverable/i |             |
| WARNINGREPLICATIONSTATUS  | Threshold                                                                                                                                                                                                              | %\{repl\_status\} =~ /syncing/i                             |             |
| CRITICALREPLICATIONSTATUS | Threshold                                                                                                                                                                                                              | %\{repl\_status\} =~ /inconsistent/i                        |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                            | --verbose                                                   |             |

</TabItem>
<TabItem value="Storage-Resources" label="Storage-Resources">

| Macro                 | Description                                                                                                                                                                                   | Valeur par défaut                                   | Obligatoire |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}                            | %\{status\} =~ /unknown/i                           |             |
| FILTERNAME            | Filter name (can be a regexp)                                                                                                                                                                 |                                                     |             |
| WARNINGALLOCATED      | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALALLOCATED     | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGALLOCATEDPRCT  | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALALLOCATEDPRCT | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{status\}, %\{display\}           | %\{status\} =~ /ok\_but\|degraded\|minor/i          |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{status\}, %\{display\} | %\{status\} =~ /major\|critical\|non\_recoverable/i |             |
| WARNINGUSAGE          | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGE         | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGEFREE      | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGEFREE     | Threshold                                                                                                                                                                                     |                                                     |             |
| WARNINGUSAGEPRCT      | Threshold                                                                                                                                                                                     |                                                     |             |
| CRITICALUSAGEPRCT     | Threshold                                                                                                                                                                                     |                                                     |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                            | --verbose                                           |             |

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
/usr/lib/centreon/plugins/centreon_emc_unisphere_restapi.pl \
	--plugin=storage::emc::unisphere::restapi::plugin \
	--mode=storage-resources \
	--hostname='10.0.0.1' \
	--api-username='xxxxxx' \
	--api-password='xxxxxx' \
	--port='443' \
	--proto='https'  \
	--filter-name='' \
	--unknown-status='%\{status\} =~ /unknown/i' \
	--warning-status='%\{status\} =~ /ok\_but|degraded|minor/i' \
	--critical-status='%\{status\} =~ /major|critical|non\_recoverable/i' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--warning-allocated='' \
	--critical-allocated='' \
	--warning-allocated-prct='' \
	--critical-allocated-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All storage resources are ok | 'sr1#storageresource.space.usage.bytes'=38352B;;;0;total_space 'sr2#storageresource.space.usage.bytes'=47601B;;;0;total_space 'sr1#storageresource.space.free.bytes'=35866B;;;0;total_space 'sr2#storageresource.space.free.bytes'=45950B;;;0;total_space 'sr1#storageresource.space.usage.percentage'=95596%;;;0;100 'sr2#storageresource.space.usage.percentage'=57370%;;;0;100 'sr1#storageresource.allocated.usage.bytes'=35842B;;;0;total_space 'sr2#storageresource.allocated.usage.bytes'=75354B;;;0;total_space 'sr1#storageresource.allocated.usage.percentage'=28973%;;;0;100 'sr2#storageresource.allocated.usage.percentage'=40222%;;;0;100
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_emc_unisphere_restapi.pl \
	--plugin=storage::emc::unisphere::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                      | Modèle de service associé                                 |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/hardware.pm)]                           | HW-Storage-EMC-Unisphere-Hardware-Global-Restapi-custom   |
| list-pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/listpools.pm)]                        | Used for service discovery                                |
| list-replications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/listreplications.pm)]          | Used for service discovery                                |
| list-storage-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/liststorageresources.pm)] | Used for service discovery                                |
| pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/pools.pm)]                                 | HW-Storage-EMC-Unisphere-Pools-Restapi-custom             |
| replications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/replications.pm)]                   | HW-Storage-EMC-Unisphere-Replications-Restapi-custom      |
| storage-resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/unisphere/restapi/mode/storageresources.pm)]          | HW-Storage-EMC-Unisphere-Storage-Resources-Restapi-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 |   EMC Unisphere hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             |   EMC Unisphere API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-password                             |   EMC Unisphere API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Option               | Description                                                                                                                                                                                                              |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'disk', 'fan', 'iomodule', 'memmodule', 'psu', 'dpe', 'battery', 'ssd', 'sp'.                                                                                        |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='disk,dpe\_disk\_6'                                                                                             |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.   |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                             |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='disk,OK,ok\_but'         |
| --warning            |   Set warning threshold for 'temperature', 'power' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,40'                                                                                                |
| --critical           |   Set critical threshold for 'temperature', 'power' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                           |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                          |

</TabItem>
<TabItem value="Pools" label="Pools">

| Option                   | Description                                                                                                                                                                                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                                           |
| --filter-name            |   Filter pool name (can be a regexp).                                                                                                                                                             |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}                              |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{status\}, %\{display\}             |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'subscribed', 'subscribed-prct'.                                                                                           |

</TabItem>
<TabItem value="Replications" label="Replications">

| Option                   | Description                                                                                                                                                                                                       |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^health'                                                                                                                           |
| --filter-name            |   Filter replication name (can be a regexp).                                                                                                                                                                      |
| --unknown-health-status  |   Define the conditions to match for the status to be UNKNOWN (default: '%\{health\_status\} =~ /unknown/i'). You can use the following variables: %\{health\_status\}, %\{display\}                              |
| --warning-health-status  |   Define the conditions to match for the status to be WARNING (default: '%\{health\_status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{health\_status\}, %\{display\}             |
| --critical-health-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{health\_status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{health\_status\}, %\{display\}   |
| --unknown-repl-status    |   Define the conditions to match for the status to be UNKNOWN (default: '%\{repl\_status\} =~ /unknown/i'). You can use the following variables: %\{repl\_status\}, %\{display\}                                  |
| --warning-repl-status    |   Define the conditions to match for the status to be WARNING (default: '%\{repl\_status\} =~ /syncing/i'). You can use the following variables: %\{repl\_status\}, %\{display\}                                  |
| --critical-repl-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{repl\_status\} =~ /inconsistent/i'). You can use the following variables: %\{repl\_status\}, %\{display\}                            |

</TabItem>
<TabItem value="Storage-Resources" label="Storage-Resources">

| Option                   | Description                                                                                                                                                                                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                                           |
| --filter-name            |   Filter name (can be a regexp).                                                                                                                                                                  |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{display\}                              |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /ok\_but\|degraded\|minor/i'). You can use the following variables: %\{status\}, %\{display\}             |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /major\|critical\|non\_recoverable/i'). You can use the following variables: %\{status\}, %\{display\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'allocated', 'allocated-prct'.                                                                                             |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_emc_unisphere_restapi.pl \
	--plugin=storage::emc::unisphere::restapi::plugin \
	--mode=storage-resources \
	--help
```
