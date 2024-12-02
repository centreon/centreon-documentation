---
id: network-switchs-hp-procurve-snmp
title: HP Procurve SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **HP Procurve SNMP** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **HP Procurve SNMP** apporte un modèle d'hôte :

* **Net-Hp-Procurve-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Hp-Procurve-SNMP-custom" label="Net-Hp-Procurve-SNMP-custom">

| Alias       | Modèle de service                       | Description                                         |
|:------------|:----------------------------------------|:----------------------------------------------------|
| Cpu         | Net-Hp-Procurve-Cpu-SNMP-custom         | Contrôle du taux d'utilisation du CPU de la machine |
| Environment | Net-Hp-Procurve-Environment-SNMP-custom | Contrôle l'état du matériel                         |
| Memory      | Net-Hp-Procurve-Memory-SNMP-custom      | Contrôle l'utilisation mémoire du matériel          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Hp-Procurve-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                | Modèle de service                                | Description                                               | Découverte |
|:---------------------|:-------------------------------------------------|:----------------------------------------------------------|:----------:|
| Stack                | Net-Hp-Procurve-Stack-SNMP-custom                | Contrôle les membres du stack                             |            |
| Traffic-Generic-Id   | Net-Hp-Procurve-Traffic-Id-Generic-SNMP-custom   | Contrôle le traffic réseau d'une interface réseau         |            |
| Traffic-Generic-Name | Net-Hp-Procurve-Traffic-Name-Generic-SNMP-custom | Contrôle le traffic réseau d'une interface réseau         |            |
| Traffic-Global       | Net-Hp-Procurve-Traffic-Global-SNMP-custom       | Contrôle le traffic réseau de plusieurs interfaces réseau | X          |
| Virtual-Chassis      | Net-Hp-Procurve-Virtual-Chassis-SNMP-custom      | Contrôle l'état des châssis virtuels VSF                  |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                  |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **Net-Hp-Procurve-SNMP-custom**. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                   | Description                                                                                       |
|:----------------------------------|:--------------------------------------------------------------------------------------------------|
| Net-Hp-Procurve-SNMP-Traffic-Name | Découvre les interfaces réseau en utilisant leur nom et supervise leur statut et leur utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Nom       | Unité |
|:----------|:------|
| cpu_usage | %     |

</TabItem>
<TabItem value="Environment" label="Environment">

Pas de métrique pour ce service.

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                  | Unité |
|:---------------------|:------|
| used_*instance_name* | B     |

</TabItem>
<TabItem value="Stack" label="Stack">

| Nom           | Unité |
|:--------------|:------|
| member-status | N/A   |
| port-status   | N/A   |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Nom                                                  | Unité |
|:-----------------------------------------------------|:------|
| *interface_name*#status                              | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Virtual-Chassis" label="Virtual-Chassis">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| status                                     | N/A   |
| stack.members.total.count                  | count |
| member-status                              | N/A   |
| *member*~member.cpu.utilization.percentage | %     |
| *member*~member.memory.usage.bytes         | B     |
| *member*~member.memory.free.bytes          | B     |
| *member*~member.memory.usage.percentage    | %     |
| link-status                                | N/A   |
| link-status                                | N/A   |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Le service SNMP doit être activé et configuré sur l'équipement. 
Veuillez vous référer à la documentation officielle du constructeur/éditeur.
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
dnf install centreon-pack-network-switchs-hp-procurve-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-switchs-hp-procurve-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-switchs-hp-procurve-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-switchs-hp-procurve-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **HP Procurve SNMP**
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
dnf install centreon-plugin-Network-Switchs-Hp-Procurve-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Switchs-Hp-Procurve-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-switchs-hp-procurve-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Switchs-Hp-Procurve-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Hp-Procurve-SNMP-custom**.

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
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical threshold in percent                                                                                                                    | 95                |             |
| WARNING      | Warning threshold in percent                                                                                                                     | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Environment" label="Environment">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check. Can be: 'fan', 'psu', 'sensor', 'temperature'                                                                          | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical threshold in percent                                                                                                                    | 95                |             |
| WARNING      | Warning threshold in percent                                                                                                                     | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Stack" label="Stack">

| Macro                | Description                                                                                                                                                  | Valeur par défaut                                     | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| CRITICALMEMBERSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{role}, %{roleLast}, %{state}, %{stateLast}              | %{role} ne %{roleLast}                                |             |
| WARNINGMEMBERSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{role}, %{roleLast}, %{state}, %{stateLast}               |                                                       |             |
| CRITICALPORTSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admin\_status}, %{oper\_status}, %{display}             | %{admin\_status} eq "up"  and %{oper\_status} ne "up" |             |
| WARNINGPORTSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admin\_status}, %{oper\_status}, %{display}              |                                                       |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).             | --verbose                                             |             |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACEID  | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                        |                   |             |
| CRITICALIN   | Threshold                                                                                                                                        | 90                |             |
| WARNINGIN    | Threshold                                                                                                                                        | 80                |             |
| CRITICALOUT  | Threshold                                                                                                                                        | 90                |             |
| WARNINGOUT   | Threshold                                                                                                                                        | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Macro         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                        |                   |             |
| CRITICALIN    | Threshold                                                                                                                                        | 90                |             |
| WARNINGIN     | Threshold                                                                                                                                        | 80                |             |
| CRITICALOUT   | Threshold                                                                                                                                        | 90                |             |
| WARNINGOUT    | Threshold                                                                                                                                        | 80                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro          | Description                                                                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER         | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                           | .*                |             |
| CRITICALIN     | Threshold                                                                                                                                                                                                           | 90                |             |
| WARNINGIN      | Threshold                                                                                                                                                                                                           | 80                |             |
| CRITICALOUT    | Threshold                                                                                                                                                                                                           | 90                |             |
| WARNINGOUT     | Threshold                                                                                                                                                                                                           | 80                |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                    | --verbose         |             |

</TabItem>
<TabItem value="Virtual-Chassis" label="Virtual-Chassis">

| Macro                   | Description                                                                                                                                      | Valeur par défaut                                                                 | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|:-----------:|
| FILTERMEMBERSERIAL      | Filter members by serial (can be a regexp)                                                                                                       |                                                                                   |             |
| WARNINGCPUUTILIZATION   | Threshold                                                                                                                                        |                                                                                   |             |
| CRITICALCPUUTILIZATION  | Threshold                                                                                                                                        |                                                                                   |             |
| CRITICALLINKSTATUS      | Define the conditions to match for the status to be CRITICAL . You can use the following variables: %{link\_status}, %{display}                  | %{link\_status} eq "down"                                                         |             |
| WARNINGLINKSTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                    |                                                                                   |             |
| CRITICALMEMBERSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{stateLast}                        | %{state} ne %{stateLast} \|\| %{state} =~ /communicationFailure\|incompatibleOS/i |             |
| WARNINGMEMBERSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{stateLast}                         |                                                                                   |             |
| WARNINGMEMBERSTOTAL     | Threshold                                                                                                                                        |                                                                                   |             |
| CRITICALMEMBERSTOTAL    | Threshold                                                                                                                                        |                                                                                   |             |
| WARNINGMEMORYUSAGE      | Threshold                                                                                                                                        |                                                                                   |             |
| CRITICALMEMORYUSAGE     | Threshold                                                                                                                                        |                                                                                   |             |
| WARNINGMEMORYUSAGEFREE  | Threshold                                                                                                                                        |                                                                                   |             |
| CRITICALMEMORYUSAGEFREE | Threshold                                                                                                                                        |                                                                                   |             |
| WARNINGMEMORYUSAGEPRCT  | Threshold                                                                                                                                        |                                                                                   |             |
| CRITICALMEMORYUSAGEPRCT | Threshold                                                                                                                                        |                                                                                   |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}                                     | %{status} !~ /active/i                                                            |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}                                      |                                                                                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                                                                         |             |

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
/usr/lib/centreon/plugins/centreon_hp_procurve.pl \
	--plugin=network::hp::procurve::snmp::plugin \
	--mode=virtual-chassis \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-member-serial='' \
	--warning-member-status='' \
	--critical-member-status='%{state} ne %{stateLast} || %{state} =~ /communicationFailure|incompatibleOS/i' \
	--warning-cpu-utilization='' \
	--critical-cpu-utilization='' \
	--warning-memory-usage='' \
	--critical-memory-usage='' \
	--warning-memory-usage-free='' \
	--critical-memory-usage-free='' \
	--warning-memory-usage-prct='' \
	--critical-memory-usage-prct='' \
	--warning-status='' \
	--critical-status='%{status} !~ /active/i' \
	--warning-members-total='' \
	--critical-members-total='' \
	--warning-link-status='' \
	--critical-link-status='%{link\_status} eq "down"' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: total members: 39948 cpu usage: 42%   memory used : 73 % All links are ok | 'stack.members.total.count'=39948;;;0; 'member~member.cpu.utilization.percentage'=42%;;;0;100 'member~member.memory.usage.bytes'=91515B;;;0;total 'member~member.memory.free.bytes'=29972B;;;0;total 'member~member.memory.usage.percentage'=73%;;;0;100 
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
/usr/lib/centreon/plugins/centreon_hp_procurve.pl \
	--plugin=network::hp::procurve::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                    | Modèle de service associé                                                                                                                            |
|:----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/procurve/snmp/mode/cpu.pm)]                        | Net-Hp-Procurve-Cpu-SNMP-custom                                                                                                                      |
| environment [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/procurve/snmp/mode/environment.pm)]        | Net-Hp-Procurve-Environment-SNMP-custom                                                                                                              |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/procurve/snmp/mode/interfaces.pm)]          | Net-Hp-Procurve-Traffic-Id-Generic-SNMP-custom<br />Net-Hp-Procurve-Traffic-Name-Generic-SNMP-custom<br />Net-Hp-Procurve-Traffic-Global-SNMP-custom |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]            | Used for service discovery                                                                                                                           |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/procurve/snmp/mode/memory.pm)]                  | Net-Hp-Procurve-Memory-SNMP-custom                                                                                                                   |
| stack [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/procurve/snmp/mode/stack.pm)]                    | Net-Hp-Procurve-Stack-SNMP-custom                                                                                                                    |
| virtual-chassis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/hp/procurve/snmp/mode/virtualchassis.pm)] | Net-Hp-Procurve-Virtual-Chassis-SNMP-custom                                                                                                          |

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

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option     | Description                              |
|:-----------|:-----------------------------------------|
| --warning  |   Warning threshold in percent.          |
| --critical |   Critical threshold in percent.         |

</TabItem>
<TabItem value="Environment" label="Environment">

| Option               | Description                                                                                                                                                                                                                     |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'fan', 'psu', 'sensor', 'temperature'.                                                                                                                                      |
| --filter             |   Exclude the items given as a comma-separated list (example: --filter=sensor). You can also exclude items from specific instances: --filter=sensor,fan.1                                                                       |
| --absent-problem     |   Return an error if an entity is not 'present' (default is skipping) (comma separated list) Can be specific or global: --absent-problem=sensor,temperature.2                                                                   |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                    |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='sensor,CRITICAL,^(?!(good)$)'   |
| --warning            |   Set warning threshold for 'temperature' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,40'                                                                                                                |
| --critical           |   Set critical threshold for 'temperature' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                                              |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                  |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                 |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option     | Description                              |
|:-----------|:-----------------------------------------|
| --warning  |   Warning threshold in percent.          |
| --critical |   Critical threshold in percent.         |

</TabItem>
<TabItem value="Stack" label="Stack">

| Option                   | Description                                                                                                                                                                                                         |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\                                                                                                  |yyyy$'                                                                                              |
| --unknown-member-status  | Define the conditions to match for the status to be UNKNOWN (Default: ''). You can use the following variables: %{role}, %{roleLast}, %{state}, %{stateLast}                                                        |
| --warning-member-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{role}, %{roleLast}, %{state}, %{stateLast}                                                        |
| --critical-member-status | Define the conditions to match for the status to be CRITICAL (Default: '%{role} ne %{roleLast}'). You can use the following variables: %{role}, %{roleLast}, %{state}, %{stateLast}                                 |
| --unknown-port-status    | Define the conditions to match for the status to be UNKNOWN (Default: ''). You can use the following variables: %{admin\_status}, %{oper\_status}, %{display}                                                       |
| --warning-port-status    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{admin\_status}, %{oper\_status}, %{display}                                                       |
| --critical-port-status   | Define the conditions to match for the status to be CRITICAL (Default: '%{admin\_status} eq "up"  and %{oper\_status} ne "up"'). You can use the following variables: %{admin\_status}, %{oper\_status}, %{display} |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                           |
| --add-global                                    |   Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                                                                                                                                                              |
| --add-status                                    |   Check interface status.                                                                                                                                                                                                                                                                                                                                                                                                             |
| --add-duplex-status                             |   Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                                                                                                                                                                  |
| --add-traffic                                   |   Check interface traffic.                                                                                                                                                                                                                                                                                                                                                                                                            |
| --add-errors                                    |   Check interface errors.                                                                                                                                                                                                                                                                                                                                                                                                             |
| --add-cast                                      |   Check interface cast.                                                                                                                                                                                                                                                                                                                                                                                                               |
| --add-speed                                     |   Check interface speed.                                                                                                                                                                                                                                                                                                                                                                                                              |
| --add-volume                                    |   Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                                                                                                                                                               |
| --check-metrics                                 |   If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                                                                                                                                                                    |
| --warning-status                                |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                                                                                                                            |
| --critical-status                               |   Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                                                                 |
| --warning-* --critical-*                        |   Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).  And also: 'input-power' (dBm), 'bias-current' (mA), 'output-power' (dBm), 'voltage' (mV), 'module-temperature' (C), 'poe-power-actual'.   |
| --units-traffic                                 |   Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                                                                                                                                                               |
| --units-errors                                  |   Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                                                                                                   |
| --units-cast                                    |   Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                                                                                                                                                               |
| --nagvis-perfdata                               |   Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                                                                                                                                                                       |
| --interface                                     |   Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                                                                                                                                                          |
| --name                                          |   Allows you to define the interface (in option --interface) by name instead of OID index. The name matching mode supports regular expressions.                                                                                                                                                                                                                                                                                       |
| --regex-id                                      |   With this option, interface IDs will be filtered using the --interface parameter as a regular expression instead of a list of IDs.                                                                                                                                                                                                                                                                                                  |
| --speed                                         |   Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                                                                                          |
| --speed-in                                      |   Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                                                                                                                                                                   |
| --speed-out                                     |   Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                                                                                                                                                                   |
| --map-speed-dsl                                 |   Get interface speed configuration for interfaces of type 'ADSL' and 'VDSL2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                                                                                                                                                                 |
| --force-counters64                              |   Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                                                                                                                                                             |
| --force-counters32                              |   Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                                                                                                                                                            |
| --reload-cache-time                             |   Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                                                                                                                                                         |
| --oid-filter                                    |   Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                                                                                         |
| --oid-display                                   |   Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                                                                                                                                                |
| --oid-extra-display                             |   Add an OID to display.                                                                                                                                                                                                                                                                                                                                                                                                              |
| --display-transform-src --display-transform-dst |   Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens'  will replace all occurrences of 'eth' with 'ens'                                                                                                                                                                                                                                   |
| --show-cache                                    |   Display cache interface data.                                                                                                                                                                                                                                                                                                                                                                                                       |
| --memcached                                     |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-server                                  |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                     |
| --redis-attribute                               |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                             |
| --redis-db                                      |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                           |
| --failback-file                                 |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                |
| --memexpiration                                 |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-dir                                 |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-suffix                              |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-concat-cwd                          |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                         |
| --statefile-format                              |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                               |
| --statefile-key                                 |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-cipher                              |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                  |
| --add-poe                                       |   Check power over thernet.                                                                                                                                                                                                                                                                                                                                                                                                           |
| --add-optical                                   |   Check interface optical metrics.                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-poe-status                            |   Set warning threshold for poe status. You can use the following variables: %{admstatus}, %{opstatus}, %{poestatus}, %{display}                                                                                                                                                                                                                                                                                                      |
| --critical-poe-status                           |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admstatus}, %{opstatus}, %{poestatus}, %{display}                                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Virtual-Chassis" label="Virtual-Chassis">

| Option                   | Description                                                                                                                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                  |
| --filter-member-serial   |   Filter members by serial (can be a regexp).                                                                                                                                                                                |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}                                                                                                                |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}                                                                                                                |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /active/i'). You can use the following variables: %{status}                                                                           |
| --unknown-member-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{stateLast}                                                                                                   |
| --warning-member-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{stateLast}                                                                                                   |
| --critical-member-status |   Define the conditions to match for the status to be CRITICAL (default: '%{state} ne %{stateLast} \|\| %{state} =~ /communicationFailure\|incompatibleOS/i'). You can use the following variables: %{state}, %{stateLast}   |
| --unknown-link-status    |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{link\_status}, %{display}                                                                                              |
| --warning-link-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                                                                              |
| --critical-link-status   |   Define the conditions to match for the status to be CRITICAL (default: '%{link\_status} eq "down"'). You can use the following variables: %{link\_status}, %{display}                                                      |
| --warning-* --critical-* |   Thresholds. Can be: 'members-total', 'memory-usage-prct', 'memory-usage', 'memory-usage-free', 'cpu-utilization'.                                                                                                          |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_procurve.pl \
	--plugin=network::hp::procurve::snmp::plugin \
	--mode=virtual-chassis \
	--help
```
