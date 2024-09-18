---
id: operatingsystems-as400-connector
title: IBM AS400 Connector
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **IBM AS400 Connector** apporte un modèle d'hôte :

* **OS-AS400-Connector-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-AS400-Connector-custom" label="OS-AS400-Connector-custom">

| Alias       | Modèle de service                     | Description                       |
|:------------|:--------------------------------------|:----------------------------------|
| Jobs        | OS-AS400-Jobs-Connector-custom        | Contrôle des jobs                 |
| Page-Faults | OS-AS400-Page-Faults-Connector-custom | Contrôle des page faults          |
| System      | OS-AS400-System-Connector-custom      | Contrôle l'utilisation du système |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-AS400-Connector-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias         | Modèle de service                       | Description                                 | Découverte |
|:--------------|:----------------------------------------|:--------------------------------------------|:----------:|
| Command       | OS-AS400-Command-Connector-custom       | Exécute une commande et vérifie le résultat |            |
| Disks         | OS-AS400-Disks-Connector-custom         | Contrôle l'utilisation des disques          | X          |
| Job-Queues    | OS-AS400-Job-Queues-Connector-custom    | Contrôle job queues                         |            |
| Message-Queue | OS-AS400-Message-Queue-Connector-custom | Contrôle message queue                      |            |
| SubSystem     | OS-AS400-SubSystem-Connector-custom     | Contrôle des sous-systèmes                  | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                   | Description                                               |
|:----------------------------------|:----------------------------------------------------------|
| OS-AS400-Connector-Disk-Name      | Discover the disk partitions and monitor space occupation |
| OS-AS400-Connector-SubSystem-Name |                                                           |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Command" label="Command">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

</TabItem>
<TabItem value="Disks" label="Disks">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| disks.total.count                       | count |
| disks.active.count                      | count |
| disks.errors.count                      | count |
| disks.gap.repartition.percentage        | %     |
| *disk_name*#status                      | N/A   |
| *disk_name*#disk.space.usage.bytes      | B     |
| *disk_name*#disk.space.free.bytes       | B     |
| *disk_name*#disk.space.usage.percentage | %     |
| *disk_name*#disk.space.reserved.bytes   | B     |

</TabItem>
<TabItem value="Job-Queues" label="Job-Queues">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| jobqueues.total.count                | count |
| *jobq*#status                        | N/A   |
| *jobq*#jobqueue.jobs.active.count    | count |
| *jobq*#jobqueue.jobs.scheduled.count | count |
| *jobq*#jobqueue.jobs.held.count      | count |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Métrique         | Unité |
|:-----------------|:------|
| jobs.total.count | count |

</TabItem>
<TabItem value="Message-Queue" label="Message-Queue">

| Métrique          | Unité |
|:------------------|:------|
| mq.messages.count | count |

</TabItem>
<TabItem value="Page-Faults" label="Page-Faults">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| pagefaults.database.ratio.percentage    | %     |
| pagefaults.nondatabase.ratio.percentage | %     |

</TabItem>
<TabItem value="SubSystem" label="SubSystem">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| subsystems.total.count               | count |
| subsystems.active.count              | count |
| subsystems.ending.count              | count |
| subsystems.inactive.count            | count |
| subsystems.restricted.count          | count |
| subsystems.starting.count            | count |
| *subsys*#status                      | N/A   |
| *subsys*#subsystem.jobs.active.count | count |

</TabItem>
<TabItem value="System" label="System">

| Métrique                                            | Unité |
|:----------------------------------------------------|:------|
| *system*~system.processing.units.usage.percentage   | %     |
| *system*~system.storage.pool.space.usage.percentage | %     |
| *system*~system.jobs.total.count                    | count |
| *system*~system.jobs.active.count                   | count |
| *system*~system.batch_jobs.running.count            | count |
| *system*~system.batch_jobs.waiting_message.count    | count |

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
dnf install centreon-pack-operatingsystems-as400-connector
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-as400-connector
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-as400-connector
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-as400-connector
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **IBM AS400 Connector**
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
dnf install centreon-plugin-Operatingsystems-AS400-Connector
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-AS400-Connector
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-operatingsystems-as400-connector
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-AS400-Connector
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-AS400-Connector-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                  | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AS400USERNAME          | AS/400 username (required)                                                                           |                   | X           |
| AS400PASSWORD          | AS/400 password (required)                                                                           |                   | X           |
| CENTREONCONNECTORPROTO | Specify https if needed (default: 'http')                                                            | http              |             |
| CENTREONCONNECTORPORT  | Port used (default: 8091)                                                                            | 8091              |             |
| CENTREONCONNECTORHOST  | Centreon connector hostname (default: 127.0.0.1)                                                     | localhost         | X           |
| EXTRAOPTIONS           | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Command" label="Command">

| Macro          | Description                                                                                                                                               | Valeur par défaut      | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| COMMANDNAME    | Specify the command to execute (required)                                                                                                                 |                        | X           |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                      |                        |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /failed/i'). You can use the following variables: %{status}, %{name} | %{status} =~ /failed/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                      |                        |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                        |                        |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro             | Description                                                                                                                                                                                                                 | Valeur par défaut                                                                       | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS     | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /unknown/i'). You can use the following variables: %{status}, %{name}                                                                   | %{status} =~ /unknown/i                                                                 |             |
| DISKNAME          | Filter disks by name (can be a regexp)                                                                                                                                                                                      |                                                                                         |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /noReady\|busy\|hwFailureOk\|hwFailurePerf\|Protected\|rebuilding/i') . You can use the following variables: %{status}, %{name}         | %{status} =~ /noReady\|busy\|hwFailureOk\|hwFailurePerf\|Protected\|rebuilding/i        |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /^(noAccess\|otherDiskSubFailed\|failed\|notOperational\|noUnitContr ol)$/i'). You can use the following variables: %{status}, %{name} | %{status} =~ /^(noAccess\|otherDiskSubFailed\|failed\|notOperational\|noUnitControl)$/i |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                                                                                                                                                  |                                                                                         |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                                                                                                                                                  |                                                                                         |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                          | --verbose                                                                               |             |

</TabItem>
<TabItem value="Job-Queues" label="Job-Queues">

| Macro                 | Description                                                                                                                                                         | Valeur par défaut    | Obligatoire |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| JOBQUEUES             |                                                                                                                                                                     |                      | X           |
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{library}                                    |                      |             |
| WARNINGJOBSACTIVE     | Thresholds                                                                                                                                                          |                      |             |
| CRITICALJOBSACTIVE    | Thresholds                                                                                                                                                          |                      |             |
| WARNINGJOBSHELD       | Thresholds                                                                                                                                                          |                      |             |
| CRITICALJOBSHELD      | Thresholds                                                                                                                                                          |                      |             |
| WARNINGJOBSSCHEDULED  | Thresholds                                                                                                                                                          |                      |             |
| CRITICALJOBSSCHEDULED | Thresholds                                                                                                                                                          |                      |             |
| WARNINGJOBSTOTAL      | Thresholds                                                                                                                                                          |                      |             |
| CRITICALJOBSTOTAL     | Thresholds                                                                                                                                                          |                      |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /HELD/i'). You can use the following variables: %{status}, %{name}, %{library} | %{status} =~ /HELD/i |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}, %{library}                                    |                      |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                  | --verbose            |             |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Macro              | Description                                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERACTIVESTATUS | Filter jobs by ACTIVE\_JOB\_STATUS (can be a regexp). Example: --filter-active-status='MSGW' to count jobs with MSGW |                   |             |
| FILTERNAME         | Filter jobs by name (can be a regexp)                                                                                |                   |             |
| FILTERSUBSYSTEM    | Filter jobs by subsystem (can be a regexp)                                                                           |                   |             |
| WARNINGTOTAL       | Thresholds                                                                                                           |                   |             |
| CRITICALTOTAL      | Thresholds                                                                                                           |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                   |                   |             |

</TabItem>
<TabItem value="Message-Queue" label="Message-Queue">

| Macro            | Description                                                                                        | Valeur par défaut                     | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:--------------------------------------|:-----------:|
| MESSAGEQUEUEPATH | Specify the message queue (required. Example: --message-queue-path='/QSYS.LIB/QSYSOPR.MSGQ')       |                                       | X           |
| FILTERMESSAGEID  | Filter messages by ID (can be a regexp)                                                            |                                       |             |
| MINSEVERITY      | Filter messages with severity greater than or equal to X                                           |                                       |             |
| MAXSEVERITY      | Filter messages with severity less than to X                                                       |                                       |             |
| WARNINGMESSAGES  | Thresholds                                                                                         |                                       |             |
| CRITICALMESSAGES | Thresholds                                                                                         |                                       |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --display-messages --memory --verbose |             |

</TabItem>
<TabItem value="Page-Faults" label="Page-Faults">

| Macro                         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPAGEFAULTSDATABASE     | Thresholds                                                                                         |                   |             |
| CRITICALPAGEFAULTSDATABASE    | Thresholds                                                                                         |                   |             |
| WARNINGPAGEFAULTSNONDATABASE  | Thresholds                                                                                         |                   |             |
| CRITICALPAGEFAULTSNONDATABASE | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="SubSystem" label="SubSystem">

| Macro              | Description                                                                                                                                                                                | Valeur par défaut                             | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|:-----------:|
| FILTERNAME         | Filter subsystems by name (can be a regexp)                                                                                                                                                |                                               |             |
| FILTERLIBRARY      | Filter subsystems by library (can be a regexp)                                                                                                                                             |                                               |             |
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{library}                                                           |                                               |             |
| WARNINGACTIVE      | Thresholds                                                                                                                                                                                 |                                               |             |
| CRITICALACTIVE     | Thresholds                                                                                                                                                                                 |                                               |             |
| WARNINGENDING      | Thresholds                                                                                                                                                                                 |                                               |             |
| CRITICALENDING     | Thresholds                                                                                                                                                                                 |                                               |             |
| WARNINGINACTIVE    | Thresholds                                                                                                                                                                                 |                                               |             |
| CRITICALINACTIVE   | Thresholds                                                                                                                                                                                 |                                               |             |
| WARNINGJOBSACTIVE  | Thresholds                                                                                                                                                                                 |                                               |             |
| CRITICALJOBSACTIVE | Thresholds                                                                                                                                                                                 |                                               |             |
| WARNINGRESTRICTED  | Thresholds                                                                                                                                                                                 |                                               |             |
| CRITICALRESTRICTED | Thresholds                                                                                                                                                                                 |                                               |             |
| WARNINGSTARTING    | Thresholds                                                                                                                                                                                 |                                               |             |
| CRITICALSTARTING   | Thresholds                                                                                                                                                                                 |                                               |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /ending\|restricted\|starting/i'). You can use the following variables: %{status}, %{name}, %{library} | %{status} =~  /ending\|restricted\|starting/i |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}, %{library}                                                          |                                               |             |
| WARNINGTOTAL       | Thresholds                                                                                                                                                                                 |                                               |             |
| CRITICALTOTAL      | Thresholds                                                                                                                                                                                 |                                               |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                         | --verbose                                     |             |

</TabItem>
<TabItem value="System" label="System">

| Macro                    | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS           | Only display some counters (regexp can be used). Example: --filter-counters='processing-units'     |                   |             |
| WARNINGPROCESSUNITUSAGE  | Thresholds                                                                                         |                   |             |
| CRITICALPROCESSUNITUSAGE | Thresholds                                                                                         |                   |             |
| WARNINGSTORAGEPOOLSPACE  | Thresholds                                                                                         |                   |             |
| CRITICALSTORAGEPOOLSPACE | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_as400_connector_client.pl \
	--plugin=os::as400::connector::plugin \
	--mode=system \
	--connector-hostname='localhost' \
	--connector-port='8091' \
	--connector-proto='http' \
	--as400-hostname=10.0.0.1 \
	--as400-username='' \
	--as400-password=''  \
	--filter-counters='' \
	--warning-processing-units-usage='' \
	--warning-storage-pool-space-usage='' \
	--critical-processing-units-usage='' \
	--critical-storage-pool-space-usage='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: processing units used: 47 % storage pool space used: 5 % total: 83 active: 32 running: 77 waiting for message: 7 | '*system*~system.processing.units.usage.percentage'=47%;;;0;'*system*~system.storage.pool.space.usage.percentage'=5%;;;0;100'*system*~system.jobs.total.count'=83;;;0;'*system*~system.jobs.active.count'=32;;;0;'*system*~system.batch_jobs.running.count'=77;;;0;'*system*~system.batch_jobs.waiting_message.count'=7;;;0;
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
/usr/lib/centreon/plugins/centreon_as400_connector_client.pl \
	--plugin=os::as400::connector::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                              | Modèle de service associé               |
|:----------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| command [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/command.pm)]                | OS-AS400-Command-Connector-custom       |
| disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/disks.pm)]                    | OS-AS400-Disks-Connector-custom         |
| job-queues [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/jobqueues.pm)]           | OS-AS400-Job-Queues-Connector-custom    |
| jobs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/jobs.pm)]                      | OS-AS400-Jobs-Connector-custom          |
| list-disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/listdisks.pm)]           | Used for service discovery              |
| list-subsystems [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/listsubsystems.pm)] | Used for service discovery              |
| message-queue [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/messagequeue.pm)]     | OS-AS400-Message-Queue-Connector-custom |
| page-faults [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/pagefaults.pm)]         | OS-AS400-Page-Faults-Connector-custom   |
| subsystems [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/subsystems.pm)]          | OS-AS400-SubSystem-Connector-custom     |
| system [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/as400/connector/mode/system.pm)]                  | OS-AS400-System-Connector-custom        |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Centreon AS400 connector Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --connector-hostname                       | Centreon connector hostname (default: 127.0.0.1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --connector-port                           | Port used (default: 8091)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --connector-proto                          | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --connector-username                       | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --connector-password                       | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --connector-timeout                        | Set timeout in seconds (default: 50)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --as400-hostname                           | AS/400 hostname (required)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --as400-username                           | AS/400 username (required)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --as400-password                           | AS/400 password (required)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Command" label="Command">

| Option            | Description                                                                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --command-name    | Specify the command to execute (required).                                                                                                                   |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                         |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                         |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /failed/i'). You can use the following variables: %{status}, %{name}    |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                   | Description                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --disk-name              | Check exact disk.                                                                                                                                                                                                             |
| --filter-disk-name       | Filter disks by name (can be a regexp).                                                                                                                                                                                       |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /unknown/i'). You can use the following variables: %{status}, %{name}                                                                     |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /noReady\|busy\|hwFailureOk\|hwFailurePerf\|Protected\|rebuilding/i') . You can use the following variables: %{status}, %{name}           |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /^(noAccess\|otherDiskSubFailed\|failed\|notOperational\|noUnitContr ol)$/i'). You can use the following variables: %{status}, %{name}   |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct', 'reserved', 'disks-total', 'disks-active', 'disks-errors', 'disks-gap-repartition'.                                                                |

</TabItem>
<TabItem value="Job-Queues" label="Job-Queues">

| Option                   | Description                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{library}                                      |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}, %{library}                                      |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /HELD/i'). You can use the following variables: %{status}, %{name}, %{library}   |
| --warning-* --critical-* | Thresholds. Can be: 'jobqueues-total', 'jobqueue-jobs-active', 'jobqueue-jobs-scheduled', 'jobqueue-jobs-held'.                                                       |

</TabItem>
<TabItem value="Jobs" label="Jobs">

| Option                   | Description                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------|
| --filter-active-status   | Filter jobs by ACTIVE\_JOB\_STATUS (can be a regexp). Example: --filter-active-status='MSGW' to count jobs with MSGW.   |
| --filter-name            | Filter jobs by name (can be a regexp).                                                                                  |
| --filter-subsystem       | Filter jobs by subsystem (can be a regexp).                                                                             |
| --display-jobs           | Display jobs in verbose output.                                                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'jobs-total'.                                                                                       |

</TabItem>
<TabItem value="Message-Queue" label="Message-Queue">

| Option                                 | Description                                                                                     |
|:---------------------------------------|:------------------------------------------------------------------------------------------------|
| --message-queue-path                   | Specify the message queue (required. Example: --message-queue-path='/QSYS.LIB/QSYSOPR.MSGQ').   |
| --memory                               | Check only new messages.                                                                        |
| --filter-message-id                    | Filter messages by ID (can be a regexp).                                                        |
| --min-severity                         | Filter messages with severity greater than or equal to X.                                       |
| --max-severity                         | Filter messages with severity less than to X.                                                   |
| --display-messages                     | Display messages in verbose output.                                                             |
| --warning-messages --critical-messages | Thresholds.                                                                                     |

</TabItem>
<TabItem value="Page-Faults" label="Page-Faults">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'pagefaults-database', 'pagefaults-nondatabase'.    |

</TabItem>
<TabItem value="SubSystem" label="SubSystem">

| Option                     | Description                                                                                                                                                                                  |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-subsystem-name    | Filter subsystems by name (can be a regexp).                                                                                                                                                 |
| --filter-subsystem-library | Filter subsystems by library (can be a regexp).                                                                                                                                              |
| --unknown-status           | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{library}                                                             |
| --warning-status           | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /ending\|restricted\|starting/i'). You can use the following variables: %{status}, %{name}, %{library}   |
| --critical-status          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}, %{library}                                                            |
| --warning-* --critical-*   | Thresholds. Can be: 'subsystems-total', 'subsystems-active', 'subsystems-ending', 'subsystems-inactive', 'subsystems-restricted', 'subsystems-starting', 'jobs-active'.                      |

</TabItem>
<TabItem value="System" label="System">

| Option                   | Description                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='processing-units'   |
| --warning-* --critical-* | Thresholds. Can be: 'processing-units-usage' (%), 'storage-pool-space-usage' (%),                |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_as400_connector_client.pl \
	--plugin=os::as400::connector::plugin \
	--mode=system \
	--help
```
