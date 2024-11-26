---
id: network-firewalls-paloalto-standard-ssh
title: Palo Alto firewall SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Palo Alto firewall SSH** apporte un modèle d'hôte :

* **Net-PaloAlto-Standard-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-PaloAlto-Standard-SSH-custom" label="Net-PaloAlto-Standard-SSH-custom">

| Alias       | Modèle de service                            | Description                              |
|:------------|:---------------------------------------------|:-----------------------------------------|
| Environment | Net-PaloAlto-Standard-Environment-SSH-custom | Contrôle les composants matériels        |
| Ha          | Net-PaloAlto-Standard-Ha-SSH-custom          | Contrôle la haute disponibilité          |
| Interfaces  | Net-PaloAlto-Standard-Interfaces-SSH-custom  | Contrôle les interfaces                  |
| Ipsec       | Net-PaloAlto-Standard-Ipsec-SSH-custom       | Contrôle l'état des tunnels IPsec        |
| Licenses    | Net-PaloAlto-Standard-Licenses-SSH-custom    | Contrôle les licences de fonctionnalités |
| System      | Net-PaloAlto-Standard-System-SSH-custom      | Contrôle le système                      |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-PaloAlto-Standard-SSH-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Environment" label="Environment">

Coming soon

</TabItem>
<TabItem value="Ha" label="Ha">

| Métrique                    | Unité |
|:----------------------------|:------|
| sync-status                 | N/A   |
| *member*~member-status      | N/A   |
| *member*~*link*#link-status | N/A   |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique               | Unité |
|:-----------------------|:------|
| interfaces.total.count | count |
| *interface*#status     | N/A   |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Métrique                  | Unité |
|:--------------------------|:------|
| tunnels.ipsec.total.count | count |
| *tunnels*#status          | N/A   |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Métrique          | Unité |
|:------------------|:------|
| *features*#status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="System" label="System">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| status                                   | N/A   |
| system.antivirus.lastupdate.time.seconds | s     |
| system.threat.lastupdate.time.seconds    | s     |
| system.sessions.traffic.count            | b/s   |
| system.sessions.total.active.count       | count |

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

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-firewalls-paloalto-standard-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-firewalls-paloalto-standard-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-firewalls-paloalto-standard-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-firewalls-paloalto-standard-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Palo Alto firewall SSH**
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
dnf install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-firewalls-paloalto-standard-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-PaloAlto-Standard-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                   | sshcli            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Environment" label="Environment">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'psu', 'temperature', 'voltage'                  | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Ha" label="Ha">

| Macro                | Description                                                                                                                                                                          | Valeur par défaut                                   | Obligatoire |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| UNKNOWNLINKSTATUS    | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %{status}, %{display}                                                     |                                                     |             |
| UNKNOWNSYNCSTATUS    | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %{enabled}, %{status}                                                     |                                                     |             |
| UNKNOWNMEMBERSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %{state}, %{stateLast}                                                    |                                                     |             |
| CRITICALLINKSTATUS   | Define the conditions to match for the status to be CRITICAL (default: '%{status} ne "up"'). Can use special variables like: %{status}, %{display}                                   | %{status} ne "up"                                   |             |
| WARNINGLINKSTATUS    | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %{status}, %{display}                                                     |                                                     |             |
| CRITICALMEMBERSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{state} ne %{stateLast}'). Can use special variables like: %{state}, %{stateLast}                           | %{state} ne %{stateLast}                            |             |
| WARNINGMEMBERSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %{state}, %{stateLast}                                                    |                                                     |             |
| CRITICALSYNCSTATUS   | Define the conditions to match for the status to be CRITICAL (default: '%{enabled} eq "yes" and %{status} ne "synchronized"'). Can use special variables like: %{enabled}, %{status} | %{enabled} eq "yes" and %{status} ne "synchronized" |             |
| WARNINGSYNCSTATUS    | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %{enabled}, %{status}                                                     |                                                     |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                   | --verbose                                           |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro          | Description                                                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME     | Filter interface name (can be a regexp)                                                                                                                                          |                   |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{state}, %{type}, %{ha\_state}, %{display}                      |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{state} ne "active"'). You can use the following variables: %{state}, %{type}, %{ha\_state}, %{display} | %{state} ne "up"  |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{state}, %{type}, %{ha\_state}, %{display}                      |                   |             |
| WARNINGTOTAL   | Thresholds                                                                                                                                                                       |                   |             |
| CRITICALTOTAL  | Thresholds                                                                                                                                                                       |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                               | --verbose         |             |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Macro              | Description                                                                                                                                                                                                                             | Valeur par défaut                                       | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{ike\_phase1\_state}, %{state}, %{monitor\_status}, %{display}                                                                       |                                                         |             |
| WARNINGIPSECTOTAL  | Thresholds                                                                                                                                                                                                                              |                                                         |             |
| CRITICALIPSECTOTAL | Thresholds                                                                                                                                                                                                                              |                                                         |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%{ike\_phase1\_state} eq "down" or %{state} ne "active"'). You can use the following variables: %{ike\_phase1\_state}, %{state}, %{monitor\_status}, %{display} | %{ike\_phase1\_state} eq "down" or %{state} ne "active" |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %{ike\_phase1\_state}, %{state}, %{monitor\_status}, %{display}                                                                       |                                                         |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                      | --verbose                                               |             |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro          | Description                                                                                                                                                             | Valeur par défaut   | Obligatoire |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| FILTERFEATURE  | Filter license by feature (can be a regexp)                                                                                                                             | .*                  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. (default: '%{expired} eq "yes"'). Can use special variables like: %{expired}, %{expiry\_days}, %{feature} | %{expired} eq "yes" |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. Can use special variables like: %{expired}, %{expiry\_days}, %{feature}                                    |                     |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                      |                     |             |

</TabItem>
<TabItem value="System" label="System">

| Macro                | Description                                                                                                                                              | Valeur par défaut          | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| WARNINGAVUPDATE      | Thresholds                                                                                                                                               |                            |             |
| CRITICALAVUPDATE     | Thresholds                                                                                                                                               |                            |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%{oper\_mode} !~ /normal/i'). You can use the following variables: %{oper\_mode} | %{oper\_mode} !~ /normal/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{oper\_mode}                            |                            |             |
| WARNINGTHREATUPDATE  | Thresholds                                                                                                                                               |                            |             |
| CRITICALTHREATUPDATE | Thresholds                                                                                                                                               |                            |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                       |                            |             |

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
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
	--plugin=network::paloalto::ssh::plugin \
	--mode=environment \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='XXXX' \
	--ssh-password='XXXX' \
	--ssh-port=''  \
	--component='.*' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All 12 components are ok [4/4 psus, 4/4 temperatures, 4/4 voltages].
Checking power supplies
Power supply 'Power Supply A1' status is normal [instance: 1].
Power supply 'Power Supply B1' status is normal [instance: 2].
Power supply 'Power Supply A2' status is normal [instance: 1].
Power supply 'Power Supply B2' status is normal [instance: 2].
Checking temperatures
Temperature sensor on slot 1' temperature is 69C [instance: 18.1].
Temperature sensor on slot 2' temperature is 59C [instance: 40.1].
Temperature sensor on slot 3' temperature is 57C [instance: 89.1].
Temperature sensor on slot 4' temperature is 67C [instance: 89.2].
Checking voltages
1,500V voltage sensor, slot 1' voltage is 1,732 V [instance: 18.1].
1,800V voltage sensor, slot 1' voltage is 1,072 V [instance: 18.2].
1,500V voltage sensor, slot 2' voltage is 1,732 V [instance: 89.1].
1,800V voltage sensor, slot 2' voltage is 1,072 V [instance: 89.2].

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
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
	--plugin=network::paloalto::ssh::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                         | Modèle de service associé                    |
|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| environment [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/environment.pm)] | Net-PaloAlto-Standard-Environment-SSH-custom |
| ha [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/ha.pm)]                   | Net-PaloAlto-Standard-Ha-SSH-custom          |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/interfaces.pm)]   | Net-PaloAlto-Standard-Interfaces-SSH-custom  |
| ipsec [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/ipsec.pm)]             | Net-PaloAlto-Standard-Ipsec-SSH-custom       |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/licenses.pm)]       | Net-PaloAlto-Standard-Licenses-SSH-custom    |
| system [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/system.pm)]           | Net-PaloAlto-Standard-System-SSH-custom      |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (default: 45).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Environment" label="Environment">

| Option               | Description                                                                                                                                                                                                         |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'psu', 'temperature', 'voltage'.                                                                                                                                  |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=temperature). You can also exclude items from specific instances: --filter='temperature,Temperature @ U48'                                     |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                          |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='temperture,OK,true'   |
| --warning            | Set warning threshold for 'temperature', 'voltage' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,30'                                                                                           |
| --critical           | Set critical threshold for 'temperature', 'voltage' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                         |

</TabItem>
<TabItem value="Ha" label="Ha">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --unknown-sync-status    | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %{enabled}, %{status}                                                                                                              |
| --warning-sync-status    | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %{enabled}, %{status}                                                                                                              |
| --critical-sync-status   | Define the conditions to match for the status to be CRITICAL (default: '%{enabled} eq "yes" and %{status} ne "synchronized"'). Can use special variables like: %{enabled}, %{status}                                                          |
| --unknown-member-status  | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %{state}, %{stateLast}                                                                                                             |
| --warning-member-status  | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %{state}, %{stateLast}                                                                                                             |
| --critical-member-status | Define the conditions to match for the status to be CRITICAL (default: '%{state} ne %{stateLast}'). Can use special variables like: %{state}, %{stateLast}                                                                                    |
| --unknown-link-status    | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %{status}, %{display}                                                                                                              |
| --warning-link-status    | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %{status}, %{display}                                                                                                              |
| --critical-link-status   | Define the conditions to match for the status to be CRITICAL (default: '%{status} ne "up"'). Can use special variables like: %{status}, %{display}                                                                                            |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                        |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter interface name (can be a regexp).                                                                                                                                           |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{state}, %{type}, %{ha\_state}, %{display}                        |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{state}, %{type}, %{ha\_state}, %{display}                        |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{state} ne "active"'). You can use the following variables: %{state}, %{type}, %{ha\_state}, %{display}   |
| --warning-* --critical-* | Thresholds. Can be: 'total'.                                                                                                                                                       |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Option                   | Description                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter tunnels by name (can be a regexp).                                                                                                                                                                                                  |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{ike\_phase1\_state}, %{state}, %{monitor\_status}, %{display}.                                                                         |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{ike\_phase1\_state}, %{state}, %{monitor\_status}, %{display}.                                                                         |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{ike\_phase1\_state} eq "down" or %{state} ne "active"'). You can use the following variables: %{ike\_phase1\_state}, %{state}, %{monitor\_status}, %{display}.   |
| --warning-* --critical-* | Thresholds. Can be: 'ipsec-total'.                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option            | Description                                                                                                                                                                |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-feature  | Filter license by feature (can be a regexp).                                                                                                                               |
| --warning-status  | Define the conditions to match for the status to be WARNING. Can use special variables like: %{expired}, %{expiry\_days}, %{feature}                                       |
| --critical-status | Define the conditions to match for the status to be CRITICAL. (default: '%{expired} eq "yes"'). Can use special variables like: %{expired}, %{expiry\_days}, %{feature}    |

</TabItem>
<TabItem value="System" label="System">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^status$'                                                                                                                                                        |
| --timezone               | Timezone options. Default is 'GMT'.                                                                                                                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{oper\_mode}                                                                                                                 |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{oper\_mode} !~ /normal/i'). You can use the following variables: %{oper\_mode}                                                                                      |
| --warning-* --critical-* | Thresholds. Can be: 'av-update' (s), 'threat-update' (s), 'sessions-traffic' (b/s), 'sessions-total-active'.                                                                                                                                  |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
	--plugin=network::paloalto::ssh::plugin \
	--mode=environment \
	--help
```
