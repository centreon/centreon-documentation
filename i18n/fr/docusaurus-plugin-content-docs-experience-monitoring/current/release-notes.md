---
id: release-notes
description: Journal des évolutions fonctionnelles et techniques d'Experience Monitoring
title: Centreon Experience Monitoring - notes de release
---

## September 1st, 2026

**Internal Probes — General Availability**

**Secure Token Management**

**Authentication / Users and Roles Delegated to Centreon Hub**

## June 22nd, 2026

**Facilitated diagnostics: probe log download**

When a user journey fails, you can now download the probe logs directly from the incident view. A valuable time-saver for understanding what happened.

**Security improvements**

The platform has been updated to the latest versions of Ruby and Rails. This major update improves performance, security and the long-term maintainability of the application. As part of this update, a new signing key is being introduced: all users will be logged out once upon deployment and will need to log back in. "Remember me" sessions are also reset.

## February 2nd, 2026

This release brings a set of improvements to **User Journeys** and **Dashboards**, designed to make scenarios clearer and dashboards more expressive.

User journeys now include a new [**Run a script**](/configuration/user-journey/create-a-scenario.md) action, enabling you to execute JavaScript directly in the browser for more advanced use cases. The journey overview has also been refined, with Hero Time now set as the default metric  (instead of Speed Index), providing a clearer view of performance across steps.

On the dashboard side, two new widgets are available. You can now pin a website screenshot as a widget directly from the Global view, and track journey health over time with the new **User Journey Status** widget.
