---
id: network-cisco-esa-xmlapi
title: Cisco ESA XMLAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco ESA XMLAPI** apporte un modèle d'hôte :

* **Net-Cisco-Esa-Xmlapi-custom**

Le connecteur apporte le modèle de service suivant
(classé selon le modèle d'hôte auquel il est rattaché) :

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Esa-Xmlapi-custom" label="Net-Cisco-Esa-Xmlapi-custom">

| Alias        | Modèle de service                       | Description                        |
|:-------------|:----------------------------------------|:-----------------------------------|
| System-Usage | Net-Cisco-Esa-Sytem-Usage-Xmlapi-custom | Contrôle l'utilisation du système  |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Esa-Xmlapi-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="System-Usage" label="System-Usage">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| system-status                                  | N/A   |
| system.memory.usage.percentage                 | %     |
| system.cpu.total.utilization.percentage        | %     |
| system.disk.io.usage.percentage                | %     |
| system.logging.disk.usage.percentage           | %     |
| system.resource.conservation.current.count     | count |
| system.connections.inbound.current.count       | count |
| system.connections.outbound.current.count      | count |
| system.queue.recipients.active.current.count   | count |
| system.queue.messages.quarantine.current.count | count |
| system.queue.messages.workqueue.current.count  | count |
| system.queue.messages.received.persecond       | /s    |
| system.queue.disk.usage.percentage             | %     |

</TabItem>
</Tabs>

## Prérequis

Veillez à disposer des informations suivantes :

* Informations d'identification de l'API XML en lecture seule
* Adresse IP de l'équipement

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
dnf install centreon-pack-network-cisco-esa-xmlapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-esa-xmlapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-cisco-esa-xmlapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-esa-xmlapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cisco ESA XMLAPI**
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
dnf install centreon-plugin-Network-Cisco-Esa-Xmlapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Esa-Xmlapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-cisco-esa-xmlapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Esa-Xmlapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Esa-Xmlapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| XMLAPIUSERNAME     | Specify the username for authentication                                                                                                            |                   | X           |
| XMLAPIPASSWORD     | Specify the password for authentication                                                                                                            |                   | X           |
| XMLAPIPROTO        | Protocol used http or https (default: https)                                                                                                       |                   |             |
| XMLAPIURLPATH      | Set path to get server-status page in auto mode (default: '/xml/status')                                                                           |                   |             |
| XMLAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="System-Usage" label="System-Usage">

| Macro                         | Description                                                                                                                                      | Valeur par défaut              | Obligatoire |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| UNKNOWNHTTPSTATUS             | Threshold unknown for http response code (default: '%{http_code} < 200 or %{http_code} >= 300')                                                  |                                |             |
| WARNINGCONNECTIONSIN          | Warning threshold for 'connections-in'                                                                                                           |                                |             |
| CRITICALCONNECTIONSIN         | Critical threshold for 'connections-in'                                                                                                          |                                |             |
| WARNINGCONNECTIONSOUT         | Warning threshold for 'connections-out'                                                                                                          |                                |             |
| CRITICALCONNECTIONSOUT        | Critical threshold for 'connections-out'                                                                                                         |                                |             |
| WARNINGCPUTOTAL               | Warning threshold for 'cpu-total' (%)                                                                                                            |                                |             |
| CRITICALCPUTOTAL              | Critical threshold for 'cpu-total' (%)                                                                                                           |                                |             |
| WARNINGDISKIO                 | Warning threshold for 'diskio' (%)                                                                                                               |                                |             |
| CRITICALDISKIO                | Critical threshold for 'diskio' (%)                                                                                                              |                                |             |
| WARNINGHTTPSTATUS             | Warning threshold for http response code                                                                                                         |                                |             |
| CRITICALHTTPSTATUS            | Critical threshold for http response code                                                                                                        |                                |             |
| WARNINGLOG                    | Warning threshold for 'log' (%)                                                                                                                  |                                |             |
| CRITICALLOG                   | Critical threshold for 'log' (%)                                                                                                                 |                                |             |
| WARNINGMEMORY                 | Warning threshold for 'memory' (%)                                                                                                               |                                |             |
| CRITICALMEMORY                | Critical threshold for 'memory' (%)                                                                                                              |                                |             |
| WARNINGMESSAGESQUARANTINE     | Warning threshold for 'messages-quarantine'                                                                                                      |                                |             |
| CRITICALMESSAGESQUARANTINE    | Critical threshold for 'messages-quarantine'                                                                                                     |                                |             |
| WARNINGMESSAGESRECEIVED       | Warning threshold for 'messages-received'                                                                                                        |                                |             |
| CRITICALMESSAGESRECEIVED      | Critical threshold for 'messages-received'                                                                                                       |                                |             |
| WARNINGMESSAGESWORKQUEUE      | Warning threshold for 'messages-workqueue'                                                                                                       |                                |             |
| CRITICALMESSAGESWORKQUEUE     | Critical threshold for 'messages-workqueue'                                                                                                      |                                |             |
| WARNINGQUEUEACTIVERECIPIENTS  | Warning threshold for 'queue-active-recipients'                                                                                                  |                                |             |
| CRITICALQUEUEACTIVERECIPIENTS | Critical threshold for 'queue-active-recipients'                                                                                                 |                                |             |
| WARNINGQUEUEDISK              | Warning threshold for 'queuedisk' (%)                                                                                                            |                                |             |
| CRITICALQUEUEDISK             | Critical threshold for 'queuedisk' (%)                                                                                                           |                                |             |
| WARNINGRESOURCECONSERVATION   | Warning threshold for 'resource-conservation'                                                                                                    |                                |             |
| CRITICALRESOURCECONSERVATION  | Critical threshold for 'resource-conservation'                                                                                                   |                                |             |
| CRITICALSYSTEMSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{system_status}                              | %{system\_status} !~ /online/i |             |
| WARNINGSYSTEMSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{system_status}                               |                                |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                |             |

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
/usr/lib/centreon/plugins/centreon_cisco_esa_xmlapi.pl \
	--plugin=network::cisco::esa::xmlapi::plugin \
	--mode=system-usage \
	--hostname=10.0.0.1 \
	--proto='' \
	--urlpath='' \
	--username='' \
	--password=''  \
	--unknown-http-status='' \
	--warning-http-status='' \
	--critical-http-status='' \
	--warning-system-status='' \
	--critical-system-status='%{system_status} !~ /online/i' \
	--warning-memory='' \
	--critical-memory='' \
	--warning-cpu-total='' \
	--critical-cpu-total='' \
	--warning-diskio='' \
	--critical-diskio='' \
	--warning-log='' \
	--critical-log='' \
	--warning-queue-active-recipients='' \
	--critical-queue-active-recipients='' \
	--warning-messages-quarantine='' \
	--critical-messages-quarantine='' \
	--warning-messages-workqueue='' \
	--critical-messages-workqueue='' \
	--warning-messages-received='' \
	--critical-messages-received='' \
	--warning-queuedisk='' \
	--critical-queuedisk='' \
	--warning-connections-in='' \
	--critical-connections-in='' \
	--warning-connections-out='' \
	--critical-connections-out='' \
	--warning-resource-conservation='' \
	--critical-resource-conservation='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: memory usage: 36 % total cpu usage: 46 % disk i/o usage: 1 % logging disk usage: 23 % resource conservation mode: 46 current inbound connections: 97 current outbound connections: 0 queue active recipients: 25 messages in quarantine: 35 messages in work queue: 42 messages received: 2/s queue disk usage: 8 % | 'system-status'=90;;;;'system.memory.usage.percentage'=36%;;;0;100'system.cpu.total.utilization.percentage'=46%;;;0;100'system.disk.io.usage.percentage'=1%;;;0;100'system.logging.disk.usage.percentage'=23%;;;0;100'system.resource.conservation.current.count'=46;;;0;'system.connections.inbound.current.count'=97;;;0;'system.connections.outbound.current.count'=0;;;0;'system.queue.recipients.active.current.count'=25;;;0;'system.queue.messages.quarantine.current.count'=35;;;0;'system.queue.messages.workqueue.current.count'=42;;;0;'system.queue.messages.received.persecond'=2/s;;;0;'system.queue.disk.usage.percentage'=8%;;;0;100
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
/usr/lib/centreon/plugins/centreon_cisco_esa_xmlapi.pl \
	--plugin=network::cisco::esa::xmlapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                           | Modèle de service associé               |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| system-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/ironport/xmlapi/mode/systemusage.pm)] | Net-Cisco-Esa-Sytem-Usage-Xmlapi-custom |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="System-Usage" label="System-Usage">

| Option                   | Description                                                                                                                                                                                                                                                     |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname               | IP Address or FQDN of the web server host                                                                                                                                                                                                                       |
| --port                   | Port used.                                                                                                                                                                                                                                                      |
| --proto                  | Protocol used http or https (default: https)                                                                                                                                                                                                                    |
| --urlpath                | Set path to get server-status page in auto mode (default: '/xml/status')                                                                                                                                                                                        |
| --username               | Specify the username for authentication                                                                                                                                                                                                                         |
| --password               | Specify the password for authentication                                                                                                                                                                                                                         |
| --timeout                | Threshold for HTTP timeout                                                                                                                                                                                                                                      |
| --unknown-http-status    | Threshold unknown for http response code (default: '%{http_code} < 200 or %{http_code} >= 300')                                                                                                                                                                 |
| --warning-http-status    | Warning threshold for http response code                                                                                                                                                                                                                        |
| --critical-http-status   | Critical threshold for http response code                                                                                                                                                                                                                       |
| --warning-system-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{system_status}                                                                                                                                |
| --critical-system-status | Define the conditions to match for the status to be CRITICAL (default: '%{system_status} !~ /online/i'). You can use the following variables: %{system_status}                                                                                                  |
| --warning                | Warning threshold. Can be: 'memory' (%), 'cpu-total' (%), 'diskio' (%), 'log' (%), 'resource-conservation', 'connections-in', 'connections-out', 'queue-active-recipients', 'messages-quarantine', 'messages-workqueue', 'queuedisk' (%), 'messages-received'.  |
| --critical               | Critical threshold. Can be: 'memory' (%), 'cpu-total' (%), 'diskio' (%), 'log' (%), 'resource-conservation', 'connections-in', 'connections-out', 'queue-active-recipients', 'messages-quarantine', 'messages-workqueue', 'queuedisk' (%), 'messages-received'. |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_esa_xmlapi.pl \
	--plugin=network::cisco::esa::xmlapi::plugin \
	--mode=system-usage \
	--help
```
