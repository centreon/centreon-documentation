---
id: hardware-storage-emc-symmetrix-nsclient-05-restapi
title: EMC Symmetrix NSClient++ API
description: "Supervisez l'état matériel des baies de stockage EMC Symmetrix DMX/VMAX via l'API REST de NSClient++ (disques, alimentation, température)."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **EMC Symmetrix API**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **EMC Symmetrix API** apporte 2 modèles d'hôte :

* **HW-Storage-EMC-Symmetrix-Dmx34-NSClient-05-Restapi-custom**
* **HW-Storage-EMC-Symmetrix-Vmax-NSClient-05-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-EMC-Symmetrix-Dmx34-NSClient-05-Restapi-custom" label="HW-Storage-EMC-Symmetrix-Dmx34-NSClient-05-Restapi-custom">

| Alias           | Modèle de service                                                        | Description                                                    |
|:----------------|:-------------------------------------------------------------------------|:---------------------------------------------------------------|
| Hardware-Global | HW-Storage-EMC-Symmetrix-Dmx34-Hardware-Global-NSClient05-Restapi-custom | Contrôle permettant de vérifier l'état des composants matériels |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-EMC-Symmetrix-Dmx34-NSClient-05-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="HW-Storage-EMC-Symmetrix-Vmax-NSClient-05-Restapi-custom" label="HW-Storage-EMC-Symmetrix-Vmax-NSClient-05-Restapi-custom">

| Alias           | Modèle de service                                                        | Description                                                    |
|:----------------|:-------------------------------------------------------------------------|:---------------------------------------------------------------|
| Hardware-Global | HW-Storage-EMC-Symmetrix-Vmax-Hardware-Global-NSClient05-Restapi-custom  | Contrôle permettant de vérifier l'état des composants matériels |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-EMC-Symmetrix-Vmax-NSClient-05-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Hardware-*" label="Hardware-*">

| Nom                | Unité |
|:-------------------|:------|
| director.status     | N/A   |
| xcm.status     | N/A   |
| disk.status     | N/A   |
| memory.status     | N/A   |
| test.status     | N/A   |
| fru.status     | N/A   |
| module.status     | N/A   |
| temperature.status     | N/A   |
| cabling.status     | N/A   |
| power.status     | N/A   |
| fabric.status     | N/A   |
| voltage.status     | N/A   |
| spreadisk.status     | N/A   |

</TabItem>
</Tabs>

## Prérequis

### Centreon NSClient++

Pour superviser une ressource via NSClient++ API, installez la version Centreon de l'agent NSClient++.
Veuillez suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md) et assurez-vous que la configuration du **serveur Web / RestAPI** est correcte.

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
dnf install centreon-pack-hardware-storage-emc-symmetrix-nsclient-05-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-emc-symmetrix-nsclient-05-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-emc-symmetrix-nsclient-05-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-emc-symmetrix-nsclient-05-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **EMC Symmetrix API**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-windows-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="HW-Storage-EMC-Symmetrix-Dmx34-NSClient-05-Restapi-custom" label="HW-Storage-EMC-Symmetrix-Dmx34-NSClient-05-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-EMC-Symmetrix-Dmx34-NSClient-05-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                     | Description                                                                                          | Valeur par défaut | Obligatoire |
|:--------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant                                                                                                      | PASSWORD          |             |
| NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use                                                                                                     | https             |             |
| NSCPRESTAPIPORT           | NSClient++ RestAPI port                                                                                                     | 8443              |             |
| NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="HW-Storage-EMC-Symmetrix-Vmax-NSClient-05-Restapi-custom" label="HW-Storage-EMC-Symmetrix-Vmax-NSClient-05-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-EMC-Symmetrix-Vmax-NSClient-05-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                     | Description                                                                                          | Valeur par défaut | Obligatoire |
|:--------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NSCPRESTAPILEGACYPASSWORD | Password to authenticate against the API if relevant                                                                                                      | PASSWORD          |             |
| NSCPRESTAPIPROTO          | NSClient++ RestAPI protocol to use                                                                                                     | https             |             |
| NSCPRESTAPIPORT           | NSClient++ RestAPI port                                                                                                     | 8443              |             |
| NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro         | Description                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT     | Which component to check (default: '.*'). Can be: 'module', 'temperature', 'director, 'cabling', 'power', 'voltage', 'sparedisk' | .*                |             |
| FILEHEALTH    | Name of the global storage file status                                                                                                                                 |                   |             |
| FILEHEALTHENV | Name of the environment storage file status                                                                                                                                 |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                               | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin \
	--mode=query \
	--hostname='10.0.0.1' \
	--port='8443' \
	--proto='https' \
	--legacy-password='PASSWORD'  \
	--command=check_centreon_plugins \
	--arg='storage::emc::symmetrix::vmax::local::plugin' \
	--arg='hardware' \
	--arg=' \
	--file-health="" \
	--file-health-env="" \
	--component=".*" \
	--verbose'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All 2 components are ok [2/2 temperatures]. | 'temp1 Temp'=30C;;;;'temp2 Temp'=31C;;;;'count_temperature'=2;;;;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                               | Modèle de service associé                                                                                                                             |
|:-----------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/symmetrix/vmax/local/mode/hardware.pm)] | HW-Storage-EMC-Symmetrix-Dmx34-Hardware-Global-NSClient05-Restapi-custom<br />HW-Storage-EMC-Symmetrix-Vmax-Hardware-Global-NSClient05-Restapi-custom |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Hardware-*" label="Hardware-*">

| Option                     | Description                                                                                                                                                                                                                                     |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component                |   Which component to check (default: '.*'). Can be: 'module', 'temperature', 'director, 'cabling', 'power', 'voltage', 'sparedisk'.                                                                                                             |
| --filter                   |   Exclude the items given as a comma-separated list (example: --filter=temperature --filter=module). You can also exclude items from specific instances: --filter=temperature,ES-PWS-A ES-4                                                     |
| --absent-problem           |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                          |
| --no-component             |   Define the expected status if no components are found (default: critical).                                                                                                                                                                    |
| --threshold-overload       |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='director,WARNING,^(?!(OK)$)'                    |
| --warning                  |   Set warning threshold for disk (syntax: type,regexp,threshold) Example: --warning='sparedisk,.*,5:'                                                                                                                                           |
| --critical                 |   Set critical threshold for disk (syntax: type,regexp,threshold) Example: --critical='sparedisk,.*,3:'                                                                                                                                         |
| --warning-count-*          |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                  |
| --critical-count-*         |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                 |
| --memcached                |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                 |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --health-directory         |   Location of health files.                                                                                                                                                                                                                     |
| --health-directory-pattern |   Set pattern to match the most recent directory (getting the hexa value).                                                                                                                                                                      |
| --file-health-name         |   Name of the global storage file status (default: HealthCheck.log).                                                                                                                                                                            |
| --file-health-env-name     |   Name of the environment storage file status (default: sympl\_env\_health.log).                                                                                                                                                                |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin \
	--mode=query \
	--help
```
