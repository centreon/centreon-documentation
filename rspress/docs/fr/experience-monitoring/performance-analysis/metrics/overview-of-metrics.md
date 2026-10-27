---
id: overview-of-metrics
description: Répertoire de toutes les métriques de performance Experience Monitoring
title: Vue d'ensemble des métriques
--- 

Centreon Experience Monitoring présente plusieurs métriques de performance, cette page les présente **très brièvement**. En cliquant sur chacun, vous accéderez à une page détaillant plus la métrique.

## [Hero Time](./hero-time.md)

Le Hero Time est une mesure propre à Experience Monitoring. Elle n’existe nulle part ailleurs. Il s’agit du temps que la sonde Experience Monitoring va mettre entre le début de l’interaction et le moment ou la vérification de succès survient (exemples: la page est chargée, la pop-up pour les cookies s’est affichée, etc)

L’amélioration de cette métrique signifie que l’interactivité est meilleure: les résultats d'intéractions sont visibles plus rapidement.

## [TTFB (Time To First Byte ou temps de premier octet)](./time-to-first-byte.md)

Lorsque l’utilisateur demande la page au site internet, il doit attendre un certain temps avant de recevoir la réponse: sa requête traverse internet, le serveur la reçoit, la vérifie, crée la page, puis la page retraverse internet dans l’autre sens. Le TTFB mesure le temps d’attente avant la réception du tout premier octet de la réponse.

Pendant ce temps, la page est blanche. Améliorer le TTFB signifie que la page s’affichera plus vite et améliorera toutes les autres métriques de performances.

## [Speed Index](./speed-index.md)

Le Speed Index est un score évaluant la vitesse de remplissage de la page web. Une page web qui s’affiche en 5s en restant toute blanche pendant 4s aura un Speed Index moins bon qu’une page web qui s’affiche aussi en 5s mais qui commence à afficher des éléments dès la première seconde.

Le Speed Index est un indicateur complexe. Il est exprimé en secondes mais il s’agit plutôt d’un score que d’une mesure de temps. L’améliorer signifie que l’impression de vitesse d’affichage est meilleure pour l’utilisateur.

## [Onload](./on-load.md)

L’Onload est le moment où la page a fini de charger.

Un Onload long signifie que la page est potentiellement trop lourde ou complexe.

## [LCP (Largest Contentful Paint)](./largest-contentful-paint.md)

Le LCP mesure le moment où l’élément le plus visuellement impactant s’affiche. Il peut s’agir d’une image ou d’un texte. Sur la page d’accueil d’un site ecommerce, il s’agit généralement de la bannière principale. Sur la page produit d’un site ecommerce, il s’agit généralement de l’image du produit.

Le LCP est un “Core Web Vitals”, c’est à dire un des indicateurs de performance surveillé par Google pour évaluer la performance. En l’améliorant, l’impression de vitesse d’affichage s’améliore ainsi que le SEO.

## [TBT (Total Blocking Time)](./total-blocking-time.md)

Le Total Blocking Time quantifie à quel point une page est inutilisable avant qu’elle soit stable et fluide.

Lors du chargement d’une page web, de nombreux fichiers sont lus et interprétés par le navigateur. Ces chargements peuvent être bloquants (c’est à dire que l’utilisateur ne peut pas interagir avec la page pendant ce temps ET peut le percevoir). Le TBT mesure le cumul de tout ces blocages entre le moment où le premier élément visuel s’affiche, et le moment où la page devient parfaitement interactive.

L’améliorer permet de s’assurer que la page est utilisable, même avant d’être parfaitement chargée.

## [CLS (Cumulative Layout Shift)](./cumulative-layout-shift.md)

Le CLS mesure la stabilité visuelle de la page. Si un élément visuel s’affiche, puis qu’il change de place pendant le chargement, le client peut être frustré (exemple: la croix pour fermer une pop-up qui change de place). Un score de 0 est un score parfait: rien ne bouge une fois affiché.

Le CLS est un “Core Web Vitals”, c’est à dire un des indicateurs de performance surveillé par Google pour évaluer la performance. En l’améliorant, la frustration diminue et le SEO s’améliore.

## Score de performance

Ce score de performance de 1 à 100 (pour le chargement complet d’une page), permet de représenter la performance générale de la page sur tous les sujets précédents.
