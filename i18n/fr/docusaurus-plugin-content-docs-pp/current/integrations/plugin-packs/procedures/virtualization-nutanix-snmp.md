---
id: virtualization-nutanix-snmp
slug: /virtualization-nutanix-snmp
title: Nutanix SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Nutanix SNMP** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Nutanix SNMP** apporte 4 modèles d'hôte :

* **Virt-Nutanix-Container-SNMP-custom**
* **Virt-Nutanix-Hypervisor-SNMP-custom**
* **Virt-Nutanix-SNMP-custom**
* **Virt-Nutanix-VM-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-Nutanix-Container-SNMP-custom" label="Virt-Nutanix-Container-SNMP-custom">

| Alias   | Modèle de service                           | Description                                                                      |
|:--------|:--------------------------------------------|:---------------------------------------------------------------------------------|
| Iops    | Virt-Nutanix-Container-Iops-SNMP-custom     | Contrôle les opérations de lecture et d'écriture des containers Nutanix          |
| Latency | Virt-Nutanix-Container-Latency-SNMP-custom  | Contrôle la latence des containers Nutanix                                       |
| Storage | Virt-Nutanix-Container-Storage-SNMP-custom  | Contrôle l'utilisation du stockage des containers Nutanix                        |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Nutanix-Container-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Virt-Nutanix-Hypervisor-SNMP-custom" label="Virt-Nutanix-Hypervisor-SNMP-custom">

| Alias    | Modèle de service                            | Description                                                                      |
|:---------|:---------------------------------------------|:---------------------------------------------------------------------------------|
| Cpu      | Virt-Nutanix-Hypervisor-Cpu-SNMP-custom      | Contrôle l'utilisation des processeurs des hyperviseurs Nutanix                  |
| Iops     | Virt-Nutanix-Hypervisor-Iops-SNMP-custom     | Contrôle les opérations de lecture et d'écriture des hyperviseurs Nutanix        |
| Latency  | Virt-Nutanix-Hypervisor-Latency-SNMP-custom  | Contrôle la latence des hyperviseurs Nutanix                                     |
| Memory   | Virt-Nutanix-Hypervisor-Memory-SNMP-custom   | Contrôle l'utilisation de la mémoire des hyperviseurs Nutanix                    |
| Vm-count | Virt-Nutanix-Hypervisor-Vm-Count-SNMP-custom | Contrôle le nombre de machines virtuelles des hyperviseurs Nutanix               |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Nutanix-Hypervisor-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Virt-Nutanix-SNMP-custom" label="Virt-Nutanix-SNMP-custom">

| Alias              | Modèle de service                           | Description                                    | Découverte |
|:-------------------|:--------------------------------------------|:-----------------------------------------------|:----------:|
| Cluster-Usage      | Virt-Nutanix-Cluster-Usage-SNMP-custom      | Contrôle l'utilisation du cluster              |            |
| Container-Usage    | Virt-Nutanix-Container-Usage-SNMP-custom    | Contrôle l'utilisation du container           |            |
| Disk-Usage         | Virt-Nutanix-Disk-Usage-SNMP-custom         | Contrôle l'utilisation des disques             |     X      |
| Hypervisor-Usage   | Virt-Nutanix-Hypervisor-Usage-SNMP-custom   | Contrôle l'utilisation des hyperviseurs        |            |
| Storage-Pool-Usage | Virt-Nutanix-Storage-Pool-Usage-SNMP-custom | Contrôle l'utilisation des 'storage pools'     |     X      |
| Vm-Usage           | Virt-Nutanix-Vm-Usage-SNMP-custom           | Contrôle l'utilisation des machines virtuelles |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Nutanix-SNMP-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Virt-Nutanix-VM-SNMP-custom" label="Virt-Nutanix-VM-SNMP-custom">

| Alias       | Modèle de service                           | Description                                                                      |
|:------------|:--------------------------------------------|:---------------------------------------------------------------------------------|
| Cpu         | Virt-Nutanix-VM-Cpu-SNMP-custom             | Contrôle l'utilisation du processeur des machines virtuelles Nutanix             |
| Iops        | Virt-Nutanix-VM-Iops-SNMP-custom            | Contrôle les opérations de lecture et d'écriture des machines virtuelles Nutanix |
| Latency     | Virt-Nutanix-VM-Latency-SNMP-custom         | Contrôle la latence des machines virtuelles Nutanix                              |
| Power-State | Virt-Nutanix-VM-Power-State-SNMP-custom     | Contrôle l'état d'alimentation des machines virtuelles Nutanix                   |
| Traffic     | Virt-Nutanix-VM-Traffic-SNMP-custom         | Contrôle le trafic des machines virtuelles Nutanix                              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Nutanix-VM-SNMP-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle    | Description                                                |
|:-------------------|:-----------------------------------------------------------|
| Nutanix VM         | Découvre les machines virtuelles Nutanix avec l'agent SNMP |
| Nutanix Container  | Découvre les conteneurs Nutanix avec l'agent SNMP          |
| Nutanix Hypervisor | Découvre les hyperviseurs Nutanix avec l'agent SNMP        |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                 | Description                                                                     |
|:--------------------------------|:--------------------------------------------------------------------------------|
| Virt-Nutanix-SNMP-Disk-Name     | Découverte des partitions disque et supervision de l'espace de stockage utilisé |
| Virt-Nutanix-SNMP-Storage-Pools | Découverte des Storage Pools et supervision de leur utilisation                 |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cluster-Usage" label="Cluster-Usage">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| status                                  | N/A   |
| cluster.storage.space.usage.bytes       | B     |
| cluster.average.io.latency.microseconds | µs    |
| cluster.operations.iops                 | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| *container*#container.storage.space.usage.bytes       | B     |
| *container*#container.average.io.latency.microseconds | µs    |
| *container*#container.operations.iops                 | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Nom                                                     | Unité |
|:--------------------------------------------------------|:------|
| *hypervisor*#hypervisor.cpu.utilization.percentage      | %     |
| *hypervisor*#hypervisor.memory.usage.bytes              | B     |
| *hypervisor*#hypervisor.average.io.latency.microseconds | µs    |
| *hypervisor*#hypervisor.read.usage.iops                 | iops  |
| *hypervisor*#hypervisor.write.usage.iops                | iops  |
| *hypervisor*#hypervisor.vm.count                        | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Nom                                                             | Unité |
|:----------------------------------------------------------------|:------|
| status                                                          | N/A   |
| *controllervm*~*disk_name*#disk.storage.space.usage.bytes       | B     |
| *controllervm*~*disk_name*#disk.storage.inodes.usage.percentage | %     |
| *controllervm*~*disk_name*#disk.average.io.latency.milliseconds | ms    |
| *controllervm*~*disk_name*#disk.operations.iops                 | iops  |

</TabItem>
<TabItem value="Hypervisor-Usage" label="Hypervisor-Usage">

| Nom                                                     | Unité |
|:--------------------------------------------------------|:------|
| *hypervisor*#hypervisor.cpu.utilization.percentage      | %     |
| *hypervisor*#hypervisor.memory.usage.bytes              | B     |
| *hypervisor*#hypervisor.average.io.latency.microseconds | µs    |
| *hypervisor*#hypervisor.read.usage.iops                 | iops  |
| *hypervisor*#hypervisor.write.usage.iops                | iops  |
| *hypervisor*#hypervisor.vm.count                        | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Iops" label="Iops">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| *container*#container.storage.space.usage.bytes       | B     |
| *container*#container.average.io.latency.microseconds | µs    |
| *container*#container.operations.iops                 | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Latency" label="Latency">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| *container*#container.storage.space.usage.bytes       | B     |
| *container*#container.average.io.latency.microseconds | µs    |
| *container*#container.operations.iops                 | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                                                     | Unité |
|:--------------------------------------------------------|:------|
| *hypervisor*#hypervisor.cpu.utilization.percentage      | %     |
| *hypervisor*#hypervisor.memory.usage.bytes              | B     |
| *hypervisor*#hypervisor.average.io.latency.microseconds | µs    |
| *hypervisor*#hypervisor.read.usage.iops                 | iops  |
| *hypervisor*#hypervisor.write.usage.iops                | iops  |
| *hypervisor*#hypervisor.vm.count                        | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Power-State" label="Power-State">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| vm-power-state                          | N/A   |
| *vm*#vm.cpu.utilization.percentage      | %     |
| *vm*#vm.memory.usage.bytes              | B     |
| *vm*#vm.average.io.latency.microseconds | µs    |
| *vm*#vm.read.usage.iops                 | iops  |
| *vm*#vm.write.usage.iops                | iops  |
| *vm*#vm.traffic.in.bitspersecond        | b/s   |
| *vm*#vm.traffic.out.bitspersecond       | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Storage" label="Storage">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| *container*#container.storage.space.usage.bytes       | B     |
| *container*#container.average.io.latency.microseconds | µs    |
| *container*#container.operations.iops                 | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Storage-Pool-Usage" label="Storage-Pool-Usage">

| Nom                                              | Unité |
|:-------------------------------------------------|:------|
| *sp*#storagepool.storage.space.usage.bytes       | B     |
| *sp*#storagepool.average.io.latency.microseconds | µs    |
| *sp*#storagepool.operations.iops                 | iops  |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| vm-power-state                          | N/A   |
| *vm*#vm.cpu.utilization.percentage      | %     |
| *vm*#vm.memory.usage.bytes              | B     |
| *vm*#vm.average.io.latency.microseconds | µs    |
| *vm*#vm.read.usage.iops                 | iops  |
| *vm*#vm.write.usage.iops                | iops  |
| *vm*#vm.traffic.in.bitspersecond        | b/s   |
| *vm*#vm.traffic.out.bitspersecond       | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| vm-power-state                          | N/A   |
| *vm*#vm.cpu.utilization.percentage      | %     |
| *vm*#vm.memory.usage.bytes              | B     |
| *vm*#vm.average.io.latency.microseconds | µs    |
| *vm*#vm.read.usage.iops                 | iops  |
| *vm*#vm.write.usage.iops                | iops  |
| *vm*#vm.traffic.in.bitspersecond        | b/s   |
| *vm*#vm.traffic.out.bitspersecond       | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Vm-count" label="Vm-count">

| Nom                                                     | Unité |
|:--------------------------------------------------------|:------|
| *hypervisor*#hypervisor.cpu.utilization.percentage      | %     |
| *hypervisor*#hypervisor.memory.usage.bytes              | B     |
| *hypervisor*#hypervisor.average.io.latency.microseconds | µs    |
| *hypervisor*#hypervisor.read.usage.iops                 | iops  |
| *hypervisor*#hypervisor.write.usage.iops                | iops  |
| *hypervisor*#hypervisor.vm.count                        | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

L'agent SNMP doit être activé et configuré sur l'équipement. 
Veuillez vous référer à la [documentation officielle](https://portal.nutanix.com/page/documents/kbs/details?targetId=kA0600000008bAECAY) du constructeur/éditeur. 
Il se peut que votre équipement nécessite qu'une liste d'adresses autorisées à l'interroger soit paramétrée. 
Veillez à ce que les adresses des collecteurs Centreon y figurent bien.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers la ressource supervisée.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-virtualization-nutanix-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-nutanix-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-nutanix-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-nutanix-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Nutanix SNMP**
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
dnf install centreon-plugin-Virtualization-Nutanix-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Nutanix-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-nutanix-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Nutanix-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Virt-Nutanix-Container-SNMP-custom" label="Virt-Nutanix-Container-SNMP-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Nutanix-Container-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#mapping-des-options-snmpv3).

| Macro            | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME       | Filter container name (can be a regexp)                                                                                                            |                   |             |
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Virt-Nutanix-Hypervisor-SNMP-custom" label="Virt-Nutanix-Hypervisor-SNMP-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Nutanix-Hypervisor-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#mapping-des-options-snmpv3).

| Macro            | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME       | Filter hypervisor name (can be a regexp)                                                                                                           |                   |             |
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Virt-Nutanix-SNMP-custom" label="Virt-Nutanix-SNMP-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Nutanix-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#mapping-des-options-snmpv3).

| Macro            | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Virt-Nutanix-VM-SNMP-custom" label="Virt-Nutanix-VM-SNMP-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Nutanix-VM-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#mapping-des-options-snmpv3).

| Macro            | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME       | Filter virtual machine name (can be a regexp)                                                                                                      |                   |             |
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cluster-Usage" label="Cluster-Usage">

| Macro              | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| WARNINGAVGLATENCY  | Threshold                                                                                                                                        |                          |             |
| CRITICALAVGLATENCY | Threshold                                                                                                                                        |                          |             |
| WARNINGIOPS        | Threshold                                                                                                                                        |                          |             |
| CRITICALIOPS       | Threshold                                                                                                                                        |                          |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}                     | %\{status\} ne "started" |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                      |                          |             |
| WARNINGUSAGE       | Threshold                                                                                                                                        |                          |             |
| CRITICALUSAGE      | Threshold                                                                                                                                        |                          |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Macro              | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME         | Filter container name (can be a regexp)                                                                                                          |                   |             |
| WARNINGAVGLATENCY  | Threshold                                                                                                                                        |                   |             |
| CRITICALAVGLATENCY | Threshold                                                                                                                                        |                   |             |
| WARNINGIOPS        | Threshold                                                                                                                                        |                   |             |
| CRITICALIOPS       | Threshold                                                                                                                                        |                   |             |
| WARNINGUSAGE       | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGE      | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro          | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                                           | ^cpu$             |             |
| WARNINGCPU     | Threshold                                                                                                                                        |                   |             |
| CRITICALCPU    | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Macro              | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCONTROLLERVM | Filter controllervm name (can be a regexp)                                                                                                       |                   |             |
| FILTERNAME         | Filter disk name (can be a regexp)                                                                                                               |                   |             |
| WARNINGAVGLATENCY  | Threshold                                                                                                                                        |                   |             |
| CRITICALAVGLATENCY | Threshold                                                                                                                                        |                   |             |
| WARNINGIOPS        | Threshold                                                                                                                                        |                   |             |
| CRITICALIOPS       | Threshold                                                                                                                                        |                   |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{crtName\}, %\{diskId\}          |                   |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{crtName\}, %\{diskId\}         |                   |             |
| WARNINGUSAGE       | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGE      | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Hypervisor-Usage" label="Hypervisor-Usage">

| Macro              | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME         | Filter hypervisor name (can be a regexp)                                                                                                         |                   |             |
| WARNINGAVGLATENCY  | Threshold                                                                                                                                        |                   |             |
| CRITICALAVGLATENCY | Threshold                                                                                                                                        |                   |             |
| WARNINGCPU         | Threshold                                                                                                                                        |                   |             |
| CRITICALCPU        | Threshold                                                                                                                                        |                   |             |
| WARNINGMEMORY      | Threshold                                                                                                                                        |                   |             |
| CRITICALMEMORY     | Threshold                                                                                                                                        |                   |             |
| WARNINGREADIOPS    | Threshold                                                                                                                                        |                   |             |
| CRITICALREADIOPS   | Threshold                                                                                                                                        |                   |             |
| WARNINGVMCOUNT     | Threshold                                                                                                                                        |                   |             |
| CRITICALVMCOUNT    | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITEIOPS   | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITEIOPS  | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Iops" label="Iops">

| Macro          | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                                           | ^iops$            |             |
| WARNINGIOPS    | Threshold                                                                                                                                        |                   |             |
| CRITICALIOPS   | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Latency" label="Latency">

| Macro              | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS     | Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                                           | ^avg-latency$     |             |
| WARNINGAVGLATENCY  | Threshold                                                                                                                                        |                   |             |
| CRITICALAVGLATENCY | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro          | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                                           | ^memory$          |             |
| WARNINGMEMORY  | Threshold                                                                                                                                        |                   |             |
| CRITICALMEMORY | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Power-State" label="Power-State">

| Macro                | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGVMPOWERSTATE  | Set warning threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}                                |                   |             |
| CRITICALVMPOWERSTATE | Set critical threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}                               |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro          | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS | Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                            | ^usage$           |             |
| WARNINGUSAGE   | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGE  | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Storage-Pool-Usage" label="Storage-Pool-Usage">

| Macro              | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME         | Filter storage pool name (can be a regexp)                                                                                                       |                   |             |
| WARNINGAVGLATENCY  | Threshold                                                                                                                                        |                   |             |
| CRITICALAVGLATENCY | Threshold                                                                                                                                        |                   |             |
| WARNINGIOPS        | Threshold                                                                                                                                        |                   |             |
| CRITICALIOPS       | Threshold                                                                                                                                        |                   |             |
| WARNINGUSAGE       | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGE      | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Macro              | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS     | Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                                           | ^traffic.*$       |             |
| WARNINGTRAFFICIN   | Threshold                                                                                                                                        |                   |             |
| CRITICALTRAFFICIN  | Threshold                                                                                                                                        |                   |             |
| WARNINGTRAFFICOUT  | Threshold                                                                                                                                        |                   |             |
| CRITICALTRAFFICOUT | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Macro              | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME         | Filter virtual machine name (can be a regexp)                                                                                                    |                   |             |
| WARNINGAVGLATENCY  | Threshold                                                                                                                                        |                   |             |
| CRITICALAVGLATENCY | Threshold                                                                                                                                        |                   |             |
| WARNINGCPU         | Threshold                                                                                                                                        |                   |             |
| CRITICALCPU        | Threshold                                                                                                                                        |                   |             |
| WARNINGREADIOPS    | Threshold                                                                                                                                        |                   |             |
| CRITICALREADIOPS   | Threshold                                                                                                                                        |                   |             |
| WARNINGTRAFFICIN   | Threshold                                                                                                                                        |                   |             |
| CRITICALTRAFFICIN  | Threshold                                                                                                                                        |                   |             |
| WARNINGTRAFFICOUT  | Threshold                                                                                                                                        |                   |             |
| CRITICALTRAFFICOUT | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITEIOPS   | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITEIOPS  | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Vm-count" label="Vm-count">

| Macro           | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOUNTERS  | Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                                           | ^vm-count$        |             |
| WARNINGVMCOUNT  | Threshold                                                                                                                                        |                   |             |
| CRITICALVMCOUNT | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_nutanix_snmp.pl \
	--plugin=cloud::nutanix::snmp::plugin \
	--mode=hypervisor-usage \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community' \
	--filter-name=''  \
	--warning-count='' \
	--critical-count='' \
	--filter-counters='^vm-count$' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Hypervisor 'abc-123ntx1' VM Count : 2 | 'abc-123ntx1#hypervisor.vm.count'=2;;;0; 

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
/usr/lib/centreon/plugins/centreon_nutanix_snmp.pl \
	--plugin=cloud::nutanix::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                   | Modèle de service associé                                                                                                                                                                                                                                                               |
|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cluster-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/clusterusage.pm)]          | Virt-Nutanix-Cluster-Usage-SNMP-custom                                                                                                                                                                                                                                                  |
| container-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/containerusage.pm)]      | Virt-Nutanix-Container-Usage-SNMP-custom<br />Virt-Nutanix-Container-Iops-SNMP-custom<br />Virt-Nutanix-Container-Latency-SNMP-custom<br />Virt-Nutanix-Container-Storage-SNMP-custom                                                                                                   |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/discovery.pm)]                 | Used for host discovery                                                                                                                                                                                                                                                                 |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/diskusage.pm)]                | Virt-Nutanix-Disk-Usage-SNMP-custom                                                                                                                                                                                                                                                     |
| hypervisor-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/hypervisorusage.pm)]    | Virt-Nutanix-Hypervisor-Cpu-SNMP-custom<br />Virt-Nutanix-Hypervisor-Usage-SNMP-custom<br />Virt-Nutanix-Hypervisor-Iops-SNMP-custom<br />Virt-Nutanix-Hypervisor-Latency-SNMP-custom<br />Virt-Nutanix-Hypervisor-Memory-SNMP-custom<br />Virt-Nutanix-Hypervisor-Vm-Count-SNMP-custom |
| list-containers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/listcontainers.pm)]      | Not used in this Monitoring Connector                                                                                                                                                                                                                                                   |
| list-disks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/listdisks.pm)]                | Used for service discovery                                                                                                                                                                                                                                                              |
| list-hypervisors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/listhypervisors.pm)]    | Not used in this Monitoring Connector                                                                                                                                                                                                                                                   |
| list-storage-pools [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/liststoragepools.pm)] | Used for service discovery                                                                                                                                                                                                                                                              |
| list-vms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/listvms.pm)]                    | Not used in this Monitoring Connector                                                                                                                                                                                                                                                   |
| storage-pool-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/storagepoolusage.pm)] | Virt-Nutanix-Storage-Pool-Usage-SNMP-custom                                                                                                                                                                                                                                             |
| vm-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/nutanix/snmp/mode/vmusage.pm)]                    | Virt-Nutanix-VM-Cpu-SNMP-custom<br />Virt-Nutanix-VM-Iops-SNMP-custom<br />Virt-Nutanix-VM-Latency-SNMP-custom<br />Virt-Nutanix-VM-Power-State-SNMP-custom<br />Virt-Nutanix-VM-Traffic-SNMP-custom<br />Virt-Nutanix-Vm-Usage-SNMP-custom                                             |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --hostname                                 |   Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           |   SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             |   Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                |   UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             |   Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             |   Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           |   Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               |   How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          |    Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-force-getnext                       |   Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          |   Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            |   SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           |   SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --authprotocol                             |   SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           |   SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             |   SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              |   SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          |   SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given  as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --securityengineid                         |   SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         |   Expected status in case of SNMP error or timeout. Possible values are ok, warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       |   Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    |   X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  |   X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --snmp-tls-their-hostname                  |   Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      |   A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also  define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cluster-Usage" label="Cluster-Usage">

| Option            | Description                                                                                                                      |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                          |
| --warning-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}    |
| --critical-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}   |
| --warning-*       |   Warning threshold. Can be: 'usage', 'avg-latency', 'iops'.                                                                     |
| --critical-*      |   Critical threshold. Can be: 'usage', 'avg-latency', 'iops'.                                                                    |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                                                                 |
| --free            |   Thresholds are on free space left.                                                                                             |

</TabItem>
<TabItem value="Container-Usage" label="Container-Usage">

| Option            | Description                                                                               |
|:------------------|:------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'   |
| --filter-name     |   Filter container name (can be a regexp).                                                |
| --warning-*       |   Warning threshold. Can be: 'usage', 'avg-latency', 'iops'.                              |
| --critical-*      |   Critical threshold. Can be: 'usage', 'avg-latency', 'iops'.                             |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                          |
| --free            |   Thresholds are on free space left.                                                      |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                    | Description                                                                                                             |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                |
| --filter-name             |   Filter hypervisor name (can be a regexp).                                                                             |
| --warning-vm-power-state  |   Set warning threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.    |
| --critical-vm-power-state |   Set critical threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.   |
| --warning-*               |   Warning threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.             |
| --critical-*              |   Critical threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.            |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Option                | Description                                                                                                                                  |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters     |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                      |
| --filter-name         |   Filter disk name (can be a regexp).                                                                                                        |
| --filter-controllervm |   Filter controllervm name (can be a regexp).                                                                                                |
| --warning-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{crtName\}, %\{diskId\}    |
| --critical-status     |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{crtName\}, %\{diskId\}   |
| --warning-*           |   Warning threshold. Can be: 'usage', 'inodes' (%), 'avg-latency', 'iops'.                                                                   |
| --critical-*          |   Critical threshold. Can be: 'usage', 'inodes' (%), 'avg-latency', 'iops'.                                                                  |
| --units               |   Units of thresholds (default: '%') ('%', 'B').                                                                                             |
| --free                |   Thresholds are on free space left.                                                                                                         |

</TabItem>
<TabItem value="Hypervisor-Usage" label="Hypervisor-Usage">

| Option            | Description                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                        |
| --filter-name     |   Filter hypervisor name (can be a regexp).                                                                     |
| --warning-*       |   Warning threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.     |
| --critical-*      |   Critical threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.    |

</TabItem>
<TabItem value="Iops" label="Iops">

| Option                    | Description                                                                                                             |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                |
| --filter-name             |   Filter hypervisor name (can be a regexp).                                                                             |
| --warning-*               |   Warning threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.             |
| --critical-*              |   Critical threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.            |
| --units                   |   Units of thresholds (default: '%') ('%', 'B').                                                                        |
| --free                    |   Thresholds are on free space left.                                                                                    |
| --warning-vm-power-state  |   Set warning threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.    |
| --critical-vm-power-state |   Set critical threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.   |

</TabItem>
<TabItem value="Latency" label="Latency">

| Option                    | Description                                                                                                             |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                |
| --filter-name             |   Filter hypervisor name (can be a regexp).                                                                             |
| --warning-*               |   Warning threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.             |
| --critical-*              |   Critical threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.            |
| --units                   |   Units of thresholds (default: '%') ('%', 'B').                                                                        |
| --free                    |   Thresholds are on free space left.                                                                                    |
| --warning-vm-power-state  |   Set warning threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.    |
| --critical-vm-power-state |   Set critical threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option            | Description                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                        |
| --filter-name     |   Filter hypervisor name (can be a regexp).                                                                     |
| --warning-*       |   Warning threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.     |
| --critical-*      |   Critical threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.    |

</TabItem>
<TabItem value="Power-State" label="Power-State">

| Option                    | Description                                                                                                                       |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                          |
| --filter-name             |   Filter virtual machine name (can be a regexp).                                                                                  |
| --warning-vm-power-state  |   Set warning threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.              |
| --critical-vm-power-state |   Set critical threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.             |
| --warning-*               |   Warning threshold. Can be: 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'memory' (%s), 'traffic-in', 'traffic-out'.     |
| --critical-*              |   Critical threshold. Can be: 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'memory' (%s), 'traffic-in', 'traffic-out'.    |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option            | Description                                                                               |
|:------------------|:------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'   |
| --filter-name     |   Filter container name (can be a regexp).                                                |
| --warning-*       |   Warning threshold. Can be: 'usage', 'avg-latency', 'iops'.                              |
| --critical-*      |   Critical threshold. Can be: 'usage', 'avg-latency', 'iops'.                             |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                          |
| --free            |   Thresholds are on free space left.                                                      |

</TabItem>
<TabItem value="Storage-Pool-Usage" label="Storage-Pool-Usage">

| Option            | Description                                                                               |
|:------------------|:------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^usage$'   |
| --filter-name     |   Filter storage pool name (can be a regexp).                                             |
| --warning-*       |   Warning threshold. Can be: 'usage', 'avg-latency', 'iops'.                              |
| --critical-*      |   Critical threshold. Can be: 'usage', 'avg-latency', 'iops'.                             |
| --units           |   Units of thresholds (default: '%') ('%', 'B').                                          |
| --free            |   Thresholds are on free space left.                                                      |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Option                    | Description                                                                                                                       |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                          |
| --filter-name             |   Filter virtual machine name (can be a regexp).                                                                                  |
| --warning-vm-power-state  |   Set warning threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.              |
| --critical-vm-power-state |   Set critical threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.             |
| --warning-*               |   Warning threshold. Can be: 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'memory' (%s), 'traffic-in', 'traffic-out'.     |
| --critical-*              |   Critical threshold. Can be: 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'memory' (%s), 'traffic-in', 'traffic-out'.    |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Option                    | Description                                                                                                                       |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                                          |
| --filter-name             |   Filter virtual machine name (can be a regexp).                                                                                  |
| --warning-vm-power-state  |   Set warning threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.              |
| --critical-vm-power-state |   Set critical threshold for the virtual machine power state. You can use the following variables: %\{vmPowerState\}.             |
| --warning-*               |   Warning threshold. Can be: 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'memory' (%s), 'traffic-in', 'traffic-out'.     |
| --critical-*              |   Critical threshold. Can be: 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'memory' (%s), 'traffic-in', 'traffic-out'.    |

</TabItem>
<TabItem value="Vm-count" label="Vm-count">

| Option            | Description                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^memory$'                        |
| --filter-name     |   Filter hypervisor name (can be a regexp).                                                                     |
| --warning-*       |   Warning threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.     |
| --critical-*      |   Critical threshold. Can be: 'memory' (%), 'avg-latency', 'read-iops', 'write-iops', 'cpu' (%), 'vm-count'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_nutanix_snmp.pl \
	--plugin=cloud::nutanix::snmp::plugin \
	--mode=hypervisor-usage \
	--help
```

