---
id: applications-sccm-nsclient
title: Microsoft SCCM
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

System Center Configuration Manager (anciennement Microsoft Systems Management Server ou SMS) est un logiciel de gestion de système
édité par Microsoft. Il est destiné à gérer de grands parcs d’ordinateurs sur systèmes Windows. Il permet la prise de main à distance,
la gestion de correctifs, l’automatisation de tâches, la télédistribution d’applications, l’inventaire matériel et logiciel,
la gestion de la conformité et l’administration des politiques de sécurité.

Le Plugin-Pack Centreon *Microsoft SCCM* permet de contrôler l'état d'une infrastructure SCCM par l'utilisation de l'agent *centreon-nsclient*
pour Windows. Les deux méthodes de connexion à l'agent, NRPE & RestAPI, sont supportées.

## Contenu du Plugin-Pack

### Objets supervisés

* Databases
* Sites

### Métriques collectées

<Tabs groupId="operating-systems">
<TabItem value="databasereplicationstatus" label="databasereplicationstatus">

| Metric name              | Description                    |
| :----------------------- | :----------------------------- |
| link-status              | Status of the replication link |
| site-status              | Status of the site replication |

</TabItem>
<TabItem value="sitestatus" label="sitestatus">

| Metric name                 | Description                    |
| :-------------------------- | :----------------------------- |
| status                      | Operational status of the site |

</TabItem>
</Tabs>

## Prérequis

Le Plugin Centreon pour Microsoft SCCM est inclus dans l'agent *centreon-nsclient* et est exécuté localement par ce dernier.
Pour ce faire, l'agent *centreon-nsclient* doit être installé et configuré sur les serveurs cible de l'infrastructure SCCM (ceux où la console SCCM Admin est installée).
Vous pouvez utiliser au choix les méthodes de connexion NRPE & RestAPI depuis le Collecteur Centreon pour interroger l'agent.
Rendez-vous sur la documentation associée pour plus d'informations sur l'agent et ses différentes méthodes de connexion:

* [NRPE](operatingsystems-windows-nsclient-05-nrpe)
* [RestAPI](operatingsystems-windows-nsclient-05-restapi)

## Installation

<Tabs groupId="operating-systems">
<TabItem value="online" label="Online License">

1. Selon la méthode de supervision choisie (NRPE ou RestAPI), installer le Plugin dédié sur chaque collecteur Centreon devant
superviser les ressources *Microsoft SCCM* via l'agent *centreon-nsclient*:

* NRPE

```bash
yum install centreon-nrpe-plugin
```

* RestAPI

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Microsoft SCCM*
depuis la page "Configuration > Plugin Packs > Gestionnaire"

</TabItem>
<TabItem value="offline" label="Offline License">

1. Selon la méthode de supervision choisie (NRPE ou RestAPI), installer le Plugin dédié sur chaque collecteur Centreon devant
superviser les ressources *Microsoft SCCM* via l'agent *centreon-nsclient*:

* NRPE

```bash
yum install centreon-nrpe-plugin
```

* RestAPI

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-sccm-nsclient
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Microsoft SCCM*
depuis la page "Configuration > Plugin Packs > Gestionnaire"

</TabItem>
</Tabs>

## Configuration

* Sur l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Renseignez l'adresse IP du serveur SCCM cible et appliquez le Modèle d'Hôte adapté à votre configuration:
* *App-Sccm-NRPE-custom* pour NRPE
* *App-Sccm-NSClient-05-Restapi-custom* pour RestAPI
* Selon le Modèle sélectionné, remplissez les Macros d'Hôte associées:

<Tabs groupId="operating-systems">
<TabItem value="AppSccmNRPEcustom" label="AppSccmNRPEcustom">

| Mandatory | Name             | Description                                                                         |
|:----------|:-----------------|:------------------------------------------------------------------------------------|
| X         | NRPECLIENT       | NRPE Plugin binary to use (Default: 'check_centreon_nrpe')                          |
| X         | NRPEPORT         | NRPE Port of the target server (Default: '5666')                                    |
| X         | NRPETIMEOUT      | Timeout value (Default: '30')                                                       |
|           | NRPEEXTRAOPTIONS | Any extra option you may want to add to every command\_line (Default: '-u -m 8192') |

</TabItem>
<TabItem value="AppSccmNSClient05Restapicustom" label="AppSccmNSClient05Restapicustom">

| Mandatory | Name                      | Description                                           |
|:----------|:--------------------------|:------------------------------------------------------|
| X         | NSCPRESTAPIPORT           | NSClient++ RestAPI port (Default: '8443')             |
| X         | NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use (Default: 'https') |
|           | NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant  |

</TabItem>
</Tabs>

* Sauvegarder puis exporter la nouvelle configuration

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

<Tabs groupId="operating-systems">
<TabItem value="NRPE" label="NRPE">

```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe \
-H 10.0.0.1 \
-p 5666 \
-t 30 \
-u -m 8192 \
-c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status' '--critical-status="%{status} eq FAILED"'
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Site 'MySite' status is 'ACTIVE' [Type: PRIMARY] [Mode: 'Unknown'] |
```

Dans cet exemple, la commande vise à interroger un agent *centreon-nsclient* en utilisant le protocole NRPE (```/usr/lib64/nagios/plugins/check_centreon_nrpe```)
et les paramètres de connexion associés définis dans les Macros d'Hôte (```-p 5666 -t 30 -u -m 8192```).
L'agent va alors exécuter localement le mode *site-status* du Plugin *SCCM* integré dans *centreon-nsclient*.
(```-c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status'```).

Une alarme de type CRITICAL sera déclenchée si le status *site SCCM* est reporté en état *FAILED* (```--critical-status="%{status} eq FAILED"```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe -c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status' '--help'
```

</TabItem>
<TabItem value="RestAPI" label="RestAPI">

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
--plugin=apps::nsclient::restapi::plugin  \
--mode=query  \
--hostname=10.0.0.1  \
--port='8443'  \
--proto='https'  \
--legacy-password='centreon' \
--command=check_centreon_plugins  \
--arg='apps::sccm::local::plugin'  \
--arg='site-status' \
--arg='--critical-status="%{status} eq FAILED"'

```
La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Site 'MySite' status is 'ACTIVE' [Type: PRIMARY] [Mode: 'Unknown'] |
```

Dans cet exemple, la commande vise à interroger un agent *centreon-nsclient* en utilisant la méthode de connexion RestAPI
(```--plugin=apps::nsclient::restapi::plugin --mode=query```) et les paramètres de connexion associés définis dans les Macros d'Hôte
(```--port='8443' --proto='https' --legacy-password='centreon'```). L'agent va alors exécuter localement le mode *site-status*
du Plugin *SCCM* integré dans *centreon-nsclient* (```--command=check_centreon_plugins --arg='apps::sccm::local::plugin' --arg='site-status'```).

Une alarme de type CRITICAL sera déclenchée si le status *site SCCM* est reporté en état *FAILED* (```--arg='--critical-status="%{status} eq FAILED"'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl --plugin=apps::nsclient::restapi::plugin --mode=query --command=check_centreon_plugins --arg='apps::sccm::local::plugin' --arg='site-status' --arg='--help'
```

</TabItem>
</Tabs>
