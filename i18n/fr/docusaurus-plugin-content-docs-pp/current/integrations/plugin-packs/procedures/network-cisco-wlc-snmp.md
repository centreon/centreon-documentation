---
id: network-cisco-wlc-snmp
title: Cisco WLC
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Cisco WLC** apporte un modèle d'hôte :

* Net-Cisco-Wlc-SNMP-custom

Il apporte les modèles de service suivants :

| Alias                          | Modèle de service                                 | Description                                                         | Défaut | Découverte |
|:-------------------------------|:--------------------------------------------------|:--------------------------------------------------------------------|:-------|:-----------|
| Ap-Channel-Interference-Global | Net-Cisco-Wlc-Ap-Channel-Interference-Global-SNMP | Contrôle les interférences sur les canaux de l'ensemble des relais  |        |            |
| Ap-Channel-Noise-Global        | Net-Cisco-Wlc-Ap-Channel-Noise-Global-SNMP        | Contrôle le bruit sur les canaux de l'ensemble des relais           |        |            |
| Ap-Status-Global               | Net-Cisco-Wlc-Ap-Status-Global-SNMP               | Contrôle le statut de l'ensemble des relais                         | X      | X          |
| Ap-Users                       | Net-Cisco-Wlc-Ap-Users-SNMP                       | Contrôle le nombre d'utilisateurs sur l'ensemble des relais         |        |            |
| Cpu                            | Net-Cisco-Wlc-Cpu-SNMP                            | Contrôle le taux d'utilisation du CPU                               | X      |            |
| Hardware-Global                | Net-Cisco-Wlc-Hardware-Global-SNMP                | Contrôle l'ensemble du matériel                                     | X      |            |
| Memory                         | Net-Cisco-Wlc-Memory-SNMP                         | Contrôle du taux d'utilisation de la mémoire vive                   | X      |            |
| Traffic-Generic-Id             | Net-Cisco-Wlc-Traffic-Generic-Id-SNMP             | Contrôle le trafic réseau d'une interface réseau                   |        |            |
| Traffic-Generic-Name           | Net-Cisco-Wlc-Traffic-Generic-Name-SNMP           | Contrôle le trafic réseau d'une interface réseau                   |        |            |
| Traffic-Global                 | Net-Cisco-Wlc-Traffic-Global-SNMP                 | Contrôle le trafic réseau de plusieurs interfaces réseau           |        | X          |

> Les services par **Défaut** sont créés automatiquement lorsque le modèle d'hôte est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

### Règles de découverte

| Nom de la règle                 | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| Net-Cisco-Wlc-SNMP-Traffic-Name | Découvre les interfaces réseau et supervise l'utilisation de la bande passante |
| Net-Cisco-Wlc-SNMP-AP-Name      |                                                               |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Ap-Channel-Interference-*" label="Ap-Channel-Interference-*">

| Métrique                                                    | Unité |
|:------------------------------------------------------------|:------|
| ap~channels#accesspoint.interference.power.count            | count |
| ap~channels#accesspoint.interference.utilization.percentage | %     |

</TabItem>
<TabItem value="Ap-Channel-Noise-*" label="Ap-Channel-Noise-*">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| ap~channels#accesspoint.noise.power.dbm | dBm   |

</TabItem>
<TabItem value="Ap-Status-*" label="Ap-Status-*">

| Métrique                                                                  | Unité |
|:--------------------------------------------------------------------------|:------|
| accesspoints.total.count                                                  | count |
| accesspoints.associated.count                                             | count |
| accesspoints.disassociating.count                                         | count |
| accesspoints.downloading.count                                            | count |
| accesspoints.enabled.count                                                | count |
| accesspoints.disabled.count                                               | count |
| status                                                                    | N/A   |
| ap~interfaces#radio-status                                                | N/A   |
| ap~interfaces#accesspoint.radio.interface.channels.utilization.percentage | %     |

</TabItem>
<TabItem value="Ap-Users" label="Ap-Users">

| Métrique                         | Unité |
|:---------------------------------|:------|
| users.total.count                | count |
| users.idle.count                 | count |
| users.aaapending.count           | count |
| users.authenticated.count        | count |
| users.associated.count           | count |
| users.disassociated.count        | count |
| users.powersave.count            | count |
| users.tobedeleted.count          | count |
| users.probing.count              | count |
| users.blacklisted.count          | count |
| ssid#ssid.users.total.count      | count |
| ap#accesspoint.users.total.count | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                   | Unité |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Hardware-*" label="Hardware-*">

Coming soon

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| int#interface.traffic.in.bitspersecond  | b/s   |
| int#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| int#interface.traffic.in.bitspersecond  | b/s   |
| int#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| int#interface.traffic.in.bitspersecond  | b/s   |
| int#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre ressource en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [CISCO WLC](https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/snmp.html)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-wlc-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Cisco WLC**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Cisco-Wlc-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Wlc-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-wlc-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Wlc-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire    | Macro            | Description                                  |
|:---------------|:-----------------|:---------------------------------------------|
|                | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --mode=ap-status \
    --hostname=10.0.0.1 \
    --snmp-community='my-snmp-community' \
    --snmp-version=2c \
    --filter-name='' \
    --filter-group='' \
    --warning-radio-status='' \
    --critical-radio-status='' \
    --warning-radio-interface-channels-utilization='' \
    --critical-radio-interface-channels-utilization='' \
    --warning-total='' \
    --critical-total='' \
    --warning-total-associated='' \
    --critical-total-associated='' \
    --warning-total-disassociating='' \
    --critical-total-disassociating='' \
    --warning-total-enabled='' \
    --critical-total-enabled='' \
    --warning-total-disabled='' \
    --critical-total-disabled='' \
    --warning-status='' \
    --critical-status='' \
    
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: total: %s associated: %s disassociating: %s downloading: %s enabled: %s disabled: %s   channels utilization: %s %% | 'accesspoints.total.count'=14;;;0 ;  'accesspoints.associated.count'=62;;;0 ;  'accesspoints.disassociating.count'=92;;;0 ;  'accesspoints.downloading.count'=57;;;0 ;  'accesspoints.enabled.count'=9;;;0 ;  'accesspoints.disabled.count'=54;;;0 ;  'accesspoint.radio.interface.channels.utilization.percentage'=80%;;;0;100 
```

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

* ap-channel-interference
* ap-channel-noise
* ap-status
* ap-users
* cpu
* discovery
* hardware
* interfaces
* list-aps
* list-groups
* list-interfaces
* list-radius-acc-servers
* list-radius-auth-servers
* memory
* radius-acc-servers
* radius-auth-servers

### Options complémentaires

#### Options globales

Les options globales aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --mode                                     |     Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --dyn-mode                                 |     Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global      |
| --list-mode                                |     List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --mode-version                             |     Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --version                                  |     Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --pass-manager                             |     Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --verbose                                  |     Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --debug                                    |     Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --filter-perfdata                          |     Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --filter-perfdata-adv                      |     Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output      |
| --explode-perfdata-max                     |     Put max perfdata (if it exists) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
| --filter-uom                               |     Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output      |
| --opt-exit                                 |     Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-ignore-perfdata                   |     Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --output-ignore-label                      |     Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-xml                               |     Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output      |
| --output-json                              |     Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output      |
| --output-openmetrics                       |     Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --output-file                              |     Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --disco-format                             |     Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output      |
| --disco-show                               |     Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output      |
| --float-precision                          |     Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --source-encoding                          |     Set encoding of monitoring sources (In some cases. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --hostname                                 |     Hostname to query (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | SNMP        |
| --snmp-community                           |     Read community (defaults to public).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --snmp-version                             |     Version: 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP        |
| --snmp-port                                |     Port (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --snmp-timeout                             |     Timeout in seconds (default: 1) before retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP        |
| --snmp-retries                             |     Set the number of retries (default: 5) before failure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP        |
| --maxrepetitions                           |     Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP        |
| --subsetleef                               |     How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. It is recommended to leave the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP        |
| --snmp-autoreduce                          |     Auto reduce SNMP request size in case of SNMP errors (By default, the divisor is 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --snmp-force-getnext                       |     Use snmp getnext function (even in snmp v2c and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --snmp-username                            |     Security name (only for SNMP v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP        |
| --authpassphrase                           |     Authentication protocol pass phrase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP        |
| --authprotocol                             |     Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP        |
| --privpassphrase                           |     Privacy protocol pass phrase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP        |
| --privprotocol                             |     Privacy protocol: DES\|AES. Since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP        |
| --contextname                              |     Context name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP        |
| --contextengineid                          |     Context engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP        |
| --securityengineid                         |     Security engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP        |
| --snmp-errors-exit                         |     Exit code for SNMP Errors (default: unknown)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP        |
| --snmp-tls-transport                       |     TLS Transport communication used (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP        |
| --snmp-tls-our-identity                    |     Our X.509 identity to use, which should either be a fingerprint or the filename that holds the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | SNMP        |
| --snmp-tls-their-identity                  |     The remote server's identity to connect to, specified as either a fingerprint or a file name. Either this must be specified, or the hostname below along with a trust anchor.                                                                                                                                                                                                                                                                                                                                                                                              | SNMP        |
| --snmp-tls-their-hostname                  |     The remote server's hostname that is expected. If their certificate was signed by a CA then their hostname presented in the certificate must match this value or the connection fails to be established (to avoid man-in-the-middle attacks).                                                                                                                                                                                                                                                                                                                              | SNMP        |
| --snmp-tls-trust-cert                      |     A trusted certificate to use as trust anchor (like a CA certificate) for verifying a remote server's certificate. If a CA certificate is used to validate a certificate then the TheirHostname parameter must also be specified to ensure their presented hostname in the certificate matches.                                                                                                                                                                                                                                                                             | SNMP        |


#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Ap-Channel-Interference-*" label="Ap-Channel-Interference-*">

| Option                   | Description                                                                                           | Option type |
|:-------------------------|:------------------------------------------------------------------------------------------------------|:------------|
| --filter-counters        |     Only display some counters (regexp can be used). Example: --filter-counters='interference-util'   | Mode        |
| --filter-name            |     Filter access point name (can be a regexp).                                                       | Mode        |
| --filter-group           |     Filter access point group (can be a regexp).                                                      | Mode        |
| --filter-channel         |     Filter channel (can be a regexp). Example: --filter-channel='slot0:channel3'                      | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'interference-power', 'interference-util' (%).                                | Mode        |

</TabItem>
<TabItem value="Ap-Channel-Noise-*" label="Ap-Channel-Noise-*">

| Option                   | Description                                                                        | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------|:------------|
| --filter-name            |     Filter access point name (can be a regexp).                                    | Mode        |
| --filter-group           |     Filter access point group (can be a regexp).                                   | Mode        |
| --filter-channel         |     Filter channel (can be a regexp). Example: --filter-channel='slot0:channel3'   | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'noise-power' (dBm).                                       | Mode        |

</TabItem>
<TabItem value="Ap-Status-*" label="Ap-Status-*">

| Option                   | Description                                                                                                                                                                                        | Option type |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-counters        |     Only display some counters (regexp can be used). Example: --filter-counters='^total-disassociating\|total-associated$'                                                                         | Mode        |
| --filter-name            |     Filter access point name (can be a regexp).                                                                                                                                                    | Mode        |
| --filter-group           |     Filter access point group (can be a regexp).                                                                                                                                                   | Mode        |
| --add-radio-interfaces   |     Monitor radio interfaces channels utilization.                                                                                                                                                 | Mode        |
| --warning-status         |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{display}                                                                                       | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "enable" and %{opstatus} !~ /associated\|downloading/'). Can use special variables like: %{admstatus}, %{opstatus}, %{display}   | Mode        |
| --warning-radio-status   |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{display}                                                                                       | Mode        |
| --critical-radio-status  |     Set critical threshold for status (Default: '%{admstatus} eq "enable" and %{opstatus} eq "down"'). Can use special variables like: %{admstatus}, %{opstatus}, %{display}                      | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total', 'total-associated', 'total-disassociating', 'total-downloading', 'total-enabled', 'total-disabled', 'radio-interface-channels-utilization' (%).                   | Mode        |

</TabItem>
<TabItem value="Ap-Users" label="Ap-Users">

| Option                   | Description                                                                                                                                                                                                                         | Option type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --filter-counters        |     Only display some counters (regexp can be used). Example: --filter-counters='^total\|total-idle$'                                                                                                                               | Mode        |
| --filter-ssid            |     Filter by SSID (can be a regexp).                                                                                                                                                                                               | Mode        |
| --filter-ap              |     Filter by access point name (can be a regexp).                                                                                                                                                                                  | Mode        |
| --filter-group           |     Filter by access point group (can be a regexp).                                                                                                                                                                                 | Mode        |
| --ignore-ap-users        |     Unmonitor users by access points.                                                                                                                                                                                               | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total', 'total-idle', 'total-aaapending', 'total-authenticated', 'total-associated', 'total-powersave', 'total-disassociated', 'total-tobedeleted', 'total-probing', 'total-blacklisted', 'ssid', 'ap'.    | Mode        |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                     | Description                           | Option type |
|:---------------------------|:--------------------------------------|:------------|
| --warning-cpu-utilization  |     Warning threshold in percent.     | Mode        |
| --critical-cpu-utilization |     Critical threshold in percent.    | Mode        |

</TabItem>
<TabItem value="Hardware-*" label="Hardware-*">

| Option               | Description                                                                                                                                                                                               | Option type |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --component          |     Which component to check (Default: '.*'). Can be: 'psu'.                                                                                                                                              | Mode        |
| --filter             |     Exclude some parts (comma seperated list) (Example: --filter=psu) Can also exclude specific instance: --filter=psu,1                                                                                  | Mode        |
| --absent-problem     |     Return an error if an entity is not 'present' (default is skipping) (comma seperated list) Can be specific or global: --absent-problem=psu,1                                                          | Mode        |
| --no-component       |     Return an error if no compenents are checked. If total (with skipped) is 0. (Default: 'critical' returns).                                                                                            | Mode        |
| --threshold-overload |     Set to overload default threshold values (syntax: section,\[instance,\]status,regexp) It used before default thresholds (order stays). Example: --threshold-overload='psu,WARNING,not operational'    | Mode        |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                 | Option type |
|:-------------------------|:----------------------------------------------------------------------------|:------------|
| --warning-* --critical-* |     Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).    | Mode        |

</TabItem>
<TabItem value="Traffic-*" label="Traffic-*">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead of interface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead of interface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Option                   | Description                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --memcached              |     Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention   |
| --redis-server           |     Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention   |
| --redis-attribute        |     Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention   |
| --redis-db               |     Set Redis database index.                                                                                                                                                                                                                                                                  | Retention   |
| --failback-file          |     Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention   |
| --memexpiration          |     Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention   |
| --statefile-dir          |     Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention   |
| --statefile-suffix       |     Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention   |
| --statefile-concat-cwd   |     Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention   |
| --statefile-format       |     Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention   |
| --statefile-key          |     Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention   |
| --statefile-cipher       |     Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention   |
| --add-global             |     Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode        |
| --add-status             |     Check interface status.                                                                                                                                                                                                                                                                    | Mode        |
| --add-duplex-status      |     Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode        |
| --add-traffic            |     Check interface traffic.                                                                                                                                                                                                                                                                   | Mode        |
| --add-errors             |     Check interface errors.                                                                                                                                                                                                                                                                    | Mode        |
| --add-cast               |     Check interface cast.                                                                                                                                                                                                                                                                      | Mode        |
| --add-speed              |     Check interface speed.                                                                                                                                                                                                                                                                     | Mode        |
| --add-volume             |     Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode        |
| --check-metrics          |     If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode        |
| --warning-status         |     Set warning threshold for status. Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                                                                                  | Mode        |
| --critical-status        |     Set critical threshold for status (Default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). Can use special variables like: %{admstatus}, %{opstatus}, %{duplexstatus}, %{display}                                                                                                       | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode        |
| --units-traffic          |     Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode        |
| --units-errors           |     Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode        |
| --units-cast             |     Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode        |
| --nagvis-perfdata        |     Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode        |
| --interface              |     Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces').                                                                                                                                                                                                       | Mode        |
| --name                   |     Allows to use interface name with option --interface instead of interface oid index (Can be a regexp)                                                                                                                                                                                       | Mode        |
| --speed                  |     Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode        |
| --speed-in               |     Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --speed-out              |     Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode        |
| --map-speed-dsl          |     Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode        |
| --force-counters64       |     Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode        |
| --force-counters32       |     Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode        |
| --reload-cache-time      |     Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode        |
| --oid-filter             |     Choose OID used to filter interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode        |
| --oid-display            |     Choose OID used to display interface (default: ifName) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode        |
| --oid-extra-display      |     Add an OID to display.                                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-src  |     Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --display-transform-dst  |     Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode        |
| --show-cache             |     Display cache interface datas.                                                                                                                                                                                                                                                             | Mode        |

</TabItem>
</Tabs>


Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --mode=ap-status \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.