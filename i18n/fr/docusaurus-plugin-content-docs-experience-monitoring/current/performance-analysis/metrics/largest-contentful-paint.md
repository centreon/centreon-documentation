---
id: largest-contentful-paint
title: LCP - Largest Contentful Paint (Web Vital)
--- 

> Le Largest Contentful Paint est documenté sur le site [Web Dev de Google](https://web.dev/lcp/). Cette page traduit en français et résume l’essentiel du contenu


>Le Largest Contentful Paint (LCP, qui peut se traduire par impression du plus grand contenu) est une métrique importante, qui se concentre sur la perception de vitesse de chargement de l’utilisateur car elle marque le moment du chargement où le contenu principal de la page a probablement chargé. Un LCP rapide assure l’utilisateur que la page est utilisable.



## Qu’est ce que le LCP ?

Le Largest Contentful Paint ou LCP ou impression du plus grand contenu est une métrique qui mesure le temps de rendu du plus grand texte ou de la plus grande image visible depuis le début du chargement de la page.

## Qu’est ce qu’un bon score LCP ?

Pour donner une bonne expérience, les sites internet devraient avoir un LCP inférieur à 2,5 secondes. Pour être certain que vous atteignez cet objectif pour la majorité de vos utilisateurs, vous pouvez vérifier que 75% de vos utilisateurs (sur mobile et sur ordinateur) ont ce score. Le Real User Monitoring d'Experience Monitoring permet de faire cela.


## Quels éléments peuvent être considéré comme contenu le plus grand ?

Les types d’éléments considérés sont:

- `<img>`
- `<image>` dans un élément `<svg>`
- `<video>` via l’image d’illustration
- Un élément avec une image de fond chargé via [`url`](https://developer.mozilla.org/docs/Web/CSS/url()) (à l’inverse des gradients CSS)
- Des éléments de bloc contenant des noeuds de texte ou des textes inline.

Des éléments additionnels (ex: `<svg>`, `<video>`) sont envisagés dans le standard à l’avenir.

## Comment la taille d’un élément est déterminée ?

La taille de l'élément signalée plus gros contenu correspond généralement à la taille visible par l'utilisateur dans la fenêtre d'affichage. Si l'élément s'étend en dehors de la fenêtre d'affichage, ou si l'un des éléments est tronqué ou présente un débordement non visible, ces portions ne comptent pas pour la taille de l'élément.

Pour les éléments d'image qui ont été redimensionnés à partir de leur taille intrinsèque, la taille signalée est soit la taille visible, soit la taille intrinsèque, selon la valeur la plus petite. Par exemple, les images qui sont réduites à une taille beaucoup plus petite que leur taille intrinsèque ne rapporteront que la taille à laquelle elles sont affichées, tandis que les images qui sont étirées ou agrandies à une taille plus grande ne rapporteront que leurs tailles intrinsèques.

Pour les éléments de texte, seule la taille de leurs nœuds de texte est prise en compte (le plus petit rectangle qui englobe tous les nœuds de texte).

Pour tous les éléments, toute marge, remplissage ou bordure appliqué via CSS n'est pas pris en compte.
