---
id: cloud-aws-ebs
title: Amazon EBS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Amazon Elastic Block Store (EBS) est un service de stockage par bloc hautes performances et simple d'utilisation conçu en vue d'une utilisation avec Amazon Elastic Compute Cloud (EC2) 
pour les charges de travail exigeantes en débit et en transactions à n'importe quelle échelle.
Des charges de travail variées, telles que des bases de données relationnelles et non relationnelles, des applications d'entreprise, des applications conteneurisées, des moteurs d'analyse Big Data, 
des systèmes de fichiers et des workflows multimédias, sont largement déployées sur Amazon EBS.

## Dépendances du Connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Amazon EBS** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Amazon EBS** apporte un modèle d'hôte :

* **Cloud-Aws-Ebs-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Ebs-custom" label="Cloud-Aws-Ebs-custom">

| Alias         | Modèle de service                    | Description                                             |
|:--------------|:-------------------------------------|:--------------------------------------------------------|
| Ebs-Iops      | Cloud-Aws-Ebs-Volume-Iops-Api-custom | Contrôle les IOPS du volume                             |
| Ebs-Time      | Cloud-Aws-Ebs-Volume-Time-Api-custom | Contrôle le temps de lecture/écriture du volume         |
| Ebs-Volume-IO | Cloud-Aws-Ebs-Volume-Io-Api-custom   | Contrôle l'utilisation des écritures/lectures du volume |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Ebs-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                       |
|:----------------|:--------------------------------------------------|
| Amazon AWS EBS  | Découvre les hôtes Amazon AWS Elastic Block Store |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Ebs-Iops" label="Ebs-Iops">

| Nom                                            | Unité |
|:-----------------------------------------------|:------|
| ebs.volume.iops.read.count                     | count |
| ebs.volume.iops.read.countpersecond            | /s    |
| ebs.volume.iops.write.count                    | count |
| ebs.volume.iops.write.countpersecond           | /s    |
| ebs.volume.iops.throughput.percentage          | %     |
| ebs.volume.iops.throughput.percentagepersecond | %/s   |
| ebs.volume.iops.consumed.count                 | count |
| ebs.volume.iops.consumed.countpersecond        | /s    |
| ebs.volume.iops.queuelength.count              | count |
| ebs.volume.iops.queuelength.countpersecond     | /s    |

</TabItem>
<TabItem value="Ebs-Time" label="Ebs-Time">

| Nom                               | Unité |
|:----------------------------------|:------|
| ebs.volume.totalread.time.second  | s     |
| ebs.volume.totalwrite.time.second | s     |
| ebs.volume.idle.time.second       | s     |

</TabItem>
<TabItem value="Ebs-Volume-IO" label="Ebs-Volume-IO">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| ebs.volume.bytes.read.bytes           | B     |
| ebs.volume.bytes.read.bytespersecond  | B/s   |
| ebs.volume.bytes.write.bytes          | B     |
| ebs.volume.bytes.write.bytespersecond | B/s   |

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Configurez un compte de service (via une combinaison d'access et secret key) et affectez-lui les privilèges suivants :
* cloudwatch:getMetricStatistics
* ec2:DescribeVolumes

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli* fourni par Amazon, soit le SDK Perl *paws*. Le SDK est recommandé car plus performant.

> **Attention**, il n'est pas possible d'utiliser *paws* si la connexion s'effectue au travers d'un proxy.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bash
yum install perl-Paws
```

</TabItem>
<TabItem value="aws-cli-installation" label="aws-cli-installation">

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

</TabItem>
</Tabs>

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
dnf install centreon-pack-cloud-aws-ebs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-ebs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-ebs
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-ebs
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Amazon EBS**
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
dnf install centreon-plugin-Cloud-Aws-Ebs-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Ebs-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-ebs-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Ebs-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Ebs-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro         | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY  | Set AWS access key                                                                                                                                 |                   |             |
| AWSASSUMEROLE | Set Amazon Resource Name of the role to be assumed                                                                                                 |                   |             |
| AWSCUSTOMMODE | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         | awscli            |             |
| AWSREGION     | Set the region name (required)                                                                                                                     |                   | X           |
| AWSSECRETKEY  | Set AWS secret key                                                                                                                                 |                   |             |
| AWSVOLUMEID   | Set the VolumeId (required)                                                                                                                        |                   | X           |
| PROXYURL      | Proxy URL if any                                                                                                                                   |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Ebs-Iops" label="Ebs-Iops">

| Macro                   | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIOPSCONSUMED     | Threshold                                                                                                                                        |                   |             |
| CRITICALIOPSCONSUMED    | Threshold                                                                                                                                        |                   |             |
| WARNINGIOPSQUEUELENGTH  | Threshold                                                                                                                                        |                   |             |
| CRITICALIOPSQUEUELENGTH | Threshold                                                                                                                                        |                   |             |
| WARNINGIOPSREAD         | Threshold                                                                                                                                        |                   |             |
| CRITICALIOPSREAD        | Threshold                                                                                                                                        |                   |             |
| WARNINGIOPSTHROUGHPUT   | Threshold                                                                                                                                        |                   |             |
| CRITICALIOPSTHROUGHPUT  | Threshold                                                                                                                                        |                   |             |
| WARNINGIOPSWRITE        | Threshold                                                                                                                                        |                   |             |
| CRITICALIOPSWRITE       | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Ebs-Time" label="Ebs-Time">

| Macro                  | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLETIME        | Threshold                                                                                                                                        |                   |             |
| CRITICALIDLETIME       | Threshold                                                                                                                                        |                   |             |
| WARNINGTOTALREADTIME   | Threshold                                                                                                                                        |                   |             |
| CRITICALTOTALREADTIME  | Threshold                                                                                                                                        |                   |             |
| WARNINGTOTALWRITETIME  | Threshold                                                                                                                                        |                   |             |
| CRITICALTOTALWRITETIME | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Ebs-Volume-IO" label="Ebs-Volume-IO">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGVOLUMEREADBYTES   | Threshold                                                                                                                                        |                   |             |
| CRITICALVOLUMEREADBYTES  | Threshold                                                                                                                                        |                   |             |
| WARNINGVOLUMEWRITEBYTES  | Threshold                                                                                                                                        |                   |             |
| CRITICALVOLUMEWRITEBYTES | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une instance AWS en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl \
	--plugin=cloud::aws::ebs::plugin \
	--mode=volumeio \
	--custommode='awscli' \
	--aws-secret-key='' \
	--aws-access-key='' \
	--aws-role-arn='' \
	--region='' \
	--volume-id='' \
	--proxyurl=''  \
	--warning-volume-read-bytes='' \
	--critical-volume-read-bytes='' \
	--warning-volume-write-bytes='' \
	--critical-volume-write-bytes='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Volume Read Bytes Volume Read Bytes Volume Write Bytes Volume Write Bytes | 'ebs.volume.bytes.read.bytes'=82805B;;;; 'ebs.volume.bytes.read.bytespersecond'=47281B/s;;;; 'ebs.volume.bytes.write.bytes'=15418B;;;; 'ebs.volume.bytes.write.bytespersecond'=2832B/s;;;; 
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
/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl \
	--plugin=cloud::aws::ebs::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                   | Modèle de service associé             |
|:-----------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/discovery.pm)]      | Used for host discovery               |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/listvolumes.pm)] | Not used in this Monitoring Connector |
| volumeio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/volumeio.pm)]        | Cloud-Aws-Ebs-Volume-Io-Api-custom    |
| volumeiops [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/volumeiops.pm)]    | Cloud-Aws-Ebs-Volume-Iops-Api-custom  |
| volumetime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/volumetime.pm)]    | Cloud-Aws-Ebs-Volume-Time-Api-custom  |

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
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
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
| --aws-secret-key                           |   Set AWS secret key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --aws-access-key                           |   Set AWS access key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --aws-session-token                        |   Set AWS session token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --aws-role-arn                             |   Set Amazon Resource Name of the role to be assumed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --region                                   |   Set the region name (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --period                                   |   Set period in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeframe                                |   Set timeframe in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statistic                                |   Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --zeroed                                   |   Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --proxyurl                                 |   Proxy URL if any                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --aws-profile                              |   Set AWS profile.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --endpoint-url                             |   Override AWS service endpoint URL if necessary.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --command                                  |   Command to get information (default: 'aws'). Can be changed if you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --command-path                             |   Command path (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options (default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --skip-ssl-check                           |   Avoid certificate issuer verification. Useful when AWS resources are hosted by a third party.   Note that it strips all stderr from the command result. Debug will only display CLI instead of everything.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Ebs-Iops" label="Ebs-Iops">

| Option              | Description                                                                                                                    |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters   |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'    |
| --volume-id         |   Set the VolumeId (required).                                                                                                 |
| --filter-metric     |   Filter on a specific metric. Can be: VolumeReadOps, VolumeWriteOps, VolumeThroughputPercentage, VolumeConsumedReadWriteOps   |
| --warning-$metric$  |   Warning thresholds ($metric$ can be: 'iops-read', 'iops-write', 'iops-throughput', 'iops-consumed', 'iops-queue-length').    |
| --critical-$metric$ |   Critical thresholds ($metric$ can be: 'iops-read', 'iops-write', 'iops-throughput', 'iops-consumed', 'iops-queue-length').   |
| --per-sec           |   Change the data to be unit/sec.                                                                                              |

</TabItem>
<TabItem value="Ebs-Time" label="Ebs-Time">

| Option              | Description                                                                                                                   |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters   |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --volume-id         |   Set the VolumeId (required).                                                                                                |
| --filter-metric     |   Filter on a specific metric. Can be: VolumeTotalReadTime, VolumeTotalWriteTime, VolumeIdleTime                              |
| --warning-$metric$  |   Warning thresholds ($metric$ can be: 'total-read-time', 'total-write-time', 'idle-time').                                   |
| --critical-$metric$ |   Critical thresholds ($metric$ can be: 'total-read-time', 'total-write-time', 'idle-time').                                  |

</TabItem>
<TabItem value="Ebs-Volume-IO" label="Ebs-Volume-IO">

| Option              | Description                                                                           |
|:--------------------|:--------------------------------------------------------------------------------------|
| --volume-id         |   Set the VolumeId (required).                                                        |
| --filter-metric     |   Filter on a specific metric. Can be: VolumeReadBytes, VolumeWriteBytes              |
| --warning-$metric$  |   Warning thresholds ($metric$ can be: 'volume-read-bytes', 'volume-write-bytes').    |
| --critical-$metric$ |   Critical thresholds ($metric$ can be: 'volume-read-bytes', 'volume-write-bytes').   |
| --per-sec           |   Change the data to be unit/sec.                                                     |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl \
	--plugin=cloud::aws::ebs::plugin \
	--mode=volumeio \
	--help
```
