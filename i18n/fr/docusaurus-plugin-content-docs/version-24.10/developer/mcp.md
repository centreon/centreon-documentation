---
id: mcp-server
title: Serveur MCP Centreon
description: "Présentation des outils du serveur MCP Centreon pour l’IA"
---

> Le serveur MCP Centreon est fonctionnalité nouvelle et en rapide évolution. Durant ses phases initiales, la principale source de documentation sera le fichier README du [projet GitHub](https://github.com/centreon/centreon-mcp).

## Qu'est-ce qu'un serveur MCP ?

Model Context Protocol (MCP) est un framework open-standard et open-source qui permet aux IA de s'intégrer à des outils externes tels que Centreon Infra Monitoring. Un serveur MCP est un programme qui permet l'utilisation de MCP.

Le serveur MCP Centreon fonctionne comme un pont entre un LLM et votre plateforme Centreon. Pour protéger vos données, utilisez le serveur MCP Centreon uniquement avec un LLM local ou un LLM en ligne disposant d’une licence garantissant leur non-utilisation. Le serveur MCP ne stocke lui-même aucune donnée.

Le serveur MCP Centreon dispose actuellement d'intégrations avec ChatGPT, Mistral Le Chat et Claude.
Cependant, étant donné que le serveur utilise un endpoint HTTP/MCP standard, toute IA compatible avec MCP peut se connecter au serveur MCP Centreon.

## Fonctionnalités

Le serveur MCP Centreon vous permet de connecter des assistants IA tels que ChatGPT ou Claude à votre plateforme Centreon Infra Monitoring.
Cela vous permet de demander des informations ou d'effectuer des actions relatives à votre infrastructure via des prompts adressés à l'assistant IA.
Par exemple, vous pouvez lui demander de planifier une plage de maintenance pour une ressource ou de vous afficher tous les hôtes avec un statut "Alerte".

Les fonctionnalités du serveur MCP Centreon permettent d'intéragir avec 5 zones de Centreon :

- Supervision de ressources : lister des ressources en appliquant des filtres.
- Inventaire de l'infrastucture : lister les groupes ou les collecteurs en appliqaunt des filtres.
- Acquittements : lister et gérer les acquittements des alertes.
- Plages de maintenances : lister et gérer les plages de maintenance. 
- Commentaires : ajouter des commentaires sur un hôte ou un service.

Pour configurer le serveur MCP de Centreon Infra Monitoring en local ou via Docker, consultez le fichier README du [projet GitHub](https://github.com/centreon/centreon-mcp).