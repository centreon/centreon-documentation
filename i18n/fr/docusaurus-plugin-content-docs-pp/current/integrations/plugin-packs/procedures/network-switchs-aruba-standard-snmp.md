---
id: network-switchs-aruba-standard-snmp
title: Aruba Standard
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Aruba Standard** apporte 2 modèles d'hôte :

* **Net-Aruba-Standard-Ap-SNMP-custom**
* **Net-Aruba-Standard-Controller-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Aruba-Standard-Ap-SNMP-custom" label="Net-Aruba-Standard-Ap-SNMP-custom">

| Alias              | Modèle de service                                 | Description                                                           |
|:-------------------|:--------------------------------------------------|:----------------------------------------------------------------------|
| Ap-Ssid-Statistics | Net-Aruba-Standard-Ap-Ssid-Statistics-SNMP-custom | Contrôle les statistiques des ESSID et BSSID du ou des points d'accès |
| Ap-Status          | Net-Aruba-Standard-Ap-Status-SNMP-custom          | Contrôle l'état du ou des points d'accès                              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Aruba-Standard-Ap-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Net-Aruba-Standard-Controller-SNMP-custom" label="Net-Aruba-Standard-Controller-SNMP-custom">

| Alias             | Modèle de service                                | Description                                                                                                               |
|:------------------|:-------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| Controller-Status | Net-Aruba-Standard-Controller-Status-SNMP-custom | Contrôle l'état des contrôleurs                                                                                           |
| Cpu               | Net-Aruba-Standard-Cpu-SNMP-custom               | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU |
| Hardware-Global   | Net-Aruba-Standard-Hardware-Global-SNMP-custom   | Contrôle l'ensemble du matériel                                                                                           |
| License           | Net-Aruba-Standard-License-SNMP-custom           | Contrôle l'état des licences du contrôleur                                                                                |
| Memory            | Net-Aruba-Standard-Memory-SNMP-custom            | Contrôle l'utilisation mémoire du matériel                                                                                |
| Storage           | Net-Aruba-Standard-Storage-SNMP-custom           | Contrôle l'utilisation des disques du matériel                                                                            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Aruba-Standard-Controller-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                      | Modèle de service                                         | Description                                                                | Découverte |
|:---------------------------|:----------------------------------------------------------|:---------------------------------------------------------------------------|:----------:|
| Hardware-Fan               | Net-Aruba-Standard-Hardware-Fan-SNMP-custom               | Contrôle les ventilateurs de l'équipement                                  |            |
| Hardware-Module            | Net-Aruba-Standard-Hardware-Module-SNMP-custom            | Contrôle les modules de l'équipement                                       |            |
| Hardware-Psu               | Net-Aruba-Standard-Hardware-Psu-SNMP-custom               | Contrôle les alimentations de l'équipement                                 |            |
| Packet-Errors-Generic-Id   | Net-Aruba-Standard-Packet-Errors-Generic-Id-SNMP-custom   | Contrôle le pourcentage de paquets en erreur/écarté d'une interface réseau |            |
| Packet-Errors-Generic-Name | Net-Aruba-Standard-Packet-Errors-Generic-Name-SNMP-custom | Contrôle le pourcentage de paquets en erreur/écarté d'une interface réseau |            |
| Packet-Errors-Global       | Net-Aruba-Standard-Packet-Errors-Global-SNMP-custom       | Contrôle le pourcentage de paquets en erreur/écarté d'une interface réseau | X          |
| Traffic-Generic-Id         | Net-Aruba-Standard-Traffic-Generic-Id-SNMP-custom         | Contrôle le traffic réseau d'une interface réseau                          |            |
| Traffic-Generic-Name       | Net-Aruba-Standard-Traffic-Generic-Name-SNMP-custom       | Contrôle le traffic réseau d'une interface réseau                          |            |
| Traffic-Global             | Net-Aruba-Standard-Traffic-Global-SNMP-custom             | Contrôle le traffic réseau d'une interface réseau                          | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle     | Description                                                |
|:--------------------|:-----------------------------------------------------------|
| Aruba Access Points | Discover Aruba Access Points throught the Aruba Controller |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de service

| Nom de la règle                            | Description                                                           |
|:-------------------------------------------|:----------------------------------------------------------------------|
| Net-Aruba-Standard-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Aruba-Standard-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Ap-Ssid-Statistics" label="Ap-Ssid-Statistics">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| *ap*~stations.associated.count               | count |
| *ap*~*essid*#essid.stations.associated.count | count |
| *ap*~*bssid*#bssid.stations.associated.count | count |
| *ap*~*bssid*#bssid.channel.noise.count       | count |
| *ap*~*bssid*#bssid.signal.noise.ratio.count  | count |

</TabItem>
<TabItem value="Ap-Status" label="Ap-Status">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| accesspoints.connected.current.count        | count |
| *ap*#status                                 | N/A   |
| *ap*#accesspoint.uptime.seconds             | s     |
| *ap*#accesspoint.controller.bootstrap.count | count |
| *ap*#accesspoint.reboot.count               | count |

</TabItem>
<TabItem value="Controller-Status" label="Controller-Status">

| Métrique                            | Unité |
|:------------------------------------|:------|
| controllers.connected.current.count | count |
| *controllers*#status                | N/A   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                         | Unité |
|:---------------------------------|:------|
| *cpu*#cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

Pas de métrique pour ce service.

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

Pas de métrique pour ce service.

</TabItem>
<TabItem value="Hardware-Module" label="Hardware-Module">

Pas de métrique pour ce service.

</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

Pas de métrique pour ce service.

</TabItem>
<TabItem value="License" label="License">

| Métrique         | Unité |
|:-----------------|:------|
| *license*#status | N/A   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                    | Unité |
|:----------------------------|:------|
| *memory*#memory.usage.bytes | B     |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

> Concerne les modèles de service suivants : Packet-Errors-Generic-Id, Packet-Errors-Generic-Name, Packet-Errors-Global

</TabItem>
<TabItem value="Storage" label="Storage">

| Métrique                        | Unité |
|:--------------------------------|:------|
| *disk_name*#storage.usage.bytes | B     |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| *interface_name*#status                              | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

> Concerne les modèles de service suivants : Traffic-Generic-Id, Traffic-Generic-Name, Traffic-Global

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
dnf install centreon-pack-network-switchs-aruba-standard-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-switchs-aruba-standard-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-switchs-aruba-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-switchs-aruba-standard-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Aruba Standard**
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
dnf install centreon-plugin-Network-Switchs-Aruba-Standard-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Switchs-Aruba-Standard-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-switchs-aruba-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Switchs-Aruba-Standard-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Net-Aruba-Standard-Ap-SNMP-custom" label="Net-Aruba-Standard-Ap-SNMP-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Aruba-Standard-Ap-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro                   | Description                                                                                                                   | Valeur par défaut | Obligatoire |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ARUBACONTROLLERHOSTNAME | Name or address of the host to monitor (mandatory)                                                                            |                   |             |
| SNMPPORT                | UDP port to send the SNMP request to (default: 161)                                                                           |                   |             |
| APNAME                  | Filter by 'ap', 'essid', 'protocol', 'bssid' (regexp can be used)                                                             |                   |             |
| SNMPTIMEOUT             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries |                   |             |
| SNMPEXTRAOPTIONS        | Any extra option you may want to add to every command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                 |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Net-Aruba-Standard-Controller-SNMP-custom" label="Net-Aruba-Standard-Controller-SNMP-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Aruba-Standard-Controller-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                   | Valeur par défaut | Obligatoire |
|:-----------------|:----------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Ap-Ssid-Statistics" label="Ap-Ssid-Statistics">

| Macro                           | Description                                                                                 | Valeur par défaut | Obligatoire |
|:--------------------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBSSIDSTATIONSASSOCIATED  | Warning threshold                                                                           |                   |             |
| CRITICALBSSIDSTATIONSASSOCIATED | Critical threshold                                                                          |                   |             |
| WARNINGCHANNELNOISE             | Warning threshold                                                                           |                   |             |
| CRITICALCHANNELNOISE            | Critical threshold                                                                          |                   |             |
| WARNINGESSIDSTATIONSASSOCIATED  | Warning threshold                                                                           |                   |             |
| CRITICALESSIDSTATIONSASSOCIATED | Critical threshold                                                                          |                   |             |
| WARNINGSIGNALNOISERATIO         | Warning threshold                                                                           |                   |             |
| CRITICALSIGNALNOISERATIO        | Critical threshold                                                                          |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Ap-Status" label="Ap-Status">

| Macro                       | Description                                                                                 | Valeur par défaut  | Obligatoire |
|:----------------------------|:--------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGCONNECTEDCURRENT     | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALCONNECTEDCURRENT    | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| WARNINGCONTROLLERBOOTSTRAP  | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALCONTROLLERBOOTSTRAP | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| WARNINGREBOOT               | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALREBOOT              | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALSTATUS              | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                | %{status} !~ /up/i |             |
| WARNINGSTATUS               | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| WARNINGUPTIME               | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| CRITICALUPTIME              | Thresholds. : %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')                |                    |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose          |             |

</TabItem>
<TabItem value="Controller-Status" label="Controller-Status">

| Macro                    | Description                                                                                               | Valeur par défaut      | Obligatoire |
|:-------------------------|:----------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| WARNINGCONNECTEDCURRENT  | Warning threshold. : %{name}, %{status}, %{ip}, %{role}, %{location} (default: '')                        |                        |             |
| CRITICALCONNECTEDCURRENT | Critical threshold. : %{name}, %{status}, %{ip}, %{role}, %{location} (default: '%{status} !~ /active/i') |                        |             |
| CRITICALSTATUS           | Critical threshold. : %{name}, %{status}, %{ip}, %{role}, %{location} (default: '%{status} !~ /active/i') | %{status} !~ /active/i |             |
| WARNINGSTATUS            | Warning threshold. : %{name}, %{status}, %{ip}, %{role}, %{location} (default: '')                        |                        |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)               | --verbose              |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                | 90                |             |
| CRITICAL     | Critical threshold in percent                                                               | 95                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'                    | fan               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'                    | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Module" label="Hardware-Module">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'                    | module            |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'                    | psu               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="License" label="License">

| Macro          | Description                                                                                                                                                                        | Valeur par défaut                                                         | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------|:-----------:|
| CRITICALSTATUS | Critical threshold. Can use special variables like: %{key}, %{service}, %{flag}, %{expires} (default: '%{flag} !~ /enabled/i \|\| (%{expires} ne "Never" && %{expires} \< 86400)') | %{flag} !~ /enabled/i \|\| (%{expires} ne "Never" && %{expires} \< 86400) |             |
| WARNINGSTATUS  | Warning threshold. Can use special variables like:%{key}, %{service}, %{flag}, %{expires} (default: '')                                                                            |                                                                           |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                        | --verbose                                                                 |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                | 80                |             |
| CRITICAL     | Critical threshold in percent                                                               | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Packet-Errors-Generic-Id" label="Packet-Errors-Generic-Id">

| Macro              | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACEID        | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGINDISCARD   | Thresholds                                                                                  |                   |             |
| CRITICALINDISCARD  | Thresholds                                                                                  |                   |             |
| WARNINGINERROR     | Thresholds                                                                                  |                   |             |
| CRITICALINERROR    | Thresholds                                                                                  |                   |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                  |                   |             |
| CRITICALOUTDISCARD | Thresholds                                                                                  |                   |             |
| WARNINGOUTERROR    | Thresholds                                                                                  |                   |             |
| CRITICALOUTERROR   | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Packet-Errors-Generic-Name" label="Packet-Errors-Generic-Name">

| Macro              | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME      | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGINDISCARD   | Thresholds                                                                                  |                   |             |
| CRITICALINDISCARD  | Thresholds                                                                                  |                   |             |
| WARNINGINERROR     | Thresholds                                                                                  |                   |             |
| CRITICALINERROR    | Thresholds                                                                                  |                   |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                  |                   |             |
| CRITICALOUTDISCARD | Thresholds                                                                                  |                   |             |
| WARNINGOUTERROR    | Thresholds                                                                                  |                   |             |
| CRITICALOUTERROR   | Thresholds                                                                                  |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Packet-Errors-Global" label="Packet-Errors-Global">

| Macro              | Description                                                                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                           |                   |             |
| WARNINGINDISCARD   | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALINDISCARD  | Thresholds                                                                                                                                                                                                          |                   |             |
| WARNINGINERROR     | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALINERROR    | Thresholds                                                                                                                                                                                                          |                   |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALOUTDISCARD | Thresholds                                                                                                                                                                                                          |                   |             |
| WARNINGOUTERROR    | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALOUTERROR   | Thresholds                                                                                                                                                                                                          |                   |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                         | --verbose         |             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                | 80                |             |
| CRITICAL     | Critical threshold in percent                                                               | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGIN    | Thresholds                                                                                  | 80                |             |
| CRITICALIN   | Thresholds                                                                                  | 90                |             |
| WARNINGOUT   | Thresholds                                                                                  | 80                |             |
| CRITICALOUT  | Thresholds                                                                                  | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Macro         | Description                                                                                 | Valeur par défaut | Obligatoire |
|:--------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   |                   |             |
| WARNINGIN     | Thresholds                                                                                  | 80                |             |
| CRITICALIN    | Thresholds                                                                                  | 90                |             |
| WARNINGOUT    | Thresholds                                                                                  | 80                |             |
| CRITICALOUT   | Thresholds                                                                                  | 90                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro        | Description                                                                                 | Valeur par défaut | Obligatoire |
|:-------------|:--------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')   | .*                |             |
| WARNINGIN    | Thresholds                                                                                  | 80                |             |
| CRITICALIN   | Thresholds                                                                                  | 90                |             |
| WARNINGOUT   | Thresholds                                                                                  | 80                |             |
| CRITICALOUT  | Thresholds                                                                                  | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (e.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_aruba.pl \
	--plugin=network::aruba::standard::snmp::plugin \
	--mode=interfaces \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--interface='.*' \
	--name \
	--add-status \
	--add-traffic \
	--warning-in-traffic='80' \
	--critical-in-traffic='90' \
	--warning-out-traffic='80' \
	--critical-out-traffic='90' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All interfaces are ok | '*interface_name*#status'=;;;;'*interface_name*#interface.traffic.in.bitspersecond'=b/s;;;;'*interface_name*#interface.traffic.out.bitspersecond'=b/s;;;;
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
/usr/lib/centreon/plugins/centreon_aruba.pl \
	--plugin=network::aruba::standard::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                           | Modèle de service associé                                                                                                                                                                                                                                                                                                                          |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ap-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/apconnections.pm)]        | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                              |
| ap-ssid-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/apssidstatistics.pm)] | Net-Aruba-Standard-Ap-Ssid-Statistics-SNMP-custom                                                                                                                                                                                                                                                                                                  |
| ap-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/apstatus.pm)]                  | Net-Aruba-Standard-Ap-Status-SNMP-custom                                                                                                                                                                                                                                                                                                           |
| ap-users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/apusers.pm)]                    | Not used in this Monitoring Connector                                                                                                                                                                                                                                                                                                              |
| controller-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/controllerstatus.pm)]  | Net-Aruba-Standard-Controller-Status-SNMP-custom                                                                                                                                                                                                                                                                                                   |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/cpu.pm)]                             | Net-Aruba-Standard-Cpu-SNMP-custom                                                                                                                                                                                                                                                                                                                 |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/discovery.pm)]                 | Used for host discovery                                                                                                                                                                                                                                                                                                                            |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/hardware.pm)]                   | Net-Aruba-Standard-Hardware-Fan-SNMP-custom<br />Net-Aruba-Standard-Hardware-Global-SNMP-custom<br />Net-Aruba-Standard-Hardware-Module-SNMP-custom<br />Net-Aruba-Standard-Hardware-Psu-SNMP-custom                                                                                                                                               |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]                            | Net-Aruba-Standard-Packet-Errors-Generic-Id-SNMP-custom<br />Net-Aruba-Standard-Packet-Errors-Generic-Name-SNMP-custom<br />Net-Aruba-Standard-Packet-Errors-Global-SNMP-custom<br />Net-Aruba-Standard-Traffic-Generic-Id-SNMP-custom<br />Net-Aruba-Standard-Traffic-Generic-Name-SNMP-custom<br />Net-Aruba-Standard-Traffic-Global-SNMP-custom |
| license [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/license.pm)]                     | Net-Aruba-Standard-License-SNMP-custom                                                                                                                                                                                                                                                                                                             |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]                   | Used for service discovery                                                                                                                                                                                                                                                                                                                         |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/memory.pm)]                       | Net-Aruba-Standard-Memory-SNMP-custom                                                                                                                                                                                                                                                                                                              |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/aruba/snmp/mode/storage.pm)]                     | Net-Aruba-Standard-Storage-SNMP-custom                                                                                                                                                                                                                                                                                                             |

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
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
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
<TabItem value="Ap-Ssid-Statistics" label="Ap-Ssid-Statistics">

| Option       | Description                                                                                                           |
|:-------------|:----------------------------------------------------------------------------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'stations-associated' (ESSID and BSSID), 'channel-noise', 'signal-noise-ratio' (BSSID).    |
| --critical-* | Critical threshold. Can be: 'stations-associated' (ESSID and BSSID), 'channel-noise', 'signal-noise-ratio' (BSSID).   |
| --filter-*   | Filter by 'ap', 'essid', 'protocol', 'bssid' (regexp can be used).                                                    |

</TabItem>
<TabItem value="Ap-Status" label="Ap-Status">

| Option                   | Description                                                                                                                                                                                                                 |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'connected-current' (global), 'uptime', 'controller-bootstrap', 'reboot', 'status' (per AP).  'status' can use special variables like: %{name}, %{status}, %{ip}, %{group}, %{location} (default: '')   |
| --filter-*               | Filter by 'ip', 'name', 'group' (regexp can be used).                                                                                                                                                                       |

</TabItem>
<TabItem value="Controller-Status" label="Controller-Status">

| Option       | Description                                                                                                                                                                                                         |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'connected-current' (global), 'status' (per controller). 'status' can use special variables like: %{name}, %{status}, %{ip}, %{role}, %{location} (default: '')                          |
| --critical-* | Critical threshold. Can be: 'connected-current' (global), 'status' (per controller). 'status' can use special variables like: %{name}, %{status}, %{ip}, %{role}, %{location} (default: '%{status} !~ /active/i')   |
| --filter-*   | Filter by 'ip', 'name', 'location' (regexp can be used).                                                                                                                                                            |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                       |
|:-----------------------|:----------------------------------|
| --warning-utilization  | Warning threshold in percent.     |
| --critical-utilization | Critical threshold in percent.    |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

| Option               | Description                                                                                                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'.                                                                                                                                         |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                        |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,OK,inactive'    |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Option               | Description                                                                                                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'.                                                                                                                                         |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                        |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,OK,inactive'    |

</TabItem>
<TabItem value="Hardware-Module" label="Hardware-Module">

| Option               | Description                                                                                                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'.                                                                                                                                         |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                        |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,OK,inactive'    |

</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

| Option               | Description                                                                                                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'module'.                                                                                                                                         |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,1                                                        |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan,OK,inactive'    |

</TabItem>
<TabItem value="License" label="License">

| Option            | Description                                                                                                                                                                           |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  | Warning threshold. Can use special variables like:%{key}, %{service}, %{flag}, %{expires} (default: '')                                                                               |
| --critical-status | Critical threshold. Can use special variables like: %{key}, %{service}, %{flag}, %{expires} (default: '%{flag} !~ /enabled/i \|\| (%{expires} ne "Never" && %{expires} \< 86400)')    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description                       |
|:-----------------|:----------------------------------|
| --warning-usage  | Warning threshold in percent.     |
| --critical-usage | Critical threshold in percent.    |

</TabItem>
<TabItem value="Packet-Errors-*" label="Packet-Errors-*">

| Option                                          | Description                                                                                                                                                                                                                                                                                |
|:------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file                                 | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                        |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                         |
| --add-global                                    | Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast                                    | Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface                                     | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                 |
| --name                                          | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl                                 | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            |
| --force-counters64                              | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Storage" label="Storage">

| Option           | Description                                                                       |
|:-----------------|:----------------------------------------------------------------------------------|
| --warning-usage  | Warning threshold in percent.                                                     |
| --critical-usage | Critical threshold in percent.                                                    |
| --filter-name    | Filter storage device name (regexp can be used).                                  |
| --filter-type    | Filter storage device type (regexp can be used). Can use: 'ram', 'flashMemory'    |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                                          | Description                                                                                                                                                                                                                                                                                |
|:------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file                                 | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                        |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                         |
| --add-global                                    | Check global port statistics (by default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status                                    | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status                             | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic                                   | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors                                    | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast                                      | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed                                     | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume                                    | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast                                    | Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface                                     | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                 |
| --name                                          | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl                                 | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            |
| --force-counters64                              | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32                              | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aruba.pl \
	--plugin=network::aruba::standard::snmp::plugin \
	--mode=interfaces \
	--help
```
