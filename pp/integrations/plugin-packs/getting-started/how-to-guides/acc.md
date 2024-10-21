---
id: additional-connector-configuration
title: Additional connector configurations
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

For some connectors, the credentials to access the monitored resource must be configured on the pollers that are going to do the monitoring. The **Additional connector configurations** menu allows you do to this through the Centreon interface rather than having to connect to your pollers manually. At the moment, only some VMWare connectors can be configured like this.

You can configure a connection to several vCenters in the same configuration, but you will have to create one host per vCenter. For each host, the macros will define which resource will be monitored.

## Creating an additional connector configuration

1. Go to **Configuration > Additional connector configurations**, then click **Add**.
2. In the window that appears, fill in the following fields:
   * **Name** and **Description** (the description will appear in the list of configurations).
   * **Type**: at the moment, only **VMWare 6/7** is available.
   * **Pollers**: select all pollers that will monitor this type of resources. (Here "poller" means the monitoring engine that is inside the central server, remote servers or pollers.)
   * In the **Parameters** section, enter the correct information for the VMWare infrastructure you want to monitor. The name of the vCenter is the FQDN of the vCenter server appliance.
3. Click **Save**. The new configuration appears in the list of configurations.
4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration) for all concerned pollers.
5. You can now create a host using a template provided by one of the VMWare monitoring connectors:
   * [VMware ESX](../../procedures/virtualization-vmware2-esx.md)
   * [VMware vCenter v6](../../procedures/virtualization-vmware2-vcenter-6.md)
   * [VMware vCenter](../../procedures/virtualization-vmware2-vcenter-generic.md)
   * [VMware VM](virtualization-vmware2-vm.md).
