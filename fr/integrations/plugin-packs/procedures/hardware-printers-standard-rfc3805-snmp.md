---
id: hardware-printers-standard-rfc3805-snmp
title: Printer standard
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.25 | `STABLE` | Feb 15 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Printers-Generic-Snmp
```

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the equipment

### Configure SNMP on your server

Follow constructor procedure for your equipment.

### SNMP Permissions

Read-Only access.

### Troubleshooting

Read [Troubleshooting
SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                   |
| :---------------------- | :-------------------------------------- |
| Host name               | *Name of the host*                      |
| Alias                   | *Host description*                      |
| IP                      | *Host IP Address*                       |
| Monitored from          | *Monitoring Poller to use*              |
| Host Multiple Templates | HW-Printer-Standard-rfc3805-snmp-custom |

Choose "Yes" for the "Create Services linked to template" option.

Click on the *Save* button.

Following services are automatically created :

  - Printer-Hardware,
  - Printer-Errors,
  - Cover-Status,
  - Marker-Impressions and Marker-Supply.

If you want, you can add the paper tray check with the service template
provided.

