---
id: saml
title: Configuring connection via SAML
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Configure SAML authentication

Go to **Administration > Authentication > SAML Configuration**.

### Step 1: Enable authentication

Enable SAML authentication:

- **Enable SAMLv2 authentication**: enables or disables SAML authentication.
- **Authentication mode**: indicates if the authentication should be done using only SAML or using local
  authentication as well (**Mixed**). In mixed mode, users created manually in Centreon (and not identified via SAML)
  will also be able to log in.

> When setting the parameters, it is recommended to activate the "mixed" mode. This will allow you to retain access to
> the local `admin` account in the event of a misconfiguration.

### Step 2: Configure Identity Provider access credentials

Configure Identity Provider information:

- **Remote login URL**: defines the identity provider's login URL to identify users (mandatory).
- **Issuer (Entity ID) URL**: defines the URL representing the unique name for a SAML entity (mandatory).
- **Copy/paste x509 certificate**: add here the x509 certificate of the identity provider (mandatory).
- **User ID (login) attribute for Centreon user**: defines which of the variables returned by the identity provider
  must be used to authenticate users. For example, **email**. (mandatory).
- Logout from:
  * **Centreon UI Only**: users will only be logged out from Centreon.
  * **Both Identity Provider and Centreon UI**:  users will be logged out both from Centreon and the identity provider.
    > If you select **Both Identity Provider and Centreon UI**, you need to define a **Logout URL**.

### Step 3: Configure authentication conditions

You can define conditions according to which users will be allowed to log in or not, based on the data received by a
particular endpoint:
  - Activate **Enable conditions on identity provider**.
  - Define which attribute will be used to validate the conditions.
  - In **Define authorized conditions values**, define which will be the authorized values returned.
    If you enter several values, all will have to be met for the condition to be validated. All users that try to connect
    with another value will be unable to log in.

### Step 4: Manage user creation

<Tabs groupId="sync">
<TabItem value="Users automatic management" label="Automatic management">

If you turn on **Enable auto import**, users that log in to Centreon for the first time will be created in the Centreon
configuration. (Turning the option on does not import automatically all users in your infrastructure.)

- **Enable auto import**: enables or disables automatic users import.  If auto import is disabled, you will have to
  [create each user manually](../monitoring/basic-objects/contacts-create.md) before they can log in.
- **Contact template**: select a [contact template](../monitoring/basic-objects/contacts-templates.md) that will be
  applied to newly imported users. This allows in particular to manage the default configuration of the
  [notifications](../alerts-notifications/notif-configuration.md).
- **Email attribute path**: defines which of the variables returned by the identity provider must be used to get the
  user's email address.
- **Fullname attribute path**: defines which of the variables returned by the identity provider must be used to get the
  user's full name.

</TabItem>
<TabItem value="Users manual management" label="Manual management">

On page **Configuration > Users > Contacts/Users**, [create the users](../monitoring/basic-objects/contacts-create.md)
that will log on to Centreon using SAML.

</TabItem>
</Tabs>

### Step 5: Manage Authorizations

<Tabs groupId="sync">
<TabItem value="Role automatic management" label="Automatic management">

If you turn on **Enable automatic management**, users that log in to Centreon will be automatically
  [granted rights](../administration/access-control-lists.md), as they will be linked to
  [access groups](../administration/access-control-lists.md#creating-an-access-group) according to the rules you have defined.
  
- **Apply only first role**: If several roles are found for a specific user in the identity provider's information, then
  only the first role will be applied. If the option is turned off, all roles will be applied.
- Define which attribute from which endpoint will be used to retrieve values to create relationships with access groups.
- Match the attributes retrieved from the identity provider with the contact groups you want the user to belong to.

> Each time the user logs in, authorization management is reinitialized to take into account any new information from the
> identity provider.

</TabItem>
<TabItem value="Role manual management" label="Manual management">

If you turn off **Enable automatic management**, you have to [grant users rights](../administration/access-control-lists.md)
manually by linking them to [access groups](../administration/access-control-lists.md#creating-an-access-group).

</TabItem>
</Tabs>

### Step 6: Manage Contact groups

<Tabs groupId="sync">
<TabItem value="Groups automatic management" label="Automatic management">

If you turn on **Enable automatic management**, users that log in to Centreon will be attached to the
[contact groups](../monitoring/basic-objects/contacts-groups.md#contact-groups) you have defined.

- Define which attribute from the identity provider will be used to retrieve values to create relationships with access groups.
- Match the attributes retrieved from the identity provider with the contact groups you want the user to belong to.

> Each time the user logs in, groups management is reinitialized to take into account any new information from the identity provider.

</TabItem>
<TabItem value="Groups manual management" label="Manual management">

If you turn off **Enable automatic management**, you have to manage manually the relation between contact and
[contact groups](../monitoring/basic-objects/contacts-groups.md#contact-groups).

</TabItem>
</Tabs>

### Step 7: Configure your Identity Provider (IdP)

Configure your identity provider so that the Centreon application can use the SAML protocol to authenticate your
users. Here is an example of fields you may have to fill in:

| IdP option                           | Centreon value                                                 |
|--------------------------------------|----------------------------------------------------------------|
| Client ID                            | https:/\<Centreon_IP_address\>                                  |
| Assertion Consumer Service (ACS) URL | https:/\<Centreon_IP_address\>/centreon/api/latest/saml/acs     |
| Redirect Binding URLs for SLO        | https:/\<Centreon_IP_address\>/centreon/api/latest/saml/sls     |
