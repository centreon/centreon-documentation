---
id: telegraf
title: Telegraf
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The Telegraf agent collects metrics and computes statuses on the servers it monitors, and sends them to Centreon.
Centreon's OpenTelemetry processor allows it to understand data sent in OpenTelemetry format.

Developed by InfluxDB, the Telegraf agent can be installed on Windows or Linux servers. Centreon Engine is able to send the configuration of monitored resources to the agent (existing hosts, thresholds...), so that the agent can execute checks and compute the statuses of these resources.

As they are Nagios-based, both Centreon and custom plugins are compatible with the agent. This is because Centreon's Telegraf integration is based on the native [Nagios input data format](https://docs.influxdata.com/telegraf/v1/data_formats/input/nagios/).

### Limitations

Due to Telegraf or Centreon constraints, the following limitations need to be considered.

* Due to Telegraf limitations, the configuration of resources known to the agent is only updated when you start or [reload the agent](#reload-the-agent) (typically, you would do that after [deploying the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration)). Technically, the agent requests an up-to-date configuration from Centreon.
* Only known metrics (i.e., the metrics for the hosts and services created in Centreon) are sent to Centreon. Metrics for unknown hosts or services are discarded.
* Only metrics and statuses are returned (no outputs).
* Network connections are one-way only: data goes from the agent to the poller. This means that a host in a DMZ will need a poller in this DMZ.
* When an enhancement or fix is released, the Centreon plugin must be re-deployed on your monitored host (there is no auto-update).

## Step 1: Configure Centreon

### Install the Monitoring Connector

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

1. On your central server, go to **Configuration > Monitoring Connector Manager**.
2. [Install](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) the **Linux Telegraf Agent** monitoring connector.

</TabItem>
<TabItem value="Windows" label="Windows">

1. On your central server, go to **Configuration > Monitoring Connector Manager**.
2. [Install](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) the **Windows Telegraf Agent** monitoring connector.

</TabItem>
</Tabs>

### Create the Telegraf connector

Install the Open Telemetry processor for Telegraf on your central server:

1. Go to **Configuration > Commands > Connectors**.
2. Create a new connector with the following values:

| Parameter             | Value                                                                                                                                                                                                                            |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connector Name        | Telegraf                                                                                                                                                                                                                         |
| Connector Description | Telegraf                                                                                                                                                                                                                         |
| Command Line          | `opentelemetry --processor=nagios_telegraf --extractor=attributes --host_path=resource_metrics.scope_metrics.data.data_points.attributes.host --service_path=resource_metrics.scope_metrics.data.data_points.attributes.service` |
| Used by command       | Type `Telegraf-Agent` and click **Select all**                                                                                                                                                                                   |
| Connector Status      | Enabled                                                                                                                                                                                                                          |

### Configure Engine

1. On the poller that will receive the data from the agent, create the following file:

   ```shell
   touch /etc/centreon-engine/otl_server.json
   ```

2. Enter the following contents. This will allow the poller to receive the data that the agent will send.

```json
{
 "otel_server": {
   "host": "0.0.0.0",
   "port": 4317,
   "encryption": false
 },
 "max_length_grpc_log": 0,
 "telegraf_conf_server": {
   "http_server": {
     "port": 1080,
     "encryption": false
   },
   "telegraf_conf": {
     "interval": "60s",
     "service_address": "xxx.xxx.xxx.xxx:4317"
   }
 }
}
```

* Enter the IP address of the poller in the **service_address** field.
* The **interval** field is the frequency of checks performed by Telegraf, and should be set to 60 seconds as it is the frequency of Engine checks.

> For the sake of simplicity, this page only covers the configuration of Telegraf **without encryption**. You may find how to secure the communications in the [Linux Telegraf Agent](../../procedures/operatingsystems-linux-telegraf-agent.md) and [Windows Telegraf Agent](../../procedures/operatingsystems-windows-telegraf-agent.md) pages.

### Add a new Broker module

1. Go to **Configuration > Pollers > Engine configuration**, then click on the poller you want to monitor your resources.
2. On the **Data** tab, in the **Broker module** section, in the **Multiple Broker Module** parameter, click on **Add a new entry**.
3. Add the following entry :

   ```shell
   /usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json
   ```

4. Export the configuration
5. Restart the monitoring engine

   ```bash
   systemctl restart centengine
   ```

The Telegraf agent is now able to communicate with Centreon. You can set up the monitoring of your hosts.

## Step 2: Prepare the host

### Download and install the agent

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf -y install epel-release
dnf -y config-manager --set-enabled 'powertools'
```

This part is an excerpt from [Telegraf's official documentation](https://docs.influxdata.com/telegraf/v1/install/?t=RedHat+%26amp%3B+CentOS).

```bash
cat > /etc/yum.repos.d/influxdb.repo <<'EOF'
[influxdb]
name = InfluxData Repository - Stable
baseurl = https://repos.influxdata.com/stable/$basearch/main
enabled = 1
gpgcheck = 1
gpgkey = https://repos.influxdata.com/influxdata-archive_compat.key
EOF
```

```bash
dnf install -y telegraf
```

Then:

1. Stop the Telegraf service 

```shell
systemctl stop telegraf
```

2. Edit the **telegraf.service** file. 

```shell
vi /etc/systemd/system/telegraf.service
```

3. Replace:

```shell
/usr/bin/telegraf -config /etc/telegraf/telegraf.conf -config-directory /etc/telegraf/telegraf.d $TELEGRAF_OPTS
```

By (replace the placeholders by your values):

```shell
/usr/bin/telegraf -config http(s)://<ip poller>:<port poller>/engine?host=<host to monitor>
```

4. Start the Telegraf service:


```shell
systemctl start telegraf
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf -y install epel-release
dnf -y config-manager --set-enabled 'crb'
```

This part is an excerpt from [Telegraf's official documentation](https://docs.influxdata.com/telegraf/v1/install/?t=RedHat+%26amp%3B+CentOS).

```bash
cat > /etc/yum.repos.d/influxdb.repo <<'EOF'
[influxdb]
name = InfluxData Repository - Stable
baseurl = https://repos.influxdata.com/stable/$basearch/main
enabled = 1
gpgcheck = 1
gpgkey = https://repos.influxdata.com/influxdata-archive_compat.key
EOF
```

```bash
dnf install -y telegraf
```

Then:

1. Stop the Telegraf service 

```shell
systemctl stop telegraf
```

2. Edit the **telegraf.service** file. 

```shell
vi /etc/systemd/system/telegraf.service
```

3. Replace:

```shell
/usr/bin/telegraf -config /etc/telegraf/telegraf.conf -config-directory /etc/telegraf/telegraf.d $TELEGRAF_OPTS
```

By (replace the placeholders by your values):

```shell
/usr/bin/telegraf -config http(s)://<ip poller>:<port poller>/engine?host=<host to monitor>
```

4. Start the Telegraf service:


```shell
systemctl start telegraf
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

This part is an excerpt from [Telegraf's official documentation](https://docs.influxdata.com/telegraf/v1/install/).

```bash
wget -q https://repos.influxdata.com/influxdata-archive_compat.key -O influxdata-archive_compat.key
echo '393e8779c89ac8d958f81f942f9ad7fb82a25e133faddaf92e15b16e6ac9ce4c influxdata-archive_compat.key' | sha256sum -c && cat influxdata-archive_compat.key | gpg --dearmor | tee /etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg > /dev/null
echo 'deb [signed-by=/etc/apt/trusted.gpg.d/influxdata-archive_compat.gpg] https://repos.influxdata.com/debian stable main' | sudo tee /etc/apt/sources.list.d/influxdata.list
apt-get update
```

```bash
apt-get -y install telegraf
```

Then:

1. Stop the Telegraf service 

```shell
systemctl stop telegraf
```

2. Edit the **telegraf.service** file. 

```shell
vi /etc/systemd/system/telegraf.service
```

3. Replace:

```shell
/usr/bin/telegraf -config /etc/telegraf/telegraf.conf -config-directory /etc/telegraf/telegraf.d $TELEGRAF_OPTS
```

By (replace the placeholders by your values):

```shell
/usr/bin/telegraf -config http(s)://<ip poller>:<port poller>/engine?host=<host to monitor>
```

4. Start the Telegraf service:


```shell
systemctl start telegraf
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Windows" label="Windows">

1. [Download the agent](https://docs.influxdata.com/telegraf/v1/install/) on all the servers you want to monitor.

2. Install the agent on the servers using the following command (replace the placeholders by your values):

```shell
.\telegraf.exe --service install --config "http(s)://<ip_poller>:<port poller>/engine?host=<host_to_monitor>"
```

The arguments in this command will allow Telegraf to know where to fetch the configuration of the resources that it must monitor (i.e on the poller or the central, according to the IP address you have entered in the command). The `<host_to_monitor>` parameter is the name of the host as you entered it in the **Name** field in its configuration.

</TabItem>
</Tabs>

### Deploy the Centreon plugin

The Centreon plugin will execute the checks on the host.

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

##### Enable our plugins repository and install the plugin

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

Install the plugin:

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

Install the plugin:

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

Install the plugin:

```bash
apt -y install centreon-plugin-operatingsystems-linux-local
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Windows" label="Windows">

On the hosts you want to monitor, download and execute the corresponding [package for Windows](https://github.com/centreon/centreon-nsclient-build/releases/download/20240711/centreon_plugins.exe). We suggest that you place the plugin at the same place as the Telegraf agent, for example `C:\Program Files\InfluxData\telegraf\telegraf-1.30.3`.

</TabItem>
</Tabs>

## Step 3: Monitoring a host with the Telegraf agent

### Create hosts using templates

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

On the central server, [create hosts](/docs/monitoring/basic-objects/hosts) and apply to them the **OS-Linux-Telegraf-Agent-custom** template.

</TabItem>
<TabItem value="Windows" label="Windows">

On the central server, [create hosts](/docs/monitoring/basic-objects/hosts) and apply to them the **OS-Windows-Telegraf-Agent-custom** template.

</TabItem>
</Tabs>

### Reload the agent

To let the agent know about the hosts you just created and start monitoring them, run the following command on the host:

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

```bash
systemctl restart telegraf 
```

</TabItem>
<TabItem value="Windows" label="Windows">

```bash
telegraf.exe --service stop
telegraf.exe --service start
```

</TabItem>
</Tabs>

