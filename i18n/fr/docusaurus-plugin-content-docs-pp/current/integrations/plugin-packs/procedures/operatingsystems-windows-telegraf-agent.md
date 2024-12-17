---
id: operatingsystems-windows-telegraf-agent
title: Windows Telegraf Agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Telegraf est un agent d'observabilité implémentant le protocole
OpenTelemetry.

> Ce connecteur de supervision est une **preuve de concept**, Centreon ne recommande
> pas sa mise en oeuvre en production.
> Il présente par ailleurs certaines limitations, telles que :
> - la nécessité de redémarrer l'agent pour prendre en compte des changements
> sur la configuration.
> - l'impossibilité de récupérer le message d'information lié au statut du
> service ou de l'hôte (limitation liée au protocole OpenTelemetry).

Vous pouvez consulter [cette page](../getting-started/how-to-guides/telegraf.md) pour plus d'informations sur ce que permet l'intégration avec Telegraf.

## Contenu du pack

### Modèles

Le connecteur de supervision **Windows Telegraf Agent** apporte un modèle d'hôte :

* **OS-Windows-Telegraf-Agent-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Windows-Telegraf-Agent-custom" label="OS-Windows-Telegraf-Agent-custom">

| Alias          | Modèle de service                               | Description                                      |
|:---------------|:------------------------------------------------|:-------------------------------------------------|
| Ntp            | OS-Windows-Telegraf-Ntp-Agent-custom            | Contrôle la synchronisation avec un serveur NTP. |
| Pending-Reboot | OS-Windows-Telegraf-Pending-Reboot-Agent-custom | Contrôle si Windows nécessite un redémarrage.    |
| Sessions       | OS-Windows-Telegraf-Sessions-Agent-custom       | Contrôle le nombre de sessions actives.          |
| Updates        | OS-Windows-Telegraf-Updates-Agent-custom        | Contrôle si des mises à jour sont en attente.    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Windows-Telegraf-Agent-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                 | Modèle de service                                            | Description        |
|:----------------------|:-------------------------------------------------------------|:-------------------|
| Certificates          | OS-Windows-Telegraf-Certificates-Agent-custom | Contrôle les certificats locaux.  |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| certificates.detected.count          | count |
| certificate#certificate.expires.days | d     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Métrique    | Unité |
|:------------|:------|
| offset      | s     |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

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
<TabItem value="Updates" label="Updates">

| Métrique                      | Unité |
|:------------------------------|:------|
| windows.pending.updates.count | count |

</TabItem>
</Tabs>

## Prérequis

### Flux réseau

Deux flux TCP doivent être ouverts depuis l'hôte supervisé vers le collecteur.

| Source         | Destination | Protocole | Port | Objet                                     |
|----------------|-------------|-----------|------|-------------------------------------------|
| Hôte supervisé | Collecteur  | TCP       | 1443 | Obtention de la configuration de Telegraf. |
| Hôte supervisé | Collecteur  | TCP       | 4317 | Envoi des données au format OpenTelemetry. |

### Prérequis système sur le collecteur

> Rappel: pour pouvoir utiliser l'agent Telegraf, vous devez utiliser un collecteur ayant au
minimum la version `24.04.2` de `centreon-engine`. L'agent Telegraf devra se configurer via une requête HTTPS adressée à Centreon Engine.

1. Pour cela il faut commencer par obtenir un certificat valide pour le collecteur, ou le générer, par exemple avec la commande ci-dessous :

> Dans les prérequis suivants, remplacez `${HOSTNAME}` par le FQDN du collecteur si la valeur de cette variable ne correspond pas. 

```bash
openssl req -new -subj "/CN=${HOSTNAME}" -addext "subjectAltName = DNS:${HOSTNAME}" -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout /etc/centreon-engine/conf-server.key -out /etc/centreon-engine/conf-server.crt
chown centreon-engine: /etc/centreon-engine/conf-*
```

> L'option `-days 365` limite la durée de validité du certificat à un an. Vous pouvez adapter celle-ci en fonction de vos préférences concernant la sécurité ou la maintenabilité.

2. Puis indiquez à Engine les informations de connexion qu'il devra fournir à l'agent Telegraf afin qu'il puisse envoyer des informations à Engine.

```bash
cat > /etc/centreon-engine/otl_server.json <<EOF
{
    "otel_server": {
        "host": "0.0.0.0",
        "port": 4317,
        "encryption": true,
        "certificate_path": "/etc/centreon-engine/conf-server.crt",
        "key_path": "/etc/centreon-engine/conf-server.key"
    },
    "max_length_grpc_log": 0,
    "telegraf_conf_server": {
        "http_server" : {
            "port": 1443,
            "encryption": true,
            "certificate_path": "/etc/centreon-engine/conf-server.crt",
            "key_path": "/etc/centreon-engine/conf-server.key"
        },
        "engine_otel_endpoint": "${HOSTNAME}:4317",
        "check_interval":60
    }
}
EOF
chown centreon-engine: /etc/centreon-engine/otl_server.json
```

### Configuration de Centreon Engine

1. Dans le menu **Configuration > Collecteurs> Configuration de Centreon Engine**, sous l'onglet **Données**, ajoutez une entrée dans les modules Broker à charger et inscrivez-y la directive `/usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json`. Sauvegardez le formulaire.

2. Exportez la configuration du collecteur en sélectionnant l'option **Redémarrer**.

### Prérequis système sur l'hôte à superviser

La procédure officielle d'installation de Telegraf se trouve [ici](https://docs.influxdata.com/telegraf/v1/install/?t=Windows)
mais voici ci-dessous les étapes nécessaires.

#### Installation de Telegraf

1. Téléchargez et désarchivez l'agent :

```powershell
wget https://dl.influxdata.com/telegraf/releases/telegraf-1.30.1_windows_amd64.zip -UseBasicParsing -OutFile telegraf-1.30.1_windows_amd64.zip
Expand-Archive .\telegraf-1.30.1_windows_amd64.zip -DestinationPath 'C:\Program Files\InfluxData\telegraf\'
```

2. Installez le service :

```cmd
"C:\Program Files\InfluxData\telegraf\telegraf-1.30.3\telegraf.exe" --config https://<poller_ip_address>:1443/engine?host=<windows_server_name> --service install
```

> Les éléments **poller_ip_address** et **windows_server_name** doivent être remplacés par l'adresse ou le FQDN du collecteur (en étant cohérent avec la valeur entrée plus haut dans le serveur de configuration d'Engine) et le nom de l'hôte sous lequel le serveur Windows sera connu de Centreon.

#### Téléchargement de centreon_plugins.exe

Téléchargez le plugin **centreon_plugins.exe** de la release la plus récente disponible [ici](https://github.com/centreon/centreon-nsclient-build/releases)
et déposez-le au même emplacement que l'agent Telegraf (soit `"C:\Program Files\InfluxData\telegraf\telegraf-1.30.3\"`)
si la procédure a été suivie à la lettre. 

#### Import du certificat du poller

1. Ouvrez Edge.
2. Saisissez `https://poller_ip_address:1443` dans la barre d'URL.
3. Acceptez le certificat. Normalement le navigateur affiche `No host service found from get parameters`.
5. Cliquez sur le certificat à gauche de la barre d'URL.
6. Allez dans **Détails**.
7. Exportez le certificat.
8. Ouvrez l'explorateur de fichiers.
9. Faites un clic droit sur le certificat depuis l'emplacement où il a été téléchargé.
10. Installez le certificat.
11. Sélectionnez **Ordinateur local** puis **Suivant**.
12. Sélectionnez **Placer tous les certificats dans le magasin suivant** puis **Parcourir**.
13. Sélectionnez **Autorités de certification racines de confiance** puis **OK**.
14. Cliquez sur **Suivant** puis sur **Terminer**.

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
dnf install centreon-pack-operatingsystems-windows-telegraf-agent
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-telegraf-agent
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-windows-telegraf-agent
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-windows-telegraf-agent
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Windows Telegraf Agent**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

3. Créez le connecteur suivant :

Dans le menu **Configuration > Commandes > Connecteurs**, cliquez sur **Ajouter** puis saisissez les champs suivants :

| Paramètre                 | Valeur                                                                                                                                                                                                                           |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nom du connecteur         | Telegraf Agent                                                                                                                                                                                                                   |
| Description du connecteur | Telegraf Agent                                                                                                                                                                                                                   |
| Ligne de commande         | `opentelemetry --processor=nagios_telegraf --extractor=attributes --host_path=resourceMetrics.scopeMetrics.metrics.dataPoints.attributes.host --service_path=resourceMetrics.scopeMetrics.metrics.dataPoints.attributes.service` |
| Utilisé par la commande   | Selectionner toutes les commandes dont le nom correspond à `OS-Windows-Telegraf-Agent-*`                                                                                                                                                                  |
| Statut du connecteur     | Activé                                                                                                                                                                                                                           |

### Plugin

Ce connecteur de supervision s'appuie sur une intégration prise en charge par Centreon Engine et ne requiert pas de plugin.

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Windows-Telegraf-Agent-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                              | Valeur par défaut                                      | Obligatoire |
|:----------------|:---------------------------------------------------------|:-------------------------------------------------------|:-----------:|
| SYSTEMLANGUAGE  | Language installed on the Windows system (default: 'en') | en                                                     |             |
| TELEGRAFPLUGINS | Path where the centreon_plugins.exe plugin can be found. | `/Program\\ Files/InfluxData/telegraf/telegraf-1.30.3` |      X      |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

6. Redémarrez le service **Telegraf Data Collector Service** sur le serveur Windows. Les statuts de l'hôte et des
services se mettront à jour dans les minutes qui suivront.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Macro                        | Description                                                                                                                                                 | Valeur par défaut | Obligatoire |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSUBJECT                | Filter certificate by subject (can be a regexp).                                                                                                            |                   |             |
| FILTERTHUMBPRINT             | Filter certificate by thumbprint (can be a regexp).                                                                                                         |                   |             |
| FILTERPATH                   | Filter certificate by path (can be a regexp).                                                                                                               |                   |             |
| THRESHOLDSUNIT               | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. | d                 |             |
| WARNINGCERTIFICATEEXPIRES    | Thresholds.                                                                                                                                                 | 60:               |             |
| CRITICALCERTIFICATEEXPIRES   | Thresholds.                                                                                                                                                 | 30:               |             |
| WARNINGCERTIFICATESDETECTED  | Thresholds.                                                                                                                                                 |                   |             |
| CRITICALCERTIFICATESDETECTED | Thresholds.                                                                                                                                                 |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                    |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro          | Description                                                                                                                              | Valeur par défaut | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPHOSTNAME    | Set the NTP server to use (if not set, we try to find it with w32tm command).                                                            |                   |             |
| NTPPORT        | Set the NTP port (default: 123).                                                                                                         |                   |             |
| WARNINGOFFSET  | Thresholds.                                                                                                                              | -1:1              |             |
| CRITICALOFFSET | Thresholds.                                                                                                                              | -2:2              |             |
| TIMEOUT        | Set timeout time for 'w32tm' command execution (default: 30 sec).                                                                        | 10                |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro          | Description                                                                                                                                                                                                                                              | Valeur par défaut             | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%\{RebootPending\} =~ /true/i'). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\} | `%{RebootPending} =~ /true/i` |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\}                           |                               |             |
| TIMEOUT        | Set timeout time for command execution (default: 50 sec).                                                                                                                                                                                                | 10                            |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                 |                               |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                               | Description                                                                                                                                          | Valeur par défaut | Obligatoire |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSESSIONNAME                   | Filter session name (can be a regexp).                                                                                                               |                   |             |
| CONFIG                              | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |                   |             |
| WARNINGSESSIONSACTIVE               | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSACTIVE              | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSCREATED              | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSCREATED             | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSDISCONNECTED         | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSDISCONNECTED        | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSRECONNECTED          | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSRECONNECTED         | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSDISCONNECTEDCURRENT  | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSDISCONNECTEDCURRENT | Thresholds.                                                                                                                                          |                   |             |
| TIMEOUT                             | Timeout in seconds for the command (default: 30).                                                                                                    | 10                |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)             |                   |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                                                              | Valeur par défaut  | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGPENDINGUPDATES  | Thresholds                                                                                                                               | 1                  |             |
| CRITICALPENDINGUPDATES | Thresholds                                                                                                                               |                    |             |
| TIMEOUT                | Set timeout time for command execution (default: 50 sec).                                                                                | 30                 |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --filter-mandatory |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Vous pouvez tester que le plugin parvient bien à superviser votre serveur Windows en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```cmd
"\Program Files\InfluxData\telegraf\telegraf-1.30.3\centreon_plugins.exe" --plugin os::windows::local::plugin --mode sessions --language='fr' --timeout='30' --use-new-perfdata
```

> NB : Cette commande ne peut pas s'exécuter sur les collecteurs, il faut la lancer directement sur le serveur Windows.

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Sessions created: 0, disconnected: 0, reconnected : 0, current active : 1, current disconnected : 1 | 'sessions.created.total.count'=0;;;0; 'sessions.disconnected.total.count'=0;;;0; 'sessions.reconnected.total.count'=0;;;0; 'sessions.active.current.count'=1;;;0; 'sessions.disconnected.current.count'=1;;;0;
```

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Le plugin apporte les modes suivants :

| Mode                                                                                                                          | Modèle de service associé                       |
|:------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/certificates.pm)]    | OS-Windows-Telegraf-Certificates-Agent-custom   |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/pendingreboot.pm)] | OS-Windows-Telegraf-Pending-Reboot-Agent-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/sessions.pm)]            | OS-Windows-Telegraf-Sessions-Agent-custom       |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/ntp.pm)]                     | OS-Windows-Telegraf-Ntp-Agent-custom            |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/updates.pm)]              | OS-Windows-Telegraf-Updates-Agent-custom        |

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
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
<TabItem value="Certificates" label="Certificates">

| Option                           | Description                                                                                                                                                 |
|:---------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-thumbprint              | Filter certificate by thumbprint (can be a regexp).                                                                                                         |
| --filter-subject                 | Filter certificate by subject (can be a regexp).                                                                                                            |
| --filter-path                    | Filter certificate by path (can be a regexp).                                                                                                               |
| --unit                           | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. |
| --warning-certificates-detected  | Thresholds.                                                                                                                                                 |
| --critical-certificates-detected | Thresholds.                                                                                                                                         |
| --warning-certificate-expires    | Thresholds.                                                                                                                                                 |
| --critical-certificate-expires   | Thresholds.                                                                                                                                         |
| --no-ps                          | Don't encode powershell. To be used with --command and 'type' command.                                                                                      |
| --command                        | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                      |
| --command-path                   | Command path (default: none).                                                                                                                               |
| --command-options                | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                     |
| --ps-display                     | Display powershell script.                                                                                                                                  |
| --ps-exec-only                   | Print powershell output.                                                                                                                                    |

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

| Option            | Description                                                                                                                                                                                                                                               |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (Default: 50 sec)                                                                                                                                                                                                  |
| --no-ps           | Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                                                    |
| --command         | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                                    |
| --command-path    | Command path (Default: none).                                                                                                                                                                                                                             |
| --command-options | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                                   |
| --ps-display      | Display powershell script.                                                                                                                                                                                                                                |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                                  |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%\{RebootPending\} =~ /true/i'). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\}. |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %\{RebootPending\}, %\{WindowsUpdate\}, %\{CBServicing\}, %\{CCMClientSDK\}, %\{PendFileRename\}, %\{PendComputerRename\}.                           |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --config                 | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file                                                                                              |
| --language               | Set the language used in config file (default: 'en').                                                                                                                                                                                         |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                                                                                                                 |
| --command-path           | Command path (Default: none).                                                                                                                                                                                                                 |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                                                                                                                        |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                             |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.                                                                                                  |

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
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
"\Program Files\InfluxData\telegraf\telegraf-1.30.3\centreon_plugins.exe" --plugin=os::windows::local::plugin --mode=certificates --help
```
