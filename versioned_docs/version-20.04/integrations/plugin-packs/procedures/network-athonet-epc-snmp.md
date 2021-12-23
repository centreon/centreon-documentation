---
id: network-athonet-epc-snmp
title: Athonet ePC SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack Athonet ePC SNMP collects metrics for:
* aggregate
* apns
* interfaces (diameter, GA, GTPC, LTE)
* license
* lte

This table describes which metrics can be collected according to roles.

|                     | MME | SPGW | HSS | PCRF |
| :------------------ | :-: | :--: | :-: | :--: |
| aggregate           |     |  X   |  X  |      |
| apns                |     |  X   |     |      |
| interfaces-diameter |  X  |  X   |  X  |  X   |
| interfaces-ga       |     |  X   |     |      |
| interfaces-gtpc     |  X  |  X   |     |      |
| interfaces-lte      |  X  |      |     |      |
| license             |  X  |  X   |  X  |  X   |
| lte                 |  X  |      |     |      |

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Aggregate-->

| Metric name                          | Description                       | Unit  |
| :----------------------------------- | :-------------------------------- | :---- |
| aggregate.traffic.in.bytespersecond  | Aggregate incoming traffic        | B/s   |
| aggregate.traffic.out.bytespersecond  Aggregate outgoing traffic         | B/s   |
| hss.users.roaming.connected.count    | Number of roaming users connected |       |
| hss.requests.authentication.count    | Number of authentication requests |       |
| hss.location.updates.count           | Number of location updates        |       |

<!--Apns-->

| Metric name                                | Descritption                           | Unit  |
| :----------------------------------------- | :------------------------------------- | :---- |
| *apn_name*\#apn.traffic.in.bytespersecond  | Incoming traffic going through the apn | B/s   |
| *apn_name*\#apn.traffic.out.bytespersecond | Outgoing traffic going through the apn | B/s   |
| *apn_name*\#apn.pdp_contexts.count         | Number of pdp contexts                 |       |

<!--Interfaces-diameter-->

| Metric name                     | Description                  | Unit  |
| :------------------------------ | :--------------------------- | :---- |
| diameter.interfaces.total.count | Number of interfaces         |       |
| status                          | Status of the interface      |       |
| transport status                | Status of the transport      |       |

<!--Interfaces-gtpc-->

| Metric name                     | Description                  | Unit  |
| :------------------------------ | :--------------------------- | :---- |
| gtpc.interfaces.total.count     | Number of interfaces         |       |
| status                          | Status of the interface      |       |

<!--Interfaces-ga-->

| Metric name                     | Description                  | Unit  |
| :------------------------------ | :--------------------------- | :---- |
| ga.interfaces.total.count       | Number of interfaces         |       |
| status                          | Status of the interface      |       |

<!--Interfaces-lte-->

| Metric name                                                                             | Description                                                                     | Unit  |
| :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ | :---- |
| lte.interfaces.total.count                                                              | Number of interfaces                                                            |       |
| status                                                                                  | Status of the interface                                                         |       |
| *interface_name*\#lte.interface.traffic.in.bytespersecond                               | Incoming traffic going through the interface                                    | B/s   |
| *interface_name*\#lte.interface.traffic.out.bytespersecond                              | Outgoing traffic going through the interface                                    | B/s   |
| *interface_name*\#lte.interface.users.connected.count                                   | Number of connected users                                                       |       |
| *interface_name*\#lte.interface.users.idle.count                                        | Number of idle users                                                            |       |
| *interface_name*\#lte.interface.sessions.active.count                                   | Number of active sessions from users                                            |       |
| *interface_name*\#lte.interface.requests.attach.success.count                           | Number of succesfull attach request                                             |       |
| *interface_name*\#lte.interface.requests.attach.success.percentage                      | Percentage of succesfull attach request                                         | %     |
| *interface_name*\#lte.interface.requests.pdn_context.activations.success.count          | Number of succesfull PDN context activation                                     |       |
| *interface_name*\#lte.interface.requests.pdn_context.activations.success.percentage     | Percentage of succesfull PDN context activation                                 | %     |
| *interface_name*\#lte.interface.requests.ue_context_release.total.count                 | Number of UE context request release                                            |       |
| *interface_name*\#lte.interface.requests.ue_context_release.radio_lost.count            | Number of UE context request release with cause 'Radio Connection with UE lost' |       |
| *interface_name*\#lte.interface.requests.pdn_context.reject.insufficent_resources.count | Number of PDN Context reject with cause 'Insufficent Resources'                 |       |
| *interface_name*\#lte.interface.requests.pdn_context.reject.no_apn.count                | Number of PDN Context reject with cause 'Missing or unknown APN'                |       |
| *interface_name*\#lte.interface.requests.pdn_context.reject.not_subscribed.count        | Number of PDN Context reject with cause 'Request service option not subscribed' |       |

<!--License-->

| Metric name                              | Description                                   | Unit  |
| :--------------------------------------- | :-------------------------------------------- | :---- |
| status                                   | Status of the license                         |       |
| license.expires.days                     | Expiration time                               |       |
| license.users.active.usage.count         | Number of active users on the license         |       |
| license.users.active.free.count          | Number of free active users on the license    |       |
| license.users.active.usage.percentage    | Percentage of active users on the license     | %     |
| license.sessions.active.usage.count      | Number of active sessions on the license      |       |
| license.sessions.active.free.count       | Number of free active sessions on the license |       |
| license.sessions.active.usage.percentage | Percentage of active sessions on the license  | %     |
| license.usim.usage.count                 | Number of provisioned usim on the license     |       |
| license.usim.free.count                  | Number of provisioned usim on the license     |       |
| license.usim.usage.percentage            | Percentage of provisioned usim on the license | %     |

<!--Lte-->

| Metric name                                                           | Description                                                                     | Unit  |
| :-------------------------------------------------------------------- | :------------------------------------------------------------------------------ | :---- |
| lte.interface.traffic.in.bytespersecond                               | Incoming traffic going through the interface                                    | B/s   |
| lte.interface.traffic.out.bytespersecond                              | Outgoing traffic going through the interface                                    | B/s   |
| lte.interface.users.connected.count                                   | Number of connected users                                                       |       |
| lte.interface.users.idle.count                                        | Number of idle users                                                            |       |
| lte.interface.sessions.active.count                                   | Number of active sessions from users                                            |       |
| lte.interface.requests.attach.success.count                           | Number of succesfull attach request                                             |       |
| lte.interface.requests.attach.success.percentage                      | Percentage of succesfull attach request                                         | %     |
| lte.interface.requests.pdn_context.activations.success.count          | Number of succesfull PDN context activation                                     |       |
| lte.interface.requests.pdn_context.activations.success.percentage     | Percentage of succesfull PDN context activation                                 | %     |
| lte.interface.requests.ue_context_release.total.count                 | Number of UE context request release                                            |       |
| lte.interface.requests.ue_context_release.radio_lost.count            | Number of UE context request release with cause 'Radio Connection with UE lost' |       |
| lte.interface.requests.pdn_context.reject.insufficent_resources.count | Number of PDN Context reject with cause 'Insufficent Resources'                 |       |
| lte.interface.requests.pdn_context.reject.no_apn.count                | Number of PDN Context reject with cause 'Missing or unknown APN'                |       |
| lte.interface.requests.pdn_context.reject.not_subscribed.count        | Number of PDN Context reject with cause 'Request service option not subscribed' |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Athonet ePC equipments, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Athonet-Epc-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Athonet ePC SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Athonet-Epc-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-network-athonet-epc-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Athonet ePC SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Athonet-Epc-SNMP-Custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_athonet_epc_snmp.pl \
    --plugin=network::athonet::epc::snmp::plugin \
    --mode=lte \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='athonet_ro' \
    --warning-users-connected='100' \
    --critical-users-connected='200' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Lte traffic in: 0 B/s, traffic out: 0 B/s - connected users: 0, idle users: 0, active sessions: 0 - attach requests total: 0 success: 0 (100.00%) - pdn context activation requests total: 0 success: 0 (100.00%) - ue context release requests: 0, ue context release with radio lost requests: 0 - pdn context requests reject insufficent resources: 0, missing or unknown apn: 0, not subscribed: 0 | 'lte.traffic.in.bytespersecond'=0B/s;;;0; 'lte.traffic.out.bytespersecond'=0B/s;;;0; 'lte.users.connected.count'=0;0:100;0:200;0; 'lte.users.idle.count'=0;;;0; 'lte.sessions.active.count'=0;;;0; 'lte.requests.attach.success.count'=0;;;0;0 'lte.requests.attach.success.percentage'=100%;;;0;100 'lte.requests.pdn_context.activations.success.count'=0;;;0;0 'lte.requests.pdn_context.activations.success.percentage'=100%;;;0;100 'lte.requests.ue_context_release.total.count'=0;;;0; 'lte.requests.ue_context_release.radio_lost.count'=0;;;0; 'lte.requests.pdn_context.reject.insufficent_resources.count'=0;;;0; 'lte.requests.pdn_context.reject.no_apn.count'=0;;;0; 'lte.requests.pdn_context.reject.not_subscribed.count'=0;;;0;
checking lte
    traffic in: 0 B/s, traffic out: 0 B/s
    connected users: 0, idle users: 0, active sessions: 0
    attach requests total: 0 success: 0 (100.00%)
    pdn context activation requests total: 0 success: 0 (100.00%)
    ue context release requests: 0, ue context release with radio lost requests: 0
    pdn context requests reject insufficent resources: 0, missing or unknown apn: 0, not subscribed: 0
```

The command above monitors Athonet ePC LTE statistics (```--plugin=network::athonet::epc::snmp::plugin --mode=lte```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='athonet_ro'```).

This command would trigger a WARNING alarm if there are more than 100 connected users 
(```--warning-users-connected='100'```) and a CRITICAL alarm for more than 200 (```--critical-users-connected='200'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_athonet_epc_snmp.pl \
    --plugin=network::athonet::epc::snmp::plugin \
    --mode=lte \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:
* The SNMP agent of the device isn't started or is misconfigured
* An external device is blocking the request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The agent doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.35805.10
