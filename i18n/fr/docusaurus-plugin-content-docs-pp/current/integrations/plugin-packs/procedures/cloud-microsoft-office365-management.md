---
id: cloud-microsoft-office365-management
title: Office 365 Management
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Office 365 est une suite de services en ligne proposés par Microsoft dans le cadre de sa ligne de produits Microsoft Office.
Les informations de monitoring de la suite Office sont mises à disposition par Microsoft à travers une API de gestion Office 365.

## Contenu du pack

### Modèles

Le connecteur de supervision **Office 365** apporte un modèle d'hôte :

* **Cloud-Microsoft-Office365-Management-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Microsoft-Office365-Management-Api-custom" label="Cloud-Microsoft-Office365-Management-Api-custom">

| Alias          | Modèle de service                                              | Description                     |
|:---------------|:---------------------------------------------------------------|:--------------------------------|
| Service-Status | Cloud-Microsoft-Office365-Management-Service-Status-Api-custom | Contrôle le statut des services |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Microsoft-Office365-Management-Api-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                                               | Description                               |
|:----------------|:----------------------------------------------------------------|:------------------------------------------|
| App-Credentials | Cloud-Microsoft-Office365-Management-App-Credentials-Api-custom | Contrôle les informations de connexion des applications |
| Subscriptions   | Cloud-Microsoft-Office365-Management-Subscriptions-Api-custom   | Contrôle les abonnements                  |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="App-Credentials" label="App-Credentials">

| Métrique                                                       | Unité |
|:---------------------------------------------------------------|:------|
| *applications*~*password*#password-status                      | N/A   |
| *applications*~*password*#application.password.expires.seconds | s     |
| *applications*~*key*#key-status                                | N/A   |
| *applications*~*key*#application.key.expires.seconds           | s     |

</TabItem>
<TabItem value="Service-Status" label="Service-Status">

| Métrique          | Unité |
|:------------------|:------|
| *services*#status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Subscriptions" label="Subscriptions">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| *subscriptions*#status                        | N/A   |
| *subscriptions*#subscription.usage.count      | count |
| *subscriptions*#subscription.free.count       | count |
| *subscriptions*#subscription.usage.percentage | %     |

</TabItem>
</Tabs>

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
7. Entrez les propriétés de l’application :
* URL de connexion : L’URL où les utilisateurs peuvent se connecter et utiliser votre application. Vous pouvez modifier cela plus tard si nécessaire.
* URI APP ID : L’URI utilisé comme identifiant logique unique pour votre application. L’URI doit être dans un domaine personnalisé vérifié pour qu’un utilisateur externe puisse accorder à votre application l’accès à ses données dans Windows Azure AD.
Votre application est maintenant enregistrée auprès d’Azure AD et un identifiant client lui a été attribué. 

#### Configurer les propriétés de votre application dans Azure AD

Plusieurs propriétés doivent être spécifiées dans Azure AD:

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
1. Dans le Portail de gestion Azure, sélectionnez votre application et choisissez *Configurer* dans le menu du haut. Faites défiler jusqu’aux autorisations d’autres applications, puis choisissez *Ajouter une application*.
2. Sélectionnez 'Office 365 Management APIs' puis cochez la case en bas à droite pour enregistrer votre sélection et revenir à la page de configuration principale de votre application.
3. Les API Office Management apparaissent maintenant dans la liste des applications pour lesquelles votre application nécessite des autorisations. Sous les autorisations d’application et les autorisations déléguées, sélectionnez les autorisations dont votre application a besoin.

#### Ajout d'autorisation pour Microsoft Graph

Il est nécessaire de paramétrer des accès pour **Microsoft Graph** à la fois pour les types *Application* et *Délégué*. Définissez les privilèges suivants :

```
  "roles": [
    "ServiceMessage.Read.All",
    "ServiceHealth.Read.All",
    "Reports.Read.All",
    "Directory.Read.All",
    "User.Read.All",
    "Application.Read.All"
  ],
```

#### Demande d’accès à Azure AD

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

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-microsoft-office365-management
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-microsoft-office365-management
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-microsoft-office365-management
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-microsoft-office365-management
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Office 365**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Microsoft-Office365-Management-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Microsoft-Office365-Management-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-microsoft-office365-management-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Microsoft-Office365-Management-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                 | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OFFICE365CLIENTID     | Set Office 365 client ID                                                                             |                   | X           |
| OFFICE365CLIENTSECRET | Set Office 365 client secret                                                                         |                   | X           |
| OFFICE365TENANT       | Set Office 365 tenant ID                                                                             |                   | X           |
| OFFICE365EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="App-Credentials" label="App-Credentials">

| Macro                   | Description                                                                                                                                                            | Valeur par défaut       | Obligatoire |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERAPPNAME           | Filter applications (can be a regexp)                                                                                                                                  |                         |             |
| WARNINGKEYEXPIRES       | Thresholds                                                                                                                                                             |                         |             |
| CRITICALKEYEXPIRES      | Thresholds                                                                                                                                                             |                         |             |
| CRITICALKEYSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired/i'). You can use the following variables: %{status}, %{id}, %{app\_name} | %{status} =~ /expired/i |             |
| WARNINGKEYSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}, %{app\_name}                                       |                         |             |
| WARNINGPASSWORDEXPIRES  | Thresholds                                                                                                                                                             |                         |             |
| CRITICALPASSWORDEXPIRES | Thresholds                                                                                                                                                             |                         |             |
| CRITICALPASSWORDSTATUS  | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired/i'). You can use the following variables: %{status}, %{id}, %{app\_name} | %{status} =~ /expired/i |             |
| WARNINGPASSWORDSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}, %{app\_name}                                       |                         |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                     | --verbose               |             |

</TabItem>
<TabItem value="Service-Status" label="Service-Status">

| Macro             | Description                                                                                                                                                                                                        | Valeur par défaut                                   | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERSERVICENAME | Filter services (can be a regexp)                                                                                                                                                                                  |                                                     |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /serviceOperational\|serviceRestored/i'). You can use the following variables: %{service\_name}, %{status}, %{classification} | %{status} !~ /serviceOperational\|serviceRestored/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{service\_name}, %{status}, %{classification}                                                                   |                                                     |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                 |                                                     |             |

</TabItem>
<TabItem value="Subscriptions" label="Subscriptions">

| Macro                         | Description                                                                                                                                                                  | Valeur par défaut                 | Obligatoire |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| FILTERSKUPARTNUMBER           | Filter subscriptions by SKU part number (can be a regexp)                                                                                                                    |                                   |             |
| WARNINGSTATUS                 | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /warning/i'). You can use the following variables: %{capabilityStatus}, %{skuPartNumber} | %{capabilityStatus} =~ /warning/i |             |
| CRITICALSTATUS                | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{capabilityStatus}, %{skuPartNumber}                                     |                                   |             |
| WARNINGSUBSCRIPTIONUSAGE      | Thresholds                                                                                                                                                                   |                                   |             |
| CRITICALSUBSCRIPTIONUSAGE     | Thresholds                                                                                                                                                                   |                                   |             |
| WARNINGSUBSCRIPTIONUSAGEFREE  | Thresholds                                                                                                                                                                   |                                   |             |
| CRITICALSUBSCRIPTIONUSAGEFREE | Thresholds                                                                                                                                                                   |                                   |             |
| WARNINGSUBSCRIPTIONUSAGEPRCT  | Thresholds                                                                                                                                                                   |                                   |             |
| CRITICALSUBSCRIPTIONUSAGEPRCT | Thresholds                                                                                                                                                                   |                                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                           | --verbose                         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_office365_management_api.pl \
	--plugin=cloud::microsoft::office365::management::plugin \
	--mode=subscriptions \
	--tenant='xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxx-xxxxxxxxxxxx' \
	--client-id='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-xxxx' \
	--client-secret='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'  \
	--filter-sku-part-number='' \
	--warning-status='%{capabilityStatus} =~ /warning/i' \
	--critical-status='' \
	--warning-subscription-usage='' \
	--critical-subscription-usage='' \
	--warning-subscription-usage-free='' \
	--critical-subscription-usage-free='' \
	--warning-subscription-usage-prct='' \
	--critical-subscription-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All subscriptions are ok | '*subscriptions*#subscription.usage.count'=;;;0;total'*subscriptions*#subscription.free.count'=;;;0;total'*subscriptions*#subscription.usage.percentage'=30%;;;0;100
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_office365_management_api.pl \
	--plugin=cloud::microsoft::office365::management::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                      | Modèle de service associé                                       |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|
| app-credentials [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/appcredentials.pm)]       | Cloud-Microsoft-Office365-Management-App-Credentials-Api-custom |
| list-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/listservices.pm)]           | Not used in this Monitoring Connector                           |
| list-subscriptions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/listsubscriptions.pm)] | Not used in this Monitoring Connector                           |
| service-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/servicestatus.pm)]         | Cloud-Microsoft-Office365-Management-Service-Status-Api-custom  |
| subscriptions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/microsoft/office365/management/mode/subscriptions.pm)]          | Cloud-Microsoft-Office365-Management-Subscriptions-Api-custom   |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Microsoft Office 365 Graph API      To connect to the Office 365 Graph API, you must register an     application.      Follow the 'How-to guide' at     https://docs.microsoft.com/en-us/graph/auth-register-app-v2?view=graph-r     est-1.0      This custom mode is using the 'OAuth 2.0 Client Credentials Grant Flow'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --tenant                                   | Set Office 365 tenant ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --client-id                                | Set Office 365 client ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --client-secret                            | Set Office 365 client secret.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --login-endpoint                           | Set Office 365 login endpoint URL (default: 'https://login.microsoftonline.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --graph-endpoint                           | Set Office 365 graph endpoint URL (default: 'https://graph.microsoft.com')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --timeout                                  | Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="App-Credentials" label="App-Credentials">

| Option                     | Description                                                                                                                                                               |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-app-name          | Filter applications (can be a regexp).                                                                                                                                    |
| --warning-key-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}, %{app\_name}.                                         |
| --critical-key-status      | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired/i'). You can use the following variables: %{status}, %{id}, %{app\_name}.   |
| --warning-password-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{id}, %{app\_name}.                                         |
| --critical-password-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /expired/i'). You can use the following variables: %{status}, %{id}, %{app\_name}.   |
| --unit                     | Select the time unit for the expiration thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is secondss.              |
| --warning-* --critical-*   | Thresholds. Can be: 'key-expires', 'password-expires'.                                                                                                                    |

</TabItem>
<TabItem value="Service-Status" label="Service-Status">

| Option                | Description                                                                                                                                                                                                           |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-service-name | Filter services (can be a regexp).                                                                                                                                                                                    |
| --warning-status      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{service\_name}, %{status}, %{classification}                                                                      |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /serviceOperational\|serviceRestored/i'). You can use the following variables: %{service\_name}, %{status}, %{classification}    |

</TabItem>
<TabItem value="Subscriptions" label="Subscriptions">

| Option                   | Description                                                                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-sku-part-number | Filter subscriptions by SKU part number (can be a regexp).                                                                                                                     |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /warning/i'). You can use the following variables: %{capabilityStatus}, %{skuPartNumber}   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{capabilityStatus}, %{skuPartNumber}                                       |
| --warning-* --critical-* | Thresholds. Can be: 'subscription-usage', 'subscription-usage-free', 'subscription-usage-prct'.                                                                                |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_office365_management_api.pl \
	--plugin=cloud::microsoft::office365::management::plugin \
	--mode=subscriptions \
	--help
```
