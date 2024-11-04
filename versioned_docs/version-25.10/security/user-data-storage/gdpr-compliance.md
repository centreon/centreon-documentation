---
id: gdpr-compliance
title: GDPR compliance
---

> This content is intended for users of Centreon in a Managed Service Provider (MSP) context.

## Storage of user identification information

For each customer of the provider, the Centreon central server stores the following user identification information in its database in order to access the 
monitoring server:

  - Name
  - Alias/Login, password
  - E-mail address
  - Phone number (optional, for associated notification)

The central server also stores additional parameters for each user:

  - Language, time zone
  - Notification settings
  - Access control groups (ACL)

Information management:
  - Each user can access their information in the **Administration > Settings > My Account** menu.
  - Users can be created, edited and deleted from the **Settings > Users** menu by a user who has the necessary rights.

## User action logs

If a user has the rights to configure the monitoring (defined in the user's ACLs), an entry in the logs stored in the database and linked to the 
user account will be created for each editing action:
  - Logs can be accessed via **Administration > Logs**, with the ability to filter by user.
  - These logs can only be deleted by accessing the SQL database and deleting any relevant records.

## HTTP transactions

Centreon recommends securing access to the monitoring platform by enabling HTTPS mode on the Apache server. An official signed certificate is 
required to ensure a minimum level of security.

## Authentication

In order to remain consistent with your security policy and to better manage the lifecycle and approvals of users, Centreon can
connect to an Active Directory or LDAP directory. Centreon recommends enabling this option and not using a local account.

## Backup

Centreon provides a Centreon data extraction module to allow the implementation of a backup policy of the monitoring data. Centreon strongly 
recommends activating this module and, especially, exporting the backup to another server.
