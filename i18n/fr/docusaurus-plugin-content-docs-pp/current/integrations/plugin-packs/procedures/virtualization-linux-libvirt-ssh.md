---
id: virtualization-linux-libvirt-ssh
slug: /virtualization-linux-libvirt-ssh
title: Linux Libvirt SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Linux Libvirt SSH** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Linux Libvirt SSH** apporte 2 modèles d'hôte :

* **Virt-Linux-Libvirt-Hypervisor-SSH-custom**
* **Virt-Linux-Libvirt-VM-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-Linux-Libvirt-Hypervisor-SSH-custom" label="Virt-Linux-Libvirt-Hypervisor-SSH-custom">

| Alias       | Modèle de service                                    | Description | Découverte |
|:------------|:-----------------------------------------------------|:------------|:----------:|
| Pool-Status | Virt-Linux-Libvirt-Hypervisor-Pool-Status-SSH-custom | Contrôler l'allocation des pools de stockage libvirt    | X          |
| Volume      | Virt-Linux-Libvirt-Hypervisor-Volume-SSH-custom      | Contrôler l'allocation des volumes de stockage libvirt  | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Linux-Libvirt-Hypervisor-SSH-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Virt-Linux-Libvirt-VM-SSH-custom" label="Virt-Linux-Libvirt-VM-SSH-custom">

| Alias   | Modèle de service                        | Description                                                              |
|:--------|:-----------------------------------------|:-------------------------------------------------------------------------|
| Cpu     | Virt-Linux-Libvirt-Vm-Cpu-SSH-custom     | Contrôler l'utilisation CPU des machines virtuelles                      |
| Disk-Io | Virt-Linux-Libvirt-Vm-Disk-Io-SSH-custom | Contrôler les statistiques d'E/S disque des machines virtuelles          |
| Memory  | Virt-Linux-Libvirt-Vm-Memory-SSH-custom  | Contrôler l'utilisation mémoire des machines virtuelles                  |
| Network | Virt-Linux-Libvirt-Vm-Network-SSH-custom | Contrôler les statistiques des interfaces réseau des machines virtuelles |
| Status  | Virt-Linux-Libvirt-Vm-Status-SSH-custom  | Contrôler l'état des machines virtuelles                                 |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Linux-Libvirt-VM-SSH-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle  | Description                |
|:-----------------|:---------------------------|
| Linux Libvirt VM | Discover Linux Libvirt VMs |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                               | Description |
|:----------------------------------------------|:------------|
| Virt-Linux-Libvirt-Hypervisor-SSH-Pools-Name  | Découvre les pools de stockage libvirt    |
| Virt-Linux-Libvirt-Hypervisor-SSH-Volume-Name | Découvre les volumes de stockage libvirt  |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| vm.cpu.utilization.percentage            | %     |
| vm.cpu.utilization.vcpu.percentage       | %     |
| *cpu*#vm.cpu.vcpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk-Io" label="Disk-Io">

| Nom                                               | Unité |
|:--------------------------------------------------|:------|
| *disk_name*#vm.disk.io.read.usage.bytespersecond  | B/s   |
| *disk_name*#vm.disk.io.write.usage.bytespersecond | B/s   |
| read-iops                                         | N/A   |
| write-iops                                        | N/A   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                              | Unité |
|:---------------------------------|:------|
| *vms*#vm.memory.usage.bytes      | B     |
| *vms*#vm.memory.usage.percentage | %     |
| *vms*#vm.memory.rss.bytes        | B     |

</TabItem>
<TabItem value="Network" label="Network">

| Nom                                               | Unité |
|:--------------------------------------------------|:------|
| *interfaces*#vm.network.traffic.in.bitspersecond  | b/s   |
| *interfaces*#vm.network.traffic.out.bitspersecond | b/s   |
| *interfaces*#vm.network.packets.in.count          | count |
| *interfaces*#vm.network.packets.out.count         | count |
| *interfaces*#vm.network.errors.in.count           | count |
| *interfaces*#vm.network.errors.out.count          | count |

</TabItem>
<TabItem value="Pool-Status" label="Pool-Status">

| Nom                                 | Unité |
|:------------------------------------|:------|
| status                              | N/A   |
| *pools*#pool.space.usage.bytes      | B     |
| *pools*#pool.space.usage.percentage | %     |
| *pools*#pool.space.free.bytes       | B     |

</TabItem>
<TabItem value="Status" label="Status">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Volume" label="Volume">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| *volumes*#volume.allocation.bytes      | B     |
| *volumes*#volume.allocation.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Ce connecteur vous permet de superviser libvirt via le client virsh.

Veuillez vous référer à la [documentation libvirt](https://libvirt.org/manpages/virsh.html) pour plus d’informations sur l'utilisation de ce client.

### Configuration SSH

L'utilisation de ce connecteur requiert la création d'un utilisateur sur la
ressource supervisée, lequel sera utilisé par le collecteur Centreon pour
s'authentifier et exécuter les requêtes SSH. Les privilèges sudo ou root ne
sont pas nécessaires, un utilisateur 'simple' est suffisant.

Deux méthodes de connexion SSH sont possibles :
* soit en échangeant la clé SSH publique de l'utilisateur **centreon-engine** du collecteur Centreon (recommandé)
* soit en définissant votre utilisateur et votre mot de passe directement dans les macros d'hôtes.

Vous devez également configurer la connexion avec l'utilisateur **centreon-gorgone** si vous comptez 
utiliser les règles de découverte de service de ce connecteur.

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-virtualization-linux-libvirt-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-linux-libvirt-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-linux-libvirt-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-linux-libvirt-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Linux Libvirt SSH**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

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
dnf install centreon-plugin-Virtualization-Linux-Libvirt-Local
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Linux-Libvirt-Local
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-linux-libvirt-local
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Linux-Libvirt-Local
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Virt-Linux-Libvirt-Hypervisor-SSH-custom" label="Virt-Linux-Libvirt-Hypervisor-SSH-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Linux-Libvirt-Hypervisor-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                             | Valeur par défaut                                      | Obligatoire |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                              |                                                        |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the `sshcli` backend. Warning: using a password is not recommended. Use `--ssh-priv-key` instead |                                                        |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                           |                                                        |             |
| CONNECT_URI     | Libvirt connection URI. Examples: qemu:///system, qemu+ssh://user@host/system, xen:///                                                                                  | qemu:///system?socket=/var/run/libvirt/libvirt-sock-ro |             |
| SSHBACKEND      | Define the backend you want to use. It can be: `sshcli` (default), `plink` and `libssh`                                                                                 | libssh                                                 |             |
| TIMEOUT         | Timeout in seconds for `virsh` commands                                                                                                                                 | 30                                                     |             |
| VIRSH_PATH      | Path to the `virsh` binary directory                                                                                                                                    | /usr/bin                                               |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                      |                                                        |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Virt-Linux-Libvirt-VM-SSH-custom" label="Virt-Linux-Libvirt-VM-SSH-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Linux-Libvirt-VM-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                             | Valeur par défaut                                      | Obligatoire |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                              |                                                        |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the `sshcli` backend. Warning: using a password is not recommended. Use `--ssh-priv-key` instead |                                                        |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                           |                                                        |             |
| CONNECT_URI     | Libvirt connection URI. Examples: qemu:///system, qemu+ssh://user@host/system, xen:///                                                                                  | qemu:///system?socket=/var/run/libvirt/libvirt-sock-ro |             |
| SSHBACKEND      | Define the backend you want to use. It can be: `sshcli` (default), `plink` and `libssh`                                                                                 | libssh                                                 |             |
| TIMEOUT         | Timeout in seconds for `virsh` commands                                                                                                                                 | 30                                                     |             |
| VIRSH_PATH      | Path to the `virsh` binary directory                                                                                                                                    | /usr/bin                                               |             |
| VM_NAME         | Check only this specific VM (skips list discovery). Cannot be used together with --include-name or --exclude-name                                                       |                                                        |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                      |                                                        |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_CPU_UTILIZATION       | Warning threshold for CPU usage (% vs 1 physical CPU)                                                                                            |                   |             |
| CRITICAL_CPU_UTILIZATION      | Critical threshold for CPU usage (% vs 1 physical CPU)                                                                                           |                   |             |
| WARNING_CPU_UTILIZATION_VCPU  | Warning threshold for CPU usage relative to allocated vCPUs (%)                                                                                  |                   |             |
| CRITICAL_CPU_UTILIZATION_VCPU | Critical threshold for CPU usage relative to allocated vCPUs (%)                                                                                 |                   |             |
| WARNING_VCPU_UTILIZATION      | Warning threshold for per-vCPU usage (% vs 1 physical CPU)                                                                                       |                   |             |
| CRITICAL_VCPU_UTILIZATION     | Critical threshold for per-vCPU usage (% vs 1 physical CPU)                                                                                      |                   |             |
| EXTRA_OPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Disk-Io" label="Disk-Io">

| Macro                | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_READ_IOPS    | Warning threshold for read IOPS                                                                                                                  |                   |             |
| CRITICAL_READ_IOPS   | Critical threshold for read IOPS                                                                                                                 |                   |             |
| WARNING_READ_USAGE   | Warning threshold for disk read throughput (B/s)                                                                                                 |                   |             |
| CRITICAL_READ_USAGE  | Critical threshold for disk read throughput (B/s)                                                                                                |                   |             |
| WARNING_WRITE_IOPS   | Warning threshold for write IOPS                                                                                                                 |                   |             |
| CRITICAL_WRITE_IOPS  | Critical threshold for write IOPS                                                                                                                |                   |             |
| WARNING_WRITE_USAGE  | Warning threshold for disk write throughput (B/s)                                                                                                |                   |             |
| CRITICAL_WRITE_USAGE | Critical threshold for disk write throughput (B/s)                                                                                               |                   |             |
| EXTRA_OPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                      | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_MEMORY_RSS         | Warning threshold for RSS memory on host (bytes)                                                                                                 |                   |             |
| CRITICAL_MEMORY_RSS        | Critical threshold for RSS memory on host (bytes)                                                                                                |                   |             |
| WARNING_MEMORY_USAGE       | Warning threshold for memory used (bytes)                                                                                                        |                   |             |
| CRITICAL_MEMORY_USAGE      | Critical threshold for memory used (bytes)                                                                                                       |                   |             |
| WARNING_MEMORY_USAGE_PRCT  | Warning threshold for memory usage (%)                                                                                                           |                   |             |
| CRITICAL_MEMORY_USAGE_PRCT | Critical threshold for memory usage (%)                                                                                                          |                   |             |
| EXTRA_OPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro                  | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACE_NAME         | Check only this specific network interface (exact match). Cannot be used together with --include-interface or --exclude-interface                |                   |             |
| INCLUDE_INTERFACE_NAME | Filter network interfaces by name (regexp)                                                                                                       |                   |             |
| EXCLUDE_INTERFACE_NAME | Exclude network interfaces whose name matches this regexp                                                                                        |                   |             |
| WARNING_ERRORS_IN      | Warning threshold for inbound errors per second                                                                                                  |                   |             |
| CRITICAL_ERRORS_IN     | Critical threshold for inbound errors per second                                                                                                 |                   |             |
| WARNING_ERRORS_OUT     | Warning threshold for outbound errors per second                                                                                                 |                   |             |
| CRITICAL_ERRORS_OUT    | Critical threshold for outbound errors per second                                                                                                |                   |             |
| WARNING_PACKETS_IN     | Warning threshold for inbound packets per second                                                                                                 |                   |             |
| CRITICAL_PACKETS_IN    | Critical threshold for inbound packets per second                                                                                                |                   |             |
| WARNING_PACKETS_OUT    | Warning threshold for outbound packets per second                                                                                                |                   |             |
| CRITICAL_PACKETS_OUT   | Critical threshold for outbound packets per second                                                                                               |                   |             |
| WARNING_TRAFFIC_IN     | Warning threshold for inbound traffic (b/s)                                                                                                      |                   |             |
| CRITICAL_TRAFFIC_IN    | Critical threshold for inbound traffic (b/s)                                                                                                     |                   |             |
| WARNING_TRAFFIC_OUT    | Warning threshold for outbound traffic (b/s)                                                                                                     |                   |             |
| CRITICAL_TRAFFIC_OUT   | Critical threshold for outbound traffic (b/s)                                                                                                    |                   |             |
| EXTRA_OPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Pool-Status" label="Pool-Status">

| Macro                     | Description                                                                                                                                      | Valeur par défaut         | Obligatoire |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:-----------:|
| POOL_NAME                 | Check only this specific pool                                                                                                                    |                           |             |
| INCLUDE_NAME              | Filter pools by name (regexp)                                                                                                                    |                           |             |
| EXCLUDE_NAME              | Exclude pools whose name matches this regexp                                                                                                     |                           |             |
| WARNING_SPACE_FREE        | Warning threshold for free space (bytes)                                                                                                         |                           |             |
| CRITICAL_SPACE_FREE       | Critical threshold for free space (bytes)                                                                                                        |                           |             |
| WARNING_SPACE_USAGE       | Warning threshold for space used (bytes)                                                                                                         |                           |             |
| CRITICAL_SPACE_USAGE      | Critical threshold for space used (bytes)                                                                                                        |                           |             |
| WARNING_SPACE_USAGE_PRCT  | Warning threshold for space usage (%)                                                                                                            |                           |             |
| CRITICAL_SPACE_USAGE_PRCT | Critical threshold for space usage (%)                                                                                                           |                           |             |
| CRITICAL_STATUS           | Define the conditions to match for the status to be CRITICAL                                                                                     | %\{state\} !~ /^running$/ |             |
| WARNING_STATUS            | Define the conditions to match for the status to be WARNING                                                                                      |                           |             |
| EXTRA_OPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                           |             |

</TabItem>
<TabItem value="Status" label="Status">

| Macro           | Description                                                                                                                                      | Valeur par défaut         | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:-----------:|
| CRITICAL_STATUS | Define the conditions to match for the status to be CRITICAL                                                                                     | %\{state\} !~ /^running$/ |             |
| WARNING_STATUS  | Define the conditions to match for the status to be WARNING                                                                                      |                           |             |
| EXTRA_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                           |             |

</TabItem>
<TabItem value="Volume" label="Volume">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| POOL_NAME                | Check only this specific storage pool (skips pool-list discovery). Cannot be used together with --include-pool or --exclude-pool                 |                   |             |
| INCLUDE_POOL_NAME        | Filter storage pools by name (regexp)                                                                                                            |                   |             |
| XCLUDE_POOL_NAME         | Exclude storage pools whose name matches this regexp                                                                                             |                   |             |
| VOLUME_NAME              | Check only this specific volume (exact match). Cannot be used together with --include-volume or --exclude-volume                                 |                   |             |
| INCLUDE_VOLUME_NAME      | Filter volumes by name (regexp)                                                                                                                  |                   |             |
| EXCLUDE_VOLUME_NAME      | Exclude volumes whose name matches this regexp                                                                                                   |                   |             |
| WARNING_ALLOCATION       | Warning threshold for allocated space (bytes)                                                                                                    |                   |             |
| CRITICAL_ALLOCATION      | Critical threshold for allocated space (bytes)                                                                                                   |                   |             |
| WARNING_ALLOCATION_PRCT  | Warning threshold for allocated space (%)                                                                                                        |                   |             |
| CRITICAL_ALLOCATION_PRCT | Critical threshold for allocated space (%)                                                                                                       |                   |             |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_linux_libvirt_local.pl \
	--plugin='cloud::linux::libvirt::local::plugin' \
	--hostname='10.0.0.1' \
	--ssh-backend='libssh' \
	--ssh-username='username' \
	--ssh-password='password' \
	--ssh-port=''  \
	--connect-uri='qemu:///system?socket=/var/run/libvirt/libvirt-sock-ro' \
	--virsh-path='/usr/bin' \
	--timeout='30' \
	--mode='volume' \
	--pool-name='' \
	--include-pool='' \
	--exclude-pool='' \
	--volume-name='' \
	--include-volume='' \
	--exclude-volume='' \
	--warning-allocation='' \
	--critical-allocation='' \
	--warning-allocation-prct='' \
	--critical-allocation-prct='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All volumes are ok | 'volumes1#volume.allocation.bytes'=35938B;;;0;capacity_bytes 'volumes2#volume.allocation.bytes'=85972B;;;0;capacity_bytes 'volumes1#volume.allocation.percentage'=68%;;;0;100 'volumes2#volume.allocation.percentage'=48%;;;0;100 
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
/usr/lib/centreon/plugins/centreon_linux_libvirt_local.pl \
	--plugin='cloud::linux::libvirt::local::plugin' \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                             | Modèle de service associé                            |
|:---------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/discovery.pm)]    | Utilisé pour la découverte d'hôtes                   |
| pool-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/poolstatus.pm)] | Virt-Linux-Libvirt-Hypervisor-Pool-Status-SSH-custom |
| vm-cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmcpu.pm)]           | Virt-Linux-Libvirt-Vm-Cpu-SSH-custom                 |
| vm-disk-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmdiskio.pm)]    | Virt-Linux-Libvirt-Vm-Disk-Io-SSH-custom             |
| vm-memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmmemory.pm)]     | Virt-Linux-Libvirt-Vm-Memory-SSH-custom              |
| vm-network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmnetwork.pm)]   | Virt-Linux-Libvirt-Vm-Network-SSH-custom             |
| vm-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/vmstatus.pm)]     | Virt-Linux-Libvirt-Vm-Status-SSH-custom              |
| volume [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/linux/libvirt/local/mode/volume.pm)]          | Virt-Linux-Libvirt-Hypervisor-Volume-SSH-custom      |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'        |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-xxx                              | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical-xxx                             | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --ssh-backend                              | Define the backend you want to use. It can be: `sshcli` (default), `plink` and `libssh`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the `sshcli` backend. Warning: using a password is not recommended. Use `--ssh-priv-key` instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 | Hostname to connect when using the SSH backend.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --connect-uri                              | Libvirt connection URI (default: 'qemu:///system?socket=/var/run/libvirt/libvirt-sock-ro'). Examples: qemu:///system, qemu+ssh://user@host/system, xen:///.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --virsh-path                               | Path to the `virsh` binary directory (default: '/usr/bin').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  | Timeout in seconds for `virsh` commands (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --sudo                                     | Run `virsh` commands with sudo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                          | Description                                                                                 |
|:--------------------------------|:--------------------------------------------------------------------------------------------|
| --vm-name                       | Check only this specific VM. Cannot be used together with --include-name or --exclude-name. |
| --include-name                  | Filter VMs by name (regexp).                                                                |
| --exclude-name                  | Exclude VMs whose name matches this regexp.                                                 |
| --warning-cpu-utilization       | Warning threshold for CPU usage (% vs 1 physical CPU).                                      |
| --critical-cpu-utilization      | Critical threshold for CPU usage (% vs 1 physical CPU).                                     |
| --warning-cpu-utilization-vcpu  | Warning threshold for CPU usage relative to allocated vCPUs (%).                            |
| --critical-cpu-utilization-vcpu | Critical threshold for CPU usage relative to allocated vCPUs (%).                           |
| --warning-vcpu-utilization      | Warning threshold for per-vCPU usage (% vs 1 physical CPU).                                 |
| --critical-vcpu-utilization     | Critical threshold for per-vCPU usage (% vs 1 physical CPU).                                |

</TabItem>
<TabItem value="Disk-Io" label="Disk-Io">

| Option                 | Description                                                                                                        |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------|
| --vm-name              | Check only this specific VM. Cannot be used together with --include-name or --exclude-name.                        |
| --include-name         | Filter VMs by name (regexp).                                                                                       |
| --exclude-name         | Exclude VMs whose name matches this regexp.                                                                        |
| --disk-name            | Check only this specific disk device (exact match). Cannot be used together with --include-disk or --exclude-disk. |
| --include-disk         | Filter disk devices by name (regexp).                                                                              |
| --exclude-disk         | Exclude disk devices whose name matches this regexp.                                                               |
| --warning-read-usage   | Warning threshold for disk read throughput (B/s).                                                                  |
| --critical-read-usage  | Critical threshold for disk read throughput (B/s).                                                                 |
| --warning-write-usage  | Warning threshold for disk write throughput (B/s).                                                                 |
| --critical-write-usage | Critical threshold for disk write throughput (B/s).                                                                |
| --warning-read-iops    | Warning threshold for read IOPS.                                                                                   |
| --critical-read-iops   | Critical threshold for read IOPS.                                                                                  |
| --warning-write-iops   | Warning threshold for write IOPS.                                                                                  |
| --critical-write-iops  | Critical threshold for write IOPS.                                                                                 |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                       | Description                                                                                 |
|:-----------------------------|:--------------------------------------------------------------------------------------------|
| --vm-name                    | Check only this specific VM. Cannot be used together with --include-name or --exclude-name. |
| --include-name               | Filter VMs by name (regexp).                                                                |
| --exclude-name               | Exclude VMs whose name matches this regexp.                                                 |
| --warning-memory-usage       | Warning threshold for memory used (bytes).                                                  |
| --critical-memory-usage      | Critical threshold for memory used (bytes).                                                 |
| --warning-memory-usage-prct  | Warning threshold for memory usage (%).                                                     |
| --critical-memory-usage-prct | Critical threshold for memory usage (%).                                                    |
| --warning-memory-rss         | Warning threshold for RSS memory on host (bytes).                                           |
| --critical-memory-rss        | Critical threshold for RSS memory on host (bytes).                                          |

</TabItem>
<TabItem value="Network" label="Network">

| Option                 | Description                                                                                                                        |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| --vm-name              | Check only this specific VM (skips list discovery). Cannot be used together with --include-name or --exclude-name.                 |
| --include-name         | Filter VMs by name (regexp).                                                                                                       |
| --exclude-name         | Exclude VMs whose name matches this regexp.                                                                                        |
| --interface-name       | Check only this specific network interface (exact match). Cannot be used together with --include-interface or --exclude-interface. |
| --include-interface    | Filter network interfaces by name (regexp).                                                                                        |
| --exclude-interface    | Exclude network interfaces whose name matches this regexp.                                                                         |
| --warning-traffic-in   | Warning threshold for inbound traffic (b/s).                                                                                       |
| --critical-traffic-in  | Critical threshold for inbound traffic (b/s).                                                                                      |
| --warning-traffic-out  | Warning threshold for outbound traffic (b/s).                                                                                      |
| --critical-traffic-out | Critical threshold for outbound traffic (b/s).                                                                                     |
| --warning-packets-in   | Warning threshold for inbound packets per second.                                                                                  |
| --critical-packets-in  | Critical threshold for inbound packets per second.                                                                                 |
| --warning-packets-out  | Warning threshold for outbound packets per second.                                                                                 |
| --critical-packets-out | Critical threshold for outbound packets per second.                                                                                |
| --warning-errors-in    | Warning threshold for inbound errors per second.                                                                                   |
| --critical-errors-in   | Critical threshold for inbound errors per second.                                                                                  |
| --warning-errors-out   | Warning threshold for outbound errors per second.                                                                                  |
| --critical-errors-out  | Critical threshold for outbound errors per second.                                                                                 |

</TabItem>
<TabItem value="Pool-Status" label="Pool-Status">

| Option                      | Description                                                                                                                |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------|
| --pool-name                 | Check only this specific pool.                                                                                             |
| --include-name              | Filter pools by name (regexp).                                                                                             |
| --exclude-name              | Exclude pools whose name matches this regexp.                                                                              |
| --unknown-status            | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use: %\{state\}, %\{autostart\}, %\{name\}. |
| --warning-status            | Define the conditions to match for the status to be WARNING (default: '').                                                 |
| --critical-status           | Define the conditions to match for the status to be CRITICAL (default: "%\{state\} !~ /^running$/").                       |
| --warning-space-usage       | Warning threshold for space used (bytes).                                                                                  |
| --critical-space-usage      | Critical threshold for space used (bytes).                                                                                 |
| --warning-space-usage-prct  | Warning threshold for space usage (%).                                                                                     |
| --critical-space-usage-prct | Critical threshold for space usage (%).                                                                                    |
| --warning-space-free        | Warning threshold for free space (bytes).                                                                                  |
| --critical-space-free       | Critical threshold for free space (bytes).                                                                                 |

</TabItem>
<TabItem value="Status" label="Status">

| Option            | Description                                                                                                        |
|:------------------|:-------------------------------------------------------------------------------------------------------------------|
| --vm-name         | Check only this specific VM (skips list discovery). Cannot be used together with --include-name or --exclude-name. |
| --include-name    | Filter VMs by name (regexp).                                                                                       |
| --exclude-name    | Exclude VMs whose name matches this regexp.                                                                        |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. Can use: %\{state\}, %\{display\}.                    |
| --warning-status  | Define the conditions to match for the status to be WARNING.                                                       |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: "%\{state\} !~ /^running$/").               |

</TabItem>
<TabItem value="Volume" label="Volume">

| Option                     | Description                                                                                                                       |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| --pool-name                | Check only this specific storage pool (skips pool-list discovery). Cannot be used together with --include-pool or --exclude-pool. |
| --include-pool             | Filter storage pools by name (regexp).                                                                                            |
| --exclude-pool             | Exclude storage pools whose name matches this regexp.                                                                             |
| --volume-name              | Check only this specific volume (exact match). Cannot be used together with --include-volume or --exclude-volume.                 |
| --include-volume           | Filter volumes by name (regexp).                                                                                                  |
| --exclude-volume           | Exclude volumes whose name matches this regexp.                                                                                   |
| --include-path             | Filter volumes by path (regexp).                                                                                                  |
| --exclude-path             | Exclude volumes whose path matches this regexp.                                                                                   |
| --warning-allocation       | Warning threshold for allocated space (bytes).                                                                                    |
| --critical-allocation      | Critical threshold for allocated space (bytes).                                                                                   |
| --warning-allocation-prct  | Warning threshold for allocated space (%).                                                                                        |
| --critical-allocation-prct | Critical threshold for allocated space (%).                                                                                       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_linux_libvirt_local.pl \
	--plugin='cloud::linux::libvirt::local::plugin' \
	--hostname='10.0.0.1' \
	--help
```
