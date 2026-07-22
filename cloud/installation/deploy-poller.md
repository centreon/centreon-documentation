---
id: deploy-poller
title: Deploying a poller
description: Step-by-step procedure to install a poller on your infrastructure and export the configuration to activate it
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With Centreon Cloud, your SaaS platform is already ready to use. All you have to do is to install pollers in your infrastructure, and that is very easy: just execute a script and then export the configuration, and there you are!

Before deploying a poller, make sure the [prerequisites](prerequisites.md) for your host machine are met. Only users with the **Administrator** or **Editor** [roles](../users/users.md#user-roles) can access the poller installation command.

## Step 1: Running the poller installation script

1. Use SSH to connect to the server that will become a poller.
2. Disable SELinux (this is recommended to obtain a seamless installation. Advanced users can enable it depending on their SELinux expertise or security constraints, but should be attentive to the side-effects of this setup.)

   1. Edit the configuration file **/etc/sysconfig/selinux**.
   2. Set the value of SELINUX to disabled (**SELINUX=disabled**).
   3. Save the file and reboot the system to apply the change.

3. By default, the hostname of the machine will become the name of the poller. If you want to change the machine's hostname, use the following command: `hostnamectl set-hostname your-hostname`.

4. [In the user interface](../getting-started/interface.md#accessing-the-user-interface), click the arrow next to **Pollers** at the left of the header bar.

5. In the pop-up that appears, click **Copy install command**. The command is copied to your clipboard.

6. On the server that will become your poller, in your terminal, paste the install command and execute it (this should take about 10 minutes).

7. In the user interface, go to **Configuration > Pollers > Pollers**. The new poller appears in the list of pollers.
   * The address in the **IP Address** column is that of the poller as seen by the SaaS platform.
   * The poller is not running yet (**No** in the **Is running?** column).

## Step 2: Exporting the configuration and restarting the poller

Export the configuration for this poller:

1. In the user interface, go to **Configuration > Pollers > Pollers**, then select the poller you have just created.
2. Click **Export configuration**. A new page opens:
   * Check the first four boxes
   * Under **Restart Monitoring Engine**, select the **Restart** method.
3. Click **Export**. A log of the export is displayed. This should have no errors.
4. Go back to **Configuration > Pollers > Pollers**: the poller now has **Yes** under **Is running?**. Your poller is now ready to monitor resources.

## Reinstalling a poller

If, for some reason, you need to reinstall an existing poller, follow this procedure to avoid conflicts during registration:
1. Go to **Configuration > Pollers > Pollers**.
2. Delete the poller you want to reinstall.
3. Run the poller installation script: when prompted, select option 2, **Reinstall the poller from scratch**. You can also run the installation script with the **--reset** option:

   ```shell
   bash registerPoller.sh install -t <token> -s <site> -o <organization> --reset
   ```
4. [Deploy the configuration and restart the poller](#step-2-exporting-the-configuration-and-restarting-the-poller).

## Advanced deployment scenario: using a private repository

If you cannot connect to the Centreon public repository, you can disable automatic installation from this repository and manage package installation in another way.

1. Prepare the OS so that it can find the necessary packages using another channel. For your information, the necessary repositories can be found in the
[Centreon OnPrem documentation](/docs/installation/installation-of-a-central-server/using-packages#install-the-repositories).

2. Follow the procedure above (steps [1](#step-1-running-the-poller-installation-script) and
[2](#step-2-exporting-the-configuration-and-restarting-the-poller)): before running the installation command that you copied from the interface, edit it and add the `--private-repo` option after the `install` command.

<!--### List of packages installed by the deployment command

* Alma / RHEL / Oracle Linux:

```shell
centreon-poller perl-Mojolicious jq
```

* Debian:

```shell
centreon-poller libmojolicious-perl jq
```-->
