---
id: real-user-monitoring
title: Le Real User Monitoring (ou RUM)
--- 

Le module **Real User Monitoring** (ou RUM) vous permet de mesurer les performances d'un site web directement depuis les navigateurs de vrais utilisateurs.
Une balise HTML est insérée dans le code de la page pour surveiller les temps de chargement tels qu'ils sont vécus par les utilisateurs.
La balise est conçue pour être très légère afin de ne pas ralentir la navigation de l'utilisateur. Elle est également chargée séparément, de sorte que ses propres temps de chargement ne sont pas pris en compte dans les métriques collectées.

Consultez notre [article dédié](../rum/rum-intro.md) pour en savoir plus sur ce module.

![image](../assets/getting-started/rum-overview.png)

La différence essentielle avec les [parcours utilisateurs](synthetic-monitoring.md) est que, tandis que ces derniers vérifient les performances d'une navigation prédéfinie sur le site, le RUM mesure l'expérience de vrais utilisateurs.

> Le RUM enregistre et stocke uniquement des données purement techniques, impossibles à identifier, conformément au périmètre du [RGPD](https://gdpr.eu/) de l'Union européenne.