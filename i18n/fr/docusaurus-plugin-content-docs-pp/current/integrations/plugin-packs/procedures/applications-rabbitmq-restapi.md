---
id: applications-rabbitmq-restapi
title: RabbitMQ RestAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **RabbitMQ RestAPI**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **RabbitMQ RestAPI** apporte un modèle d'hôte :

* **App-Rabbitmq-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Rabbitmq-Restapi-custom" label="App-Rabbitmq-Restapi-custom">

| Alias        | Modèle de service                        | Description                     |
|:-------------|:-----------------------------------------|:--------------------------------|
| Node-Usage   | App-Rabbitmq-Node-Usage-Restapi-custom   | Contrôle les noeuds             |
| Queue-Usage  | App-Rabbitmq-Queue-Usage-Restapi-custom  | Contrôle les queues             |
| System-Usage | App-Rabbitmq-System-Usage-Restapi-custom | Contrôle globalement le système |
| Vhost-Usage  | App-Rabbitmq-Vhost-Usage-Restapi-custom  | Contrôle les vhosts             |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Rabbitmq-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| status                                    | N/A   |
| *node*#node.io.read.usage.bytespersecond  | B/s   |
| *node*#node.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Queue-Usage" label="Queue-Usage">

| Nom                                | Unité |
|:-----------------------------------|:------|
| status                             | N/A   |
| *queue*#queue.messages.count       | count |
| *queue*#queue.messages.ready.count | count |

</TabItem>
<TabItem value="System-Usage" label="System-Usage">

| Nom                               | Unité |
|:----------------------------------|:------|
| system.queue.messages.count       | count |
| system.queue.messages.ready.count | count |
| system.db.event.queue.count       | count |
| system.disk.read.usage.iops       | iops  |
| system.disk.write.usage.iops      | iops  |

</TabItem>
<TabItem value="Vhost-Usage" label="Vhost-Usage">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| status                                    | N/A   |
| status                                    | N/A   |
| *vhost1*#vhost.queue.messages.count       | count |
| *vhost2*#vhost.queue.messages.count       | count |
| *vhost1*#vhost.queue.messages.ready.count | count |
| *vhost2*#vhost.queue.messages.ready.count | count |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec des droits de lecture sur l’API REST Management de RabbitMQ est nécessaire.

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
dnf install centreon-pack-applications-rabbitmq-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-rabbitmq-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-rabbitmq-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-rabbitmq-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **RabbitMQ RestAPI**
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
dnf install centreon-plugin-Applications-Rabbitmq-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Rabbitmq-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-rabbitmq-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Rabbitmq-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Rabbitmq-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro               | Description                               | Valeur par défaut | Obligatoire |
|:--------------------|:------------------------------------------|:------------------|:-----------:|
| RABBITMQAPIUSERNAME | Specify the username for authentication   |                   | X            |
| RABBITMQAPIPASSWORD | Specify the password for authentication   |                   | X            |
| RABBITMQAPIPROTO    | Specify https if needed (default: 'http') | http              | X            |
| RABBITMQAPIPORT     | Port used (default: 15672)                | 15672             | X            |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Macro          | Description                                                                                                                                                        | Valeur par défaut        | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| FILTERNAME     | Filter node name (can use regexp)                                                                                                                                  |                          |             |
| WARNINGREAD    | Threshold                                                                                                                                                          |                          |             |
| CRITICALREAD   | Threshold                                                                                                                                                          |                          |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "running"'). You can use the following variables: %\{status\}, %\{display\} | %\{status\} ne "running" |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{display\}                          |                          |             |
| WARNINGWRITE   | Threshold                                                                                                                                                          |                          |             |
| CRITICALWRITE  | Threshold                                                                                                                                                          |                          |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                 | --verbose                |             |

</TabItem>
<TabItem value="Queue-Usage" label="Queue-Usage">

| Macro                 | Description                                                                                                                                                      | Valeur par défaut       | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERNAME            | Filter queue name (can use regexp)                                                                                                                               |                         |             |
| WARNINGQUEUEMSG       | Threshold                                                                                                                                                        |                         |             |
| CRITICALQUEUEMSG      | Threshold                                                                                                                                                        |                         |             |
| WARNINGQUEUEMSGREADY  | Threshold                                                                                                                                                        |                         |             |
| CRITICALQUEUEMSGREADY | Threshold                                                                                                                                                        |                         |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} ne "running"'). You can use the following variables: %\{state\}, %\{display\} | %\{state\} ne "running" |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{display\}                         |                         |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                               | --verbose               |             |

</TabItem>
<TabItem value="System-Usage" label="System-Usage">

| Macro                 | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDBEVENTQUEUE   | Threshold                                                                                          |                   |             |
| CRITICALDBEVENTQUEUE  | Threshold                                                                                          |                   |             |
| WARNINGDISKREADIOPS   | Threshold                                                                                          |                   |             |
| CRITICALDISKREADIOPS  | Threshold                                                                                          |                   |             |
| WARNINGDISKWRITEIOPS  | Threshold                                                                                          |                   |             |
| CRITICALDISKWRITEIOPS | Threshold                                                                                          |                   |             |
| WARNINGQUEUEMSG       | Threshold                                                                                          |                   |             |
| CRITICALQUEUEMSG      | Threshold                                                                                          |                   |             |
| WARNINGQUEUEMSGREADY  | Threshold                                                                                          |                   |             |
| CRITICALQUEUEMSGREADY | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Vhost-Usage" label="Vhost-Usage">

| Macro                 | Description                                                                                                                                                   | Valeur par défaut   | Obligatoire |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| FILTERNAME            | Filter vhost name (can use regexp)                                                                                                                            |                     |             |
| WARNINGQUEUEMSG       | Threshold                                                                                                                                                     |                     |             |
| CRITICALQUEUEMSG      | Threshold                                                                                                                                                     |                     |             |
| WARNINGQUEUEMSGREADY  | Threshold                                                                                                                                                     |                     |             |
| CRITICALQUEUEMSGREADY | Threshold                                                                                                                                                     |                     |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "ok"'). You can use the following variables: %\{status\}, %\{display\} | %\{status\} ne "ok" |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{display\}                     |                     |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                            | --verbose           |             |

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
/usr/lib/centreon/plugins/centreon_rabbitmq_restapi.pl \
	--plugin=apps::mq::rabbitmq::restapi::plugin \
	--mode=vhost-usage \
	--hostname='10.0.0.1' \
	--username='xxxxxxx' \
	--password='xxxxxxx' \
	--port='15672' \
	--proto='http' \
	--filter-name='' \
	--warning-status='' \
	--critical-status='%\{status\} ne "ok"' \
	--warning-queue-msg-ready='' \
	--critical-queue-msg-ready='' \
	--warning-queue-msg='' \
	--critical-queue-msg='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All vhosts are ok | 'vhost1#vhost.queue.messages.count'=31002;;;0; 'vhost2#vhost.queue.messages.count'=50575;;;0; 'vhost1#vhost.queue.messages.ready.count'=48920;;;0; 'vhost2#vhost.queue.messages.ready.count'=10597;;;0;
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
/usr/lib/centreon/plugins/centreon_rabbitmq_restapi.pl \
	--plugin=apps::mq::rabbitmq::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                              | Modèle de service associé                |
|:----------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/mq/rabbitmq/restapi/mode/listnodes.pm)]     | Not used in this Monitoring Connector    |
| list-queues [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/mq/rabbitmq/restapi/mode/listqueues.pm)]   | Not used in this Monitoring Connector    |
| list-vhosts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/mq/rabbitmq/restapi/mode/listvhosts.pm)]   | Not used in this Monitoring Connector    |
| node-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/mq/rabbitmq/restapi/mode/nodeusage.pm)]     | App-Rabbitmq-Node-Usage-Restapi-custom   |
| queue-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/mq/rabbitmq/restapi/mode/queueusage.pm)]   | App-Rabbitmq-Queue-Usage-Restapi-custom  |
| system-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/mq/rabbitmq/restapi/mode/systemusage.pm)] | App-Rabbitmq-System-Usage-Restapi-custom |
| vhost-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/mq/rabbitmq/restapi/mode/vhostusage.pm)]   | App-Rabbitmq-Vhost-Usage-Restapi-custom  |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   Remote hostname or IP address.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --port                                     |   Port used (default: 15672)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --username                                 |   Specify the username for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 |   Specify the password for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Option                   | Description                                                                                                                                                            |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter node name (can use regexp).                                                                                                                                   |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{display\}                            |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "running"'). You can use the following variables: %\{status\}, %\{display\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'read', 'write'.                                                                                                                                 |

</TabItem>
<TabItem value="Queue-Usage" label="Queue-Usage">

| Option                   | Description                                                                                                                                                          |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter queue name (can use regexp).                                                                                                                                |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{display\}                           |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{state\} ne "running"'). You can use the following variables: %\{state\}, %\{display\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'queue-msg', 'queue-msg-ready'.                                                                                                                |

</TabItem>
<TabItem value="System-Usage" label="System-Usage">

| Option                   | Description                                                                                                     |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'disk-read-iops', 'disk-write-iops', 'queue-msg-ready', 'queue-msg', 'db-event-queue'.    |

</TabItem>
<TabItem value="Vhost-Usage" label="Vhost-Usage">

| Option                   | Description                                                                                                                                                       |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter vhost name (can use regexp).                                                                                                                             |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{display\}                       |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "ok"'). You can use the following variables: %\{status\}, %\{display\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'queue-msg-ready', 'queue-msg'.                                                                                                             |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_rabbitmq_restapi.pl \
	--plugin=apps::mq::rabbitmq::restapi::plugin \
	--mode=vhost-usage \
	--help
```
