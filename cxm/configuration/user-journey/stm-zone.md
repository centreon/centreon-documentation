---
id: stm-zones
title: Monitoring non-public user journeys (closed beta)
---

A private Synthetic Monitoring Zone (STM) allows you to monitor your user journeys on internal domains or networks specific to your organization using a probe deployed inside your infrastructure.

## Prerequisites:

- A machine inside your infrastructure to host the probe. The machine must be able to access the application you will monitor.
- The Docker credentials provided by Centreon (see [step 6](#step-6-create-and-launch-the-probe)). The credentials are sent by Centreon using a secure Keeper link. Save these credentials in your own safe.
- A **user journey** configured on the internal application to monitor.

## Step 1: Create a new STM zone

- From the **Global View**, open the site selector at the top left and open your organization’s page.

![image](../../assets/configuration/user-journey/organization-page.png)

- On your organization’s configuration page, click the **Synthetic Monitoring Zones** tab.

- Click **+ New Synthetic Monitoring Zone**. Give it a meaningful name (e.g., Paris Office) then click **+ Create**.
Your new zone now appears in the list.

## Step 2: Associate a probe to an STM

- Click **Associate a probe** to the right of your zone.

A window opens with 2 Docker commands:

- Use the first command to log into the Centreon Docker registry with [the credentials provided by Centreon](#prerequisites)

```shell
docker login docker.centreon.com/centreon-dem-beta
```

Enter your username and password when prompted.

- The second command is used to create and launch the probe (see [step 3](#step-3-create-and-launch-the-probe))

## Step 3: Create and launch the probe

To create and launch the probe, execute the second command you obtained at [step 2](#step-2-associate-a-probe-to-an-stm), if you had previously closed the window, you can simply open it again.

Refresh the page: once launched, the probe is automatically saved and appears to the right of the associated zone in the **Synthetic Monitoring Zones** liste.

## Step 4: Associate the zone with a user journey

1. Go to **Configuration** > **User Journeys** tab. On the journey you want to run from your private zone, click on the three dots on the right, then click on **Advanced**.

2. In the **Advanced configuration** window, scroll down to the **Synthetic Monitoring Zones** section. Your private zone appears under **Private Zones**. Select it.
Click **Save**

3. After a few seconds, the probe will have executed its first check and your internal journey monitoring will be operational! You can analyze it as you would for a regular [user journey](../../how-to-articles/user-journey-screen.md).

## Troubleshooting

### This domain name is not allowed for your website

If you encounter this message when trying to set a navigation action to a link, it means the domain you are trying to navigate to has not been authorized by Centreon yet.

If you haven't done so yet, open a ticket with Centreon Support for your domain to be manually approved.
