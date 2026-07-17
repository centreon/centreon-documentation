---
id: applications-webservers-tomcat-jmx
title: Tomcat JMX
description: Supervisez Apache Tomcat via JMX/Jolokia : mémoire JVM, charge CPU, threads, utilisation des connecteurs et des datasources, et sessions des applications web.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Tomcat JMX**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Tomcat JMX** apporte un modèle d'hôte :

* **App-Webserver-Tomcat-JMX-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Webserver-Tomcat-JMX-custom" label="App-Webserver-Tomcat-JMX-custom">

| Alias                  | Modèle de service                                | Description                                                           |
|:-----------------------|:-------------------------------------------------|:----------------------------------------------------------------------|
| Tomcat-Class-Count     | App-Webserver-Tomcat-Class-Count-JMX-custom      | Contrôle permettant de vérifier l'utilisation des classes de la JVM   |
| Tomcat-Cpu-Load        | App-Webserver-Tomcat-Cpu-Load-JMX-custom         | Contrôle permettant de vérifier l'utilisation CPU de la JVM           |
| Tomcat-Fd-Usage        | App-Webserver-Tomcat-Fd-Usage-JMX-custom         | Contrôle permettant de vérifier l'utilisation des file descriptors    |
| Tomcat-Load-Average    | App-Webserver-Tomcat-Load-Average-JMX-custom     | Contrôle permettant de vérifier la charge système                     |
| Tomcat-Memory          | App-Webserver-Tomcat-Memory-JMX-custom           | Contrôle permettant de vérifier la mémoire Java ('NonHeap' et 'Heap') |
| Tomcat-Memory-Detailed | App-Webserver-Tomcat-Memory-Detailed-JMX-custom  | Contrôle permettant de vérifier les pools de mémoire Java             |
| Tomcat-Threads         | App-Webserver-Tomcat-Threads-JMX-custom          | Contrôle les threads                                                  |
| Webapps-Sessions       | App-Webserver-Tomcat-Webapps-Sessions-JMX-custom | Contrôle permettant de vérifier les sessions des applications web    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Webserver-Tomcat-JMX-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias            | Modèle de service                                | Description                                                   |
|:-----------------|:-------------------------------------------------|:--------------------------------------------------------------|
| Connector-Usage  | App-Webserver-Tomcat-Connector-Usage-JMX-custom  | Contrôle permettant de vérifier l'utilisation des connecteurs |
| Datasource-Usage | App-Webserver-Tomcat-Datasource-Usage-JMX-custom | Contrôle permettant de vérifier l'utilisation des datasources |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Connector-Usage" label="Connector-Usage">

| Nom                           | Unité |
|:------------------------------|:------|
| threads-count                 | N/A   |
| threads-busy                  | N/A   |
| request-count                 | N/A   |
| *tomcatconnector*#traffic-in  | b/s   |
| *tomcatconnector*#traffic-out | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Datasource-Usage" label="Datasource-Usage">

| Nom        | Unité |
|:-----------|:------|
| num-active | N/A   |
| num-idle   | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Tomcat-Class-Count" label="Tomcat-Class-Count">

| Nom                        | Unité |
|:---------------------------|:------|
| class.loaded.current.count | count |
| class.loaded.count         | count |
| class.unloaded.count       | count |

</TabItem>
<TabItem value="Tomcat-Cpu-Load" label="Tomcat-Cpu-Load">

| Nom                         | Unité |
|:----------------------------|:------|
| system.cpu.load.percentage  | %     |
| process.cpu.load.percentage | %     |

</TabItem>
<TabItem value="Tomcat-Fd-Usage" label="Tomcat-Fd-Usage">

| Nom                        | Unité |
|:---------------------------|:------|
| fd.opened.usage.count      | count |
| fd.opened.free.count       | count |
| fd.opened.usage.percentage | %     |

</TabItem>
<TabItem value="Tomcat-Load-Average" label="Tomcat-Load-Average">

| Nom                  | Unité |
|:---------------------|:------|
| system.load.1m.count | count |

</TabItem>
<TabItem value="Tomcat-Memory" label="Tomcat-Memory">

| Nom                        | Unité |
|:---------------------------|:------|
| memory.heap.usage.bytes    | B     |
| memory.nonheap.usage.bytes | B     |

</TabItem>
<TabItem value="Tomcat-Memory-Detailed" label="Tomcat-Memory-Detailed">

| Nom                                | Unité |
|:-----------------------------------|:------|
| *mem*#memory.eden.usage.bytes      | B     |
| *mem*#memory.tenured.usage.bytes   | B     |
| *mem*#memory.survivor.usage.bytes  | B     |
| *mem*#memory.permanent.usage.bytes | B     |
| *mem*#memory.code.usage.bytes      | B     |

</TabItem>
<TabItem value="Tomcat-Threads" label="Tomcat-Threads">

| Nom                   | Unité |
|:----------------------|:------|
| threads.active.count  | count |
| threads.started.count | count |
| threads.daemon.count  | count |

</TabItem>
<TabItem value="Webapps-Sessions" label="Webapps-Sessions">

| Nom             | Unité |
|:----------------|:------|
| sessions-active | N/A   |
| sessions-active | N/A   |
| sessions-count  | N/A   |
| sessions-count  | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

Pour superviser Tomcat, il faut activer l’accès JMX ou installer l'agent Jolokia, et s’assurer que le collecteur Centreon peut y accéder avec les bons identifiants.

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
dnf install centreon-pack-applications-webservers-tomcat-jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-webservers-tomcat-jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-webservers-tomcat-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-webservers-tomcat-jmx
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Tomcat JMX**
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
dnf install centreon-plugin-Applications-Webservers-Tomcat-Jmx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Webservers-Tomcat-Jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-webservers-tomcat-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Webservers-Tomcat-Jmx
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Webserver-Tomcat-JMX-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| JOLOKIAUSERNAME       | Credentials to use for the HTTP request                                                              |                   |             |
| JOLOKIATARGETUSERNAME | Credentials to use for the target                                                                    |                   |             |
| JOLOKIAPASSWORD       | Credentials to use for the HTTP request                                                              |                   |             |
| JOLOKIATARGETPASSWORD | Credentials to use for the target                                                                    |                   |             |
| JOLOKIATARGETURL      | Target to use (if you use jolokia agent as a proxy in --url option)                                  |                   |             |
| JOLOKIAURL            | Url where the jolokia agent is deployed (required). Example: http://localhost:8080/jolokia           |                   |             |
| JOLOKIAEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connector-Usage" label="Connector-Usage">

| Macro                | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS                | Units of thresholds (default: '%') ('%', 'absolute')                                               | %                 |             |
| FILTERNAME           | Filter connector name (can be a regexp)                                                            |                   |             |
| WARNINGREQUESTCOUNT  | Threshold                                                                                          |                   |             |
| CRITICALREQUESTCOUNT | Threshold                                                                                          |                   |             |
| WARNINGTHREADSBUSY   | Threshold                                                                                          |                   |             |
| CRITICALTHREADSBUSY  | Threshold                                                                                          |                   |             |
| WARNINGTHREADSCOUNT  | Threshold                                                                                          |                   |             |
| CRITICALTHREADSCOUNT | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICIN     | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICIN    | Threshold                                                                                          |                   |             |
| WARNINGTRAFFICOUT    | Threshold                                                                                          |                   |             |
| CRITICALTRAFFICOUT   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Datasource-Usage" label="Datasource-Usage">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS             | Units of thresholds (default: '%') ('%', 'absolute')                                               | %                 |             |
| FILTERNAME        | Filter datasource name (can be a regexp)                                                           |                   |             |
| WARNINGNUMACTIVE  | Threshold                                                                                          |                   |             |
| CRITICALNUMACTIVE | Threshold                                                                                          |                   |             |
| WARNINGNUMIDLE    | Threshold                                                                                          |                   |             |
| CRITICALNUMIDLE   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Tomcat-Class-Count" label="Tomcat-Class-Count">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCURRENT  | Threshold                                                                                          |                   |             |
| CRITICALCURRENT | Threshold                                                                                          |                   |             |
| WARNINGLOADED   | Threshold                                                                                          |                   |             |
| CRITICALLOADED  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Tomcat-Cpu-Load" label="Tomcat-Cpu-Load">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPROCESS  | Warning threshold of process CPU load                                                              |                   |             |
| CRITICALPROCESS | Critical threshold of process CPU load                                                             |                   |             |
| WARNINGSYSTEM   | Warning threshold of system CPU load                                                               |                   |             |
| CRITICALSYSTEM  | Critical threshold of system CPU load                                                              |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Tomcat-Fd-Usage" label="Tomcat-Fd-Usage">

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
<TabItem value="Tomcat-Load-Average" label="Tomcat-Load-Average">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGLOAD1  | Warning threshold for loadaverage                                                                  |                   |             |
| CRITICALLOAD1 | Critical threshold for loadaverage                                                                 |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Tomcat-Memory" label="Tomcat-Memory">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS           | Units of thresholds (default: '%') ('%', 'B')                                                      | %                 |             |
| WARNINGHEAP     | Warning threshold of Heap memory usage                                                             |                   |             |
| CRITICALHEAP    | Critical threshold of Heap memory usage                                                            |                   |             |
| WARNINGNONHEAP  | Warning threshold of NonHeap memory usage                                                          |                   |             |
| CRITICALNONHEAP | Critical threshold of NonHeap memory usage                                                         |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Tomcat-Memory-Detailed" label="Tomcat-Memory-Detailed">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGEDEN       | Warning threshold of Heap 'Eden Space' memory usage                                                |                   |             |
| CRITICALEDEN      | Critical threshold of Heap 'Survivor Space' memory usage                                           |                   |             |
| WARNINGPERMANENT  | Warning threshold of NonHeap 'Permanent Generation' memory usage                                   |                   |             |
| CRITICALPERMANENT | Critical threshold of NonHeap 'Permanent Generation' memory usage                                  |                   |             |
| WARNINGSURVIVOR   | Warning threshold of Heap 'Survivor Space' memory usage                                            |                   |             |
| CRITICALSURVIVOR  | Critical threshold of Heap 'Survivor Space' memory usage                                           |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Tomcat-Threads" label="Tomcat-Threads">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVE   | Threshold                                                                                          |                   |             |
| CRITICALACTIVE  | Threshold                                                                                          |                   |             |
| WARNINGDAEMON   | Threshold                                                                                          |                   |             |
| CRITICALDAEMON  | Threshold                                                                                          |                   |             |
| WARNINGSTARTED  | Threshold                                                                                          |                   |             |
| CRITICALSTARTED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Webapps-Sessions" label="Webapps-Sessions">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS                  | Units of thresholds (default: '%') ('%', 'absolute')                                               | %                 |             |
| FILTERNAME             | Filter webapps name (can be a regexp)                                                              |                   |             |
| WARNINGSESSIONSACTIVE  | Threshold                                                                                          |                   |             |
| CRITICALSESSIONSACTIVE | Threshold                                                                                          |                   |             |
| WARNINGSESSIONSCOUNT   | Threshold                                                                                          |                   |             |
| CRITICALSESSIONSCOUNT  | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_tomcat_jmx.pl \
	--plugin=apps::tomcat::jmx::plugin \
	--mode=webapps-sessions \
	--custommode=jolokia \
	--url='xxxxxxx' \
	--username='xxxxxxx' \
	--password='xxxxxxx' \
	--target-url='xxxxxxx' \
	--target-username='xxxxxxx' \
	--target-password='xxxxxxx'  \
	--filter-name='' \
	--units='%' \
	--warning-sessions-count='' \
	--critical-sessions-count='' \
	--warning-sessions-active='' \
	--critical-sessions-active='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All webapp sessions are ok | 'webapps1#sessions-active'=21611;;;; 'webapps2#sessions-active'=15181;;;; 'webapps1#sessions-count'=47133;;;0; 'webapps2#sessions-count'=70018;;;0;
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
/usr/lib/centreon/plugins/centreon_tomcat_jmx.pl \
	--plugin=apps::tomcat::jmx::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                               | Modèle de service associé                        |
|:-----------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| class-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/classcount.pm)]         | App-Webserver-Tomcat-Class-Count-JMX-custom      |
| connector-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/connectorusage.pm)]     | App-Webserver-Tomcat-Connector-Usage-JMX-custom  |
| cpu-load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/cpuload.pm)]               | App-Webserver-Tomcat-Cpu-Load-JMX-custom         |
| datasource-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/datasourceusage.pm)]   | App-Webserver-Tomcat-Datasource-Usage-JMX-custom |
| fd-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/fdusage.pm)]               | App-Webserver-Tomcat-Fd-Usage-JMX-custom         |
| gc-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/gcusage.pm)]               | Not used in this Monitoring Connector            |
| list-datasources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/listdatasources.pm)]   | Not used in this Monitoring Connector            |
| list-webapps [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/listwebapps.pm)]           | Not used in this Monitoring Connector            |
| load-average [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/loadaverage.pm)]       | App-Webserver-Tomcat-Load-Average-JMX-custom     |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memory.pm)]                  | App-Webserver-Tomcat-Memory-JMX-custom           |
| memory-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/memorydetailed.pm)] | App-Webserver-Tomcat-Memory-Detailed-JMX-custom  |
| threads [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/jvm/mode/threads.pm)]                | App-Webserver-Tomcat-Threads-JMX-custom          |
| webapps-sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/tomcat/jmx/mode/webappssessions.pm)]   | App-Webserver-Tomcat-Webapps-Sessions-JMX-custom |

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
| --url                                      |   Url where the jolokia agent is deployed (required). Example: http://localhost:8080/jolokia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --timeout                                  |     Timeout in seconds for HTTP requests (default: 30 seconds)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --username                                 |   Credentials to use for the HTTP request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 |   Credentials to use for the HTTP request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proxy-url                                |   Optional HTTP proxy to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --proxy-username                           |   Credentials to use for the proxy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --proxy-password                           |   Credentials to use for the proxy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --target-url                               |   Target to use (if you use jolokia agent as a proxy in --url option).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --target-username                          |   Credentials to use for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --target-password                          |   Credentials to use for the target                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Connector-Usage" label="Connector-Usage">

| Option            | Description                                                                                                    |
|:------------------|:---------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='threads-busy'                   |
| --filter-name     |   Filter connector name (can be a regexp).                                                                     |
| --warning-*       |   Warning threshold. Can be: 'threads-count', 'threads-busy', 'request-count', 'traffic-in', 'traffic-out'.    |
| --critical-*      |   Critical threshold. Can be: 'threads-count', 'threads-busy', 'request-count', 'traffic-in', 'traffic-out'.   |
| --units           |   Units of thresholds (default: '%') ('%', 'absolute').                                                        |

</TabItem>
<TabItem value="Datasource-Usage" label="Datasource-Usage">

| Option            | Description                                                                                  |
|:------------------|:---------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='num-active'   |
| --filter-name     |   Filter datasource name (can be a regexp).                                                  |
| --warning-*       |   Warning threshold. Can be: 'num-active', 'num-idle'.                                       |
| --critical-*      |   Critical threshold. Can be: 'num-active', 'num-idle'.                                      |
| --units           |   Units of thresholds (default: '%') ('%', 'absolute').                                      |

</TabItem>
<TabItem value="Tomcat-Class-Count" label="Tomcat-Class-Count">

| Option                   | Description                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='current'   |
| --warning-* --critical-* |   Thresholds. Can be: 'unloaded', 'loaded', 'current'.                                    |

</TabItem>
<TabItem value="Tomcat-Cpu-Load" label="Tomcat-Cpu-Load">

| Option             | Description                                  |
|:-------------------|:---------------------------------------------|
| --warning-system   |   Warning threshold of system CPU load.      |
| --critical-system  |   Critical threshold of system CPU load.     |
| --warning-process  |   Warning threshold of process CPU load.     |
| --critical-process |   Critical threshold of process CPU load.    |

</TabItem>
<TabItem value="Tomcat-Fd-Usage" label="Tomcat-Fd-Usage">

| Option                   | Description                                                       |
|:-------------------------|:------------------------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'usage', 'usage-free', 'usage-prct' (%).    |

</TabItem>
<TabItem value="Tomcat-Load-Average" label="Tomcat-Load-Average">

| Option           | Description                             |
|:-----------------|:----------------------------------------|
| --warning-load1  |   Warning threshold for loadaverage     |
| --critical-load1 |   Critical threshold for loadaverage    |

</TabItem>
<TabItem value="Tomcat-Memory" label="Tomcat-Memory">

| Option             | Description                                         |
|:-------------------|:----------------------------------------------------|
| --warning-heap     |   Warning threshold of Heap memory usage            |
| --critical-heap    |   Critical threshold of Heap memory usage           |
| --warning-nonheap  |   Warning threshold of NonHeap memory usage         |
| --critical-nonheap |   Critical threshold of NonHeap memory usage        |
| --units            |   Units of thresholds (default: '%') ('%', 'B').    |

</TabItem>
<TabItem value="Tomcat-Memory-Detailed" label="Tomcat-Memory-Detailed">

| Option               | Description                                                           |
|:---------------------|:----------------------------------------------------------------------|
| --warning-eden       |   Warning threshold of Heap 'Eden Space' memory usage                 |
| --critical-eden      |   Critical threshold of Heap 'Survivor Space' memory usage            |
| --warning-tenured    |   Warning threshold of Heap 'Tenured Generation'  memory usage        |
| --critical-tenured   |   Critical threshold of Heap 'Tenured Generation'  memory usage       |
| --warning-survivor   |   Warning threshold of Heap 'Survivor Space' memory usage             |
| --critical-survivor  |   Critical threshold of Heap 'Survivor Space' memory usage            |
| --warning-permanent  |   Warning threshold of NonHeap 'Permanent Generation' memory usage    |
| --critical-permanent |   Critical threshold of NonHeap 'Permanent Generation' memory usage   |
| --warning-code       |   Warning threshold of NonHeap 'Code Cache' memory usage              |
| --critical-code      |   Critical threshold of NonHeap 'Code Cache' memory usage             |
| --units              |   Units of thresholds (default: '%') ('%', 'B').                      |

</TabItem>
<TabItem value="Tomcat-Threads" label="Tomcat-Threads">

| Option       | Description                                                     |
|:-------------|:----------------------------------------------------------------|
| --warning-*  |   Warning threshold. Can be: 'active', 'started', 'daemon'.     |
| --critical-* |   Critical threshold. Can be: 'active', 'started', 'daemon'.    |

</TabItem>
<TabItem value="Webapps-Sessions" label="Webapps-Sessions">

| Option            | Description                                                                                       |
|:------------------|:--------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='sessions-active'   |
| --filter-name     |   Filter webapps name (can be a regexp).                                                          |
| --warning-*       |   Warning threshold. Can be: 'sessions-count', 'sessions-active'.                                 |
| --critical-*      |   Critical threshold. Can be: 'sessions-count', 'sessions-active'.                                |
| --units           |   Units of thresholds (default: '%') ('%', 'absolute').                                           |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_tomcat_jmx.pl \
	--plugin=apps::tomcat::jmx::plugin \
	--mode=webapps-sessions \
	--help
```
