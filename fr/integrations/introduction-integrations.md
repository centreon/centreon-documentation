---
id: introduction-integrations
title: Connecter Centreon à vos autres outils
---

Centreon offre de nombreuses manières de s'interfacer avec des outils tiers afin
de permettre une parfaite intégration avec d'autres solutions.

Les intégrations reposent sur différents modules et fonctionnalités permettant de 
s'adapter à vos processus de de traitement de données, d'alertes, d'événement et/ou 
de métriques: 

- [Centreon Stream Connector](https://github.com/centreon/centreon-stream-connector-scripts), 
permet l'envoie de données d'événements et/ou de métriques vers un outil tiers afin 
de partager, présenter ou retravailler les données dans un système annexe;
- [Centreon Open Ticket](https://github.com/centreon/centreon-open-tickets), permet 
l'ajout de fonctionnalité permettant l'ouverture manuelle de ticket sur la base des 
données d'une alerte directement au travers des bacs à événements Centreon;
- [Centreon Plugin Packs](../integrations/plugin-packs/introduction.html), permet la 
récupération d'informations de supervision de systèmes tiers afin de permettre d'utiliser 
Centreon comme la tour de contrôle permettant d'avoir un point unique de gestion 
et de traitement des alertes sur vos équipements et applicatifs critiques.

Cette documentation est organisée en fonction des fonctionnalités des logiciels avec 
lesquels Centreon peut s'interfacer. Les grandes familles d'intégrations sont les 
suivantes: 

- *Data Analytics*: Envoyez vos données vers des solutions spécialisées dans le traitement,
le stockage, et l'indexation de grands volumes de données polymorphes. Inclut également les 
solutions permettant d'alerter sur la base de requêtes sur des outils de concentration de logs;
- *Digital Experience Monitoring*: Récupérez des données de mesure de la performance
et du ressenti utilisateur concernant vos sites et applicatifs directement depuis des 
solutions avancées et dédiées au segment DEM;
- *Event Management*: Utilisez les Stream Connector pour envoyer vos alertes vers 
des outils spécialisées dans la gestion des événements en terme de qualification, 
d'escalades ou encore dans l'automatisation de leur traitement;
- *ITSM*: Ouvrez des tickets depuis une ou plusieurs alertes détéctées par Centreon
afin de permettre une gestion de l'incident et des actions corrective au plus proche 
de vos processus internes;
- *Notifications*: Tirez partie des fonctionnalités de notifications du moteur Centreon Engine
afin d'alerter de manière optimale les bonnes personnes au travers de mutliples modes 
de transmission (Messagerie instantanée, SMS, Traps SNMP, ...).

Vous ne trouvez pas votre outil ou l'intégration que vous voulez? Faites le nous 
savoir en posant la question sur notre [Slack](https://centreon.slack.com) ou en 
nous contactant au travers du formulaire de notre [site web](https://www.centreon.com/nous-contacter/).