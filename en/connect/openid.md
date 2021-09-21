---
id: openid
title: Configuring connection via OpenId Connect
---

Centreon is compatible with OAuth 2.0/OpenId Connect authentication.

Usage of Identity Providers (IdP) is available, such as Microsoft Azure AD, Okta, Keycloak, LemonLDAP::NG or other IdP
which are compatible with the Authorization Code Flow.

Authentication via OpenId Connect is configured on page **Administration > Parameters > Centreon UI**,
section **Authentication by OpenId Connect**.

- **Enable OpenId Connect authentication** allows to enable or disable OpenId Connect authentication.
- **Authentication mode** field indicates if the authentication should take place only by OpenId Connect or using local
  authentication as well (Mixed).
- **Trusted client addresses** field indicates which are the IP/DNS of the trusted clients (corresponding to the
  reverse proxy). The trusted clients are separated by comas.
- **Blacklist client addresses** field indicates which are the IP/DNS rejected.
- **Base Url** field defines the IdP base URL for OpenId Connect endpoints (mandatory).
- **Authorization Endpoint** field defines the authorization endpoint, for example `/authorize` (mandatory).
- **Token Endpoint** field defines the token endpoint, for example `/token`(mandatory).
- **Introspection Token Endpoint** field defines the introspection token endpoint, for example `/introspect` (mandatory).
- **User Information Endpoint** field defines the user information endpoint, for example `/userinfo`.
- **End Session Endpoint** field defines the logout endpoint, for example `/logout`.
- **Login claim value** field defines the value return form **Introspection Token Endpoint** or **User Information Endpoint**
  to authenticate the user. For exmaple `sub` or `email`.
- **Scope** field defines the scope of the IdP, for example `openid`. Separate scope by space.
- **Redirect Url** field defines the redirect URL after login to access to your Centreon server, for example
  `https://192.168.0.1/centreon/index.php`.
- **Client ID** field defines the Client ID.
- **Client Secret** field defines the Client secret.
- **Use Basic Auth for Token Endpoint Authentication** field force to use `Authorization: Basic` method.
- **Disable SSL verify peer** field allows to disable SSL peer validation, should only used for test.

![image](../assets/administration/openid-connect-configuration.png)

> Depending on the identity provider, it is necessary to enter several scopes in order to retrieve the claim which will
> identify the user. This is indicated in the provider's configuration documentation.

> It is possible to define a full URL for the endpoints in case the base of the URL is different from the others.

> It is possible not to specify the **Redirect Url** field. In this case, the Centreon server will send its own URL to
> the service provider.

> If you want to automatically import user after connection, you can configure an LDAP server and enable auto import.
> Be sure that the "Login attribute" from LDAP configuration will be identical to "Login claim value".

> You can enable **Authentication debug** through `Administration > Parameters > Debug` menu to understand
> authentication failures and improve your setup.

### Examples of configuration

<!--DOCUSAURUS_CODE_TABS-->
<!--Microsoft Azure AD-->
Here is an example configuration for Microsoft Azure Active Directory:

| Fields                       | Values                                                    |
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

> Please replace `${tenantId}`, `${ipCentreon}`, `${clientId}` and `${clientSecret}` with your own values.

<!--Okta-->
Here is an example configuration for Okta:

| Fields                       | Values                                   |
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

> Please replace `${theIdPdomain}`, `${ipCentreon}`, `${clientId}` and `${clientSecret}` with your own values.

<!--Keycloak-->
Here is an example configuration for Keycloak:

| Fields                       | Values                                                                  |
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

> Please replace `${theIdPdomain}`, `${ipCentreon}`, `${resource}` and `${secret}` with your own values.

<!--LemonLDAP::NG-->
Here is an example configuration for LemonLDAP::NG:

| Fields                       | Values                                   |
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

> Please replace `auth.example.com`, `${ipCentreon}`, `${clientId}` and `${clientSecret}` with your own values.

<!--Others-->
Most of the service providers have one presenting the configuration parameters configuration as defined by
[the protocol](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig).

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

Retrieve the following parameters to configure your Centreon:
- issuer (Base Url)
- authorization_endpoint
- token_endpoint
- userinfo_endpoint
- end_session_endpoint
- scopes_supported
- claims_supported (Login claim value)

<!--END_DOCUSAURUS_CODE_TABS-->
