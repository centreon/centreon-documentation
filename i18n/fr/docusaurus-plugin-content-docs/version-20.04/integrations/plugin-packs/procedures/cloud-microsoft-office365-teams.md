---
id: cloud-microsoft-office365-teams
title: Office365 Teams
---

## Overview

La suite Microsoft Office 365 inclut Teams, une application qui pourvoit 
différents types de services comme des espaces de travail ou des services de 
messagerie et de visioconférence.

Les informations de supervision de la suite Office sont mises à disposition par
Microsoft au travers d'une API de gestion Office 365.

> Les données mises à disposition par l'API de gestion Office 365 ne sont pas en temps réel et sont basées sur une période de 7 jours

## Contenu du Plugin-Pack

### Objets supervisés

* Utilisation des appareils Teams 
* Activité des utilisateurs

### Métriques collectées

Plus d'informations sur les métriques collectées sur la documentation officielle
de Microsoft : 

* https://docs.microsoft.com/fr-fr/office365/admin/activity-reports/microsoft-teams-device-usage?view=o365-worldwide
* https://docs.microsoft.com/fr-fr/office365/admin/activity-reports/microsoft-teams-user-activity?view=o365-worldwide

<!--DOCUSAURUS_CODE_TABS-->

<!--Devices-Usage-->

| Metric name                  | Description                                    | Unit   |
| :--------------------------- | :--------------------------------------------- | :----- |
| teams.devices.active.count   | Number of active devices                       | Count  |
| teams.devices.\*.count       | Number of windows/mac/web/iOS/android devices  | Count  |

<!--User-Activity-->

| Metric name                               | Description                            | Unit   |
| :---------------------------------------- | :------------------------------------- | :----- |
| teams.users.active.count                  | Total number of active users           | Count  |
| teams.users.messages.team.total.count     | Total number of Team chat messages     | Count  | 
| teams.users.messages.private.total.count  | Total number of Private chat messages  | Count  |
| teams.users.call.total.count              | Total number of calls                  | Count  |
| teams.users.meeting.total.count           | Total number of meetings               | Count  |

<!--END_DOCUSAURUS_CODE_TABS-->

Une fois l'hôte crée, les macros de services peuvent être configurées pour
filtrer les métriques par utilisateurs ou par boites mail. Plus d'informations
dans la section [Configuration](#Configuration).

## Prérequis

Si vous n'avez pas encore créé votre compte sous Office 365, reportez-vous à la
documentation d'Office 365 Management ou suivez le lien dans la partie
'Aide supplémentaire'.

### Enregistrez une application

Les API de gestion Office 365 utilisent Azure AD pour assurer l’authentification
sécurisée des données dans Office 365. Pour accéder aux API de gestion
Office 365, vous devez enregistrer votre application dans Azure AD. Le terme
*Application* est utilisé comme concept, faisant référence non seulement au
programme d’application, mais également à son inscription Azure AD et à son rôle
lors des « dialogues » d’authentification/autorisation au moment de l’exécution.
(https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals)

### Spécifiez les autorisations dont votre application a besoin pour accéder aux API de gestion Office 365

Afin de récupérer les données d'Team Online, vous devez spécifier les
autorisations que votre application requiert: 
dans le Portail de gestion Azure :

* Microsoft Graph :
    * Reports.Read.All (Type : Application)
    * User.Read (Type : Delegated)
* Office365 Management APIs :
    * ServiceHealth.Read (Type : Application)
    * ActivityFeed.Read (Type : Application)

### Aide supplémentaire

Suivez le guide pratique pour obtenir une explication complète sur la façon d’enregistrer une demande et d’obtenir un *ID client* et un *ID secret* :
https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Office 365 Team :

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Team-Api
```

2. Depuis l'interface Web de Centreon, installer le Plugin-Pack *Office365 Team* depuis la page "Configuration > Plugin packs > Manager" 

<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Office 365 Team :

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Team-Api
```

2. Sur le serveur Central Centreon, installer le RPM du Plugin-Pack 'Office365 Team' :

```bash
yum install centreon-pack-cloud-microsoft-office365-team
```

3. Depuis l'interface Web de Centreon, installer le Plugin-Pack *Office365 Team* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Lors de la création de votre Hôte dans Centreon, choisissez le modèle
*Cloud-Microsoft-Office365-Team-Api-custom*. Une fois celui-ci appliqué, 
certaines Macros liées à l'Hôte doivent être renseignées :

| Mandatory | Name                  | Description                                                                |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X         | OFFICE365CUSTOMMODE   | Access mode for the Plugin (default: 'graphapi')                           |
| X         | OFFICE365TENANT       | Tenant-id of your Office365 organization                                   |
| X         | OFFICE365CLIENTID     | Client-id of your registered application                                   |
| X         | OFFICE365CLIENTSECRET | Secret-if of your registered application                                   |
|           | OFFICE365EXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

La métrique *perfdate* enrengistre la date à laquelle celle-ci a été collectée. 
Vous pouvez la filter en paramétrant la macro *OFFICE365EXTRAOPTIONS* avec 
l'option ```--filter-perfdata='^(?!.*perfdate).*$'```

Une fois l'hôte créé, il est également possible de paramétrer un ensemble de m
macros de service selon la configuration souhaitée :

| Mandatory | Name          | Description                |
| :-------- | :------------ | :------------------------- |
|           | FILTERUSERS   | Filter by specific users   |
|           | FILTERCOUNTER | Filter specific counters   |

## FAQ

### Comment tester le Plugin Office 365 Onedrive en ligne de commande et que signifient les options principales ?

Une fois le Plugin installé, vous pouvez tester directement celui-ci en ligne de
commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins//centreon_office365_teams_api.pl \
  --plugin=cloud::microsoft::office365::teams::plugin \
  --mode=devices-usage \
  --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \
  --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \
  --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='
```

Résultat attendu :

```bash
OK: Active devices on 2020-09-26 : 45/598 (7.53%) - Users count by device type 
: Windows: 35, Mac: 2, Web: 0, iOS: 4, Android Phone: 4, Windows Phone: 0
'active_devices'=45devices;;;0;598
'windows'=35;;;0;
'mac'=2;;;0;
'web'=0;;;0;
'ios'=4;;;0;
'android_phone'=4;;;0;
'windows_phone'=0;;;0;
```

Les options des différents modes sont consultables via le paramètre ```--help```
du mode :

```bash
/usr/lib/centreon/plugins//centreon_office365_teams_api.pl \
  --plugin=cloud::microsoft::office365::teams::plugin \
  --mode=devices-usage \
  --custommode='graphapi'\
  --help
```

Tous les modes disponibles dans le Plugin peuvent être listés via la commande
suivante :

```bash
/usr/lib/centreon/plugins//centreon_office365_teams_api.pl \
  --plugin=cloud::microsoft::office365::teams::plugin \
  --list-mode
```

## Le Plugin renvoie les erreurs suivantes :

#### ```UNKNOWN: 500 Can't connect to ...:443```

Cette erreur signifie que le Plugin Centreon n'a pas pu se connecter à l'API de 
gestion Office 365. Vérifiez que la requête n'a pas bloquée par un outil externe
(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans 
les macros *EXTRAOPTIONS* des services correspondants ou directement dans la 
commande avec l'option ```--proxyurl```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Dans certains cas, et plus spécifiquement lors de l'usage d'un proxy
d'entreprise, le protocole de connexion n'est pas supporté par la libraire *lwp*
utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP *curl*.
Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.
