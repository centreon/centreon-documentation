---
id: release-notes
title: Centreon Experience Monitoring release notes
description: "New features and improvements in each Centreon Experience Monitoring release, such as token management, internal probes and user journey actions."
---

## November 9th, 2026

**Quanta becomes Centreon Experience Monitoring**

The product has a new name and now uses the Centreon visual identity. Your credentials, data, configurations and history are unchanged, and no action is required to keep using the service.

**Redesigned interface and emails**

The interface, login page, emails, alerts and reports have a new look. Interface text has been reviewed for clarity, and links now point to the Centreon documentation, support and The Watch community. The Slack app has also been updated with the new name, logo and notification labels.

**New application address**

The application is now available at [https://exp.mycentreon.com](https://exp.mycentreon.com). The former address, `https://app.quanta.io`, continues to work and will later redirect to the new one, on a date announced in advance.

**What to update on your side**

Update your bookmarks, and use the new address in your scripts and API integrations rather than relying on the redirection: some HTTP clients do not follow redirects, or drop authentication when redirected to another domain. If your network only allows specific domains, add `exp.mycentreon.com`, especially if you host [internal probes](configuration/user-journey/stm-zones.md). As email subjects have changed, check any email rules based on them.

## September 8th, 2026

**Redesigned token management**

Access tokens can now be created, tracked, and revoked from a single, centralized interface, providing a greater visibility while strengthening overall security. 

**Internal probes (STM zones) now available for all users**

Internal and intranet applications can now be monitored with the same level of detail as public-facing sites, using a probe deployed directly within your infrastructure.

## June 22nd, 2026

**Facilitated diagnostics: probe log download**

When a user journey fails, you can now download the probe logs directly from the incident view. A valuable time-saver for understanding what happened.

**Security improvements**

The platform has been updated to the latest versions of Ruby and Rails. This major update improves performance, security and the long-term maintainability of the application. As part of this update, a new signing key is being introduced: all users will be logged out once upon deployment and will need to log back in. "Remember me" sessions are also reset.

## February 2nd, 2026

This release brings a set of improvements to **User Journeys** and **Dashboards**, designed to make scenarios clearer and dashboards more expressive.

User journeys now include a new [**Run a script**](configuration/user-journey/create-a-scenario.md#step-or-action-configuration) action, enabling you to execute JavaScript directly in the browser for more advanced use cases. The journey overview has also been refined, with Hero Time now set as the default metric  (instead of Speed Index), providing a clearer view of performance across steps.

On the dashboard side, two new widgets are available. You can now pin a website screenshot as a widget directly from the Global view, and track journey health over time with the new **User Journey Status** widget.
