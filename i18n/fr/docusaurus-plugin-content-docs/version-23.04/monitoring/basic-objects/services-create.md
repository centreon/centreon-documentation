---
id: services-create
title: Mettre un service en supervision
---

Un service est un point de contrôle, ou indicateur, à superviser sur un hôte. Par exemple : pourcentage d’utilisation partition sur un
serveur, niveau d’encre sur une imprimante...

Pour consulter la liste des services supervisés, allez à la page **Configuration > Services > Services par hôtes**.

Vous pouvez :

- [créer un service manuellement](services.md)
- [découvrir des services automatiquement](../discovery/services-discovery.md).

## Mettre un service en supervision

1. Créez un service :

    - Utilisez l'[autodécouverte d'hôtes](../discovery/hosts-discovery.md) : celle-ci crée automatiquement les services associés.

    - [Créez un hôte manuellement](hosts.md) en utilisant un [Plugin Pack](../pluginpacks.md), et cochez la case **Créer aussi les services liés aux modèles** : les services associés à l'hôte sont créés automatiquement.

    - Utilisez [l'autodécouverte de services](../discovery/services-discovery.md).

    - Créez le [service manuellement](services.md) et dans le champ **Modèle**, sélectionnez un [modèle de service](services-templates.md) (issu ou non d'un Plugin Pack).

    - Créez ou utilisez une [commande](commands.md) de vérification existante, et liez-la à un service [créé manuellement](services.md).

    - Créez un service via [les API](../../api/introduction.md).

2. [Déployez la configuration](../monitoring-servers/deploying-a-configuration.md).
