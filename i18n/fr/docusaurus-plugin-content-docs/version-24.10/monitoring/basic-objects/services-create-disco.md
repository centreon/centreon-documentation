---
id: services-create-disco
title: Créer des services automatiquement
description: "Créez des services automatiquement dans Centreon lors de la création d'hôtes à partir de modèles liés à des services, ou grâce à la découverte de services."
---

Les services peuvent être créés automatiquement de plusieurs façons :

- Lorsque vous [créez un hôte manuellement](hosts-create.md) en utilisant un [connecteur de supervision](../pluginpacks.md), et que vous cochez la case **Créer aussi les services liés aux modèles**, les services associés à l'hôte sont créés automatiquement. 

- En utilisant la [fonctionnalité de découverte automatique de services](../discovery/introduction.md) pour [détecter des services et les créer automatiquement](../discovery/services-discovery.md) dans Centreon.

    - L'autodécouverte se fait via des [connecteurs de supervision](../pluginpacks.md).

    - La fonctionnalité d'autodécouverte demande une [licence](../../administration/licenses.md) valide.