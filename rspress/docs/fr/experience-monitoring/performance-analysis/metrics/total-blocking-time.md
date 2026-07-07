---
id: total-blocking-time
title: TTB - Total Blocking Time (Web Vital)
--- 

>Le TBT est documenté [sur le site Web Dev de Google ici](https://web.dev/tbt/). Cette page traduit et résume cette documentation.

>Total Blocking Time (TBT) ou temps total de blocage est une mesure synthétique importante pour mesurer le réactivité de la page lors du chargement. Il quantifie à quel point une page est non-interactive avant de devenir interactive de façon fiable.

## Qu’est ce que le TBT

Le Total Blocking Time ou temps total de blocage en français, est une métrique qui mesure le total des temps où le thread principal est bloqué suffisamment longtemps pour qu’une interaction de l’utilisateur de ne crée pas de réaction.

Ses temps se situent entre le First Contentful Paint(FCP) et le Time to Interactive (TTI), c’est à dire entre l’affichage du premier élément de contenu et le moment où la page est interactive.

Le thread principal est considéré comme “bloqué” quand une tâche dure plus de 50ms. Si l’utilisateur interagit à ce moment là, le site ne répondra pas avant la fin de la tâche, et cela pourrait être perçu.

Le temps bloquant est le temps de la tâche au-delà de ces 50ms. Le TBT est la somme de tous les temps bloquants.

| Bon | < à 300ms |
| --- | --- |
| Moyen | entre 300ms et 600ms |
| Mauvais | > à 600ms |
