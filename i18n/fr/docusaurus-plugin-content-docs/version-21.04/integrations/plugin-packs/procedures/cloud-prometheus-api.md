---
id: cloud-prometheus-api
title: Prometheus Server
---

## Vue d'ensemble

Prometheus est un système de supervision orienté métrique avec des capacités de 
collecte vers différents *exporters* exposant des métriques via HTTP. 

Le Centreon Plugin Pack utilise les capacité des APIs de Prometheus et de son 
language PromQL pour executer des requêtes sur les données contenu dans sa base
de données orientée séries temporelles.

## Contenu du Pack

### Eléments supervisés

- N'importe quelle métrique collectée et stockée par Prometheus
- Statut des *targets* Prometheus

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Expression-->

Mode générique pour executer des requêtes PromQL

| Metric name                                          | Description |
| :--------------------------------------------------- | :---------- |
| *instance*#*centreon_prometheus_metric_display_name* | Any metric  |

<!--Target-Status-->

| Metric name           | Description                |
| :-------------------- | :------------------------- |
| targets.active.count  | Number of active targets   |
| targets.dropped.count | Number of dropped targets  |
| targets.up.count      | Number of up targets       |
| targets.down.count    | Number of down targets     |
| targets.unknown.count | Number of unknown targets  | 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Le Collecteur Centreon doit être en mesure d'executer des requêtes HTTP(S) vers le 
Serveur Prometheus.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin Centreon sur les Collecteurs interrogeant Prometheus:

```bash
yum install centreon-plugin-Cloud-Prometheus-Api
```

2. Dans l'interface Centreon, installer le Plugin Pack *Prometheus API* via le menu "Configuration > Plugin Packs > Gestionnaire"

<!--Offline IMP License-->

1. Installer le Plugin Centreon sur les Collecteurs interrogeant Prometheus:

```bash
yum install centreon-plugin-Cloud-Prometheus-Api
```

2. Installer le package RPM du Plugin Pack sur le serveur Central:

```bash
yum install centreon-pack-cloud-prometheus-api
```

3. Dans l'interface Centreon, installer le Plugin Pack *Prometheus API* via le menu "Configuration > Plugin Packs > Gestionnaire"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

- Connectez vous à l'interface Centreon et ajouter un nouvel Hôte via le menu "Configuration > Hôtes".
- Appliquez le Modèle *Cloud-Prometheus-Api-custom*
- Une fois le Modèle appliqué, saisissez la valeur des Macros obligatoires listées ci-dessous:

| Mandatory | Nom                     | Description                                            |
|:----------|:------------------------|:------------------------------------------------------ |
| X         | PROMETHEUSAPIHOSTNAME   | Nom ou IP du serveur Prometheus                        |
| X         | PROMETHEUSAPIPORT       | Port d'écoute de l'API Prometheus                      |
| X         | PROMETHEUSAPIURL        | Chemin URL d'accès à l'API (Par défaut: '/api/v1)      |
| X         | PROMETHEUSAPIPROTO      | Protocol used by Prom API (Par défaut: 'http')         |
|           | EXTRAOPTIONS            | Options supplémentaires, e.g: --use-new-perfdata       |

## FAQ

### Comment tester le Plugin en ligne de commande et à quoi correspondent les options?

> Note: Le mode décrit ci-dessous ne fonctionne que lorsque le Modèle est appliqué sur
un Hôte étant un serveur Prometheus.

Une fois le Plugin installé, connectez-vous au Collecteur Centreon et utilisez l'utilisateur
*centreon-engine* pour lancer la commande suivante: 

```bash
/usr/lib/centreon/plugins//centreon_prometheus_api.pl \
    --plugin=cloud::prometheus::restapi::plugin \
    --mode=target-status \
    --hostname=amzprometheus.int.centreon.com \
    --url-path='/api/v1' --port='80' --proto='http' \
    --filter-label='job,coredns' \
    --warning-status='' --critical-status='%{health} !~ /up/' 
```

Expected command output is shown below:

```bash
OK: Targets Active: 2, Dropped: 175, Up: 2, Down: 0, Unknown: 0 - All targets status are ok | 'targets.active.count'=2;;;0; 'targets.dropped.count'=175;;;0; 'targets.up.count'=2;;;0; 'targets.down.count'=0;;;0; 'targets.unknown.count'=0;;;0;
Target 'http://10.244.1.249:9153/metrics' health is 'up' [pod = coredns-74ff55c5b-g4hmt][namespace = kube-system][service = prometheus-operator-coredns][instance = 10.244.1.249:9153][job = coredns][endpoint = http-metrics]
Target 'http://10.244.2.5:9153/metrics' health is 'up' [pod = coredns-74ff55c5b-vh9zt][namespace = kube-system][service = prometheus-operator-coredns][instance = 10.244.2.5:9153][job = coredns][endpoint = http-metrics]
```

The command above check the status of the targets (`--mode=target-status`) linked 
to a Prometheus server (`--hostname=amzprometheus.int.centreon.com`)  exposing its API 
over HTTP and listnening on port 80 (`--port='80' --proto='http'`). 

Only targets linked with the coredns job label are checked (`--filter-label='job,coredns'`). 

The command triggers a CRITICAL if any of the Target status is not equal to "up". 

### Comment utiliser le mode Expression (générique) ?

> Note: Ce mode peut être utilisé à la fois directement sur un Hôte étant un 
serveur Prometheus et à la fois sur un Hôte pour lequel Prometheus récupère des 
métriques. Dans les deux cas, l'hôte doit hérité du Modèle *Cloud-Prometheus-Api-custom*
et le Service doit être créé manuellement au moyen du Modèle de Service *Cloud-Prometheus-Expression-Api-custom*

Voici un exemple pour illuster comment le mode *Expression* fonctionne: 

```bash
/usr/lib/centreon/plugins//centreon_prometheus_api.pl \
    --plugin=cloud::prometheus::restapi::plugin \
    --mode=expression \
    --hostname=amzprometheus.int.centreon.com \
    --url-path='/api/v1' --port='80' --proto='http' \
    --query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100' \
    --output='%{instance} CPU Requests: %{cpu_requests}%' --multiple-output='Nodes CPU Requests within bounds' \
    --instance='node' \
    --warning-status='%{cpu_requests} > 60' --critical-status='%{cpu_requests} > 70' \
    --use-new-perfdata --verbose 
```

#### Option `--query` et Macro QUERIES associée

The `--query` option allows to define two things:

- the Centreon metric name (`cpu_requests`)
- the PromQL query (`sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100`)

In the Service definition, you can specify several queries that's why the QUERIES macro 
exceptionnaly includes the option definition. Here, QUERIES value would be "--query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100'". 

#### Option `--instance` et Macro associée

The instance option explicits the Prometheus metric dimension/label the Plugin will highlight 
in the graphs (`--instance='node'`). The INSTANCE macro value would be "node" in this example. 

#### Options `--multiple-output`/`--output` et Macros MULTIPLEOUTPUT/OUTPUT associées

The output-related options gives ability to tune output messages of the
check in the following cases:

- Check a metric on multiple instances
- Check returning an error

Values can be specified through the corresponding macros, in this example the value of OUTPUT macro
would be "%{instance} CPU Requests: %{cpu_requests}%". Note that we use the Centreon label defined in the `--query`
option to use the obtained value). We also use the '%{instance}' keyword to display the node name. 

The MULTIPLEOUTPUT value would be "Nodes CPU Requests within bounds"

#### Options `--\*-status` et Macros *STATUS associées

--warning-status and --critical-status purpose is to define when the Plugin will raise an alert. 

In the command above, the check triggers a *WARNING* alarm when the 'cpu_requests' value is above 60 and a 
*CRITICAL* one when it is above 70. 

Note that the Centreon label defined in the `--query` options is used again to compare 
the obtained value with thresholds. 

The macros value would be '%{cpu_requests} > 60' for WARNINGSTATUS and '%{cpu_requests} > 70' 
for CRITICALSTATUS.

#### Sortie du Plugin et résumé des Macros

Si tout fonctionne correctement, un message similaire au suivant devrait s'afficher:

```bash
OK: Nodes CPU Requests within bounds | 'amzkubemaster.int.centreon.com#cpu_requests'=37.5;;;; 'amzkubenode1.int.centreon.com#cpu_requests'=35;;;; 'amzkubenode2.int.centreon.com#cpu_requests'=30;;;;
amzkubemaster.int.centreon.com CPU Requests: 37.5%
amzkubenode1.int.centreon.com CPU Requests: 35%
amzkubenode2.int.centreon.com CPU Requests: 30%
```

Voici un résumé des Macros à définir au niveau du Service:

| Nom               | Value                                                  |
|:----------------- |:------------------------------------------------------ |
| QUERIES           | --query='cpu_requests,sum by (node) (kube_pod_container_resource_requests_cpu_cores) / sum by (node) (kube_node_status_capacity_cpu_cores) * 100'                     |
| INSTANCE          | node                                                   |
| OUTPUT            | URL Path to reach API (Default: '/api/v1)              |
| MULTIPLEOUTPUT    | Nodes CPU Requests within bounds                       |
| WARNINGSTATUS     | %{cpu_requests} > 60                                   |
| CRITICALSTATUS    | %{cpu_requests} > 70                                   |
| EXTRAOPTIONS      | --verbose --use-new-perfdata                           |

## Troubleshooting

### UNKNOWN: 500 Can't connect to amzprometheus.int.centreon.com:9090 (<error_text) |

Lorsque cette erreur est renvoyée, vérifier que les informations pour contacter 
le serveur Prometheus sont correctes (Port, Nom d'Hôte) et que la connexion est 
possible.

Le contenu de la balise <error_text> donne des indications supplémentaires sur la 
cause du dysfonctionnement.

### UNKNOWN: 400 Bad Request |

La requête PromQL contient probablement une erreur de syntaxe. Il est nécessaire
de valider son fonctionnement dans l'interface Prometheus. 