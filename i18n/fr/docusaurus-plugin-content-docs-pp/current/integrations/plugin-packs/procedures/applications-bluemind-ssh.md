---
id: applications-bluemind-ssh
title: BlueMind SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

BlueMind est une suite logicielle libre de messagerie d’entreprise, d’agendas et de travail collaboratif utilisant JavaScript et HTML5. 

## Contenu du pack

### Modèles

Le connecteur de supervision **BlueMind SSH** apporte un modèle d'hôte :

* **App-Bluemind-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Bluemind-SSH-custom" label="App-Bluemind-SSH-custom">

| Alias     | Modèle de service                 | Description                                  |
|:----------|:----------------------------------|:---------------------------------------------|
| Core      | App-Bluemind-Core-SSH-custom      | Contrôle le coeur du moteur BlueMind         |
| Eas       | App-Bluemind-Eas-SSH-custom       | Contrôle le service de connexion des mobiles |
| Hps       | App-Bluemind-Hps-SSH-custom       | Contrôle le service d'authentification       |
| Ips       | App-Bluemind-Ips-SSH-custom       | Contrôle les opérations IMAP                 |
| Lmtpd     | App-Bluemind-Lmtpd-SSH-custom     | Contrôle le service de réception des emails  |
| Milter    | App-Bluemind-Milter-SSH-custom    | Contrôle le service 'milter'                 |
| Webserver | App-Bluemind-Webserver-SSH-custom | Contrôle le service d'application web        |
| Xmpp      | App-Bluemind-Xmpp-SSH-custom      | Contrôle le service de messagerie instantané |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Bluemind-SSH-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Core" label="Core">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| core.calls.received.success.count        | count |
| core.calls.received.failure.count        | count |
| core.heartbeat.broadcast.running.count   | count |
| core.directory.cluster.events.count      | count |
| core.request.handling.total.milliseconds | ms    |
| core.request.handling.mean.milliseconds  | ms    |

</TabItem>
<TabItem value="Eas" label="Eas">

| Métrique                         | Unité |
|:---------------------------------|:------|
| eas.responses.size.total.bytes   | B     |
| eas.execution.total.milliseconds | ms    |
| eas.execution.mean.milliseconds  | ms    |

</TabItem>
<TabItem value="Hps" label="Hps">

| Métrique                                                       | Unité |
|:---------------------------------------------------------------|:------|
| hps.authentication.success.count                               | count |
| hps.authentication.failure.count                               | count |
| hps.requests.protected.count                                   | count |
| hps.requests.maintenance.count                                 | count |
| *bm_hps_upstream*#hps.upstream.requests.time.milliseconds      | ms    |
| *bm_hps_upstream*#hps.upstream.requests.time.mean.milliseconds | ms    |
| *bm_hps_upstream*#hps.upstream.requests.size.total.bytes       | B     |
| *bm_hps_upstream*#hps.upstream.requests.total.count            | count |

</TabItem>
<TabItem value="Ips" label="Ips">

| Métrique                     | Unité |
|:-----------------------------|:------|
| ips.connections.active.count | count |

</TabItem>
<TabItem value="Lmtpd" label="Lmtpd">

| Métrique                                           | Unité |
|:---------------------------------------------------|:------|
| lmtpd.connections.active.count                     | count |
| lmtpd.connections.total.count                      | count |
| lmtpd.deliveries.success.count                     | count |
| lmtpd.deliveries.failure.count                     | count |
| lmtpd.emails.size.total.bytes                      | B     |
| lmtpd.sessions.duration.total.milliseconds         | ms    |
| lmtpd.sessions.duration.mean.milliseconds          | ms    |
| lmtpd.traffic.transport.latency.total.milliseconds | ms    |
| lmtpd.traffic.transport.latency.mean.milliseconds  | ms    |

</TabItem>
<TabItem value="Milter" label="Milter">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| milter.connections.total.count              | count |
| milter.traffic.class.inbound.count          | count |
| milter.traffic.class.outbound.count         | count |
| milter.traffic.size.inbound.bytes           | B     |
| milter.traffic.size.outbound.bytes          | B     |
| milter.sessions.duration.total.milliseconds | ms    |
| milter.sessions.duration.mean.milliseconds  | ms    |

</TabItem>
<TabItem value="Webserver" label="Webserver">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| webserver.requests.time.milliseconds      | ms    |
| webserver.requests.time.mean.milliseconds | ms    |
| webserver.requests.total.count            | count |
| webserver.requests.status.200.count       | count |
| webserver.requests.status.304.count       | count |

</TabItem>
<TabItem value="Xmpp" label="Xmpp">

| Métrique                | Unité |
|:------------------------|:------|
| xmpp.packets.all.count  | count |
| xmpp.packets.chat.count | count |

</TabItem>
</Tabs>

## Prérequis

### Configuration SSH

L'utilisation de ce connecteur requiert la création d'un utilisateur sur la
ressource supervisée, lequel sera utilisé par le collecteur Centreon pour
s'authentifier et exécuter les requêtes via SSH. Les privilèges `sudo` ou `root` ne
sont pas nécessaires, un utilisateur 'simple' est suffisant.

Deux méthodes de connexion SSH sont possibles :
* soit en échangeant la clé SSH publique de l'utilisateur `centreon-engine` du collecteur Centreon
* soit en définissant votre utilisateur et votre mot de passe directement dans les macros d'hôtes.

### Configuration BlueMind

Sur le serveur BlueMind, créer un utilisateur ayant accès aux sockets Unix dans le répertoire `/var/run/bm-metrics/` (groupe `telegraph`).

Afin d'en vérifier les permissions, exécutez cette commande avec cet utilisateur :

```bash
curl --unix-socket /var/run/bm-metrics/metrics-bm-core.sock http://127.0.0.1/metrics
```

Le résultat de la commande devrait ressembler à :

```
bm-core.callsByRPC,rpc=GET-/api/todolist/{containerUid}/{uid}/_itemchangelog,status=success,meterType=Counter count=1
bm-core.callsByRPC,rpc=GET-/api/externaluser/{domainUid}/{uid}/groups,status=success,meterType=Counter count=2
bm-core.heartbeat.broadcast,state=core.state.stopping,meterType=Counter count=2
...
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
dnf install centreon-pack-applications-bluemind-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-bluemind-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-bluemind-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-bluemind-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Bluemind SSH**
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
dnf install centreon-plugin-Applications-Bluemind-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Bluemind-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-bluemind-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Bluemind-Ssh
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Bluemind-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                   | sshcli            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Core" label="Core">

| Macro                          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCALLSRECEIVEDFAILED     | Thresholds                                                                                         |                   |             |
| CRITICALCALLSRECEIVEDFAILED    | Thresholds                                                                                         |                   |             |
| WARNINGCALLSRECEIVEDSUCCESS    | Thresholds                                                                                         |                   |             |
| CRITICALCALLSRECEIVEDSUCCESS   | Thresholds                                                                                         |                   |             |
| WARNINGDIRECTORYCLUSTEREVENTS  | Thresholds                                                                                         |                   |             |
| CRITICALDIRECTORYCLUSTEREVENTS | Thresholds                                                                                         |                   |             |
| WARNINGHEARTBEATBROADCAST      | Thresholds                                                                                         |                   |             |
| CRITICALHEARTBEATBROADCAST     | Thresholds                                                                                         |                   |             |
| WARNINGREQUESTHANDLINGMEAN     | Thresholds                                                                                         |                   |             |
| CRITICALREQUESTHANDLINGMEAN    | Thresholds                                                                                         |                   |             |
| WARNINGREQUESTHANDLINGTOTAL    | Thresholds                                                                                         |                   |             |
| CRITICALREQUESTHANDLINGTOTAL   | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Eas" label="Eas">

| Macro                      | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGEXECUTIONMEAN       | Thresholds                                                                                         |                   |             |
| CRITICALEXECUTIONMEAN      | Thresholds                                                                                         |                   |             |
| WARNINGEXECUTIONTOTAL      | Thresholds                                                                                         |                   |             |
| CRITICALEXECUTIONTOTAL     | Thresholds                                                                                         |                   |             |
| WARNINGRESPONSESSIZETOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALRESPONSESSIZETOTAL | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Hps" label="Hps">

| Macro                             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERUPSTREAM                    | Filter upstream name (can be a regexp)                                                             |                   |             |
| WARNINGAUTHENTICATIONFAILURE      | Thresholds                                                                                         |                   |             |
| CRITICALAUTHENTICATIONFAILURE     | Thresholds                                                                                         |                   |             |
| WARNINGAUTHENTICATIONSUCCESS      | Thresholds                                                                                         |                   |             |
| CRITICALAUTHENTICATIONSUCCESS     | Thresholds                                                                                         |                   |             |
| WARNINGREQUESTSMAINTENANCE        | Thresholds                                                                                         |                   |             |
| CRITICALREQUESTSMAINTENANCE       | Thresholds                                                                                         |                   |             |
| WARNINGREQUESTSPROTECTED          | Thresholds                                                                                         |                   |             |
| CRITICALREQUESTSPROTECTED         | Thresholds                                                                                         |                   |             |
| WARNINGUPSTREAMREQUESTSSIZETOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALUPSTREAMREQUESTSSIZETOTAL | Thresholds                                                                                         |                   |             |
| WARNINGUPSTREAMREQUESTSTIMEMEAN   | Thresholds                                                                                         |                   |             |
| CRITICALUPSTREAMREQUESTSTIMEMEAN  | Thresholds                                                                                         |                   |             |
| WARNINGUPSTREAMREQUESTSTIMETOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALUPSTREAMREQUESTSTIMETOTAL | Thresholds                                                                                         |                   |             |
| WARNINGUPSTREAMREQUESTSTOTAL      | Thresholds                                                                                         |                   |             |
| CRITICALUPSTREAMREQUESTSTOTAL     | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Ips" label="Ips">

| Macro                     | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONSACTIVE  | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSACTIVE | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Lmtpd" label="Lmtpd">

| Macro                                | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONSACTIVE             | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSACTIVE            | Thresholds                                                                                         |                   |             |
| WARNINGCONNECTIONSTOTAL              | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSTOTAL             | Thresholds                                                                                         |                   |             |
| WARNINGDELIVERIESFAILURE             | Thresholds                                                                                         |                   |             |
| CRITICALDELIVERIESFAILURE            | Thresholds                                                                                         |                   |             |
| WARNINGDELIVERIESSUCCESS             | Thresholds                                                                                         |                   |             |
| CRITICALDELIVERIESSUCCESS            | Thresholds                                                                                         |                   |             |
| WARNINGEMAILSSIZETOTAL               | Thresholds                                                                                         |                   |             |
| CRITICALEMAILSSIZETOTAL              | Thresholds                                                                                         |                   |             |
| WARNINGSESSIONSDURATIONMEAN          | Thresholds                                                                                         |                   |             |
| CRITICALSESSIONSDURATIONMEAN         | Thresholds                                                                                         |                   |             |
| WARNINGSESSIONSDURATIONTOTAL         | Thresholds                                                                                         |                   |             |
| CRITICALSESSIONSDURATIONTOTAL        | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICTRANSPORTLATENCYMEAN   | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICTRANSPORTLATENCYMEAN  | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICTRANSPORTLATENCYTOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICTRANSPORTLATENCYTOTAL | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Milter" label="Milter">

| Macro                         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONNECTIONSTOTAL       | Thresholds                                                                                         |                   |             |
| CRITICALCONNECTIONSTOTAL      | Thresholds                                                                                         |                   |             |
| WARNINGSESSIONSDURATIONMEAN   | Thresholds                                                                                         |                   |             |
| CRITICALSESSIONSDURATIONMEAN  | Thresholds                                                                                         |                   |             |
| WARNINGSESSIONSDURATIONTOTAL  | Thresholds                                                                                         |                   |             |
| CRITICALSESSIONSDURATIONTOTAL | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICCLASSINBOUND    | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICCLASSINBOUND   | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICCLASSOUTBOUND   | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICCLASSOUTBOUND  | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICSIZEINBOUND     | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICSIZEINBOUND    | Thresholds                                                                                         |                   |             |
| WARNINGTRAFFICSIZEOUTBOUND    | Thresholds                                                                                         |                   |             |
| CRITICALTRAFFICSIZEOUTBOUND   | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Webserver" label="Webserver">

| Macro                     | Description                                                                                        | Valeur par défaut           | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| WARNINGREQUESTSSTATUS200  | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSSTATUS200 | Thresholds                                                                                         |                             |             |
| WARNINGREQUESTSSTATUS304  | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSSTATUS304 | Thresholds                                                                                         |                             |             |
| WARNINGREQUESTSTIMEMEAN   | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSTIMEMEAN  | Thresholds                                                                                         |                             |             |
| WARNINGREQUESTSTIMETOTAL  | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSTIMETOTAL | Thresholds                                                                                         |                             |             |
| WARNINGREQUESTSTOTAL      | Thresholds                                                                                         |                             |             |
| CRITICALREQUESTSTOTAL     | Thresholds                                                                                         |                             |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --statefile-format=storable |             |

</TabItem>
<TabItem value="Xmpp" label="Xmpp">

| Macro               | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPACKETSALL   | Thresholds                                                                                         |                   |             |
| CRITICALPACKETSALL  | Thresholds                                                                                         |                   |             |
| WARNINGPACKETSCHAT  | Thresholds                                                                                         |                   |             |
| CRITICALPACKETSCHAT | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_bluemind_ssh.pl \
	--plugin=apps::bluemind::local::plugin \
	--mode=xmpp \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--warning-packets-all='' \
	--critical-packets-all='' \
	--warning-packets-chat='' \
	--critical-packets-chat='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: all packets sent: 46 chat packets sent: 0 | 'xmpp.packets.all.count'=46;;;0;'xmpp.packets.chat.count'=0;;;0;
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
/usr/lib/centreon/plugins/centreon_bluemind_ssh.pl \
	--plugin=apps::bluemind::local::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                    | Modèle de service associé         |
|:------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| core [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/core.pm)]           | App-Bluemind-Core-SSH-custom      |
| eas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/eas.pm)]             | App-Bluemind-Eas-SSH-custom       |
| hps [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/hps.pm)]             | App-Bluemind-Hps-SSH-custom       |
| ips [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/ips.pm)]             | App-Bluemind-Ips-SSH-custom       |
| lmtpd [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/lmtpd.pm)]         | App-Bluemind-Lmtpd-SSH-custom     |
| milter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/milter.pm)]       | App-Bluemind-Milter-SSH-custom    |
| webserver [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/webserver.pm)] | App-Bluemind-Webserver-SSH-custom |
| xmpp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/bluemind/local/mode/xmpp.pm)]           | App-Bluemind-Xmpp-SSH-custom      |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sudo                                     | Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Core" label="Core">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^calls'                                                                                                                                                          |
| --warning-* --critical-* | Thresholds. Can be: 'calls-received-success', 'calls-received-failed', 'heartbeat-broadcast', 'directory-cluster-events', 'request-handling-total', 'request-handling-mean'.                                                                  |

</TabItem>
<TabItem value="Eas" label="Eas">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^execution'                                                                                                                                                      |
| --warning-* --critical-* | Thresholds. Can be: 'responses-size-total', 'execution-total', 'execution-mean'.                                                                                                                                                              |

</TabItem>
<TabItem value="Hps" label="Hps">

| Option                   | Description                                                                                                                                                                                                                                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                        |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                   |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                           |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                         |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                               |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                    |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                            |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                    |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.       |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                             |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                      |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='maintenance'                                                                                                                                                         |
| --filter-upstream        | Filter upstream name (can be a regexp).                                                                                                                                                                                                           |
| --warning-* --critical-* | Thresholds. Can be: 'authentication-success', 'authentication-failure', 'requests-protected', 'requests-maintenance', 'upstream-requests-time-total', 'upstream-requests-time-mean', 'upstream-requests-size-total, 'upstream-requests-total'.    |

</TabItem>
<TabItem value="Ips" label="Ips">

| Option                   | Description                                  |
|:-------------------------|:---------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'active-connections'.    |

</TabItem>
<TabItem value="Lmtpd" label="Lmtpd">

| Option                   | Description                                                                                                                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                   |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                              |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                      |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                    |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                               |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                       |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                               |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                  |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                        |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                 |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                           |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^deliveries'                                                                                                                                                                    |
| --warning-* --critical-* | Thresholds. Can be: 'connections-active', 'connections-total', 'deliveries-success', 'deliveries-failure', 'emails-size-total', 'sessions-duration-total', 'sessions-duration-mean', 'traffic-transport-latency-total', 'traffic-transport-latency-mean'.    |

</TabItem>
<TabItem value="Milter" label="Milter">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^deliveries'                                                                                                                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'connections-total', 'traffic-class-inbound', 'traffic-class-outbound', 'traffic-size-inbound', 'traffic-size-outbound', 'sessions-duration-total', 'sessions-duration-mean' .                                            |

</TabItem>
<TabItem value="Webserver" label="Webserver">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='requests-time-mean'                                                                                                                                              |
| --filter-upstream        | Filter upstream name (can be a regexp).                                                                                                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'requests-time-total', 'requests-time-mean', 'requests-total', 'requests-status-200', 'requests-status-304'.                                                                                                              |

</TabItem>
<TabItem value="Xmpp" label="Xmpp">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='chat'                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'packets-all', 'packets-chat'.                                                                                                                                                                                            |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_bluemind_ssh.pl \
	--plugin=apps::bluemind::local::plugin \
	--mode=xmpp \
	--help
```
