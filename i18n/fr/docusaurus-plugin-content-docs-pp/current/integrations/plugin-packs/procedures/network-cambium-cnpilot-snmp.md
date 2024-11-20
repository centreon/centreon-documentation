---
id: network-cambium-cnpilot-snmp
title: Cambium CnPilot SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Cambium cnPilot SNMP** apporte un modèle d'hôte :

* **Net-Cambium-cnPilot-SNMP**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Cambium-cnPilot-SNMP" label="Net-Cambium-cnPilot-SNMP">

| Alias             | Modèle de service                          | Description                       |
|:------------------|:-------------------------------------------|:----------------------------------|
| Connection status | Net-Cambium-Cnpilot-Connection-status-SNMP | Contrôle les status de connection |
| Cpu               | Net-Cambium-Cnpilot-Cpu-SNMP               | Contrôle les CPU                  |
| Memory            | Net-Cambium-Cnpilot-Memory-SNMP            | Contrôle les mémoires             |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cambium-cnPilot-SNMP** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service                   | Description                    | Découverte |
|:-----------|:------------------------------------|:-------------------------------|:-----------|
| Interfaces | Net-Cambium-Cnpilot-Interfaces-SNMP | Contrôle les interfaces réseau | X          |
| Radios     | Net-Cambium-Cnpilot-Radios-SNMP     | Contrôle les radios            | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                          | Description                                                   |
|:-----------------------------------------|:--------------------------------------------------------------|
| Net-Cambium-Cnpilot-SNMP-Interfaces-Name | Découverte des interfaces réseau et supervision de l'utilisation de la bande passante |
| Net-Cambium-Cnpilot-SNMP-Radios-Name     | Découverte des radios                                                              |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Connection status" label="Connection status">

| Métrique                     | Unité |
|:-----------------------------|:------|
| connection#connection-status | N/A   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                 | Unité |
|:-------------------------|:------|
| cpu#cpu.usage.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| int#interface.traffic.in.bitspersecond  | b/s   |
| int#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                       | Unité |
|:-------------------------------|:------|
| memory#memory.usage.percentage | %     |

</TabItem>
<TabItem value="Radios" label="Radios">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| radios#radio.clients.connected.count             | count |
| radios#status                                    | N/A   |
| radios#radio.interface.noise.floor.dbm           | dBm   |
| radios#radio.interface.interference.dbm          | dBm   |
| radios#radio.interface.traffic.in.bitspersecond  | b/s   |
| radios#radio.interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre ressource en SNMP,  il est nécessaire de configurer l'agent 
sur le serveur comme indiqué sur la documentation officielle :
* https://community.cambiumnetworks.com/t/configuring-snmp-on-cnpilot-e-series/51324

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquets
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-cambium-cnpilot-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cambium-cnpilot-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-cambium-cnpilot-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cambium-cnpilot-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cambium cnPilot SNMP**
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
dnf install centreon-plugin-Network-Cambium-cnPilot-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cambium-cnPilot-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-cambium-cnpilot-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cambium-cnPilot-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cambium-cnPilot-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connection status" label="Connection status">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGCPUUSAGEPRCT  |                                                                                                     |                   |             |
| CRITICALCPUUSAGEPRCT |                                                                                                     |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                                                          | Valeur par défaut                                    | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:------------|
| OIDFILTER          | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                      | ifname                                               |             |
| OIDDISPLAY         | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                     | ifname                                               |             |
| INTERFACENAME      | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface')                                                                                                  |                                                      |             |
| WARNINGINDISCARD   | Thresholds                                                                                                                                                                           |                                                      |             |
| CRITICALINDISCARD  | Thresholds                                                                                                                                                                           |                                                      |             |
| WARNINGINERROR     | Thresholds                                                                                                                                                                           |                                                      |             |
| CRITICALINERROR    | Thresholds                                                                                                                                                                           |                                                      |             |
| WARNINGINTRAFFIC   | Thresholds                                                                                                                                                                           |                                                      |             |
| CRITICALINTRAFFIC  | Thresholds                                                                                                                                                                           |                                                      |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                                                                                                           |                                                      |             |
| CRITICALOUTDISCARD | Thresholds                                                                                                                                                                           |                                                      |             |
| WARNINGOUTERROR    | Thresholds                                                                                                                                                                           |                                                      |             |
| CRITICALOUTERROR   | Thresholds                                                                                                                                                                           |                                                      |             |
| WARNINGOUTTRAFFIC  | Thresholds                                                                                                                                                                           |                                                      |             |
| CRITICALOUTTRAFFIC | Thresholds                                                                                                                                                                           |                                                      |             |
| CRITICALSTATUS     | Set critical threshold for status (Default: '%{admstatus} eq "up" and %\{opstatus\} ne "up"'). Can used special variables like: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\} | %\{admstatus\} eq "up" and %\{opstatus\} !~ /up|dormant/ |             |
| WARNINGSTATUS      | Set warning threshold for status. Can used special variables like: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                            |                                                      |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                  |                                                      |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                   | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGMEMORYUSAGEPRCT  |                                                                                                     |                   |             |
| CRITICALMEMORYUSAGEPRCT |                                                                                                     |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Radios" label="Radios">

| Macro                | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME           | Filter interface by MACAdress                                                                                              |                   |             |
| WARNINGCLIENTS       |                                                                                                                            |                   |             |
| CRITICALCLIENTS      |                                                                                                                            |                   |             |
| WARNINGINTERFERENCE  | Thresholds                                                                                                                 |                   |             |
| CRITICALINTERFERENCE | Thresholds                                                                                                                 |                   |             |
| WARNINGSTATUS        | Set warning threshold for status. Can used special variables like: %\{status\}, %\{name\}                                      |                   |             |
| CRITICALSTATUS       | Set critical threshold for status (Default: '%{status} eq "expired"'). Can used special variables like: %\{status\}, %\{name\} |                   |             |
| WARNINGTRAFFICIN     | Thresholds                                                                                                                 |                   |             |
| CRITICALTRAFFICIN    | Thresholds                                                                                                                 |                   |             |
| WARNINGTRAFFICOUT    | Thresholds                                                                                                                 |                   |             |
| CRITICALTRAFFICOUT   | Thresholds                                                                                                                 |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                        |                   |             |

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
/usr/lib/centreon/plugins//centreon_cambium_cnpilot.pl \
	--plugin=network::cambium::cnpilot::snmp::plugin \
	--mode=interfaces \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--interface='' \
	--name \
	--add-status \
	--add-traffic \
	--add-errors \
	--warning-status='' \
	--critical-status='%{admstatus} eq "up" and %\{opstatus\} !~ /up|dormant/' \
	--warning-in-traffic='' \
	--critical-in-traffic='' \
	--warning-out-traffic='' \
	--critical-out-traffic='' \
	--warning-in-discard='' \
	--critical-in-discard='' \
	--warning-out-discard='' \
	--critical-out-discard='' \
	--warning-in-error='' \
	--critical-in-error='' \
	--warning-out-error='' \
	--critical-out-error='' \
	--oid-filter='ifname' \
	--oid-display='ifname' \
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Traffic In : 321.02b/s (-) Traffic Out : 382.02b/s (-) | 'interface.traffic.in.bitspersecond'=59b/s;;;0; 'interface.traffic.out.bitspersecond'=18b/s;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cambium_cnpilot.pl \
	--plugin=network::cambium::cnpilot::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode              | Modèle de service associé                  |
|:------------------|:-------------------------------------------|
| connection-status | Net-Cambium-Cnpilot-Connection-status-SNMP |
| cpu               | Net-Cambium-Cnpilot-Cpu-SNMP               |
| interfaces        | Net-Cambium-Cnpilot-Interfaces-SNMP        |
| list-interfaces   | Used for service discovery                 |
| list-radios       | Used for service discovery                 |
| memory            | Net-Cambium-Cnpilot-Memory-SNMP            |
| radios            | Net-Cambium-Cnpilot-Radios-SNMP            |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --version                                  | Display the plugin's version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                           | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                            | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                              | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --output-ignore-label                      | Remove the status label from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --float-precision                          | Set the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --source-encoding                          | Set encoding of monitoring sources (in some cases. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --hostname                                 | Hostname to query (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-community                           | Read community (defaults to public).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-version                             | Version: 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-port                                | Port (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-timeout                             | Timeout in secondes (default: 1) before retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-retries                             | Set the number of retries (default: 5) before failure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --snmp-autoreduce                          | Auto reduce SNMP request size in case of SNMP errors (By default, the divisor is 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-force-getnext                       | Use snmp getnext function (even in snmp v2c and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-username                            | Security name (only for SNMP v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP   |
| --authpassphrase                           | Authentication protocol pass phrase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --authprotocol                             | Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --privpassphrase                           | Privacy protocol pass phrase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --privprotocol                             | Privacy protocol: DES\|AES. Since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP   |
| --contextname                              | Context name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --contextengineid                          | Context engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP   |
| --securityengineid                         | Security engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP   |
| --snmp-errors-exit                         | Exit code for SNMP Errors (default: unknown)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --snmp-tls-transport                       | TLS Transport communication used (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --snmp-tls-our-identity                    | Our X.509 identity to use, which should either be a fingerprint or the filename that holds the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | SNMP   |
| --snmp-tls-their-identity                  | The remote server's identity to connect to, specified as either a fingerprint or a file name. Either this must be specified, or the hostname below along with a trust anchor.                                                                                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-tls-their-hostname                  | The remote server's hostname that is expected. If their certificate was signed by a CA then their hostname presented in the certificate must match this value or the connection fails to be established (to avoid man-in-the-middle attacks).                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-tls-trust-cert                      | A trusted certificate to use as trust anchor (like a CA certificate) for verifying a remote server's certificate. If a CA certificate is used to validate a certificate then the TheirHostname parameter must also be specified to ensure their presented hostname in the certificate matches.                                                                                                                                                                                                                                                                             | SNMP   |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Connection status" label="Connection status">

| Option                       | Description                                                                               | Type |
|:-----------------------------|:------------------------------------------------------------------------------------------|:-----|
| --filter-ap                  | Filter on one or several AP.                                                              | Mode |
| --warning-connection-status  | Set warning threshold for status. Can used special variables like: %\{status\}, %\{name\}     | Mode |
| --critical-connection-status | Set critical threshold for status. Can used special variables like: %\{status\}, %\{name\}    | Mode |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option      | Description                    | Type |
|:------------|:-------------------------------|:-----|
| --filter-ap | Filter on one AP name.         | Mode |
| --warning   | Warning threshold for CPU.     | Mode |
| --critical  | Critical threshold for CPU.    | Mode |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                                                                                                                                | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode      |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    | Mode      |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode      |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    | Mode      |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      | Mode      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     | Mode      |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode      |
| --warning-status         | Set warning threshold for status. Can used special variables like: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                                                                                                                                  | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %\{opstatus\} ne "up"'). Can used special variables like: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                                                                       | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode      |
| --name                   | Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode      |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode      |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode      |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             | Mode      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option      | Description                       | Type |
|:------------|:----------------------------------|:-----|
| --filter-ap | Filter on one or several AP.      | Mode |
| --warning   | Warning threshold for Memory.     | Mode |
| --critical  | Critical threshold for Memory.    | Mode |

</TabItem>
<TabItem value="Radios" label="Radios">

| Option                   | Description                                                                                                                  | Type      |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                   | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                              | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                      | Retention |
| --redis-db               | Set Redis database index.                                                                                                    | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                         | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                               | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                          | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                           | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                   | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                           | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                                | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                    | Retention |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='status'                                         | Mode      |
| --filter-name            | Filter interface by MACAdress                                                                                                | Mode      |
| --warning-status         | Set warning threshold for status. Can used special variables like: %\{status\}, %\{name\}                                        | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{status} eq "expired"'). Can used special variables like: %\{status\}, %\{name\}   | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'clients-connected', 'noise-floor', 'interference', 'traffic-in', 'traffic-out'.                         | Mode      |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_cambium_cnpilot.pl \
	--plugin=network::cambium::cnpilot::snmp::plugin \
	--mode=interfaces \
    --help
```
