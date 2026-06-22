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

## Indicateurs

Le module « Données d’activité » affiche les indicateurs suivants, tous issus de Google Analytics :

* Trafic du site web : nombre de sessions/visiteurs sur la période sélectionnée. Pour les sites web non monétisés, seul cet indicateur est véritablement pertinent.
* Taux de conversion e-commerce : pour les sites de commerce électronique, permet de suivre les tendances en matière de conversion.
* Chiffre d’affaires par minute : chiffre d’affaires généré minute par minute.
* Nombre de transactions par minute : volume de transactions au fil du temps.
* Chiffre d’affaires par session et par minute : chiffre d’affaires moyen par session, minute par minute.
* Taux de rebond : pourcentage de visiteurs quittant le site après avoir consulté une seule page.

> Délai de Google Analytics : il existe un délai de 4 à 24 heures entre les données communiquées par GA et les résultats réels. Par exemple, un taux de rebond de 90 % peut être ajusté dans les 48 heures suivantes. Ce délai est inhérent à GA et non à Experience Monitoring.
