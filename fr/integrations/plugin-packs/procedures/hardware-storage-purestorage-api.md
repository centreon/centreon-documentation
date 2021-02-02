---
id: hardware-storage-purestorage-restapi
title: Pure Storage
---

## Vue d'ensemble

Pure Storage fournit du matériel de stockage flash pour les datacenters en utilisant des disques durs grand public. 
Il fournit un logiciel propriétaire de déduplication et de compression des données afin d'améliorer la quantité qui est stockées sur chaque disque. 

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
| Status             | Le statut des composants. Unité : texte                                                                 |

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

| Mandatory | Name            | Description                                |
| :-------- | :-------------- | :----------------------------------------- |
| X         | APIURLPATH      | URL de l'API de Pure Storage               |
| X         | APIURLUSERNAME  | Nom d'utilisateur de l'API de Pure Storage |
| X         | APIURLPASSWORD  | Mot de passe de l'API de Pure Storage      |
|           | APIEXTRAOPTIONS | Extra options de l'API de Pure Storage     |

## FAQ

#### Comment tester et interpréter le Plugin Rest API en ligne de commande?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur centreon-engine:

```bash
/usr/lib/centreon/plugins//centreon_purestorage_restapi.pl \
	--plugin=storage::purestorage::restapi::plugin \
	--mode=volume-usage \ 
	--hostname=192.168.1.1 \ 
	--api-path='/api/1.11' \
	--username='centreon' \
	--password='centreon' \
	--filter-name='.*' \
	--units='%' \ 
	--warning-usage='80' \ 
	--critical-usage='90' \
	--warning-data-reduction='' \ 
	--critical-data-reduction='' \
	--warning-total-reduction='' \ 
	--critical-total-reduction='' \
    	--verbose
```

Le message de sortie est le suivant: 

```bash
OK: Volume 'PROD::CENTREON' Usage Total: 6.00 TB Used: 1.13 TB (18.85%) Free: 4.87 TB (81.15%), Data Reduction : 2.917, Total Reduction : 5.193, Snapshots : 0.00 B |'used'=1243773921694B;0:5277655813324;0:5937362789990;0;6597069766656 'data_reduction'=2.873;;;0; 'total_reduction'=5.201;;;0; 'snapshots'=0B;;;0;
```

La commande ci-dessus requête l'API Rest (```--plugin=storage::purestorage::restapi::plugin```) de l'API en utilisant l'URL (```--api-path='/api/1.11'```) ainsi que le nom utilisateur (```--username='centreon'```) et le mot de passe créé précédemment dans la partie Prérequis (```--password='centreon'```). 
Cette commande contrôle l'utilisation actuelle du volume de stockage Pure Storage (```--mode=volume-usage```).

Cette commande déclenchera une alarme WARNING si le taux d'occupation du volume dépasse 80% (```--warning-usage='80'```) et une alarme CRITICAL s'il dépasse 90% (```--critical-usage='90'```). 

Il est également possible de définir des seuils WARNING et CRITICAL sur une métrique spécifique. Dans cet exemple, une alarme WARNING sera déclenchée si le taux total de "réduction" est inférieur à 5 (```--warning-total-reduction=':5'```) et CRITICAL s'il est inférieur à 4 (```--critical-total-reduction=':4'```).

La syntaxe des différentes options des seuils ainsi que la liste des options et leur utilisation sont détaillées dans l'aide du mode en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_restapi.pl \
--plugin=storage::purestorage::restapi::plugin \
--mode=volume-usage \
--help
```

#### Le Plugin renvoie l'erreur suivante: "UNKNOWN: Cannot decode json response"

Si vous recevez ce message, ajoutez le parmamètre ```--debug``` à la commande afin d'afficher plus 
d'informations sur la cause de l'erreur.

Ce message d'erreur peut avoir plusieurs origines:

* L'URL n'est pas accessible, vérifiez la connectivité HTTPS entre votre collecteur Centreon et votre baie PureStorage

* Le certificat utilisé sur la baie est auto-signé, ajoutez l'option ```--ssl-opt="SSL_verify_mode => SSL_VERIFY_NONE"``` dans la macro *EXTRAOPTIONS* de l'hôte pour ignorer la vérification du certificat.
