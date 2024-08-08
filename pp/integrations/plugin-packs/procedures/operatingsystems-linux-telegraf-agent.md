---
id: operatingsystems-linux-telegraf-agent
title: Linux Telegraf Agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Telegraf is an observability tool implementing the OpenTelemetry protocol.

> This monitoring connector is a **proof of concept**, Centreon does not recommend to use it in production.
> It has some limitations such as:
> - the need to restart the Telegraf service whenever the configuration is changed.
> - the impossibility to display the informational output message of the host or service (due to
> limitations of the OpenTelemetry protocol).

You may refer to [this page](../getting-started/how-to-guides/telegraf.md) for more information about Centreon's integration with Telegraf.

## Pack assets

### Templates

The Monitoring Connector **Linux Telegraf Agent** brings a host template:

* **OS-Linux-Telegraf-Agent-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-Linux-Telegraf-Agent-custom" label="OS-Linux-Telegraf-Agent-custom">

| Service Alias | Service Template             | Service Description                                                                                                                                |
|:--------------|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu           | OS-Linux-Cpu-Telegraf-Agent-custom    | Check the rate of utilization of CPUs for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPUs |
| Load          | OS-Linux-Load-Telegraf-Agent-custom   | Check the server load average                                                                                                                      |
| Memory        | OS-Linux-Memory-Telegraf-Agent-custom | Check the rate of the utilization of memory                                                                                                        |
| Ntp           | OS-Linux-Ntp-Telegraf-Agent-custom    | Check system time synchronization with an NTP server                                                                                                  |
| Swap          | OS-Linux-Swap-Telegraf-Agent-custom   | Check virtual memory usage                                                                                                                         |
| Uptime        | OS-Linux-Uptime-Telegraf-Agent-custom | Time since the server has been working and available                                                                                               |

> The services listed above are created automatically when the **OS-Linux-Telegraf-Agent-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias       | Service Template                          | Service Description                                                                                                                                         | Discovery  |
|:--------------------|:------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|
| Cmd-Generic         | OS-Linux-Cmd-Generic-Telegraf-Agent-custom         | Check exit code for Linux commands                                                                                                                           |            |
| Connections-Generic | OS-Linux-Connections-Generic-Telegraf-Agent-custom | Check TCP/UDP connections                                                                                                                                   |            |
| Cpu-Detailed        | OS-Linux-Cpu-Detailed-Telegraf-Agent-custom        | Check the detailed rate of utilization of CPUs for the machine. This check can give the average CPU utilization rate and the rate per CPU for multi-core CPUs |            |
| Disk-IO             | OS-Linux-Disk-IO-Telegraf-Agent-custom             | Check I/O counters of disks                                                                                                                                 |            |
| Disks               | OS-Linux-Disks-Telegraf-Agent-custom               | Check the rate of free space on disks. For each check the mount point of disks will appear                                                                 | X          |
| File-Date-Generic   | OS-Linux-File-Date-Generic-Telegraf-Agent-custom   | Check file or/and directory modification/creation/access times                                                                                              |            |
| File-Size-Generic   | OS-Linux-File-Size-Generic-Telegraf-Agent-custom   | Check file or/and directory sizes                                                                                                                           |            |
| Inodes              | OS-Linux-Inodes-Telegraf-Agent-custom              | Check the rate of free inodes on disks                                                                                                                      |            |
| Is-File-Generic     | OS-Linux-Is-File-Generic-Telegraf-Agent-custom     | Check if file 'xxx' is present                                                                                                                              |            |
| Is-Not-File-Generic | OS-Linux-Is-Not-File-Generic-Telegraf-Agent-custom | Check if file 'xxx' is not present                                                                                                                          |            |
| Open-Files          | OS-Linux-Open-Files-Telegraf-Agent-custom          | Check file or/and directory modification/creation/access times                                                                                              |            |
| Packet-Errors       | OS-Linux-Packet-Errors-Telegraf-Agent-custom       | Check packets in error/discarded from multiple network interfaces                                                                                             |            |
| Pending-Updates     | OS-Linux-Pending-Updates-Telegraf-Agent-custom     | Check systemd services status                                                                                                                               |            |
| Process-Generic     | OS-Linux-Process-Generic-Telegraf-Agent-custom     | Check Linux processes                                                                                                                                       |            |
| Systemd-Journal     | OS-Linux-Systemd-Journal-Telegraf-Agent-custom     | Count journal entries using the `journalctl` command.          |            |
| Systemd-Sc-Status   | OS-Linux-Systemd-Sc-Status-Telegraf-Agent-custom   | Check systemd services status                                                                                                                               |            |
| Traffic             | OS-Linux-Traffic-Telegraf-Agent-custom             | Check the bandwidth of interfaces.                                                                   | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Metric name      | Unit  |
|:-----------------|:------|
| total            | count |
| con\_synSent     | count |
| con\_finWait1    | count |
| con\_listen      | count |
| con\_established | count |
| con\_lastAck     | count |
| con\_timeWait    | count |
| con\_closeWait   | count |
| con\_synReceived | count |
| con\_closing     | count |
| con\_closed      | count |
| con\_finWait2    | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                                | Unit  |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| core.cpu.utilization.percentage | %     |
| cpu.utilization.percentage      | %     |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *device*#device.io.read.usage.bytespersecond  | B/s   |
| *device*#device.io.write.usage.bytespersecond | B/s   |
| *device*#device.io.read.wait.milliseconds     | ms    |
| *device*#device.io.write.wait.milliseconds    | ms    |
| *device*#device.io.servicetime.count          | count |
| *device*#device.io.utils.percentage           | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Disks" label="Disks">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| *disk_name*#storage.space.usage.bytes | B     |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Metric name      | Unit  |
|:-----------------|:------|
| file.size.bytes  | B     |
| files.size.bytes | B     |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| *inodes*#storage.inodes.usage.percentage | %     |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Metric name             | Unit  |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Load" label="Load">

| Metric name  | Unit  |
|:-------------|:------|
| avg\_load1   | N/A   |
| avg\_load5   | N/A   |
| avg\_load15  | N/A   |
| load1        | N/A   |
| load5        | N/A   |
| load15       | N/A   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                 | Unit  |
|:----------------------------|:------|
| memory.usage.bytes          | B     |
| memory.free.bytes           | B     |
| memory.usage.percentage     | %     |
| memory.available.bytes      | B     |
| memory.available.percentage | %     |
| memory.buffer.bytes         | B     |
| memory.cached.bytes         | B     |
| memory.slab.bytes           | B     |
| swap.usage.bytes            | B     |
| swap.free.bytes             | B     |
| swap.usage.percentage       | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| peers.detected.count                  | count |
| *peers*#status                        | N/A   |
| *peers*#peer.time.offset.milliseconds | ms    |
| *peers*#peer.stratum.count            | count |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Metric name             | Unit  |
|:------------------------|:------|
| system.files.open.count | count |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Metric name                                          | Unit  |
|:-----------------------------------------------------|:------|
| *interface*#status                                   | N/A   |
| *interface*#interface.packets.in.discard.percentage  | %     |
| *interface*#interface.packets.out.discard.percentage | %     |
| *interface*#interface.packets.in.error.percentage    | %     |
| *interface*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Pending-Updates" label="Pending-Updates">

| Metric name                  | Unit  |
|:-----------------------------|:------|
| pending.updates.total.count  | count |
| security.updates.total.count | count |
| *updates*#update             | N/A   |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *processes*#time                              | N/A   |
| *processes*#memory-usage                      | N/A   |
| *processes*#cpu-utilization                   | N/A   |
| *processes*#disks-read                        | N/A   |
| *processes*#disks-write                       | N/A   |
| processes.total.count                         | count |
| processes.memory.usage.bytes                  | B     |
| processes.cpu.utilization.percentage          | %     |
| processes.disks.io.read.usage.bytespersecond  | B/s   |
| processes.disks.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Protocol-Telegraf-Agent" label="Protocol-Telegraf-Agent">

No metrics for this service.

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name           | Unit  |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Systemd-Journal" label="Systemd-Journal">

| Metric name           | Unit  |
|:----------------------|:------|
| journal.entries.count | count |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| systemd.services.running.count | count |
| systemd.services.failed.count  | count |
| systemd.services.dead.count    | count |
| systemd.services.exited.count  | count |
| *sc*#status                    | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Metric name                                     | Unit  |
|:------------------------------------------------|:------|
| *interface*#status                              | N/A   |
| *interface*#interface.traffic.in.bitspersecond  | b/s   |
| *interface*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prerequisites

The prerequisites below have to be applied to the Linux servers to be monitored.

### Network flow

Two TCP flows must be open from the host to the poller.

| Source | Destination    | Protocol | Port | Purpose |
| ------ | -------------- | --------- | ---- | --- |
| Monitored host | Poller | TCP       | 1443 | Access to the Telegraf agent's configuration. |
| Monitored host | Poller | TCP       | 4317 | OpenTelemetry data flow. |

### System prerequisites on the poller

> To be able to use the Telegraf agent, you must use a poller with at least version `24.04.2` of `centreon-engine`. The Telegraf agent will configure itself via a HTTPS request sent to Centreon Engine.

1. For this to work, you must first get a valid certificate or generate a self-signed one on the poller as detailed below.

> In the command below, replace `${HOSTNAME}` with the poller's FQDN if they don't match.
> If you set an IP address in the access parameters to the configuration server instead of an FQDN,
> the Telegraf agent will refuse the certificate.

```bash
openssl req -new -subj "/CN=${HOSTNAME}" -addext "subjectAltName = DNS:${HOSTNAME}" -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout /etc/centreon-engine/conf-server.key -out /etc/centreon-engine/conf-server.crt
chown centreon-engine: /etc/centreon-engine/conf-*
```

> The `-days 365` option limits the certificate validity to one year. You may choose a longer or shorter duration according to your security/maintainance preferences.

2. Then provide Engine with the connection information it needs to give to the Telegraf agent so that it can send information to Engine.

```bash
cat > /etc/centreon-engine/otl_server.json <<EOF
{
    "otel_server": {
        "host": "0.0.0.0",
        "port": 4317,
        "encryption": true,
        "certificate_path": "/etc/centreon-engine/conf-server.crt",
        "key_path": "/etc/centreon-engine/conf-server.key"
    },
    "max_length_grpc_log": 0,
    "telegraf_conf_server": {
        "http_server" : {
            "port": 1443,
            "encryption": true,
            "certificate_path": "/etc/centreon-engine/conf-server.crt",
            "key_path": "/etc/centreon-engine/conf-server.key"
        },
        "engine_otel_endpoint": "${HOSTNAME}:4317",
        "check_interval":60
    }
}
EOF
chown centreon-engine: /etc/centreon-engine/otl_server.json
```

### Configure Engine

1. In the **Configuration > Pollers > Engine configuration** menu, on the **Data** tab, add an entry to the Broker modules to load and enter the `/usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json` directive. Save the form.

2. Export the poller's configuration, selecting the **Restart** option.

### System prerequisites on the monitored host

The prerequisites below must be met on the Linux servers to monitor with the Telegraf agent.

> In the next steps, replace `mypoller.local` with the poller's FQDN. Make sure you use **the same FQDN as the one used to create the certificate**.

1. Accept the poller's certificate (if it has been self-signed).

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
openssl s_client -connect mypoller.local:1443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' >  /etc/pki/ca-trust/source/anchors/mypoller.local.crt
update-ca-trust
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
openssl s_client -connect mypoller.local:1443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' >  /etc/pki/ca-trust/source/anchors/mypoller.local.crt
update-ca-trust
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
openssl s_client -connect mypoller.local:1443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /usr/local/share/ca-certificates/mypoller.local.crt
update-ca-certificates -f
```

</TabItem>
</Tabs>

Check the certificate's validity with this command:

```bash
curl https://mypoller.local:1443/engine
```

At this stage, the expected response is:

```html
<html><body>No host service found from get parameters</body></html>
```

2. Install the Telegraf agent and some dependencies.

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

dnf install -y telegraf
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

dnf install -y telegraf
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

If errors regarding the **Sury** repository appear, run `apt-key adv --fetch-keys 'https://packages.sury.org/php/apt.gpg' > /dev/null 2>&1` then `apt-get update`.

```bash
apt-get -y install telegraf
```

</TabItem>
</Tabs>

3. Set up the Telegraf agent so that it retrieves its configuration from the poller.

```bash
cat > /etc/default/telegraf <<EOF
TELEGRAF_OPTS='--config-url-watch-interval 120s --config=https://mypoller.local:1443/engine?host=$HOSTNAME'
EOF
systemctl restart telegraf
```

> - Make sure you replace `mypoller.local` with the poller's FQDN.
> - If the name of the host to monitor is different from the `$HOSTNAME` variable's content, you'll have to change it inside the `/etc/default/telegraf` file.

4. To allow the Telegraf agent to run checks on **systemd-journal**, run these commands.

```bash
usermod -a -G systemd-journal telegraf
systemctl restart telegraf
```
5. Add the Centreon plugins repository and install the local Linux plugin.

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

dnf install -y centreon-plugin-Operatingsystems-Linux-Local.noarch
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
apt-get update && apt-get -y install centreon-plugin-operatingsystems-linux-local
```

</TabItem>
</Tabs>

6. Restart the **telegraf** service.

```bash
systemctl restart telegraf
```

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-operatingsystems-linux-telegraf-agent
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-linux-telegraf-agent
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-linux-telegraf-agent
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-linux-telegraf-agent
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Linux Telegraf-Agent** connector through
the **Configuration > Monitoring Connector Manager** menu.

3. Add the new connector.

In the **Configuration > Commands > Connectors** menu, click **Add** and fill the form as detailed below.

| Parameter                 | Value                                                                                                                                                                                                                           |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connector Name         | Telegraf Agent                                                                                                                                                                                                                   |
| Connector Description | Telegraf Agent                                                                                                                                                                                                                   |
| Command Line         | `opentelemetry --processor=nagios_telegraf --extractor=attributes --host_path=resourceMetrics.scopeMetrics.metrics.dataPoints.attributes.host --service_path=resourceMetrics.scopeMetrics.metrics.dataPoints.attributes.service` |
| Used by command   | Select all the commands whose names match `OS-Linux-Telegraf-Agent-*`                                                                                                                                           |
| Connector Status      | Enabled                                                                                                                                                                                                                           |

### Plugin

This monitoring connector relies on an integration supported by Centreon Engine and does not require any particular plugin on the pollers.

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **OS-Linux-Telegraf-Agent-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                                                                                                                        | Valeur par défaut            | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| TELEGRAFPLUGINS      | Path where the Centreon Plugins can be found.                                                                                                      | `/usr/lib/centreon/plugins` |      X      |
| TELEGRAFSTATEFILEDIR | Define the cache directory.                                                                                                                        | `/var/lib/telegraf`          |      X      |
| TELEGRAFEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                              |             |


5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Macro          | Description                                                                                                                                       | Default value     | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND        | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                                                                           |                   | X           |
| COMMANDOPTIONS | Command options (default: none)                                                                                                                   |                   |             |
| THRESHOLDS     | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem |                   | X           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                |                   |             |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CONNECTIONCOMMAND | Default mode for parsing and command: 'netstat' (default) or 'ss'                                  | ss                | X           |
| WARNING           | Warning threshold for total connections                                                            |                   |             |
| CRITICAL          | Critical threshold for total connections                                                           |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE  | Warning threshold average CPU utilization                                                          |                   |             |
| CRITICALAVERAGE | Critical threshold average CPU utilization                                                         |                   |             |
| WARNINGCORE     | Warning thresholds for each CPU core                                                               |                   |             |
| CRITICALCORE    | Critical thresholds for each CPU core                                                              |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLE  | Warning threshold in percent                                                                       |                   |             |
| CRITICALIDLE | Critical threshold in percent                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Macro              | Description                                                                                        | Default value     | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERPARTITIONAME | Filter partition name (regexp can be used)                                                         |                   |             |
| WARNINGREADUSAGE   | Thresholds                                                                                         |                   |             |
| CRITICALREADUSAGE  | Thresholds                                                                                         |                   |             |
| WARNINGREADWAIT    | Thresholds                                                                                         |                   |             |
| CRITICALREADWAIT   | Thresholds                                                                                         |                   |             |
| WARNINGSVCTIME     | Thresholds                                                                                         |                   |             |
| CRITICALSVCTIME    | Thresholds                                                                                         |                   |             |
| WARNINGUTILS       | Thresholds                                                                                         |                   |             |
| CRITICALUTILS      | Thresholds                                                                                         |                   |             |
| WARNINGWRITEUSAGE  | Thresholds                                                                                         |                   |             |
| CRITICALWRITEUSAGE | Thresholds                                                                                         |                   |             |
| WARNINGWRITEWAIT   | Thresholds                                                                                         |                   |             |
| CRITICALWRITEWAIT  | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose --skip  |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMOUNTPOINT | Filter filesystem mount point (regexp can be used)                                                 |                   |             |
| WARNING          | Warning threshold                                                                                  |                   |             |
| CRITICAL         | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Macro        | Description                                                                                                                                | Default value     | Mandatory   |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES        | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   | X           |
| FILTERPLUGIN | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNING      | Warning threshold in seconds for each files/directories (diff time)                                                                        |                   |             |
| CRITICAL     | Critical threshold in seconds for each files/directories (diff time)                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                         | --verbose         |             |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Macro         | Description                                                                                                                                | Default value     | Mandatory   |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES         | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   | X           |
| FILTERPLUGIN  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNINGONE    | Warning threshold in bytes for each files/directories                                                                                      |                   |             |
| CRITICALONE   | Critical threshold in bytes for each files/directories                                                                                     |                   |             |
| WARNINGTOTAL  | Warning threshold in bytes for all files/directories                                                                                       |                   |             |
| CRITICALTOTAL | Critical threshold in bytes for all files/directories                                                                                      |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                         | --verbose         |             |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMOUNTPOINT | Filter filesystem mount point (regexp can be used)                                                 |                   |             |
| WARNING          | Warning threshold in percent                                                                       |                   |             |
| CRITICAL         | Critical threshold in percent                                                                      |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                            | test              | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                            | test              | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                |                   |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Thresholds.                                                                                                   |                   |             |
| CRITICAL     | Thresholds.                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro           | Description                                                                                                                                                         | Default value                | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| NTPCOMMAND      | Default mode for parsing and command: 'ntpq' (default), 'chronyc' or 'all'                                                                                          | all                          |             |
| FILTERPEERNAME  | Filter peer name (can be a regexp)                                                                                                                                  | .*                           |             |
| FILTERPEERSTATE | Filter peer state (can be a regexp)                                                                                                                                 | .*                           |             |
| WARNINGOFFSET   | Warning threshold offset deviation value in milliseconds                                                                                                            |                              |             |
| CRITICALOFFSET  | Critical threshold offset deviation value in milliseconds                                                                                                           |                              |             |
| WARNINGPEERS    | Warning threshold minimum amount of NTP-Server                                                                                                                      |                              |             |
| CRITICALPEERS   | Critical threshold minimum amount of NTP-Server                                                                                                                     |                              |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}  |                              |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display} |                              |             |
| WARNINGSTRATUM  | Warning threshold                                                                                                                                                   |                              |             |
| CRITICALSTRATUM | Critical threshold                                                                                                                                                  |                              |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                  | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Macro          | Description                                                                                        | Default value                | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERAPPNAME  | Filter application name (can be a regexp)                                                          |                              |             |
| FILTERUSERNAME | Filter username name (can be a regexp)                                                             |                              |             |
| FILTERPID      | Filter PID (can be a regexp)                                                                       |                              |             |
| WARNING        | Thresholds                                                                                         |                              |             |
| CRITICAL       | Thresholds                                                                                         |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose --use-new-perfdata |             |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Macro              | Description                                                                                        | Default value           | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERINTERFACE    | Filter interface name (regexp can be used)                                                         |                         |             |
| FILTERSTATE        | Filter filesystem type (regexp can be used)                                                        |                         |             |
| WARNINGINDISCARD   | Thresholds.                                                                                        |                         |             |
| CRITICALINDISCARD  | Thresholds.                                                                                        |                         |             |
| WARNINGINERROR     | Thresholds.                                                                                        |                         |             |
| CRITICALINERROR    | Thresholds.                                                                                        |                         |             |
| WARNINGOUTDISCARD  | Thresholds.                                                                                        |                         |             |
| CRITICALOUTDISCARD | Thresholds.                                                                                        |                         |             |
| WARNINGOUTERROR    | Thresholds.                                                                                        |                         |             |
| CRITICALOUTERROR   | Thresholds.                                                                                        |                         |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose --no-loopback |             |

</TabItem>
<TabItem value="Pending-Updates" label="Pending-Updates">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OSMODE           | Default mode for parsing and command: 'rhel' (default), 'debian', 'suse'                           | rhel              |             |
| FILTERPACKAGE    | Filter package name                                                                                |                   |             |
| FILTERREPOSITORY | Filter repository name                                                                             |                   |             |
| WARNINGTOTAL     | Warning threshold for total amount of pending updates                                              |                   |             |
| CRITICALTOTAL    | Critical threshold for total amount of pending updates                                             |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro         | Description                                                                                                                                           | Default value     | Mandatory   |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOMMAND | Filter process commands (regexp can be used)                                                                                                          |                   |             |
| FILTERARG     | Filter process arguments (regexp can be used)                                                                                                         |                   |             |
| FILTERSTATE   | Filter process states (regexp can be used). You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep' |                   |             |
| WARNINGTIME   | Thresholds                                                                                                                                            |                   |             |
| CRITICALTIME  | Thresholds                                                                                                                                            |                   |             |
| WARNINGTOTAL  | Thresholds                                                                                                                                            |                   |             |
| CRITICALTOTAL | Thresholds                                                                                                                                            |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                    | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                    |                   |             |
| CRITICAL     | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Systemd-Journal" label="Systemd-Journal">

| Macro           | Description                                                                                                                                                     | Default value     | Mandatory   |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SINCE           | Defines the amount of time to look back at messages. Can beminutes (ie 5 "minutes ago") or 'cache' to use the timestamp from last execution. (default: 'cache') | cache             |             |
| TIMEZONE        | Defines the timezone to convert date/time to the host timezone when using timestamp from cache. (default: 'local')                                              | local             |             |
| UNIT            | Only look for messages of the specified unit, ie the name of thesystemd service who created the message                                                         |                   |             |
| FILTERMESSAGE   | Filter on message content (can be a regexp)                                                                                                                     |                   |             |
| WARNINGENTRIES  | Thresholds on the number of entries found in the journal for the specified parameters                                                                           |                   |             |
| CRITICALENTRIES | Thresholds on the number of entries found in the journal for the specified parameters                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                              |                   |             |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Macro                | Description                                                                                                                                                                                                                                                                                                                                                                                                                             | Default value                | Mandatory   |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERNAME           | Filter service name (can be a regexp)                                                                                                                                                                                                                                                                                                                                                                                                   | .*                           |             |
| EXCLUDENAME          | Exclude service name (can be a regexp)                                                                                                                                                                                                                                                                                                                                                                                                  |                              |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot} Example of statuses for the majority of these variables: %{active}: active, inactive %{sub}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %{load}: loaded, not-found %{boot}: enabled, disabled, static, indirect                                      |                              |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%{active} =~ /failed/i'). You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot} Example of statuses for the majority of these variables: %{active}: active, inactive %{sub}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %{load}: loaded, not-found %{boot}: enabled, disabled, static, indirect |                              |             |
| WARNINGTOTALDEAD     | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| CRITICALTOTALDEAD    | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| WARNINGTOTALEXITED   | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| CRITICALTOTALEXITED  | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| CRITICALTOTALFAILED  | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              | 0                            |             |
| WARNINGTOTALFAILED   | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| WARNINGTOTALRUNNING  | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| CRITICALTOTALRUNNING | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                                                                                                                                                                                      | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATE     | Filter interfaces type (regexp can be used)                                                        | RU                |             |
| FILTERINTERFACE | Filter interface name (regexp can be used)                                                         |                   |             |
| SPEED           | Set interface speed (in Mb)                                                                        |                   | X           |
| WARNINGIN       | Warning threshold in percent for 'in' traffic                                                      |                   |             |
| CRITICALIN      | Critical threshold in percent for 'in' traffic                                                     |                   |             |
| WARNINGOUT      | Warning threshold in percent for 'out' traffic                                                     |                   |             |
| CRITICALOUT     | Critical threshold in percent for 'out' traffic                                                    |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in seconds                                                                       |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Linux host CLI using the
**root** user account. Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
sudo -u telegraf /usr/lib/centreon/plugins/centreon_linux_local.pl \
    --plugin='os::linux::local::plugin' \
    --mode='cpu' \
    --warning-core='99' \
    --critical-core='' \
    --warning-average='40' \
    --critical-average='' \
    --statefile-dir='/var/lib/telegraf'
```

The expected command output is shown below:

```bash
OK: CPU(s) average usage is 2.95 % | 'cpu.utilization.percentage'=2.95%;0:40;;0;100 '0#core.cpu.utilization.percentage'=3.07%;0:99;;0;100 '1#core.cpu.utilization.percentage'=2.83%;0:99;;0;100
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
sudo -u telegraf /usr/lib/centreon/plugins/centreon_linux_local.pl \
    --plugin='os::linux::local::plugin' \
    --list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                    | Linked service template                                                                                                     |
|:----------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| check-plugin [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/checkplugin.pm)]                 | Not used in this Monitoring Connector                                                                                       |
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cmdreturn.pm)]                     | OS-Linux-Cmd-Generic-Telegraf-Agent-custom<br />OS-Linux-Is-File-Generic-Telegraf-Agent-custom<br />OS-Linux-Is-Not-File-Generic-Telegraf-Agent-custom |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/connections.pm)]                  | OS-Linux-Connections-Generic-Telegraf-Agent-custom                                                                                   |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpu.pm)]                                  | OS-Linux-Cpu-Telegraf-Agent-custom                                                                                                   |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpudetailed.pm)]                 | OS-Linux-Cpu-Detailed-Telegraf-Agent-custom                                                                                          |
| discovery-snmp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmp.pm)]             | Not used in this Monitoring Connector                                                                                       |
| discovery-snmpv3 [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmpv3.pm)]         | Not used in this Monitoring Connector                                                                                       |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/diskio.pm)]                            | OS-Linux-Disk-IO-Telegraf-Agent-custom                                                                                               |
| files-date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filesdate.pm)]                     | OS-Linux-File-Date-Generic-Telegraf-Agent-custom                                                                                     |
| files-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filessize.pm)]                     | OS-Linux-File-Size-Generic-Telegraf-Agent-custom                                                                                     |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/inodes.pm)]                            | OS-Linux-Inodes-Telegraf-Agent-custom                                                                                                |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listinterfaces.pm)]           | Used for service discovery                                                                                                  |
| list-partitions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listpartitions.pm)]           | Not used in this Monitoring Connector                                                                                       |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/liststorages.pm)]               | Used for service discovery                                                                                                  |
| list-systemdservices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listsystemdservices.pm)] | Not used in this Monitoring Connector                                                                                       |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/loadaverage.pm)]                         | OS-Linux-Load-Telegraf-Agent-custom                                                                                                  |
| lvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/lvm.pm)]                                  | Not used in this Monitoring Connector                                                                                       |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/memory.pm)]                            | OS-Linux-Memory-Telegraf-Agent-custom                                                                                                |
| mountpoint [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/mountpoint.pm)]                    | Not used in this Monitoring Connector                                                                                       |
| ntp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/ntp.pm)]                                  | OS-Linux-Ntp-Telegraf-Agent-custom                                                                                                   |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/openfiles.pm)]                     | OS-Linux-Open-Files-Telegraf-Agent-custom                                                                                            |
| packet-errors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/packeterrors.pm)]               | OS-Linux-Packet-Errors-Telegraf-Agent-custom                                                                                         |
| paging [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/paging.pm)]                            | Not used in this Monitoring Connector                                                                                       |
| pending-updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/pendingupdates.pm)]           | OS-Linux-Pending-Updates-Telegraf-Agent-custom                                                                                       |
| process [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/process.pm)]                          | OS-Linux-Process-Generic-Telegraf-Agent-custom                                                                                       |
| quota [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/quota.pm)]                              | Not used in this Monitoring Connector                                                                                       |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/storage.pm)]                          | OS-Linux-Disks-Telegraf-Agent-custom                                                                                                 |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/swap.pm)]                                | OS-Linux-Swap-Telegraf-Agent-custom                                                                                                  |
| systemd-journal [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/systemdjournal.pm)]           | OS-Linux-Systemd-Journal-Telegraf-Agent-custom                                                                                       |
| systemd-sc-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/systemdscstatus.pm)]        | OS-Linux-Systemd-Sc-Status-Telegraf-Agent-custom                                                                                     |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/traffic.pm)]                          | OS-Linux-Traffic-Telegraf-Agent-custom                                                                                               |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/uptime.pm)]                            | OS-Linux-Uptime-Telegraf-Agent-custom                                                                                                |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sudo  sudo command                       | .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (default: none).                                                                                                                       |
| --exec-command-options | Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning     | Warning threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --critical    | Critical threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --service     | Check tcp connections following rules: tag,\[type\],\[state\],\[port-src\],\[port-dst\],\[filter-ip-src\],\[filter -ip-dst\],\[threshold-warning\],\[threshold-critical\]  Example to test SSH connections on the server: --service="ssh,,,22,,,,10,20"  \<tag\>           Name to identify service (must be unique and     couldn't be 'total').  \<type\>          regexp - can use 'ipv4', 'ipv6', 'udp', 'udp6'.     Empty means all.  \<state\>         regexp - can use 'finWait1', 'established',...     Empty means all (minus listen). For udp     connections, there are 'established' and     'listen'.  \<filter-ip-*\>   regexp - can use to exclude or include some IPs.  \<threshold-*\>   nagios-perfdata - number of connections.   |
| --application | Check tcp connections of mutiple services: tag,\[services\],\[threshold-warning\],\[threshold-critical\]  Example: --application="web,http\|https,100,200"  \<tag\>           Name to identify application (must be unique).  \<services\>      List of services (used the tag name. Separated     by '\|').  \<threshold-*\>   nagios-perfdata - number of connections.                                                                                                                                                                                                                                                                                                                                                                             |
| --con-mode    | Default mode for parsing and command: 'netstat' (default) or 'ss'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-average      | Warning threshold average CPU utilization.                                                                                                                                                                                                    |
| --critical-average     | Critical threshold average CPU utilization.                                                                                                                                                                                                   |
| --warning-core         | Warning thresholds for each CPU core                                                                                                                                                                                                          |
| --critical-core        | Critical thresholds for each CPU core                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                        |
| --critical-*           | Critical threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                       |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'read-usage', 'write-usage', 'read-wait', 'write-wait', 'svctime', 'utils'.                                                                                                                                               |
| --filter-partition-name  | Filter partition name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-partition-name | Exclude partition name (regexp can be used).                                                                                                                                                                                                  |
| --bytes-per-sector       | Bytes per sector (default: 512)                                                                                                                                                                                                               |
| --interrupt-frequency    | Linux Kernel Timer Interrupt Frequency (default: 1000)                                                                                                                                                                                        |
| --skip                   | Skip partitions with 0 sectors read/write.                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option               | Description                                            |
|:---------------------|:-------------------------------------------------------|
| --warning-usage      | Warning threshold.                                     |
| --critical-usage     | Critical threshold.                                    |
| --units              | Units of thresholds (default: '%') ('%', 'B').         |
| --free               | Thresholds are on free space left.                     |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   |
| --filter-type        | Filter filesystem type (regexp can be used).           |
| --filter-fs          | Filter filesystem (regexp can be used).                |
| --exclude-fs         | Exclude filesystem (regexp can be used).               |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Option          | Description                                                                                                                                            |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files         | Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning       | Warning threshold in seconds for each files/directories (diff time).                                                                                   |
| --critical      | Critical threshold in seconds for each files/directories (diff time).                                                                                  |
| --separate-dirs | Do not include size of subdirectories.                                                                                                                 |
| --max-depth     | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --time          | Check another time than modified time.                                                                                                                 |
| --exclude-du    | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Option           | Description                                                                                                                                            |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files          | Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning-one    | Warning threshold in bytes for each files/directories.                                                                                                 |
| --critical-one   | Critical threshold in bytes for each files/directories.                                                                                                |
| --warning-total  | Warning threshold in bytes for all files/directories.                                                                                                  |
| --critical-total | Critical threshold in bytes for all files/directories.                                                                                                 |
| --separate-dirs  | Do not include size of subdirectories.                                                                                                                 |
| --max-depth      | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --all-files      | Add files when you check directories.                                                                                                                  |
| --exclude-du     | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Option               | Description                                            |
|:---------------------|:-------------------------------------------------------|
| --warning-usage      | Warning threshold in percent.                          |
| --critical-usage     | Critical threshold in percent.                         |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   |
| --filter-type        | Filter filesystem type (regexp can be used).           |
| --filter-fs          | Filter filesystem (regexp can be used).                |
| --exclude-fs         | Exclude filesystem (regexp can be used).               |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (default: none).                                                                                                                       |
| --exec-command-options | Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (default: none).                                                                                                                       |
| --exec-command-options | Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             |
|:-----------|:----------------------------------------|
| --warning  | Warning threshold (1min,5min,15min).    |
| --critical | Critical threshold (1min,5min,15min).   |
| --average  | Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --swap                   | Check swap also.                                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%), 'memory-available' (B), 'memory-available-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'slab' (B).    |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option             | Description                                                                                                                                                            |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ntp-mode         | Default mode for parsing and command: 'ntpq' (default), 'chronyc' or 'all'.                                                                                            |
| --filter-name      | Filter peer name (can be a regexp).                                                                                                                                    |
| --filter-state     | Filter peer state (can be a regexp).                                                                                                                                   |
| --warning-peers    | Warning threshold minimum amount of NTP-Server                                                                                                                         |
| --critical-peers   | Critical threshold minimum amount of NTP-Server                                                                                                                        |
| --warning-offset   | Warning threshold offset deviation value in milliseconds                                                                                                               |
| --critical-offset  | Critical threshold offset deviation value in milliseconds                                                                                                              |
| --warning-stratum  | Warning threshold.                                                                                                                                                     |
| --critical-stratum | Critical threshold.                                                                                                                                                    |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}     |
| --warning-status   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}     |
| --critical-status  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}    |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Option                   | Description                                  |
|:-------------------------|:---------------------------------------------|
| --filter-appname         | Filter application name (can be a regexp).   |
| --filter-username        | Filter username name (can be a regexp).      |
| --filter-pid             | Filter PID (can be a regexp).                |
| --warning-* --critical-* | Thresholds. Can be: 'files-open'.            |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --unknown-status       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                                                                                                                       |
| --warning-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                                                                                       |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{status} ne "RU"'). You can use the following variables: %%{status}, %{display}                                                                                      |
| --warning-*            | Warning threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                           |
| --critical-*           | Critical threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                          |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --filter-state         | Filter filesystem type (regexp can be used).                                                                                                                                                                                                  |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Pending-Updates" label="Pending-Updates">

| Option              | Description                                                                                     |
|:--------------------|:------------------------------------------------------------------------------------------------|
| --os-mode           | Default mode for parsing and command: 'rhel' (default), 'debian', 'suse'.                       |
| --warning-total     | Warning threshold for total amount of pending updates.                                          |
| --critical-total    | Critical threshold for total amount of pending updates.                                         |
| --warning-security  | Warning threshold for total amount of pending security updates.                                 |
| --critical-security | Critical threshold for total amount of pending security updates.                                |
| --filter-package    | Filter package name.                                                                            |
| --filter-repository | Filter repository name.                                                                         |
| --check-security    | Display number of pending security updates.  Only available for Red Hat-Based distributions.    |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --add-cpu                | Monitor CPU usage.                                                                                                                                                                                                                            |
| --add-memory             | Monitor memory usage. It's inaccurate but it provides a trend.                                                                                                                                                                                |
| --add-disk-io            | Monitor disk I/O.                                                                                                                                                                                                                             |
| --filter-command         | Filter process commands (regexp can be used).                                                                                                                                                                                                 |
| --exclude-command        | Exclude process commands (regexp can be used).                                                                                                                                                                                                |
| --filter-arg             | Filter process arguments (regexp can be used).                                                                                                                                                                                                |
| --exclude-arg            | Exclude process arguments (regexp can be used).                                                                                                                                                                                               |
| --filter-ppid            | Filter process ppid (regexp can be used).                                                                                                                                                                                                     |
| --filter-state           | Filter process states (regexp can be used). You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep'.                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'total-memory-usage', 'total-cpu-utilization', 'total-disks-read', 'total-disks-write', 'time', 'memory-usage', 'cpu-utilization', 'disks-read', 'disks-write'.                                                  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                         |
|:-------------------------|:------------------------------------------------------------------------------------|
| --no-swap                | Threshold if no active swap (default: 'critical').                                  |
| --warning-* --critical-* | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%).    |

</TabItem>
<TabItem value="Systemd-Journal" label="Systemd-Journal">

| Option                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                          | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --redis-server                       | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-attribute                    | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-db                           | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --failback-file                      | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --memexpiration                      | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-dir                      | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-suffix                   | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-concat-cwd               | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-format                   | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-key                      | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --statefile-cipher                   | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --no-pager                           |      Examples:      Look for sent emails by Postfix:      # perl centreon\_plugins.pl --plugin=os::linux::local::plugin     entries~Emails sent'      OK: Emails sent: 17 \| 'emails.sent.count'=17;;;0;      Look for Puppet errors:      # perl centreon\_plugins.pl --plugin=os::linux::local::plugin      OK: Journal entries: 1 \| 'journal.entries.count'=1;;;0;      Look for the number of Centreon Engine reloads      # perl centreon\_plugins.pl --plugin=os::linux::local::plugin     last hour'      OK: Centreon Engine reloads over the last hour: 0 \|     'centreon.engine.reload.count'=0;;;0;   |
| --unit                               | Only look for messages of the specified unit, ie the name of thesystemd service who created the message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-message                     | Filter on message content (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --since                              | Defines the amount of time to look back at messages. Can beminutes (ie 5 "minutes ago") or 'cache' to use the timestamp from last execution. (default: 'cache')                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timezone                           | Defines the timezone to convert date/time to the host timezone when using timestamp from cache. (default: 'local')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --warning-entries --critical-entries | Thresholds on the number of entries found in the journal for the specified parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter service name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                     |
| --exclude-name           | Exclude service name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-* --critical-* | Thresholds. Can be: 'total-running', 'total-dead', 'total-exited', 'total-failed'.                                                                                                                                                                                                                                                                                                                                                         |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot} Example of statuses for the majority of these variables: %{active}: active, inactive %{sub}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %{load}: loaded, not-found %{boot}: enabled, disabled, static, indirect                                         |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{active} =~ /failed/i'). You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot} Example of statuses for the majority of these variables: %{active}: active, inactive %{sub}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %{load}: loaded, not-found %{boot}: enabled, disabled, static, indirect    |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-in           | Warning threshold in percent for 'in' traffic.                                                                                                                                                                                                |
| --critical-in          | Critical threshold in percent for 'in' traffic.                                                                                                                                                                                               |
| --warning-out          | Warning threshold in percent for 'out' traffic.                                                                                                                                                                                               |
| --critical-out         | Critical threshold in percent for 'out' traffic.                                                                                                                                                                                              |
| --unknown-status       | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{status}, %{display}                                                                                                         |
| --warning-status       | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{display}                                                                                                         |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{status} ne "RU"'). You can use the following variables: %{status}, %{display}                                                                                       |
| --units                | Units of thresholds (default: 'b/s') ('%', 'b/s'). Percent canbe used only if --speed is set.                                                                                                                                                 |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --filter-state         | Filter interfaces type (regexp can be used).                                                                                                                                                                                                  |
| --speed                | Set interface speed (in Mb).                                                                                                                                                                                                                  |
| --guess-speed          | Try to guess speed with commands ethtool and iwconfig.                                                                                                                                                                                        |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                      |
|:-----------|:---------------------------------|
| --warning  | Warning threshold in seconds.    |
| --critical | Critical threshold in seconds.   |
| --seconds  | Display uptime in seconds.       |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
sudo -u telegraf /usr/lib/centreon/plugins/centreon_linux_local.pl \
    --plugin='os::linux::local::plugin' \
    --mode='cpu' \
    --help
```
