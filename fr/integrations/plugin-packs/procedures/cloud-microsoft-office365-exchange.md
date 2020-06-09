---
id: cloud-microsoft-office365-exchange
title: Office365 Exchange
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Apr  24 2019 |

## Vue d'ensemble
Exchange Online est la version hébergée de la plateforme de messagerie Exchange Server de Microsoft. (https://docs.microsoft.com/fr-fr/Exchange/exchange-online)

Les informations de supervision de la suite Office sont mises à disposition par Microsoft à travers une API de gestion Office 365.

## Contenu du Plugin-Pack

### Objets supervisés

* Activitée Mail
* Utilisation des boites mail

## Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->
<!--Email-activity-->

|Metric name| Description|                                                                            
|:----------------- |:------------------------------------------------------------------| 
|active-mailboxes   | Boites mails actives/boites mails totales. Units: Counter & Percent|                          
|total-send-count   | Nombre d'e-mails totals envoyés. Units: Counter|										
|total-receive-count| Nombre d'e-mails totals envoyés. Units: Counter|											
|total-read-count   | Nombre d'e-mails totals envoyés. Units: Counter|											

<!--Mailbox-usage-->

|Metric name          | Description |                                                                                 
|:------------------  | :------------------------------------------------------------------|
|active-mailboxes     | Boites mails actives/boites mails totales. Units: Counter & Percent|                         
|total-usage-active   | Nombre total d'espace alloué (boites mails actives) dans Exchange. Units: Bytes|		      
|total-usage-inactive | Nombre total d'espace non-alloué (boites mails actives) dans Exchange. Units: Bytes|	      

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis
Si vous n'avez pas encore créer votre compte sous Office 365, reportez-vous à la documentation d'Office 365 Management ou suivre le lien dans la partie 'Aide supplémentaire'

### Enregistrer une application
Les API de gestion Office 365 utilisent Azure AD pour assurer l’authentification sécurisée des données dans Office 365.
Pour accéder aux API de gestion Office 365, vous devez enregistrer votre application dans Azure AD.
Le terme « Application » est utilisé comme concept, faisant référence non seulement au programme d’application, 
mais également à son inscription Azure AD et à son rôle lors des « dialogues » d’authentification/autorisation au moment de l’exécution.
(https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals)

#### Spécifiez les autorisations dont votre application a besoin pour accéder aux API de gestion Office 365
Afin de récupérer les données d'Exchange Online, vous devez spécifier les autorisations que votre application requiert: 
1. Dans le Portail de gestion Azure, sélectionnez : 'Report.Read.All' 

#### Aide supplémentaire
Suivez le guide pratique pour obtenir une explication complète sur la façon d’enregistrer une demande et d’obtenir un ID client et un ID secret :
* https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis


## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Office 365 Exchange:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api
```

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":


<!--Offline IMP License-->
1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Office 365 Exchange:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api
```

2. Installer le RPM contenant les modèles de supervision

```bash
yum install centreon-pack-cloud-microsoft-office365-exchange
```


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Choisissez le modèle d'hôte correspondant à la plateforme de Management Office "Cloud-Microsoft-Office365-Exchange-Api-custom". Une fois le modèle d'hôte appliqué, il est possible de définir l'ensemble des macros nécessaires au fonctionnement des contrôles:

|Obligatoire|Nom|Description|
|:----|:----|:----|
|X|OFFICE365CUSTOMMODE|Mode d'accès spécifique aux centreon-plugins office 365 (par défaut:'graphapi')|
|X|OFFICE365TENANT|ID correspondant à l'espace de votre entreprise au sein d'Office 365|
|X|OFFICE365CLIENTID|ID correspondant à l'utilisateur de votre entreprise au sein d'Office 365|
|X|OFFICE365CLIENTSECRET|ID correspondant au mot de passe utilisateur de votre entreprise au sein d'Office 365|


il est aussi possible de définir un ensemble de macros de service nécessaires au fonctionnement des contrôles:

|Obligatoire|Nom|Description|
|:----|:----|:----|
||FILTERMAILBOX|Filtre pour cibler une boite mail en particulier|					
||FILTERCOUNTER|Filtre pour afficher une metrique en particulier (par défaut:'active\|total')|	



## FAQ

#### Comment tester et interpréter la sonde Office 365 Exchange en ligne de commande ?

Une fois le Plugin installé, vous pouvez tester directement celui-ci en ligne de commande depuis un terminal sur votre poller de supervision avec l'utilisateur *centreon-engine*
```bash
/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \
--plugin=cloud::microsoft::office365::exchange::plugin \
--mode=email-activity \
--custommode='graphapi' \
--tenant='c9ee49ef-684g-5e85-cdg8-f146d2b3fc35' \
--client-id='87g71842-184c-5fc3-8334-813e363e3de7' \
--client-secret='8/lSUBXhMnz8GHgRYh7jwoYChPr6s4uQgFDKgLyg7wB='

OK: Active mailboxes on 2019-03-10 : 141/1532 (9.20%) - Total (active mailboxes) 
Send Count: 9478, Receive Count: 62197, Read Count: 24401 | 
'active_mailboxes'=141mailboxes;;;0;1532 
'total_send_count'=9478;;;0; 
'total_receive_count'=62197;;;0; 
'total_read_count'=24401;;;0;
```

La commande ci-dessus requête une api de gestion Office 365 (```--plugin=cloud::microsoft::office365::exchange::plugin```) via le tenant (```--tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24'```),
le client (```--client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d'```), le client secret (```--client-secret='9/kRTASjPoy9FJfQZg6iznX\AkzCGertBgNq5r3tPfECJfKxj6zA='```) 
et fournit l'état de l'activité mail (```--mode=email-activity```) pour l'ensemble de vos utilisateurs ainsi que le nombre de mails envoyés, reçus et lus.
Les alertes WARINING et CRITICAL sont applicables en utilisant des seuils numériques de type compteur.
Exemple: 
* CRITICALACTIVEMAILBOXES = 1000

##### Remarque : 
* Vérifiez que vos tenant id / client id / client secret soient correctement configurés.
* Si la sonde a été lancée pour la première fois avec un autre utilisateur que centreon-engine (root par exemple), il est nécessaire de supprimer le fichier de cache stocké dans /var/lib/centreon/centplugins/office365_exchange*.
* Par defaut ce Plugin utilise la librairie web "Lwb" pour requêter l'api de Microsoft Office 365. Si nécessaire, veuillez utiliser la librairie Curl
en appelant la méthode  --http-backend=curl pour palier à certaines erreurs http.
* Le temps d'execution des checks peut augmenter dû aux échanges de données via le cloud. Dans ce cas, il sera nécessaire d'augmenter
la valeur "Service check timeout" dans les options de logs du moteur centengine.

Toutes les options des différents modes sont consultables via le help:

```bash
/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \
--plugin=cloud::microsoft::office365::exchange::plugin \
--mode=email-activity \
--custommode='graphapi'\
--help
```
