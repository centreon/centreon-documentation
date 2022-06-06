---
id: applications-monitoring-dynatrace-restapi
title: Dynatrace Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Dynatrace Rest API** apporte un modèle d'hôte :

* App-Monitoring-Dynatrace-Restapi-custom

Il apporte les modèles de service suivants :

| Alias        | Modèle de service                             | Description                                      | Défaut |
|:-------------|:----------------------------------------------|:-------------------------------------------------|:-------|
| Apdex        | App-Monitoring-Dynatrace-Apdex-Restapi        | Contrôle les APDEX des entités                   | X      |
| Availability | App-Monitoring-Dynatrace-Availability-Restapi | Contrôle la disponibilité des Synthetic Monitors | X      |
| Events       | App-Monitoring-Dynatrace-Events-Restapi       | Contrôle les évènements                          | X      |
| Problems     | App-Monitoring-Dynatrace-Problems-Restapi     | Contrôle les problèmes ouverts                   | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Apdex" label="Apdex">

| Metric Name   | Unit  |
|:--------------|:------|
| *apdex*#apdex |       |

</TabItem>
<TabItem value="Availability" label="Availability">

| Metric Name                                                         | Unit  |
|:--------------------------------------------------------------------|:------|
| *synthetic*~*geolocation*#synthetic.monitor.availability.percentage | %     |

</TabItem>
<TabItem value="Events" label="Events">

| Metric Name                    | Unit   |
|:-------------------------------|:-------|
| total.events.count             | count  |
| *management_zone*#events.count | count  |
| status                         | string |

</TabItem>
<TabItem value="Problems" label="Problems">

| Metric Name                           | Unit   |
|:--------------------------------------|:-------|
| total.problems.open.count             | count  |
| *management_zone*#problems.open.count | count  |
| status                                | string |

</TabItem>
</Tabs>

## Prérequis

Un acces token doit être créé avec les droits suivants :
* API v1:
    * DataExport
    * ReadConfig
* API v2:
    * metrics.read
    * problems.read
    * events.read
    * syntheticLocations.read

Plus d'information sur la documentation officielle de Dynatrace : https://www.dynatrace.com/support/help/dynatrace-api/environment-api/tokens-v2/api-tokens

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Dynatrace** :

```bash
yum install centreon-plugin-Applications-Monitoring-Dynatrace-Restapi
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Dynatrace Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Dynatrace** :

```bash
yum install centreon-plugin-Applications-Monitoring-Dynatrace-Restapi
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Dynatrace Rest API** :

```bash
yum install centreon-pack-applications-monitoring-dynatrace-restapi
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Dynatrace Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Dynatrace**.
* Appliquez le modèle d'hôte **App-Monitoring-Dynatrace-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                     | Description                                                                            |
|:------------|:--------------------------|:---------------------------------------------------------------------------------------|
|             | DYNATRACEAPIENVIRONMENTID | Votre environment ID                                                                   |
|             | DYNATRACEAPIEXTRAOPTIONS  | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | DYNATRACEAPIPASSWORD      | Votre access token                                                                     |
|             | DYNATRACEAPIPORT          | (Défaut : '443')                                                                       |
|             | DYNATRACEAPIPROTO         | (Défaut : 'https')                                                                     |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_dynatrace_restapi.pl \
    --plugin=apps::monitoring::dynatrace::restapi::plugin \
    --mode=apdex \
    --hostname='10.0.0.1' \
    --environment-id='' \
    --api-password='' \
    --port='443' \
    --proto='https' \
    --filter-entity='' \
    --relative-time='2h'\
    --aggregation-type='count' \
    --warning-apdex='' \
    --critical-apdex='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All Apdex are OK | 'MZ1#apdex'=0.61;;;0;1 'MZ2#apdex'=0.88;;;0;1 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_dynatrace_restapi.pl \
    --plugin=apps::monitoring::dynatrace::restapi::plugin \
    --mode=apdex \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_dynatrace_restapi.pl \
    --plugin=apps::monitoring::dynatrace::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.