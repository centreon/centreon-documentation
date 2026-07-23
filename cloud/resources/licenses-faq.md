---
id: licenses-faq
title: Licenses FAQ
description: Common issues with Centreon Cloud licenses - invalid licence, or maximum number of hosts reached
---

## License expired or host limit exceeded?

When a license expires or the number of hosts on your platform exceeds the license limit, certain modules will stop working correctly. This section explains how to identify the issue and what behavior to expect.

### Module behavior when the license is invalid

When your license is expired or when the host limit is exceeded, the following behaviors are observed in the interface:

| Module | Behavior |
|---|---|
| Service Mapping (BAM) | Displays the message: "Oops! License Invalid or Expired" |
| Graphical views (MAP) | Displays a blank page, or the message: "Map server license is not valid, please contact Centreon support service" |
| Monitoring Connectors (EPP) | Displays the message: "Your EPP License is not valid" |
| Auto Discovery (Host/Service Discovery) | Displays the message: "Oops! License Invalid or Expired" |

> When the license host limit is exceeded, it is still possible to add new hosts, but they will no longer be able to inherit the host templates provided by the monitoring connectors.

### Resolving the issue

To restore normal module behavior:

* If your license is expired: Contact the Centreon support team to renew your license.
* If the host limit is exceeded, either:
   * Delete or remove unused hosts (including disabled ones) to bring the total below the license limit.
   * Upgrade your license to a higher host limit by contacting your sales representative.

