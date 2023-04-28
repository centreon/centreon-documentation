---
id: cloud-azure-management-costs
title: Azure Management Costs 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Azure Costs** apporte un modèle d'hôte :

* Cloud-Azure-Management-Costs-Api-custom

Il apporte le modèle de service suivant :

| Alias                         | Modèle de service                             | Description                                                                     | Défaut | Découverte |
|:------------------------------|:----------------------------------------------|:--------------------------------------------------------------------------------|:-------|:-----------|
| Budget                        | Cloud-Azure-Management-Costs-Budgets-Api      | Contrôle l'utilisation d'un budget donné                                        |        | X          |
| Costs-Explorer-Resource-Group | Cloud-Azure-Management-Costs-Costs-Explorer-Resource-Group | Contrôle les coûts liés à un ou des resource groups                                   |         |           |
| Costs-Explorer-Subscription   | Cloud-Azure-Management-Costs-Costs-Explorer-Subscription   | Contrôle les coûts d'une subscription Azure                            | X       |           |
| Hybrid-Benefits-Compliance    | Cloud-Azure-Management-Costs-Hybrid-Benefits  | Contrôle que les hybrid benefits sont bien activés sur les ressources éligibles | X      |            |
| Orphan-Resources              | Cloud-Azure-Management-Costs-Orphan-Resources | Contrôle les ressources orphelines                                              | X      |            |
| Tags-Compliance               | Cloud-Azure-Management-Costs-Tags-Compliance  | Contrôle les tags associés aux ressources                                       |        |            |


### Règles de découverte 

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Nom de la règle                            | Description                                   |
| :----------------------------------------- | :-------------------------------------------- |
| Cloud-Azure-Management-Costs-Budgets       | Découverte des budgets configurés dans Azure  |

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Budgets" label="Budgets">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| azure.ad.directory.usage.count       | count |

</TabItem>

<TabItem value="Costs-Explorer-Resource-Group" label="Costs-Explorer-Resource-Group">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| *resource_group*#azure.resourcegroup.costs |       |

</TabItem>
<TabItem value="Costs-Explorer-Subscription" label="Costs-Explorer-Subscription">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| azure.subscription.global.costs            |       |

</TabItem>
<TabItem value="Hybrid-Benefits-Compliance" label="Hybrid-Benefits-Compliance">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| azure.resources.nohybridbenefits.count   | count |
| azure.vm.nohybridbenefits.count          | count |
| azure.sqlvm.nohybridbenefits.count       | count |
| azure.sqldatabase.nohybridbenefits.count | count |
| azure.elasticpool.nohybridbenefits.count | count |


</TabItem>
<TabItem value="Orphan-Resources" label="Orphan-Resources">

| Métrique                          | Unité |
|:----------------------------------|:------|
| azure.resources.orphaned.count    | count |
| azure.manageddisks.orphaned.count | count |
| azure.nics.orphaned.count         | count |
| azure.nsgs.orphaned.count         | count |
| azure.publicips.orphaned.count    | count |
| azure.routetables.orphaned.count  | count |
| azure.snapshots.orphaned.count    | count |

</TabItem>
<TabItem value="Tags-Compliance" label="Tags-Compliance">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| azure.tags.resource.notcompliant.count | count |
| azure.tags.vm.notcompliant.count       | count |

</TabItem>
</Tabs>

## Prérequis

Afin d'utiliser ce Pack de supervision, il est nécessaire d'attribuer les bons privilèges à votre application/client. Ces privilèges sont visibles dans la [documentation](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/consumption-api-overview) de l'api. 

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Costs** :

```bash
yum install centreon-plugin-Cloud-Azure-Management-Costs-Api
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure Costs** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Azure Costs** :

```bash
yum install centreon-plugin-Cloud-Azure-Management-Costs-Api
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **Azure Costs** :

```bash
yum install centreon-pack-cloud-azure-management-costs
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **Azure Costs** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Azure Costs**.
* Appliquez le modèle d'hôte **Cloud-Azure-Management-Costs-Api-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Mandatory   | Macro              | Description                                      |
|:------------|:-------------------|:-------------------------------------------------|
| X           | AZURECLIENTID      | Client ID                                        |
| X           | AZURECLIENTSECRET  | Client secret                                    |
| X           | AZURESUBSCRIPTION  | Subscription ID                                  |
| X           | AZURETENANT        | Tenant ID                                        |                                                                    |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_azure_management_costs_api.pl \
    --plugin=cloud::azure::management::costs::plugin \
    --mode=budgets \
    --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \
    --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \
    --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg=' \
    --budget-name='myBudgetName' \
    --lookup-days='30' \
    --warning-usage='95' \
    --critical-usage='98' \
    --units='%' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Spent amount is 1400.25EUR on 1500EUR of allowed budget (93.33% consumption) for the past 30 days | 'azure.budget.consumption.currency'=1400.25;0:1425;0:1485;0;1500
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_management_costs_api.pl \
    --plugin=cloud::azure::management::costs::plugin \
    --mode=budgets \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_azure_management_costs_api.pl \
    --plugin=cloud::azure::management::costs::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
