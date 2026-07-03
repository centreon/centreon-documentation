---
id: rum-improve
title: Recommandations d'optimisation de RUM
---

Centreon Experience Monitoring fournit des audits détaillés sur la manière d’améliorer les performances de votre site.

Pour accéder aux pages d’audit, cliquez sur l’icône **Dernières recommandations** dans les tableaux de l’onglet **URL** (qui inclut la page détaillée d’une URL spécifique lorsque vous cliquez sur cette URL dans l’arborescence de l’onglet **Récapitulatif et live**).

![image](../assets/audit.png)

Le module affiche des recommandations d’optimisation pour les URL, avec les restrictions suivantes :

* Les recommandations ne sont générées que pour les 10 premières pages (en termes de trafic). Au-delà du Top 10, des lacunes apparaissent dans les recommandations.
* Si vous élargissez la sélection au Top 20 ou au Top 50, les pages moins bien classées ne reçoivent de recommandations que si elles ont déjà figuré dans le Top 10 au cours de la période sélectionnée.
* Le top 10 change quotidiennement, ce qui explique pourquoi, sur une longue période, les lacunes ne se trouvent pas toujours aux mêmes endroits.

Alternative : pour obtenir des recommandations concernant des pages ne figurant pas dans le top 10, vous devez [configurer un scénario (parcours utilisateur)](../configuration/user-journey/create-a-scenario.md) sur l’URL concernée. Utilisez le raccourci situé à droite pour accéder à la page correspondante.

## Comment savoir si mes modifications ont eu un réel impact ?

En bas de la page des recommandations, cliquez sur **Comparer avec**.

![image](../assets/rum-comparison.png)

Le dernier audit des recommandations est sélectionné par défaut. Sélectionnez un audit antérieur pour voir l'impact de vos modifications. N'oubliez pas que le test des recommandations est exécuté une fois par jour ; vos modifications peuvent donc ne pas être visibles avant le lendemain.
