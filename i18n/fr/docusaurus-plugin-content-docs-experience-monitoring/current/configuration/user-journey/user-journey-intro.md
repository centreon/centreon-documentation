---
id: user-journey-intro
title: Parcours utilisateur
description: Fonctionnalités clés et prérequis de la fonctionnalité Parcours Utilisateurs
---

Les parcours utilisateur vous permettent de configurer une sonde pour naviguer régulièrement sur votre site en suivant un chemin prédéfini, en mesurant divers indicateurs de performance web.
La sonde envoie ensuite les données à Experience Monitoring pour que vous puissiez les consulter.

Les parcours utilisateur, ainsi que le [Real User Monitoring](../../getting-started/real-user-monitoring.md), constituent l'une des fonctionnalités clés d'Experience Monitoring, car d'autres fonctionnalités comme le [Score de Sobriété Numérique](../../digital-sobriety/digital-sobriety-concepts.md) ou les [Tests de charge](../../getting-started/load-tests.md) dépendent du chemin défini par les parcours utilisateur pour fonctionner.

Vous pouvez configurer plusieurs parcours utilisateur pour simuler différents types d'utilisateurs, et nous vous recommandons de le faire afin d'avoir une meilleure vision de l'expérience globale de navigation sur votre site.
En plus des pages visitées, vous pouvez préciser si la sonde doit se comporter comme si elle naviguait depuis un ordinateur ou un téléphone, quel navigateur utiliser, et d'autres spécificités.
Vous pourrez ainsi mieux identifier quel type d'utilisateur pourrait rencontrer des problèmes.

Les sondes peuvent stocker leurs données en cache pour couvrir d'éventuelles coupures de réseau temporaires.

De plus, les parcours utilisateur vous permettent de :

- Surveiller le bon fonctionnement d'un parcours type et calculer son taux de disponibilité (par exemple, « il était possible de naviguer et d'acheter sur le site e-commerce 99,5 % du temps ce mois-ci »).
- Alerter les gestionnaires du site en cas de dysfonctionnement, en envoyant des e-mails, SMS ou autres notifications accompagnées d'un rapport d'incident détaillé.
- Mesurer et enregistrer les temps de chargement des pages selon plusieurs critères clés (Time To First Byte, Speed Index, temps de chargement complet de la page, ou par rapport aux [Core Web Vitals](https://web.dev/vitals/) de Google).
- Analyser chaque page pour [identifier des axes d'amélioration](./user-journey-improve.md) qui rendront le site plus rapide (par exemple, « pour améliorer le temps de chargement de la page d'accueil, optimisez certaines images et réduisez le code JavaScript d'un fichier spécifique »).
