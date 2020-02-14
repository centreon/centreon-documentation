---
id: cloud-vmware-velocloud-restapi
title: VMware VeloCloud
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Oct 16 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Vmware-Velocloud-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                      |
| :---------------------- | :----------------------------------------- |
| Host name               | *Name of the host*                         |
| Alias                   | *Host description*                         |
| IP                      | *Host IP Address*                          |
| Monitored from          | *Monitoring Poller to use*                 |
| Host Multiple Templates | Cloud-Vmware-Velocloud-Edge-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro          | Description                      | Default value |
| :------------- | :------------------------------- | :------------ |
| VCOAPIHOSTNAME | Hostname of the VCO API instance |               |
| VCOAPIURLPATH  | Path to the VCO API              | /portal/rest  |
| VCOAPIPORT     | Port of the VCO API instance     | 443           |
| VCOAPIPROTO    | Protocol used by the VCO API     | https         |
| VCOAPIUSERNAME | Username to access VCO API       |               |
| VCOAPIPASSWORD | Password to access VCO API       |               |
| EDGENAME       | Name of the edge                 |               |

Click on the *Save* button.

