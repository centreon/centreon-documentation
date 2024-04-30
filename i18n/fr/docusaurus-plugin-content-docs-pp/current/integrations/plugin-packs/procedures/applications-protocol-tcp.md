---
id: applications-protocol-tcp
title: TCP Protocol
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le connecteur de supervision **Protocol TCP** apporte 2 modèles d'hôte :

* App-Protocol-Tcp
* App-Protocol-Tcp-Only

Le connecteur apporte les modèles de service suivants (classés par modèle d'hôte):

<Tabs groupId="sync">
<TabItem value="App-Protocol-Tcp" label="App-Protocol-Tcp">

| Alias | Modèle de service | Description |
|:------|:------------------|:------------|
| N/A   | N/A               | N/A         |

</TabItem>
<TabItem value="App-Protocol-Tcp-Only" label="App-Protocol-Tcp-Only">

| Alias | Modèle de service | Description |
|:------|:------------------|:------------|
| N/A   | N/A               | N/A         |

</TabItem>
<TabItem value="Sans modèle d'hôte" label="Sans modèle d'hôte">

| Alias             | Modèle de service                  | Description                                |
|:------------------|:-----------------------------------|:-------------------------------------------|
| Connection-Status | App-Protocol-Tcp-Connection-Status | Contrôle la connexion à un port TCP        |
| Response-Time     | App-Protocol-Tcp-Response-Time     | Contrôle le temps de réponse à un port TCP |

> Ces services ne sont pas automatiquement créés lorsque le modèle d'hôte est appliqué.

</TabItem>
</Tabs>



### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Connection-Status" label="Connection-Status">

| Métrique                  | Unité |
|:--------------------------|:------|
| status                    | N/A   |
| tcp.response.time.seconds | s     |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| tcp.roundtrip.time.average.milliseconds | ms    |
| tcp.roundtrip.time.maximum.milliseconds | ms    |
| tcp.roundtrip.time.minimum.milliseconds | ms    |
| tcp.packets.loss.percentage             | %     |

</TabItem>
</Tabs>

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
dnf install centreon-pack-applications-protocol-tcp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-tcp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-protocol-tcp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-tcp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Protocol TCP**
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
dnf install centreon-plugin-Applications-Protocol-Tcp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Protocol-Tcp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Tcp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-protocol-tcp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

<Tabs groupId="sync">
<TabItem value="App-Protocol-Tcp" label="App-Protocol-Tcp">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Protocol-Tcp-custom**.

| Obligatoire | Macro                | Description | Défaut  |
|:------------|:---------------------|:------------|:--------|
|             | TCPPACKETLOSSPERCENT |             | 50      |
|             | TCPPACKETS           |             | 1       |
|             | TCPPORT              |             | 80      |
|             | TCPTIMEOUT           |             | 3       |

</TabItem>
<TabItem value="App-Protocol-Tcp-Only" label="App-Protocol-Tcp-Only">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Protocol-Tcp-Only-custom**.
4. Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                | Description | Défaut  |
|:------------|:---------------------|:------------|:--------|
|             | TCPPACKETLOSSPERCENT |             | 50      |
|             | TCPPACKETS           |             | 1       |
|             | TCPPORT              |             | 80      |
|             | TCPTIMEOUT           |             | 3       |

</TabItem>
</Tabs>


### Service 

Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connection-Status" label="Connection-Status">

| Obligatoire | Macro        | Description                                                                     | Défaut  |
|:------------|:-------------|:--------------------------------------------------------------------------------|:--------|
|             | TIMEOUT      | Connection timeout in seconds (Default: 3)                                      | 5       |
|             | PORT         | Port used                                                                       |         |
|             | WARNING      |                                                                                 |         |
|             | CRITICAL     |                                                                                 |         |
|             | EXTRAOPTIONS | Any extra option you may want to add to the command line (eg. a --verbose flag) |         |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Obligatoire | Macro         | Description                                                                     | Défaut  |
|:------------|:--------------|:--------------------------------------------------------------------------------|:--------|
|             | PACKETS       | Number of packets to send (Default: 5)                                          | 5       |
|             | TIMEOUT       | Set timeout in seconds (Default: 5)                                             | 5       |
|             | PORT          | Port used                                                                       |         |
|             | WARNINGPL     | Packets lost threshold warning in %                                             |         |
|             | CRITICALPL    | Packets lost threshold critical in %                                            |         |
|             | WARNINGRTA    | Response time threshold warning in milliseconds                                 |         |
|             | CRITICALRTA   | Response time threshold critical in milliseconds                                |         |
|             | WARNINGRTMAX  |                                                                                 |         |
|             | CRITICALRTMAX |                                                                                 |         |
|             | WARNINGRTMIN  |                                                                                 |         |
|             | CRITICALRTMIN |                                                                                 |         |
|             | EXTRAOPTIONS  | Any extra option you may want to add to the command line (eg. a --verbose flag) |         |

</TabItem>
</Tabs>

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_protocol_tcp.pl \
	--plugin=apps::protocols::tcp::plugin \
	--mode=response-time  \
	--hostname='10.0.0.1' \
	--port='80' \
	--timeout='' \
	--warning-rta='' \
	--critical-rta='' \
	--warning-rtmax='' \
	--critical-rtmax='' \
	--warning-rtmin='' \
	--critical-rtmin='' \
	--warning-pl='' \
	--critical-pl='' \
	
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: TCP '10.0.0.1' port 80 rta 0.633ms, lost 0% | 'tcp.roundtrip.time.average.milliseconds'=0.633ms;;;0; 'tcp.roundtrip.time.maximum.milliseconds'=2.145ms;;;0; 'tcp.roundtrip.time.minimum.milliseconds'=0.193ms;;;0; 'tcp.packets.loss.percentage'=0%;;;0;100
```

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_protocol_tcp.pl \
	--plugin=apps::protocols::tcp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode              | Modèle de service associé          |
|:------------------|:-----------------------------------|
| connection-status | App-Protocol-Tcp-Connection-Status |
| response-time     | App-Protocol-Tcp-Response-Time     |



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



#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Connection-Status" label="Connection-Status">

| Option            | Description                                                                                                                                    | Type |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --hostname        | IP Addr/FQDN of the host                                                                                                                       | Mode |
| --port            | Port used                                                                                                                                      | Mode |
| --ssl             | Use SSL connection. (no attempt is made to check the certificatevalidity by default).                                                          | Mode |
| --timeout         | Connection timeout in seconds (Default: 3)                                                                                                     | Mode |
| --unknown-status  | Set unknown threshold for status. Can used special variables like: %{status}, %{port}, %{error\_message}                                       | Mode |
| --warning-status  | Set warning threshold for status. Can used special variables like: %{status}, %{port}, %{error\_message}                                       | Mode |
| --critical-status | Set critical threshold for status (Default: '%{status} eq "failed"'). Can used special variables like: %{status}, %{port}, %{error\_message}   | Mode |
| --warning-time    | Threshold warning in seconds                                                                                                                   | Mode |
| --critical-time   | Threshold critical in seconds                                                                                                                  | Mode |

</TabItem>
<TabItem value="Response-Time" label="Response-Time">

| Option            | Description                                                                          | Type |
|:------------------|:-------------------------------------------------------------------------------------|:-----|
| --filter-counters | Only display some counters (regexp can be used). Example : --filter-counters='rta'   | Mode |
| --hostname        | IP Addr/FQDN of the host                                                             | Mode |
| --port            | Port used                                                                            | Mode |
| --timeout         | Set timeout in seconds (Default: 5).                                                 | Mode |
| --packets         | Number of packets to send (Default: 5).                                              | Mode |
| --warning-rta     | Response time threshold warning in milliseconds                                      | Mode |
| --critical-rta    | Response time threshold critical in milliseconds                                     | Mode |
| --warning-pl      | Packets lost threshold warning in %                                                  | Mode |
| --critical-pl     | Packets lost threshold critical in %                                                 | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_protocol_tcp.pl \
	--plugin=apps::protocols::tcp::plugin \
	--mode=connection-status  \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.