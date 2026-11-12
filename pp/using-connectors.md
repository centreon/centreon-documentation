---
id: using-connectors
title: Using monitoring connectors
description: "The steps to apply a Centreon Monitoring Connector template to a host and start monitoring it."
---

## Prerequisites

[Install the monitoring connector you need](./installing-connectors.md).

## To perform checks

1.  Create the host/the service: go to **Configuration > Hosts > Hosts** and then click **Add**.
2. In the **Template(s)** field, choose the template for the Monitoring Connector you want.
3. [Customize the connector's behavior](./integrations/plugin-packs/getting-started/how-to-guides/plugin-customization.md): adapt the thresholds and the macros.
4. [Deploy the configuration](#deploying-the-configuration).
5. [Test if it works](./connectors-test.md). If it doesn't, [troubleshoot it](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md).

## To perform host or service discovery

Instead of creating hosts and services one by one, you can let Centreon find them for you. Discovery requires the **Auto Discovery** module, which is a Centreon extension (see [Installing the Auto Discovery module](/docs/monitoring/discovery/installation)).

Monitoring Connectors provide what discovery needs:

* **Discovery providers**, used by host discovery. A provider knows how to find hosts in a given environment, such as a subnet scanned over SNMP, a VMware vCenter or an Azure subscription.
* **Discovery rules**, used by service discovery. A rule knows how to find items to monitor on an existing host, such as network interfaces, disks or file systems.

If **Automatic installation of plugins** is set to **ON** on the **Configuration > Connectors > Monitoring Connectors** page, the discovery plugin is installed automatically on the poller when the discovery runs.

### Discovering hosts

1. Install the Monitoring Connector that provides the discovery provider you need. Its monitoring procedure tells you whether it includes a provider and what parameters it requires.
2. Go to **Configuration > Hosts > Discovery** and click **+ADD**.
3. In the wizard, choose the provider, enter the access parameters (credentials, subnet, etc.), select the poller that will run the discovery, and set the mappers that turn the results into hosts. The mappers usually apply a host template provided by the same Monitoring Connector.
4. Run the job, then review the results and save the hosts you want to monitor (or let the job create them automatically).
5. [Deploy the configuration](#deploying-the-configuration) for the pollers that monitor the new hosts.

See [Discovering hosts automatically](/docs/monitoring/discovery/hosts-discovery) for the full procedure, and [Journey of a host discovery job](./workflow-host-discovery.md) for an example from start to finish.

### Discovering services

1. Install the Monitoring Connector that provides the discovery rules you need. Its rules are listed in **Configuration > Services > Rules**.
2. Make sure the host uses a host template linked to the rule. A rule only runs on hosts that use one of its host templates.
3. Run the rule:
   * Manually, for one host: go to **Configuration > Services > Scan**, select the host and the discovery command, click **Scan**, then select the items to monitor and click **Save**.
   * Automatically: activate the rule. It then runs on a schedule on all the hosts linked to it.
4. [Deploy the configuration](#deploying-the-configuration) for the pollers that monitor these hosts.

See [Discovering services automatically](/docs/monitoring/discovery/services-discovery) for the full procedure, and [Journey of a service discovery rule](./workflow-service-discovery.md) for an example from start to finish.

## Deploying the configuration

Hosts and services that you create or modify, manually or through discovery, are not monitored until you deploy the configuration to the pollers that monitor them:

1. Go to **Configuration > Pollers > Pollers**. Configuration changes are shown in the **Conf changed** column.
2. Select the pollers concerned and click **Export configuration**.
3. Check **Generate Configuration Files**, **Run monitoring engine debug (-v)**, **Move Export Files** and **Restart Monitoring Engine**, with the **Reload** method.
4. Click **Export**, then read the log to check that no errors were returned.

If **Automatic installation of plugins** is set to **ON**, deploying the configuration also installs the plugins the poller needs for the templates it uses.

After the deployment, the poller starts running the checks. See [Deploying a configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration) for all the export options.
