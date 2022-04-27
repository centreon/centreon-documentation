---
id: develop-with-centreon-plugins
title: Develop with centreon-plugins
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Programming languages

You can use your favourite programming language to develop monitoring plugins. The only prerequisite is to stick with all the best practices to obtain something reliable and efficient.

Indeed, we recommend you use our centreon-plugins library whenever it’s possible. It results from several years of monitoring probes development, and it ships ready-to-use methods to meet all requirements and obtain a flexible monitoring probe.

We initially chose the Perl programming language for its stability, and since then we are still convinced we have made the right choice. Perl is still
shipped with all enterprise-grade operating systems, and often a prerequisites. Give it a try! 

## Development guidelines

These guidelines come from the [Monitoring Plugins project](https://www.monitoring-plugins.org/doc/guidelines.html). Indeed, some of these are outdated, not relevant anymore or related to a language you don’t use. Let’s focus on the most important ones. 

### Output formatting

The output of a monitoring probe must always be: 

```bash
SERVICE STATUS: Information text | metric1=value[UOM];<warning_value>;<critical_value>;<minimum>;<maximum> metric2=value[OEM];<warning_value>;<critical_value>;<minimum>;<maximum> \n
Line 1 containing additional details \n
Line 2 containing additional details \n 
Line 3 containing additional details \n
```

Let’s identify and name its three main parts: 

* Output: everything before the pipe (|)
* Performance data and Metrics: everything after the pipe (|) 
* Extended output: Everything after the first carriage return (\n), splitting each detail line is the best practice.

#### Short Output

This part is the one the user will more likely see in its monitoring tool or obtain as part of a push / alert message. The information should be straightforward and help identify what is going on quickly.

A plugin must always propose at least such output: 

```bash
SERVICE STATUS: Information text 
```

`SERVICE STATUS`must stick with return codes: 

* 0: OK
* 1: WARNING
* 2: CRITICAL
* 3: UNKNOWN

`Information text` should display only relevant information. That implies: 

* showing only the bits of information that led to the NOT-OK state when an alarm is active ; 
* keeping it short. When checking a large number of a single component (e.g. all partitions on a filer), try to construct a global message, then switch to the format above when an alarm arises.

> Centreon Plugin example 
> 
> The Output when checking several storage partitions on a server, when everything is OK: 
> 
> `OK: All storages are ok |`
> 
> The Output of the same plugin, when one of the storage partition space usages triggers a WARNING threshold: 
> 
> `WARNING: Storage '/var/lib' Usage Total: 9.30 GB Used: 956.44 MB (10.04%) Free: 8.37 GB (89.96%) |`

#### Performance data and metrics

This part is not mandatory. However, if you want to benefit from Centreon or Nagios©-like tools with built-in metrology features, you will need to adopt this format: 

`metric1=value[UOM];<warning_value>;<critical_value>;<minimum>;<maximum>`

After the equal sign, split each piece of information about the metric using a semi-colon. 

* `metric1=`: The metric’s name is everything before the equal (=) sign. The more detailed it is, the easier it will be to understand a graph or extend the usability of the metric in a third-party analytics/observability platform. De facto, a metric name must not contain an equal sign. Try to make it self-explanatory even without the Host / Service context.
* `value`: The measurement result, must be a number (int, float)
* `[UOM]`: Optional Unit Of Measurement. You can also include the unit in the metric’s name as we do in Centreon metric naming philosophy.  It is one of: 
  * none (no unit specified), when dealing with a number of things (e.g. users, licences, viruses, …)
  * 's' when dealing with seconds. ‘us’ and ‘ms’ are also valid for microseconds or milliseconds (e.g. response or connection time)
  * '%' when dealing with percentage (e.g. memory, CPU, storage space, …)
  * 'B' (Bytes), when dealing with storage, memory, … The Byte must be the default as it ensures compatibility with all Centreon extensions
  * When dealing with a network metric or any throughput, ‘b' (Bits). When computing a rate per second, you can use ‘b/s’
* `<warning_value>`:  Optional. Fill it with the user’s value as a WARNING threshold for the metric.
* `<critical_value>`: Optional. Fill it with the user-supplied value as a CRITICAL threshold for the metric.
* `<minimum>`: Optional. Fill it with the lowest value the metric can take. 
* `<maximum>`: Optional. Fill it with the highest value the metric can take.

Frequently, it’s mandatory to manage the case where you have to display the same metric for several instances of things. The best practice is to choose a character to separate the metric name from its instance with a given char. At Centreon, we use the `#` sign, and we strongly recommend you to do the same (it is being recognised and processed by Centreon-Broker).

Less frequently, you may want to add even more context; that’s why we created a sub instance concept following the same principles. Append it to the instance of your metric and use a splitting character to clarify that it’s another dimension and not confuse it with the primary instance. We use the `~` sign; once again, we strongly advise you to stick with it whenever it’s possible. 

> Centreon Plugin Performance Data / Metrics examples:
> 
> A system boot partition 
> 
> `'/boot#storage.space.usage.bytes'=255832064B;;0:99579084;0;995790848`
> 
> `/boot` is the instance
>
> `storage.space.usage.bytes` is the metric name (note the .bytes at the end specifying the unit)
>
> `B` is the legacy metric’s unit for Bytes.
> 
> Pay attention to the critical threshold (0:99579084), always use the same unit.
> 
> A network interface 
> 
> `'eth0#interface.traffic.in.bitspersecond'=0.00b/s;;;0;`
> 
> `eth0` is the instance
> 
> `interface.traffic.in.bitspersecond` is the metric name (note the `.persecond` at the end specifying the unit)
> 
> `b/s` is the legacy metric’s unit for bits per second
> 
> A cloud metric
> 
> `'azure-central~/var/lib/mysql#azure.insights.logicaldisk.free.percentage'=94.82%;;;0;100`
> 
> `azure-central` is the instance 
> 
> `/var/lib/mysql` is the subinstance
> 
> `azure.insights.logicaldisk.free.percentage` is the metric name (note the `free` instead of `usage`, and `.percentage` at the end to specify the unit)
>
> `%` is the legacy metric’s unit

#### Options management 

Option management is a central piece of a successful plugin. You should: 

* Carefully name your options to make them self-explanatory
* For a given option, only one format is possible (either a flag, expect a value, but not both)
* Always check for values supplied by the user and print a clear message when they doesn’t fit with plugin requirements