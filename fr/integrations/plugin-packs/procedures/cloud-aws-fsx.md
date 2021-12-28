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

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Fsx-DataUsage-->

<!--Fsx-Freespace-->

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link
to the manufacturer official documentation BUT you should try to be as complete
as possible here as it will save time to everybody.*

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

* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) doivent être renseignées 

| Mandatory | Name            | Description                                                                                     |
|:----------|:----------------|:------------------------------------------------------------------------------------------------|
|           | AWSACCESSKEY    |                                                                                                 |
|           | AWSCUSTOMMODE   | (Default: 'awscli')                                                                             |
|           | AWSEXTRAOPTIONS |                                                                                                 |
|           | AWSREGION       |                                                                                                 |
|           | AWSSECRETKEY    |                                                                                                 |
|           | FILESYSTEMID    |                                                                                                 |
|           | PROXYURL        |                                                                                                 |
|           | EXTRAOPTIONS    | (Default: 'Any extra option you may want to add to every command\_line (eg. a --verbose flag)') |

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
    --warning-data-write-ops='' \
    --critical-data-write-ops='' \
    --warning-data-read-bytes='' \
    --critical-data-read-bytes='' \
    --warning-metadata-ops-bytes='' \
    --critical-metadata-ops-bytes='' \
    --verbose \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: | 
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si le temps de 
réponse de l'identification est supérieure à 2 secondes 
(`--warning-time='2'`); l'alarme sera de type CRITICAL au-delà de 3 secondes
ou si le status de l'identification est différent de XXX.

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
pour le diagnostique des erreurs commununes des Plugins Centreon.