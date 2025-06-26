---
id: preparing-data
title: Preparing data for report generation
---

cohérence entre supervision et rapports, les HG/HC/SC conditionnent les données visibles dans les rapports

rappeler de mettre à jour les host groups, host categories et service categoires pour que les données soient prises en compte dans les rapports. Ces trois types de ressources sont essentiels pour le fonctionnement de MBI et on doit rappeler de les mettre à jour

il est possible de créer un job avec un périmètre sans données sans le savoir.

parler de la conf de L'ETL et de son rebuild: l'ETL de mbi est statique, il ne détecte pas automatiquement les changements de configuration sur Centreon en dehors de ses checks réguliers (programmés pour 4h du matin par defaut). L'utilisateur qui met à jour ses données doit lancer un rebuild de l'ETL pour que les données soient prises en compte immédiatement. Autrement on doit attendre le lendemain pour que les derniers changements soient pris en compte.

avertir sur les trous dans les données qui empêchent la génération des rapports.