---
id: operatingsystems-windows-nsclient-05-restapi
title: Windows NSClient API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Windows NSClient API** apporte un modèle d'hôte :

* **OS-Windows-NSClient-05-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Windows-NSClient-05-Restapi-custom" label="OS-Windows-NSClient-05-Restapi-custom">

| Alias         | Modèle de service                                  | Description                                                                                                                                                                  |
|:--------------|:---------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu           | OS-Windows-NSClient05-Cpu-Restapi-custom           | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Disks         | OS-Windows-NSClient05-Disks-Restapi-custom         | Contrôle le taux d'utilisation des disques Windows                                                                                                                           |
| Memory        | OS-Windows-NSClient05-Memory-Restapi-custom        | Contrôle du taux d'utilisation de la mémoire vive                                                                                                                            |
| Services-Auto | OS-Windows-NSClient05-Services-Auto-Restapi-custom | Contrôle permettant de vérifier si les services automatiques sont démarrés                                                                                                   |
| Swap          | OS-Windows-NSClient05-Swap-Restapi-custom          | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                       |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Windows-NSClient-05-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                 | Modèle de service                                            | Description                                                             |
|:----------------------|:-------------------------------------------------------------|:------------------------------------------------------------------------|
| Active-Sessions       | OS-Windows-NSClient05-Counter-Active-Sessions-Restapi-custom | Contrôle le nombre de sessions actives                                  |
| Counter-Generic       | OS-Windows-NSClient05-Counter-Generic-Restapi-custom         | Contrôle permettant de récupérer la valeur d'un compteur de performance |
| Eventlog-Generic      | OS-Windows-NSClient05-Eventlog-Generic-restapi-custom        | Contrôle les événements en erreur dans les eventlogs                   |
| Files-Generic         | OS-Windows-NSClient05-Files-Generic-Restapi-custom           | Contrôle permettant de vérifier des fichiers                            |
| Logfiles-Generic      | OS-Windows-NSClient05-Logfiles-Generic-Restapi-custom        | Controle les fichiers de logs                                           |
| Ntp                   | OS-Windows-NSClient05-Ntp-Restapi-custom                     | Contrôle la synchronisation avec un serveur NTP                         |
| Pending-Reboot        | OS-Windows-NSClient05-Pending-Reboot-Restapi-custom          | Contrôle si Windows nécessite un redémarrage                            |
| Process-generic       | OS-Windows-NSClient05-Process-Generic-Restapi-custom         | Contrôle des processus                                                  |
| Services-Generic-Name | OS-Windows-NSClient05-Services-Generic-Name-Restapi-custom   | Contrôle permettant de vérifier l'état des services Windows             |
| Sessions              | OS-Windows-NSClient05-Sessions-Restapi-custom                | Contrôle les sessions utilisateur Windows                              |
| Task-Generic          | OS-Windows-NSClient05-Task-Generic-Restapi-custom            | Contrôle les tâches planifiées Windows                                  |
| Updates               | OS-Windows-NSClient05-Updates-Restapi-custom                 | Contrôle si Windows a des mises à jour en attente                       |
| Uptime                | OS-Windows-NSClient05-Uptime-Restapi-custom                  | Contrôle l'uptime Windows                                               |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Active-Sessions" label="Active-Sessions">

| Métrique        | Unité |
| :-------------- | :---- |
| Sessions\_value | count |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Métrique    | Unité |
| :------------- | :---- |
| Counter\_value | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique | Unité |
|:-------- |:----- |
| total 5m | %     |
| total 1m | %     |
| total 5s | %     |

</TabItem>
<TabItem value="Disks" label="Disks">

| Métrique | Unité |
|:-------- |:----- |
| used     | B     |


</TabItem>
<TabItem value="Eventlog-Generic" label="Eventlog-Generic">

| Métrique     | Unité |
|:------------ |:----- |
| problemCount | count |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Métrique | Unité |
|:-------- |:----- |
| count    | count |

</TabItem>
<TabItem value="Logfiles-Generic" label="Logfiles-Generic">

| Métrique         | Unité |
|:---------------- |:----- |
| *tag*\_lines     | count |
| *tag*\_warnings  | count |
| *tag*\_criticals | count |
| *tag*\_unknowns  | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique | Unité |
| :------- | :--   |
| used     | B     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Métrique    | Unité |
|:------------|:------|
| offset      | s     |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Métrique      | Unité |
|:------------- |:----- |
| pendingreboot | count |

</TabItem>
<TabItem value="Process-generic" label="Process-generic">

| Métrique  | Unité |
|:--------- |:----- |
| exec_name | count |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

Pas de métrique pour ce service.

</TabItem>
<TabItem value="Services-Generic-Name" label="Services-Generic-Name">

Pas de métrique pour ce service.

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Métrique                            | Unité |
|:------------------------------------|:------|
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.reconnected.total.count    | count |
| sessions.active.current.count       | count |
| sessions.disconnected.current.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique | Unité |
|:-------- |:----- |
| swap     | B     |

</TabItem>
<TabItem value="Task-Generic" label="Task-Generic">

| Métrique  | Unité |
|:--------- |:----- |
| task_name | count |

</TabItem>
<TabItem value="Updates" label="Updates">

| Métrique                      | Unité |
|:------------------------------|:------|
| windows.pending.updates.count | count |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique | Unité |
|:-------- |:----- |
| uptime   | s     |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour superviser une ressource via NSClient++ API, installez la version Centreon de l'agent NSClient++ sur la ressource supervisée.
Suivez notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur Web / RestAPI** est correcte.

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
dnf install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-windows-nsclient-05-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Windows NSClient API**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-operatingsystems-windows-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Windows-NSClient-05-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                     | Description                                                                                           | Valeur par défaut | Obligatoire |
|:--------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NSCPRESTAPILEGACYPASSWORD | Specify password for old authentification system                                                      |                   |             |
| NSCPRESTAPIPROTO          | Specify https if needed (Default: 'https')                                                            | https             |             |
| NSCPRESTAPIPORT           | Port used (Default: 8443)                                                                             | 8443              |             |
| NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Active-Sessions" label="Active-Sessions">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --arg=show-all    |             |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --arg=show-all    |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Eventlog-Generic" label="Eventlog-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --arg="unique=1"  |             |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --arg=show-all    |             |

</TabItem>
<TabItem value="Logfiles-Generic" label="Logfiles-Generic">

| Macro    | Description                            | Valeur par défaut | Obligatoire |
|:-------- |:-------------------------------------- |:----------------- |:-----------:|
| LOGFILE  | Logfile path                           |                   |      X      |
| TAG      | Tag to use in output and perfdata      |                   |             |
| CRITICAL | Pattern that must raise critical alert |                   |             |
| WARNING  | Pattern that must raise warning alert  |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                         | Valeur par défaut        | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --arg="perf-syntax=used" |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPADDR      | Set the ntp hostname (if not set, we try to find it with w32tm command)                             |                   |             |
| WARNING      | Warning threshold                                                                                   | -1:1              |             |
| CRITICAL     | Critical threshold                                                                                  | -2:2              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro          | Description                                                                                                                                                                                                                                              | Valeur par défaut           | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename} | %{RebootPending} =~ /true/i |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}                           |                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                      |                             |             |

</TabItem>
<TabItem value="Process-generic" label="Process-generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --arg="show-all"  |             |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Macro        | Description                                                                                         | Valeur par défaut        | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --arg="perf-config=none" |             |

</TabItem>
<TabItem value="Services-Generic-Name" label="Services-Generic-Name">

| Macro        | Description                                                                                         | Valeur par défaut        | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --arg="perf-config=none" |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| LANGUAGE                     | Set the language used in the config file (default: 'en')                                                                                             | en                |             |
| FILTERSESSIONNAME            | Filter session name (can be a regexp)                                                                                                            |                   |             |
| CONFIG                       | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |                   |             |
| WARNINGSESSIONSACTIVE        | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSACTIVE       | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSCREATED       | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSCREATED      | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSDISCONNECTED  | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSDISCONNECTED | Thresholds                                                                                                                                       |                   |             |
| WARNINGSESSIONSRECONNECTED   | Thresholds                                                                                                                                       |                   |             |
| CRITICALSESSIONSRECONNECTED  | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                              |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                         | Valeur par défaut        | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --arg="perf-syntax=swap" |             |

</TabItem>
<TabItem value="Task-Generic" label="Task-Generic">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                         | Valeur par défaut           | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERTITLE            | Filter windows updates by title (can be a regexp)                                                   |                             |             |
| EXCLUDETITLE           | Exclude windows updates by title (regexp can be used)                                               |                             |             |
| FILTERMANDATORY        |                                                                                                     |                             |             |
| WARNINGPENDINGUPDATES  | Thresholds                                                                                          |                             |             |
| CRITICALPENDINGUPDATES | Thresholds                                                                                          |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --display-updates |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

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
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin \
	--mode=query \
	--hostname='10.0.0.1' \
	--port='8443' \
	--proto='https' \
	--legacy-password=''  \
	--command=check_centreon_plugins \
	--arg='os::windows::local::plugin' \
	--arg='updates' \
	--arg='\
	--filter-title="" \
	--exclude-title="" \
	--filter-mandatory="" \
	--warning-pending-updates="" \
	--critical-pending-updates="" \
	--verbose \
	--display-updates '
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: windows pending updates: 32 | 'windows.pending.updates.count'=32;;;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API si votre erreur ne correspond pas à l'un des cas suivants.

#### UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string

Si vous recevez ce message, activez le mode ```--debug``` pour visualiser l'exécution détaillée d'un mode:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
  --plugin=apps::nsclient::restapi::plugin \
  --mode=query \
  --hostname='192.168.1.24' \
  --port='8443' \
  --proto='https' \
  --legacy-password='centreon' \
  --http-backend=curl  \
  --curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
  --timeout=30 \
  --command=check_centreon_plugins \
  --arg='os::windows::local::plugin' \
  --arg='sessions' \
  --arg='--filter-sessionname="" \
  --config="scripts/centreon/conf/qwinsta.xml" \
  --language="fr" \
  --debug

UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string, at character offset 724 (before "\x{fffd}u0090RIPH\x{fffd}...") at /usr/lib/centreon/plugins//centreon_nsclient_restapi.pl line 133.
== Info: About to connect() to 192.168.1.24 port 8443 (#0)
== Info:   Trying 192.168.1.24...
== Info: Connected to 192.168.1.24 (192.168.1.24) port 8443 (#0)
.......
Cannot write statefile '/var/lib/centreon/centplugins/windows_sessions_a181a603769c1f98ad927e7367c7aa51_a181a603769c1f98ad927e7367c7aa51'. 
Need write/exec permissions on directory.
```

* Le dossier */var/lib/centreon/centplugins* n'existe pas sur votre serveur Windows, dans ce cas spécifiez un répertoire Windows existant via l'option ```--statefile-dir``` afin de stocker les fichiers de cache du Plugin.

#### "UNKNOWN: 500 Can't connect to x.x.x.x:8443"

Si vous recevez ce message, ajoutez l'option '--http-backend=curl' dans la macro d'hôte *NSCPRESTAPIEXTRAOPTIONS*.


### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                | Modèle de service associé                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/certificates.pm)]          | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/cmdreturn.pm)]               | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| list-certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/listcertificates.pm)] | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/liststorages.pm)]         | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/pendingreboot.pm)]       | OS-Windows-NSClient05-Pending-Reboot-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| query [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/nsclient/restapi/mode/query.pm)]                   | OS-Windows-NSClient05-Counter-Active-Sessions-Restapi-custom<br />OS-Windows-NSClient05-Counter-Generic-Restapi-custom<br />OS-Windows-NSClient05-Cpu-Restapi-custom<br />OS-Windows-NSClient05-Disks-Restapi-custom<br />OS-Windows-NSClient05-Eventlog-Generic-restapi-custom<br />OS-Windows-NSClient05-Files-Generic-Restapi-custom<br />OS-Windows-NSClient05-Logfiles-Generic-Restapi-custom<br />OS-Windows-NSClient05-Memory-Restapi-custom<br />OS-Windows-NSClient05-Process-Generic-Restapi-custom<br />OS-Windows-NSClient05-Services-Auto-Restapi-custom<br />OS-Windows-NSClient05-Services-Generic-Name-Restapi-custom<br />OS-Windows-NSClient05-Swap-Restapi-custom<br />OS-Windows-NSClient05-Task-Generic-Restapi-custom<br />OS-Windows-NSClient05-Uptime-Restapi-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/sessions.pm)]                  | OS-Windows-NSClient05-Sessions-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/ntp.pm)]                           | OS-Windows-NSClient05-Ntp-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/updates.pm)]                    | OS-Windows-NSClient05-Updates-Restapi-custom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

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
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Active-Sessions" label="Active-Sessions">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Counter-Generic" label="Counter-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Eventlog-Generic" label="Eventlog-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Files-Generic" label="Files-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Logfiles-Generic" label="Logfiles-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option         | Description                                                                |
|:---------------|:---------------------------------------------------------------------------|
| --warning      | Warning threshold.                                                         |
| --critical     | Critical threshold.                                                        |
| --ntp-hostname | Set the ntp hostname (if not set, we try to find it with w32tm command).   |
| --ntp-port     | Set the ntp port (Default: 123).                                           |
| --timeout      | Set timeout time for 'w32tm' command execution (Default: 30 sec)           |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Option            | Description                                                                                                                                                                                                                                                 |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (Default: 50 sec)                                                                                                                                                                                                    |
| --no-ps           | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                                                                                       |
| --command         | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                                      |
| --command-path    | Command path (Default: none).                                                                                                                                                                                                                               |
| --command-options | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                                     |
| --ps-display      | Display powershell script.                                                                                                                                                                                                                                  |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                                    |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.   |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.                             |

</TabItem>
<TabItem value="Process-generic" label="Process-generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Services-Auto" label="Services-Auto">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access a webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Services-Generic-Name" label="Services-Generic-Name">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --config                 | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file                                                                                              |
| --language               | Set the language used in config file (default: 'en').                                                                                                                                                                                         |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                                                                                                                 |
| --command-path           | Command path (Default: none).                                                                                                                                                                                                                 |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                                                                                                                        |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                             |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.                                                                                                  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Task-Generic" label="Task-Generic">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                   | Description                                                                                                                              |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                | Set timeout time for command execution (Default: 50 sec)                                                                                 |
| --no-ps                  | Don't encode powershell. To be used with --command and 'type'command.                                                                    |
| --command                | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path           | Command path (Default: none).                                                                                                            |
| --command-options        | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display             | Display powershell script.                                                                                                               |
| --ps-exec-only           | Print powershell output.                                                                                                                 |
| --filter-title           | Filter windows updates by title (can be a regexp).                                                                                       |
| --exclude-title          | Exclude windows updates by title (regexp can be used).                                                                                   |
| --display-updates        | Display updates in verbose output.                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'pending-updates'.                                                                                                   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --http-peer-addr  | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                         |
| --proxyurl        | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                         |
| --proxypac        | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                              |
| --insecure        | Accept insecure SSL connections.                                                                                                                                                                                                                                                            |
| --http-backend    | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                     |
| --ssl-opt         | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                   |
| --curl-opt        | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                            |
| --hostname        | IP Addr/FQDN of the host                                                                                                                                                                                                                                                                    |
| --port            | Port used (Default: 8443)                                                                                                                                                                                                                                                                   |
| --proto           | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                  |
| --credentials     | Specify this option if you access webpage with authentication                                                                                                                                                                                                                               |
| --username        | Specify username for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --password        | Specify password for authentication (Mandatory if --credentials is specified)                                                                                                                                                                                                               |
| --basic           | Specify this option if you access a webpage over basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your webserver.  Specify this option if you access the webpage over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (Use with --credentials)   |
| --legacy-password | Specify password for old authentication system.                                                                                                                                                                                                                                           |
| --timeout         | Threshold for HTTP timeout (Default: 5)                                                                                                                                                                                                                                                     |
| --command         | Set command.                                                                                                                                                                                                                                                                                |
| --unknown-status  | Warning threshold for http response code. (Default: '%{http\_code} \< 200 or %{http\_code} \>= 300')                                                                                                                                                                                        |
| --warning-status  | Warning threshold for http response code.                                                                                                                                                                                                                                                   |
| --critical-status | Critical threshold for http response code.                                                                                                                                                                                                                                                  |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin \
	--mode=query \
	--help
```
