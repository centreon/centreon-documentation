---
id: applications-nmap-cli
title: Nmap CLI Discovery
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack content

This Pack offers a Host discovery rule.

Thanks to the *Nmap Discovery* provider, discover Hosts within a predefined subnet. 

## Setup

To install the required Plugin and Pack, take the following steps: 

<Tabs groupId="sync">
<TabItem value="Online Licence" label="Online Licence">

1. Install the Centreon Plugin package on every Centreon Poller expected to use the **Nmap** binary to discover resources:

```bash
yum install centreon-plugin-Applications-Nmap-Cli
```

2. On the Centreon Web interface, install the **Nmap CLI** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Nmap** ressources:

```bash
yum install centreon-plugin-Applications-Nmap-Cli
```

2. Install the **Nmap CLI** Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-nmap-cli
```

3. On the Centreon Web interface, install the **Nmap CLI** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Additional resources

Several resources on The Watch can help you to use this Pack. 

- [How to configure a Discovery task](https://thewatch.centreon.com/product-how-to-21/discovery-pack-speed-up-your-monitoring-and-make-it-more-reliable-using-the-new-nmap-discovery-tools-149)
- [How you can help improving device detection and template association](https://thewatch.centreon.com/product-how-to-21/network-discovery-nmap-snmp-how-does-it-work-and-how-can-you-help-162)