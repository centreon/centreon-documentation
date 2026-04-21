---
id: speed-index
title: Speed Index
--- 

## Ce que le Speed Index mesure

Le Speed Index mesure à quelle vitesse le contenu est affiché pendant le chargement de la page.

Une page qui commence à afficher des éléments au bout d’une seconde et charge en 5s aura un score de Speed Index meilleur que la même page qui affiche des éléments au bout de 4s et s’affiche en 5s.

**Le Speed Index s’exprime en secondes mais il s’agit d’un score.** Il ne se place pas dans une timeline, et ne correspond pas à un évènement précis à un instant donné.

## Comment améliorer le Speed Index

Tout ce que vous faites pour améliorer la vitesse de chargement devrait améliorer le Speed Index.

A part cela, 2 autres éléments ont un impact fort sur le Speed Index :

## Le TTFB

[TTFB (”Time To First Byte”)](./time-to-first-byte.md)

En réduisant le temps d’attente du premier octet, vous rapprochez dans le temps le moment où les éléments s’affichent.

## Javascript et les chargements “secondaires”

Vous devriez travailler à:

- Réduire le temps d’exécution du Javascript
- Réduire le travail pour le navigateur à afficher la page (complexité, classes CSS, etc…)

## Notation

La notation pour cet indicateur est:

| Bon | < à 2s |
| --- | --- |
| Moyen | de 2s à 5s |
| Mauvais | > à 5 secondes |
