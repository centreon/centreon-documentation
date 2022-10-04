---
id: cloud-aws-backup
title: Amazon Backup Vault
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Amazon Backup Vault apporte un modèle d'hôte :
* Cloud-Aws-Backup-Vault-custom

Il apporte le Modèle de Service suivant :

| Alias                    | Modèle de service                      | Description                                  | Défaut |
|:-------------------------|:---------------------------------------|:---------------------------------------------|:-------|
| Backup-Vault-Jobs-Status | Cloud-Aws-Backup-Vault-Jobs-Status-Api | Contrôle le statut des jobs AWS Backup Vault | X      |

### Règles de découverte

Ce pack propose une règle de découverte d'hôtes permettant de découvrir automatiquement des ressources AWS Backup vault : 

![image](../../../assets/integrations/plugin-packs/procedures/cloud-aws-backup-vault-provider.png)

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module : [Découverte des hôtes](/docs/monitoring/discovery/hosts-discovery)


### Métriques & statuts collectés

<Tabs groupId="metrics">
<TabItem value="Backup-Vault-Jobs-Status" label="Backup-Vault-Jobs-Status">

| Metric Name                 | Description                                                                             |
|:----------------------------|:----------------------------------------------------------------------------------------|
| backup.jobs.completed.count | Number of Backup vault jobs completed for the specified timeframe. Default : last 24h.  |
| backup.jobs.failed.count    | Number of Backup vault jobs failed for the specified timeframe. Default : last 24h.     |
| backup.jobs.expired.count   | Number of Backup vault jobs expired for the specified timeframe. Default : last 24h.    |
| copy.jobs.completed.count   | Number of Copy vault jobs completed for the specified timeframe. Default : last 24h.    |
| copy.jobs.failed.count      | Number of Copy vault jobs failed for the specified timeframe. Default : last 24h.       |
| recovery.jobs.expired.count | Number of Recovery vault jobs completed for the specified timeframe. Default : last 24h.|

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des access/secret key utilisées pour pouvoir utiliser le monitoring AWS/EC2: 

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| backup:ListBackupVaults        | Get Backup Vault Names.                                         |
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

<Tabs groupId="setup">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources *AWS Backup Vault* :

```bash
yum install centreon-plugin-Cloud-Aws-Backup-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Amazon Backup Vault** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources *AWS Backup Vault* :

```bash
yum install centreon-plugin-Cloud-Aws-Backup-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Amazon Backup Vault** :

```bash
yum install centreon-pack-cloud-aws-backup
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Amazon Backup Vault** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur *AWS Backup Vault*.
* Appliquez le Modèle d'Hôte **Cloud-Aws-Backup-Vault-custom**.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.

| Mandatory   | Macro           | Description                                                                                  |
|:------------|:----------------|:---------------------------------------------------------------------------------------------|
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked.                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked.                          |
| X           | AWSREGION       | Region where the instance is running.                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library.   |
| X           | VAULTBACKUPNAME | Backup Vault name containing jobs.                                                           |
|             | PROXYURL        | Configure proxy URL.                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag).          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing.               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed. |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_aws_backup_api.pl \
    --plugin=cloud::aws::backup::plugin \
    --mode=jobstatus \
    --custommode='awscli' \
    --aws-secret-key='' \
    --aws-access-key='' \
    --region='' \
    --backup-vault-name='MY-VAULT' \
    --filter-metric='.*' \
    --proxyurl='' \
    --timeframe='86400' \
    --period='3600'  \
    --zeroed\
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 'MY-VAULT' Statistic 'Sum' Metrics Number of backup jobs expired: 0.00 , Number of copy jobs completed: 0.00 , Number of backup jobs failed: 0.00 , Number of backup jobs completed: 4.00 , Number of recovery jobs expired: 0.00 , Number of copy jobs failed: 0.00  | 'MY-VAULT~sum#backup.jobs.expired.count'=0.00;;;0; 'MY-VAULT~sum#copy.jobs.completed.count'=0.00;;;0; 'MY-VAULT~sum#backup.jobs.failed.count'=0.00;;;0; 'MY-VAULT~sum#backup.jobs.completed.count'=4.00;;;0; 'MY-VAULT~sum#recovery.jobs.expired.count'=0.00;;;0; 'MY-VAULT~sum#copy.jobs.failed.count'=0.00;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aws_backup_api.pl \
    --plugin=cloud::aws::backup::plugin \
    --mode=jobstatus \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aws_backup_api.pl \
    --plugin=cloud::aws::backup::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des Plugins Centreon.
