---
id: otlp-broker-output
title: Sortie Broker OpenTelemetry (OTLP)
description: "Configurez la sortie OTLP de Centreon Broker pour envoyer les données de performance et les statuts sous forme de métriques OpenTelemetry à un collecteur OTLP gRPC, comme Grafana ou Prometheus."
---

La sortie OTLP est une sortie de Centreon Broker qui exporte vos données de supervision sous forme de métriques OpenTelemetry. Elle envoie
les données à tout collecteur compatible avec le protocole OpenTelemetry (OTLP) en gRPC : OpenTelemetry Collector, Grafana Alloy,
Prometheus, VictoriaMetrics, etc.

> Dans cette page, le terme « collecteur OTLP » désigne l'outil tiers qui reçoit les données, et non un collecteur Centreon (poller).

Pour chaque résultat de contrôle d'un hôte ou d'un service, la sortie envoie :

- les données de performance (métriques), avec leurs seuils et leurs valeurs minimum et maximum,
- le statut de l'hôte ou du service.

Chaque hôte est identifié par des attributs de ressource OpenTelemetry standards (`host.name`, `service.name`, `service.namespace`, etc.).
Vous pouvez ainsi corréler les données Centreon avec les autres données de télémétrie de votre plateforme d'observabilité. Les noms des
métriques peuvent suivre les [conventions sémantiques OpenTelemetry](https://opentelemetry.io/docs/specs/semconv/) grâce à un
[fichier de correspondance](#faire-correspondre-les-métriques-aux-conventions-sémantiques-opentelemetry) facultatif.

## Prérequis

- Configurez la sortie sur le **serveur central**. La sortie lit les données que Centreon Broker reçoit de tous les collecteurs.
- Vous devez disposer d'un collecteur OTLP qui accepte les connexions gRPC (en général sur le port **4317**). Le serveur central doit pouvoir
  le joindre : le flux ne doit pas être bloqué par un pare-feu.
- La sortie ne dépend ni de la base de données ni des fichiers RRD : elle ne remplace pas les sorties **unified-sql** ou **RRD**.

> La sortie OTLP ne peut pas encore être configurée depuis l'interface Centreon. Vous devez l'ajouter manuellement au fichier de configuration
> de Centreon Broker (voir [Configurer la sortie](#configurer-la-sortie)).

## Configurer la sortie

1. Sur le serveur central, modifiez le fichier de configuration du Broker central (`/etc/centreon-broker/central-broker.json`).

2. Dans le tableau `output` de l'objet `centreonBroker`, ajoutez un élément de type `otlp`. Exemple :

   ```json
   {
     "centreonBroker": {
       "output": [
         {
           "name": "central-otlp",
           "type": "otlp",
           "endpoint": "otel-collector.example.com:4317",
           "compression": "true",
           "mapping_file": "/etc/centreon-broker/otlp-mapping.json",
           "host_ip_exclude_link_local": "true"
         }
       ]
     }
   }
   ```

   > Toutes les valeurs doivent être des chaînes de caractères, y compris les nombres et les booléens (par exemple `"true"` ou `"5000"`).
   > Les valeurs d'un autre type JSON sont ignorées.

3. Redémarrez Centreon Broker :

   ```shell
   systemctl restart cbd
   ```

4. Consultez les logs du Broker (`/var/log/centreon-broker/central-broker-master.log`). Au démarrage de la sortie, la ligne suivante apparaît :

   ```text
   otlp: endpoint 'central-otlp' exporting to otel-collector.example.com:4317
   ```

> Lorsque vous exportez la configuration du serveur central depuis l'interface Centreon avec les options **Générer les fichiers de configuration**
> et **Déplacer les fichiers générés**, le fichier de configuration du Broker est régénéré et vos modifications manuelles sont perdues.
> Sauvegardez la configuration de votre sortie et ajoutez-la de nouveau après chaque export.

### Paramètres de la sortie

| Paramètre | Obligatoire | Valeur par défaut | Description |
|---|---|---|---|
| `name` | Oui | | Nom de la sortie. Il est utilisé dans les logs. |
| `type` | Oui | | Doit valoir `otlp`. |
| `endpoint` | Oui | | Adresse du collecteur OTLP gRPC, au format `hôte:port`. |
| `encryption` | Non | `false` | Mettez `true` pour chiffrer la connexion au collecteur OTLP avec TLS. |
| `certificate` | Non | | Contenu (format PEM) du certificat client. |
| `private_key` | Non | | Contenu (format PEM) de la clé privée du certificat client. |
| `ca_certificate` | Non | | Contenu (format PEM) du certificat de l'autorité qui a signé le certificat du collecteur OTLP. |
| `compression` | Non | `false` | Mettez `true` pour compresser les données envoyées au collecteur OTLP. |
| `keepalive_interval` | Non | `30` | Intervalle (en secondes) entre deux messages keepalive gRPC. |
| `max_datapoints_per_batch` | Non | `5000` | Nombre de points de données à partir duquel un lot est envoyé au collecteur OTLP. Doit être supérieur à 0. |
| `max_send_interval` | Non | `10` | Délai maximum (en secondes) au bout duquel un lot est envoyé, même s'il n'est pas plein. |
| `max_inflight_requests` | Non | `4` | Nombre maximum de lots en cours d'envoi simultanément au collecteur OTLP. Doit être supérieur à 0. |
| `export_timeout` | Non | `30` | Délai maximum (en secondes) accordé au collecteur OTLP pour répondre à une requête. |
| `mapping_file` | Non | | Chemin du [fichier de correspondance](#faire-correspondre-les-métriques-aux-conventions-sémantiques-opentelemetry). S'il est vide, toutes les métriques sont envoyées avec un nom commençant par `centreon.`. |
| `send_thresholds` | Non | `true` | Envoie les seuils d'alerte et critiques des métriques. |
| `send_min_max` | Non | `true` | Envoie les valeurs minimum et maximum des métriques. |
| `send_status` | Non | `true` | Envoie le statut des hôtes et des services. |
| `host_ip_exclude_link_local` | Non | `false` | Mettez `true` pour retirer les adresses link-local (`169.254.0.0/16` et `fe80::/10`) de l'attribut `host.ip`. |

> Notez les points suivants :
>
> - Les paramètres de certificat contiennent le contenu des certificats, et non le chemin des fichiers.
> - N'ajoutez pas de bloc `filters` à cette sortie : la sortie traite toujours les statuts d'hôtes, les statuts de services et les informations
>   d'hôte envoyées par l'agent CMA, et ignore tout filtre.

## Données envoyées au collecteur OTLP

### Attributs de ressource

Les données de chaque hôte sont regroupées dans une ressource OpenTelemetry, avec les attributs suivants :

| Attribut | Description |
|---|---|
| `host.name` | Nom de l'hôte dans Centreon. |
| `service.name` | Valeur de la macro d'hôte `_OTEL_SERVICE_NAME`, ou `centreon-broker` par défaut (voir [Définir le nom et l'espace de noms du service](#définir-le-nom-et-lespace-de-noms-du-service)). |
| `service.namespace` | Valeur de la macro d'hôte `_OTEL_SERVICE_NAMESPACE`, ou `centreon` par défaut. |
| `service.version` | Version de Centreon Broker. Envoyé uniquement lorsque `service.name` a sa valeur par défaut. |
| `centreon.host.id` | ID de l'hôte dans Centreon. |

Lorsque l'hôte est supervisé par l'[agent CMA](../cma/cma.md), les attributs suivants sont également envoyés :

| Attribut | Description |
|---|---|
| `host.id` | Identifiant unique de la machine. |
| `host.arch` | Architecture de la machine (par exemple `amd64`). |
| `os.type` | Type de système d'exploitation (par exemple `linux` ou `windows`). |
| `os.name` | Nom du système d'exploitation. |
| `os.version` | Version du système d'exploitation. |
| `host.ip` | Adresses IP de la machine. |

### Métriques

- **Données de performance** : chaque valeur est envoyée sous forme de métrique. Sans fichier de correspondance, le nom de la métrique est
  `centreon.<nom de la métrique>` (en minuscules, les caractères spéciaux étant remplacés par `_`), et l'unité est convertie au format
  [UCUM](https://ucum.org/) utilisé par OpenTelemetry (par exemple, `B` devient `By`).
- **Seuils** (si `send_thresholds` vaut `true`) : métrique `<nom de la métrique>.threshold`, avec les attributs `centreon.threshold.level`
  (`warning` ou `critical`) et `centreon.threshold.bound` (`lower` ou `upper`).
- **Valeurs minimum et maximum** (si `send_min_max` vaut `true`) : métrique `<nom de la métrique>.bound`, avec l'attribut `centreon.bound.type`
  (`min` ou `max`).
- **Statuts** (si `send_status` vaut `true`) : métriques `centreon.check.state` (statut du service) et `centreon.host.state` (statut de l'hôte),
  avec l'attribut `centreon.state.type` (`hard` ou `soft`).

Les points de données des services portent également les attributs `centreon.service.description` et `centreon.service.id`. Le nom d'origine
de la donnée de performance est conservé dans l'attribut `centreon.metric.name`.

## Définir le nom et l'espace de noms du service

Par défaut, les attributs de ressource `service.name` et `service.namespace` valent `centreon-broker` et `centreon`. Vous pouvez définir
d'autres valeurs pour chaque hôte à l'aide de [macros personnalisées](../monitoring/basic-objects/macros.md#les-macros-personnalisées) :

| Macro d'hôte | Attribut OpenTelemetry | Valeur par défaut |
|---|---|---|
| `_OTEL_SERVICE_NAME` | `service.name` | `centreon-broker` |
| `_OTEL_SERVICE_NAMESPACE` | `service.namespace` | `centreon` |

1. Allez à la page **Configuration > Hôtes > Hôtes** et modifiez l'hôte (ou le modèle d'hôte).
2. Dans la section **Options de contrôle de l'hôte**, ajoutez les macros personnalisées `OTEL_SERVICE_NAME` et/ou `OTEL_SERVICE_NAMESPACE`,
   puis renseignez leurs valeurs.
3. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).

> - Ces macros ne sont prises en compte que sur les hôtes. Les macros de même nom définies sur des services sont ignorées.
> - Si l'option **Activer le filtrage sur les macros** vaut **Oui** dans la configuration du moteur de collecte du collecteur
>   (**Configuration > Collecteurs > Configuration du moteur de collecte**), ajoutez `OTEL_SERVICE_NAME` et `OTEL_SERVICE_NAMESPACE` à la
>   **Liste blanche des macros**. Sinon, les macros ne sont pas envoyées à Centreon Broker.

## Faire correspondre les métriques aux conventions sémantiques OpenTelemetry

Par défaut, les métriques sont envoyées avec un nom commençant par `centreon.`. Pour utiliser les noms définis par les
[conventions sémantiques OpenTelemetry](https://opentelemetry.io/docs/specs/semconv/system/system-metrics/) (ou tout autre nom),
créez un fichier de correspondance au format JSON, puis indiquez son chemin dans le paramètre `mapping_file` de la sortie.

Exemple de fichier de correspondance (`/etc/centreon-broker/otlp-mapping.json`) :

```json
{
  "metrics": {
    "disk.space.usage.bytes": {
      "name": "system.filesystem.usage",
      "unit": "By",
      "instrument": "sum_non_monotonic",
      "attributes": { "system.filesystem.state": "used" },
      "instance_attribute": "system.filesystem.mountpoint"
    }
  }
}
```

Les clés de l'objet `metrics` sont les noms des métriques Centreon. Si le nom de la donnée de performance contient une instance
(par exemple `/var#disk.space.usage.bytes`), la clé est la partie située après le caractère `#` (`disk.space.usage.bytes`).

| Champ | Obligatoire | Valeur par défaut | Description |
|---|---|---|---|
| `name` | Oui | | Nom de la métrique envoyée au collecteur OTLP. |
| `unit` | Non | | Unité de la métrique. |
| `instrument` | Non | `gauge` | Type de métrique : `gauge`, `sum_monotonic` (compteur qui ne fait qu'augmenter) ou `sum_non_monotonic` (somme qui peut augmenter et diminuer). |
| `scale` | Non | `1` | Facteur appliqué à la valeur, aux seuils et aux valeurs minimum et maximum (par exemple `0.001` pour convertir des millisecondes en secondes). |
| `attributes` | Non | | Attributs constants ajoutés à chaque point de données. |
| `instance_attribute` | Non | | Nom de l'attribut qui reçoit l'instance de la donnée de performance (par exemple le point de montage d'un système de fichiers). Si ce champ est renseigné et que la donnée de performance n'a pas d'instance, la correspondance n'est pas appliquée. |

Les métriques absentes du fichier de correspondance sont envoyées avec leur nom par défaut (`centreon.<nom de la métrique>`).

Centreon Broker surveille le fichier de correspondance : lorsque vous le modifiez, la nouvelle correspondance est appliquée sans redémarrer
Centreon Broker.

> - Au démarrage, si le fichier de correspondance n'est pas valide, la sortie ne démarre pas. Consultez les logs du Broker.
> - Si vous modifiez le fichier pendant que Centreon Broker est en cours d'exécution, un fichier non valide est ignoré et la correspondance
>   précédente est conservée. Le message suivant apparaît dans les logs du Broker : `otlp: <error>; keeping the previous mapping`.

## Dépannage

Consultez les logs du Broker central (`/var/log/centreon-broker/central-broker-master.log`) :

- Après l'envoi de chaque lot : `otlp: <n> datapoints of <h> hosts sent in <ms> ms`.
- Si le collecteur OTLP est injoignable ou renvoie une erreur : `otlp: export of <n> datapoints failed: <error>`.
- Si le collecteur OTLP rejette certains points de données : `otlp: collector rejected <n> datapoints: <message>`.

> Les points de données qui n'ont pas pu être envoyés ne sont pas renvoyés : ils sont perdus. Assurez-vous que le collecteur OTLP est disponible.

Les statistiques de la sortie sont disponibles dans le fichier de statistiques du Broker (`/var/lib/centreon-broker/central-broker-master-stats.json`) :
nombre de lots et de points de données envoyés (`batches_sent`, `datapoints_sent`), nombre d'erreurs d'export (`export_errors`), nombre de
statuts ignorés car le nom de l'hôte est inconnu (`dropped_no_host_name`), etc.
