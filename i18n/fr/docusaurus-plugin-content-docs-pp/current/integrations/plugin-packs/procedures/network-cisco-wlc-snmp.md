---
id: network-cisco-wlc-snmp
title: Cisco WLC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco WLC** apporte 2 modèles d'hôte :

* **Net-Cisco-Wlc-SNMP-custom**
* **Net-Cisco-Wlc-SNMP-Access-Point-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Wlc-SNMP-custom" label="Net-Cisco-Wlc-SNMP-custom">

| Alias            | Modèle de service                          | Description                                        | Découverte |
|:-----------------|:-------------------------------------------|:---------------------------------------------------|:----------:|
| Ap-Status-Global | Net-Cisco-Wlc-Ap-Status-Global-SNMP-custom | Contrôle le statut de l'ensemble des relais        | X          |
| Cpu              | Net-Cisco-Wlc-Cpu-SNMP-custom              | Contrôle le taux d'utilisation du CPU              |            |
| Hardware-Global  | Net-Cisco-Wlc-Hardware-Global-SNMP-custom  | Contrôle l'ensemble du matériel                    |            |
| Memory           | Net-Cisco-Wlc-Memory-SNMP-custom           | Contrôle du taux d'utilisation de la mémoire vive  |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Wlc-SNMP-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Net-Cisco-Wlc-SNMP-Access-Point-custom" label="Net-Cisco-Wlc-SNMP-Access-Point-custom">

| Alias     | Modèle de service                                | Description                                                  |
|:----------|:-------------------------------------------------|:-------------------------------------------------------------|
| Ap-Status | Net-Cisco-Wlc-Ap-Status-SNMP-Access-Point-custom | Contrôle le statut du point d'accès                          |
| Ap-Users  | Net-Cisco-Wlc-Ap-Users-SNMP-Access-Point-custom  | Contrôle le nombre d'utilisateurs du point d'accès           |
| Ap-Users  | Net-Cisco-Wlc-Ap-Users-SNMP-custom               | Contrôle le nombre d'utilisateurs sur l'ensemble des relais  |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Wlc-SNMP-Access-Point-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                          | Modèle de service                                        | Description                                                         | Découverte |
|:-------------------------------|:---------------------------------------------------------|:--------------------------------------------------------------------|:----------:|
| Ap-Channel-Interference-Global | Net-Cisco-Wlc-Ap-Channel-Interference-Global-SNMP-custom | Contrôle les interférences sur les canaux de l'ensemble des relais  |            |
| Ap-Channel-Noise-Global        | Net-Cisco-Wlc-Ap-Channel-Noise-Global-SNMP-custom        | Contrôle le bruit sur les canaux de l'ensemble des relais           |            |
| Ap-Users                       | Net-Cisco-Wlc-Ap-Users-SNMP-Access-Point-custom          | Contrôle le nombre d'utilisateurs du point d'accès                  |            |
| Ap-Users                       | Net-Cisco-Wlc-Ap-Users-SNMP-custom                       | Contrôle le nombre d'utilisateurs sur l'ensemble des relais         |            |
| Traffic-Generic-Id             | Net-Cisco-Wlc-Traffic-Generic-Id-SNMP-custom             | Contrôle le traffic réseau d'une interface réseau                   |            |
| Traffic-Generic-Name           | Net-Cisco-Wlc-Traffic-Generic-Name-SNMP-custom           | Contrôle le traffic réseau d'une interface réseau                   |            |
| Traffic-Global                 | Net-Cisco-Wlc-Traffic-Global-SNMP-custom                 | Contrôle le traffic réseau de plusieurs interfaces réseau           | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/onprem/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                  |
|:----------------|:-------------------------------------------------------------|
| Cisco WLC       | Découvre les points d'accès du Cisco Wireless LAN Controller |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de service

| Nom de la règle                 | Description                                                            |
|:--------------------------------|:-----------------------------------------------------------------------|
| Net-Cisco-Wlc-SNMP-AP-Name      | Découvre les points d'accès et supervise le statut                     |
| Net-Cisco-Wlc-SNMP-Traffic-Name | Découvre les interfaces réseau et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Ap-Channel-Interference-Global" label="Ap-Channel-Interference-Global">

| Métrique                                                                     | Unité |
|:-----------------------------------------------------------------------------|:------|
| *ap_name~slot_id:channel_id*#accesspoint.interference.power.count            |       |
| *ap_name~slot_id:channel_id*#accesspoint.interference.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Ap-Channel-Noise-Global" label="Ap-Channel-Noise-Global">

| Métrique                                                 | Unité |
|:---------------------------------------------------------|:------|
| *ap_name~slot_id:channel_id*#accesspoint.noise.power.dbm | dBm   |

</TabItem>
<TabItem value="Ap-Status" label="Ap-Status">

| Métrique                          | Unité |
|:----------------------------------|:------|
| accesspoints.total.count          | count |
| accesspoints.associated.count     | count |
| accesspoints.disassociating.count | count |
| accesspoints.downloading.count    | count |
| accesspoints.enabled.count        | count |
| accesspoints.disabled.count       | count |
| ap~status                         | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Ap-Status-Global" label="Ap-Status-Global">

| Métrique                          | Unité |
|:----------------------------------|:------|
| accesspoints.total.count          | count |
| accesspoints.associated.count     | count |
| accesspoints.disassociating.count | count |
| accesspoints.downloading.count    | count |
| accesspoints.enabled.count        | count |
| accesspoints.disabled.count       | count |
| ap~status                         | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Ap-Users*" label="Ap-Users*">

| Métrique                    | Unité |
|:----------------------------|:------|
| users.total.count           | count |
| users.idle.count            | count |
| users.aaapending.count      | count |
| users.authenticated.count   | count |
| users.associated.count      | count |
| users.disassociated.count   | count |
| users.powersave.count       | count |
| users.tobedeleted.count     | count |
| users.probing.count         | count |
| users.blacklisted.count     | count |
| ssid#ssid.users.total.count | count |

> Concerne les modèles de service suivants : Ap-Users (Net-Cisco-Wlc-Ap-Users-SNMP-custom) et Ap-Users (Net-Cisco-Wlc-Ap-Users-SNMP-Access-Point-custom).

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                   | Unité |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Métrique            | Unité |
|:--------------------|:------|
| power supply status |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| interface status                                     | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond | b/s   |

> Concerne les modèles de service suivants : Traffic-Generic-Id, Traffic-Generic-Name, Traffic-Global

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre ressource en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [CISCO WLC](https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/snmp.html)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

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
dnf install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cisco WLC**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Cisco-Wlc-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Wlc-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-cisco-wlc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Wlc-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Wlc-SNMP-custom" label="Net-Cisco-Wlc-SNMP-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Wlc-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Net-Cisco-Wlc-SNMP-Access-Point-custom" label="Net-Cisco-Wlc-SNMP-Access-Point-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Wlc-SNMP-Access-Point-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro               | Description                                                                                           | Valeur par défaut | Obligatoire |
|:--------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APNAME              | Filter access point name                                                                              |                   |             |
| WLCHOSTNAME         | Name or address of the host to monitor                                                                |                   |             |
| WLCSNMPCOMMUNITY    | SNMP community . It is recommended to use a read-only community                                       |                   |             |
| WLCSNMPVERSION      | Version of the SNMP protocol. 1 for SNMP v1 , 2 for SNMP v2c, 3 for SNMP v3                           |                   |             |
| WLCSNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/onprem/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Ap-Channel-Interference-Global" label="Ap-Channel-Interference-Global">

| Macro                     | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER                    | Filter access point name (can be a regexp)                                                          | .*                |             |
| FILTERGROUP               | Filter access point group (can be a regexp)                                                         |                   |             |
| WARNINGINTERFERENCEPOWER  | Thresholds                                                                                          |                   |             |
| CRITICALINTERFERENCEPOWER | Thresholds                                                                                          |                   |             |
| WARNINGINTERFERENCEUTIL   | Thresholds                                                                                          |                   |             |
| CRITICALINTERFERENCEUTIL  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Ap-Channel-Noise-Global" label="Ap-Channel-Noise-Global">

| Macro              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER             | Filter access point name (can be a regexp)                                                          | .*                |             |
| FILTERGROUP        | Filter access point group (can be a regexp)                                                         |                   |             |
| WARNINGNOISEPOWER  | Thresholds                                                                                          |                   |             |
| CRITICALNOISEPOWER | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Ap-Status" label="Ap-Status">

| Macro          | Description                                                                                                                                                                                                                 | Valeur par défaut                                                     | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "enable" and %{opstatus} !~ /associated\|downloading/'). You can use the following variables: %{admstatus}, %{opstatus}, %{display} | %{admstatus} eq "enable" and %{opstatus} !~ /associated\|downloading/ |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                     |                                                                       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                         | --verbose                                                             |             |

</TabItem>
<TabItem value="Ap-Status-Global" label="Ap-Status-Global">

| Macro                                     | Description                                                                                                                                                                                                                 | Valeur par défaut                                                     | Obligatoire |
|:------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:-----------:|
| FILTER                                    | Filter access point name (can be a regexp)                                                                                                                                                                                  |                                                                       |             |
| FILTERGROUP                               | Filter access point group (can be a regexp)                                                                                                                                                                                 |                                                                       |             |
| WARNINGRADIOINTERFACECHANNELSUTILIZATION  | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| CRITICALRADIOINTERFACECHANNELSUTILIZATION | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| CRITICALRADIOSTATUS                       | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "enable" and %{opstatus} eq "down"'). You can use the following variables: %{admstatus}, %{opstatus}, %{display}                    | %{admstatus} eq "enable" and %{opstatus} eq "down"                    |             |
| WARNINGRADIOSTATUS                        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                     |                                                                       |             |
| CRITICALSTATUS                            | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "enable" and %{opstatus} !~ /associated\|downloading/'). You can use the following variables: %{admstatus}, %{opstatus}, %{display} | %{admstatus} eq "enable" and %{opstatus} !~ /associated\|downloading/ |             |
| WARNINGSTATUS                             | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                     |                                                                       |             |
| WARNINGTOTAL                              | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| CRITICALTOTAL                             | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| WARNINGTOTALASSOCIATED                    | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| CRITICALTOTALASSOCIATED                   | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| WARNINGTOTALDISABLED                      | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| CRITICALTOTALDISABLED                     | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| WARNINGTOTALDISASSOCIATING                | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| CRITICALTOTALDISASSOCIATING               | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| WARNINGTOTALENABLED                       | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| CRITICALTOTALENABLED                      | Thresholds                                                                                                                                                                                                                  |                                                                       |             |
| EXTRAOPTIONS                              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                         | --verbose                                                             |             |

</TabItem>
<TabItem value="Ap-Users" label="Ap-Users">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERGROUP   | Filter by access point group (can be a regexp)                                                      |                   |             |
| WARNINGTOTAL  | Thresholds                                                                                          |                   |             |
| CRITICALTOTAL | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                        |                   |             |
| CRITICAL     | Critical threshold in percent                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'psu'                                             | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING           | Thresholds                                                                                          |                   |             |
| CRITICAL          | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACEID  | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                |                   |             |
| WARNINGIN    | Thresholds                                                                                          | 80                |             |
| CRITICALIN   | Thresholds                                                                                          | 90                |             |
| WARNINGOUT   | Thresholds                                                                                          | 80                |             |
| CRITICALOUT  | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERFACENAME | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                |                   |             |
| WARNINGIN     | Thresholds                                                                                          | 80                |             |
| CRITICALIN    | Thresholds                                                                                          | 90                |             |
| WARNINGOUT    | Thresholds                                                                                          | 80                |             |
| CRITICALOUT   | Thresholds                                                                                          | 90                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Macro          | Description                                                                                                                                                                                                         | Valeur par défaut                            | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|:-----------:|
| FILTER         | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                                                                                                                                | .*                                           |             |
| WARNINGIN      | Thresholds                                                                                                                                                                                                          | 80                                           |             |
| CRITICALIN     | Thresholds                                                                                                                                                                                                          | 90                                           |             |
| WARNINGOUT     | Thresholds                                                                                                                                                                                                          | 80                                           |             |
| CRITICALOUT    | Thresholds                                                                                                                                                                                                          | 90                                           |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} | %{admstatus} eq "up" and %{opstatus} ne "up" |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                            |                                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                 | --verbose                                    |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_cisco_wlc.pl \
	--plugin=network::cisco::wlc::snmp::plugin \
	--mode=ap-status \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
    --filter-name='ap-1200d-emb' \
    --use-new-perfdata \
    --add-radio-interfaces \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Access points total: 2, associated: 2, disassociating: 0, enabled: 2, disabled: 0 - All access points are ok | 'accesspoints.total.count'=2;;;0; 'accesspoints.associated.count'=2;;;0; 'accesspoints.disassociating.count'=0;;;0; 'accesspoints.downloading.count'=0;;;0; 'accesspoints.enabled.count'=2;;;0; 'accesspoints.disabled.count'=0;;;0; 'ap-1200d-emb-2~0#accesspoint.radio.interface.channels.utilization.percentage'=54%;;;0;100 'ap-1200d-emb-4~0#accesspoint.radio.interface.channels.utilization.percentage'=36%;;;0;100
Model: AIR-CT5508-K9
checking access point 'ap-1200d-emb-2'
    status: associated
    radio interface '0' status: up, channels utilization: 54 %
    radio interface '1' is disabled
checking access point 'ap-1200d-emb-4'
    status: associated
    radio interface '0' status: up, channels utilization: 36 %
    radio interface '1' is disabled
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
/usr/lib/centreon/plugins/centreon_cisco_wlc.pl \
	--plugin=network::cisco::wlc::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                     | Modèle de service associé                                                                                                                      |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|
| ap-channel-interference  | Net-Cisco-Wlc-Ap-Channel-Interference-Global-SNMP-custom                                                                                       |
| ap-channel-noise         | Net-Cisco-Wlc-Ap-Channel-Noise-Global-SNMP-custom                                                                                              |
| ap-status                | Net-Cisco-Wlc-Ap-Status-SNMP-Access-Point-custom<br />Net-Cisco-Wlc-Ap-Status-Global-SNMP-custom                                               |
| ap-users                 | Net-Cisco-Wlc-Ap-Users-SNMP-Access-Point-custom<br />Net-Cisco-Wlc-Ap-Users-SNMP-custom                                                        |
| cpu                      | Net-Cisco-Wlc-Cpu-SNMP-custom                                                                                                                  |
| discovery                | Used for host discovery                                                                                                                        |
| hardware                 | Net-Cisco-Wlc-Hardware-Global-SNMP-custom                                                                                                      |
| interfaces               | Net-Cisco-Wlc-Traffic-Generic-Id-SNMP-custom<br />Net-Cisco-Wlc-Traffic-Generic-Name-SNMP-custom<br />Net-Cisco-Wlc-Traffic-Global-SNMP-custom |
| list-aps                 | Used for service discovery                                                                                                                     |
| list-groups              | Not used in this Monitoring Connector                                                                                                          |
| list-interfaces          | Used for service discovery                                                                                                                     |
| list-radius-acc-servers  | Not used in this Monitoring Connector                                                                                                          |
| list-radius-auth-servers | Not used in this Monitoring Connector                                                                                                          |
| memory                   | Net-Cisco-Wlc-Memory-SNMP-custom                                                                                                               |
| radius-acc-servers       | Not used in this Monitoring Connector                                                                                                          |
| radius-auth-servers      | Not used in this Monitoring Connector                                                                                                          |

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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
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
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
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
<TabItem value="Ap-Channel-Interference-Global" label="Ap-Channel-Interference-Global">

| Option                   | Description                                                                                       |
|:-------------------------|:--------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='interference-util'   |
| --filter-name            | Filter access point name (can be a regexp).                                                       |
| --filter-group           | Filter access point group (can be a regexp).                                                      |
| --filter-channel         | Filter channel (can be a regexp). Example: --filter-channel='slot0:channel3'                      |
| --warning-* --critical-* | Thresholds. Can be: 'interference-power', 'interference-util' (%).                                |

</TabItem>
<TabItem value="Ap-Channel-Noise-Global" label="Ap-Channel-Noise-Global">

| Option                   | Description                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------|
| --filter-name            | Filter access point name (can be a regexp).                                    |
| --filter-group           | Filter access point group (can be a regexp).                                   |
| --filter-channel         | Filter channel (can be a regexp). Example: --filter-channel='slot0:channel3'   |
| --warning-* --critical-* | Thresholds. Can be: 'noise-power' (dBm).                                       |

</TabItem>
<TabItem value="Ap-Status" label="Ap-Status">

| Option                   | Description                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^total-disassociating\|total-associated$'                                                                                                        |
| --filter-name            | Filter access point name (can be a regexp).                                                                                                                                                                                   |
| --filter-group           | Filter access point group (can be a regexp).                                                                                                                                                                                  |
| --add-radio-interfaces   | Monitor radio interfaces channels utilization.                                                                                                                                                                                |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                       |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "enable" and %{opstatus} !~ /associated\|downloading/'). You can use the following variables: %{admstatus}, %{opstatus}, %{display}   |
| --warning-radio-status   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                       |
| --critical-radio-status  | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "enable" and %{opstatus} eq "down"'). You can use the following variables: %{admstatus}, %{opstatus}, %{display}                      |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'total-associated', 'total-disassociating', 'total-downloading', 'total-enabled', 'total-disabled', 'radio-interface-channels-utilization' (%).                                                  |

</TabItem>
<TabItem value="Ap-Status-Global" label="Ap-Status-Global">

| Option                   | Description                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^total-disassociating\|total-associated$'                                                                                                        |
| --filter-name            | Filter access point name (can be a regexp).                                                                                                                                                                                   |
| --filter-group           | Filter access point group (can be a regexp).                                                                                                                                                                                  |
| --add-radio-interfaces   | Monitor radio interfaces channels utilization.                                                                                                                                                                                |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                       |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "enable" and %{opstatus} !~ /associated\|downloading/'). You can use the following variables: %{admstatus}, %{opstatus}, %{display}   |
| --warning-radio-status   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{display}                                                                                       |
| --critical-radio-status  | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "enable" and %{opstatus} eq "down"'). You can use the following variables: %{admstatus}, %{opstatus}, %{display}                      |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'total-associated', 'total-disassociating', 'total-downloading', 'total-enabled', 'total-disabled', 'radio-interface-channels-utilization' (%).                                                  |

</TabItem>
<TabItem value="Ap-Users*" label="Ap-Users*">

| Option                   | Description                                                                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^total\|total-idle$'                                                                                                                               |
| --filter-ssid            | Filter by SSID (can be a regexp).                                                                                                                                                                                               |
| --filter-ap              | Filter by access point name (can be a regexp).                                                                                                                                                                                  |
| --filter-group           | Filter by access point group (can be a regexp).                                                                                                                                                                                 |
| --ignore-ap-users        | Unmonitor users by access points.                                                                                                                                                                                               |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'total-idle', 'total-aaapending', 'total-authenticated', 'total-associated', 'total-powersave', 'total-disassociated', 'total-tobedeleted', 'total-probing', 'total-blacklisted', 'ssid', 'ap'.    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                     | Description                       |
|:---------------------------|:----------------------------------|
| --warning-cpu-utilization  | Warning threshold in percent.     |
| --critical-cpu-utilization | Critical threshold in percent.    |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Option               | Description                                                                                                                                                                                                                   |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'psu'.                                                                                                                                                                      |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=psu). You can also exclude items from specific instances: --filter=psu,1                                                                                 |
| --absent-problem     | Return an error if an entity is not 'present' (default is skipping) (comma seperated list) Can be specific or global: --absent-problem=psu,1                                                                                  |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                    |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='psu,WARNING,not operational'    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                             |
|:-------------------------|:------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                   | Description                                                                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                             |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                         |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                      |
| --name                   | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter             | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display            | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_wlc.pl \
	--plugin=network::cisco::wlc::snmp::plugin \
	--mode=ap-channel-interference \
	--help
```
