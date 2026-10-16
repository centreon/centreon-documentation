---
id: hardware-devices-polycom-rprm-snmp
title: Polycom RPRM SNMP
description: "Supervisez les serveurs Polycom RPRM via SNMP : état du cluster, licences, provisionnement, SiteLinks, sites et mises à jour."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Polycom RPRM SNMP** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Polycom RPRM SNMP** apporte un modèle d'hôte :

* **HW-Device-Polycom-Rprm-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Device-Polycom-Rprm-SNMP-custom" label="HW-Device-Polycom-Rprm-SNMP-custom">

| Alias          | Modèle de service                                 | Description                                          |
|:---------------|:--------------------------------------------------|:-----------------------------------------------------|
| Cluster-Status | HW-Device-Polycom-Rprm-Cluster-Status-SNMP-custom | Contrôle l'état du SuperCluster Polycom RPRM         |
| License        | HW-Device-Polycom-Rprm-License-SNMP-custom        | Contrôle la licence Polycom RPRM                     |
| Provisioning   | HW-Device-Polycom-Rprm-Provisioning-SNMP-custom   | Contrôle les jobs de provisionnement du Polycom RPRM |
| SiteLinks      | HW-Device-Polycom-Rprm-SiteLinks-SNMP-custom      | Contrôle les SiteLinks Polycom RPRM                  |
| Sites          | HW-Device-Polycom-Rprm-Sites-SNMP-custom          | Contrôle les Sites Polycom RPRM                      |
| Updates        | HW-Device-Polycom-Rprm-Updates-SNMP-custom        | Contrôle le statut des mises à jour Polycom RPRM     |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Device-Polycom-Rprm-SNMP-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                         |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **HW-Device-Polycom-Rprm-SNMP-custom**. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Nom                  | Unité |
|:---------------------|:------|
| cluster-status       | N/A   |
| cluster-change-cause | N/A   |

</TabItem>
<TabItem value="License" label="License">

| Nom                            | Unité |
|:-------------------------------|:------|
| rprm.license.total.usage.count | count |
| rprm.license.audio.usage.count | count |
| rprm.license.video.usage.count | count |

</TabItem>
<TabItem value="Provisioning" label="Provisioning">

| Nom                             | Unité |
|:--------------------------------|:------|
| provisioning-status             | N/A   |
| rprm.provisioning.failed.count  | count |
| rprm.provisioning.success.count | count |

</TabItem>
<TabItem value="SiteLinks" label="SiteLinks">

| Nom                                                     | Unité |
|:--------------------------------------------------------|:------|
| rprm.sitelinks.total.count                              | count |
| sitelink-status                                         | N/A   |
| *sitelink*#rprm.sitelink.calls.active.count             | count |
| *sitelink*#rprm.sitelink.bandwidth.used.percentage      | %     |
| *sitelink*#rprm.sitelink.bandwidth.total.bytespersecond | B/s   |
| sitelink-callbitrate                                    | N/A   |
| *sitelink*#rprm.sitelink.packetloss.average.percentage  | %     |
| *sitelink*#rprm.sitelink.jitter.average.milliseconds    | ms    |
| *sitelink*#rprm.sitelink.delay.average.milliseconds     | ms    |

</TabItem>
<TabItem value="Sites" label="Sites">

| Nom                                              | Unité |
|:-------------------------------------------------|:------|
| rprm.sites.total.count                           | count |
| *site1*#rprm.site.calls.active.count             | count |
| *site2*#rprm.site.calls.active.count             | count |
| *site1*#rprm.site.bandwidth.used.percentage      | %     |
| *site2*#rprm.site.bandwidth.used.percentage      | %     |
| *site1*#rprm.site.bandwidth.total.bytespersecond | B/s   |
| *site2*#rprm.site.bandwidth.total.bytespersecond | B/s   |
| site-callbitrate                                 | N/A   |
| *site1*#rprm.site.packetloss.average.percentage  | %     |
| *site2*#rprm.site.packetloss.average.percentage  | %     |
| *site1*#rprm.site.jitter.average.milliseconds    | ms    |
| *site2*#rprm.site.jitter.average.milliseconds    | ms    |
| *site1*#rprm.site.delay.average.milliseconds     | ms    |
| *site2*#rprm.site.delay.average.milliseconds     | ms    |

</TabItem>
<TabItem value="Updates" label="Updates">

| Nom                          | Unité |
|:-----------------------------|:------|
| updates-status               | N/A   |
| rprm.updates.failed.count    | count |
| rprm.updates.successed.count | count |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP de l'équipement

Le service SNMP doit être activé et configuré sur l'équipement. 
Veuillez vous référer à la documentation officielle du constructeur/éditeur. 
Il se peut que votre équipement nécessite qu'une liste d'adresses autorisées à l'interroger soit paramétrée. 
Veillez à ce que les adresses des collecteurs Centreon y figurent bien.

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
dnf install centreon-pack-hardware-devices-polycom-rprm-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-devices-polycom-rprm-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-devices-polycom-rprm-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-devices-polycom-rprm-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Polycom RPRM SNMP**
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
dnf install centreon-plugin-Hardware-Devices-Polycom-Rprm-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Devices-Polycom-Rprm-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-devices-polycom-rprm-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Rprm-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Device-Polycom-Rprm-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#mapping-des-options-snmpv3).

| Macro            | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Macro                      | Description                                                                                                                                            | Valeur par défaut                 | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| WARNINGCLUSTERCHANGECAUSE  | Custom Warning threshold of the cluster state change cause Syntax: --warning-cluster-change-cause='%\{cluster\_change\_cause\} =~ /manualFailover/i'   |                                   |             |
| CRITICALCLUSTERCHANGECAUSE | Custom Critical threshold of the cluster state change cause Syntax: --critical-cluster-change-cause='%\{cluster\_change\_cause\} =~ /manualFailover/i' |                                   |             |
| CRITICALCLUSTERSTATUS      | Custom Critical threshold of the cluster state Syntax: --critical-cluster-status='%\{cluster\_status\} =~ /failed/i'                                   | %\{cluster\_status\} =~ /failed/i |             |
| WARNINGCLUSTERSTATUS       | Custom Warning threshold of the cluster state (default: none) Syntax: --warning-cluster-status='%\{cluster\_status\} =~ /busyOut/i'                    |                                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).       |                                   |             |

</TabItem>
<TabItem value="License" label="License">

| Macro                     | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAUDIOLICENSEUSAGE  | Threshold                                                                                                                                        |                   |             |
| CRITICALAUDIOLICENSEUSAGE | Threshold                                                                                                                                        |                   |             |
| WARNINGTOTALLICENSEUSAGE  | Threshold                                                                                                                                        |                   |             |
| CRITICALTOTALLICENSEUSAGE | Threshold                                                                                                                                        |                   |             |
| WARNINGVIDEOLICENSEUSAGE  | Threshold                                                                                                                                        |                   |             |
| CRITICALVIDEOLICENSEUSAGE | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Provisioning" label="Provisioning">

| Macro                       | Description                                                                                                                                      | Valeur par défaut                      | Obligatoire |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| WARNINGPROVISIONINGFAILED   | Threshold                                                                                                                                        |                                        |             |
| CRITICALPROVISIONINGFAILED  | Threshold                                                                                                                                        |                                        |             |
| CRITICALPROVISIONINGSTATUS  | Custom Critical threshold of the provisioning state Syntax: --critical-provisioning-status='%\{provisioning\_status\} =~ /failed/i'              | %\{provisioning\_status\} =~ /failed/i |             |
| WARNINGPROVISIONINGSTATUS   | Custom Warning threshold of the provisioning state Syntax: --warning-provisioning-status='%\{provisioning\_status\} =~ /clear/i'                 |                                        |             |
| WARNINGPROVISIONINGSUCCESS  | Threshold                                                                                                                                        |                                        |             |
| CRITICALPROVISIONINGSUCCESS | Threshold                                                                                                                                        |                                        |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                        |             |

</TabItem>
<TabItem value="SiteLinks" label="SiteLinks">

| Macro                             | Description                                                                                                                                      | Valeur par défaut                  | Obligatoire |
|:----------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| WARNINGRPRMTOTALSITELINKS         | Threshold                                                                                                                                        |                                    |             |
| CRITICALRPRMTOTALSITELINKS        | Threshold                                                                                                                                        |                                    |             |
| WARNINGSITELINKACTIVECALLS        | Threshold                                                                                                                                        |                                    |             |
| CRITICALSITELINKACTIVECALLS       | Threshold                                                                                                                                        |                                    |             |
| WARNINGSITELINKBANDWIDTHTOTAL     | Threshold                                                                                                                                        |                                    |             |
| CRITICALSITELINKBANDWIDTHTOTAL    | Threshold                                                                                                                                        |                                    |             |
| WARNINGSITELINKBANDWIDTHUSEDPRCT  | Threshold                                                                                                                                        |                                    |             |
| CRITICALSITELINKBANDWIDTHUSEDPRCT | Threshold                                                                                                                                        |                                    |             |
| WARNINGSITELINKCALLBITRATE        | Threshold                                                                                                                                        |                                    |             |
| CRITICALSITELINKCALLBITRATE       | Threshold                                                                                                                                        |                                    |             |
| WARNINGSITELINKDELAY              | Threshold                                                                                                                                        |                                    |             |
| CRITICALSITELINKDELAY             | Threshold                                                                                                                                        |                                    |             |
| WARNINGSITELINKJITTER             | Threshold                                                                                                                                        |                                    |             |
| CRITICALSITELINKJITTER            | Threshold                                                                                                                                        |                                    |             |
| WARNINGSITELINKPACKETLOSSPRCT     | Threshold                                                                                                                                        |                                    |             |
| CRITICALSITELINKPACKETLOSSPRCT    | Threshold                                                                                                                                        |                                    |             |
| CRITICALSITELINKSTATUS            | Custom Critical threshold of the SiteLink state Syntax: --critical-sitelink-status='%\{sitelink\_status\} =~ /failed/i'                          | %\{sitelink\_status\} =~ /failed/i |             |
| WARNINGSITELINKSTATUS             | Custom Warning threshold of the SiteLink state Syntax: --warning-sitelink-status='%\{sitelink\_status\} =~ /disabled/i'                          |                                    |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                          |             |

</TabItem>
<TabItem value="Sites" label="Sites">

| Macro                         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRPRMTOTALSITES         | Threshold                                                                                                                                        |                   |             |
| CRITICALRPRMTOTALSITES        | Threshold                                                                                                                                        |                   |             |
| WARNINGSITEACTIVECALLS        | Threshold                                                                                                                                        |                   |             |
| CRITICALSITEACTIVECALLS       | Threshold                                                                                                                                        |                   |             |
| WARNINGSITEBANDWIDTHTOTAL     | Threshold                                                                                                                                        |                   |             |
| CRITICALSITEBANDWIDTHTOTAL    | Threshold                                                                                                                                        |                   |             |
| WARNINGSITEBANDWIDTHUSEDPRCT  | Threshold                                                                                                                                        |                   |             |
| CRITICALSITEBANDWIDTHUSEDPRCT | Threshold                                                                                                                                        |                   |             |
| WARNINGSITECALLBITRATE        | Threshold                                                                                                                                        |                   |             |
| CRITICALSITECALLBITRATE       | Threshold                                                                                                                                        |                   |             |
| WARNINGSITEDELAY              | Threshold                                                                                                                                        |                   |             |
| CRITICALSITEDELAY             | Threshold                                                                                                                                        |                   |             |
| WARNINGSITEJITTER             | Threshold                                                                                                                                        |                   |             |
| CRITICALSITEJITTER            | Threshold                                                                                                                                        |                   |             |
| WARNINGSITEPACKETLOSSPRCT     | Threshold                                                                                                                                        |                   |             |
| CRITICALSITEPACKETLOSSPRCT    | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                    | Description                                                                                                                                      | Valeur par défaut                 | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|:-----------:|
| WARNINGUPDATESFAILED     | Threshold                                                                                                                                        |                                   |             |
| CRITICALUPDATESFAILED    | Threshold                                                                                                                                        |                                   |             |
| CRITICALUPDATESSTATUS    | Custom Critical threshold of the updates state Syntax: --critical-updates-status='%\{updates\_status\} =~ /failed/i'                             | %\{updates\_status\} =~ /failed/i |             |
| WARNINGUPDATESSTATUS     | Custom Warning threshold of the updates state Syntax: --warning-updates-status='%\{updates\_status\} =~ /clear/i'                                |                                   |             |
| WARNINGUPDATESSUCCESSED  | Threshold                                                                                                                                        |                                   |             |
| CRITICALUPDATESSUCCESSED | Threshold                                                                                                                                        |                                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                   |             |

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
/usr/lib/centreon/plugins/centreon_polycom_rprm_snmp.pl \
	--plugin=hardware::devices::polycom::rprm::snmp::plugin \
	--mode=sites \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--warning-site-active-calls='' \
	--critical-site-active-calls='' \
	--warning-site-bandwidth-used-prct='' \
	--critical-site-bandwidth-used-prct='' \
	--warning-site-bandwidth-total='' \
	--critical-site-bandwidth-total='' \
	--warning-site-callbitrate='' \
	--critical-site-callbitrate='' \
	--warning-site-packetloss-prct='' \
	--critical-site-packetloss-prct='' \
	--warning-site-jitter='' \
	--critical-site-jitter='' \
	--warning-site-delay='' \
	--critical-site-delay='' \
	--warning-rprm-total-sites='' \
	--critical-rprm-total-sites='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Total sites: 26169 All sites are ok | 'rprm.sites.total.count'=26169;;;0; 'site1#rprm.site.calls.active.count'=93236;;;0; 'site2#rprm.site.calls.active.count'=92954;;;0; 'site1#rprm.site.bandwidth.used.percentage'=35917%;;;0;100 'site2#rprm.site.bandwidth.used.percentage'=234%;;;0;100 'site1#rprm.site.bandwidth.total.bytespersecond'=42462B/s;;;0; 'site2#rprm.site.bandwidth.total.bytespersecond'=4264B/s;;;0; 'site1#rprm.site.callbitrate.average.ratio'=23204;;;0; 'site2#rprm.site.callbitrate.average.ratio'=52503;;;0; 'site1#rprm.site.packetloss.average.percentage'=3981%;;;0;100 'site2#rprm.site.packetloss.average.percentage'=33924%;;;0;100 'site1#rprm.site.jitter.average.milliseconds'=46143ms;;;0; 'site2#rprm.site.jitter.average.milliseconds'=64166ms;;;0; 'site1#rprm.site.delay.average.milliseconds'=58434ms;;;0; 'site2#rprm.site.delay.average.milliseconds'=10223ms;;;0; 
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
/usr/lib/centreon/plugins/centreon_polycom_rprm_snmp.pl \
	--plugin=hardware::devices::polycom::rprm::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                            | Modèle de service associé                         |
|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| cluster-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/rprm/snmp/mode/clusterstatus.pm)] | HW-Device-Polycom-Rprm-Cluster-Status-SNMP-custom |
| license [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/rprm/snmp/mode/license.pm)]              | HW-Device-Polycom-Rprm-License-SNMP-custom        |
| provisioning [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/rprm/snmp/mode/provisioning.pm)]    | HW-Device-Polycom-Rprm-Provisioning-SNMP-custom   |
| sitelinks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/rprm/snmp/mode/sitelinks.pm)]          | HW-Device-Polycom-Rprm-SiteLinks-SNMP-custom      |
| sites [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/rprm/snmp/mode/sites.pm)]                  | HW-Device-Polycom-Rprm-Sites-SNMP-custom          |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/polycom/rprm/snmp/mode/updates.pm)]              | HW-Device-Polycom-Rprm-Updates-SNMP-custom        |

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
| --snmp-errors-exit                         |   Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Option                          | Description                                                                                                                                                                    |
|:--------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-cluster-status        |   Custom Warning threshold of the cluster state (default: none) Syntax: --warning-cluster-status='%\{cluster\_status\} =~ /busyOut/i'                                          |
| --critical-cluster-status       |   Custom Critical threshold of the cluster state (default: '%\{cluster\_status\} =~ /outOfService/i' ) Syntax: --critical-cluster-status='%\{cluster\_status\} =~ /failed/i'   |
| --warning-cluster-change-cause  |   Custom Warning threshold of the cluster state change cause (default: none) Syntax: --warning-cluster-change-cause='%\{cluster\_change\_cause\} =~ /manualFailover/i'         |
| --critical-cluster-change-cause |   Custom Critical threshold of the cluster state change cause (default: none) Syntax: --critical-cluster-change-cause='%\{cluster\_change\_cause\} =~ /manualFailover/i'       |

</TabItem>
<TabItem value="License" label="License">

| Option                   | Description                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* |   Warning & Critical Thresholds for the collected metrics. Possible values: total-license-usage, audio-license-usage, video-license-usage.    |

</TabItem>
<TabItem value="Provisioning" label="Provisioning">

| Option                         | Description                                                                                                                                                                                  |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-provisioning-status  |   Custom Warning threshold of the provisioning state (default: none) Syntax: --warning-provisioning-status='%\{provisioning\_status\} =~ /clear/i'                                           |
| --critical-provisioning-status |   Custom Critical threshold of the provisioning state (default: '%\{provisioning\_status\} =~ /failed/i' ) Syntax: --critical-provisioning-status='%\{provisioning\_status\} =~ /failed/i'   |
| --warning-* --critical-*       |   Warning and Critical thresholds. Possible values are: provisioning-failed, provisioning-success                                                                                            |

</TabItem>
<TabItem value="SiteLinks" label="SiteLinks">

| Option                     | Description                                                                                                                                                                                                                                                    |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-sitelink          |   Filter on one or several SiteLinks (POSIX regexp)                                                                                                                                                                                                            |
| --warning-sitelink-status  |   Custom Warning threshold of the SiteLink state (default: none) Syntax: --warning-sitelink-status='%\{sitelink\_status\} =~ /disabled/i'                                                                                                                      |
| --critical-sitelink-status |   Custom Critical threshold of the SiteLink state (default: '%\{sitelink\_status\} =~ /failed/i' ) Syntax: --critical-sitelink-status='%\{sitelink\_status\} =~ /failed/i'                                                                                     |
| --warning-* --critical-*   |   Warning & Critical Thresholds. Possible values:  \[GLOBAL\] rprm-total-sitelinks  \[SITE\] sitelink-active-calls, sitelink-bandwidth-used-prct, sitelink-bandwidth-total, sitelink-callbitrate, sitelink-packetloss-prct, sitelink-jitter, sitelink-delay    |

</TabItem>
<TabItem value="Sites" label="Sites">

| Option                   | Description                                                                                                                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-site            |   Filter on one or several site (POSIX regexp)                                                                                                                                                                                 |
| --warning-* --critical-* |   Warning & Critical Thresholds. Possible values:  \[GLOBAL\] rprm-total-sites  \[SITE\] site-active-calls, site-bandwidth-used-prct, site-bandwidth-total, site-callbitrate, site-packetloss-prct, site-jitter, site-delay    |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                    | Description                                                                                                                                                              |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-updates-status  |   Custom Warning threshold of the updates state (default: none) Syntax: --warning-updates-status='%\{updates\_status\} =~ /clear/i'                                      |
| --critical-updates-status |   Custom Critical threshold of the updates state (default: '%\{updates\_status\} =~ /failed/i' ) Syntax: --critical-updates-status='%\{updates\_status\} =~ /failed/i'   |
| --warning-* --critical-*  |   Warning and Critical thresholds. Possible values are: updates-failed, updates-successed                                                                                |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_polycom_rprm_snmp.pl \
	--plugin=hardware::devices::polycom::rprm::snmp::plugin \
	--mode=sites \
	--help
```
