---
id: poller-remove
title: Supprimer un collecteur de votre architecture
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import MoveResources from './_move-resources.mdx';

Pour supprimer un collecteur de votre architecture Centreon :

1. Si vous ne l'avez pas déjà fait, déplacez vers un autre collecteur les ressources que ce collecteur supervisait :

   <MoveResources />

   Les services supervisés par ce collecteur sont migrés vers l'autre collecteur automatiquement.
3. À la page **Configuration > Collecteurs > Collecteurs**, sélectionnez le collecteur que vous souhaitez supprimer, puis cliquez sur **Supprimer**. Le collecteur disparaît de la liste des collecteurs.
4. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) pour le serveur central. Le collecteur est supprimé pour de bon : cette action ne peut pas être annulée.
