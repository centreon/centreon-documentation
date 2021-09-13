---
id: openid
title: Configurer une authentification par OpenId Connect
---

Centreon est compatible avec l'authentification OAuth 2.0 / OpenId Connect.

Il est possible d'utiliser un fournisseur d'identité (IdP) tel que Keycloak, LemonLDAP::NG ou tout autre IdP compatible
avec le flux d'autorisation via un code (Authorization Code Grant).

L'authentification se paramètre à la page **Administration > Paramètres > Centreon web**, section **Authentication by OpenId Connect**.

- La case **Enable OpenId Connect authentication** permet d'activer ou de désactiver l'authentification OpenId Connect.
- Le champ **Authentication mode** indique si l'authentification doit avoir lieu uniquement par OpenId Connect ou en
  utilisant également l'authentification locale (mixte).
- Le champ **Trusted client addresses** indique quelles sont les adresses IP/DNS des clients de confiance (correspond à
  l'adresse du reverse proxy). Chaque client de confiance est séparé par une virgule.
- Le champ **Blacklist client addresses** indique quelles sont les adresses IP/DNS des clients qui seront refusés.
- Le champ **Base Url** définit l'URL de base de l'IdP pour les points de terminaison OpenId Connect (obligatoire).
- Le champ **Authorization Endpoint** définit le point de terminaison d'autorisation, par exemple `/authorize` (obligatoire).
- Le champ **Token Endpoint** définit le point de terminaison du jeton, par exemple `/token` (obligatoire).
- Le champ **Introspection Token Endpoint** définit le point de terminaison du jeton d'introspection, par exemple `/introspect` (obligatoire).
- Le champ **User Information Endpoint** définit le point de terminaison des informations utilisateur, par exemple `/userinfo`.
- Le champ **End Session Endpoint** définit le point de terminaison de déconnexion, par exemple `/logout`.
- Le champ **Scope** définit la portée de l'IdP, par exemple «openid». Portée séparée par espace.
- La case **Redirect Url** définit l'URL de redirection après connexion pour accéder à votre serveur Centreon, par exemple
  `http://192.168.0.1/centreon/index.php`.
- **Client ID** défini l'ID client.
- **Client Secret** défini le secret client.
- **Disable SSL verify peer** permet de désactiver la validation des pairs SSL, ne doit être utilisé que pour le test

![image](../assets/administration/openid-connect-configuration.png)

> Selon le fournisseur d'identité, il est nécessaire de saisir plusieurs étendues (scope), ceci est indiqué dans la
> documentation de configuration du fournisseur.

> Pour que l'authentification soit fonctionnelle, la réponse à l'appel de jeton d'introspection doit renvoyer une
> variable `preferred_username` contenant le login de l'utilisateur qui sera comparé aux utilisateurs définis dans Centreon.
> Si ce n'est pas le cas, vous devrez configurer votre fournisseur pour envoyer des revendications supplémentaires
> (extra claims) à une portée supplémentaire (scope). Dans ce cas, il sera nécessaire de configurer le point de terminaison
> des informations utilisateur et d'ajouter la portée supplémentaire à la définition de la portée.

> Si vous souhaitez importer automatiquement l'utilisateur après la connexion, vous pouvez configurer un serveur LDAP
> et activer l'importation automatique.
