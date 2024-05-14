---
id: applications-protocol-cifs
title: Protocol CIFS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Protocol CIFS** apporte un modèle d'hôte :

* **App-Protocol-Cifs-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Protocol-Cifs-custom" label="App-Protocol-Cifs-custom">

| Alias      | Modèle de service                   | Description                           |
|:-----------|:------------------------------------|:--------------------------------------|
| Connection | App-Protocol-Cifs-Connection-custom | Contrôle la connexion CIFS à distance |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Protocol-Cifs-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias       | Modèle de service                    | Description                                                          |
|:------------|:-------------------------------------|:---------------------------------------------------------------------|
| Files-Count | App-Protocol-Cifs-Files-Count-custom | Contrôle permettant de vérifier le nombre de fichiers dans un répertoire         |
| Files-Date  | App-Protocol-Cifs-Files-Date-custom  | Contrôle permettant de vérifier la dernière modification de fichiers |
| Files-Size  | App-Protocol-Cifs-Files-Size-custom  | Contrôle permettant de vérifier la taille de fichiers ou répertoires |
| Scenario    | App-Protocol-Cifs-Scenario-custom    | Contrôle permettant d'exécuter des commandes CIFS                    |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Connection" label="Connection">

| Métrique                | Unité |
|:------------------------|:------|
| status                  | N/A   |
| connection.time.seconds | s     |

</TabItem>
<TabItem value="Files-Count" label="Files-Count">

| Métrique             | Unité |
|:---------------------|:------|
| files.detected.count | count |

</TabItem>
<TabItem value="Files-Date" label="Files-Date">

| Métrique                        | Unité |
|:--------------------------------|:------|
| *files*#file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="Files-Size" label="Files-Size">

| Métrique                | Unité |
|:------------------------|:------|
| *files*#file.size.bytes | B     |

</TabItem>
<TabItem value="Scenario" label="Scenario">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| status                                   | N/A   |
| scenario.execution.time.milliseconds     | ms    |
| scenario.steps.count                     | count |
| scenario.errors.count                    | count |
| *steps*#step.execution.time.milliseconds | ms    |
| *steps*#step-status                      | N/A   |

</TabItem>
</Tabs>

## Prérequis

Pour superviser votre serveur CIFS, il est possible de réaliser une authentification par : 
* utilisateur et mot de passe

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
dnf install centreon-pack-applications-protocol-cifs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-cifs
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-cifs
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-cifs
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Protocol CIFS**
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
dnf install centreon-plugin-Applications-Protocol-Cifs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Cifs
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-cifs
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Cifs
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Protocol-Cifs-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                    | Description                                                                                                                              | Default value     | Mandatory   |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROTOCOLCIFSUSERNAME     | Username                                                                                                                                 |                   |             |
| PROTOCOLCIFSPASSWORD     | Password                                                                                                                                 |                   |             |
| PROTOCOLCIFSTIMEOUT      | Timeout                                                                                                                                  |                   |             |
| PROTOCOLCIFSEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connection" label="Connection">

| Macro          | Description                                                                                                                            | Default value                             | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|:-----------:|
| DIRECTORY      | Set the share directory.                                                                                                               |                                           | X           |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{message}                | %{message} !~ /authentication succeeded/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{message}                |                                           |             |
| WARNINGTIME    | Warning threshold in seconds.                                                                                                          |                                           |             |
| CRITICALTIME   | Critical threshold in seconds.                                                                                                         |                                           |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                           |             |

</TabItem>
<TabItem value="Files-Count" label="Files-Count">

| Macro                 | Description                                                                                                                            | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MAXDEPTH              | Number of levels of directories to check. 0 means current directory only.                                                                  | 0                 | X           |
| DIRECTORY             | Name of the directory  to check.                                                                                                               |                   | X           |
| FILTERFILE            | Filter files (can be a regexp. Directory in the name).                                                                                 |                   |             |
| WARNINGFILESDETECTED  | Thresholds                                                                                                                             |                   |             |
| CRITICALFILESDETECTED | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Files-Date" label="Files-Date">

| Macro             | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILE              | File name to check                                                                                                                     |                   | X           |
| DIRECTORY         | Check files in the directory (no recursion)                                                                                            |                   | X           |
| WARNINGMTIMELAST  | Thresholds                                                                                                                             |                   |             |
| CRITICALMTIMELAST | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Files-Size" label="Files-Size">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MAXDEPTH     | Number of levels of directories to check. 0 means current directory only.                                                                  | 0                 | X           |
| FILE         | Check file                                                                                                                             |                   | X           |
| DIRECTORY    | Check directory size (multiple option). Can get sub directory size with --max-depth option.                                            |                   | X           |
| WARNINGSIZE  | Thresholds                                                                                                                                       |                   |             |
| CRITICALSIZE | Thresholds                                                                                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Scenario" label="Scenario">

| Macro              | Description                                                                                                                            | Default value          | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| SCENARIO           | Scenario used. Can be a file or json content.                                                                                          |                        | X           |
| WARNINGERRORS      | Thresholds                                                                                                                             |                        |             |
| CRITICALERRORS     | Thresholds                                                                                                                             |                        |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}                           | %{status} ne "success" |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}                            |                        |             |
| WARNINGSTEPSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{message}                |                        |             |
| CRITICALSTEPSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{message}               |                        |             |
| WARNINGSTEPTIME    | Thresholds                                                                                                                             |                        |             |
| CRITICALSTEPTIME   | Thresholds                                                                                                                             |                        |             |
| WARNINGTOTALSTEPS  | Thresholds                                                                                                                             |                        |             |
| CRITICALTOTALSTEPS | Thresholds                                                                                                                             |                        |             |
| WARNINGTOTALTIME   | Thresholds                                                                                                                             |                        |             |
| CRITICALTOTALTIME  | Thresholds                                                                                                                             |                        |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose              |             |

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
/usr/lib/centreon/plugins/centreon_protocol_cifs.pl \
	--plugin=apps::protocols::cifs::plugin \
	--mode=scenario \
	--hostname='10.0.0.1' \
	--cifs-username='' \
	--cifs-password='' \
	--timeout=''   \
	--scenario='' \
	--warning-status='' \
	--critical-status='%{status} ne "success"' \
	--warning-total-time='' \
	--critical-total-time='' \
	--warning-total-steps='' \
	--critical-total-steps='' \
	--warning-errors='' \
	--critical-errors='' \
	--warning-step-time='' \
	--critical-step-time='' \
	--warning-step-status='' \
	--critical-step-status='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: execution time: 88 ms total steps: 78 errors: 94 All steps are ok | 'scenario.execution.time.milliseconds'=88ms;;;0;'scenario.steps.count'=78;;;0;'scenario.errors.count'=94;;;0;'*steps*#step.execution.time.milliseconds'=ms;;;0;
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
/usr/lib/centreon/plugins/centreon_protocol_cifs.pl \
	--plugin=apps::protocols::cifs::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                       | Modèle de service associé             |
|:---------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| connection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/cifs/mode/connection.pm)]  | App-Protocol-Cifs-Connection-custom   |
| files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/cifs/mode/files.pm)]            | Not used in this Monitoring Connector |
| files-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/cifs/mode/filescount.pm)] | App-Protocol-Cifs-Files-Count-custom  |
| files-date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/cifs/mode/filesdate.pm)]   | App-Protocol-Cifs-Files-Date-custom   |
| files-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/cifs/mode/filessize.pm)]   | App-Protocol-Cifs-Files-Size-custom   |
| scenario [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/cifs/mode/scenario.pm)]      | App-Protocol-Cifs-Scenario-custom     |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option | Description |
|:-------|:------------|

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Connection" label="Connection">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Files-Count" label="Files-Count">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Files-Date" label="Files-Date">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Files-Size" label="Files-Size">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Scenario" label="Scenario">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_protocol_cifs.pl \
	--plugin=apps::protocols::cifs::plugin \
	--mode=scenario \
	--help
```
