---
id: mcp-server
title: Connecter un assistant IA (serveur MCP)
description: Connecter un assistant IA à Centreon Log Management avec le serveur MCP pour rechercher, résumer et prévoir vos logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Cette fonctionnalité est nouvelle et évolue vite : de nouveaux outils s'ajoutent au fil des versions.

## Qu'est-ce que le serveur MCP ?

Model Context Protocol (MCP) est un standard ouvert qui permet à un assistant IA d'utiliser des outils externes. Le serveur MCP de Centreon Log Management connecte un assistant IA aux logs de votre organisation. Claude, Visual Studio Code ou tout autre client compatible MCP peut alors rechercher vos logs, les résumer, tracer leur volume et le prévoir, directement depuis la conversation.

Le serveur MCP ne stocke aucune donnée. En revanche, les logs que renvoient ses outils sont transmis au modèle de langage qu'utilise votre assistant. N'utilisez le serveur MCP qu'avec un assistant dont les conditions d'utilisation respectent votre politique de données, par exemple un modèle local ou un service qui n'entraîne pas ses modèles sur vos données.

## Prérequis

- Un **jeton d'API** pour votre organisation. Les jetons sont créés par un administrateur à la page **Administration > Token management** : voir [Gérer les jetons d'authentification](../administration/tokens.md). Le jeton donne accès à tous les logs de votre organisation : conservez-le comme un secret et ne le partagez pas.
- Le **nom de votre organisation**. Il figure dans l'adresse de l'interface de Log Management, après `/organizations/` : pour `https://obs.mycentreon.com/organizations/acme/...`, l'organisation est `acme`.
- Si vous vous connectez avec votre propre compte utilisateur plutôt qu'avec un jeton d'API, vous devez avoir le rôle **Editor** ou un rôle supérieur (voir [Droits utilisateur](../user-rights.md)).

## Adresse et authentification

Le serveur MCP est accessible à l'adresse suivante, où `<organization>` est le nom de votre organisation :

```text
https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp
```

Chaque appel au serveur doit comporter un seul identifiant :

- `X-Api-Key: <token>`, avec un jeton d'API (recommandé) ;
- `Authorization: Bearer <token>`, avec le jeton d'accès d'un compte utilisateur.

L'adresse détermine l'organisation : une connexion donne accès à une seule organisation, et un jeton ne fonctionne qu'avec l'organisation dans laquelle il a été créé. Pour travailler avec plusieurs organisations, ajoutez une connexion par organisation.

Le serveur MCP ne prend pas encore en charge la connexion par OAuth. Vous ne pouvez donc connecter que des clients qui permettent d'ajouter un en-tête HTTP personnalisé, comme ceux présentés ci-dessous.

## Connecter un client

Dans les exemples ci-dessous, remplacez `<organization>` par le nom de votre organisation et `<token>` par votre jeton d'API.

<Tabs groupId="mcp-client">
<TabItem value="Claude Code" label="Claude Code" default>

Exécutez la commande suivante :

```shell
claude mcp add --transport http centreon-logs https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp --header "X-Api-Key: <token>"
```

Vous pouvez aussi ajouter le serveur au fichier `.mcp.json` de votre projet :

```json
{
  "mcpServers": {
    "centreon-logs": {
      "type": "http",
      "url": "https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp",
      "headers": {
        "X-Api-Key": "<token>"
      }
    }
  }
}
```

Dans Claude Code, la commande `/mcp` affiche `centreon-logs` comme connecté.

</TabItem>
<TabItem value="Visual Studio Code" label="Visual Studio Code">

Ajoutez le serveur au fichier `.vscode/mcp.json` de votre espace de travail. Avec cette configuration, Visual Studio Code demande le jeton au premier démarrage du serveur et le stocke de façon sécurisée : le jeton n'apparaît pas dans le fichier.

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "clm-api-key",
      "description": "Centreon Log Management API token",
      "password": true
    }
  ],
  "servers": {
    "centreon-logs": {
      "type": "http",
      "url": "https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp",
      "headers": {
        "X-Api-Key": "${input:clm-api-key}"
      }
    }
  }
}
```

</TabItem>
<TabItem value="Claude Desktop" label="Claude Desktop">

Claude Desktop ne démarre que des serveurs locaux depuis son fichier de configuration. La connexion passe donc par [mcp-remote](https://www.npmjs.com/package/mcp-remote), une petite passerelle qui s'exécute avec Node.js. Sa version est volontairement figée : la passerelle reçoit votre jeton, ne la mettez donc à jour qu'en connaissance de cause.

1. Installez [Node.js](https://nodejs.org/).
2. Dans Claude Desktop, allez dans **Settings > Developer** et cliquez sur **Edit Config**.
3. Ajoutez le serveur au fichier `claude_desktop_config.json` :

   ```json
   {
     "mcpServers": {
       "centreon-logs": {
         "command": "npx",
         "args": [
           "-y",
           "mcp-remote@0.14.3",
           "https://api.euwest1.obs.mycentreon.com/v1/orgs/<organization>/log-analysis/mcp",
           "--transport",
           "http-only",
           "--header",
           "X-Api-Key:${CLM_API_KEY}"
         ],
         "env": {
           "CLM_API_KEY": "<token>"
         }
       }
     }
   }
   ```

4. Redémarrez Claude Desktop.

</TabItem>
</Tabs>

Une fois connecté, votre client affiche 6 outils et 3 prompts pour le serveur. Pour vérifier que tout fonctionne, posez par exemple la question suivante :

> Y a-t-il des erreurs dans les dernières 24 heures ? Résume ce qui s'est passé et prévois si le volume de logs va continuer à augmenter dans les prochaines heures.

## Outils

| Outil               | Rôle                                                                           |
| ------------------- | ------------------------------------------------------------------------------ |
| `search_logs`       | Recherche des logs à partir d'une question en langage naturel ou d'une requête |
| `summarize_logs`    | Rédige un résumé des logs correspondant à une requête sur une période donnée   |
| `aggregate_logs`    | Compte les logs dans le temps, au total, par sévérité ou par service           |
| `forecast_logs`     | Prévoit le volume de logs d'une requête à partir de son historique récent      |
| `list_log_fields`   | Liste les champs de vos logs que vous pouvez interroger                        |
| `list_field_values` | Liste les valeurs les plus fréquentes d'un champ                               |

Vous n'appelez pas les outils vous-même : vous posez une question, et l'assistant choisit les outils et les enchaîne. Savoir ce que fait chaque outil vous aide à formuler vos questions.

- **search_logs** accepte soit une question en langage naturel (« les erreurs du service de facturation dans la dernière heure »), soit une requête écrite avec la [syntaxe des requêtes](../query-syntax.md). Une question est traduite en requête, et l'outil renvoie cette requête : l'assistant peut ainsi l'affiner ou la réutiliser avec les autres outils. L'outil renvoie le nombre de logs correspondants et jusqu'à 1 000 d'entre eux (20 par défaut).
- **summarize_logs** renvoie un résumé rédigé des logs correspondant à une requête, par défaut sur la dernière heure.
- **aggregate_logs** renvoie le nombre de logs dans le temps, sous la forme d'une courbe totale, d'une courbe par sévérité ou d'une courbe par service (les 20 plus importants). C'est ainsi que l'assistant repère un pic ou une tendance sans lire chaque log.
- **forecast_logs** compte les logs correspondant à une requête sur une période (par défaut les dernières 24 heures) et prévoit les points suivants au même intervalle.
- **list_log_fields** liste les champs de vos logs, avec leur type et la possibilité de les rechercher ou de les agréger. L'assistant l'utilise avant d'écrire une requête sur un champ qu'il ne connaît pas.
- **list_field_values** liste les valeurs les plus fréquentes d'un champ, avec leur nombre d'occurrences. Par exemple, la sévérité d'un log peut s'écrire `ERROR` ou `Error` selon l'application qui l'a envoyé : cet outil montre toutes les variantes.

## Prompts

Le serveur MCP fournit aussi des prompts : des instructions toutes prêtes qui guident l'assistant tout au long d'une investigation complète. Selon votre client, ils apparaissent sous forme de commandes (par exemple `/centreon-logs:incident_postmortem` dans Claude Code) ou dans un sélecteur de prompts. Chaque prompt accepte des arguments facultatifs en texte libre.

| Prompt                | Rôle                                                                                                                                                                                                      | Arguments facultatifs                                                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `incident_postmortem` | Enquête sur un incident dans les logs et rédige un post-mortem : signes précurseurs, chronologie à la minute près, avec la requête qui étaye chaque affirmation                                           | `incident` : ce que l'on sait déjà (période, services touchés, symptômes)                                                                              |
| `period_digest`       | Répond à « que s'est-il passé pendant mon absence ? » en comparant une période à une période de référence : tendances, anomalies ou confirmation explicite que tout va bien, points marquants par service | `period` : la période à couvrir (les dernières 24 heures par défaut) ; `focus` : ce qui est normal pour votre plateforme, ou les services à surveiller |
| `understand_logs`     | Fait découvrir vos logs à un nouvel arrivant : les services présents, leur volume et leur profil de sévérité, des logs typiques et des requêtes pour commencer                                            | `focus` : un domaine par lequel commencer (un service, une technologie, une question)                                                                  |

## Limites

- Le serveur MCP ne fait que lire vos logs : il ne crée et ne modifie rien dans votre organisation.
- Une connexion donne accès à une seule organisation.
- L'authentification repose sur un jeton envoyé dans un en-tête HTTP. Les clients qui ne prennent en charge que la connexion par OAuth ne peuvent pas encore se connecter.

## Dépannage

- **401 Unauthorized** : l'identifiant est absent ou invalide, `X-Api-Key` et `Authorization` ont été envoyés ensemble, ou le jeton appartient à une autre organisation que celle de l'adresse.
- **403 Forbidden** : l'identifiant est valide, mais le compte utilisateur a un rôle inférieur à **Editor** dans l'organisation.
- **404 Not Found** : vérifiez l'adresse, en particulier le nom de l'organisation et le chemin `/log-analysis/mcp`.
