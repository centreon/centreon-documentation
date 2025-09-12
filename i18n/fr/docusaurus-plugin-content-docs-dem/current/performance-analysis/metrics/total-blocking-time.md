---
id: total-blocking-time
title: TTB - Total Blocking Time (Web Vital)
--- 

# TTB - Total Blocking Time (Web Vital)

<aside>
🌐 Le TBT est documenté [sur le site Web Dev de Google ici](https://web.dev/tbt/). Cette page traduit et résume cette documentation.

</aside>

<aside>
💡 Total Blocking Time (TBT) ou temps total de blocage est une mesure synthétique importante pour mesurer le réactivité de la page lors du chargement. Il quantifie à quel point une page est non-interactive avant de devenir interactive de façon fiable.

</aside>

# Qu’est ce que le TBT

Le Total Blocking Time ou temps total de blocage en français, est une métrique qui mesure le total des temps où le thread principal est bloqué suffisamment longtemps pour qu’une interaction de l’utilisateur de ne crée pas de réaction.

Ses temps se situent entre le First Contentful Paint(FCP) et le Time to Interactive (TTI), c’est à dire entre l’affichage du premier élément de contenu et le moment où la page est interactive.

Le thread principal est considéré comme “bloqué” quand une tâche dure plus de 50ms. Si l’utilisateur interagit à ce moment là, le site ne répondra pas avant la fin de la tâche, et cela pourrait être perçu.

Le temps bloquant est le temps de la tâche au-delà de ces 50ms. Le TBT est la somme de tous les temps bloquants.

Par exemple, considérons ce thread principal:

![image](https://web-dev.imgix.net/image/admin/clHG8Yv239lXsGWD6Iu6.svg)

Parmi les 5 tâches, 3 sont bloquantes: les 2 premières et la dernière.

La première dure 250ms et génère donc 200ms de temps bloquant. La seconde dure 90ms, et génère 40ms de temps bloquant. La dernière dure 155ms et génère 105ms de temps bloquant.

![image](https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xKxwKagiz8RliuOI2Xtc.svg)

Le TBT est de 345ms (la somme des temps bloquants), alors que le thread principal a duré 560ms (la somme de tous les temps).

| Bon | < à 300ms |
| --- | --- |
| Moyen | entre 300ms et 600ms |
| Mauvais | > à 600ms |
