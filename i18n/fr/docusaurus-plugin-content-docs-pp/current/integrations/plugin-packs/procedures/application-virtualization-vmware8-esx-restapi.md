---
id: application-virtualization-vmware8-esx-restapi
title: VMware8 ESX REST API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **VMware8 ESX REST API** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **VMware8 ESX REST API** apporte un modèle d'hôte :

* **Virt-VMware8-ESX-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Virt-VMware8-ESX-Restapi-custom" label="Virt-VMware8-ESX-Restapi-custom">

| Alias              | Modèle de service                                  | Description                                                                                 |
|:-------------------|:---------------------------------------------------|:--------------------------------------------------------------------------------------------|
| Cpu                | Virt-VMWare8-ESX-Cpu-Restapi-custom                | Supervision des métriques CPU d'un serveur physique ESX                                     |
| Disk-IO            | Virt-VMWare8-ESX-Disk-IO-Restapi-custom            | Supervision des statistiques agrégées d'entrée/sortie disque d'un serveur physique ESX    |
| Memory             | Virt-VMWare8-ESX-Memory-Restapi-custom             | Supervision de la mémoire consommée par les machines virtuelles sur un serveur physique ESX |
| Network-Throughput | Virt-VMWare8-ESX-Network-Throughput-Restapi-custom | Supervision des statistiques agrégées de trafic réseau d'un serveur physique ESX            |
| Power              | Virt-VMWare8-ESX-Power-Restapi-custom              | Supervision de la puissance électrique consommée par un serveur physique ESX                |
| Swap               | Virt-VMWare8-ESX-Swap-Restapi-custom               | Supervision des statistiques d'utilisation du fichier d'échange sur un serveur physique ESX    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Virt-VMware8-ESX-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle      | Description                                                                                |
|:---------------------|:-------------------------------------------------------------------------------------------|
| VMware ESX vSphere 8 | Discover VMware ESX physical hosts by querying a vCenter server using vSphere REST API v8 |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Nom                                | Unité |
|:-----------------------------------|:------|
| cpu.capacity.usage.percentage      | %     |
| cpu.capacity.usage.hertz           | Hz    |
| cpu.capacity.contention.percentage | %     |
| cpu.capacity.demand.percentage     | %     |
| cpu.capacity.demand.hertz          | Hz    |
| cpu.corecount.usage.count          | count |


</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| disk.throughput.usage.bytespersecond    | Bps   |
| disk.throughput.contention.milliseconds | ms    |


</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                         | Unité |
|:----------------------------|:------|
| vms.memory.usage.percentage | %     |
| vms.memory.usage.bytes      | B     |


</TabItem>
<TabItem value="Network-Throughput" label="Network-Throughput">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| network.throughput.usage.bytespersecond | Bps   |
| network.throughput.usage.percent        | %     |
| network.throughput.contention.count     | count |


</TabItem>
<TabItem value="Power" label="Power">

| Nom                       | Unité |
|:--------------------------|:------|
| power.capacity.usage.watt | W     |

</TabItem>
<TabItem value="Swap" label="Swap">

| Nom                            | Unité |
|:-------------------------------|:------|
| swap.usage.bytes               | B     |
| swap.usage.percent             | %     |
| swap.read-rate.bytespersecond  | Bps   |
| swap.write-rate.bytespersecond | Bps   |

</TabItem>
</Tabs>

## Prérequis

Pour pouvoir utiliser ce connecteur, il faut disposer d'un compte utilisateur pouvant accéder à l'[API vCenter](https://developer.broadcom.com/xapis/vsphere-automation-api/latest/)
de version au moins égale à 8 et disposant des privilèges suivants :
- Collecter les données statistiques
- Interroger les données statistiques

Ces privilèges sont inclus dans le rôle super admin de VMware.

NB: Ce connecteur n'a été testé qu'avec une authentification de type `Basic` (de la forme `user@vsphere.local`).

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-application-virtualization-vmware8-esx-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-application-virtualization-vmware8-esx-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-application-virtualization-vmware8-esx-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-application-virtualization-vmware8-esx-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **VMware8 ESX REST API**
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
dnf install centreon-plugin-Virtualization-Vmware8-Esx-Restapi
```

Si besoin, ajouter le certificat du serveur vCenter à la liste des certificats reconnus par le système d'exploitation du 
collecteur.

```
openssl s_client -connect myvcenter.mydomain.tld:443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /etc/pki/ca-trust/source/anchors/my_vcenter.crt
update-ca-trust
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Virtualization-Vmware8-Esx-Restapi
```

Si besoin, ajouter le certificat du serveur vCenter à la liste des certificats reconnus par le système d'exploitation du 
collecteur.

```
openssl s_client -connect myvcenter.mydomain.tld:443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /etc/pki/ca-trust/source/anchors/my_vcenter.crt
update-ca-trust
```
</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-virtualization-vmware8-esx-restapi
```

Si besoin, ajouter le certificat du serveur vCenter à la liste des certificats reconnus par le système d'exploitation du 
collecteur.

```
openssl s_client -connect myvcenter.mydomain.tld:443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /usr/local/share/ca-certificates/my_vcenter.crt
update-ca-certificates
```
</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Virtualization-Vmware8-Esx-Restapi
```

Si besoin, ajouter le certificat du serveur vCenter à la liste des certificats reconnus par le système d'exploitation du 
collecteur.

```
openssl s_client -connect myvcenter.mydomain.tld:443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /etc/pki/ca-trust/source/anchors/my_vcenter.crt
update-ca-trust
```
</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Virt-VMware8-ESX-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VMWARE8USERNAME | Define the username for authentication                                                                                                             | USERNAME          |      X      |
| VMWARE8PASSWORD | Define the password for authentication                                                                                                             | PASSWORD          |      X      |
| VMWARE8PROTO    | Define the protocol to use                                                                                                                         | https             |             |
| VMWARE8PORT     | Define the port of the vSphere server                                                                                                              | 443               |             |
| VMWARE8HOSTID   | Define which physical server to monitor based on its resource ID (example: `host-16`)                                                              |                   |             |
| VMWARE8VCENTER  | Define the hostname of the vSphere server                                                                                                          |                   |      X      |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                       | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONTENTIONPRCT       | Threshold in percentage                                                                            |                   |             |
| CRITICALCONTENTIONPRCT      | Threshold in percentage                                                                            |                   |             |
| WARNINGCORECOUNTUSAGECOUNT  | Threshold in number of cores                                                                       |                   |             |
| CRITICALCORECOUNTUSAGECOUNT | Threshold in number of cores                                                                       |                   |             |
| WARNINGDEMANDFREQUENCY      | Threshold in Hertz                                                                                 |                   |             |
| CRITICALDEMANDFREQUENCY     | Threshold in Hertz                                                                                 |                   |             |
| WARNINGDEMANDPRCT           | Threshold in percentage                                                                            |                   |             |
| CRITICALDEMANDPRCT          | Threshold in percentage                                                                            |                   |             |
| WARNINGUSAGEFREQUENCY       | Threshold in Hertz                                                                                 |                   |             |
| CRITICALUSAGEFREQUENCY      | Threshold in Hertz                                                                                 |                   |             |
| WARNINGUSAGEPRCT            | Threshold in percentage                                                                            |                   |             |
| CRITICALUSAGEPRCT           | Threshold in percentage                                                                            |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Macro                | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONTENTIONMS  | Threshold in milliseconds                                                                          |                   |             |
| CRITICALCONTENTIONMS | Threshold in milliseconds                                                                          |                   |             |
| WARNINGUSAGEBPS      | Threshold in bytes per second                                                                      |                   |             |
| CRITICALUSAGEBPS     | Threshold in bytes per second                                                                      |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro              | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEBYTES  | Threshold in bytes                                                                                 |                   |             |
| CRITICALUSAGEBYTES | Threshold in bytes                                                                                 |                   |             |
| WARNINGUSAGEPRCT   | Threshold in percentage                                                                            |                   |             |
| CRITICALUSAGEPRCT  | Threshold in percentage                                                                            |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Network-Throughput" label="Network-Throughput">

| Macro                   | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCONTENTIONCOUNT  | Threshold                                                                                          |                   |             |
| CRITICALCONTENTIONCOUNT | Threshold                                                                                          |                   |             |
| WARNINGUSAGEBPS         | Threshold in bytes per second                                                                      |                   |             |
| CRITICALUSAGEBPS        | Threshold in bytes per second                                                                      |                   |             |
| WARNINGUSAGEPRCT        | Threshold in percentage                                                                            |                   |             |
| CRITICALUSAGEPRCT       | Threshold in percentage                                                                            |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Power" label="Power">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGEWATT  | Threshold in Watts                                                                                 |                   |             |
| CRITICALUSAGEWATT | Threshold in Watts                                                                                 |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro                | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGREADRATEBPS   | Threshold in bytes per second                                                                      |                   |             |
| CRITICALREADRATEBPS  | Threshold in bytes per second                                                                      |                   |             |
| WARNINGUSAGEBYTES    | Threshold in B                                                                                     |                   |             |
| CRITICALUSAGEBYTES   | Threshold in B                                                                                     |                   |             |
| WARNINGUSAGEPRCT     | Threshold in percentage                                                                            |                   |             |
| CRITICALUSAGEPRCT    | Threshold in percentage                                                                            |                   |             |
| WARNINGWRITERATEBPS  | Threshold in bytes per second                                                                      |                   |             |
| CRITICALWRITERATEBPS | Threshold in bytes per second                                                                      |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_vmware8_esx_restapi.pl \
	--plugin=apps::vmware::vsphere8::esx::plugin \
	--mode=power \
	--hostname='vcenter.mydomain.tld' \
	--port='443' \
	--proto='https' \
	--esx-id='host-18' \
	--username='USERNAME' \
	--password='PASSWORD'  \
	--warning-usage-watt='' \
	--critical-usage-watt='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Power usage is 219 Watts | 'power.capacity.usage.watt'=219W;;;;

```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_vmware8_esx_restapi.pl \
	--plugin=apps::vmware::vsphere8::esx::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                            | Modèle de service associé                          |
|:--------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/esx/mode/cpu.pm)]                | Virt-VMWare8-ESX-Cpu-Restapi-custom                |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/esx/mode/discovery.pm)]    | Used for host discovery                            |
| disk-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/esx/mode/diskio.pm)]         | Virt-VMWare8-ESX-Disk-IO-Restapi-custom            |
| host-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/esx/mode/hoststatus.pm)] | Not used in this Monitoring Connector              |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/esx/mode/memory.pm)]          | Virt-VMWare8-ESX-Memory-Restapi-custom             |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/esx/mode/network.pm)]        | Virt-VMWare8-ESX-Network-Throughput-Restapi-custom |
| power [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/esx/mode/power.pm)]            | Virt-VMWare8-ESX-Power-Restapi-custom              |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/vmware/vsphere8/esx/mode/swap.pm)]              | Virt-VMWare8-ESX-Swap-Restapi-custom               |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: `--extend-perfdata=searchlabel,newlabel,target[,[<new-unit-of-mesure>],[min],[max]]`. Common examples: Convert storage free perfdata into used: `--change-perfdata='free,used,invert()'`. Convert storage free perfdata into used: `--change-perfdata='used,free,invert()'`. Scale traffic values automatically: `--change-perfdata='traffic,,scale(auto)'`. Scale traffic values in Mbps: `--change-perfdata='traffic_in,,scale(Mbps),mbps'`. Change traffic values in percent: `--change-perfdata='traffic_in,,percent()'`.                                                                                                                                                                                                                                                           |
| --change-perfdata                          | Change or extend perfdata. Syntax: `--extend-perfdata=searchlabel,newlabel,target[,[<new-unit-of-mesure>],[min],[max]]`. Common examples: Convert storage free perfdata into used: `--change-perfdata='free,used,invert()'`. Convert storage free perfdata into used: `--change-perfdata='used,free,invert()'`. Scale traffic values automatically: `--change-perfdata='traffic,,scale(auto)'`. Scale traffic values in Mbps: `--change-perfdata='traffic_in,,scale(Mbps),mbps'`. Change traffic values in percent: `--change-perfdata='traffic_in,,percent()'`.                                                                                                                                                                                                                                                           |
| --extend-perfdata                          | Change or extend perfdata. Syntax: `--extend-perfdata=searchlabel,newlabel,target[,[<new-unit-of-mesure>],[min],[max]]`. Common examples: Convert storage free perfdata into used: `--change-perfdata='free,used,invert()'`. Convert storage free perfdata into used: `--change-perfdata='used,free,invert()'`. Scale traffic values automatically: `--change-perfdata='traffic,,scale(auto)'`. Scale traffic values in Mbps: `--change-perfdata='traffic_in,,scale(Mbps),mbps'`. Change traffic values in percent: `--change-perfdata='traffic_in,,percent()'`.                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: `--extend-perfdata-group=regex,<names-of-new-metrics>,calculation[,[<new-unit-of-mesure>],[min],[max]]` regex: regular expression `<names-of-new-metrics>`: how the new metrics' names are composed (can use `$1`, `$2`... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated `<new-unit-of-mesure>` (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples: Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): `--extend-perfdata-group=',packets_wrong,sum(packets_(discard |error)_(in|out))'`. Sum traffic by interface: `--extend-perfdata-group='traffic_in_(.*),traffic_$1,sum(traffic_(in |out)_$1)'` |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --esx-id                                   | Define which physical server to monitor based on its resource ID (example: `host-16`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --esx-name                                 | Define which physical server to monitor based on its name (example: `esx01.mydomain.tld`). When possible, it is recommended to use `--esx-id` instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --hostname                                 | Define the hostname of the vSphere server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --port                                     | Define the port of the vSphere server (default: 443).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proto                                    | Define the protocol to use (default: https).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --username                                 | Define the username for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --password                                 | Define the password for authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --vstats-interval                          | Define the interval (in seconds) at which the `vstats` must be recorded (default: 300). Used to create entries at the `/api/stats/acq-specs` endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --vstats-duration                          | Define the time (in seconds) after which the `vstats` will stop being recorded (default: 2764800, meaning 32 days). Used to create entries at the `/api/stats/acq-specs` endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --timeout                                  | Define the timeout for API requests (default: 10 seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                           | Description                                                                                                                                                                              |
|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                              |
| --add-demand                     |   Add counter related to CPU demand:  `cpu.capacity.demand.HOST`: The amount of CPU resources a virtual machine would use if there were no CPU contention or CPU limit.                  |
| --add-contention                 |   Add counter related to CPU demand:  `cpu.capacity.contention.HOST`: Percent of time the virtual machine is unable to run because it is contending for access to the physical CPU(s).   |
| --add-corecount                  |   Add counter related to CPU core count:  `cpu.corecount.usage.HOST`: The number of virtual processors running on the host.                                                              |
| --warning-contention-prct        |   Threshold in percentage.                                                                                                                                                               |
| --critical-contention-prct       |   Threshold in percentage.                                                                                                                                                               |
| --warning-corecount-usage-count  |   Threshold.                                                                                                                                                                             |
| --critical-corecount-usage-count |   Threshold.                                                                                                                                                                             |
| --warning-demand-frequency       |   Threshold in Hertz.                                                                                                                                                                    |
| --critical-demand-frequency      |   Threshold in Hertz.                                                                                                                                                                    |
| --warning-demand-prct            |   Threshold in percentage.                                                                                                                                                               |
| --critical-demand-prct           |   Threshold in percentage.                                                                                                                                                               |
| --warning-usage-frequency        |   Threshold in Hertz.                                                                                                                                                                    |
| --critical-usage-frequency       |   Threshold in Hertz.                                                                                                                                                                    |
| --warning-usage-prct             |   Threshold in percentage.                                                                                                                                                               |
| --critical-usage-prct            |   Threshold in percentage.                                                                                                                                                               |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Option                   | Description                          |
|:-------------------------|:-------------------------------------|
| --warning-contention-ms  |   Threshold in milliseconds.         |
| --critical-contention-ms |   Threshold in milliseconds.         |
| --warning-usage-bps      |   Threshold in bytes per second.     |
| --critical-usage-bps     |   Threshold in bytes per second.     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                 | Description                   |
|:-----------------------|:------------------------------|
| --warning-usage-bytes  |   Threshold in bytes.         |
| --critical-usage-bytes |   Threshold in bytes.         |
| --warning-usage-prct   |   Threshold in percentage.    |
| --critical-usage-prct  |   Threshold in percentage.    |

</TabItem>
<TabItem value="Network-Throughput" label="Network-Throughput">

| Option                      | Description                                                                                                                               |
|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| --add-contention            |   Add counters related to network throughput contention. This option is implicitly enabled if thresholds related to contention are set.   |
| --warning-contention-count  |   Threshold.                                                                                                                              |
| --critical-contention-count |   Threshold.                                                                                                                              |
| --warning-usage-bps         |   Threshold in bytes per second.                                                                                                          |
| --critical-usage-bps        |   Threshold in bytes per second.                                                                                                          |
| --warning-usage-prct        |   Threshold in percentage.                                                                                                                |
| --critical-usage-prct       |   Threshold in percentage.                                                                                                                |

</TabItem>
<TabItem value="Power" label="Power">

| Option                | Description              |
|:----------------------|:-------------------------|
| --warning-usage-watt  |   Threshold in Watts.    |
| --critical-usage-watt |   Threshold in Watts.    |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                    | Description                                                                                                                      |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| --add-rates               |   Add counters related to swap read and write rates. This option is implicitly enabled if thresholds related to rates are set.   |
| --warning-read-rate-bps   |   Threshold in bytes per second.                                                                                                 |
| --critical-read-rate-bps  |   Threshold in bytes per second.                                                                                                 |
| --warning-usage-bytes     |   Threshold in B.                                                                                                                |
| --critical-usage-bytes    |   Threshold in B.                                                                                                                |
| --warning-usage-prct      |   Threshold in percentage.                                                                                                       |
| --critical-usage-prct     |   Threshold in percentage.                                                                                                       |
| --warning-write-rate-bps  |   Threshold in bytes per second.                                                                                                 |
| --critical-write-rate-bps |   Threshold in bytes per second.                                                                                                 |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_vmware8_esx_restapi.pl \
	--plugin=apps::vmware::vsphere8::esx::plugin \
	--mode=power \
	--help
```
