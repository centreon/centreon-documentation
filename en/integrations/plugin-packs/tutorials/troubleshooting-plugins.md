---
id: troubleshooting-plugins
title: Troubleshooting Plugin errors
---

When using Plugins and deploying a new monitoring probe, some errors might show up. 

Most of the time, the cause of these failures is a misconfiguration or a third-party 
device. This section compiles the most common errors you may face and some hints to 
identify the root cause.

Remember that most of the Plugin Packs have documentation and, more specifically, 
"Prerequisites" and "Host Configuration" sections to help you avoid some of the 
most common pitfalls.

The Centreon Pollers run a scheduler responsible for planning and executing checks. 
To troubleshoot a Plugin, you must always:

- Copy/Paste the command from the Centreon Web UI to troubleshoot it from the CLI
- Use the centreon-engine user to execute the Plugin manually (and never root!).

## Common problems

### (no output returned from plugin)

When getting this error, please focus on the command line executed and ensure that 
the binary it uses exists or doesn't contain a typo.

On RPM-based systems, you can use the following command to identify what's the 
package providing the missing binary: `yum whatprovides "*/the_binary_name"`

### UNKNOWN: Cannot write statefile '/var/lib/centreon/centplugins/<cache_file_name>'

The most common cause is inappropriate rights on the cache directory (`/var/lib/centreon/centplugins`) 
or the cache file itself.  It can also be the result of an inconsistent installation 
or simply that the directory doesn't exist. 

Check that the directory exists and has the appropriate rights using the stat utility: 
`stat /var/lib/centreon/centplugins`. The expected result is: 

```bash
File: '/var/lib/centreon/centplugins'
[...]
Access: (0775/drwxrwxr-x)  Uid: (  998/centreon)   Gid: (  997/centreon)`
[...]
``` 

If directory rights are ok, check also the rights of the cache file: 
`stat /var/lib/centreon/centplugins/<cache_file_name>`. The expected result is: 

```bash
File: '/var/lib/centreon/centplugins/<cache_file_name>'
[...]
Access: (0664/-rw-rw-r--)  Uid: (  994/centreon-engine)   Gid: (  991/centreon-engine)
[...]
```

### Check output or metrics is not complete

When a Plugin execution looks partial or incomplete, it usually means that there's 
a bug somewhere in the code. If this is the case, you will likely see some *stderr*
lines printed when executing the check through the CLI. 

A message similar to the one below confirms that this is a bug: 

```bash
Use of uninitialized value $options{"value"} in pattern match (m//) and critical return
```

In this situation, reach us on [slack](https://centreon.github.io) or, even better, 
track an issue within the [centreon-plugins](https://github.com/centreon/centreon-plugins/issues) 
Github repository so we can patch it. 

## SNMP checks

### UNKNOWN: SNMP GET Request : Timeout

Often, a timeout comes from: 
- An SNMP Agent or Centreon Host misconfiguration, like a wrong SNMP port, version, 
or community string
- Third-party equipment (e.g., a firewall) blocking the communication between the 
Poller and the remote device

To go further, troubleshoot using an SNMP utility to mimic the Plugin behavior and 
see if you get a timeout. On Linux, the net-snmp package provides a snmpwalk binary. 
Here is a sample command: 

`snmpwalk -v <1/2c> -c <community-string> <IP_ADDR> .1`

### UNKNOWN: SNMP GET Request : Cant get a single value

SNMP Plugins request one or several OIDs from the target devices' MIBS. When it 
doesn't obtain a value for one of these OIDs, it returns an UNKNOWN state to warn 
the user. 

Frequently, the device doesn't ship the MIB or one of the OIDs the Plugin utilizes. 
In other words, the Plugin used is not suitable for this device.  

### UNKNOWN: SNMP Session: Unable to create

This error is specific to SNMP v3 checks. It means that the credentials provided 
are either wrong or incomplete. 

It can also happen when performing SNMPv3 requests on a device or server where the 
SNMP process is not running, or the port isn't listening. 

### UNKNOWN: Can't construct cache...

To check storage attached to a device or system, Centreon Plugins use standard 
OIDs. From time to time, only some of these are implemented by the manufacturer.

You should look for available OIDs using the `snmpwalk` utility and modify the check 
command to use the available ones.

The interfaces' bandwidth and status monitoring is a textbook case: the Plugin default 
behavior uses the ifName OID to build its cache. If it cannot find it then you 
run into this error. 

For interfaces and storage checks, options exist to ask the probe to use 
an other OID (e.g. `--oid-filter='ifDesc' --oid-display='ifDesc'`).

## HTTP and API checks

### UNKNOWN: Cannot decode response (add --debug option to display returned content)

Plugins perform API calls and decode the content obtained from the API to use it as 
status, message, or metrics. This way, it expects a specific data formatting depending
on what the API supports (XML or JSON).

If the API doesn't send the data a Plugin expects, the library it uses will fail 
decoding the data.

The most common cause is that a Proxy blocks the primary query and returns an error 
message that is not in the expected format. You can specify the address and the port 
of a proxy through the `--proxyurl=<proto>://<address>:<port>` option.

It may also happen when the API returns an error instead of the expected data structure. 
You may want to dig deeper into this by adding the `--debug` flag to your command line 
to get more information on the query and data received.

### UNKNOWN: 500 Can't connect to <ip_address>:<port> (<extra_reason_if_available>)

When grabbing metrics or statutes from an API, multiple issues can show up because
of proxies, remote devices' certificates, or simply the check configuration.

This section focuses on the most common error reasons and shares some tips to solve them. 

An important thing to know is that Plugins can rely on several backends to perform 
HTTP requests. You can specify which backend you want to use to perform checks using 
the `--http-backend` option. The default value is `lwp`, though `curl` is also 
available and generally easier to debug.

In the same way, if you're using a proxy, you can tell the Plugin how to go through 
by adding the `--proxyurl` option to your command line. The value formatting is: 
`--proxyurl='<proto>://<proxy_addr>:<proxy_port>`. 

#### UNKNOWN: 500 Can't connect to <ip_address>:<port> (Connection refused)

This issue generally means that the port or protocol used by the Plugin is wrong, 
misconfigured, or unsupported. 

In this situation, at the Host configuration level, double-check that:
* the port used is correct, primarily if you use a non-standard port for security reasons
* the protocol used (http or https) matches the one configured on the API-side

Each Plugin using HTTP backends does have `--proto` and `--port` options allowing 
you to specify these values.

#### UNKNOWN: 500 Can't connect to <ip_address>:<port> (Timeout)

The timeout error occurs when the Plugin doesn't succeed in contacting the server 
or when a third-party device is blocking or filtering the client's request. 

#### UNKNOWN: 500 Can't connect to <ip_address>:<port> (<SSL Error>)

SSL Errors indicate that the Plugin has some trouble establishing a secure connection 
to get the monitoring information.

The primary cause could be the certificate used. In this case, the best practice 
would be either to: 
* renew the certificate when it expired 
* sign the remote certificate officially
* deploy the certificate locally so the Plugin can recognize it

Regardless of what HTTP backend you're using, it's possible to ignore SSL certificate 
errors by adding specific flags: 

* lwp backend: `--ssl-opt='--ssl-opt="SSL_verify_mode => SSL_VERIFY_NONE'`
* curl backend: `--curl-opt='CURLOPT_SSL_VERIFYPEER => 0'`

Sometimes, the remote host doesn't support negotiation about the SSL implementation, 
so you must specify explicitly which one the Plugin has to use thanks to the `--ssl` 
option (e.g. `--ssl='tlsv1'`). Refer to the manufacturer or software publisher documentation.

## SSH and CLI checks

### UNKNOWN: Command error: <interpreter>: <command_name>: command not found

This error warns that the Plugin is not able to execute the <command_name> because it 
doesn't exist in PATH or is not installed.

Depending on how the check is performed (locally or remotely), make sure that the 
utility the Plugin uses is available to your monitoring user. 

### UNKNOWN: Command error: Host key verification failed.

SSH-Based checks can use several *backends*. Either you use the `ssh` or `plink` backend, 
you have to manually validate the remote system fingerprint from the *centreon-engine*
user on the monitoring Poller. If you don't do that, the Plugin will hang and cause a timeout
because it cannot accept the fingerprint for obvious security reasons.

## NRPE checks

### CHECK_NRPE STATE (CRITICAL|UNKNOWN): Socket timeout after 10 seconds

Here are the questions you may want to ask yourself when obtaining this result: 

- Does my IP Address and port parameter are correct? 
- Is the NRPE daemon running on the remote system?
- Is there any firewall or security policy that might block the request? 

### connect to address x.x.x.x port 5666: Connection refused

This error means that the client made a successful connection to the remote host and port 
but the server refused the connection.

Frequently, this is because the client is trying to connect to a server from an 
unauthorized IP. 

Check that the `allowed_hosts` directive defined in the NRPE Server config file 
allows your monitoring server to send remote command execution. 

Do not forget to restart your NRPE daemon to update the configuration.

### NRPE: Command <a_command> not defined

The NRPE Server throws this error when the client asks to run a command it doesn't understand. 

It might highlight either a configuration issue on the server-side or a typo in the 
command line on the client-side. 

Check the NRPE Server configuration to ensure that the command exists: 
```text
[a_command]=/path/to/a/command --option1='<value_or_macro>' --optionN='<value_or_macro>'
```
Do not forget to restart your NRPE daemon to update the configuration.

### NRPE: unable to read output

This error can occur when the NRPE server fails to execute the command for some reason.
In this situation, connect to the server running the NRPE server and execute the 
command manually with the NRPE user.

Most of the time, it's due to unsufficient rights (missing execution bit or wrong 
owner) or a missing dependency at code level. 
