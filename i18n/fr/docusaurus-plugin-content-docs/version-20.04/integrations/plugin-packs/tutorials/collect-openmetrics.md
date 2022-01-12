---
id: collect-openmetrics
title: Collecter des OpenMetrics
---

Le format d'exposition des métriques des exporteurs Prometheus a fait l'objet
d'une standardisation sous le nom d'OpenMetrics afin de pouvoir être réutilisé
ailleurs. Certains produits ont adopté ce format comme par exemple la suite
d'InfluxData, InfluxDB, et Google Cloud Platform.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1.  Installer le code du connecteur sur l'ensemble des collecteurs récupérant
    des openmetrics :

    ``` bash
    yum install centreon-plugin-Applications-Monitoring-Openmetrics
    ```

2.  Installer le pack depuis la page `Configuration > Plugin Packs`.

<!--Offline IMP License-->

1.  Installer le code du connecteur sur l'ensemble des collecteurs récupérant
    des openmetrics :

    ``` bash
    yum install centreon-plugin-Applications-Monitoring-Openmetrics
    ```

2.  Installer le RPM contenant les modèles de supervision sur le serveur Central
    :

    ``` bash
    yum install centreon-pack-applications-monitoring-openmetrics
    ```

3.  Installer le pack depuis la page `Configuration > Plugin Packs`.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Le pack de supervision permet de récupérer des openmetrics via un fichier
présent sur un collecteur contenant des openmetrics (le modèle sera
App-Monitoring-Openmetrics-File-custom) ou une API exposant des openmetrics (le
modèle sera App-Monitoring-Openmetrics-Web-custom). Selon le modèle à utiliser
plusieurs macros seront à configurer :

### App-Monitoring-Openmetrics-File-custom

| Mandatory | Name                    | Description                                                                       |
| :-------- | :---------------------- | :-------------------------------------------------------------------------------- |
| X         | OPENMETRICSFILEPATH     | Path of the file that containts openmetrics (eg. /var/data/metrics)               |
|           | OPENMETRICSEXTRAOPTIONS | Any extraoptions you may want to add to every command line (eg. a --verbose flag) |

### App-Monitoring-Openmetrics-Web-custom

| Mandatory | Name                    | Description                                                                       |
| :-------- | :---------------------- | :-------------------------------------------------------------------------------- |
| X         | OPENMETRICSPORT         | Port use by the endpoint (eg '80', '443' or '9000')                               |
| X         | OPENMETRICSPROTO        | Protocol use by the endpoint ('http' or 'https')                                  |
| X         | OPENMETRICSURLPATH      | Path of the url that expose openmetrics (eg. /metrics)                            |
|           | OPENMETRICSUSERNAME     | Username in case of authentication required                                       |
|           | OPENMETRICSPASSWORD     | Password in case of authentication required                                       |
|           | OPENMETRICSEXTRAOPTIONS | Any extraoptions you may want to add to every command line (eg. a --verbose flag) |

Ces 2 modèles d'hôtes vont déployer automatiquement un service "Scrape-Metrics"
à votre hôte. Ce service pourra être dupliqué autant de fois que nécessaire
selon le nombre de métriques à récupérer.

## How To

### Collecter une métrique en ligne de commande

Nous avons un serveur/conteneur Prometheus qui expose des métriques? Ou un
serveur/conteneur Cadvisor qui expose des métriques ? Nous allons voir quelques
exemples pour collecter ces métriques de ces endpoints.

#### Prometheus

Notre serveur/conteneur Prometheus expose des données sur l'url suivante :
<http://prometheus.int.centreon.com:9090/metrics> :

```text
# HELP prometheus_http_requests_total Counter of HTTP requests.
# TYPE prometheus_http_requests_total counter
prometheus_http_requests_total{code="200",handler="/alerts"} 1
prometheus_http_requests_total{code="200",handler="/api/v1/label/:name/values"} 24
prometheus_http_requests_total{code="200",handler="/api/v1/labels"} 3
prometheus_http_requests_total{code="200",handler="/api/v1/query"} 5454
prometheus_http_requests_total{code="200",handler="/api/v1/query_range"} 3390
prometheus_http_requests_total{code="200",handler="/api/v1/targets"} 3
prometheus_http_requests_total{code="200",handler="/config"} 2
prometheus_http_requests_total{code="200",handler="/flags"} 2
prometheus_http_requests_total{code="200",handler="/graph"} 17
prometheus_http_requests_total{code="200",handler="/metrics"} 155749
prometheus_http_requests_total{code="200",handler="/new/*filepath"} 6
prometheus_http_requests_total{code="200",handler="/service-discovery"} 2
prometheus_http_requests_total{code="200",handler="/static/*filepath"} 54
prometheus_http_requests_total{code="200",handler="/status"} 5
prometheus_http_requests_total{code="200",handler="/targets"} 11
prometheus_http_requests_total{code="302",handler="/"} 20
prometheus_http_requests_total{code="400",handler="/api/v1/query"} 1
prometheus_http_requests_total{code="400",handler="/api/v1/query_range"} 4
```

Nous souhaiterions ici récupérer le nombre total de requêtes sur l'url
'/api/v1/query\_range', pour ce faire commençons tout d'abord par collecter les
métriques "prometheus\_http\_requests\_total" :

``` bash
/usr/lib/centreon/plugins/centreon_monitoring_openmetrics.pl \
 --plugin apps::monitoring::openmetrics::plugin \
 --custommode web \
 --mode scrape-metrics \
 --hostname='prometheus.int.centreon.com' \
 --port='9090' \
 --proto='http' \
 --urlpath='/metrics' \
 --filter-metrics='prometheus_http_requests_total'
```

La commande renvoie alors :

``` bash
OK: All metrics are ok | 'prometheus_http_requests_total'=1;;;; 'prometheus_http_requests_total'=24;;;; 'prometheus_http_requests_total'=3;;;; 'prometheus_http_requests_total'=5454;;;; 'prometheus_http_requests_total'=3390;;;; 'prometheus_http_requests_total'=3;;;; 'prometheus_http_requests_total'=2;;;; 'prometheus_http_requests_total'=2;;;; 'prometheus_http_requests_total'=17;;;; 'prometheus_http_requests_total'=155790;;;; 'prometheus_http_requests_total'=6;;;; 'prometheus_http_requests_total'=2;;;; 'prometheus_http_requests_total'=54;;;; 'prometheus_http_requests_total'=5;;;; 'prometheus_http_requests_total'=11;;;; 'prometheus_http_requests_total'=20;;;; 'prometheus_http_requests_total'=1;;;; 'prometheus_http_requests_total'=4;;;;
```

Nous avons utilisé les options : custommode web (`--custommode web`) afin de
requêter en HTTP/HTTPS prometheus. Nous avons ensuite configuré toutes les
informations de connexion : le nom d'hôte
(`--hostname='prometheus.int.centreon.com'`), le port (`--port='9090'`), le
protocole (`--proto='http'`) et le chemin d'accès aux métriques
(`--urlpath='/metrics'`). Enfin nous avons filtré uniquement les métriques
'prometheus\_http\_requests\_total'
(`filter-metrics='prometheus_http_requests_total'`).

Maintenant nous aimerions filtrer uniquement le nombre de requêtes sur l'url
'/api/v1/query\_range', nous allons donc utiliser l'option `--instance` pour
avoir la possibilité de filtrer sur un champs, et ensuite utiliser
`--filter-instance` pour filtrer sur la valeur de ces champs :

``` bash
/usr/lib/centreon/plugins/centreon_monitoring_openmetrics.pl \
 --plugin apps::monitoring::openmetrics::plugin \
 --custommode web \
 --mode scrape-metrics \
 --hostname='prometheus.int.centreon.com' \
 --port='9090' \
 --proto='http' \
 --urlpath='/metrics' \
 --filter-metrics='prometheus_http_requests_total' \
 --instance='handler' \
 --filter-instance='/api/v1/query_range'
```

La commande renvoie alors :

``` bash
OK: All metrics are ok | '/api/v1/query_range#prometheus_http_requests_total'=3390;;;; '/api/v1/query_range#prometheus_http_requests_total'=4;;;;
```

Nous filtrons maintenant sur les 'handlers' (`--instance='handler'`) et nous ne
récupèrons plus que les métriques dont le handler correspond à
'/api/v1/query\_range' (`--filter-instance='/api/v1/query_range'`).

Et pour finir, nous allons filtrer uniquement les requêtes qui ont retournées un
code '200' pour avoir la possibilité d'avoir un graphique de performance et de
l'alerting dans Centreon :

``` bash
/usr/lib/centreon/plugins/centreon_monitoring_openmetrics.pl \
 --plugin apps::monitoring::openmetrics::plugin \
 --custommode web \
 --mode scrape-metrics \
 --hostname='prometheus.int.centreon.com' \
 --port='9090' \
 --proto='http' \
 --urlpath='/metrics' \
 --filter-metrics='prometheus_http_requests_total' \
 --instance='handler' \
 --filter-instance='/api/v1/query_range' \
 --subinstance='code' \
 --filter-subinstance='200' \
 --warning='5000' \
 --critical='10000'
```

La commande renvoie alors :

``` bash
OK: All metrics are ok | '/api/v1/query_range~200#prometheus_http_requests_total'=3390;;;;
```

Ici, nous avons ajouté l'option `--subinstance='code'` pour obtenir un second
filtre sur les codes HTTP, et nous filtrons ensuite sur le code '200 à l'aide de
l'option `--filter-subinstance='200'`. Pour les seuils, les options
`--warning='5000' --critical='10000'` sont utilisées pour obtenir un WARNING si
la valeur de la métrique récupérée est supérieure à 5000 et un CRITICAL si elle
est supérieure à 10000.

Toutes les options des différents modes sont consultables via le help (`--help`)

### Ajouter cette métrique à ma supervision

Nous allons configurer l'hôte Prometheus en définissant les paramètres suivants
:

| Paramètre          | Valeur                                |
| :----------------- | :------------------------------------ |
| NAME               | prometheus.int.centreon.com           |
| ALIAS              | internal prometheus                   |
| IPADDRESS/FQDN     | prometheus.int.centreon.com           |
| TEMPLATE           | App-Monitoring-Openmetrics-Web-custom |
| OPENMETRICSPORT    | 80                                    |
| OPENMETRICSPROTO   | http                                  |
| OPENMETRICSURLPATH | /metrics                              |

![image](../../../assets/integrations/plugin-packs/tutorials/openmetrics_prometheus_01_configuration_host.png)

Nous pouvons maintenant éditer le service "Scrape-Metrics" qui a été créé
automatiquement en utilisant le template "App-Monitoring-Openmetrics-Web-custom"
pour configurer les macros comme dans l'exemple en CLI :

| Paramètre       | Valeur                            |
| :-------------- | :-------------------------------- |
| FILTERMETRICS   | prometheus\_http\_requests\_total |
| WARNING         | 5000                              |
| CRITICAL        | 10000                             |
| INSTANCE        | handler                           |
| FILTERINSTANCE  | /api/v1/query\_range              |
| SUBINSTANCE     | code                              |
| FILTERSUBINTACE | 200                               |
| EXTRAOPTIONS    | \--verbose                        |

![image](../../../assets/integrations/plugin-packs/tutorials/openmetrics_prometheus_01_configuration_service.png)

Et nous renommons le service en "Query-Api-Number". Ce service pourra être
dupliqué et modifié pour obtenir d'autres métriques prometheus.

![image](../../../assets/integrations/plugin-packs/tutorials/openmetrics_prometheus_01_monitoring.png)
