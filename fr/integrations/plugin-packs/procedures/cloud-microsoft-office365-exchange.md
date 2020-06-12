---
id: cloud-microsoft-office365-exchange
title: Office365 Exchange
---

## Vue d'ensemble
Exchange Online est la version hébergée de la plateforme de messagerie Exchange Server de Microsoft. 
(https://docs.microsoft.com/fr-fr/Exchange/exchange-online)

Les informations de supervision de la suite Office sont mises à disposition par Microsoft au travers d'une API de gestion Office 365.

## Contenu du Plugin-Pack

### Objets supervisés

* Activité Mail
* Utilisation des boites mail

### Métriques collectées

Les métriques collectées sont détaillées ci-après:

<!--DOCUSAURUS_CODE_TABS-->

<!--Email-activity-->

| Metric name         | Description                                                         |
| :------------------ | :------------------------------------------------------------------ |
| active-mailboxes    | Boites mails actives/boites mails totales. Units: Counter & Percent |
| total-send-count    | Nombre d'e-mails totals envoyés. Unit: Counter                      |
| total-receive-count | Nombre d'e-mails totals envoyés. Unit: Counter                      |
| total-read-count    | Nombre d'e-mails totals envoyés. Unit: Counter                      |											

<!--Mailbox-usage-->

| Metric name          | Description                                                                        |
| :------------------- | :--------------------------------------------------------------------------------- |
| active-mailboxes     | Boites mails actives/boites mails totales. Units: Counter & Percent                |
| total-usage-active   | Nombre total d'espace alloué (boites mails actives) dans Exchange. Unit: Bytes     |
| total-usage-inactive | Nombre total d'espace non-alloué (boites mails actives) dans Exchange. Unit: Bytes |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Si vous n'avez pas encore créé votre compte sous Office 365, reportez-vous à la documentation d'Office 365 Management 
ou suivez le lien dans la partie 'Aide supplémentaire'

### Enregistrez une application

Les API de gestion Office 365 utilisent Azure AD pour assurer l’authentification sécurisée des données dans Office 365.
Pour accéder aux API de gestion Office 365, vous devez enregistrer votre application dans Azure AD.
Le terme *Application* est utilisé comme concept, faisant référence non seulement au programme d’application, 
mais également à son inscription Azure AD et à son rôle lors des « dialogues » d’authentification/autorisation au moment de l’exécution.
(https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals)

### Spécifiez les autorisations dont votre application a besoin pour accéder aux API de gestion Office 365

Afin de récupérer les données d'Exchange Online, vous devez spécifier les autorisations que votre application requiert: 
dans le Portail de gestion Azure, sélectionnez : *Report.Read.All* 

### Aide supplémentaire

Suivez le guide pratique pour obtenir une explication complète sur la façon d’enregistrer une demande et d’obtenir un *ID client* et un *ID secret* :
https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis


## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Office 365 Exchange:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api
```

2. Depuis l'interface Web de Centreon, installer le Plugin-Pack 'Office365 Exchange' depuis la page "Configuration > Plugin packs > Manager" 


<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Office 365 Exchange:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack 'Office365 Exchange':

```bash
yum install centreon-pack-cloud-microsoft-office365-exchange
```


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Lors de la création de votre Hôte dans Centreon, choisissez le modèle "Cloud-Microsoft-Office365-Exchange-Api-custom" 
correspondant à la plateforme de Management Office. Une fois celui-ci appliqué, certaines Macros liées à l'Hôte 
doivent être renseignées:

| Obligatoire | Nom                   | Description                                                                           |
| :---------- | :-------------------- | :------------------------------------------------------------------------------------ |
| X           | OFFICE365CUSTOMMODE   | Mode d'accès spécifique aux centreon-plugins office 365 (par défaut:'graphapi')       |
| X           | OFFICE365TENANT       | ID correspondant à l'espace de votre entreprise au sein d'Office 365                  |
| X           | OFFICE365CLIENTID     | ID correspondant à l'utilisateur de votre entreprise au sein d'Office 365             |
| X           | OFFICE365CLIENTSECRET | ID correspondant au mot de passe utilisateur de votre entreprise au sein d'Office 365 |


Une fois l'hôte créé, il est également possible de paramétrer un ensemble de Macros de Service selon la configuration souhaitée:

| Obligatoire | Nom           | Description                                                                   |
| :---------- | :------------ | :---------------------------------------------------------------------------- |
|             | FILTERMAILBOX | Filtre pour cibler une boite mail en particulier                              |
|             | FILTERCOUNTER | Filtre pour afficher une metrique en particulier (par défaut:'active\|total') |



## FAQ

### Comment tester le Plugin Office 365 Exchange en ligne de commande et que signifient les options principales ?

Une fois le Plugin installé, vous pouvez tester directement celui-ci en ligne de commande 
depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \
--plugin=cloud::microsoft::office365::exchange::plugin \
--mode=email-activity \
--tenant='abcd1234-5678-90ab-cd12-34567890abcd' \
--client-id='9876dcba-5432-10dc-ba98-76543210dcba' \
--client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='

OK: Active mailboxes on 2019-03-10 : 141/1532 (9.20%) - Total (active mailboxes) 
Send Count: 9478, Receive Count: 62197, Read Count: 24401 | 
'active_mailboxes'=141mailboxes;;;0;1532 
'total_send_count'=9478;;;0; 
'total_receive_count'=62197;;;0; 
'total_read_count'=24401;;;0;
```

La commande ci-dessus requête une API de gestion Office 365 (```--plugin=cloud::microsoft::office365::exchange::plugin```) 
en utilisant l'ensemble des identifiants *tenant/client-id/client-secret* (```--tenant='abcd1234-5678-90ab-cd12-34567890abcd' --client-id='9876dcba-5432-10dc-ba98-76543210dcba'   
--client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='```) 
et fournit l'état de l'activité *mail* (```--mode=email-activity```) pour l'ensemble de vos utilisateurs ainsi que le nombre de mails envoyés, reçus et lus.
Les seuils WARNING et CRITICAL sont définissables sur l'ensemble des métriques collectées, par exemple:
```-warning-active-mailboxes='1400' --critical-active-mailboxes='1500'```


Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \
--plugin=cloud::microsoft::office365::exchange::plugin \
--mode=email-activity \
--custommode='graphapi'\
--help
```



### Le Plugin renvoie l'erreur suivante ```UNKNOWN 500: Can't connect...```

Dans certains cas, et plus spécifiquement lors de l'usage d'un proxy d'entreprise, le protocole de connexion n'est pas supporté 
par la libraire *lwp* utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` 
à la commande.


