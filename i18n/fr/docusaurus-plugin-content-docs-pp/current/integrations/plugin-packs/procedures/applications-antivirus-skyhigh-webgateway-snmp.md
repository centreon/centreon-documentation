---
id: applications-antivirus-skyhigh-webgateway-snmp
title: Skyhigh Security Web Gateway SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Skyhigh Web Gateway SNMP** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Skyhigh Web Gateway SNMP** apporte un modèle d'hôte :

* **App-Antivirus-Skyhigh-Webgateway-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Antivirus-Skyhigh-Webgateway-SNMP-custom" label="App-Antivirus-Skyhigh-Webgateway-SNMP-custom">

| Alias            | Modèle de service                                             | Description                                                                                                        |
|:-----------------|:--------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
| Clients          | App-Antivirus-Skyhigh-Webgateway-Clients-SNMP-custom          | Contrôle le nombre de clients connectés, le nombre de sockets réseau ouverts                                         |
| Connections      | App-Antivirus-Skyhigh-Webgateway-Connections-SNMP-custom      | Contrôle le nombre de connexions légitimes et bloquées                                                             |
| Detections       | App-Antivirus-Skyhigh-Webgateway-Detections-SNMP-custom       | Contrôle le nombre de malwares détectés, par catégories                                                              |
| Http-Statistics  | App-Antivirus-Skyhigh-Webgateway-Http-Statistics-SNMP-custom  | Contrôle le nombre de requêtes et le trafic réseau HTTP client/proxy, serveur/proxy, proxy/client et proxy/serveur  |
| Https-Statistics | App-Antivirus-Skyhigh-Webgateway-Https-Statistics-SNMP-custom | Contrôle le nombre de requêtes et le trafic réseau HTTPS client/proxy, serveur/proxy, proxy/client et proxy/serveur |
| Versions         | App-Antivirus-Skyhigh-Webgateway-Versions-SNMP-custom         | Contrôle les versions des bases de données de signatures                                                            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Antivirus-Skyhigh-Webgateway-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias          | Modèle de service                                           | Description                                                                              |
|:---------------|:------------------------------------------------------------|:-----------------------------------------------------------------------------------------|
| Ftp-Statistics | App-Antivirus-Skyhigh-Webgateway-Ftp-Statistics-SNMP-custom | Contrôle le trafic réseau FTP client/proxy, serveur/proxy, proxy/client et proxy/serveur |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                                   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **App-Antivirus-Skyhigh-Webgateway-SNMP-custom**. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Nom                     | Unité   |
|:------------------------|:--------|
| clients.connected.count | clients |
| sockets.connected.count | sockets |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Connections" label="Connections">

| Nom                                       | Unité         |
|:------------------------------------------|:--------------|
| connections.legitimate.persecond          | connections/s |
| connections.blocked.persecond             | connections/s |
| connections.antimalware.blocked.persecond | connections/s |
| connections.mediafilter.blocked.persecond | connections/s |
| connections.urlfilter.blocked.persecond   | connections/s |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Detections" label="Detections">

| Nom                                               | Unité        |
|:--------------------------------------------------|:-------------|
| malwares.detected.persecond                       | detections/s |
| *categories*#category.malwares.detected.persecond | detections/s |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Ftp-Statistics" label="Ftp-Statistics">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| ftp.traffic.client2proxy.bitspersecond | b/s   |
| ftp.traffic.server2proxy.bitspersecond | b/s   |
| ftp.traffic.proxy2client.bitspersecond | b/s   |
| ftp.traffic.proxy2server.bitspersecond | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Http-Statistics" label="Http-Statistics">

| Nom                                     | Unité      |
|:----------------------------------------|:-----------|
| http.requests.persecond                 | requests/s |
| http.traffic.client2proxy.bitspersecond | b/s        |
| http.traffic.server2proxy.bitspersecond | b/s        |
| http.traffic.proxy2client.bitspersecond | b/s        |
| http.traffic.proxy2server.bitspersecond | b/s        |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Https-Statistics" label="Https-Statistics">

| Nom                                      | Unité      |
|:-----------------------------------------|:-----------|
| https.requests.persecond                 | requests/s |
| https.traffic.client2proxy.bitspersecond | b/s        |
| https.traffic.server2proxy.bitspersecond | b/s        |
| https.traffic.proxy2client.bitspersecond | b/s        |
| https.traffic.proxy2server.bitspersecond | b/s        |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Versions" label="Versions">

| Nom               | Unité |
|:------------------|:------|
| dat-version       | N/A   |
| tsdb-version      | N/A   |
| proactive-version | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

L'agent SNMP doit être activé et configuré sur l'équipement. Veuillez vous référer à la documentation officielle du constructeur/éditeur. 
Il se peut que votre équipement nécessite qu'une liste d'adresses autorisées à l'interroger soit paramétrée. 
Veillez à ce que les adresses des collecteurs Centreon y figurent bien.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers la ressource supervisée.

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
dnf install centreon-pack-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Skyhigh Web Gateway SNMP**
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
dnf install centreon-plugin-Applications-Antivirus-Skyhigh-Webgateway-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Antivirus-Skyhigh-Webgateway-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-antivirus-skyhigh-webgateway-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Antivirus-Skyhigh-Webgateway-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Antivirus-Skyhigh-Webgateway-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Macro           | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS  | Only display some counters (regexp can be used). (example: --filter-counters='clients')                                                          |                   |             |
| WARNINGCLIENTS  | Threshold                                                                                                                                        |                   |             |
| CRITICALCLIENTS | Threshold                                                                                                                                        |                   |             |
| WARNINGSOCKETS  | Threshold                                                                                                                                        |                   |             |
| CRITICALSOCKETS | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Connections" label="Connections">

| Macro               | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS      | Only display some counters (regexp can be used). (example: --filter-counters='blocked')                                                          |                   |             |
| WARNINGBLOCKED      | Threshold                                                                                                                                        |                   |             |
| CRITICALBLOCKED     | Threshold                                                                                                                                        |                   |             |
| WARNINGBLOCKEDBYAM  | Threshold                                                                                                                                        |                   |             |
| CRITICALBLOCKEDBYAM | Threshold                                                                                                                                        |                   |             |
| WARNINGBLOCKEDBYMF  | Threshold                                                                                                                                        |                   |             |
| CRITICALBLOCKEDBYMF | Threshold                                                                                                                                        |                   |             |
| WARNINGBLOCKEDBYUF  | Threshold                                                                                                                                        |                   |             |
| CRITICALBLOCKEDBYUF | Threshold                                                                                                                                        |                   |             |
| WARNINGLEGITIMATE   | Threshold                                                                                                                                        |                   |             |
| CRITICALLEGITIMATE  | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Detections" label="Detections">

| Macro                   | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS          | Only display some counters (regexp can be used). (example: --filter-counters='^(?!(category)$)')                                                 |                   |             |
| WARNINGCATEGORY         | Threshold                                                                                                                                        |                   |             |
| CRITICALCATEGORY        | Threshold                                                                                                                                        |                   |             |
| WARNINGMALWAREDETECTED  | Threshold                                                                                                                                        |                   |             |
| CRITICALMALWAREDETECTED | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Ftp-Statistics" label="Ftp-Statistics">

| Macro                 | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS        | Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                                           |                   |             |
| WARNINGCLIENTTOPROXY  | Threshold                                                                                                                                        |                   |             |
| CRITICALCLIENTTOPROXY | Threshold                                                                                                                                        |                   |             |
| WARNINGPROXYTOCLIENT  | Threshold                                                                                                                                        |                   |             |
| CRITICALPROXYTOCLIENT | Threshold                                                                                                                                        |                   |             |
| WARNINGPROXYTOSERVER  | Threshold                                                                                                                                        |                   |             |
| CRITICALPROXYTOSERVER | Threshold                                                                                                                                        |                   |             |
| WARNINGSERVERTOPROXY  | Threshold                                                                                                                                        |                   |             |
| CRITICALSERVERTOPROXY | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Http-Statistics" label="Http-Statistics">

| Macro                 | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS        | Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                                           |                   |             |
| WARNINGCLIENTTOPROXY  | Threshold                                                                                                                                        |                   |             |
| CRITICALCLIENTTOPROXY | Threshold                                                                                                                                        |                   |             |
| WARNINGPROXYTOCLIENT  | Threshold                                                                                                                                        |                   |             |
| CRITICALPROXYTOCLIENT | Threshold                                                                                                                                        |                   |             |
| WARNINGPROXYTOSERVER  | Threshold                                                                                                                                        |                   |             |
| CRITICALPROXYTOSERVER | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTS       | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTS      | Threshold                                                                                                                                        |                   |             |
| WARNINGSERVERTOPROXY  | Threshold                                                                                                                                        |                   |             |
| CRITICALSERVERTOPROXY | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Https-Statistics" label="Https-Statistics">

| Macro                 | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS        | Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                                           |                   |             |
| WARNINGCLIENTTOPROXY  | Threshold                                                                                                                                        |                   |             |
| CRITICALCLIENTTOPROXY | Threshold                                                                                                                                        |                   |             |
| WARNINGPROXYTOCLIENT  | Threshold                                                                                                                                        |                   |             |
| CRITICALPROXYTOCLIENT | Threshold                                                                                                                                        |                   |             |
| WARNINGPROXYTOSERVER  | Threshold                                                                                                                                        |                   |             |
| CRITICALPROXYTOSERVER | Threshold                                                                                                                                        |                   |             |
| WARNINGREQUESTS       | Threshold                                                                                                                                        |                   |             |
| CRITICALREQUESTS      | Threshold                                                                                                                                        |                   |             |
| WARNINGSERVERTOPROXY  | Threshold                                                                                                                                        |                   |             |
| CRITICALSERVERTOPROXY | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Versions" label="Versions">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS           | Only display some counters (regexp can be used). (example: --filter-counters='dat')                                                              |                   |             |
| WARNINGDATVERSION        | Threshold                                                                                                                                        |                   |             |
| CRITICALDATVERSION       | Threshold                                                                                                                                        |                   |             |
| WARNINGPROACTIVEVERSION  | Threshold                                                                                                                                        |                   |             |
| CRITICALPROACTIVEVERSION | Threshold                                                                                                                                        |                   |             |
| WARNINGTSDBVERSION       | Threshold                                                                                                                                        |                   |             |
| CRITICALTSDBVERSION      | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_skyhigh_webgateway_snmp.pl \
	--plugin=apps::antivirus::skyhigh::webgateway::snmp::plugin \
	--mode=https-statistics \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-counters='' \
	--warning-requests='' \
	--critical-requests='' \
	--warning-client-to-proxy='' \
	--critical-client-to-proxy='' \
	--warning-server-to-proxy='' \
	--critical-server-to-proxy='' \
	--warning-proxy-to-client='' \
	--critical-proxy-to-client='' \
	--warning-proxy-to-server='' \
	--critical-proxy-to-server='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: HTTPS Requests (per sec): 93911 from client to proxy: 32679 32679/s from server to proxy: 88873 88873/s from proxy to client: 73178 73178/s from proxy to server: 38824 38824/s | 'https.requests.persecond'=93911requests/s;;;0; 'https.traffic.client2proxy.bitspersecond'=32679b/s;;;0; 'https.traffic.server2proxy.bitspersecond'=88873b/s;;;0; 'https.traffic.proxy2client.bitspersecond'=73178b/s;;;0; 'https.traffic.proxy2server.bitspersecond'=38824b/s;;;0; 
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
/usr/lib/centreon/plugins/centreon_skyhigh_webgateway_snmp.pl \
	--plugin=apps::antivirus::skyhigh::webgateway::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                    | Modèle de service associé                                     |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------|
| clients [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/clients.pm)]                  | App-Antivirus-Skyhigh-Webgateway-Clients-SNMP-custom          |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/connections.pm)]          | App-Antivirus-Skyhigh-Webgateway-Connections-SNMP-custom      |
| detections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/detections.pm)]            | App-Antivirus-Skyhigh-Webgateway-Detections-SNMP-custom       |
| ftp-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/ftpstatistics.pm)]     | App-Antivirus-Skyhigh-Webgateway-Ftp-Statistics-SNMP-custom   |
| http-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/httpstatistics.pm)]   | App-Antivirus-Skyhigh-Webgateway-Http-Statistics-SNMP-custom  |
| https-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/httpsstatistics.pm)] | App-Antivirus-Skyhigh-Webgateway-Https-Statistics-SNMP-custom |
| system [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/system.pm)]                    | Not used in this Monitoring Connector                         |
| versions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/antivirus/skyhigh/webgateway/snmp/mode/versions.pm)]                | App-Antivirus-Skyhigh-Webgateway-Versions-SNMP-custom         |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-community                           |   SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-version                             |   Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-port                                |   UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-timeout                             |   Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-retries                             |   Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --maxrepetitions                           |   Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --subsetleef                               |   How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-autoreduce                          |    Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-force-getnext                       |   Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-cache-file                          |   Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-username                            |   SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authpassphrase                           |   SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authprotocol                             |   SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --privpassphrase                           |   SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --privprotocol                             |   SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --contextname                              |   SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --contextengineid                          |   SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given  as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --securityengineid                         |   SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-errors-exit                         |   Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-tls-transport                       |   Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-our-identity                    |   X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-tls-their-identity                  |   X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-their-hostname                  |   Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-trust-cert                      |   A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also  define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Option            | Description                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='clients')   |
| --warning-*       |   Warning threshold. Can be: 'clients', 'sockets'.                                          |
| --critical-*      |   Critical threshold. Can be: 'clients', 'sockets'.                                         |

</TabItem>
<TabItem value="Connections" label="Connections">

| Option            | Description                                                                                                                                                                                     |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='blocked')                                                                                                       |
| --warning-*       |   Warning threshold. Can be: 'legitimate', 'blocked', 'blocked-by-am' for blocked by anti malware , 'blocked-by-mf' for blocked by media Filter, 'blocked-by-uf' for blocked by URL filter.     |
| --critical-*      |   Critical threshold. Can be: 'legitimate', 'blocked', 'blocked-by-am' for blocked by anti malware , 'blocked-by-mf' for blocked by media Filter, 'blocked-by-uf' for blocked by URL filter.    |

</TabItem>
<TabItem value="Detections" label="Detections">

| Option            | Description                                                                                          |
|:------------------|:-----------------------------------------------------------------------------------------------------|
| --filter-name     |   Filter category name (can be a regexp).                                                            |
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='^(?!(category)$)')   |
| --warning-*       |   Warning threshold. Can be: 'malware-detected', 'category'                                          |
| --critical-*      |   Critical threshold. Can be: 'malware-detected', 'category'                                         |

</TabItem>
<TabItem value="Ftp-Statistics" label="Ftp-Statistics">

| Option            | Description                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                     |
| --warning-*       |   Warning threshold. Can be: 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.     |
| --critical-*      |   Critical threshold. Can be: 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.    |

</TabItem>
<TabItem value="Http-Statistics" label="Http-Statistics">

| Option            | Description                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                |
| --warning-*       |   Warning threshold. Can be: 'request', 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.     |
| --critical-*      |   Critical threshold. Can be: 'request', 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.    |

</TabItem>
<TabItem value="Https-Statistics" label="Https-Statistics">

| Option            | Description                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). (example: --filter-counters='^proxy')                                |
| --warning-*       |   Warning threshold. Can be: 'request', 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.     |
| --critical-*      |   Critical threshold. Can be: 'request', 'client-to-proxy', 'server-to-proxy', 'proxy-to-client', 'proxy-to-server'.    |

</TabItem>
<TabItem value="Versions" label="Versions">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters      |   Only display some counters (regexp can be used). (example: --filter-counters='dat')                                                                                                                                                           |
| --warning-*            |   Warning threshold on last update. Can be: 'dat-version', 'tsdb-version' for TrustedSource Database Version, 'proactive-version' for ProActive Database Version.                                                                               |
| --critical-*           |   Critical threshold on last update. Can be: 'dat-version', 'tsdb-version' for TrustedSource Database Version, 'proactive-version' for ProActive Database Version.                                                                              |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_skyhigh_webgateway_snmp.pl \
	--plugin=apps::antivirus::skyhigh::webgateway::snmp::plugin \
	--mode=https-statistics \
	--help
```