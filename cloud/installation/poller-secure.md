---
id: poller-secure
title: Securing your poller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Strengthen user account security

After installing Centreon, you must change the default passwords of the following users:

- root
- centreon
- centreon-engine
- centreon-broker
- centreon-gorgone

To do this, use the following command with a privileged account (e.g., sudo) or with root (not recommended — you should
have a dedicated user):

```shell
passwd <account_name>
```

> As a reminder, the list of users and groups can be found [here](../installation/prerequisites.md#users-and-groups)

## Enable SELinux

Centreon developed SELinux rules in order to strengthen the control of
components by the operating system.

> These rules are currently in **beta mode** and can be activated.
> You can activate them by following this procedure. If you detect a problem,
> you can disable SELinux globally and send us your feedback in
> order to improve our rules on [Github](https://github.com/centreon/centreon).

### SELinux Overview

Security Enhanced Linux (SELinux) provides an additional layer of system security. SELinux fundamentally answers the
question: `May <subject> do <action> to <object>?`, for example: May a web server access files in users' home
directories?

The standard access policy based on the user, group, and other permissions, known as Discretionary Access Control
(DAC), does not enable system administrators to create comprehensive and fine-grained security policies, such as
restricting specific applications to only viewing log files, while allowing other applications to append new data to
the log files.

SELinux implements Mandatory Access Control (MAC). Every process and system resource has a special security label
called an SELinux context. An SELinux context, sometimes referred to as an SELinux label, is an identifier that
abstracts away the system-level details and focuses on the security properties of the entity. Not only does this provide
a consistent way of referencing objects in the SELinux policy, but it also removes any ambiguity that can be found in
other identification methods. For example, a file can have multiple valid path names on a system that makes use of bind
mounts.

The SELinux policy uses these contexts in a series of rules that define how processes can interact with each other and
the various system resources. By default, the policy does not allow any interaction unless a rule explicitly grants access.

For more information about SELinux, please see [Red Hat documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/getting-started-with-selinux_using-selinux)

### Activate SELinux in permissive mode

By default, SELinux is disabled during the Centreon installation process. To enable SELinux in permissive mode, you need to
modify the `/etc/selinux/config` file as:

```shell
# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=permissive
# SELINUXTYPE= can take one of three two values:
#     targeted - Targeted processes are protected,
#     minimum - Modification of targeted policy. Only selected processes are protected.
#     mls - Multi Level Security protection.
SELINUXTYPE=targeted
```

Then reboot your server:

```shell
shutdown -r now
```

### Install Centreon SELinux packages

Depending on the type of server, install the packages with the following command:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-common-selinux \
centreon-broker-selinux \
centreon-engine-selinux \
centreon-gorgoned-selinux \
centreon-plugins-selinux
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-common-selinux \
centreon-broker-selinux \
centreon-engine-selinux \
centreon-gorgoned-selinux \
centreon-plugins-selinux
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install centreon-common-selinux \
centreon-broker-selinux \
centreon-engine-selinux \
centreon-gorgoned-selinux \
centreon-plugins-selinux
```

</TabItem>
</Tabs>


To check the installation, execute the following command:

```shell
semodule -l | grep centreon
```

Depending on your type of server, you can see:

```shell
centreon-broker	0.0.5
centreon-common	0.0.10
centreon-engine	0.0.8
centreon-gorgoned	0.0.3
centreon-plugins	0.0.2
```

### Audit logs and enable SELinux

Before enabling SELinux in **enforcing** mode, you need to be sure that no errors appear using the following command:

```shell
cat /var/log/audit/audit.log | grep -i denied
```

If errors appear, you must analyze them and decide if these errors are regular and should be added to
the Centreon default SELinux rules. To do this, use the following command to transform errors into SELinux rules:

```shell
audit2allow -a
```

Then execute the proposed rules.

If after a while, no error is present, you can activate SELinux in full mode by
following this [procedure](#activate-selinux-in-permissive-mode) using **enforcing** mode.

> Do not hesitate to give us your feedback on [Github](https://github.com/centreon/centreon).

## Enable firewalld

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Install firewalld:

```shell
dnf install firewalld
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Install firewalld:

```shell
dnf install firewalld
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Install firewalld:

```shell
apt install firewalld
```

</TabItem>
</Tabs>

Enable firewalld:

```shell
systemctl enable firewalld
systemctl start firewalld
```

Then add rules for firewalld:

> The list of network flows required for each type of server is defined
> [here](../installation/architectures.md#tables-of-platform-flows).

Execute the following commands:

```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
# Centreon Gorgone
firewall-cmd --zone=public --add-port=5556/tcp --permanent
```

Once the rules have been added, reload firewalld:

```shell
firewall-cmd --reload
```

To check that the configuration has been applied correctly, use the following command to list all active rules:

```shell
firewall-cmd --list-all
```

For instance:

```shell
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: eth0
  sources:
  services: http snmp snmptrap ssh
  ports: 5556/tcp 5669/tcp
  protocols:
  forward: no
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
```

## Secure communications between servers

It is strongly recommended to secure communications between the different servers of the Centreon platform if some servers
are not in a secure network.

> The Table of network flows is available [here](../installation/architectures.md#table-of-network-flows).

### Centreon Broker communication

#### Centreon Broker and the firewall

In certain cases, you may not be able to initialize the Centreon Broker data flow from the poller (or the Remote Server)
to the Central Server or the Remote Server.
[See the following configuration to invert the flow](../monitoring/monitoring-servers/advanced-configuration.md#centreon-broker-and-the-firewall).

#### Centreon Broker flow authentication

If you need to authenticate pollers that are sending data to the monitoring system, you can use the Centreon Broker
authentication mechanism, which is based on X.509 certificates.
[See the following configuration to authenticate the peer](../monitoring/monitoring-servers/advanced-configuration.md#centreon-broker-flow-authentication).

#### Compress and encrypt Centreon Broker communication

It is also possible to compress and encrypt Centreon Broker communication.
Go to the **Configuration > Pollers > Broker configuration** menu, edit your Centreon Broker configuration
and enable for **IPv4** inputs and outputs:

- Enable TLS encryption: Auto
- Enable negotiation: Yes
- Compression (zlib): Auto

### Centreon Gorgone communication

By default, ZMQ communications are secured; both external communications (with the poller) and internal ones (between gorgone processes).

## Security Information and Event Management - SIEM

Centreon event logs are available in the following directories:

| Logs directory            | Central server | Remote Server | Poller | Centreon Map server | Centreon MBI Server |
|---------------------------|----------------|---------------|--------|---------------------|---------------------|
| /var/log/centreon         | X              | X             |        |                     |                     |
| /var/log/centreon-broker  | X              | X             | X      |                     |                     |
| /var/log/centreon-engine  | X              | X             | X      |                     |                     |
| /var/log/centreon-gorgone | X              | X             | X      |                     |                     |

> In addition, all actions to modify the Centreon configuration carried out by users are available via the
[**Administration > Logs**](./logging-configuration-changes.md) menu.

## Backing up the platform

Make sure you back up your custom plugins, and the following configuration files:
   - /etc/centreon/centreon_vmware.pm
   - /etc/centreon-as400/
   - /var/lib/centreon/centplugins/*

## Allowing traffic to/from AWS IP ranges

AWS provides a [list of their IP ranges](https://ip-ranges.amazonaws.com/ip-ranges.json). You can retrieve the list of IP addresses you want using a curl command. Example for AWS Ireland with the EC2 service for IPV6 and IPV4:

```shell
curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq -r '.ipv6_prefixes[] | select(.region == "eu-west-1") | select(.service == "EC2") | .ipv6_prefix' 
curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq -r '.prefixes[] | select(.region == "eu-west-1") | select(.service == "EC2") | .ip_prefix' 
```

## Disaster recovery for a poller

Follow this porcedure to replace a failed poller by a new one:

1. On a new machine, [install the new poller](./deploy-poller.md).

2. Restore onto the new machine the backups of local configurations you have made for the failed poller:

   - /etc/centreon/centreon_vmware.pm
   - /etc/centreon-as400/
   - /var/lib/centreon/centplugins/*

3. Use the [**Mass change**](../monitoring/generic-actions.md#mass-change) feature to make sure the new poller now monitors all the hosts that the failed poller did.

4. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) for the new poller.

5. Delete the old poller.
