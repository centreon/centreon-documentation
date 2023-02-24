---
id: applications-wsus-nsclient
title: Microsoft WSUS Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Microsoft WSUS** apporte 2 modèles d'hôte différents :

* App-Wsus-NRPE-custom
* App-Wsus-NSClient-05-Restapi-custom

Il apporte les modèles de service suivants :

| Alias                  | Modèle de service                                  | Description                                                                    | Défaut |
|:-----------------------|:---------------------------------------------------|:-------------------------------------------------------------------------------|:-------|
| Computers-Status       | App-Wsus-Computers-Status-NRPE                     | Contrôle le nombre d'ordinateurs dans chacun des statuts                       | X      |
| Computers-Status       | App-Wsus-Computers-Status-NSClient05-Restapi       | Contrôle le nombre d'ordinateurs dans chacun des statuts                       | X      |
| Server-Statistics      | App-Wsus-Server-Statistics-NRPE                    | Contrôle plusieurs statistiques du serveur WSUS                                | X      |
| Server-Statistics      | App-Wsus-Server-Statistics-NSClient05-Restapi      | Contrôle plusieurs statistiques du serveur WSUS                                | X      |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-NRPE               | Contrôle le statut de la synchronisation des mises à jour avec le serveur WSUS | X      |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-NSClient05-Restapi | Contrôle le statut de la synchronisation des mises à jour avec le serveur WSUS | X      |
| Update-Status          | App-Wsus-Update-Status-NRPE                        | Contrôle le statut des mises à jour                                            | X      |
| Update-Status          | App-Wsus-Update-Status-NSClient05-Restapi          | Contrôle le statut des mises à jour                                            | X      |



> Les services par "Défaut" sont automatiquement liés au(x) modèle(s) d'hôte.

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Métrique           | Unité |
|:-------------------|:------|
| needing-updates    |       |
| not-contacted      |       |
| unassigned         |       |
| up-to-date         |       |
| with-update-errors |       |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Métrique             | Unité |
|:---------------------|:------|
| approved-updates     |       |
| computer-groups      |       |
| computers            |       |
| declined-updates     |       |
| expired-updates      |       |
| not-approved-updates |       |
| stale-updates        |       |
| updates              |       |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Métrique                      | Unité |
|:------------------------------|:------|
| synchronisation-progress      |       |
| synchronisation-status        |       |
| last-synchronisation-duration |       |
| last-synchronisation-status   |       |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Métrique            | Unité |
|:--------------------|:------|
| needed-by-computers |       |
| needing-files       |       |
| up-to-date          |       |
| with-client-errors  |       |
| with-server-errors  |       |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour surveiller les ressources *Windows* via NSClient++ API, installez la version Centreon de l'agent NSClient++.
Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur Web / RestAPI** est correcte.

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
dnf install centreon-pack-applications-wsus-nsclient
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-wsus-nsclient
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-wsus-nsclient
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Microsoft WSUS**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-nrpe3-plugin
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
* Appliquez le modèle d'hôte **App-Wsus-NRPE-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire    | Macro                     | Description                                                                            |
|:---------------|:--------------------------|:---------------------------------------------------------------------------------------|
|                | NRPECLIENT                | (Défaut : 'check_centreon_nrpe')                                                       |
|                | NRPEEXTRAOPTIONS          | -u -m 8192                                                                             |
|                | NRPEPORT                  | (Défaut : '5666')                                                                      |
|                | NRPETIMEOUT               | (Défaut : '55')                                                                        |
|                | NSCPRESTAPIEXTRAOPTIONS   | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|                | NSCPRESTAPILEGACYPASSWORD |                                                                                        |
|                | NSCPRESTAPIPORT           |                                                                                        |
|                | NSCPRESTAPIPROTO          |                                                                                        |
|                | WSUSPORT                  |                                                                                        |
|                | WSUSSERVER                |                                                                                        |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --mode=query \
    --hostname=10.0.0.1 \
    --port='' \
    --proto='' \
    --legacy-password='' \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::wsus::local::plugin' \
    --arg='updates-status' \
    --arg=' \
    --wsus-server="" \
    --wsus-port="" \
    --filter-counters="" \
    --warning-with-client-errors="" \
    --critical-with-client-errors="" \
    --warning-with-server-errors="" \
    --critical-with-server-errors="" \
    --warning-needing-files="" \
    --critical-needing-files="" \
    --warning-needed-by-computers="" \
    --critical-needed-by-computers="" \
    --warning-up-to-date="" \
    --critical-up-to-date="" \
    --verbose'\
    
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: With Client Errors: 96 With Server Errors: 70 Needing Files: 60 Needed By Computers: 19 Up-to-date: %s | 
```

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

* computers-status
* server-statistics
* synchronisation-status
* updates-status

### Options complémentaires

#### Options globales

Les options globales aux modes sont listées ci-dessus :

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


#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Option                   | Description                                                                                                                                | Option type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --timeout                |     Set timeout time for command execution (Default: 30 sec)                                                                               | Mode        |
| --no-ps                  |     Don't encode powershell. To be used with --command and 'type'command.                                                                  | Mode        |
| --command                |     Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.   | Mode        |
| --command-path           |     Command path (Default: none).                                                                                                          | Mode        |
| --command-options        |     Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                | Mode        |
| --ps-display             |     Display powershell script.                                                                                                             | Mode        |
| --ps-exec-only           |     Print powershell output.                                                                                                               | Mode        |
| --wsus-server            |     Set WSUS hostname/IP.                                                                                                                  | Mode        |
| --wsus-port              |     Set WSUS port.                                                                                                                         | Mode        |
| --not-updated-since      |     Time in days to count computers not updated since (Default: 30).                                                                       | Mode        |
| --use-ssl                |     Set if WSUS use ssl.                                                                                                                   | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'needing-updates', 'with-update-errors', 'up-to-date', 'not-contacted', 'unassigned'                               | Mode        |
| --filter-counters        |     Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   | Mode        |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Option            | Description                                                                                                                                                                      | Option type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --timeout         |     Set timeout time for command execution (Default: 30 sec)                                                                                                                     | Mode        |
| --no-ps           |     Don't encode powershell. To be used with --command and 'type'command.                                                                                                        | Mode        |
| --command         |     Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.                                         | Mode        |
| --command-path    |     Command path (Default: none).                                                                                                                                                | Mode        |
| --command-options |     Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                      | Mode        |
| --ps-display      |     Display powershell script.                                                                                                                                                   | Mode        |
| --ps-exec-only    |     Print powershell output.                                                                                                                                                     | Mode        |
| --wsus-server     |     Set WSUS hostname/IP (Dafault: localhost).                                                                                                                                   | Mode        |
| --wsus-port       |     Set WSUS port (Default: 8530).                                                                                                                                               | Mode        |
| --use-ssl         |     Set if WSUS use ssl.                                                                                                                                                         | Mode        |
| --warning-*       |     Warning thresholds. Can be: 'computers', 'computer-groups', 'updates', 'approved-updates', 'declined-updates', 'not-approved-updates', 'stale-updates', 'expired-updates'    | Mode        |
| --critical-*      |     Critical thresholds. Can be: 'computers', 'computer-groups', 'updates', 'approved-updates', 'declined-updates', 'not-approved-updates', 'stale-updates', 'expired-updates'   | Mode        |
| --filter-counters |     Only display some counters (regexp can be used). Example: --filter-counters='not'                                                                                            | Mode        |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Option                                 | Description                                                                                                                                        | Option type |
|:---------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --timeout                              |     Set timeout time for command execution (Default: 30 sec)                                                                                       | Mode        |
| --no-ps                                |     Don't encode powershell. To be used with --command and 'type'command.                                                                          | Mode        |
| --command                              |     Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.           | Mode        |
| --command-path                         |     Command path (Default: none).                                                                                                                  | Mode        |
| --command-options                      |     Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                        | Mode        |
| --ps-display                           |     Display powershell script.                                                                                                                     | Mode        |
| --ps-exec-only                         |     Print powershell output.                                                                                                                       | Mode        |
| --wsus-server                          |     Set WSUS hostname/IP (Dafault: localhost).                                                                                                     | Mode        |
| --wsus-port                            |     Set WSUS port (Default: 8530).                                                                                                                 | Mode        |
| --use-ssl                              |     Set if WSUS use ssl.                                                                                                                           | Mode        |
| --warning-synchronisation-status       |     Set warning threshold for current synchronisation status (Default: '') Can used special variables like: %{status}.                             | Mode        |
| --critical-synchronisation-status      |     Set critical threshold for current synchronisation status (Default: ''). Can used special variables like: %{status}.                           | Mode        |
| --warning-last-synchronisation-status  |     Set warning threshold for current synchronisation status (Default: '') Can used special variables like: %{status}.                             | Mode        |
| --critical-last-synchronisation-status |     Set critical threshold for current synchronisation status (Default: '%{status} !~ /Succeeded/'). Can used special variables like: %{status}.   | Mode        |
| --warning-* --critical-*               |     Thresholds. Can be: 'last-synchronisation-duration' (s), 'synchronisation-progress' (%).                                                       | Mode        |
| --filter-counters                      |     Only display some counters (regexp can be used). Example: --filter-counters='status'                                                           | Mode        |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Option            | Description                                                                                                                                | Option type |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --timeout         |     Set timeout time for command execution (Default: 30 sec)                                                                               | Mode        |
| --no-ps           |     Don't encode powershell. To be used with --command and 'type'command.                                                                  | Mode        |
| --command         |     Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.   | Mode        |
| --command-path    |     Command path (Default: none).                                                                                                          | Mode        |
| --command-options |     Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                | Mode        |
| --ps-display      |     Display powershell script.                                                                                                             | Mode        |
| --ps-exec-only    |     Print powershell output.                                                                                                               | Mode        |
| --wsus-server     |     Set WSUS hostname/IP (Dafault: localhost).                                                                                             | Mode        |
| --wsus-port       |     Set WSUS port (Default: 8530).                                                                                                         | Mode        |
| --use-ssl         |     Set if WSUS use ssl.                                                                                                                   | Mode        |
| --warning-*       |     Warning thresholds. Can be: 'with-client-errors', 'with-server-errors', 'needing-files', 'needed-by-computers', 'up-to-date'.          | Mode        |
| --critical-*      |     Critical thresholds. Can be: 'with-client-errors', 'with-server-errors', 'needing-files', 'needed-by-computers', 'up-to-date'.         | Mode        |
| --filter-counters |     Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   | Mode        |

</TabItem>
</Tabs>


Pour un mode, la liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --mode=query \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.