---
id: cloud-gcp-management-stackdriver
title: Google Stackdriver
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Google Stackdriver collecte les métriques:
* Get-metrics

La liste des métriques est visible à cette addresse: https://cloud.google.com/monitoring/api/metrics_gcp

### Métriques collectées

Pour l'ensemble des métriques collectées, il est possible de choisir *aggregation*: _average_, _minimum_, _maximum_ et _total_.

<!--DOCUSAURUS_CODE_TABS-->

<!--Get-metrics-->

| Metric name                         | Description | Unit  |
| :---------------------------------- | :---------- | :---- |
| *aggregation*#*metric_display_name* | Any metric  |       |

Par exemple, la moyenne de la métrique *https/backend_latencies* devient *average#https.backend_latencies* 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges Google Cloud

Créer une *clé de compte de service* (télécharger sa clé privée sous la forme d'un fichier JSON) avec les privilèges suivants:

| Google Scope                                     | Description                                                     |
| :----------------------------------------------- | :-------------------------------------------------------------- |
| https://www.googleapis.com/auth/cloud-platform   | View and manage your data across Google Cloud Platform services |

Comment créer une clé de compte de service: https://developers.google.com/identity/protocols/oauth2/service-account

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Cloud-Gcp-Management-Stackdriver-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Google Stackdriver* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Cloud-Gcp-Management-Stackdriver-Api
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-cloud-gcp-management-stackdriver
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Google Stackdriver* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un service par métrique.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *Cloud-Gcp-Management-Stackdriver-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Name                 | Description                                                                                 |
| :---------- | :------------------- | :------------------------------------------------------------------------------------------ |
| X           | GCPKEYFILEPATH       | Service account key json file                                                               |
| X           | GCPSCOPEENDPOINT     | Google Scope. Default: https://www.googleapis.com/auth/cloud-platform                       |
|             | PROXYURL             | Configure proxy URL                                                                         |
|             | GCPEXTRAOPTIONS      | Any extra option you may want to add to every command_line (eg. a --verbose flag)           |
|             | DUMMYSTATUS          | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT          | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

> **WARNING**: La clé de service (format json) doit être hébergée sur le collecteur Centreon. L'utilisateur *centreon-engine* doit avoir les droits en lecture sur ce fichier.

Vous pouvez ajouter un service à votre hôte en lui appliquant le modèle de service service *Cloud-Gcp-Management-Stackdriver-Get-Metrics-Api-custom*.
Certaines macros doivent être renseignées:

| Mandatory   | Name                 | Description                                                                                 |
| :---------- | :------------------- | :------------------------------------------------------------------------------------------ |
| X           | GCPDIMENSIONNAME     | The name of the dimension to filter on.                                                     |
| X           | GCPDIMENSIONOPERATOR | Define the type of filter match to use. Can be: _equals_, _regexp_, _starts_.               |
| X           | GCPDIMENSIONVALUE    | Value to the dimension monitor.                                                             |
| X           | API                  | Google Cloud API. Eg.: *compute.googleapis.com*                                             |
| X           | METRIC               | Metric to monitor. Eg.: *instance/cpu/utilization*                                          |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_gcp_management_stackdriver_api.pl \
    --plugin=cloud::google::gcp::management::stackdriver::plugin \
    --mode=get-metrics \
    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \
    --dimension-name='metric.labels.instance_name' \
    --dimension-operator='equals' \
    --dimension-value='instance-centreon1-drb5' \
    --metric='instance/cpu/utilization' \
    --api='compute.googleapis.com' \
    --aggregation='average' \
    --warning-metric='90' \
    --critical-metric='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Metric 'instance/cpu/utilization' of resource 'instance-centreon1-drb5' value is 0.0111772524293797 | 'average#instance.cpu.utilization'=0.0111772524293797;0:90;0:95;;
Metric 'instance/cpu/utilization' of resource 'instance-centreon1-drb5' value is 0.0111772524293797
```

Cette commande contrôle l'utilisation processeur (```--metric='instance/cpu/utilization'```) d'une instance Google Compute Engine 
ayant pour nom *instance-centreon1-drb5* (```--dimension-name='metric.labels.instance_name' --dimension-operator='equals' --dimension-value='instance-centreon1-drb5'```).

Cette commande déclenchera une alarme WARNING si l'utilisateur processeur est supérieur à 90% (```--warning-metric='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-metric='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_gcp_management_stackdriver_api.pl \
    --plugin=cloud::google::gcp::management::stackdriver::plugin \
    --mode=get-metrics \
    --help
```

### J'obtiens le message d'erreur suivant: ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'il n'y a pas de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.
