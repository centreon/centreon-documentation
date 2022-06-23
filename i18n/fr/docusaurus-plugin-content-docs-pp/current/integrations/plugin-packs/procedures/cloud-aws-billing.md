---
id: cloud-aws-billing
title: AWS Billing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon AWS Billing apporte un modèle d'hôte :

* Cloud-Aws-Billing-custom

Il apporte le modèle de service suivant :

| Alias                       | Modèle de service                       | Description                                 | Défaut |
|:----------------------------|:----------------------------------------|:--------------------------------------------|:-------|
| Billing-Estimated-Charges   | Cloud-Aws-Billing-Estimated-Charges-Api | Contrôle les coûts générés pour un service. | X      |

### Règles de découverte

Le Plugin Pack Centreon **AWS Billing** inclut un fournisseur de découverte
d'hôtes nommé **Amazon Billing**. Celui-ci permet de découvrir l'ensemble des services générant des coûts :

![image](../../../assets/integrations/plugin-packs/procedures/cloud-aws-billing-provider.png)

Vous trouverez plus d'informations sur la découverte d'hôtes et son fonctionnement sur la documentation du module : [Découverte des hôtes](/docs/monitoring/discovery/hosts-discovery)


### Métriques & statuts collectés

<Tabs groupId="metrics">
<TabItem value="Billing-Estimated-Charges" label="Billing-Estimated-Charges">

| Metric Name                  | Description                                    |
|:-----------------------------|:---------------------------------------------- |
| billing.estimatedcharges.usd | Check Billing estimated charges for a service. |

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Voici la liste des droits nécessaires au travers des access/secret key utilisées permettant d'utiliser ce pack : 

| AWS Permission                 | Description                                               |
| :----------------------------- | :-------------------------------------------------------- |
| cloudwatch:ListMetrics         | Get all services generating charges.                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/Billing namespace on Cloudwatch. |

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

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser les coûts générés par un ou des services AWS :

```bash
yum install centreon-plugin-Cloud-Aws-Billing-Api
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **AWS Billing** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **AWS Billing** :

```bash
yum install centreon-plugin-Cloud-Aws-Billing-Api
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **AWS Billing** :

```bash
yum install centreon-pack-cloud-aws-billing
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **AWS Billing** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
* Appliquez le modèle d'hôte **Cloud-Aws-Billing-custom**.
* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent être renseignées selon le *custom mode* utilisé.

| Mandatory   | Macro           | Description                                                                                  |
|:------------|:----------------|:---------------------------------------------------------------------------------------------|
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked.                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked.                          |
| X           | AWSREGION       | Must be 'us-east-1'.                                                                         |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library.   |
| X           | SERVICENAME     | Billed AWS service name.                                                                     |
|             | PROXYURL        | Configure proxy URL.                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag).          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing.               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed. |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_aws_billing_api.pl \
    --plugin=cloud::aws::billing::plugin \
    --mode=estimated-charges \
    --custommode='awscli' \
    --region=us-east-1 \
    --aws-secret-key='xxx' \
    --aws-access-key='xxx' \
    --service='AWSBackup' \
    --warning-billing='' \
    --critical-billing='' \
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Service 'AWSBackup' Estimated Charges: 0.85 USD | 'AWSBackup#billing.estimatedcharges.usd'=0.85USD;;;;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aws_billing_api.pl \
    --plugin=cloud::aws::billing::plugin \
    --mode=estimated-charges \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_aws_billing_api.pl \
    --plugin=cloud::aws::billing::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
