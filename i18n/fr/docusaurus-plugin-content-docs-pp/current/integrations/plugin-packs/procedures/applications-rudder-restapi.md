---
id: applications-rudder-restapi
slug: /applications-rudder-restapi
title: Rudder
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Rudder**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Rudder** apporte 2 modèles d'hôte :

* **App-Rudder-Node-Compliance-Restapi-custom**
* **App-Rudder-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Rudder-Node-Compliance-Restapi-custom" label="App-Rudder-Node-Compliance-Restapi-custom">

| Alias           | Modèle de service                                | Description                                 | Découverte |
|:----------------|:-------------------------------------------------|:--------------------------------------------|:----------:|
| Node-Compliance | App-Rudder-Node-Compliance-Name-Restapi-custom   | Contrôle l'état de la conformité d'un noeud |            |
| Node-Compliance | App-Rudder-Node-Compliance-Global-Restapi-custom | Contrôle l'état de la conformité des noeuds | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Rudder-Node-Compliance-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="App-Rudder-Restapi-custom" label="App-Rudder-Restapi-custom">

| Alias                    | Modèle de service                                  | Description                                             |
|:-------------------------|:---------------------------------------------------|:--------------------------------------------------------|
| Global-Compliance        | App-Rudder-Global-Compliance-Restapi-custom        | Contrôle l'état de la conformité globale                |
| Nodes-Overall-Compliance | App-Rudder-Nodes-Overall-Compliance-Restapi-custom | Contrôle l'état de la conformité des noeuds globalement |
| Statistics               | App-Rudder-Statistics-Restapi-custom               | Contrôle les statistiques de l'application              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Rudder-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                                | Description                                 | Découverte |
|:----------------|:-------------------------------------------------|:--------------------------------------------|:----------:|
| Node-Compliance | App-Rudder-Node-Compliance-Name-Restapi-custom   | Contrôle l'état de la conformité d'un noeud |            |
| Node-Compliance | App-Rudder-Node-Compliance-Global-Restapi-custom | Contrôle l'état de la conformité des noeuds | X          |
| Rule-Compliance | App-Rudder-Rule-Compliance-Restapi-custom        | Contrôle l'état de la conformité des règles | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                            |
|:----------------|:---------------------------------------|
| Rudder          | Discover hosts from Rudder's inventory |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle          | Description |
|:-------------------------|:------------|
| App-Rudder-Restapi-Nodes | Discover nodes managed by Rudder            |
| App-Rudder-Restapi-Rules | Discover compliance rules in Rudder            |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Global-Compliance" label="Global-Compliance">

| Nom                 | Unité |
|:--------------------|:------|
| global-compliance   | %     |
| *compliances*#value | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Node-Compliance*" label="Node-Compliance*">

| Nom                     | Unité |
|:------------------------|:------|
| *nodes*~node-compliance | %     |
| status                  | N/A   |

> Concerne les modèles de service suivants : Node-Compliance, Node-Compliance

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Nodes-Overall-Compliance" label="Nodes-Overall-Compliance">

| Nom                | Unité |
|:-------------------|:------|
| compliance_perfect | nodes |
| compliance_good    | nodes |
| compliance_average | nodes |
| compliance_poor    | nodes |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Rule-Compliance" label="Rule-Compliance">

| Nom                     | Unité |
|:------------------------|:------|
| *rules*~rule-compliance | %     |
| status                  | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Nom           | Unité |
|:--------------|:------|
| nodes         | N/A   |
| pending-nodes | N/A   |
| rules         | N/A   |
| directives    | N/A   |
| groups        | N/A   |
| techniques    | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

Pour les prérequis et les détails d’installation, veuillez vous référer à la [documentation officielle](https://docs.rudder.io/api/v/21/).

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
dnf install centreon-pack-applications-rudder-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-rudder-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-rudder-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-rudder-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Rudder**
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
dnf install centreon-plugin-Applications-Rudder-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Rudder-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-rudder-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Rudder-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="App-Rudder-Node-Compliance-Restapi-custom" label="App-Rudder-Node-Compliance-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Rudder-Node-Compliance-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                          | Valeur par défaut  | Obligatoire |
|:------------------|:-----------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| RUDDERAPIHOSTNAME | Rudder API hostname                                                                                  |                    | X           |
| RUDDERAPITOKEN    | API token                                                                                                     |                    | X           |
| RUDDERAPIPROTO    | Specify https if needed (default: 'https')                                                           | https              |             |
| RUDDERAPIPORT     | API port (default: 443)                                                                              | 443                |             |
| PROXYURL          | Proxy URL. Example: http://my.proxy:3128                                                             |                    |             |
| RUDDERAPIURLPATH  | API URL path (default: '/rudder/api/latest')                                                         | /rudder/api/latest |             |
| RUDDERNODENAME    | Filter node name (regexp can be used)                                                                |                    |             |
| EXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                    |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="App-Rudder-Restapi-custom" label="App-Rudder-Restapi-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Rudder-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                                                                                          | Valeur par défaut  | Obligatoire |
|:------------------|:-----------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| RUDDERAPIHOSTNAME | Rudder API hostname                                                                                  |                    | X           |
| RUDDERAPITOKEN    | API token                                                                                                     |                    | X           |
| RUDDERAPIPROTO    | Specify https if needed (default: 'https')                                                           | https              |             |
| RUDDERAPIPORT     | API port (default: 443)                                                                              | 443                |             |
| PROXYURL          | Proxy URL. Example: http://my.proxy:3128                                                             |                    |             |
| RUDDERAPIURLPATH  | API URL path (default: '/rudder/api/latest')                                                         | /rudder/api/latest |             |
| EXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                    |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Global-Compliance" label="Global-Compliance">

| Macro                    | Description                                                                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGGLOBALCOMPLIANCE  | Set warning threshold on global compliance                                                                                                                                                                          |                   |             |
| CRITICALGLOBALCOMPLIANCE | Set critical threshold on global compliance                                                                                                                                                                         |                   |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{detail\}, %\{value\}                                                                             |                   |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{detail\}, %\{value\}  Example :   --critical-status='%\{detail\} eq "error" && %\{value\} \> 5' |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                  |                   |             |

</TabItem>
<TabItem value="Node-Compliance" label="Node-Compliance">

| Macro                  | Description                                                                                                                                                                                                                                                                | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter node name (regexp can be used)                                                                                                                                                                                                                                      | .*                |             |
| CRITICALNODECOMPLIANCE | Set critical threshold on node compliance                                                                                                                                                                                                                                  | 100:              |             |
| WARNINGNODECOMPLIANCE  | Set warning threshold on node compliance                                                                                                                                                                                                                                   |                   |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING of rule compliance (default: ''). You can use the following variables: %\{rule\}, %\{compliance\}                                                                                                              |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL of rule compliance (default: ''). You can use the following variables: %\{rule\}, %\{compliance\}  Example :   --critical-status='%\{rule\} eq "Global configuration for all nodes" && %\{compliance\} \< 95' |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                                         | --verbose         |             |

</TabItem>
<TabItem value="Nodes-Overall-Compliance" label="Nodes-Overall-Compliance">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS           | Units of thresholds (default: '%') ('%', 'count')                                                  |                   |             |
| WARNINGAVERAGE  | Threshold                                                                                          |                   |             |
| CRITICALAVERAGE | Threshold                                                                                          |                   |             |
| WARNINGGOOD     | Threshold                                                                                          |                   |             |
| CRITICALGOOD    | Threshold                                                                                          |                   |             |
| WARNINGPERFECT  | Threshold                                                                                          |                   |             |
| CRITICALPERFECT | Threshold                                                                                          |                   |             |
| WARNINGPOOR     | Threshold                                                                                          |                   |             |
| CRITICALPOOR    | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Rule-Compliance" label="Rule-Compliance">

| Macro                  | Description                                                                                                                                                                                                                                                  | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter rule name (regexp can be used)                                                                                                                                                                                                                        | .*                |             |
| CRITICALRULECOMPLIANCE | Set critical threshold on rule compliance                                                                                                                                                                                                                    | 100:              |             |
| WARNINGRULECOMPLIANCE  | Set warning threshold on rule compliance                                                                                                                                                                                                                     |                   |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING of directive compliance (default: ''). You can use the following variables: %\{directive\}, %\{compliance\}                                                                                      |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL of directive compliance (default: ''). You can use the following variables: %\{directive\}, %\{compliance\}  Example :   --critical-status='%\{directive\} eq "Users" && %\{compliance\} \< 85' |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                           | --verbose         |             |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Macro                | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDIRECTIVES    | Threshold                                                                                          |                   |             |
| CRITICALDIRECTIVES   | Threshold                                                                                          |                   |             |
| WARNINGGROUPS        | Threshold                                                                                          |                   |             |
| CRITICALGROUPS       | Threshold                                                                                          |                   |             |
| WARNINGNODES         | Threshold                                                                                          |                   |             |
| CRITICALNODES        | Threshold                                                                                          |                   |             |
| WARNINGPENDINGNODES  | Threshold                                                                                          |                   |             |
| CRITICALPENDINGNODES | Threshold                                                                                          |                   |             |
| WARNINGRULES         | Threshold                                                                                          |                   |             |
| CRITICALRULES        | Threshold                                                                                          |                   |             |
| WARNINGTECHNIQUES    | Threshold                                                                                          |                   |             |
| CRITICALTECHNIQUES   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_rudder_restapi.pl \
	--plugin=apps::rudder::restapi::plugin \
	--mode=statistics \
	--hostname='10.0.0.1' \
	--url-path='' \
	--port= \
	--proto='' \
	--api-token='xxxxxx' \
	--proxyurl=''  \
	--warning-nodes='' \
	--critical-nodes='' \
	--warning-pending-nodes='' \
	--critical-pending-nodes='' \
	--warning-rules='' \
	--critical-rules='' \
	--warning-directives='' \
	--critical-directives='' \
	--warning-groups='' \
	--critical-groups='' \
	--warning-techniques='' \
	--critical-techniques=''
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Nodes: 78140 Pending Nodes: 88948 Rules: 68148 Directives: 91500 Groups: 85743 Techniques: 21434 | 'nodes'=78140;;;0; 'pending-nodes'=88948;;;0; 'rules'=68148;;;0; 'directives'=91500;;;0; 'groups'=85743;;;0; 'techniques'=21434;;;0;
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
/usr/lib/centreon/plugins/centreon_rudder_restapi.pl \
	--plugin=apps::rudder::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                | Modèle de service associé                                                                            |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/discovery.pm)]                             | Used for host discovery                                                                              |
| global-compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/globalcompliance.pm)]              | App-Rudder-Global-Compliance-Restapi-custom                                                          |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/listnodes.pm)]                            | Used for service discovery                                                                           |
| list-rules [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/listrules.pm)]                            | Used for service discovery                                                                           |
| node-compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/nodecompliance.pm)]                  | App-Rudder-Node-Compliance-Name-Restapi-custom<br />App-Rudder-Node-Compliance-Global-Restapi-custom |
| nodes-overall-compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/nodesoverallcompliance.pm)] | App-Rudder-Nodes-Overall-Compliance-Restapi-custom                                                   |
| rule-compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/rulecompliance.pm)]                  | App-Rudder-Rule-Compliance-Restapi-custom                                                            |
| statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/statistics.pm)]                           | App-Rudder-Statistics-Restapi-custom                                                                 |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   Rudder API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --port                                     |   API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --url-path                                 |   API URL path (default: '/rudder/api/latest')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Global-Compliance" label="Global-Compliance">

| Option                       | Description                                                                                                                                                                                                              |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters            |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                              |
| --warning-global-compliance  |   Set warning threshold on global compliance.                                                                                                                                                                            |
| --critical-global-compliance |   Set critical threshold on global compliance.                                                                                                                                                                           |
| --warning-status             |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{detail\}, %\{value\}                                                                                |
| --critical-status            |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{detail\}, %\{value\}  Example :   --critical-status='%\{detail\} eq "error" && %\{value\} \> 5'    |

</TabItem>
<TabItem value="Node-Compliance*" label="Node-Compliance*">

| Option                     | Description                                                                                                                                                                                                                                                                     |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                     |
| --filter-name              |   Filter node name (regexp can be used)                                                                                                                                                                                                                                         |
| --warning-node-compliance  |   Set warning threshold on node compliance.                                                                                                                                                                                                                                     |
| --critical-node-compliance |   Set critical threshold on node compliance.                                                                                                                                                                                                                                    |
| --warning-status           |   Define the conditions to match for the status to be WARNING of rule compliance (default: ''). You can use the following variables: %\{rule\}, %\{compliance\}                                                                                                                 |
| --critical-status          |   Define the conditions to match for the status to be CRITICAL of rule compliance (default: ''). You can use the following variables: %\{rule\}, %\{compliance\}  Example :   --critical-status='%\{rule\} eq "Global configuration for all nodes" && %\{compliance\} \< 95'    |

</TabItem>
<TabItem value="Nodes-Overall-Compliance" label="Nodes-Overall-Compliance">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'perfect', 'good', 'average', 'poor'.                                                            |
| --critical-*      |   Critical threshold. Can be: 'perfect', 'good', 'average', 'poor'.                                                           |
| --units           |   Units of thresholds (default: '%') ('%', 'count').                                                                          |

</TabItem>
<TabItem value="Rule-Compliance" label="Rule-Compliance">

| Option                     | Description                                                                                                                                                                                                                                                       |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                       |
| --filter-name              |   Filter rule name (regexp can be used)                                                                                                                                                                                                                           |
| --warning-rule-compliance  |   Set warning threshold on rule compliance.                                                                                                                                                                                                                       |
| --critical-rule-compliance |   Set critical threshold on rule compliance.                                                                                                                                                                                                                      |
| --warning-status           |   Define the conditions to match for the status to be WARNING of directive compliance (default: ''). You can use the following variables: %\{directive\}, %\{compliance\}                                                                                         |
| --critical-status          |   Define the conditions to match for the status to be CRITICAL of directive compliance (default: ''). You can use the following variables: %\{directive\}, %\{compliance\}  Example :   --critical-status='%\{directive\} eq "Users" && %\{compliance\} \< 85'    |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'nodes', 'pending-nodes', 'rules', 'directives', 'groups', 'techniques'.                         |
| --critical-*      |   Critical threshold. Can be: 'nodes', 'pending-nodes', 'rules', 'directives', 'groups', 'techniques'.                        |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_rudder_restapi.pl \
	--plugin=apps::rudder::restapi::plugin \
	--mode=statistics \
	--help
```
