---
id: cloud-aws-directconnect
title: Amazon Direct Connect
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Amazon Direct Connect** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Amazon Direct Connect** apporte un modèle d'hôte :

* **Cloud-Aws-Directconnect-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Directconnect-custom" label="Cloud-Aws-Directconnect-custom">

| Alias              | Modèle de service                                     | Description                        | Découverte |
|:-------------------|:------------------------------------------------------|:-----------------------------------|:----------:|
| Connections        | Cloud-Aws-Directconnect-Connections-Api-custom        | Contrôle les connexions            |            |
| Virtual-Interfaces | Cloud-Aws-Directconnect-Virtual-Interfaces-Api-custom | Contrôle les interfaces virtuelles | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Directconnect-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle       | Description                                        |
|:----------------------|:---------------------------------------------------|
| Amazon Direct Connect | Découvre les hôtes AWS Direct Connect Connections. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                                | Description                                                                                       |
|:-----------------------------------------------|:--------------------------------------------------------------------------------------------------|
| Cloud-Aws-Directconnect-Virtual-Interface-Name | Découvre les interfaces réseau en utilisant leur nom et supervise leur statut et leur utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| connection.egress.bitspersecond      | bps   |
| connection.ingress.bitspersecond     | bps   |
| connection.egress.packets.persecond  | /s    |
| connection.ingress.packets.persecond | /s    |
| connection.outbound.light.level.dbm  | dBm   |
| connection.inbound.light.level.dbm   | dBm   |

</TabItem>
<TabItem value="Virtual-Interfaces" label="Virtual-Interfaces">

| Nom                                         | Unité |
|:--------------------------------------------|:------|
| virtual_interface.egress.bitspersecond      | bps   |
| virtual_interface.ingress.bitspersecond     | bps   |
| virtual_interface.egress.packets.persecond  | /s    |
| virtual_interface.ingress.packets.persecond | /s    |

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Configurez un compte de service (via une combinaison d'access key et secret key) et affectez-lui les privilèges suivants :
* directconnect:describe-connections
* directconnect:describe-virtual-interfaces
* cloudwatch:getMetricStatistics

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
dnf install centreon-pack-cloud-aws-directconnect
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-directconnect
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-directconnect
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-directconnect
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Amazon Direct Connect**
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
dnf install centreon-plugin-Cloud-Aws-Directconnect-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Directconnect-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-directconnect-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Directconnect-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Directconnect-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro         | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY  | Set AWS access key                                                                                                                                 |                   | X           |
| AWSASSUMEROLE | Set Amazon Resource Name of the role to be assumed                                                                                                 |                   |             |
| AWSCUSTOMMODE | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         | awscli            |             |
| AWSREGION     | Set the region name (required)                                                                                                                     |                   | X           |
| AWSSECRETKEY  | Set AWS secret key                                                                                                                                 |                   | X           |
| CONNECTIONID  | Filter connection ID (can be a regexp)                                                                                                             |                   |             |
| PROXYURL      | Proxy URL if any                                                                                                                                   |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connections" label="Connections">

| Macro                               | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                           | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                       | average           |             |
| TIMEFRAME                           | Set timeframe in seconds                                                                                                                         | 600               |             |
| PERIOD                              | Set period in seconds                                                                                                                            | 60                |             |
| WARNINGCONNECTIONEGRESS             | Threshold                                                                                                                                        |                   |             |
| CRITICALCONNECTIONEGRESS            | Threshold                                                                                                                                        |                   |             |
| WARNINGCONNECTIONINGRESS            | Threshold                                                                                                                                        |                   |             |
| CRITICALCONNECTIONINGRESS           | Threshold                                                                                                                                        |                   |             |
| WARNINGCONNECTIONLIGHLEVELINBOUND   | Threshold                                                                                                                                        |                   |             |
| CRITICALCONNECTIONLIGHLEVELINBOUND  | Threshold                                                                                                                                        |                   |             |
| WARNINGCONNECTIONLIGHLEVELOUTBOUND  | Threshold                                                                                                                                        |                   |             |
| CRITICALCONNECTIONLIGHLEVELOUTBOUND | Threshold                                                                                                                                        |                   |             |
| WARNINGCONNECTIONPACKETSEGRESS      | Threshold                                                                                                                                        |                   |             |
| CRITICALCONNECTIONPACKETSEGRESS     | Threshold                                                                                                                                        |                   |             |
| WARNINGCONNECTIONPACKETSINGRESS     | Threshold                                                                                                                                        |                   |             |
| CRITICALCONNECTIONPACKETSINGRESS    | Threshold                                                                                                                                        |                   |             |
| WARNINGSTATUS                       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{bandwidth}, %{connectionName}      |                   |             |
| CRITICALSTATUS                      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{bandwidth}, %{connectionName}     |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Virtual-Interfaces" label="Virtual-Interfaces">

| Macro                                  | Description                                                                                                                                          | Valeur par défaut | Obligatoire |
|:---------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                              | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                           | average           |             |
| TIMEFRAME                              | Set timeframe in seconds                                                                                                                             | 600               |             |
| PERIOD                                 | Set period in seconds                                                                                                                                | 60                |             |
| FILTERVIRTUALINTERFACEID               | Filter virtual interface ID (can be a regexp)                                                                                                        |                   |             |
| WARNINGSTATUS                          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{vlan}, %{type}, %{virtualInterfaceId}  |                   |             |
| CRITICALSTATUS                         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{vlan}, %{type}, %{virtualInterfaceId} |                   |             |
| WARNINGVIRTUALINTERFACEEGRESS          | Threshold                                                                                                                                            |                   |             |
| CRITICALVIRTUALINTERFACEEGRESS         | Threshold                                                                                                                                            |                   |             |
| WARNINGVIRTUALINTERFACEINGRESS         | Threshold                                                                                                                                            |                   |             |
| CRITICALVIRTUALINTERFACEINGRESS        | Threshold                                                                                                                                            |                   |             |
| WARNINGVIRTUALINTERFACEPACKETSEGRESS   | Threshold                                                                                                                                            |                   |             |
| CRITICALVIRTUALINTERFACEPACKETSEGRESS  | Threshold                                                                                                                                            |                   |             |
| WARNINGVIRTUALINTERFACEPACKETSINGRESS  | Threshold                                                                                                                                            |                   |             |
| CRITICALVIRTUALINTERFACEPACKETSINGRESS | Threshold                                                                                                                                            |                   |             |
| EXTRAOPTIONS                           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).     | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_aws_directconnect_api.pl \
	--plugin=cloud::aws::directconnect::plugin \
	--mode=connections \
	--custommode='awscli' \
	--aws-secret-key='' \
	--aws-access-key='' \
	--aws-role-arn='' \
	--region='eu-west-1' \
	--proxyurl=''  \
	--statistic='average' \
	--timeframe='600' \
	--period='60' \
	--filter-connection-id='' \
	--warning-connection-egress='' \
	--critical-connection-egress='' \
	--warning-connection-ingress='' \
	--critical-connection-ingress='' \
	--warning-connection-ligh-level-inbound='' \
	--critical-connection-ligh-level-inbound='' \
	--warning-connection-ligh-level-outbound='' \
	--critical-connection-ligh-level-outbound='' \
	--warning-connection-packets-egress='' \
	--critical-connection-packets-egress='' \
	--warning-connection-packets-ingress='' \
	--critical-connection-packets-ingress='' \
	--warning-status='' \
	--critical-status='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: connection 'Centreon-EqFA5-Connection-1-10Gbps' state: available [bandwidth: 10Gbps] - statistic 'Average' outbound data: 19.58 Mb/s, inbound data: 53.96 Mb/s, inbound light level: -1.48 dBm, outbound light level: -1.37 dBm, outbound packets data: 7318.25 /s, inbound packet data: 8787.87 /s | 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.egress.bitspersecond'=19579682.84bps;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.ingress.bitspersecond'=53962349.94bps;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.inbound.light.level.dbm'=-1.48dBm;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.outbound.light.level.dbm'=-1.37dBm;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.egress.packets.persecond'=7318.25/s;;;; 'Centreon-EqFA5-Connection-1-10Gbps~average#connection.ingress.packets.persecond'=8787.87/s;;;;
Checking connection 'Centreon-EqFA5-Connection-1-10Gbps' 
    state: available [bandwidth: 10Gbps]
    statistic 'Average' outbound data: 19.58 Mb/s, inbound data: 53.96 Mb/s, inbound light level: -1.48 dBm, outbound light level: -1.37 dBm, outbound packets data: 7318.25 /s, inbound packet data: 8787.87 /s

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
/usr/lib/centreon/plugins/centreon_aws_directconnect_api.pl \
	--plugin=cloud::aws::directconnect::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                  | Modèle de service associé                             |
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/directconnect/mode/connections.pm)]                       | Cloud-Aws-Directconnect-Connections-Api-custom        |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/directconnect/mode/discovery.pm)]                           | Used for host discovery                               |
| list-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/directconnect/mode/listconnections.pm)]              | Not used in this Monitoring Connector                 |
| list-virtual-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/directconnect/mode/listvirtualinterfaces.pm)] | Used for service discovery                            |
| virtual-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/directconnect/mode/virtualinterfaces.pm)]          | Cloud-Aws-Directconnect-Virtual-Interfaces-Api-custom |

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
<TabItem value="Connections" label="Connections">

| Option                   | Description                                                                                                                                                                                        |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                        |
| --filter-connection-id   |   Filter connection ID (can be a regexp).                                                                                                                                                          |
| --filter-metric          |   Filter metrics (can be: 'ConnectionBpsEgress', 'ConnectionBpsIngress',  'ConnectionPpsEgress', 'ConnectionPpsIngress', 'ConnectionLightLevelTx', 'ConnectionLightLevelRx')  (can be a regexp).   |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{bandwidth}, %{connectionName}                                                      |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{bandwidth}, %{connectionName}                                                     |
| --warning-* --critical-* |   Thresholds. Can be 'connection-egress', 'connection-ingress',  'connection-packets-egress', 'connection-packets-ingress', 'connection-ligh-level-outbound', 'connection-ligh-level-inbound.      |

</TabItem>
<TabItem value="Virtual-Interfaces" label="Virtual-Interfaces">

| Option                        | Description                                                                                                                                                            |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-connection-id        |   Filter connection ID (can be a regexp).                                                                                                                              |
| --filter-virtual-interface-id |   Filter virtual interface ID (can be a regexp).                                                                                                                       |
| --filter-metric               |   Filter metrics (can be: 'VirtualInterfaceBpsEgress', 'VirtualInterfaceBpsIngress',  'VirtualInterfacePpsEgress', 'VirtualInterfacePpsIngress')  (can be a regexp).   |
| --warning-status              |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{vlan}, %{type}, %{virtualInterfaceId}                  |
| --critical-status             |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{vlan}, %{type}, %{virtualInterfaceId}                 |
| --warning-* --critical-*      |   Thresholds. Can be 'virtual-interface-egress', 'virtual-interface-ingress',  'virtual-interface-packets-egress', 'virtual-interface-packets-ingress'.                |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_directconnect_api.pl \
	--plugin=cloud::aws::directconnect::plugin \
	--mode=connections \
	--help
```
