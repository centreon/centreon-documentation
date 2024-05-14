---
id: applications-rrdcached
title: RRDCached
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **RRDcached** apporte 2 modèles d'hôte :

* **App-Rrdcached-Tcp-custom**
* **App-Rrdcached-Unix-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Rrdcached-Tcp-custom" label="App-Rrdcached-Tcp-custom">

| Alias       | Modèle de service                     | Description                              |
|:------------|:--------------------------------------|:-----------------------------------------|
| Ping-Socket | App-Rrdcached-Ping-Socket-Tcp-custom  | Monitor status and performance of RRDcached daemon  |
| Stats       | App-Rrdcached-Stats-Tcp-custom        | Monitor status and performance of RRDcached daemon  |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Rrdcached-Tcp-custom** est utilisé.

</TabItem>
<TabItem value="App-Rrdcached-Unix-custom" label="App-Rrdcached-Unix-custom">

| Alias       | Modèle de service                     | Description                              |
|:------------|:--------------------------------------|:-----------------------------------------|
| Ping-Socket | App-Rrdcached-Ping-Socket-Unix-custom | Monitor status and performance of RRDcached daemon |
| Stats       | App-Rrdcached-Stats-Unix-custom       | Check Updates cache of rrdcached daemon  |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Rrdcached-Unix-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Ping-Socket*" label="Ping-Socket*">

Aucune métrique pour ce service.

> Concerne les modèles de service suivants : App-Rrdcached-Ping-Socket-Tcp-custom et App-Rrdcached-Ping-Socket-Unix-custom.

</TabItem>
<TabItem value="Stats*" label="Stats*">

| Métrique                  | Unité |
|:--------------------------|:------|
| rrdcached.queue-length    | N/A   |
| rrdcached.waiting-updates | N/A   |

> Concerne les modèles de service suivants : App-Rrdcached-Stats-Tcp-custom et App-Rrdcached-Stats-Unix-custom.

</TabItem>
</Tabs>

## Prérequis

Pour utiliser ce connecteur, vous devez [installer et configurer RRDCached](https://oss.oetiker.ch/rrdtool/doc/rrdcached.en.html).

### Sur un serveur central ou serveur distant Centreon

Pour l'installer sur un serveur central Centreon, vous pouvez suivre [ce how-to](https://thewatch.centreon.com/product-how-to-21/how-to-limit-disk-i-o-usage-with-rrdcached-348), dont voici les principales étapes.

> Vous pouvez choisir parmi deux méthodes de communication, **TCP** et **UNIX Socket**. La première permet de au central d'être supervisé par un poller, la seconde nécessite que le central se supervise lui-même.

1. Déclarer le service **rrdcached**.

<Tabs groupId="sync">
<TabItem value="TCP" label="TCP">

```
cat > /etc/systemd/system/rrdcached.service <<EOF
[Unit]
Description=Data caching daemon for rrdtool

[Service]
Type=forking
User=rrdcached
PIDFile=/var/rrdtool/rrdcached/rrdcached.pid
ExecStart=/usr/bin/rrdcached -m 775 -s rrdcached -L -p /var/rrdtool/rrdcached/rrdcached.pid -b /var/rrdtool/rrdcached -w 3600 -z 3600 -f 600

[Install]
WantedBy=default.target
EOF
```

</TabItem>
<TabItem value="UNIX socket" label="UNIX socket">

```
cat > /etc/systemd/system/rrdcached.service <<EOF
[Unit]
Description=Data caching daemon for rrdtool

[Service]
Type=forking
User=rrdcached
PIDFile=/var/rrdtool/rrdcached/rrdcached.pid
ExecStart=/usr/bin/rrdcached -m 775 -s rrdcached -l unix:/var/rrdtool/rrdcached/rrdcached.sock -p /var/rrdtool/rrdcached/rrdcached.pid -b /var/rrdtool/rrdcached -w 3600 -z 3600 -f 7200

[Install]
WantedBy=default.target
EOF
```

</TabItem>
</Tabs>

2. Modifier les permissions suivantes.

```
mkdir -p /var/rrdtool/rrdcached/
useradd rrdcached -d '/var/rrdtool/rrdcached' -G centreon-broker,centreon -m
chown -R rrdcached: /var/rrdtool
chmod 775 -R /var/rrdtool
usermod -a -G rrdcached centreon-broker
usermod -a -G rrdcached apache
usermod -a -G centreon rrdcached
usermod -a -G centreon-broker rrdcached
```

3. Activer et démarrer le service.

```
systemctl daemon-reload
systemctl enable rrdcached
systemctl start rrdcached
```

4. Modifier l'output Broker de **central-rrd-master** dans **Configuration > Pollers > Broker configuration**.

À l'onglet **Output**, dans l'output **Output 1 - RRD file generator**, les champs suivants doivent être adaptés

<Tabs groupId="sync">
<TabItem value="TCP" label="TCP">

| Paramètre                       | Valeur   |
| ------------------------------- | -------- |
| Enable RRDCached                | TCP Port |
| RRDCacheD listening socket/port | 42217    |

</TabItem>
<TabItem value="UNIX socket" label="UNIX socket">

| Paramètre                       | Valeur                                |
| ------------------------------- | ------------------------------------- |
| Enable RRDCached                | UNIX socket                           |
| RRDCacheD listening socket/port | /var/rrdtool/rrdcached/rrdcached.sock |

</TabItem>
</Tabs>

5. **Exporter la configuration du poller central** et redémarrer Broker

```
systemctl restart cbd
```

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
dnf install centreon-pack-applications-rrdcached
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-rrdcached
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-rrdcached
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-rrdcached
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **RRDcached**
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
dnf install centreon-plugin-Applications-RRDCached
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-RRDCached
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-rrdcached
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-RRDCached
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="App-Rrdcached-Tcp-custom" label="App-Rrdcached-Tcp-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Rrdcached-Tcp-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RRDCACHEDPORT         | TCP port to connect to.                                                                              | 42217             |             |
| RRDCACHEDTIMEOUT      | Connection timeout.                                                                                | 5                 |             |
| RRDCACHEDEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="App-Rrdcached-Unix-custom" label="App-Rrdcached-Unix-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Rrdcached-Unix-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                          | Valeur par défaut                     | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:--------------------------------------|:-----------:|
| RRDCACHEDSOCKETPATH   | Path to the UNIX socket.           | /var/rrdtool/rrdcached/rrdcached.sock |             |
| RRDCACHEDTIMEOUT      | Connection timeout.                                                                   | 5                                     |             |
| RRDCACHEDEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                       |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Ping-Socket" label="Ping-Socket">

| Macro            | Description                                                                                        | Valeur par défaut     | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| CRITICALRESPONSE | Define the conditions to match for the status to be CRITICAL. You can use the variable '%{response}'. | %{response} !~ /PONG/ |             |
| WARNINGRESPONSE  | Define the conditions to match for the status to be WARNING. You can use the variable '%{response}'.  |                       |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose             |             |

</TabItem>
<TabItem value="Stats" label="Stats">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGQUEUELENGTH     | Warning threshold for the number of nodes currently enqueued in the update queue.  |                   |             |
| CRITICALQUEUELENGTH    | Critical threshold for the number of nodes currently enqueued in the update queue.  |                   |             |
| WARNINGWAITINGUPDATES  | Warning threshold for cached RRD updates (one update can include several values).  |                   |             |
| CRITICALWAITINGUPDATES | Critical threshold for cached RRD updates (one update can include several values) |                   |             |
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
/usr/lib/centreon/plugins/centreon_rrdcached.pl \
	--plugin=apps::rrdcached::plugin \
	--custommode=unix \
	--mode=stats \
	--socket-path='' \
	--timeout='5'   \
	--warning-queue-length='' \
	--critical-queue-length='' \
	--warning-waiting-updates='' \
	--critical-waiting-updates='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: queue length: 9, waiting updates: 42 | 'rrdcached.queue-length'=9;;;0; 'rrdcached.waiting-updates'=42;;;0;
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
/usr/lib/centreon/plugins/centreon_rrdcached.pl \
	--plugin=apps::rrdcached::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                       | Modèle de service associé                                                       |
|:-----------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|
| ping [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rrdcached/mode/ping.pm)]   | App-Rrdcached-Ping-Socket-Tcp-custom<br />App-Rrdcached-Ping-Socket-Unix-custom |
| stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rrdcached/mode/stats.pm)] | App-Rrdcached-Stats-Tcp-custom<br />App-Rrdcached-Stats-Unix-custom             |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Options des custom modes

Les options spécifiques aux **custom modes** sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="tcp" label="tcp">

| Option           | Description                                  |
|:-----------------|:---------------------------------------------|
| --hostname       | Hostname to connect to (default: 127.0.0.1). |
| --port           | TCP port to connect to(default: 42217).      |
| --timeout        | Connection timeout.                          |

</TabItem>
<TabItem value="unix" label="unix">

| Option        | Description                                                                 |
|:--------------|:----------------------------------------------------------------------------|
| --socket-path | Path to the UNIX socket (default is /var/rrdtool/rrdcached/rrdcached.sock). |
| --timeout     | Connection timeout.                                                         |

</TabItem>
</Tabs>

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Ping-Socket*" label="Ping-Socket*">

| Option | Description |
|:-------|:------------|
| --warning-response | Define the conditions to match for the status to be WARNING. You can use the variable '%{response}'. |
| --critical-response | Define the conditions to match for the status to be CRITICAL.  You can use the variable '%{response}'. Default: '%{response} !~ /PONG/'. |

</TabItem>
<TabItem value="Stats*" label="Stats*">

| Option | Description |
|:-------|:------------|
| --warning-rrdcached-waiting-updates | Warning threshold for cached RRD updates (one update can include several values). |
| --critical-rrdcached-waiting-updates | Critical threshold for cached RRD updates (one update can include several values). |
| --warning-rrdcached-queue-length | Warning threshold for the number of nodes currently enqueued in the update queue. |
| --critical-rrdcached-queue-length | Critical  threshold for the number of nodes currently enqueued in the update queue. |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_rrdcached.pl \
	--plugin=apps::rrdcached::plugin \
	--custommode=unix \
	--help
```
