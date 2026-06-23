---
id: user-journey-improve
title: Optimiser votre site
---

En utilisant les données collectées par la [sonde de recommandations](https://docs.centreon.com/experience-monitoring/configuration/configuration/user-journey/create-a-scenario/#daily-recommendations-audits), Experience Monitoring vous propose des suggestions pour optimiser votre site web.

Notez que ces recommandations proviennent d'une sonde qui exécute les parcours utilisateur. Vous n'obtiendrez des recommandations que pour les pages figurant dans les étapes du parcours.

## Obtenir les recommandations pour chaque étape

1. Depuis la page [**Vue d'ensemble**](https://docs.centreon.com/experience-monitoring/how-to-articles/user-journey-screen/) du parcours utilisateur, faites défiler la page jusqu'à la liste des étapes.
2. Cliquez sur la loupe à droite de l'étape que vous souhaitez optimiser.

Vous serez redirigé vers l'onglet **Dernière analyse détaillée**.
Cet onglet, ainsi que l'onglet **Dernières recommandations**, n'apparaissent que lorsque vous consultez une étape spécifique d'un parcours.
Ces deux onglets sont masqués lorsque vous visualisez un parcours dans son ensemble.

Cliquez sur l'onglet **Dernières recommandations**.
La première chose que vous verrez est une chronologie avec les métriques de l'étape sélectionnée.
En dessous se trouve une liste de recommandations pour optimiser votre site.
Les recommandations sont classées de la plus impactante à la moins impactante.
Chaque recommandation peut être cliquée pour voir les métriques impactées, la façon de la mettre en œuvre et les gains potentiels.

## Comment savoir si mes modifications ont eu un réel impact

Dans la page **Dernières recommandations**, faites défiler jusqu'en bas de la page et cliquez sur le bouton **Comparer avec**.

![image](../../assets/rum-comparison.png)

Le dernier audit de recommandations est sélectionné par défaut. Sélectionnez un audit antérieur pour voir l'impact de vos modifications.
Rappel : la sonde de recommandations est exécutée une fois par jour, il est donc possible que vos modifications ne soient pas visibles avant le lendemain.
