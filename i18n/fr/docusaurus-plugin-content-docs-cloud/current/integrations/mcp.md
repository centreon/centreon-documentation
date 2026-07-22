---
id: mcp-server
title: Serveur MCP Centreon
description: "Présentation du serveur MCP Centreon, de ses 23 outils répartis en sept domaines fonctionnels, et de leur utilisation par les IA"
---

> Le serveur MCP Centreon est fonctionnalité nouvelle et en rapide évolution. Durant ses phases initiales, la principale source de documentation sera le fichier README du [projet GitHub](https://github.com/centreon/centreon-mcp).

## Qu'est-ce qu'un serveur MCP ?

Model Context Protocol (MCP) est un framework open-standard et open-source qui permet aux IA de s'intégrer à des outils externes tels que Centreon Infra Monitoring. Un serveur MCP est un programme qui permet l'utilisation de MCP.

Le serveur MCP Centreon fonctionne comme un pont entre un LLM et votre plateforme Centreon. Pour protéger vos données, utilisez le serveur MCP Centreon uniquement avec un LLM local ou un LLM en ligne disposant d’une licence garantissant leur non-utilisation. Le serveur MCP ne stocke lui-même aucune donnée.

Le serveur MCP Centreon dispose actuellement d'intégrations avec ChatGPT, Mistral Le Chat et Claude.
Cependant, étant donné que le serveur utilise un endpoint HTTP/MCP standard, toute IA compatible avec MCP peut se connecter au serveur MCP Centreon.

## Fonctionnalités

| Domaine | Outils | Objectif |
|---|---|---|
| Supervision des ressources | `list_resources`, `count_hosts_by_status`, `count_services_by_status`, `get_host_timeline`, `get_service_timeline`, `request_check` | Interroger, compter, inspecter et actualiser les données de supervision en temps réel |
| Inventaire de l'infrastructure | `list_hostgroups`, `list_servicegroups`, `list_monitoring_servers` | Explorer la topologie de votre supervision |
| Configuration | `list_configurations`, `create_configuration`, `update_configuration`, `delete_configurations`, `generate_monitoring_servers_configurations`, `reload_monitoring_servers_configurations` | Gérer et appliquer les objets de configuration |
| Acquittements | `list_acknowledgements`, `add_acknowledgements`, `cancel_acknowledgements` | Acquitter et lever des alertes |
| Plages de maintenance | `list_downtimes`, `set_downtimes`, `cancel_downtimes` | Planifier et gérer des plages de maintenance |
| Commentaires | `add_comments` | Ajouter des notes de contexte sur une ressource |
| Métriques | `get_service_metrics` | Consulter les valeurs actuelles des métriques et leurs seuils |

### Supervision des ressources

**list_resources** est l'outil central pour interroger vos données de supervision en temps réel. Il permet d'appliquer plusieurs filtres simultanément, selon différents axes :

- **Par type de ressource** : hôtes uniquement, services uniquement, ou les deux
- **Par statut** : OK, WARNING, CRITICAL, UNKNOWN ou PENDING
- **Par type de statut** : distinction entre les états HARD et SOFT
- **Par nom, alias ou nom du parent** : recherche par correspondance partielle sur les identifiants des ressources
- **Par contenu de la sortie/des informations** : rechercher les ressources dont la sortie du contrôle contient (ou ne contient pas) une chaîne donnée — idéal pour repérer des messages d'erreur spécifiques dans toute votre infrastructure
- **Par périmètre** : filtrage par groupe d'hôtes, groupe de services, catégorie d'hôtes, catégorie de services ou serveur de supervision (poller)
- **Pagination et tri** : les résultats sont paginés et triables par nom d'hôte, alias, adresse ou état

Cette combinaison de filtres permet de poser des questions très précises telles que « Montre-moi tous les services en CRITICAL sur les hôtes du groupe d'hôtes 'production' dont la sortie mentionne 'disk full' » et d'obtenir des résultats précis et exploitables directement dans la conversation.

Deux outils de comptage dédiés fournissent un résumé rapide des statuts sans avoir à récupérer chaque ressource individuellement :

- **count_hosts_by_status** — renvoie le nombre total d'hôtes pour chaque état (UP, DOWN, UNREACHABLE, PENDING), avec la possibilité de filtrer par un ou plusieurs groupes d'hôtes ou catégories d'hôtes
- **count_services_by_status** — renvoie le nombre total de services pour chaque état (OK, WARNING, CRITICAL, UNKNOWN, PENDING), avec la possibilité de filtrer par nom d'hôte, groupe d'hôtes, catégorie d'hôtes, groupe de services ou catégorie de services

Les deux outils acceptent plusieurs jeux de filtres combinés selon une logique OR, ce qui permet de répondre facilement à des questions comme « Combien d'hôtes sont en DOWN dans les groupes 'production' et 'staging' ? » en un seul appel.

Deux outils dédiés permettent à l'assistant d'inspecter et d'actualiser une ressource donnée :

- **get_host_timeline** / **get_service_timeline** — récupère l'historique des événements d'un hôte ou d'un service en supervision temps réel (changements d'état, notifications, plages de maintenance, acquittements, commentaires). Filtrable par type d'événement, sous-chaîne de contenu et plage de dates. Trié par date décroissante par défaut. Utile pour répondre à la question « que s'est-il passé récemment sur cette ressource ? » sans quitter la conversation.
- **request_check** — déclenche un contrôle sur une ou plusieurs ressources (hôtes et services) sans attendre le prochain cycle de contrôle planifié. Utile juste après une action de remédiation pour confirmer le rétablissement directement dans la conversation. Le paramètre `is_forced` (valeur par défaut `true`) détermine si l'intervalle de contrôle configuré est contourné.

### Inventaire de l'infrastructure

Trois outils en lecture seule permettent aux assistants IA d'explorer la topologie de votre supervision :

- **list_hostgroups** — Liste les groupes d'hôtes, filtrable par nom d'hôte, alias, adresse, état, poller ou identifiant de groupe
- **list_servicegroups** — Liste les groupes de services, filtrable par les attributs de l'hôte, du service, du groupe d'hôtes ou du poller
- **list_monitoring_servers** — Liste les pollers, avec la possibilité de filtrer par nom, identifiant ou statut d'exécution

Ces outils constituent des briques de base naturelles : un assistant IA peut d'abord identifier les groupes et pollers pertinents, puis utiliser ces identifiants pour affiner précisément ses requêtes suivantes.

### Configuration

Quatre outils génériques couvrent l'ensemble du cycle de vie de la configuration pour les hôtes, groupes d'hôtes, catégories d'hôtes, niveaux de criticité (host severities), modèles d'hôtes et commandes. Chaque outil accepte un paramètre `model_type` permettant de sélectionner le type d'entité concerné.

- **list_configurations** — Liste les configurations, filtrable par champs spécifiques à l'entité (ID, nom, alias, adresse, statut d'activation, etc.). Les résultats sont paginés et triables. Types d'entités pris en charge : `command`, `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `monitoring_server`.
- **create_configuration** — Crée une nouvelle configuration en fournissant les paramètres requis et optionnels du type d'entité choisi. Types d'entités pris en charge : `command`, `host`, `host_category`, `host_group`, `host_severity`, `host_template`.
- **update_configuration** — Met à jour partiellement une configuration existante par son ID, en ne renseignant que les champs à modifier. Types d'entités pris en charge : `host`, `host_category`, `host_group`, `host_severity`, `host_template`.
- **delete_configurations** — Supprime une ou plusieurs configurations à partir de leurs identifiants. Types d'entités pris en charge : `host`, `host_category`, `host_group`, `host_severity`, `host_template`.

Chaque type d'entité possède son propre ensemble de paramètres, transmis avec `model_type`. Par exemple, la création d'un hôte nécessite de préciser le serveur de supervision, le nom et l'adresse IP. Les paramètres optionnels incluent :

- Communauté et version SNMP
- Coordonnées géographiques
- Niveau de criticité (severity)
- Commandes de contrôle et de gestion des événements
- Options de notification
- Seuils de détection de flapping
- Associations à des groupes, catégories et modèles d'hôtes

Deux outils supplémentaires permettent d'appliquer les modifications de configuration à vos pollers :

- **generate_monitoring_servers_configurations** — Génère les fichiers de configuration pour un ou plusieurs pollers à partir de leurs identifiants. Si aucun identifiant n'est fourni, génère la configuration de tous les pollers. S'exécute en parallèle lorsque plusieurs identifiants sont fournis.
- **reload_monitoring_servers_configurations** — Recharge la configuration d'un ou plusieurs pollers à partir de leurs identifiants, en poussant les fichiers générés vers les moteurs de supervision. Si aucun identifiant n'est fourni, recharge tous les pollers. S'exécute en parallèle lorsque plusieurs identifiants sont fournis.

Les configurations des pollers peuvent elles-mêmes être listées via **list_configurations** en définissant `model_type` sur `monitoring_server`.

### Acquittements

Acquittez des alertes sans jamais quitter votre conversation :

- **list_acknowledgements** — Liste les acquittements en cours, avec pagination et tri (par ID, hôte, heure de début, heure de saisie, etc.)
- **add_acknowledgements** — Acquitte une ou plusieurs ressources en une seule fois, avec un message et des options telles que l'acquittement persistant (sticky) et les notifications
- **cancel_acknowledgements** — Supprime les acquittements d'une ou plusieurs ressources, avec la possibilité d'annuler également les acquittements des services lorsqu'un hôte est désacquitté

### Plages de maintenance

Gestion complète du cycle de vie des plages de maintenance, directement depuis la conversation :

- **list_downtimes** — Interroge les plages de maintenance planifiées ou actives, filtrable par nom d'hôte, alias, adresse, état, poller et propriétés de la plage (fixe, annulée)
- **set_downtimes** — Planifie une plage de maintenance sur un ou plusieurs hôtes ou services, en précisant les heures de début et de fin, un commentaire, et si la plage est fixe ou flexible
- **cancel_downtimes** — Annule une ou plusieurs plages de maintenance à partir de leurs identifiants

### Commentaires

- **add_comments** — Ajoute un commentaire sur un hôte ou un service en supervision temps réel, utile pour laisser des notes de contexte sur un incident en cours directement depuis l'assistant IA

### Métriques

- **get_service_metrics** — Récupère toutes les métriques d'un service avec leurs valeurs actuelles, leurs unités et leurs seuils d'alerte/de criticité. Utile pour répondre à des questions telles que « quelle est l'utilisation CPU actuelle ? » ou « à quelle distance sommes-nous du seuil critique d'utilisation disque ? » sans quitter la conversation.

### Scénarios d'usage courants

Plusieurs outils sont conçus pour être enchaînés au sein d'une même conversation :

- **Diagnostiquer puis confirmer** : interroger les ressources avec `list_resources`, corriger le problème identifié, puis appeler `request_check` pour confirmer immédiatement le rétablissement, sans attendre le prochain cycle de contrôle.
- **Configurer puis appliquer** : créer ou mettre à jour la configuration d'un hôte ou d'un service, puis exécuter `generate_monitoring_servers_configurations` suivi de `reload_monitoring_servers_configurations` sur les pollers concernés pour déployer la modification.
- **Cibler puis interroger** : identifier les groupes d'hôtes, groupes de services ou pollers pertinents avec les outils d'inventaire de l'infrastructure, puis utiliser ces identifiants pour affiner un appel à `list_resources`, `count_hosts_by_status` ou `count_services_by_status`.

Pour configurer le serveur MCP de Centreon Infra Monitoring en local ou via Docker, consultez le fichier README du [projet GitHub](https://github.com/centreon/centreon-mcp).