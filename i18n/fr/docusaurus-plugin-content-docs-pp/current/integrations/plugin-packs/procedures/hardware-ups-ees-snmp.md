---
id: hardware-ups-ees-snmp
title: EES UPS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **EES UPS SNMP** apporte un modèle d'hôte :

* **HW-UPS-Ees-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-UPS-Ees-SNMP-custom" label="HW-UPS-Ees-SNMP-custom">

| Alias       | Modèle de service                  | Description                                               |
|:------------|:-----------------------------------|:----------------------------------------------------------|
| Battery     | HW-UPS-Ees-Battery-SNMP-custom     | Contrôle l'état de la batterie                            |
| Input       | HW-UPS-Ees-Input-SNMP-custom       | Contrôle les lignes d'entrées                             |
| Rectifier   | HW-UPS-Ees-Rectifier-SNMP-custom   | Contrôle l'état du redresseur                             |
| System      | HW-UPS-Ees-System-SNMP-custom      | Contrôle l'état du système                                |
| Temperature | HW-UPS-Ees-Temperature-SNMP-custom | Contrôle les sondes de température                        |
| Uptime      | HW-UPS-Ees-Uptime-SNMP-custom      | Durée depuis laquelle le serveur tourne sans interruption |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-UPS-Ees-SNMP-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Battery" label="Battery">

| Métrique                            | Unité |
|:------------------------------------|:------|
| battery.voltage.volt                | V     |
| battery.current.ampere              | A     |
| battery.capacity.percentage         | %     |
| battery.nominal.capacity.amperehour | Ah    |
| battery mode status                 |       |

</TabItem>
<TabItem value="Input" label="Input">

| Métrique                 | Unité |
|:-------------------------|:------|
| lineA.input.voltage.volt | V     |
| lineB.input.voltage.volt | V     |
| lineC.input.voltage.volt | V     |

</TabItem>
<TabItem value="Rectifier" label="Rectifier">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| rectifier status                   |       |
| rectifier.capacity.used.percentage | %     |
| rectifier.installed.count          |       |
| rectifier.communicating.count      |       |

</TabItem>
<TabItem value="System" label="System">

| Métrique                        | Unité |
|:--------------------------------|:------|
| system status                   |       |
| system.voltage.volt             | V     |
| system.current.ampere           | A     |
| system.used.capacity.percentage | %     |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| probe temperature alarm status         |       |
| *probe_name*#probe.temperature.celsius | %     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre ressource en SNMP, il est nécessaire de configurer l'agent SNMP
sur la ressource comme indiqué sur la documentation officielle du constructeur.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers la ressource supervisée.

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
dnf install centreon-pack-hardware-ups-ees-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-ups-ees-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-ups-ees-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-ups-ees-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **EES UPS SNMP**
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
dnf install centreon-plugin-Hardware-Ups-Ees-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Ups-Ees-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-ups-ees-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Ups-Ees-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-UPS-Ees-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Battery" label="Battery">

| Macro                   | Description                                                                                                                                                                   | Valeur par défaut                            | Obligatoire |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|:-----------:|
| UNKNOWNBATTERYMODE      |                                                                                                                                                                               | %{battery\_mode} =~ /unknown/i               |             |
| CRITICALBATTERYMODE     | Define the conditions to match for the status to be CRITICAL (default: '%{battery\_mode} =~ /ACFailTesting\|ACFail/i'). You can use the following variables: %{battery\_mode} | %{battery\_mode} =~ /ACFailTesting\|ACFail/i |             |
| WARNINGCAPACITY         |                                                                                                                                                                               |                                              |             |
| CRITICALCAPACITY        |                                                                                                                                                                               |                                              |             |
| WARNINGCURRENT          |                                                                                                                                                                               |                                              |             |
| CRITICALCURRENT         |                                                                                                                                                                               |                                              |             |
| WARNINGNOMINALCAPACITY  |                                                                                                                                                                               |                                              |             |
| CRITICALNOMINALCAPACITY |                                                                                                                                                                               |                                              |             |
| WARNINGVOLTAGE          |                                                                                                                                                                               |                                              |             |
| CRITICALVOLTAGE         |                                                                                                                                                                               |                                              |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                           |                                              |             |

</TabItem>
<TabItem value="Input" label="Input">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGLINEA  |                                                                                                     |                   |             |
| CRITICALLINEA |                                                                                                     |                   |             |
| WARNINGLINEB  |                                                                                                     |                   |             |
| CRITICALLINEB |                                                                                                     |                   |             |
| WARNINGLINEC  |                                                                                                     |                   |             |
| CRITICALLINEC |                                                                                                     |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Rectifier" label="Rectifier">

| Macro                 | Description                                                                                                                                                                                       | Valeur par défaut                | Obligatoire |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| WARNINGCOMMUNICATING  | Thresholds                                                                                                                                                                                        |                                  |             |
| CRITICALCOMMUNICATING | Thresholds                                                                                                                                                                                        |                                  |             |
| WARNINGINSTALLED      | Thresholds                                                                                                                                                                                        |                                  |             |
| CRITICALINSTALLED     | Thresholds                                                                                                                                                                                        |                                  |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (default: '%{installed} != %{communicating}'). You can use the following variables: %{installed}, %{communicating}, %{used\_capacity} | %{installed} != %{communicating} |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{installed}, %{communicating}, %{used\_capacity}                                              |                                  |             |
| WARNINGUSEDCAPACITY   | Thresholds                                                                                                                                                                                        |                                  |             |
| CRITICALUSEDCAPACITY  | Thresholds                                                                                                                                                                                        |                                  |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                               |                                  |             |

</TabItem>
<TabItem value="System" label="System">

| Macro                | Description                                                                                                                                                                                                                                                                      | Valeur par défaut                                                                     | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS        | Define the conditions to match for the status to be UNKNOWN (default: '%{system\_status} =~ /unknown\|unmanaged\|restricted\|testing\|disabled/i \|\| %{communication\_status} =~ /unknown/i'). You can use the following variables: %{system\_status}, %{communication\_status} | %{system\_status} =~ /unknown\|unma\_status} =~ /unknown/i                            |             |
| WARNINGCURRENT       |                                                                                                                                                                                                                                                                                  |                                                                                       |             |
| CRITICALCURRENT      |                                                                                                                                                                                                                                                                                  |                                                                                       |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING (default: '%{system\_status} =~ /warning\|minor/i'). You can use the following variables: %{system\_status}, %{communication\_status}                                                                                | %{system\_status} =~ /warning\|minor/i                                                |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%{system\_status} =~ /major\|critical/i \|\| %{communication\_status} =~ /interrupt/i'). You can use the following variables: %{system\_status}, %{communication\_status}                                | %{system\_status} =~ /major\|critical/i \|\| %{communication\_status} =~ /interrupt/i |             |
| WARNINGUSEDCAPACITY  |                                                                                                                                                                                                                                                                                  |                                                                                       |             |
| CRITICALUSEDCAPACITY |                                                                                                                                                                                                                                                                                  |                                                                                       |             |
| WARNINGVOLTAGE       |                                                                                                                                                                                                                                                                                  |                                                                                       |             |
| CRITICALVOLTAGE      |                                                                                                                                                                                                                                                                                  |                                                                                       |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                                              |                                                                                       |             |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Macro               | Description                                                                                                                                                                    | Valeur par défaut           | Obligatoire |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNALARMSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: '%{alarm\_status} =~ /fail/i'). You can use the following variables: %{alarm\_status}, %{type}, %{name}  | %{alarm\_status} =~ /fail/i |             |
| WARNINGALARMSTATUS  | Define the conditions to match for the status to be WARNING (default: '%{alarm\_status} =~ /low/i'). You can use the following variables: %{alarm\_status}, %{type}, %{name}   | %{alarm\_status} =~ /low/i  |             |
| CRITICALALARMSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{alarm\_status} =~ /high/i'). You can use the following variables: %{alarm\_status}, %{type}, %{name} | %{alarm\_status} =~ /high/i |             |
| WARNINGTEMPERATURE  |                                                                                                                                                                                |                             |             |
| CRITICALTEMPERATURE |                                                                                                                                                                                |                             |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                            | --verbose                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUPTIME  | Warning threshold                                                                                   |                   |             |
| CRITICALUPTIME | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_ups_ees_snmp.pl \
	--plugin=hardware::ups::ees::snmp::plugin \
	--mode=battery \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: voltage: 54.24V, current: 0.00A, capacity: 100.00%, used capacity: 300.00Ah, Battery mode: 'FloatCharging' | 'battery.voltage.volt'=54.24V;;;; 'battery.current.ampere'=0.00A;;;; 'battery.capacity.percent'=100.00%;;;0;100 'battery.nominal.capacity.amperehour'=300.00Ah;;;;
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
/usr/lib/centreon/plugins//centreon_ups_ees_snmp.pl \
	--plugin=hardware::ups::ees::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode        | Modèle de service associé          |
|:------------|:-----------------------------------|
| battery     | HW-UPS-Ees-Battery-SNMP-custom     |
| input       | HW-UPS-Ees-Input-SNMP-custom       |
| rectifier   | HW-UPS-Ees-Rectifier-SNMP-custom   |
| system      | HW-UPS-Ees-System-SNMP-custom      |
| temperature | HW-UPS-Ees-Temperature-SNMP-custom |
| uptime      | HW-UPS-Ees-Uptime-SNMP-custom      |

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
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Battery" label="Battery">

| Option                   | Description                                                                                                                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds: voltage (V), current (A), capacity (%), nominal-capacity (Ah)                                                                                                                                                                                                                                                     |
| --unknown-battery-mode   | Define the conditions to match for the status to be UNKNOWN (default: '%{battery\_mode} =~ /unknown/i'). You can use the following variables: %{battery\_mode}                                                                                                                                                                |
| --warning-battery-mode   | Define the conditions to match for the status to be WARNING (default: '%{battery\_mode} =~ /ShortTest\|BoostChargingForTest\|ManualTesting\|PlanTesting\|Manual BoostCharging\|AutoBoostCharging\|CyclicBoostCharging\|MasterBoostC harging\|MasterBateryTesting/i'). You can use the following variables: %{battery\_mode}   |
| --critical-battery-mode  | Define the conditions to match for the status to be CRITICAL (default: '%{battery\_mode} =~ /ACFailTesting\|ACFail/i'). You can use the following variables: %{battery\_mode}                                                                                                                                                 |

</TabItem>
<TabItem value="Input" label="Input">

| Option                   | Description                                                   |
|:-------------------------|:--------------------------------------------------------------|
| --warning-* --critical-* | Input thresholds in V  Thresholds: line-a, line-c, line-c.    |

</TabItem>
<TabItem value="Rectifier" label="Rectifier">

| Option                   | Description                                                                                                                                                                                         |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{installed}, %{communicating}, %{used\_capacity}                                                 |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: '%{installed} != %{communicating}'). You can use the following variables: %{installed}, %{communicating}, %{used\_capacity}   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{installed}, %{communicating}, %{used\_capacity}                                                |
| --warning-* --critical-* | Thresholds. Can be: 'used-capacity', 'installed', 'communicating'                                                                                                                                   |

</TabItem>
<TabItem value="System" label="System">

| Option                   | Description                                                                                                                                                                                                                                                                        |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: '%{system\_status} =~ /unknown\|unmanaged\|restricted\|testing\|disabled/i \|\| %{communication\_status} =~ /unknown/i'). You can use the following variables: %{system\_status}, %{communication\_status}   |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: '%{system\_status} =~ /warning\|minor/i'). You can use the following variables: %{system\_status}, %{communication\_status}                                                                                  |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{system\_status} =~ /major\|critical/i \|\| %{communication\_status} =~ /interrupt/i'). You can use the following variables: %{system\_status}, %{communication\_status}                                  |
| --warning-* --critical-* | Thresholds: voltage (V), current (A), used-capacity (%)                                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Option                                       | Description                                                                                                                                                                      |
|:---------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-alarm-status                       | Define the conditions to match for the status to be UNKNOWN (default: '%{alarm\_status} =~ /fail/i'). You can use the following variables: %{alarm\_status}, %{type}, %{name}    |
| --warning-alarm-status                       | Define the conditions to match for the status to be WARNING (default: '%{alarm\_status} =~ /low/i'). You can use the following variables: %{alarm\_status}, %{type}, %{name}     |
| --critical-alarm-status                      | Define the conditions to match for the status to be CRITICAL (default: '%{alarm\_status} =~ /high/i'). You can use the following variables: %{alarm\_status}, %{type}, %{name}   |
| --warning-temperature --critical-temperature | Thresholds: temperature (C)                                                                                                                                                      |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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
| --warning-uptime       | Warning threshold.                                                                                                                                                                                                                            |
| --critical-uptime      | Critical threshold.                                                                                                                                                                                                                           |
| --add-sysdesc          | Display system description.                                                                                                                                                                                                                   |
| --force-oid            | Can choose your OID (numeric format only).                                                                                                                                                                                                    |
| --check-overload       | Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.                                                                                          |
| --reboot-window        | To be used with check-overload option. Time in milliseconds (default: 5000) You increase the chance of not missing a reboot if you decrease that value.                                                                                       |
| --unit                 | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds                                                                                   |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ups_ees_snmp.pl \
	--plugin=hardware::ups::ees::snmp::plugin \
	--mode=battery \
	--help
```
