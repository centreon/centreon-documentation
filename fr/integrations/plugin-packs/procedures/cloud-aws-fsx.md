---
id: cloud-aws-fsx
title: Amazon FSx
---

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Amazon FSx apporte 1 modèle d'hôte :
* Cloud-Aws-Fsx-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template            | Default |
|:--------------|:----------------------------|:--------|
| Fsx-DataUsage | Cloud-Aws-Fsx-Datausage-Api | X       |
| Fsx-Freespace | Cloud-Aws-Fsx-Freespace-Api | X       |

### Règles de découverte

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                           | Description                                                   |
| :---------------------------------- | :------------------------------------------------------------ |
| Cloud-Aws-Fsx-Api-HostDiscovery     | Discover FSx Filesystems from your Cloudwatch endpoint        |

<!--Services-->

No services discovery rule available on this pack

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Fsx-DataUsage-->

| Metric Name                     | Unit      |
|:--------------------------------|:----------|
| fsx.data.read.bytes             | B         |
| fsx.data.read.bytespersecond    | B/s       |
| fsx.data.write.bytes            | B         |
| fsx.data.write.bytespersecond   | B/s       |
| fsx.data.io.read.count          | count     |
| fsx.data.io.read.persecond      | persecond |
| fsx.data.io.write.count         | count     |
| fsx.data.io.write.persecond     | persecond |
| fsx.metadata.ops.bytes          | B         |
| fsx.metadata.ops.bytespersecond | B/s       |

<!--Fsx-Freespace-->

| Metric Name                     | Unit  |
|:--------------------------------|:------|
| fsx.storage.free.byt            | B     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Configurer un compte de service ayant les autorisations suivantes : 

| AWS Privilege                  | Description                                          |
| :----------------------------- | :--------------------------------------------------- |
| fsx:DescribeFileSystems        | Display FSx instances & details                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/FSx namespace on Cloudwatch |

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Amazon FSx**:

```bash
yum install centreon-plugin-Cloud-Aws-Fsx-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Amazon FSx** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Amazon FSx**:

```bash
yum install centreon-plugin-Cloud-Aws-Fsx-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Amazon FSx**:

 ```bash
yum install centreon-pack-cloud-aws-fsx
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Amazon FSx** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**,**Alias** & **IP Address / DNS** correspondant à votre serveur **Amazon FSx**.
* Appliquez le Modèle d'Hôte **Cloud-Aws-Fsx-custom**

* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires ("mandatory"). 

| Mandatory   | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
|             | PROXYURL        | Configure proxy URL                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it unless you know what you are doing              |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins//centreon_aws_fsx_api.pl \
    --plugin=cloud::aws::fsx::plugin \
    --mode=datausage \
    --custommode='awscli' \
    --aws-secret-key='' \
    --aws-access-key='' \
    --region='' \
    --name='' \
    --proxyurl=''  \
    --filter-metric='' \
    --statistic='average' \
    --timeframe='900' \
    --period='60' \
    --warning-data-write-ops='' \
    --critical-data-write-ops='' \
    --warning-data-read-ops='' \
    --critical-data-read-ops='' \
    --warning-data-write-bytes='' \
    --critical-data-write-bytes='1000000000' \
    --warning-data-read-bytes='' \
    --critical-data-read-bytes='' \
    --warning-metadata-ops-bytes='' \
    --critical-metadata-ops-bytes='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All FSx metrics are ok| 
```

Dans cet exemple, une alarme de type CRITICAL est déclenchée si le volume de données écrites en octets 
dépasse 1Go (`--critical-data-write-bytes='1000000000'`). 

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:


```bash
/usr/lib/centreon/plugins//centreon_aws_fsx_api.pl \
    --plugin=cloud::aws::fsx::plugin \
    --mode=datausage \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_aws_fsx_api.pl \
    --plugin=cloud::aws::fsx::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html)
pour le diagnostic des erreurs communes des Plugins Centreon.