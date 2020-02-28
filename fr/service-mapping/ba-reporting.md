---
id: ba-reporting
title: Reporting
---

Consulter à tout moment les évolutions des données archivées et
pondérées au travers des pages de reporting, de logs et des graphiques
de performance. Ces écrans ont un fonctionnement similaire à ceux
utilisés dans **Centreon**.

### Rapport

La page de reporting correspond à celle de **Centreon**, il suffit de sélectionner une BA pour consulter ses statistiques

:   de disponibilité opérationnelle, dégradée et non fonctionnelle sur
    une période donnée.

![image](assets/service-mapping/reporting.png)

Il est possible d'exporter les données vers un fichier CSV, en cliquant
sur le lien "Exporter en format CSV".

### Historique

Le menu « Historique » permet de retracer l'évolution du niveau de la
BA en fonction des changements de son statut, sur une période choisie,
maximum 30 jours.

Seul les changements de statut de la BA sont enregistrés. C'est à dire
que vous ne pourrez pas visualiser l'état des KPI à une heure précise.

En cliquant sur un point de la courbe de la BA, un tableau apparaît et
montre en détail les différents KPI, leurs statuts et leurs poids
d'impact, qui constituaient la BA à l'instant ou le changement de
statuts est arrivé.

![image](assets/service-mapping/logs.png)

  Colonne      |    Description
--------------------|--------------------------------------------------
  Key Performance Indicators   |  Liste des KPI
  KPI Type         |    Type de KPI (Service, Meta Service ou BA)
  Status         |      Statut du KPI (Opérationnel, dégradé, critique,inconnu)
  Impact         |      Poids d'impact du KPI sur la BA
  In Downtime      |    Programmation ou non d'un temps d'arrêt sur le KPI au moment du calcul
  Check Time      |     Temps lors duquel le KPI a été vérifié
  Output       |        Message de sortie du KPI lors de la vérification du KPI

### Forcer le calcul des statistiques de disponibilité et évènements

Des statistiques de disponibilité et d\'évènements sont automatiquement
calculées tous les jours. Dans le cas de modification de période de
reporting ou d\'association à des vues métier, il est possible d\'avoir
à reconstruire ces statistiques pour appliquer les modifications de
configuration sur la passé.

Pour cela, lancer le script suivant::

    # cd /usr/share/centreon/www/modules/centreon-bam-server/engine
    # ./centreon-bam-rebuild-events --all

Il est également possible de reconstruire les données d\'une BA
spécifique::

    # ./centreon-bam-rebuild-events --ba=<id of ba>

Pour plus d\'informations concernant ce script, lancer la commande
suivante::

    # ./centreon-bam-rebuild-events --help

**Si vous disposez de Centreon MBI** et souhaitez également exploiter
ces données à jour, la commande suivante est à exécuter sur le serveur
de reporting :

    /usr/share/centreon-bi/etl/importData.pl -r --bam-only
