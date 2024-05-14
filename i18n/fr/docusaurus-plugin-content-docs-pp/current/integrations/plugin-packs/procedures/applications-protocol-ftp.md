---
id: applications-protocol-ftp
title: FTP Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **FTP Server** apporte un modèle d'hôte :

* **App-Protocol-FTP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Protocol-FTP-custom" label="App-Protocol-FTP-custom">

| Alias     | Modèle de service             | Description                                             |
|:----------|:------------------------------|:--------------------------------------------------------|
| FTP-Login | App-Protocol-FTP-Login-custom | Contrôle la connexion FTP à distance via login/password |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Protocol-FTP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias          | Modèle de service                  | Description                                                                                                                    |
|:---------------|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| FTP-Commands   | App-Protocol-FTP-Commands-custom   | Contrôle permettant d'exécuter une commande sur un serveur FTP distant                                                         |
| FTP-Date       | App-Protocol-FTP-Date-custom       | Contrôle permettant de vérifier la date des fichiers d'un répertoire ou d'un fichier en particulier sur un serveur FTP distant |
| FTP-FilesCount | App-Protocol-FTP-FilesCount-custom | Compter les fichiers dans un répertoire FTP distant                                                                            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="FTP-Commands" label="FTP-Commands">

Coming soon

</TabItem>
<TabItem value="FTP-Date" label="FTP-Date">

Coming soon

</TabItem>
<TabItem value="FTP-FilesCount" label="FTP-FilesCount">

| Métrique    | Unité |
|:------------|:------|
| files       | N/A   |

</TabItem>
<TabItem value="FTP-Login" label="FTP-Login">

Coming soon

</TabItem>
</Tabs>

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link\n\
to the manufacturer official documentation BUT you should try to be as complete\n\
as possible here as it will save time to everybody.*

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
dnf install centreon-pack-applications-protocol-ftp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-ftp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-ftp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-ftp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **FTP Server**
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
dnf install centreon-plugin-Applications-Protocol-Ftp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Ftp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-ftp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Ftp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Protocol-FTP-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                              | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FTPUSERNAME     | FTP Username                                                                                                                             |                   |             |
| FTPPASSWORD     | FTP Password                                                                                                                             |                   |             |
| FTPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="FTP-Commands" label="FTP-Commands">

| Macro        | Description                                                                                                                                                                          | Default value     | Mandatory   |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FTPCOMMAND   | Set command to test. (can be : binary; ascii; cwd,DIR; rmdir,DIR; mdkir,DIR; ls,DIR; rename,OLDNAME,NEWNAME; delete,FILENAME; get,REMOTE_FILE,LOCAL_FILE; put,LOCAL_FILE,REMOTE_FILE | cwd,DIR           |             |
| CRITICAL     | Threshold                                                                                                                                                                            |                   |             |
| WARNING      | Threshold                                                                                                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                               |                   |             |

</TabItem>
<TabItem value="FTP-Date" label="FTP-Date">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DIRECTORY    | Check files in the directory (no recursion)                                                                                                   |                   |             |
| CRITICAL     | Threshold                                                                                                   |                   |             |
| WARNING      | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="FTP-FilesCount" label="FTP-FilesCount">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DIRECTORY    | Check files in the directory (no recursion)                                                                                            |                   |             |
| WARNING      | Threshold                                                                                                                              |                   |             |
| CRITICAL     | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="FTP-Login" label="FTP-Login">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Threshold                                                                                                                              |                   |             |
| WARNING      | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

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
/usr/lib/centreon/plugins/centreon_protocol_ftp.pl \
	--plugin=apps::protocols::ftp::plugin \
	--mode=login \
	--hostname=10.0.0.1  \
	--username='' \
	--password='' \
	--warning='' \
	--critical='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: | 
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
/usr/lib/centreon/plugins/centreon_protocol_ftp.pl \
	--plugin=apps::protocols::ftp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                     | Modèle de service associé          |
|:-------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| commands [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/commands.pm)]     | App-Protocol-FTP-Commands-custom   |
| date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/date.pm)]             | App-Protocol-FTP-Date-custom       |
| filescount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/filescount.pm)] | App-Protocol-FTP-FilesCount-custom |
| login [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/login.pm)]           | App-Protocol-FTP-Login-custom      |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option | Description |
|:-------|:------------|

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="FTP-Commands" label="FTP-Commands">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="FTP-Date" label="FTP-Date">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="FTP-FilesCount" label="FTP-FilesCount">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="FTP-Login" label="FTP-Login">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_protocol_ftp.pl \
	--plugin=apps::protocols::ftp::plugin \
	--mode=login \
	--help
```
