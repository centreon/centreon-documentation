---
id: query-syntax
title: Syntaxe des requêtes
description: Référence de syntaxe pour interroger les attributs des logs et filtrer les données
---

Utilisez les requêtes dans la page [**Log explorer**](explore-analyze.md), dans les [règles d'alerte](alerts.md) ou dans les [tableaux de bord](dashboards.md) pour filtrer vos données et interroger les attributs OpenTelemetry. Les attributs que vous pourrez interroger seront ceux [récupérés par votre collecteur OpenTelemetry, tel que vous l'avez configuré](./collector/collector.md). Consultez [À quoi ressemble une entrée de journal au format OpenTelemetry ?](./getting-started/concepts.md#à-quoi-ressemble-une-entrée-de-log-au-format-opentelemetry-) pour obtenir un aperçu des principaux attributs.

Dans la page **Log explorer** :

* Saisissez votre requête, puis appuyez sur **CTRL** + **Entrée** pour lancer la recherche. <!--autocomplete-->
* N'incluez pas de paramètres temporels dans vos requêtes : la période de temps est définie à l'aide de la liste située dans le coin supérieur droit, ou via la timeline.

## Exemples de requêtes simples

Sélectionnez tous les logs dont le [nom du service](resources/glossary.md#service) est **syslog**.

```text
service_name:syslog
```

Sélectionnez tous les logs du service **syslog** dont le [numéro de sévérité](resources/glossary.md#sévérité) est strictement supérieur à 20, c'est-à-dire les logs dont la sévérité est FATAL. Utilisez l'opérateur booléen **AND**.

```text
service_name:syslog AND severity_number:[21 TO *]
```

Sélectionnez tous les logs FATAL pour le service **syslog** provenant d'hôtes situés dans une plage d'IPs spécifiée. Utilisez le caractère générique `*`.

```text
service_name:syslog AND severity_number:[21 TO *] AND host.ip:192.168.1.*
```

Sélectionnez tous les logs FATAL pour le service **syslog**, provenant d'hôtes situés dans une plage d'IPs spécifiée, à l'exception de 192.168.1.10. Combinez les opérateurs booléens **AND** et **NOT**.

```text
service_name:syslog AND severity_number:[21 TO *] AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10"
```

Dans ces logs, recherchez ceux dont le corps du message contient le mot "failed". La syntaxe est sensible à la casse.

```text
service_name:syslog AND severity_number:[21 TO *] AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10" AND body.message:*failed*
```

## Requêtes sur des attributs imbriqués

Dans un log OpenTelemetry, certains attributs sont situés à la racine du log, et d'autres sont contenus dans les sections **attributes** et **resource_attributes**.

* Les attributs de la section **attributes** concernent le log lui-même
* Les attributs de la section **resource_attributes** concernent l'hôte sur lequel le collecteur est installé.

Pour requêter sur des données contenues dans ces sections, il suffit de chaîner les étapes depuis la racine du document en utilisant des points comme séparateurs. Dans l'exemple ci-dessous, pour filtrer sur l'attribut **host.name**, utilisez **resource_attributes.host.name**.

```json
{
  "attributes": {
    "event.id": 16394,
    "event.record.id": 226535,
    "event.task": "0",
    "process.pid": 0
  },
  "body": {
    "message": "La migration de bas niveau hors connexion a réussi."
  },
  "observed_timestamp_nanos": 1763648218788360200,
  "resource_attributes": {
    "event.provider.guid": "{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}",
    "event.provider.name": "Microsoft-Windows-Security-SPP",
    "host.name": "MyLaptop",
    "os.name": "Microsoft Windows 10 Pro",
    "os.type": "windows",
    "os.version": "22H2",
    "service.namespace": "application",
    "service.version": "1.0.0"
  },
  "service_name": "windows-event-log",
  "severity_number": 9,
  "severity_text": "INFO",
  "timestamp_nanos": 1763648218609230600,
  "trace_flags": 0
}
```

## Aide-mémoire de la syntaxe

### Opérateurs booléens

| Syntaxe | Description | Exemple |
|--------|-------------|---------|
| `AND` / `&&` | Les deux termes doivent correspondre | `error AND timeout` |
| `OR` / `\|\|` | L'un ou l'autre terme doit correspondre | `warn OR error` |
| `NOT` / `!` / `-` | Le terme ne doit pas correspondre | `NOT debug` / `-debug` |
| *(espace)* | OR implicite entre les termes | `foo bar` → `foo OR bar` |

### Requêtes par champ

| Syntaxe | Description | Exemple |
|--------|-------------|---------|
| `champ:valeur` | Correspondance d'une valeur dans un champ précis | `level:error` |
| `champ:(a OR b)` | Correspondance de plusieurs valeurs dans un champ | `level:(warn OR error)` |
| `champ:*` | Le champ existe (non nul) | `user_id:*` |

### Phrase & correspondance exacte

| Syntaxe | Description | Exemple |
|--------|-------------|---------|
| `"..."` | Correspondance de phrase exacte | `"connection refused"` |
| `"..."~N` | Phrase avec écart autorisé (distance entre mots) | `"foo bar"~2` |

### Caractères génériques

| Syntaxe | Description | Exemple |
|--------|-------------|---------|
| `*` | Zéro ou plusieurs caractères | `time*` → timeout, timer… |
| `?` | Exactement un caractère | `te?t` → test, text… |

> Les caractères génériques ne peuvent pas être utilisés en début de terme (ex. `*foo` n'est pas supporté).

### Plages de valeurs

| Syntaxe | Description | Exemple |
|--------|-------------|---------|
| `[A TO B]` | Plage inclusive | `status:[200 TO 299]` |
| `{A TO B}` | Plage exclusive | `duration:{100 TO 500}` |
| `[A TO B}` | Mixte (début inclusif, fin exclusive) | `bytes:[0 TO 1024}` |
| `[* TO B]` | Sans borne inférieure | `latency:[* TO 200]` |
| `[A TO *]` | Sans borne supérieure | `latency:[500 TO *]` |
| `champ:>N` | Strictement supérieur à | `duration:>100` |
| `champ:>=N` | Supérieur ou égal à | `duration:>=100` |
| `champ:<N` | Strictement inférieur à | `duration:<500` |
| `champ:<=N` | Inférieur ou égal à | `duration:<=500` |

### Groupement et priorité

| Syntaxe | Description | Exemple |
|--------|-------------|---------|
| `(...)` | Grouper des expressions | `(foo OR bar) AND baz` |
| `champ:(...)` | Grouper des valeurs pour un champ | `level:(warn OR error)` |

### Pondération

| Syntaxe | Description | Exemple |
|--------|-------------|---------|
| `terme^N` | Augmenter la pertinence d'un terme par un facteur N | `error^2 OR warn` |

### Caractères spéciaux et échappement

| Syntaxe | Description | Exemple |
|--------|-------------|---------|
| `\car` | Échapper un caractère réservé | `user\@example\.com` |

Caractères réservés : `+ - && \|\| ! ( ) { } [ ] ^ " ~ * ? : \ /`

## Conseils

* Les noms de champs sont **sensibles à la casse**.
* Les opérateurs AND, OR et NOT doivent être entrés en capitales.
* Les requêtes textuelles sur les champs `text` sont **analysées** (tokenisées, mises en minuscules) ; utilisez les champs `keyword` pour une correspondance exacte.
* Combinez librement les opérateurs : `level:error AND (service:api OR service:gateway) AND latency:[* TO 500]`
