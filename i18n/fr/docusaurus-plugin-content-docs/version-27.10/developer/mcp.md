---
id: mcp-server
title: Serveur MCP Centreon
description: "Connectez des assistants IA à Centreon avec le serveur MCP pour consulter statuts, inventaire, métriques, acquittements, maintenances et commentaires."
---

> Le serveur MCP Centreon est fonctionnalité nouvelle et en rapide évolution. Durant ses phases initiales, la principale source de documentation sera le fichier README du [projet GitHub](https://github.com/centreon/centreon-mcp).

## Qu'est-ce qu'un serveur MCP ?

Model Context Protocol (MCP) est un framework open-standard et open-source qui permet aux IA de s'intégrer à des outils externes tels que Centreon Infra Monitoring. Un serveur MCP est un programme qui permet l'utilisation de MCP.

Le serveur MCP Centreon fonctionne comme un pont entre un LLM et votre plateforme Centreon. Pour protéger vos données, utilisez le serveur MCP Centreon uniquement avec un LLM local ou un LLM en ligne disposant d’une licence garantissant leur non-utilisation. Le serveur MCP ne stocke lui-même aucune donnée.

Le serveur MCP Centreon dispose actuellement d'intégrations avec ChatGPT, Mistral Le Chat et Claude.
Cependant, étant donné que le serveur utilise un endpoint HTTP/MCP standard, toute IA compatible avec MCP peut se connecter au serveur MCP Centreon.

## Fonctionnalités

Le serveur MCP expose actuellement 14 outils répartis en quatre domaines fonctionnels, ainsi qu'un prompt prêt à l'emploi. Au lieu d'un outil par objet, quelques outils génériques acceptent un paramètre `model_type` qui sélectionne le type d'objet concerné (par exemple `host`, `service_group` ou `downtime`).

| Domaine                    | Outils                                                                                                                                       | Objectif                                                                                           |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Supervision des ressources | `list_monitoring_resources`, `list_monitoring_entities`, `count_monitoring_resources_by_status`, `get_host_timeline`, `get_service_timeline` | Interroger, compter et inspecter les données de supervision en temps réel et la topologie.         |
| Configuration              | `list_configurations`, `create_configuration`, `update_configuration`, `delete_configurations`, `manage_monitoring_server_configurations`    | Gérer les objets de configuration et les appliquer aux pollers.                                    |
| Actions de supervision     | `list_monitoring_actions`, `set_monitoring_actions`, `cancel_monitoring_actions`                                                             | Acquitter des alertes, planifier des plages de maintenance, commenter et déclencher des contrôles. |
| Métriques                  | `get_service_metrics`                                                                                                                        | Consulter les valeurs actuelles des métriques et leurs seuils.                                     |

### Supervision des ressources

**list_monitoring_resources** est l'outil central pour interroger vos données de supervision en temps réel. Il liste les hôtes et les services, et permet d'appliquer plusieurs filtres simultanément, selon différents axes :

- **Par type de ressource** : hôtes uniquement, services uniquement, ou les deux.
- **Par statut** : UP, DOWN, UNREACHABLE, OK, WARNING, CRITICAL, UNKNOWN ou PENDING.
- **Par type de statut** : distinction entre les états HARD et SOFT.
- **Par nom, alias ou nom du parent** : recherche par correspondance partielle sur les identifiants des ressources.
- **Par contenu de la sortie/des informations** : rechercher les ressources dont la sortie du contrôle contient (ou ne contient pas) une chaîne donnée — idéal pour repérer des messages d'erreur spécifiques dans toute votre infrastructure.
- **Par périmètre** : filtrage par nom de groupe d'hôtes, groupe de services, catégorie d'hôtes, catégorie de services ou serveur de supervision (poller).
- **Pagination et tri** : les résultats sont paginés (50 par page par défaut) et triables par nom d'hôte, alias, adresse ou état.

Cette combinaison de filtres permet de poser des questions très précises telles que « Montre-moi tous les services en CRITICAL sur les hôtes du groupe d'hôtes 'production' dont la sortie mentionne 'disk full' » et d'obtenir des résultats précis et exploitables directement dans la conversation. Si vous ne fournissez aucun filtre, l'assistant vous demande d'en indiquer au moins un, sauf si vous souhaitez explicitement toutes les ressources.

**list_monitoring_entities** liste les entités de supervision en temps réel qui servent à cibler d'autres requêtes. Le paramètre `model_type` sélectionne le type d'entité :

- `host_group` — groupes d'hôtes, filtrables par nom d'hôte, alias, adresse, état, poller ou groupe d'hôtes.
- `service_group` — groupes de services, filtrables par les attributs de l'hôte, du service, du groupe d'hôtes ou du poller.
- `monitoring_server` — pollers, filtrables par nom, identifiant ou statut d'exécution.

Ces résultats constituent des briques de base naturelles : un assistant IA peut d'abord identifier les groupes et pollers pertinents, puis utiliser leurs noms ou identifiants pour affiner précisément ses requêtes suivantes.

**count_monitoring_resources_by_status** renvoie le nombre de ressources pour chaque état sans avoir à récupérer chaque ressource individuellement. Utilisez-le à la place de `list_monitoring_resources` lorsque seuls les totaux sont nécessaires. Le paramètre `model_type` sélectionne ce qui est compté :

- `host` — nombre d'hôtes pour chaque état (UP, DOWN, UNREACHABLE, PENDING), avec la possibilité de filtrer par groupes d'hôtes ou catégories d'hôtes.
- `service` — nombre de services pour chaque état (OK, WARNING, CRITICAL, UNKNOWN, PENDING), avec la possibilité de filtrer par nom d'hôte, groupe d'hôtes, catégorie d'hôtes, groupe de services ou catégorie de services.

L'outil accepte plusieurs jeux de filtres combinés selon une logique OR, ce qui permet de répondre facilement à des questions comme « Combien d'hôtes sont en DOWN dans les groupes 'production' et 'staging' ? » en un seul appel.

**get_host_timeline** et **get_service_timeline** récupèrent l'historique des événements d'un hôte ou d'un service donné en supervision temps réel. Les événements incluent les changements d'état, les notifications, les plages de maintenance, les acquittements et les commentaires, chacun avec une date et un contenu. Utilisez d'abord `list_monitoring_resources` pour obtenir les identifiants de l'hôte et du service. La chronologie est filtrable par type d'événement et par plage de dates, et triée par date décroissante par défaut (les plus récents en premier). Elle est utile pour répondre à la question « que s'est-il passé récemment sur cette ressource ? » sans quitter la conversation.

### Configuration

Quatre outils génériques couvrent l'ensemble du cycle de vie de la configuration. Chaque outil accepte un paramètre `model_type` permettant de sélectionner le type d'entité concerné, et chaque type d'entité possède son propre ensemble de paramètres.

| Outil                     | Description                                                                                                                                                         | Valeurs de `model_type` prises en charge                                                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **list_configurations**   | Liste les configurations, filtrable par champs spécifiques à l'entité (ID, nom, alias, adresse, statut d'activation, etc.). Les résultats sont paginés et triables. | `command`, `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `monitoring_server`, `service`, `service_category`, `service_group`, `service_severity`, `service_template`, `time_period` |
| **create_configuration**  | Crée une nouvelle configuration en fournissant les paramètres requis et optionnels du type d'entité choisi.                                                         | `command`, `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `service`, `service_category`, `service_group`, `service_severity`, `service_template`, `time_period`                      |
| **update_configuration**  | Met à jour partiellement une configuration existante par son ID, en ne renseignant que les champs à modifier.                                                       | `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `service`, `service_severity`, `service_template`, `time_period`                                                                      |
| **delete_configurations** | Supprime une ou plusieurs configurations à partir de leurs identifiants. Le résultat indique le succès ou l'échec pour chaque identifiant.                          | `host`, `host_category`, `host_group`, `host_severity`, `host_template`, `service`, `service_category`, `service_group`, `service_severity`, `service_template`, `time_period`                                 |

Par exemple, la création d'un hôte nécessite de préciser le serveur de supervision, le nom et l'adresse IP. Les paramètres optionnels incluent :

- Communauté et version SNMP
- Coordonnées géographiques
- Niveau de criticité (severity)
- Commandes de contrôle et de gestion des événements
- Options de notification
- Seuils de détection de flapping
- Associations à des groupes, catégories et modèles d'hôtes

Si vous ne fournissez aucun filtre à **list_configurations**, l'assistant vous demande d'en indiquer au moins un, sauf si vous souhaitez explicitement toutes les entités.

**manage_monitoring_server_configurations** applique les modifications de configuration à vos pollers. Le paramètre `action` sélectionne l'opération :

- `generate` — génère les fichiers de configuration des pollers sélectionnés.
- `reload` — recharge la configuration des pollers sélectionnés, en poussant les fichiers générés vers les moteurs de supervision.

Fournissez les identifiants des pollers pour cibler des pollers précis. Si aucun identifiant n'est fourni, l'action s'applique à tous les pollers. Lorsque plusieurs identifiants sont fournis, les pollers sont traités en parallèle et le résultat indique le succès ou l'échec pour chacun d'eux.

Les configurations des pollers peuvent elles-mêmes être listées via **list_configurations** en définissant `model_type` sur `monitoring_server`.

### Actions de supervision

Trois outils permettent d'agir sur les alertes sans quitter votre conversation. Le paramètre `model_type` sélectionne le type d'action.

- **list_monitoring_actions** — Liste les acquittements en cours (`acknowledgement`) ou les plages de maintenance (`downtime`), avec pagination et tri.
  - Les acquittements peuvent être triés par ID, hôte, heure de début, heure de saisie, etc.
  - Les plages de maintenance sont filtrables par nom d'hôte, alias, adresse, état, poller et propriétés de la plage (fixe, annulée).
- **set_monitoring_actions** — Applique une action à un ou plusieurs hôtes ou services en une seule fois. Valeurs de `model_type` prises en charge :
  - `acknowledgement` — acquitte des ressources avec un commentaire, et permet de configurer des options telles que l'acquittement persistant (sticky), les notifications, le commentaire persistant, l'acquittement des services de l'hôte et les contrôles actifs forcés.
  - `downtime` — planifie une plage de maintenance avec des heures de début et de fin, une durée, un commentaire, en précisant si la plage est fixe ou flexible et si elle s'applique aussi aux services de l'hôte.
  - `comment` — ajoute un commentaire sur un hôte ou un service, utile pour laisser des notes de contexte sur un incident en cours directement depuis l'assistant IA.
  - `check` — déclenche un contrôle sans attendre le prochain cycle de contrôle planifié. Utile juste après une action de remédiation pour confirmer le rétablissement directement dans la conversation. Le paramètre `is_forced` (valeur par défaut `true`) détermine si l'intervalle de contrôle configuré est contourné.
- **cancel_monitoring_actions** — Annule un ou plusieurs acquittements (`acknowledgement`) ou plages de maintenance (`downtime`) à partir de leurs identifiants. Le résultat indique le succès ou l'échec pour chaque identifiant.

### Métriques

- **get_service_metrics** — Récupère toutes les métriques d'un service avec leur nom, leur unité, leur valeur actuelle et leurs seuils d'alerte/de criticité. Utilisez d'abord `list_monitoring_resources` pour obtenir les identifiants de l'hôte et du service. Utile pour répondre à des questions telles que « quelle est l'utilisation CPU actuelle ? » ou « à quelle distance sommes-nous du seuil critique d'utilisation disque ? » sans quitter la conversation.

### Prompts

En plus des outils, le serveur MCP fournit des prompts prêts à l'emploi qui guident l'assistant dans une tâche en plusieurs étapes.

- **host_diagnosis** — Diagnostique un hôte à partir de son nom configuré (`host_name`, le nom exact, pas son alias ni un nom partiel). L'assistant suit un plan d'investigation en lecture seule en trois parties : Décrire (état de l'hôte, de ses services, métriques et historique récent), Comprendre (cause racine la plus probable) et Agir (actions suggérées). Rien n'est modifié tant que vous ne le demandez pas explicitement après avoir lu le diagnostic.

### Scénarios d'usage courants

Plusieurs outils sont conçus pour être enchaînés au sein d'une même conversation :

- **Diagnostiquer puis confirmer** : interroger les ressources avec `list_monitoring_resources`, corriger le problème identifié, puis appeler `set_monitoring_actions` avec `model_type` défini sur `check` pour confirmer immédiatement le rétablissement, sans attendre le prochain cycle de contrôle.
- **Configurer puis appliquer** : créer ou mettre à jour la configuration d'un hôte ou d'un service, puis exécuter `manage_monitoring_server_configurations` avec l'action `generate`, suivie de l'action `reload`, sur les pollers concernés pour déployer la modification.
- **Cibler puis interroger** : identifier les groupes d'hôtes, groupes de services ou pollers pertinents avec `list_monitoring_entities`, puis utiliser leurs noms pour affiner un appel à `list_monitoring_resources` ou `count_monitoring_resources_by_status`.

Pour configurer le serveur MCP de Centreon Infra Monitoring en local ou via Docker, consultez le fichier README du [projet GitHub](https://github.com/centreon/centreon-mcp).
