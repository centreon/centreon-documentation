---
id: services-create
title: Mettre un service en supervision
---

Un service est un point de contrôle, ou indicateur, à superviser sur un hôte. Par exemple : pourcentage d’utilisation partition sur un
serveur, niveau d’encre sur une imprimante...

Pour consulter la liste des services supervisés, allez à la page **Configuration > Services > Services par hôtes**.

Vous pouvez :

- [créer un service manuellement](services)
- [découvrir des services automatiquement](../discovery/services-discovery).

## Mettre un service en supervision

1. Créez un service :

- Utilisez l'[autodécouverte d'hôtes](../discovery/hosts-discovery) : celle-ci crée automatiquement les services associés.

- [Créez un hôte manuellement](hosts) en utilisant un [Plugin Pack](../pluginpacks), et cochez la case **Créer aussi les services liés aux modèles** : les services associés à l'hôte sont créés automatiquement.

- Utilisez [l'autodécouverte de services](../discovery/services-discovery).

- Créez le [service manuellement](services) et dans le champ **Modèle**, sélectionnez un [modèle de service](services-templates) (issu ou non d'un Plugin Pack).

- Créez ou utilisez une [commande](commands) de vérification existante, et liez-la à un service [créé manuellement](services).

- Créez un service via [les API](../../api/introduction).

2. [Déployez la configuration](../monitoring-servers/deploying-a-configuration).
