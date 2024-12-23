---
id: platform
title: Getting your platform ready
---

## How do I get my monitoring platform up and running?

1. Create your organization in Centreon [CIAM](../ciam/ciam.md). Be careful when you choose a name, as this will be part of the URL of your Centreon platform.
2. Wait while your [platform](architecture.md) is being built.
3. Invite users into your organization. They will be able to log in to your Cloud platform.
4. [Install your pollers](../installation/deploy-poller.md) (following the [prerequisites](../installation/prerequisites.md)). They will monitor your resources.
5. On your pollers, install the [Monitoring Connectors](../monitoring/pluginpacks.md) you will need to monitor your resources.
