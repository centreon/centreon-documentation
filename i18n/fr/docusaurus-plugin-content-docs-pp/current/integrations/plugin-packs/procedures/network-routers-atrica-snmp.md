---
id: network-routers-atrica-snmp
title: Atrica Routeur
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Atrica Routeur** apporte un modèle d'hôte :

* **Net-Atrica-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Atrica-SNMP-custom" label="Net-Atrica-SNMP-custom">

| Alias | Modèle de service | Description |
|:------|:------------------|:------------|

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Atrica-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                    | Modèle de service                               | Description          |
|:-------------------------|:------------------------------------------------|:---------------------|
| Connections-Generic-Id   | Net-Atrica-Connections-Generic-Id-SNMP-custom   | Contrôle le trafic  |
| Connections-Generic-Name | Net-Atrica-Connections-Generic-Name-SNMP-custom | Contrôle le trafic  |
| Connections-Global       | Net-Atrica-Connections-Global-SNMP-custom       | Contrôle le trafic  |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                    |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **Net-Atrica-SNMP-custom** |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Connections-*" label="Connections-*">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

> Concerne les modèles de service suivants : Connections-Generic-Id, Connections-Generic-Name, Connections-Global

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
dnf install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Atrica Routeur**
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
dnf install centreon-plugin-Network-Routers-Atrica-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Routers-Atrica-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Routers-Atrica-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Atrica-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connections-Generic-Id" label="Connections-Generic-Id">

| Macro                 | Description                                                                                                                                      | Valeur par défaut  | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| INTERFACEID           | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                        |                    |             |
| OIDDISPLAY            | Define the OID that will be used to name the interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                            | atrConnCepGenDescr |             |
| OIDFILTER             | Define the OID to be used to filter interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                                     | atrConnCepGenDescr |             |
| SPEED                 | Set interface speed for incoming/outgoing traffic (in Mb)                                                                                        |                    |             |
| CRITICALINCIR         | Thresholds                                                                                                                                       |                    |             |
| WARNINGINCIR          | Thresholds                                                                                                                                       |                    |             |
| CRITICALINEIR         | Thresholds                                                                                                                                       |                    |             |
| WARNINGINEIR          | Thresholds                                                                                                                                       |                    |             |
| CRITICALINEIRDISCARD  | Thresholds                                                                                                                                       |                    |             |
| WARNINGINEIRDISCARD   | Thresholds                                                                                                                                       |                    |             |
| CRITICALOUTCIR        | Thresholds                                                                                                                                       |                    |             |
| WARNINGOUTCIR         | Thresholds                                                                                                                                       |                    |             |
| CRITICALOUTEIR        | Thresholds                                                                                                                                       |                    |             |
| WARNINGOUTEIR         | Thresholds                                                                                                                                       |                    |             |
| CRITICALOUTEIRDISCARD | Thresholds                                                                                                                                       |                    |             |
| WARNINGOUTEIRDISCARD  | Thresholds                                                                                                                                       |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                    |             |

</TabItem>
<TabItem value="Connections-Generic-Name" label="Connections-Generic-Name">

| Macro                 | Description                                                                                                                                      | Valeur par défaut  | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| INTERFACENAME         | Set the interface name                                                                                                                           |                    |             |
| SPEED                 | Set interface speed for incoming/outgoing traffic (in Mb)                                                                                        |                    |             |
| OIDFILTER             | Define the OID to be used to filter interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                                     | atrConnCepGenDescr |             |
| OIDDISPLAY            | Define the OID that will be used to name the interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                            | atrConnCepGenDescr |             |
| CRITICALINCIR         | Thresholds                                                                                                                                       |                    |             |
| WARNINGINCIR          | Thresholds                                                                                                                                       |                    |             |
| CRITICALINEIR         | Thresholds                                                                                                                                       |                    |             |
| WARNINGINEIR          | Thresholds                                                                                                                                       |                    |             |
| WARNINGINEIRDISCARD   | Thresholds                                                                                                                                       |                    |             |
| CRITICALINEIRDISCARD  | Thresholds                                                                                                                                       |                    |             |
| CRITICALOUTCIR        | Thresholds                                                                                                                                       |                    |             |
| WARNINGOUTCIR         | Thresholds                                                                                                                                       |                    |             |
| CRITICALOUTEIR        | Thresholds                                                                                                                                       |                    |             |
| WARNINGOUTEIR         | Thresholds                                                                                                                                       |                    |             |
| WARNINGOUTEIRDISCARD  | Thresholds                                                                                                                                       |                    |             |
| CRITICALOUTEIRDISCARD | Thresholds                                                                                                                                       |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                    |             |

</TabItem>
<TabItem value="Connections-Global" label="Connections-Global">

| Macro                 | Description                                                                                                                                                                                                                                                                            | Valeur par défaut  | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| FILTER                | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                                                                                              | .+                 |             |
| OIDDISPLAY            | Define the OID that will be used to name the interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                                                                                                                                                                  | atrConnCepGenDescr |             |
| OIDFILTER             | Define the OID to be used to filter interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                                                                                                                                                                           | atrConnCepGenDescr |             |
| SPEED                 | Set interface speed for incoming/outgoing traffic (in Mb)                                                                                                                                                                                                                              |                    |             |
| CRITICALINCIR         | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGINCIR          | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALINEIR         | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGINEIR          | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALINEIRDISCARD  | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGINEIRDISCARD   | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALOUTCIR        | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGOUTCIR         | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALOUTEIR        | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGOUTEIR         | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALOUTEIRDISCARD | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| WARNINGOUTEIRDISCARD  | Thresholds                                                                                                                                                                                                                                                                             |                    |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL. Default (depends of the atrica release): '%{admstatus} eq "on" and %{opstatus} ne "inService"' '%{admstatus} eq "up" and %{opstatus} ne "up"' You can use the following variables: %{admstatus}, %{opstatus}, %{display} |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                       | --verbose          |             |

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
/usr/lib/centreon/plugins/centreon_atrica.pl \
	--plugin=network::atrica::snmp::plugin \
	--mode=connections \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--interface='.+' \
	--name \
	--add-status \
	--add-traffic \
	--add-errors \
	--critical-status='' \
	--warning-in-cir='' \
	--critical-in-cir='' \
	--warning-out-cir='' \
	--critical-out-cir='' \
	--warning-in-eir='' \
	--critical-in-eir='' \
	--warning-out-eir='' \
	--critical-out-eir='' \
	--warning-in-eir-discard='' \
	--critical-in-eir-discard='' \
	--warning-out-eir-discard='' \
	--critical-out-eir-discard='' \
	--speed='' \
	--oid-filter='atrConnCepGenDescr' \
	--oid-display='atrConnCepGenDescr'  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All interfaces are ok | '*interface_name*#status'='up';;;;'*interface_name*#interface.traffic.in.bitspersecond'=20b/s;;;;'*interface_name*#interface.traffic.out.bitspersecond'=20b/s;;;;'*interface_name*#interface.packets.in.discard.percentage'=10%;;;;100'*interface_name*#interface.packets.in.error.percentage'=25%;;;;100'*interface_name*#interface.packets.out.discard.percentage'=12%;;;;100'*interface_name*#interface.packets.out.error.percentage'=30%;;;;100
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
/usr/lib/centreon/plugins/centreon_atrica.pl \
	--plugin=network::atrica::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                 | Modèle de service associé                                                                                                                         |
|:-------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/atrica/snmp/mode/connections.pm)]          | Net-Atrica-Connections-Generic-Id-SNMP-custom<br />Net-Atrica-Connections-Generic-Name-SNMP-custom<br />Net-Atrica-Connections-Global-SNMP-custom |
| list-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/atrica/snmp/mode/listconnections.pm)] | Not used in this Monitoring Connector                                                                                                             |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Connections-*" label="Connections-*">

| Option                                          | Description                                                                                                                                                                                                                                                                              |
|:------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-status                                    | Check interface status (by default if no --add-* option is set).                                                                                                                                                                                                                         |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                 |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                  |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%{opstatus} eq "up" or %{opstatus} eq "inService"').                                                                                                                                                                           |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                                                                                  |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL. Default (depends of the atrica release): '%{admstatus} eq "on" and %{opstatus} ne "inService"' '%{admstatus} eq "up" and %{opstatus} ne "up"' You can use the following variables: %{admstatus}, %{opstatus}, %{display}   |
| --warning-* --critical-*                        | Thresholds. Can be: 'in-cir', 'in-eir', 'out-cir', 'out-eir', 'in-eir-discard', 'out-eir-discard'.                                                                                                                                                                                       |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                    |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                        |
| --interface                                     | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                               |
| --name                                          | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                             |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                               |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                        |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                        |
| --reload-cache-time                             | Time in seconds before reloading cache file (default: 180).                                                                                                                                                                                                                              |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: atrConnCepGenDescr) (values: atrConnIngDescr, atrConnCepGenDescr).                                                                                                                                                              |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: atrConnCepGenDescr) (values: atrConnIngDescr, atrConnCepGenDescr).                                                                                                                                                     |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                   |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                         |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                            |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_atrica.pl \
	--plugin=network::atrica::snmp::plugin \
	--mode=connections \
	--help
```
