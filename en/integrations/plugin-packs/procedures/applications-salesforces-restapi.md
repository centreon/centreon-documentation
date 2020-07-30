---
id: applications-salesforce-restapi
title: Salesforce
---

## Overview

Salesforce.com, Inc. is an American cloud-based software company headquartered in San Francisco, California. It provides customer-relationship management (CRM) service and also sells a complementary suite of enterprise applications focused on customer service, marketing automation, analytics, and application development. 

## Plugin-pack assets

### Monitored objects 

* Salesforce instances

## Collected metrics

<!--DOCUSAURUS_CODE_TABS-->
<!--Instance-Status-->

| Metric name               | Description                                              |
| :------------------------ | :------------------------------------------------------- |
| instanceStatus            | Status of a Salesforce instance                          |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To monitoring your Salesforce instance, the Centreon poller must be allowed to reach the Salesforce API endpoint (api.status.salesforce.com) through HTTPS.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on poller(s) expected to monitor Salesforce

```bash
yum install centreon-plugin-Applications-Salesforce-Restapi
```

2. Install the Salesforce Plugin-Pack on "Configuration > Plugin packs > Manager" Centreon Web UI page


<!--Offline IMP License-->

1. Install the Centreon Plugin on every poller expected to monitor Salesforce:

```bash
yum install centreon-plugin-Applications-Salesforce-Restapi
```

2. Install the Centreon Plugin-Pack RPM:

```bash
yum install centreon-pack-applications-salesforce-restapi
```

3. Install the Salesforce Plugin-Pack on "Configuration > Plugin packs > Manager" Centreon Web UI page:

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Add a new host into Centreon and apply the 'App-Salesforce-Restapi-custom' host template. The host macros marked hereafter as "mandatory" have to be configured: 

| Mandatory| Name              | Description                                                                                 |
| :---------- | :--------------- | :------------------------------------------------------------------------------------------ |
|     x       | INSTANCENAME     | Name or region-code of the salesforce instance                                              |
|     x       | APIURL           | Default is 'api.status.salesfoce.com'. Do not change it                                     |
|             | EXTRAOPTIONS     | Any extraoptions you may want to add to every command\_line (eg. a --verbose flag)          |
|     x       | DUMMYSTATUS      | Host state. Default is OK, do not modify it until you know what you are doing               |
|     x       | DUMMYOUTPUT      | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

## FAQ

### How to test my plugin and what do the main parameters stand for ? 

Once the plugin is installed, you can test it logging into the CLI with the centreon-engine user. 

```bash
/usr/lib/centreon/plugins//centreon_salesforce_restapi.pl \
	--plugin=apps::salesforce::restapi::plugin \
	--mode=sfdc-instance \
	--hostname='api.status.salesforce.com' \
	--http-backend=curl \
	--instance='sfdcinstance' \
	--alias
```

The above command monitors the status of a Salesforce instance (```--mode=sfdc-instance```). An alias flag is added (```--alias```) to use the instance alias instead of the Salesforce geographical code. The monitored instance here is named 'sfdcinstance' (```--instance='sfdcinstance'```). 

All options and what they mean can be displayed through the help of the mode:

```bash
/usr/lib/centreon/plugins//centreon_salesforce_restapi.pl \
	--plugin=apps::salesforce::restapi::plugin \
	--mode=sfdc-instance \
    --help
```

### UNKNOWN: Cannot decode JSON response

If you get this error, it may indicate that the received data is not formatted as expected by the Plugin. This usually may happen because of a proxy blocking the request and its answer is wrongly interpreted as the API response. 

You can perform further investigation by adding ```--debug``` option to your command line.

### What's the name of my instance ? 

Your instance name is the first part of the Salesforce Instance URL. As an example, if you connect to your Salesforce instance using archimede.my.salesforce.com URL, the instance name to use is 'archimede'
