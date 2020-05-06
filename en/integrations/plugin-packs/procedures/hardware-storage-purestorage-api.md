---
id: hardware-storage-purestorage-restapi
title: Pure Storage RestAPI 
---

## Overview

Pure Storage develops flash-based storage for data centers using consumer-grade solid state drives. It provides 
proprietary de-duplication and compression software to improve the amount of data that can be stored on each drive. 

## Plugin-Pack assets

### Monitored objects

* Storage array

## Monitored metrics                                                                                                   

More information is available in the Pure Storage official API documentation : https://blog.purestorage.com/introducing-the-pure1-rest-api/

<!--DOCUSAURUS_CODE_TABS-->
<!--Alarms-Global-->

| Metric name        | Description                                              |
| :----------------- | :------------------------------------------------------- |
| Status             | Status of alarms. Threshold/Unit: String                 |

<!--Hardware-Global-->

| Metric name        | Description                                             |
| :----------------- | :------------------------------------------------------ |
| Status             | Status of components. Threshold/Unit: String            |

<!--Volume-Usage-Global-->

| Metric name        | Description                                              |
| :----------------- | :------------------------------------------------------- |
| Volume-Usage       | The usage of volume. Units: Bytes or %                   |
| Data-Reduction     | The data-reduction ratio on the volume. Unit: ratio      |
| Total-Reduction    | The total-reduction on the volume. Unit: count           |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

* This Monitoring Plugin requires at least a Pure Storage API version >= 1.11 (https://static.pure1.purestorage.com/api-swagger/index.html).

* A service account has to be created on the device. This account must have at least a "read only" access to the storage array.
 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Plugin on every poller expected to monitor Pure Storage arrays:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Restapi
```

2. Install the "Pure-Storage-Restapi" Centreon Plugin-Pack from the "Configuration > Plugin Packs > Manager" page


<!--Offline IMP License-->

1. Install the Plugin on every poller expected to monitor Pure Storage resources:

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Restapi
```

2. Install the Centreon Plugin-Pack RPM on your central server:

```bash
yum install centreon-pack-hardware-storage-purestorage-restapi
```

3. Install the "Pure-Storage-Restapi" Centreon Plugin-Pack from the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host Configuration

Apply the "HW-Storage-Purestorage-Restapi-custom" template to your newly created host. Then fill the macros value fields marked as mandatory below: 

| Mandatory | Name            | Description                    |
| :-------- | :-------------- | :----------------------------- |
| X         | APIURLPATH      | Pure Storage API URL Path      |
| X         | APIURLUSERNAME  | Pure Storage API Username      |
| X         | APIURLPASSWORD  | Pure Storage API Password      |
|           | APIEXTRAOPTIONS | Pure Storage API Extra options |

## FAQ

#### How can I test the Plugin and what are the main options for ?

Once the Centreon Plugin installed, you can test it directly on the Centreon poller by logging into the CLI with the *centreon-engine* user and run the command hereafter:

```bash
/usr/lib/centreon/plugins//centreon_purestorage_restapi.pl \
	--plugin=storage::purestorage::restapi::plugin \
	--mode=volume-usage \
	--hostname=192.168.1.1 \
	--api-path='/api/1.11' \ 
	--username='centreon' \
	--password='centreon' \
	--filter-name='.*' \
	--units='%' \
	--warning-usage='80' \
	--critical-usage='90' \
	--warning-data-reduction='' \
	--critical-data-reduction='' \
	--warning-total-reduction=':5' \
	--critical-total-reduction=':4' \
	--verbose
```

If everything's fine, it should output something similar to: 

```bash
OK: Volume 'PROD::CENTREON' Usage Total: 6.00 TB Used: 1.13 TB (18.85%) Free: 4.87 TB (81.15%), Data Reduction : 2.917, Total Reduction : 5.193, Snapshots : 0.00 B | 
'used'=1243773921694B;0:5277655813324;0:5937362789990;0;6597069766656
'data_reduction'=2.873;;;0;
'total_reduction'=5.201;;;0;
'snapshots'=0B;;;0;
```

This command checks the volumes usage (```--mode=volume-usage```) of a Pure Storage array device using the 1.11 API endpoint (```--api-path='/api/1.11'```). The device's IP address is *192.168.1.1* (```--hostname=192.168.1.1```) and the credentials used to authenticate against the API endpoint are *centreon/centreon* (```--username='centreon' --password='centreon'```). The above command would return all of the device's volumes as the name filter will match any result (```--filter-name='.*'```).

This command will trigger a WARNING alarm if the volume usage exceeds 80% (```--warning-usage='80'```) and a CRITICAL alarm if it exceeds 90% (```--critical-usage='90'```). 

It is besides possible to define WARNING and CRITICAL thresholds on a specific metric:
in this example a WARNING alarm will be triggered if the total rate of "reduction" is less than 5 (```--warning-total-reduction=':5'```) and CRITICAL if it is less than 4 (```--critical-total-reduction=':4'```).

The syntax of the different options of the thresholds as well as the list of options and their usage are detailed in the help of the mode by adding the parameter ```--help``` to the command:

```bash
/usr/lib/centreon/plugins/centreon_purestorage_restapi.pl \
	--plugin=storage::purestorage::restapi::plugin \
	--mode=volume-usage \
	--help
```

#### "UNKNOWN: Cannot decode json response"

If you receive this message, set the ```--debug``` option flag to get more information about the error. 

Most common reasons for this message are: 

* A Firewall drops the HTTPS flows between the Poller and the Pure Storage device.

* The Pure Storage devices uses a self-signed certificate. Add the option ```--ssl-opt="SSL_verify_mode => SSL_VERIFY_NONE"``` in the  Host *EXTRAOPTIONS* macro to prevent this error. 
