---
id: explore-analyze
title: Explorer et analyser les logs
description: Aperçu des différentes façons d'explorer et d'analyser les logs dans Centreon Log Management
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';

Selon votre [cas d'usage](./getting-started/use-cases.md), vous pouvez soit filtrer les logs de la page **Log explorer** pour afficher les logs à haut niveau de sévérité, soit vous baser sur les évènements d'alerte (alert events) pour les situations plus complexes.

> Pour afficher des logs dans Centreon Log Management, vous devez d'abord [configurer un collecteur OpenTelemetry sur chaque hôte dont vous souhaitez recevoir les logs](./collector/collector.md).

Centreon Log Management vous propose plusieurs façons d'explorer vos données :

* [L'explorateur de logs (log explorer)](log-explorer.md): recherchez et filtrez les logs afin d'investiguer les problèmes et d'effectuer une analyse de leurs root causes.
* [Les évènements d'alerte (**Alert events**)](alerts.md#afficher-le-dernier-évènement-dalerte-pour-chaque-règle): surveillez ce qui se passe en temps réel afin de pouvoir réagir rapidement aux incidents. (Pour obtenir des évènements d'alerte, vous devez d'abord créer des [règles d'alerte](alerts.md).)
* [Les tableaux de bord (dashboards)](./dashboards.md): visualisez les données actuelles et historiques afin d'analyser les tendances et de comprendre l'évolution au fil du temps.

## In this section

<DocCardList />
