---
id: network-cisco-callmanager-sxml
title: Cisco Call Manager SXML
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

En utilisant le SXML, ce connecteur de supervision Cisco Call Manager, supervise les alertes du composant Cisco Unified Communications.

## Contenu du connecteur de supervision

### Objets supervisés

* Alertes

### Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officielle 
de Cisco Callmanager : https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name                      | Description                         | Unit  |
| :------------------------------- | :---------------------------------- | :---- |
| alerts.total.count               | Total number of alerts              | count |
| severity-$alerts.severity.count  | Number of different severities      | count |

</TabItem>
</Tabs>

## Prérequis

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources Cisco Callmanager :

```bash
yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch
```

2. Sur l'interface Web de Centreon, installer le connecteur de supervision *Cisco Callmanager SXML* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources Cisco Callmanager :

```bash
yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch
```

2. Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:

```bash
yum install centreon-pack-network-cisco-callmanager-sxml.noarch
```

3. Sur l'interface Web de Centreon, installer le connecteur de supervision *Cisco Callmanager SXML* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
</Tabs>

## Configuration

Ce connecteur de supervision est conçu de manière à avoir dans Centreon un hôte par environnement Cisco Callmanager
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *Net-Cisco-Callmanager-Sxml-custom*.
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Name                     | Description                                         |
| :---------- | :----------------------- | :-------------------------------------------------- |
| X           | CUCMSXMLAPIPORT          | Port used. Default is 8443                          |          
| X           | CUCMSXMLAPIPROTO         | Protocol used. Default is https                     |
|             | CUCMSXMLAPIEXTRAOPTIONS  | Any extra option you may want to add to the command |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_cisco_cucm_sxml.pl \
    --plugin=network::cisco::callmanager::sxml::plugin \
	--mode=alerts \
	--hostname='mycucm.com' \
	--api-username='centreoncucm' \
	--api-password='myapipassword' \
	--port='8443' \
	--proto='https' \ 
	--http-backend=curl \
	--curl-opt="CURLOPT_SSL_VERIFYPEER => 0" \
	--verbose \
	--display-alerts
OK: Alerts total: 1, informational: 0, error: 0, debugging: 0, critical: 1, alert: 0, warning: 0, emergency: 0, notice: 0 
| 'alerts.total.count'=1;;;0; 'alerts.severity.informational.count'=0;;;0;1 'alerts.severity.error.count'=0;;;0;1 'alerts.severity.debugging.count'=0;;;0;1 
'alerts.severity.critical.count'=1;;;0;1 'alerts.severity.alert.count'=0;;;0;1 'alerts.severity.warning.count'=0;;;0;1 'alerts.severity.emergency.count'=0;;;0;1 
'alerts.severity.notice.count'=0;;;0;1
alert [name: CDRFileDeliveryFailureContinues] [severity: critical] [date: Tue Oct  6 05:42:12 2020]:  BillingServerAddress : 172.28.172.105 
AppID : Cisco CDR Repository Manager ClusterID :  NodeID : server.centreon.com  TimeStamp : Tue Oct 06 05:41:50 EDT 2020. 
The alarm is generated on Tue Oct 06 05:41:50 EDT 2020.	
```

La commande ci-dessus contrôle les alertes de Cisco Callmanager via la SXML (```--mode=alerts```).
Le Plugin utilise l'api-username (```--api-username='centreoncucm'```), l'api-password (```--api-password='myapipassword'```)
et il se connecte à l'hôte _mycucm.com_ (```--hostname='mycucm.com'```) 
sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).
Par defaut le méthode du backend est _curl_ (```--http-backend=curl```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins//centreon_cisco_cucm_sxml.pl \
	--plugin=network::cisco::callmanager::sxml::plugin \
	--mode=alerts \
	--help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to mycucm.com:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to mycucm.com:443 |```.
Cela signifie que Centreon n'a pas réussi à se connecter à Cisco Callmanager SXML (*mycucm.com*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *mycucm.com* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |``` 

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *lwp*. Pour ce faire, ajoutez l'option ```--http-backend='lwp'``` à la commande.
