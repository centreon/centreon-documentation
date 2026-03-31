---
id: stm-zones
title: Private Synthetic Monitoring Zones
---

A private Synthetic Monitoring Zone allows you to monitor your user journeys within an internal infrastructure, using a probe deployed in your environment.
This is particularly useful for testing journeys on internal domains or networks specific to your organization that are not accessible to the public.


## Step 1: Open the organization configuration

From the Global View, open the site selector at the top left and open your organization’s page in a new tab.

Keep both tabs open as you’ll need the site tab later to retrieve your token.

![image](../../assets/configuration/user-journey/organization-page.png)

## Step 2: Access the STM Zones tab

On your organization’s configuration page, click the “Synthetic Monitoring Zones” tab.


## Step 3: Create a new STM Zone

Click **+ New Synthetic Monitoring Zone**, give it a meaningful name (e.g., Paris Office), then click **+ Create**.
Your new zone now appears in the list.


## Step 4: Associate a sensor

Click **Associate a sensor** using the button in the top-right corner or directly on the line in your zone.

A modal window opens with two Docker commands:

the first one is used to log in to the Centreon registry (see Step 5)

the second one is used to launch the sensor (see Step 6)


## Step 5: Obtain the Docker credentials from Keeper

The sensor image is stored in a private registry. The credentials must be shared via a secure Keeper link.

Contact Centreon to receive the Keeper link. Save the credentials in your own vault.

Once you have obtained the credentials, log in to the Docker registry:

'''shell
docker login docker.centreon.com/centreon-dem-beta
Username: <entrez votre nom utilisateur>
Password: <entrez votre mot de passe>
'''


## Step 6: Launching the survey

Once launched, the probe is automatically saved and appears under your zone in the STM Zones list.


## Step 7: Associate the zone with a user journey

Go to the User Journeys tab on your site. On the journey you want to run from your private zone, click on the three dots on the right, then click on **Advanced**.

In the Advanced Edit window, scroll down to the Synthetic Monitoring Zones section. Your private zone appears under Private Zones. Select it.
Click Save
