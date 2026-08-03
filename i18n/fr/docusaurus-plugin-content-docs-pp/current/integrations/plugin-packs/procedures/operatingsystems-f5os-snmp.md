---
id: operatingsystems-f5os-snmp
title: F5OS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **F5OS SNMP** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **F5OS SNMP** apporte un modèle d'hôte :

* **OS-F5OS-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-F5OS-SNMP-custom" label="OS-F5OS-SNMP-custom">

| Alias     | Modèle de service             | Description                                           |
|:----------|:------------------------------|:------------------------------------------------------|
| Cpu-Usage | OS-F5OS-Cpu-Usage-SNMP-custom | Contrôle l'utilisation du CPU                         |
| Hardware  | OS-F5OS-Hardware-SNMP-custom  | Contrôle le matériel                                  |
| Memory    | OS-F5OS-Memory-SNMP-custom    | Contrôle permettant de vérifier l'utilisation mémoire |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-F5OS-SNMP-custom** est utilisé.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                          |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **OS-F5OS-SNMP-custom**. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| cpu.usage.percent                         | %     |
| *cpu_core*#cpu.core.current.usage.percent | %     |
| *cpu_core*#cpu.core.usage.avg.5s.percent  | %     |
| *cpu_core*#cpu.core.usage.avg.1m.percent  | %     |
| *cpu_core*#cpu.core.usage.avg.5m.percent  | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Nom                            | Unité |
|:-------------------------------|:------|
| temperature.current.celsius    | C     |
| temperature.average.1h.celsius | C     |
| temperature.min.1h.celsius     | C     |
| temperature.max.1h.celsius     | C     |
| *fans*#fantray.fanspeed.rpm    | rpm   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                  | Unité |
|:---------------------|:------|
| memory.usage.bytes   | B     |
| memory.free.bytes    | B     |
| memory.usage.percent | %     |
| memory.free.percent  | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

L'agent SNMP doit être activé et configuré sur l'équipement. 
Veuillez vous référer à la documentation officielle du constructeur/éditeur. 
Il se peut que votre équipement nécessite qu'une liste d'adresses autorisées à l'interroger soit paramétrée. 
Veillez à ce que les adresses des collecteurs Centreon y figurent bien.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers la ressource supervisée.

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
dnf install centreon-pack-operatingsystems-f5os-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-f5os-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-f5os-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-f5os-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **F5OS SNMP**
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
dnf install centreon-plugin-Operatingsystems-F5os-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-F5os-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-f5os-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-F5os-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-F5OS-SNMP-custom**.

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
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Macro               | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCOREAVG1M    | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALCOREAVG1M   | Threshold in percentage                                                                                                                          |                   |             |
| WARNINGCOREAVG5M    | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALCOREAVG5M   | Threshold in percentage                                                                                                                          |                   |             |
| WARNINGCOREAVG5S    | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALCOREAVG5S   | Threshold in percentage                                                                                                                          |                   |             |
| WARNINGCORECURRENT  | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALCORECURRENT | Threshold in percentage                                                                                                                          |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro                      | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGETEMPERATURE  | Threshold in C                                                                                                                                   |                   |             |
| CRITICALAVERAGETEMPERATURE | Threshold in C                                                                                                                                   |                   |             |
| WARNINGCURRENTTEMPERATURE  | Threshold in C                                                                                                                                   |                   |             |
| CRITICALCURRENTTEMPERATURE | Threshold in C                                                                                                                                   |                   |             |
| WARNINGFANTRAYFANSPEED     | Threshold in rpm                                                                                                                                 |                   |             |
| CRITICALFANTRAYFANSPEED    | Threshold in rpm                                                                                                                                 |                   |             |
| WARNINGMAXTEMPERATURE      | Threshold in C                                                                                                                                   |                   |             |
| CRITICALMAXTEMPERATURE     | Threshold in C                                                                                                                                   |                   |             |
| WARNINGMINTEMPERATURE      | Threshold in C                                                                                                                                   |                   |             |
| CRITICALMINTEMPERATURE     | Threshold in C                                                                                                                                   |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGFREE       | Threshold in bytes                                                                                                                               |                   |             |
| CRITICALFREE      | Threshold in bytes                                                                                                                               |                   |             |
| WARNINGFREEPRCT   | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALFREEPRCT  | Threshold in percentage                                                                                                                          |                   |             |
| WARNINGUSAGE      | Threshold in bytes                                                                                                                               |                   |             |
| CRITICALUSAGE     | Threshold in bytes                                                                                                                               |                   |             |
| WARNINGUSAGEPRCT  | Threshold in percentage                                                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Threshold in percentage                                                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_f5os_snmp.pl \
	--plugin=os::f5os::snmp::plugin \
	--mode=memory \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community' \
	--snmp-username='username' \
	--authpassphrase='' \
	--authprotocol='' \
	--privpassphrase='' \
	--privprotocol=''  \
	--warning-usage='' \
	--critical-usage='' \
	--warning-free='' \
	--critical-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--warning-free-prct='' \
	--critical-free-prct='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All memory usages are ok | 'memory.usage.bytes'=54646B;;;0;total 'memory.usage.bytes'=57372B;;;0;total 'memory.free.bytes'=96617B;;;0;total 'memory.free.bytes'=74634B;;;0;total 'memory.usage.percent'=38404%;;;0;100 'memory.usage.percent'=60861%;;;0;100 'memory.free.percent'=39013%;;;0;100 'memory.free.percent'=28069%;;;0;100 
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
/usr/lib/centreon/plugins/centreon_f5os_snmp.pl \
	--plugin=os::f5os::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                            | Modèle de service associé     |
|:----------------------------------------------------------------------------------------------------------------|:------------------------------|
| cpu-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/f5os/snmp/mode/cpuusage.pm)] | OS-F5OS-Cpu-Usage-SNMP-custom |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/f5os/snmp/mode/hardware.pm)]  | OS-F5OS-Hardware-SNMP-custom  |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/f5os/snmp/mode/memory.pm)]      | OS-F5OS-Memory-SNMP-custom    |

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
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-xxx                              | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical-xxx                             | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu-Usage" label="Cpu-Usage">

| Option                  | Description                                                                                                                                                |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters       | Only display some counters (regexp can be used). Can be : core-current, core-avg-5s, core-avg-1m, core-avg-5m Example : --filter-counters='^core-current$' |
| --include-id            | Filter by CPU id (regexp can be used). Example : --include-id='2'                                                                                          |
| --include-name          | Filter by CPU name (regexp can be used). Example : --include-name='cpu02'                                                                                  |
| --exclude-id            | Exclude CPU id from check (regexp can be used). Example : --exclude-id='21'                                                                                |
| --exclude-name          | Exclude CPU name from check (regexp can be used). Example : --exclude-name='cpu02'                                                                         |
| --warning-core-current  | Threshold in percentage.                                                                                                                                   |
| --critical-core-current | Threshold in percentage.                                                                                                                                   |
| --warning-core-avg-5s   | Threshold in percentage.                                                                                                                                   |
| --critical-core-avg-5s  | Threshold in percentage.                                                                                                                                   |
| --warning-core-avg-1m   | Threshold in percentage.                                                                                                                                   |
| --critical-core-avg-1m  | Threshold in percentage.                                                                                                                                   |
| --warning-core-avg-5m   | Threshold in percentage.                                                                                                                                   |
| --critical-core-avg-5m  | Threshold in percentage.                                                                                                                                   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option                         | Description                                                                                                                                                                                                         |
|:-------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component                    | Which component to check (default: '.*'). Can be: `temperature`, `fantray`.                                                                                                                                         |
| --no-component                 | Define the expected status if no components are found (default: critical).                                                                                                                                          |
| --filter-counters              | Only display some counters (regexp can be used). Can be : `fantray-fan-speed` `current-temperature` `average-temperature` `min-temperature` `max-temperature` Example : `--filter-counters='^current-temperature$'` |
| --include-id                   | Filter by fan id (regexp can be used). Example : --include-id='2'                                                                                                                                                   |
| --exclude-id                   | Exclude fan id from check (can be a regexp). Example : --exclude-id='10'                                                                                                                                            |
| --warning-current-temperature  | Threshold in C.                                                                                                                                                                                                     |
| --critical-current-temperature | Threshold in C.                                                                                                                                                                                                     |
| --warning-average-temperature  | Threshold in C.                                                                                                                                                                                                     |
| --critical-average-temperature | Threshold in C.                                                                                                                                                                                                     |
| --warning-min-temperature      | Threshold in C.                                                                                                                                                                                                     |
| --critical-min-temperature     | Threshold in C.                                                                                                                                                                                                     |
| --warning-max-temperature      | Threshold in C.                                                                                                                                                                                                     |
| --critical-max-temperature     | Threshold in C.                                                                                                                                                                                                     |
| --warning-fantray-fan-speed    | Threshold in rpm.                                                                                                                                                                                                   |
| --critical-fantray-fan-speed   | Threshold in rpm.                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                | Description                                                                                                                     |
|:----------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters     | Only display some counters (regexp can be used). Can be : usage free usage-prct free-prct Example : --filter-counters='^usage$' |
| --warning-free        | Threshold in bytes.                                                                                                             |
| --critical-free       | Threshold in bytes.                                                                                                             |
| --warning-free-prct   | Threshold in percentage.                                                                                                        |
| --critical-free-prct  | Threshold in percentage.                                                                                                        |
| --warning-usage       | Threshold in bytes.                                                                                                             |
| --critical-usage      | Threshold in bytes.                                                                                                             |
| --warning-usage-prct  | Threshold in percentage.                                                                                                        |
| --critical-usage-prct | Threshold in percentage.                                                                                                        |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_f5os_snmp.pl \
	--plugin=os::f5os::snmp::plugin \
	--mode=memory \
	--help
```
