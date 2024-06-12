---
id: known-issues
title: Centreon Cloud known issues
---

The following paragraphs detail issues which are known to Centreon and will be fixed in coming releases.

## Resource Access Management

* You cannot scroll in the dropdown lists in the Resource Access Management creation/edition form.

   **Workaround**: Refine the search until the number of results is less than ten.

* The click area for “All" boxes (All contacts, All contact groups, All hosts...) is too wide: it is easy to select "All" by mistake.

* It is not possible to select a Resource Access Management rule in the Business View configuration form.

* Resource Access Management rules can be defined down to host level, not down to service level.

* Changes are not displayed immediately when editing a Resource Access Management rule.

   **Workaround**: Refresh the page to display the correct parameters.

## Notifications

* Changes are not displayed immediately when editing a notification rule.

   **Workaround**: Refresh the page to display the correct parameters.

* In the notification rule listing, rules cannot be sorted by name.

* When editing a notification rule, it is not possible to remove resources or contacts individually.

   **Workaround**: Delete and recreate the rule.

* It is not yet possible to define a time period for notifications.

## Configuration

* It is not possible yet to create and manage groups of users.

   > Default user groups should not be used as they will soon be replaced by custom groups defined by administrators.

* Users cannot yet configure Stream Connectors themselves.

   **Workaround**: Centreon can configure Stream Connectors for you. Please contact your CSM.

* It is possible to create two services with the same name on a host.

* Deploying a service does not work if the template of an existing host is changed.

* It is not possible yet to define a default poller. When you create a host, make sure you define the correct poller to monitor it instead of the central server.

* Service accounts (e.g. "broker service user") are listed in contact selection dropdown lists. Do not use them.

* In the Business Activities configuration form, the **Notification** section does not have any effect.

   **Workaround**: You can still configure notifications related to Business Activities using the standard notification mechanism.

## Log in

* A **Connect with OpenID** button might briefly show on the login screen. Wait for a few seconds before logging in.

* A contact cannot be removed from an organization (and its access to Centreon cannot be revoked) using the CIAM interface.

   **Workaround**: Centreon can remove a contact from an organization for you. Please [contact technical support](https://support.centreon.com).

## MAP

* The status of Business Activities may be desynchronized in maps.

* The default zoom factor and position cannot be saved.
