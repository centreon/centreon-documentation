---
id: infrastructure-active-directory-nrpe
title: Microsoft Active Directory NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce connecteur de supervision utilise NSClient++ et le protocole NRPE v2 pour superviser les contrôleurs de domaines Active Directory.

## Contenu du pack

### Modèles

Le connecteur de supervision **Active Directory** apporte un modèle d'hôte :

* **Infra-ActiveDirectory-NRPE-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Infra-ActiveDirectory-NRPE-custom" label="Infra-ActiveDirectory-NRPE-custom">

| Alias                | Modèle de service                                   | Description                                                                                 |
|:---------------------|:----------------------------------------------------|:--------------------------------------------------------------------------------------------|
| Ad-Domain-Controller | Infra-ActiveDirectory-Domain-Controller-NRPE-custom | Contrôle permettant de diagnostiquer le contrôleur de domaine. Exécute la commande "dcdiag" |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Infra-ActiveDirectory-NRPE-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias        | Modèle de service                              | Description                         |
|:-------------|:-----------------------------------------------|:------------------------------------|
| Dfsr-Backlog | Infra-ActiveDirectory-Dfsr-Backlog-NRPE-custom | Contrôle du backlog de réplication des Distributed File Systems. |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/onprem/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Ad-Domain-Controller" label="Ad-Domain-Controller">

| Métrique              | Unité |
|:-------------------------|:------|
| domain controller status | N/A   |

</TabItem>
<TabItem value="Dfsr-Backlog" label="Dfsr-Backlog">

| Métrique           | Unité |
|:-------------------|:------|
| backlog.file.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour superviser les ressources Windows via NRPE, installez la version Centreon
de l'agent NSClient++. Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur NRPE** est correcte.

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
dnf install centreon-pack-infrastructure-active-directory-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-infrastructure-active-directory-nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-infrastructure-active-directory-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-infrastructure-active-directory-nrpe
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Active Directory**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install nagios-nrpe-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install nagios-plugins-nrpe
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Infra-ActiveDirectory-NRPE-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NRPECLIENT       | NRPE client used to perform the check.  | check\_nrpe       |             |
| NRPEPORT         | NRPE port of the monitored server | 5666              |             |
| NRPETIMEOUT      | Timeout value   | 30                |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | `-u -2 -P 8192` |             |

5. [Déployez la configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/onprem/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Ad-Domain-Controller" label="Ad-Domain-Controller">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| LANGUAGE     | Define the language to use in the configuration file (default: 'en').  | en                |             |
| CONFIGFILE   | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file.  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Dfsr-Backlog" label="Dfsr-Backlog">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SENDINGMEMBER    | Name of the member that is sending the replication data. (mandatory)                               |                   | X           |
| REPLICATIONGROUP | Name of the replication group. (mandatory)                                                        |                   | X           |
| REPLICATEDFOLDER | Name of the replicated folder. (mandatory)                                                   |                   | X           |
| WARNINGBACKLOG   | Warning threshold                                                                                  |                   |             |
| CRITICALBACKLOG  | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/onprem/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib64/nagios/plugins/check_nrpe -H 10.0.0.1 -p 5666 -t 30 -u -2 -P 8192 -c check_centreon_plugins -a 'apps::microsoft::activedirectory::local::plugin' 'dfsr-backlog'  ' \
	--sending-member="" \
	--replication-group="" \
	--replicated-folder="" \
	--warning-backlog="" \
	--critical-backlog="" '
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Backlog File Count : 76 | 'backlog.file.count'=76;;;0;
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
/usr/lib64/nagios/plugins/check_nrpe -H 10.0.0.1 -p 5666 -u -2 -P 8192 -t 30  -c check_centreon_plugins -a 'apps::microsoft::activedirectory::local::plugin' 'dfsr-backlog'  '\
       --sending-member="" \
	--list-mode \
	'
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                          | Modèle de service associé                           |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| dcdiag [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/activedirectory/local/mode/dcdiag.pm)]            | Infra-ActiveDirectory-Domain-Controller-NRPE-custom |
| dfsr-backlog [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/activedirectory/local/mode/dfsrbacklog.pm)] | Infra-ActiveDirectory-Dfsr-Backlog-NRPE-custom      |
| netdom [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/microsoft/activedirectory/local/mode/netdom.pm)]            | Not used in this Monitoring Connector               |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Ad-Domain-Controller" label="Ad-Domain-Controller">

| Option             | Description  |
|:-------------------|:------------ |
| --dfsr             | Specifies that SysVol replication uses DFS instead of FRS (Windows 2008 or later). |
| --noeventlog       | Don't run the dc tests kccevent, frsevent and dfsrevent. |
| --nomachineaccount | Don't run the dc tests machineaccount. |
| --timeout          | Set timeout time for command execution (default: 30 sec). |

</TabItem>
<TabItem value="Dfsr-Backlog" label="Dfsr-Backlog">

| Option             | Description                                                |
|:-------------------|:-----------------------------------------------------------|
| --receiving-member | Name of the member that is receiving the replication data. |
| --timeout          | Set timeout time for command execution (default: 30 sec).  |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins//check_nrpe -H 10.0.0.1 -p 5666 -t 30 -u -2 -P 8192 -c check_centreon_plugins -a 'apps::microsoft::activedirectory::local::plugin' 'dfsr-backlog'  ' \
	--sending-member="" \
	--replication-group="" \
	--help
```
