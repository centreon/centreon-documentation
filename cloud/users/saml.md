---
id: cloud-saml
title: Configuring a connection with SAML
---

SAML (Security Assertion Markup Language) lets you set up seamless and secure single sign-on (SSO) for your organization. This means you can link your organization in [Centreon Hub](centreon-hub.md) to an identity provider.

## Prerequisites

In your identity provider:

1. Create an application.
2. Create application roles, which will be mapped to [Centreon Hub roles: **User**, **Editor** and **Administrator**](users.md#user-roles).
3. You must then assign users to the application and assign them each a role.

If you already have users in Centreon Hub, the user's role in the IdP will overwrite their current role in Centreon Hub, except for **Administrators** in Centreon Hub, whose role does not change. This is not to lose access to your organization by mistake.

## Step 1: Access the configuration page

> You must have the **Administrator** role in Centreon Hub to be able to configure SAML for an organization.

1. Log in to Centreon Hub.
2. If you belong to several organizations, select the one you want from the list at the top left of the page.
3. Go to **Organization > Authentication**.

## Step 2: Configure the connection to your identity provider

Before you activate SAML authentication, you need to fill in all necessary parameters, then [test your connection](#step-3-test-the-connection-and-activate-saml). Activating SAML will only be possible if your configuration is valid.

1. Fill in the **Domain name** for your company: only users whose email match this domain name will be able to connect using the identity provider.

2. Copy the contents of the 2 following fields from the **Identity provider** section of the Centreon Hub page to the corresponding fields in your identity provider:

   * **Identifier (Entity ID)**: enter the URL representing the unique name for the SAML entity.
   * **Reply URL (Assertion consumer service URL)**: for example, `https:/<Centreon_IP_address>/centreon/api/latest/saml/acs`.

   Once you have filled in these fields in the identity provider, the identity provider gives you the values to be copied below (all of them appear in the application's metadata).
  
3. Fill in the following fields:

   * **Sign in URL**: define the identity provider's login URL to identify users (mandatory).
   * **Certificate**: copy and paste the x509 certificate of the identity provider (mandatory).
   * **User ID (email) attribute for Centreon user**: define which of the variables returned by the identity provider must be used to authenticate users. It should be prefixed by the namespace URL, which you can find in your identity provider's application configuration. For example, **http://schemas.xmlsoap.org/ws/2005/05/identity/claims/email**. (Mandatory.)
   * **Sign out URL**: when users log out from Centreon, they will be redirected to this URL. This means you can make them log out from the identity provider too.

4. **Role mapping**:

   * **Role attribute path**: Retrieve this value from your application's metadata. Example: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role`.
   * Create the mappings you want. There are [3 roles in Centreon Hub (**User**, **Editor** and **Administrator**)](users.md#user-roles) which can be mapped to roles you have created in your identity provider (a Centreon Hub role can be mapped to one, several, or none of your IdP roles). In the **Attribute value** field, enter the exact value that you have defined for each role in your identity provider (the value, not the display name). Users who log in to Centreon will be automatically granted rights on menus and actions, as they will be given a role according to the rules you have defined. Note that if multiple roles are assigned to the same user, the user will have the rights of the highest priority role assigned to them.

   > It is possible not to define a role mapping. This is for test purposes only. In this case, users will need to be invited manually in Centreon Hub before they can join your organization using SSO.

5. **Group mapping** (optional):

   * **Group attribute path**: Retrieve this value from your application's metadata.
   * Using the lists below, match the correct attribute values with [Centreon Hub user groups](user_groups.md) you want. This will determine [which rights users will have on resources](../administration/resource_access.md).

## Step 3: Test the connection and activate SAML

To avoid any configuration errors, you must test the connection before you can activate it. You will be redirected to your IdP: enter valid credentials to perform the test. During the test, role mapping is also verified, but if it fails, the connection can still be activated.

1. In the **Activation** section, click **Test**. A window opens, with the results of the test.
2. Once the test has succeeded, activate the **Enable Saml v2 Connection** option. Your users can now log in via their identity provider.
