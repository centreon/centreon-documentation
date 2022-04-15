---
id: loginpwd
title: Configuring a local authentication
---

Since Centreon 22.04, a **local password security policy** has been implemented.
This policy makes it possible to strengthen the security of local account passwords by forcing the user to enter a
complex password, to give passwords a lifespan and to block brute force attempts.

## Configure local password security policy

Go to **Administration > Authentication> Password Security Policy** page:

![image](../assets/administration/local-configuration.png)

### Password case policy

First select the **Minium password length** as well as **Choose letter cases** for new password definition.

### Password expiration policy

Then, configure expiration policy:
- **Password expires after**: Once the password expires, the user will be redirected to a
  [dedicated page](../getting-started/interface.md#reset-your-password-when-expired) to update their password.
- **Minimum time between password changes**: Delays between two changes of passwords.
- **Last 3 passwords can be reused**: This option allows the user not to reuse one of his 3 old passwords when renewing.
- **Excluded users**: This option makes it possible to exclude user accounts, in particular accounts accessing APIs
  from the password expiration policy.

### Password blocking policy

To block brute force type attacks, you can define the **Number of attempts before user is blocked** as well ass the
**Time that must pass before new connection is allowed**.

## Authorise users to access to Centreon

To authorize a [user](../monitoring/basic-objects/contacts) to access the Centreon web interface, go to the
**Configuration > Users > Contacts/Users** page and click on the user you want. 

On the **Centreon Authentication** tab, set **Reach Centreon Front-end** to **Yes**, then Fill in the **Password** and
**Confirm Password** fields. You can use the **Generate** button to generate a random string based on the
**local password security policy**:

![image](../assets/administration/user_reach_centreon_frontend.png)

Users can change their password by clicking on the profile icon in the top right corner of the page and then clicking **Edit profile**.
Moreover, the password expiration time is now displayed:

![image](../assets/administration/password_expiration.png)