---
id: centreon-ui
title: Centreon UI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This part covers the configuration of the general options of the Centreon web
interface.

Go to `Administration > Parameters > Centreon UI`.

![image](../../assets/administration/parameters-centreon-ui.png)

## General options

- **Directory** indicates the directory where Centreon is installed
- **Centreon Web Directory** field indicates the web directory on which
Centreon is installed
- **Contacts & Contact groups method calculation** allows to define how
notification inheritance for hosts and services will be calculated.
- **Limit per page (default)** field defines the number of objects displayed
per **Configuration** page
- **Limit per page for Monitoring** field defines the number of objects
displayed per page in the **Monitoring** menu
- **Graph per page for Performances** field defines the maximum number of
displayed charts on **Performance** page
- **Number of elements loaded in select** field defines the maximum number in
select box
- **Sessions Expiration Time** field, expressed in minutes, indicates the
maximum session duration
- **Refresh Interval for statistics** field, expressed in seconds, indicates
the refreshment interval for the statistics page
- **Refresh Interval for monitoring** field, expressed in seconds, indicates
the refreshment interval for the objects on the monitoring page
- **Sort problems by** field is used to choose how to sort the incidents in
the **Monitoring** menu
- **Order sort problems** field indicates the display order for incidents, by
rising or falling order of gravity
- **Display downtime and acknowledgment on chart** allows to display downtime
and acknowledgment on chart
- **Display comment on chart** allows to display comment from service on chart
- **Timezone** field indicates timezone of your monitoring server.
- **Centreon Support Email** field indicates the e-mail address of the
**Customer’s service support centre** for the Centreon platform. This e-mail
address will be displayed at the bottom of the page on the link **Centreon
Support**
- **Send anonymous statistics** box defines wether or not the platform will
send anonymous information for the **Centreon Customer Experience Improvement**

## Proxy configuration

The proxy configuration is mandatory to use Centreon IT Edition.

![image](../../assets/administration/proxy_configuration.png)

Define needed information:

- **Proxy URL**
- **Proxy port**
- **Proxy user**
- **Proxy password**

Once you defined settings, test your configuration by clicking on the **Test Internet Connection** button.

To validate the configuration, click on the **Test Internet Connection** button. If the message
**Connection Successful** appears, your configuration is valid, otherwise modify your parameters.

## Autologin

- **Enable Autologin** box authorizes the users to log into the web interface
via the autologin mechanism
- **Display Autologin shortcut** box serves to display the connection
short-cut at the top right

## SSO

- **Enable SSO authentication** allows to enable or disable SSO authentication.
- **SSO mode** field indicates if the authentication should take place only by
SSO or using local authentication as well (Mixed). The mixed mode requires
trusted client addresses.
- **SSO trusted client addresses** field indicates which are the IP/DNS of the
trusted clients (corresponding to the reverse proxy) for SSO. The trusted
clients are separated by comas.
- **SSO blacklist client addresses** field indicates which are the IP/DNS
rejected.
- **SSO login header** field indicates the variables of the header that will
be used as a login / pseudo (i.e HTTP\_AUTH\_USER).
- **SSO pattern matching login** field indicates the pattern to search for in
the username.
- **SSO pattern replace login** field indicates the replace string.

> SSO feature is only to be enabled in a secured and dedicated environment for
> SSO. Direct access to Centreon UI from users have to be disabled.

## OpenId Connect

Centreon is compatible with OAuth 2.0/OpenId Connect authentication.

Usage of Identity Providers (IdP) is available, such as Microsoft Azure AD, Okta, Keycloak, LemonLDAP::NG or other IdP
which are compatible with the Authorization Code Flow.

Authentication via OpenId Connect is configured on the **Administration > Parameters > Centreon UI** page,
in the **Authentication by OpenId Connect** section.

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
- **Login claim value** field defines the value returned from **Introspection Token Endpoint** or **User Information Endpoint**
  to authenticate the user. For example `sub` or `email`.
- **Scope** field defines the scope of the IdP, for example `openid`. Separate scope by space.
- **Redirect Url** field defines the redirect URL after login to access your Centreon server, for example
  `https://192.168.0.1/centreon/index.php`.
- **Client ID** field defines the Client ID.
- **Client Secret** field defines the Client secret.
- **Use Basic Auth for Token Endpoint Authentication** field forces to use the `Authorization: Basic` method.
- **Disable SSL verify peer** field allows to disable SSL peer validation, should only be used for tests.

![image](../../assets/administration/openid-connect-configuration.png)

> Depending on the identity provider, it is necessary to enter several scopes in order to retrieve the claim which will
> identify the user. This is indicated in the provider's configuration documentation.

> It is possible to define a full URL for the endpoints in case the base of the URL is different from the others.

> It is possible not to specify the **Redirect Url** field. In this case, the Centreon server will send its own URL to
> the service provider.

> If you want to automatically import users after connection, you can configure an LDAP server and enable auto import.
> Be sure that the "Login attribute" from your LDAP configuration will be identical to the "Login claim value".

> You can enable **Authentication debug** through `Administration > Parameters > Debug` menu to understand
> authentication failures and improve your setup.

### Examples of configuration

<Tabs groupId="sync">
<TabItem value="Microsoft Azure AD" label="Microsoft Azure AD">

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

</TabItem>
<TabItem value="Okta" label="Okta">

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

</TabItem>
<TabItem value="Keycloak" label="Keycloak">

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

</TabItem>
<TabItem value="LemonLDAP::NG" label="LemonLDAP::NG">

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

</TabItem>
<TabItem value="Others" label="Others">

Most of the service providers have one URL presenting the configuration parameters configuration as defined by
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

</TabItem>
</Tabs>