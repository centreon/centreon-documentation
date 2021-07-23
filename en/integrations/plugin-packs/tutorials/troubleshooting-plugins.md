---
id: troubleshooting-plugins
title: Troubleshooting Plugins errors
---

When using Plugins and deploying a new monitoring probe, some errors might show up. 

Most of the time, the cause of these failures is a misconfiguration or a third-party 
device. This section compiles the most common errors you may face and some hints to 
identify the root cause.

Remember that most of the Plugin Pack have documentation and, more specifically, 
"Prerequisites" and "Host Configuration" sections to help you avoid some of the 
common pitfalls.

The Centreon Pollers run a scheduler responsible for planning and executing checks. 
To troubleshoot a Plugin, you must always:

- Copy/Paste the command from Centreon Web UI to troubleshoot it from the CLI
- Use the centreon-engine user to execute manually the Plugin (and never root!)

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

Check that the directory exists and has the appropriate rights using stat utility: 
`stat /var/lib/centreon/centplugins`. The expected result is: 

```bash
File: '/var/lib/centreon/centplugins'
[...]
Access: (0775/drwxrwxr-x)  Uid: (  998/centreon)   Gid: (  997/centreon)`
[...]
``` 

If directory rights are ok, check also rights of the cache file: 
`stat /var/lib/centreon/centplugins/<cache_file_name>`. The expected result is: 

```bash
File: '/var/lib/centreon/centplugins/<cache_file_name>'
[...]
Access: (0664/-rw-rw-r--)  Uid: (  994/centreon-engine)   Gid: (  991/centreon-engine)
[...]
```

### Check output or metrics is not complete

When a Plugin execution looks partial or incomplete, it usually means that there's 
a bug somewhere in the code. If this is the case, you will likely see some stderr 
lines printed when executing the check through the CLI. 

A message similar to the one below confirm that this is a bug: 

```bash
Use of uninitialized value $options{"value"} in pattern match (m//) and critical return
```

In this situation, reach us on [slack](https://centreon.github.io) or, even better, 
track an issue within the [centreon-plugins](https://github.com/centreon/centreon-plugins/) 
Github repository so we can patch it. 

## SNMP checks

### UNKNOWN: SNMP GET Request : Timeout

Often, a timeout comes from: 
- An SNMP Agent or Centreon Host misconfiguration, like a wrong SNMP port, version, 
or community string
- Third-party equipment (e.g., a Firewall) blocking the communication between the 
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

The interfaces bandwidth and status monitoring is a textbook case: the Plugin default 
behavior uses the ifName OID to build its cache. If it cannot find it then you 
run into this error. 

For interfaces and storage checks, options exist to ask the probe to use 
an other OID (e.g. `--oid-filter='ifDesc' --oid-display='ifDesc'`).

## HTTP and API checks

### UNKNOWN: 500 Can't connect to 10.30.2.136:19999 (Connexion refusée)

### UNKNOWN: Cannot decode response (add --debug option to display returned content)

## NRPE checks

#### `CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds`

Here are the questions you may want to ask yourself when obtaining this result: 

- Does my IP Address and port parameter are correct? 
- Is the NRPE daemon running on the remote system?
- Is there any firewall or security policy that might block the request? 

#### `connect to address x.x.x.x port 5666: Connection refused`

This error means that the client made a successful connection to the remote host and port 
but the server refused the connection.

Frequently, this is because the client is trying to connect to a server from an 
unauthorized IP. 

Check that the `allowed_hosts` directive defined in the NRPE Server config file 
allows your monitoring server to send remote command execution. 

Do not forget to restart your NRPE daemon to update the configuration.

#### `NRPE: Command 'my_command' not defined`

The NRPE Server throws this error when the client asks to run a command it doesn't understand. 

It might highlight either a configuration issue on the server-side or a typo in the 
command line on the client-side. 

Check the NRPE Server configuration to ensure that the command exists: 
```text
[my_command]=/path/to/a/command --option1='<value_or_macro>' --optionN='<value_or_macro>'
```
Do not forget to restart your NRPE daemon to update the configuration.

## Database checks 

### UNKNOWN: Cannot connect: Access denied for user