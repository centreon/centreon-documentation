---
id: virtualization-vmware2-vcenter-6
title: VMware vCenter v6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **VMware vCenter v6** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)
* [VMware vCenter](./virtualization-vmware2-vcenter-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **VMware vCenter v6** apporte un modèle d'hôte :

* **Virt-VMWare2-VCenter-6-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-VCenter-6-custom" label="Virt-VMWare2-VCenter-6-custom">

| Alias              | Modèle de service                       | Description                                                                                      |
|:-------------------|:----------------------------------------|:-------------------------------------------------------------------------------------------------|
| Vm-Snapshot-Global | Virt-VMWare2-Vc6-Snapshot-Global-custom | Contrôle permettant de vérifier l'âge des snapshosts sur plusieurs machine virtuelle (Vsphere 6) |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-VMWare2-VCenter-6-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                    | Description                                                                                                        |
|:----------------|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
| Vm-Limit-Global | Virt-VMWare2-Vc6-Limit-Global-custom | Contrôle permettant de vérifier la définition de limites (cpu, mémoire, disques) sur plusieurs machines virtuelles |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Nom           | Unité |
|:--------------|:------|
| cpu-status    | N/A   |
| memory-status | N/A   |
| disk-status   | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Nom                                 | Unité |
|:------------------------------------|:------|
| vm.snapshots.warning.current.count  | count |
| vm.snapshots.critical.current.count | count |

</TabItem>
</Tabs>

## Prérequis

### Configuration du connecteur Centreon VMWare

Pour la supervision VMWare, centreon utlise un daemon pour se connecter et requêter le vCenter.

Installer le daemon sur tous les collecteurs :

```shell
yum install centreon-plugin-Virtualization-VMWare-daemon
```

<Tabs groupId="sync">
<TabItem value="Centreon Cloud et OnPrem à partir de la 24.10" label="Centreon Cloud et OnPrem à partir de la 24.10">

Allez à la page [**Configuration > Connecteurs > Configurations additionnelles**](../getting-started/how-to-guides/acc.md) pour configurer la connexion à votre vCenter.

</TabItem>
<TabItem value="Versions de Centreon OnPrem antérieures à la 24.10" label="Versions de Centreon OnPrem antérieures à la 24.10">

Pour configurer les accès à votre infrastructure, éditez le fichier
"/etc/centreon/centreon\_vmware.pm" :

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        default => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        }
    }
);

1;
```

Assurez-vous d'avoir remplacé toutes les variables avec les informations nécessaires :

- _ip\_hostname_: Adresse IP ou nom d'hôte du vCenter ou de l'ESX (Si il est en mode standalone),
- _username_: utilisateur avec un accès "lecture seul" au vCenter ou à l'ESX (Vous pouvez utilisez un utilisateur du domaine),
- _password_: le mot de passe de l'utilisateur.

Vous pouvez configurer plusieurs connexions à différents vCenter ou ESX
en utilisant cette structure:

``` perl
%centreon_vmware_config = (
    vsphere_server => {
        'my_first_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<username>',
            password => '<password>'
        },
        'my_other_vcenter' => {
            url => 'https://<ip_hostname>/sdk',
            username => '<DOMAIN>\<username>',
            password => '<password>'
        },
    },
    port => 5700
);

1;
```

Chaque entrée est un **container**.

</TabItem>
</Tabs>

Pour démarrer le daemon et l'activer au démarrage :

``` bash
systemctl start centreon_vmware
systemctl enable centreon_vmware
```

Vous pouvez vérifiez que votre configuration est fonctionelle en consultant les journaux dans :
"/var/log/centreon/centreon\_vmware.log".

### Flux réseau

Le Collecteur Centreon avec le connecteur VMWare d'installé doit accéder en HTTPS (TCP/443) au vCenter.

Les Collecteurs requêtant le Collecteur avec le connecteur VMWare doit accéder en TCP/5700 au Collecteur avec le Connecteur VMWare.

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
dnf install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-vmware2-vcenter-6
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **VMware vCenter v6**
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
dnf install 
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install 
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install 
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install 
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-VMWare2-VCenter-6-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                      | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CENTREONVMWAREPORT         | The port used for the connection (by default: 5700)                                                                                                |                   |             |
| CENTREONVMWARECONTAINER    | Name of your container in the file `centreon_vmware.pm`                                                                                              |                   |             |
| CENTREONVMWAREHOST         | The Centreon server that launches the connection                                                                                                   |                   |             |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Macro                | Description                                                                                                                                              | Valeur par défaut                                              | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|:-----------:|
| FILTER               | VM hostname to check. If not set, we check all VMs                                                                                                       |                                                                |             |
| VMUUID               | Specify the VM's UUID                                                                                                                                    |                                                                |             |
| CRITICALCPUSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\} | %\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1 |             |
| WARNINGCPUSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}  |                                                                |             |
| CRITICALDISKSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\} | %\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1 |             |
| WARNINGDISKSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}  |                                                                |             |
| CRITICALMEMORYSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\} | %\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1 |             |
| WARNINGMEMORYSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}  |                                                                |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).         |  --check-disk-limit --verbose                                  |             |

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Macro        | Description                                                                                                                                      | Valeur par défaut                                                           | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|:-----------:|
| FILTER       | VM hostname to check. If not set, we check all VMs                                                                                               |                                                                             |             |
| VMUUID       | Specify the VM's UUID                                                                                                                            |                                                                             |             |
| WARNING      | Warning threshold for snapshot's age                                                                                                             |                                                                             |             |
| CRITICAL     | Critical threshold for snapshot's age                                                                                                            |                                                                             |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --disconnect-status='ok' --nopoweredon-skip --check-consolidation --verbose |             |

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
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=snapshot-vm \
	--custommode=connector \
	--connector-hostname='' \
	--connector-port='' \
	--container=''  \
	--vm-hostname='' \
	--filter \
	--filter-uuid='' \
	--warning='' \
	--critical='' \
	--disconnect-status='ok' \
	--nopoweredon-skip \
	--check-consolidation \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;
'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]
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
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                         | Modèle de service associé               |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| alarm-datacenter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmdatacenter.pm)]       | Not used in this Monitoring Connector   |
| alarm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmhost.pm)]                   | Not used in this Monitoring Connector   |
| countvm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/countvmhost.pm)]               | Not used in this Monitoring Connector   |
| cpu-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpucluster.pm)]                 | Not used in this Monitoring Connector   |
| cpu-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuhost.pm)]                       | Not used in this Monitoring Connector   |
| cpu-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuvm.pm)]                           | Not used in this Monitoring Connector   |
| datastore-countvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorecountvm.pm)]     | Not used in this Monitoring Connector   |
| datastore-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorehost.pm)]           | Not used in this Monitoring Connector   |
| datastore-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreio.pm)]               | Not used in this Monitoring Connector   |
| datastore-iops [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreiops.pm)]           | Not used in this Monitoring Connector   |
| datastore-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoresnapshot.pm)]   | Not used in this Monitoring Connector   |
| datastore-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreusage.pm)]         | Not used in this Monitoring Connector   |
| datastore-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorevm.pm)]               | Not used in this Monitoring Connector   |
| device-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/devicevm.pm)]                     | Not used in this Monitoring Connector   |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/discovery.pm)]                    | Not used in this Monitoring Connector   |
| getmap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/getmap.pm)]                          | Not used in this Monitoring Connector   |
| health-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/healthhost.pm)]                 | Not used in this Monitoring Connector   |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/licenses.pm)]                      | Not used in this Monitoring Connector   |
| limit-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/limitvm.pm)]                       | Virt-VMWare2-Vc6-Limit-Global-custom    |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listclusters.pm)]             | Not used in this Monitoring Connector   |
| list-datacenters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatacenters.pm)]       | Not used in this Monitoring Connector   |
| list-datastores [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatastores.pm)]         | Not used in this Monitoring Connector   |
| list-nichost [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listnichost.pm)]               | Not used in this Monitoring Connector   |
| maintenance-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/maintenancehost.pm)]       | Not used in this Monitoring Connector   |
| memory-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryhost.pm)]                 | Not used in this Monitoring Connector   |
| memory-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryvm.pm)]                     | Not used in this Monitoring Connector   |
| net-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/nethost.pm)]                       | Not used in this Monitoring Connector   |
| net-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/netvm.pm)]                           | Not used in this Monitoring Connector   |
| service-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/servicehost.pm)]               | Not used in this Monitoring Connector   |
| snapshot-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/snapshotvm.pm)]                 | Virt-VMWare2-Vc6-Snapshot-Global-custom |
| stat-connectors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statconnectors.pm)]         | Not used in this Monitoring Connector   |
| status-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statuscluster.pm)]           | Not used in this Monitoring Connector   |
| status-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statushost.pm)]                 | Not used in this Monitoring Connector   |
| status-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statusvm.pm)]                     | Not used in this Monitoring Connector   |
| storage-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/storagehost.pm)]               | Not used in this Monitoring Connector   |
| swap-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swaphost.pm)]                     | Not used in this Monitoring Connector   |
| swap-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swapvm.pm)]                         | Not used in this Monitoring Connector   |
| thinprovisioning-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/thinprovisioningvm.pm)] | Not used in this Monitoring Connector   |
| time-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/timehost.pm)]                     | Not used in this Monitoring Connector   |
| tools-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/toolsvm.pm)]                       | Not used in this Monitoring Connector   |
| uptime-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/uptimehost.pm)]                 | Not used in this Monitoring Connector   |
| vmoperation-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vmoperationcluster.pm)] | Not used in this Monitoring Connector   |
| vsan-cluster-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vsanclusterusage.pm)]    | Not used in this Monitoring Connector   |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option | Description |
|:-------|:------------|

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Vm-Limit-Global" label="Vm-Limit-Global">

| Option                   | Description                                                                                                                                                                                                                               |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                               |
| --vm-hostname            |   VM hostname to check. If not set, we check all VMs.                                                                                                                                                                                     |
| --filter                 |   VM hostname is a regexp.                                                                                                                                                                                                                |
| --filter-description     |   Filter also virtual machines description (can be a regexp).                                                                                                                                                                             |
| --filter-os              |   Filter also virtual machines OS name (can be a regexp).                                                                                                                                                                                 |
| --display-description    |   Display virtual machine description.                                                                                                                                                                                                    |
| --check-disk-limit       |   Check disk limits (since vsphere 5.0).                                                                                                                                                                                                  |
| --warning-disk-status    |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}                                                                   |
| --critical-disk-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1'). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}    |
| --warning-cpu-status     |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}                                                                   |
| --critical-cpu-status    |   Define the conditions to match for the status to be CRITICAL (default: '%\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1'). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}    |
| --warning-memory-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}                                                                   |
| --critical-memory-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{connection\_state\} !~ /^connected$/i \|\| %\{limit\} != -1'). You can use the following variables: %\{connection\_state\}, %\{power\_state\}, %\{limit\}    |

</TabItem>
<TabItem value="Vm-Snapshot-Global" label="Vm-Snapshot-Global">

| Option                | Description                                                                                                                                       |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         |   VM hostname to check. If not set, we check all VMs.                                                                                             |
| --filter              |   VM hostname is a regexp.                                                                                                                        |
| --filter-description  |   Filter also virtual machines description (can be a regexp).                                                                                     |
| --filter-os           |   Filter also virtual machines OS name (can be a regexp).                                                                                         |
| --scope-datacenter    |   Search in following datacenter(s) (can be a regexp).                                                                                            |
| --scope-cluster       |   Search in following cluster(s) (can be a regexp).                                                                                               |
| --scope-host          |   Search in following host(s) (can be a regexp).                                                                                                  |
| --display-description |   Display virtual machine description.                                                                                                            |
| --check-consolidation |   Check if VM needs consolidation (since vsphere 5.0).                                                                                            |
| --disconnect-status   |   Status if VM disconnected (default: 'unknown').                                                                                                 |
| --nopoweredon-skip    |   Skip check if VM is not poweredOn.                                                                                                              |
| --empty-continue      |   Ask to the connector that an empty response is ok.                                                                                              |
| --unit                |   Select the time unit for thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --warning             |   Warning threshold for snapshot's age.                                                                                                           |
| --critical            |   Critical threshold for snapshot's age.                                                                                                          |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=snapshot-vm \
	--help
```
