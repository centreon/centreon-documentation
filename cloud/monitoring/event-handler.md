---
id: event-handler
title: Event handler (auto remediation)
description: "How to configure event handlers to automatically run remediation scripts on host or service state changes"
---

## Introduction

Event handlers are optional system commands (scripts or executables) that are run whenever a host
or service state change occurs.

An obvious use for event handlers is the ability for Centreon to proactively fix problems before anyone is notified.

### When Are Event Handlers Executed?

Event handlers are executed when a service or host:

* Is in a SOFT problem state
* Initially goes into a HARD problem state
* Initially recovers from a SOFT or HARD problem state.

[SOFT and HARD states are described here](../alerts-notifications/concepts.md#status-types).

## Configuration

### Step 1: Create a command

Event handler commands will likely be shell or perl scripts, but they can be any type of executable that can run from a
command prompt. As a minimum, the scripts should take the following macros as arguments:

* For Services: $SERVICESTATE$, $SERVICESTATETYPE$, $SERVICEATTEMPT$
* For Hosts: $HOSTSTATE$, $HOSTSTATETYPE$, $HOSTATTEMPT$

Event handler commands are typically executed with the same permissions as the user running Centreon Engine (the `centreon-engine` user) on your machine. This means that the executed file must have the appropriate execution permissions for this user. If your event handler needs to restart system services, be cautious, as such tasks generally require `root` privileges, and improper handling could lead to security risks or execution failures.

Ideally you should evaluate the types of event handlers you will be implementing and grant just enough permissions to
the Centreon Engine user to execute the necessary system commands. You might want to try using sudo to accomplish this.

1. To create a command, go to **Configuration > Commands > Miscellaneous**.
2. [Create your command as described here](./basic-objects/commands.md#creating-a-custom-check-command).
3. Make sure to [add your new command to the command whitelist of the poller](./basic-objects/commands.md#command-whitelist) that will monitor the resources you want.

### Step 2: Configure event handlers for resources

1. Go to **Configuration > Hosts > Hosts** or to **Configuration > Services > Services by host** and edit your hosts or services.

2. On the **Data Processing** tab, in the **Event handler** field, select one of the commands you created at step 1.

3. Click **Save**.

> You can also configure this command on [host templates](basic-objects/hosts-templates.md) or [service templates](basic-objects/services-templates.md).

### Example

The example below assumes that you are monitoring the HTTP server on the local machine. We will assume that the **Max
Check Attempts** option for the service has a value of 4 or greater (i.e., the service is checked 4 times before it is
considered to have a real problem).

1. Store the following event handler script in **/usr/lib/centreon/plugins/eventhandlers/restart-httpd**.

```Shell
#!/bin/sh
#
# Event handler script for restarting the web server on the local machine
#
# Note: This script will only restart the web server if the service is
#       retried 3 times (in a "soft" state) or if the web service somehow
#       manages to fall into a "hard" error state.
#

# What state is the HTTP service in?
case "$1" in
OK)
	# The service just came back up, so don't do anything...
	;;
WARNING)
	# We don't really care about warning states, since the service is probably still running...
	;;
UNKNOWN)
	# We don't know what might be causing an unknown error, so don't do anything...
	;;
CRITICAL)
	# Aha!  The HTTP service appears to have a problem - perhaps we should restart the server...
	# Is this a "soft" or a "hard" state?
	case "$2" in

	# We're in a "soft" state, meaning that Centreon is in the middle of retrying the
	# check before it turns into a "hard" state and contacts get notified...
	SOFT)

		# What check attempt are we on?  We don't want to restart the web server on the first
		# check, because it may just be a fluke!
		case "$3" in

		# Wait until the check has been tried 3 times before restarting the web server.
		# If the check fails on the 4th time (after we restart the web server), the state
		# type will turn to "hard" and contacts will be notified of the problem.
		# Hopefully this will restart the web server successfully, so the 4th check will
		# result in a "soft" recovery.  If that happens no one gets notified because we
		# fixed the problem!
		3)
			echo -n "Restarting HTTP service (3rd soft critical state)..."
			# Call the init script to restart the HTTPD server
			/etc/rc.d/init.d/httpd restart
			;;
			esac
		;;

	# The HTTP service somehow managed to turn into a hard error without getting fixed.
	# It should have been restarted by the code above, but for some reason it didn't.
	# Let's give it one last try, shall we?  
	# Note: Contacts have already been notified of a problem with the service at this
	# point (unless you disabled notifications for this service)
	HARD)
		echo -n "Restarting HTTP service..."
		# Call the init script to restart the HTTPD server
		/etc/rc.d/init.d/httpd restart
		;;
	esac
	;;
esac
exit 0
```

The sample script provided above will attempt to restart the web server on the local machine in two different cases:

* After the service has been rechecked for the 3rd time and is in a SOFT CRITICAL state
* After the service first goes into a HARD CRITICAL state

The script should theoretically restart the web server and fix the problem before the service goes into a HARD problem
state, but we include a fallback case in the event that it doesn't work the first time. In that case the event
handler will only be executed the first time the service falls into a HARD problem state. This prevents Centreon
from continuously executing the script to restart the web server if the service remains in a HARD problem state.

2. Go to **Configuration > Commands > Miscellaneous** and create a command with the following characteristics:

* Command Name: **restart-httpd**
* Command Line: `$CENTREONPLUGINS$/eventhandlers/restart-httpd  $SERVICESTATE$ $SERVICESTATETYPE$ $SERVICEATTEMPT$`

3. Edit the service you want, then select the **restart-httpd** command in the **Event handler** field.
