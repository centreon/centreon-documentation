---
id: glossary
title: Glossaire des termes Centreon Log Management
---

## Évènement d'alerte

Enregistrement généré chaque fois qu'une [règle d'alerte](#règle-dalerte) est évaluée. Le statut de l'évènement d'alerte est déterminé par les critères que vous avez définis (OK si aucun critère n'est rempli). Le dernier évènement d'alerte produit par chaque règle d'alerte est affiché à la page **Alerts > Alert events**. Les statuts d'évènements d'alerte possibles sont les suivants :

* <span style={{color:'#ff4a4a'}}>**CRITICAL**</span>
* <span style={{color:'#fd9b27'}}>**ERROR**</span>
* <span style={{color:'#ffca34'}}>**WARNING**</span>
* <span style={{color:'#88b917'}}>**OK**</span>
* <span style={{color:'#bcbdc0'}}>**UNKNOWN**</span>

## Règle d'alerte

Ensemble de conditions qui indiquent qu'un problème est en train de se produire. Chaque fois que la règle est évaluée, un [évènement d'alerte](#évènement-dalerte) est créé et affiché à la page **Alerts > Alert events**.

## Attributs personnalisés

Les attributs personnalisés sont des paires clé-valeur que vous ajoutez vous-même aux logs afin de fournir des informations supplémentaires qui ne sont pas incluses par défaut. Ils vous permettent de décrire des détails spécifiques à votre entreprise, à votre application ou à votre domaine qui ne sont pas définis par OpenTelemetry dans son ensemble d'attributs standard.

## Évènement

### Évènement de log

Un évènement de log est une entrée de log.

Ne pas confondre avec [Évènement d'alerte](#évènement-dalerte).

## Service

Ce qui a généré le log. Exemples : Apache, HTTPD, MySQL, Syslog, Postgres... Ces informations sont fournies par l'attribut **service_name**.

<!-- ## service_namespace [TBC]

A label for a set of services. Example: **e-commerce site.** -->

## Sévérité

Dans la plupart des outils et des plateformes, les logs sont présentés à l'aide de niveaux de log tels que INFO ou ERROR, le format le plus familier aux utilisateurs finaux. Dans OpenTelemetry, ces informations sont gérées à l'aide de deux attributs : [SeverityNumber](https://opentelemetry.io/docs/specs/otel/logs/data-model/#field-severitynumber) (l'ID de la sévérité) et SeverityText (le libellé de la sévérité). Une valeur **SeverityText** correspond à plusieurs **SeverityNumbers**.

De plus, Centreon Log Management dispose d’un attribut **Severity** (accessible dans Log explorer) qui normalise toutes les valeurs de **SeverityText**. Les valeurs stockées dans l’attribut **SeverityText** renvoyé par l’hôte sont converties, dans l’attribut **Severity**, en celles définies par la norme OpenTelemetry (à l’exception de WARN, qui devient WARNING). Cela évite les doublons ou les entrées incohérentes dans la liste des sévérités : vous ne verrez que des logs avec une sévérité <span style={{color:"#4a8c6f"}}>**TRACE**</span>, <span style={{color:"#1ebeb3"}}>**DEBUG**</span>, <span style={{color:"#1588d1"}}>**INFO**</span>, <span style={{color:"#ffca34"}} >**WARNING**</span>, <span style={{color:"#fd9b27"}}>**ERROR**</span> ou <span style={{color:"#ff4a4a"}}>**FATAL**</span>.

Voici la liste des niveaux de sévérité traités par Log Management (les descriptions sont celles de la documentation OpenTelemetry) :

| Ensemble de SeverityNumbers | Nom | Description |
| --- | --- |--- |
| 1-4 | <span style={{color:'#4a8c6f'}}>**TRACE**</span>	| Un évènement de débugage très précis. |
| 5-8	| <span style={{color:'#1ebeb3'}}>**DEBUG**</span>	| Un évènement de débugage. |
| 9-12	| <span style={{color:'#1588d1'}}>**INFO**</span>	| Un évènement informatif. Indique qu'un évènement s'est produit. |
| 13-16	| <span style={{color:'#ffca34'}}>**WARNING**</span>	| Un évènement d'avertissement. Il ne s'agit pas d'une erreur, mais cet évènement est probablement plus important qu'un évènement informatif. |
| 17-20	| <span style={{color:'#fd9b27'}}>**ERROR**</span>	| Une erreur s'est produite. |
| 21-24	| <span style={{color:'#ff4a4a'}}>**FATAL**</span>	| Une erreur fatale telle qu'un crash de l'application ou du système. |

Certains outils peuvent ne pas inclure de numéro de sévérité dans leurs logs. Toute entrée de log reçue sans numéro de sévérité se voit attribuer par Log Management le numéro de sévérité **0** (la sévérité est <span style={{color:"#999999"}}>**UNSPECIFIED**</span>).

## Télémétrie

La télémétrie est un mécanisme par lequel un système transmet des informations sur son activité à un autre système, afin de permettre l’observation, le suivi et la compréhension de son fonctionnement.
