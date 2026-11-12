---
id: api-based
title: Connecteurs à base d'API
description: "Découvrez les informations dont un connecteur à base d'API a besoin, des paramètres de connexion et de l'authentification jusqu'aux ressources à interroger."
---

Un connecteur à base d'API interroge l'API de la cible (en général une API REST) pour collecter les données. C'est courant pour les services cloud et les applications récentes. Voici les informations dont vous avez besoin.

## Paramètres de connexion

* Le point de terminaison de l'API : l'URL de base ou le nom d'hôte de l'API, et le port s'il n'est pas standard.
* Le protocole : en général HTTPS, ce qui peut impliquer de gérer des certificats.
* La connectivité réseau : le collecteur Centreon doit pouvoir joindre le point de terminaison de l'API (ainsi que le proxy intermédiaire, s'il y en a un).

## Authentification

Les exigences d'authentification varient d'un service à l'autre. Vous pouvez avoir besoin :

* D'une clé ou d'un jeton d'API.
* D'identifiants client : souvent un ID client et un secret client (courant avec OAuth 2.0, par exemple pour Azure ou AWS).
* Parfois d'un nom d'utilisateur et d'un mot de passe, ou d'une combinaison servant à obtenir un jeton d'accès temporaire.
* Pour les fournisseurs cloud, d'identifiants supplémentaires comme un ID d'abonnement, un ID de tenant, une région ou un ID de compte.

## Ce que vous interrogez

* La ressource ou l'objet précis à superviser (par exemple une base de données, une VM ou un bucket donné).
* Parfois une version de l'API, si le service en propose plusieurs.

## Autres points à vérifier pour chaque connecteur

* Les limites de requêtes : certaines API limitent la fréquence des requêtes, ce qui influe sur l'intervalle de contrôle.
* Le besoin éventuel d'un proxy pour accéder à Internet (courant lorsque le collecteur est derrière un pare-feu).

Vous renseignez ces valeurs dans les macros du connecteur après avoir appliqué son modèle. Nous vous recommandons de [tester le contrôle en ligne de commande depuis le collecteur](./connectors-test.md) avant de déployer la configuration. La procédure de supervision du connecteur liste les identifiants et les paramètres requis par son API.

## Résoudre les problèmes des connecteurs à base d'API

* Voir la section [**Contrôles HTTP et API** de notre page de résolution des problèmes](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api).
* Voir aussi [**Troubleshooting AWS**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-aws).
* La section [**Problèmes communs**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#problèmes-communs) peut aussi vous aider.
