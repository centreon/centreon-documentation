---
id: cma
title: Centreon Monitoring Agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Centreon Monitoring Agent (CMA) collects metrics and computes statuses on the servers it monitors, and sends them to Centreon
Les plugins Centreon plugins as user's plugins Nagios compatible can be used with this agent. 


### Limitations

Centreon Monitoring Agent is in Beta Phase. The following limitations need to be considered : 

* The scope of supervision supported is limited, new (native) controls will be introduced in the final version.
* Manual configuration is required. In the final version, this will be possible via the user interface and largely automated.


### OS supportés

CMA can be installed on the following OS :

<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">

* Windows 10
* Windows 11
* Windows Server 2016
* Windows Server 2019
* Windows Server 2022

</TabItem>
<TabItem value="Linux" label="Linux">

* Alma 8
* Alma 9
* Debian 11
* Debian 12
* Ubuntu 22.04 LTS

</TabItem>
</Tabs>

## Étape 1: Configure Centreon

### Install the Monitoring Connector

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

1. On your central server, go to **Configuration > Monitoring Connector Manager**.
2. [Install](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) the "Windows Centreon Monitoring Agent" monitoring connector.

</TabItem>
<TabItem value="Windows" label="Windows">

1. On your central server, go to **Configuration > Monitoring Connector Manager**.
2. [Install](/docs/monitoring/pluginpacks/#installing-a-monitoring-connector) the "Linux Centreon Monitoring Agent" monitoring connector.

</TabItem>
</Tabs>

### Create the CMA connector

Install the Open Telemetry processor for Telegraf on your central server:

1. Go to **Configuration > Commands > Connectors**.
2. Create a new connector with the following values:

| Parameter             | Value                                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connector Name        | Centreon Monitoring Agent                                                                                                                                                                     |
| Connector Description | Centreon Monitoring Agent                                                                                                                                                                     |
| Command Line          | `opentelemetry --processor=centreon_agent --extractor=attributes --host_path=resource_metrics.resource.attributes.host.name --service_path=resource_metrics.resource.attributes.service.name` |
| Used by command       | Type `TO BE DEFINED` and click **Select all**                                                                                                                                                 |
| Connector Status      | Enabled                                                                                                                                                                                       |

### Configure Engine

1. On the poller that will receive the data from the agent, create the following file:

   ```shell
   touch /etc/centreon-engine/otl_server.json
   ```

2. Enter the following contents. This will allow the poller to receive the data that the agent will send.

#### Normal usage (CMA connects to poller)

```json
{
   "otel_server":{
      "host":"0.0.0.0",
      "port":4317
   },
   "max_length_grpc_log":0,
   "centreon_agent":{
      "check_interval":60,
      "export_period":10
   }
}
```

```bash
chown centreon-engine: /etc/centreon-engine/otl_server.json
```

#### reverse usage (poller connects to CMA)

You have to use such a configuration when agent is not allowed to connect to agent, for security reasons for example (ex : DMZ).
In this mode, poller connects to CMA.
Le poller permet de fonctionner dans les deux modes simultanément (certains agents se connectent au poller alors que le poller se connecte à d'autres agents).

```json
{
   "max_length_grpc_log":0,
   "centreon_agent":{
      "check_interval":60,
      "export_period":15,
      "reverse_connections":[
         {
            "host":"<HOST ADDRESS>",
            "port":<PORT>
         }
      ]
   }
}
```

```bash
chown centreon-engine: /etc/centreon-engine/otl_server.json
```

* Enter IP  address of CMA host in the fields **host** and port **port**. This IP must be joinable by the poller.
* **check_interval** field is the period between two checks for the same service.

> For simplicity, this page only covers the configuration of the Agent **in unencrypted mode**, but you
> can find the procedure to encrypt communications in the [Windows Centreon Monitoring Agent connector] or [Linux Centreon Monitoring Agent connector] documentation.

(NOTE POUR TEAM DOC : ci-dessous le mode chiffré en normal et reverse, à décaler sur autre page ?)

```json
{
   "otel_server":{
      "host":"0.0.0.0",
      "port":4317,
      "encryption":true,
      "public_cert":"<CERTIFICATE PATH>",
      "private_key":"<KEY PATH>",
      "ca_certificate":"<CA PATH>"
   },
   "max_length_grpc_log":0,
   "centreon_agent":{
      "check_interval":60,
      "export_period":10
   }
}
```

```json
{
   "max_length_grpc_log":0,
   "centreon_agent":{
      "check_interval":60,
      "export_period":15,
      "reverse_connections":[
         {
            "host":"localhost",
            "port":4317,
            "encryption":true,
            "ca_certificate":"/tmp/ca_1234.crt"
         }
      ]
   }
}
```


#### Add a new Broker module

1. Go to **Configuration > Pollers > Engine configuration**, then click on the poller you want to monitor your resources.
2. On the **Data** tab, in the **Broker module** section, in the **Multiple Broker Module** parameter, click on **Add a new entry**.
3. Add the following entry :

   ```bash
   /usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json
   ```

4. Export the configuration
5. Restart the monitoring engine

   ```bash
   systemctl restart centengine
   ```

CMA can now communicate with Centreon. You can set up the monitoring of your hosts.

## Step 2: Prepare the host

### Download and install the agent

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

* Install centreon-monitoring-agent package

1. Modify /etc/centreon-monitoring-agent/centagent.json local (4 cases) 


No encryption, no reverse mode


```json
{
    "log_level":"trace",
    "endpoint":"<IP POLLER>:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/var/log/centreon-monitoring-agent/centagent.log" 
}
```

Encryption, no reverse mode

```json
{
    "log_level":"trace",
    "endpoint":"<IP POLLER>:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "encryption":true,
  "ca_certificate":"/tmp/ca_1234.crt"
}
```

No encryption, reverse mode

```json
{
    "log_level":"trace",
    "endpoint":"0.0.0.0:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "reverse_connection":true
}
```

Encryption, no reverse mode

```json
{
    "log_level":"trace",
    "endpoint":"0.0.0.0:4317",
    "host":"host_1",
    "log_type":"file",
    "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "reverse_connection":true,
  "encryption":true,
  "private_key":"/tmp/server_1234.key",
  "public_cert":"/tmp/server_1234.crt",
  "ca_certificate":"/tmp/ca_1234.crt"
}

```

#### Log configuration
You can configure two kinds of log output:
* file: CMA logs into a file, path is configured in log_file
* stdout: we use standard output

If you choose to log into a file, log rotate can be parameterized with keys log_max_file_size and log_max_files

Log levels allowed are: trace, debug, info, warning, error, critical and off

2. Restart CMA: systemctl restart centagent


</TabItem>
<TabItem value="Windows" label="Windows">

1. [Download CMA from this URL https://github.com/centreon/centreon-collect/releases ] on every server you want to monitor

2. Load file centagent.reg in hte registry

3. Modify configuration in the registry

No encryption, no reverse mode

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Centreon\CentreonMonitoringAgent]
"log_file"="toto.log"
"log_level"="trace"
"log_type"="stdout"
"log_max_file_size"=dword:0000000a
"log_max_files"=dword:00000003
"endpoint"="10.0.2.15:4317"
"encryption"=dword:00000000
"certificate"=""
"private_key"=""
"ca_certificate"=""
"ca_name"=""
"host"="host_1"
"reverse_connection"=dword:00000000
```

Encryption, no reverse mode

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Centreon\CentreonMonitoringAgent]
"log_file"="toto.log"
"log_level"="trace"
"log_type"="stdout"
"log_max_file_size"=dword:0000000a
"log_max_files"=dword:00000003
"endpoint"="10.0.2.15:4317"
"encryption"=dword:00000000
"certificate"=""
"private_key"=""
"ca_certificate"=""
"ca_name"="c:\temp\ca_1234.crt"
"host"="host_1"
"reverse_connection"=dword:00000000
```


No encryption, reverse mode

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Centreon\CentreonMonitoringAgent]
"log_file"="toto.log"
"log_level"="trace"
"log_type"="stdout"
"log_max_file_size"=dword:0000000a
"log_max_files"=dword:00000003
"endpoint"="0.0.0.0:4317"
"encryption"=dword:00000000
"certificate"=""
"private_key"=""
"ca_certificate"=""
"ca_name"=""
"host"="host_1"
"reverse_connection"=dword:00000001
```

Encryption, reverse mode

```
[HKEY_LOCAL_MACHINE\SOFTWARE\Centreon\CentreonMonitoringAgent]
"log_file"="toto.log"
"log_level"="trace"
"log_type"="stdout"
"log_max_file_size"=dword:0000000a
"log_max_files"=dword:00000003
"endpoint"="0.0.0.0:4317"
"encryption"=dword:00000000
"certificate"="C:\temp\server_1234.crt"
"private_key"="C:\temp\server_1234.key"
"ca_certificate"="C:\temp\server_1234.key"
"ca_name"=""
"host"="host_1"
"reverse_connection"=dword:00000001
```


#### Log configuration
You can configure two kinds of log output:
* file: CMA logs into a file, path is configured in log_file
* event: CMA logs in event viewer
* stdout: we use standard output

If you choose to log into a file, log rotate can be parameterized with keys log_max_file_size and log_max_files

Log levels allowed are: trace, debug, info, warning, error, critical and off

Note: an installer will be available in the final version, to facilitate configuration and massive deployment. In this beta version, you will have to run the agent yourself.

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

On the hosts you want to monitor, download and execute the corresponding [package for Windows](https://github.com/centreon/centreon-nsclient-build/releases/download/20240711/centreon_plugins.exe).

</TabItem>
</Tabs>

## Step 3: Monitoring a host with the CMA

### Create hosts using templates

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

On the central server, [create hosts](/docs/monitoring/basic-objects/hosts) and apply to them the **OS-Linux-Centreon-Monitoring-Agent-custom** template.

</TabItem>
<TabItem value="Windows" label="Windows">

On the central server, [create hosts](/docs/monitoring/basic-objects/hosts) and apply to them the **OS-Windows-Centreon-Monitoring-Agent-custom** template.

</TabItem>
</Tabs>

