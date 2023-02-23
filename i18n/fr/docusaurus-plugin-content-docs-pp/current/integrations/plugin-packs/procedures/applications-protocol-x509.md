---
id: applications-protocol-x509
title: X509 Certificate
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **X509 Certificat** apporte un modèle d'hôte :

* App-Protocol-X509-custom

Il apporte le modèle de service suivant :

| Alias            | Modèle de service             | Description                                                               | Défaut |
|:-----------------|:------------------------------|:--------------------------------------------------------------------------|:-------|
| X509-Certificate | App-Protocol-X509-Certificate | Contrôle permettant de vérifier la date d'expiration d'un certificat X509 | X      |



> Les services par "Défaut" sont automatiquement liés au(x) modèle(s) d'hôte.

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="X509-Certificate" label="X509-Certificate">

| Métrique    | Unité |
|:------------|:------|
| status      |       |

</TabItem>
</Tabs>

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link
to the manufacturer official documentation BUT you should try to be as complete
as possible here as it will save time to everybody.*

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
dnf install centreon-pack-applications-protocol-x509
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-x509
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-x509
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **X509 Certificat**
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
dnf install centreon-plugin-Applications-Protocol-X509
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-X509
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-x509
```

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
usr/lib/centreon/plugins//centreon_protocol_x509.pl \
    --plugin=apps::protocols::x509::plugin \
    --mode=certificate \
    --custommode='tcp' \
    --hostname='10.0.0.1' \
    --port=443 \
    --warning-status='%{expiration} < 60' \
    --critical-status='%{expiration} < 30' \
    
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  | 
```

### Custom modes disponibles

Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
usr/lib/centreon/plugins//centreon_protocol_x509.pl \
    --plugin=apps::protocols::x509::plugin \
    --list-custommode
```

Le plugin apporte les custom modes suivants :

* opensslcli
* file
* https
* tcp

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
usr/lib/centreon/plugins//centreon_protocol_x509.pl \
    --plugin=apps::protocols::x509::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

* certificate

### Options complémentaires

#### Options des custom modes

Les options spécifiques aux modes custom sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="file" label="file">

| Option        | Description                          | Option type |
|:--------------|:-------------------------------------|:------------|
| --certificate |     Certificate file (PEM or DER).   | File        |

</TabItem>
<TabItem value="https" label="https">

| Option           | Description                                                                                                                            | Option type  |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| --hostname       |     IP Addr/FQDN of the webserver host                                                                                                 | Https        |
| --port           |     Port used by Webserver (Default: 443)                                                                                              | Https        |
| --method         |     Specify http method used (Default: 'GET')                                                                                          | Https        |
| --urlpath        |     Set path to get webpage (Default: '/')                                                                                             | Https        |
| --timeout        |     Threshold for HTTP timeout (Default: 5)                                                                                            | Https        |
| --header         |     Set HTTP headers (Multiple option)                                                                                                 | Https        |
| --no-follow      |     Do not follow http redirect                                                                                                        | Https        |
| --http-peer-addr |     Set the address you want to connect (Useful if hostname is only a vhost. no ip resolve)                                            | Http global  |
| --proxyurl       |     Proxy URL                                                                                                                          | Http global  |
| --proxypac       |     Proxy pac file (can be an url or local file)                                                                                       | Http global  |
| --insecure       |     Insecure SSL connections.                                                                                                          | Http global  |
| --http-backend   |     Set the backend used (Default: 'lwp') For curl: --http-backend=curl                                                                | Http global  |
| --ssl-opt        |     Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                          | Backend lwp  |
| --ssl            |     Set SSL version (--ssl=TLSv1).                                                                                                     | Backend lwp  |
| --curl-opt       |     Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).   | Backend curl |

</TabItem>
<TabItem value="opensslcli" label="opensslcli">

| Option                  | Description                                                                                                               | Option type    |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------|:---------------|
| --hostname              |     IP Addr/FQDN of the host.                                                                                             | Openssl cli    |
| --port                  |     Port used by host.                                                                                                    | Openssl cli    |
| --ssh-backend           |     Set the backend used (Default: 'sshcli') Can be: sshcli, plink, libssh.                                               | Ssh global     |
| --ssh-username          |     Connect with specified username.                                                                                      | Ssh global     |
| --ssh-password          |     Login with specified password. Cannot be used with sshcli backend.                                                    | Ssh global     |
| --ssh-port              |     Connect to specified port.                                                                                            | Ssh global     |
| --ssh-priv-key          |     Private key file for user authentication.                                                                             | Ssh global     |
| --sshcli-command        |     ssh command (default: 'ssh').                                                                                         | Backend sshcli |
| --sshcli-path           |     ssh command path (default: none)                                                                                      | Backend sshcli |
| --sshcli-option         |     Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                     | Backend sshcli |
| --plink-command         |     plink command (default: 'plink').                                                                                     | Backend plink  |
| --plink-path            |     plink command path (default: none)                                                                                    | Backend plink  |
| --plink-option          |     Specify plink options (example: --plink-option='-T').                                                                 | Backend plink  |
| --libssh-strict-connect |     Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.   | Backend libssh |

</TabItem>
<TabItem value="tcp" label="tcp">

| Option              | Description                                                                                                                                                                                                                     | Option type |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --hostname          |     IP Addr/FQDN of the host.                                                                                                                                                                                                   | Tcp         |
| --port              |     Port used by host.                                                                                                                                                                                                          | Tcp         |
| --servername        |     Servername of the host for SNI support (only with IO::Socket::SSL \>= 1.56) (eg: foo.bar.com).                                                                                                                              | Tcp         |
| --ssl-opt           |     Set SSL options.  Examples:  Do not verify certificate: --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE"  Verify certificate: --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_PEER" --ssl-opt="SSL\_version =\> 'TLSv1'"   | Tcp         |
| --ssl-ignore-errors |     Ignore SSL handshake errors. For example: 'SSL error: SSL wants a read first'.                                                                                                                                              | Tcp         |
| --timeout           |     Set timeout in seconds for SSL connection (Default: '3') (only with IO::Socket::SSL \>= 1.984).                                                                                                                             | Tcp         |
| --starttls          |     Init plaintext connection and start\_SSL after. Can be: 'smtp', 'ftp'.                                                                                                                                                      | Tcp         |

</TabItem>
</Tabs>

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="X509-Certificate" label="X509-Certificate">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --mode                                     |     Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --dyn-mode                                 |     Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global      |
| --list-mode                                |     List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --mode-version                             |     Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --version                                  |     Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --custommode                               |     Choose a custom mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --list-custommode                          |     List available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Global      |
| --multiple                                 |     Multiple custom mode objects (required by some specific modes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --pass-manager                             |     Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --verbose                                  |     Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --debug                                    |     Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --filter-perfdata                          |     Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --filter-perfdata-adv                      |     Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output      |
| --explode-perfdata-max                     |     Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
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
| --source-encoding                          |     Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --warning-status                           |     Set warning threshold for status. (Default: '%{expiration} \< 60'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}.                                                                                                                                                                                                                                                                                                                                                                                                                | Mode        |
| --critical-status                          |     Set critical threshold for status. (Default: '%{expiration} \< 30'). Can use special variables like: %{expiration}, %{subject}, %{issuer}, %{alt\_subjects}.  Examples :  Raise a critical alarm if certificate expires in less than 30 days or does not cover alternative name 'my.app.com' --critical-status='%{expiration} \< 30 \|\| %{alt\_subjects} !~ /my.app.com/'                                                                                                                                                                                                 | Mode        |

</TabItem>
</Tabs>


Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
usr/lib/centreon/plugins//centreon_protocol_x509.pl \
    --plugin=apps::protocols::x509::plugin \
    --mode=certificate \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.