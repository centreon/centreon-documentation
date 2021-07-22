---
id: troubleshooting-plugins
title: Troubleshooting Plugins errors
---

When using Plugins and deploying a new monitoring probe, some errors might show up. 

Most of the time, the cause of these failures is a misconfiguration or a third-party 
device. This section compiles the most common errors you may face and some hints to identify the root cause.

The Centreon Pollers run a scheduler responsible for planning and executing checks. 
To troubleshoot a Plugin, you must always:

- Copy/Paste the command from Centreon Web UI to troubleshoot it from the CLI
- Use the centreon-engine user to execute manually the Plugin (and never root!)

## Common problems

### (no output returned from plugin)

When getting this error, please focus on the command line executed and ensure that the binary it uses exists or doesn't contain a typo.

On RPM-based systems, you can use the following command to identify what's the package providing the missing binary: 
`yum whatprovides "*/the_binary_name"`

### UNKNOWN: Cannot write statefile '/var/lib/centreon/centplugins/<cache_file_name>'

The most common cause is inappropriate rights on the cache directory (`/var/lib/centreon/centplugins`) or the cache file itself.  It can also be the result of an inconsistent installation or simply that the directory doesn't exist. 

Check that the directory exists and has the appropriate rights using stat utility: `stat /var/lib/centreon/centplugins`. The expected result is: 

```bash
File: '/var/lib/centreon/centplugins'
[...]
Access: (0775/drwxrwxr-x)  Uid: (  998/centreon)   Gid: (  997/centreon)`
[...]
``` 

If directory rights are ok, check also rights of the cache file: `stat /var/lib/centreon/centplugins/<cache_file_name>`. The expected result is: 

```bash
File: '/var/lib/centreon/centplugins/<cache_file_name>'
[...]
Access: (0664/-rw-rw-r--)  Uid: (  994/centreon-engine)   Gid: (  991/centreon-engine)
[...]
```

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
SNMP process is not running or the port isn't open. 

### UNKNOWN: Can't construct cache...



## HTTP and API checks

### UNKNOWN: 500 Can't connect to 10.30.2.136:19999 (Connexion refusée)

### UNKNOWN: Cannot decode response (add --debug option to display returned content)

## SSH and CLI checks

## NRPE checks

## Database checks 

### UNKNOWN: Cannot connect: Access denied for user