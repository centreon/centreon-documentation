---
id: applications-protocol-snmp
title: SNMP Protocol
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le connecteur de supervision **Generic SNMP** apporte 2 modèles d'hôte :

* App-Protocol-SNMP
* App-Protocol-SNMP-Only

Le connecteur apporte les modèles de service suivants (classés par modèle d'hôte):

<Tabs groupId="sync">
<TabItem value="App-Protocol-SNMP" label="App-Protocol-SNMP">

| Alias | Modèle de service | Description |
|:------|:------------------|:------------|
| N/A   | N/A               | N/A         |

</TabItem>
<TabItem value="App-Protocol-SNMP-Only" label="App-Protocol-SNMP-Only">

| Alias | Modèle de service | Description |
|:------|:------------------|:------------|
| N/A   | N/A               | N/A         |

</TabItem>
<TabItem value="Sans modèle d'hôte" label="Sans modèle d'hôte">

| Alias         | Modèle de service               | Description                                                        |
|:--------------|:--------------------------------|:-------------------------------------------------------------------|
| Generic-Value | App-Protocol-SNMP-Numeric-Value | Contrôle permettant de récupérer une valeur numérique d'un OID     |
| Generic-Value | App-Protocol-SNMP-String-Value  | Contrôle permettant de récupérer une chaine de caractères d'un OID |
| Uptime        | App-Protocol-SNMP-Uptime        | Contrôle l'uptime d'un équipement en utilisant l'OID standard      |

> Ces services ne sont pas automatiquement créés lorsque le modèle d'hôte est appliqué.

</TabItem>
</Tabs>

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle              | Description                                                  |
|:-----------------------------|:-------------------------------------------------------------|
| SNMP Agents                  | Discover hosts by requesting their SNMP agents               |
| SNMP v3 Agents               | Discover hosts by requesting their SNMP agents using SNMP v3 |
| SNMP IP Addresses (RFC 4293) | Discover IP addresses by requesting a SNMP agent (RFC 4293)  |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
<TabItem value="Service" label="Service">

| Nom de la règle                   | Description |
|:----------------------------------|:------------|
| App-Protocol-SNMP-Collection-Name |             |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

</TabItem>
</Tabs>


### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Generic-Value" label="Generic-Value">

Coming soon

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

> L'option **--use-new-perfdata** est nécessaire pour avoir ce nouveau format de métrique (dans la macro de service **EXTRAOPTIONS**).

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre ressource en SNMP,  il est nécessaire de configurer l'agent de l'équipement en s'appuyant sur la documentation de ce dernier.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-protocol-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Generic SNMP**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Protocol-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

<Tabs groupId="sync">
<TabItem value="App-Protocol-SNMP" label="App-Protocol-SNMP">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Protocol-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

</TabItem>
<TabItem value="App-Protocol-SNMP-Only" label="App-Protocol-SNMP-Only">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Protocol-SNMP-Only-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

</TabItem>
</Tabs>


### Service 

Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Generic-Value" label="Generic-Value">

| Obligatoire | Macro          | Description                                                                     | Défaut                        |
|:------------|:---------------|:--------------------------------------------------------------------------------|:------------------------------|
|             | FORMATOK       |                                                                                 | %{filter_rows} value(s)       |
|             | FORMATUNKNOWN  |                                                                                 | value(s): %{details_unknown}  |
|             | OID            |                                                                                 |                               |
|             | WARNING        | Return Warning if an oid value match the regexp                                 |                               |
|             | CRITICAL       | Return Critical if an oid value match the regexp                                |                               |
|             | FORMATWARNING  |                                                                                 | value(s): %{details_warning}  |
|             | FORMATCRITICAL |                                                                                 | value(s): %{details_critical} |
|             | EXTRAOPTIONS   | Any extra option you may want to add to the command line (eg. a --verbose flag) |                               |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Obligatoire | Macro        | Description                                                                     | Défaut  |
|:------------|:-------------|:--------------------------------------------------------------------------------|:--------|
|             | WARNING      | Threshold warning                                                               |         |
|             | CRITICAL     | Threshold critical                                                              |         |
|             | EXTRAOPTIONS | Any extra option you may want to add to the command line (eg. a --verbose flag) |         |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
	--plugin=apps::protocols::snmp::plugin \
	--mode=uptime \
	--hostname=10.0.0.1 \
	--snmp-community='my-snmp-community' \
	--snmp-version=2c  \
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: System uptime is: 3m 25s | 'uptime'=205s;;;0; 
```

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
	--plugin=apps::protocols::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode            | Modèle de service associé       |
|:----------------|:--------------------------------|
| collection      | Not used in this Plugin Pack    |
| discovery       | Used for host discovery         |
| dynamic-command | Not used in this Plugin Pack    |
| numeric-value   | App-Protocol-SNMP-Numeric-Value |
| response-time   | Not used in this Plugin Pack    |
| string-value    | App-Protocol-SNMP-String-Value  |
| uptime          | App-Protocol-SNMP-Uptime        |



### Options complémentaires

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global |
| --dyn-mode                                 | Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --list-mode                                | List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --version                                  | Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --pass-manager                             | Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global |
| --verbose                                  | Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --debug                                    | Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --filter-perfdata-adv                      | Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output |
| --explode-perfdata-max                     | Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output |
| --change-short-output --change-long-output | Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --change-exit                              | Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --filter-uom                               | Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output |
| --opt-exit                                 | Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-ignore-perfdata                   | Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --output-ignore-label                      | Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --float-precision                          | Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --source-encoding                          | Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --hostname                                 | Hostname to query (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-community                           | Read community (defaults to public).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-version                             | Version: 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-port                                | Port (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-timeout                             | Timeout in secondes (default: 1) before retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-retries                             | Set the number of retries (default: 5) before failure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --snmp-autoreduce                          | Auto reduce SNMP request size in case of SNMP errors (By default, the divisor is 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-force-getnext                       | Use snmp getnext function (even in snmp v2c and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-username                            | Security name (only for SNMP v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP   |
| --authpassphrase                           | Authentication protocol pass phrase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --authprotocol                             | Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --privpassphrase                           | Privacy protocol pass phrase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --privprotocol                             | Privacy protocol: DES\|AES. Since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP   |
| --contextname                              | Context name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --contextengineid                          | Context engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP   |
| --securityengineid                         | Security engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP   |
| --snmp-errors-exit                         | Exit code for SNMP Errors (default: unknown)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --snmp-tls-transport                       | TLS Transport communication used (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --snmp-tls-our-identity                    | Our X.509 identity to use, which should either be a fingerprint or the filename that holds the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | SNMP   |
| --snmp-tls-their-identity                  | The remote server's identity to connect to, specified as either a fingerprint or a file name. Either this must be specified, or the hostname below along with a trust anchor.                                                                                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-tls-their-hostname                  | The remote server's hostname that is expected. If their certificate was signed by a CA then their hostname presented in the certificate must match this value or the connection fails to be established (to avoid man-in-the-middle attacks).                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-tls-trust-cert                      | A trusted certificate to use as trust anchor (like a CA certificate) for verifying a remote server's certificate. If a CA certificate is used to validate a certificate then the TheirHostname parameter must also be specified to ensure their presented hostname in the certificate matches.                                                                                                                                                                                                                                                                             | SNMP   |



#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Generic-Value" label="Generic-Value">

| Option                  | Description                                                                                                                                                                                                                                                                                                                                                                         | Type |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --oid or <--oid-leef>   | OID value to check (numeric format only).                                                                                                                                                                                                                                                                                                                                           | Mode |
| --oid-table             | OID table value to check (numeric format only).                                                                                                                                                                                                                                                                                                                                     | Mode |
| --oid-instance          | OID table value for the instance (numeric format only). Can be used to have human readable instance name.                                                                                                                                                                                                                                                                           | Mode |
| --filter-table-value    | Filter value from --oid-table option (can be a regexp).                                                                                                                                                                                                                                                                                                                             | Mode |
| --filter-table-instance | Filter instance from --oid-table option (can be a regexp).                                                                                                                                                                                                                                                                                                                          | Mode |
| --warning-regexp        | Return Warning if an oid value match the regexp.                                                                                                                                                                                                                                                                                                                                    | Mode |
| --critical-regexp       | Return Critical if an oid value match the regexp.                                                                                                                                                                                                                                                                                                                                   | Mode |
| --regexp-isensitive     | Allows to use regexp non case-sensitive.                                                                                                                                                                                                                                                                                                                                            | Mode |
| --format-*              | Output format according the threshold. Can be: 'ok' (default: '%{filter\_rows} value(s)'), 'warning' (default: 'value(s): %{details\_warning}'), 'critical' (default: 'value(s): %{details\_critical}'), 'unknown' (default: 'value(s): %{details\_unknown}'). Can used: %{rows}, %{filter\_rows}, %{details\_warning}, %{details\_ok}, %{details\_critical}, %{details\_unknown}   | Mode |
| --map-values            | Use to transform an integer value in most common case. Example: --map-values='1=\>ok,10=\>fan failed,11=\>psu recovery'                                                                                                                                                                                                                                                             | Mode |
| --map-value-other       | Use to transform an integer value not defined in --map-values option.                                                                                                                                                                                                                                                                                                               | Mode |
| --map-values-separator  | Separator uses between values (default: coma).                                                                                                                                                                                                                                                                                                                                      | Mode |
| --convert-custom-values | Custom code to convert values. Example to convert octetstring to macaddress: --convert-custom-values='join(":", unpack("(H2)*", $value))'                                                                                                                                                                                                                                           | Mode |
| --use-perl-mod          | Load additional Perl module (Can be multiple) Example : --use-perl-mod='Date::Parse'                                                                                                                                                                                                                                                                                                | Mode |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                 | Description                                                                                                                                                    | Type      |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached            | Memcached server to use (only one server).                                                                                                                     | Retention |
| --redis-server         | Redis server to use (only one server). SYntax: address\[:port\]                                                                                                | Retention |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                        | Retention |
| --redis-db             | Set Redis database index.                                                                                                                                      | Retention |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                           | Retention |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                 | Retention |
| --statefile-dir        | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                            | Retention |
| --statefile-suffix     | Add a suffix for the statefile name (Default: '').                                                                                                             | Retention |
| --statefile-concat-cwd | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                     | Retention |
| --statefile-format     | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                             | Retention |
| --statefile-key        | Key to encrypt/decrypt cache.                                                                                                                                  | Retention |
| --statefile-cipher     | Cipher to encrypt cache (Default: 'AES').                                                                                                                      | Retention |
| --warning-uptime       | Threshold warning.                                                                                                                                             | Mode      |
| --critical-uptime      | Threshold critical.                                                                                                                                            | Mode      |
| --add-sysdesc          | Display system description.                                                                                                                                    | Mode      |
| --force-oid            | Can choose your oid (numeric format only).                                                                                                                     | Mode      |
| --check-overload       | Uptime counter limit is 4294967296 and overflow. With that option, we manage the counter going back. But there is a few chance we can miss a reboot.           | Mode      |
| --reboot-window        | To be used with check-overload option. Time in milliseconds (Default: 5000) You increase the chance of not missing a reboot if you decrease that value.        | Mode      |
| --unit                 | Select the unit for performance data and thresholds. May be 's'for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds    | Mode      |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_generic_snmp.pl \
	--plugin=apps::protocols::snmp::plugin \
	--mode=numeric-value \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.