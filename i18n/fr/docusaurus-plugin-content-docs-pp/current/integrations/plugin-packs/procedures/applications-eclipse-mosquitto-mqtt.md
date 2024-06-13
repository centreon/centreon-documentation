---
id: applications-eclipse-mosquitto-mqtt
title: Eclipse Mosquitto MQTT
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

{DEPENDENCY_TEMPLATE}

### Modèles

Le connecteur de supervision **Eclipse Mosquitto MQTT** apporte un modèle d'hôte :

* **App-Eclipse-Mosquitto-Mqtt-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Eclipse-Mosquitto-Mqtt-custom" label="App-Eclipse-Mosquitto-Mqtt-custom">

| Alias         | Modèle de service                               | Description                                                          |
|:--------------|:------------------------------------------------|:---------------------------------------------------------------------|
| Clients       | App-Eclipse-Mosquitto-Mqtt-Clients-custom       | Contrôle le nombre de clients connectés                              |
| Messages      | App-Eclipse-Mosquitto-Mqtt-Messages-custom      | Contrôle le nombre de messages                                       |
| Numeric-Value | App-Eclipse-Mosquitto-Mqtt-Numeric-Value-custom | Contrôle permettant de récupérer une valeur numérique d'un topic     |
| String-Value  | App-Eclipse-Mosquitto-Mqtt-String-Value-custom  | Contrôle permettant de récupérer une chaine de caractères d'un topic |
| Uptime        | App-Eclipse-Mosquitto-Mqtt-Uptime-custom        | Durée depuis laquelle le serveur tourne sans interruption            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Eclipse-Mosquitto-Mqtt-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

Coming soon

</TabItem>
<TabItem value="Messages" label="Messages">

Coming soon

</TabItem>
<TabItem value="Numeric-Value" label="Numeric-Value">

| Métrique    | Unité |
|:------------|:------|
| generic     | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="String-Value" label="String-Value">

| Métrique    | Unité |
|:------------|:------|
| generic     | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

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
dnf install centreon-pack-applications-eclipse-mosquitto-mqtt
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-eclipse-mosquitto-mqtt
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-eclipse-mosquitto-mqtt
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-eclipse-mosquitto-mqtt
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Eclipse Mosquitto MQTT**
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
dnf install centreon-plugin-Applications-Eclipse-Mosquitto-MQTT
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Eclipse-Mosquitto-MQTT
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-eclipse-mosquitto-mqtt
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Eclipse-Mosquitto-MQTT
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Eclipse-Mosquitto-Mqtt-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MQTTUSERNAME       | MQTT username                                                                                        |                   |             |
| MQTTPASSWORD       | MQTT password                                                                                        |                   |             |
| MQTTPORT           | Port used by MQTT (default: 8883)                                                                    | 8883              |             |
| ADDRESS            | Name or address of the host to monitor (mandatory)                                                   |                   |             |
| MQTTCACERTIFICATE  | CA certificate file                                                                                  |                   |             |
| MQTTSSL            | Use SSL for MQTT connection (default: 1)                                                             | 1                 |             |
| MQTTSSLCERTIFICATE | Client SSL certificate file                                                                          |                   |             |
| MQTTSSLKEY         | Client SSL key file                                                                                  |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Macro                    | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCLIENTSACTIVE     | Threshold                                                                                          |                   |             |
| CRITICALCLIENTSACTIVE    | Threshold                                                                                          |                   |             |
| WARNINGCLIENTSCONNECTED  | Threshold                                                                                          |                   |             |
| CRITICALCLIENTSCONNECTED | Threshold                                                                                          |                   |             |
| WARNINGCLIENTSINACTIVE   | Threshold                                                                                          |                   |             |
| CRITICALCLIENTSINACTIVE  | Threshold                                                                                          |                   |             |
| WARNINGCLIENTSMAXIMUM    | Threshold                                                                                          |                   |             |
| CRITICALCLIENTSMAXIMUM   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Messages" label="Messages">

| Macro                    | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGMESSAGESRECEIVED  | Threshold                                                                                          |                   |             |
| CRITICALMESSAGESRECEIVED | Threshold                                                                                          |                   |             |
| WARNINGMESSAGESSENT      | Threshold                                                                                          |                   |             |
| CRITICALMESSAGESSENT     | Threshold                                                                                          |                   |             |
| WARNINGMESSAGESSTORED    | Threshold                                                                                          |                   |             |
| CRITICALMESSAGESSTORED   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Numeric-Value" label="Numeric-Value">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERFDATANAME     | Perfdata name in perfdata output (default: 'value')                                                | value             |             |
| TOPIC            | Topic value to check                                                                               |                   |             |
| EXTRACTEDPATTERN | Define a pattern to extract a number from the returned string                                      |                   |             |
| FORMAT           | Output format (default: 'current value is %s')                                                     |                   |             |
| FORMATCUSTOM     | Apply a custom change on the value(example to multiply the value: --format-custom='* 8')           |                   |             |
| PERFDATAUNIT     | Perfdata unit in perfdata output (default: '')                                                     |                   |             |
| PERFDATAMIN      | Minimum value to add in perfdata output (default: '')                                              |                   |             |
| PERFDATAMAX      | Maximum value to add in perfdata output (default: '')                                              |                   |             |
| WARNING          | Warning threshold                                                                                  |                   |             |
| CRITICAL         | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="String-Value" label="String-Value">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FORMATOK          | Threshold                                                                                          | value: %{value}   |             |
| FORMATUNKNOWN     | Threshold                                                                                          | value: %{value}   |             |
| TOPIC             | Topic value to check                                                                               |                   |             |
| FORMATCUSTOM      | Apply a custom change on the value                                                                 |                   |             |
| UNKNOWNREGEXP     |                                                                                                    |                   |             |
| REGEXPINSENSITIVE | Allows to use case-insensitive regexp                                                              |                   |             |
| FORMATWARNING     | Threshold                                                                                          | value: %{value}   |             |
| FORMATCRITICAL    | Threshold                                                                                          | value: %{value}   |             |
| WARNINGREGEXP     | Return Warning if the topic value match the regexp                                                 |                   |             |
| CRITICALREGEXP    | Return Critical if the topic value match the regexp                                                |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUPTIME  | Warning threshold                                                                                  |                   |             |
| CRITICALUPTIME | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_eclipse_mosquitto_mqtt.pl \
	--plugin=apps::eclipse::mosquitto::mqtt::plugin \
	--mode=uptime \
	--hostname='' \
	--mqtt-port='8883' \
	--mqtt-ca-certificate='' \
	--mqtt-ssl-certificate='' \
	--mqtt-ssl-key='' \
	--mqtt-username='' \
	--mqtt-password='' \
	--mqtt-ssl='1'  \
	--warning-uptime='' \
	--critical-uptime='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  | 'system.uptime.seconds'=73s;;;; 
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
/usr/lib/centreon/plugins/centreon_eclipse_mosquitto_mqtt.pl \
	--plugin=apps::eclipse::mosquitto::mqtt::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                   | Modèle de service associé                       |
|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| clients [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/clients.pm)]            | App-Eclipse-Mosquitto-Mqtt-Clients-custom       |
| messages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/messages.pm)]          | App-Eclipse-Mosquitto-Mqtt-Messages-custom      |
| numeric-value [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/numericvalue.pm)] | App-Eclipse-Mosquitto-Mqtt-Numeric-Value-custom |
| string-value [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/stringvalue.pm)]   | App-Eclipse-Mosquitto-Mqtt-String-Value-custom  |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/uptime.pm)]              | App-Eclipse-Mosquitto-Mqtt-Uptime-custom        |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                 | Description                                                                                                                  |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| --mode                 | Define the mode in which you want the plugin to be executed (see --list-mode).                                               |
| --dyn-mode             | Specify a mode with the module's path (advanced).                                                                            |
| --list-mode            | List all available modes.                                                                                                    |
| --mode-version         | Check minimal version of mode. If not, unknown error.                                                                        |
| --version              | Return the version of the plugin.                                                                                            |
| --pass-manager         | Define the password manager you want to use.Supported managers are: environment, file, keepass, hashicorpvault and teampass. |
| --hostname             | Name or address of the host to monitor (mandatory).                                                                          |
| --mqtt-port            | Port used by MQTT (default: 8883).                                                                                           |
| --mqtt-ssl             | Use SSL for MQTT connection (default: 1).                                                                                    |
| --mqtt-ca-certificate  | CA certificate file.                                                                                                         |
| --mqtt-ssl-certificate | Client SSL certificate file.                                                                                                 |
| --mqtt-ssl-key         | Client SSL key file.                                                                                                         |
| --mqtt-username        | MQTT username.                                                                                                               |
| --mqtt-password        | MQTT password.                                                                                                               |
| --mqtt-allow-insecure  | Allow unsecure login (default: 0).                                                                                           |
| --mqtt-timeout         | MQTT timeout (default: 5).                                                                                                   |
| --filter-counters      | Only display some counters (regexp can be used).Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'     |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Option                   | Description                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds.Can be: 'clients-connected', 'clients-maximum', 'clients-active', 'clients-inactive'. |

</TabItem>
<TabItem value="Messages" label="Messages">

| Option                   | Description                                                                 |
|:-------------------------|:----------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds.Can be: 'messages-stored', 'messages-received', 'messages-sent'. |

</TabItem>
<TabItem value="Numeric-Value" label="Numeric-Value">

| Option              | Description                                                                               |
|:--------------------|:------------------------------------------------------------------------------------------|
| --topic             | Topic value to check.                                                                     |
| --warning           | Warning threshold.                                                                        |
| --critical          | Critical threshold.                                                                       |
| --extracted-pattern | Define a pattern to extract a number from the returned string.                            |
| --format            | Output format (default: 'current value is %s')                                            |
| --format-custom     | Apply a custom change on the value(example to multiply the value: --format-custom='* 8'). |
| --perfdata-unit     | Perfdata unit in perfdata output (default: '')                                            |
| --perfdata-name     | Perfdata name in perfdata output (default: 'value')                                       |
| --perfdata-min      | Minimum value to add in perfdata output (default: '')                                     |
| --perfdata-max      | Maximum value to add in perfdata output (default: '')                                     |

</TabItem>
<TabItem value="String-Value" label="String-Value">

| Option               | Description                                                                                                                                                                                              |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --topic              | Topic value to check.                                                                                                                                                                                    |
| --format-custom      | Apply a custom change on the value.                                                                                                                                                                      |
| --warning-regexp     | Return Warning if the topic value match the regexp.                                                                                                                                                      |
| --critical-regexp    | Return Critical if the topic value match the regexp.                                                                                                                                                     |
| --regexp-insensitive | Allows to use case-insensitive regexp.                                                                                                                                                                   |
| --format-*           | Output format according to the threshold.Can be:'ok' (default: 'value: %{value}'),'warning' (default: 'value: %{value}'),'critical' (default: 'value: %{value}'),'unknown' (default: 'value: %{value}'). |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                   |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-uptime  | Warning threshold.                                                                                                                            |
| --critical-uptime | Critical threshold.                                                                                                                           |
| --unit            | Select the time unit for thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_eclipse_mosquitto_mqtt.pl \
	--plugin=apps::eclipse::mosquitto::mqtt::plugin \
	--mode=uptime \
	--help
```
