---
id: monitoring-dem-mip
title: Maltem Insight Performances Rest API 
---

## Overview 

Maltem Insight Performance (MIP) provides solutions to measure performance of web applications and thick clients through custom scenarios. It provides an API to gather metrics and status associated to the end-user experience from various locations.

## How it works

The MIP instance exposes a JSON based RestAPI. Centreon connector uses this endpoint to fetch relevant data about Digital Experience Monitoring Scenarios 

![architecture](../../assets/integrations/external/mip-connector-architecture.png)

## Compatibility

The connector has been tested with MIP v 6.4.90 and its API. 

## Requirements

### MIP

To be able to get data from MIP API, you must have a valid API key. Contact MIP support or sales representative to get one. 

### Centreon

On each poller connecting to the MIP endpoint, install the MIP Plugin:

```bash
yum install -y centreon-plugin-Applications-Monitoring-Mip-Restapi`
```

On your central server, install the Plugin-Pack through "Configuration \> Plugin-Packs \> Manager" menu:

![install\_epp](../../assets/integrations/external/mip-epp-install.png)

> :warning: **If you are using an Offline IMP license**: Install Plugin-Pack RPM prior to the the Web UI deployment.

```bash
yum install -y centreon-pack-applications-monitoring-mip-restapi`
```

## Configuration

### Hosts

You can now add a new host based on the **App-Monitoring-Mip-Restapi-custom** host template. The host macros marked hereafter as "mandatory" need to be configured:


| Mandatory   | Name                 | Description                                              |
| :---------- | :------------------- | :------------------------------------------------------- |
|     x       | MIPAPIPROTO          | Protocol used to connect to MIP API. Default: https      |
|     x       | MIPAPIPORT           | Port used to connect to MIP API. Default: 443            |
|     x       | MIPAPIHOSTNAME       | MIP Instance FQDN                                        |
|     x       | MIPAPIKEY            | MIP API Key                                              |
|             | MIPAPIEXTRAOPTIONS   | Any relevant extraoptions (proxy, http-backend, etc.)    |
|     x       | MIPAPITIMEOUT        | Timeout to use during API requests                       |

Set the 'Create service linked to template" option to 'No' and save your configuration. 

### Services

Regarding Services, a discovery rule is avalable to get all your senarios and quickly configure them. Here a step-by-step guide: 
 
* Go to "Configuration > Services" and click "Scan" in the Discovery sub menu
* Fill the Host box with the hostname configured in the previous section
* Select 'App-Monitoring-Mip-Scenarios' in the Rule drop-down list on the left
* Click Scan to launch discovery
* Check the boxes associated to the Scenario you want to monitor 
* Save and then go to the 'Configuration > Pollers' menu to export your configuration
