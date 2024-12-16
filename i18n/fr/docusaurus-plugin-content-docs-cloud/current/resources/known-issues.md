---
id: known-issues
title: Problèmes connus sur Centreon Cloud
---

Les paragraphes ci-après détaillent les problèmes connus de Centreon. Ceux-ci seront corrigés dans une prochaine release. 

## Resource Access Management

* The click area for “All" boxes (**All contacts**, **All contact groups**, **All hosts**...) is too wide: it is easy to select "All" by mistake.

* It is not possible to select a Resource Access Management rule in the Business View configuration form.

   **Workaround**: When you create a new Business View, you need to go to the **Resource Access Management** menu to add the Business View to a rule.

* To grant access to services independently of their host, you can define rules only at services group or service category level.

## Notifications

* Time period exceptions are not considered for notifications.

* In the notification rule listing, rules cannot be sorted by name.

## Configuration

* Incremental mass changes are not possible for hosts and services.

* Users cannot yet configure Stream Connectors themselves.

   **Workaround**: Centreon can configure Stream Connectors for you. Please contact your CSM.

* It is possible to create two services with the same name on a host.

* Deploying a service does not work if the template of an existing host is changed. (**More actions > Deploy services** command.)

* It is not possible yet to define a default poller. When you create a host, make sure you define the correct poller to monitor it instead of the central server.

* Service accounts (e.g. **broker service user**) are listed in contact selection dropdown lists. Do not use them.

* In the Business Activities configuration form, the **Notification** section does not have any effect.

   **Workaround**: You can still configure notifications related to Business Activities using the standard notification mechanism.

## Log in

* A **Connect with OpenID** button might briefly show on the login screen. Wait for a few seconds before logging in.

