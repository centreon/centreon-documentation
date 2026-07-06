---
id: applications-virtualization-nutanix-prism-restapi
title: Nutanix Prism Element REST API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The **Nutanix Prism Element REST API** virtualization connector supervises Nutanix
hyperconverged infrastructure through the Prism Element management interface.

It covers the full stack: cluster health, physical hosts, virtual machines,
storage, replication, NCC health checks, alerts, and background tasks — all
through a single API connection on port 9440.

| Feature | Detail |
|---|---|
| API | Nutanix Prism Element REST API v2.0 |
| Port | 9440/TCP (HTTPS) |
| Authentication | HTTP Basic Auth |
| Prism version | Prism Element 5.x and later |

---

## Pack Assets

### Host Template

| Template | Description |
|---|---|
| `App-virtualization-Nutanix-Prism-Restapi-custom` | Applied to the Prism Element controller VM (CVM) or cluster VIP address |

### Service Templates

| Service Alias | Template Name | Description |
|---|---|---|
| Alerts | `App-virtualization-Nutanix-Prism-Alerts-Restapi-custom` | Active unresolved alerts by severity |
| Capacity | `App-virtualization-Nutanix-Prism-Capacity-Restapi-custom` | Cluster-wide CPU, memory and storage capacity |
| Cluster-Status | `App-virtualization-Nutanix-Prism-Cluster-Status-Restapi-custom` | Cluster health state and node count |
| Disks-Status | `App-virtualization-Nutanix-Prism-Disks-Status-Restapi-custom` | Per-disk health status and capacity |
| Health-Checks | `App-virtualization-Nutanix-Prism-Health-Checks-Restapi-custom` | NCC health check results (PASS/FAIL/WARNING/ERROR) |
| Hosts-Usage | `App-virtualization-Nutanix-Prism-Hosts-Usage-Restapi-custom` | Per-host CPU, memory and VM count |
| Protection-Domains | `App-virtualization-Nutanix-Prism-Protection-Domains-Restapi-custom` | Protection domain replication health and pending count |
| Snapshots | `App-virtualization-Nutanix-Prism-Snapshots-Restapi-custom` | VM snapshot count and age |
| Storage-Containers | `App-virtualization-Nutanix-Prism-Storage-Containers-Restapi-custom` | Storage container usage, compression and dedup savings |
| Storage-Usage | `App-virtualization-Nutanix-Prism-Storage-Usage-Restapi-custom` | Storage pool used/free bytes and usage percentage |
| Tasks | `App-virtualization-Nutanix-Prism-Tasks-Restapi-custom` | Recent background task counts by status |
| Vms-Count | `App-virtualization-Nutanix-Prism-Vms-Count-Restapi-custom` | Total VM count, split by power state |
| Vms-Nics | `App-virtualization-Nutanix-Prism-Vms-Nics-Restapi-custom` | Per-VM NIC link state and traffic |
| Vms-Performance | `App-virtualization-Nutanix-Prism-Vms-Performance-Restapi-custom` | Per-VM CPU and memory usage percentage |

### Discovery Rules

| Rule | Description | Mode |
|---|---|---|
| `App-virtualization-Nutanix-Prism-Hosts` | Discovers physical AHV hosts | `list-hosts` |
| `App-virtualization-Nutanix-Prism-Vms` | Discovers virtual machines | `list-vms` |
| `App-virtualization-Nutanix-Prism-Vms-Nics` | Discovers VM NICs | `list-nics` |
| `App-virtualization-Nutanix-Prism-Protection-Domains` | Discovers protection domains | `list-protection-domains` |
| `App-virtualization-Nutanix-Prism-Storage-Containers` | Discovers storage containers | `list-storage-containers` |

---

## Collected Metrics & Status

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name | Unit |
|:------------|:-----|
| `alerts.severity.critical.count` | count |
| `alerts.severity.warning.count` | count |
| `alerts.severity.info.count` | count |
| `alerts.total.count` | count |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Metric name | Unit |
|:------------|:-----|
| `cluster.cpu.capacity.count` | count |
| `cluster.cpu.allocated.count` | count |
| `cluster.cpu.usage.percentage` | % |
| `cluster.memory.capacity.bytes` | B |
| `cluster.memory.used.bytes` | B |
| `cluster.memory.usage.percentage` | % |
| `cluster.storage.capacity.bytes` | B |
| `cluster.storage.used.bytes` | B |
| `cluster.storage.free.bytes` | B |
| `cluster.storage.usage.percentage` | % |

</TabItem>
<TabItem value="Cluster-Status" label="Cluster-Status">

| Metric name | Unit |
|:------------|:-----|
| `cluster.nodes.count` | count |
| `status` | N/A |

</TabItem>
<TabItem value="Disks-Status" label="Disks-Status">

| Metric name | Unit |
|:------------|:-----|
| `disk.capacity.bytes` | B |
| `disk.free.bytes` | B |
| `disk.usage.percentage` | % |
| `status` | N/A |

</TabItem>
<TabItem value="Health-Checks" label="Health-Checks">

| Metric name | Unit |
|:------------|:-----|
| `healthchecks.pass.count` | count |
| `healthchecks.fail.count` | count |
| `healthchecks.warning.count` | count |
| `healthchecks.error.count` | count |

</TabItem>
<TabItem value="Hosts-Usage" label="Hosts-Usage">

| Metric name | Unit |
|:------------|:-----|
| `host.cpu.usage.percentage` | % |
| `host.memory.usage.percentage` | % |
| `host.vms.count` | count |
| `status` | N/A |

</TabItem>
<TabItem value="Protection-Domains" label="Protection-Domains">

| Metric name | Unit |
|:------------|:-----|
| `protection_domain.replications.pending.count` | count |
| `protection_domain.vstores.count` | count |
| `status` | N/A |

</TabItem>
<TabItem value="Snapshots" label="Snapshots">

| Metric name | Unit |
|:------------|:-----|
| `snapshots.total.count` | count |
| `vm.snapshots.count` | count |
| `vm.snapshot.oldest.age.seconds` | s |

</TabItem>
<TabItem value="Storage-Containers" label="Storage-Containers">

| Metric name | Unit |
|:------------|:-----|
| `storage.container.usage.bytes` | B |
| `storage.container.free.bytes` | B |
| `storage.container.usage.percentage` | % |
| `storage.container.compression.savings.percentage` | % |
| `storage.container.dedup.savings.percentage` | % |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Metric name | Unit |
|:------------|:-----|
| `storage.pool.usage.bytes` | B |
| `storage.pool.free.bytes` | B |
| `storage.pool.usage.percentage` | % |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Metric name | Unit |
|:------------|:-----|
| `tasks.running.count` | count |
| `tasks.succeeded.count` | count |
| `tasks.failed.count` | count |
| `tasks.aborted.count` | count |

</TabItem>
<TabItem value="Vms-Count" label="Vms-Count">

| Metric name | Unit |
|:------------|:-----|
| `vms.total.count` | count |
| `vms.on.count` | count |
| `vms.off.count` | count |

</TabItem>
<TabItem value="Vms-Nics" label="Vms-Nics">

| Metric name | Unit |
|:------------|:-----|
| `vm.nic.traffic.in.bytespersecond` | B/s |
| `vm.nic.traffic.out.bytespersecond` | B/s |
| `status` | N/A |

</TabItem>
<TabItem value="Vms-Performance" label="Vms-Performance">

| Metric name | Unit |
|:------------|:-----|
| `vm.cpu.usage.percentage` | % |
| `vm.memory.usage.percentage` | % |
| `status` | N/A |

</TabItem>
</Tabs>

---

## Prerequisites

### Nutanix side

- Nutanix Prism Element **5.x or later** (REST API v2.0).
- A dedicated virtualization account with **Cluster Viewer** role (read-only access is sufficient).
- Port **9440/TCP** open between the Centreon poller and the Prism Element CVM or cluster VIP.
- Self-signed TLS certificates are accepted by default (no additional configuration required).

### Creating the virtualization account

1. Log in to Prism Element as admin.
2. Go to **Settings → Local User Management → + New User**.
3. Create the user (e.g. `centreon-virtualization`) and assign the **Cluster Viewer** role.
4. Use this username and password in the host macros below.

---

## Installing the virtualization Connector

### Pack installation (Centreon web interface)

1. Go to **Configuration → virtualization Connector Manager**.
2. Search for **Nutanix Prism Element REST API**.
3. Click **Install**.

### Plugin installation (on pollers)

Run the following command on each poller that will monitor Nutanix infrastructure:

```bash
dnf install centreon-plugin-Applications-virtualization-Nutanix-Prism-Restapi
```

---

## Using the virtualization Connector

### Setting up a host

1. Go to **Configuration → Hosts → Hosts** and click **Add**.
2. Fill in the **Name**, **Alias** and **IP address / DNS** (Prism Element CVM or VIP).
3. Apply the template `App-virtualization-Nutanix-Prism-Restapi-custom`.
4. Set the macros described in the table below.
5. Click **Save** and deploy the configuration.

### Host macros

| Macro | Description | Default | Required |
|---|---|---|---|
| `NUTANIXPRISMHOSTNAME` | Prism Element hostname or IP address | — | Yes |
| `NUTANIXPRISMPORT` | API TCP port | `9440` | No |
| `NUTANIXPRISMPROTO` | Protocol (`http` or `https`) | `https` | No |
| `NUTANIXPRISMUSERNAME` | API username | — | Yes |
| `NUTANIXPRISMPASSWORD` | API password | — | Yes |
| `NUTANIXPRISMTIMEOUT` | HTTP request timeout (seconds) | `30` | No |
| `EXTRAOPTIONS` | Additional plugin options (e.g. `--verbose`) | — | No |

### Service templates and their macros

#### Alerts

| Macro | Description | Default |
|---|---|---|
| `WARNINGALERTSCRITICAL` | Warning threshold: number of critical alerts | — |
| `CRITICALALERTSCRITICAL` | Critical threshold: number of critical alerts | — |
| `WARNINGALERTSWARNING` | Warning threshold: number of warning alerts | — |
| `CRITICALALERTSWARNING` | Critical threshold: number of warning alerts | — |
| `WARNINGALERTSTOTAL` | Warning threshold: total alert count | — |
| `CRITICALALERTSTOTAL` | Critical threshold: total alert count | `1` |
| `WARNINGALERTSTATUS` | Warning condition on individual alert | `%{severity} eq "WARNING"` |
| `CRITICALALERTSTATUS` | Critical condition on individual alert | `%{severity} eq "CRITICAL"` |
| `EXTRAOPTIONS` | Additional options (e.g. `--filter-severity=CRITICAL`) | — |

#### Capacity

| Macro | Description | Default |
|---|---|---|
| `WARNINGCPUUSAGEPRCT` | Warning threshold: cluster CPU usage (%) | `80` |
| `CRITICALCPUUSAGEPRCT` | Critical threshold: cluster CPU usage (%) | `90` |
| `WARNINGMEMORYUSAGEPRCT` | Warning threshold: memory usage (%) | `80` |
| `CRITICALMEMORYUSAGEPRCT` | Critical threshold: memory usage (%) | `90` |
| `WARNINGSTORAGEUSAGEPRCT` | Warning threshold: storage usage (%) | `80` |
| `CRITICALSTORAGEUSAGEPRCT` | Critical threshold: storage usage (%) | `90` |

#### Cluster-Status

| Macro | Description | Default |
|---|---|---|
| `WARNINGSTATUS` | Warning condition on cluster state | — |
| `CRITICALSTATUS` | Critical condition on cluster state | `%{state} ne "NORMAL"` |

#### Disks-Status

| Macro | Description | Default |
|---|---|---|
| `WARNINGSTATUS` | Warning condition on disk state | — |
| `CRITICALSTATUS` | Critical condition on disk state | `%{status} ne "Normal"` |
| `WARNINGUSAGEPRCT` | Warning threshold: disk usage (%) | `80` |
| `CRITICALUSAGEPRCT` | Critical threshold: disk usage (%) | `90` |
| `EXTRAOPTIONS` | Additional options (e.g. `--filter-node='^node01$'`) | — |

#### Health-Checks

| Macro | Description | Default |
|---|---|---|
| `WARNINGCHECKSTATUS` | Warning condition per check | `%{state} eq "WARNING"` |
| `CRITICALCHECKSTATUS` | Critical condition per check | `%{state} =~ /^(FAIL\|ERROR)$/` |
| `WARNINGCHECKSFAIL` | Warning threshold: number of FAIL checks | — |
| `CRITICALCHECKSFAIL` | Critical threshold: number of FAIL checks | `1` |
| `EXTRAOPTIONS` | Additional options (e.g. `--only-failing`) | `--only-failing` |

#### Hosts-Usage

| Macro | Description | Default |
|---|---|---|
| `WARNINGCPUUSAGE` | Warning threshold: host CPU usage (%) | `80` |
| `CRITICALCPUUSAGE` | Critical threshold: host CPU usage (%) | `90` |
| `WARNINGMEMORYUSAGE` | Warning threshold: host memory usage (%) | `80` |
| `CRITICALMEMORYUSAGE` | Critical threshold: host memory usage (%) | `90` |
| `EXTRAOPTIONS` | Additional options (e.g. `--filter-name='^node'`) | — |

#### Protection-Domains

| Macro | Description | Default |
|---|---|---|
| `WARNINGSTATUS` | Warning condition on replication status | — |
| `CRITICALSTATUS` | Critical condition on replication status | `%{replication_status} ne "Healthy" and %{replication_status} ne "N/A"` |
| `WARNINGPENDINGREPLICATIONS` | Warning threshold: pending replication count | — |
| `CRITICALPENDINGREPLICATIONS` | Critical threshold: pending replication count | — |

#### Snapshots

| Macro | Description | Default |
|---|---|---|
| `WARNINGOLDESTAGE` | Warning threshold: oldest snapshot age (seconds) | `604800` (7 days) |
| `CRITICALOLDESTAGE` | Critical threshold: oldest snapshot age (seconds) | `2592000` (30 days) |
| `WARNINGTOTALCOUNT` | Warning threshold: total snapshot count | — |
| `CRITICALTOTALCOUNT` | Critical threshold: total snapshot count | — |

#### Storage-Containers

| Macro | Description | Default |
|---|---|---|
| `WARNINGUSAGEPRCT` | Warning threshold: container usage (%) | `80` |
| `CRITICALUSAGEPRCT` | Critical threshold: container usage (%) | `90` |
| `WARNINGCOMPRESSIONSAVINGS` | Warning threshold: compression savings (%) | — |
| `WARNINGDEDUPSAVINGS` | Warning threshold: dedup savings (%) | — |

#### Storage-Usage

| Macro | Description | Default |
|---|---|---|
| `WARNINGUSAGEPRCT` | Warning threshold: storage pool usage (%) | `80` |
| `CRITICALUSAGEPRCT` | Critical threshold: storage pool usage (%) | `90` |
| `WARNINGFREE` | Warning threshold: free space (bytes) | — |
| `CRITICALFREE` | Critical threshold: free space (bytes) | — |
| `EXTRAOPTIONS` | Additional options (e.g. `--filter-name='^pool'`) | — |

#### Tasks

| Macro | Description | Default |
|---|---|---|
| `WARNINGFAILED` | Warning threshold: number of failed tasks | — |
| `CRITICALFAILED` | Critical threshold: number of failed tasks | `1` |
| `WARNINGABORTED` | Warning threshold: number of aborted tasks | — |
| `CRITICALABORTED` | Critical threshold: number of aborted tasks | — |

#### Vms-Count

| Macro | Description | Default |
|---|---|---|
| `WARNINGON` | Warning threshold: powered-on VM count | — |
| `CRITICALON` | Critical threshold: powered-on VM count | — |
| `WARNINGOFF` | Warning threshold: powered-off VM count | — |
| `CRITICALOFF` | Critical threshold: powered-off VM count | — |

#### Vms-Nics

| Macro | Description | Default |
|---|---|---|
| `WARNINGSTATUS` | Warning condition on NIC state | — |
| `CRITICALSTATUS` | Critical condition on NIC state | `%{link_state} ne "UP"` |
| `WARNINGTRAFFICIN` | Warning threshold: inbound traffic (B/s) | — |
| `CRITICALTRAFFICIN` | Critical threshold: inbound traffic (B/s) | — |
| `EXTRAOPTIONS` | Additional options (e.g. `--filter-vm-name='^prod'`) | — |

#### Vms-Performance

| Macro | Description | Default |
|---|---|---|
| `WARNINGSTATUS` | Warning condition on VM power state | `%{power_state} ne "ON"` |
| `CRITICALSTATUS` | Critical condition on VM power state | — |
| `WARNINGCPUUSAGE` | Warning threshold: VM CPU usage (%) | `80` |
| `CRITICALCPUUSAGE` | Critical threshold: VM CPU usage (%) | `90` |
| `WARNINGMEMORYUSAGE` | Warning threshold: VM memory usage (%) | `80` |
| `CRITICALMEMORYUSAGE` | Critical threshold: VM memory usage (%) | `90` |
| `EXTRAOPTIONS` | Additional options (e.g. `--filter-name='^prod'`) | — |

---

## Available Modes

| Mode name | Linked service template | Description |
|---|---|---|
| `alerts` | `App-virtualization-Nutanix-Prism-Alerts-Restapi-custom` | Active unresolved alerts |
| `capacity` | `App-virtualization-Nutanix-Prism-Capacity-Restapi-custom` | Cluster capacity (CPU, RAM, storage) |
| `cluster-status` | `App-virtualization-Nutanix-Prism-Cluster-Status-Restapi-custom` | Cluster health state |
| `disks-status` | `App-virtualization-Nutanix-Prism-Disks-Status-Restapi-custom` | Physical disk health and capacity |
| `health-checks` | `App-virtualization-Nutanix-Prism-Health-Checks-Restapi-custom` | NCC health check results |
| `hosts-usage` | `App-virtualization-Nutanix-Prism-Hosts-Usage-Restapi-custom` | Per-host CPU, memory, VM count |
| `protection-domains` | `App-virtualization-Nutanix-Prism-Protection-Domains-Restapi-custom` | Replication health per protection domain |
| `snapshots` | `App-virtualization-Nutanix-Prism-Snapshots-Restapi-custom` | VM snapshot count and age |
| `storage-containers` | `App-virtualization-Nutanix-Prism-Storage-Containers-Restapi-custom` | Storage container usage and savings |
| `storage-usage` | `App-virtualization-Nutanix-Prism-Storage-Usage-Restapi-custom` | Storage pool capacity |
| `tasks` | `App-virtualization-Nutanix-Prism-Tasks-Restapi-custom` | Recent task counts by status |
| `vms-count` | `App-virtualization-Nutanix-Prism-Vms-Count-Restapi-custom` | VM count by power state |
| `vms-nics` | `App-virtualization-Nutanix-Prism-Vms-Nics-Restapi-custom` | VM NIC traffic and link state |
| `vms-performance` | `App-virtualization-Nutanix-Prism-Vms-Performance-Restapi-custom` | Per-VM CPU and memory |
| `list-hosts` | discovery | Lists physical hosts for service discovery |
| `list-vms` | discovery | Lists virtual machines for service discovery |
| `list-nics` | discovery | Lists VM NICs for service discovery |
| `list-protection-domains` | discovery | Lists protection domains for service discovery |
| `list-storage-containers` | discovery | Lists storage containers for service discovery |

---

## Testing from the CLI

The plugin binary is installed on pollers at:
`/usr/lib/centreon/plugins/centreon_nutanix_prism_restapi.pl`

### Example: cluster capacity check

```bash
/usr/lib/centreon/plugins/centreon_nutanix_prism_restapi.pl \
    --plugin=apps::nutanix::prism::plugin \
    --mode=capacity \
    --hostname='prism.mycompany.local' \
    --port='9440' \
    --proto='https' \
    --username='centreon-virtualization' \
    --password='PASSWORD' \
    --warning-cpu-usage-prct='80' \
    --critical-cpu-usage-prct='90' \
    --warning-memory-usage-prct='80' \
    --critical-memory-usage-prct='90' \
    --warning-storage-usage-prct='80' \
    --critical-storage-usage-prct='90'
```

Expected output:

```
OK: CPU usage: 45.30% - CPU capacity: 128 physical cores - vCPUs allocated: 256 - memory capacity: 1.50 TB - memory used: 936.24 GB - memory usage: 62.10% - storage capacity: 48.00 TB - storage used: 34.18 TB - storage free: 13.82 TB - storage usage: 71.20%
| 'cluster.cpu.usage.percentage'=45.30%;80;90;0;100 'cluster.cpu.capacity.count'=128;;;0; 'cluster.cpu.allocated.count'=256;;;0; 'cluster.memory.capacity.bytes'=1649267441664B;;;0; 'cluster.memory.used.bytes'=1005054648524B;;;0; 'cluster.memory.usage.percentage'=62.10%;;;0;100 'cluster.storage.capacity.bytes'=52776558133248B;;;0; 'cluster.storage.used.bytes'=37576892792832B;;;0; 'cluster.storage.free.bytes'=15199665340416B;;;0; 'cluster.storage.usage.percentage'=71.20%;80;90;0;100
```

### Example: list VMs (service discovery)

```bash
/usr/lib/centreon/plugins/centreon_nutanix_prism_restapi.pl \
    --plugin=apps::nutanix::prism::plugin \
    --mode=list-vms \
    --hostname='prism.mycompany.local' \
    --username='centreon-virtualization' \
    --password='PASSWORD'
```

### Example: per-VM performance with filter

```bash
/usr/lib/centreon/plugins/centreon_nutanix_prism_restapi.pl \
    --plugin=apps::nutanix::prism::plugin \
    --mode=vms-performance \
    --hostname='prism.mycompany.local' \
    --username='centreon-virtualization' \
    --password='PASSWORD' \
    --filter-name='^prod-' \
    --warning-cpu-usage='80' \
    --critical-cpu-usage='90' \
    --warning-memory-usage='80' \
    --critical-memory-usage='90'
```

### Useful generic options

| Option | Description |
|---|---|
| `--mode` | Execution mode (required) |
| `--list-mode` | List all available modes |
| `--verbose` | Extended output (detail per instance) |
| `--debug` | Full debug output including HTTP requests |
| `--timeout` | HTTP request timeout in seconds (default: 30) |

---

## Troubleshooting

| Symptom | Cause | Solution |
|---|---|---|
| `UNKNOWN: Need to specify --hostname option` | Missing hostname macro | Check `NUTANIXPRISMHOSTNAME` macro on the host |
| `UNKNOWN: API returned empty content` | Network or TLS issue | Verify port 9440 is open; check Prism is reachable |
| `UNKNOWN: Cannot decode JSON response` | Invalid credentials or API error | Verify username/password; check Prism Element version >= 5.x |
| `OK: No VM found (check filters)` | `--filter-name` / `--filter-state` too restrictive | Adjust filter or remove it to list all entities |
| Memory usage always 0% | Wrong API field (old plugin version) | Upgrade to current version — fixed in `vmsperformance` mode |
