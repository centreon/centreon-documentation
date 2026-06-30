---
id: cloud-openshift-api
title: OpenShift API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **OpenShift API** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)
* [Kubernetes API](./cloud-kubernetes-api.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **OpenShift API** apporte 2 modèles d'hôte :

* **Cloud-OpenShift-Api-custom**
* **Cloud-Openshift-Node-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-OpenShift-Api-custom" label="Cloud-OpenShift-Api-custom">

| Alias            | Modèle de service                           | Description                                 | Découverte |
|:-----------------|:--------------------------------------------|:--------------------------------------------|:----------:|
| ClusterOperators | Cloud-Openshift-ClusterOperators-Api-custom | Contrôle le statut des opérateurs OpenShift |            |
| ClusterVersion   | Cloud-Openshift-ClusterVersion-Api-custom   | Contrôle la version du cluster OpenShift    |            |
| Projects         | Cloud-Openshift-Projects-Api-custom         | Contrôle les projets Openshift              | X          |
| Routes           | Cloud-Openshift-Routes-Api-custom           | Contrôle les routes Openshift               | X          |

Ce modèle d'hôte hérite également de l'ensemble des services associés au modèle [Cloud-Kubernetes-Api-custom](cloud-kubernetes-api.md#modèles).

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-OpenShift-Api-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Cloud-Openshift-Node-Api-custom" label="Cloud-Openshift-Node-Api-custom">

Ce modèle d'hôte hérite de l'ensemble des services associés au modèle [Cloud-Kubernetes-Node-Api-custom](cloud-kubernetes-api.md#modèles).

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle      | Description                                                   |
|:---------------------|:--------------------------------------------------------------|
| OpenShift Nodes      | Discover OpenShift nodes by requesting the OpenShift RestAPI      |
| OpenShift Namespaces | Discover OpenShift namespaces by requesting the OpenShift RestAPI |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle              | Description |
|:-----------------------------|:------------|
| Cloud-Openshift-Api-Projects | Découvrez les Projects OpenShift pour superviser leur état     |
| Cloud-Openshift-Api-Routes   | Découvrez les Routes Openshift pour superviser leur état       |

Ce modèle d'hôte hérite également des règles de découverte associées au modèle [Cloud-Kubernetes-Api-custom](cloud-kubernetes-api.md#découverte-de-services).

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="ClusterOperators" label="ClusterOperators">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| clusteroperators.total.count           | count |
| clusteroperators.available.count       | count |
| clusteroperators.unavailable.count     | count |
| clusteroperators.progressing.count     | count |
| clusteroperators.notupgreadable.count  | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="ClusterVersion" label="ClusterVersion">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Projects" label="Projects">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| projects.total.count                   | count |
| projects.active.count                  | count |
| projects.terminating.count             | count |
| projects.noncompliant.count            | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Routes" label="Routes">

| Nom                                    | Unité |
|:---------------------------------------|:------|
| *namespace*#namespace.routes.count     | count |
| *termination*#routes.termination.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

La communication avec OpenShift s'effectue via l'API REST OpenShift.

Pour utiliser ce connecteur, le collecteur doit pouvoir accéder à l'API OpenShift et s'authentifier à l'aide d'un token d'API valide disposant des permissions nécessaires pour accéder aux ressources supervisées.

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
dnf install centreon-pack-cloud-openshift-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-openshift-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-openshift-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-openshift-api
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **OpenShift API**
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
dnf install centreon-plugin-Cloud-OpenShift-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-OpenShift-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-openshift-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-OpenShift-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Cloud-OpenShift-Api-custom" label="Cloud-OpenShift-Api-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-OpenShift-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                   | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KUBERNETESAPIHOSTNAME   | OpenShift API hostname                                                                                                                             |                   | X           |
| KUBERNETESAPITOKEN      | Token retrieved from service account                                                                                                               |                   | X           |
| KUBERNETESAPIPROTO      | Specify https if needed                                                                                                                            | https             |             |
| KUBERNETESAPIPORT       | API port                                                                                                                                           | 6443              |             |
| KUBERNETESAPICUSTOMMODE | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         |                   |             |
| KUBERNETESAPINAMESPACE  | Query routes in the specified namespace instead of all namespaces                                                                                  |                   |             |
| PROXYURL                | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                   |             |
| TIMEOUT                 | Set HTTP timeout                                                                                                                                   | 10                |             |
| EXTRAOPTIONS            | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Openshift-Node-Api-custom" label="Cloud-Openshift-Node-Api-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Openshift-Node-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                   | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| KUBERNETESAPIHOSTNAME   | OpenShift API hostname                                                                                                                             |                   | X           |
| KUBERNETESAPITOKEN      |                                                                                                                                                    |                   | X           |
| KUBERNETESAPIPROTO      | Specify https if needed                                                                                                                            | https             |             |
| KUBERNETESAPIPORT       | API port                                                                                                                                           | 6443              |             |
| KUBECTLCONFIGFILE       |                                                                                                                                                    |                   |             |
| KUBERNETESAPICUSTOMMODE | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option                         |                   |             |
| KUBERNETESAPINAMESPACE  | Query routes in the specified namespace instead of all namespaces                                                                                  |                   |             |
| PROXYURL                | Proxy URL. Example: http://my.proxy:3128                                                                                                           |                   |             |
| TIMEOUT                 | Set HTTP timeout                                                                                                                                   | 10                |             |
| EXTRAOPTIONS            | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="ClusterOperators" label="ClusterOperators">

| Macro                                     | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INCLUDE_OPERATORS_NAME                    | Include operator name (can be a regexp)                                                                                                          |                   |             |
| EXCLUDE_OPERATORS_NAME                    | Exclude operator name (can be a regexp)                                                                                                          |                   |             |
| WARNING_CLUSTEROPERATORS_AVAILABLE        | Threshold                                                                                                                                        |                   |             |
| CRITICAL_CLUSTEROPERATORS_AVAILABLE       | Threshold                                                                                                                                        |                   |             |
| WARNING_CLUSTEROPERATORS_DEGRADED         | Threshold                                                                                                                                        |                   |             |
| CRITICAL_CLUSTEROPERATORS_DEGRADED        | Threshold                                                                                                                                        |                   |             |
| WARNING_CLUSTEROPERATORS_NOT_UPGRADEABLE  | Threshold                                                                                                                                        |                   |             |
| CRITICAL_CLUSTEROPERATORS_NOT_UPGRADEABLE | Threshold                                                                                                                                        |                   |             |
| WARNING_CLUSTEROPERATORS_PROGRESSING      | Threshold                                                                                                                                        |                   |             |
| CRITICAL_CLUSTEROPERATORS_PROGRESSING     | Threshold                                                                                                                                        |                   |             |
| WARNING_CLUSTEROPERATORS_TOTAL            | Threshold                                                                                                                                        |                   |             |
| CRITICAL_CLUSTEROPERATORS_TOTAL           | Threshold                                                                                                                                        |                   |             |
| CRITICAL_CLUSTEROPERATORS_UNAVAILABLE     | Threshold                                                                                                                                        | @1:               |             |
| WARNING_CLUSTEROPERATORS_UNAVAILABLE      | Threshold                                                                                                                                        |                   |             |
| EXTRA_OPTIONS                             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="ClusterVersion" label="ClusterVersion">

| Macro           | Description                                                                                                                                                                                                                                                                                         | Valeur par défaut                                     | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| CRITICAL_STATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{human\_status\}, %\{current\_version\}, %\{channel\}, %\{desired\_version\}, %\{available\}, %\{progressing\}, %\{failing\}, %\{upgradeable\}, %\{retrievedupdates\}, %\{updates\_available\} | %\{available\} =~ /false/ \|\| %\{failing\} =~ /true/ |             |
| WARNING_STATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{human\_status\}, %\{current\_version\}, %\{channel\}, %\{desired\_version\}, %\{available\}, %\{progressing\}, %\{failing\}, %\{upgradeable\}, %\{retrievedupdates\}, %\{updates\_available\}  |                                                       |             |
| EXTRA_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                    |                                                       |             |

</TabItem>
<TabItem value="Projects" label="Projects">

| Macro                          | Description                                                                                                                                                                    | Valeur par défaut | Obligatoire |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INCLUDE_PROJECT_NAME           | Include project name (can be a regexp)                                                                                                                                         |                   |             |
| EXCLUDE_PROJECT_NAME           | Exclude project name (can be a regexp)                                                                                                                                         |                   |             |
| INCLUDE_LABEL                  | Include projects matching the specified label filters. Filters are provided as a comma-separated list in the format key or key=value, where both key and value may be a regexp |                   |             |
| EXCLUDE_LABEL                  | Exclude projects matching the specified label filters. Filters are provided as a comma-separated list in the format key or key=value, where both key and value may be a regexp |                   |             |
| REQUIRED_LABEL                 | Comma-separated list of required labels. Format: key or key=value. Example: --required-label="owner" --required-label="environment=prod"                                       |                   |             |
| WARNING_PROJECTS_ACTIVE        | Threshold                                                                                                                                                                      |                   |             |
| CRITICAL_PROJECTS_ACTIVE       | Threshold                                                                                                                                                                      |                   |             |
| CRITICAL_PROJECTS_NONCOMPLIANT | Threshold                                                                                                                                                                      | @:1               |             |
| WARNING_PROJECTS_NONCOMPLIANT  | Threshold                                                                                                                                                                      |                   |             |
| WARNING_PROJECTS_TERMINATING   | Threshold                                                                                                                                                                      |                   |             |
| CRITICAL_PROJECTS_TERMINATING  | Threshold                                                                                                                                                                      |                   |             |
| WARNING_PROJECTS_TOTAL         | Threshold                                                                                                                                                                      |                   |             |
| CRITICAL_PROJECTS_TOTAL        | Threshold                                                                                                                                                                      |                   |             |
| EXTRA_OPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                               |                   |             |

</TabItem>
<TabItem value="Routes" label="Routes">

| Macro                         | Description                                                                                                                                                                  | Valeur par défaut | Obligatoire |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INCLUDE_NAMESPACE             | Exclude route host (can be a regexp)                                                                                                                                         |                   |             |
| EXCLUDE_NAMESPACE             | Exclude route namespace (can be a regexp)                                                                                                                                    |                   |             |
| INCLUDE_NAME                  | Include route name (can be a regexp)                                                                                                                                         |                   |             |
| EXCLUDE_NAME                  | Exclude route name (can be a regexp)                                                                                                                                         |                   |             |
| INCLUDE_LABEL                 | Include routes matching the specified label filters. Filters are provided as a comma-separated list in the format key or key=value, where both key and value may be a regexp |                   |             |
| EXCLUDE_LABEL                 | Exclude routes matching the specified label filters. Filters are provided as a comma-separated list in the format key or key=value, where both key and value may be a regexp |                   |             |
| INCLUDE_SERVICE               | Include route service (can be a regexp)                                                                                                                                      |                   |             |
| EXCLUDE_SERVICE               | Exclude route service (can be a regexp)                                                                                                                                      |                   |             |
| INCLUDE_TERMINATION           | Exclude route termination type: `edge`, `passthrough`, `reencrypt`, `none` (can be a regexp)                                                                                 |                   |             |
| WARNING_HOSTS_EXPOSED         | Threshold                                                                                                                                                                    |                   |             |
| CRITICAL_HOSTS_EXPOSED        | Threshold                                                                                                                                                                    |                   |             |
| WARNING_ROUTES_ADMITTED       | Threshold                                                                                                                                                                    |                   |             |
| CRITICAL_ROUTES_ADMITTED      | Threshold                                                                                                                                                                    |                   |             |
| WARNING_ROUTES_NOT_ADMITTED   | Threshold                                                                                                                                                                    |                   |             |
| CRITICAL_ROUTES_NOT_ADMITTED  | Threshold                                                                                                                                                                    |                   |             |
| WARNING_ROUTES_NOT_TLS        | Threshold                                                                                                                                                                    |                   |             |
| CRITICAL_ROUTES_NOT_TLS       | Threshold                                                                                                                                                                    |                   |             |
| WARNING_ROUTES_PER_NAMESPACE  | Threshold                                                                                                                                                                    |                   |             |
| CRITICAL_ROUTES_PER_NAMESPACE | Threshold                                                                                                                                                                    |                   |             |
| WARNING_ROUTES_TLS            | Threshold                                                                                                                                                                    |                   |             |
| CRITICAL_ROUTES_TLS           | Threshold                                                                                                                                                                    |                   |             |
| WARNING_ROUTES_TOTAL          | Threshold                                                                                                                                                                    |                   |             |
| CRITICAL_ROUTES_TOTAL         | Threshold                                                                                                                                                                    |                   |             |
| WARNING_SERVICES_TARGETED     | Threshold                                                                                                                                                                    |                   |             |
| CRITICAL_SERVICES_TARGETED    | Threshold                                                                                                                                                                    |                   |             |
| WARNING_TERMINATION_TYPE      | Threshold                                                                                                                                                                    |                   |             |
| CRITICAL_TERMINATION_TYPE     | Threshold                                                                                                                                                                    |                   |             |
| EXTRA_OPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                             |                   |             |

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
/usr/lib/centreon/plugins/centreon_openshift_api.pl \
	--plugin=cloud::openshift::api::plugin \
	--mode=routes \
	--custommode='' \
	--hostname= \
	--port='6443' \
	--proto='https' \
	--token='' \
	--proxyurl='' \
	--namespace='' \
	--timeout='10'  \
	--include-namespace='' \
	--exclude-namespace='' \
	--include-name='' \
	--exclude-name='' \
	--include-host='' \
	--exclude-host='' \
	--include-label='' \
	--exclude-label='' \
	--include-service='' \
	--exclude-service='' \
	--include-termination='' \
	--exclude-termination='' \
	--warning-routes-total='' \
	--critical-routes-total='' \
	--warning-routes-admitted='' \
	--critical-routes-admitted='' \
	--warning-routes-not-admitted='' \
	--critical-routes-not-admitted='' \
	--warning-routes-tls='' \
	--critical-routes-tls='' \
	--warning-routes-not-tls='' \
	--critical-routes-not-tls='' \
	--warning-hosts-exposed='' \
	--critical-hosts-exposed='' \
	--warning-services-targeted='' \
	--critical-services-targeted='' \
	--warning-routes-per-namespace='' \
	--critical-routes-per-namespace='' \
	--warning-termination-type='' \
	--critical-termination-type='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Namespace :  route(s) Termination :  route(s) | 'namespace#namespace.routes.count'=2644;;;0; 'termination#routes.termination.count'=7137;;;0; 
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
/usr/lib/centreon/plugins/centreon_openshift_api.pl \
	--plugin=cloud::openshift::api::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                  | Modèle de service associé                   |
|:--------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| clusteroperators [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/openshift/api/mode/clusteroperators.pm)] | Cloud-Openshift-ClusterOperators-Api-custom |
| clusterversion [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/openshift/api/mode/clusterversion.pm)]     | Cloud-Openshift-ClusterVersion-Api-custom   |
| projects [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/openshift/api/mode/projects.pm)]                 | Cloud-Openshift-Projects-Api-custom         |
| routes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/openshift/api/mode/routes.pm)]                     | Cloud-Openshift-Routes-Api-custom           |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --show-password                            | By default, sensitive information in command lines is hidden in debug output and replaced with `***` (however, debug logs may still display sensitive information). Using the C option will display the passwords in plain text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-counters                          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-xxx                              | Warning threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical-xxx                             | Critical threshold.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --hostname                                 | OpenShift API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --port                                     | API port (default: 6443).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proto                                    | Specify https if needed (default: 'https').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  | Set HTTP timeout (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --limit                                    | Number of responses to return for each list calls (default: 100).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="ClusterOperators" label="ClusterOperators">

| Option                                      | Description                              |
|:--------------------------------------------|:-----------------------------------------|
| --include-name                              | Include operator name (can be a regexp). |
| --exclude-name                              | Exclude operator name (can be a regexp). |
| --warning-clusteroperators-total            | Threshold.                               |
| --critical-clusteroperators-total           | Threshold.                               |
| --warning-clusteroperators-available        | Threshold.                               |
| --critical-clusteroperators-available       | Threshold.                               |
| --warning-clusteroperators-unavailable      | Threshold.                               |
| --critical-clusteroperators-unavailable     | Threshold (default: '@1:').              |
| --warning-clusteroperators-degraded         | Threshold.                               |
| --critical-clusteroperators-degraded        | Threshold.                               |
| --warning-clusteroperators-progressing      | Threshold.                               |
| --critical-clusteroperators-progressing     | Threshold.                               |
| --warning-clusteroperators-not-upgradeable  | Threshold.                               |
| --critical-clusteroperators-not-upgradeable | Threshold.                               |

</TabItem>
<TabItem value="ClusterVersion" label="ClusterVersion">

| Option            | Description                                                                                                                                                                                                                                                                                                                                                            |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{available\} =~ /false/ \|\| %\{failing\} =~ /true/'). You can use the following variables: %\{human\_status\}, %\{current\_version\}, %\{channel\}, %\{desired\_version\}, %\{available\}, %\{progressing\}, %\{failing\}, %\{upgradeable\}, %\{retrievedupdates\}, %\{updates\_available\} |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{human\_status\}, %\{current\_version\}, %\{channel\}, %\{desired\_version\}, %\{available\}, %\{progressing\}, %\{failing\}, %\{upgradeable\}, %\{retrievedupdates\}, %\{updates\_available\}                                                                     |

</TabItem>
<TabItem value="Projects" label="Projects">

| Option                           | Description                                                                                                                                                                     |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --include-name                   | Include project name (can be a regexp).                                                                                                                                         |
| --exclude-name                   | Exclude project name (can be a regexp).                                                                                                                                         |
| --include-label                  | Include projects matching the specified label filters. Filters are provided as a comma-separated list in the format key or key=value, where both key and value may be a regexp. |
| --exclude-label                  | Exclude projects matching the specified label filters. Filters are provided as a comma-separated list in the format key or key=value, where both key and value may be a regexp. |
| --required-label                 | Comma-separated list of required labels. Format: key or key=value. Example: --required-label="owner" --required-label="environment=prod"                                        |
| --warning-projects-total         | Threshold.                                                                                                                                                                      |
| --critical-projects-total        | Threshold.                                                                                                                                                                      |
| --warning-projects-active        | Threshold.                                                                                                                                                                      |
| --critical-projects-active       | Threshold.                                                                                                                                                                      |
| --warning-projects-terminating   | Threshold.                                                                                                                                                                      |
| --critical-projects-terminating  | Threshold.                                                                                                                                                                      |
| --warning-projects-noncompliant  | Threshold.                                                                                                                                                                      |
| --critical-projects-noncompliant | Threshold (default: '@1:').                                                                                                                                                     |

</TabItem>
<TabItem value="Routes" label="Routes">

| Option                          | Description                                                                                                                                                                   |
|:--------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --namespace                     | Query routes in the specified namespace instead of all namespaces.                                                                                                            |
| --include-name                  | Include route name (can be a regexp).                                                                                                                                         |
| --exclude-name                  | Exclude route name (can be a regexp).                                                                                                                                         |
| --include-namespace             | Include route namespace (can be a regexp).                                                                                                                                    |
| --exclude-namespace             | Exclude route namespace (can be a regexp).                                                                                                                                    |
| --include-host                  | Include route host (can be a regexp).                                                                                                                                         |
| --exclude-host                  | Exclude route host (can be a regexp).                                                                                                                                         |
| --include-label                 | Include routes matching the specified label filters. Filters are provided as a comma-separated list in the format key or key=value, where both key and value may be a regexp. |
| --exclude-label                 | Exclude routes matching the specified label filters. Filters are provided as a comma-separated list in the format key or key=value, where both key and value may be a regexp. |
| --include-service               | Include route service (can be a regexp).                                                                                                                                      |
| --exclude-service               | Exclude route service (can be a regexp).                                                                                                                                      |
| --include-termination           | Include route termination type: `edge`, `passthrough`, `reencrypt`, `none` (can be a regexp).                                                                                 |
| --exclude-termination           | Exclude route termination type: `edge`, `passthrough`, `reencrypt`, `none` (can be a regexp).                                                                                 |
| --warning-hosts-exposed         | Threshold.                                                                                                                                                                    |
| --critical-hosts-exposed        | Threshold.                                                                                                                                                                    |
| --warning-routes-admitted       | Threshold.                                                                                                                                                                    |
| --critical-routes-admitted      | Threshold.                                                                                                                                                                    |
| --warning-routes-not-admitted   | Threshold.                                                                                                                                                                    |
| --critical-routes-not-admitted  | Threshold.                                                                                                                                                                    |
| --warning-routes-not-tls        | Threshold.                                                                                                                                                                    |
| --critical-routes-not-tls       | Threshold.                                                                                                                                                                    |
| --warning-routes-per-namespace  | Threshold.                                                                                                                                                                    |
| --critical-routes-per-namespace | Threshold.                                                                                                                                                                    |
| --warning-routes-tls            | Threshold.                                                                                                                                                                    |
| --critical-routes-tls           | Threshold.                                                                                                                                                                    |
| --warning-routes-total          | Threshold.                                                                                                                                                                    |
| --critical-routes-total         | Threshold.                                                                                                                                                                    |
| --warning-services-targeted     | Threshold.                                                                                                                                                                    |
| --critical-services-targeted    | Threshold.                                                                                                                                                                    |
| --warning-termination-type      | Threshold.                                                                                                                                                                    |
| --critical-termination-type     | Threshold.                                                                                                                                                                    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_openshift_api.pl \
	--plugin=cloud::openshift::api::plugin \
	--mode=routes \
	--help
```
