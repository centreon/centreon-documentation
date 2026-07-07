---
id: time-to-first-byte
title: TTFB - Time To First Byte
--- 

Le Time To First Byte (plus couramment appelé TTFB), ou “temps du premier octet” en français, est la mesure qui sépare l’émission de la **première requête** HTTP (demande initiale d’une page web) par le navigateur et le début de la réception de la réponse, soit la réception du premier octet de donnée :

![image](../../assets/performance-analysis/metrics/ttfb-1.png)

Ce temps représente donc la capacité d’un site web à produire et délivrer rapidement le code HTML de la page demandée.

L’optimisation du TTFB est capitale car en cas de ralentissement, ce temps va décaler **tout le reste** lors du chargement de la page. En effet, tant que le code HTML n’est pas reçu par le navigateur, il lui est impossible de charger les éléments qui suivent (javascripts, css, images...), par conséquent **l’internaute attendra devant une page blanche**.

Avoir un TTFB le plus bas possible est particulièrement important afin de garantir :

- une bonne expérience utilisateur
- un bon taux de conversion
- un bon référencement (Google est particulièrement sévère avec les pages ayant un TTFB élevé)

Enfin, lorsque le TTFB est très long, en règle général il se produit car l’application web n’utilise pas de cache complet (ex: Varnish, Full Page Cache, etc.). Par conséquent, le temps d’attente est lié au temps que met l’applicatif pour générer la page. Ce temps, représente également des ressources machines (typiquement de la charge CPU) ce qui peut avoir un impact sur :

- les ressources cloud utilisées
- l’impact environnementale de l’application

Dans Experience Monitoring, le TTFB est visible dans les analyses synthétiques des Parcours Utilisateurs, mais également dans le [Real User Monitoring](../../getting-started/real-user-monitoring.md).

L’échelle de notation est la suivante :

| Bon | < à 300ms |
| --- | --- |
| Moyen | entre 300ms et 3 secondes |
| Mauvais | > à 3 secondes |
