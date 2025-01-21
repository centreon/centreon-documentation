---
id: virtualization-hyperv-2012-nrpe
title: Hyper-V 2012 NSClient++ NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Hyper-V 2012** apporte 2 modèles d'hôte :

* **Virt-Hyperv-2012-Node-NRPE-custom**
* **Virt-Hyperv-2012-Scvmm-NRPE-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-Hyperv-2012-Node-NRPE-custom" label="Virt-Hyperv-2012-Node-NRPE-custom">

| Alias                    | Modèle de service                                     | Description                                                            |
|:-------------------------|:------------------------------------------------------|:-----------------------------------------------------------------------|
| Node-Integration-Service | Virt-Hyperv-2012-Node-Integration-Service-NRPE-custom | Contrôle permettant de vérifier le statut des services d'intégration   |
| Node-Replication         | Virt-Hyperv-2012-Node-Replication-NRPE-custom         | Contrôle permettant de vérifier la réplication des machines virtuelles |
| Node-Snapshot            | Virt-Hyperv-2012-Node-Snapshot-NRPE-custom            | Contrôle permettant de vérifier les snapshots des machines virtuelles  |
| Node-Vm-Status           | Virt-Hyperv-2012-Node-Vm-Status-NRPE-custom           | Contrôle permettant de vérifier le statut des machines virtuelles      |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Hyperv-2012-Node-NRPE-custom** est utilisé.

</TabItem>
<TabItem value="Virt-Hyperv-2012-Scvmm-NRPE-custom" label="Virt-Hyperv-2012-Scvmm-NRPE-custom">

| Alias                     | Modèle de service                                      | Description                                                    |
|:--------------------------|:-------------------------------------------------------|:---------------------------------------------------------------|
| Scvmm-Integration-Service | Virt-Hyperv-2012-Scvmm-Integration-Service-NRPE-custom | Contrôle permettant de vérifier les services d'intégration     |
| Scvmm-Snapshot            | Virt-Hyperv-2012-Scvmm-Snapshot-NRPE-custom            | Contrôle permettant de vérifier les snapshots                  |
| Scvmm-Vm-Status           | Virt-Hyperv-2012-Scvmm-Vm-Status-NRPE-custom           | Contrôle permettant de vérifier l'état des machines virtuelles |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-Hyperv-2012-Scvmm-NRPE-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Node-Integration-Service" label="Node-Integration-Service">

| Métrique       | Unité |
|:---------------|:------|
| global-status  | N/A   |
| service-status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Node-Replication" label="Node-Replication">

| Métrique    | Unité |
|:------------|:------|
| *vm*#status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Node-Snapshot" label="Node-Snapshot">

| Métrique      | Unité |
|:--------------|:------|
| *vm*#snapshot | N/A   |
| *vm*#backing  | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Node-Vm-Status" label="Node-Vm-Status">

| Métrique    | Unité |
|:------------|:------|
| *vm*#status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Scvmm-Integration-Service" label="Scvmm-Integration-Service">

| Métrique                 | Unité |
|:-------------------------|:------|
| *vm*#status              | N/A   |
| *vm*#osshutdown-status   | N/A   |
| *vm*#timesync-status     | N/A   |
| *vm*#dataexchange-status | N/A   |
| *vm*#heartbeat-status    | N/A   |
| *vm*#backup-status       | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Scvmm-Snapshot" label="Scvmm-Snapshot">

| Métrique      | Unité |
|:--------------|:------|
| *vm*#snapshot | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Scvmm-Vm-Status" label="Scvmm-Vm-Status">

| Métrique    | Unité |
|:------------|:------|
| *vm*#status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour superviser les ressources *Windows* via NRPE, installez la version Centreon
de l'agent NSClient++. Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur NRPE** est correcte.

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
dnf install centreon-pack-virtualization-hyperv-2012-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-virtualization-hyperv-2012-nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-virtualization-hyperv-2012-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-virtualization-hyperv-2012-nrpe
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Hyper-V 2012**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-nrpe3-plugin
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Virt-Hyperv-2012-Node-NRPE-custom" label="Virt-Hyperv-2012-Node-NRPE-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Hyperv-2012-Node-NRPE-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                                                                        | Valeur par défaut     | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         | NRPE Port of the target server                                                                                                                     | 5666                  |             |
| NRPECLIENT       | NRPE Plugin binary to use                                                                                                                          | check\_centreon\_nrpe |             |
| NRPETIMEOUT      | Timeout value                                                                                                                                      | 55                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | -u -m 8192            |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Virt-Hyperv-2012-Scvmm-NRPE-custom" label="Virt-Hyperv-2012-Scvmm-NRPE-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-Hyperv-2012-Scvmm-NRPE-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                                                                        | Valeur par défaut     | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         | NRPE Port of the target server                                                                                                                     | 5666                  |             |
| SCVMMPORT        | SCVMM port used                                                                                                                                    | 8100                  |             |
| NRPECLIENT       | NRPE Plugin binary to use                                                                                                                          | check\_centreon\_nrpe |             |
| NRPETIMEOUT      | Timeout value                                                                                                                                      | 55                    |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | -u -m 8192            |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Node-Integration-Service" label="Node-Integration-Service">

| Macro                 | Description                                                                                                                                                                          | Valeur par défaut                                    | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:-----------:|
| FILTERSTATUS          | Filter virtual machine status (can be a regexp)                                                                                                                                      | Running                                              |             |
| FILTERVM              | Filter virtual machines (can be a regexp)                                                                                                                                            |                                                      |             |
| FILTERNOTE            | Filter by VM notes (can be a regexp)                                                                                                                                                 |                                                      |             |
| WARNINGGLOBALSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{vm\}, %\{integration_service_state\}, %\{integration_service_version\}, %\{state\}  | %\{integration_service_state\}=~ /Update required/i |             |
| CRITICALGLOBALSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{vm\}, %\{integration_service_state\}, %\{integration_service_version\}, %\{state\} |                                                      |             |
| CRITICALSERVICESTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{vm\}, %\{service\}, %\{primary_status\}, %\{secondary_status\}, %\{enabled\}           | not %\{primary_status\} =~ /Ok/i                      |             |
| WARNINGSERVICESTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{vm\}, %\{service\}, %\{primary_status\}, %\{secondary_status\}, %\{enabled\}            |                                                      |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                     | --verbose                                            |             |

</TabItem>
<TabItem value="Node-Replication" label="Node-Replication">

| Macro          | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| FILTERVM       | Filter virtual machines (can be a regexp)                                                                                                        |                          |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{vm\}, %\{state\}, %\{health\}                     | %\{health\} =~ /Warning/i  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{vm\}, %\{state\}, %\{health\}                    | %\{health\} =~ /Critical/i |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                |             |

</TabItem>
<TabItem value="Node-Snapshot" label="Node-Snapshot">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATUS     | Filter virtual machine status (can be a regexp)                                                                                                  | running           |             |
| FILTERVM         | Filter virtual machines (can be a regexp)                                                                                                        |                   |             |
| FILTERNOTE       | Filter by VM notes (can be a regexp)                                                                                                             |                   |             |
| WARNINGBACKING   | Warning threshold                                                                                                                                |                   |             |
| CRITICALBACKING  | Critical threshold                                                                                                                               |                   |             |
| WARNINGSNAPSHOT  | Warning threshold                                                                                                                                |                   |             |
| CRITICALSNAPSHOT | Critical threshold                                                                                                                               |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Node-Vm-Status" label="Node-Vm-Status">

| Macro          | Description                                                                                                                                      | Valeur par défaut                      | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| FILTERVM       | Filter virtual machines (can be a regexp)                                                                                                        |                                        |             |
| FILTERNOTE     | Filter by VM notes (can be a regexp)                                                                                                             |                                        |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{vm\}, %\{state\}, %\{status\}, %\{is_clustered\}  | not %\{status\} =~ /Operating normally/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{vm\}, %\{state\}, %\{status\}, %\{is_clustered\}   |                                        |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                              |             |

</TabItem>
<TabItem value="Scvmm-Integration-Service" label="Scvmm-Integration-Service">

| Macro             | Description                                                                                                                                      | Valeur par défaut                | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERSTATUS      | Filter virtual machine status (can be a regexp)                                                                                                  | Running                          |             |
| FILTERVM          | Filter virtual machines (can be a regexp)                                                                                                        |                                  |             |
| FILTERDESCRIPTION | Filter by description (can be a regexp)                                                                                                          |                                  |             |
| FILTERHOSTGROUP   | Filter hostgroup (can be a regexp)                                                                                                               |                                  |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{vm\}, %\{vmaddition\}, %\{status\}               | %\{vmaddition\} =~ /not detected/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING . You can use the following variables: %\{vm\}, %\{vmaddition\}, %\{status\}               |                                  |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                        |             |

</TabItem>
<TabItem value="Scvmm-Snapshot" label="Scvmm-Snapshot">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATUS      | Filter virtual machine status (can be a regexp)                                                                                                  | running           |             |
| FILTERVM          | Filter virtual machines (can be a regexp)                                                                                                        |                   |             |
| FILTERDESCRIPTION | Filter by description (can be a regexp)                                                                                                          |                   |             |
| FILTERHOSTGROUP   | Filter hostgroup (can be a regexp)                                                                                                               |                   |             |
| WARNINGSNAPSHOT   | Warning threshold                                                                                                                                |                   |             |
| CRITICALSNAPSHOT  | Critical threshold                                                                                                                               |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Scvmm-Vm-Status" label="Scvmm-Vm-Status">

| Macro             | Description                                                                                                                                      | Valeur par défaut                    | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|:-----------:|
| FILTERVM          | Filter virtual machines (can be a regexp)                                                                                                        |                                      |             |
| FILTERDESCRIPTION | Filter by description (can be a regexp)                                                                                                          |                                      |             |
| FILTERHOSTGROUP   | Filter hostgroup (can be a regexp)                                                                                                               |                                      |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{vm\}, %\{status\}, %\{hostgroup\}                | not %\{status\} =~ /Running\|Stopped/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING . You can use the following variables: %\{vm\}, %\{status\}, %\{hostgroup\}                |                                      |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                            |             |

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
/usr/lib64/nagios/plugins// -H 10.0.0.1 -p  -t   -c check_centreon_plugins -a 'apps::microsoft::hyperv::2012::local::plugin' 'scvmm-vm-status'  '  \
	--scvmm-hostname="" \
	--scvmm-username="XXXX" \
	--scvmm-password="XXXX" \
	--scvmm-port="8100" \
	--filter-vm=""  \
	--filter-description="" \
	--filter-hostgroup="" \
	--warning-status="" \
	--critical-status="not %\{status\} =~ /Running|Stopped/i" \
	--verbose'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All virtual machines are ok 
VM 'vm1' status: Operating normally (state: Running, is clustered: 1)
VM 'vm2' status: Operating normally (state: Running, is clustered: 0)
VM 'vm3' status: Operating normally (state: Running, is clustered: 1)
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
/usr/lib64/nagios/plugins// -H 10.0.0.1 -p  -t   -c check_centreon_plugins -a 'apps::microsoft::hyperv::2012::local::plugin' 'scvmm-vm-status'  '  \
	--scvmm-hostname="" \
	--list-mode'
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                               | Modèle de service associé                              |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|
| list-node-vms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/listnodevms.pm)]                         | Not used in this Monitoring Connector                  |
| node-integration-service [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/nodeintegrationservice.pm)]   | Virt-Hyperv-2012-Node-Integration-Service-NRPE-custom  |
| node-replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/nodereplication.pm)]                  | Virt-Hyperv-2012-Node-Replication-NRPE-custom          |
| node-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/nodesnapshot.pm)]                        | Virt-Hyperv-2012-Node-Snapshot-NRPE-custom             |
| node-vm-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/nodevmstatus.pm)]                       | Virt-Hyperv-2012-Node-Vm-Status-NRPE-custom            |
| scvmm-discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/scvmmdiscovery.pm)]                    | Not used in this Monitoring Connector                  |
| scvmm-integration-service [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/scvmmintegrationservice.pm)] | Virt-Hyperv-2012-Scvmm-Integration-Service-NRPE-custom |
| scvmm-snapshot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/scvmmsnapshot.pm)]                      | Virt-Hyperv-2012-Scvmm-Snapshot-NRPE-custom            |
| scvmm-vm-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/hyperv/2012/local/mode/scvmmvmstatus.pm)]                     | Virt-Hyperv-2012-Scvmm-Vm-Status-NRPE-custom           |

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

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Node-Integration-Service" label="Node-Integration-Service">

| Option                    | Description                                                                                                                                                                                                                                             |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                 | Set timeout time for command execution (default: 50 sec)                                                                                                                                                                                                |
| --no-ps                   | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                                                                                   |
| --command                 | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                                  |
| --command-path            | Command path (default: none).                                                                                                                                                                                                                           |
| --command-options         | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                                 |
| --ps-display              | Display powershell script.                                                                                                                                                                                                                              |
| --ps-exec-only            | Print powershell output.                                                                                                                                                                                                                                |
| --filter-vm               | Filter virtual machines (can be a regexp).                                                                                                                                                                                                              |
| --filter-note             | Filter by VM notes (can be a regexp).                                                                                                                                                                                                                   |
| --filter-status           | Filter virtual machine status (can be a regexp) (default: 'running').                                                                                                                                                                                   |
| --warning-global-status   | Define the conditions to match for the status to be WARNING (default: '%\{integration_service_state\}=~ /Update required/i'). You can use the following variables: %\{vm\}, %\{integration_service_state\}, %\{integration_service_version\}, %\{state\}   |
| --critical-global-status  | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{vm\}, %\{integration_service_state\}, %\{integration_service_version\}, %\{state\}                                                      |
| --warning-service-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{vm\}, %\{service\}, %\{primary_status\}, %\{secondary_status\}, %\{enabled\}                                                                 |
| --critical-service-status | Define the conditions to match for the status to be CRITICAL (default: '%\{primary_status\} !~ /Ok/i'). You can use the following variables: %\{vm\}, %\{service\}, %\{primary_status\}, %\{secondary_status\}, %\{enabled\}                                     |

</TabItem>
<TabItem value="Node-Replication" label="Node-Replication">

| Option            | Description                                                                                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (default: 50 sec)                                                                                                               |
| --no-ps           | Don't encode powershell. To be used with --command and 'type'command.                                                                                                  |
| --command         | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                 |
| --command-path    | Command path (default: none).                                                                                                                                          |
| --command-options | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                |
| --ps-display      | Display powershell script.                                                                                                                                             |
| --ps-exec-only    | Print powershell output.                                                                                                                                               |
| --filter-vm       | Filter virtual machines (can be a regexp).                                                                                                                             |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: '%\{health\} =~ /Warning/i'). You can use the following variables: %\{vm\}, %\{state\}, %\{health\}      |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{health\} =~ /Critical/i'). You can use the following variables: %\{vm\}, %\{state\}, %\{health\}    |

</TabItem>
<TabItem value="Node-Snapshot" label="Node-Snapshot">

| Option            | Description                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps           | Don't encode powershell. To be used with --command and 'type'command.                                                                    |
| --command         | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path    | Command path (default: none).                                                                                                            |
| --command-options | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display      | Display powershell script.                                                                                                               |
| --ps-exec-only    | Print powershell output.                                                                                                                 |
| --filter-status   | Filter virtual machine status (can be a regexp) (default: 'running').                                                                    |
| --filter-vm       | Filter virtual machines (can be a regexp).                                                                                               |
| --filter-note     | Filter by VM notes (can be a regexp).                                                                                                    |
| --warning-*       | Warning threshold. Can be: 'snapshot' (in seconds), 'backing' (in seconds).                                                              |
| --critical-*      | Critical threshold. Can be: 'snapshot' (in seconds), 'backing' (in seconds).                                                             |

</TabItem>
<TabItem value="Node-Vm-Status" label="Node-Vm-Status">

| Option            | Description                                                                                                                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (default: 50 sec)                                                                                                                                           |
| --no-ps           | Don't encode powershell. To be used with --command and 'type'command.                                                                                                                              |
| --command         | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                             |
| --command-path    | Command path (default: none).                                                                                                                                                                      |
| --command-options | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                            |
| --ps-display      | Display powershell script.                                                                                                                                                                         |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                           |
| --filter-vm       | Filter virtual machines (can be a regexp).                                                                                                                                                         |
| --filter-note     | Filter by VM notes (can be a regexp).                                                                                                                                                              |
| --warning-status  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{vm\}, %\{state\}, %\{status\}, %\{is_clustered\}                                       |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Operating normally/i'). You can use the following variables: %\{vm\}, %\{state\}, %\{status\}, %\{is_clustered\}    |

</TabItem>
<TabItem value="Scvmm-Integration-Service" label="Scvmm-Integration-Service">

| Option               | Description                                                                                                                                                                         |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --scvmm-hostname     | SCVMM hostname.                                                                                                                                                                     |
| --scvmm-username     | SCVMM username (required).                                                                                                                                                          |
| --scvmm-password     | SCVMM password (required).                                                                                                                                                          |
| --scvmm-port         | SCVMM port (default: 8100).                                                                                                                                                         |
| --timeout            | Set timeout time for command execution (default: 50 sec)                                                                                                                            |
| --no-ps              | Don't encode powershell. To be used with --command and 'type'command.                                                                                                               |
| --command            | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                              |
| --command-path       | Command path (default: none).                                                                                                                                                       |
| --command-options    | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                             |
| --ps-display         | Display powershell script.                                                                                                                                                          |
| --ps-exec-only       | Print powershell output.                                                                                                                                                            |
| --filter-status      | Filter virtual machine status (can be a regexp).                                                                                                                                    |
| --filter-description | Filter by description (can be a regexp).                                                                                                                                            |
| --filter-vm          | Filter virtual machines (can be a regexp).                                                                                                                                          |
| --filter-hostgroup   | Filter hostgroup (can be a regexp).                                                                                                                                                 |
| --warning-status     | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{vm\}, %\{vmaddition\}, %\{status\}                                     |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (default: '%\{vmaddition\} =~ /not detected/i'). You can use the following variables: %\{vm\}, %\{vmaddition\}, %\{status\}    |

</TabItem>
<TabItem value="Scvmm-Snapshot" label="Scvmm-Snapshot">

| Option               | Description                                                                                                                              |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --scvmm-hostname     | SCVMM hostname.                                                                                                                          |
| --scvmm-username     | SCVMM username (required).                                                                                                               |
| --scvmm-password     | SCVMM password (required).                                                                                                               |
| --scvmm-port         | SCVMM port (default: 8100).                                                                                                              |
| --timeout            | Set timeout time for command execution (default: 50 sec)                                                                                 |
| --no-ps              | Don't encode powershell. To be used with --command and 'type'command.                                                                    |
| --command            | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path       | Command path (default: none).                                                                                                            |
| --command-options    | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display         | Display powershell script.                                                                                                               |
| --ps-exec-only       | Print powershell output.                                                                                                                 |
| --filter-status      | Filter virtual machine status (can be a regexp) (default: 'running').                                                                    |
| --filter-vm          | Filter virtual machines (can be a regexp).                                                                                               |
| --filter-description | Filter by description (can be a regexp).                                                                                                 |
| --filter-hostgroup   | Filter hostgroup (can be a regexp).                                                                                                      |
| --warning-*          | Warning threshold. Can be: 'snapshot' (in seconds).                                                                                      |
| --critical-*         | Critical threshold. Can be: 'snapshot' (in seconds).                                                                                     |

</TabItem>
<TabItem value="Scvmm-Vm-Status" label="Scvmm-Vm-Status">

| Option               | Description                                                                                                                                                                        |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --scvmm-hostname     | SCVMM hostname.                                                                                                                                                                    |
| --scvmm-username     | SCVMM username (required).                                                                                                                                                         |
| --scvmm-password     | SCVMM password (required).                                                                                                                                                         |
| --scvmm-port         | SCVMM port (default: 8100).                                                                                                                                                        |
| --timeout            | Set timeout time for command execution (default: 50 sec)                                                                                                                           |
| --no-ps              | Don't encode powershell. To be used with --command and 'type'command.                                                                                                              |
| --command            | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                             |
| --command-path       | Command path (default: none).                                                                                                                                                      |
| --command-options    | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                            |
| --ps-display         | Display powershell script.                                                                                                                                                         |
| --ps-exec-only       | Print powershell output.                                                                                                                                                           |
| --filter-vm          | Filter virtual machines (can be a regexp).                                                                                                                                         |
| --filter-hostgroup   | Filter hostgroup (can be a regexp).                                                                                                                                                |
| --filter-description | Filter by description (can be a regexp).                                                                                                                                           |
| --warning-status     | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{vm\}, %\{status\}, %\{hostgroup\}                                     |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Running\|Stopped/i'). You can use the following variables: %\{vm\}, %\{status\}, %\{hostgroup\}    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins// -H 10.0.0.1 -p  -t   -c check_centreon_plugins -a 'apps::microsoft::hyperv::2012::local::plugin' 'scvmm-vm-status'  '  \
	--scvmm-hostname="" \
	--scvmm-username="" \
	--help
```
