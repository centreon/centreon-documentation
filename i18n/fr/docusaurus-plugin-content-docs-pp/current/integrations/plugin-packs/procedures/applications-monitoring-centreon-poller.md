---
id: applications-monitoring-centreon-poller
title: Centreon Poller
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Centreon Poller** apporte un modèle d'hôte :

* **App-Monitoring-Centreon-Poller-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Monitoring-Centreon-Poller-custom" label="App-Monitoring-Centreon-Poller-custom">

| Alias           | Modèle de service                                  | Description                                                                    |
|:----------------|:---------------------------------------------------|:-------------------------------------------------------------------------------|
| Broker-Stats    | App-Monitoring-Centreon-Broker-Stats-Poller-custom | Contrôle les statistiques des processus Centreon Broker                        |
| proc-centengine | App-Monitoring-Centreon-Process-centengine-custom  | Contrôle permettant de vérifier le fonctionnement du processus centreon-engine |
| proc-gorgoned   | App-Monitoring-Centreon-Process-gorgoned-custom    | Contrôle permettant de vérifier le fonctionnement du processus centcore        |
| proc-ntpd       | App-Monitoring-Centreon-Process-ntpd-custom        | Contrôle permettant de vérifier le fonctionnement du processus NTP             |
| proc-sshd       | App-Monitoring-Centreon-Process-sshd-custom        | Contrôle permettant de vérifier le fonctionnement du processus sshd            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Monitoring-Centreon-Poller-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Métrique                         | Unité    |
|:---------------------------------|:---------|
| *endpoint*#status                | N/A      |
| *endpoint*#speed-events          | events/s |
| *endpoint*#queued-events         | events   |
| *endpoint*#unacknowledged-events | events   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="proc-centengine" label="proc-centengine">

| Métrique    | Unité |
|:------------|:------|
| nbproc      | N/A   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-gorgoned" label="proc-gorgoned">

| Métrique    | Unité |
|:------------|:------|
| nbproc      | N/A   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-ntpd" label="proc-ntpd">

| Métrique    | Unité |
|:------------|:------|
| nbproc      | N/A   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
<TabItem value="proc-sshd" label="proc-sshd">

| Métrique    | Unité |
|:------------|:------|
| nbproc      | N/A   |
| mem_total   | B     |
| mem_avg     | B     |
| cpu_total   | %     |

</TabItem>
</Tabs>

## Prérequis

### SNMP

SNMP doit être configuré sur chaque collecteur supervisé. Vous pouvez vous aider de [cette documentation](operatingsystems-linux-snmp.md#prerequis) pour mettre en place rapidement une configuration SNMP simple. 

### Échange de clef SSH

Un des services accompagnant le pack dispose d'une vérification réalisée à l'aide de SSH. Le serveur central doit pouvoir se connecter à tous les collecteurs supervisés. 

Le serveur central réalise ses vérifications en tant qu'utilisateur système **centreon-engine**, et se connectera en SSH au collecteur avec l'utilisateur **centreon**.

Les étapes ci-dessous décrivent l'échange de clef SSH entre le central et le collecteur : 

1. Depuis le collecteur supervisé par le central, paramétrer un mot de passe pour l'utilisateur **centreon** :

```
passwd centreon
```

2. Depuis le central, créer et copier la nouvelle clef SSH de l'utilisateur **centreon-engine** vers le collecteur : 

```
su - centreon-engine
ssh-keygen -t ed25519 -a 100
ssh-copy-id -i ~/.ssh/id_ed25519.pub centreon@<IP_POLLER>
```

## 

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
dnf install centreon-pack-applications-monitoring-centreon-poller
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-monitoring-centreon-poller
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-centreon-poller
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-centreon-poller
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Centreon Poller**
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
dnf install centreon-plugin-Applications-Monitoring-Centreon-Poller
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Monitoring-Centreon-Poller
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-centreon-poller
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Poller
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Monitoring-Centreon-Poller-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                          | Valeur par défaut                            | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:---------------------------------------------|:-----------:|
| MODULESTATSFILE  | Specify the centreon-broker json stats file (required). Can be multiple                              | /var/lib/centreon-engine/*-module-stats.json | X           |
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                              |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Macro                        | Description                                                                                                                                                                                                                                 | Valeur par défaut                                               | Obligatoire |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|:-----------:|
| FILTERNAME                   | Filter endpoint name                                                                                                                                                                                                                        |                                                                 |             |
| WARNINGQUEUEDEVENTS          | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| CRITICALQUEUEDEVENTS         | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| WARNINGSPEEDEVENTS           | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| CRITICALSPEEDEVENTS          | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| CRITICALSTATUS               | Define the conditions to match for the status to be CRITICAL (default: '%{type} eq "output" and %{queue\_file\_enabled} =~ /yes/i'). You can use the following variables: %{queue\_file\_enabled}, %{state}, %{status}, %{type}, %{display} | %{type} eq "output" and %{queue\_file\_enabled} =~ /true\|yes/i |             |
| WARNINGSTATUS                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{queue\_file\_enabled}, %{state}, %{status}, %{type}, %{display}                                                                         |                                                                 |             |
| WARNINGUNACKNOWLEDGEDEVENTS  | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| CRITICALUNACKNOWLEDGEDEVENTS | Thresholds                                                                                                                                                                                                                                  |                                                                 |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                          | --verbose --ssh-username='centreon'                             |             |

</TabItem>
<TabItem value="proc-centengine" label="proc-centengine">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                | centengine        |             |
| PROCESSPATH  | Filter process path                                                                                | /usr/sbin/        |             |
| PROCESSARGS  | Filter process arguments                                                                           |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                     | 1:1               |             |
| WARNING      | Warning threshold of matching processes count                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="proc-gorgoned" label="proc-gorgoned">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                | perl              |             |
| PROCESSARGS  | Filter process arguments                                                                           | /usr/bin/gorgoned |             |
| PROCESSPATH  | Filter process path                                                                                |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                     | 1:1               |             |
| WARNING      | Warning threshold of matching processes count                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --cpu --memory    |             |

</TabItem>
<TabItem value="proc-ntpd" label="proc-ntpd">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                | ntpd\|chronyd     |             |
| PROCESSPATH  | Filter process path                                                                                |                   |             |
| PROCESSARGS  | Filter process arguments                                                                           |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                     | 1:1               |             |
| WARNING      | Warning threshold of matching processes count                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="proc-sshd" label="proc-sshd">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROCESSNAME  | Filter process name                                                                                | sshd              |             |
| PROCESSPATH  | Filter process path                                                                                |                   |             |
| PROCESSARGS  | Filter process arguments                                                                           |                   |             |
| WARNING      | Warning threshold of matching processes count                                                      |                   |             |
| CRITICAL     | Critical threshold of matching processes count                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_centreon_poller.pl \
	--plugin=apps::centreon::local::plugin \
	--hostname=10.0.0.1 \
	--mode=broker-stats \
	--broker-stats-file='/var/lib/centreon-engine/*-module-stats.json' \
	--filter-name='' \
	--warning-speed-events='' \
	--critical-speed-events='' \
	--warning-queued-events='' \
	--critical-queued-events='' \
	--warning-unacknowledged-events='' \
	--critical-unacknowledged-events='' \
	--warning-status='' \
	--critical-status='%{type} eq "output" and %{queue_file_enabled} =~ /true|yes/i' \
	--verbose \
	--ssh-username='centreon'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Broker statistics are ok | '*endpoint*#speed-events'=events/s;;;0;'*endpoint*#queued-events'=events;;;0;'*endpoint*#unacknowledged-events'=events;;;0;
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
/usr/lib/centreon/plugins/centreon_centreon_poller.pl \
	--plugin=apps::centreon::local::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                | Modèle de service associé                                                                                                                                                                                |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| arp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/arp.pm)]                                               | Not used in this Monitoring Connector                                                                                                                                                                    |
| bamservice [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/bamservice.pm)]                           | Not used in this Monitoring Connector                                                                                                                                                                    |
| broker-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/brokerstats.pm)]                        | App-Monitoring-Centreon-Broker-Stats-Poller-custom                                                                                                                                                       |
| centengine-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/centenginestats.pm)]                | Not used in this Monitoring Connector                                                                                                                                                                    |
| centreon-plugins-version [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/centreonpluginsversion.pm)] | Not used in this Monitoring Connector                                                                                                                                                                    |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                                               | Not used in this Monitoring Connector                                                                                                                                                                    |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpudetailed.pm)]                              | Not used in this Monitoring Connector                                                                                                                                                                    |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskusage.pm)]                                  | Not used in this Monitoring Connector                                                                                                                                                                    |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/diskio.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                    |
| downtime-trap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/downtimetrap.pm)]                      | Not used in this Monitoring Connector                                                                                                                                                                    |
| dummy [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/dummy.pm)]                                     | Not used in this Monitoring Connector                                                                                                                                                                    |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/inodes.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                    |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                                 | Not used in this Monitoring Connector                                                                                                                                                                    |
| list-diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskio.pm)]                                | Not used in this Monitoring Connector                                                                                                                                                                    |
| list-diskspath [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listdiskspath.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                    |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                        | Not used in this Monitoring Connector                                                                                                                                                                    |
| list-processes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listprocesses.pm)]                          | Not used in this Monitoring Connector                                                                                                                                                                    |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/liststorages.pm)]                            | Not used in this Monitoring Connector                                                                                                                                                                    |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/loadaverage.pm)]                                      | Not used in this Monitoring Connector                                                                                                                                                                    |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/memory.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                    |
| metaservice [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/metaservice.pm)]                         | Not used in this Monitoring Connector                                                                                                                                                                    |
| not-so-dummy [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/notsodummy.pm)]                         | Not used in this Monitoring Connector                                                                                                                                                                    |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/processcount.pm)]                             | App-Monitoring-Centreon-Process-centengine-custom<br />App-Monitoring-Centreon-Process-gorgoned-custom<br />App-Monitoring-Centreon-Process-ntpd-custom<br />App-Monitoring-Centreon-Process-sshd-custom |
| retention-broker [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/centreon/local/mode/retentionbroker.pm)]                | Not used in this Monitoring Connector                                                                                                                                                                    |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]                                       | Not used in this Monitoring Connector                                                                                                                                                                    |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/swap.pm)]                                             | Not used in this Monitoring Connector                                                                                                                                                                    |
| tcpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/tcpcon.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                    |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/ntp.pm)]                                              | Not used in this Monitoring Connector                                                                                                                                                                    |
| udpcon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/udpcon.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                    |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                         | Not used in this Monitoring Connector                                                                                                                                                                    |

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
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on an "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale"Mbps",mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Option                   | Description                                                                                                                                                                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ssh-backend            | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                             |
| --ssh-username           | Define the user name to log in to the host.                                                                                                                                                                                                    |
| --ssh-password           | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                           |
| --ssh-port               | Define the TCP port on which SSH is listening.                                                                                                                                                                                                 |
| --ssh-priv-key           | Define the private key file to use for user authentication.                                                                                                                                                                                    |
| --sshcli-command         | ssh command (default: 'ssh').                                                                                                                                                                                                                  |
| --sshcli-path            | ssh command path (default: none)                                                                                                                                                                                                               |
| --sshcli-option          | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                              |
| --plink-command          | plink command (default: 'plink').                                                                                                                                                                                                              |
| --plink-path             | plink command path (default: none)                                                                                                                                                                                                             |
| --plink-option           | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                          |
| --libssh-strict-connect  | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                            |
| --hostname               | Hostname to query in ssh.                                                                                                                                                                                                                      |
| --timeout                | Timeout in seconds for the command (default: 30).                                                                                                                                                                                              |
| --sudo                   | Use 'sudo' to execute the command.                                                                                                                                                                                                             |
| --broker-stats-file      | Specify the centreon-broker json stats file (required). Can be multiple.                                                                                                                                                                       |
| --filter-name            | Filter endpoint name.                                                                                                                                                                                                                          |
| --warning-* --critical-* | Thresholds. Can be: 'speed-events', 'queued-events', 'unacknowledged-events'.                                                                                                                                                                  |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{queue\_file\_enabled}, %{state}, %{status}, %{type}, %{display}                                                                            |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{type} eq "output" and %{queue\_file\_enabled} =~ /yes/i'). You can use the following variables: %{queue\_file\_enabled}, %{state}, %{status}, %{type}, %{display}    |

</TabItem>
<TabItem value="proc-centengine" label="proc-centengine">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration           | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-gorgoned" label="proc-gorgoned">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration           | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-ntpd" label="proc-ntpd">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration           | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
<TabItem value="proc-sshd" label="proc-sshd">

| Option                    | Description                                                                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                | Name or address of the host to monitor (mandatory).                                                                                                                                                                                           |
| --snmp-community          | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                       |
| --snmp-version            | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                         |
| --snmp-port               | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                          |
| --snmp-timeout            | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                |
| --snmp-retries            | Maximum number of retries (default: 5).                                                                                                                                                                                                       |
| --maxrepetitions          | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                |
| --subsetleef              | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                      |
| --snmp-autoreduce         | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                       |
| --snmp-force-getnext      | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                            |
| --snmp-cache-file         | Use SNMP cache file.                                                                                                                                                                                                                          |
| --snmp-username           | SNMP v3 only: User name (securityName).                                                                                                                                                                                                       |
| --authpassphrase          | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                      |
| --authprotocol            | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                        |
| --privpassphrase          | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                 |
| --privprotocol            | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                         |
| --contextname             | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                 |
| --contextengineid         | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                         |
| --securityengineid        | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                              |
| --snmp-errors-exit        | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                |
| --snmp-tls-transport      | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                       |
| --snmp-tls-our-identity   | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                             |
| --snmp-tls-their-identity | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                      |
| --snmp-tls-their-hostname | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                       |
| --snmp-tls-trust-cert     | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                  |
| --memcached               | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server            | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute         | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file           | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration           | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir           | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix        | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd    | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format        | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key           | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher        | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --process-status          | Filter process status. Can be a regexp. (default: 'running\|runnable').                                                                                                                                                                       |
| --process-name            | Filter process name.                                                                                                                                                                                                                          |
| --regexp-name             | Allows to use regexp to filter process name (with option --process-name).                                                                                                                                                                     |
| --process-path            | Filter process path.                                                                                                                                                                                                                          |
| --regexp-path             | Allows to use regexp to filter process path (with option --process-path).                                                                                                                                                                     |
| --process-args            | Filter process arguments.                                                                                                                                                                                                                     |
| --regexp-args             | Allows to use regexp to filter process arguments (with option --process-args).                                                                                                                                                                |
| --warning                 | Warning threshold of matching processes count.                                                                                                                                                                                                |
| --critical                | Critical threshold of matching processes count.                                                                                                                                                                                               |
| --memory                  | Check memory usage.                                                                                                                                                                                                                           |
| --warning-mem-each        | Warning threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                       |
| --critical-mem-each       | Critical threshold of memory used by each matching processes (in Bytes).                                                                                                                                                                      |
| --warning-mem-total       | Warning threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                      |
| --critical-mem-total      | Critical threshold of total memory used by matching processes (in Bytes).                                                                                                                                                                     |
| --warning-mem-avg         | Warning threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                    |
| --critical-mem-avg        | Critical threshold of average memory used by matching processes (in Bytes).                                                                                                                                                                   |
| --cpu                     | Check cpu usage. Should be used with fix processes. If processespid changes too much, the plugin can't compute values.                                                                                                                        |
| --warning-cpu-total       | Warning threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                         |
| --critical-cpu-total      | Critical threshold of cpu usage for all processes (in percent). CPU usage is in % of one cpu, so maximum can be 100% * number of CPU and a process can have a value greater than 100%.                                                        |
| --top                     | Enable top memory usage display.                                                                                                                                                                                                              |
| --top-num                 | Number of processes in top memory display (default: 5).                                                                                                                                                                                       |
| --top-size                | Minimum memory usage to be in top memory display (default: 52428800 -\> 50 MB).                                                                                                                                                               |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_centreon_poller.pl \
	--plugin=apps::centreon::local::plugin \
	--hostname=10.0.0.1 \
	--help
```
