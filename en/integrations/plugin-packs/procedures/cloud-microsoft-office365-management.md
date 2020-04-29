---
id: cloud-microsoft-office365-management
title: Office 365
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Apr  24 2019 |

## Vue d'ensemble
Office 365 est une suite de services en ligne proposés par Microsoft dans le cadre de sa ligne de produit Microsoft Office.
Les informations de monitoring de la suite Office sont mises à disposition par Microsoft à travers une API de gestion Office 365.

## Contenu du pack de supervision

### Objets supervisés
* Services Office : Tous les services Office 365 : Office 365 Portal, Exchange Online, Microsoft Intune, Skype for Business, Mobile Device Management for Office 365, OneDrive for Business, SharePoint Online, Microsoft Teams, etc...
* Features Office : Toutes les fonctionnalités des services Office 365 : E-Mail and calendar access, E-Mail timely delivery, etc..

## Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->
<!--Service-Status-->
| Metric name | Description |
| :-- | :-- |
| service | Name of monitored service. Units: Text|
| status (service)|Status of the monitored service. Units: Text|
| status (feature)| Status of monitored feature of service. Units: Text|
<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis
### Enregistrer une application
Les API de gestion Office 365 utilisent Azure AD pour assurer l’authentification sécurisée des données dans Office 365.
Pour accéder aux API de gestion Office 365, vous devez enregistrer votre application dans Azure AD.
Le terme « Application » est utilisé comme concept, faisant référence non seulement au programme d’application, 
mais également à son inscription Azure AD et à son rôle lors des « dialogues » d’authentification/autorisation au moment de l’exécution.
(https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals)

Assurez-vous d'avoir récupéré votre Tenant ID Microsoft, vous en aurez besoin pour enregistrer votre application dans Azure AD.

1. Connectez-vous au portail de gestion Azure, en utilisant votre Tenant Microsoft Office 365. 
2. Dans le panneau de navigation de gauche, choisissez Active Directory. 
Assurez-vous que l’onglet Directory est sélectionné, puis sélectionnez le nom du répertoire.
3. Sur la page du répertoire, sélectionnez Applications. Azure AD affiche une liste des applications actuellement installées dans votre infrastructure.
4. Choisissez Ajouter
5. Sélectionnez Ajouter une application.
6. Entrez le nom de votre application et indiquez le Type comme "CENTREON API WEB".
7. Entrez les propriétés de l’application :
* URL de connexion : L’URL où les utilisateurs peuvent se connecter et utiliser votre application. Vous pouvez modifier cela plus tard si nécessaire.
* URI APP ID : L’URI utilisé comme identifiant logique unique pour votre application. L’URI doit être dans un domaine personnalisé vérifié pour qu’un utilisateur externe puisse accorder à votre application l’accès à ses données dans Windows Azure AD.
Votre application est maintenant enregistrée auprès d’Azure AD et un identifiant client lui a été attribué. 

#### Configurer les propriétés de votre application dans Azure AD
Il y a plusieurs propriétés importantes que vous devez spécifier qui déterminent comment votre application fonctionne 
dans Azure AD.
1. ID CLIENT : Cette valeur est générée automatiquement par Azure AD. 
2. APPLICATION IS MULTI-TENANT : Cette propriété doit être configurée sur NO ou YES si vous souhaitez superviser des informations depuis un compte Azure d'une autre entreprise.
3. REPLY URL : C’est l’URL vers laquelle un administrateur locataire sera redirigé après avoir donné son consentement pour permettre à votre application d’accéder à ses données en utilisant les API de gestion Office 365.

#### Générer une nouvelle clé pour votre application
1. Dans le Portail de gestion Azure, sélectionnez votre application et choisissez Configurer dans le menu supérieur. Faites défiler jusqu’aux clés.
2. Sélectionnez la durée de votre clé et choisissez Enregistrer.
3. Azure affiche le secret de l’application seulement après l’avoir sauvegardé. Sélectionnez l’icône Presse-papiers pour copier la clé du client.
* Attention : Azure affiche uniquement la clé privée au moment où vous la générez. Sauvegardez-la car vous ne pourrez pas récupérer la clé privée plus tard.

#### Configurer un certificat X.509 pour activer les appels de service à service
1. Obtenez un certificat X.509. Vous pouvez utiliser un certificat auto-signé ou un certificat délivré par une autorité de certification de confiance publique.
Votre application utilisera ce certificat pour communiquer avec Azure AD, assurez-vous ainsi de conserver l’accès à la clé privée.

#### Spécifiez les autorisations dont votre application a besoin pour accéder aux API de gestion Office 365
Enfin, vous devez spécifier les autorisations que votre application requiert: 
1. Dans le Portail de gestion Azure, sélectionnez votre application et choisissez Configurer dans le menu du haut. Faites défiler jusqu’aux autorisations d’autres applications, puis choisissez Ajouter une application.
2. Sélectionnez 'Office 365 Management APIs' puis cochez la case en bas à droite pour enregistrer votre sélection et revenir à la page de configuration principale de votre application.
3. Les API Office Management apparaissent maintenant dans la liste des applications pour lesquelles votre application nécessite des autorisations. Sous les autorisations d’application et les autorisations déléguées, sélectionnez les autorisations dont votre application a besoin.

#### Demander d’accès à Azure AD
Utilisez un POST HTTP vers un endpoint spécifique au tenant, où l’ID du tenant est intégré dans l’URL.
* https://login.windows.net/{tenantid}/oauth2/token
```bash 
POST https://login.windows.net/41463f53-8812-40f4-890f-865bf6e35190/oauth2/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Host: login.windows.net
Content-Length: 994

resource=https%3A%2F%2Fmanage.office.com&amp;client_id= a6099727-6b7b-482c-b509-1df309acc563&amp;grant_type=client_credentials &amp;
client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&amp;
client_assertion=eyJhbGciOiJSUzI1NiIsIng1dCI6Ill5ZnNoSkMzclBRLWtwR281ZFVhaVk1dDNpVSJ9.eyJhdWQiOiJodHRwczpcL1wvbG9naW4ud2luZG93cy5uZXRcLzQxNDYzZjUzLTg4MTItNDBmNC04OTBmLTg2NWJmNmUzNTE5MFwvb2F1dGgyXC90b2tlbiIsImV4cCI6MTQyNzI0ODY0OCwiaXNzIjoiYTYwOTk3MjctNmI3Yi00ODJjLWI1MDktMWRmMzA5YWNjNTYzIiwianRpIjoiMGNlMjU0YzQtODFiMS00YTJlLTg0MzYtOWE4YzNiNDlkZmI5IiwibmJmIjoxNDI3MjQ4MDQ4LCJzdWIiOiJhNjA5OTcyNy02YjdiLTQ4MmMtYjUwOS0xZGYzMDlhY2M1NjMifQ.vfDrmCjiXgoj2JrTkwyOpr-NOeQTzlXQcGlKGNpLLe0oh4Zvjdcim5C7E0UbI3Z2yb9uKQdx9G7GeqS-gVc9kNV_XSSNP4wEQj3iYNKpf_JD2ikUVIWBkOg41BiTuknRJAYOMjiuBE2a6Wyk-vPCs_JMd7Sr-N3LiNZ-TjluuVzWHfok_HWz_wH8AzdoMF3S0HtrjNd9Ld5eI7MVMt4OTpRfh-Syofi7Ow0HN07nKT5FYeC_ThBpGiIoODnMQQtDA2tM7D3D6OlLQRgLfI8ir73PVXWL7V7Zj2RcOiooIeXx38dvuSwYreJYtdphmrDBZ2ehqtduzUZhaHL1iDvLlw
```

#### Aide supplémentaire
Suivez le guide pratique pour obtenir une explication complète sur la façon d’enregistrer une demande et d’obtenir un ID client et un ID secret :
* https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le plugin sur l'ensemble des collecteurs supervisant des ressources Office 365 Management:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api
```

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":


<!--Offline IMP License-->
1. Installer le plugin sur l'ensemble des collecteurs supervisant des ressources Office 365 Management:

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api
```

2. Installer le RPM contenant les modèles de supervision

```bash
yum install centreon-pack-cloud-microsoft-office365-management 
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Choisissez le modèle d'hôte correspondant à la plateforme de Management Office "Cloud-Microsoft-Office365-Management-Api-Custom". Une fois le modèle d'hôte appliqué, il est possible de définir l'ensemble des macros nécessaires au fonctionnement des contrôles:

| Obligatoire | Nom | Description |
| :---- | :---- | :---- |
| X |OFFICE365CUSTOMMODE|Mode d'accès spécifique aux centreon-plugins office 365 (par défaut:'managementapi')|
| X |OFFICE365TENANT|ID correspondant à l'espace de votre entreprise au sein d'Office 365|
| X |OFFICE365CLIENTID|ID correspondant à l'utilisateur de votre entreprise au sein d'Office 365|
| X |OFFICE365CLIENTSECRET|ID correspondant au mot de passe utilisateur de votre entreprise au sein d'Office 365|



## FAQ

#### Comment tester et interpréter la sonde Office 365 en ligne de commande?

Dès que la sonde est installée, vous pouvez la tester directement depuis votre poller de supervision avec l'utilisateur centreon-engine:
```bash
/usr/lib/centreon/plugins//centreon_office365_management_api.pl
--plugin=cloud::microsoft::office365::management::plugin
--mode=service-status --custommode='managementapi'
--tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24'
--client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d'
--client-secret='9/kRTASjPoy9FJfQZg6iznX\AkzCGertBgNq5r3tPfECJfKxj6zA='
--verbose --filter-service-name='Exchange Online'
--filter-feature-name='' --warning-status=''
--critical-status='%{status} !~ /Normal/i'

OK: Service 'Exchange Online' Status is 'Normal service' - All features
status are ok |
Checking service 'Exchange Online'
Status is 'Normal service'
Feature 'E-Mail and calendar access' Status is 'Normal service'
Feature 'E-Mail timely delivery' Status is 'Normal service'
Feature 'Management and Provisioning' Status is 'Normal service'
Feature 'Sign-in' Status is 'Normal service'
Feature 'Voice mail' Status is 'Normal service'
```

La commande ci-dessus requête une api de gestion Office 365 (```--plugin=cloud::microsoft::office365::management::plugin```) via le tenant (```--tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24'```),
le client (```--client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d'```), le client secret (```--client-secret='9/kRTASjPoy9FJfQZg6iznX\AkzCGertBgNq5r3tPfECJfKxj6zA='```) 
et fournit l'état du service (```--mode=service-status```) "Exchange Online" (```--filter-service-name='Exchange Online'```) ainsi que l'état des 'features' du service selectionné.
Une alerte CRITICAL sera déclenchée si l'état du service Exchange Online n'est pas 'Normal'.

Dans le cas où vous recevez un retour de type UNKNOWN, exécutez le Plugin en mode debug en ajoutant l'option '--debug' :
```bash
/usr/lib/centreon/plugins//centreon_office365_management_api.pl
--plugin=cloud::microsoft::office365::management::plugin
--mode=service-status --custommode='managementapi'
--tenant='b3dd23de-593f3cfe-4d741212-bcf9-f035c1a2eb24'
--client-id='76f82731-073b-4eb2-9228-901d252d2cb6-1b0d'
--client-secret='9/kRTASjPoy9FJfQZg6iznX\AkzCGertBgNq5r3tPfECJfKxj6zA='
--verbose --filter-service-name='Exchange Online'
--filter-feature-name='' --warning-status=''
--critical-status='%{status} !~ /Normal/i'
--debug

UNKNOWN: Cannot decode json response: malformed JSON string, neither tag, array, object, number, 
string or atom, at character offset 0 (before "System.Collections.G...") at 
/usr/lib/centreon/plugins/centreon_office365_management_api.pl line xxx
```


##### Remarques 
* Vérifier que vos tenant id / client id / client secret soient correctement configurés.
* Si la sonde a été lancée pour la première fois avec un autre user que centreon-engine (root par exemple), il est nécessaire de supprimer le fichier de cache stocké dans /var/lib/centreon/centplugins/office365_managementapi_*.
* Par defaut ce plugin utilise la librairie web "Lwb" pour requêter l'api de Microsoft Office 365. Pour palier à certaines erreurs web, nous précaunisons d'utiliser la librairie Curl
en appelant l'option  --http-backend=curl.
* Le temps d'execution des checks peut augmenter dû aux échanges de données via le cloud. Il sera nécessaire d'augmenter
la valeur "Service check timeout" dans les options de logs du moteur centengine.


Toutes les options des différents modes sont consultables via l'option ```--help```:

```bash
/usr/lib/centreon/plugins//centreon_office365_management_api.pl
--plugin=cloud::microsoft::office365::management::plugin
--mode=service-status --custommode='managementapi' --help
```
