---
id: deploy-poller
title: Deploying a poller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With Centreon Cloud, your central server is already ready to use. All you have to do is to install pollers in your infrastructure, and that is very easy: just execute a script and then export the configuration, and there you are!

Before deploying a poller, make sure the [prerequisites](prerequisites.md) for your host machine are met.

## Step 1: Running the poller installation script

1. Use SSH to connect to the server that will become a poller.
2. Disable SELinux (this is recommended to obtain a seamless installation. Advanced users can enable it depending on their SELinux expertise or security constraints, but should be attentive to the side-effects of this setup.)

   1. Edit the configuration file **/etc/sysconfig/selinux**.
   2. Set the value of SELINUX to disabled (**SELINUX=disabled**).
   3. Save the file and reboot the system to apply the change.

3. [On your central server](../getting-started/interface.md#accessing-the-central-servers-interface), click the arrow next to **Pollers** at the left of the header bar.

4. In the pop-up that appears, click **Copy install command**. The command is copied to your clipboard. ## doesn't exist anywhere in the new centron setup. 

5. On the server that will become your poller, in your terminal, paste the install command and execute it (this should take about 10 minutes).

6. When this is finished, on your central server, go to **Configuration > Pollers > Pollers**. The new poller appears in the list of pollers.
   * By default, the name of the poller is its hostname (this may be shortened). Click the name to rename it.
   * The address in the **IP Address** column is that of the poller as seen by the central server.
   * The poller is not running yet (**No** in the **Is running?** column).

## Step 2: Exporting the configuration and restarting the poller

Export the configuration for this poller:

1. On the central server, go to **Configuration > Pollers > Pollers**, then select the poller you have just created.
2. Click **Export configuration**. A new page opens:
   * Check the first four boxes
   * Under **Restart Monitoring Engine**, select the **Restart** method.
3. Click **Export**. A log of the export is displayed. This should have no errors.
4. Go back to **Configuration > Pollers > Pollers**: the poller now has **Yes** under **Is running?**. Your poller is now ready to monitor resources.
