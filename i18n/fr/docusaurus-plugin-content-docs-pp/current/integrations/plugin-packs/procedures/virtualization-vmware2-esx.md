---
id: virtualization-vmware2-esx
title: VMware ESX
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

VMWare est une solution de Virtualisation et d'infrastructure de Cloud Computing.

Le connecteur de supervision Centreon s'appuie sur le SDK Centreon VMWare Connecteur pour requêter l'API du vCenter.

Avec le connecteur, Centreon peut superviser les VMs, Datastores, ESXs, Clusters, etc.

## Contenu du pack

### Modèles

Le connecteur de supervision **VMware ESX** apporte un modèle d'hôte :

* **Virt-VMWare2-ESX-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-ESX-custom" label="Virt-VMWare2-ESX-custom">

| Alias        | Modèle de service                        | Description                                                                                                      |
|:-------------|:-----------------------------------------|:-----------------------------------------------------------------------------------------------------------------|
| Esx-Cpu      | Virt-VMWare2-ESX-Cpu-Generic-custom      | Contrôle permettant de vérifier le taux d'utilisation CPU d'un serveur ESX                                       |
| Esx-Health   | Virt-VMWare2-ESX-Health-Generic-custom   | Contrôle permettant de vérifier les sondes matériels et processeurs d'un serveur ESX                             |
| Esx-Memory   | Virt-VMWare2-ESX-Memory-Generic-custom   | Contrôle permettant de vérifier le taux d'utilisation mémoire d'un serveur ESX                                   |
| Esx-Status   | Virt-VMWare2-ESX-Status-Generic-custom   | Contrôle permettant de vérifier l'état global d'un serveur ESX                                                   |
| Esx-Swap     | Virt-VMWare2-ESX-Swap-Generic-custom     | Contrôle permettant de vérifier si une machine virtuelle swappe sur le serveur ESX                               |
| Esx-Vm-Count | Virt-VMWare2-ESX-Vm-Count-Generic-custom | Contrôle permettant de vérifier le nombre de machines virtuelles allumées/éteintes/suspendues sur un serveur ESX |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-VMWare2-ESX-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                  | Modèle de service                                  | Description                                                                                                                          | Découverte |
|:-----------------------|:---------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|:----------:|
| Datastore-Io           | Virt-VMWare2-Datastore-Io-Generic-custom           | Contrôle permettant de vérifier le taux d'utilisation en Kbps d'un datastore                                                         |            |
| Datastore-Iops         | Virt-VMWare2-Datastore-Iops-Generic-custom         | Contrôle permettant de vérifier les IOPs moyens d'un datastore                                                                       |            |
| Datastore-Snapshots    | Virt-VMWare2-Datastore-Snapshots-Generic-custom    | Contrôle permettant de vérifier le taux d'utilisation des snapshots sur un datastore                                                 |            |
| Datastore-Usage        | Virt-VMWare2-Datastore-Usage-Generic-custom        | Contrôle permettant de vérifier le taux d'utilisation d'un datastore                                                                 |            |
| Datastore-Vm-Count     | Virt-VMWare2-Datastore-Vm-Count-Generic-custom     | Contrôle permettant de vérifier le nombre de machines virtuelles allumées/éteintes/suspendues sur un datastore                       |            |
| ESX-Alarms             | Virt-VMWare2-ESX-Alarms-Generic-custom             | Contrôle permettant de vérifier les alarmes d'un ESX                                                                                 |            |
| Esx-Datastores-Latency | Virt-VMWare2-ESX-Datastores-Latency-Generic-custom | Contrôle permettant de vérifier la latence rencontrée par le serveur ESX sur ses datastores                                           | X          |
| Esx-Service            | Virt-VMWare2-ESX-Service-Generic-custom            | Contrôle permettant de vérifier l'état des services d'un serveur ESX                                                                 |            |
| Esx-Storage            | Virt-VMWare2-ESX-Storage-Generic-custom            | Contrôle permettant de vérifier les informations de stockage                                                                         |            |
| Esx-Time               | Virt-VMWare2-ESX-Time-Generic-custom               | Contrôle permettant de vérifier le décalage de temps d'un serveur ESX                                                                |            |
| Esx-Traffic            | Virt-VMWare2-ESX-Traffic-Generic-custom            | Contrôle permettant de vérifier le taux d'utilisation des interfaces réseau physiques d'un serveur ESX. Les seuils sont en pourcent | X          |
| Esx-Uptime             | Virt-VMWare2-ESX-Uptime-Generic-custom             | Contrôle permettant de récuperer l'uptime en jours d'un serveur ESX                                                                  |            |
| Esx-is-Maintenance     | Virt-VMWare2-ESX-Maintenance-Generic-custom        | Contrôle permettant de vérifier le mode de maintenance d'un serveur ESX                                                              |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description         |
|:----------------|:--------------------|
| VMWare ESX      | Discover VMWare ESX |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de service

| Nom de la règle                          | Description                                                   |
|:-----------------------------------------|:--------------------------------------------------------------|
| Virt-VMWare2-Esx-Datastores-Latency-Name |                                                               |
| Virt-VMWare2-Esx-Nics-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Datastore-Io" label="Datastore-Io">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| datastore.read.usage.bytespersecond              | B/s   |
| datastore.write.usage.bytespersecond             | B/s   |
| *datastore*#status                               | N/A   |
| *datastore*#datastore.read.usage.bytespersecond  | B/s   |
| *datastore*#datastore.write.usage.bytespersecond | B/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Datastore-Iops" label="Datastore-Iops">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| datastores.read.usage.iops                     | iops  |
| datastores.write.usage.iops                    | iops  |
| *datastore*~status                             | N/A   |
| *datastore*~datastore.read.usage.iops          | iops  |
| *datastore*~datastore.write.usage.iops         | iops  |
| *datastore*~*vm*#datastore.vm.read.usage.iops  | iops  |
| *datastore*~*vm*#datastore.vm.write.usage.iops | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Datastore-Snapshots" label="Datastore-Snapshots">

| Métrique                                           | Unité |
|:---------------------------------------------------|:------|
| *datastore*~status                                 | N/A   |
| *datastore*~datastore.snapshots.usage.bytes        | B     |
| *datastore*~*files*#datastore.snapshot.usage.bytes | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Datastore-Usage" label="Datastore-Usage">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| *datastore*#status                            | N/A   |
| *datastore*#datastore.space.usage.bytes       | B     |
| *datastore*#datastore.space.free.bytes        | B     |
| *datastore*#datastore.space.usage.percentage  | %     |
| *datastore*#datastore.space.provisioned.bytes | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Datastore-Vm-Count" label="Datastore-Vm-Count">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| datastore.vm.poweredon.current.count              | count |
| datastore.vm.poweredoff.current.count             | count |
| datastore.vm.suspended.current.count              | count |
| *datastore*#status                                | N/A   |
| *datastore*#datastore.vm.poweredon.current.count  | count |
| *datastore*#datastore.vm.poweredoff.current.count | count |
| *datastore*#datastore.vm.suspended.current.count  | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="ESX-Alarms" label="ESX-Alarms">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| host.alarms.warning.current.count  | count |
| host.alarms.critical.current.count | count |
| status                             | N/A   |
| alarm-warning                      | N/A   |
| alarm-critical                     | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Cpu" label="Esx-Cpu">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| *host*~status                                     | N/A   |
| *host*~host.cpu.utilization.percentage            | %     |
| *host*~host.cpu.utilization.mhz                   | MHz   |
| *host*~*cpu*#host.core.cpu.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Datastores-Latency" label="Esx-Datastores-Latency">

| Métrique                                                     | Unité |
|:-------------------------------------------------------------|:------|
| *host*~status                                                | N/A   |
| *host*~*datastore*#host.datastore.latency.read.milliseconds  | ms    |
| *host*~*datastore*#host.datastore.latency.write.milliseconds | ms    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Health" label="Esx-Health">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| host.health.problems.current.count                    | count |
| *host*~status                                         | N/A   |
| *host*~ok                                             | N/A   |
| *host*~host.health.problems.current.count             | count |
| *host*~host.health.yellow.current.count               | count |
| *host*~host.health.red.current.count                  | count |
| *host*~*global_summary*#global-summary                | N/A   |
| *host*~*sensors_temp*#host.sensor.temperature.celsius | C     |
| *host*~*sensors_fan*#host.sensor.fan.speed.rpm        | rpm   |
| *host*~*sensors_voltage*#host.sensor.voltage.volt     | V     |
| *host*~*sensors_power*#host.sensor.power.watt         | W     |

</TabItem>
<TabItem value="Esx-Memory" label="Esx-Memory">

| Métrique                          | Unité |
|:----------------------------------|:------|
| *host*#status                     | N/A   |
| *host*#host.memory.usage.bytes    | B     |
| *host*#host.memory.overhead.bytes | B     |
| *host*#host.memory.state.count    | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Service" label="Esx-Service">

| Métrique                        | Unité |
|:--------------------------------|:------|
| *host*~status                   | N/A   |
| *host*~*service*#service-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Status" label="Esx-Status">

| Métrique              | Unité |
|:----------------------|:------|
| *host*#status         | N/A   |
| *host*#overall-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Storage" label="Esx-Storage">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| *host*~status                      | N/A   |
| *host*~host.adapters.total.count   | count |
| *host*~host.adapters.online.count  | count |
| *host*~host.adapters.offline.count | count |
| *host*~host.adapters.fault.count   | count |
| *host*~host.adapters.unknown.count | count |
| *host*~host.luns.total.count       | count |
| *host*~host.luns.ok.count          | count |
| *host*~host.luns.error.count       | count |
| *host*~host.luns.off.count         | count |
| *host*~host.luns.unknown.count     | count |
| *host*~host.luns.quiesced.count    | count |
| *host*~host.luns.degraded.count    | count |
| *host*~host.paths.total.count      | count |
| *host*~host.paths.active.count     | count |
| *host*~host.paths.disabled.count   | count |
| *host*~host.paths.standby.count    | count |
| *host*~host.paths.dead.count       | count |
| *host*~host.paths.unknown.count    | count |
| *host*~*adapters*#adapter-status   | N/A   |
| *host*~*luns*#lun-status           | N/A   |
| *host*~*paths*#path-status         | N/A   |

</TabItem>
<TabItem value="Esx-Swap" label="Esx-Swap">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *host*#status                             | N/A   |
| *host*#host.swap.in.usage.bytespersecond  | B/s   |
| *host*#host.swap.out.usage.bytespersecond | B/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Time" label="Esx-Time">

| Métrique                        | Unité |
|:--------------------------------|:------|
| *host*#status                   | N/A   |
| *host*#host.time.offset.seconds | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Traffic" label="Esx-Traffic">

| Métrique                                                 | Unité |
|:---------------------------------------------------------|:------|
| *host*~status                                            | N/A   |
| *host*~host.traffic.in.bitsperseconds                    | b/s   |
| *host*~host.traffic.out.bitsperseconds                   | b/s   |
| *host*~*pnic*#link-status                                | N/A   |
| *host*~*pnic*#host.traffic.in.bitsperseconds             | b/s   |
| *host*~*pnic*#host.traffic.out.bitsperseconds            | b/s   |
| *host*~*pnic*#host.packets.in.dropped.percentage         | %     |
| *host*~*pnic*#host.packets.out.dropped.percentage        | %     |
| *host*~*vswitch*#host.vswitch.traffic.in.bitsperseconds  | b/s   |
| *host*~*vswitch*#host.vswitch.traffic.out.bitsperseconds | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Uptime" label="Esx-Uptime">

| Métrique                          | Unité |
|:----------------------------------|:------|
| *host*#status                     | N/A   |
| *host*#host.uptime.offset.seconds | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-Vm-Count" label="Esx-Vm-Count">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| host.vm.poweredon.current.count         | count |
| host.vm.poweredoff.current.count        | count |
| host.vm.suspended.current.count         | count |
| *host*#status                           | N/A   |
| *host*#host.vm.poweredon.current.count  | count |
| *host*#host.vm.poweredoff.current.count | count |
| *host*#host.vm.suspended.current.count  | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Esx-is-Maintenance" label="Esx-is-Maintenance">

| Métrique                  | Unité |
|:--------------------------|:------|
| *host*#status             | N/A   |
| *host*#maintenance-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration du connecteur Centreon VMWare

Pour la supervision VMWare, centreon utilise un daemon pour se connecter et requêter le vCenter.

Installer le daemon sur tous les pollers :

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

Assurez vous d'avoir remplacé toutes les variables avec les informations nécessaires :

- _ip\_hostname_: Adresse IP ou nom d'hôte du vCenter ou de l'ESX (s'il est en mode standalone),
- _username_: utilisateur avec un accès "lecture seule" au vCenter ou à l'ESX (vous pouvez utiliser un utilisateur du domaine),
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

Vous pouvez vérifiez que votre configuration est fonctionelle en consultant les journaux dans **/var/log/centreon/centreon\_vmware.log**.

### Balises et Attributs personnalisés

> Pour découvrir les balises et les attributs personnalisés, vous devez utiliser la version 3.2.5 de **centreon-vmware-daemon** et ajouter **--tags** dans les options supplémentaires de découverte.             
>Allez à la page **Configuration > Hôtes > Découverte**, et à la 3ème étape (**Définir les paramètres de découverte**), dans la section **Paramètres supplémentaires**, dans le champ **Options supplémentaires**, saisissez **--tags**.

### Flux réseau

Le Collecteur Centreon avec le connecteur VMWare d'installé doit accéder en HTTPS (TCP/443) au vCenter.

Les Collecteurs requêtant le Collecteur avec le connecteur VMWare doivent accéder en TCP/5700 au Collecteur avec le Connecteur VMWare.

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
dnf install centreon-pack-virtualization-vmware2-esx
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-vmware2-esx
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-virtualization-vmware2-esx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-vmware2-esx
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **VMware ESX**
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
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-virtualization-vmware2-connector-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-VMWare2-ESX-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                      | Description                                                                                           | Valeur par défaut | Obligatoire |
|:---------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CENTREONVMWAREPORT         | Connector port (default: 5700)                                                                        | 5700              |             |
| CENTREONVMWARECONTAINER    | Container to use (it depends on the connector's configuration)                                          | default           |             |
| CENTREONVMWAREHOST         | Connector hostname (required)                                                                         | localhost         |             |
| ESXNAME                    | ESX hostname to check. If not set, we check all ESX                                                   |                   |             |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Datastore-Io" label="Datastore-Io">

| Macro              | Description                                                                                                                                                | Valeur par défaut             | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true\|1$/i |             |
| DATASTORENAME      | datastore name to list                                                                                                                                     |                               |             |
| WARNINGREAD        | Warning threshold                                                                                                                                          |                               |             |
| CRITICALREAD       | Critical threshold                                                                                                                                         |                               |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                               |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                               |             |
| WARNINGTOTALREAD   | Warning threshold                                                                                                                                          |                               |             |
| CRITICALTOTALREAD  | Critical threshold                                                                                                                                         |                               |             |
| WARNINGTOTALWRITE  | Warning threshold                                                                                                                                          |                               |             |
| CRITICALTOTALWRITE | Critical threshold                                                                                                                                         |                               |             |
| WARNINGWRITE       | Warning threshold                                                                                                                                          |                               |             |
| CRITICALWRITE      | Critical threshold                                                                                                                                         |                               |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                        |                               |             |

</TabItem>
<TabItem value="Datastore-Iops" label="Datastore-Iops">

| Macro              | Description                                                                                                                                                | Valeur par défaut             | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true\|1$/i |             |
| DATASTORENAME      | datastore name to list                                                                                                                                     |                               |             |
| WARNINGREAD        | Thresholds                                                                                                                                                 |                               |             |
| CRITICALREAD       | Thresholds                                                                                                                                                 |                               |             |
| WARNINGREADTOTAL   | Thresholds                                                                                                                                                 |                               |             |
| CRITICALREADTOTAL  | Thresholds                                                                                                                                                 |                               |             |
| WARNINGREADVM      | Thresholds                                                                                                                                                 |                               |             |
| CRITICALREADVM     | Thresholds                                                                                                                                                 |                               |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                               |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                               |             |
| WARNINGWRITE       | Thresholds                                                                                                                                                 |                               |             |
| CRITICALWRITE      | Thresholds                                                                                                                                                 |                               |             |
| WARNINGWRITETOTAL  | Thresholds                                                                                                                                                 |                               |             |
| CRITICALWRITETOTAL | Thresholds                                                                                                                                                 |                               |             |
| WARNINGWRITEVM     | Thresholds                                                                                                                                                 |                               |             |
| CRITICALWRITEVM    | Thresholds                                                                                                                                                 |                               |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                        |                               |             |

</TabItem>
<TabItem value="Datastore-Snapshots" label="Datastore-Snapshots">

| Macro            | Description                                                                                                                                                | Valeur par défaut             | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| UNKNOWNSTATUS    | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true\|1$/i |             |
| DATASTORENAME    | datastore name to list                                                                                                                                     |                               |             |
| WARNINGSNAPSHOT  | Warning threshold                                                                                                                                          |                               |             |
| CRITICALSNAPSHOT | Critical threshold                                                                                                                                         |                               |             |
| WARNINGSTATUS    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                               |             |
| CRITICALSTATUS   | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                               |             |
| WARNINGTOTAL     | Warning threshold                                                                                                                                          |                               |             |
| CRITICALTOTAL    | Critical threshold                                                                                                                                         |                               |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                        |                               |             |

</TabItem>
<TabItem value="Datastore-Usage" label="Datastore-Usage">

| Macro               | Description                                                                                                                                                | Valeur par défaut             | Obligatoire |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| UNKNOWNSTATUS       | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true\|1$/i |             |
| UNIT                |                                                                                                                                                            | %                             |             |
| DATASTORENAME       | datastore name to list                                                                                                                                     |                               |             |
| WARNINGPROVISIONED  | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                                               |                               |             |
| CRITICALPROVISIONED | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                                               |                               |             |
| WARNINGSTATUS       | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                               |             |
| CRITICALSTATUS      | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                               |             |
| WARNINGUSAGE        | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                                               | 80                            |             |
| CRITICALUSAGE       | Thresholds. : 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'                                                                               | 90                            |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                        |                               |             |

</TabItem>
<TabItem value="Datastore-Vm-Count" label="Datastore-Vm-Count">

| Macro                  | Description                                                                                                                                                | Valeur par défaut             | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible} | %{accessible} !~ /^true\|1$/i |             |
| DATASTORENAME          | datastore name to check                                                                                                                                    |                               |             |
| WARNINGOFF             | Warning threshold                                                                                                                                          |                               |             |
| CRITICALOFF            | Critical threshold                                                                                                                                         |                               |             |
| WARNINGON              | Warning threshold                                                                                                                                          |                               |             |
| CRITICALON             | Critical threshold                                                                                                                                         |                               |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                              |                               |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                             |                               |             |
| WARNINGSUSPENDED       | Warning threshold                                                                                                                                          |                               |             |
| CRITICALSUSPENDED      | Critical threshold                                                                                                                                         |                               |             |
| WARNINGTOTALOFF        | Warning threshold                                                                                                                                          |                               |             |
| CRITICALTOTALOFF       | Critical threshold                                                                                                                                         |                               |             |
| WARNINGTOTALON         | Warning threshold                                                                                                                                          |                               |             |
| CRITICALTOTALON        | Critical threshold                                                                                                                                         |                               |             |
| WARNINGTOTALSUSPENDED  | Warning threshold                                                                                                                                          |                               |             |
| CRITICALTOTALSUSPENDED | Critical threshold                                                                                                                                         |                               |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                        |                               |             |

</TabItem>
<TabItem value="ESX-Alarms" label="ESX-Alarms">

| Macro                      | Description                                                                                                                                                                 | Valeur par défaut           | Obligatoire |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERTIME                 | Don't check alarm older (value in seconds)                                                                                                                                  | 3600                        |             |
| WARNINGSTATUS              | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type} | %{status} =~ /yellow/i      |             |
| CRITICALSTATUS             | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}  | %{status} =~ /red/i         |             |
| WARNINGTOTALALARMWARNING   | Warning threshold                                                                                                                                                           |                             |             |
| CRITICALTOTALALARMWARNING  | Critical threshold                                                                                                                                                          |                             |             |
| WARNINGTOTALALARMCRITICAL  | Warning threshold                                                                                                                                                           |                             |             |
| CRITICALTOTALALARMCRITICAL | Critical threshold                                                                                                                                                          |                             |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                         | --verbose --ignore-warn-msg |             |

</TabItem>
<TabItem value="Esx-Cpu" label="Esx-Cpu">

| Macro               | Description                                                                                                                                          | Valeur par défaut           | Obligatoire |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNSTATUS       | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNING             | Warning threshold                                                                                                                                    |                             |             |
| CRITICAL            | Critical threshold                                                                                                                                   |                             |             |
| WARNINGCPU          | Warning threshold                                                                                                                                    |                             |             |
| CRITICALCPU         | Critical threshold                                                                                                                                   |                             |             |
| WARNINGSTATUS       | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS      | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGTOTALCPUMHZ  | Warning threshold                                                                                                                                    |                             |             |
| CRITICALTOTALCPUMHZ | Critical threshold                                                                                                                                   |                             |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                  |                             |             |

</TabItem>
<TabItem value="Esx-Datastores-Latency" label="Esx-Datastores-Latency">

| Macro                | Description                                                                                                                                          | Valeur par défaut           | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERDATASTORENAME  | Datastore to check. If not set, we check all datastores                                                                                              | .*                          |             |
| UNKNOWNSTATUS        | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGREADLATENCY   | Warning threshold                                                                                                                                    |                             |             |
| CRITICALREADLATENCY  | Critical threshold                                                                                                                                   |                             |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGWRITELATENCY  | Warning threshold                                                                                                                                    |                             |             |
| CRITICALWRITELATENCY | Critical threshold                                                                                                                                   |                             |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                  | --verbose                   |             |

</TabItem>
<TabItem value="Esx-Health" label="Esx-Health">

| Macro                  | Description                                                                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} |                   |             |
| WARNINGPROBLEMS        | Thresholds                                                                                                                                           |                   |             |
| CRITICALPROBLEMS       | Thresholds                                                                                                                                           |                   |             |
| WARNINGPROBLEMSRED     | Thresholds                                                                                                                                           |                   |             |
| CRITICALPROBLEMSRED    | Thresholds                                                                                                                                           |                   |             |
| WARNINGPROBLEMSYELLOW  | Thresholds                                                                                                                                           |                   |             |
| CRITICALPROBLEMSYELLOW | Thresholds                                                                                                                                           |                   |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                   |             |
| WARNINGTOTALPROBLEMS   | Thresholds                                                                                                                                           |                   |             |
| CRITICALTOTALPROBLEMS  | Thresholds                                                                                                                                           |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                  | --verbose         |             |

</TabItem>
<TabItem value="Esx-Memory" label="Esx-Memory">

| Macro                  | Description                                                                                                                                          | Valeur par défaut           | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNING                | Warning threshold (can use unit option)                                                                                                              |                             |             |
| CRITICAL               | Critical threshold (can use unit option)                                                                                                             |                             |             |
| WARNINGOVERHEADMEMORY  | Overhead threshold                                                                                                                                   |                             |             |
| CRITICALOVERHEADMEMORY | Critical threshold                                                                                                                                   |                             |             |
| WARNINGSTATEMEMORY     | Warning threshold. For state != 'high': --warning-state=0                                                                                            |                             |             |
| CRITICALSTATEMEMORY    | Critical threshold. For state != 'high': --warning-state=0                                                                                           |                             |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                  |                             |             |

</TabItem>
<TabItem value="Esx-Service" label="Esx-Service">

| Macro                 | Description                                                                                                                                                                                   | Valeur par défaut                                         | Obligatoire |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}            | %{status} !~ /^connected$/i && %{maintenance} =~ /false/i |             |
| FILTERSERVICES        | Filter services you want to check (can be a regexp)                                                                                                                                           | ^(?!(snmpd\|xorg)$)                                       |             |
| CRITICALSERVICESTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{policy} =~ /^on\|automatic/i && !%{running}'). You can use the following variables: %{running}, %{label}, %{policy} | %{policy} =~ /^on\|automatic/i && !%{running}             |             |
| WARNINGSERVICESTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{running}, %{label}, %{policy}                                               |                                                           |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                                                     |                                                           |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                                                    |                                                           |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                           | --verbose                                                 |             |

</TabItem>
<TabItem value="Esx-Status" label="Esx-Status">

| Macro                 | Description                                                                                                                                                       | Valeur par défaut               | Obligatoire |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:-----------:|
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}              | %{status} !~ /^connected$/i     |             |
| UNKNOWNOVERALLSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}   | %{overall\_status} =~ /gray/i   |             |
| WARNINGOVERALLSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status} | %{overall\_status} =~ /yellow/i |             |
| CRITICALOVERALLSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}   | %{overall\_status} =~ /red/i    |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                         |                                 |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                        |                                 |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                               | --verbose                       |             |

</TabItem>
<TabItem value="Esx-Storage" label="Esx-Storage">

| Macro                   | Description                                                                                                                                                                                        | Valeur par défaut                                         | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS           | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}, %{maintenance} | %{status} !~ /^connected$/i && %{maintenance} =~ /false/i |             |
| FILTERADAPTERNAME       | Filter adapters by name (can be a regexp)                                                                                                                                                          |                                                           |             |
| FILTERLUNNAME           | Filter luns by name (can be a regexp)                                                                                                                                                              |                                                           |             |
| FILTERPATHNAME          | Filter paths by name (can be a regexp)                                                                                                                                                             |                                                           |             |
| WARNINGADAPTERSFAULT    | Thresholds                                                                                                                                                                                         |                                                           |             |
| CRITICALADAPTERSFAULT   | Thresholds                                                                                                                                                                                         |                                                           |             |
| WARNINGADAPTERSOFFLINE  | Thresholds                                                                                                                                                                                         |                                                           |             |
| CRITICALADAPTERSOFFLINE | Thresholds                                                                                                                                                                                         |                                                           |             |
| WARNINGADAPTERSONLINE   | Thresholds                                                                                                                                                                                         |                                                           |             |
| CRITICALADAPTERSONLINE  | Thresholds                                                                                                                                                                                         |                                                           |             |
| CRITICALADAPTERSTATUS   | Set critical threshold for adapter status (Default: '%{status} =~ /fault/'). You can use the following variables: %{name}, %{host}, %{status}                                                      | %{status} =~ /fault/                                      |             |
| WARNINGADAPTERSTATUS    | Set warning threshold for adapter status. You can use the following variables: %{name}, %{host}, %{status}                                                                                         |                                                           |             |
| WARNINGADAPTERSTOTAL    | Thresholds                                                                                                                                                                                         |                                                           |             |
| CRITICALADAPTERSTOTAL   | Thresholds                                                                                                                                                                                         |                                                           |             |
| WARNINGADAPTERSUNKNOWN  | Thresholds                                                                                                                                                                                         |                                                           |             |
| CRITICALADAPTERSUNKNOWN | Thresholds                                                                                                                                                                                         |                                                           |             |
| WARNINGLUNSDEGRADED     |                                                                                                                                                                                                    |                                                           |             |
| CRITICALLUNSDEGRADED    |                                                                                                                                                                                                    |                                                           |             |
| WARNINGLUNSERROR        |                                                                                                                                                                                                    |                                                           |             |
| CRITICALLUNSERROR       |                                                                                                                                                                                                    |                                                           |             |
| WARNINGLUNSOFF          |                                                                                                                                                                                                    |                                                           |             |
| CRITICALLUNSOFF         |                                                                                                                                                                                                    |                                                           |             |
| WARNINGLUNSOK           |                                                                                                                                                                                                    |                                                           |             |
| CRITICALLUNSOK          |                                                                                                                                                                                                    |                                                           |             |
| WARNINGLUNSQUIESCED     |                                                                                                                                                                                                    |                                                           |             |
| CRITICALLUNSQUIESCED    |                                                                                                                                                                                                    |                                                           |             |
| WARNINGLUNSTATUS        | Set warning threshold for lun status (Default: '%{status} =~ /degraded\|quiesced/'). You can use the following variables: %{name}, %{host}, %{status}                                              | %{status} =~ /degraded\|quiesced/                         |             |
| CRITICALLUNSTATUS       | Set critical threshold for lun status (Default: '%{status} =~ /lostcommunication\|error/'). You can use the following variables: %{name}, %{host}, %{status}                                       | %{status} =~ /lostcommunication\|error/                   |             |
| WARNINGLUNSTOTAL        |                                                                                                                                                                                                    |                                                           |             |
| CRITICALLUNSTOTAL       |                                                                                                                                                                                                    |                                                           |             |
| WARNINGLUNSUNKNOWN      |                                                                                                                                                                                                    |                                                           |             |
| CRITICALLUNSUNKNOWN     |                                                                                                                                                                                                    |                                                           |             |
| WARNINGPATHSACTIVE      |                                                                                                                                                                                                    |                                                           |             |
| CRITICALPATHSACTIVE     |                                                                                                                                                                                                    |                                                           |             |
| WARNINGPATHSDEAD        |                                                                                                                                                                                                    |                                                           |             |
| CRITICALPATHSDEAD       |                                                                                                                                                                                                    |                                                           |             |
| WARNINGPATHSDISABLED    |                                                                                                                                                                                                    |                                                           |             |
| CRITICALPATHSDISABLED   |                                                                                                                                                                                                    |                                                           |             |
| WARNINGPATHSSTANDBY     |                                                                                                                                                                                                    |                                                           |             |
| CRITICALPATHSSTANDBY    |                                                                                                                                                                                                    |                                                           |             |
| CRITICALPATHSTATUS      | Set critical threshold for path status (Default: '%{status} =~ /dead/'). You can use the following variables: %{name}, %{host}, %{status}                                                          | %{status} =~ /dead/                                       |             |
| WARNINGPATHSTATUS       | Set warning threshold for path status. You can use the following variables: %{name}, %{host}, %{status}                                                                                            |                                                           |             |
| WARNINGPATHSTOTAL       |                                                                                                                                                                                                    |                                                           |             |
| CRITICALPATHSTOTAL      |                                                                                                                                                                                                    |                                                           |             |
| WARNINGPATHSUNKNOWN     |                                                                                                                                                                                                    |                                                           |             |
| CRITICALPATHSUNKNOWN    |                                                                                                                                                                                                    |                                                           |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{maintenance}                                                                        |                                                           |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{maintenance}                                                                       |                                                           |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                | --verbose                                                 |             |

</TabItem>
<TabItem value="Esx-Swap" label="Esx-Swap">

| Macro           | Description                                                                                                                                          | Valeur par défaut           | Obligatoire |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNSTATUS   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGSWAPIN   | Warning threshold                                                                                                                                    |                             |             |
| CRITICALSWAPIN  | Critical threshold                                                                                                                                   |                             |             |
| WARNINGSWAPOUT  | Warning threshold                                                                                                                                    |                             |             |
| CRITICALSWAPOUT | Critical threshold                                                                                                                                   |                             |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                  |                             |             |

</TabItem>
<TabItem value="Esx-Time" label="Esx-Time">

| Macro          | Description                                                                                                                                          | Valeur par défaut           | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGTIME    | Warning threshold in seconds                                                                                                                         | -2:2                        |             |
| CRITICALTIME   | Critical threshold in seconds                                                                                                                        | -5:5                        |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                  |                             |             |

</TabItem>
<TabItem value="Esx-Traffic" label="Esx-Traffic">

| Macro                  | Description                                                                                                                                                         | Valeur par défaut           | Obligatoire |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| FILTERNICNAME          | ESX nic to check. If not set, we check all nics                                                                                                                     | .*                          |             |
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                | %{status} !~ /^connected$/i |             |
| UNKNOWNLINKSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                       |                             |             |
| WARNINGDROPPEDIN       | Thresholds                                                                                                                                                          |                             |             |
| CRITICALDROPPEDIN      | Thresholds                                                                                                                                                          |                             |             |
| WARNINGDROPPEDOUT      | Thresholds                                                                                                                                                          |                             |             |
| CRITICALDROPPEDOUT     | Thresholds                                                                                                                                                          |                             |             |
| WARNINGHOSTTRAFFICIN   | Thresholds                                                                                                                                                          |                             |             |
| CRITICALHOSTTRAFFICIN  | Thresholds                                                                                                                                                          |                             |             |
| WARNINGHOSTTRAFFICOUT  | Thresholds                                                                                                                                                          |                             |             |
| CRITICALHOSTTRAFFICOUT | Thresholds                                                                                                                                                          |                             |             |
| WARNINGIN              | Thresholds                                                                                                                                                          | 80                          |             |
| CRITICALIN             | Thresholds                                                                                                                                                          | 90                          |             |
| CRITICALLINKSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: '%{link\_status} !~ /up/'). You can use the following variables: %{link\_status}, %{display} | %{link\_status} !~ /up/     |             |
| WARNINGLINKSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                       |                             |             |
| WARNINGOUT             | Thresholds                                                                                                                                                          | 80                          |             |
| CRITICALOUT            | Thresholds                                                                                                                                                          | 90                          |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                           |                             |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                          |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                 | --verbose                   |             |

</TabItem>
<TabItem value="Esx-Uptime" label="Esx-Uptime">

| Macro          | Description                                                                                                                                          | Valeur par défaut           | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGTIME    | Warning threshold in seconds                                                                                                                         |                             |             |
| CRITICALTIME   | Critical threshold in seconds                                                                                                                        |                             |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                  |                             |             |

</TabItem>
<TabItem value="Esx-Vm-Count" label="Esx-Vm-Count">

| Macro                  | Description                                                                                                                                          | Valeur par défaut           | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNSTATUS          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status} | %{status} !~ /^connected$/i |             |
| WARNINGOFF             | Warning threshold                                                                                                                                    |                             |             |
| CRITICALOFF            | Critical threshold                                                                                                                                   |                             |             |
| WARNINGON              | Warning threshold                                                                                                                                    |                             |             |
| CRITICALON             | Critical threshold                                                                                                                                   |                             |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                            |                             |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                           |                             |             |
| WARNINGSUSPENDED       | Warning threshold                                                                                                                                    |                             |             |
| CRITICALSUSPENDED      | Critical threshold                                                                                                                                   |                             |             |
| WARNINGTOTALOFF        | Warning threshold                                                                                                                                    |                             |             |
| CRITICALTOTALOFF       | Critical threshold                                                                                                                                   |                             |             |
| WARNINGTOTALON         | Warning threshold                                                                                                                                    |                             |             |
| CRITICALTOTALON        | Critical threshold                                                                                                                                   |                             |             |
| WARNINGTOTALSUSPENDED  | Warning threshold                                                                                                                                    |                             |             |
| CRITICALTOTALSUSPENDED | Critical threshold                                                                                                                                   |                             |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                  |                             |             |

</TabItem>
<TabItem value="Esx-is-Maintenance" label="Esx-is-Maintenance">

| Macro                     | Description                                                                                                                                              | Valeur par défaut           | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| UNKNOWNSTATUS             | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}     | %{status} !~ /^connected$/i |             |
| CRITICALMAINTENANCESTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{maintenance} !~ /false/'). You can use the following variables: %{maintenance} | %{maintenance} !~ /false/   |             |
| WARNINGMAINTENANCESTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{maintenance}                           |                             |             |
| WARNINGSTATUS             | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                |                             |             |
| CRITICALSTATUS            | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                               |                             |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                      |                             |             |

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
	--mode=countvm-host \
	--custommode=connector \
	--connector-hostname='localhost' \
	--connector-port='5700' \
	--container='default'  \
	--esx-hostname='' \
	--unknown-status='%{status} !~ /^connected$/i' \
	--warning-status='' \
	--critical-status='' \
	--warning-total-on='' \
	--critical-total-on='' \
	--warning-total-off='' \
	--critical-total-off='' \
	--warning-total-suspended='' \
	--critical-total-suspended='' \
	--warning-on='' \
	--critical-on='' \
	--warning-off='' \
	--critical-off='' \
	--warning-suspended='' \
	--critical-suspended='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 51 VM(s) poweredon 93 VM(s) poweredoff 18 VM(s) suspended All ESX Hosts are ok | 'host.vm.poweredon.current.count'=51;;;0;total'host.vm.poweredoff.current.count'=93;;;0;total'host.vm.suspended.current.count'=18;;;0;total'*host*#host.vm.poweredon.current.count'=;;;0;total'*host*#host.vm.poweredoff.current.count'=;;;0;total'*host*#host.vm.suspended.current.count'=;;;0;total
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

| Mode                                                                                                                                         | Modèle de service associé                          |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| alarm-datacenter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmdatacenter.pm)]       | Not used in this Monitoring Connector              |
| alarm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmhost.pm)]                   | Virt-VMWare2-ESX-Alarms-Generic-custom             |
| countvm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/countvmhost.pm)]               | Virt-VMWare2-ESX-Vm-Count-Generic-custom           |
| cpu-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpucluster.pm)]                 | Not used in this Monitoring Connector              |
| cpu-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuhost.pm)]                       | Virt-VMWare2-ESX-Cpu-Generic-custom                |
| cpu-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuvm.pm)]                           | Not used in this Monitoring Connector              |
| datastore-countvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorecountvm.pm)]     | Virt-VMWare2-Datastore-Vm-Count-Generic-custom     |
| datastore-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorehost.pm)]           | Virt-VMWare2-ESX-Datastores-Latency-Generic-custom |
| datastore-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreio.pm)]               | Virt-VMWare2-Datastore-Io-Generic-custom           |
| datastore-iops [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreiops.pm)]           | Virt-VMWare2-Datastore-Iops-Generic-custom         |
| datastore-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoresnapshot.pm)]   | Virt-VMWare2-Datastore-Snapshots-Generic-custom    |
| datastore-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreusage.pm)]         | Virt-VMWare2-Datastore-Usage-Generic-custom        |
| datastore-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorevm.pm)]               | Not used in this Monitoring Connector              |
| device-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/devicevm.pm)]                     | Not used in this Monitoring Connector              |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/discovery.pm)]                    | Used for host discovery                            |
| getmap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/getmap.pm)]                          | Not used in this Monitoring Connector              |
| health-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/healthhost.pm)]                 | Virt-VMWare2-ESX-Health-Generic-custom             |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/licenses.pm)]                      | Not used in this Monitoring Connector              |
| limit-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/limitvm.pm)]                       | Not used in this Monitoring Connector              |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listclusters.pm)]             | Not used in this Monitoring Connector              |
| list-datacenters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatacenters.pm)]       | Not used in this Monitoring Connector              |
| list-datastores [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatastores.pm)]         | Used for service discovery                         |
| list-nichost [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listnichost.pm)]               | Used for service discovery                         |
| maintenance-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/maintenancehost.pm)]       | Virt-VMWare2-ESX-Maintenance-Generic-custom        |
| memory-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryhost.pm)]                 | Virt-VMWare2-ESX-Memory-Generic-custom             |
| memory-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryvm.pm)]                     | Not used in this Monitoring Connector              |
| net-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/nethost.pm)]                       | Virt-VMWare2-ESX-Traffic-Generic-custom            |
| net-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/netvm.pm)]                           | Not used in this Monitoring Connector              |
| service-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/servicehost.pm)]               | Virt-VMWare2-ESX-Service-Generic-custom            |
| snapshot-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/snapshotvm.pm)]                 | Not used in this Monitoring Connector              |
| stat-connectors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statconnectors.pm)]         | Not used in this Monitoring Connector              |
| status-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statuscluster.pm)]           | Not used in this Monitoring Connector              |
| status-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statushost.pm)]                 | Virt-VMWare2-ESX-Status-Generic-custom             |
| status-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statusvm.pm)]                     | Not used in this Monitoring Connector              |
| storage-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/storagehost.pm)]               | Virt-VMWare2-ESX-Storage-Generic-custom            |
| swap-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swaphost.pm)]                     | Virt-VMWare2-ESX-Swap-Generic-custom               |
| swap-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swapvm.pm)]                         | Not used in this Monitoring Connector              |
| thinprovisioning-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/thinprovisioningvm.pm)] | Not used in this Monitoring Connector              |
| time-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/timehost.pm)]                     | Virt-VMWare2-ESX-Time-Generic-custom               |
| tools-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/toolsvm.pm)]                       | Not used in this Monitoring Connector              |
| uptime-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/uptimehost.pm)]                 | Virt-VMWare2-ESX-Uptime-Generic-custom             |
| vmoperation-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vmoperationcluster.pm)] | Not used in this Monitoring Connector              |
| vsan-cluster-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vsanclusterusage.pm)]    | Not used in this Monitoring Connector              |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --connector-hostname                       | Connector hostname (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --connector-port                           | Connector port (default: 5700).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --container                                | Container to use (it depends of the connector configuration).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --vsphere-address                          | Address of vpshere/ESX to connect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --vsphere-username                         | Username of vpshere/ESX connection (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --vsphere-password                         | Password of vpshere/ESX connection (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  | Set global execution timeout (Default: 50)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sampling-period                          | Choose the sampling period (can change the default sampling for counters). Should be not different than 300 or 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --time-shift                               | Can shift the time. We the following option you can average X counters values (default: 0).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --case-insensitive                         | Searchs are case insensitive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --unknown-connector-status                 | Set unknown threshold for connector status (Default: '%{code} \< 0 \|\| (%{code} \> 0 && %{code} \< 200)'). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --warning-connector-status                 | Set warning threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --critical-connector-status                | Set critical threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Datastore-Io" label="Datastore-Io">

| Option             | Description                                                                                                                                                  |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name   | datastore name to list.                                                                                                                                      |
| --filter           | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-*        | Warning threshold. Can be: 'total-read', 'total-write', 'read', 'write'.                                                                                     |
| --critical-*       | Critical threshold. Can be: 'total-read', 'total-write', 'read', 'write'.                                                                                    |

</TabItem>
<TabItem value="Datastore-Iops" label="Datastore-Iops">

| Option                   | Description                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name         | datastore name to list.                                                                                                                                      |
| --filter                 | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --detail-iops-min        | Only display VMs with iops higher value (default: 50).                                                                                                       |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-* --critical-* | Thresholds. Can be: 'read-total', 'write-total', 'read', 'write', 'read-vm', 'write-vm'.                                                                     |

</TabItem>
<TabItem value="Datastore-Snapshots" label="Datastore-Snapshots">

| Option             | Description                                                                                                                                                  |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name   | datastore name to list.                                                                                                                                      |
| --filter           | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-*        | Warning threshold. Can be: 'total', 'snapshot'.                                                                                                              |
| --critical-*       | Critical threshold. Can be: 'total', 'snapshot'.                                                                                                             |

</TabItem>
<TabItem value="Datastore-Usage" label="Datastore-Usage">

| Option                   | Description                                                                                                                                                  |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name         | datastore name to list.                                                                                                                                      |
| --filter                 | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --filter-host            | Filter datastores attached to hosts (can be a regexp).                                                                                                       |
| --refresh                | Explicitly ask vmware to refreshes free-space and capacity values (slower).                                                                                  |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-* --critical-* | Thresholds. Can be: Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'provisioned'.                                                                  |

</TabItem>
<TabItem value="Datastore-Vm-Count" label="Datastore-Vm-Count">

| Option             | Description                                                                                                                                                  |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --datastore-name   | datastore name to check.                                                                                                                                     |
| --filter           | Datastore name is a regexp.                                                                                                                                  |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                         |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{accessible} !~ /^true\|1$/i'). You can use the following variables: %{accessible}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{accessible}                                |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{accessible}                               |
| --warning-*        | Warning threshold. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                                             |
| --critical-*       | Critical threshold. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                                            |

</TabItem>
<TabItem value="ESX-Alarms" label="ESX-Alarms">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --esx-hostname         | ESX hostname to check. If not set, we check all ESX.                                                                                                                                                                                          |
| --filter               | Datacenter is a regexp.                                                                                                                                                                                                                       |
| --scope-datacenter     | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                                          |
| --scope-cluster        | Search in following cluster(s) (can be a regexp).                                                                                                                                                                                             |
| --filter-time          | Don't check alarm older (value in seconds).                                                                                                                                                                                                   |
| --memory               | Check new alarms only.                                                                                                                                                                                                                        |
| --warning-status       | Define the conditions to match for the status to be WARNING (Default: '%{status} =~ /yellow/i). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                  |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /red/i'). You can use the following variables: %{status}, %{name}, %{entity}, %{type}.                                                                   |
| --warning-*            | Warning threshold. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                     |
| --critical-*           | Critical threshold. Can be: 'total-alarm-warning', 'total-alarm-critical'.                                                                                                                                                                    |

</TabItem>
<TabItem value="Esx-Cpu" label="Esx-Cpu">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-*        | Warning threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu'.                                                                                        |
| --critical-*       | Critical threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu'.                                                                                       |

</TabItem>
<TabItem value="Esx-Datastores-Latency" label="Esx-Datastores-Latency">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --datastore-name   | Datastore to check. If not set, we check all datastores.                                                                                               |
| --filter-datastore | Datastore name is a regexp.                                                                                                                            |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-*        | Warning threshold. Can be: 'read-latency', 'write-latency'.                                                                                            |
| --critical-*       | Critical threshold. Can be: 'read-latency', 'write-latency'.                                                                                           |

</TabItem>
<TabItem value="Esx-Health" label="Esx-Health">

| Option                   | Description                                                                                                                                                   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname           | ESX hostname to check. If not set, we check all ESX.                                                                                                          |
| --filter                 | ESX hostname is a regexp.                                                                                                                                     |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                          |
| --scope-cluster          | Search in following cluster(s) (can be a regexp).                                                                                                             |
| --storage-status         | Check storage(s) status.                                                                                                                                      |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}          |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                     |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                    |
| --warning-* --critical-* | Thresholds. Can be: 'total-problems', 'problems', 'problems-yellow', 'problems-red', 'sensor-temperature', 'sensor-fan', 'sensor-voltage', 'sensor-power'.    |

</TabItem>
<TabItem value="Esx-Memory" label="Esx-Memory">

| Option                     | Description                                                                                                                                            |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname             | ESX hostname to check. If not set, we check all ESX.                                                                                                   |
| --filter                   | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter         | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster            | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --units                    | Units of thresholds (Default: '%') ('%', 'B').                                                                                                         |
| --free                     | Thresholds are on free space left.                                                                                                                     |
| --unknown-status           | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status           | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status          | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-consumed-memory  | Warning threshold (can use unit option).                                                                                                               |
| --critical-consumed-memory | Critical threshold (can use unit option).                                                                                                              |
| --warning-overhead-memory  | Threshold overhead.                                                                                                                                    |
| --critical-overhead-memory | Critical threshold.                                                                                                                                    |
| --warning-state-memory     | Warning threshold. For state != 'high': --warning-state=0                                                                                              |
| --critical-state-memory    | Critical threshold. For state != 'high': --warning-state=0                                                                                             |
| --no-memory-state          | Don't check memory state.                                                                                                                              |

</TabItem>
<TabItem value="Esx-Service" label="Esx-Service">

| Option                    | Description                                                                                                                                                                                      |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname            | ESX hostname to check. If not set, we check all ESX.                                                                                                                                             |
| --filter                  | ESX hostname is a regexp.                                                                                                                                                                        |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                                                             |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                                                |
| --filter-services         | Filter services you want to check (can be a regexp).                                                                                                                                             |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}               |
| --warning-status          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                                                        |
| --critical-status         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                                                       |
| --warning-service-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{running}, %{label}, %{policy}                                                  |
| --critical-service-status | Define the conditions to match for the status to be CRITICAL (Default: '%{policy} =~ /^on\|automatic/i && !%{running}'). You can use the following variables: %{running}, %{label}, %{policy}    |

</TabItem>
<TabItem value="Esx-Status" label="Esx-Status">

| Option                    | Description                                                                                                                                                         |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname            | ESX hostname to check. If not set, we check all ESX.                                                                                                                |
| --filter                  | ESX hostname is a regexp.                                                                                                                                           |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                                |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                   |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                |
| --warning-status          | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                           |
| --critical-status         | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                          |
| --unknown-overall-status  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}     |
| --warning-overall-status  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}   |
| --critical-overall-status | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}     |

</TabItem>
<TabItem value="Esx-Storage" label="Esx-Storage">

| Option                    | Description                                                                                                                                                                                          |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname            | ESX hostname to check. If not set, we check all ESX.                                                                                                                                                 |
| --filter                  | ESX hostname is a regexp.                                                                                                                                                                            |
| --scope-datacenter        | Search in following datacenter(s) (can be a regexp).                                                                                                                                                 |
| --scope-cluster           | Search in following cluster(s) (can be a regexp).                                                                                                                                                    |
| --filter-adapter-name     | Filter adapters by name (can be a regexp).                                                                                                                                                           |
| --filter-lun-name         | Filter luns by name (can be a regexp).                                                                                                                                                               |
| --filter-path-name        | Filter paths by name (can be a regexp).                                                                                                                                                              |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i && %{maintenance} =~ /false/i'). You can use the following variables: %{status}, %{maintenance}   |
| --warning-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{maintenance}                                                                          |
| --critical-status         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{maintenance}                                                                         |
| --warning-adapter-status  | Set warning threshold for adapter status. You can use the following variables: %{name}, %{host}, %{status}                                                                                           |
| --critical-adapter-status | Set critical threshold for adapter status (Default: '%{status} =~ /fault/'). You can use the following variables: %{name}, %{host}, %{status}                                                        |
| --warning-lun-status      | Set warning threshold for lun status (Default: '%{status} =~ /degraded\|quiesced/'). You can use the following variables: %{name}, %{host}, %{status}                                                |
| --critical-lun-status     | Set critical threshold for lun status (Default: '%{status} =~ /lostcommunication\|error/'). You can use the following variables: %{name}, %{host}, %{status}                                         |
| --warning-path-status     | Set warning threshold for path status. You can use the following variables: %{name}, %{host}, %{status}                                                                                              |
| --critical-path-status    | Set critical threshold for path status (Default: '%{status} =~ /dead/'). You can use the following variables: %{name}, %{host}, %{status}                                                            |
| --warning-* --critical-*  | Thresholds. Can be: 'adapters-total', 'adapters-online', 'adapters-offline', 'adapters-fault', 'adapters-unknown',                                                                                   |

</TabItem>
<TabItem value="Esx-Swap" label="Esx-Swap">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-*        | Warning threshold. Can be: 'swap-in', 'swap-out'.                                                                                                      |
| --critical-*       | Critical threshold. Can be: 'swap-in', 'swap-out'.                                                                                                     |

</TabItem>
<TabItem value="Esx-Time" label="Esx-Time">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-time     | Warning threshold in seconds.                                                                                                                          |
| --critical-time    | Critical threshold in seconds.                                                                                                                         |

</TabItem>
<TabItem value="Esx-Traffic" label="Esx-Traffic">

| Option                   | Description                                                                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname           | ESX hostname to check. If not set, we check all ESX.                                                                                                                                                                    |
| --filter                 | ESX hostname is a regexp.                                                                                                                                                                                               |
| --scope-datacenter       | Search in following datacenter(s) (can be a regexp).                                                                                                                                                                    |
| --scope-cluster          | Search in following cluster(s) (can be a regexp).                                                                                                                                                                       |
| --nic-name               | ESX nic to check. If not set, we check all nics.                                                                                                                                                                        |
| --filter-vswitch-name    | Filter vswitch by name. It monitors only ESX nic that belongs to the filtered vswitches.                                                                                                                                |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}                                                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                                                                               |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                                                                              |
| --unknown-link-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                                                                           |
| --warning-link-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{link\_status}, %{display}                                                                                           |
| --critical-link-status   | Define the conditions to match for the status to be CRITICAL (Default: '%{link\_status} !~ /up/'). You can use the following variables: %{link\_status}, %{display}                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'host-traffic-in' (b/s), 'host-traffic-out' (b/s), 'vswitch-traffic-in' (b/s), 'vswitch-traffic-out' (b/s), 'link-traffic-in' (%), 'link-traffic-out' (%), 'link-dropped-in', 'link-dropped-out'.   |
| --no-proxyswitch         | Use the following option if you are checking an ESX 3.x version (it's mandatory).                                                                                                                                       |

</TabItem>
<TabItem value="Esx-Uptime" label="Esx-Uptime">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-time     | Warning threshold in seconds.                                                                                                                          |
| --critical-time    | Critical threshold in seconds.                                                                                                                         |

</TabItem>
<TabItem value="Esx-Vm-Count" label="Esx-Vm-Count">

| Option             | Description                                                                                                                                            |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname     | ESX hostname to check. If not set, we check all ESX.                                                                                                   |
| --filter           | ESX hostname is a regexp.                                                                                                                              |
| --scope-datacenter | Search in following datacenter(s) (can be a regexp).                                                                                                   |
| --scope-cluster    | Search in following cluster(s) (can be a regexp).                                                                                                      |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}   |
| --warning-status   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                              |
| --critical-status  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                             |
| --warning-*        | Warning threshold. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                                       |
| --critical-*       | Critical threshold. Can be: 'total-on', 'total-off', 'total-suspended', 'on', 'off', 'suspended'.                                                      |

</TabItem>
<TabItem value="Esx-is-Maintenance" label="Esx-is-Maintenance">

| Option                        | Description                                                                                                                                                 |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --esx-hostname                | ESX hostname to check. If not set, we check all ESX.                                                                                                        |
| --filter                      | ESX hostname is a regexp.                                                                                                                                   |
| --scope-datacenter            | Search in following datacenter(s) (can be a regexp).                                                                                                        |
| --scope-cluster               | Search in following cluster(s) (can be a regexp).                                                                                                           |
| --unknown-status              | Define the conditions to match for the status to be UNKNOWN (Default: '%{status} !~ /^connected$/i'). You can use the following variables: %{status}        |
| --warning-status              | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{status}                                   |
| --critical-status             | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{status}                                  |
| --warning-maintenance-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{maintenance}                              |
| --critical-maintenance-status | Define the conditions to match for the status to be CRITICAL (Default: '%{maintenance} !~ /false/'). You can use the following variables: %{maintenance}    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=countvm-host \
	--help
```
