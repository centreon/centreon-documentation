---
id: cloud-release-notes
title: Centreon Cloud - notes de release
---

## July Xth, 2025

**Centreon Monitoring Agent**
Alors que Centreon Monitoring Agent (CMA) est sur le point de sortir officiellement suite à sa phase beta, des améliorations dans sa configuration sont désormais disponibles pour nos clients Centreon Cloud.
Pour rappel, CMA collecte les métriques et calcule les statuts des serveurs qu'il supervise, puis les transmet à Centreon.
Les plugins Centreon et les plugins compatibles Nagios peuvent être utilisés avec cet agent.
Plus d'informations sur la configuration sont disponibles dans notre [documentation officielle](/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/cma/).

Cette version apporte les améliorations suivantes à la configuration des communications des agents :
- Une option « no TLS » a été ajoutée à des fins de tests/dépannage (valable pour une durée limitée)
- Il est désormais possible de stocker des certificats dans des sous-répertoires
- Il est désormais possible de générer un jeton pour l'agent CMA

**Tableaux de bord**
Le widget "Graphe de métriques" a été amélioré pour ajouter le nom du service et/ou de l'hôte si nécessaire afin d'identifier plus clairement les métriques portant le même nom.

**Resource Status**
Il est désormais possible d'exporter les données actuellement filtrées au format CSV.

**Meta-Services**
Un métaservice est un service virtuel permettant l'agrégation de métriques provenant de différents services via une opération mathématique.
Les métaservices sont gérés de la même manière qu'un service : ils disposent de seuils, d'un processus de notification, génèrent un graphique de performances, etc.
Les méta-services peuvent désormais être configurés dans Centreon Cloud.

**Groupes d'hôtes**
La page de configuration des groupes d'hôtes a été améliorée pour offrir une meilleure expérience de navigation, d'ajout, de modification, etc.

### Centreon Business Edition

**MAP**
Le widget MAP est désormais opérationnel lorsqu'il est affiché dans les playlists publiques du tableau de bord. 
Une option « Afficher les icônes » a été ajoutée aux conteneurs et ressources de cartes. Si cette option est cochée, les icônes personnalisées et d'état s'affichent sur la forme.

**Activités métier**
Un nouveau widget de tableau de bord a été ajouté : « Chronologie des statuts d'activité ». Il affiche la répartition des statuts actuels d'une activité métier, sous forme de chronologie pour une période donnée.

De plus, une nouvelle version de la page de suivi des activités métier a été développée. Elle inclut l'arborescence des activités métier, la chronologie des statuts et la liste des indicateurs de performance (KPI) des activités métier.
