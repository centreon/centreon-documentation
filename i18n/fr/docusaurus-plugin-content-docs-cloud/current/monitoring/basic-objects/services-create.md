---
id: services-create
title: Mettre un service en supervision
---

Un service est un point de contrôle, ou indicateur, à superviser sur un hôte. Par exemple : pourcentage d’utilisation partition sur un
serveur, niveau d’encre sur une imprimante...

Pour consulter la liste des services supervisés, allez à la page **Configuration > Services > Services par hôte**.

Vous pouvez :

- [créer un service manuellement](services.md)
- [découvrir des services automatiquement](../discovery/services-discovery.md).

## Mettre un service en supervision

1. Créez un service :

    - Utilisez l'[autodécouverte d'hôtes](../discovery/hosts-discovery.md) : celle-ci crée automatiquement les services associés.

    - [Créez un hôte manuellement](hosts.md) en utilisant un [connecteur de supervision](../pluginpacks.md) : les services associés à l'hôte sont créés automatiquement.

    - Utilisez [l'autodécouverte de services](../discovery/services-discovery.md).

    - Créez le [service manuellement](services.md) et dans le champ **Modèle**, sélectionnez un [modèle de service](services-templates.md) (issu ou non d'un connecteur de supervision).

2. [Déployez la configuration](../monitoring-servers/deploying-a-configuration.md).
