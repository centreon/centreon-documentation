---
id: pp/hardware-storage-dell-compellent-api
title: Dell Compellent API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.9 | `STABLE` | Feb  6 2017 |

## Prerequisites
This plugin pack requires the use of: 
* the Dell Storage Enterprise
Manager provided [here](http://www.dell.com/support/home/us/en/19/Drivers/DriversDetails?driverId=7KXTW)
* NSClient++ package provided by Centreon, installed and configured on
your target server as described on [documentation](http://documentation.centreon.com)

Note: Powershell and `DellStorage.ApiCommandSet.dll` have to be installed on Windows Server. You'll need to add the file
`powershell.exe.config` in directory `C:WindowsSystem32WindowsPowerShellv1.0`:

    <?xml version="1.0"?>
    <configuration>
        <startup useLegacyV2RuntimeActivationPolicy="true">
            <supportedRuntime version="v4.0.30319"/>
            <supportedRuntime version="v2.0.50727"/>
        </startup> 
    </configuration>

Note: If you use the NSClient++ installer provided by Centreon, the plugin is already included in centreon\_plugins.exe configured in NSClient++

Note: The plugin uses the Compellent Entreprise Manager. So you need information to connect.

Warning: Set host macro `CEMUSER`, `CEMPASSWORD`, `CEMADDRESS`, `DELLSTORAGESDKDLL` (the complete path of `DellStorage.ApiCommandSet.dll` file)

Warning: Don't use '!' character in centreon macro configuration!!!

## Centreon Configuration
### Create a new Exchange server
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="55%" />
<col width="44%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field</th>
<th align="left">Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Host name</p></td>
<td align="left"><p><em>Name of the host</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Alias</p></td>
<td align="left"><p><em>Host description</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>IP</p></td>
<td align="left"><p><em>Host IP Address</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Monitored from</p></td>
<td align="left"><p><em>Monitoring Poller to use</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Host Multiple Templates</p></td>
<td align="left"><p>HW-Storage-Dell-Compellent-NRPE-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

