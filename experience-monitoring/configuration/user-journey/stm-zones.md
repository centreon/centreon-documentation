---
id: stm-zones
title: Monitoring non-public user journeys (closed beta)
description: Set up a private zone to monitor internal, non-public journeys
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A private Synthetic Monitoring Zone (STM Zone) allows you to monitor your user journeys on internal domains or networks specific to your organization using a probe deployed inside your infrastructure. You can also use a probe to obtain personalized recommendations to optimize your website.

## Prerequisites

- A machine inside your infrastructure to host the probe. The machine must be able to access the application you will monitor.
- The Docker credentials provided by Centreon. The credentials are sent by Centreon using a secure Keeper link. Save these credentials in your own safe.
- A user journey configured on the internal application to monitor.
- Installing the [profiler](../../installation/servers/install-php-magento-orocommerce-profiler.md).

## Step 1: Create a new STM zone

1. From the **Global View**, open the site selector in the top-left corner and select your organization’s page.

![image](../../assets/configuration/user-journey/organization-page.png)

2. On your organization’s configuration page, click the **Synthetic Monitoring Zones** tab.

3. Click **+ New Synthetic Monitoring Zone**. Give the zone a meaningful name (e.g., Paris Office) then click **+ Create**.

Your new zone now appears in the list.

## Step 2: Associate a probe to the STM zone

1. Click **Associate a probe** to the right of your zone. A window opens with 2 Docker commands:

2. Use the first command to log into the Centreon Docker registry with [the credentials provided by Centreon](#prerequisites)

```shell
docker login docker.centreon.com/centreon-dem-beta
```

## Step 3: Create and launch the probe

<Tabs groupId="sync">
<TabItem value="STM probe">

When creating a probe, STM probes are the type selected by default. STM probes collect the usual performance metrics used by Experience Monitoring.

1. To create and launch the STM probe, execute the second command you obtained at [step 2](#step-2-associate-a-probe-to-the-stm-zone).

2. Refresh the page: once launched, the probe is automatically saved and appears to the right of the associated zone in the **Synthetic Monitoring Zones** list.

</TabItem>
<TabItem value="Recommendations probe">

Probes can also be created as recommendations probes. These run once a day to make personalized suggestions on how to optimize your website.

1. To create and launch the recommendations probe, click the **Recommendations** tab in the **Start the probe** section and execute the displayed command.

2. Refresh the page: once launched, the probe is automatically saved and appears to the right of the associated zone in the **Synthetic Monitoring Zones** list. Recommendation probes have a binoculars icon to distinguish them from STM probes.

Note that it takes up to 24 hours for the probe to gather enough data to start sending recommendations. 

</TabItem>
</Tabs>

## Step 4: Associate the zone with a user journey

1. Go to **Configuration** and select the **User Journeys** tab. 

2. On the journey you want to run from your private zone, click on the three dots on the right, then click on **Advanced**.

3. In the **Advanced configuration** window, scroll down to the **Synthetic Monitoring Zones** section. Your private zone appears under **Private Zones**. Select it and click **Save**.

After a short while, the probe will have executed its first check and your internal journey monitoring will be operational. You can analyze it just like a regular [user journey](../../how-to-articles/user-journey-screen.md).
