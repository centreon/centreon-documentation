---
id: network-firewalls-paloalto-standard-snmp
title: Palo Alto firewall SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Palo Alto firewall SNMP** apporte un modèle d'hôte :

* **Net-PaloAlto-Standard-SNMP**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-PaloAlto-Standard-SNMP" label="Net-PaloAlto-Standard-SNMP">

| Alias    | Modèle de service                   | Description                                                |
|:---------|:------------------------------------|:-----------------------------------------------------------|
| Cpu      | Net-PaloAlto-Standard-Cpu-SNMP      | Contrôle l'utilisation CPU                                 |
| Hardware | Net-PaloAlto-Standard-Hardware-SNMP | Contrôle l'état des composants hardware de la MIB Standard |
| Memory   | Net-PaloAlto-Standard-Memory-SNMP   | Contrôle l'utilisation mémoire                             |
| Sessions | Net-PaloAlto-Standard-Sessions-SNMP | Contrôle les sessions                                      |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-PaloAlto-Standard-SNMP** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                  | Modèle de service                         | Description                                  | Découverte |
|:-----------------------|:------------------------------------------|:---------------------------------------------|:-----------|
| Cluster-Status         | Net-PaloAlto-Standard-Cluster-Status-SNMP | Contrôle l'état du cluster                   |            |
| Global-Protect-Tunnels | Net-PaloAlto-Standard-Global-Protect-SNMP | Contrôle les tunnels GlobalProtect           |            |
| Interfaces             | Net-PaloAlto-Standard-Interfaces-SNMP     | Contrôle les interfaces                      | X          |
| Panorama               | Net-PaloAlto-Standard-Panorama-SNMP       | Contrôle le statut des connexions 'panorama' |            |
| Signatures             | Net-PaloAlto-Standard-Signatures-SNMP     | Contrôle les signatures antivirus            |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                           | Description                                        |
|:------------------------------------------|:---------------------------------------------------|
| Net-PaloAlto-Standard-SNMP-Interface-Name | Découvre les interfaces et supervise l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Métrique                 | Unité |
|:-------------------------|:------|
| cluster status           |       |
| high-availability status |       |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.managementplane.utilization.percentage | %     |
| cpu.dataplane.utilization.percentage       | %     |

</TabItem>
<TabItem value="Global-Protect-Tunnels" label="Global-Protect-Tunnels">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| globalprotect.tunnels.usage.count      | count |
| globalprotect.tunnels.free.count       | count |
| globalprotect.tunnels.usage.percentage | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

Coming soon

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| interface status                                          |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                         | Unité |
|:---------------------------------|:------|
| *name*#storage.space.usage.bytes | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Panorama" label="Panorama">

| Métrique        | Unité |
|:----------------|:------|
| panorama status |       |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| sessions.active.count                        |       |
| sessions.active.percentage                   | %     |
| sessions.active.tcp.count                    |       |
| sessions.active.udp.count                    |       |
| sessions.active.icmp.count                   |       |
| *vsys_name*#vsys.sessions.active.count       |       |
| *vsys_name*#vsys.sessions.active.percentage  | %     |
| *vsys_name*#vsys.sessions.active.tcp.count   |       |
| *vsys_name*#vsys.sessions.active.udp.count   |       |
| *vsys_name*#vsys.sessions.active.other.count |       |

</TabItem>
<TabItem value="Signatures" label="Signatures">

| Métrique                                    | Unité |
|:--------------------------------------------|:------|
| signature.antivirus.lastupdate.time.seconds | s     |
| signature.threat.lastupdate.time.seconds    | s     |
| signature.wildfire.lastupdate.time.seconds  | s     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré.

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
dnf install centreon-pack-network-firewalls-paloalto-standard-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-firewalls-paloalto-standard-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-firewalls-paloalto-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-firewalls-paloalto-standard-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Palo Alto firewall SNMP**
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
dnf install centreon-plugin-Network-Firewalls-Paloalto-Standard-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Firewalls-Paloalto-Standard-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-firewalls-paloalto-standard-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-PaloAlto-Standard-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro                   | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNING                 |                                                                                                     | 80                |             |
| CRITICAL                |                                                                                                     | 90                |             |
| WARNINGDATAPLANE        | Thresholds                                                                                          |                   |             |
| CRITICALDATAPLANE       | Thresholds                                                                                          |                   |             |
| WARNINGMANAGEMENTPLANE  | Thresholds                                                                                          |                   |             |
| CRITICALMANAGEMENTPLANE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Global-Protect-Tunnels" label="Global-Protect-Tunnels">

| Macro                    | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGTUNNELSUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALTUNNELSUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGTUNNELSUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALTUNNELSUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGTUNNELSUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALTUNNELSUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                  | Description                                                                                                                                                                              | Valeur par défaut                                    | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:------------|
| UNITSTRAFFIC           | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter')                                                                                     | percent_delta                                        |             |
| UNITSERROR             | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter')                                                         | percent_delta                                        |             |
| UNITSCAST              | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter')                                                     | percent_delta                                        |             |
| OIDFILTER              | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                          | ifname                                               |             |
| OIDDISPLAY             | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                         | ifname                                               |             |
| INTERFACENAME          | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface')                                                                                                      |                                                      |             |
| WARNINGINBCAST         | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINBCAST        | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINDISCARD       | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINDISCARD      | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINERROR         | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINERROR        | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINMCAST         | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINMCAST        | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINTRAFFIC       | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINTRAFFIC      | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINUCAST         | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINUCAST        | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINVOLUME        |                                                                                                                                                                                          |                                                      |             |
| CRITICALINVOLUME       |                                                                                                                                                                                          |                                                      |             |
| WARNINGOUTBCAST        | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTBCAST       | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTDISCARD      | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTDISCARD     | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTERROR        | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTERROR       | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTMCAST        | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTMCAST       | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTTRAFFIC      | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTTRAFFIC     | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTUCAST        | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTUCAST       | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTVOLUME       |                                                                                                                                                                                          |                                                      |             |
| CRITICALOUTVOLUME      |                                                                                                                                                                                          |                                                      |             |
| WARNINGSPEED           | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALSPEED          | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALSTATUS         | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display} | %{admstatus} eq "up" and %{opstatus} !~ /up|dormant/ |             |
| WARNINGSTATUS          | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                            |                                                      |             |
| WARNINGTOTALADMINDOWN  | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALTOTALADMINDOWN | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGTOTALADMINUP    | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALTOTALADMINUP   | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGTOTALOPERDOWN   | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALTOTALOPERDOWN  | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGTOTALOPERUP     | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALTOTALOPERUP    | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGTOTALPORT       | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALTOTALPORT      | Thresholds                                                                                                                                                                               |                                                      |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                      | --verbose --use-new-perfdata                         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro         | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGUSAGE  | Threshold warning                                                                                   |                   |             |
| CRITICALUSAGE | Threshold critical                                                                                  |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Panorama" label="Panorama">

| Macro          | Description                                                                                                                              | Valeur par défaut             | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:------------|
| CRITICALSTATUS | Set critical threshold for status (Default: '%{status} =~ /not-connected/i'). You can use the following variables: %{status}, %{display} | %{status} =~ /not-connected/i |             |
| WARNINGSTATUS  | Set warning threshold for status (Default: ''). You can use the following variables: %{status}, %{display}                               |                               |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                      | --verbose                     |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro          | Description                                                                                                                                                                                           | Valeur par défaut | Obligatoire |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGACTIVE  | Thresholds. Global: 'active', 'active-prct', (%), 'active-tcp', 'active-udp', 'active-icmp', Per vsys: 'vsys-active', 'vsys-active-prct' (%), 'vsys-active-tcp' 'vsys-active-udp' 'vsys-active-other' |                   |             |
| CRITICALACTIVE | Thresholds. Global: 'active', 'active-prct', (%), 'active-tcp', 'active-udp', 'active-icmp', Per vsys: 'vsys-active', 'vsys-active-prct' (%), 'vsys-active-tcp' 'vsys-active-udp' 'vsys-active-other' |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                                   | --verbose         |             |

</TabItem>
<TabItem value="Signatures" label="Signatures">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGAVUPDATE        | Thresholds                                                                                          |                   |             |
| CRITICALAVUPDATE       | Thresholds                                                                                          |                   |             |
| WARNINGTHREATUPDATE    | Thresholds                                                                                          |                   |             |
| CRITICALTHREATUPDATE   | Thresholds                                                                                          |                   |             |
| WARNINGWILDFIREUPDATE  | Thresholds                                                                                          |                   |             |
| CRITICALWILDFIREUPDATE | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_paloalto.pl \
	--plugin=network::paloalto::snmp::plugin \
	--mode=sessions \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
    --add-vsys \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Sessions active: 1030 (131070), active TCP: 801, active UDP: 207, active ICMP: 15 - Vsys 'vsys1' sessions active: 1020 (-), active TCP: 4, active UDP: 5, other: 0 | 'sessions.active.count'=1030;;;0;131070 'sessions.active.percentage'=0.79%;;;0;100 'sessions.active.tcp.count'=801;;;0; 'sessions.active.udp.count'=207;;;0; 'sessions.active.icmp.count'=15;;;0; 'vsys1#vsys.sessions.active.count'=1020;;;0; 'vsys1#vsys.sessions.active.tcp.count'=4;;;0; 'vsys1#vsys.sessions.active.udp.count'=5;;;0; 'vsys1#vsys.sessions.active.other.count'=0;;;0;
Vsys 'vsys1' sessions active: 1020 (-), active TCP: 4, active UDP: 5, other: 0
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_paloalto.pl \
	--plugin=network::paloalto::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode            | Modèle de service associé                 |
|:----------------|:------------------------------------------|
| cluster-status  | Net-PaloAlto-Standard-Cluster-Status-SNMP |
| cpu             | Net-PaloAlto-Standard-Cpu-SNMP            |
| gp-usage        | Net-PaloAlto-Standard-Global-Protect-SNMP |
| hardware        | Net-PaloAlto-Standard-Hardware-SNMP       |
| interfaces      | Net-PaloAlto-Standard-Interfaces-SNMP     |
| list-interfaces | Used for service discovery                |
| memory          | Net-PaloAlto-Standard-Memory-SNMP         |
| panorama        | Net-PaloAlto-Standard-Panorama-SNMP       |
| sessions        | Net-PaloAlto-Standard-Sessions-SNMP       |
| signatures      | Net-PaloAlto-Standard-Signatures-SNMP     |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Output |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | SNMP   |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-autoreduce                          | Progressively reduce the number requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-force-getnext                       | Use snmp getnext function in snmp v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | SNMP   |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP   |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP   |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP   |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Option               | Description                                                                                                                                      | Type |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --threshold-overload | Set to overload default threshold value. Example: --threshold-overload='peer,critical,active' --threshold-overload='current,critical,passive'    | Mode |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                                    | Type |
|:-------------------------|:---------------------------------------------------------------|:-----|
| --warning-* --critical-* | Thresholds. Can be: 'managementplane' (%), 'dataplane' (%).    | Mode |

</TabItem>
<TabItem value="Global-Protect-Tunnels" label="Global-Protect-Tunnels">

| Option                   | Description                                                                             | Type |
|:-------------------------|:----------------------------------------------------------------------------------------|:-----|
| --warning-* --critical-* | Thresholds. Can be: 'tunnels-usage', 'tunnels-usage-free', 'tunnels-usage-prct' (%).    | Mode |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                      | Type |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --component          | Which component to check (Default: '.*'). Can be: 'device'.                                                                                                                                      | Mode |
| --filter             | Exclude some parts (comma seperated list) Can also exclude specific instance: --filter=device,network.*                                                                                          | Mode |
| --no-component       | Return an error if no compenents are checked. If total (with skipped) is 0. (Default: 'critical' returns).                                                                                       | Mode |
| --threshold-overload | Set to overload default threshold values (syntax: section,\[instance,\]status,regexp) It used before default thresholds (order stays). Example: --threshold-overload='device.network,OK,down'    | Mode |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                                                                                                                                | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                     | Retention |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                             | Retention |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                | Retention |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                      | Retention |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                               | Retention |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                         | Retention |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode      |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    | Mode      |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode      |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    | Mode      |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      | Mode      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     | Mode      |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                              | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                   | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode      |
| --name                   | Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode      |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode      |
| --oid-filter             | Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode      |
| --oid-display            | Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             | Mode      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                 | Description                                                                                                                                                                                                                                   | Type      |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    | Retention |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                | Retention |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        | Retention |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                | Retention |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   | Retention |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         | Retention |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  | Retention |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            | Retention |
| --warning-usage        | Threshold warning.                                                                                                                                                                                                                            | Mode      |
| --critical-usage       | Threshold critical.                                                                                                                                                                                                                           | Mode      |
| --units                | Units of thresholds (Default: '%') ('%', 'B').                                                                                                                                                                                                | Mode      |
| --free                 | Thresholds are on free space left.                                                                                                                                                                                                            | Mode      |
| --storage              | Set the storage (number expected) ex: 1, 2,... (empty means 'check all storage').                                                                                                                                                             | Mode      |
| --name                 | Allows to use storage name with option --storage instead ofstorage oid index.                                                                                                                                                                 | Mode      |
| --regexp               | Allows to use regexp to filter storage (with option --name).                                                                                                                                                                                  | Mode      |
| --regexp-isensitive    | Allows to use regexp non case-sensitive (with --regexp).                                                                                                                                                                                      | Mode      |
| --reload-cache-time    | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                   | Mode      |
| --show-cache           | Display cache storage datas.                                                                                                                                                                                                                  | Mode      |
| --filter-storage-type  | Filter storage types with a regexp (Default: '^(hrStorageRam\|hrStorageFlashMemory)$').                                                                                                                                                       | Mode      |

</TabItem>
<TabItem value="Panorama" label="Panorama">

| Option            | Description                                                                                                                                 | Type |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --warning-status  | Set warning threshold for status (Default: ''). You can use the following variables: %{status}, %{display}                                  | Mode |
| --critical-status | Set critical threshold for status (Default: '%{status} =~ /not-connected/i'). You can use the following variables: %{status}, %{display}    | Mode |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                                                                                               | Type |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --add-vsys               | Monitor virtual systems.                                                                                                                                                                                  | Mode |
| --filter-vsys-name       | Filter virtual systems by name (can be a regexp).                                                                                                                                                         | Mode |
| --warning-* --critical-* | Thresholds. Global: 'active', 'active-prct', (%), 'active-tcp', 'active-udp', 'active-icmp', Per vsys: 'vsys-active', 'vsys-active-prct' (%), 'vsys-active-tcp' 'vsys-active-udp' 'vsys-active-other'.    | Mode |

</TabItem>
<TabItem value="Signatures" label="Signatures">

| Option                   | Description                                                                               | Type |
|:-------------------------|:------------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='av-update'   | Mode |
| --timezone               | Timezone options. Default is 'GMT'.                                                       | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'av-update' (s), 'threat-update' (s), 'wildfire-update' (s).          | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_paloalto.pl \
	--plugin=network::paloalto::snmp::plugin \
	--mode=sessions \
    --help
```
