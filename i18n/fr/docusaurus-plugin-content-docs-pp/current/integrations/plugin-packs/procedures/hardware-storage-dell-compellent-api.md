---
id: hardware-storage-dell-compellent-api
title: Dell Compellent API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du Connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Dell Compellent API** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Dell Compellent API** apporte un modèle d'hôte :

* **HW-Storage-Dell-Compellent-NRPE-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Dell-Compellent-NRPE-custom" label="HW-Storage-Dell-Compellent-NRPE-custom">

| Alias        | Modèle de service                                   | Description                        |
|:-------------|:----------------------------------------------------|:-----------------------------------|
| Hba-Usage    | HW-Storage-Dell-Compellent-Hba-Usage-NRPE-custom    | Contrôle l'utilisation des ports   |
| Volume-Usage | HW-Storage-Dell-Compellent-Volume-Usage-NRPE-custom | Contrôle l'utilisation des volumes |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Dell-Compellent-NRPE-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Hba-Usage" label="Hba-Usage">

| Nom                 | Unité |
|:--------------------|:------|
| *hba*#read-iops     | iops  |
| *hba*#read-usage    | b/s   |
| *hba*#read-latency  | ms    |
| *hba*#write-iops    | iops  |
| *hba*#write-usage   | b/s   |
| *hba*#write-latency | ms    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Nom                       | Unité |
|:--------------------------|:------|
| *sc1*#_used               | B     |
| *sc2*#_used               | B     |
| *volume1*#_used           | B     |
| *volume2*#_used           | B     |
| *volume1*#volume-overhead | B     |
| *volume2*#volume-overhead | B     |
| *volume1*#volume-replay   | B     |
| *volume2*#volume-replay   | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

Ce connecteur de supervision nécessite l'utilisation :

  - du gestionnaire Dell Storage Enterprise Manager fourni
    (ici) (http://www.dell.com/support/home/us/en/19/Drivers/DriversDetails?driverId=7KXTW)
  - NSClient++ fourni par Centreon, installé et configuré sur votre serveur cible comme décrit [ici](./getting started/how-to-guides/centreon-nsclient++).
    serveur cible comme décrit [ici](../getting-started/how-to-guides/centreon-nsclient-tutorial.md).

Note : Powershell et `DellStorage.ApiCommandSet.dll` doivent être installés sur le serveur Windows. 
Vous devrez ajouter le fichier `powershell.exe.config` dans le répertoire `C:WindowsSystem32WindowsPowerShellv1.0`:

```
<?xml version="1.0"?>
<configuration>
    <startup useLegacyV2RuntimeActivationPolicy="true">
        <supportedRuntime version="v4.0.30319"/>
        <supportedRuntime version="v2.0.50727"/>
    </startup> 
</configuration>
```

Si vous utilisez le programme d'installation de NSClient++ fourni par Centreon, 
le plugin est déjà inclus dans centreon_plugins.exe configuré dans NSClient++.

Le plugin utilise le Compellent Entreprise Manager. Vous avez donc besoin 
d'informations pour vous connecter.

> Set host macro `CEMUSER`, `CEMPASSWORD`, `CEMADDRESS`,
`DELLSTORAGESDKDLL` (le chemin complet du fichier `DellStorage.ApiCommandSet.dll`)

> N'utilisez pas le caractère '!' dans la configuration de la macro centreon !

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
dnf install centreon-pack-hardware-storage-dell-compellent-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-dell-compellent-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-dell-compellent-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-dell-compellent-api
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Dell Compellent API**
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
dnf install 
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install 
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install 
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install 
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Dell-Compellent-NRPE-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                                                                        | Valeur par défaut     | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| CEMPORT          | Compellent Entreprise Manager port                                                                                                                 | 3033                  |             |
| NRPEPORT         | Port used to reach the NRPE server                                                                                                                 | 5666                  |             |
| NRPECLIENT       | NRPE Binary used to perform the check                                                                                                              | check\_centreon\_nrpe |             |
| NRPETIMEOUT      | Timeout to connect to the NRPE Server                                                                                                              | 50                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                       |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Hba-Usage" label="Hba-Usage">

| Macro                | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGREADIOPS      | Threshold                                                                                                                                        |                   |             |
| CRITICALREADIOPS     | Threshold                                                                                                                                        |                   |             |
| WARNINGREADLATENCY   | Threshold                                                                                                                                        |                   |             |
| CRITICALREADLATENCY  | Threshold                                                                                                                                        |                   |             |
| WARNINGREADUSAGE     | Threshold                                                                                                                                        |                   |             |
| CRITICALREADUSAGE    | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITEIOPS     | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITEIOPS    | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITELATENCY  | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITELATENCY | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITEUSAGE    | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITEUSAGE   | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Macro                  | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSCTOTAL         | Threshold                                                                                                                                        |                   |             |
| CRITICALSCTOTAL        | Threshold                                                                                                                                        |                   |             |
| WARNINGVOLUMEOVERHEAD  | Threshold                                                                                                                                        |                   |             |
| CRITICALVOLUMEOVERHEAD | Threshold                                                                                                                                        |                   |             |
| WARNINGVOLUMEREPLAY    | Threshold                                                                                                                                        |                   |             |
| CRITICALVOLUMEREPLAY   | Threshold                                                                                                                                        |                   |             |
| WARNINGVOLUMEUSAGE     | Threshold                                                                                                                                        |                   |             |
| CRITICALVOLUMEUSAGE    | Threshold                                                                                                                                        |                   |             |
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
/usr/lib64/nagios/plugins//check\_centreon\_nrpe -H  -p 5666 -t 50  -c check_centreon_plugins -a 'storage::dell::compellent::local::plugin' 'volume-usage'  '  \
	--cem-user="" \
	--cem-password="" \
	--cem-host="" \
	--cem-port="3033" \
	--sdk-path-dll="" \
	--ps-sc-filter="" \
	--warning-sc-total="" \
	--critical-sc-total=""  \
	--warning-volume-usage="" \
	--critical-volume-usage=""  \
	--warning-volume-overhead="" \
	--critical-volume-overhead=""  \
	--warning-volume-replay="" \
	--critical-volume-replay="" \
	--verbose'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All storage centers are ok All volumes are ok | 'sc1#_used'=17373B;;;; 'sc2#_used'=48167B;;;; 'volume1#_used'=88552B;;;; 'volume2#_used'=5841B;;;; 'volume1#volume-overhead'=37923B;;;0; 'volume2#volume-overhead'=99645B;;;0; 'volume1#volume-replay'=2485B;;;0; 'volume2#volume-replay'=72788B;;;0; 
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
/usr/lib64/nagios/plugins//check\_centreon\_nrpe -H  -p 5666 -t 50  -c check_centreon_plugins -a 'storage::dell::compellent::local::plugin' 'volume-usage'  '  \
	--cem-user="" \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                   | Modèle de service associé                           |
|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| hba-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/compellent/local/mode/hbausage.pm)]       | HW-Storage-Dell-Compellent-Hba-Usage-NRPE-custom    |
| volume-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/compellent/local/mode/volumeusage.pm)] | HW-Storage-Dell-Compellent-Volume-Usage-NRPE-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Hba-Usage" label="Hba-Usage">

| Option            | Description                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| --cem-host        |   Compellent Entreprise Manager hostname (required).                                                                                       |
| --cem-user        |   Compellent Entreprise Manager username (required).                                                                                       |
| --cem-password    |   Compellent Entreprise Manager password (required).                                                                                       |
| --cem-port        |   Compellent Entreprise Manager port (default: 3033).                                                                                      |
| --sdk-path-dll    |   Path to 'DellStorage.ApiCommandSet.dll' (required).                                                                                      |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                   |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path    |   Command path (default: none).                                                                                                            |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display      |   Display powershell script.                                                                                                               |
| --ps-exec-only    |   Print powershell output.                                                                                                                 |
| --ps-sc-filter    |   Filter Storage Center (only wilcard '*' can be used. In Powershell).                                                                     |
| --start-time      |   Begin time for counters sampling. If not set, 30 minutes before the end-time option or current time Format: 2016-05-25T10:30:00          |
| --end-time        |   End time for counters sampling. If not set, the current execution time. Format: 2016-05-25T15:30:00                                      |
| --timezone        |   Timezone of time options. Default is 'GMT'.                                                                                              |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^read-iops$'                                                |
| --warning-*       |   Warning threshold. Can be: 'read-iops', 'read-usage', 'read-latency',  'write-iops', 'write-usage', 'write-latency'.                     |
| --critical-*      |   Critical threshold. Can be: 'read-iops', 'read-usage', 'read-latency',  'write-iops', 'write-usage', 'write-latency'.                    |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Option            | Description                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| --cem-host        |   Compellent Entreprise Manager hostname (required).                                                                                       |
| --cem-user        |   Compellent Entreprise Manager username (required).                                                                                       |
| --cem-password    |   Compellent Entreprise Manager password (required).                                                                                       |
| --cem-port        |   Compellent Entreprise Manager port (default: 3033).                                                                                      |
| --sdk-path-dll    |   Path to 'DellStorage.ApiCommandSet.dll' (required).                                                                                      |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                   |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path    |   Command path (default: none).                                                                                                            |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display      |   Display powershell script.                                                                                                               |
| --ps-exec-only    |   Print powershell output.                                                                                                                 |
| --ps-sc-filter    |   Filter Storage Center (only wilcard '*' can be used. In Powershell).                                                                     |
| --ps-sc-volume    |   Filter Volume Name to display.                                                                                                           |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                                                                           |
| --free            |   Thresholds are on free space left.                                                                                                       |
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^sc-total$'                                                 |
| --warning-*       |   Warning threshold. Can be: 'sc-total', 'volume-usage', 'volume-overhead', 'volume-replay'.                                               |
| --critical-*      |   Critical threshold. Can be: 'sc-total', 'volume-usage', 'volume-overhead', 'volume-replay'.                                              |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins//check\_centreon\_nrpe -H  -p 5666 -t 50  -c check_centreon_plugins -a 'storage::dell::compellent::local::plugin' 'volume-usage'  '  \
	--cem-user="" \
	--cem-password="" \
	--help
```
