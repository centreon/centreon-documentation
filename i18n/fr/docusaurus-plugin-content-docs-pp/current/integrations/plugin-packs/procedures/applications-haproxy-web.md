---
id: applications-haproxy-web
title: HAProxy Web API
description: Supervisez HAProxy via l'API stats au format JSON : utilisation des backends et frontends, sessions, trafic et statuts.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **HAProxy Web** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

Ce connecteur permet de superviser HAProxy (y compris les versions OSS/libres) en utilisant la page « stats » de HAProxy. 
Il ne supporte que le format json, le format csv n'est pas compatible.

### Modèles

Le connecteur de supervision **HAProxy Web** apporte un modèle d'hôte :

* **App-Haproxy-Web-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Haproxy-Web-custom" label="App-Haproxy-Web-custom">

> Ce modèle d'hôte n'a pas de service associé par défaut. Utilisez les règles de découverte de services pour déployer vos services.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias          | Modèle de service                     | Description                                                          | Découverte |
|:---------------|:--------------------------------------|:---------------------------------------------------------------------|:----------:|
| Backend-Usage  | App-Haproxy-Web-Backend-Usage-custom  | Contrôle l'utilisation des 'backends' avec les "servers" associés    |     X      |
| Frontend-Usage | App-Haproxy-Web-Frontend-Usage-custom | Contrôle l'utilisation des 'frontends' avec les "listeners" associés |     X      |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle               | Description                               |
|:------------------------------|:------------------------------------------|
| App-Haproxy-Web-Backend-Name  | Découvre les 'backends' et les supervise  |
| App-Haproxy-Web-Frontend-Name | Découvre les 'frontends' et les supervise |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Backend-Usage" label="Backend-Usage">

| Nom                                                  | Unité |
|:-----------------------------------------------------|:------|
| backend-status                                       | N/A   |
| *backends*~backend.queue.current.count               | count |
| backend-current-session-rate                         | N/A   |
| backend-max-session-rate                             | N/A   |
| *backends*~backend.sessions.current.count            | count |
| *backends*~backend.sessions.total.count              | count |
| *backends*~backend.traffic.in.bitpersecond           | b/s   |
| *backends*~backend.traffic.out.bitpersecond          | b/s   |
| *backends*~backend.requests.denied.count             | count |
| *backends*~backend.responses.denied.count            | count |
| *backends*~backend.connections.error.count           | count |
| *backends*~backend.responses.error.count             | count |
| server-status                                        | N/A   |
| server-status                                        | N/A   |
| *backends*~*servers1*#server.sessions.current.count  | count |
| *backends*~*servers2*#server.sessions.current.count  | count |
| server-current-session-rate                          | N/A   |
| server-current-session-rate                          | N/A   |
| server-max-session-rate                              | N/A   |
| server-max-session-rate                              | N/A   |
| *backends*~*servers1*#server.responses.denied.count  | count |
| *backends*~*servers2*#server.responses.denied.count  | count |
| *backends*~*servers1*#server.connections.error.count | count |
| *backends*~*servers2*#server.connections.error.count | count |
| *backends*~*servers1*#server.responses.error.count   | count |
| *backends*~*servers2*#server.responses.error.count   | count |

</TabItem>
<TabItem value="Frontend-Usage" label="Frontend-Usage">

| Nom                                                       | Unité |
|:----------------------------------------------------------|:------|
| frontend-status                                           | N/A   |
| frontend-current-session-rate                             | N/A   |
| frontend-max-session-rate                                 | N/A   |
| *frontends*~frontend.sessions.current.count               | count |
| *frontends*~frontend.sessions.total.count                 | count |
| *frontends*~frontend.sessions.maximum.count               | count |
| *frontends*~frontend.traffic.in.bitpersecond              | b/s   |
| *frontends*~frontend.traffic.out.bitpersecond             | b/s   |
| *frontends*~frontend.requests.denied.count                | count |
| *frontends*~frontend.responses.denied.count               | count |
| *frontends*~frontend.requests.error.count                 | count |
| listener-status                                           | N/A   |
| *frontends*~*listeners*#listener.sessions.current.count   | count |
| *frontends*~*listeners*#listener.requests.denied.count    | count |
| *frontends*~*listeners*#listener.responses.denied.count   | count |
| *frontends*~*listeners*#listener.requests.error.count     | count |
| *frontends*~*listeners*#listener.traffic.in.bitpersecond  | b/s   |
| *frontends*~*listeners*#listener.traffic.out.bitpersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

Pour superviser les statistiques HAProxy via API vous devez activer l’interface des statistiques dans HAProxy.
Dans votre fichier de configuration `haproxy.cfg`, ajoutez ou modifiez cette section :

```bash
listen stats
    bind *:8404
    stats enable
    stats uri /haproxy?stats
    stats auth username:password
    stats refresh 10s
```

> `bind *:8404` : Expose la page des statistiques sur le port 8404.
> `stats uri /haproxy?stats` : Définit l’URL d’accès aux statistiques.
> `stats auth username:password` : Définit l’authentification (choisissez le couple username/password)
> `stats refresh 10s` : Rafraîchit les statistiques toutes les 10 secondes (vous pouvez ajuster cette valeur à votre cas).

Vous pouvez vérifier l'accès à la page API (depuis un navigateur ou avec curl) :

```bash
curl -u username:password http://IP_HAPROXY:8404/haproxy?stats
```

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
dnf install centreon-pack-applications-haproxy-web
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-haproxy-web
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-haproxy-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-haproxy-web
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **HAProxy Web**
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
dnf install centreon-plugin-Applications-Haproxy-Web
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Haproxy-Web
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-haproxy-web
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Haproxy-Web
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Haproxy-Web-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:-----------------------------------------------------------------------------------|:------------------|:-----------:|
| HAPROXYUSERNAME | Specify the username for authentication (mandatory if --credentials is specified). | login             |             |
| HAPROXYPASSWORD | Specify the password for authentication (mandatory if --credentials is specified). | password          |             |
| HAPROXYPROTOCOL | Specify https if needed                                                            | http              |             |
| HAPROXYPORT     | Port used by the web server                                                        | 8404              |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Backend-Usage" label="Backend-Usage">

| Macro                             | Description                                                                                                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                        | Define which backends should be monitored based on their names. This option will be treated as a regular expression                                                                                                                | .*                |             |
| WARNINGBACKENDCONNECTIONSERRORS   | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDCONNECTIONSERRORS  | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDCURRENTQUEUE        | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDCURRENTQUEUE       | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDCURRENTSESSIONRATE  | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDCURRENTSESSIONRATE | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDCURRENTSESSIONS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDCURRENTSESSIONS    | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDDENIEDREQUESTS      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDDENIEDREQUESTS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDDENIEDRESPONSES     | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDDENIEDRESPONSES    | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDMAXSESSIONRATE      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDMAXSESSIONRATE     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDRESPONSESERRORS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDRESPONSESERRORS    | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDSTATUS              | Define the conditions to match for the backend status to be WARNING. You can use the following variables: %\{status\}.  Example: C\<--warning-backend-status='%\{status\} !~ /UP/i'\>                                              |                   |             |
| CRITICALBACKENDSTATUS             | Define the conditions to match for the backend status to be CRITICAL. Default: C\<'%\{status\} !~ /UP/i'\>. You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-backend-status='%\{status\} !~ /UP/i'\> |                   |             |
| WARNINGBACKENDTOTALSESSIONS       | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALBACKENDTOTALSESSIONS      | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGBACKENDTRAFFICIN           | Thresholds in b/s                                                                                                                                                                                                                  |                   |             |
| CRITICALBACKENDTRAFFICIN          | Thresholds in b/s                                                                                                                                                                                                                  |                   |             |
| WARNINGBACKENDTRAFFICOUT          | Thresholds in b/s                                                                                                                                                                                                                  |                   |             |
| CRITICALBACKENDTRAFFICOUT         | Thresholds in b/s                                                                                                                                                                                                                  |                   |             |
| WARNINGSERVERCONNECTIONSERRORS    | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERCONNECTIONSERRORS   | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERCURRENTSESSIONRATE   | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERCURRENTSESSIONRATE  | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERCURRENTSESSIONS      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERCURRENTSESSIONS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERDENIEDRESPONSES      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERDENIEDRESPONSES     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERMAXSESSIONRATE       | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERMAXSESSIONRATE      | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERRESPONSESERRORS      | Thresholds                                                                                                                                                                                                                         |                   |             |
| CRITICALSERVERRESPONSESERRORS     | Thresholds                                                                                                                                                                                                                         |                   |             |
| WARNINGSERVERSTATUS               | Define the conditions to match for the server status to be WARNING. You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-backend-status='%\{status\} !~ /UP/i'\>                                          |                   |             |
| CRITICALSERVERSTATUS              | Define the conditions to match for the status to be CRITICAL. Default: C\<'%\{status\} !~ /UP/i'\>. You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-backend-status='%\{status\} !~ /UP/i'\>         |                   |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                   | --verbose         |             |

</TabItem>
<TabItem value="Frontend-Usage" label="Frontend-Usage">

| Macro                              | Description                                                                                                                                                                                                                       | Valeur par défaut | Obligatoire |
|:-----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                         | Define which frontends should be monitored based on their names. This option will be treated as a regular expression                                                                                                              | .*                |             |
| WARNINGFRONTENDCURRENTSESSIONRATE  | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDCURRENTSESSIONRATE | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDCURRENTSESSIONS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDCURRENTSESSIONS    | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDDENIEDREQUESTS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDDENIEDREQUESTS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDDENIEDRESPONSES     | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDDENIEDRESPONSES    | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDERRORSREQUESTS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDERRORSREQUESTS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDMAXSESSIONRATE      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDMAXSESSIONRATE     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDMAXSESSIONS         | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDMAXSESSIONS        | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDSTATUS              | Define the conditions to match for the status to be B\<WARNING\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-frontend-status='%\{status\} !~ /UP/i'\>                                         |                   |             |
| CRITICALFRONTENDSTATUS             | Define the conditions to match for the status to be B\<CRITICAL\>. Default: C\<%\{status\} !~ /OPEN/i\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-frontend-status='%\{status\} !~ /UP/i'\> |                   |             |
| WARNINGFRONTENDTOTALSESSIONS       | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALFRONTENDTOTALSESSIONS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGFRONTENDTRAFFICIN           | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| CRITICALFRONTENDTRAFFICIN          | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| WARNINGFRONTENDTRAFFICOUT          | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| CRITICALFRONTENDTRAFFICOUT         | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| WARNINGLISTENERCURRENTSESSIONS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALLISTENERCURRENTSESSIONS    | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGLISTENERDENIEDREQUESTS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALLISTENERDENIEDREQUESTS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGLISTENERDENIEDRESPONSES     | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALLISTENERDENIEDRESPONSES    | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGLISTENERERRORSREQUESTS      | Thresholds                                                                                                                                                                                                                        |                   |             |
| CRITICALLISTENERERRORSREQUESTS     | Thresholds                                                                                                                                                                                                                        |                   |             |
| WARNINGLISTENERSTATUS              | Define the conditions to match for the status to be B\<WARNING\>  You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-listener-status='%\{status\} !~ /UP/i'\>                                          |                   |             |
| CRITICALLISTENERSTATUS             | Define the conditions to match for the status to be B\<CRITICAL\>. Default: C\<%\{status\} !~ /OPEN/i\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-listener-status='%\{status\} !~ /UP/i'\> |                   |             |
| WARNINGLISTENERTRAFFICIN           | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| CRITICALLISTENERTRAFFICIN          | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| WARNINGLISTENERTRAFFICOUT          | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| CRITICALLISTENERTRAFFICOUT         | Thresholds in b/s                                                                                                                                                                                                                 |                   |             |
| EXTRAOPTIONS                       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                  | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_haproxy_web.pl \
	--plugin=apps::haproxy::web::plugin  \
	--mode=backend-usage \
	--hostname='10.0.0.1' \
	--port='8404' \
	--proto='http' \
	--username='login' \
	--password='password'  \
	--filter-name='.*' \
	--warning-backend-status='' \
	--critical-backend-status='' \
	--warning-backend-current-queue='' \
	--critical-backend-current-queue='' \
	--warning-backend-current-session-rate='' \
	--critical-backend-current-session-rate='' \
	--warning-backend-max-session-rate='' \
	--critical-backend-max-session-rate='' \
	--warning-backend-current-sessions='' \
	--critical-backend-current-sessions='' \
	--warning-backend-total-sessions='' \
	--critical-backend-total-sessions='' \
	--warning-backend-traffic-in='' \
	--critical-backend-traffic-in='' \
	--warning-backend-traffic-out='' \
	--critical-backend-traffic-out='' \
	--warning-backend-denied-requests='' \
	--critical-backend-denied-requests='' \
	--warning-backend-denied-responses='' \
	--critical-backend-denied-responses='' \
	--warning-backend-connections-errors='' \
	--critical-backend-connections-errors='' \
	--warning-backend-responses-errors='' \
	--critical-backend-responses-errors='' \
	--warning-server-status='' \
	--critical-server-status='' \
	--warning-server-current-sessions='' \
	--critical-server-current-sessions='' \
	--warning-server-current-session-rate='' \
	--critical-server-current-session-rate='' \
	--warning-server-max-session-rate='' \
	--critical-server-max-session-rate='' \
	--warning-server-denied-responses='' \
	--critical-server-denied-responses='' \
	--warning-server-connections-errors='' \
	--critical-server-connections-errors='' \
	--warning-server-responses-errors='' \
	--critical-server-responses-errors='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: current queue: 46578 current session rate: 39271/s max session rate: 2934/s current sessions: 17139 total sessions: 4481 traffic in: 79901 79901/s traffic out: 13701 13701/s denied requests: 11391 denied responses: 55189 connection errors: 63151 responses errors: 12544 Servers are ok | 'backends~backend.queue.current.count'=46578;;;0; 'backends~backend.session.current.rate.countpersecond'=39271;;;0; 'backends~backend.session.max.rate.countpersecond'=2934;;;0; 'backends~backend.sessions.current.count'=17139;;;0; 'backends~backend.sessions.total.count'=4481;;;0; 'backends~backend.traffic.in.bitpersecond'=79901b/s;;;0; 'backends~backend.traffic.out.bitpersecond'=13701b/s;;;0; 'backends~backend.requests.denied.count'=11391;;;0; 'backends~backend.responses.denied.count'=55189;;;0; 'backends~backend.connections.error.count'=63151;;;0; 'backends~backend.responses.error.count'=12544;;;0; 'backends~servers1#server.sessions.current.count'=85843;;;0; 'backends~servers2#server.sessions.current.count'=46527;;;0; 'backends~servers1#server.session.current.rate.countpersecond'=53920;;;0; 'backends~servers2#server.session.current.rate.countpersecond'=89626;;;0; 'backends~servers1#server.session.max.rate.countpersecond'=76902;;;0; 'backends~servers2#server.session.max.rate.countpersecond'=74257;;;0; 'backends~servers1#server.responses.denied.count'=30946;;;0; 'backends~servers2#server.responses.denied.count'=48861;;;0; 'backends~servers1#server.connections.error.count'=57703;;;0; 'backends~servers2#server.connections.error.count'=43456;;;0; 'backends~servers1#server.responses.error.count'=48057;;;0; 'backends~servers2#server.responses.error.count'=69566;;;0; 
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
/usr/lib/centreon/plugins/centreon_haproxy_web.pl \
	--plugin=apps::haproxy::web::plugin  \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                          | Modèle de service associé             |
|:------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| backend-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/haproxy/web/mode/backendusage.pm)]   | App-Haproxy-Web-Backend-Usage-custom  |
| frontend-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/haproxy/web/mode/frontendusage.pm)] | App-Haproxy-Web-Frontend-Usage-custom |
| list-objects [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/haproxy/web/mode/listobjects.pm)]     | Used for service discovery            |

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
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   IP address or FQDN of the HAProxy server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --port                                     |   Port used by the web server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --proto                                    |   Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --urlpath                                  |   Define the path of the web page to get (default: '/stats;json;').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --credentials                              |   Specify this option if you are accessing a web page using authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --username                                 |   Specify the username for authentication (mandatory if --credentials is specified).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --password                                 |   Specify the password for authentication (mandatory if --credentials is specified).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --basic                                    |   Specify this option if you are accessing a web page using basic authentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you are accessing a web page using hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ntlmv2                                   |   Specify this option if you are accessing a web page using NTLMv2 authentication (use with C\<--credentials\> and C\<--port\> options).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --timeout                                  |   Define the timeout in seconds (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Backend-Usage" label="Backend-Usage">

| Option                                  | Description                                                                                                                                                                                                                            |
|:----------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-servers                           |   Also display and monitor Servers related to a given backend.                                                                                                                                                                         |
| --filter-counters                       |   Define which counters should appear in the performance data (metrics). This option will be treated as a regular expression.  Example: C\<--filter-counters='^total-connections$'\>.                                                  |
| --filter-name                           |   Define which backends should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                 |
| --warning-backend-status                |   Define the conditions to match for the backend status to be WARNING. You can use the following variables: %\{status\}.  Example: C\<--warning-backend-status='%\{status\} !~ /UP/i'\>                                                |
| --critical-backend-status               |   Define the conditions to match for the backend status to be CRITICAL. Default: C\<'%\{status\} !~ /UP/i'\>. You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-backend-status='%\{status\} !~ /UP/i'\>   |
| --warning-server-status                 |   Define the conditions to match for the server status to be WARNING. You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-backend-status='%\{status\} !~ /UP/i'\>                                            |
| --critical-server-status                |   Define the conditions to match for the status to be CRITICAL. Default: C\<'%\{status\} !~ /UP/i'\>. You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-backend-status='%\{status\} !~ /UP/i'\>           |
| --warning-backend-current-queue         |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-current-queue        |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-current-session-rate  |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-current-session-rate |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-max-session-rate      |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-max-session-rate     |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-current-sessions      |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-current-sessions     |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-total-sessions        |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-total-sessions       |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-traffic-in            |   Thresholds in b/s.                                                                                                                                                                                                                   |
| --critical-backend-traffic-in           |   Thresholds in b/s.                                                                                                                                                                                                                   |
| --warning-backend-traffic-out           |   Thresholds in b/s.                                                                                                                                                                                                                   |
| --critical-backend-traffic-out          |   Thresholds in b/s.                                                                                                                                                                                                                   |
| --warning-backend-denied-requests       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-denied-requests      |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-denied-responses      |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-denied-responses     |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-connections-errors    |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-connections-errors   |   Thresholds.                                                                                                                                                                                                                          |
| --warning-backend-responses-errors      |   Thresholds.                                                                                                                                                                                                                          |
| --critical-backend-responses-errors     |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-current-sessions       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-current-sessions      |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-current-session-rate   |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-current-session-rate  |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-max-session-rate       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-max-session-rate      |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-denied-responses       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-denied-responses      |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-connections-errors     |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-connections-errors    |   Thresholds.                                                                                                                                                                                                                          |
| --warning-server-responses-errors       |   Thresholds.                                                                                                                                                                                                                          |
| --critical-server-responses-errors      |   Thresholds.                                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Frontend-Usage" label="Frontend-Usage">

| Option                                   | Description                                                                                                                                                                                                                           |
|:-----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-listeners                          |   Also display and monitor listeners related to a given frontend.                                                                                                                                                                     |
| --filter-counters                        |   Define which counters should appear in the performance data (metrics). This option will be treated as a regular expression.  Example: --filter-counters='^total-connections$'.                                                      |
| --filter-name                            |   Define which frontends should be monitored based on their names. This option will be treated as a regular expression.                                                                                                               |
| --warning-frontend-status                |   Define the conditions to match for the status to be B\<WARNING\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-frontend-status='%\{status\} !~ /UP/i'\>                                           |
| --critical-frontend-status               |   Define the conditions to match for the status to be B\<CRITICAL\>. Default: C\<%\{status\} !~ /OPEN/i\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-frontend-status='%\{status\} !~ /UP/i'\>   |
| --warning-listener-status                |   Define the conditions to match for the status to be B\<WARNING\>  You can use the following variables: C\<%\{status\}\>.  Example: C\<--warning-listener-status='%\{status\} !~ /UP/i'\>                                            |
| --critical-listener-status               |   Define the conditions to match for the status to be B\<CRITICAL\>. Default: C\<%\{status\} !~ /OPEN/i\>.  You can use the following variables: C\<%\{status\}\>.  Example: C\<--critical-listener-status='%\{status\} !~ /UP/i'\>   |
| --warning-frontend-current-session-rate  |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-current-session-rate |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-max-session-rate      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-max-session-rate     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-current-sessions      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-current-sessions     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-total-sessions        |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-total-sessions       |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-max-sessions          |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-max-sessions         |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-traffic-in            |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --critical-frontend-traffic-in           |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --warning-frontend-traffic-out           |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --critical-frontend-traffic-out          |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --warning-frontend-denied-requests       |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-denied-requests      |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-denied-responses      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-denied-responses     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-frontend-errors-requests       |   Thresholds.                                                                                                                                                                                                                         |
| --critical-frontend-errors-requests      |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-current-sessions      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-listener-current-sessions     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-denied-requests       |   Thresholds.                                                                                                                                                                                                                         |
| --critical-listener-denied-requests      |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-denied-responses      |   Thresholds.                                                                                                                                                                                                                         |
| --critical-listener-denied-responses     |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-errors-requests       |   Thresholds.                                                                                                                                                                                                                         |
| --critical-listener-errors-requests      |   Thresholds.                                                                                                                                                                                                                         |
| --warning-listener-traffic-in            |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --critical-listener-traffic-in           |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --warning-listener-traffic-out           |   Thresholds in b/s.                                                                                                                                                                                                                  |
| --critical-listener-traffic-out          |   Thresholds in b/s.                                                                                                                                                                                                                  |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_haproxy_web.pl \
	--plugin=apps::haproxy::web::plugin  \
	--mode=backend-usage \
	--help
```
