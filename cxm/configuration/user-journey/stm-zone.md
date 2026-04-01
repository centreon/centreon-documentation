---
id: stm-zones
title: Monitoring non-public user journeys
---

A private Synthetic Monitoring Zone (STM) allows you to monitor your user journeys on internal domains or networks specific to your organisation using a probe deployed inside your infrastructure.

## Step 1: Open the organization page

From the **Global View**, open the site selector at the top left and open your organization’s page.

![image](../../assets/configuration/user-journey/organization-page.png)


## Step 2: Access the STM Zones tab

On your organization’s configuration page, click the **Synthetic Monitoring Zones** tab.

## Step 3: Create a new STM zone

Click **+ New Synthetic Monitoring Zone**, give it a meaningful name (e.g., Paris Office), then click **+ Create**.
Your new zone now appears in the list.

## Step 4: Associate a probe

Click **Associate a probe** using the button in the top-right corner or directly on the line in your zone.

A window opens with two Docker commands:

the first one is used to log in to the Centreon registry (see [Step 5](#step-5-obtain-the-docker-credentials-from-keeper))

the second one is used to launch the probe (see [Step 6](#step-6-launching-the-probe))

## Step 5: Obtain the Docker credentials from Keeper

The probe image is stored in a private registry. The credentials must be shared via a secure Keeper link.

Contact Centreon to receive the Keeper link. Save the credentials in your own vault.

Once you have obtained the credentials, log in to the Docker registry:

'''shell
docker login docker.centreon.com/centreon-dem-beta
Username: <entrez votre nom utilisateur>
Password: <entrez votre mot de passe>
'''

## Step 6: Launching the probe

Once launched, the probe is automatically saved and appears in the STM Zones list.

## Step 7: Associate the zone with a user journey

Go to the User Journeys tab on your site. On the journey you want to run from your private zone, click on the three dots on the right, then click on **Advanced**.

In the Advanced Edit window, scroll down to the Synthetic Monitoring Zones section. Your private zone appears under Private Zones. Select it.
Click Save

## Troubleshooting

### This domain name is not allowed for your website

If you encounter this message when trying to set a navigation action to a link, it means the domain you are trying to navigate to has not been authorized by Centreon yet.

If you haven't done so yet, open a ticket with Centreon Support for your domain to be manually approved.
