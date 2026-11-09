---
id: protocol-based
title: Connecteurs à base de protocole
description: "Découvrez les informations dont un connecteur à base de protocole a besoin, des informations sur l'hôte et la connectivité aux exigences propres à HTTP, SSH et aux bases de données."
---

Un connecteur à base de protocole se connecte directement à un service ou exécute un contrôle via un protocole standard. Les informations dont vous avez besoin dépendent du protocole, mais en général, il s'agit des éléments suivants.

## Pour tous les protocoles

* Les informations sur l'hôte : nom, alias et adresse IP ou nom DNS.
* La connectivité réseau : le collecteur Centreon doit pouvoir joindre la cible sur le port concerné.
* Des identifiants, si le service demande une authentification.

## Selon le protocole

* HTTP/HTTPS : l'URL ou le point de terminaison cible, le port (en général 80 ou 443) et, pour HTTPS, la gestion des certificats. Souvent, des identifiants (par exemple une authentification basique ou un jeton d'API), ainsi que ce que vous contrôlez (code de statut, temps de réponse, présence d'une chaîne dans la page).
* SSH : le port SSH (en général 22) et l'authentification, par nom d'utilisateur et mot de passe ou par clé SSH. Le collecteur doit être autorisé à se connecter, et la commande ou le contrôle distant doit souvent s'exécuter avec un compte disposant des droits nécessaires.
* Connexions aux bases de données : le port de la base (par exemple 3306 pour MySQL, 5432 pour PostgreSQL, 1521 pour Oracle), un nom d'utilisateur et un mot de passe pour la base, et souvent le nom de la base ou de l'instance. Le compte a généralement besoin de droits de lecture sur ce que vous supervisez.

Dans tous les cas, vous renseignez ces valeurs dans les macros du connecteur après avoir appliqué son modèle. Nous vous recommandons de [tester le contrôle en ligne de commande depuis le collecteur](./connectors-test.md) avant de déployer la configuration.

Certains contrôles de bases de données ou d'applications nécessitent un pilote ou une bibliothèque cliente supplémentaire sur le collecteur. Dans ce cas, la procédure de supervision du connecteur indique lequel installer.

## Résoudre les problèmes des connecteurs à base de protocole

* Voir la partie HTTP de la section [**Contrôles HTTP et API** de notre page de résolution des problèmes](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api).
* Voir la section [**SSH and CLI checks** de notre page de résolution des problèmes](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#ssh-and-cli-checks).
* La section [**Problèmes communs**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#problèmes-communs) peut aussi vous aider.
