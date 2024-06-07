---
id: hardware-ups-himoinsa-snmp
title: Himoinsa SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Himoinsa UPS** apporte un modèle d'hôte :

* **HW-UPS-Himoinsa-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-UPS-Himoinsa-SNMP-custom" label="HW-UPS-Himoinsa-SNMP-custom">

| Alias      | Modèle de service                      | Description                                 |
|:-----------|:---------------------------------------|:--------------------------------------------|
| Frequency  | HW-UPS-Himoinsa-Frequency-SNMP-custom  | Contrôle la fréquence                       |
| Fuel-Level | HW-UPS-Himoinsa-Fuel-Level-SNMP-custom | Contrôle le niveau de fuel                  |
| Phase      | HW-UPS-Himoinsa-Phase-SNMP-custom      | Vérifie le courant électrique pour chaque phase dans un système triphasé       |
| Status     | HW-UPS-Himoinsa-Status-SNMP-custom     | Contrôle le statut de l'équipement Himoinsa |
| Voltage    | HW-UPS-Himoinsa-Voltage-SNMP-custom    | Contrôle le voltage                         |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-UPS-Himoinsa-SNMP-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                         |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **HW-UPS-Himoinsa-SNMP-custom** host template |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Frequency" label="Frequency">

| Métrique                          | Unité |
|:----------------------------------|:------|
| *measures*#mains.frequency.hertz  | Hz    |
| *measures*#genset.frequency.hertz | Hz    |

</TabItem>
<TabItem value="Fuel-Level" label="Fuel-Level">

| Métrique              | Unité |
|:----------------------|:------|
| fuel.level.percentage | %     |

</TabItem>
<TabItem value="Phase" label="Phase">

| Métrique                         | Unité |
|:---------------------------------|:------|
| *measures*#phase1.current.ampere | A     |
| *measures*#phase2.current.ampere | A     |
| *measures*#phase3.current.ampere | A     |

</TabItem>
<TabItem value="Status" label="Status">

| Métrique          | Unité |
|:------------------|:------|
| alarm             | N/A      |
| closed-commutator | N/A      |
| motor             | N/A      |
| mode              | N/A      |
| transfer-pump     | N/A      |

</TabItem>
<TabItem value="Voltage" label="Voltage">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| *measures*#mains.vl12.voltage.volt | V     |
| *measures*#mains.vl23.voltage.volt | V     |
| *measures*#mains.vl13.voltage.volt | V     |
| *measures*#mains.vl1n.voltage.volt | V     |
| *measures*#mains.vl2n.voltage.volt | V     |
| *measures*#mains.vl3n.voltage.volt | V     |
| *measures*#gen.vl12.voltage.volt   | V     |
| *measures*#gen.vl23.voltage.volt   | V     |
| *measures*#gen.vl13.voltage.volt   | V     |
| *measures*#gen.vl1n.voltage.volt   | V     |
| *measures*#gen.vl2n.voltage.volt   | V     |
| *measures*#gen.vl3n.voltage.volt   | V     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Le service SNMP doit être activé et configuré sur l'équipement. Veuillez vous référer à la documentation officielle du constructeur/éditeur.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers la ressource supervisée.

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
dnf install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
<<<<<<< HEAD
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
=======
>>>>>>> fa6ed78579cfd2fb8ccfcba5771992c1bb7e5e08
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Himoinsa UPS**
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
dnf install centreon-plugin-Hardware-Ups-Himoinsa-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Ups-Himoinsa-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-ups-himoinsa-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Ups-Himoinsa-Snmp
```

</TabItem>
<<<<<<< HEAD
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">
=======
</Tabs>
>>>>>>> fa6ed78579cfd2fb8ccfcba5771992c1bb7e5e08

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-UPS-Himoinsa-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Frequency" label="Frequency">

| Macro                   | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGGENSETFREQUENCY  | Threshold in Hertz.                                                                       |                   |             |
| CRITICALGENSETFREQUENCY | Threshold in Hertz.                                                                       |                   |             |
| WARNINGMAINSFREQUENCY   | Threshold in Hertz.                                                                       |                   |             |
| CRITICALMAINSFREQUENCY  | Threshold in Hertz.                                                                       |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Fuel-Level" label="Fuel-Level">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGFUELLEVEL  | Warning threshold for fuel level.                                                                   |                   |             |
| CRITICALFUELLEVEL | Critical threshold for fuel level.                                                                  |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Phase" label="Phase">

| Macro          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPHASE1  | Threshold in amperes.                                                    |                   |             |
| CRITICALPHASE1 | Threshold in amperes.                                                    |                   |             |
| WARNINGPHASE2  | Threshold in amperes.                                                                                                   |                   |             |
| CRITICALPHASE2 | Threshold in amperes.                                                                                                   |                   |             |
| WARNINGPHASE3  | Threshold in amperes.                                                    |                   |             |
| CRITICALPHASE3 | Threshold in amperes.                                                    |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Status" label="Status">

| Macro                      | Description                                                                                                                                                                                                                     | Valeur par défaut     | Obligatoire |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| WARNINGALARMSTATUS         | Warning threshold for alarm (default: '%{status} =~ /^alarm/'). Can use special variables like: %{status}                                                                                                                       | %{status} =~ /^alarm/ |             |
| CRITICALALARMSTATUS        | Critical threshold for alarm. Can use special variables like: %{status}                                                                                                                                                         |                       |             |
| WARNINGCLOSEDCOMMUTATOR    | Warning threshold for commutator currently closed. Can use special variables like: %{status}                                                                                                                                    |                       |             |
| CRITICALCLOSEDCOMMUTATOR   | Critical threshold for commutator currently closed. Can use special variables like: %{status}  For example if you want to get an alert if the closed commutator is mains:  --critical-closed-commutator='%{status} =~ /mains/i' |                       |             |
| WARNINGMODESTATUS          | Warning threshold for commutator mode status. Can use special variables like: %{status}                                                                                                                                         |                       |             |
| CRITICALMODESTATUS         | Critical threshold for commutator mode status. Can use special variables like: %{status}                                                                                                                                        |                       |             |
| WARNINGMOTORSTATUS         | Warning threshold for motor status. Can use special variables like: %{status}                                                                                                                                                   |                       |             |
| CRITICALMOTORSTATUS        | Critical threshold for motor status. Can use special variables like: %{status}                                                                                                                                                  |                       |             |
| WARNINGTRANSFERPUMPSTATUS  | Warning threshold for transfer pump status. Can use special variables like: %{status}                                                                                                                                           |                       |             |
| CRITICALTRANSFERPUMPSTATUS | Critical threshold for transfer pump status. Can use special variables like: %{status}                                                                                                                                          |                       |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                              | --verbose             |             |

</TabItem>
<TabItem value="Voltage" label="Voltage">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGGENVL12    | Threshold in volts.                                                               |                   |             |
| CRITICALGENVL12   | Threshold in volts.                                                               |                   |             |
| WARNINGGENVL13    | Threshold in volts.                                                               |                   |             |
| CRITICALGENVL13   | Threshold in volts.                                                               |                   |             |
| WARNINGGENVL1N    | Threshold in volts.                                                               |                   |             |
| CRITICALGENVL1N   | Threshold in volts.                                                               |                   |             |
| WARNINGGENVL23    | Threshold in volts.                                                               |                   |             |
| CRITICALGENVL23   | Threshold in volts.                                                               |                   |             |
| WARNINGGENVL2N    | Threshold in volts.                                                               |                   |             |
| CRITICALGENVL2N   | Threshold in volts.                                                               |                   |             |
| WARNINGGENVL3N    | Threshold in volts.                                                               |                   |             |
| CRITICALGENVL3N   | Threshold in volts.                                                               |                   |             |
| WARNINGMAINSVL12  | Threshold in volts.                                                               |                   |             |
| CRITICALMAINSVL12 | Threshold in volts.                                                               |                   |             |
| WARNINGMAINSVL13  | Threshold in volts.                                                               |                   |             |
| CRITICALMAINSVL13 | Threshold in volts.                                                               |                   |             |
| WARNINGMAINSVL1N  | Threshold in volts.                                                               |                   |             |
| CRITICALMAINSVL1N | Threshold in volts.                                                               |                   |             |
| WARNINGMAINSVL23  | Threshold in volts.                                                               |                   |             |
| CRITICALMAINSVL23 | Threshold in volts.                                                               |                   |             |
| WARNINGMAINSVL2N  | Threshold in volts.                                                               |                   |             |
| CRITICALMAINSVL2N | Threshold in volts.                                                               |                   |             |
| WARNINGMAINSVL3N  | Threshold in volts.                                                               |                   |             |
| CRITICALMAINSVL3N | Threshold in volts.                                                               |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_ups_himoinsa_snmp.pl \
	--plugin=hardware::ups::himoinsa::snmp::plugin \
	--mode=voltage \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--warning-mains-vl12='' \
	--critical-mains-vl12='' \
	--warning-mains-vl23='' \
	--critical-mains-vl23='' \
	--warning-mains-vl13='' \
	--critical-mains-vl13='' \
	--warning-mains-vl1n='' \
	--critical-mains-vl1n='' \
	--warning-mains-vl2n='' \
	--critical-mains-vl2n='' \
	--warning-mains-vl3n='' \
	--critical-mains-vl3n='' \
	--warning-gen-vl12='' \
	--critical-gen-vl12='' \
	--warning-gen-vl23='' \
	--critical-gen-vl23='' \
	--warning-gen-vl13='' \
	--critical-gen-vl13='' \
	--warning-gen-vl1n='' \
	--critical-gen-vl1n='' \
	--warning-gen-vl2n='' \
	--critical-gen-vl2n='' \
	--warning-gen-vl3n='' \
	--critical-gen-vl3n=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All voltage measures are ok | '*measures*#mains.vl12.voltage.volt'=V;;;;'*measures*#mains.vl23.voltage.volt'=V;;;;'*measures*#mains.vl13.voltage.volt'=V;;;;'*measures*#mains.vl1n.voltage.volt'=V;;;;'*measures*#mains.vl2n.voltage.volt'=V;;;;'*measures*#mains.vl3n.voltage.volt'=V;;;;'*measures*#gen.vl12.voltage.volt'=V;;;;'*measures*#gen.vl23.voltage.volt'=V;;;;'*measures*#gen.vl13.voltage.volt'=V;;;;'*measures*#gen.vl1n.voltage.volt'=V;;;;'*measures*#gen.vl2n.voltage.volt'=V;;;;'*measures*#gen.vl3n.voltage.volt'=V;;;;
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
/usr/lib/centreon/plugins/centreon_ups_himoinsa_snmp.pl \
	--plugin=hardware::ups::himoinsa::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                            | Modèle de service associé              |
|:--------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
| frequency [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/ups/himoinsa/snmp/mode/frequency.pm)]  | HW-UPS-Himoinsa-Frequency-SNMP-custom  |
| fuel-level [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/ups/himoinsa/snmp/mode/fuellevel.pm)] | HW-UPS-Himoinsa-Fuel-Level-SNMP-custom |
| phase [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/ups/himoinsa/snmp/mode/phase.pm)]          | HW-UPS-Himoinsa-Phase-SNMP-custom      |
| status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/ups/himoinsa/snmp/mode/status.pm)]        | HW-UPS-Himoinsa-Status-SNMP-custom     |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/ups/himoinsa/snmp/mode/uptime.pm)]        | Not used in this Monitoring Connector  |
| voltage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/ups/himoinsa/snmp/mode/voltage.pm)]      | HW-UPS-Himoinsa-Voltage-SNMP-custom    |

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
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Frequency" label="Frequency">

| Option                   | Description                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------|
| --warning-* --critical-* | Threshold in Hertz.  Where '*' can be: 'mains-frequency', 'genset-frequency'    |

</TabItem>
<TabItem value="Fuel-Level" label="Fuel-Level">

| Option                | Description                           |
|:----------------------|:--------------------------------------|
| --warning-fuel-level  | Warning threshold for fuel level.     |
| --critical-fuel-level | Critical threshold for fuel level.    |

</TabItem>
<TabItem value="Phase" label="Phase">

| Option                   | Description                                                              |
|:-------------------------|:-------------------------------------------------------------------------|
| --warning-* --critical-* | Threshold in amperes.  Where '*' can be: 'phase1', 'phase2", 'phase3'    |

</TabItem>
<TabItem value="Status" label="Status">

| Option                          | Description                                                                                                                                                                                                                       |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-alarm-status          | Warning threshold for alarm (default: '%{status} =~ /^alarm/'). Can use special variables like: %{status}                                                                                                                         |
| --critical-alarm-status         | Critical threshold for alarm. Can use special variables like: %{status}                                                                                                                                                           |
| --warning-motor-status          | Warning threshold for motor status. Can use special variables like: %{status}                                                                                                                                                     |
| --critical-motor-status         | Critical threshold for motor status. Can use special variables like: %{status}                                                                                                                                                    |
| --warning-mode-status           | Warning threshold for commutator mode status. Can use special variables like: %{status}                                                                                                                                           |
| --critical-mode-status          | Critical threshold for commutator mode status. Can use special variables like: %{status}                                                                                                                                          |
| --warning-closed-commutator     | Warning threshold for commutator currently closed. Can use special variables like: %{status}                                                                                                                                      |
| --critical-closed-commutator    | Critical threshold for commutator currently closed. Can use special variables like: %{status}  For example if you want to get an alert if the closed commutator is mains:  --critical-closed-commutator='%{status} =~ /mains/i'   |
| --warning-transfer-pump-status  | Warning threshold for transfer pump status. Can use special variables like: %{status}                                                                                                                                             |
| --critical-transfer-pump-status | Critical threshold for transfer pump status. Can use special variables like: %{status}                                                                                                                                            |

</TabItem>
<TabItem value="Voltage" label="Voltage">

| Option                   | Description                                                                                                                                                                                          |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Threshold in volts.  Where '*' can be: 'mains-vl12', 'mains-vl23', 'mains-vl13', 'mains-vl1n', 'mains-vl2n', 'mains-vl3n', 'gen-vl12', 'gen-vl23', 'gen-vl13', 'gen-vl1n', 'gen-vl2n', 'gen-vl3n'    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_ups_himoinsa_snmp.pl \
	--plugin=hardware::ups::himoinsa::snmp::plugin \
	--mode=voltage \
	--help
```
