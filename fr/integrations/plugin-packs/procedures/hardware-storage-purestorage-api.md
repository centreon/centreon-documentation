---
id: hardware-storage-purestorage-restapi
title: Pure Storage
---

## Vue d'ensemble

Pure Storage développe du stockage flash pour les datacenters en utilisant des disques durs grand public. 
Il fournit un logiciel propriétaire de déduplication et de compression des données afin d'améliorer la quantité qui est stockées sur chaque disque. 
Il développe également son propre matériel de stockage flash.

## Contenu du pack de supervision

### Objets supervisés

* Baie de stockage

## Métriques collectées                                                                                             

Plus d'informations dans la documentation officielle de l'API de Pure Storage : https://blog.purestorage.com/introducing-the-pure1-rest-api/

<!--DOCUSAURUS_CODE_TABS-->
<!--Alarms-Global-->

| Nom de métrique    | Description                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------ |
| Category           | Nom de la catégorie.                                                                                    |
| Status             | État des alertes. Unité : texte                                                                            |

<!--Hardware-Global-->

| Nom de métrique    | Description                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------ |
| Component          | Nom du composant (entité ou température)                                                                |
| Status             | Le statut des composants. Unité : texte                                                               |

<!--Volume-Usage-Global-->

| Nom de métrique    | Description                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------ |
| Name               | Le nom du volume.                                                                                       |
| Unit               | L'unité de volume de contrôle (bites ou pourcentage)                                                    |
| Volume-Usage       | L'utilisation du volume. Unité : bites ou pourcentage                                                   |
| Data-Reduction     | La réduction des données du volume. Unité : count                                                       |
| Total-Reduction    | La réduction totale du volume. Unité : count                                                            |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

* Ce Plugin de supervision nécessite au moins une version de l'API Pure Storage >= 1.11 (https://static.pure1.purestorage.com/api-swagger/index.html).

#### Créer un utilisateur spécifique
Vous devez configurer l'utilisateur qui peut se connecter à la baie de stockage. 
Cet utilisateur doit avoir au moins un accès "en lecture seule" à la baie de stockage.
 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources de Pure Storage:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Restapi
```

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":


<!--Offline IMP License-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources de Pure Storage:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Restapi
```

2. Installer le RPM contenant les modèles de supervision :

```bash
yum install centreon-pack-hardware-storage-purestorage-restapi
```

3. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Appliquer le modèle "HW-Storage-Purestorage-Restapi-custom" à votre hôte nouvellement créé. 
Ensuite, remplisser les fichiers de valeur des macros marqués comme obligatoires ci-dessous: 

| Mandatory   | Name                    | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
| X           | APIURLPATH              | URL de l'API de Pure Storage                                                                |
| X           | APIURLUSERNAME          | Nom d'utilisateur de l'API de Pure Storage                                                  |
| X           | APIURLPASSWORD          | Mot de passe de l'API de Pure Storage                                                       |
|             | APIEXTRAOPTIONS         | Extra options de l'API de Pure Storage                                                      |

## FAQ

#### Comment puis-je tester mon Plugin via le CLI et que signifient les principaux paramètres de command_line ?

Une fois que vous avez installé votre Plugin de surpervision, vous pouvez utiliser l'utilisateur de centreon-engine pour le tester ! 

```bash
/usr/lib/centreon/plugins//centreon_purestorage_restapi.pl
	--plugin=storage::purestorage::restapi::plugin
	--mode=volume-usage
	--hostname=192.168.1.1
	--api-path='/api/1.11'
	--username='centreon'
	--password='centreon' 
	--filter-name='.*'
	--units='%'
	--warning-usage=''
	--critical-usage=''
	--warning-data-reduction=''
	--critical-data-reduction=''
	--warning-total-reduction=''
	--critical-total-reduction=''
	--verbose

OK: Volume 'PROD::CENTREON' Usage Total: 6.00 TB Used: 1.13 TB (18.85%) Free: 4.87 TB (81.15%), Data Reduction : 2.917, Total Reduction : 5.193, Snapshots : 0.00 B
```

Cette commande vérifie l'utilisation du volume de stockage Pure Storage (```--mode=volume-usage``) en utilisant l'url api (```--api-path='/api/1.11'```). Elle fournit l'état global du volume.
