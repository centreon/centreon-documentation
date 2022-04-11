---
id: applications-salesforce-restapi
title: Salesforce
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Salesforce est un éditeur de logiciels, basé à San Francisco aux États-Unis. Il distribue des logiciels de gestion basés sur Internet et héberge des applications d'entreprises. L'entreprise est surtout connue au niveau international pour ses solutions en gestion de la relation client. 

## Contenu du plugin-pack

### Objets supervisés

* Instances salesforce

## Métriques collectées

<Tabs groupId="sync">
<TabItem value="Instance-Status" label="Instance-Status">

| Metric name               | Description                                              |
| :------------------------ | :------------------------------------------------------- |
| instanceStatus            | Status of a Salesforce instance                          |

</TabItem>
</Tabs>

## Prérequis

Afin de superviser le statut d'une instance Salesforce, l'adresse api.status.salesforce.com doit pouvoir être accessible depuis le collecteur. 

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Salesforce sur le collecteur supervisant Salesforce

```bash
yum install centreon-plugin-Applications-Salesforce-Restapi
```

2. Installer le plugin-pack Salesforce via le menu "Configuration > Plugin packs > Manager" 

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Salesforce sur le collecteur supervisant Salesforce

```bash
yum install centreon-plugin-Applications-Salesforce-Restapi
```

2. Installer le rpm du Plugin-Pack pour l'avoir à disposition dans l'interface Web: 

```bash
yum install centreon-pack-applications-salesforce-restapi
```

3. Installer le plugin-pack Salesforce via le menu "Configuration > Plugin packs > Manager" 

</TabItem>
</Tabs>

## Configuration

Créez votre hôte et appliquez le modèle 'App-Salesforce-Restapi-custom'. Vous devez configurer la communauté SNMP ainsi que la version dans les champs dédiés sur le formulaire de l'hôte

| Obligatoire | Nom              | Description                                                                                 |
| :---------- | :--------------- | :------------------------------------------------------------------------------------------ |
|     x       | INSTANCENAME     | Nom (dn), ou code 'CEU15' de l'instance Salesforce                                          |
|     x       | APIURL           | Configuré par défaut à 'api.status.salesfoce.com'. Il est inutile de le modifier            |
|             | EXTRAOPTIONS     | Option(s) supplémentaires à passer à la ligne de commande (ex: --timeout=5)                 |
|     x       | DUMMYSTATUS      | Statut de l'hôte. Ne modifier que si vous savez ce que vous faites.                         |
|     x       | DUMMYOUTPUT      | Message de l'hôte. Par défaut: 'This is a dummy check'.                                     |

## FAQ

### Comment tester mes configurations et le Plugin en ligne de commande ?

Une fois le Plugin installé, vous pouvez le tester en ligne de commande avec l'utilisateur centreon-engine:

```bash
/usr/lib/centreon/plugins//centreon_salesforce_restapi.pl \
	--plugin=apps::salesforce::restapi::plugin \
	--mode=sfdc-instance \
	--hostname='api.status.salesforce.com' \
	--http-backend=curl \
	--instance='sfdcinstance' \
	--alias
```

Ce mode permet la supervision du statut d'une instance Salesforce (```--mode=sfdc-instance```) dont le nom est 'sfdcinstance' (```--instance='sfdcinstance'```). L'option alias est ajoutée (```--alias```) afin d'utiliser le nom 'URL' plutôt que le code régionnal où réside l'instance. 

Toutes les options et leurs significations peuvent être affichées via la commande ci-dessous: 

```bash
/usr/lib/centreon/plugins//centreon_salesforce_restapi.pl \
	--plugin=apps::salesforce::restapi::plugin \
	--mode=sfdc-instance \
    --help
```

### UNKNOWN: Cannot decode JSON response

Si vous obtenez ce message, il est probable qu'un proxy bloque la requête et que la réponse reçue ne soit pas au format attendu. Il est possible de vérifier la connexion au moyen de la commande suivante: 

```bash
curl https://api.status.salesforce.com/v1/instances
```

Vous pouvez également ajouter l'option ```--debug``` pour avoir d'avantage d'informations. 

### Comment determiner le nom de l'instance Salesforce ? 

Le nom de votre instance est la première partie de l'URL utilisée pour se connecter à l'instance en tant qu'utilisateur. Par exemple, si l'URL est archimede.my.salesforce.com, alors 'archimede' est le nom de votre instance. 
