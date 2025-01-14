---
id: cloud-vmware-velocloud-restapi
title: VMware VeloCloud
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **VMware VeloCloud** apporte un modèle d'hôte :

* **Cloud-Vmware-Velocloud-Edge-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Vmware-Velocloud-Edge-Restapi-custom" label="Cloud-Vmware-Velocloud-Edge-Restapi-custom">

| Alias             | Modèle de service                                       | Description                                                             |
|:------------------|:--------------------------------------------------------|:------------------------------------------------------------------------|
| Application-Usage | Cloud-Vmware-Velocloud-Application-Usage-Restapi-custom | Contrôle l'utilisation de la bande passante par application             |
| Category-Usage    | Cloud-Vmware-Velocloud-Category-Usage-Restapi-custom    | Contrôle l'utilisation de la bande passante par catégorie d'application |
| Edge-Qoe          | Cloud-Vmware-Velocloud-Edge-Qoe-Restapi-custom          | Contrôle le score QOE de l'appareil et de ses liens                     |
| Edge-Status       | Cloud-Vmware-Velocloud-Edge-Status-Restapi-custom       | Contrôle le statut de l'appareil                                        |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Vmware-Velocloud-Edge-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias       | Modèle de service                                 | Description                                    | Découverte |
|:------------|:--------------------------------------------------|:-----------------------------------------------|:----------:|
| Link-Status | Cloud-Vmware-Velocloud-Link-Status-Restapi-custom | Contrôle le statut des liens de l'appareil.    |     X      |
| Link-Usage  | Cloud-Vmware-Velocloud-Link-Usage-Restapi-custom  | Contrôle l'utilisation des liens de l'appareil |     X      |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle  | Description                                                         |
|:-----------------|:--------------------------------------------------------------------|
| VMware VeloCloud | Discover VMware VeloCloud edges using VMware VeloCloud Orchestrator |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                            | Description                                      |
|:-------------------------------------------|:-------------------------------------------------|
| Cloud-Vmware-Velocloud-Restapi-Link-Status | Découvre les liens pour en superviser le statut. |
| Cloud-Vmware-Velocloud-Restapi-Link-Usage  | Découvre les liens pour en superviser l'usage.   |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Application-Usage" label="Application-Usage">

| Métrique                                             | Unité     |
|:-----------------------------------------------------|:----------|
| *edges*~edge.applications.total.count                | count     |
| *edges*~*apps*#application.traffic.in.bitspersecond  | b/s       |
| *edges*~*apps*#application.traffic.out.bitspersecond | b/s       |
| *edges*~*apps*#application.packets.in.persecond      | packets/s |
| *edges*~*apps*#application.packets.out.persecond     | packets/s |

</TabItem>
<TabItem value="Category-Usage" label="Category-Usage">

| Métrique                                                | Unité     |
|:--------------------------------------------------------|:----------|
| *edges*~edge.categories.total.count                     | count     |
| *edges*~*categories*#category.traffic.in.bitspersecond  | b/s       |
| *edges*~*categories*#category.traffic.out.bitspersecond | b/s       |
| *edges*~*categories*#category.packets.in.persecond      | packets/s |
| *edges*~*categories*#category.packets.out.persecond     | packets/s |

</TabItem>
<TabItem value="Edge-Qoe" label="Edge-Qoe">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| *edges*~global.qoe.voice.count               | count |
| *edges*~global.qoe.video.count               | count |
| *edges*~global.qoe.transactional.count       | count |
| *edges*~global.links.total.count             | count |
| *edges*~*links*#link.qoe.voice.count         | count |
| *edges*~*links*#link.qoe.video.count         | count |
| *edges*~*links*#link.qoe.transactional.count | count |

</TabItem>
<TabItem value="Edge-Status" label="Edge-Status">

| Métrique       | Unité |
|:---------------|:------|
| *edges*#status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Link-Status" label="Link-Status">

| Métrique                       | Unité |
|:-------------------------------|:------|
| *edges*~edge.links.total.count | count |
| *edges*~*links*#status         | N/A   |

</TabItem>
<TabItem value="Link-Usage" label="Link-Usage">

| Métrique                                        | Unité |
|:------------------------------------------------|:------|
| *edges*~links.traffic.in.bitspersecond          | b/s   |
| *edges*~links.traffic.out.bitspersecond         | b/s   |
| *edges*~links.total.count                       | count |
| *edges*~*links*#link.traffic.in.bitspersecond   | b/s   |
| *edges*~*links*#link.traffic.out.bitspersecond  | b/s   |
| *edges*~*links*#link.latency.in.milliseconds    | ms    |
| *edges*~*links*#link.latency.out.milliseconds   | ms    |
| *edges*~*links*#link.jitter.in.milliseconds     | ms    |
| *edges*~*links*#link.jitter.out.milliseconds    | ms    |
| *edges*~*links*#link.packet.loss.in.percentage  | %     |
| *edges*~*links*#link.packet.loss.out.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Pour utiliser ce connecteur, vous devez disposer du login et du mot de passe d'un compte autorisé à utiliser l'API VeloCloud Orchestrator.

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
dnf install centreon-pack-cloud-vmware-velocloud-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-vmware-velocloud-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-vmware-velocloud-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-vmware-velocloud-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **VMware VeloCloud**
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
dnf install centreon-plugin-Cloud-Vmware-Velocloud-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Vmware-Velocloud-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-vmware-velocloud-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Vmware-Velocloud-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Vmware-Velocloud-Edge-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VCOAPIHOSTNAME     | VMware VeloCloud Orchestrator hostname                                                                                                             |                   | X           |
| VCOAPIUSERNAME     | VMware VeloCloud Orchestrator username                                                                                                             |                   | X           |
| VCOAPIPASSWORD     | VMware VeloCloud Orchestrator password                                                                                                             |                   | X           |
| VCOAPIPROTO        | Specify https if needed                                                                                                                            | https             |             |
| VCOAPIPORT         | Port used                                                                                                                                          | 443               |             |
| EDGENAME           | Filter edge by name (can be a regexp)                                                                                                              |                   |             |
| PROXYURL           | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                   |             |
| VCOAPITIMEOUT      | Set HTTP timeout in seconds (default: '10')                                                                                                        | 10                |             |
| VCOAPIURLPATH      | API base url path (default: '/portal/rest')                                                                                                        | /portal/rest      |             |
| VCOAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Application-Usage" label="Application-Usage">

| Macro                         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                     | Define the timeframe (in seconds) on which the data must be aggregated.                                                                          | 900               |             |
| FILTERAPPLICATIONNAME         | Filter application by name (can be a regexp)                                                                                                     |                   |             |
| WARNINGEDGEAPPLICATIONSCOUNT  | Thresholds                                                                                                                                       |                   |             |
| CRITICALEDGEAPPLICATIONSCOUNT | Thresholds                                                                                                                                       |                   |             |
| WARNINGPACKETSIN              | Thresholds                                                                                                                                       |                   |             |
| CRITICALPACKETSIN             | Thresholds                                                                                                                                       |                   |             |
| WARNINGPACKETSOUT             | Thresholds                                                                                                                                       |                   |             |
| CRITICALPACKETSOUT            | Thresholds                                                                                                                                       |                   |             |
| WARNINGTRAFFICIN              | Thresholds                                                                                                                                       |                   |             |
| CRITICALTRAFFICIN             | Thresholds                                                                                                                                       |                   |             |
| WARNINGTRAFFICOUT             | Thresholds                                                                                                                                       |                   |             |
| CRITICALTRAFFICOUT            | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Category-Usage" label="Category-Usage">

| Macro                       | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                   | Define the timeframe (in seconds) on which the data must be aggregated.                                                                          | 900               |             |
| FILTERCATEGORYNAME          | Filter category by name (can be a regexp)                                                                                                        |                   |             |
| WARNINGEDGECATEGORIESCOUNT  | Thresholds                                                                                                                                       |                   |             |
| CRITICALEDGECATEGORIESCOUNT | Thresholds                                                                                                                                       |                   |             |
| WARNINGPACKETSIN            | Thresholds                                                                                                                                       |                   |             |
| CRITICALPACKETSIN           | Thresholds                                                                                                                                       |                   |             |
| WARNINGPACKETSOUT           | Thresholds                                                                                                                                       |                   |             |
| CRITICALPACKETSOUT          | Thresholds                                                                                                                                       |                   |             |
| WARNINGTRAFFICIN            | Thresholds                                                                                                                                       |                   |             |
| CRITICALTRAFFICIN           | Thresholds                                                                                                                                       |                   |             |
| WARNINGTRAFFICOUT           | Thresholds                                                                                                                                       |                   |             |
| CRITICALTRAFFICOUT          | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Edge-Qoe" label="Edge-Qoe">

| Macro                          | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME                      | Define the timeframe (in seconds) on which the data must be aggregated.                                                                          | 900               |             |
| FILTERLINKNAME                 | Filter link by name (can be a regexp)                                                                                                            |                   |             |
| WARNINGEDGELINKSCOUNT          | Thresholds                                                                                                                                       |                   |             |
| CRITICALEDGELINKSCOUNT         | Thresholds                                                                                                                                       |                   |             |
| WARNINGQOETRANSACTIONAL        | Thresholds                                                                                                                                       |                   |             |
| CRITICALQOETRANSACTIONAL       | Thresholds                                                                                                                                       |                   |             |
| WARNINGQOETRANSACTIONALGLOBAL  | Thresholds                                                                                                                                       |                   |             |
| CRITICALQOETRANSACTIONALGLOBAL | Thresholds                                                                                                                                       |                   |             |
| WARNINGQOEVIDEO                | Thresholds                                                                                                                                       |                   |             |
| CRITICALQOEVIDEO               | Thresholds                                                                                                                                       |                   |             |
| WARNINGQOEVIDEOGLOBAL          | Thresholds                                                                                                                                       |                   |             |
| CRITICALQOEVIDEOGLOBAL         | Thresholds                                                                                                                                       |                   |             |
| WARNINGQOEVOICE                | Thresholds                                                                                                                                       |                   |             |
| CRITICALQOEVOICE               | Thresholds                                                                                                                                       |                   |             |
| WARNINGQOEVOICEGLOBAL          | Thresholds                                                                                                                                       |                   |             |
| CRITICALQOEVOICEGLOBAL         | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Edge-Status" label="Edge-Status">

| Macro          | Description                                                                                                                                                                                                                                                 | Valeur par défaut                                                     | Obligatoire |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: '%\{edge_state\} =~ /NEVER\_ACTIVATED/'). You can use the following variables: %\{edge_state\}, %\{service_state\}, %\{ha_state\}, %\{activation_state\}                                   | %\{edge_state\} =~ /NEVER\_ACTIVATED/                                  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{edge_state\} !~ /CONNECTED/ && %\{edge_state\} !~ /NEVER\_ACTIVATED/'). You can use the following variables: %\{edge_state\}, %\{service_state\}, %\{ha_state\}, %\{activation_state\} | %\{edge_state\} !~ /CONNECTED/ && %\{edge_state\} !~ /NEVER\_ACTIVATED/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{edge_state\}, %\{service_state\}, %\{ha_state\}, %\{activation_state\}                                                                       |                                                                       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                          |                                                                       |             |

</TabItem>
<TabItem value="Link-Status" label="Link-Status">

| Macro                  | Description                                                                                                                                                                                                                                    | Valeur par défaut                                   | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERLINKNAME         | Filter links based on their name (can be a regexp)                                                                                                                                                                                                         |                                                     |             |
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %\{state\}, %\{vpn_state\}, %\{backup_state\}                                                                                      |                                                     |             |
| WARNINGEDGELINKSCOUNT  | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %\{state\}, %\{vpn_state\}, %\{backup_state\} (Critical threshold default: '%\{state\} !~ /STABLE/ \|\| %\{vpn_state\} !~ /STABLE/') |                                                     |             |
| CRITICALEDGELINKSCOUNT | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %\{state\}, %\{vpn_state\}, %\{backup_state\} (Critical threshold default: '%\{state\} !~ /STABLE/ \|\| %\{vpn_state\} !~ /STABLE/') |                                                     |             |
| CRITICALSTATUS         | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %\{state\}, %\{vpn_state\}, %\{backup_state\} (Critical threshold default: '%\{state\} !~ /STABLE/ \|\| %\{vpn_state\} !~ /STABLE/') | %\{state\} !~ /STABLE/ \|\| %\{vpn_state\} !~ /STABLE/ |             |
| WARNINGSTATUS          | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %\{state\}, %\{vpn_state\}, %\{backup_state\} (Critical threshold default: '%\{state\} !~ /STABLE/ \|\| %\{vpn_state\} !~ /STABLE/') |                                                     |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                             | --verbose                                           |             |

</TabItem>
<TabItem value="Link-Usage" label="Link-Usage">

| Macro                   | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TIMEFRAME               | Define the timeframe (in seconds) on which the data must be aggregated.                                                                          | 900               |             |
| FILTERLINKNAME          | Filter link by name (can be a regexp)                                                                                                            |                   |             |
| WARNINGEDGELINKSCOUNT   | Thresholds                                                                                                                                       |                   |             |
| CRITICALEDGELINKSCOUNT  | Thresholds                                                                                                                                       |                   |             |
| WARNINGJITTERIN         | Thresholds                                                                                                                                       |                   |             |
| CRITICALJITTERIN        | Thresholds                                                                                                                                       |                   |             |
| WARNINGJITTEROUT        | Thresholds                                                                                                                                       |                   |             |
| CRITICALJITTEROUT       | Thresholds                                                                                                                                       |                   |             |
| WARNINGLATENCYIN        | Thresholds                                                                                                                                       |                   |             |
| CRITICALLATENCYIN       | Thresholds                                                                                                                                       |                   |             |
| WARNINGLATENCYOUT       | Thresholds                                                                                                                                       |                   |             |
| CRITICALLATENCYOUT      | Thresholds                                                                                                                                       |                   |             |
| WARNINGLINKSTRAFFICIN   | Thresholds                                                                                                                                       |                   |             |
| CRITICALLINKSTRAFFICIN  | Thresholds                                                                                                                                       |                   |             |
| WARNINGLINKSTRAFFICOUT  | Thresholds                                                                                                                                       |                   |             |
| CRITICALLINKSTRAFFICOUT | Thresholds                                                                                                                                       |                   |             |
| WARNINGPACKETLOSSIN     | Thresholds                                                                                                                                       |                   |             |
| CRITICALPACKETLOSSIN    | Thresholds                                                                                                                                       |                   |             |
| WARNINGPACKETLOSSOUT    | Thresholds                                                                                                                                       |                   |             |
| CRITICALPACKETLOSSOUT   | Thresholds                                                                                                                                       |                   |             |
| WARNINGTRAFFICIN        | Thresholds                                                                                                                                       |                   |             |
| CRITICALTRAFFICIN       | Thresholds                                                                                                                                       |                   |             |
| WARNINGTRAFFICOUT       | Thresholds                                                                                                                                       |                   |             |
| CRITICALTRAFFICOUT      | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_velocloud_restapi.pl \
	--plugin=cloud::vmware::velocloud::restapi::plugin \
	--mode=link-usage \
	--hostname='' \
	--api-path='/portal/rest' \
	--username='' \
	--password='' \
	--port='443' \
	--proto='https' \
	--timeout='10'  \
	--proxyurl= \
	--filter-edge-name=''  \
	--filter-link-name='' \
	--warning-links-traffic-in='' \
	--critical-links-traffic-in='' \
	--warning-links-traffic-out='' \
	--critical-links-traffic-out='' \
	--warning-edge-links-count='' \
	--critical-edge-links-count='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--warning-latency-in='' \
	--critical-latency-in='' \
	--warning-latency-out='' \
	--critical-latency-out='' \
	--warning-jitter-in='' \
	--critical-jitter-in='' \
	--warning-jitter-out='' \
	--critical-jitter-out='' \
	--warning-packet-loss-in='' \
	--critical-packet-loss-in='' \
	--warning-packet-loss-out='' \
	--critical-packet-loss-out='' \
	--timeframe='900' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Total Traffic In: 23 23/s Total Traffic Out: 94 94/s 76 link(s) All links status are ok | '*edges*~links.traffic.in.bitspersecond'=23b/s;;;0; '*edges*~links.traffic.out.bitspersecond'=94b/s;;;0; '*edges*~links.total.count'=76;;;0; '*edges*~*links*#link.traffic.in.bitspersecond'=b/s;;;0; '*edges*~*links*#link.traffic.out.bitspersecond'=b/s;;;0; '*edges*~*links*#link.latency.in.milliseconds'=ms;;;0; '*edges*~*links*#link.latency.out.milliseconds'=ms;;;0; '*edges*~*links*#link.jitter.in.milliseconds'=ms;;;0; '*edges*~*links*#link.jitter.out.milliseconds'=ms;;;0; '*edges*~*links*#link.packet.loss.in.percentage'=%;;;0;100 '*edges*~*links*#link.packet.loss.out.percentage'=%;;;0;100
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_velocloud_restapi.pl \
	--plugin=cloud::vmware::velocloud::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                              | Modèle de service associé                               |
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|
| application-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/applicationusage.pm)] | Cloud-Vmware-Velocloud-Application-Usage-Restapi-custom |
| category-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/categoryusage.pm)]       | Cloud-Vmware-Velocloud-Category-Usage-Restapi-custom    |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/discovery.pm)]                | Used for host discovery                                 |
| edge-qoe [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/edgeqoe.pm)]                   | Cloud-Vmware-Velocloud-Edge-Qoe-Restapi-custom          |
| edge-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/edgestatus.pm)]             | Cloud-Vmware-Velocloud-Edge-Status-Restapi-custom       |
| link-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/linkstatus.pm)]             | Cloud-Vmware-Velocloud-Link-Status-Restapi-custom       |
| link-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/linkusage.pm)]               | Cloud-Vmware-Velocloud-Link-Usage-Restapi-custom        |
| list-edges [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/listedges.pm)]               | Not used in this Monitoring Connector                   |
| list-links [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/vmware/velocloud/restapi/mode/listlinks.pm)]               | Used for service discovery                              |

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
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --hostname                                 | VMware VeloCloud Orchestrator hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --port                                     | Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --cache-expires-in                         | Cache (application) expires each X seconds (default: 7200)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --username                                 | VMware VeloCloud Orchestrator username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 | VMware VeloCloud Orchestrator password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --operator-user                            | Set if the user is an operator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --api-path                                 | API base url path (default: '/portal/rest').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeframe                                | Set timeframe in seconds (default: 900).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  | Set HTTP timeout in seconds (default: '10').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
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
<TabItem value="Application-Usage" label="Application-Usage">

| Option                    | Description                                                                                                 |
|:--------------------------|:------------------------------------------------------------------------------------------------------------|
| --filter-edge-name        | Filter edge by name (can be a regexp).                                                                      |
| --filter-application-name | Filter application by name (can be a regexp).                                                               |
| --warning-* --critical-*  | Thresholds. Can be: 'edge-applications-count', 'traffic-in', 'traffic-out', 'packets-in', 'packets-out'.    |

</TabItem>
<TabItem value="Category-Usage" label="Category-Usage">

| Option                   | Description                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------|
| --filter-edge-name       | Filter edge by name (can be a regexp).                                                                    |
| --filter-category-name   | Filter category by name (can be a regexp).                                                                |
| --warning-* --critical-* | Thresholds. Can be: 'edge-categories-count', 'traffic-in', 'traffic-out', 'packets-in', 'packets-out'.    |

</TabItem>
<TabItem value="Edge-Qoe" label="Edge-Qoe">

| Option                   | Description                                                                                                                                                                                           |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-edge-name       | Filter edge by name (can be a regexp).                                                                                                                                                                |
| --filter-link-name       | Filter link by name (can be a regexp).                                                                                                                                                                |
| --warning-* --critical-* | Thresholds. Can be: 'edge-links-count', 'qoe-voice-global', 'qoe-video-global', 'qoe-transactional-global' (global values) and/or 'qoe-voice', 'qoe-video', 'qoe-transactional' (per link values).    |

</TabItem>
<TabItem value="Edge-Status" label="Edge-Status">

| Option            | Description                                                                                                                                                                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter edge by name (can be a regexp).                                                                                                                                                                                                                          |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN (default: '%\{edge_state\} =~ /NEVER\_ACTIVATED/'). You can use the following variables: %\{edge_state\}, %\{service_state\}, %\{ha_state\}, %\{activation_state\}.                                      |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{edge_state\}, %\{service_state\}, %\{ha_state\}, %\{activation_state\}.                                                                          |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{edge_state\} !~ /CONNECTED/ && %\{edge_state\} !~ /NEVER\_ACTIVATED/'). You can use the following variables: %\{edge_state\}, %\{service_state\}, %\{ha_state\}, %\{activation_state\}.    |

</TabItem>
<TabItem value="Link-Status" label="Link-Status">

| Option                   | Description                                                                                                                                                                                                                                        |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-edge-name       | Filter edge by name (can be a regexp).                                                                                                                                                                                                             |
| --filter-link-name       | Filter link by name (can be a regexp).                                                                                                                                                                                                             |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %\{state\}, %\{vpn_state\}, %\{backup_state\}.                                                                                         |
| --warning-* --critical-* | Warning & Critical thresholds Can be 'status', 'edge-links-count'.  For 'status', special variables can be used: %\{state\}, %\{vpn_state\}, %\{backup_state\} (Critical threshold default: '%\{state\} !~ /STABLE/ \|\| %\{vpn_state\} !~ /STABLE/').    |

</TabItem>
<TabItem value="Link-Usage" label="Link-Usage">

| Option                   | Description                                                                                                                                                                                                   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-edge-name       | Filter edge by name (can be a regexp).                                                                                                                                                                        |
| --filter-link-name       | Filter link by name (can be a regexp).                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'edge-links-count', 'links-traffic-in', 'links-traffic-out', 'traffic-in', 'traffic-out', 'latency-in', 'latency-out', 'jitter-in', 'jitter-out', 'packet-loss-in', 'packet-loss-out'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_velocloud_restapi.pl \
	--plugin=cloud::vmware::velocloud::restapi::plugin \
	--mode=link-usage \
	--help
```
