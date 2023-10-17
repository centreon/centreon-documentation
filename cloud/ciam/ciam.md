---
id: ciam
title: Using Centreon CIAM
---

## What is Centreon CIAM?

Centreon CIAM (Customer Identity and Access Management) is a module that:

- allows you to access all your Centreon applications
- allows your administrator to manage your organizations, manage all Centreon user accounts for an organization, and manage the way users will log in to Centreon.

An organization covers a scope of resources you want to monitor. For instance, you may want to have an organization called Europe and an organization called Asia. Organizations are independent from each other. According to your needs, you may have one or several organizations. Each organization has its own applications, including its own Centreon Cloud platform.

## I am an administrator

### Creating your account

1. Go to the URL provided by the Centreon support team, and then click **Sign up**.
2. Enter your email address and password, and then click **Continue**. The screen prompts you to check your emails.
3. In the email you have received, click **Confirm my account**.
4. Click **Back to Centreon Customer identity and Access management Web**. You can now create an organization.

### Creating an organization

1. Log in to Centreon CIAM:
   - When you first log in to Centreon CIAM using the URL provided by the Centreon support team, the default screen will have a **Create your organization** button.
   - If you have already created an organization and want to create a new one, go to the top banner, and in the **Select organization** list, click **Create an organization**.
2. Fill in the fields:
   - **Domain name**: this name will determine the URL used to access all applications (e.g. the Centreon Cloud platform) for this organization. The name can contain alphanumeric characters (lowercase letters), dashes and underscores. It must contain at least three characters. Example: if you enter **my-organization**, the URL of your Centreon Cloud platform will be **my-organization.centreon.cloud**.
   - **Display name**. This is the name your organization will have in the CIAM interface.
3. Click **Create**. The new organization appears in the **Select organization** list in the top banner.
4. Send your domain name to the Centreon support team. They will create a license for your organization and  build your Centreon Cloud platform. You can then invite users into your organization.

### Inviting users into the organization

1. Go to **Users**, and then click **Invite user**.
2. Fill in the email(s) and select the role the users will have in the CIAM and in Centreon Cloud (see [User roles](../users#user-roles)).
3. Click **Invite**. They will receive an email with the following subject line: **You've been invited to join `<organization>`'s Centreon account**. Your email address will be visible in this email.

## I am a Centreon user

Your administrator has invited you to Centreon CIAM; you have received an email inviting you to the platform.

1. In the email, click **Accept invitation**.
2. Enter your password, and then click **Continue**. The Centreon CIAM site opens.
3. In the top right corner of the screen, click the profile icon, and then click **Edit profile**. You can then fill in your details.