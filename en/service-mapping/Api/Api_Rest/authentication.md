Authentication
==============

**Permissions**

Performing API calls as a specific Centreon user requires the necessary
permission. You must edit the user settings through the **Configuration
\> Users \> Contacts/Users** menu. First edit the user, and then on the
second tab, check the **Reach API** box.

**How to authenticate**

Using the POST request method and the URL below: :

    api.domain.tld/centreon/api/index.php?action=authenticate

Body form-data:

  ----------------- ------------------ ---------------------
  Parameter         Type               Value

  username          Text               The user name you use
                                       to log in to Centreon

  password          Text               Your Centreon
                                       password
  ----------------- ------------------ ---------------------

The response is a JSON flow returning the authentication token:

    {
    "authToken": "NTc1MDU3MGE3M2JiODIuMjA4OTA2OTc="
    }

This token will be used later on the other API actions.

::: {.note}
::: {.title}
Note
:::

The token is available for one hour and is refreshed after each request.
If no request is sent within one hour, you must authenticate again to
get a new token.
:::
