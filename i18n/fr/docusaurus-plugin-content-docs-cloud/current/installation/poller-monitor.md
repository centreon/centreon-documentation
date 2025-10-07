---
id: poller-monitor
title: Superviser vos collecteurs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

La bonne pratique consiste à ce qu'un collecteur supervise un autre collecteur (c'est-à-dire qu'aucun collecteur ne doit être supervisé par lui-même).

## Superviser un collecteur Centreon Cloud

Pour superviser un collecteur dans votre plateforme Centreon :

1. Installez le [connecteur de supervision **Centreon Poller**](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-poller/).
2. [Créez un hôte](../monitoring/basic-objects/hosts.md) :
   * Appliquez-lui le modèle **App-Monitoring-Centreon-Poller-custom**.
   * Sélectionnez un autre collecteur dans la liste **Serveur de supervision**.
3. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md). Votre nouvel hôte apparaît dans la page [Statut des ressources](../alerts-notifications/resources-status.md).
