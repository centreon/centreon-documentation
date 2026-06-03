---
id: hardware-telephony-alcatel-oxe-snmp
title: Alcatel OXE SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Alcatel OXE SNMP** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Alcatel OXE SNMP** apporte un modèle d'hôte :

* **HW-Telephony-Alcatel-OXE-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Telephony-Alcatel-OXE-SNMP-custom" label="HW-Telephony-Alcatel-OXE-SNMP-custom">

| Alias        | Modèle de service                                 | Description                                                                                                                                                                  |
|:-------------|:--------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu          | HW-Telephony-Alcatel-OXE-Cpu-SNMP-custom          | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Domain-Usage | HW-Telephony-Alcatel-OXE-Domain-Usage-SNMP-custom | Contrôle le nombre d'appels externes par domaine via SNMP                                                                                                                    |
| Memory       | HW-Telephony-Alcatel-OXE-Memory-SNMP-custom       | Contrôle du taux d'utilisation de la mémoire vive (RAM)                                                                                                                      |
| PBX-Role     | HW-Telephony-Alcatel-OXE-PBX-Role-SNMP-custom     | Contrôle le rôle du PBX                                                                                                                                                      |
| State        | HW-Telephony-Alcatel-OXE-State-SNMP-custom        | Contrôle l'état du serveur                                                                                                                                                   |
| Swap         | HW-Telephony-Alcatel-OXE-Swap-SNMP-custom         | Contrôle du taux d'utilisation de la mémoire virtuelle (SWAP)                                                                                                                |
| Trunks       | HW-Telephony-Alcatel-OXE-Trunk-SNMP-custom        | Contrôle les métriques liées aux trunks                                                                                                                                      |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Telephony-Alcatel-OXE-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias             | Modèle de service                                      | Description                                                                                                                                                                                                         |
|:------------------|:-------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Disk-Generic-Id   | HW-Telephony-Alcatel-OXE-Disk-Generic-Id-SNMP-custom   | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le nom du disque (« label ») plutôt que la lettre attribuée. Les seuils pourront être en pourcentage, en espace libre restant |
| Disk-Generic-Name | HW-Telephony-Alcatel-OXE-Disk-Generic-Name-SNMP-custom | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le point de montage du disque (« label »). Les seuils pourront être en pourcentage, en espace libre restant                   |
| Disk-Global       | HW-Telephony-Alcatel-OXE-Disk-Global-SNMP-custom       | Contrôle du taux d'espace libre disponible des disques. Pour chaque contrôle apparaîtra le point de montage des disques (« label »). Les seuils pourront être en pourcentage, en espace libre restant               |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                           |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **HW-Telephony-Alcatel-OXE-SNMP-custom**. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| storage.partitions.count              | count |
| *disk_name*#storage.space.usage.bytes | B     |
| *disk_name*#storage.access.count      | count |

> Concerne les modèles de service suivants : Disk-Generic-Id, Disk-Generic-Name, Disk-Global

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Domain-Usage" label="Domain-Usage">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| *domain*#domain.communications.external.current.count | count |
| *domain*#domain.communications.external.overrun.count | count |
| *domain*#domain.conference.circuits.current.count     | count |
| *domain*#domain.conference.circuits.outoforder.count  | count |
| *domain*#domain.compressors.current.count             | count |
| *domain*#domain.compressors.outofservice.count        | count |
| *domain*#domain.compressors.overrun.count             | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                     | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |
| swap.usage.bytes        | B     |
| swap.free.bytes         | B     |
| swap.usage.percentage   | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="PBX-Role" label="PBX-Role">

Coming soon

</TabItem>
<TabItem value="State" label="State">

Coming soon

</TabItem>
<TabItem value="Swap" label="Swap">

| Nom                   | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Trunks" label="Trunks">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| trunk-status                              | N/A   |
| *trunk*#trunk.channels.usage.count        | count |
| *trunk*#trunk.channels.outofservice.count | count |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

L'agent SNMP doit être activé et configuré sur l'équipement. 
Référez-vous à la documentation officielle du constructeur/éditeur.
Il se peut que votre équipement nécessite qu'une liste d'adresses autorisées à l'interroger soit paramétrée. 
Veillez à ce que les adresses des collecteurs Centreon y figurent bien.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

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
dnf install centreon-pack-hardware-telephony-alcatel-oxe-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-telephony-alcatel-oxe-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-telephony-alcatel-oxe-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-telephony-alcatel-oxe-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Alcatel OXE SNMP**
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
dnf install centreon-plugin-Hardware-Telephony-Alcatel-OXE-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Telephony-Alcatel-OXE-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-telephony-alcatel-oxe-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Telephony-Alcatel-OXE-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Telephony-Alcatel-OXE-SNMP-custom**.

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
<TabItem value="Cpu" label="Cpu">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold average CPU utilization                                                                                                        | 80                |             |
| CRITICAL     | Critical threshold average CPU utilization                                                                                                       | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Disk-Generic-Id" label="Disk-Generic-Id">

| Macro        | Description                                                                                                                                                                                     | Valeur par défaut | Obligatoire |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DISKID       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage')                                                                                                           |                   |             |
| TRANSFORMDST | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run' |                   |             |
| TRANSFORMSRC | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run' |                   |             |
| CRITICAL     | Critical threshold                                                                                                                                                                              | 90                |             |
| WARNING      | Warning threshold                                                                                                                                                                               | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                |                   |             |

</TabItem>
<TabItem value="Disk-Generic-Name" label="Disk-Generic-Name">

| Macro        | Description                                                                                                                                                                                     | Valeur par défaut | Obligatoire |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DISKNAME     | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage')                                                                                                           |                   |             |
| TRANSFORMDST | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run' |                   |             |
| TRANSFORMSRC | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run' |                   |             |
| CRITICAL     | Critical threshold                                                                                                                                                                              | 90                |             |
| WARNING      | Warning threshold                                                                                                                                                                               | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                |                   |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro        | Description                                                                                                                                                                                     | Valeur par défaut | Obligatoire |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage')                                                                                                           | .*                |             |
| TRANSFORMDST | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run' |                   |             |
| TRANSFORMSRC | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run' |                   |             |
| CRITICAL     | Critical threshold                                                                                                                                                                              | 90                |             |
| WARNING      | Warning threshold                                                                                                                                                                               | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                | --verbose         |             |

</TabItem>
<TabItem value="Domain-Usage" label="Domain-Usage">

| Macro                   | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| IPDOMAINE               | Filter by domain (regexp can be used)                                                                                                            |                   |             |
| WARNINGCACOVERRUN       | Threshold                                                                                                                                        |                   |             |
| CRITICALCACOVERRUN      | Threshold                                                                                                                                        |                   |             |
| CRITICALCACUSAGE        | Threshold                                                                                                                                        | 90                |             |
| WARNINGCACUSAGE         | Threshold                                                                                                                                        | 80                |             |
| WARNINGCONFERENCEUSAGE  | Threshold                                                                                                                                        |                   |             |
| CRITICALCONFERENCEUSAGE | Threshold                                                                                                                                        |                   |             |
| WARNINGCONFOUTOFORDER   | Threshold                                                                                                                                        |                   |             |
| CRITICALCONFOUTOFORDER  | Threshold                                                                                                                                        |                   |             |
| WARNINGDSPOUTOFSERVICE  | Threshold                                                                                                                                        |                   |             |
| CRITICALDSPOUTOFSERVICE | Threshold                                                                                                                                        |                   |             |
| WARNINGDSPOVERRUN       | Threshold                                                                                                                                        |                   |             |
| CRITICALDSPOVERRUN      | Threshold                                                                                                                                        |                   |             |
| WARNINGDSPUSAGE         | Threshold                                                                                                                                        |                   |             |
| CRITICALDSPUSAGE        | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Threshold in bytes                                                                                                                               | 90                |             |
| WARNING      | Threshold in bytes                                                                                                                               | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="PBX-Role" label="PBX-Role">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="State" label="State">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Threshold in percentage                                                                                                                          | 90                |             |
| WARNING      | Threshold in percentage                                                                                                                          | 80                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Trunks" label="Trunks">

| Macro                       | Description                                                                                                                                      | Valeur par défaut          | Obligatoire |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| TRUNKNAME                   | Filter by trunk name (regexp can be used)                                                                                                        | .*                         |             |
| WARNINGCHANNELOUTOFSERVICE  | Threshold                                                                                                                                        |                            |             |
| CRITICALCHANNELOUTOFSERVICE | Threshold                                                                                                                                        |                            |             |
| WARNINGCHANNELUSAGE         | Threshold                                                                                                                                        |                            |             |
| CRITICALCHANNELUSAGE        | Threshold                                                                                                                                        |                            |             |
| CRITICALTRUNKSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{trunkstatus\}                              | %\{trunkstatus\} =~ /oos/i |             |
| WARNINGTRUNKSTATUS          | Define the conditions to match for the status to be WARNING You can use the following variables: %\{trunkstatus\}                                |                            |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                  |             |

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
/usr/lib/centreon/plugins/centreon_alcatel_oxe.pl \
	--plugin=network::alcatel::oxe::snmp::plugin \
	--mode=trunks \
	--hostname=10.0.0.1 \
	--snmp-community='my-snmp-community' \
	--snmp-version='2c'  \
	--filter-trunk='.*' \
	--warning-trunk-status='' \
	--critical-trunk-status='%\{trunkstatus\} =~ /oos/i' \
	--warning-channel-usage='' \
	--critical-channel-usage='' \
	--warning-channel-outofservice='' \
	--critical-channel-outofservice='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All trunks are ok | 'trunk1#trunk.channels.usage.count'=3;;;; 'trunk2#trunk.channels.usage.count'=8;;;; 'trunk1#trunk.channels.outofservice.count'=8;;;0; 'trunk2#trunk.channels.outofservice.count'=6;;;0; 
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
/usr/lib/centreon/plugins/centreon_alcatel_oxe.pl \
	--plugin=network::alcatel::oxe::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                        | Modèle de service associé                                                                                                                                              |
|:----------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/cpu.pm)]                       | HW-Telephony-Alcatel-OXE-Cpu-SNMP-custom                                                                                                                               |
| domains [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/alcatel/oxe/snmp/mode/domains.pm)]    | HW-Telephony-Alcatel-OXE-Domain-Usage-SNMP-custom                                                                                                                      |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/memory.pm)]                 | HW-Telephony-Alcatel-OXE-Memory-SNMP-custom                                                                                                                            |
| pbx-role [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/alcatel/oxe/snmp/mode/pbxrole.pm)]   | HW-Telephony-Alcatel-OXE-PBX-Role-SNMP-custom                                                                                                                          |
| pbx-state [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/alcatel/oxe/snmp/mode/pbxstate.pm)] | HW-Telephony-Alcatel-OXE-State-SNMP-custom                                                                                                                             |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/storage.pm)]               | HW-Telephony-Alcatel-OXE-Disk-Generic-Id-SNMP-custom<br />HW-Telephony-Alcatel-OXE-Disk-Generic-Name-SNMP-custom<br />HW-Telephony-Alcatel-OXE-Disk-Global-SNMP-custom |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/swap.pm)]                     | HW-Telephony-Alcatel-OXE-Swap-SNMP-custom                                                                                                                              |
| trunks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/alcatel/oxe/snmp/mode/trunks.pm)]      | HW-Telephony-Alcatel-OXE-Trunk-SNMP-custom                                                                                                                             |

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
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are ok, warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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
<TabItem value="Cpu" label="Cpu">

| Option             | Description                                                                                                               |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --use-ucd          | Use UCD MIB for CPU average.                                                                                              |
| --warning-average  | Warning threshold average CPU utilization.                                                                                |
| --critical-average | Critical threshold average CPU utilization.                                                                               |
| --warning-core     | Warning thresholds for each CPU core                                                                                      |
| --critical-core    | Critical thresholds for each CPU core                                                                                     |

</TabItem>
<TabItem value="Disk-*" label="Disk-*">

| Option                                          | Description                                                                                                                                                                                                                                 |
|:------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                               | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                   |
| --memcached                                     | Memcached server to use (only one server).                                                                                                                                                                                                  |
| --redis-server                                  | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                             |
| --redis-attribute                               | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                     |
| --redis-db                                      | Set Redis database index.                                                                                                                                                                                                                   |
| --failback-file                                 | Fall back on a local file if Redis connection fails.                                                                                                                                                                                        |
| --memexpiration                                 | Time to keep data in seconds (default: 86400).                                                                                                                                                                                              |
| --statefile-dir                                 | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                      |
| --statefile-suffix                              | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                              |
| --statefile-concat-cwd                          | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux. |
| --statefile-format                              | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                       |
| --statefile-key                                 | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                |
| --statefile-cipher                              | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                          |
| --warning-usage                                 | Warning threshold.                                                                                                                                                                                                                          |
| --critical-usage                                | Critical threshold.                                                                                                                                                                                                                         |
| --warning-access                                | Warning threshold.                                                                                                                                                                                                                          |
| --critical-access                               | Critical threshold. Check if storage is readOnly: --critical-access=readOnly                                                                                                                                                                |
| --add-access                                    | Check storage access (readOnly, readWrite).                                                                                                                                                                                                 |
| --units                                         | Units of thresholds (default: '%') ('%', 'B').                                                                                                                                                                                              |
| --free                                          | Thresholds are on free space left.                                                                                                                                                                                                          |
| --storage                                       | Set the storage (number expected) example: 1, 2,... (empty means 'check all storage').                                                                                                                                                      |
| --name                                          | Allows to use storage name with option --storage instead of storage oid index.                                                                                                                                                              |
| --regexp                                        | Allows to use regexp to filter storage (with option --name).                                                                                                                                                                                |
| --regexp-insensitive                            | Allows to use regexp non case-sensitive (with --regexp).                                                                                                                                                                                    |
| --path-best-match                               | Allows to select best path mount point (with --name).                                                                                                                                                                                       |
| --reload-cache-time                             | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                 |
| --oid-filter                                    | Choose OID used to filter storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                       |
| --oid-display                                   | Choose OID used to display storage (default: hrStorageDescr) (values: hrStorageDescr, hrFSMountPoint).                                                                                                                                      |
| --display-transform-src --display-transform-dst | Modify the storage name displayed by using a regular expression.  Example: adding --display-transform-src='dev' --display-transform-dst='run'  will replace all occurrences of 'dev' with 'run'                                             |
| --show-cache                                    | Display cache storage data.                                                                                                                                                                                                                 |
| --space-reservation                             | Some filesystem has space reserved (like ext4 for root). The value is in percent of total (default: none) (results like 'df' command).                                                                                                      |
| --filter-duplicate                              | Filter duplicate storages (in used size and total size).                                                                                                                                                                                    |
| --filter-storage-type                           | Filter storage types with a regexp (default: '^(hrStorageFixedDisk\|hrStorageNetworkDisk\|hrFSBerkeleyFFS)$').                                                                                                                              |

</TabItem>
<TabItem value="Domain-Usage" label="Domain-Usage">

| Option            | Description                                                                                                                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                    |
| --filter-domain   | Filter by domain (regexp can be used).                                                                                                                                                                       |
| --warning-*       | Warning threshold. Can be: 'cac-usage' (%), 'conference-usage' (%),  'cac-overrun' (absolute),  conf-outoforder (absolute), 'dsp-usage' (absolute), 'dsp-outofservice' (absolute), 'dsp-overrun' (absolute)  |
| --critical-*      | Critical threshold. Can be: 'cac-usage' (%), 'conference-usage' (%),  'cac-overrun' (absolute),  conf-outoforder (absolute), 'dsp-usage' (absolute), 'dsp-outofservice' (absolute), 'dsp-overrun' (absolute) |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                  | Description                                                                                                                                                                                                                                                                                                                     |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters       | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                       |
| --units                 | Units of thresholds (default: '%') ('%', 'absolute') (deprecated. Please use new counters directly)                                                                                                                                                                                                                             |
| --free                  | Thresholds are on free space left (deprecated. Please use new counters directly)                                                                                                                                                                                                                                                |
| --swap                  | Check swap also.                                                                                                                                                                                                                                                                                                                |
| --warning-buffer        | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --critical-buffer       | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --warning-cached        | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --critical-cached       | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --warning-shared        | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --critical-shared       | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --warning-swap          | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --critical-swap         | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --warning-swap-free     | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --critical-swap-free    | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --warning-swap-prct     | Threshold in percentage.                                                                                                                                                                                                                                                                                                        |
| --critical-swap-prct    | Threshold in percentage.                                                                                                                                                                                                                                                                                                        |
| --warning-usage         | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --critical-usage        | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --warning-usage-free    | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --critical-usage-free   | Threshold in bytes.                                                                                                                                                                                                                                                                                                             |
| --warning-usage-prct    | Threshold in percentage.                                                                                                                                                                                                                                                                                                        |
| --critical-usage-prct   | Threshold in percentage.                                                                                                                                                                                                                                                                                                        |
| --patch-redhat          | If using Red Hat distribution with net-snmp \>= 5.7.2-43 and net-snmp \< 5.7.2-47. But you should update net-snmp!!!!  This version: used = memTotalReal - memAvailReal // free = memAvailReal Others versions: used = memTotalReal - memAvailReal - memBuffer - memCached // free = total - used                               |
| --force-64bits-counters | Use this option to monitor a server/device that has more than 2 TB of RAM, the maximum size of a signed 32 bits integer. If you omit it you'll get the remainder of the Euclidean division of the actual value by 2 TB. NB: it cannot work with version 1 of SNMP protocol. 64 bits counters are supported starting version 2c. |

</TabItem>
<TabItem value="PBX-Role" label="PBX-Role">

| Option               | Description                                                                                                                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='role,CRITICAL,^(?!(main)$)' |

</TabItem>
<TabItem value="State" label="State">

| Option               | Description                                                                                                                                                                                                     |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='state,CRITICAL,^(?!(normal)$)' |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                | Description                                                                                                               |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters     | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --no-swap             | Threshold if no active swap (default: 'critical').                                                                        |
| --warning-usage       | Threshold in bytes.                                                                                                       |
| --critical-usage      | Threshold in bytes.                                                                                                       |
| --warning-usage-free  | Threshold in bytes.                                                                                                       |
| --critical-usage-free | Threshold in bytes.                                                                                                       |
| --warning-usage-prct  | Threshold in percentage.                                                                                                  |
| --critical-usage-prct | Threshold in percentage.                                                                                                  |

</TabItem>
<TabItem value="Trunks" label="Trunks">

| Option                  | Description                                                                                                                                                 |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters       | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                   |
| --filter-trunk          | Filter by trunk name (regexp can be used).                                                                                                                  |
| --warning-trunk-status  | Define the conditions to match for the status to be WARNING You can use the following variables: %\{trunkstatus\}                                           |
| --critical-trunk-status | Define the conditions to match for the status to be CRITICAL (default: '%\{trunkstatus\} =~ /oos/i'). You can use the following variables: %\{trunkstatus\} |
| --warning-*             | Warning threshold. Can be: 'channel-usage' (%), 'channel-outofservice' (absolute)                                                                           |
| --critical-*            | Critical threshold. Can be: 'channel-usage' (%), 'channel-outofservice' (absolute)                                                                          |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_alcatel_oxe.pl \
	--plugin=network::alcatel::oxe::snmp::plugin \
	--mode=trunks \
	--help
```
