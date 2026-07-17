---
id: applications-exchange-nrpe
title: Microsoft Exchange NSClient NRPE
description: Supervisez Microsoft Exchange via NRPE et NSClient++ : bases de données, boîtes aux lettres, files d'attente, réplication et services.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Microsoft Exchange NSClient NRPE** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Microsoft Exchange NSClient NRPE** apporte un modèle d'hôte :

* **App-Exchange-NRPE-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Exchange-NRPE-custom" label="App-Exchange-NRPE-custom">

| Alias             | Modèle de service                  | Description                                                     |
|:------------------|:-----------------------------------|:----------------------------------------------------------------|
| Databases         | App-Exchange-Databases-NRPE-custom | Contrôle permettant de vérifier l'état des 'databases' Exchange |
| Exchange-Services | App-Exchange-Services-NRPE-custom  | Contrôle permettant de vérifier l'état des services Exchange    |
| Queues            | App-Exchange-Queues-NRPE-custom    | Contrôle permettant de vérifier l'état des queues Exchange      |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Exchange-NRPE-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias               | Modèle de service                            | Description                                                                      |
|:--------------------|:---------------------------------------------|:---------------------------------------------------------------------------------|
| Activesync-Mailbox  | App-Exchange-Activesync-Mailbox-NRPE-custom  | Contrôle permettant de vérifier activesync sur une boîte aux lettres             |
| Imap-Mailbox        | App-Exchange-Imap-Mailbox-NRPE-custom        | Contrôle permettant de vérifier la connexion IMAP à une boîte aux lettres        |
| Mailboxes           | App-Exchange-Mailboxes-NRPE-custom           | Contrôle les boites aux lettres (quota et boîtes aux lettres par base de données |
| Mapi-Mailbox        | App-Exchange-Mapi-Mailbox-NRPE-custom        | Contrôle permettant de vérifier la connexion MAPI à une boîte aux lettres        |
| Outlook-Webservices | App-Exchange-Outlook-Webservices-NRPE-custom | Contrôle permettant de vérifier l'auto-découverte Outlook                        |
| Owa-Mailbox         | App-Exchange-Owa-Mailbox-NRPE-custom         | Contrôle permettant de vérifier la connexion OWA à une boîte aux lettres         |
| Replication-Health  | App-Exchange-Replication-Health-NRPE-custom  | Contrôle permettant de vérifier l'état de santé de la réplication                |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Activesync-Mailbox" label="Activesync-Mailbox">

Pas de métriques pour ce service.

</TabItem>
<TabItem value="Databases" label="Databases">

| Nom                                           | Unité |
|:----------------------------------------------|:------|
| databases.space.size.bytes                    | B     |
| databases.space.available.bytes               | B     |
| status                                        | N/A   |
| *databases*~database.space.size.bytes         | B     |
| *databases*~database.space.available.bytes    | B     |
| mapi                                          | N/A   |
| mailflow                                      | N/A   |
| *databases*~database.mailflow.latency.seconds | s     |
| copystatus                                    | N/A   |

</TabItem>
<TabItem value="Exchange-Services" label="Exchange-Services">

Pas de métriques pour ce service.

</TabItem>
<TabItem value="Imap-Mailbox" label="Imap-Mailbox">

Pas de métriques pour ce service.

</TabItem>
<TabItem value="Mailboxes" label="Mailboxes">

| Nom                                                      | Unité |
|:---------------------------------------------------------|:------|
| *databases*#database.mailboxes.total.count               | count |
| *users*#user.soft.limit.count                            | count |
| *users*#user.hard.limit.count                            | count |
| *users*#user.quota.unlimited.limit.count                 | count |
| *users*#user.total.count                                 | count |
| *publicfolders*#publicfolder.soft.limit.count            | count |
| *publicfolders*#publicfolder.hard.limit.count            | count |
| *publicfolders*#publicfolder.quota.unlimited.limit.count | count |
| *publicfolders*#publicfolder.total.count                 | count |

</TabItem>
<TabItem value="Mapi-Mailbox" label="Mapi-Mailbox">

Pas de métriques pour ce service.

</TabItem>
<TabItem value="Outlook-Webservices" label="Outlook-Webservices">

Pas de métriques pour ce service.

</TabItem>
<TabItem value="Owa-Mailbox" label="Owa-Mailbox">

Pas de métriques pour ce service.

</TabItem>
<TabItem value="Queues" label="Queues">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Replication-Health" label="Replication-Health">

Pas de métriques pour ce service.

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour superviser les ressources *Microsoft Exchange* via NRPE, installez la version Centreon
de l'agent NSClient++. Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur NRPE** est correcte.

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
dnf install centreon-pack-applications-exchange-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-exchange-nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-exchange-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-exchange-nrpe
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Microsoft Exchange NSClient NRPE**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-windows-restapi
apt install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
yum install nagios-plugins-nrpe
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Exchange-NRPE-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                                                                        | Valeur par défaut     | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         | NRPE port of the monitored server                                                                                                                  | 5666                  |             |
| NRPECLIENT       | NRPE client used to perform the check                                                                                                              | check\_centreon\_nrpe |             |
| NRPETIMEOUT      | Timeout value                                                                                                                                      | 55                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                       |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Activesync-Mailbox" label="Activesync-Mailbox">

| Macro        | Description                                                                                                                                      | Valeur par défaut             | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| MAILBOX      | Set the mailbox to check                                                                                                                         |                               |      X      |
| PASSWORD     | Set the password for the mailbox                                                                                                                 |                               |      X      |
| CRITICAL     | Set critical threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                          | not %\{result\} =~ /Success/i |             |
| WARNING      | Set warning threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                           |                               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                     |             |

</TabItem>
<TabItem value="Databases" label="Databases">

| Macro                           | Description                                                                                                                                      | Valeur par défaut                             | Obligatoire |
|:--------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|:-----------:|
| FILTER                          | Filter database (only wilcard '*' can be used. In Powershell)                                                                                    | *                                             |             |
| CRITICALCOPYSTATUS              | Set critical threshold. You can use the following variables: %\{copystatus\_indexstate\}, %\{database\}, %\{server\}                             | not %\{copystatus\_indexstate\} =~ /Healthy/i |             |
| WARNINGCOPYSTATUS               | Set warning threshold. You can use the following variables: %\{mailflow\_result\}, %\{database\}, %\{server\}                                    |                                               |             |
| WARNINGDATABASESPACEAVAILABLE   | Threshold                                                                                                                                        |                                               |             |
| CRITICALDATABASESPACEAVAILABLE  | Threshold                                                                                                                                        |                                               |             |
| WARNINGDATABASESPACESIZE        | Threshold                                                                                                                                        |                                               |             |
| CRITICALDATABASESPACESIZE       | Threshold                                                                                                                                        |                                               |             |
| WARNINGDATABASESSPACEAVAILABLE  | Threshold                                                                                                                                        |                                               |             |
| CRITICALDATABASESSPACEAVAILABLE | Threshold                                                                                                                                        |                                               |             |
| WARNINGDATABASESSPACESIZE       | Threshold                                                                                                                                        |                                               |             |
| CRITICALDATABASESSPACESIZE      | Threshold                                                                                                                                        |                                               |             |
| CRITICALMAILFLOW                | Set critical threshold. You can use the following variables: %\{mailflow\_result\}, %\{database\}, %\{server\}                                   | not %\{mailflow\_result\} =~ /Success/i       |             |
| WARNINGMAILFLOW                 | Set warning threshold. You can use the following variables: %\{mailflow\_result\}, %\{database\}, %\{server\}                                    |                                               |             |
| WARNINGMAILFLOWLATENCY          | Threshold                                                                                                                                        |                                               |             |
| CRITICALMAILFLOWLATENCY         | Threshold                                                                                                                                        |                                               |             |
| CRITICALMAPI                    | Set critical threshold. You can use the following variables: %\{mapi\_result\}, %\{database\}, %\{server\}                                       | not %\{mapi\_result\} =~ /Success/i           |             |
| WARNINGMAPI                     | Set warning threshold. You can use the following variables: %\{mapi\_result\}, %\{database\}, %\{server\}                                        |                                               |             |
| CRITICALSTATUS                  | Set critical threshold. You can use the following variables: %\{mounted\}, %\{database\}, %\{server\}                                            | %\{mounted\} == 0                             |             |
| WARNINGSTATUS                   | Set warning threshold. You can use the following variables: %\{mounted\}, %\{database\}, %\{server\}                                             |                                               |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose --no-mapi --no-mailflow             |             |

</TabItem>
<TabItem value="Exchange-Services" label="Exchange-Services">

| Macro        | Description                                                                                                                                         | Valeur par défaut                                                                   | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------|:-----------:|
| CRITICAL     | Set critical threshold. You can use the following variables: %\{servicesrunning\}, %\{servicesnotrunning\}, %\{role\}, %\{requiredservicesrunning\} | %\{requiredservicesrunning\} =~ /True/i and %\{servicesnotrunning\} =~ /\[a-zA-Z\]/ |             |
| WARNING      | Set warning threshold. You can use the following variables: %\{servicesrunning\}, %\{servicesnotrunning\}, %\{role\}, %\{requiredservicesrunning\}  |                                                                                     |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).    | --verbose                                                                           |             |

</TabItem>
<TabItem value="Imap-Mailbox" label="Imap-Mailbox">

| Macro        | Description                                                                                                                                      | Valeur par défaut             | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| MAILBOX      | Set the mailbox to check                                                                                                                         |                               |      X      |
| PASSWORD     | Set the password for the mailbox                                                                                                                 |                               |      X      |
| CRITICAL     | Set critical threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                          | not %\{result\} =~ /Success/i |             |
| WARNING      | Set warning threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                           |                               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                     |             |

</TabItem>
<TabItem value="Mailboxes" label="Mailboxes">

| Macro                               | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PSERVER                             | Select mailboxes by an uniq server name (In Powershell)                                                                                          |                   |             |
| PSDATABASE                          | Select mailboxes by an uniq database name (In Powershell)                                                                                        |                   |             |
| PSMATCHSERVER                       | Filter mailboxes by server name (regexp can be used. In Powershell)                                                                              |                   |             |
| PSMATCHDATABASE                     | Filter mailboxes by database name (regexp can be used. In Powershell)                                                                            |                   |             |
| WARNINGDATABASEMAILBOXESTOTAL       | Threshold                                                                                                                                        |                   |             |
| CRITICALDATABASEMAILBOXESTOTAL      | Threshold                                                                                                                                        |                   |             |
| WARNINGPUBLICFOLDERSHARDLIMIT       | Threshold                                                                                                                                        |                   |             |
| CRITICALPUBLICFOLDERSHARDLIMIT      | Threshold                                                                                                                                        |                   |             |
| WARNINGPUBLICFOLDERSQUOTAUNLIMITED  | Threshold                                                                                                                                        |                   |             |
| CRITICALPUBLICFOLDERSQUOTAUNLIMITED | Threshold                                                                                                                                        |                   |             |
| WARNINGPUBLICFOLDERSSOFTLIMIT       | Threshold                                                                                                                                        |                   |             |
| CRITICALPUBLICFOLDERSSOFTLIMIT      | Threshold                                                                                                                                        |                   |             |
| WARNINGPUBLICFOLDERSTOTAL           | Threshold                                                                                                                                        |                   |             |
| CRITICALPUBLICFOLDERSTOTAL          | Threshold                                                                                                                                        |                   |             |
| WARNINGUSERSHARDLIMIT               | Threshold                                                                                                                                        |                   |             |
| CRITICALUSERSHARDLIMIT              | Threshold                                                                                                                                        |                   |             |
| WARNINGUSERSQUOTAUNLIMITED          | Threshold                                                                                                                                        |                   |             |
| CRITICALUSERSQUOTAUNLIMITED         | Threshold                                                                                                                                        |                   |             |
| WARNINGUSERSSOFTLIMIT               | Threshold                                                                                                                                        |                   |             |
| CRITICALUSERSSOFTLIMIT              | Threshold                                                                                                                                        |                   |             |
| WARNINGUSERSTOTAL                   | Threshold                                                                                                                                        |                   |             |
| CRITICALUSERSTOTAL                  | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Mapi-Mailbox" label="Mapi-Mailbox">

| Macro        | Description                                                                                                                                      | Valeur par défaut             | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| MAILBOX      | Set the mailbox to check                                                                                                                         |                               |      X      |
| CRITICAL     | Set critical threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                          | not %\{result\} =~ /Success/i |             |
| WARNING      | Set warning threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                           |                               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                     |             |

</TabItem>
<TabItem value="Outlook-Webservices" label="Outlook-Webservices">

| Macro        | Description                                                                                                                                      | Valeur par défaut                        | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| MAILBOX      | Set the mailbox to check                                                                                                                         |                                          |      X      |
| CRITICAL     | Set critical threshold. You can use the following variables: %\{type\}, %\{id\}, %\{message\}                                                    | not %\{type\} =~ /Success\|Information/i |             |
| WARNING      | Set warning threshold. You can use the following variables: %\{type\}, %\{id\}, %\{message\}                                                     |                                          |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                                |             |

</TabItem>
<TabItem value="Owa-Mailbox" label="Owa-Mailbox">

| Macro        | Description                                                                                                                                      | Valeur par défaut             | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| URL          | Set the OWA Url                                                                                                                                  |                               |      X      |
| MAILBOX      | Set the mailbox to check                                                                                                                         |                               |      X      |
| PASSWORD     | Set the password for the mailbox                                                                                                                 |                               |      X      |
| CRITICAL     | Set critical threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                          | not %\{result\} =~ /Success/i |             |
| WARNING      | Set warning threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                           |                               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                     |             |

</TabItem>
<TabItem value="Queues" label="Queues">

| Macro        | Description                                                                                                                                       | Valeur par défaut                   | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:-----------:|
| CRITICAL     | Set critical threshold. You can use the following variables: %\{status\}, %\{identity\}, %\{is\_valid\}, %\{delivery\_type\}, %\{message\_count\} | not %\{status\} =~ /Ready\|Active/i |             |
| WARNING      | Set warning threshold. You can use the following variables: %\{status\}, %\{identity\}, %\{is\_valid\}, %\{delivery\_type\}, %\{message\_count\}  |                                     |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).  | --verbose                           |             |

</TabItem>
<TabItem value="Replication-Health" label="Replication-Health">

| Macro        | Description                                                                                                                                      | Valeur par défaut            | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| CRITICAL     | Set critical threshold. You can use the following variables: %\{result\}, %\{server\}, %\{isvalid\}, %\{check\}                                  | not %\{result\} =~ /Passed/i |             |
| WARNING      | Set warning threshold. You can use the following variables: %\{result\}, %\{server\}, %\{isvalid\}, %\{check\}                                   |                              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                    |             |

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
/usr/lib64/nagios/plugins//check\_centreon\_nrpe -H 10.0.0.1 -p 5666 -t 55  -c check_centreon_plugins -a 'apps::microsoft::exchange::local::plugin' 'queues'  '  \
	--warning-status="" \
	--critical-status="not %\{status\} =~ /Ready|Active/i" \
	--verbose'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All queues are ok 
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
/usr/lib64/nagios/plugins//check\_centreon\_nrpe -H 10.0.0.1 -p 5666 -t 55  -c check_centreon_plugins -a 'apps::microsoft::exchange::local::plugin' 'queues'  '  \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                 | Modèle de service associé                    |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| activesync-mailbox [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/activesyncmailbox.pm)]   | App-Exchange-Activesync-Mailbox-NRPE-custom  |
| databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/databases.pm)]                    | App-Exchange-Databases-NRPE-custom           |
| imap-mailbox [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/imapmailbox.pm)]               | App-Exchange-Imap-Mailbox-NRPE-custom        |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/listdatabases.pm)]           | Not used in this Monitoring Connector        |
| mailboxes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/mailboxes.pm)]                    | App-Exchange-Mailboxes-NRPE-custom           |
| mapi-mailbox [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/mapimailbox.pm)]               | App-Exchange-Mapi-Mailbox-NRPE-custom        |
| outlook-webservices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/outlookwebservices.pm)] | App-Exchange-Outlook-Webservices-NRPE-custom |
| owa-mailbox [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/owamailbox.pm)]                 | App-Exchange-Owa-Mailbox-NRPE-custom         |
| queues [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/queues.pm)]                          | App-Exchange-Queues-NRPE-custom              |
| replication-health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/replicationhealth.pm)]   | App-Exchange-Replication-Health-NRPE-custom  |
| services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/exchange/local/mode/services.pm)]                      | App-Exchange-Services-NRPE-custom            |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Activesync-Mailbox" label="Activesync-Mailbox">

| Option            | Description                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| --remote-host     |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                          |
| --remote-user     |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                              |
| --remote-password |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                  |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                   |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path    |   Command path (default: none).                                                                                                            |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display      |   Display powershell script.                                                                                                               |
| --ps-exec-only    |   Print powershell output.                                                                                                                 |
| --warning         |   Set warning threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                   |
| --critical        |   Set critical threshold (default: '%\{result\} !~ /Success/i'). You can use the following variables: %\{result\}, %\{scenario\}           |
| --mailbox         |   Set the mailbox to check (required).                                                                                                     |
| --password        |   Set the password for the mailbox (required).                                                                                             |
| --no-trust-ssl    |   By default, SSL certificate validy is not checked.                                                                                       |

</TabItem>
<TabItem value="Databases" label="Databases">

| Option                    | Description                                                                                                                                                                 |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                 |
| --remote-host             |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                                                           |
| --remote-user             |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                                                               |
| --remote-password         |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                                                   |
| --no-mailflow             |   Don't check mailflow connectivity.                                                                                                                                        |
| --no-mapi                 |   Don't check mapi connectivity.                                                                                                                                            |
| --no-copystatus           |   Don't check copy status.                                                                                                                                                  |
| --timeout                 |   Set timeout time for command execution (default: 50 sec)                                                                                                                  |
| --no-ps                   |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                    |
| --command                 |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                    |
| --command-path            |   Command path (default: none).                                                                                                                                             |
| --command-options         |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                   |
| --ps-exec-only            |   Print powershell output.                                                                                                                                                  |
| --ps-display              |   Display powershell script.                                                                                                                                                |
| --ps-server-filter        |   Filter mailboxes by database server name (regexp can be used. In Powershell).                                                                                             |
| --ps-database-filter      |   Filter database (only wilcard '*' can be used. In Powershell).                                                                                                            |
| --ps-database-test-filter |   Skip mapi/mailflow test (regexp can be used. In Powershell).                                                                                                              |
| --warning-status          |   Set warning threshold. You can use the following variables: %\{mounted\}, %\{database\}, %\{server\}                                                                      |
| --critical-status         |   Set critical threshold (default: '%\{mounted\} == 0'). You can use the following variables: %\{mounted\}, %\{database\}, %\{server\}                                      |
| --warning-mapi            |   Set warning threshold. You can use the following variables: %\{mapi\_result\}, %\{database\}, %\{server\}                                                                 |
| --critical-mapi           |   Set critical threshold (default: '%\{mapi\_result\} !~ /Success/i'). You can use the following variables: %\{mapi\_result\}, %\{database\}, %\{server\}                   |
| --warning-mailflow        |   Set warning threshold. You can use the following variables: %\{mailflow\_result\}, %\{database\}, %\{server\}                                                             |
| --critical-mailflow       |   Set critical threshold (default: '%\{mailflow\_result\} !~ /Success/i'). You can use the following variables: %\{mailflow\_result\}, %\{database\}, %\{server\}           |
| --warning-copystatus      |   Set warning threshold. You can use the following variables: %\{mailflow\_result\}, %\{database\}, %\{server\}                                                             |
| --critical-copystatus     |   Set critical threshold (default: '%\{contentindexstate\} !~ /Healthy/i'). You can use the following variables: %\{copystatus\_indexstate\}, %\{database\}, %\{server\}    |

</TabItem>
<TabItem value="Exchange-Services" label="Exchange-Services">

| Option            | Description                                                                                                                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --remote-host     |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                                                                                                                               |
| --remote-user     |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                                                                                                                                   |
| --remote-password |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                                                                                                                       |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                                                                                                                      |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                                        |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                        |
| --command-path    |   Command path (default: none).                                                                                                                                                                                                                 |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                       |
| --ps-display      |   Display powershell script.                                                                                                                                                                                                                    |
| --ps-exec-only    |   Print powershell output.                                                                                                                                                                                                                      |
| --warning         |   Set warning threshold. You can use the following variables: %\{servicesrunning\}, %\{servicesnotrunning\}, %\{role\}, %\{requiredservicesrunning\}                                                                                            |
| --critical        |   Set critical threshold (default: '%\{requiredservicesrunning\} =~ /True/i and %\{servicesnotrunning\} ne ""'). You can use the following variables: %\{servicesrunning\}, %\{servicesnotrunning\}, %\{role\}, %\{requiredservicesrunning\}    |

</TabItem>
<TabItem value="Imap-Mailbox" label="Imap-Mailbox">

| Option            | Description                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| --remote-host     |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                          |
| --remote-user     |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                              |
| --remote-password |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                  |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                   |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path    |   Command path (default: none).                                                                                                            |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display      |   Display powershell script.                                                                                                               |
| --ps-exec-only    |   Print powershell output.                                                                                                                 |
| --warning         |   Set warning threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                   |
| --critical        |   Set critical threshold (default: '%\{result\} !~ /Success/i'). You can use the following variables: %\{result\}, %\{scenario\}           |
| --mailbox         |   Set the mailbox to check (required).                                                                                                     |
| --password        |   Set the password for the mailbox (required).                                                                                             |

</TabItem>
<TabItem value="Mailboxes" label="Mailboxes">

| Option                   | Description                                                                                                                                                                                                                                         |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                         |
| --remote-host            |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                                                                                                                                   |
| --remote-user            |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                                                                                                                                       |
| --remote-password        |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                                                                                                                           |
| --timeout                |   Set timeout time for command execution (default: 50 sec)                                                                                                                                                                                          |
| --no-ps                  |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                                            |
| --command                |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                            |
| --command-path           |   Command path (default: none).                                                                                                                                                                                                                     |
| --command-options        |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                           |
| --ps-exec-only           |   Print powershell output.                                                                                                                                                                                                                          |
| --ps-display             |   Display powershell script.                                                                                                                                                                                                                        |
| --ps-match-server        |   Filter mailboxes by server name (regexp can be used. In Powershell).                                                                                                                                                                              |
| --ps-match-database      |   Filter mailboxes by database name (regexp can be used. In Powershell).                                                                                                                                                                            |
| --ps-server              |   Select mailboxes by an uniq server name (In Powershell).                                                                                                                                                                                          |
| --ps-database            |   Select mailboxes by an uniq database name (In Powershell).                                                                                                                                                                                        |
| --warning-* --critical-* |   Thresholds. Can be: 'users-soft-limit', 'users-hard-limit', 'users-quota-unlimited', 'users-total', 'publicfolders-soft-limit', 'publicfolders-hard-limit', 'publicfolders-quota-unlimited', 'publicfolders-total' 'database-mailboxes-total'.    |

</TabItem>
<TabItem value="Mapi-Mailbox" label="Mapi-Mailbox">

| Option            | Description                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| --remote-host     |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                          |
| --remote-user     |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                              |
| --remote-password |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                  |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                   |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path    |   Command path (default: none).                                                                                                            |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display      |   Display powershell script.                                                                                                               |
| --ps-exec-only    |   Print powershell output.                                                                                                                 |
| --warning         |   Set warning threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                   |
| --critical        |   Set critical threshold (default: '%\{result\} !~ /Success/i'). You can use the following variables: %\{result\}, %\{scenario\}           |
| --mailbox         |   Set the mailbox to check (required).                                                                                                     |

</TabItem>
<TabItem value="Outlook-Webservices" label="Outlook-Webservices">

| Option            | Description                                                                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --remote-host     |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                                   |
| --remote-user     |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                                       |
| --remote-password |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                           |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                          |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                            |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!            |
| --command-path    |   Command path (default: none).                                                                                                                     |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                           |
| --ps-display      |   Display powershell script.                                                                                                                        |
| --ps-exec-only    |   Print powershell output.                                                                                                                          |
| --warning         |   Set warning threshold. You can use the following variables: %\{type\}, %\{id\}, %\{message\}                                                      |
| --critical        |   Set critical threshold (default: '%\{type\} !~ /Success\|Information/i'). You can use the following variables: %\{type\}, %\{id\}, %\{message\}   |
| --mailbox         |   Set the mailbox to check (required).                                                                                                              |
| --password        |   Set the password for the mailbox.                                                                                                                 |

</TabItem>
<TabItem value="Owa-Mailbox" label="Owa-Mailbox">

| Option            | Description                                                                                                                                |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| --remote-host     |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                          |
| --remote-user     |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                              |
| --remote-password |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                  |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                   |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path    |   Command path (default: none).                                                                                                            |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display      |   Display powershell script.                                                                                                               |
| --ps-exec-only    |   Print powershell output.                                                                                                                 |
| --warning         |   Set warning threshold. You can use the following variables: %\{result\}, %\{scenario\}                                                   |
| --critical        |   Set critical threshold (default: '%\{result\} !~ /Success/i'). You can use the following variables: %\{result\}, %\{scenario\}           |
| --url             |   Set the OWA Url (required).                                                                                                              |
| --mailbox         |   Set the mailbox to check (required).                                                                                                     |
| --password        |   Set the password for the mailbox (required).                                                                                             |
| --no-trust-ssl    |   By default, SSL certificate validy is not checked.                                                                                       |

</TabItem>
<TabItem value="Queues" label="Queues">

| Option            | Description                                                                                                                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                         |
| --remote-host     |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                                                                                   |
| --remote-user     |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                                                                                       |
| --remote-password |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                                                                           |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                                                                          |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                                                                            |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                            |
| --command-path    |   Command path (default: none).                                                                                                                                                                     |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                           |
| --ps-display      |   Display powershell script.                                                                                                                                                                        |
| --ps-exec-only    |   Print powershell output.                                                                                                                                                                          |
| --warning-status  |   Set warning threshold. You can use the following variables: %\{status\}, %\{identity\}, %\{is\_valid\}, %\{delivery\_type\}, %\{message\_count\}                                                  |
| --critical-status |   Set critical threshold (default: '%\{status\} !~ /Ready\|Active/i'). You can use the following variables: %\{status\}, %\{identity\}, %\{is\_valid\}, %\{delivery\_type\}, %\{message\_count\}    |

</TabItem>
<TabItem value="Replication-Health" label="Replication-Health">

| Option            | Description                                                                                                                                                |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --remote-host     |   Open a session to the remote-host (fully qualified host name). --remote-user and --remote-password are optional                                          |
| --remote-user     |   Open a session to the remote-host with authentication. This also needs --remote-host and --remote-password.                                              |
| --remote-password |   Open a session to the remote-host with authentication. This also needs --remote-user and --remote-host.                                                  |
| --timeout         |   Set timeout time for command execution (default: 50 sec)                                                                                                 |
| --no-ps           |   Don't encode powershell. To be used with --command and 'type' command.                                                                                   |
| --command         |   Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                   |
| --command-path    |   Command path (default: none).                                                                                                                            |
| --command-options |   Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                  |
| --ps-display      |   Display powershell script.                                                                                                                               |
| --ps-exec-only    |   Print powershell output.                                                                                                                                 |
| --warning         |   Set warning threshold. You can use the following variables: %\{result\}, %\{server\}, %\{isvalid\}, %\{check\}                                           |
| --critical        |   Set critical threshold (default: '%\{result\} !~ /Passed/i'). You can use the following variables: %\{result\}, %\{server\}, %\{isvalid\}, %\{check\}    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins//check\_centreon\_nrpe -H 10.0.0.1 -p 5666 -t 55  -c check_centreon_plugins -a 'apps::microsoft::exchange::local::plugin' 'queues'  '  \
	--help
```
