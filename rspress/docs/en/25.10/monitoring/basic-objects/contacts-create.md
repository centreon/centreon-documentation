---
id: contacts-create
title: Creating contacts/users manually
---

To create a user, go to **Configuration > Users > Contacts/Users**, then click **Add**.

![image](../../assets/configuration/06useradd.png)

To display the matrix of notifications for a user, click **View contact notifications** next to the **Add** menu.

## General information

* The **Alias/Login** field defines the login to access the web interface.
* The **Full Name** field contains the last name and first name of the user.
* The **Email** and **Pager** fields contain the e-mail address and the telephone number of the user, respectively (in
  case of a notification by SMS or call, for instance).
* The **Contact template used** field allows us to link the contact to a contact template.
* The **Linked to Contact Groups** list associates the contact with one or more groups of contacts.
* The **Enable Notifications** field allows us to enable the sending of notifications to the user.
* The **Host / Service Notification Options** field is used to define the statuses to which notifications are sent.
* The **Host / Service Notification Period** field is used to choose the time period in which notifications are sent.
* The **Host / Service Notification Command** field is used to choose the notification command to a host or a service.

## Centreon authentication

* The **Reach Centreon Front-end** field is used to authorize the user to access the Centreon web interface.
* The **Your current password** field is required when you (the currently logged-in user) need to change another user's password. You must verify your identity by entering your own password.
  > You can only change another user's password if you are logged in using local authentication, not via an identity provider (for security reasons).
* The **Password** and **Confirm Password** fields contain the user password.
  > To change a local user's password, you must also enter your **Current password**. If you are logged in using an SSO connection, this field is not visible. This information is not required when creating a new user.
* The **Default Language** field is used to define the language of the Centreon interface for this user.
* The **Admin** field defines whether or not this user is the administrator of the monitoring platform.
* The **Autologin key** is used to define a connection key for the user. The user will no longer need to enter his / her
  login and password, but will use this key to log in directly. For security reasons, this feature is not available to LDAP users. Connection syntax:

```text
http://[IP_DU_SERVER_CENTRAL]/centreon/main.php?autologin=1&useralias=[login_user]&token=[value_autologin]
```

> The Possibility of automatic connection (auto login) should be enabled in the menu: **Administration \> Options**.

* The **Authentication Source** field specifies if the connection information comes from an LDAP directory or information stored locally on the server.
* The next 3 fields are for authorizing users to perform calls to our [API v1](../../api/rest-api-v1.md#api-calls) and [API v2](https://docs-api.centreon.com/api/centreon-web/25.10/) (note: our API documentation is written for developers familiar with HTTP requests and JSON).
  - The **Configuration API** field only applies to the v2 API as only administrators can call this API using v1.
  - The [**Realtime API**](../../api/rest-api-v1.md#realtime-information) can be called by a non-administrator user in both versions as long as this field is checked.
  - Administrators are able to call both the **Configuration API** and the [**Realtime API**](../../api/rest-api-v1.md#realtime-information) even if these fields are not checked. This is true for both v1 and v2. They are also the only ones allowed to use [**CLAPI**](../../api/clapi.md) while others can only use the Rest API.
* The **Access list groups** field is used to define an access group for a user (group uses for [access control (ACL)](../../administration/access-control-lists.md)).

> An Administrative user is never concerned by access control, even if linked to an access group.

## Additional information

* The **Address** fields allow us to specify the data of additional contacts (other e-mails, other telephone numbers, etc.).
* The **Status** and **Comment** fields are used to enable or disable the contact and to make comments on it.
