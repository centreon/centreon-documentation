---
id: openid
title: Configurer une authentification par OpenId Connect
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Centreon est compatible avec l'authentification OAuth 2.0/OpenId Connect.

Il est possible d'utiliser un fournisseur d'identité (IdP) tel que Microsoft Azure AD, Okta, Keycloak, LemonLDAP::NG ou
tout autre IdP compatible avec le flux d'autorisation via un code (Authorization Code Grant).

## Configurer l'authentification OpenID Connect

L'authentification se paramètre à la page **Administration > Authentification > OpenId Connect Configuration** :

![image](../assets/administration/oidc-configuration.png)

### Étape 1 : Activer l'authentification

Activez l'authentification OpenID Connect :

- **Enable OpenId Connect authentication** : active/désactive l'authentification OpenId Connect.
- **Mode d'authentification** : indique si l'authentification doit se faire uniquement par OpenId Connect ou en
  utilisant également l'authentification locale (**Mixte**). En mode mixte, des utilisateurs créés manuellement dans Centreon (et non identifiés par OpenID) pourront également se connecter.

### Étape 2 : Configurer les informations d'accès au fournisseur d'identité

Renseignez les informations du fournisseur d'identité :

- **URL de base** : définit l'URL de base du fournisseur d'identité pour les points d'entrée OpenId Connect (obligatoire).
- **Point d'entrée d'autorisation** : définit le point d'entrée d'autorisation, par exemple `/authorize` (obligatoire).
- **Point d'entrée de jeton** : définit le point d'entrée du jeton, par exemple `/token` (obligatoire).
- **Point d'entrée de jeton d'introspection** : définit le point d'entrée du jeton d'introspection, par exemple `/introspect` (obligatoire).
- **ID de client** : définit l'ID client.
- **Secret de client** : définit le secret client.
- **Point d'entrée d'information utilisateur** : définit le point d'entrée des informations utilisateur, par exemple `/userinfo`.
- **Point d'entrée de fin de session** : définit le point d'entrée de déconnexion, par exemple `/logout`.
- **Portées** : définit la portée du fournisseur d'identité, par exemple `openid`. Séparez différentes portées par des espaces.
  > Selon le fournisseur d'identité, il est nécessaire de saisir plusieurs portées (scopes) afin de récupérer la valeur
  > (claim) qui identifiera l'utilisateur. Ceci est indiqué dans la documentation de configuration du fournisseur.
- **Valeur de la déclaration de connexion** : définit quelle variable renvoyée par les points d'entrée
**Point d'entrée de jeton d'introspection** ou **Point d'entrée d'information utilisateur** doit être utilisée pour authentifier l'utilisateur. Par exemple `sub` ou `email`.
- **Utiliser l'authentification basique pour l'authentification du point d'entrée de jeton** : si cette option est activée, la méthode `Authorization: Basic` sera utilisée. Activez cette option si votre fournisseur d'identité le demande.
- **Disable SSL verify peer** : permet de désactiver la validation des pairs SSL. Le certificat du fournisseur d'identité ne sera pas vérifié : cette option ne doit être utilisée qu'à des fins de test.

> Il est possible de définir une URL complète pour les points de entrée au cas où la base de l'URL est différente
> des autres.

> Vous pouvez activer **Authentification debug** via le menu `Administration > Parameters > Debug` pour comprendre les
> échecs d'authentification et améliorer votre configuration.

### Étape 3 : Configurer les adresses des clients

Si vous laissez ces deux champs vides, toutes les adresses IP seront autorisées à accéder à l'interface Centreon.

- **Adresses de clients de confiance** : Si vous entrez des adresses IP dans ce champ, seules ces adresses IP seront autorisées à accéder à l'interface Centreon. Toutes les autres adresses IP seront bloquées. Séparez les adressses IP par des virgules.
- **Adresses de clients sur liste noire** : Ces adresses IP seront bloquées. Toutes les autres adresses IP seront autorisées.

### Étape 4 : Créer les utilisateurs

À la page **Configuration > Utilisateurs > Contacts/Utilisateurs**, [créez les utilisateurs](../monitoring/basic-objects/contacts-create.md) qui se connecteront à Centreon avec OpenID et [donnez-leur des droits](../administration/access-control-lists.md) via des groupes d'accès.

### Exemples de configuration

<Tabs groupId="sync">
<TabItem value="Microsoft Azure AD" label="Microsoft Azure AD">

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
| Client ID                    | ${clientId}                                               |
| Client Secret                | ${clientSecret}                                           |

> Remplacez `${tenantId}`, `${clientId}` et `${clientSecret}` par vos propres valeurs.

</TabItem>
<TabItem value="Okta" label="Okta">

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
| Client ID                    | ${clientId}                              |
| Client Secret                | ${clientSecret}                          |

> Remplacez `${theIdPdomain}`, `${clientId}` et `${clientSecret}` par vos propres valeurs.

</TabItem>
<TabItem value="Keycloak" label="Keycloak">

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
| Client ID                    | ${resource}                                                             |
| Client Secret                | ${secret}                                                               |

> Remplacez `${theIdPdomain}`, `${resource}` et `${secret}` par vos propres valeurs.

</TabItem>
<TabItem value="LemonLDAP::NG" label="LemonLDAP::NG">

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
| Client ID                    | ${clientId}                              |
| Client Secret                | ${clientSecret}                          |

> Remplacez `auth.example.com`, `${clientId}` et `${clientSecret}` par vos propres valeurs.

</TabItem>
<TabItem value="Autres" label="Autres">

La plupart des fournisseurs de services ont une URL présentant la configuration des paramètres de configuration telle que
définie par [le protocole](https://openid.net/specs/openid-connect-discovery-1_0#ProviderConfig).

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
	"service_documentation": "http://server.example.com/connect/service_documentation",
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

</TabItem>
</Tabs>
