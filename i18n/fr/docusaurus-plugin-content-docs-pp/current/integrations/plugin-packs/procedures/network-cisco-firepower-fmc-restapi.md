---
id: network-cisco-firepower-fmc-restapi
title: Cisco Firepower Management Console Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Cisco Firepower FMC Rest API** apporte un modèle d'hôte :

* **Net-Cisco-Firepower-Fmc-Restapi-custom**

Le connecteur apporte le modèle de service suivant
(classé selon le modèle d'hôte auquel il est rattaché) :

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Firepower-Fmc-Restapi-custom" label="Net-Cisco-Firepower-Fmc-Restapi-custom">

| Alias   | Modèle de service                              | Description              |
|:--------|:-----------------------------------------------|:-------------------------|
| Devices | Net-Cisco-Firepower-Fmc-Devices-Restapi-custom | Contrôle les équipements |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Cisco-Firepower-Fmc-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Devices" label="Devices">

| Métrique                          | Unité |
|:----------------------------------|:------|
| devices.total.count               | count |
| *domains*~*devices*#device-status | N/A   |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler l'application Cisco Firepower Management Center, l'API Rest doit être configuré comme indiqué dans lea documentation officielle: 
- https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/REST/Firepower_Management_Center_REST_API_Quick_Start_Guide_620.html

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
dnf install centreon-pack-network-cisco-firepower-fmc-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-firepower-fmc-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-firepower-fmc-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-firepower-fmc-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Cisco Firepower FMC Rest API**
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
dnf install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-firepower-fmc-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Cisco-Firepower-Fmc-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FMCAPIUSERNAME     |                                                                                                      | username          | X           |
| FMCAPIPASSWORD     |                                                                                                      | password          | X           |
| FMCAPIPROTO        |                                                                                                      | https             |             |
| FMCAPIPORT         |                                                                                                      | 443               |             |
| FMCAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Devices" label="Devices">

| Macro                       | Description                                                                                        | Valeur par défaut          | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| FILTERDOMAINNAME            |                                                                                                    |                            |             |
| FILTERDEVICENAME            |                                                                                                    |                            |             |
| UNKNOWNDEVICESTATUS         |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSBLACK   |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSBLACK  |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSBLUE    |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSBLUE   |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSGREEN   |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSGREEN  |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSRED     |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSRED    |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSYELLOW  |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSYELLOW |                                                                                                    |                            |             |
| WARNINGDEVICESTATUS         |                                                                                                    | %{status} =~ /yellow/i     |             |
| CRITICALDEVICESTATUS        |                                                                                                    | %{status} =~ /red\|black/i |             |
| WARNINGDEVICESTOTAL         |                                                                                                    |                            |             |
| CRITICALDEVICESTOTAL        |                                                                                                    |                            |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                  |             |

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
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl \
	--plugin=network::cisco::firepower::fmc::restapi::plugin \
	--mode=devices \
	--hostname='10.0.0.1' \
	--api-username='username' \
	--api-password='password' \
	--port='443' \
	--proto='https'  \
	--filter-domain-name='' \
	--filter-device-name='' \
	--warning-devices-total='' \
	--critical-devices-total='' \
	--warning-devices-status-green='' \
	--critical-devices-status-green='' \
	--warning-devices-status-black='' \
	--critical-devices-status-black='' \
	--warning-devices-status-blue='' \
	--critical-devices-status-blue='' \
	--warning-devices-status-red='' \
	--critical-devices-status-red='' \
	--warning-devices-status-yellow='' \
	--critical-devices-status-yellow='' \
	--unknown-device-status='' \
	--warning-device-status='%{status} =~ /yellow/i' \
	--critical-device-status='%{status} =~ /red|black/i' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Domain 'Global' devices are ok | 'devices.total.count'=2;;;0; 'devices.status.green.count'=0;;;0;2 'devices.status.black.count'=0;;;0;2 'devices.status.blue.count'=0;;;0;2 'devices.status.red.count'=0;;0;0;2 'devices.status.yellow.count'=0;;;0;2
checking domain 'Global'
device 'APEXTIFWL01' status: green
device 'APEXTIFWL02' status: green

```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl \
	--plugin=network::cisco::firepower::fmc::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                    | Modèle de service associé                      |
|:----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------|
| devices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fmc/restapi/mode/devices.pm)]     | Net-Cisco-Firepower-Fmc-Devices-Restapi-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fmc/restapi/mode/discovery.pm)] | Not used in this Monitoring Connector          |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Devices" label="Devices">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl \
	--plugin=network::cisco::firepower::fmc::restapi::plugin \
	--mode=devices \
	--help
```
