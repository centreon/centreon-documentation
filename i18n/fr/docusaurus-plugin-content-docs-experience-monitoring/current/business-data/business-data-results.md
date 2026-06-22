---
id: business-data-results
title: Comprendre les résultats des données business
---

Le module **Données business** affiche les indicateurs de trafic et de conversion issus de votre outil d’analyse (Google Analytics ou Matomo). Établissez une corrélation entre les performances techniques de votre site et vos ventes. Il est essentiel de [reporter les évènements sur vos graphiques](../installation/monitor-production-events.md) afin d’expliquer les variations observées.

## Données métier ou RUM ?

Le trafic **Données métier** correspond au trafic que les clients consultent généralement dans leurs outils d’analyse. Il s’agit d’une vue filtrée spécifique à l’activité, contrairement au [RUM](../rum/rum.md), qui capture l’intégralité du trafic brut.

| Critère | RUM dans Experience Monitoring | Données business (Google Analytics) |
| --- | --- | --- |
| Couverture du trafic | 100 % du trafic (avant la fenêtre contextuelle RGPD) | Uniquement les visiteurs ayant donné leur consentement RGPD |
| Bots | Inclus (bots américains, robots d'indexation, etc.) | Exclus (filtrés dans la vue GA configurée par le client) |
| Consentement RGPD | Indépendant du consentement | Dépend de l’acceptation du consentement |
| Différence estimée | Trafic brut complet | Environ 1/3 du trafic manquant (refus RGPD + bots filtrés) |
| Configuration | Gérée dans Experience Monitoring | Experience Monitoring récupère la vue telle qu’elle est configurée dans GA (aucun traitement supplémentaire) |

## Cas d'utilisation

### Tableau de bord « Trafic + Performances »

Créez un [tableau de bord](../performance-analysis/dashboards.md) qui combine le trafic du site web (issu de GA) et la vitesse d'exécution des scénarios de parcours utilisateur. Cela vous permet de surveiller d'un seul coup d'œil la santé globale du site : trafic et performances présentés côte à côte.

### Impact d'un déploiement sur les ventes

Après un déploiement, vérifiez si un ralentissement du site a un impact négatif sur le taux de conversion ou le chiffre d’affaires. À utiliser en association avec des [marqueurs d’évènement](../installation/monitor-production-events.md) pour dater le déploiement.

### Impact d’un déploiement sur le taux de rebond

Vérifiez si un déploiement (réussi ou échoué) a entraîné une augmentation ou une diminution du taux de rebond. Exemple : pic soudain du taux de rebond à une date donnée, à mettre en corrélation avec un éventuel ralentissement.
## Cas d’utilisation

### Tableau de bord « Trafic + Performances »

Créez un tableau de bord qui combine le trafic du site web (issu de GA) avec la vitesse d’exécution des scénarios de parcours utilisateur. Cela vous permet de surveiller d’un seul coup d’œil la santé globale du site : trafic et performances côte à côte.

### Impact d’un déploiement sur les ventes

Après un déploiement, vérifiez si un ralentissement du site a un impact négatif sur le taux de conversion ou le chiffre d’affaires. À utiliser en conjonction avec des balises d’événement pour dater le déploiement.

### Impact d’un déploiement sur le taux de rebond

Vérifiez si un déploiement (réussi ou échoué) a entraîné une augmentation ou une diminution du taux de rebond. Exemple : pic soudain du taux de rebond à une date donnée, à mettre en corrélation avec un éventuel ralentissement.

## Metrics

The Business Data module displays the following metrics, all sourced from Google Analytics:

* Website traffic: number of sessions/visitors over the selected period. For non-monetized websites, only this metric is truly relevant.
* E-commerce conversion rate: for e-commerce sites, tracks conversion trends.
* Revenue per minute: revenue generated minute by minute.
* Number of transactions per minute: transaction volume over time.
* Revenue per session per minute: average revenue per session, minute by minute.
* Bounce rate: percentage of visitors leaving the site after viewing only one page.

> Google Analytics Delay: There is a delay of 4 to 24 hours between the data reported by GA and actual results. For example, a bounce rate of 90% may be adjusted within the next 48 hours. This delay is inherent to GA and not to Experience Monitoring.




<!--Centreon Experience Monitoring links with Analytics so you can:

Have your business KPIs correlating the technical performance and your sales.
See the impact of peak traffic on your page load time.
Measure the capacity and impact of your site's modifications on your architecture load (Infrastructure Cost Per Clic evolution)

In the **Business data** page, you can:

* **Overview** tab - Analytics summary over the period
* **Opportunities** tab

* Correlate Google Analytics data with Synthetic Monitoring data in the **Journey and revenues** tab (you need to have configured a user journey). You can see an estimation of losses due to downtime or slow loading pages.

* Correlate Google Analytics data with system data in the **Infrastructure cost/click** (you need to have configured an agent collecting [system data](../installation/servers/install-system-agents.md)).-->
