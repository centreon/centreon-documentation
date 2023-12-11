---
id: network-stormshield-api
title: Stormshield API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Stormshield API** apporte un modèle d'hôte :

* **Net-Stormshield-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Stormshield-Api-custom" label="Net-Stormshield-Api-custom">

| Alias    | Modèle de service                   | Description                                         |
|:---------|:------------------------------------|:----------------------------------------------------|
| Cpu      | Net-Stormshield-Cpu-Api-custom      | Contrôle du taux d'utilisation du CPU de la machine |
| Hardware | Net-Stormshield-Hardware-Api-custom | Contrôle le matériel                                |
| Health   | Net-Stormshield-Health-Api-custom   | Contrôle l'état de santé                            |
| Memory   | Net-Stormshield-Memory-Api-custom   | Contrôle la mémoire                                 |
| Uptime   | Net-Stormshield-Uptime-Api-custom   | Contrôle l'uptime                                   |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Stormshield-Api-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service                     | Description                     | Découverte |
|:-----------|:--------------------------------------|:--------------------------------|:----------:|
| Ha         | Net-Stormshield-Ha-Api-custom         | Contrôle la haute disponibilité |            |
| Interfaces | Net-Stormshield-Interfaces-Api-custom | Contrôle les interfaces         | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                        | Description                                                             |
|:---------------------------------------|:------------------------------------------------------------------------|
| Net-Stormshield-Api-Interface-Username | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Ha" label="Ha">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| members.detected.count                  | count |
| members.none.count                      | count |
| members.starting.count                  | count |
| members.waiting_peer.count              | count |
| members.ready.count                     | count |
| members.reboot.count                    | count |
| members.down.count                      | count |
| member state                            | N/A   |
| member link status                      | N/A   |
| member config status                    | N/A   |
| *member_name*#member.quality.percentage | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| disk status                              | N/A   |
| fan status                               | N/A   |
| *fan_num*#hardware.fan.speed.rpm         | rpm   |
| power supply status                      | N/A   |
| *psu_num*#hardware.fan.speed.rpm         | rpm   |
| *component*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Health" label="Health">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| *firewalls*~*services*#service-status | N/A   |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                                      | Unité |
|:------------------------------------------------------------------------------|:------|
| interface status                                                              | N/A   |
| *interface_user_name~interface_real_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_user_name~interface_real_name*#interface.traffic.out.bitspersecond | b/s   |
| *interface_user_name~interface_real_name*#interface.packets.accepted.count    | count |
| *interface_user_name~interface_real_name*#interface.packets.blocked.count     | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                         | Unité |
|:---------------------------------|:------|
| memory.protected_host.percentage | %     |
| memory.fragmented.percentage     | %     |
| memory.connections.percentage    | %     |
| memory.icmp.percentage           | %     |
| memory.data_tracking.percentage  | %     |
| memory.dynamic.percentage        | %     |
| memory.ether_state.percentage    | %     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec des droits de lecture sur l'API est nécessaire.

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
dnf install centreon-pack-network-stormshield-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-stormshield-api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-stormshield-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-stormshield-api
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Stormshield API**
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
dnf install centreon-plugin-Network-Stormshield-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Stormshield-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-stormshield-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Stormshield-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Stormshield-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                      | Description                                                                                   | Valeur par défaut | Obligatoire |
|:---------------------------|:----------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STORMSHIELDAPIUSERNAME     | API username                                                                                  |                   | X           |
| STORMSHIELDAPIPASSWORD     | API password                                                                                  |                   | X           |
| STORMSHIELDAPIPROTO        | Specify https if needed (default: 'https')                                                    | https             |             |
| STORMSHIELDAPIPORT         | Port used (default: 443)                                                                      | 443               |             |
| STORMSHIELDAPIEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                 | Valeur par défaut | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCORE      | Core cpu to monitor (can be a regexp)                                                       |                   |             |
| WARNINGAVERAGE  | Thresholds                                                                                  |                   |             |
| CRITICALAVERAGE | Thresholds                                                                                  |                   |             |
| WARNINGCORE     | Thresholds                                                                                  |                   |             |
| CRITICALCORE    | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Ha" label="Ha">

| Macro                       | Description                                                                                                                                                                | Valeur par défaut                   | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:-----------:|
| UNKNOWNMEMBERLINKSTATUS     | Define the conditions to match for the status to be UNKNOWN (default: '%{linkStatus} =~ /unknown/i'). You can use the following variables: %{linkStatus}, %{name}          | %{linkStatus} =~ /unknown/i         |             |
| WARNINGMEMBERCONFIG         | Define the conditions to match for the status to be WARNING (default: '%{isConfigSync} eq "no"'). You can use the following variables: %{isConfigSync}, %{name}            | %{isConfigSync} eq "no"             |             |
| CRITICALMEMBERCONFIG        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{isConfigSync}, %{name}                                                |                                     |             |
| CRITICALMEMBERLINKSTATUS    | Define the conditions to match for the status to be CRITICAL (default: '%{linkStatus} =~ /failed\|failing/i'). You can use the following variables: %{linkStatus}, %{name} | %{linkStatus} =~ /failed\|failing/i |             |
| WARNINGMEMBERLINKSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{linkStatus}, %{name}                                                   |                                     |             |
| WARNINGMEMBERQUALITY        | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERQUALITY       | Thresholds                                                                                                                                                                 |                                     |             |
| WARNINGMEMBERSDETECTED      | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERSDETECTED     | Thresholds                                                                                                                                                                 |                                     |             |
| WARNINGMEMBERSDOWN          | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERSDOWN         | Thresholds                                                                                                                                                                 |                                     |             |
| WARNINGMEMBERSINITIALIZING  | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERSINITIALIZING | Thresholds                                                                                                                                                                 |                                     |             |
| WARNINGMEMBERSNONE          | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERSNONE         | Thresholds                                                                                                                                                                 |                                     |             |
| WARNINGMEMBERSREADY         | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERSREADY        | Thresholds                                                                                                                                                                 |                                     |             |
| WARNINGMEMBERSREBOOT        | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERSREBOOT       | Thresholds                                                                                                                                                                 |                                     |             |
| WARNINGMEMBERSRUNNING       | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERSRUNNING      | Thresholds                                                                                                                                                                 |                                     |             |
| WARNINGMEMBERSSTARTING      | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERSSTARTING     | Thresholds                                                                                                                                                                 |                                     |             |
| WARNINGMEMBERSTATE          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{name}.                                                        |                                     |             |
| CRITICALMEMBERSTATE         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{name}.                                                       |                                     |             |
| WARNINGMEMBERSWAITINGPEER   | Thresholds                                                                                                                                                                 |                                     |             |
| CRITICALMEMBERSWAITINGPEER  | Thresholds                                                                                                                                                                 |                                     |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles).                                                                                | --verbose                           |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'psu', 'temperature'.       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Health" label="Health">

| Macro                 | Description                                                                                                                                                 | Valeur par défaut     | Obligatoire |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| FILTERSERIAL          | Filter by firewalls by serial (can be a regexp)                                                                                                             |                       |             |
| WARNINGSERVICESTATUS  | Define the conditions to match for the status to be WARNING (default: '%{health} =~ /minor/i'). You can use the following variables: %{health}, %{service}  | %{health} =~ /minor/i |             |
| CRITICALSERVICESTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{health} =~ /major/i'). You can use the following variables: %{health}, %{service} | %{health} =~ /major/i |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles).                                                                 | --verbose             |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                   | Description                                                                                                                                                                                                           | Valeur par défaut                                   | Obligatoire |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERUSERNAME          | Filter interfaces by user name (regexp can be used)                                                                                                                                                                   |                                                     |             |
| FILTERREALNAME          | Filter interfaces by real name (regexp can be used)                                                                                                                                                                   |                                                     |             |
| WARNINGINTRAFFIC        | Thresholds                                                                                                                                                                                                            |                                                     |             |
| CRITICALINTRAFFIC       | Thresholds                                                                                                                                                                                                            |                                                     |             |
| WARNINGOUTTRAFFIC       | Thresholds                                                                                                                                                                                                            |                                                     |             |
| CRITICALOUTTRAFFIC      | Thresholds                                                                                                                                                                                                            |                                                     |             |
| WARNINGPACKETSACCEPTED  | Thresholds                                                                                                                                                                                                            |                                                     |             |
| CRITICALPACKETSACCEPTED | Thresholds                                                                                                                                                                                                            |                                                     |             |
| WARNINGPACKETSBLOCKED   | Thresholds                                                                                                                                                                                                            |                                                     |             |
| CRITICALPACKETSBLOCKED  | Thresholds                                                                                                                                                                                                            |                                                     |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL (default: "%{state} eq 'enabled' and %{plugged} eq 'unplugged'") You can use the following variables: %{state}, %{plugged}, %{user\_name}, %{real\_name} | %{state} eq "enabled" and %{plugged} eq "unplugged" |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{plugged}, %{user\_name}, %{real\_name}                                                                  |                                                     |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                           | --verbose                                           |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro              | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONN        | Thresholds                                                                                  |                   |             |
| CRITICALCONN       | Thresholds                                                                                  |                   |             |
| WARNINGDTRACK      | Thresholds                                                                                  |                   |             |
| CRITICALDTRACK     | Thresholds                                                                                  |                   |             |
| WARNINGDYN         | Thresholds                                                                                  |                   |             |
| CRITICALDYN        | Thresholds                                                                                  |                   |             |
| WARNINGETHERSTATE  | Thresholds                                                                                  |                   |             |
| CRITICALETHERSTATE | Thresholds                                                                                  |                   |             |
| WARNINGFRAG        | Thresholds                                                                                  |                   |             |
| CRITICALFRAG       | Thresholds                                                                                  |                   |             |
| WARNINGHOST        | Thresholds                                                                                  |                   |             |
| CRITICALHOST       | Thresholds                                                                                  |                   |             |
| WARNINGICMP        | Thresholds                                                                                  |                   |             |
| CRITICALICMP       | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                                                 | Valeur par défaut | Obligatoire |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNIT           | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. | s                 |             |
| WARNINGUPTIME  | Thresholds                                                                                                                                                  |                   |             |
| CRITICALUPTIME | Thresholds                                                                                                                                                  |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles).                                                                 |                   |             |

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
/usr/lib/centreon/plugins/centreon_stormshield_api.pl \
	--plugin=network::stormshield::api::plugin \
	--mode=memory \
	--hostname='10.0.0.1' \
	--proto='https' \
	--port='443' \
	--api-username='' \
	--api-password=''  \
	--warning-host='' \
	--critical-host='' \
	--warning-frag='' \
	--critical-frag='' \
	--warning-conn='' \
	--critical-conn='' \
	--warning-icmp='' \
	--critical-icmp='' \
	--warning-dtrack='' \
	--critical-dtrack='' \
	--warning-dyn='' \
	--critical-dyn='' \
	--warning-etherstate='' \
	--critical-etherstate='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: protected host: 99 % fragmented: 34 % connections: 78 % icmp: 87 % data tracking: 72 % dynamic: 51 % ether state: 8 % | 'memory.protected_host.percentage'=99%;;;0;100'memory.fragmented.percentage'=34%;;;0;100'memory.connections.percentage'=78%;;;0;100'memory.icmp.percentage'=87%;;;0;100'memory.data_tracking.percentage'=72%;;;0;100'memory.dynamic.percentage'=51%;;;0;100'memory.ether_state.percentage'=8%;;;0;100
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
/usr/lib/centreon/plugins/centreon_stormshield_api.pl \
	--plugin=network::stormshield::api::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                   | Modèle de service associé             |
|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/api/mode/cpu.pm)]                        | Net-Stormshield-Cpu-Api-custom        |
| ha [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/api/mode/ha.pm)]                          | Net-Stormshield-Ha-Api-custom         |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/api/mode/hardware.pm)]              | Net-Stormshield-Hardware-Api-custom   |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/api/mode/health.pm)]                  | Net-Stormshield-Health-Api-custom     |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/api/mode/interfaces.pm)]          | Net-Stormshield-Interfaces-Api-custom |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/api/mode/listinterfaces.pm)] | Used for service discovery            |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/api/mode/memory.pm)]                  | Net-Stormshield-Memory-Api-custom     |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/stormshield/api/mode/uptime.pm)]                  | Net-Stormshield-Uptime-Api-custom     |

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
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Stormshield API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --api-password                             | API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  | Set timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                               |
|:-------------------------|:------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'core', 'average'.    |
| --filter-core            | Core cpu to monitor (can be a regexp).    |

</TabItem>
<TabItem value="Ha" label="Ha">

| Option                        | Description                                                                                                                                                                                                            |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-member-state        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{name}                                                                                                    |
| --warning-member-state        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{name}                                                                                                    |
| --critical-member-state       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{name}                                                                                                   |
| --unknown-member-link-status  | Define the conditions to match for the status to be UNKNOWN (default: '%{linkStatus} =~ /unknown/i'). You can use the following variables: %{linkStatus}, %{name}                                                      |
| --warning-member-link-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{linkStatus}, %{name}                                                                                               |
| --critical-member-link-status | Define the conditions to match for the status to be CRITICAL (default: '%{linkStatus} =~ /failed\|failing/i'). You can use the following variables: %{linkStatus}, %{name}                                             |
| --unknown-member-config       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{isConfigSync}, %{name}                                                                                             |
| --warning-member-config       | Define the conditions to match for the status to be WARNING (default: '%{isConfigSync} eq "no"'). You can use the following variables: %{isConfigSync}, %{name}                                                        |
| --critical-member-config      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{isConfigSync}, %{name}                                                                                            |
| --warning-* --critical-*      | Thresholds. Can be: 'member-quality', 'members-detected', 'members-none', 'members-starting', 'members-waiting-peer', 'members-running', 'members-ready', 'members-reboot', 'members-down', 'members-initializing'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                           |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'disk', 'fan', 'psu', 'temperature'.                                                                                                                                |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan). You can also exclude items from specific instances: --filter=fan,1                                                                         |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                            |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='disk,WARNING,missing'   |
| --warning            | Set warning threshold for 'temperature', 'fan' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,40'                                                                                                 |
| --critical           | Set critical threshold for 'temperature', 'fan' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                               |

</TabItem>
<TabItem value="Health" label="Health">

| Option                    | Description                                                                                                                                                    |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-serial           | Filter by firewalls by serial (can be a regexp).                                                                                                               |
| --unknown-service-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{health}, %{service}                                        |
| --warning-service-status  | Define the conditions to match for the status to be WARNING (default: '%{health} =~ /minor/i'). You can use the following variables: %{health}, %{service}     |
| --critical-service-status | Define the conditions to match for the status to be CRITICAL (default: '%{health} =~ /major/i'). You can use the following variables: %{health}, %{service}    |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-real-name       | Filter interfaces by real name (regexp can be used).                                                                                                                                                                    |
| --filter-user-name       | Filter interfaces by user name (regexp can be used).                                                                                                                                                                    |
| --add-status             | Check interface status.                                                                                                                                                                                                 |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                |
| --add-errors             | Check interface errors.                                                                                                                                                                                                 |
| --units-traffic          | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                   |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{plugged}, %{user\_name}, %{real\_name}                                                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{plugged}, %{user\_name}, %{real\_name}                                                                    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: "%{state} eq 'enabled' and %{plugged} eq 'unplugged'") You can use the following variables: %{state}, %{plugged}, %{user\_name}, %{real\_name}   |
| --warning-* --critical-* | Thresholds. Can be: 'in-traffic', 'out-traffic', 'packets-accepted', 'packets-blocked',                                                                                                                                 |
| --speed                  | Set interface speed (in Mb).                                                                                                                                                                                            |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'host', 'frag', 'conn', 'icmp', 'dtrack', 'dyn', 'etherstate'.    |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                   | Description                                                                                                                                                   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-system-info        | Display product and firmware informations                                                                                                                     |
| --unit                   | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds   |
| --warning-* --critical-* | Thresholds. Can be: 'uptime'.                                                                                                                                 |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_stormshield_api.pl \
	--plugin=network::stormshield::api::plugin \
	--mode=memory \
	--help
```
