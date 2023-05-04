---
id: virtualization-vmware2-vcenter-generic
title: VMware vCenter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

VMWare est une solution de Virtualisation et d'infrastructure de Cloud Computing.

Le connecteur de supervision Centreon s'appuie sur le SDK VMWare pour requêter l'API du vCenter.

Avec le connecteur, Centreon peut superviser les VMs, Datastores, ESXs, Clusters, etc.

## Contenu du connecteur de supervision

### Objets supervisés

* Clusters
* Datastores
* Licenses
* VMs

### Règles de découvertes

| Nom de la règle                               | Description                                                       |
| :-------------------------------------------- | :---------------------------------------------------------------- |
| Virt-VMWare2-Datacenters-Alarm-Name           | Découvrez les Datacenters et supervisez leurs alarmes             | 
| Virt-VMWare2-vCenter-Clusters-Status-Name     | Découvrez les Clusters et supervisez leur statut                  |
| Virt-VMWare2-vCenter-Datastores-Io-Name       | Découvrez les Datastores et supervisez les I/O                    |
| Virt-VMWare2-vCenter-Datastores-Iops-Name     | Découvrez les Datastores et supervisez les Iops                   |
| Virt-VMWare2-vCenter-Datastores-Usage-Name    | Découvrez les Datastores et supervisez l'espace disponible        |
| Virt-VMWare2-vCenter-Datastores-Vm-Count-Name | Découvrez les Datastores et supervisez le nombre de VMs hébergées |

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Datacenter-Alarms-Global" label="Datacenter-Alarms-Global">

| Metric name                                        | Description                              | Unit  |
| :------------------------------------------------- | :--------------------------------------- | :---- |
| Status                                             | Status of the Datacenter                 |       |
| datacenter.alarms.warning.current.count            | Number of Total warning alarms           | Count |
| datacenter.alarms.critical.current.count           | Number of Total critical alarms          | Count |
| dcname#datacenter.alarms.warning.current.count     | Number of warning alarms per Datacenter  | Count |
| dcname#datacenter.alarms.critical.current.count    | Number of critical alarms per Datacenter | Count |

</TabItem>
<TabItem value="Cluster-Cpu-Global" label="Cluster-Cpu-Global">

| Metric name                                       | Description                   | Unit |
| :------------------------------------------------ | :---------------------------- | :--- |
| *cluster_name*#cluster.cpu.utilization.percentage | Total CPU usage in percentage | %    |
| *cluster_name*#cluster.cpu.utilization.mhz        | Total CPU usage in MHz        | MHz  |

</TabItem>
<TabItem value="Cluster-Status-Global" label="Cluster-Status-Global">

| Metric name | Description           | Unit |
| :---------- | :-------------------- | :--- |
| Status      | Status of the Cluster |      |

</TabItem>
<TabItem value="Datastore-Io-Global" label="Datastore-Io-Global">

| Metric name                                        | Description              | Unit |
| :------------------------------------------------- | :----------------------- | :--- |
| datastore.read.usage.bytespersecond                | Global read rate         | B/s  |
| datastore.write.usage.bytespersecond               | Global write rate        | B/s  |
| datastorename#datastore.read.usage.bytespersecond  | Read rate per Datastore  | B/s  |
| datastorename#datastore.write.usage.bytespersecond | Write rate per Datastore | B/s  |

</TabItem>
<TabItem value="Datastore-Iops-Global" label="Datastore-Iops-Global">

| Metric name                   | Description                        | Unit |
| :---------------------------- | :--------------------------------- | :--- |
| datastore.read.usage.iops     | Global read IOPS on the Datastore  | iops |
| datastore.write.usage.iops    | Global write IOPS on the Datastore | iops |
| datastore.vm.read.usage.iops  | Read IOPS per VM on the Datastore  | iops |
| datastore.vm.write.usage.iops | Write IOPS per VM on the Datastore | iops |

</TabItem>
<TabItem value="Datastore-Usage-Global" label="Datastore-Usage-Global">

| Metric name                       | Description                            | Unit |
| :-------------------------------- | :------------------------------------- | :--- |
| datastore.space.usage.bytes       | Usage of the Datastore                 | B    |
| datastore.space.free.bytes        | Free space left on the Datastore       | B    |
| datastore.space.usage.percentage  | Usage of the Datastore in percentage   | %    |
| datastore.space.provisioned.bytes | Provisioned Space allocated to the VMs | B    |

</TabItem>
<TabItem value="Datastore-Vm-Count-Global" label="Datastore-Vm-Count-Global">

| Metric name                            | Description                          | Unit  |
| :------------------------------------- | :----------------------------------- | :---- |
| datastore.vm.poweredon.current.count   | Number of powered on VMs on the ESX  | Count |
| datastore.vm.poweredoff.current.count  | Number of powered off VMs on the ESX | Count |
| datastore.vm.suspended.current.count   | Number of suspended VMs on the ESX   | Count |

</TabItem>
<TabItem value="Esx-Storage-Global" label="Esx-Storage-Global">

| Metric name                            | Description                                       | Unit |
| :------------------------------------- | :------------------------------------------------ | :--- |
| status                                 | Status of the ESX                                 |      |
| adapters status                        | Adapter statuses of the ESX                       |      |
| *esx_name*#host.adapters.total.count   | Number of adapters on the ESX                     |      |
| *esx_name*#host.adapters.online.count  | Number of adapters with status online on the ESX  |      |
| *esx_name*#host.adapters.offline.count | Number of adapters with status offline on the ESX |      |
| *esx_name*#host.adapters.fault.count   | Number of adapters with status fault on the ESX   |      |
| *esx_name*#host.adapters.unknown.count | Number of adapters with status unknown on the ESX |      |
| luns status                            | LUN statuses of the ESX                           |      |
| *esx_name*#host.luns.total.count       | Number of LUNs on the ESX                         |      |
| *esx_name*#host.luns.ok.count          | Number of LUNs with status ok on the ESX          |      |
| *esx_name*#host.luns.error.count       | Number of LUNs with status error on the ESX       |      |
| *esx_name*#host.luns.off.count         | Number of LUNs with status off on the ESX         |      |
| *esx_name*#host.luns.unknown.count     | Number of LUNs with status unknown on the ESX     |      |
| *esx_name*#host.luns.quiesced.count    | Number of LUNs with status quiesced on the ESX    |      |
| *esx_name*#host.luns.degraded.count    | Number of LUNs with status degraded on the ESX    |      |
| paths status                           | Paths statuses of the ESX                         |      |
| *esx_name*#host.paths.total.count      | Number of paths on the ESX                        |      |
| *esx_name*#host.paths.active.count     | Number of paths with status active on the ESX     |      |
| *esx_name*#host.paths.disabled.count   | Number of paths with status disabed on the ESX    |      |
| *esx_name*#host.paths.standby.count    | Number of paths with status standby on the ESX    |      |
| *esx_name*#host.paths.dead.count       | Number of paths with status dead on the ESX       |      |
| *esx_name*#host.paths.unknown.count    | Number of paths with status unknown on the ESX    |      |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric name                             | Description                                 | Unit |
| :-------------------------------------- | :------------------------------------------ | :--- |
| licenses.total.count                    | Number of licenses                          |      |
| *license_name*#license.usage.count      | Number of used resources on the license     |      |
| *license_name*#license.free.count       | Number of free resources on the license     |      |
| *license_name*#license.usage.percentage | Percentage of used resources on the license | %    |
| *license_name*#license.expires.days     | Expiration time                             |      |

</TabItem>
<TabItem value="Vm-Tools-Global" label="Vm-Tools-Global">

| Metric name                         | Description                                                   | Unit  |
| :---------------------------------- | :------------------------------------------------------------ | :---- |
| vm.tools.notupdated.current.count   | Number of VMs with VM-Tools not updated (default threshold)   | Count |
| vm.tools.notrunning.current.count   | Number of VMs with VM-Tools not running (default threshold)   | Count |
| vm.tools.notinstalled.current.count | Number of VMs with VM-Tools not installed (default threshold) | Count |

</TabItem>
</Tabs>

## Prérequis

### Configuration du connecteur Centreon VMWare

Pour la supervision VMWare, centreon utlise un daemon pour se connecter et requêter le vCenter.

Installer le daemon sur tous les Collecteurs :

```
yum install centreon-plugin-Virtualization-VMWare-daemon
```

Pour configurer les accès à votre infrastructure, éditer le fichier
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

ssurez vous d'avoir remplacé toutes les variables avec les informations nécessaires :

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

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant l'infrastructure VMWare :

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Installer le connecteur de supervision 'Vmware vCenter' depuis la page **Configuration > Gestionnaire de connecteurs de supervision** sur l'interface Web de Centreon.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant l'infrastructure VMWare:

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

2. Installer le RPM du connecteur de supervision contenant les modèles de supervision :

```bash
yum install centreon-pack-virtualization-vmware2-vcenter-generic.noarch
```

3. Installer le connecteur de supervision 'Vmware vCenter' depuis la page **Configuration > Gestionnaire de connecteurs de supervision** sur l'interface Web de Centreon.

</TabItem>
</Tabs>

## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle "Virt-VMWare2-VCenter-custom", et configurez toutes les macros :

| Mandatory   | Name                       | Description                                            |
| :---------- | :------------------------- | :----------------------------------------------------- |
| X           | CENTREONVMWARECONTAINER    | Name of your container in the file centreon_vmware.pm  |
| X           | CENTREONVMWAREHOST         | The Centreon server that launches the connection       |
| X           | CENTREONVMWAREPORT         | By default: 5700                                       |
|             | CENTREONVMWAREEXTRAOPTIONS | Customize it with your own if needed                   |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur centreon-engine :

```bash
/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --mode=snapshot-vm \
    --custommode=connector \
    --connector-hostname='localhost' \
    --connector-port='5700' \
    --container='vcenter01' \
    --vm-hostname='.*' \
    --filter \
    --filter-uuid='' \
    --warning='259200' \
    --critical='432000' \
    --disconnect-status='ok' \
    --nopoweredon-skip \
    --check-consolidation \
    --verbose
```

La commande retourne le message de sortie ci-dessous:

```bash
CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;
'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]
```

Cette commande contrôle les snapshots des machines virtuelles (```--plugin=apps::vmware::connector::plugin --mode=snapshot-vm```).
Le plugin se connecte au daemon VMWare sur **localhost** (```--connector-hostname='localhost'```) sur le port **5700** (```--connector-port='5700'```).
Puis la commande requête le **container** **vcenter01* (```--container='vcenter01'```).

La commande déclenchera une alerte WARNING si un snapshot est plus vieux de 3 jours / 259200s (```--warning='259200'```)
et une alerte CRITICAL si un snapshot est plus vieux de 5 jours / 432000s (```--warning='259200'```)

Vous pouvez afficher tous les modes disponibles à l'aide de la commande suivante :`

```bash
/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --list-mode
```

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option --help à la commande :

```bash
/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \
    --plugin=apps::vmware::connector::plugin \
    --mode=snapshot-vm  \
    --help
```

### J'obtiens les erreurs suivantes :

#### UNKNOWN: Unknown container name 'default' |

Ce message d'erreur signifie que le **container* passé en argument n'existe pas dans la configuration du connecteur VMWare.
Vérifiez la macro **CENTREONVMWARECONTAINER** sur l'hôte ou vérifiez la configuration dans le fichier */etc/centreon/centreon_vmware.pm*

#### UNKNOWN: Container connection problem |

Ce message signifie que vous avez un problème avec les identifiants liés à votre **container**.
Vérifiez les identifiants dans le fichier */etc/centreon/centreon_vmware.pm*.
Vous pouvez aussi regarder les logs pour plus d'informations: */var/log/centreon/centreon_vmware.log*

#### UNKNOWN: Cannot get response (timeout received)

Ce messsage d'erreur signifie que le plugin n'a pas eu de réponse du daemon VMWare.
Vérifiez vos paramètres de connexion et les macros **CENTREONVMWAREHOST** et **CENTREONVMWAREPORT**.
