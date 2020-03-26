---
id: centreon-ui
title: Centreon UI
---

This part covers the configuration of the general options of the Centreon web
interface.

Go to **Administration > Parameters > Centreon UI**.

![image](assets/administrate/parameters-centreon-ui.png)

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

The proxy configuration is mandatory to use Centreon IMP offer.

Define needed information:

- **Proxy URL**
- **Proxy port**
- **Proxy user**
- **Proxy password**

Once you defined settings, test your configuration by clicking on the **Text
Proxy Configuration** button.

## Autologin

- **Enable Autologin** box authorizes the users to log into the web interface
via the autologin mechanism
- **Display Autologin shortcut** box serves to display the connection
short-cut at the top right
- **Enable SSO authentication** box enables SSO authentication

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

## Keycloak SSO

To use Keycloak SSO login, you need an external [Keycloak
server](https://www.keycloak.org/docs/latest/getting_started/index.html)

- **Enable Keycloak authentication** allows to enable or disable Keycloak
authentication.
- **Keycloak mode** field indicates if the authentication should take place only by
Keycloak or using local authentication as well (Mixed). The mixed mode requires
trusted client addresses.
- **Keycloak trusted client addresses** field indicates which are the IP/DNS of the
trusted clients (corresponding to the reverse proxy) for Keycloak. The trusted
clients are separated by comas.
- **Keycloak blacklist client addresses** field indicates which are the IP/DNS
rejected.
- **Keycloak Server Url** field defined the Keycloack server URL (with /auth).
- **Keycloak Redirect Url** field defined the Keycloack redirect URL (Centreon
server).
- **Keycloak Client Realm** field defined the Keycloack realm name.
- **Keycloak Client ID** field defined the Keycloack client ID.
- **Keycloak Client Secret** field defined the Keycloack client secret.

For more information, please refer to standard Keycloak documentation.
