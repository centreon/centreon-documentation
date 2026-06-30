---
id: experience-monitoring-glossary
title: Glossaire Experience Monitoring
---

## Action

L'une des étapes d'un [parcours utilisateur](#parcours-utilisateur). Une action désigne tout ce que l'utilisateur peut faire sans changer de page, ou l'acte de changer de page lui-même.
Les actions sont contenues dans des [étapes](#étape). Une étape peut contenir plusieurs actions.

## Sélecteur CSS

Un motif utilisé dans la feuille de style d'un site web pour identifier quelle partie d'une page doit être mise en forme.
De la même façon que vous pourriez surligner des mots dans un document avant d'en modifier la police, un sélecteur CSS identifie des éléments spécifiques afin d'y appliquer des règles visuelles de manière précise.
Les sélecteurs CSS sont moins sensibles aux modifications du site, ce qui en fait un élément fiable à sélectionner pour les [parcours utilisateurs](./configuration/user-journey/user-journey-intro.md). Si vous ne savez pas comment créer des sélecteurs CSS, vous pouvez rejoindre [notre communauté](https://thewatch.centreon.com/) pour demander de l'aide dans la configuration de votre parcours utilisateur.

## Score de sobriété numérique

Un score allant de 0 à 100 qui indique l'efficacité globale de votre site pour vous aider à réduire son impact environnemental.
Calculé à partir des données du [Real User Monitoring](#real-user-monitoring) ou de vos [parcours utilisateurs](#parcours-utilisateur).

## Hero Time

Une métrique exclusive à Experience Monitoring. Elle mesure le temps que met la sonde du [parcours utilisateur](#parcours-utilisateur) entre le début et la fin d'une étape.

## Largest Contentful Paint

Le Largest Contentful Paint (LCP) est la métrique du temps de rendu du plus grand bloc d'image ou de texte visible depuis le début du chargement de la page.

## Test de charge

Les [tests de charge](https://docs.centreon.com/experience-monitoring/getting-started/load-tests/) sont un module d'Experience Monitoring.
Le test consiste à simuler un trafic important sur votre site afin d'évaluer son comportement dans ces conditions et d'identifier les goulots d'étranglement.
Les utilisateurs sont simulés par Experience Monitoring, mais cela génère du trafic réel sur votre site.

## OnLoad

L'OnLoad est la métrique du temps nécessaire pour que tous les éléments de la page soient entièrement chargés.

## Ping

Un ping est un test réseau. Une requête est envoyée à un serveur pour vérifier qu'il répond et mesurer le temps nécessaire pour recevoir cette réponse.
Experience Monitoring utilise les protocoles [TCP et ICMP](https://docs.centreon.com/experience-monitoring/performance-analysis/network-tab-indicators/#difference-between-tcp-ping-and-icmp-ping) pour ses tests.

## Real User Monitoring

Le [Real User Monitoring (ou RUM)](https://docs.centreon.com/experience-monitoring/getting-started/real-user-monitoring/) est un module d'Experience Monitoring.
Grâce à une balise HTML insérée dans le code de votre site, Experience Monitoring peut mesurer les temps de chargement expérimentés par les utilisateurs réels.
La balise est chargée séparément afin d'éviter qu'elle n'influence les données.

## Speed Index

Le Speed Index est la métrique de la vitesse à laquelle les éléments visuels d'une page s'affichent pendant le chargement.
Une page qui commence à afficher des éléments après 1 s et se termine à 5 s aura un meilleur Speed Index qu'une page qui se termine également à 5 s mais ne commence à s'afficher qu'à 4 s.

Le Speed Index est exprimé en secondes mais doit être traité comme un score. Il ne correspond pas à un événement unique sur une chronologie.

## Étape

L'une des étapes d'un [parcours utilisateur](#parcours-utilisateur). Une étape représente une page du site.
Les étapes contiennent des [actions](#action) qui déterminent ce que fait la sonde sur une page donnée. Une étape peut contenir plusieurs actions.

## Zone de monitoring synthétique

Une [zone de monitoring synthétique (ou zone STM)](./configuration/user-journey/stm-zones.md) est un domaine interne à votre organisation. Les zones STM permettent à la sonde de parcours utilisateur d'effectuer ses vérifications sur des sites inaccessibles aux utilisateurs extérieurs à votre organisation.

## Time To First Byte

Le Time To First Byte (TTFB) est la métrique de l'intervalle entre la requête HTTP initiale du navigateur pour une page et le début de la réponse (c'est-à-dire le moment où le premier octet de données est reçu).

## Parcours utilisateur

Le [parcours utilisateur](./getting-started/synthetic-monitoring.md) est un module d'Experience Monitoring.
Une sonde est configurée pour suivre un chemin de navigation prédéfini sur votre site et mesurer les temps de chargement des pages.

## Webhook

Communication unidirectionnelle entre applications déclenchée par un événement spécifié. Les webhooks permettent l'intégration d'applications qui n'ont pas nécessairement été conçues pour fonctionner ensemble à l'origine.
Dans Experience Monitoring, les webhooks sont utilisés pour envoyer des [notifications](./configuration/user-journey/experience-monitoring-notifications.md) à des applications.
