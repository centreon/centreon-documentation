---
id: applications-webservers-tomcat-webmanager
slug: /applications-webservers-tomcat-webmanager
title: Tomcat Webmanager
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Tomcat Webmanager**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Tomcat Webmanager** apporte 2 modèles d'hôte :

* **App-Webserver-Tomcat6-Webmanager-custom**
* **App-Webserver-Tomcat7-Webmanager-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Webserver-Tomcat6-Webmanager-custom" label="App-Webserver-Tomcat6-Webmanager-custom">

| Alias                      | Modèle de service                               | Description                                                                                     |
|:---------------------------|:------------------------------------------------|:------------------------------------------------------------------------------------------------|
| Tomcat-Applications-Global | App-Webserver-Tomcat-Applications-Global-custom | Contrôle permettant de vérifier le statut réseau des applications                               |
| Tomcat-Connectors-Global   | App-Webserver-Tomcat-Connectors-Global-custom   | Contrôle permettant de vérifier des métriques Tomcat (nombre de requêtes, nombre d'erreurs,...) |
| Tomcat-Memory              | App-Webserver-Tomcat-Memory-custom              | Contrôle permettant de vérifier la mémoire Tomcat                                               |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Webserver-Tomcat6-Webmanager-custom** est utilisé.

</TabItem>
<TabItem value="App-Webserver-Tomcat7-Webmanager-custom" label="App-Webserver-Tomcat7-Webmanager-custom">

| Alias                      | Modèle de service                               | Description                                                                                     |
|:---------------------------|:------------------------------------------------|:------------------------------------------------------------------------------------------------|
| Tomcat-Applications-Global | App-Webserver-Tomcat-Applications-Global-custom | Contrôle permettant de vérifier le statut réseau des applications                               |
| Tomcat-Connectors-Global   | App-Webserver-Tomcat-Connectors-Global-custom   | Contrôle permettant de vérifier des métriques Tomcat (nombre de requêtes, nombre d'erreurs,...) |
| Tomcat-Memory              | App-Webserver-Tomcat-Memory-custom              | Contrôle permettant de vérifier la mémoire Tomcat                                               |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Webserver-Tomcat7-Webmanager-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Tomcat-Applications-Global" label="Tomcat-Applications-Global">

| Nom                                             | Unité |
|:------------------------------------------------|:------|
| status                                          | N/A   |
| *application*#application.sessions.active.count | count |

</TabItem>
<TabItem value="Tomcat-Connectors-Global" label="Tomcat-Connectors-Global">

| Nom                                                               | Unité |
|:------------------------------------------------------------------|:------|
| *connector1*#connector.threads.current.count                      | count |
| *connector2*#connector.threads.current.count                      | count |
| *connector1*#connector.threads.busy.count                         | count |
| *connector2*#connector.threads.busy.count                         | count |
| *connector1*#connector.traffic.in.bitspersecond                   | b/s   |
| *connector2*#connector.traffic.in.bitspersecond                   | b/s   |
| *connector1*#connector.traffic.in.percent                         | %     |
| *connector2*#connector.traffic.in.percent                         | %     |
| *connector1*#connector.traffic.out.bitspersecond                  | b/s   |
| *connector2*#connector.traffic.out.bitspersecond                  | b/s   |
| *connector1*#connector.traffic.out.percent                        | %     |
| *connector2*#connector.traffic.out.percent                        | %     |
| *connector1*#connector.requests.processingtime.total.milliseconds | ms    |
| *connector2*#connector.requests.processingtime.total.milliseconds | ms    |
| *connector1*#connector.requests.errors.count                      | count |
| *connector2*#connector.requests.errors.count                      | count |
| *connector1*#connector.requests.total.count                       | count |
| *connector2*#connector.requests.total.count                       | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Tomcat-Memory" label="Tomcat-Memory">

| Nom                     | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

L'application Tomcat Manager doit être installée, en cours d'exécution et accessible depuis le collecteur Centreon via le protocole, le port et l’URL définis.

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
dnf install centreon-pack-applications-webservers-tomcat-webmanager
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-webservers-tomcat-webmanager
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-webservers-tomcat-webmanager
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-webservers-tomcat-webmanager
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Tomcat Webmanager**
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
dnf install centreon-plugin-Applications-Webservers-Tomcat-Webmanager
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Webservers-Tomcat-Webmanager
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-webservers-tomcat-webmanager
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Webservers-Tomcat-Webmanager
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="App-Webserver-Tomcat6-Webmanager-custom" label="App-Webserver-Tomcat6-Webmanager-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Webserver-Tomcat6-Webmanager-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                                                                          | Valeur par défaut        | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| TOMCATPROTOCOL       | Protocol used http or https                                                                          | http                     |             |
| TOMCATPORT           | Port used by Tomcat                                                                                  | 8080                     |             |
| URLPATHMANAGERLIST   | Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                 | /manager/list            |             |
| URLPATHMANAGERSTATUS | Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                 | /manager/status?XML=true |             |
| TOMCATEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="App-Webserver-Tomcat7-Webmanager-custom" label="App-Webserver-Tomcat7-Webmanager-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Webserver-Tomcat7-Webmanager-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                                                                          | Valeur par défaut        | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| TOMCATPROTOCOL       | Protocol used http or https                                                                          | http                     |             |
| TOMCATPORT           | Port used by Tomcat                                                                                  | 8080                     |             |
| URLPATHMANAGERLIST   | Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                 | /manager/text/list       |             |
| URLPATHMANAGERSTATUS | Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                 | /manager/status?XML=true |             |
| TOMCATEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Tomcat-Applications-Global" label="Tomcat-Applications-Global">

| Macro                  | Description                                                                                                                                                      | Valeur par défaut       | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (default: '%\{state\} ne "running"'). You can use the following variables: %\{state\}, %\{display\}  | %\{state\} ne "running" |             |
| FILTERNAME             | Filter context name (regexp can be used)                                                                                                                         |                         |             |
| WARNINGSESSIONSACTIVE  | Threshold                                                                                                                                                        |                         |             |
| CRITICALSESSIONSACTIVE | Threshold                                                                                                                                                        |                         |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} eq "stopped"'). You can use the following variables: %\{state\}, %\{display\} | %\{state\} eq "stopped" |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{display\}                         |                         |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                               | --verbose               |             |

</TabItem>
<TabItem value="Tomcat-Connectors-Global" label="Tomcat-Connectors-Global">

| Macro                               | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                              | Filter by connector name (can be a regexp)                                                         |                   |             |
| WARNINGREQUESTSERRORS               | Threshold                                                                                          |                   |             |
| CRITICALREQUESTSERRORS              | Threshold                                                                                          |                   |             |
| WARNINGREQUESTSPROCESSINGTIMETOTAL  | Threshold                                                                                          |                   |             |
| CRITICALREQUESTSPROCESSINGTIMETOTAL | Threshold                                                                                          |                   |             |
| WARNINGREQUESTSTOTAL                | Threshold                                                                                          |                   |             |
| CRITICALREQUESTSTOTAL               | Threshold                                                                                          |                   |             |
| WARNINGTHREADSBUSY                  | Threshold                                                                                          |                   |             |
| CRITICALTHREADSBUSY                 | Threshold                                                                                          |                   |             |
| WARNINGTHREADSCURRENT               | Threshold                                                                                          |                   |             |
| CRITICALTHREADSCURRENT              | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICIN                    | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICIN                   | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICINPRCT                | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICINPRCT               | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICOUT                   | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICOUT                  | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICOUTPRCT               | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICOUTPRCT              | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Tomcat-Memory" label="Tomcat-Memory">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE      | Threshold                                                                                          |                   |             |
| CRITICALUSAGE     | Threshold                                                                                          |                   |             |
| WARNINGUSAGEFREE  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEFREE | Threshold                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_tomcat_webmanager.pl \
	--plugin=apps::tomcat::web::plugin \
	--mode=connectors \
	--hostname=10.0.0.1 \
	--proto=http \
	--port=8080  \
	--urlpath='/manager/status?XML=true'  \
	--filter-name='' \
	--warning-threads-current='' \
	--critical-threads-current='' \
	--warning-threads-busy='' \
	--critical-threads-busy='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-in-prct='' \
	--critical-traffic-in-prct='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--warning-traffic-out-prct='' \
	--critical-traffic-out-prct='' \
	--warning-requests-processingtime-total='' \
	--critical-requests-processingtime-total='' \
	--warning-requests-errors='' \
	--critical-requests-errors='' \
	--warning-requests-total='' \
	--critical-requests-total='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All connectors are ok | 'connector1#connector.threads.current.count'=99239;;;0;maxThreads 'connector2#connector.threads.current.count'=88646;;;0;maxThreads 'connector1#connector.threads.busy.count'=49356;;;0;maxThreads 'connector2#connector.threads.busy.count'=46076;;;0;maxThreads 'connector1#connector.traffic.in.bitspersecond'=88513b/s;;;0;speed 'connector2#connector.traffic.in.bitspersecond'=37427b/s;;;0;speed 'connector1#connector.traffic.in.percent'=22944%;;;0;100 'connector2#connector.traffic.in.percent'=40955%;;;0;100 'connector1#connector.traffic.out.bitspersecond'=28547b/s;;;0;speed 'connector2#connector.traffic.out.bitspersecond'=69608b/s;;;0;speed 'connector1#connector.traffic.out.percent'=42673%;;;0;100 'connector2#connector.traffic.out.percent'=83700%;;;0;100 'connector1#connector.requests.processingtime.total.milliseconds'=76540ms;;;0; 'connector2#connector.requests.processingtime.total.milliseconds'=65416ms;;;0; 'connector1#connector.requests.errors.count'=78599;;;0; 'connector2#connector.requests.errors.count'=41132;;;0; 'connector1#connector.requests.total.count'=76791;;;0; 'connector2#connector.requests.total.count'=14773;;;0;
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
/usr/lib/centreon/plugins/centreon_tomcat_webmanager.pl \
	--plugin=apps::tomcat::web::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                             | Modèle de service associé                       |
|:---------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| applications [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/web/mode/applications.pm)]        | App-Webserver-Tomcat-Applications-Global-custom |
| connectors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/web/mode/connectors.pm)]            | App-Webserver-Tomcat-Connectors-Global-custom   |
| list-application [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/web/mode/listapplication.pm)] | Not used in this Monitoring Connector           |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/web/mode/memory.pm)]                    | App-Webserver-Tomcat-Memory-custom              |

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
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Tomcat-Applications-Global" label="Tomcat-Applications-Global">

| Option                   | Description                                                                                                                                                                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname               |   IP Address or FQDN of the Tomcat Application Server                                                                                                                                                                                                                                                                 |
| --port                   |   Port used by Tomcat                                                                                                                                                                                                                                                                                                 |
| --proto                  |   Protocol used http or https                                                                                                                                                                                                                                                                                         |
| --credentials            |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username               |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password               |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic                  |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout                |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --urlpath                |   Path to the Tomcat Manager List (default: Tomcat 7 '/manager/text/list') Tomcat 6: '/manager/list' Tomcat 7: '/manager/text/list'                                                                                                                                                                                   |
| --filter-name            |   Filter context name (regexp can be used)                                                                                                                                                                                                                                                                            |
| --filter-path            |   Filter Context Path (regexp can be used). Can be for example: '/STORAGE/context/test1'.                                                                                                                                                                                                                             |
| --unknown-http-status    |   Threshold unknown for http response code (default: '%\{http\_code\} \< 200 or %\{http\_code\} \>= 300')                                                                                                                                                                                                             |
| --warning-http-status    |   Warning threshold for http response code                                                                                                                                                                                                                                                                            |
| --critical-http-status   |   Critical threshold for http response code                                                                                                                                                                                                                                                                           |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN (default: '%\{state\} ne "running"'). You can use the following variables: %\{state\}, %\{display\}                                                                                                                                                     |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{display\}                                                                                                                                                                            |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{state\} eq "stopped"'). You can use the following variables: %\{state\}, %\{display\}                                                                                                                                                    |
| --warning-* --critical-* |   Thresholds. Can be: 'sessions-active'.                                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Tomcat-Connectors-Global" label="Tomcat-Connectors-Global">

| Option                   | Description                                                                                                                                                                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname               |   IP Address or FQDN of the Tomcat Application Server                                                                                                                                                                                                                                                                 |
| --port                   |   Port used by Tomcat                                                                                                                                                                                                                                                                                                 |
| --proto                  |   Protocol used http or https                                                                                                                                                                                                                                                                                         |
| --credentials            |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username               |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password               |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic                  |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout                |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --urlpath                |   Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                                                                                                                                                                                                                                |
| --filter-name            |   Filter by connector name (can be a regexp).                                                                                                                                                                                                                                                                         |
| --warning-* --critical-* |   Thresholds. Can be: 'traffic-in' (b), 'traffic-in-prct' (%), 'traffic-out' (b), 'traffic-out-prct' (%), 'threads-current', 'threads-busy', 'requests-processingtime-total' (ms), 'requests-errors', 'requests-total'.                                                                                               |
| --speed-in               |   Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                   |
| --speed-out              |   Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Tomcat-Memory" label="Tomcat-Memory">

| Option                   | Description                                                                                                                                                                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname               |   IP Address or FQDN of the Tomcat Application Server                                                                                                                                                                                                                                                                 |
| --port                   |   Port used by Tomcat                                                                                                                                                                                                                                                                                                 |
| --proto                  |   Protocol used http or https                                                                                                                                                                                                                                                                                         |
| --credentials            |   Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                            |
| --username               |   Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --password               |   Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                   |
| --basic                  |   Specify this option if you access server-status page over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)   |
| --timeout                |   Threshold for HTTP timeout                                                                                                                                                                                                                                                                                          |
| --urlpath                |   Path to the Tomcat Manager XML (default: '/manager/status?XML=true')                                                                                                                                                                                                                                                |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                                                                                                                                                                                |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_tomcat_webmanager.pl \
	--plugin=apps::tomcat::web::plugin \
	--mode=connectors \
	--help
```
