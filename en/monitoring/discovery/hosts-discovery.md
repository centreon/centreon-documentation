---
id: hosts-discovery
title: Hosts Discovery
---

> The discovery providers are provided from installation of Plugin Packs (Azure,
> Amazon AWS, VMware, etc.). To know the complete list, please go to
> the [Plugin Packs
> catalog](../../integrations/plugin-packs/init-plugin-packs.html).

## Add a discovery job

To launch a discovery, you need to add a discovery job.

The job addition wizard is a 6 steps wizard that will allow you to choose a
provider, define parameters, define mapping rules and update/execution
policies.

Go to `Configuration > Hosts > Discovery` and click on **+ADD**.

First, choose a provider by clicking on it:

![image](../../assets/monitoring/discovery/host-discovery-wizard-step-1-1.png)

The search bar allows to search for a specific provider:

![image](../../assets/monitoring/discovery/host-discovery-wizard-step-1-2.png)

The second step allows to define access parameters, especially the monitoring
server from which the discovery will be made:

![image](../../assets/monitoring/discovery/host-discovery-wizard-step-2.png)

Then, some additional parameters might be needed to define the scope of the
discovery:

![image](../../assets/monitoring/discovery/host-discovery-wizard-step-3.png)

The fourth step defines how the discovery result will be processed to create
hosts in the configuration.

In this step, *mappers* can be added or rearranged to match needs. Realtime
simulation on a set of example data gives a preview of what it could look
like:

![image](../../assets/monitoring/discovery/host-discovery-wizard-step-4.png)

The fifth and sixth steps only allow to define manual analysis as update
policy and immediate as execution policy.

There will be more choices in the futur to allow automatic update and cyclic
execution.

Click on **FINISH** on the last step to add and schedule the discovery job.

## Analyze the result of a discovery job
