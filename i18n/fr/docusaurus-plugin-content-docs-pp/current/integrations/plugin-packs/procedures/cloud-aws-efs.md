---
id: cloud-aws-efs
title: Amazon EFS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Amazon EFS** apporte un modèle d'hôte :

* Cloud-Aws-Efs-custom

Il apporte les modèles de service suivants :

| Alias           | Modèle de service             | Description                                            | Défaut |
|:----------------|:------------------------------|:-------------------------------------------------------|:-------|
| Efs-Connections | Cloud-Aws-Efs-Connections-Api |                                                        | X      |
| Efs-DataUsage   | Cloud-Aws-Efs-Datausage-Api   | Contrôle les métriques liées au système de fichier EFS | X      |



> Les services par "Défaut" sont automatiquement liés au(x) modèle(s) d'hôte.

### Règles de découverte

Ce pack propose une règle de découverte d'hôtes permettant de découvrir automatiquement des ressources Amazon EFS :

![image](../../../assets/integrations/plugin-packs/procedures/cloud-aws-efs-provider.png)

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module : [Découverte des hôtes](/docs/monitoring/discovery/hosts-discovery).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Efs-Connections" label="Efs-Connections">

| Métrique                      | Unité |
|:------------------------------|:------|
| efs.clients.connections.count | count |

</TabItem>
<TabItem value="Efs-DataUsage" label="Efs-DataUsage">

| Métrique                      | Unité |
|:------------------------------|:------|
| efs.creditbalance.burst.bytes | B     |
| efs.data.iobytes.read.bytes   | bytes |
| efs.data.iobytes.write.bytes  | B     |
| efs.metadata.iobytes.bytes    | B     |
| efs.total.iobytes.bytes       | B     |

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des access/secret key utilisées pour pouvoir utiliser le monitoring AWS/EC2 :

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| XXXXX:XXXXXXXXXXXXXXXX         | Get XXXXX.                                                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch.           |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli* fourni par Amazon, soit le SDK Perl *paws*. Le SDK est recommandé car plus performant.

> **Attention** il n'est pas possible d'utiliser *paws* si la connexion s'effectue au travers d'un proxy.

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

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-aws-efs
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-efs
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-aws-efs
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Amazon EFS**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Aws-Efs-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Efs-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-aws-efs-api
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
* Appliquez le modèle d'hôte **Cloud-Aws-Efs-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire    | Macro           | Description                                                                            |
|:---------------|:----------------|:---------------------------------------------------------------------------------------|
|                | AWSACCESSKEY    |                                                                                        |
|                | AWSASSUMEROLE   |                                                                                        |
|                | AWSCUSTOMMODE   | (Défaut : 'awscli')                                                                    |
|                | AWSFILESYSTEMID |                                                                                        |
|                | AWSREGION       |                                                                                        |
|                | AWSSECRETKEY    |                                                                                        |
|                | EXTRAOPTIONS    | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|                | PROXYURL        |                                                                                        |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --mode=datausage \
    --custommode='awscli' \
    --aws-secret-key='' \
    --aws-access-key='' \
    --aws-role-arn='' \
    --region='' \
    --name='' \
    --proxyurl='' \
    --filter-metric='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-metadata-iobytes='' \
    --critical-metadata-iobytes='' \
    --warning-data-iobytes-write='' \
    --critical-data-iobytes-write='' \
    --warning-data-iobytes-read='' \
    --critical-data-iobytes-read='' \
    --warning-total-iobytes='' \
    --critical-total-iobytes='' \
    --warning-burst-bytes='' \
    --critical-burst-bytes='' \
    --verbose \
    
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Data Read IO Bytes Data Write IO Bytes MetaData IO Bytes Total IO Bytes Burst Credit Balance Bytes | 'efs.data.iobytes.read.bytes'=0;;;; 'efs.data.iobytes.write.bytes'=28B;;;; 'efs.metadata.iobytes.bytes'=34B;;;; 'efs.total.iobytes.bytes'=92B;;;; 'efs.creditbalance.burst.bytes'=13B;;;; 
```

### Custom modes disponibles

Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --list-custommode
```

Le plugin apporte les custom modes suivants :

* paws
* awscli

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

* connections
* datausage
* discovery

### Options complémentaires

#### Options globales

Les options globales aux modes sont listées ci-dessus :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --mode                                     |     Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --dyn-mode                                 |     Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global      |
| --list-mode                                |     List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --mode-version                             |     Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --version                                  |     Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --custommode                               |     Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --list-custommode                          |     List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global      |
| --multiple                                 |     Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --pass-manager                             |     Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --verbose                                  |     Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --debug                                    |     Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --filter-perfdata                          |     Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --filter-perfdata-adv                      |     Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output      |
| --explode-perfdata-max                     |     Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
| --filter-uom                               |     Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output      |
| --opt-exit                                 |     Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-ignore-perfdata                   |     Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --output-ignore-label                      |     Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-xml                               |     Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output      |
| --output-json                              |     Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output      |
| --output-openmetrics                       |     Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --output-file                              |     Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --disco-format                             |     Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output      |
| --disco-show                               |     Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output      |
| --float-precision                          |     Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --source-encoding                          |     Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |


#### Options des custom modes

Les options spécifiques aux modes custom sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="awscli" label="awscli">

| Option              | Description                                                                                                                                                                                                                               | Option type |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --aws-secret-key    |     Set AWS secret key.                                                                                                                                                                                                                   | Awscli      |
| --aws-access-key    |     Set AWS access key.                                                                                                                                                                                                                   | Awscli      |
| --aws-session-token |     Set AWS session token.                                                                                                                                                                                                                | Awscli      |
| --aws-role-arn      |     Set arn of the role to be assumed.                                                                                                                                                                                                    | Awscli      |
| --aws-profile       |     Set AWS profile.                                                                                                                                                                                                                      | Awscli      |
| --endpoint-url      |     Override AWS service endpoint URL if necessary.                                                                                                                                                                                       | Awscli      |
| --region            |     Set the region name (Required).                                                                                                                                                                                                       | Awscli      |
| --period            |     Set period in seconds.                                                                                                                                                                                                                | Awscli      |
| --timeframe         |     Set timeframe in seconds.                                                                                                                                                                                                             | Awscli      |
| --statistic         |     Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                           | Awscli      |
| --zeroed            |     Set metrics value to 0 if none. Usefull when CloudWatch does not return value when not defined.                                                                                                                                       | Awscli      |
| --timeout           |     Set timeout in seconds (Default: 50).                                                                                                                                                                                                 | Awscli      |
| --sudo              |     Use 'sudo' to execute the command.                                                                                                                                                                                                    | Awscli      |
| --command           |     Command to get information (Default: 'aws'). Can be changed if you have output in a file.                                                                                                                                             | Awscli      |
| --command-path      |     Command path (Default: none).                                                                                                                                                                                                         | Awscli      |
| --command-options   |     Command options (Default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                          | Awscli      |
| --proxyurl          |     Proxy URL if any                                                                                                                                                                                                                      | Awscli      |
| --skip-ssl-check    |     Avoid certificate issuer verification. Useful when AWS resources are hosted by a third-party.  Note that it strips all stderr from the command result. Will be enhanced someday. Debug will only display CLI instead of evreything.   | Awscli      |

</TabItem>
<TabItem value="paws" label="paws">

| Option              | Description                                                                                           | Option type |
|:--------------------|:------------------------------------------------------------------------------------------------------|:------------|
| --aws-secret-key    |     Set AWS secret key.                                                                               | Paws        |
| --aws-access-key    |     Set AWS access key.                                                                               | Paws        |
| --aws-session-token |     Set AWS session token.                                                                            | Paws        |
| --aws-role-arn      |     Set arn of the role to be assumed.                                                                | Paws        |
| --region            |     Set the region name (Required).                                                                   | Paws        |
| --period            |     Set period in seconds.                                                                            | Paws        |
| --timeframe         |     Set timeframe in seconds.                                                                         | Paws        |
| --statistic         |     Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                       | Paws        |
| --zeroed            |     Set metrics value to 0 if none. Usefull when CloudWatch does not return value when not defined.   | Paws        |
| --proxyurl          |     Proxy URL if any                                                                                  | Paws        |

</TabItem>
</Tabs>

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Efs-Connections" label="Efs-Connections">

| Option                        | Description                                              | Option type |
|:------------------------------|:---------------------------------------------------------|:------------|
| --critical-client-connections |     Critical threshold.                                  | Mode        |
| --name                        |     Set the instance name (Required) (Can be multiple).  | Mode        |
| --warning-client-connections  |     Warning threshold.                                   | Mode        |

</TabItem>
<TabItem value="Efs-DataUsage" label="Efs-DataUsage">

| Option          | Description                                                                                                                                          | Option type |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --name          |     Set the instance name (Required) (Can be multiple).                                                                                              | Mode        |
| --filter-metric |     Filter on a specific metric Can be: DataReadIOBytes, DataWriteIOBytes, MetaDataIOBytes, TotalIOBytes, BurstCreditBalance                         | Mode        |
| --warning-      |     $metric$Thresholds warning ($metric$ can be: 'data-iobytes-read', 'data-iobytes-write', 'metadata-iobytes', 'total-iobytes', 'burst-bytes').     | Mode        |
| --critical-     |     $metric$Thresholds critical ($metric$ can be: 'data-iobytes-read', 'data-iobytes-write', 'metadata-iobytes', 'total-iobytes', 'burst-bytes').    | Mode        |

</TabItem>
</Tabs>


Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --mode=datausage \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.