---
id: plugins-guidelines
title: Plugins development guidelines
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A large part of these guidelines come from the [Monitoring Plugins project](https://www.monitoring-plugins.org/doc/guidelines.html). Indeed, some of these are outdated, not relevant anymore or related to a language you don’t use. We will focus on those that we consider as the most important, but this is still a great piece of content you should read.

## Programming languages

You can use your favourite programming language to develop monitoring plugins. The only prerequisite is to stick with all the best practices to obtain something reliable and efficient.

Indeed, we recommend you use our centreon-plugins library whenever it is possible. It results from years of monitoring probes development, and it ships ready-to-use methods to meet all requirements and obtain a flexible monitoring probe.

We initially chose the Perl programming language for its stability, and since then we are still convinced we have made the right choice. Perl is still
shipped with all enterprise-grade operating systems, and often a prerequisite. Give it a try!

## Outputs

### Formatting

The output of a monitoring probe must always be:

```bash
STATUS: Information text | metric1=<value>[UOM];<warning_value>;<critical_value>;<minimum>;<maximum> metric2=value[OEM];<warning_value>;<critical_value>;<minimum>;<maximum> \n
Line 1 containing additional details \n
Line 2 containing additional details \n 
Line 3 containing additional details \n
```

Let’s identify and name its three main parts:

* Short output: everything before the pipe (`|`)
* Performance data and Metrics: everything after the pipe (`|`)
* Extended output: Everything after the first carriage return (`\n`), splitting each detail line is the best practice.

### Short output

This part is the one users will more likely see in their monitoring tool or obtain as part of a push/alert message. The information should be straightforward and help identify what is going on quickly.

A plugin must always propose at least such output:

```bash
STATUS: Information text 
```

`STATUS`must stick with return codes:

* 0: OK
* 1: WARNING
* 2: CRITICAL
* 3: UNKNOWN

`Information text` should display only relevant information. That implies:

* showing only the bits of information that led to the NOT-OK state when an alarm is active
* keeping it short. When checking a large number of a single component (e.g. all partitions on a filer), try to construct a global message, then switch to the format above when an alarm arises.

#### Centreon Plugin example

The output when checking several storage partitions on a server, when everything is OK:

`OK: All storages are ok |`

The output of the same plugin, when one of the storage partition space usages triggers a WARNING threshold:

`WARNING: Storage '/var/lib' Usage Total: 9.30 GB Used: 956.44 MB (10.04%) Free: 8.37 GB (89.96%) |`

### Performance data and metrics

This part is not mandatory. However, if you want to benefit from Centreon or Nagios©-like tools with built-in metrology features, you will need to adopt this format:

`metric1=<value>[UOM];<warning_value>;<critical_value>;<minimum>;<maximum>`

After the equals sign, split each piece of information about the metric using a semi-colon.

* `metric1=`: The metric’s name is everything before the equals (=) sign. The more detailed it is, the easier it will be to understand a graph or to extend the usability of the metric in a third-party analytics/observability platform. De facto, a metric name must not contain an equals sign. Try to make it self-explanatory even without the Host/Service context.
* `<value>`: The measurement result, must be a number (int, float)
* `[UOM]`: Optional Unit Of Measurement. You can also include the unit in the metric’s name as we do in the Centreon metric naming philosophy. It is one of the following:
  * none (no unit specified), when dealing with a number of things (e.g. users, licences, viruses…)
  * 's' when dealing with seconds. ‘us’ and ‘ms’ are also valid for microseconds or milliseconds (e.g. response or connection time)
  * '%' when dealing with percentage (e.g. memory, CPU, storage space…)
  * 'B' (Bytes), when dealing with storage, memory… The Byte must be the default as it ensures compatibility with all Centreon extensions
  * When dealing with a network metric or any throughput, ‘b' (Bits). When computing a rate per second, you can use ‘b/s’
* `<warning_value>`:  Optional. Fill it with the user’s value as a WARNING threshold for the metric.
* `<critical_value>`: Optional. Fill it with the user-supplied value as a CRITICAL threshold for the metric.
* `<minimum>`: Optional. Fill it with the lowest value the metric can take.
* `<maximum>`: Optional. Fill it with the highest value the metric can take.

Frequently, you have to manage the case where you have to display the same metric for several instances of things. The best practice is to choose a character to separate the metric name from its instance with a given character. At Centreon, we use the `#` sign, and we strongly recommend you do the same (it is recognised and processed by Centreon-Broker).

Less frequently, you may want to add even more context; that’s why we created a sub-instance concept following the same principles. Append it to the instance of your metric and use a splitting character to clarify that it is another dimension and not confuse it with the primary instance. We use the `~` sign; once again, we strongly advise you to stick with it whenever it is possible.

#### Centreon Plugin Performance Data / Metrics examples

A **system boot partition**

`'/boot#storage.space.usage.bytes'=255832064B;;0:99579084;0;995790848`

`/boot` is the instance

`storage.space.usage.bytes` is the metric name (note the .bytes at the end specifying the unit)

`B` is the legacy metric’s unit for Bytes.

Pay attention to the critical threshold (0:99579084), always use the same unit.

A **network interface**

`'eth0#interface.traffic.in.bitspersecond'=0.00b/s;;;0;`

`eth0` is the instance

`interface.traffic.in.bitspersecond` is the metric name (note the `.persecond` at the end specifying the unit)

`b/s` is the legacy metric’s unit for bits per second

A **cloud metric**

`'azure-central~/var/lib/mysql#azure.insights.logicaldisk.free.percentage'=94.82%;;;0;100`

`azure-central` is the instance

`/var/lib/mysql` is the sub-instance

`azure.insights.logicaldisk.free.percentage` is the metric name (note the `free` instead of `usage`, and `.percentage` at the end to specify the unit)

`%` is the legacy metric’s unit

### Extended output

The extended output's primary purpose is to display each bit of collected information separately on a single line. It will only print if the user adds a `--verbose` flag to its command.

Overall, you should use it to:

* add extra context (numbered instance, serial number) about a checked component
* print items the check excludes because plugin options have filtered them out
* organize how the information is displayed using groups that follow the logic of the check.

#### Centreon Plugin example

Here is an example of a Cisco device environment check:

```bash
<STATUS>: <information_text> | <perfdata>
Environment type: other
Checking fans
  fan 'Switch X - FAN - T1 1, Normal' status is normal [instance: 1014].
  fan 'Switch X - FAN - T1 2, Normal' status is normal [instance: 1015].
  fan 'Switch X <SERIAL-NUMBER> - FAN 1' status is up [instance: 1014]
  fan 'Switch X <SERIAL-NUMBER> - FAN 2' status is up [instance: 1015]
Checking power supplies
  power supply 'Switch X - Power Supply B, Normal' status is normal [instance: 1013] [source: ac]
  Power supply 'Switch X - Power Supply B' status is on [instance: 1013]
Checking temperatures
  temperature 'Switch X - Inlet Temp Sensor, GREEN ' status is normal [instance: 1010] [value: 23 C]
  temperature 'Switch X - Outlet Temp Sensor, GREEN ' status is normal [instance: 1011] [value: 30 C]
  temperature 'Switch X - HotSpot Temp Sensor, GREEN ' status is normal [instance: 1012] [value: 41 C]
Checking voltages
Checking modules
  module 'C9200L-48P-4G' status is ok [instance: 1000]
Checking physicals
Checking sensors
  sensor 'Switch X <SERIAL-NUMBER> - Temp Inlet Sensor 0' status is 'ok' [instance: 1010] [value: 23 celsius]
  sensor 'Switch X <SERIAL-NUMBER> - Temp Outlet Sensor 1' status is 'ok' [instance: 1011] [value: 30 celsius]
  sensor 'Switch X <SERIAL-NUMBER> - Temp Hotspot Sensor 2' status is 'ok' [instance: 1012] [value: 41 celsius]
  sensor 'GigabitEthernet1/1/1 Module Temperature Sensor' status is 'ok' [instance: 1115] [value: 29.2 celsius]
  sensor 'GigabitEthernet1/1/1 Supply Voltage Sensor' status is 'ok' [instance: 1116] [value: 3.3 voltsDC]
  sensor 'GigabitEthernet1/1/1 Bias Current Sensor' status is 'ok' [instance: 1117] [value: 0.0202 amperes]
  sensor 'GigabitEthernet1/1/1 Transmit Power Sensor' status is 'ok' [instance: 1118] [value: -4.5 dBm]
  sensor 'GigabitEthernet1/1/1 Receive Power Sensor' status is 'ok' [instance: 1119] [value: -1.2 dBm]
```

## Options

Option management is a central piece of a successful plugin. You should:

* Carefully name your options to make them **self-explanatory**
* For a given option, **only one format** is possible (either a flag or a value, but not both)
* Always **check** for values supplied by the user and print a **clear message** when they do not fit with plugin requirements
* Set default option value when relevant

## Discovery

This section describes how you should format your data to comply with the requirements of Centreon Discovery UI modules.

In a nutshell:

* [host discovery](/onprem/monitoring/discovery/hosts-discovery) allows you to return a JSON list the autodiscovery module will understand so the user can choose to automatically or manually add to its monitoring configuration. Optionally, it can use one of the discovered items properties to make some decisions (filter in or out, create or assign a specific host group, etc.)
* [service discovery](/onprem/monitoring/discovery/services-discovery) allows you to return XML data to help users configure unitary checks and link them to a given host (e.g. each VPN definition in AWS VPN, each network interface on a router...).

There's no choice here; you should stick with the guidelines described hereafter if you want your code to be fully compliant with our modules.

### Hosts

The discovery plugin can be a specific script or a particular execution mode enabled with an option. In centreon-plugins, we do it through dedicated `discovery*.pm` modes.

This execution mode is limited to a query toward a cloud provider, an application, or whatever contains a list of assets. The expected output must hold some keys:

* `end_time`: the unix timestamp when the execution stops
* `start_time`: the unix timestamp when the execution starts
* `duration`: the duration in seconds (`end_time - start_time`)
* `discovered_items`: the number of discovered items 
* `results`: an array of hashes, each hash being a collection of key/values describing the discovered assets. 

```json title='Sample host discovery output'
{
   "end_time" : 1649431535,
   "start_time" : 1649431534,
   "duration" : 1,
   "discovered_items" : 2,
   "results" : [
         {
         "public_dns_name" : "ec2-name.eu-west-1.compute.amazonaws.com",
         "name" : "prod-ec2",
         "key_name" : "prd-aws-ec2",
         "tags" : [
            {
               "value" : "Licences Management",
               "key" : "Desc"
            },
            {
               "value" : "CI",
               "key" : "Billing"
            }
         ],
         "state" : "running",
         "private_dns_name" : "ip-W-X-Y-Z.eu-west-1.compute.internal",
         "vpc_id" : "vpc-xxxveafea",
         "type" : "ec2",
         "id" : "i-3feafea",
         "private_ip" : "W.X.Y.Z",
         "instance_type" : "t2.medium"
      },
      {
         "public_dns_name" : "other-ec2-name.eu-west-1.compute.amazonaws.com",
         "name" : "prod-other-ec2",
         "key_name" : "prd-aws-ec2",
         "tags" : [
            {
               "value" : "Licences Management",
               "key" : "Desc"
            },
            {
               "value" : "CI",
               "key" : "Billing"
            }
         ],
         "state" : "running",
         "private_dns_name" : "ip-A-B-C-D.eu-west-1.compute.internal",
         "vpc_id" : "vpc-xxxveafea",
         "type" : "ec2",
         "id" : "i-3gfbgfb",
         "private_ip" : "A.B.C.D",
         "instance_type" : "t2.medium"
      }
   ]
}
```

You can use more advanced structures for values in the result sets, it can be: 

* an array of hashes:

```json title='Nmap discovery - Tags'
"services" : [
  {
    "name" : "ssh",
    "port" : "22/tcp"
  },
  {
    "port" : "80/tcp",
    "name" : "http"
  }
]
```

* a flat array: 

```json title='VMWare discovery - IP vMotion'
"ip_vmotion": [
  "10.10.5.21",
  "10.30.5.21"
],
```

Using these structures is convenient when you need to group object properties behind a single key. 

On the users' side, it allows using these values to filter in or out some of the results or make a better choice 
about the host template for a given discovered host.

### Services

Service discovery relies on XML to return information that will be parsed and used by the UI module to 
create new services efficiently.

As for hosts, it can be an option at runtime, or an execution mode. In centreon-plugins, we choose to have dedicated
`list<objectname>.pm` modes. 

All `list<objectname>.pm` modes contain two options that will return properties and results that will be used in the 
discovery rules definitions. 

The first service discovery option is `--disco-format`, it enables the plugin to return the supported keys in the rule: 

```bash title='Linux Network int --disco-format output' 
-bash-4.2$ /usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=list-interfaces --hostname=127.0.0.1 --disco-format
<?xml version="1.0" encoding="utf-8"?>
<data>
  <element>name</element>
  <element>total</element>
  <element>status</element>
  <element>interfaceid</element>
  <element>type</element>
</data>
```

The output above shows that the discovery of network interfaces on Linux will return those properties:

- `name`: the name of the interface
- `total`: the maximum bandwidth supported
- `status`: the configuration status of the interface (convenient to exclude administratively down interfaces)
- `interfaceid`: the id
- `type`: interface type (like ethernet, fiber, loopback, etc.)

Executing exactly the same command, substituting `--disco-format` with `--disco-show` will output the discovered interfaces:

```bash title='Linux Network int --disco-show output'
/usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=list-interfaces --hostname=127.0.0.1 --disco-show
<?xml version="1.0" encoding="utf-8"?>
<data>
  <label status="up" name="lo" type="softwareLoopback" total="10" interfaceid="1"/>
  <label status="up" name="ens5" type="ethernetCsmacd" total="" interfaceid="2"/>
</data>
```

The result contains one line per interface and each line contains each set of properties as a `key="value"` pair. Note that even if
no data is obtained for a given key, it still has to be displayed (e.g `total=""`).

## Performances

A monitoring plugin has to do one thing and do it right - it's important to code your plugin with the idea to make
it as efficient as possible. Keep in mind that your Plugin might run every minute, against a large
number of devices, so a minor optimization can result in important benefits at scale.

Also think about the 'thing' you're monitoring, it's important to always try to reduce the overhead of a check
from the monitored object point of view.

### Execution time

The most basic way to bench a plugin performance is its execution time. Use the
`time` command utility to run your check and measure over several runs how it behaves.

### Cache

In some cases, it can be interesting to cache some information.

Caching in a local file might save some calls against an API, for example do not authenticate at every check.
When possible, use the token obtained at the first check and stored in the cache file to only call the
authentication endpoint when it's absolutely necessary.

More generally, when an identifier, name or anything that would never change across different executions requires a
request against the third-party system, cache it to optimize single-check processing time.

### Algorithm

Optimizing the number of requests against a third-party system can also lie in the check algorithm. Prefer scraping
the maximum of data in one check and then filter the results programmatically instead of issuing multiple very specific
requests that would result in longer execution time and greater load on the target system.

### Timeout

A Plugin must always include a timeout to avoid never ending checks that might overload your monitoring
system when something is broken and that, for any reason, the plugin cannot obtain the information.

## Security

### System commands

If the plugin requires to execute a command at the operating system level, and users can modify the command name or
its parameters, make sure that nobody can leverage your plugin's capabilities to break the underlying
system or access sensitive information.

### Dependencies

There is no need to re-invent the wheel: standard centreon-plugins dependencies provide you with the most common
external libraries that might be required to write a new plugin.

Don't overuse large libraries that might end being unsupported or where some governance modification might lead to
security problems.

## Help and documentation

For each plugin, the minimum documentation is the help, you have to explain to users what the plugin
is doing and how they can use the built-in options to achieve their own alerting scenario.

You can look at how we handle help at mode level with the centreon-plugins framework [here](develop-with-centreon-plugins.md).
