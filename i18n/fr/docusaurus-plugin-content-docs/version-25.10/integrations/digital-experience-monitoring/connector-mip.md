---
id: monitoring-dem-mip
title: Maltem Insight Performances Rest API 
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble 

Maltem Insight Performance (MIP) développe et intègre des solutions permettant la mesure du ressenti utilisateurs. Ces mesures prennent la forme de scénarios personnalisés sur les applications web comme les clients riches. MIP met à disposition une API pour récupérer les métriques et les statuts associés à ces scénarios.

## How it works

Une instance MIP expose une Rest API au format JSON. Le Plugin Centreon utilise ce biais pour récupérer les données. 

![architecture](../../assets/integrations/external/mip-connector-architecture.png)

## Compatibility

Ce connecteur a été testé et validé avec MIP en version 6.4.90

## Requirements

### MIP

Afin de pouvoir interroger l'API, il est nécessaire d'avoir à disposition une clé d'API valide. MIP vous met à disposition cette clé au travers de son service de support. 

### Centreon

<Tabs groupId="sync">
<TabItem value="Licence en ligne" label="Licence en ligne">

1. Installer le Plugin Sur chaque collecteur se connectant à une instance MIP:

```bash
yum install -y centreon-plugin-Applications-Monitoring-Mip-Restapi`
```

2. Installer le Plugin-Pack via la page "Configuration > Plugin-Packs > Manager": 

![install\_epp](../../assets/integrations/external/mip-epp-install.png)

</TabItem>
<TabItem value="Licence hors ligne" label="Licence hors ligne">

1. Installer le Plugin Sur chaque collecteur se connectant à une instance MIP:

```bash
yum install -y centreon-plugin-Applications-Monitoring-Mip-Restapi`
```

2. Installer le RPM du Plugin-Pack sur votre serveur Central: 

```bash
yum install -y centreon-pack-applications-monitoring-mip-restapi`
```

3. Installer le Plugin-Pack via la page "Configuration > Plugin-Packs > Manager":

![install\_epp](../../assets/integrations/external/mip-epp-install.png)

</TabItem>
</Tabs>

## Configuration

### Hôtes

Déployez votre hôte et appliquez lui le modèle **App-Monitoring-Mip-Restapi-custom**. Les macros suivantes doivent être renseignées:

| Mandatory   | Name                 | Description                                                                 |
| :---------- | :------------------- | :-------------------------------------------------------------------------- |
|     x       | MIPAPIPROTO          | Protocole utilisé pour se connecter à l'API MIP. Défaut : https             |
|     x       | MIPAPIPORT           | Port utilisé pour se connecter à l'API MIP. Défaut : 443                    |
|     x       | MIPAPIHOSTNAME       | FQDN de l'instance MIP                                                      |
|     x       | MIPAPIKEY            | Clé de l'API MIP                                                            |
|             | MIPAPIEXTRAOPTIONS   | N'importe quelle option supplémentaire utile (proxy, http-backend, etc.)    |
|     x       | MIPAPITIMEOUT        | Timeout des appels à l'API                                                  |

Il n'est pas nécessaire de mettre la case "Créer les services liés au modèle" à 'Oui' pour cet Hôte. 

### Services

Il est recommandé d'utiliser la règle de découverte associée au Plugin-Pack pour déployer les Services. Voici un guide pas-à-pas pour faire cela:
 
* Rendez-vous dans le menu "Configuration > Services" et cliquer sur "Scan" dans le sous-menu "Découverte"
* Compléter le champ "Hôte" avec le nom utilisé dans la section précédente
* Choisir 'App-Monitoring-Mip-Scenarios' dans la liste déroulante "Règle" sur la droite
* Cliquer sur 'Scan' pour lancer la découverte 
* Une fois la liste des scénarios disponible, cocher les cases correspondant aux services à superviser
* Sauvegarder ce formulaire pour créer les Services
