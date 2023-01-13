---
id: ciam
title: Using Centreon CIAM
---

## What is Centreon CIAM?

Centreon CIAM (Customer Identity and Access Management) is a module that:

- allows you to access all your Centreon applications
- allows your administrator to manage your organizations, manage all Centreon user accounts for an organization, and manage the way users will log in to Centreon.

An organization covers a scope of equipments you want to monitor. For instance, you may want to have an organization called Europe and an organisation called Asia. Organizations are independent from each other. According to your needs, you may have one or several organizations. Each organization has its own applications, including its own Centreon Cloud platform.

## I am an administrator

### Creating your account

Click in the email you have received from Centreon to create your account.

### Creating an organization

1. Log in to Centreon CIAM:
   - When you first log in to Centreon CIAM using the URL provided by the Centreon support team, the default screen will have a **Create your organization** button.
   - If you already have created an organization and want to create a new one, in the top banner, in the **Select organization** list, click **Create an organization**.
2. Fill in the fields:
   - **Domain name**: this name will determine the URL used to access all applications (e.g. the Centreon Cloud platform) for this organization. The name can contain alphanumeric characters (lowercase letters), dashes and underscores. It must contain at least 3 characters. Example: if you enter **my-organization**, the URL of your Centreon Cloud platform will be **my-organization.centreon.cloud**.
   - **Display name**. This is the name your organization will have in the CIAM interface.
3. Click **Create**. The new organization appears in the **Select organization** list in the top banner.
4. Send your domain name to the Centreon support team. They will create a license for your organization and will build your Centreon Cloud platform. You can then invite users into your organization.

### Inviting users into the organisation

1. Go to **Users**, and then click **Invite user**.
2. Fill in the email(s) and select the role the users will have in the CIAM and in Centreon Cloud (see [User roles](../users#user-roles)).
3. Click **Invite**. They will receive an email with the following subject line: **You've been invited to join `<organization>`'s Centreon account**. Your email address will be visible in this email.

## I am a Centreon user

Your administrator has invited you to Centreon CIAM: you have received an email inviting you to the platform.

1. In the email, click **Accept invitation**.
2. Enter your password, then click **Continue**. The Centreon CIAM site opens.
