---
id: monitoring-guide
title: Superviser Centreon HA
description: "Superviser la santé du cluster Centreon HA avec des connecteurs dédiés"
---

Superviser votre configuration HA à l'aide de Centreon vous aide à suivre l'état de santé de votre cluster. Il est fortement recommandé de l'implémenter.

## Ce qu'il faut superviser

Tous les éléments du cluster doivent être supervisés par un collecteur, et non par un central (pour éviter d'avoir des ressources dans un état **En attente** lorsque le cluster bascule). Pour la même raison, chaque collecteur doit être supervisé par un autre collecteur.

* Créez un hôte pour la VIP centrale, et supervisez-le avec :
   * le [connecteur de supervision Centron Central](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-central).
   * le [connecteur de supervision HTTP Server](/pp/integrations/plugin-packs/procedures/applications-protocol-http), afin de contrôler le temps de réponse de l'interface.
* Créez un hôte pour chaque nœud central, et supervisez-les avec :
    * le [connecteur de supervision Linux SNMP](/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp), afin de contrôler le système de la machine hôte.
    * le [connecteur de supervision Centreon HA](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha), afin de contrôler les services de clustering.
* Créez un hôte par collecteur et supervisez-les avec le [connecteur de supervision Centreon Poller](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller).
* Créez un hôte par base de données et supervisez-les avec le [connecteur de supervision Centreon Database](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-database).
* SUpervisez le quorum device:
   * si votre quorum device est un de vos collecteurs, créez un service avec un nom comme **proc-corosync-qnetd** et appliquez-lui le modèle de service **App-Monitoring-Centreon-HA-Process-corosync-qnetd-custom**.
   * si votre quorum device est hébergé sur un autre serveur, supervisez son système avec le [connecteur de supervision Linux SNMP](/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp), puis ajoutez-y le service **proc-corosync-qnetd** mentionné ci-dessus.

Assurez-vous que tous les prérequis soient satisfaits pour toutes les instances de ces connecteurs de supervision (par exemple, que les échanges de clés corrects aient été effectués et que les utilisateurs corrects aient été autorisés sur chaque serveur supervisé).
