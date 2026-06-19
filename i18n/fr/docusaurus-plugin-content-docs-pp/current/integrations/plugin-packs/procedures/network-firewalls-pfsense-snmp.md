---
id: network-firewalls-pfsense-snmp
title: pfSense SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **pfSense SNMP** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **pfSense SNMP** apporte un modèle d'hôte :

* **Net-FW-Pfsense-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-FW-Pfsense-SNMP-custom" label="Net-FW-Pfsense-SNMP-custom">

| Alias                         | Modèle de service                                        | Description                                                                                                                                                                  | Découverte |
|:------------------------------|:---------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|
| Bad-Offset-Packets            | Net-FW-Pfsense-Bad-Offset-Packets-SNMP-custom            | Contrôle le nombre de paquets avec un mauvais "offset"                                                                                                                       |            |
| Blocked-Packets-Per-Interface | Net-FW-Pfsense-Blocked-Packets-Per-Interface-SNMP-custom | Contrôle le nombre de paquets bloqués par seconde sur plusieurs interfaces réseau                                                                                            |     X      |
| Cpu                           | Net-FW-Pfsense-Cpu-SNMP-custom                           | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |            |
| Fragment-Packets              | Net-FW-Pfsense-Fragment-Packets-SNMP-custom              | Contrôle le nombre de paquets fragmentés                                                                                                                                     |            |
| Load                          | Net-FW-Pfsense-Load-SNMP-custom                          | Contrôle de la charge serveur                                                                                                                                                |            |
| Match-Packets                 | Net-FW-Pfsense-Match-Packets-SNMP-custom                 | Contrôle le nombre de paquets qui correspondent à une règle de filtrage                                                                                                      |            |
| Memory                        | Net-FW-Pfsense-Memory-SNMP-custom                        | Contrôle l'utilisation de la mémoire vive                                                                                                                                    |            |
| Memory-Dropped-Packets        | Net-FW-Pfsense-Memory-Dropped-Packets-SNMP-custom        | Contrôle le nombre de paquets rejetés à cause d'une trop forte utilisation de la mémoire                                                                                     |            |
| Normalize-Packets             | Net-FW-Pfsense-Normalize-Packets-SNMP-custom             | Contrôle le nombre de paquets normaux                                                                                                                                        |            |
| Runtime                       | Net-FW-Pfsense-Runtime-SNMP-custom                       | Contrôle le temps depuis l'activation du routeur                                                                                                                             |            |
| Short-Packets                 | Net-FW-Pfsense-Short-Packets-SNMP-custom                 | Contrôle le nombre de paquets courts                                                                                                                                         |            |
| Swap                          | Net-FW-Pfsense-Swap-SNMP-custom                          | Contrôle l'utilisation de la mémoire virtuelle.                                                                                                                              |            |
| Uptime                        | Net-FW-Pfsense-Uptime-SNMP-custom                        | Contrôle la durée depuis laquelle le serveur tourne sans interruption                                                                                                        |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-FW-Pfsense-SNMP-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias        | Modèle de service                       | Description                                                                                                                                                                            |
|:-------------|:----------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu-Detailed | Net-FW-Pfsense-Cpu-Detailed-SNMP-custom | Contrôle du taux d'utilisation détaillé des CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                 |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **Net-FW-Pfsense-SNMP-custom**. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                          | Description                                                                                       |
|:-----------------------------------------|:--------------------------------------------------------------------------------------------------|
| Net-FW-Pfsense-Pfinterfaces-SNMP-Traffic | Découvre les interfaces réseau en utilisant leur nom et supervise leur statut et leur utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Bad-Offset-Packets" label="Bad-Offset-Packets">

| Nom                             | Unité |
|:--------------------------------|:------|
| packets.matched.persecond       | /s    |
| packets.badoffset.persecond     | /s    |
| packets.fragmented.persecond    | /s    |
| packets.short.persecond         | /s    |
| packets.normalized.persecond    | /s    |
| packets.memorydropped.persecond | /s    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Blocked-Packets-Per-Interface" label="Blocked-Packets-Per-Interface">

| Nom                                                 | Unité |
|:----------------------------------------------------|:------|
| *pfint*#pfinterface.pass.traffic.in.bitspersecond   | b/s   |
| *pfint*#pfinterface.pass.traffic.out.bitspersecond  | b/s   |
| *pfint*#pfinterface.block.traffic.in.bitspersecond  | b/s   |
| *pfint*#pfinterface.block.traffic.out.bitspersecond | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| cpu.user.utilization.percentage      | %     |
| cpu.nice.utilization.percentage      | %     |
| cpu.system.utilization.percentage    | %     |
| cpu.idle.utilization.percentage      | %     |
| cpu.wait.utilization.percentage      | %     |
| cpu.kernel.utilization.percentage    | %     |
| cpu.interrupt.utilization.percentage | %     |
| cpu.softirq.utilization.percentage   | %     |
| cpu.steal.utilization.percentage     | %     |
| cpu.guest.utilization.percentage     | %     |
| cpu.guestnice.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Fragment-Packets" label="Fragment-Packets">

| Nom                             | Unité |
|:--------------------------------|:------|
| packets.matched.persecond       | /s    |
| packets.badoffset.persecond     | /s    |
| packets.fragmented.persecond    | /s    |
| packets.short.persecond         | /s    |
| packets.normalized.persecond    | /s    |
| packets.memorydropped.persecond | /s    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Load" label="Load">

| Nom                    | Unité |
|:-----------------------|:------|
| load.1m.average.count  | count |
| load.5m.average.count  | count |
| load.15m.average.count | count |
| load.1m.count          | count |
| load.5m.count          | count |
| load.15m.count         | count |

</TabItem>
<TabItem value="Match-Packets" label="Match-Packets">

| Nom                             | Unité |
|:--------------------------------|:------|
| packets.matched.persecond       | /s    |
| packets.badoffset.persecond     | /s    |
| packets.fragmented.persecond    | /s    |
| packets.short.persecond         | /s    |
| packets.normalized.persecond    | /s    |
| packets.memorydropped.persecond | /s    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                 | Unité |
|:--------------------|:------|
| memory.cached.bytes | B     |
| memory.usage.bytes  | B     |
| swap.usage.bytes    | B     |

</TabItem>
<TabItem value="Memory-Dropped-Packets" label="Memory-Dropped-Packets">

| Nom                             | Unité |
|:--------------------------------|:------|
| packets.matched.persecond       | /s    |
| packets.badoffset.persecond     | /s    |
| packets.fragmented.persecond    | /s    |
| packets.short.persecond         | /s    |
| packets.normalized.persecond    | /s    |
| packets.memorydropped.persecond | /s    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Normalize-Packets" label="Normalize-Packets">

| Nom                             | Unité |
|:--------------------------------|:------|
| packets.matched.persecond       | /s    |
| packets.badoffset.persecond     | /s    |
| packets.fragmented.persecond    | /s    |
| packets.short.persecond         | /s    |
| packets.normalized.persecond    | /s    |
| packets.memorydropped.persecond | /s    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Runtime" label="Runtime">

| Nom     | Unité |
|:--------|:------|
| runtime | s     |

</TabItem>
<TabItem value="Short-Packets" label="Short-Packets">

| Nom                             | Unité |
|:--------------------------------|:------|
| packets.matched.persecond       | /s    |
| packets.badoffset.persecond     | /s    |
| packets.fragmented.persecond    | /s    |
| packets.short.persecond         | /s    |
| packets.normalized.persecond    | /s    |
| packets.memorydropped.persecond | /s    |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Swap" label="Swap">

| Nom                   | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Nom                   | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration du parefeu pfSense

Afin de superviser le pare-feu pfSense, le SNMP v2 ou v3 doit
être configuré comme indiqué sur la documentation officielle fournie par
Netgate:
https://docs.netgate.com/pfsense/en/latest/services/snmp.html

### Flux réseaux

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers la ressource supervisée.

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
dnf install centreon-pack-network-firewalls-pfsense-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-firewalls-pfsense-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-firewalls-pfsense-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-firewalls-pfsense-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **pfSense SNMP**
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
dnf install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-firewalls-pfsense-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-FW-Pfsense-SNMP-custom**.

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
<TabItem value="Bad-Offset-Packets" label="Bad-Offset-Packets">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                                                                        |                   |             |
| CRITICAL     | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Blocked-Packets-Per-Interface" label="Blocked-Packets-Per-Interface">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME       | Filter by interface name (can be a regexp)                                                                                                       | em.*              |             |
| WARNINGBLOCKIN   | Threshold                                                                                                                                        |                   |             |
| CRITICALBLOCKIN  | Threshold                                                                                                                                        |                   |             |
| WARNINGBLOCKOUT  | Threshold                                                                                                                                        |                   |             |
| CRITICALBLOCKOUT | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold average CPU utilization                                                                                                        | 80                |             |
| CRITICAL     | Critical  threshold average CPU utilization                                                                                                      | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLE  | Threshold in percentage                                                                                                                          | 20:               |             |
| CRITICALIDLE | Threshold in percentage                                                                                                                          | 10:               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Fragment-Packets" label="Fragment-Packets">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                                                                        |                   |             |
| CRITICAL     | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                                                              | 4,3,2             |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                                                                             | 6,5,4             |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Match-Packets" label="Match-Packets">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                                                                        |                   |             |
| CRITICAL     | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                                                                     | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                                                                    | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory-Dropped-Packets" label="Memory-Dropped-Packets">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                                                                        |                   |             |
| CRITICAL     | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Normalize-Packets" label="Normalize-Packets">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                                                                        |                   |             |
| CRITICAL     | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Runtime" label="Runtime">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in seconds                                                                                                                     |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                                                                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Short-Packets" label="Short-Packets">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold                                                                                                                                        |                   |             |
| CRITICAL     | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold in percentage                                                                                                                          | 10                |             |
| CRITICAL     | Threshold in percentage                                                                                                                          | 30                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNIT         | Select the time unit for thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds     |                   |             |
| WARNING      | Warning threshold                                                                                                                                |                   |             |
| CRITICAL     | Critical threshold                                                                                                                               |                   |             |
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
/usr/lib/centreon/plugins/centreon_pfsense.pl \
	--plugin=apps::pfsense::snmp::plugin \
	--mode=packet-stats \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-counters=badoffset \
	--warning-badoffset='' \
	--critical-badoffset='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Packets Matched Filter Rule : 6/s Bad Offset Packets : 97/s Fragmented Packets : 98/s Short Packets : 25/s Normalized Packets : 79/s Dropped Packets Due To Memory : 51/s | 'packets.matched.persecond'=6/s;;;0;'packets.badoffset.persecond'=97/s;;;0;'packets.fragmented.persecond'=98/s;;;0;'packets.short.persecond'=25/s;;;0;'packets.normalized.persecond'=79/s;;;0;'packets.memorydropped.persecond'=51/s;;;0;
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
/usr/lib/centreon/plugins/centreon_pfsense.pl \
	--plugin=apps::pfsense::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                 | Modèle de service associé                                                                                                                                                                                                                                                                           |
|:-------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                                | Net-FW-Pfsense-Cpu-SNMP-custom                                                                                                                                                                                                                                                                      |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpudetailed.pm)]               | Net-FW-Pfsense-Cpu-Detailed-SNMP-custom                                                                                                                                                                                                                                                             |
| list-pfinterfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pfsense/snmp/mode/listpfinterfaces.pm)] | Used for service discovery                                                                                                                                                                                                                                                                          |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/loadaverage.pm)]                       | Net-FW-Pfsense-Load-SNMP-custom                                                                                                                                                                                                                                                                     |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/freebsd/snmp/mode/memory.pm)]                        | Net-FW-Pfsense-Memory-SNMP-custom                                                                                                                                                                                                                                                                   |
| packet-stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pfsense/snmp/mode/packetstats.pm)]           | Net-FW-Pfsense-Bad-Offset-Packets-SNMP-custom<br />Net-FW-Pfsense-Fragment-Packets-SNMP-custom<br />Net-FW-Pfsense-Match-Packets-SNMP-custom<br />Net-FW-Pfsense-Memory-Dropped-Packets-SNMP-custom<br />Net-FW-Pfsense-Normalize-Packets-SNMP-custom<br />Net-FW-Pfsense-Short-Packets-SNMP-custom |
| pfinterfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pfsense/snmp/mode/pfinterfaces.pm)]          | Net-FW-Pfsense-Blocked-Packets-Per-Interface-SNMP-custom                                                                                                                                                                                                                                            |
| runtime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pfsense/snmp/mode/runtime.pm)]                    | Net-FW-Pfsense-Runtime-SNMP-custom                                                                                                                                                                                                                                                                  |
| state-table [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/pfsense/snmp/mode/statetable.pm)]             | Not used in this Monitoring Connector                                                                                                                                                                                                                                                               |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/swap.pm)]                              | Net-FW-Pfsense-Swap-SNMP-custom                                                                                                                                                                                                                                                                     |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                          | Net-FW-Pfsense-Uptime-SNMP-custom                                                                                                                                                                                                                                                                   |

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
<TabItem value="Bad-Offset-Packets" label="Bad-Offset-Packets">

| Option            | Description                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^match$'             |
| --warning-*       |   Warning threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.     |
| --critical-*      |   Critical threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.    |

</TabItem>
<TabItem value="Blocked-Packets-Per-Interface" label="Blocked-Packets-Per-Interface">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'traffic-in-pass', 'traffic-out-pass', 'traffic-in-block', 'traffic-out-block'.                  |
| --critical-*      |   Critical threshold. Can be: 'traffic-in-pass', 'traffic-out-pass', 'traffic-in-block', 'traffic-out-block'.                 |
| --filter-name     |   Filter by interface name (can be a regexp).                                                                                 |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                                                                                                   |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --use-ucd          |   Use UCD MIB for CPU average.                                                                                                |
| --warning-average  |   Warning threshold average CPU utilization.                                                                                  |
| --critical-average |   Critical  threshold average CPU utilization.                                                                                |
| --warning-core     |   Warning thresholds for each CPU core                                                                                        |
| --critical-core    |   Critical thresholds for each CPU core                                                                                       |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option               | Description                                                                                                                   |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters    |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-guest      |   Threshold in percentage.                                                                                                    |
| --critical-guest     |   Threshold in percentage.                                                                                                    |
| --warning-guestnice  |   Threshold in percentage.                                                                                                    |
| --critical-guestnice |   Threshold in percentage.                                                                                                    |
| --warning-idle       |   Threshold in percentage.                                                                                                    |
| --critical-idle      |   Threshold in percentage.                                                                                                    |
| --warning-interrupt  |   Threshold in percentage.                                                                                                    |
| --critical-interrupt |   Threshold in percentage.                                                                                                    |
| --warning-kernel     |   Threshold in percentage.                                                                                                    |
| --critical-kernel    |   Threshold in percentage.                                                                                                    |
| --warning-nice       |   Threshold in percentage.                                                                                                    |
| --critical-nice      |   Threshold in percentage.                                                                                                    |
| --warning-softirq    |   Threshold in percentage.                                                                                                    |
| --critical-softirq   |   Threshold in percentage.                                                                                                    |
| --warning-steal      |   Threshold in percentage.                                                                                                    |
| --critical-steal     |   Threshold in percentage.                                                                                                    |
| --warning-system     |   Threshold in percentage.                                                                                                    |
| --critical-system    |   Threshold in percentage.                                                                                                    |
| --warning-user       |   Threshold in percentage.                                                                                                    |
| --critical-user      |   Threshold in percentage.                                                                                                    |
| --warning-wait       |   Threshold in percentage.                                                                                                    |
| --critical-wait      |   Threshold in percentage.                                                                                                    |

</TabItem>
<TabItem value="Fragment-Packets" label="Fragment-Packets">

| Option            | Description                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^match$'             |
| --warning-*       |   Warning threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.     |
| --critical-*      |   Critical threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.    |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                               |
|:-----------|:------------------------------------------|
| --warning  |   Warning threshold (1min,5min,15min).    |
| --critical |   Critical threshold (1min,5min,15min).   |
| --average  |   Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Match-Packets" label="Match-Packets">

| Option            | Description                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^match$'             |
| --warning-*       |   Warning threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.     |
| --critical-*      |   Critical threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option          | Description                                             |
|:----------------|:--------------------------------------------------------|
| --warning       |   Warning threshold in percent.                         |
| --critical      |   Critical threshold in percent.                        |
| --swap          |   Check swap also.                                      |
| --warning-swap  |   Warning threshold in percent.                         |
| --critical-swap |   Critical threshold in percent.                        |
| --no-swap       |   Threshold if no active swap (default: 'critical').    |

</TabItem>
<TabItem value="Memory-Dropped-Packets" label="Memory-Dropped-Packets">

| Option            | Description                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^match$'             |
| --warning-*       |   Warning threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.     |
| --critical-*      |   Critical threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.    |

</TabItem>
<TabItem value="Normalize-Packets" label="Normalize-Packets">

| Option            | Description                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^match$'             |
| --warning-*       |   Warning threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.     |
| --critical-*      |   Critical threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.    |

</TabItem>
<TabItem value="Runtime" label="Runtime">

| Option     | Description                         |
|:-----------|:------------------------------------|
| --warning  |   Warning threshold in seconds.     |
| --critical |   Critical threshold in seconds.    |

</TabItem>
<TabItem value="Short-Packets" label="Short-Packets">

| Option            | Description                                                                                         |
|:------------------|:----------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example: --filter-counters='^match$'             |
| --warning-*       |   Warning threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.     |
| --critical-*      |   Critical threshold. Can be: 'match', 'badoffset', 'fragment', 'short', 'normalize', 'memdrop'.    |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                | Description                                                                                                                   |
|:----------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters     |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --no-swap             |   Threshold if no active swap (default: 'critical').                                                                          |
| --warning-usage       |   Threshold in bytes.                                                                                                         |
| --critical-usage      |   Threshold in bytes.                                                                                                         |
| --warning-usage-free  |   Threshold in bytes.                                                                                                         |
| --critical-usage-free |   Threshold in bytes.                                                                                                         |
| --warning-usage-prct  |   Threshold in percentage.                                                                                                    |
| --critical-usage-prct |   Threshold in percentage.                                                                                                    |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters      |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                     |
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-uptime       |   Warning threshold.                                                                                                                                                                                                                            |
| --critical-uptime      |   Critical threshold.                                                                                                                                                                                                                           |
| --add-sysdesc          |   Display system description.                                                                                                                                                                                                                   |
| --force-oid            |   Can choose your OID (numeric format only).                                                                                                                                                                                                    |
| --check-overload       |   Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.                                                                                          |
| --reboot-window        |   To be used with check-overload option. Time in milliseconds (default: 5000) You increase the chance of not missing a reboot if you decrease that value.                                                                                       |
| --unit                 |   Select the time unit for thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.                                                                                                 |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_pfsense.pl \
	--plugin=apps::pfsense::snmp::plugin \
	--mode=packet-stats \
	--help
```
