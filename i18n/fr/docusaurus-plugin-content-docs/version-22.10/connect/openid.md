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

L'authentification se paramètre à la page **Administration > Authentification > OpenId Connect Configuration**.

### Étape 1 : Activer l'authentification

Activez l'authentification OpenID Connect :

- **Enable OpenId Connect authentication** : active/désactive l'authentification OpenId Connect.
- **Mode d'authentification** : indique si l'authentification doit se faire uniquement par OpenId Connect ou en
  utilisant également l'authentification locale (**Mixte**). En mode mixte, des utilisateurs créés manuellement dans
  Centreon (et non identifiés par OpenID) pourront également se connecter.

> Lors du paramétrage, il est recommandé d'activer le mode "mixte". Cela vous permettra de garder l'accès au compte
> local `admin` en cas de configuration érronée.

### Étape 2 : Configurer les informations d'accès au fournisseur d'identité

Renseignez les informations du fournisseur d'identité :

- **URL de base** : définit l'URL de base du fournisseur d'identité pour les points d'entrée OpenId Connect (obligatoire).
- **Point d'entrée d'autorisation** : définit le point d'entrée d'autorisation, par exemple `/authorize` (obligatoire).
- **Point d'entrée de jeton** : définit le point d'entrée du jeton, par exemple `/token` (obligatoire).
- **ID de client** : définit l'ID client.
- **Secret de client** : définit le secret client.
- **Portées** : définit la portée du fournisseur d'identité, par exemple `openid`. Séparez différentes portées par des espaces.
  > Selon le fournisseur d'identité, il est nécessaire de saisir plusieurs portées (scopes) afin de récupérer la valeur
  > (claim) qui identifiera l'utilisateur. Ceci est indiqué dans la documentation de configuration du fournisseur.
- **Valeur de la déclaration de connexion** : définit quelle variable renvoyée par les points d'entrée
  **Point d'entrée de jeton d'introspection** ou **Point d'entrée d'information utilisateur** doit être utilisée pour
  authentifier l'utilisateur. Par exemple `sub` ou `email`.
- **Point d'entrée de fin de session** : définit le point d'entrée de déconnexion, par exemple `/logout`.

Suivant votre fournisseur d'identité, définissez l'un ou l'autre des deux endpoints suivants :

- **Point d'entrée de jeton d'introspection** : définit le point d'entrée du jeton d'introspection, par exemple `/introspect` (obligatoire).
- **Point d'entrée d'information utilisateur** : définit le point d'entrée des informations utilisateur, par exemple `/userinfo`.

Vous pouvez également configurer :

- **Utiliser l'authentification basique pour l'authentification du point d'entrée de jeton** : si cette option est activée, la
  méthode `Authorization: Basic` sera utilisée. Activez cette option si votre fournisseur d'identité le demande.
- **Disable SSL verify peer** : permet de désactiver la validation des pairs SSL. Le certificat du fournisseur d'identité ne
  sera pas vérifié : cette option ne doit être utilisée qu'à des fins de test.

> Il est possible de définir une URL complète pour les points de entrée au cas où la base de l'URL est différente
> des autres.

> Vous pouvez activer **Authentification debug** via le menu **Administration > Parameters > Debug** pour comprendre les
> échecs d'authentification et améliorer votre configuration.

### Étape 3 : Configurer les conditions d'authentification

* Vous pouvez ajouter en liste blanche ou liste noire les adresses IP. Si vous laissez ces deux champs vides, toutes les
adresses IP seront autorisées à accéder à l'interface Centreon.

  - **Adresses de clients de confiance** : Si vous entrez des adresses IP dans ce champ, seules ces adresses IP seront
    autorisées à accéder à l'interface Centreon. Toutes les autres adresses IP seront bloquées. Séparez les adressses IP
	par des virgules.
  - **Adresses de clients sur liste noire** : Ces adresses IP seront bloquées. Toutes les autres adresses IP seront autorisées.

* Vous pouvez également définir des conditions selon lesquelles les utilisateurs seront autorisés à se connecter ou non, en
  fonction des données reçues par un point d'enbtrée particulier.
   - Activer **Enable conditions on identity provider**.
   - Définissez quel attribut et quel point d'entrée seront utilisés pour valider les conditions.
   - Pour l'option **Define authorized conditions values**, définissez quelles seront les valeurs autorisées renvoyées par ce
     point d'entrée. Si vous entrez plusieurs valeurs, toutes devront être remplies pour que la condition soit validée. Tous les
	 utilisateurs qui tentent de se connecter avec une autre valeur ne pourront pas se connecter.

   Dans l'exemple ci-dessous, la valeur de **Conditions attribute path** est **status** et la valeur de **Define authorized conditions values**
   est **activated**. Si le point d'entrée **Introspection endpoint** vous donne la réponse suivante, l'utilisateur est autorisé à se connecter :

   ```json
   {
       ...
       "name": "OpenId Connect OIDC",
       "given_name": "OpenId Connect",
       "family_name": "OIDC",
       "preferred_username": "oidc",
       "email": "oidc@localhost",
       "email_verified": false,
       ...
       "status": "activated"
   }
   ```

   > Actuellement, seules les valeurs de chaîne de caractères peuvent être utilisées.

### Étape 4 : Gérer la création d'utilisateurs

<Tabs groupId="sync">
<TabItem value="Gestion automatique utilisateurs" label="Gestion automatique">

Si vous activez l'import automatique des utilisateurs, les utilisateurs qui se connecteront à Centreon pour la première fois
seront créés dans la configuration Centreon. (Activer l'option n'importe pas automatiquement tous les utilisateurs de votre infrastructure.)

- **Activer l'importation automatique** : active/désactive l'import automatique des utilisateurs. Si l'import automatique des utilisateurs
  est désactivé, vous devrez [créer chaque utilisateur manuellement](../monitoring/basic-objects/contacts-create.md) avant que celui-ci ne se connecte.
- **Modèle de contact** : sélectionnez un [modèle de contact](../monitoring/basic-objects/contacts-templates.md) qui sera appliqué aux
  nouveaux utilisateurs importés.
  Cela permet notamment de gérer le paramétrage par défaut des [notifications](../alerts-notifications/notif-configuration.md).
- **Attribut de l'email** : définit quelle variable renvoyée par les points d'entrée **Point d'entrée de jeton d'introspection** ou
  **Point d'entrée d'information utilisateur** doit être utilisée pour récupérer l'adresse email de l'utilisateur.
- **Attribut du nom complet** : définit quelle variable renvoyée par les points d'entrée **Point d'entrée de jeton d'introspection**
  ou **Point d'entrée d'information utilisateur** doit être utilisée pour récupérer le nom complet de l'utilisateur.

</TabItem>
<TabItem value="Gestion manuelle utilisateurs" label="Gestion manuelle">

À la page **Configuration > Utilisateurs > Contacts/Utilisateurs**, [créez les utilisateurs](../monitoring/basic-objects/contacts-create.md)
qui se connecteront à Centreon avec OpenID Connect.

</TabItem>
</Tabs>

### Étape 5 : Gérer les autorisations

<Tabs groupId="sync">
<TabItem value="Role automatic management" label="Gestion automatique">

Si vous activez l'option **Enable automatic management**, les utilisateurs qui se connectent à Centreon se verront
automatiquement accorder des [droits](../administration/access-control-lists.md), car ils seront liés à des
[groupes d'accès](../administration/access-control-lists.md#créer-un-groupe-daccès) selon les règles que vous avez définies.

- Définissez quel attribut et quel point d'entrée seront utilisés pour récupérer des valeurs afin d'appliquer des relations
  avec des groupes d'accès.
- **Apply only first role**: si plusieurs rôles sont trouvés pour un utilisateur spécifique dans les informations du fournisseur
  d'identité, alors seul le premier rôle sera appliqué. Si l'option est désactivée, tous les rôles seront appliqués.
- Faites correspondre un attribut extrait du fournisseur d'identité avec le groupe d'accès auquel vous souhaitez que l'utilisateur
  appartienne.

Par exemple, le point d'entrée **Introspection endpoint** vous donne la réponse suivante et l'option **Apply only first role**
est activée. Le chemin de l'attribut **Roles attribute path** sera **realm_access.roles** et l'option
**Define the relation between roles and ACL access groups** établira une relation entre la valeur **centreon-editor**
et un groupe d'accès défini dans Centreon :

```json
{
	...
	"realm_access": {
		"roles": ["centreon-editor", "centreon-admin", "user"]
	},
	...
}
```

> A chaque connexion de l'utilisateur, la gestion des autorisations est réinitialisée pour prendre en compte toute nouvelle
> information du fournisseur d'identité.

</TabItem>
<TabItem value="Role manual management" label="Gestion manuelle">

Si vous désactivez l'option **Enable automatic management**, vosu devez créer des [contrôles d'accès](../administration/access-control-lists.md)
manuellement et lier vos utilisateur à ces [groupes](../administration/access-control-lists.md#créer-un-groupe-daccès).

</TabItem>
</Tabs>

### Étape 6 : Gérer les groupes de contacts

<Tabs groupId="sync">
<TabItem value="Groups automatic management" label="Gestion automatique">

Si vous activez l'option **Enable automatic management**, les utilisateurs qui se connectent à Centreon seront rattachés
aux [groupes de contacts](../monitoring/basic-objects/contacts-groups.md#créer-un-groupe-de-contacts) que vous avez définis.

- Définissez quel attribut et quel point d'entrée seront utilisés pour récupérer des valeurs afin de créer des relations avec
  des groupes d'accès.
- Faites correspondre les attributs extraits du fournisseur d'identité avec les groupes de contacts auxquels vous souhaitez
  que l'utilisateur appartienne.

Par exemple, le point d'entrée **Introspection endpoint** vous donne la réponse suivante. Le chemin de l'attribut
**Groups attribute path** sera **groups** et l'option **Define the relation between roles and ACL access groups**
établira une relation entre la valeur **Linux** et un groupe d'accès défini dans Centreon :

```json
{
	...
	"groups": ["Windows", "Linux", "DBA"],
	...
}
```

> A chaque connexion de l'utilisateur, la gestion des groupes est réinitialisée pour prendre en compte toute nouvelle
> information du fournisseur d'identité.

</TabItem>
<TabItem value="Groups manual management" label="Gestion manuelle">

Si vous désactivez l'otion **Enable automatic management**, vous devrez gérer manuellement les relations entre un contact et des [groupes de contacts](../monitoring/basic-objects/contacts-groups.md#créer-un-groupe-de-contacts).

</TabItem>
</Tabs>

### Étape 7 : Configurer le fournisseur d'identité

Configurer votre fournisseur d'identité pour ajouter l'application Centreon à utiliser le protocole OpenID Connect pour
authentifier vos utilisateur, et pour autoriser `l'uri de redirection` suivante une fois vos utilisateurs authentifiés :

```shell
{protocol}://{server}:{port}/centreon/authentication/providers/configurations/openid
```

> Remplacez `{protocol}`, `{server}` et `{port}` par l'URI permettant d'accéder à votre serveur Centreon.
> Par exemple : `https://centreon.domain.net/centreon/authentication/providers/configurations/openid`

### Exemples de configuration

<Tabs groupId="sync">
<TabItem value="Microsoft Azure AD" label="Microsoft Azure AD">

Voici un exemple de configuration pour Microsoft Azure Active Directory:

| Champs                       | Valeurs                                                   |
|------------------------------|-----------------------------------------------------------|
| Base Url                     | https://login.microsoftonline.com/${tenantId}/oauth2/v2.0 |
| Authorization Endpoint       | /authorize                                                |
| Token Endpoint               | /token                                                    |
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
| Client ID                    | ${clientId}                                                             |
| Client Secret                | ${clientSecret}                                                         |

> Remplacez `${theIdPdomain}`, `${clientId}` et `${clientSecret}` par vos propres valeurs.

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
