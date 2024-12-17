---
id: poller-migrate
title: Migrer un collecteur vers une autre machine hôte
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import MoveResources from './_move-resources.mdx';

Dans certains cas, vous pouvez vouloir changer l'OS de la machine hôte de votre collecteur. Cette procédure consiste à installer un nouveau serveur et à migrer vos ressources dessus.

1. Installez une nouvelle machine hôte pour votre collecteur, selon nos [prérequis](prerequisites.md).
2. [Déployez le collecteur](deploy-poller.md) sur la nouvelle machine.
3. Copiez la configuration pour les éléments suivants depuis l'ancien collecteur vers le nouveau :

   - Les plugins personnalisés (par exemple : plugins de la communauté, ou développements personnalisés).
   - Si vous utilisez le connecteur **centreon-as400** (installation et configuration) : **/etc/centreon-as400/**.

4. Déplacez toutes les ressources désirées vers le nouveau collecteur.

   <MoveResources />

   Les ressources sont maintenant supervisées par le nouveau collecteur : les services supervisés par ce collecteur sont migrés vers l'autre collecteur automatiquement.

5. [Supprimez l'ancien collecteur](poller-remove.md) de votre architecture.
