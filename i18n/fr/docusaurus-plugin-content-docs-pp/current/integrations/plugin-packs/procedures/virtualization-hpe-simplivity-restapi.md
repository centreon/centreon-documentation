---
id: virtualization-hpe-simplivity-restapi
title: HPE Simplivity Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **HPE Simplivity Rest API** apporte un modèle d'hôte :

* **Virt-Hpe-Simplivity-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-Hpe-Simplivity-Restapi-custom" label="Virt-Hpe-Simplivity-Restapi-custom">

| Alias              | Modèle de service                                     | Description                                            | Découverte |
|:-------------------|:------------------------------------------------------|:-------------------------------------------------------|:----------:|
| Hosts              | Virt-Hpe-Simplivity-Hosts-Restapi-custom              | Contrôle permettant de vérifier les hôtes              | X          |
| Omnistack-Clusters | Virt-Hpe-Simplivity-Omnistack-Clusters-Restapi-custom | Contrôle permettant de vérifier les clusters Omnistack |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Hpe-Simplivity-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias            | Modèle de service                                   | Description                                             |
|:-----------------|:----------------------------------------------------|:--------------------------------------------------------|
| Virtual-Machines | Virt-Hpe-Simplivity-Virtual-Machines-Restapi-custom | Contrôle permettant de vérifier les machines virtuelles |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                       | Description                                                     |
|:--------------------------------------|:----------------------------------------------------------------|
| Virt-Hpe-Simplivity-Restapi-Host-Name | Découvre les hôtes et supervise leur statut et leur utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| hosts.alive.count                       | count |
| hosts.faulty.count                      | count |
| hosts.managed.count                     | count |
| hosts.removed.count                     | count |
| hosts.suspected.count                   | count |
| hosts.unknown.count                     | count |
| *hosts*~host-status                     | N/A   |
| *hosts*~host.components.green.count     | count |
| *hosts*~host.components.yellow.count    | count |
| *hosts*~host.components.red.count       | count |
| *hosts*~host.components.unknown.count   | count |
| *hosts*~raid-status                     | N/A   |
| *hosts*~*ldrives*#logical-drive-status  | N/A   |
| *hosts*~*pdrives*#physical-drive-status | N/A   |

</TabItem>
<TabItem value="Omnistack-Clusters" label="Omnistack-Clusters">

| Métrique                                               | Unité |
|:-------------------------------------------------------|:------|
| *clusters*~omnistack_cluster.ratio.deduplication.count | count |
| *clusters*~omnistack_cluster.ratio.compression.count   | count |
| *clusters*~omnistack_cluster.ratio.efficiency.count    | count |
| *clusters*~omnistack_cluster.space.usage.bytes         | B     |
| *clusters*~omnistack_cluster.space.free.bytes          | B     |
| *clusters*~omnistack_cluster.space.usage.percentage    | %     |

</TabItem>
<TabItem value="Virtual-Machines" label="Virtual-Machines">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| *vm*~ha-status                              | N/A   |
| *vm*~virtual_machine.space.usage.bytes      | B     |
| *vm*~virtual_machine.space.free.bytes       | B     |
| *vm*~virtual_machine.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre HPE Simplivity, l'API Rest doit être configurée:
* https://developer.hpe.com/platform/hpe-simplivity/home/

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
dnf install centreon-pack-virtualization-hpe-simplivity-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-hpe-simplivity-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-hpe-simplivity-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-hpe-simplivity-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **HPE Simplivity Rest API**
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
dnf install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-hpe-simplivity-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Hpe-Simplivity-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                    | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OMNISTACKAPIUSERNAME     | OmniStack API username                                                                                                                             |                   | X           |
| OMNISTACKAPIPASSWORD     | OmniStack API password                                                                                                                             |                   | X           |
| OMNISTACKAPIPROTO        | Specify https if needed                                                                                                                            | https             |             |
| OMNISTACKAPIPORT         | OmniStack API port                                                                                                                                 | 443               |             |
| OMNISTACKAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Macro                         | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| UNKNOWNRAIDSTATUS             | Set unknown threshold for component status. You can use the following variables: %{status}, %{name}                                              | %{status} =~ /unknown/   |             |
| UNKNOWNPHYSICALDRIVESTATUS    | Set unknown threshold for component status. You can use the following variables: %{status}, %{name}                                              | %{status} =~ /unknown/   |             |
| UNKNOWNLOGICALDRIVESTATUS     | Set unknown threshold for component status. You can use the following variables: %{status}, %{name}                                              | %{status} =~ /unknown/   |             |
| UNKNOWNHOSTSTATUS             | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                             | %{status} =~ /unknown/   |             |
| FILTERNAME                    | Filter hosts by name                                                                                                                             |                          |             |
| WARNINGHOSTCOMPONENTSGREEN    | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTCOMPONENTSGREEN   | Thresholds                                                                                                                                       |                          |             |
| WARNINGHOSTCOMPONENTSRED      | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTCOMPONENTSRED     | Thresholds                                                                                                                                       |                          |             |
| WARNINGHOSTCOMPONENTSUNKNOWN  | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTCOMPONENTSUNKNOWN | Thresholds                                                                                                                                       |                          |             |
| WARNINGHOSTCOMPONENTSYELLOW   | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTCOMPONENTSYELLOW  | Thresholds                                                                                                                                       |                          |             |
| WARNINGHOSTSALIVE             | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTSALIVE            | Thresholds                                                                                                                                       |                          |             |
| WARNINGHOSTSFAULTY            | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTSFAULTY           | Thresholds                                                                                                                                       |                          |             |
| WARNINGHOSTSMANAGED           | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTSMANAGED          | Thresholds                                                                                                                                       |                          |             |
| WARNINGHOSTSREMOVED           | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTSREMOVED          | Thresholds                                                                                                                                       |                          |             |
| WARNINGHOSTSSUSPECTED         | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTSSUSPECTED        | Thresholds                                                                                                                                       |                          |             |
| WARNINGHOSTSTATUS             | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                             | %{status} =~ /suspected/ |             |
| CRITICALHOSTSTATUS            | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                            | %{status} =~ /faulty/    |             |
| WARNINGHOSTSUNKNOWN           | Thresholds                                                                                                                                       |                          |             |
| CRITICALHOSTSUNKNOWN          | Thresholds                                                                                                                                       |                          |             |
| WARNINGLOGICALDRIVESTATUS     | Set warning threshold for component status. You can use the following variables: %{status}, %{name}                                              | %{status} =~ /yellow/    |             |
| CRITICALLOGICALDRIVESTATUS    | Set critical threshold for component status. You can use the following variables: %{status}, %{name}                                             | %{status} =~ /red/       |             |
| WARNINGPHYSICALDRIVESTATUS    | Set warning threshold for component status. You can use the following variables: %{status}, %{name}                                              | %{status} =~ /yellow/    |             |
| CRITICALPHYSICALDRIVESTATUS   | Set critical threshold for component status. You can use the following variables: %{status}, %{name}                                             | %{status} =~ /red/       |             |
| WARNINGRAIDSTATUS             | Set warning threshold for component status. You can use the following variables: %{status}, %{name}                                              | %{status} =~ /yellow/    |             |
| CRITICALRAIDSTATUS            | Set critical threshold for component status. You can use the following variables: %{status}, %{name}                                             | %{status} =~ /red/       |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                |             |

</TabItem>
<TabItem value="Omnistack-Clusters" label="Omnistack-Clusters">

| Macro                      | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                 | Filter clusters by name                                                                                                                          |                   |             |
| WARNINGRATIOCOMPRESSION    | Thresholds                                                                                                                                       |                   |             |
| CRITICALRATIOCOMPRESSION   | Thresholds                                                                                                                                       |                   |             |
| WARNINGRATIODEDUPLICATION  | Thresholds                                                                                                                                       |                   |             |
| CRITICALRATIODEDUPLICATION | Thresholds                                                                                                                                       |                   |             |
| WARNINGRATIOEFFICIENCY     | Thresholds                                                                                                                                       |                   |             |
| CRITICALRATIOEFFICIENCY    | Thresholds                                                                                                                                       |                   |             |
| WARNINGSPACEUSAGE          | Thresholds                                                                                                                                       |                   |             |
| CRITICALSPACEUSAGE         | Thresholds                                                                                                                                       |                   |             |
| WARNINGSPACEUSAGEFREE      | Thresholds                                                                                                                                       |                   |             |
| CRITICALSPACEUSAGEFREE     | Thresholds                                                                                                                                       |                   |             |
| WARNINGSPACEUSAGEPRCT      | Thresholds                                                                                                                                       |                   |             |
| CRITICALSPACEUSAGEPRCT     | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Virtual-Machines" label="Virtual-Machines">

| Macro                  | Description                                                                                                                                      | Valeur par défaut           | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNHASTATUS        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{ha\_status}, %{vm\_name}                     | %{ha\_status} =~ /unknown/  |             |
| FILTERVMNAME           | Filter virtual machines by virtual machine name                                                                                                  |                             |             |
| WARNINGHASTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{ha\_status}, %{vm\_name}                     | %{ha\_status} =~ /degraded/ |             |
| CRITICALHASTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{ha\_status}, %{vm\_name}                    |                             |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                                                                       |                             |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                                                                       |                             |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                                                                       |                             |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                                                                       |                             |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                                                                       |                             |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                                                                       |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                   |             |

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
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
	--plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
	--mode=hosts \
	--hostname='10.0.0.1' \
	--api-username='XXXX' \
	--api-password='XXXX' \
	--proto='https' \
	--port='443'  \
	--filter-name='' \
	--warning-host-components-green='' \
	--critical-host-components-green='' \
	--warning-host-components-yellow='' \
	--critical-host-components-yellow='' \
	--warning-host-components-red='' \
	--critical-host-components-red='' \
	--warning-host-components-unknown='' \
	--critical-host-components-unknown='' \
	--warning-hosts-alive='' \
	--critical-hosts-alive='' \
	--warning-hosts-faulty='' \
	--critical-hosts-faulty='' \
	--warning-hosts-managed='' \
	--critical-hosts-managed='' \
	--warning-hosts-removed='' \
	--critical-hosts-removed='' \
	--warning-hosts-suspected='' \
	--critical-hosts-suspected='' \
	--warning-hosts-unknown='' \
	--critical-hosts-unknown='' \
	--unknown-raid-status='%{status} =~ /unknown/' \
	--warning-raid-status='%{status} =~ /yellow/' \
	--critical-raid-status='%{status} =~ /red/' \
	--unknown-physical-drive-status='%{status} =~ /unknown/' \
	--warning-physical-drive-status='%{status} =~ /yellow/' \
	--critical-physical-drive-status='%{status} =~ /red/' \
	--unknown-logical-drive-status='%{status} =~ /unknown/' \
	--warning-logical-drive-status='%{status} =~ /yellow/' \
	--critical-logical-drive-status='%{status} =~ /red/' \
	--unknown-host-status='%{status} =~ /unknown/' \
	--warning-host-status='%{status} =~ /suspected/' \
	--critical-host-status='%{status} =~ /faulty/' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All hosts are ok | 'hosts.alive.count'=4;;;; 'hosts.faulty.count'=0;;;; 'hosts.managed.count'=0;;;; 'hosts.removed.count'=0;;;; 'hosts.suspected.count'=0;;;; 'hosts.unknown.count'=0;;;; 'svt01.acme.com#host.components.green.count'=15;;;; 'svt01.acme.com#host.components.yellow.count'=0;;;; 'svt01.acme.com#host.components.red.count'=0;;;; 'svt01.acme.com#host.components.unknown.count'=0;;;; 'svt02.acme.com#host.components.green.count'=15;;;; 'svt02.acme.com#host.components.yellow.count'=0;;;; 'svt02.acme.com#host.components.red.count'=0;;;; 'svt02.acme.com#host.components.unknown.count'=0;;;; 'svt11.acme.com#host.components.green.count'=15;;;; 'svt11.acme.com#host.components.yellow.count'=0;;;; 'svt11.acme.com#host.components.red.count'=0;;;; 'svt11.acme.com#host.components.unknown.count'=0;;;; 'svt12.acme.com#host.components.green.count'=15;;;; 'svt12.acme.com#host.components.yellow.count'=0;;;; 'svt12.acme.com#host.components.red.count'=0;;;; 'svt12.acme.com#host.components.unknown.count'=0;;;;
checking host 'svt01.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
checking host 'svt02.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
checking host 'svt11.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
checking host 'svt12.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
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
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
	--plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                            | Modèle de service associé                             |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/discovery.pm)]                  | Not used in this Monitoring Connector                 |
| hosts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/hosts.pm)]                          | Virt-Hpe-Simplivity-Hosts-Restapi-custom              |
| list-hosts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/listhosts.pm)]                 | Used for service discovery                            |
| omnistack-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/omnistackclusters.pm)] | Virt-Hpe-Simplivity-Omnistack-Clusters-Restapi-custom |
| virtual-machines [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/virtualization/hpe/simplivity/restapi/mode/virtualmachines.pm)]     | Virt-Hpe-Simplivity-Virtual-Machines-Restapi-custom   |

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
| --hostname                                 | OmniStack API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --port                                     | OmniStack API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | OmniStack API username                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --api-password                             | OmniStack API password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --timeout                                  | Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
<TabItem value="Hosts" label="Hosts">

| Option                           | Description                                                                                                                                                                                                                      |
|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name                    | Filter hosts by name.                                                                                                                                                                                                            |
| --unknown-host-status            | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /unknown/'). You can use the following variables: %{status}, %{name}                                                                         |
| --warning-host-status            | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /suspected/'). You can use the following variables: %{status}, %{name}                                                                       |
| --critical-host-status           | Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /faulty/'). You can use the following variables: %{status}, %{name}                                                                         |
| --unknown-raid-status            | Set unknown threshold for component status (default: '%{status} =~ /unknown/'). You can use the following variables: %{status}, %{name}                                                                                          |
| --warning-raid-status            | Set warning threshold for component status (default: '%{status} =~ /yellow/'). You can use the following variables: %{status}, %{name}                                                                                           |
| --critical-raid-status           | Set critical threshold for component status (default: '%{status} =~ /red/'). You can use the following variables: %{status}, %{name}                                                                                             |
| --unknown-logical-drive-status   | Set unknown threshold for component status (default: '%{status} =~ /unknown/'). You can use the following variables: %{status}, %{name}                                                                                          |
| --warning-logical-drive-status   | Set warning threshold for component status (default: '%{status} =~ /yellow/'). You can use the following variables: %{status}, %{name}                                                                                           |
| --critical-logical-drive-status  | Set critical threshold for component status (default: '%{status} =~ /red/'). You can use the following variables: %{status}, %{name}                                                                                             |
| --unknown-physical-drive-status  | Set unknown threshold for component status (default: '%{status} =~ /unknown/'). You can use the following variables: %{status}, %{name}                                                                                          |
| --warning-physical-drive-status  | Set warning threshold for component status (default: '%{status} =~ /yellow/'). You can use the following variables: %{status}, %{name}                                                                                           |
| --critical-physical-drive-status | Set critical threshold for component status (default: '%{status} =~ /red/'). You can use the following variables: %{status}, %{name}                                                                                             |
| --warning-* --critical-*         | Thresholds. Can be: 'hosts-alive', 'hosts-faulty', 'hosts-managed', 'hosts-removed', 'hosts-suspected', 'hosts-unknown', 'host-components-green', 'host-components-yellow', 'host-components-red', 'host-components-unknown'.    |

</TabItem>
<TabItem value="Omnistack-Clusters" label="Omnistack-Clusters">

| Option                   | Description                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter clusters by name.                                                                                                                      |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct', 'ratio-compression', 'ratio-deduplication', 'ratio-efficiency'.    |

</TabItem>
<TabItem value="Virtual-Machines" label="Virtual-Machines">

| Option                   | Description                                                                                                                                                         |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-vm-name         | Filter virtual machines by virtual machine name.                                                                                                                    |
| --unknown-ha-status      | Define the conditions to match for the status to be UNKNOWN (default: '%{status} =~ /unknown/'). You can use the following variables: %{ha\_status}, %{vm\_name}    |
| --warning-ha-status      | Define the conditions to match for the status to be WARNING (default: '%{status} =~ /degraded/'). You can use the following variables: %{ha\_status}, %{vm\_name}   |
| --critical-ha-status     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{ha\_status}, %{vm\_name}                                       |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                                                          |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
	--plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
	--mode=hosts \
	--help
```
