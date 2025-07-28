---
id: cloud-saml
title: Configuring a connection with SAML
---

You can link your organization in the [CIAM](ciam.md) to an identity provider, so that your users do not need to log in every time they want to use Centreon Cloud.

## Prerequisites

In your identity provider, you must:

1. Create an application.
2. Create 3 application roles, which will be mapped respectively to [the corresponding CIAM role: **Viewer**, **Editor** and **Administrator**](../users/users.md#user-roles).
3. Assign users to the application and assign them each a role.

## Step 1: Access the configuration page

1. Log in to the CIAM.
2. Select your organization from the list at the top left of the page.
3. Go to **Organization > Authentication**.

## Step 2: Configure the connection to your identity provider

Before you activate SAML authentication, you need to fill in all necessary parameters, then [test your connection. Activating SAML](#step-3-test-the-connection-and-activate-saml) will only be possible if your configuration is valid.

1. Fill in the **Domain name** for your company: only users whose email match this domain name will be able to connect using the identity provider.

2. Copy the contents of the 2 following fields from the **Identity provider** section of the CIAM page to the corresponding fields in your identity provider:

   * **Identifier (Entity ID)**: enter the URL representing the unique name for the SAML entity.
   * **Reply URL (Assertion consumer service URL)**: for example, `https:/<Centreon_IP_address>/centreon/api/latest/saml/acs`.

   Once you have filled in these fields in the identity provider, the identity provider gives you the values to be copied below (all of them appear in the application's metadata).
  
3. Fill in the following fields:

   * **Sign in URL**: define the identity provider's login URL to identify users (mandatory).
   * **Certificate**: copy and paste the x509 certificate of the identity provider (mandatory).
   * **User ID (email) attribute for Centreon user**: define which of the variables returned by the identity provider must be used to authenticate users. For example, **email**. (Mandatory.)
   * **Sign out URL**: when users log out from Centreon, they will be redirected to this URL. This means you can make them log out from the identity provider too.

4. **Role mapping**:

   * **Role attribute path**: Retrieve this value from your application's metadata. Example: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role`.
   * Create 3 mappings, one for [each role in the CIAM (**Viewer**, **Editor** and **Administrator**)](../users.md#user-roles), that will match each application role you have created in your identity provider. In the **Attribute value** field, enter the exact value that you have defined for each role in your identity provider (the value, not the display name). Users who log in to Centreon will be automatically granted rights on menus and actions, as they will be given a role according to the rules you have defined.

5. **Group mapping**:

   * **Group attribute path**: Retrieve this value from your application's metadata.
   * Using the lists below, match the correct attribute values with the [CIAM user groups](users/user_groups.md) you want. This will determine [which rights users will have on resources](../administration/ram.md).

## Step 3: Test the connection and activate SAML

1. In the **Activation** section, click **Test**. A window opens, with the results of the test.
2. Once the test has succeeded, activate the **Enable Saml v2 Connection** option. Your users can now log in via their identity provider.
