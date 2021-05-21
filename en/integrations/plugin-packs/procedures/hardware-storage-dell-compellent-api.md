---
id: hardware-storage-dell-compellent-api
title: Dell Compellent API
---

## Prerequisites

This plugin pack requires the use of:

  - the Dell Storage Enterprise Manager provided
    [here](http://www.dell.com/support/home/us/en/19/Drivers/DriversDetails?driverId=7KXTW)
  - The Centreon flavor of NSClient++ monitoring agent available [here](https://github.com/centreon/centreon-nsclient-build/releases)
    target server as described on
    [documentation](http://documentation.centreon.com)

Note: Powershell and `DellStorage.ApiCommandSet.dll` have to be installed on
Windows Server. You'll need to add the file `powershell.exe.config` in directory
`C:WindowsSystem32WindowsPowerShellv1.0`:

    <?xml version="1.0"?>
    <configuration>
        <startup useLegacyV2RuntimeActivationPolicy="true">
            <supportedRuntime version="v4.0.30319"/>
            <supportedRuntime version="v2.0.50727"/>
        </startup> 
    </configuration>

Note: If you use the NSClient++ installer provided by Centreon, the plugin is
already included in centreon\_plugins.exe configured in NSClient++

Note: The plugin uses the Compellent Entreprise Manager. So you need information
to connect.

Warning: Set host macro `CEMUSER`, `CEMPASSWORD`, `CEMADDRESS`,
`DELLSTORAGESDKDLL` (the complete path of `DellStorage.ApiCommandSet.dll` file)

Warning: Don't use '\!' character in centreon macro configuration\!\!\!

## Centreon Configuration

### Create a new Exchange server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                  |
| :---------------------- | :------------------------------------- |
| Host name               | *Name of the host*                     |
| Alias                   | *Host description*                     |
| IP                      | *Host IP Address*                      |
| Monitored from          | *Monitoring Poller to use*             |
| Host Multiple Templates | HW-Storage-Dell-Compellent-NRPE-custom |

Click on the *Save* button.
