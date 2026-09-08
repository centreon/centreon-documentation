---
id: install-system-agents
title: Install the agent on a static server
description: Install the monitoring agent on a static Linux server
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sending system information to Experience Monitoring requires installing the Experience Monitoring agent on all servers you wish to monitor.

* The agent is only compatible with Linux.
* This procedure can be used directly if your application or site is hosted on a static server. For autoscaling environments (including Docker), it must be adapted to manage the **hostid** correctly. See [Install the agent in autoscaling environments](cloud-configuration-of-agents.md).

## Compatibility

<ul><li>Debian 10, 11, 12</li><li>Ubuntu Jammy, Kinetic, Lunar</li><li>CentOS 7, CentOS 8 Stream</li></ul>

<!--| Agent version | Distributions |
| --- | --- |
| main (x.x) | <ul><li>Debian 10, 11, 12</li><li>Ubuntu Jammy, Kinetic, Lunar</li><li>CentOS 7, CentOS 8 Stream</li></ul> |
| beta | ... |-->

## Prerequisites

* To install the Experience Monitoring agent, you will need an [access token](../tokens.md).

* System agents must be able to communicate with our infrastructure. You may need to whitelist our [IP addresses](#endpoint-addresses-for-server-agents).

* To add, modify, or delete a server in Experience Monitoring, you must have **Admin** or **Owner** permissions on your organization. Ask your administrator or support to grant you the correct rights.

## Installation procedure

<Tabs groupId="os">
<TabItem value="Debian" label="Debian">

1. Add the following line to the **/etc/apt/sources.list.d/quanta.list** file.

   <Tabs groupId="debian">
   <TabItem value="Buster (versions 10.*)" label="Buster (versions 10.*)">

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] http://apt.quanta.io/debian buster main
    ```

   </TabItem>
   <TabItem value="Bullseye (versions 11.*)" label="Bullseye (versions 11.*)">

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/debian bullseye main
    ```

   </TabItem>
   <TabItem value="Bookworm (versions 12.*)" label="Bookworm (versions 12.*)">

    ```bash
    deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/debian bookworm main
    ```

   </TabItem>
   </Tabs>

   If unsure of your version of Debian, you can read the **/etc/debian_version** file.

2. Download and add the **GPG** key for our repository:

    ```bash
    curl https://apt.quanta.io/quanta-repo-key.gpg | gpg -o /usr/share/keyrings/quanta-archive-keyring.pgp --dearmor
    ```

3. Update the package list:

    ```bash
    apt update
    ```

4. Install the agent:

    ```bash
    apt install quanta-agent
    ```

   You will be prompted for the token during installation, and system data should appear in Experience Monitoring within a minute. You can then install [application agents](./add-advanced-metrics.md) if you need them.

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

To install the Experience Monitoring agent:

1. Add the following line to the **/etc/apt/sources.list.d/quanta.list** file.

   <Tabs groupId="ubuntu">
   <TabItem value="Jammy" label="Jammy">

   ```bash
   deb [signed-by=/usr/share/keyrings/quanta-archive-keyring.pgp] https://apt.quanta.io/ubuntu jammy main
   ```

   </TabItem>
   </Tabs>

2. Download and add the **GPG** key for our repository:

    ```bash
    curl https://apt.quanta.io/quanta-repo-key.gpg | gpg -o /usr/share/keyrings/quanta-archive-keyring.pgp --dearmor
    ```

3. Update the package list:

    ```bash
    apt update
    ```

4. Install the agent:

    ```bash
    apt install quanta-agent
    ```

   You will be prompted for the token during installation, and system data should appear in Experience Monitoring within a minute. You can then install [application agents](./add-advanced-metrics.md) or [the PHP profiler](install-php-magento-orocommerce-profiler.md) if you need them.

</TabItem>
<TabItem value="CentOS/RHEL" label="CentOS/RHEL">

**Supported Versions:**

- Centos 7
- Centos 8 Stream

To install the Experience Monitoring agent:

1. Create the repository configuration file **/etc/yum.repos.d/quanta.repo**. You can download the configuration file available here: [https://rpm.quanta.io/quanta-centos-repo.txt](https://rpm.quanta.io/quanta-centos-repo.txt)

2. Install the **GPG** key for our repository:

    ```shell
    curl https://rpm.quanta.io/quanta-repo-key.gpg -o /tmp/quanta.key && rpm --import /tmp/quanta.key && rm -f /tmp/quanta.key
    ```

3. Update the package list:

    ```shell
    yum makecache
    ```

4. Install the agent:

    ```shell
    yum install quanta-agent
    ```

5. Edit the file **/etc/quanta/agent.yml** and replace __YOUR_EXPERIENCE_MONITORING_TOKEN__ with [your **access token**](#prerequisites):

    ```shell
    __YOUR_EXPERIENCE_MONITORING_TOKEN__
    ```

6. Start the agent:

    ```shell
    systemctl start quanta-agent
    ```

7. Enable the agent to start automatically on boot:

    ```shell
    systemctl enable quanta-agent
    ```

   You should see system data appear in Experience Monitoring within a minute.  You can then install [application agents](./add-advanced-metrics.md) or [the PHP profiler](install-php-magento-orocommerce-profiler.md) if you need them.

</TabItem>
<TabItem value="Other OSs" label="Other OSs">

We do not provide packages for other OSs, but [the source code is publicly available on GitHub and can be compiled](https://github.com/quanta-computing/quanta-agent).

</TabItem>
</Tabs>

## Troubleshooting agent installation

**I don't see data coming in, where can I find information to troubleshoot?**

The agent uses syslog for logging; you will generally find logs in **/var/log/daemon.log** or **/var/log/syslog**. If you can't find the source of the error, please contact [Centreon support](http://support.centreon.com/).

You can send logs to another file by changing the **file** variable under the **logger** section in **/etc/quanta/agent.yml** (make sure to set up log rotation).

## Modifying an existing installation

If you want to modify the configuration of an Experience Monitoring agent that is already installed on one of your servers, you will find its configuration in the **/etc/quanta/agent.yml** file. It contains the main connection information, including the Experience Monitoring token corresponding to the relevant site. Access to this file can be useful if you monitor multiple sites with the same Experience Monitoring account and wish to specify the correct token to associate each server with its hosted site (e.g., for separate production and pre-production servers).

Here is an excerpt from the **/etc/quanta/agent.yml** file:

```yaml
user: quanta-agent
directory: /var/run/quanta
pidfile: /var/run/quanta/agent.pid
daemonize: yes

poll_interval: 60
update_interval: 15

logger:
  level: notice
  file: syslog

hostid: [...] <- server ID, automatically generated at installation
quanta_token: [...] <- insert here the token corresponding to your site

[...]
```

## Endpoint addresses for server agents

If you use the Experience Monitoring agent, each of your servers regularly sends data (once per minute) to the Experience Monitoring service.

This is outbound HTTPS traffic (port 443) and is often allowed by default. However, if your firewall rules are strict and you need to allow specific destinations for Experience Monitoring, list the following destination IP addresses:

- 52.215.166.110
- 52.215.179.235
- 52.215.180.115
