---
id: network-teldat-snmp
title: Teldat SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Teldat Edge Routers SNMP** apporte un modèle d'hôte :

* **Net-Teldat-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Teldat-SNMP-custom" label="Net-Teldat-SNMP-custom">

| Alias       | Modèle de service                  | Description                                               | Découverte |
|:------------|:-----------------------------------|:----------------------------------------------------------|:----------:|
| Cells-Radio | Net-Teldat-Cells-Radio-SNMP-custom | Contrôle les modules radio cellulaires                    | X          |
| Cpu         | Net-Teldat-Cpu-SNMP-custom         | Contrôle du taux d'utilisation du CPU de la machine       |            |
| Memory      | Net-Teldat-Memory-SNMP-custom      | Contrôle du taux d'utilisation de la mémoire vive         |            |
| Uptime      | Net-Teldat-Uptime-SNMP-custom      | Durée depuis laquelle le serveur tourne sans interruption |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Teldat-SNMP-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service                 | Description             | Découverte |
|:-----------|:----------------------------------|:------------------------|:----------:|
| Interfaces | Net-Teldat-Interfaces-SNMP-custom | Contrôle les interfaces | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                    |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Teldat-SNMP-custom** host template |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                    | Description                                                             |
|:-----------------------------------|:------------------------------------------------------------------------|
| Net-Teldat-SNMP-Cells-Radio-IMEI   |                                                                         |
| Net-Teldat-SNMP-Cells-Radio-Module |                                                                         |
| Net-Teldat-SNMP-Interface-Name     | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Métrique                          | Unité |
|:----------------------------------|:------|
| modules.cellradio.detected.count  | count |
| *cells*~status                    | N/A   |
| *cells*~module.cellradio.rsrp.dbm | N/A   |
| *cells*~module.cellradio.rsrq.dbm | N/A   |
| *cells*~module.cellradio.snr.db   | N/A   |
| *cells*~module.cellradio.rscp.dbm | N/A   |
| *cells*~module.cellradio.csq.dbm  | N/A   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                       | Unité |
|:-------------------------------|:------|
| cpu.utilization.5s.percentage  | %     |
| cpu.utilization.1m.percentage  | %     |
| cpu.utilization.15m.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                         | Unité |
|:---------------------------------|:------|
| *memory*#memory.usage.bytes      | B     |
| *memory*#memory.free.bytes       | B     |
| *memory*#memory.usage.percentage | %     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers le serveur supervisé.

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
dnf install centreon-pack-network-teldat-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-teldat-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-teldat-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-teldat-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Teldat Edge Routers SNMP**
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
dnf install centreon-plugin-Network-Teldat-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Teldat-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-teldat-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Teldat-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Teldat-SNMP-custom**.

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
<TabItem value="Cells-Radio" label="Cells-Radio">

| Macro                            | Description                                                                                        | Valeur par défaut                                                       | Obligatoire |
|:---------------------------------|:---------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|:-----------:|
| FILTERMODULE                     |                                                                                                    |                                                                         |             |
| FILTERIMEI                       |                                                                                                    |                                                                         |             |
| FILTERINTERFACETYPE              |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIOCSQ        |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIOCSQ       |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIORSCP       |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIORSCP      |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIORSRP       |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIORSRP      |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIORSRQ       |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIORSRQ      |                                                                                                    |                                                                         |             |
| WARNINGMODULECELLRADIOSNR        |                                                                                                    |                                                                         |             |
| CRITICALMODULECELLRADIOSNR       |                                                                                                    |                                                                         |             |
| WARNINGMODULESCELLRADIODETECTED  |                                                                                                    |                                                                         |             |
| CRITICALMODULESCELLRADIODETECTED |                                                                                                    |                                                                         |             |
| WARNINGSTATUS                    |                                                                                                    | %{interfaceState} =~ /disconnect/ && %{interfaceType} =~ /data primary/ |             |
| CRITICALSTATUS                   |                                                                                                    |                                                                         |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                                                               |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                    | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCPUUTILIZATION1M  |                                                                                                    |                   |             |
| CRITICALCPUUTILIZATION1M |                                                                                                    |                   |             |
| WARNINGCPUUTILIZATION5M  |                                                                                                    |                   |             |
| CRITICALCPUUTILIZATION5M |                                                                                                    |                   |             |
| WARNINGCPUUTILIZATION5S  |                                                                                                    |                   |             |
| CRITICALCPUUTILIZATION5S |                                                                                                    |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                        | Valeur par défaut                                     | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| OIDFILTER          |                                                                                                    | ifname                                                |             |
| OIDDISPLAY         |                                                                                                    | ifname                                                |             |
| INTERFACENAME      |                                                                                                    |                                                       |             |
| WARNINGINDISCARD   |                                                                                                    |                                                       |             |
| CRITICALINDISCARD  |                                                                                                    |                                                       |             |
| WARNINGINERROR     |                                                                                                    |                                                       |             |
| CRITICALINERROR    |                                                                                                    |                                                       |             |
| WARNINGINTRAFFIC   |                                                                                                    |                                                       |             |
| CRITICALINTRAFFIC  |                                                                                                    |                                                       |             |
| WARNINGOUTDISCARD  |                                                                                                    |                                                       |             |
| CRITICALOUTDISCARD |                                                                                                    |                                                       |             |
| WARNINGOUTERROR    |                                                                                                    |                                                       |             |
| CRITICALOUTERROR   |                                                                                                    |                                                       |             |
| WARNINGOUTTRAFFIC  |                                                                                                    |                                                       |             |
| CRITICALOUTTRAFFIC |                                                                                                    |                                                       |             |
| CRITICALSTATUS     |                                                                                                    | %{admstatus} eq "up" and %{opstatus} !~ /up\|dormant/ |             |
| WARNINGSTATUS      |                                                                                                    |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                                             |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE      |                                                                                                    |                   |             |
| CRITICALUSAGE     |                                                                                                    |                   |             |
| WARNINGUSAGEFREE  |                                                                                                    |                   |             |
| CRITICALUSAGEFREE |                                                                                                    |                   |             |
| WARNINGUSAGEPRCT  |                                                                                                    |                   |             |
| CRITICALUSAGEPRCT |                                                                                                    |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      |                                                                                                    |                   |             |
| CRITICAL     |                                                                                                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --check-overload  |             |

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
/usr/lib/centreon/plugins/centreon_teldat_snmp.pl \
	--plugin=network::teldat::snmp::plugin \
	--mode=memory \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All memory usages are ok | '*memory*#memory.usage.bytes'=B;;;0;total'*memory*#memory.free.bytes'=B;;;0;total'*memory*#memory.usage.percentage'=%;;;0;100
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
/usr/lib/centreon/plugins/centreon_teldat_snmp.pl \
	--plugin=network::teldat::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                | Modèle de service associé          |
|:------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| cells-radio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/cellsradio.pm)]          | Net-Teldat-Cells-Radio-SNMP-custom |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/cpu.pm)]                         | Net-Teldat-Cpu-SNMP-custom         |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/interfaces.pm)]           | Net-Teldat-Interfaces-SNMP-custom  |
| list-cells-radio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/listcellsradio.pm)] | Used for service discovery         |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]        | Used for service discovery         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/memory.pm)]                   | Net-Teldat-Memory-SNMP-custom      |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/teldat/snmp/mode/uptime.pm)]                   | Net-Teldat-Uptime-SNMP-custom      |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option | Description |
|:-------|:------------|

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cells-Radio" label="Cells-Radio">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Memory" label="Memory">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_teldat_snmp.pl \
	--plugin=network::teldat::snmp::plugin \
	--mode=memory \
	--help
```
