---
id: query-syntax
title: Query syntax
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- > Refer to the [Lucene official documentation](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html) for a full description of the syntax. -->

Utilisez les requêtes dans la page [**Log explorer**](explore-analyze.md), dans les [règles d'alerte](alerts.md) ou dans les [tableaux de bord](dashboards.md) pour filtrer vos données et interroger les attributs OpenTelemetry. Les attributs que vous pourrez interroger seront ceux [récupérés par votre collecteur OpenTelemetry, tel que vous l'avez configuré](./collector/collector.md). Consultez [À quoi ressemble une entrée de journal au format OpenTelemetry ?](./getting-started/concepts.md#à-quoi-ressemble-une-entrée-de-log-au-format-opentelemetry-) pour obtenir un aperçu des principaux attributs.

Dans la page **Log explorer** :

* Saisissez votre requête, puis appuyez sur **CTRL** + **Entrée** pour lancer la recherche. <!--autocomplete-->
* N'incluez pas de paramètres temporels dans vos requêtes : la période de temps est définie à l'aide de la liste située dans le coin supérieur droit.

## Exemples de requêtes simples

Sélectionnez tous les logs dont le [nom du service](resources/glossary.md#service) est **syslog**.

```text
service_name:syslog
```

Sélectionnez tous les logs du service **syslog** dont le [numéro de sévérité](resources/glossary.md#sévérité) est strictement supérieur à 20, c'est-à-dire les logs dont la sévérité est FATAL. Utilisez l'opérateur booléen **AND**.

```text
service_name:syslog AND severity_number:[20 TO *]
```

Sélectionnez tous les logs FATAL pour le service **syslog** provenant d'hôtes situés dans une plage d'IPs spécifiée. Utilisez le caractère générique `*`.

```text
service_name:syslog AND severity_number:[20 TO *] AND host.ip:192.168.1.*
```

Sélectionnez tous les logs FATAL pour le service **syslog**, provenant d'hôtes situés dans une plage d'IPs spécifiée, à l'exception de 192.168.1.10. Combinez les opérateurs booléens **AND** et **NOT**.

```text
service_name:syslog AND severity_number:[20 TO *] AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10"
```

Dans ces logs, recherchez ceux dont le corps du message contient le mot "failed". La syntaxe est sensible à la casse.

```text
service_name:syslog AND severity_number:[20 TO *] AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10" AND body.message:*failed*
```

<!-- 
Instead of looking exactly for the word "failed', find logs whose message body includes terms like "failed". Use [fuzzy matching](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html#Fuzzy%20Searches).

```text
SeverityNumber:[20 TO *] AND service.name:"payments-api" AND host.ip:192.168.1.* AND NOT host.ip:"192.168.1.10" AND body.message:failed~
``` -->
