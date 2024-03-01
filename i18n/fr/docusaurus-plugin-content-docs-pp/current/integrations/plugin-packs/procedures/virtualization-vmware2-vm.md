---
id: virtualization-vmware2-vm
title: VMware VM
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Vue d'ensemble

VMWare est une solution de Virtualisation et d'infrastructure de Cloud Computing.

Le connecteur de supervision Centreon s'appuie sur le SDK VMWare pour requêter l'API du vCenter au travers d'un connecteur dédié.

## Contenu du pack

### Modèles

Le connecteur de supervision **VMware VM** apporte un modèle d'hôte :

* **Virt-VMWare2-VM-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-VMWare2-VM-custom" label="Virt-VMWare2-VM-custom">

| Alias               | Modèle de service                               | Description                                                                                                  |
|:--------------------|:------------------------------------------------|:-------------------------------------------------------------------------------------------------------------|
| Vm-Limit            | Virt-VMWare2-Vm-Limit-Generic-custom            | Contrôle permettant de vérifier la définition de limites.                                                     |
| Vm-Snapshot         | Virt-VMWare2-Vm-Snapshot-Generic-custom         | Contrôle permettant de vérifier l'âge des snapshots sur la machine virtuelle.                                |
| Vm-Status           | Virt-VMWare2-Vm-Status-Generic-custom           | Contrôle permettant de vérifier l'état global d'une machine virtuelle.                                        |
| Vm-Thinprovisioning | Virt-VMWare2-Vm-Thinprovisioning-Generic-custom | Contrôle permettant de vérifier si une machine virtuelle possède un disque en mode 'thin provisioning' ou non. |
| Vm-Tools            | Virt-VMWare2-Vm-Tools-Generic-custom            | Contrôle permettant de vérifier l'état des vmtools d'une machine virtuelle.                                   |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-VMWare2-VM-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias              | Modèle de service                              | Description                                                                                               |
|:-------------------|:-----------------------------------------------|:----------------------------------------------------------------------------------------------------------|
| Vm-Cpu             | Virt-VMWare2-Vm-Cpu-Generic-custom             | Contrôle permettant de vérifier le taux d'utilisation CPU d'une machine virtuelle.                         |
| Vm-Datastores-Iops | Virt-VMWare2-Vm-Datastores-Iops-Generic-custom | Contrôle permettant de vérifier le taux d'utilisation des datastores rattachés à une machine virtuelle.  |
| Vm-Device          | Virt-VMWare2-Vm-Device-Generic-custom          | Contrôle permettant de vérifier le taux d'utilisation CPU d'une machine virtuelle.                         |
| Vm-Memory          | Virt-VMWare2-Vm-Memory-Generic-custom          | Contrôle permettant de vérifier le taux d'utilisation mémoire d'une machine virtuelle.                     |
| Vm-Swap            | Virt-VMWare2-Vm-Swap-Generic-custom            | Contrôle permettant de vérifier si une machine virtuelle swappe.                                           |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                     |
|:----------------|:--------------------------------|
| VMWare VM       | Discover VMWare virtual machines. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| *vm*~status                                   | N/A   |
| *vm*~vm.cpu.utilization.percentage            | %     |
| *vm*~vm.cpu.utilization.mhz                   | MHz   |
| *vm*~vm.cpu.ready.percentage                  | %     |
| *vm*~*cpu*#vm.core.cpu.utilization.percentage | MHz   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *vm*~status                                    | N/A   |
| *vm*~vm.datastore.latency.max.milliseconds     | ms    |
| *vm*~*datastore*#vm.datastore.read.usage.iops  | iops  |
| *vm*~*datastore*#vm.datastore.write.usage.iops | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Métrique                        | Unité |
|:--------------------------------|:------|
| vm.devices.connected.count      | count |
| *vm*#status                     | N/A   |
| *vm*#vm.devices.connected.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Métrique      | Unité |
|:--------------|:------|
| cpu-status    | N/A   |
| memory-status | N/A   |
| disk-status   | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Métrique                            | Unité |
|:------------------------------------|:------|
| *vm*~status                         | N/A   |
| *vm*~vm.memory.consumed.usage.bytes | B     |
| *vm*~vm.memory.active.usage.bytes   | B     |
| *vm*~vm.memory.overhead.bytes       | B     |
| *vm*~vm.memory.ballooning.bytes     | B     |
| *vm*~vm.memory.shared.bytes         | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

| Métrique                            | Unité |
|:------------------------------------|:------|
| vm.snapshots.warning.current.count  | count |
| vm.snapshots.critical.current.count | count |

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Métrique            | Unité |
|:--------------------|:------|
| *vm*#status         | N/A   |
| *vm*#overall-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| *vm*#status                           | N/A   |
| *vm*#vm.swap.in.usage.bytespersecond  | B/s   |
| *vm*#vm.swap.out.usage.bytespersecond | B/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

| Métrique    | Description                                | Unité |
|:------------|:-------------------------------------------|:------|
| status      | Status of the thin provisoning virtual disks |       |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Métrique                            | Unité |
|:------------------------------------|:------|
| vm.tools.notupdated.current.count   | count |
| vm.tools.notrunning.current.count   | count |
| vm.tools.notinstalled.current.count | count |

</TabItem>
</Tabs>

## Prérequis

### Configuration du connecteur Centreon VMWare

Pour la supervision VMWare, centreon utlise un daemon pour se connecter et requêter le vCenter.

Installer le daemon sur tous les pollers :

<Tabs groupId="sync">
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-virtualization-vmware-daemon
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-VMWare-daemon
```

</TabItem>
</Tabs>

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

### Balises et Attributs personnalisés

Pour découvrir les balises et les attributs personnalisés, vous devez :

* utiliser la version **3.2.5** de **centreon-vmware-daemon**
* ajouter **--tags** dans les options supplémentaires de découverte : allez à la page **Configuration > Hôtes > Découverte**, et à la 3ème étape (**Définir les paramètres de découverte**), dans la section **Paramètres supplémentaires**, dans le champ **Options supplémentaires**, saisissez **--tags**.

### Flux réseau

Le Collecteur Centreon avec le connecteur VMWare d'installé doit accéder en HTTPS (TCP/443) au vCenter.

Les collecteurs requêtant le collecteur avec le connecteur VMWare doivent accéder en TCP/5700 au collecteur avec le connecteur VMWare.

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
dnf install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-vmware2-vm
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **VMware VM**
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
3. Appliquez le modèle d'hôte **Virt-VMWare2-VM-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                      | Description                                                                                           | Valeur par défaut | Obligatoire |
|:---------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CENTREONVMWAREPORT         | Connector port (default: 5700).                                                                        | 5700              |             |
| CENTREONVMWARECONTAINER    | Container to use (it depends on the connector's configuration).                                          | default           |             |
| CENTREONVMWAREHOST         | Connector hostname (required).                                                                         | localhost         |X             |
| VMNAME                     | Hostname of the VM to monitor. If not set, we check all VMs.                                                    |                   |             |
| VMUUID                     | Specify the VM's UUID.                                                                                                      |                   |             |
| CENTREONVMWAREEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Macro            | Description                                                                                                                                                                                                                      | Valeur par défaut                                                            | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS    | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i or %{power\_state}  !~ /^poweredOn$/i |             |
| WARNINGCPU       | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALCPU      | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGREADY     | Warning threshold                                                                                                                                                                                                                | 5                                                                            |             |
| CRITICALREADY    | Critical threshold                                                                                                                                                                                                               | 10                                                                           |             |
| WARNINGSTATUS    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                              |             |
| CRITICALSTATUS   | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                              |             |
| WARNINGUSAGE     | Warning threshold                                                                                                                                                                                                                | 80                                                                           |             |
| CRITICALUSAGE    | Critical threshold                                                                                                                                                                                                               | 90                                                                           |             |
| WARNINGUSAGEMHZ  | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALUSAGEMHZ | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                              |                                                                              |             |

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Macro                   | Description                                                                                                                                                                                                                      | Valeur par défaut                                                            | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|:-----------:|
| FILTERDATASTORENAME     | Datastore to check. If not set, we check all datastores.                                                                                                                                                                          | .*                                                                           |             |
| UNKNOWNSTATUS           | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i or %{power\_state}  !~ /^poweredOn$/i |             |
| WARNINGMAXTOTALLATENCY  | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| CRITICALMAXTOTALLATENCY | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| WARNINGREAD             | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| CRITICALREAD            | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                              |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                              |             |
| WARNINGWRITE            | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| CRITICALWRITE           | Thresholds                                                                                                                                                                                                                       |                                                                              |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                              | --verbose                                                                    |             |

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Macro                        | Description                                                                                                                                                                | Valeur par défaut                      | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| UNKNOWNSTATUS                | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state} | %{connection\_state} !~ /^connected$/i |             |
| FILTERDEVICE                 | Device to check (required). (Example: --device='VirtualCdrom')                                                                                                              |                                        | X           |
| WARNINGSTATUS                | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}                                       |                                        |             |
| CRITICALSTATUS               | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}                                      |                                        |             |
| WARNINGTOTALDEVICECONNECTED  | Warning threshold                                                                                                                                                          |                                        |             |
| CRITICALTOTALDEVICECONNECTED | Critical threshold                                                                                                                                                         |                                        |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                        |                                        |             |

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Macro                | Description                                                                                                                                                                                                                | Valeur par défaut                                          | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:-----------:|
| CRITICALCPUSTATUS    | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection\_state} !~ /^connected$/i \|\| %{limit} != -1 |             |
| WARNINGCPUSTATUS     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                            |             |
| CRITICALDISKSTATUS   | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection\_state} !~ /^connected$/i \|\| %{limit} != -1 |             |
| WARNINGDISKSTATUS    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                            |             |
| CRITICALMEMORYSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit} | %{connection\_state} !~ /^connected$/i \|\| %{limit} != -1 |             |
| WARNINGMEMORYSTATUS  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                            |                                                            |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                        | --verbose                                                  |             |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Macro              | Description                                                                                                                                                                                                                      | Valeur par défaut                                                            | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i or %{power\_state}  !~ /^poweredOn$/i |             |
| WARNING            | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICAL           | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGACTIVE      | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALACTIVE     | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGBALLOONING  | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALBALLOONING | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGOVERHEAD    | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALOVERHEAD   | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGSHARED      | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALSHARED     | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                              |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                              |                                                                              |             |

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold for snapshot's age                                                                | 259200            |             |
| CRITICAL     | Critical threshold for snapshot's age                                                               | 432000            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Macro                 | Description                                                                                                                                                                                 | Valeur par défaut                      | Obligatoire |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| UNKNOWNSTATUS         | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i |             |
| UNKNOWNOVERALLSTATUS  | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}                             | %{overall\_status} =~ /gray/i          |             |
| WARNINGOVERALLSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}                           | %{overall\_status} =~ /yellow/i        |             |
| CRITICALOVERALLSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}                             | %{overall\_status} =~ /red/i           |             |
| WARNINGSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_state}                                                                      |                                        |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{connection\_state}, %{power\_state}                                                    |                                        |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                         | --verbose                              |             |

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Macro           | Description                                                                                                                                                                                                                      | Valeur par défaut                                                            | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS   | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state} | %{connection\_state} !~ /^connected$/i or %{power\_state}  !~ /^poweredOn$/i |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                            |                                                                              |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                           |                                                                              |             |
| WARNINGSWAPIN   | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALSWAPIN  | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| WARNINGSWAPOUT  | Warning threshold                                                                                                                                                                                                                |                                                                              |             |
| CRITICALSWAPOUT | Critical threshold                                                                                                                                                                                                               |                                                                              |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                              |                                                                              |             |

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATUS       | Thin provisioning status (default: none). Example: 'active,CRITICAL' or 'notactive,WARNING'           | active,WARNING    | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Macro              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NOTINSTALLEDSTATUS | Status if vmtools is not installed (default: critical)                                              | critical          | X           |
| NOTRUNNINGSTATUS   | Status if vmtools is not running (default: critical)                                                | critical          | X           |
| NOTUP2DATESTATUS   | Status if vmtools is not up to date (default: warning)                                                | warning           |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

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
	--mode=swap-vm \
	--custommode=connector \
	--connector-hostname='localhost' \
	--connector-port='5700' \
	--container='default'  \
	--vm-hostname='' \
	--filter-uuid='' \
	--unknown-status='%{connection_state} !~ /^connected$/i or %{power_state}  !~ /^poweredOn$/i' \
	--warning-status='' \
	--critical-status='' \
	--warning-swap-in='' \
	--critical-swap-in=''  \
	--warning-swap-out='' \
	--critical-swap-out=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All virtual machines are ok | '*vm*#vm.swap.in.usage.bytespersecond'=B/s;;;0;'*vm*#vm.swap.out.usage.bytespersecond'=B/s;;;0;
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

| Mode                                                                                                                                         | Modèle de service associé                       |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| alarm-datacenter [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmdatacenter.pm)]       | Not used in this Monitoring Connector           |
| alarm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/alarmhost.pm)]                   | Not used in this Monitoring Connector           |
| countvm-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/countvmhost.pm)]               | Not used in this Monitoring Connector           |
| cpu-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpucluster.pm)]                 | Not used in this Monitoring Connector           |
| cpu-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuhost.pm)]                       | Not used in this Monitoring Connector           |
| cpu-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/cpuvm.pm)]                           | Virt-VMWare2-Vm-Cpu-Generic-custom              |
| datastore-countvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorecountvm.pm)]     | Not used in this Monitoring Connector           |
| datastore-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorehost.pm)]           | Not used in this Monitoring Connector           |
| datastore-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreio.pm)]               | Not used in this Monitoring Connector           |
| datastore-iops [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreiops.pm)]           | Not used in this Monitoring Connector           |
| datastore-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoresnapshot.pm)]   | Not used in this Monitoring Connector           |
| datastore-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastoreusage.pm)]         | Not used in this Monitoring Connector           |
| datastore-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/datastorevm.pm)]               | Virt-VMWare2-Vm-Datastores-Iops-Generic-custom  |
| device-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/devicevm.pm)]                     | Virt-VMWare2-Vm-Device-Generic-custom           |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/discovery.pm)]                    | Used for host discovery                         |
| getmap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/getmap.pm)]                          | Not used in this Monitoring Connector           |
| health-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/healthhost.pm)]                 | Not used in this Monitoring Connector           |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/licenses.pm)]                      | Not used in this Monitoring Connector           |
| limit-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/limitvm.pm)]                       | Virt-VMWare2-Vm-Limit-Generic-custom            |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listclusters.pm)]             | Not used in this Monitoring Connector           |
| list-datacenters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatacenters.pm)]       | Not used in this Monitoring Connector           |
| list-datastores [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listdatastores.pm)]         | Not used in this Monitoring Connector           |
| list-nichost [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/listnichost.pm)]               | Not used in this Monitoring Connector           |
| maintenance-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/maintenancehost.pm)]       | Not used in this Monitoring Connector           |
| memory-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryhost.pm)]                 | Not used in this Monitoring Connector           |
| memory-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/memoryvm.pm)]                     | Virt-VMWare2-Vm-Memory-Generic-custom           |
| net-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/nethost.pm)]                       | Not used in this Monitoring Connector           |
| net-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/netvm.pm)]                           | Not used in this Monitoring Connector           |
| service-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/servicehost.pm)]               | Not used in this Monitoring Connector           |
| snapshot-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/snapshotvm.pm)]                 | Virt-VMWare2-Vm-Snapshot-Generic-custom         |
| stat-connectors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statconnectors.pm)]         | Not used in this Monitoring Connector           |
| status-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statuscluster.pm)]           | Not used in this Monitoring Connector           |
| status-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statushost.pm)]                 | Not used in this Monitoring Connector           |
| status-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/statusvm.pm)]                     | Virt-VMWare2-Vm-Status-Generic-custom           |
| storage-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/storagehost.pm)]               | Not used in this Monitoring Connector           |
| swap-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swaphost.pm)]                     | Not used in this Monitoring Connector           |
| swap-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/swapvm.pm)]                         | Virt-VMWare2-Vm-Swap-Generic-custom             |
| thinprovisioning-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/thinprovisioningvm.pm)] | Virt-VMWare2-Vm-Thinprovisioning-Generic-custom |
| time-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/timehost.pm)]                     | Not used in this Monitoring Connector           |
| tools-vm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/toolsvm.pm)]                       | Virt-VMWare2-Vm-Tools-Generic-custom            |
| uptime-host [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/uptimehost.pm)]                 | Not used in this Monitoring Connector           |
| vmoperation-cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vmoperationcluster.pm)] | Not used in this Monitoring Connector           |
| vsan-cluster-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/connector/mode/vsanclusterusage.pm)]    | Not used in this Monitoring Connector           |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
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
| --container                                | Container to use (it depends on the connector's configuration).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --vsphere-address                          | Address of the vpshere/ESX instance to connect to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --vsphere-username                         | Username to use to connect to the vpshere/ESX instance (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --vsphere-password                         | Password used to connect to the vpshere/ESX instance (with --vsphere-address).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  | Set global execution timeout (Default: 50)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sampling-period                          | Choose the sampling period (can change the default sampling for counters). Should be not different from 300 or 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --time-shift                               | Can shift the time. With the following option you can average X counter values (default: 0).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --case-insensitive                         | Searches are case insensitive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --unknown-connector-status                 | Set unknown threshold for connector status (Default: '%{code} \< 0 \|\| (%{code} \> 0 && %{code} \< 200)'). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --warning-connector-status                 | Set warning threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --critical-connector-status                | Set critical threshold for connector status (Default: ''). You can use the following variables: %{code}, %{short\_message}, %{extra\_message}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Vm-Cpu" label="Vm-Cpu">

| Option               | Description                                                                                                                                                                                                                        |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname        | Hostname of the VM to monitor. If not set, we check all VMs.                                                                                                                                                                                |
| --filter             | Define which VMs should be monitored based on the devices' names. This option will be treated as a regular expression.                                                                                                                                                         |
| --filter-description | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.                                                                                                                                                                        |
| --filter-os          | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.                                                                                                                                                                            |
| --scope-datacenter   | Search in the following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster      | Search in the following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host         | Search in the following host(s) (can be a regexp).                                                                                                                                                                                     |
| --unknown-status     | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --warning-*          | Warning threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu-ready', 'cpu'.                                                                                                                                                       |
| --critical-*         | Critical threshold. Can be: 'total-cpu', 'total-cpu-mhz', 'cpu-ready', 'cpu'.                                                                                                                                                      |

</TabItem>
<TabItem value="Vm-Datastores-Iops" label="Vm-Datastores-Iops">

| Option                   | Description                                                                                                                                                                                                                        |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname            | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                                                                |
| --filter                 | Define which VMs should be monitored based on their names. This option will be treated as a regular expression.                                                                                                                                                                                                           |
| --filter-description     | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.                                                                                                                                                                        |
| --filter-os              | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.                                                                                                                                                                            |
| --scope-datacenter       | Search in the following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster          | Search in the following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host             | Search in the following host(s) (can be a regexp).                                                                                                                                                                                     |
| --datastore-name         | Datastore to check. If not set, we check all datastores.                                                                                                                                                                           |
| --filter-datastore       | Define which VMs should be monitored based on the datastores names. This option will be treated as a regular expression.                                                                                                                                                                                                        |
| --display-description    | Display the description of the virtual machine.                                                                                                                                                                                               |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --warning-* --critical-* | Thresholds. Can be: 'max-total-latency', 'read', 'write'.                                                                                                                                                                          |

</TabItem>
<TabItem value="Vm-Device" label="Vm-Device">

| Option                | Description                                                                                                                                                                  |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                          |
| --filter              | Define which VMs should be monitored based on the devices' names. This option will be treated as a regular expression.                                                           |
| --filter-description  | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.                                                                                                                  |
| --filter-os           | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.                                                           |
| --scope-datacenter    | Search in the following datacenter(s) (can be a regexp).                                                                                                                         |
| --scope-cluster       | Search in the following cluster(s) (can be a regexp).                                                                                                                            |
| --scope-host          | Search in the following host(s) (can be a regexp).                                                                                                                               |
| --display-description | Display the description of the virtual machine.                                                                                                                                         |
| --device              | Device to check (Required) (Example: --device='VirtualCdrom').                                                                                                               |
| --unknown-status      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}   |
| --warning-status      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}                                         |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}                                        |
| --warning-*           | Warning threshold. Can be: 'total-device-connected', 'device-connected'.                                                                                                     |
| --critical-*          | Critical threshold. Can be: 'total-device-connected', 'device-connected'.                                                                                                    |

</TabItem>
<TabItem value="Vm-Limit" label="Vm-Limit">

| Option                   | Description                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname            | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                                                           |
| --filter                 | Define which VMs should be monitored based on the devices' names. This option will be treated as a regular expression.                                                                                                                                                                                                      |
| --filter-description     | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.                                                                                                                                                                   |
| --filter-os              | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.                                                                                                                                                                       |
| --display-description    | Display the description of the virtual machine.                                                                                                                                                                                          |
| --check-disk-limit       | Check disk limits (since vsphere 5.0).                                                                                                                                                                                        |
| --warning-disk-status    | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               |
| --critical-disk-status   | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    |
| --warning-cpu-status     | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               |
| --critical-cpu-status    | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    |
| --warning-memory-status  | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}                                                               |
| --critical-memory-status | Define the conditions to match for the status to be CRITICAL (Default: '%{connection\_state} !~ /^connected$/i \|\| %{limit} != -1'). You can use the following variables: %{connection\_state}, %{power\_state}, %{limit}    |

</TabItem>
<TabItem value="Vm-Memory" label="Vm-Memory">

| Option                | Description                                                                                                                                                                                                                        |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                                                                |
| --filter              | Define which VMs should be monitored based on the devices' names. This option will be treated as a regular expression.                                                                                                                                                                                                           |
| --filter-description  | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.                                                                                                                                                                        |
| --filter-os           | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.                                                                                                                                                                            |
| --scope-datacenter    | Search in the following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster       | Search in the following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host          | Search in the following host(s) (can be a regexp).                                                                                                                                                                                     |
| --display-description | Display the description of the virtual machine.                                                                                                                                                                                               |
| --unknown-status      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --units               | Units of thresholds (Default: '%') ('%', 'B').                                                                                                                                                                                     |
| --free                | Thresholds are on free space left.                                                                                                                                                                                                 |
| --warning-*           | Warning threshold. Can be: 'consumed', 'active', 'overhead', 'ballooning', 'shared'.                                                                                                                                               |
| --critical-*          | Critical threshold. Can be: 'consumed', 'active', 'overhead', 'ballooning', 'shared'.                                                                                                                                              |

</TabItem>
<TabItem value="Vm-Snapshot" label="Vm-Snapshot">

| Option                | Description                                                                                                                                                   |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostname of the VM to check. If not set, we check all VMs.                                                                                                           |
| --filter              | Define which VMs should be monitored based on the devices' names. This option will be treated as a regular expression.                                          |
| --filter-description  | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.                                                                                                   |
| --filter-os           | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.                                            |
| --scope-datacenter    | Search in the following datacenter(s) (can be a regexp).                                                                                                          |
| --scope-cluster       | Search in the following cluster(s) (can be a regexp).                                                                                                             |
| --scope-host          | Search in the following host(s) (can be a regexp).                                                                                                                |
| --display-description | Display the description of the virtual machine.                                                                                                                          |
| --check-consolidation | Check if VM needs consolidation (since vsphere 5.0).                                                                                                          |
| --disconnect-status   | Status if the VM is disconnected (default: 'unknown').                                                                                                               |
| --nopoweredon-skip    | Skip check if VM is not poweredOn.                                                                                                                            |
| --empty-continue      | Ask to the connector that an empty response is ok.                                                                                                            |
| --unit                | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds   |
| --warning             | Warning threshold for snapshot's age.                                                                                                                         |
| --critical            | Critical threshold for snapshot's age.                                                                                                                        |

</TabItem>
<TabItem value="Vm-Status" label="Vm-Status">

| Option                    | Description                                                                                                                                                                                   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname             | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                           |
| --filter                  | Define which VMs should be monitored based on the devices' names. This option will be treated as a regular expression.                                                                                                                                                                      |
| --filter-description      | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.                                                                                                                                   |
| --filter-os               | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.                                                                                                                                       |
| --scope-datacenter        | Search in the following datacenter(s) (can be a regexp).                                                                                                                                          |
| --scope-cluster           | Search in the following cluster(s) (can be a regexp).                                                                                                                                             |
| --scope-host              | Search in the following host(s) (can be a regexp).                                                                                                                                                |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connection\_state}                                                                        |
| --critical-status         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{connection\_state}, %{power\_state}                                                      |
| --unknown-overall-status  | Define the conditions to match for the status to be UNKNOWN (Default: '%{overall\_status} =~ /gray/i'). You can use the following variables: %{overall\_status}                               |
| --warning-overall-status  | Define the conditions to match for the status to be WARNING (Default: '%{overall\_status} =~ /yellow/i'). You can use the following variables: %{overall\_status}                             |
| --critical-overall-status | Define the conditions to match for the status to be CRITICAL (Default: '%{overall\_status} =~ /red/i'). You can use the following variables: %{overall\_status}                               |

</TabItem>
<TabItem value="Vm-Swap" label="Vm-Swap">

| Option                | Description                                                                                                                                                                                                                        |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --vm-hostname         | Hostname of the VM to check. If not set, we check all VMs.                                                                                                                                                                                |
| --filter              | Define which VMs should be monitored based on the devices' names. This option will be treated as a regular expression.                                                                                                                                                                                                           |
| --filter-description  | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.                                                                                                                                                                        |
| --filter-os           | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.                                                                                                                                                                            |
| --scope-datacenter    | Search in the following datacenter(s) (can be a regexp).                                                                                                                                                                               |
| --scope-cluster       | Search in the following cluster(s) (can be a regexp).                                                                                                                                                                                  |
| --scope-host          | Search in the following host(s) (can be a regexp).                                                                                                                                                                                     |
| --display-description | Display the description of the virtual machine.                                                                                                                                                                                               |
| --unknown-status      | Define the conditions to match for the status to be UNKNOWN (Default: '%{connection\_state} !~ /^connected$/i or %{power\_state} !~ /^poweredOn$/i'). You can use the following variables: %{connection\_state}, %{power\_state}   |
| --warning-status      | Define the conditions to match for the status to be WARNING (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                              |
| --critical-status     | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{connection\_state}, %{power\_state}                                                                             |
| --warning-*           | Warning threshold. Can be: 'swap-in', 'swap-out'.                                                                                                                                                                                  |
| --critical-*          | Critical threshold. Can be: 'swap-in', 'swap-out'.                                                                                                                                                                                 |

</TabItem>
<TabItem value="Vm-Thinprovisioning" label="Vm-Thinprovisioning">

| Option                    | Description                                                                                  |
|:--------------------------|:---------------------------------------------------------------------------------------------|
| --vm-hostname             | Hostname of the VM to check. If not set, we check all VMs.                                          |
| --filter                  | Define which VMs should be monitored based on the devices' names. This option will be treated as a regular expression.                 |
| --filter-description      | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.                                  |
| --filter-os               | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.                                      |
| --scope-datacenter        | Search in the following datacenter(s) (can be a regexp).                                         |
| --scope-cluster           | Search in the following cluster(s) (can be a regexp).                                            |
| --scope-host              | Search in the following host(s) (can be a regexp).                                               |
| --disconnect-status       | Status if VM disconnected (default: 'unknown').                                              |
| --nopoweredon-skip        | Skip check if VM is not poweredOn.                                                           |
| --display-description     | Display the description of the virtual machine.                                                         |
| --thinprovisioning-status | Thin provisioning status (default: none) Example: 'active,CRITICAL' or 'notactive,WARNING'    |

</TabItem>
<TabItem value="Vm-Tools" label="Vm-Tools">

| Option                      | Description                                                   |
|:----------------------------|:--------------------------------------------------------------|
| --vm-hostname               | Hostname of the VM to check. If not set, we check all VMs.           |
| --filter                    | Define which VMs should be monitored based on the devices' names. This option will be treated as a regular expression.                                      |
| --filter-description        | Define which VMs should be monitored based on their description. This option will be treated as a regular expression.   |
| --filter-os                 | Define which VMs should be monitored based on their OS. This option will be treated as a regular expression.       |
| --scope-datacenter          | Search in the following datacenter(s) (can be a regexp).          |
| --scope-cluster             | Search in the following cluster(s) (can be a regexp).             |
| --scope-host                | Search in the following host(s) (can be a regexp).                |
| --disconnect-status         | Status if VM disconnected (default: 'unknown').               |
| --nopoweredon-skip          | Skip check if VM is not powered on.                            |
| --empty-continue            | Ask to the connector that an empty response is ok.            |
| --display-description       | Display the description of the virtual machine.                          |
| --tools-notinstalled-status | Status if vmtools is not installed (default: critical).       |
| --tools-notrunning-status   | Status if vmtools is not running (default: critical).         |
| --tools-notup2date-status   | Status if vmtools is not up to date (default: warning).         |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_vmware_connector_client.pl \
	--plugin=apps::vmware::connector::plugin \
	--mode=swap-vm \
	--help
```
