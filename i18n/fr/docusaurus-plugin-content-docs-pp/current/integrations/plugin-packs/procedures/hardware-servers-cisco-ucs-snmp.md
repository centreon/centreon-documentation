---
id: hardware-servers-cisco-ucs-snmp
title: Cisco UCS SNMP
description: "Supervisez les serveurs Cisco UCS via SNMP : état du matériel, erreurs, journaux d'audit, entités de management et service profiles."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Cisco UCS SNMP** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco UCS SNMP** apporte un modèle d'hôte :

* **HW-Server-Cisco-Ucs-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Server-Cisco-Ucs-SNMP-custom" label="HW-Server-Cisco-Ucs-SNMP-custom">

| Alias      | Modèle de service                          | Description                   |
|:-----------|:-------------------------------------------|:------------------------------|
| Audit-Logs | HW-Server-Cisco-Ucs-Audit-Logs-SNMP-custom | Contrôle les journaux d'audit |
| Equipment  | HW-Server-Cisco-Ucs-Equipment-SNMP-custom  | Contrôle l'état du hardware   |
| Faults     | HW-Server-Cisco-Ucs-Faults-SNMP-custom     | Contrôle les erreurs          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Server-Cisco-Ucs-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                               | Description                            |
|:----------------|:------------------------------------------------|:---------------------------------------|
| Mgmt-Entities   | HW-Server-Cisco-Ucs-Mgmt-Entities-SNMP-custom   | Contrôle les entités de management     |
| Service-Profile | HW-Server-Cisco-Ucs-Service-Profile-SNMP-custom | Contrôle le nombre de service profiles |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                      |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **HW-Server-Cisco-Ucs-SNMP-custom**. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Audit-Logs" label="Audit-Logs">

| Nom                  | Unité |
|:---------------------|:------|
| audit.total.count    | count |
| audit.values %.count | count |
| status               | N/A   |

</TabItem>
<TabItem value="Equipment" label="Equipment">

| Nom                      | Unité |
|:-------------------------|:------|
| hardware.fan.count       | count |
| fan status               | N/A   |
| hardware.psu.count       | count |
| psu status               | N/A   |
| hardware.chassis.count   | count |
| chassis status           | N/A   |
| hardware.iocard.count    | count |
| iocard status            | N/A   |
| hardware.blade.count     | count |
| blade status             | N/A   |
| hardware.fex.count       | count |
| fex status               | N/A   |
| hardware.cpu.count       | count |
| cpu status               | N/A   |
| hardware.memory.count    | count |
| memory status            | N/A   |
| hardware.localdisk.count | count |
| localdisk status         | N/A   |

</TabItem>
<TabItem value="Faults" label="Faults">

| Nom                   | Unité |
|:----------------------|:------|
| faults.total.count    | count |
| faults.values %.count | count |
| status                | N/A   |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Nom                             | Unité |
|:--------------------------------|:------|
| management_entities.total.count | count |
| status                          | N/A   |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Nom                           | Unité |
|:------------------------------|:------|
| serviceprofiles.total.count   | count |
| serviceprofiles.online.count  | count |
| serviceprofiles.offline.count | count |
| status                        | N/A   |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Le service SNMP doit être activé et configuré sur l'équipement. 
Veuillez vous référer à la documentation officielle du constructeur/éditeur. 
Il se peut que votre équipement nécessite qu'une liste d'adresses autorisées à l'interroger soit paramétrée. 
Veillez à ce que les adresses des collecteurs Centreon y figurent bien.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers la ressource supervisée.

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cisco UCS SNMP**
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
dnf install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Cisco-Ucs-SNMP-custom**.

| Macro                   | Description                                                                                                                                                            | Valeur par défaut | Obligatoire |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMP_V3_USERNAME        | SNMP v3 only: User name (`securityName`)                                                                                                                               |                   |             |
| SNMP_V3_AUTH_PROTOCOL   | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512                                                                  |                   |             |
| SNMP_V3_PRIV_PROTOCOL   | SNMP v3 only: Privacy protocol (`privProtocol`) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C |                   |             |
| SNMP_V3_AUTH_PASSPHRASE | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option                                                               |                   |             |
| SNMP_V3_PRIV_PASSPHRASE | SNMP v3 only: Privacy pass phrase (`privPassword`) to encrypt messages using the protocol defined in the --privprotocol option                                         |                   |             |
| SNMPEXTRAOPTIONS        | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                     |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Audit-Logs" label="Audit-Logs">

| Macro                  | Description                                                                                                                                      | Valeur par défaut                  | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| WARNINGAUDITCRITICAL   | Threshold                                                                                                                                        |                                    |             |
| CRITICALAUDITCRITICAL  | Threshold                                                                                                                                        |                                    |             |
| WARNINGAUDITWARNING    | Threshold                                                                                                                                        |                                    |             |
| CRITICALAUDITWARNING   | Threshold                                                                                                                                        |                                    |             |
| WARNINGAUDITCLEARED    | Threshold                                                                                                                                        |                                    |             |
| CRITICALAUDITCLEARED   | Threshold                                                                                                                                        |                                    |             |
| WARNINGAUDITCONDITION  | Threshold                                                                                                                                        |                                    |             |
| CRITICALAUDITCONDITION | Threshold                                                                                                                                        |                                    |             |
| WARNINGAUDITINFO       | Threshold                                                                                                                                        |                                    |             |
| CRITICALAUDITINFO      | Threshold                                                                                                                                        |                                    |             |
| WARNINGAUDITMAJOR      | Threshold                                                                                                                                        |                                    |             |
| CRITICALAUDITMAJOR     | Threshold                                                                                                                                        |                                    |             |
| WARNINGAUDITMINOR      | Threshold                                                                                                                                        |                                    |             |
| CRITICALAUDITMINOR     | Threshold                                                                                                                                        |                                    |             |
| WARNINGAUDITTOTAL      | Threshold                                                                                                                                        |                                    |             |
| CRITICALAUDITTOTAL     | Threshold                                                                                                                                        |                                    |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING You can use the following variables: %\{severity\}, %\{description\}, %\{dn\}        | %\{severity\} =~ /minor\|warning/  |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{severity\}, %\{description\}, %\{dn\}      | %\{severity\} =~ /major\|critical/ |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                          |             |

</TabItem>
<TabItem value="Equipment" label="Equipment">

| Macro        | Description                                                                                                                                      | Valeur par défaut               | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:-----------:|
| COMPONENT    | Which component to check. Can be: `fan`, `psu`, `chassis`, `iocard`, `blade`, `fex`, `cpu`, `memory`, `localdisk`                                | .*                              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose  --snmp-force-getnext |             |

</TabItem>
<TabItem value="Faults" label="Faults">

| Macro                   | Description                                                                                                                                      | Valeur par défaut                  | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| WARNINGFAULTSWARNING    | Threshold                                                                                                                                        |                                    |             |
| CRITICALFAULTSWARNING   | Threshold                                                                                                                                        |                                    |             |
| WARNINGFAULTSCRITICAL   | Threshold                                                                                                                                        |                                    |             |
| CRITICALFAULTSCRITICAL  | Threshold                                                                                                                                        |                                    |             |
| WARNINGFAULTSCLEARED    | Threshold                                                                                                                                        |                                    |             |
| CRITICALFAULTSCLEARED   | Threshold                                                                                                                                        |                                    |             |
| WARNINGFAULTSCONDITION  | Threshold                                                                                                                                        |                                    |             |
| CRITICALFAULTSCONDITION | Threshold                                                                                                                                        |                                    |             |
| WARNINGFAULTSINFO       | Threshold                                                                                                                                        |                                    |             |
| CRITICALFAULTSINFO      | Threshold                                                                                                                                        |                                    |             |
| WARNINGFAULTSMAJOR      | Threshold                                                                                                                                        |                                    |             |
| CRITICALFAULTSMAJOR     | Threshold                                                                                                                                        |                                    |             |
| WARNINGFAULTSMINOR      | Threshold                                                                                                                                        |                                    |             |
| CRITICALFAULTSMINOR     | Threshold                                                                                                                                        |                                    |             |
| WARNINGFAULTSTOTAL      | Threshold                                                                                                                                        |                                    |             |
| CRITICALFAULTSTOTAL     | Threshold                                                                                                                                        |                                    |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING You can use the following variables: %\{severity\}, %\{description\}, %\{dn\}        | %\{severity\} =~ /minor\|warning/  |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{severity\}, %\{description\}, %\{dn\}      | %\{severity\} =~ /major\|critical/ |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                          |             |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Macro          | Description                                                                                                                                               | Valeur par défaut                                                                                       | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN You can use the following variables: %\{dn\}, %\{role\}, %\{services\_status\}, %\{status\}   | %\{role\} =~ /unknown/ or %\{status\} eq "unknown" or %\{services\_status\} eq "unknown"                |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{dn\}, %\{role\}, %\{services\_status\}, %\{status\} | %\{role\} =~ /electionFailed\|inapplicable/ or %\{status\} eq "down" or %\{services\_status\} eq "down" |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{dn\}, %\{role\}, %\{services\_status\}, %\{status\}  |                                                                                                         |             |
| WARNINGTOTAL   | Threshold                                                                                                                                                 |                                                                                                         |             |
| CRITICALTOTAL  | Threshold                                                                                                                                                 |                                                                                                         |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).          | --verbose                                                                                               |             |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Macro           | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| WARNINGOFFLINE  | Threshold                                                                                                                                        |                          |             |
| CRITICALOFFLINE | Threshold                                                                                                                                        |                          |             |
| WARNINGONLINE   | Threshold                                                                                                                                        |                          |             |
| CRITICALONLINE  | Threshold                                                                                                                                        |                          |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{dn\}, %\{status\}                          | %\{status\} eq "offline" |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{dn\}, %\{status\}                           |                          |             |
| WARNINGTOTAL    | Threshold                                                                                                                                        |                          |             |
| CRITICALTOTAL   | Threshold                                                                                                                                        |                          |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                |             |

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
/usr/lib/centreon/plugins/centreon_cisco_ucs.pl \
	--plugin=hardware::server::cisco::ucs::snmp::plugin \
	--mode=service-profile \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community' \
	--snmp-username='username' \
	--authpassphrase='' \
	--authprotocol='' \
	--privpassphrase='' \
	--privprotocol=''  \
	--warning-total='' \
	--critical-total='' \
	--warning-online='' \
	--critical-online='' \
	--warning-offline='' \
	--critical-offline='' \
	--warning-status='' \
	--critical-status='%\{status\} eq "offline"' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: total: 2 online: 89 offline: 31 All service profiles are ok | 'serviceprofiles.total.count'=2;;;0;'serviceprofiles.online.count'=89;;;0;total'serviceprofiles.offline.count'=31;;;0;total
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
/usr/lib/centreon/plugins/centreon_cisco_ucs.pl \
	--plugin=hardware::server::cisco::ucs::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                          | Modèle de service associé                       |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| audit-logs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/auditlogs.pm)]           | HW-Server-Cisco-Ucs-Audit-Logs-SNMP-custom      |
| equipment [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/equipment.pm)]            | HW-Server-Cisco-Ucs-Equipment-SNMP-custom       |
| faults [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/faults.pm)]                  | HW-Server-Cisco-Ucs-Faults-SNMP-custom          |
| mgmt-entities [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/mgmtentities.pm)]     | HW-Server-Cisco-Ucs-Mgmt-Entities-SNMP-custom   |
| service-profile [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/serviceprofile.pm)] | HW-Server-Cisco-Ucs-Service-Profile-SNMP-custom |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-force-getnext                       | Use SNMP get-next function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-username                            | SNMP v3 only: User name (`securityName`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (`privPassword`) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --privprotocol                             | SNMP v3 only: Privacy protocol (`privProtocol`) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --contextname                              | SNMP v3 only: Context name (`contextName`), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --contextengineid                          | SNMP v3 only: Context engine ID (`contextEngineID`), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are ok, warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: `dtlsudp`, `tlstcp`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-their-hostname                  | Common Name (`CN`) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the C option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Audit-Logs" label="Audit-Logs">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                   |
| --warning-xxx          | Warning threshold.                                                                                                                                                                                                                          |
| --critical-xxx         | Critical threshold.                                                                                                                                                                                                                         |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning-status       | Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /minor\|warning/') You can use the following variables: %\{severity\}, %\{description\}, %\{dn\}                                                    |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /major\|critical/'). You can use the following variables: %\{severity\}, %\{description\}, %\{dn\}                                                 |
| --memory               | Only check new audit.                                                                                                                                                                                                                       |
| --filter-message       | Filter on event message. (default: none)                                                                                                                                                                                                    |
| --retention            | Event older (current time - retention time) is not checked (in seconds).                                                                                                                                                                    |

</TabItem>
<TabItem value="Equipment" label="Equipment">

| Option               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: `fan`, `psu`, `chassis`, `iocard`, `blade`, `fex`, `cpu`, `memory`, `localdisk`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,/sys/chassis-7/fan-module-1-7/fan-1                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --absent-problem     | Return an error if an entity is not 'present' (default is skipping) (comma separated list) Can be specific or global: --absent-problem=fan,/sys/chassis-7/fan-module-1-7/fan-1                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan.operability,OK,poweredOff\|removed'  --threshold-overload='presence,OK,missing'  --threshold-overload='operability,OK,removed' NB: For the memory component you may need to set this option twice if presence status doesn't return OK state and you want to override the operability status. Example when memories are missing because of removing. --threshold-overload='presence,OK,missing' --threshold-overload='operability,OK,removed' |
| --warning            | Define the warning threshold for temperatures (syntax: type,instance,threshold) Example: --warning='temperature,.*,30'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --critical           | Define the critical threshold for temperatures (syntax: type,instance,threshold) Example: --critical='temperature,.*,40'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --warning-count-*    | Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --critical-count-*   | Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Faults" label="Faults">

| Option                 | Description                                                                                                                                                                                                                                 |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters      | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                   |
| --warning-xxx          | Warning threshold.                                                                                                                                                                                                                          |
| --critical-xxx         | Critical threshold.                                                                                                                                                                                                                         |
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file        | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning-status       | Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /minor\|warning/') You can use the following variables: %\{severity\}, %\{description\}, %\{dn\}                                                    |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /major\|critical/'). You can use the following variables: %\{severity\}, %\{description\}, %\{dn\}                                                 |
| --memory               | Only check new fault.                                                                                                                                                                                                                       |
| --filter-message       | Filter on event message. (default: none)                                                                                                                                                                                                    |
| --retention            | Event older (current time - retention time) is not checked (in seconds).                                                                                                                                                                    |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Option                   | Description                                                                                                                                                                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                      |
| --warning-xxx            | Warning threshold.                                                                                                                                                                                                                                                             |
| --critical-xxx           | Critical threshold.                                                                                                                                                                                                                                                            |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: '%\{role\} =~ /unknown/ or %\{status\} eq "unknown" or %\{services\_status\} eq "unknown"') You can use the following variables: %\{dn\}, %\{role\}, %\{services\_status\}, %\{status\}                  |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{dn\}, %\{role\}, %\{services\_status\}, %\{status\}                                                                                                                       |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{role\} =~ /electionFailed\|inapplicable/ or %\{status\} eq "down" or %\{services\_status\} eq "down"'). You can use the following variables: %\{dn\}, %\{role\}, %\{services\_status\}, %\{status\} |
| --warning-* --critical-* | Thresholds. Can be: 'total'.                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Option                   | Description                                                                                                                                                   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                     |
| --warning-xxx            | Warning threshold.                                                                                                                                            |
| --critical-xxx           | Critical threshold.                                                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{dn\}, %\{status\}                                        |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} eq "offline"'). You can use the following variables: %\{dn\}, %\{status\} |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'online', 'offline'.                                                                                                             |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_ucs.pl \
	--plugin=hardware::server::cisco::ucs::snmp::plugin \
	--mode=service-profile \
	--help
```
