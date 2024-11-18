---
id: plugin-customization
title: Customizing plugin behavior
---

Monitoring connectors are provided with a default configuration. However, you can customize their behavior (specifically, the behavior of the plugin, that runs the check command). Here are a few examples using the [**HTTP Server**](../../procedures/applications-protocol-http.md) monitoring connector, that allows you to test the connection to a website.

> When you want to test a plugin using the CLI, do it as user **centreon-engine**. This is because in real-life conditions, the plugin is executed by this user.

**See also:**

* The [Understanding metrics](/docs/monitoring/metrics) page.
* On our community platform The Watch : [How to use thresholds](https://thewatch.centreon.com/product-how-to-21/how-to-use-the-thresholds-694).
* [Some examples on GitHub](https://github.com/centreon/centreon-plugins/blob/develop/doc/en/user/guide.rst#how-can-i-remove-perfdatas-).

## Configuration with the default options

1. Check that the [**HTTP Server**](../../procedures/applications-protocol-http.md) monitoring connector is installed and that the plugin and the pack are both [up to date](/docs/monitoring/pluginpacks#updating-monitoring-connectors).
2. [Create a host](/docs/monitoring/basic-objects/hosts) (for instance, `www.centreon.com`) and apply the **App-Protocol-HTTP-custom** host template to it.
3. Check that the option **Create Services linked to the Template too** is selected.
4. Click **Save**.
5. [Deploy the configuration](docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and in the **Resource status** page.
6. In the **Resource status** page, filter on the host's name (in our example, type `h.name:www.centreon.com` in the search bar). You can see that a service called **HTTP-Response-Time** has been created.
7. Click on this service: in the details panel, several tiles give us interesting information:
   - **Performance data**: the service has 2 metrics, **time** (the time that the HTML page takes to answer) and **size** (the size of the obtained page). Example: `'time'=0.035s;;;0; 'size'=915B;;;0;`.
   - **Command**: the exact command executed by the plugin, with the default configuration. A button lets you copy it to your clipboard so that you can use it easily in your terminal. Example:
   
   ```shell
   /usr/lib/centreon/plugins//centreon_protocol_http.pl --plugin=apps::protocols::http::plugin --mode=response --hostname=www.centreon.com --proto='http' --port='80' --urlpath='/' --warning=''  --critical='' 
   ```

8. Hover over the service, then click **Forced check**. The command is executed: the **Information** column displays the output of the plugin.

   ```shell
   OK: response time 0.268s
   ```   

   Moreover, in the details panel, the **Performance data** tile displays the value of the metrics for the last check:

   ```shell
   'time'=0.268s;;;0; 'size'=158714B;;;0;
   ```

   If you execute the command using the command line (as the **centreon-engine** user), you will obtain the same information, in the following format:

   ```shell
   OK: response time 0.268s | 'time'=0.268s;;;0; 'size'=158714B;;;0;
   ```

## Customizing the plugin's behavior

To change the behavior of the plugin (i.e. change the data returned by it), use the options for this plugin in the **EXTRAOPTIONS** macro of the **HTTP-Response-Time** service. To learn about this monitoring connector's options, [read its documentation](../../procedures/applications-protocol-http.md).

### Generic procedure

1. In the **Resource status** page, click the **HTTP-ResponseTime** service, then, in the details panel, click the cog icon next to the name of the service in order to access its configuration page.
2. In the **Custom macros** section, enter the values you want in the **EXTRAOPTIONS** macro.
3. Click **Save**.
4. [Deploy the configuration](docs/monitoring/monitoring-servers/deploying-a-configuration).
5. In the **Resource status** page, click on the **HTTP-Response-Time** service: in the details panel, the command has been updated.
6. Hover over the service, then click **Forced check**. The command is executed: the **Information** column displays the output of the plugin. In the details panel, in the **Performance data** tile, the values of the metrics are updated.

## Specific examples

### Check whether the server is in maintenance

We want to check whether our Centreon platform is in maintenance, and to get a CRITICAL status if it is indeed in maintenance. To achieve this, we use the **HTTP Server** connector rather than the **Centreon central** connector.

We check that the page the plugin obtains is the expected one, and not an error or maintenance response. We will use the **--mode expected-content** mode and the **--expected-string** option (this option lets you specify which string must be looked for in the body of the page, so as to confirm it is the correct page).

In the **EXTRAOPTIONS** macro, enter the following value: **--mode expected-content --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise'**.

The command becomes:

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise'
```

Once we have deployed the configuration and rerun the command, we get the following results:

```shell
OK: HTTP test(s) | 'size'=158714B;;;0; 'time'=0.157s;;;0;
```


```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname 127.0.0.1 --urlpath='/centreon/api/latest/platform/installation/status' --expected-string='"has_upgrade_available":false' --change-short-output='Content test .*~Centreon is in maintenance' --change-short-output='HTTP test.*~Centreon is functional'
```

```shell
CRITICAL: Centreon is in maintenance| 'size'=50B;;;0; 'time'=0.137s;;;0;
```

or

```shell
OK: Centreon is functional| 'size'=51B;;;0; 'time'=0.178s;;;0;
```

### Change the output message

Since the command now checks that the page is OK or not, we want to change the output message that is displayed when the check results is OK. Instead of **OK: HTTP test(s)**, we will display **Expected content found**. To achieve this, we use the **--change-short-output** option in the **EXTRAOPTIONS** macro of the service.

Command:

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise' --change-short-output='OK: HTTP test\(s\)~Expected content found~g'
```

Results:

```shell
Expected content found | 'size'=158714B;;;0; 'time'=0.262s;;;0;
```

### Collect only one metric

For the **HTTP-response-Time** service, let's say we are only interested in the **time** metric. So there's no need to collect the **size** metric, which will use storage space for nothing. We can use the **--filter perfdata** option or the **--filter-perfdata-adv** option in the **EXTRAOPTIONS** macro of the service.

Command:

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise' --filter-perfdata=time
```

or:

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise' --filter-perfdata-adv='(%(label) eq "time")'
OK: HTTP test(s) | 'time'=0.255s;;;0;
```

Results:

```shell
OK: HTTP test(s) | 'time'=0.259s;;;0;
```

### Change the name of a metric

For the **HTTP-response-Time** service, we want to rename the **time** metric as **response-time.** To achieve this, we use the **--change-perfdata** option in the **EXTRAOPTIONS** macro of the service.

Command:

```shell
/usr/lib/centreon/plugins/centreon_protocol_http.pl --plugin apps::protocols::http::plugin --mode expected-content --hostname www.centreon.com --expected-string='Best-in-Class Hybrid IT Monitoring for Enterprise'  --change-perfdata='time,response-time'
```

Results:

```shell
OK: HTTP test(s) | 'size'=158714B;;;0; 'response-time'=0.287s;;;0;
```

If you want to delete the data you had collected until then for the unwanted **size** metric, go to the **Administration > Parameters > Data** page (Centreon OnPrem only). Search for your host/service then click the **HTTP-response-Time** service. Select the **size** metric, then click **Delete graphs**.

### Alert when a value is higher than a threshold

This time, let's take the example of a Centreon server that is monitored by a poller. Let's count the number of running **php-fpm** workers:

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning=''
```

For the service to switch to CRITICAL when there are more than 5 workers, we use the **--critical='5'** option:

Command:

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='5'
```

Results:

```shell
CRITICAL: Number of current processes running: 11 | 'nbproc'=11;;0:5;0;
```

You can also use **--critical='0:5'**. (Both syntaxes do the exact same thing.)

Command:

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='0:5'
```

Results:

```shell
CRITICAL: Number of current processes running: 11 | 'nbproc'=11;;0:5;0;
```

### Invert the threshold: alert when values are below the threshold

It is also possible to set the service to CRITICAL when the number returned is less than a certain value. Use the following syntax: **--critical='5:'**.

Command:

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='5:'
```

Results:

```shell
CRITICAL: Number of current processes running: 4 | 'nbproc'=4;;5:;0;
```

### Ranges of values

In the following example, the service switches to CRITICAL status when the metric is within a range of values (between 0 and 5):

Command:

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='@0:5'
```

Results:

```shell
CRITICAL: Number of current processes running: 4 | 'nbproc'=4;;@0:5;0;
```

And in this case, the service switches to CRITICAL when the metric is outside a range of values:

Command:

```shell
/usr/lib/centreon/plugins//centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=processcount --hostname=127.0.0.1 --snmp-version='2c' --snmp-community='public'  --process-name='php-fpm' --process-path='' --process-args='' --regexp-name --regexp-path --regexp-args --warning='' --critical='5:15'
```

Results:

```shell
CRITICAL: Number of current processes running: 4 | 'nbproc'=4;;5:15;0;
```
