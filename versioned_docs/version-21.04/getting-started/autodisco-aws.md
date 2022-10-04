---
id: autodisco-aws
title: Discover resources automatically
---

In this tutorial, we will use the [Auto Discovery module](../monitoring/discovery/hosts-discovery.md) to detect AWS EC2 instances and monitor them.

## Prerequisites

You must have:
- the credentials to the AWS group of instances you want to monitor (Name, AWS Access Key and AWS Secret Key)
- the region your AWS instances are in.

## Step 1: Installing the Amazon EC2 plugin

1. Make sure your commercial [license](../administration/licenses.md) or your free [IT-100](IT100.md) license is installed.

2. [Install](../monitoring/discovery/installation.md) the autodiscovery module.

3. Make the Plugin Packs available:

    - If you have an offline licence, in your central server's terminal, enter:
     
        ```shell
        yum install centreon-pack-*
        ```

    - If you have an online license, the Plugin Packs are already available in the interface.

4. To install the Amazon EC2 Plugin Pack, go to **Configuration > Plugin Packs**.

5. In the **Keyword** field, type **Amazon EC2** and then click **Search**.

6. Click on the `+` sign in the top right corner of the Plugin Pack. The Plugin Pack now has a green border and a tick mark in the top right corner: configuration templates and discovery providers are now installed.

7. Follow [this procedure](/pp/integrations/plugin-packs/procedures/cloud-aws-ec2) (sections [Plugin dependencies](/pp/integrations/plugin-packs/procedures/cloud-aws-ec2#plugin-dependencies) and [Setup](/pp/integrations/plugin-packs/procedures/cloud-aws-ec2#setup)) to finish installing the Plugin Pack. (You can also access the documentation for a Plugin Pack by clicking on the `i`.)

    ![image](../assets/getting-started/aws-doc.png)

## Step 2: Configure the discovery job

1. Go to **Configuration > Hosts > Discovery**, and then click **Add**.

2. Enter a name for your discovery job, and then select the **Amazon AWS EC2** provider. Click **Next**.

    ![image](../assets/getting-started/aws-provider.png)

3. If your infrastructure requires it, fill in the details for the proxy you want to use.

4. Click on the `+` sign to the right of the **Choose credentials** list. Fill in the Name, AWS Access Key and AWS Secret Key fields, then click on **Confirm**. Click **Next**.

5. Enter the region your EC2 instances are in (for example, **eu-north-1**). Click **Next**.

6. Edit or add [mappers](../monitoring/discovery/hosts-discovery.md#how-to-use-mappers):
    - Map `host.name` to the `discovery.results.name` attribute. The names of your hosts in Centreon will be the ones defined in this attribute (i.e. the hostname of the instance).
    - In our example, we will exclude the instances whose hostname contains "test".

    ![image](../assets/getting-started/aws-mapper.png)

    Click **Next**.

7. Select **Manual analysis**: we will have to add the hosts to the list of monitored hosts manually. Click **Next**.

8. Select **Execute immediately** and then click **Finish**. The discovery job appears in the list of jobs.
    
    ![image](../assets/getting-started/aws-listofjobs.png)

## Step 3: Saving the hosts and monitoring them

1. After a few seconds, refresh the page. There should be a green tick mark in the **Status** column.

    ![image](../assets/getting-started/aws-success.png)

2. Hover over the job that has just ended and then click **Display the job result** (the arrow icon). A list of hosts appears.

    ![image](../assets/getting-started/aws-results.png)

3. Select the hosts you want to add to the list of monitored hosts, and then click **Save**. ![image](../assets/getting-started/aws-save.png)

4. Go to **Configuration > Hosts > Hosts** and check that the hosts you selected at the previous step appear in the list. The hosts are added to the lists of hosts but they are not monitored yet.

5. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md). The hosts appear in the **Resources Status** page: they are monitored.

