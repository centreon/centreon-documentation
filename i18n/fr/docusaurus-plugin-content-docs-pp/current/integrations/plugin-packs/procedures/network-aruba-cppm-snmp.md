---
id: network-aruba-cppm-snmp
title: Aruba CPPM SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Aruba CPPM SNMP** apporte un modèle d'hôte :

* **Net-Aruba-Cppm-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Aruba-Cppm-SNMP-custom" label="Net-Aruba-Cppm-SNMP-custom">

| Alias  | Modèle de service          | Description                        |
|:-------|:---------------------------|:-----------------------------------|
| Cpu    | Net-Aruba-Cppm-Cpu-SNMP    | Contrôle l'utilisation processeur  |
| Disks  | Net-Aruba-Cppm-Disks-SNMP  | Contrôle l'utilisation des disques |
| Memory | Net-Aruba-Cppm-Memory-SNMP | Contrôle l'utilisation mémoire     |
| Swap   | Net-Aruba-Cppm-Swap-SNMP   | Contrôle le swap                   |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Aruba-Cppm-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias        | Modèle de service                | Description                                             | Découverte |
|:-------------|:---------------------------------|:--------------------------------------------------------|:-----------|
| Interfaces   | Net-Aruba-Cppm-Interfaces-SNMP   | Contrôle les interfaces                                 | X          |
| Radius       | Net-Aruba-Cppm-Radius-SNMP       | Contrôle les statistiques radius                        |            |
| Repositories | Net-Aruba-Cppm-Repositories-SNMP | Contrôle les statistiques des dépôts d'authentification |            |
| Tacacs       | Net-Aruba-Cppm-Tacacs-SNMP       | Contrôle les statistiques TACACS                        |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                    | Description                                                   |
|:-----------------------------------|:--------------------------------------------------------------|
| Net-Aruba-Cppm-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| cpu.utilization.percentage                | %     |
| *cpu_num*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disks" label="Disks">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *hostname*#disk.space.usage.bytes      | B     |
| *hostname*#disk.space.free.bytes       | B     |
| *hostname*#disk.space.usage.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                  | Unité |
|:--------------------------------------------------------- |:----- |
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| *hostname*#memory.usage.bytes      | B     |
| *hostname*#memory.free.bytes       | B     |
| *hostname*#memory.usage.percentage | %     |

</TabItem>
<TabItem value="Radius" label="Radius">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| *hostname*#radius.policy.evaluation.milliseconds | ms    |
| *hostname*#radius.requests.count                 |       |
| *hostname*#radius.requests.failed.count          |       |
| *hostname*#radius.requests.succeeded.count       |       |
| *hostname*#radius.requests.milliseconds          | ms    |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Métrique                                                         | Unité |
|:-----------------------------------------------------------------|:------|
| *source_name*#authentication_repository.requests.milliseconds    | ms    |
| *source_name*#authentication_repository.requests.count           |       |
| *source_name*#authentication_repository.requests.failed.count    |       |
| *source_name*#authentication_repository.requests.succeeded.count |       |

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique              | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

</TabItem>
<TabItem value="Tacacs" label="Tacacs">

| Métrique                                                                   | Unité |
|:---------------------------------------------------------------------------|:------|
| *hostname*#tacacs.authentication.service.policy.evaluation.milliseconds    | ms    |
| *hostname*#tacacs.authentication.requests.count                            |       |
| *hostname*#tacacs.authentication.requests.authentication.time.milliseconds | ms    |
| *hostname*#tacacs.authentication.requests.failed.count                     |       |
| *hostname*#tacacs.authentication.requests.succeeded.count                  |       |
| *hostname*#tacacs.authentication.requests.time.milliseconds                | ms    |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Aruba CPPM** en SNMP, il est nécessaire de configurer l'agent sur l'équipement.

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
dnf install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Aruba CPPM SNMP**
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
dnf install centreon-plugin-Network-Aruba-Cppm-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Aruba-Cppm-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-aruba-cppm-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Aruba-Cppm-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Aruba-Cppm-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-----------------|:------------------------------------------------------------------------------------------------------|:------------------|:------------|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGAVERAGE  | Warning threshold for average CPU utilization                                                           |                   |             |
| CRITICALAVERAGE | Critical threshold average for CPU utilization                                                          |                   |             |
| WARNINGCORE     | Warning thresholds for each CPU core                                                                |                   |             |
| CRITICALCORE    | Critical thresholds for each CPU core                                                               |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME             | Filter disks by system hostname (can be a regexp)                                                   |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                                                                                         | Valeur par défaut                                    | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:------------|
| OIDFILTER          | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                          | ifname                                               |             |
| OIDDISPLAY         | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                                 | ifname                                               |             |
| INTERFACENAME      | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                                                                                                                                |                                                      |             |
| WARNINGINDISCARD   | Thresholds                                                                                                                                                                                                          |                                                      |             |
| CRITICALINDISCARD  | Thresholds                                                                                                                                                                                                          |                                                      |             |
| WARNINGINERROR     | Thresholds                                                                                                                                                                                                          |                                                      |             |
| CRITICALINERROR    | Thresholds                                                                                                                                                                                                          |                                                      |             |
| WARNINGINTRAFFIC   | Thresholds                                                                                                                                                                                                          |                                                      |             |
| CRITICALINTRAFFIC  | Thresholds                                                                                                                                                                                                          |                                                      |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                                                                                                                                          |                                                      |             |
| CRITICALOUTDISCARD | Thresholds                                                                                                                                                                                                          |                                                      |             |
| WARNINGOUTERROR    | Thresholds                                                                                                                                                                                                          |                                                      |             |
| CRITICALOUTERROR   | Thresholds                                                                                                                                                                                                          |                                                      |             |
| WARNINGOUTTRAFFIC  | Thresholds                                                                                                                                                                                                          |                                                      |             |
| CRITICALOUTTRAFFIC | Thresholds                                                                                                                                                                                                          |                                                      |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %\{opstatus\} ne "up"'). You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\} | %\{admstatus\} eq "up" and %\{opstatus\} !~ /up|dormant/ |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                            |                                                      |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                 | --verbose                                            |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME        | Filter memory by system hostname (can be a regexp)                                                  |                   |             |
| WARNINGUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Radius" label="Radius">

| Macro                           | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME                      | Filter radius by system hostname (can be a regexp)                                                  |                   |             |
| WARNINGRADIUSPOLICYEVAL         | Thresholds                                                                                          |                   |             |
| CRITICALRADIUSPOLICYEVAL        | Thresholds                                                                                          |                   |             |
| WARNINGRADIUSREQUESTS           | Thresholds                                                                                          |                   |             |
| CRITICALRADIUSREQUESTS          | Thresholds                                                                                          |                   |             |
| WARNINGRADIUSREQUESTSFAILED     | Thresholds                                                                                          |                   |             |
| CRITICALRADIUSREQUESTSFAILED    | Thresholds                                                                                          |                   |             |
| WARNINGRADIUSREQUESTSSUCCEEDED  | Thresholds                                                                                          |                   |             |
| CRITICALRADIUSREQUESTSSUCCEEDED | Thresholds                                                                                          |                   |             |
| WARNINGRADIUSREQUESTSTIME       | Thresholds                                                                                          |                   |             |
| CRITICALRADIUSREQUESTSTIME      | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Macro                     | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME                | Filter authentification repositories by system hostname (can be a regexp)                           |                   |             |
| WARNINGREQUESTS           | Thresholds                                                                                          |                   |             |
| CRITICALREQUESTS          | Thresholds                                                                                          |                   |             |
| WARNINGREQUESTSFAILED     | Thresholds                                                                                          |                   |             |
| CRITICALREQUESTSFAILED    | Thresholds                                                                                          |                   |             |
| WARNINGREQUESTSSUCCEEDED  | Thresholds                                                                                          |                   |             |
| CRITICALREQUESTSSUCCEEDED | Thresholds                                                                                          |                   |             |
| WARNINGREQUESTSTIME       | Thresholds                                                                                          |                   |             |
| CRITICALREQUESTSTIME      | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| WARNINGUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Tacacs" label="Tacacs">

| Macro                               | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERNAME                          | Filter tacacs by system hostname (can be a regexp)                                                  |                   |             |
| WARNINGTACACSAUTHPOLICYEVAL         | Thresholds                                                                                          |                   |             |
| CRITICALTACACSAUTHPOLICYEVAL        | Thresholds                                                                                          |                   |             |
| WARNINGTACACSAUTHREQUESTS           | Thresholds                                                                                          |                   |             |
| CRITICALTACACSAUTHREQUESTS          | Thresholds                                                                                          |                   |             |
| WARNINGTACACSAUTHREQUESTSAUTHTIME   | Thresholds                                                                                          |                   |             |
| CRITICALTACACSAUTHREQUESTSAUTHTIME  | Thresholds                                                                                          |                   |             |
| WARNINGTACACSAUTHREQUESTSFAILED     | Thresholds                                                                                          |                   |             |
| CRITICALTACACSAUTHREQUESTSFAILED    | Thresholds                                                                                          |                   |             |
| WARNINGTACACSAUTHREQUESTSSUCCEEDED  | Thresholds                                                                                          |                   |             |
| CRITICALTACACSAUTHREQUESTSSUCCEEDED | Thresholds                                                                                          |                   |             |
| WARNINGTACACSAUTHREQUESTSTIME       | Thresholds                                                                                          |                   |             |
| CRITICALTACACSAUTHREQUESTSTIME      | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser la ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_aruba_cppm_snmp.pl \
    --plugin=network::aruba::cppm::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Memory 'cppm.centreon.fr' usage total: 8.00 GB used: 4.05 GB (50.60%) free: 3.95 GB (49.40%) | 'cppm.centreon.fr#memory.usage.bytes'=4346740736B;;;0;8589803520 'cppm.centreon.fr#memory.free.bytes'=4243062784B;;;0;8589803520 'cppm.centreon.fr#memory.usage.percentage'=50.60%;;;0;100
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aruba_cppm_snmp.pl \
	--plugin=network::aruba::cppm::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode            | Modèle de service associé        |
|:----------------|:---------------------------------|
| cpu             | Net-Aruba-Cppm-Cpu-SNMP          |
| disks           | Net-Aruba-Cppm-Disks-SNMP        |
| interfaces      | Net-Aruba-Cppm-Interfaces-SNMP   |
| list-interfaces | Used for service discovery       |
| memory          | Net-Aruba-Cppm-Memory-SNMP       |
| radius          | Net-Aruba-Cppm-Radius-SNMP       |
| repositories    | Net-Aruba-Cppm-Repositories-SNMP |
| swap            | Net-Aruba-Cppm-Swap-SNMP         |
| tacacs          | Net-Aruba-Cppm-Tacacs-SNMP       |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

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
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
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
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | SNMP   |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (By default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | SNMP   |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
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

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                   | Type |
|:-------------------|:----------------------------------------------|:-----|
| --use-ucd          | Use UCD MIB for CPU average.                  | Mode |
| --warning-average  | Warning threshold for average CPU utilization.    | Mode |
| --critical-average | Critical threshold average for CPU utilization.   | Mode |
| --warning-core     | Warning thresholds for each CPU core          | Mode |
| --critical-core    | Critical thresholds for each CPU core         | Mode |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option                   | Description                                                                   | Type |
|:-------------------------|:------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter disks by system hostname (can be a regexp).                            | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.    | Mode |

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
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                                                                                                   | Mode      |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{admstatus} eq "up" and %\{opstatus\} ne "up"'). You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                                        | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                          | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'deltaps', 'counter').                                                                                                                                                      | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                      | Mode      |
| --name                   | Allows you to define the interface (in option --interface) byname instead of OID index. The name matching mode supports regular expressions.                                                                                                                                               | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode      |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode      |
| --oid-filter             | Define the OID to be used to filter interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                | Mode      |
| --oid-display            | Define the OID that will be used to name the interfaces (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                       | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             | Mode      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                 | Type |
|:-------------------------|:------------------------------------------------------------|:-----|
| --filter-name            | Filter memory by system hostname (can be a regexp).         | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage', 'usage-free', 'usage-prct'.    | Mode |

</TabItem>
<TabItem value="Radius" label="Radius">

| Option                   | Description                                                                                                                                    | Type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter radius by system hostname (can be a regexp).                                                                                            | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'radius-policy-eval', 'radius-requests-time', 'radius-requests', 'radius-requests-failed', 'radius-requests-succeeded'.    | Mode |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Option                   | Description                                                                                  | Type |
|:-------------------------|:---------------------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter authentification repositories by system hostname (can be a regexp).                   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'requests-time', 'requests', 'requests-failed', 'requests-succeeded'.    | Mode |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                             | Type |
|:-------------------------|:------------------------------------------------------------------------|:-----|
| --no-swap                | Status if no active swap (default: 'critical').                      | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    | Mode |

</TabItem>
<TabItem value="Tacacs" label="Tacacs">

| Option                   | Description                                                                                                                                                                                                                           | Type |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-name            | Filter tacacs by system hostname (can be a regexp).                                                                                                                                                                                   | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'tacacs-auth-policy-eval', 'tacacs-auth-policy-eval', 'tacacs-auth-requests-auth-time',' 'tacacs-auth-requests-time', 'tacacs-auth-requests', 'tacacs-auth-requests-failed', 'tacacs-auth-requests-succeeded'.    | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aruba_cppm_snmp.pl \
	--plugin=network::aruba::cppm::snmp::plugin \
	--mode=memory \
    --help
```
