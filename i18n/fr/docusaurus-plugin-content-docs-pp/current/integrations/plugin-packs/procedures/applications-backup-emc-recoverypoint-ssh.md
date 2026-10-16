---
id: applications-backup-emc-recoverypoint-ssh
title: EMC RecoveryPoint SSH
description: "Supervisez les appliances EMC RecoveryPoint via SSH : statut système et paramètres surveillés."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **EMC RecoveryPoint**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **EMC RecoveryPoint** apporte un modèle d'hôte :

* **App-Backup-EMC-RecoveryPoint-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Backup-EMC-RecoveryPoint-SSH-custom" label="App-Backup-EMC-RecoveryPoint-SSH-custom">

| Alias                | Modèle de service                                            | Description                                                           |
|:---------------------|:-------------------------------------------------------------|:----------------------------------------------------------------------|
| Monitored-Parameters | App-Backup-EMC-RecoveryPoint-Monitored-Parameters-SSH-custom | Contrôle les paramètres supervisés par l'appliance EMC RecoveryPoint |
| System-Status        | App-Backup-EMC-RecoveryPoint-System-Status-SSH-custom        | Contrôle le statut système de l'appliance EMC RecoveryPoint           |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Backup-EMC-RecoveryPoint-SSH-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Monitored-Parameters" label="Monitored-Parameters">

| Nom      | Unité |
|:---------|:------|
| problems | N/A   |

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Nom      | Unité |
|:---------|:------|
| status | N/A   |

</TabItem>
</Tabs>

## Prérequis

### Configuration SSH

L'utilisation de ce connecteur requiert la création d'un utilisateur sur la
ressource supervisée, lequel sera utilisé par le collecteur Centreon pour
s'authentifier et exécuter les requêtes SSH. Les privilèges `sudo` ou `root` ne
sont pas nécessaires, un utilisateur 'simple' est suffisant.

Deux méthodes de connexion SSH sont possibles :
* soit en échangeant la clé SSH publique de l'utilisateur `centreon-engine` du collecteur Centreon
* soit en définissant votre utilisateur et votre mot de passe directement dans les macros d'hôtes.

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
dnf install centreon-pack-applications-backup-emc-recoverypoint-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-backup-emc-recoverypoint-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-backup-emc-recoverypoint-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-backup-emc-recoverypoint-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **EMC RecoveryPoint**
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
dnf install centreon-plugin-Applications-Backup-Emc-Recoverypoint-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Backup-Emc-Recoverypoint-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-backup-emc-recoverypoint-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Backup-Emc-Recoverypoint-Ssh
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Backup-EMC-RecoveryPoint-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                                   | Valeur par défaut | Obligatoire |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                                    |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the C\<sshcli\> backend. Warning: using a password is not recommended. Use C\<--ssh-priv-key\> instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                                 |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: C\<sshcli\> (default), C\<plink\> and C\<libssh\>                                                                              | libssh            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                          |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Monitored-Parameters" label="Monitored-Parameters">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MINSEVERITY  | Minimum severity level you want to count (default: minor). Can be 'minor', 'major' or 'critical'   | minor             |             |
| WARNING      | Warning threshold                                                                                  | 1                 |             |
| CRITICAL     | Critical threshold                                                                                 | 5                 |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_emc_recoverypoint.pl \
	--plugin=storage::emc::recoverypoint::ssh::plugin \
	--mode=system-status \
	--hostname='10.0.0.1' \
	--ssh-backend='libssh' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: System OK, Clusters OK, WANs OK, Groups OK.
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
/usr/lib/centreon/plugins/centreon_emc_recoverypoint.pl \
	--plugin=storage::emc::recoverypoint::ssh::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                   | Modèle de service associé                                    |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
| monitored-parameters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/recoverypoint/ssh/mode/monitoredparameters.pm)] | App-Backup-EMC-RecoveryPoint-Monitored-Parameters-SSH-custom |
| system-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/recoverypoint/ssh/mode/systemstatus.pm)]               | App-Backup-EMC-RecoveryPoint-System-Status-SSH-custom        |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Monitored-Parameters" label="Monitored-Parameters">

| Option         | Description                                                                                           |
|:---------------|:------------------------------------------------------------------------------------------------------|
| --min-severity |   Minimum severity level you want to count (default: minor). Can be 'minor', 'major' or 'critical'.   |
| --warning      |   Warning threshold.                                                                                  |
| --critical     |   Critical threshold.                                                                                 |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_emc_recoverypoint.pl \
	--plugin=storage::emc::recoverypoint::ssh::plugin \
	--mode=system-status \
	--help
```
