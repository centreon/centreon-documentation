---
id: network-nokia-timos-snmp
title: Nokia TiMos
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Nokia TiMos** apporte un modèle d'hôte :

* **Net-Nokia-Timos-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Nokia-Timos-SNMP-custom" label="Net-Nokia-Timos-SNMP-custom">

| Alias    | Modèle de service                    | Description                                    |
|:---------|:-------------------------------------|:-----------------------------------------------|
| Cpu      | Net-Nokia-Timos-Cpu-SNMP-custom      | Contrôle du taux d'utilisation des processeurs |
| Hardware | Net-Nokia-Timos-Hardware-SNMP-custom | Contrôle le matériel                           |
| Memory   | Net-Nokia-Timos-Memory-SNMP-custom   | Contrôle du taux d'utilisation des mémoires     |
| Uptime   | Net-Nokia-Timos-Uptime-SNMP-custom   | Contrôle l'uptime                              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Nokia-Timos-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service                      | Description                               | Découverte |
|:-----------|:---------------------------------------|:------------------------------------------|:----------:|
| Bgp-Usage  | Net-Nokia-Timos-Bgp-Usage-SNMP-custom  | Contrôle l'utilisation BGP                | X          |
| Interfaces | Net-Nokia-Timos-Interfaces-SNMP-custom | Contrôle les interfaces                   | X          |
| Isis-Usage | Net-Nokia-Timos-Isis-Usage-SNMP-custom | Contrôle l'utilisation du protocole IS-IS | X          |
| L2tp-Usage | Net-Nokia-Timos-L2tp-Usage-SNMP-custom | Contrôle l'utilisation des tunnels L2TP   |            |
| Ldp-Usage  | Net-Nokia-Timos-Ldp-Usage-SNMP-custom  | Contrôle l'utilisation LDP                | X          |
| Sap-Usage  | Net-Nokia-Timos-Sap-Usage-SNMP-custom  | Contrôle l'utilisation SAP                | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                         |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **Net-Nokia-Timos-SNMP-custom** |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                         | Description                                                             |
|:----------------------------------------|:------------------------------------------------------------------------|
| Net-Nokia-Timos-SNMP-Bgp-Name           | Découvre les sessions BGP                                                                        |
| Net-Nokia-Timos-SNMP-Isis-Name          | Découvre les instances IS-IS                                                                        |
| Net-Nokia-Timos-SNMP-Ldp-Name           | Découvre les sessions LDP                                                                        |
| Net-Nokia-Timos-SNMP-Packet-Errors-Name | Découvre les interfaces réseau et contrôle les paquets erronés et rejetés   |
| Net-Nokia-Timos-SNMP-Sap-Name           | Découvre les Points d'Accès de Service                                                                        |
| Net-Nokia-Timos-SNMP-Traffic-Name       | Découvre les interfaces réseau et en supervise le statut et l'utilisation |
| Net-Nokia-Timos-SNMP-Vrtr-Name          | Découvre les routeurs virtuels                                                                        |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Bgp-Usage" label="Bgp-Usage">

| Métrique                | Unité |
|:------------------------|:------|
| *bgp*#status            | N/A   |
| *bgp*#active-prefixes   | N/A   |
| *bgp*#sent-prefixes     | N/A   |
| *bgp*#received-prefixes | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique    | Unité |
|:------------|:------|
| usage       | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                            | Unité |
|:------------------------------------|:------|
| hardware.entity.temperature.celsius | C     |

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
<TabItem value="Isis-Usage" label="Isis-Usage">

| Métrique                    | Unité |
|:----------------------------|:------|
| *isis*#total-int-inservice  | N/A   |
| *isis*#total-int-outservice | N/A   |
| *int*#status                | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="L2tp-Usage" label="L2tp-Usage">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| *tunnel*#status                    | N/A   |
| *vrtr*#vrtr-tunnel-total           | N/A   |
| *vrtr*#vrtr-tunnel-active-sessions | N/A   |
| *vrtr*#vrtr-tunnel-total-sessions  | N/A   |
| *peer*#peer-tunnel-total           | N/A   |
| *peer*#peer-tunnel-active-sessions | N/A   |
| *peer*#peer-tunnel-total-sessions  | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Ldp-Usage" label="Ldp-Usage">

| Métrique                     | Unité |
|:-----------------------------|:------|
| *ldp*#status                 | N/A   |
| *ldp*#ipv4-active-sessions   | N/A   |
| *ldp*#ipv4-active-link-adj   | N/A   |
| *ldp*#ipv4-active-target-adj | N/A   |
| *ldp*#ipv4-oper-down-events  | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique    | Unité |
|:------------|:------|
| used        | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Sap-Usage" label="Sap-Usage">

| Métrique                    | Unité |
|:----------------------------|:------|
| *sap*#status                | N/A   |
| *sap*#traffic-in-below-cir  | b/s   |
| *sap*#traffic-in-above-cir  | b/s   |
| *sap*#traffic-out-below-cir | b/s   |
| *sap*#traffic-out-above-cir | b/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

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
dnf install centreon-pack-network-nokia-timos-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-nokia-timos-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-nokia-timos-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-nokia-timos-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Nokia TiMos**
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
dnf install centreon-plugin-Network-Nokia-Timos-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Nokia-Timos-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-nokia-timos-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Nokia-Timos-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Nokia-Timos-SNMP-custom**.

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
<TabItem value="Bgp-Usage" label="Bgp-Usage">

| Macro            | Description                                                                                                                                                    | Valeur par défaut          | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| FILTERNAME       | Filter by BGP name (can be a regexp). Syntax: VrtrName:peeraddr:peerAS:description                                                                             |                            |             |
| ACTIVEPREFIXES   | Critical threshold                                                                                                                                             |                            |             |
| SENTPREFIXES     | Critical threshold                                                                                                                                             |                            |             |
| RECEIVEDPREFIXES | Critical threshold                                                                                                                                             |                            |             |
| CRITICALSTATUS   | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} =~ /outOfService/') You can use the following variables: %\{display\}, %\{state\} | %\{state\} =~ /outOfService/ |             |
| WARNINGSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{state\}                                         |                            |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                             | --verbose                  |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE  | Warning threshold                                                                                  | 60                |             |
| CRITICALUSAGE | Critical threshold                                                                                 | 80                |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                                                                                         | Valeur par défaut                                     | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| OIDFILTER          | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                          | ifname                                                |             |
| OIDDISPLAY         | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                 | ifname                                                |             |
| INTERFACENAME      | Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored. To filter on interface names, see --name                                                               |                                                       |             |
| WARNINGINDISCARD   | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALINDISCARD  | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGINERROR     | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALINERROR    | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGINTRAFFIC   | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALINTRAFFIC  | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALOUTDISCARD | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGOUTERROR    | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALOUTERROR   | Thresholds                                                                                                                                                                                                          |                                                       |             |
| WARNINGOUTTRAFFIC  | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALOUTTRAFFIC | Thresholds                                                                                                                                                                                                          |                                                       |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%\{admstatus\} eq "up" and %\{opstatus\} ne "up"'). You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\} | %\{admstatus\} eq "up" and %\{opstatus\} !~ /up\|dormant/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                            |                                                       |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                  | --verbose --no-skipped-counters                       |             |

</TabItem>
<TabItem value="Isis-Usage" label="Isis-Usage">

| Macro              | Description                                                                                                                                                                                                                              | Valeur par défaut                                                            | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------|:-----------:|
| FILTERNAME         | Filter by instance name (can be a regexp)                                                                                                                                                                                                |                                                                              |             |
| TOTALINTINSERVICE  | Critical threshold                                                                                                                                                                                                                       |                                                                              |             |
| TOTALINTOUTSERVICE | Critical threshold                                                                                                                                                                                                                       |                                                                              |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{admin\_state} eq "inService" and %{oper\_state} !~ /inService\|transition/'). You can use the following variables: %\{display\}, %{oper\_state}, %{admin\_state} | %{admin\_state} eq "inService" and %{oper\_state} !~ /inService\|transition/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %{oper\_state}, %{admin\_state}                                                                                            |                                                                              |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                       | --verbose                                                                    |             |

</TabItem>
<TabItem value="L2tp-Usage" label="L2tp-Usage">

| Macro                            | Description                                                                                                             | Valeur par défaut | Obligatoire |
|:---------------------------------|:------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERVRTRNAME                   | Filter by vrtr name (can be a regexp)                                                                                   |                   |             |
| FILTERPEERADDR                   | Filter by peer addr (can be a regexp)                                                                                   |                   |             |
| WARNINGPEERTUNNELACTIVESESSIONS  | Warning threshold                                                                                                       |                   |             |
| CRITICALPEERTUNNELACTIVESESSIONS | Critical threshold                                                                                                      |                   |             |
| WARNINGPEERTUNNELTOTAL           | Warning threshold                                                                                                       |                   |             |
| CRITICALPEERTUNNELTOTAL          | Critical threshold                                                                                                      |                   |             |
| WARNINGPEERTUNNELTOTALSESSIONS   | Warning threshold                                                                                                       |                   |             |
| CRITICALPEERTUNNELTOTALSESSIONS  | Critical threshold                                                                                                      |                   |             |
| WARNINGSTATUS                    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{state\}  |                   |             |
| CRITICALSTATUS                   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{display\}, %\{state\} |                   |             |
| WARNINGVRTRTUNNELACTIVESESSIONS  | Warning threshold                                                                                                       |                   |             |
| CRITICALVRTRTUNNELACTIVESESSIONS | Critical threshold                                                                                                      |                   |             |
| WARNINGVRTRTUNNELTOTAL           | Warning threshold                                                                                                       |                   |             |
| CRITICALVRTRTUNNELTOTAL          | Critical threshold                                                                                                      |                   |             |
| WARNINGVRTRTUNNELTOTALSESSIONS   | Warning threshold                                                                                                       |                   |             |
| CRITICALVRTRTUNNELTOTALSESSIONS  | Critical threshold                                                                                                      |                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                      | --verbose         |             |

</TabItem>
<TabItem value="Ldp-Usage" label="Ldp-Usage">

| Macro                       | Description                                                                                                                                                                                                                                          | Valeur par défaut                                                                  | Obligatoire |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------|:-----------:|
| FILTERNAME                  | Filter by LDP instance name (can be a regexp)                                                                                                                                                                                                        |                                                                                    |             |
| WARNINGIPV4ACTIVELINKADJ    | Warning threshold                                                                                                                                                                                                                                    |                                                                                    |             |
| CRITICALIPV4ACTIVELINKADJ   | Critical threshold                                                                                                                                                                                                                                   |                                                                                    |             |
| WARNINGIPV4ACTIVESESSIONS   | Warning threshold                                                                                                                                                                                                                                    |                                                                                    |             |
| CRITICALIPV4ACTIVESESSIONS  | Critical threshold                                                                                                                                                                                                                                   |                                                                                    |             |
| WARNINGIPV4ACTIVETARGETADJ  | Warning threshold                                                                                                                                                                                                                                    |                                                                                    |             |
| CRITICALIPV4ACTIVETARGETADJ | Critical threshold                                                                                                                                                                                                                                   |                                                                                    |             |
| WARNINGIPV4OPERDOWNEVENTS   | Warning threshold                                                                                                                                                                                                                                    |                                                                                    |             |
| CRITICALIPV4OPERDOWNEVENTS  | Critical threshold                                                                                                                                                                                                                                   |                                                                                    |             |
| CRITICALSTATUS              | Define the conditions to match for the status to be CRITICAL (default: '%{admin\_state} eq "inService" and %{ipv4\_oper\_state} !~ /inService\|transition/'). You can use the following variables: %{ipv4\_oper\_state}, %{admin\_state}, %\{display\} | %{admin\_state} eq "inService" and %{ipv4\_oper\_state} !~ /inService\|transition/ |             |
| WARNINGSTATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: %{ipv4\_oper\_state}, %{admin\_state}, %\{display\}                                                                                                  |                                                                                    |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                   | --verbose                                                                          |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUSAGE  | Warning threshold (in percent)                                                                     |                   |             |
| CRITICALUSAGE | Critical threshold (in percent)                                                                    |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Sap-Usage" label="Sap-Usage">

| Macro              | Description                                                                                                                                                                              | Valeur par défaut                                  | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|:-----------:|
| FILTERNAME         | Filter by virtual server name (can be a regexp)                                                                                                                                          |                                                    |             |
| TRAFFICINBELOWCIR  | Warning threshold                                                                                                                                                                        |                                                    |             |
| TRAFFICINABOVECIR  | Warning threshold                                                                                                                                                                        |                                                    |             |
| TRAFFICOUTBELOWCIR | Warning threshold                                                                                                                                                                        |                                                    |             |
| TRAFFICOUTABOVECIR | Warning threshold                                                                                                                                                                        |                                                    |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{admin\_state} eq "up" and %{oper\_state} !~ /up/'). You can use the following variables: %\{status\}, %\{display\} | %{admin\_state} eq "up" and %{oper\_state} !~ /up/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                                                                  |                                                    |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                       | --verbose                                          |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                  |                   |             |
| CRITICAL     | Critical threshold                                                                                 |                   |             |
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
/usr/lib/centreon/plugins/centreon_nokia_timos_snmp.pl \
	--plugin=network::nokia::timos::snmp::plugin \
	--mode=interfaces \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--interface='' \
	--name \
	--add-status \
	--add-traffic \
	--add-errors \
	--warning-status='' \
	--critical-status='%\{admstatus\} eq "up" and %\{opstatus\} !~ /up|dormant/' \
	--warning-in-traffic='' \
	--critical-in-traffic='' \
	--warning-out-traffic='' \
	--critical-out-traffic='' \
	--warning-in-discard='' \
	--critical-in-discard='' \
	--warning-out-discard='' \
	--critical-out-discard='' \
	--warning-in-error='' \
	--critical-in-error='' \
	--warning-out-error='' \
	--critical-out-error='' \
	--oid-filter='ifname' \
	--oid-display='ifname' \
	--verbose \
	--no-skipped-counters
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All interfaces are ok | '*interface_name*#status'='up';;;;'*interface_name*#interface.traffic.in.bitspersecond'=20b/s;;;;'*interface_name*#interface.traffic.out.bitspersecond'=20b/s;;;;'*interface_name*#interface.packets.in.discard.percentage'=10%;;;;100'*interface_name*#interface.packets.in.error.percentage'=10%;;;;100'*interface_name*#interface.packets.out.discard.percentage'=10%;;;;100'*interface_name*#interface.packets.out.error.percentage'=10%;;;;100
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
/usr/lib/centreon/plugins/centreon_nokia_timos_snmp.pl \
	--plugin=network::nokia::timos::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                          | Modèle de service associé              |
|:------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
| bgp-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/bgpusage.pm)]   | Net-Nokia-Timos-Bgp-Usage-SNMP-custom  |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/cpu.pm)]              | Net-Nokia-Timos-Cpu-SNMP-custom        |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/hardware.pm)]    | Net-Nokia-Timos-Hardware-SNMP-custom   |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/interfaces.pm)]           | Net-Nokia-Timos-Interfaces-SNMP-custom |
| isis-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/isisusage.pm)] | Net-Nokia-Timos-Isis-Usage-SNMP-custom |
| l2tp-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/l2tpusage.pm)] | Net-Nokia-Timos-L2tp-Usage-SNMP-custom |
| ldp-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/ldpusage.pm)]   | Net-Nokia-Timos-Ldp-Usage-SNMP-custom  |
| list-bgp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/listbgp.pm)]     | Used for service discovery             |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/listinterfaces.pm)]  | Used for service discovery             |
| list-isis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/listisis.pm)]   | Used for service discovery             |
| list-ldp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/listldp.pm)]     | Used for service discovery             |
| list-sap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/listsap.pm)]     | Used for service discovery             |
| list-vrtr [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/listvrtr.pm)]   | Used for service discovery             |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/memory.pm)]        | Net-Nokia-Timos-Memory-SNMP-custom     |
| sap-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/nokia/timos/snmp/mode/sapusage.pm)]   | Net-Nokia-Timos-Sap-Usage-SNMP-custom  |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                   | Net-Nokia-Timos-Uptime-SNMP-custom     |

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
<TabItem value="Bgp-Usage" label="Bgp-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'active-prefixes', 'sent-prefixes', 'received-prefixes'.                                                                                                                                                           |
| --critical-*           | Critical threshold. Can be: 'active-prefixes', 'sent-prefixes', 'received-prefixes'.                                                                                                                                                          |
| --warning-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{state\}                                                                                                                        |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} =~ /outOfService/') You can use the following variables: %\{display\}, %\{state\}                                                                                |
| --filter-name          | Filter by BGP name (can be a regexp). Syntax: VrtrName:peeraddr:peerAS:description                                                                                                                                                            |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option           | Description            |
|:-----------------|:-----------------------|
| --warning-usage  | Warning threshold.     |
| --critical-usage | Critical threshold.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                                     |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'entity'.                                                                                                                                                                     |
| --filter             | Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter=entity,fan.1                                                                                                             |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                      |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='entity,fan..*,CRITICAL,booting'   |
| --warning            | Set warning threshold (syntax: type,regexp,threshold) Example: --warning='temperature,.*,20'                                                                                                                                    |
| --critical           | Set critical threshold (syntax: type,regexp,threshold) Example: --critical='temperature,.*,30'                                                                                                                                  |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

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
| --check-metrics                                 | If the expression is true, metrics are checked (default: '%\{opstatus\} eq "up"').                                                                                                                                                                                                           |
| --warning-status                                | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                                                                                                   |
| --critical-status                               | Define the conditions to match for the status to be CRITICAL (default: '%\{admstatus\} eq "up" and %\{opstatus\} ne "up"'). You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                                        |
| --warning-* --critical-*                        | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   |
| --units-traffic                                 | Units of thresholds for the traffic (default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      |
| --units-errors                                  | Units of thresholds for errors/discards (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          |
| --units-cast                                    | Units of thresholds for communication types (default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      |
| --nagvis-perfdata                               | Display traffic perfdata to be compatible with NagVis widget.                                                                                                                                                                                                                              |
| --interface                                     | Define the interface filter on IDs (OID indexes, e.g.: 1,2,...). If empty, all interfaces will be monitored. To filter on interface names, see --name.                                                                                                                                     |
| --name                                          | With this option, the interfaces will be filtered by name (givenin option --interface) instead of OID index. The name matching mode supports regular expressions.                                                                                                                          |
| --regex-id                                      | With this option, interface IDs will be filtered using the --interface parameter as a regular expression instead of a list of IDs.                                                                                                                                                         |
| --speed                                         | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 |
| --speed-in                                      | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          |
| --speed-out                                     | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          |
| --map-speed-dsl                                 | Get interface speed configuration for interfaces of type 'ADSL' and 'VDSL2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                        |
| --force-counters64                              | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    |
| --force-counters32                              | Force to use 32-bits counters (even with SNMP versions 2c and 3). To use when 64 bits counters are buggy.                                                                                                                                                                                  |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                |
| --oid-filter                                    | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                |
| --oid-display                                   | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       |
| --oid-extra-display                             | Add an OID to display.                                                                                                                                                                                                                                                                     |
| --display-transform-src --display-transform-dst | Modify the interface name displayed by using a regular expression.  Example: adding --display-transform-src='eth' --display-transform-dst='ens' will replace all occurrences of 'eth' with 'ens'                                                                                           |
| --show-cache                                    | Display cache interface data.                                                                                                                                                                                                                                                              |

</TabItem>
<TabItem value="Isis-Usage" label="Isis-Usage">

| Option            | Description                                                                                                                                                                                                                                 |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*       | Warning threshold. Can be: 'total-int-inservice', 'total-int-outservice'.                                                                                                                                                                   |
| --critical-*      | Critical threshold. Can be: 'total-int-inservice', 'total-int-outservice'.                                                                                                                                                                  |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %{oper\_state}, %{admin\_state}.                                                                                              |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%{admin\_state} eq "inService" and %{oper\_state} !~ /inService\|transition/'). You can use the following variables: %\{display\}, %{oper\_state}, %{admin\_state}.   |
| --filter-name     | Filter by instance name (can be a regexp).                                                                                                                                                                                                  |

</TabItem>
<TabItem value="L2tp-Usage" label="L2tp-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'vrtr-tunnel-total', 'vrtr-tunnel-active-sessions', 'vrtr-tunnel-total-sessions', 'peer-tunnel-total', 'peer-tunnel-active-sessions', 'peer-tunnel-total-sessions'.                                                |
| --critical-*           | Critical threshold. Can be: 'vrtr-tunnel-total', 'vrtr-tunnel-active-sessions', 'vrtr-tunnel-total-sessions', 'peer-tunnel-total', 'peer-tunnel-active-sessions', 'peer-tunnel-total-sessions'.                                               |
| --warning-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{display\}, %\{state\}                                                                                                                        |
| --critical-status      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{display\}, %\{state\}                                                                                                                       |
| --filter-vrtr-name     | Filter by vrtr name (can be a regexp).                                                                                                                                                                                                        |
| --filter-peer-addr     | Filter by peer addr (can be a regexp).                                                                                                                                                                                                        |

</TabItem>
<TabItem value="Ldp-Usage" label="Ldp-Usage">

| Option                 | Description                                                                                                                                                                                                                                            |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                             |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                        |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                              |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                                    |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                         |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                 |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                         |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.            |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                  |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                           |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                     |
| --warning-*            | Warning threshold. Can be: 'ipv4-oper-down-events', 'ipv4-active-sessions', 'ipv4-active-link-adj', 'ipv4-active-target-adj'.                                                                                                                          |
| --critical-*           | Critical threshold. Can be: 'ipv4-oper-down-events', 'ipv4-active-sessions', 'ipv4-active-link-adj', 'ipv4-active-target-adj'.                                                                                                                         |
| --warning-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{ipv4\_oper\_state}, %{admin\_state}, %\{display\}                                                                                                    |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{admin\_state} eq "inService" and %{ipv4\_oper\_state} !~ /inService\|transition/'). You can use the following variables: %{ipv4\_oper\_state}, %{admin\_state}, %\{display\}   |
| --filter-name          | Filter by LDP instance name (can be a regexp).                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description                         |
|:-----------------|:------------------------------------|
| --warning-usage  | Warning threshold (in percent).     |
| --critical-usage | Critical threshold (in percent).    |

</TabItem>
<TabItem value="Sap-Usage" label="Sap-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                                                                                                                       |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{admin\_state} eq "up" and %{oper\_state} !~ /up/'). You can use the following variables: %\{status\}, %\{display\}                                                      |
| --warning-*            | Warning threshold. Can be: 'traffic-in-above-cir', 'traffic-in-below-cir', 'traffic-out-above-cir', 'traffic-out-below-cir'.                                                                                                                  |
| --critical-*           | Critical threshold. Can be: 'traffic-in-above-cir', 'traffic-in-below-cir', 'traffic-out-above-cir', 'traffic-out-below-cir'.                                                                                                                 |
| --filter-name          | Filter by virtual server name (can be a regexp).                                                                                                                                                                                              |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-uptime       | Warning threshold.                                                                                                                                                                                                                            |
| --critical-uptime      | Critical threshold.                                                                                                                                                                                                                           |
| --add-sysdesc          | Display system description.                                                                                                                                                                                                                   |
| --force-oid            | Can choose your oid (numeric format only).                                                                                                                                                                                                    |
| --check-overload       | Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.                                                                                          |
| --reboot-window        | To be used with check-overload option. Time in milliseconds (default: 5000) You increase the chance of not missing a reboot if you decrease that value.                                                                                       |
| --unit                 | Select the time unit for thresholds. May be 's' for seconds, 'm'for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.                                                                                                  |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_nokia_timos_snmp.pl \
	--plugin=network::nokia::timos::snmp::plugin \
	--mode=interfaces \
	--help
```
