---
id: time-to-first-byte
title: TTFB - Time To First Byte
--- 

# TTFB - Time To First Byte

Le Time To First Byte (plus couramment appelé TTFB), ou “temps du premier octet” en français, est la mesure qui sépare l’émission de la **première requête** HTTP (demande initiale d’une page web) par le navigateur et le début de la réception de la réponse, soit la réception du premier octet de donnée :

![TTFB.jpg](TTFB%20(%E2%80%9DTime%20To%20First%20Byte%E2%80%9D)%20f8c5ee69ec7f4e66acd716da92099386/TTFB.jpg)

Ce temps représente donc la capacité d’un site web à produire et délivrer rapidement le code HTML de la page demandée.

L’optimisation du TTFB est capitale car en cas de ralentissement, ce temps va décaler **tout le reste** lors du chargement de la page. En effet, tant que le code HTML n’est pas reçu par le navigateur, il lui est impossible de charger les éléments qui suivent (javascripts, css, images...), par conséquent **l’internaute attendra devant une page blanche**.

Avoir un TTFB le plus bas possible est particulièrement important afin de garantir :

- une bonne expérience utilisateur
- un bon taux de conversion
- un bon référencement (Google est particulièrement sévère avec les pages ayant un TTFB élevé)

Enfin, lorsque le TTFB est très long, en règle général il se produit car l’application web n’utilise pas de cache complet (ex: Varnish, Full Page Cache, etc.). Par conséquent, le temps d’attente est lié au temps que met l’applicatif pour générer la page. Ce temps, représente également des ressources machines (typiquement de la charge CPU) ce qui peut avoir un impact sur :

- les ressources cloud utilisées
- l’impact environnementale de l’application

Dans Quanta, le TTFB est visible dans les analyses synthétiques ([les “Parcours Utilisateurs”](https://www.notion.so/Le-Monitoring-Synth-tique-utilisation-70a60b39bf2445beb2ca67a25c70d83c?pvs=21)), mais également dans le [Real User Monitoring](Le%20Real%20User%20Monitoring%20(ou%20RUM)%204c122a6a8526461fbe31e9da5a536641.md).

L’échelle de notation est la suivante :

| Bon | < à 300ms |
| --- | --- |
| Moyen | entre 300ms et 3 secondes |
| Mauvais | > à 3 secondes |