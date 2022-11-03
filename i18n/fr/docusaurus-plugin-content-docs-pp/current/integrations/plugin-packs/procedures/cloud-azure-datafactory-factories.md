---
id: cloud-azure-datafactory-factories
title: Azure Data Factory
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Azure Data Factory** apporte un modèle d'hôte :

* Cloud-Azure-DataFactory-Factories-custom

Il apporte les modèles de service suivants :

| Alias               | Modèle de service                                         | Description                                      | Défaut |
|:--------------------|:----------------------------------------------------------|:-------------------------------------------------|:-------|
| Factory-Usage       | Cloud-Azure-DataFactory-Factories-Factory-Usage-Api       | Contrôle la taille et les entités de la fabrique | X      |
| Integration-Runtime | Cloud-Azure-DataFactory-Factories-Integration-Runtime-Api | Contrôle l'utilisation du runtime d'intégration  | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Factory-Usage" label="Factory-Usage">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| azdatafactory.factoryusage.factory.size.count  | GB    |
| azdatafactory.factoryusage.size.percentage     | %     |
| azdatafactory.factoryusage.resource.count      |		 |
| azdatafactory.factoryusage.resource.percentage | %     |

</TabItem>
<TabItem value="Integration-Runtime" label="Integration-Runtime">

| Métrique                                                      | Unité |
|:--------------------------------------------------------------|:------|
| azdatafactory.integrationruntime.available.memory.bytes       | B     |
| azdatafactory.integrationruntime.available.node.number.count  |       |
| azdatafactory.integrationruntime.average.pickup.delay.seconds | s     |
| azdatafactory.integrationruntime.cpu.percentage.percent       | %     |
| azdatafactory.integrationruntime.queue.length.count           |       |

</TabItem>
</Tabs>

## Prérequis

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/azure-credential-configuration.md) afin d'obtenir les prérequis nécessaires pour interroger les API d'Azure.

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
dnf install centreon-pack-cloud-azure-datafactory-factories
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-azure-datafactory-factories
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-azure-datafactory-factories
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Azure Data Factory**
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
dnf install centreon-plugin-Cloud-Azure-DataFactory-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Azure-DataFactory-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-azure-datafactory-api
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez le champ **Adresse IP/DNS** avec l'adresse **127.0.0.1**.
* Appliquez le modèle d'hôte **Cloud-Azure-DataFactory-Factories-custom**.
* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent être renseignées selon le *custom mode* utilisé.

> Deux méthodes peuvent être utilisées lors de l'assignation des macros :

>
> * Utilisation de l'ID complet de la ressource (de type `/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>`) dans la macro *AZURERESOURCE*.
> * Utilisation du nom de la ressource dans la macro **AZURERESOURCE** et du nom du groupe de ressources dans la macro **AZURERESOURCEGROUP**.

<Tabs groupId="sync">
<TabItem value="Azure Monitor API" label="Azure Monitor API">

| Obligatoire | Macro              | Description                                   |
|:------------|:-------------------|:----------------------------------------------|
| X           | AZUREAPICUSTOMMODE | Custom mode **api**                           |
| X           | AZURECLIENTID      | Client ID                                     |
| X           | AZURECLIENTSECRET  | Client secret                                 |
| X           | AZURERESOURCE      | ID or name of the Azure Data Factory resource |
| X           | AZURERESOURCEGROUP | Resource group name if resource name is used  |
| X           | AZURESUBSCRIPTION  | Subscription ID                               |
| X           | AZURETENANT        | Tenant ID                                     |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_azure_datafactory_factories_api.pl \
    --plugin=cloud::azure::datafactory::factories::plugin \
    --mode=factory-usage \
    --custommode='api' \
    --resource='FACTORY001ABCD' \
    --resource-group='RSG1234' \
    --subscription='xxxxxxxxx' \
    --tenant='xxxxxxxxx' \
    --client-id='xxxxxxxxx' \
    --client-secret='xxxxxxxxx' \
    --proxyurl='' \
    --timeframe='' \
    --interval='' \
    --aggregation='' \
    --warning-resource-count='' \
    --critical-resource-count='' \
    --warning-factory-size-in-gb_units='' \
    --critical-factory-size-in-gb_units='' \
    --warning-resource-usage='' \
    --critical-resource-usage='' \
    --warning-factory-size-usage='' \
    --critical-factory-size-usage='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Instance 'FACTORY001ABCD' Statistic 'maximum' Metrics Factory size: 40.00GB, Factory usage: 30.00%, Resource count: 10.00, Resource usage: 25.00% | 'FACTORY001ABCD~maximum#azdatafactory.factoryusage.factory.size.count'=40.00GB;;;0; 'FACTORY001ABCD~maximum#azdatafactory.factoryusage.size.percentage'=30.00%;;;0;100 'FACTORY001ABCD~maximum#azdatafactory.factoryusage.resource.count'=10.00;;;0; 'FACTORY001ABCD~maximum#azdatafactory.factoryusage.resource.percentage'=25.00%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_datafactory_factories_api.pl \
    --plugin=cloud::azure::datafactory::factories::plugin \
    --mode=factory-usage \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_azure_datafactory_factories_api.pl \
    --plugin=cloud::azure::datafactory::factories::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.