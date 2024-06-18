---
id: cloud-microsoft-office365-skype
title: Office365 Skype
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

La suite Microsoft Office 365 inclut Skype, une application offrant différents
types de services comme la messagerie instantanée et les appels téléphoniques et
vidéo. 

Les informations de supervision de la suite Office sont mises à disposition par
Microsoft au travers d'une API de gestion Office 365.

> Les données mises à disposition par l'API de gestion Office 365 ne sont pas en temps réel et sont basées sur une période de 7 jours.

## Contenu du connecteur de supervision

### Objets supervisés

* Utilisation des appareils
* Activité des utilisateurs

### Métriques collectées

Plus d'informations sur les métriques collectées sur la documentation officielle
de Microsoft : 

* https://docs.microsoft.com/fr-fr/SkypeForBusiness/skype-for-business-online-reporting/device-usage-report
* https://docs.microsoft.com/fr-fr/SkypeForBusiness/skype-for-business-online-reporting/activity-report

<Tabs groupId="sync">
<TabItem value="Devices-Usage" label="Devices-Usage">

| Metric name                       | Description                                                  | Unit   |
| :-------------------------------- | :----------------------------------------------------------- | :----- |
| skype.devices.active.count        | Number of active devices                                     | Count  |
| skype.devices.\*.count            | Number of windows/ipad/iphone/android/windows phone devices  | Count  |

</TabItem>
<TabItem value="User-Activity" label="User-Activity">

| Metric name                                       | Description                           | Unit   |
| :------------------------------------------------ | :------------------------------------ | :----- |
| skype.users.active.count                          | Total number of active users          | Count  |
| skype.users.sessions.p2p.total.count              | Number of Peer-to-Peer sessions       | Count  | 
| skype.users.conferences.organized.total.count     | Number of organized conferences       | Count  |
| skype.users.conferences.participated.total.count  | Number of participed conferences      | Count  |

Une fois l'hôte créé, les macros de services peuvent être configurées pour
filtrer les métriques par utilisateurs ou par boites mail. Plus d'informations
dans la section [Configuration](#Configuration).

</TabItem>
</Tabs>

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

Afin de récupérer les données de Skype Online, vous devez spécifier les
autorisations que votre application requiert: 
Dans le portail de gestion Azure :

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

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-microsoft-office365-skype
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-microsoft-office365-skype
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-microsoft-office365-skype
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Office365 Skype**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Microsoft-Office365-Skype-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Microsoft-Office365-Skype-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-microsoft-office365-skype-api
```

</TabItem>
</Tabs>

## Configuration

Lors de la création de votre hôte dans Centreon, choisissez le modèle
*Cloud-Microsoft-Office365-Skype-Api-custom*. Une fois celui-ci appliqué, 
certaines macros liées à l'Hôte doivent être renseignées :

| Mandatory | Name                  | Description                                                                |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X         | OFFICE365CUSTOMMODE   | Access mode for the Plugin (default: 'graphapi')                           |
| X         | OFFICE365TENANT       | Tenant-id of your Office365 organization                                   |
| X         | OFFICE365CLIENTID     | Client-id of your registered application                                   |
| X         | OFFICE365CLIENTSECRET | Secret-if of your registered application                                   |
|           | OFFICE365EXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

La métrique *perfdate* enregistre la date à laquelle celle-ci a été collectée. 
Vous pouvez la filter en paramétrant la macro *OFFICE365EXTRAOPTIONS* avec 
l'option ```--filter-perfdata='^(?!.*perfdate).*$'```

Une fois l'hôte créé, il est également possible de paramétrer un ensemble de
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
/usr/lib/centreon/plugins//centreon_office365_skype_api.pl \
  --plugin=cloud::microsoft::office365::skype::plugin \
  --mode=devices-usage \
  --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \
  --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \
  --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='
```

Résultat attendu :

```bash
OK: Active devices on 2020-09-27 : 0/1 (0.00%) - Users count by device type : 
Windows: 0, iPad: 0, iPhone: 0, Android Phone: 0, Windows Phone: 0 |
active_devices'=0devices;;;0;1
'windows'=0;;;0;
'ipad'=0;;;0;
'iphone'=0;;;0;
'android_phone'=0;;;0;
'windows_phone'=0;;;0;
```

Les options des différents modes sont consultables via le paramètre ```--help```
du mode :

```bash
/usr/lib/centreon/plugins//centreon_office365_skype_api.pl \
  --plugin=cloud::microsoft::office365::skype::plugin \
  --mode=devices-usage \
  --custommode='graphapi'\
  --help
```

Tous les modes disponibles dans le Plugin peuvent être listés via la commande
suivante :

```bash
/usr/lib/centreon/plugins//centreon_office365_skype_api.pl \
  --plugin=cloud::microsoft::office365::skype::plugin \
  --list-mode
```

### Diagnostic des erreurs communes

Référez-vous à la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
au dépannage des plugins basés sur HTTP/API.