---
id: centreon-ui
title: Centreon UI
---

Cette partie traite de la configuration des options générales de l'interface web
Centreon.

Depuis le menu `Administration > Paramètres > Centreon web`.

![image](../../assets/administration/parameters-centreon-ui.png)

- Le champ **Répertoire** désigne le répertoire dans lequel Centreon est
installé
- Le champ **Répertoire Web de Centreon** indique le répertoire web sur lequel
est installé Centreon
- Le champs **Contacts & Contact groups method calculation** permet de définir
comment l'héritage des notifications des hôtes et services vont être calculés
- Le champ **Limite par page (par défaut)** définit le nombre d'objet affiché
par page de **Configuration**
- Le champ **Limite par page pour les pages de supervision** définit le nombre
d'objet affiché par page au sein du menu **Supervision**
- Le champ **Graphique de performance par page** définit le nombre maximum de
graphiques affichés sur la page de *Performances*\*
- Le champ **Nombre d'éléments présent** définit le nombre maximum d'éléments
affichés dans chaque boîte de sélection
- Le champ **Durée d'expiration de la session**, exprimé en minutes, indique
la durée maximale d'une session
- Le champ **Intervalle de rafraîchissement pour la page des statistiques**,
exprimé en secondes, indique l'intervalle de rafraîchissement pour les
objets de la page des statistiques
- Le champ **Intervalle de rafraîchissement pour la page de supervision**,
exprimé en secondes, indique l'intervalle de rafraîchissement pour les
objets de la page supervision
- Le champ **Trier par** indique le tri par défaut pour les pages de
supervision des hôtes et des services.
- Le champ **Choix de tri** indique l'ordre par défaut de tri pour les pages
de supervision des services et des hôtes.
- Le champ **Trier les problèmes par** permet de choisir comment trier les
différents incidents dans le menu **Supervision**
- La champ **Ordre de tri des problèmes** indique l'ordre d'affichage des
incidents par ordre de gravité croissant ou décroissant
- Le champ **Afficher les temps d'arrêts et les acquittements sur les
graphiques** permet d'afficher ou non ces éléments
- Le champ **Afficher les comentaires sur les graphiques** permet d'afficher
ou non ces éléments
- Le champ **Timezone par défaut de l'hôte** permet de définit un timezone par
défaut pour application du décalage horaire
- Le champ **Adresse mail de contact du support (de la plate-forme de
supervision)** indique l'adresse email de support **Centre des services du
client** pour la plate-forme Centreon. Cette adresse mail sera affichée en
bas de page sur le lien **Centre des services**
- **Send anonymous statistics** définit si oui on non la plateforme enverra des
des données anonymes pour le programme **Centreon Customer Experience
Improvement**

### Configuration du proxy

La configuraiton du proxy est nécessaire pour bénéficier de l'offre Centreon IT Edition.

![image](../../assets/administration/proxy_configuration.png)

Renseigner les différents champs:

- **URL du proxy web**
- **Port d'accès au proxy internet**
- **Proxy user**
- **Proxy password**

Pour valider la configuration, cliquez sur le bouton **Test Internet Connection**. Si le message
**Connection Successful** apparaît, votre configuration est valide, sinon modifiez vos paramètres.

## Autologin

- La case **Activer la connexion automatique** autorise les utilisateurs à se
connecter à l'interface web via le mécanisme de connexion automatique
- La case **Afficher le raccourci de connexion automatique** permet d'afficher
le raccourci de connexion en haut à droite

## SSO

- La case **Activer l'authentification SSO** active l'authentification SSO
- Le champ **Mode SSO** indique si l'authentification doit avoir lieu
uniquement par SSO ou bien en utilisant l'authentification locale également
(Mixte). Le mode mixte nécessite l'adresse des clients de confiance.
- Le champ **Adresses des clients SSO de confiance** indique quelles sont les
adresses IP/DNS des clients de confiance pour le SSO (correspond à l'adresse
du reverse proxy). Chaque client de confiance est séparé par une virgule.
- Le champ **Adresses des clients de bloqués** indique quelles sont les
adresses IP/DNS des clients qui seront refusés.
- Le champ **Entête HTTP SSO** indique la variable de l'en-tête qui sera
utilisée comme login/pseudo.
- Le champ **Chaine de recherche (pattern) pour l'authentification (login)**
indique l'expression rationnelle (pattern) de recherche pour l'utilisateur.
- Le champ **Chaine de remplacement (pattern) pour l'authentification
(login)** indique la chaine de remplacement.

> La fonctionnalité SSO doit être activée seulement dans un environnement dédié et
> sécurisé pour le SSO. Les accès direct des utilisateurs à Centreon Web doivent
> être désactivés.

## OpenId Connect

Centreon est compatible avec l'authentification OAuth 2.0 / OpenId Connect.

Il est possible d'utiliser un fournisseur d'identité (IdP) tel que Microsoft Azure AD, Okta, Keycloak, LemonLDAP::NG ou
tout autre IdP compatible avec le flux d'autorisation via un code (Authorization Code Grant).

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
- Le champ **Login claim value** définit la variable qui est renvoyée par les points de terminaison **Introspection Token Endpoint**
  ou **User Information Endpoint** pour authentifier l'utilisateur. Par exemple `sub` ou `email`.
- La case **Redirect Url** définit l'URL de redirection après connexion pour accéder à votre serveur Centreon, par exemple
  `https://192.168.0.1/centreon/index.php`.
- **Client ID** défini l'ID client.
- **Client Secret** défini le secret client.
- La case **Use Basic Auth for Token Endpoint Authentication** oblige à utiliser la méthode `Authorization: Basic`.
- **Disable SSL verify peer** permet de désactiver la validation des pairs SSL, ne doit être utilisé que pour des tests

![image](../assets/administration/openid-connect-configuration.png)

> Selon le fournisseur d'identité, il est nécessaire de saisir plusieurs portées (scope) afin de récupérer la valeur
> (claim) qui identifiera l'utilisateur. Ceci est indiqué dans la documentation de configuration du fournisseur.

> Il est possible de définir une URL complète pour les points de terminaison au cas où la base de l'URL est différente
> des autres.

> Il est possible de ne pas spécifier le champ **Redirect Url**, dans ce cas, le serveur Centreon enverra au
> fournisseur de service sa propre URL.

> Si vous souhaitez importer automatiquement l'utilisateur après la connexion, vous pouvez configurer un serveur LDAP
> et activer l'importation automatique. Assurez-vous que "l'attribut de connexion" de la configuration LDAP sera
> identique à la "valeur de la demande de connexion".

> Vous pouvez activer **Authentification debug** via le menu `Administration > Parameters > Debug` pour comprendre les
> échecs d'authentification et améliorer votre configuration.

### Exemples de configuration

<!--DOCUSAURUS_CODE_TABS-->
<!--Microsoft Azure AD-->
Voici un exemple de configuration pour Microsoft Azure Active Directory:

| Champs                       | Valeurs                                                   |
|------------------------------|-----------------------------------------------------------|
| Base Url                     | https://login.microsoftonline.com/${tenantId}/oauth2/v2.0 |
| Authorization Endpoint       | /authorize                                                |
| Token Endpoint               | /token                                                    |
| Introspection Token Endpoint | /introspect                                               |
| User Information Endpoint    | https://graph.microsoft.com/oidc/userinfo                 |
| End Session Endpoint         |                                                           |
| Scope                        | openid                                                    |
| Login claim value            | email                                                     |
| Redirect Url                 | https://${ipCentreon}/centreon/index.php                  |
| Client ID                    | ${clientId}                                               |
| Client Secret                | ${clientSecret}                                           |

> Veuillez remplacer `${tenantId}`, `${ipCentreon}`, `${clientId}` et `${clientSecret}` par vos propres valeurs.

<!--Okta-->
Voici un exemple de configuration pour Okta:

| Champs                       | Valeurs                                  |
|------------------------------|------------------------------------------|
| Base Url                     | https://${theIdPdomain}/oauth2/v1        |
| Authorization Endpoint       | /authorize                               |
| Token Endpoint               | /token                                   |
| Introspection Token Endpoint | /introspect                              |
| User Information Endpoint    | /userinfo                                |
| End Session Endpoint         | /logout                                  |
| Scope                        | profile openid                           |
| Login claim value            | username                                 |
| Redirect Url                 | https://${ipCentreon}/centreon/index.php |
| Client ID                    | ${clientId}                              |
| Client Secret                | ${clientSecret}                          |

> Veuillez remplacer `${theIdPdomain}`, `${ipCentreon}`, `${clientId}` et `${clientSecret}` par vos propres valeurs.

<!--Keycloak-->
Voici un exemple de configuration pour Keycloak:

| Champs                       | Valeurs                                                                 |
|------------------------------|-------------------------------------------------------------------------|
| Base Url                     | https://${theIdPdomain}:8080/auth/realms/master/protocol/openid-connect |
| Authorization Endpoint       | /auth                                                                   |
| Token Endpoint               | /token                                                                  |
| Introspection Token Endpoint | /token/introspect                                                       |
| User Information Endpoint    |                                                                         |
| End Session Endpoint         | /logout                                                                 |
| Scope                        | openid                                                                  |
| Login claim value            | email                                                                   |
| Redirect Url                 | https://${ipCentreon}/centreon/index.php                                |
| Client ID                    | ${resource}                                                             |
| Client Secret                | ${secret}                                                               |

> Veuillez remplacer `${theIdPdomain}`, `${ipCentreon}`, `${resource}` et `${secret}` par vos propres valeurs.

<!--LemonLDAP::NG-->
Voici un exemple de configuration pour LemonLDAP::NG:

| Champs                       | Valeurs                                  |
|------------------------------|------------------------------------------|
| Base Url                     | http://auth.example.com/oauth2           |
| Authorization Endpoint       | /authorize                               |
| Token Endpoint               | /token                                   |
| Introspection Token Endpoint | /introspect                              |
| User Information Endpoint    | /userinfo                                |
| End Session Endpoint         |                                          |
| Scope                        | openid                                   |
| Login claim value            | email                                    |
| Redirect Url                 | https://${ipCentreon}/centreon/index.php |
| Client ID                    | ${clientId}                              |
| Client Secret                | ${clientSecret}                          |

> Veuillez remplacer `auth.example.com`, `${ipCentreon}`, `${clientId}` et `${clientSecret}` par vos propres valeurs.

<!--Autres-->
La plupart des fournisseurs de services en ont une URL présentant la configuration des paramètres de configuration telle que
définie par [le protocole](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig).

```json
{
	"issuer": "https://server.example.com",
	"authorization_endpoint": "https://server.example.com/connect/authorize",
	"token_endpoint": "https://server.example.com/connect/token",
	"token_endpoint_auth_methods_supported": ["client_secret_basic", "private_key_jwt"],
	"token_endpoint_auth_signing_alg_values_supported": ["RS256", "ES256"],
	"userinfo_endpoint": "https://server.example.com/connect/userinfo",
	"check_session_iframe": "https://server.example.com/connect/check_session",
	"end_session_endpoint": "https://server.example.com/connect/end_session",
	"jwks_uri": "https://server.example.com/jwks.json",
	"registration_endpoint": "https://server.example.com/connect/register",
	"scopes_supported": ["openid", "profile", "email", "address", "phone", "offline_access"],
	"response_types_supported": ["code", "code id_token", "id_token", "token id_token"],
	"acr_values_supported": ["urn:mace:incommon:iap:silver", "urn:mace:incommon:iap:bronze"],
	"subject_types_supported": ["public", "pairwise"],
	"userinfo_signing_alg_values_supported": ["RS256", "ES256", "HS256"],
	"userinfo_encryption_alg_values_supported": ["RSA1_5", "A128KW"],
	"userinfo_encryption_enc_values_supported": ["A128CBC-HS256", "A128GCM"],
	"id_token_signing_alg_values_supported": ["RS256", "ES256", "HS256"],
	"id_token_encryption_alg_values_supported": ["RSA1_5", "A128KW"],
	"id_token_encryption_enc_values_supported": ["A128CBC-HS256", "A128GCM"],
	"request_object_signing_alg_values_supported": ["none", "RS256", "ES256"],
	"display_values_supported": ["page", "popup"],
	"claim_types_supported": ["normal", "distributed"],
	"claims_supported": ["sub", "iss", "auth_time", "acr",
		"name", "given_name", "family_name", "nickname",
		"profile", "picture", "website",
		"email", "email_verified", "locale", "zoneinfo",
		"http://example.info/claims/groups"
	],
	"claims_parameter_supported": true,
	"service_documentation": "http://server.example.com/connect/service_documentation.html",
	"ui_locales_supported": ["en-US", "en-GB", "en-CA", "fr-FR", "fr-CA"]
}
```

Récupérez les paramètres suivants pour configurer votre Centreon :
- issuer (Base Url)
- authorization_endpoint
- token_endpoint
- userinfo_endpoint
- end_session_endpoint
- scopes_supported
- claims_supported (Login claim value)

<!--END_DOCUSAURUS_CODE_TABS-->