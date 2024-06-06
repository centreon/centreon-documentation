---
id: telegraf
title: Telegraf
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The Telegraf agent collects metrics and computes statuses on the servers it monitors, and sends them to Centreon.
Centreon's OpenTelemetry processor allows it to understand data sent in OpenTelemetry format.

Developped by InfluxDB, the Telegraf agent can be installed on Windows servers. Centreon Engine is able to send the configuration of monitored resources to the agent (existing hosts, thresholds...), so that the agent can execute checks and compute the statuses of these resources.

As they are Nagios-based, both Centreon and custom plugins are compatible with the agent. This is because Centreon's Telegraf integration is based on the native [Nagios input data format](https://docs.influxdata.com/telegraf/v1/data_formats/input/nagios/).

### Limitations

Due to Telegraf or Centreon constraints, the following limitations need to be considered.

* Due to Telegraf limitations, the configuration of resources known to the agent is only updated when you start or [reload the agent](#reload-the-agent) (typically, you would do that after [deploying the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration)). Technically, the agent requests an up-to-date configuration from Centreon.
* Only known metrics (i.e., the metrics for the hosts and services created in Centreon) are sent to Centreon. Metrics for unknown hosts or services are discarded.
* Only metrics and statuses are returned (no outputs).
* Network connections are one-way only: data goes from the agent to the poller. This means that a host in a DMZ will need a poller in this DMZ.
* When an enhancement or fix is released, Centreon plugins must be re-deployed on your monitored host (there is no auto-update).

## Step 1: Install the agent and the Centreon plugins on the host

### Download and install the agent on the host

1. [Download the agent](https://docs.influxdata.com/telegraf/v1/install/) on all the servers you want to monitor.

2. Install the agent on the servers using the following command (replace the placeholders by your values):

```shell
.\telegraf.exe --service install --config "http(s)://<ip_poller>:<port poller>/engine?host=<host_to_monitor>"
```

The arguments in this command will allow Telegraf to know where to fetch the configuration of the resources that it must monitor (i.e on the poller or the central, according to the IP address you have entered in the command).

### Deploy the Centreon plugins on the host

The Centreon plugins will execute the checks on the host.

<!--
<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

##### Enable our plugins repository and install plugin

This repository will provide you our packaged plugins as well as **the dependencies that are not available in the
standard distribution repositories**.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
cat >/etc/yum.repos.d/centreon-plugins.repo <<'EOF'
[centreon-plugins-stable]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el8/stable/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-stable-noarch]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el8/stable/noarch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/testing/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/testing/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/unstable/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/unstable/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1
EOF

```

Install the plugin :

```bash
dnf install -y centreon-plugin-Operatingsystems-Linux-Local.noarch
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
cat >/etc/yum.repos.d/centreon-plugins.repo <<'EOF'
[centreon-plugins-stable]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el9/stable/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-stable-noarch]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el9/stable/noarch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/testing/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/testing/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/unstable/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/unstable/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1
EOF
```

Install the plugin :

```bash
dnf install -y centreon-plugin-Operatingsystems-Linux-Local.noarch
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
apt-get update
```

Install the plugin :

```bash
apt -y install centreon-plugin-operatingsystems-linux-local
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Windows" label="Windows">
-->

On the hosts you want to monitor, download and execute the corresponding [package for Windows](https://github.com/centreon/centreon-nsclient-build/releases/download/20240325/centreon_plugins.exe).


<!--

</TabItem>
<Tabs>
-->

## Step 2: Configure Centreon

### Install the monitoring connector that will receive data from Telegraf

1. On your central server, go to **Configuration > Monitoring Connector Manager**.
2. [Install](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) the **Windows Telegraf Agent** monitoring connector.
<!-- For Linux hosts : Linux Telegraf AGENT-->

### Create the Telegraf connector

Install the Open Telemetry processor on your central server:

1. Go to **Configuration > Commands > Connectors**.
2. Create a new connector with the following values:

| Parameter | Value|
| --------- | ---- |
| Connector Name | Telegraf |
| Connector Description | Telegraf |
| Command Line |```opentelemetry --processor=nagios_telegraf --extractor=attributes --host_path=resource_metrics.scope_metrics.data.data_points.attributes.host --service_path=resource_metrics.scope_metrics.data.data_points.attributes.service``` |
| Used by command |<ul><li>OS-Windows-Telegraf-Agent-Certificates</li><li>OS-Windows-Telegraf-Agent-Ntp</li><li>OS-Windows-Telegraf-Agent-Pending-Reboot</li><li>OS-Windows-Telegraf-Agent-Sessions</li><li>OS-Windows-Telegraf-Agent-Updates</li></ul>|
| Connector Status | Enabled |

### Configure Engine

1. On the poller that will receive the data from the agent, create the following file:

   ```shell
   touch /etc/centreon-engine/otl_server.json
   ```

2. Enter the following contents. This will allow the poller to receive the data that the agent will send.

<Tabs groupId="sync">
<TabItem value="Unencrypted flows" label="Unencrypted flows">

* Enter the IP address of the poller in the **service_address** field.
* The **interval** field is the frequency of checks performed by Telegraf, and should be set to 60 seconds as it is the frequency of Engine checks.

```json
broker_module=/usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json

{
 "otel_server": {
   "host": "0.0.0.0",
   "port": 4317,
   "encryption": false
 },
 "max_length_grpc_log": 0,
 "telegraf_conf_server": {
   "http_server": {
     "port": 80,
     "encryption": false
   },
   "telegraf_conf": {
     "interval": "60s",
     "service_address": "xxx.xxx.xxx.xxx:4317"
   }
 }
}
```

</TabItem>
<TabItem value="Encrypted flows" label="Encrypted flows">

* Enter the IP address of the poller in the **service_address** field.
* The **interval** field is the frequency of checks performed by Telegraf, and should be set to 60 seconds as it is the frequency of Engine checks.

Two flows will be encrypted: the configuration sent by the poller to the agent, and the metrics sent by the agent to the poller.

1. Create the certificates.
2. Copy the certificates on to the poller that will receive data from Telegraf.
3. Enter the path to the certificates in the **otl_server.json** file.

```json
broker_module=/usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json

{
 "otel_server": {
   "host": "0.0.0.0",
   "port": 4317,
   "encryption": true,
   "certificate_path": "/tmp/otel/server.crt",
   "key_path": "/tmp/otel/server.key"
 },
 "max_length_grpc_log": 0,
 "telegraf_conf_server": {
   "http_server": {
     "port": 1443,
     "encryption": true,
     "certificate_path": "/tmp/otel/server.crt",
     "key_path": "/tmp/otel/server.key"
   },
   "telegraf_conf": {
     "interval": "60s",
     "service_address": "127.0.0.1:4317"
   }
 }
}
```

</TabItem>
</Tabs>

### Add a new Broker module

1. Go to **Configuration > Pollers > Engine configuration**, then click on the poller you want to monitor your resources.
2. On the **Data** tab, in the **Broker module** section, in the **Multiple Broker Module** parameter, click on **Add a new entry**.
3. Add the following entry :

   ```shell
   /usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json
   ```

The Telegraf agent is now able to communicate with Centreon. You can set up the monitoring of your hosts.

## Step 3: Monitoring a host with the Telegraf agent

### Create hosts using templates

On the central server, [create hosts](/docs/monitoring/basic-objects/hosts) and apply to them templates provided by the **Windows Telegraf AGENT** monitoring connector.

### Reload the agent

To let the agent know about the hosts you just created and start monitoring them, run the following command on the host:

   ```shell
   telegraf.exe --service start
   telegraf.exe --service stop
   ```