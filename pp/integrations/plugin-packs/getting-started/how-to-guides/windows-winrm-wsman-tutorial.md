---
id: windows-winrm-wsman-tutorial
title: Windows WSMAN Configuration tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

WS-Management (Web Services-Management) is a DMTF open standard defining a SOAP-based protocol for managing servers, devices, applications and various web services. WS-Management provides a common way for systems to access and exchange management information across the IT infrastructure.

## WinRM configuration

<Tabs groupId="sync">
<TabItem value="Local Configuration" label="Local Configuration">

### WSMAN configuration

On your Windows server, open PowerShell with administrator privileges and run the following commands.

Enable WinRM and allow remote access:

``` bash
winrm quickconfig
```

Enable basic authentication:

``` bash
winrm s winrm/config/service/auth '@\{Basic="true"\}'
```

### Firewall configuration

1. Open **Server Manager**.
2. From the **Tools** menu, select **Windows Defender Firewall with Advance Security**.
3. Click on **Inbound Rules**.
4. Click on **New Rule...**.
5. Click on **Port**, then **Next**.

  ![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-1.png)

6. Enter the value **5986** in the field for **Specific local ports** and click on **Next**.

  ![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-2.png)

7. Check that **Allow the connection** is selected, then click **Next**.

  ![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-3.png)

8. On the next page, select the firewall profiles for which the rule should apply, and click **Next**.

  ![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-4.png)

9. On the next page, give the rule a name, and click **Finish**.

  ![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-5.png)

### Create a self-signed certificate

Open PowerShell with administrator privileges and run the following command, replacing
@HOSTNAME@ with the correct value.

``` bash
New-SelfSignedCertificate -Subject 'CN=@HOSTNAME@' -TextExtension '2.5.29.37={text}1.3.6.1.5.5.7.3.1'
```

Copy the **Thumbprint** for the next step:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-certificate-1.png)

Create the WinRM HTTPS listener by replacing the values @HOSTNAME@ and @THUMBPRINT@ with the correct values.

``` bash
winrm create winrm/config/Listener?Address=*+Transport=HTTPS  '@\{Hostname="@HOSTNAME@";CertificateThumbprint="@THUMBPRINT@"\}'
```

From here, you can monitor your Windows server by using the local administrator account.

We strongly discourage the utilization of an administrator account within Centreon.

## Dedicated user configuration

This section describes how to configure a local user and minimum privileges to monitor your server.

### Create user

Open a PowerShell with administrator privileges.

Create your user:

``` bash
net user @USERNAME@ @PASSWORD@ /add
```

### Group configuration

Open **Computer Management** and add your user to the following groups:

* Distributed COM Users
* Event Log Readers
* Performance Log Users
* Performance Monitor Users
* Remote Management Users.

  ![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-group-config.png)

### WMI access configuration

In PowerShell, run the following command:

``` bash
WMImgmt.msc
```

Right-click on **WMI Control**, then on **Properties**:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-wmi-configuration-1.png)

Click on **Security**:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-wmi-configuration-2.png)

Select **Root** and click on **Security**:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-wmi-configuration-3.png)

Click on **Add...**, select the **Remote Management Users** group and set the following permissions:

* Enable Account
* Remote Enable

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-wmi-configuration-4.png)

Click on **Apply** and **OK**

The permissions are not applied recursively, so you will have to repeat the previous process on the following directories:

* Root
* Root/CIMV2
* Root/DEFAULT
* Root/RSOP
* Root/RSOP/Computer
* Root/WMI
* Root/CIMv2/Security/MicrosoftTpm

Click **Apply** and **OK**. Close the **WMImgmt.WMI** window.

### Allow script execution

In PowerShell, run the following command:

``` bash
winrm configSDDL default
```

Add the **Remote Management Users** group.
Set the following rights:

* Read(Get,Enumerate,Subscribe)
* Execute(Invoke)

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-script-execution.png)

Click **Apply** and **OK**.

### Grant permissions for services

#### Retrieve the user SID

Run the following command in PowerShell, replacing the value **@USERNAME@** with the correct value.

```bash
wmic useraccount where name="@USERNAME@" get name,sid
```

Output:
><p>Name&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;SID</p>
>@USRNAME@&ensp;&ensp;S-1-5-21-3051596711-3341658857-577043467-1000

#### Retrieve current SDDL for Service Control Manager

From a Windows Command Prompt (cmd), run the following command:

``` bash
sc sdshow scmanager
```

Your SDDL looks something like this:

>D:(A;;CC;;;AU)(A;;CCLCRPRC;;;IU)(A;;CCLCRPRC;;;SU)(A;;CCLCRPWPRC;;;SY)(A;;KA;;;BA)(A;;CC;;;AC)(A;;CC;;;S-1-15-3-1024-528118966-3876874398-709513571-1907873084-3598227634-3698730060-278077788-3990600205)S:(AU;FA;KA;;;WD)(AU;OIIOFA;GA;;;WD)

#### Modify SDDL

Copy this output and add the following section in the **D:** section just before the **S:** one: **(A;;CCLCRPRC;;;@USERSID@)**.

In this example, the SDDL is now looking like this:

>D:(A;;CC;;;AU)(A;;CCLCRPRC;;;IU)(A;;CCLCRPRC;;;SU)(A;;CCLCRPWPRC;;;SY)(A;;KA;;;BA)(A;;CC;;;AC)(A;;CC;;;S-1-15-3-1024-528118966-3876874398-709513571-1907873084-3598227634-3698730060-278077788-3990600205)*__(A;;CCLCRPRC;;;S-1-5-21-3051596711-3341658857-577043467-1000)__*S:(AU;FA;KA;;;WD)(AU;OIIOFA;GA;;;WD)

#### Set security credentials for accessing the Service Control Manager

In your Windows Command Prompt (cmd) run the following command, replacing *@NEWSDDL@* with the correct value:

``` bash
sc sdset scmanager "@NEWSDDL@"
```

In this example:

>sc sdset scmanager "D:(A;;CC;;;AU)(A;;CCLCRPRC;;;IU)(A;;CCLCRPRC;;;SU)(A;;CCLCRPWPRC;;;SY)(A;;KA;;;BA)(A;;CC;;;AC)(A;;CC;;;S-1-15-3-1024-528118966-3876874398-709513571-1907873084-3598227634-3698730060-278077788-3990600205)(A;;CCLCRPRC;;;S-1-5-21-3051596711-3341658857-577043467-1000)S:(AU;FA;KA;;;WD)(AU;OIIOFA;GA;;;WD)"

Your dedicated user is now working and can monitor your Windows server without requiring a local Administrator account.

</TabItem>
<TabItem value="Domain Configuration" label="Domain Configuration">

> For this procedure, we will assume that your Active Directory is properly configured and that a root certificate is available on each server.

### Enable & configure WinRM through a GPO

* Open the **Group Policy Manager**.
* Extend **Forest > Domains > @DOMAIN_NAME@**.
* Right-click on **@DOMAIN_NAME@** and click on **Create a GPO in this domain, and link it here...**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-create-gpo.png)

* Name your GPO. In this example, we will name it **Enable WinRM**.
* Right-click on the new GPO, **Enable WinRM**, and click on **Edit...**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-edit.png)

* In the **Group Policy Editor**, go to **Computer Configuration > Policies > Administrative Templates > Windows Components > Windows Remote Management (WinRM) > WinRM Service**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-winrm.png)

* Enable the rule **Allow remote server management through WinRM**.
* Add "\*" in **IPv4 filter** and **IPv6 filter**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-enable-remote.png)

* Disable the following rules:

    * **Allow Basic authentication**
    * **Allow CredSSP authentication**
    * **Allow unencrypted traffic**
    
The result must look like this:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-winrm-2.png)

### Automatically start the WinRM service through a GPO

In the same **Enable WinRM** GPO rule:

* Go to **Computer Configuration > Preferences > Control Panel Settings > Services**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-enable-service-1.png)

* Right-click in the right panel, then select **New** and **Service**.
* In **Startup**, select **Automatic**.
* In **Service name**, type **WinRM**.
* In **Service action**, select **Start service**.
* Click **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-enable-service-2.png)

### Configure an HTTPS WSMAN firewall rule through a GPO

In the same **Enable WinRM** GPO rule:

* Go to **Computer Configuration > Policies > Windows Settings > Security Settings > Windows Defender Firewall with Advanced Security > Windows Defender > Inbound Rules**:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-firewall-1.png)

* Right-click in the right panel, then click on **New Rule...**
* Click on **Port**, then on **Next**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-firewall-1.png)

* Enter the value **5986** in the field for **Specific local ports** and click on **Next**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-firewall-2.png)

* Check that **Allow the connection** is selected, then click **Next**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-firewall-3.png)

* On the next page, select the firewall profiles for which the rule should apply, and click **Next**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-firewall-4.png)

* On the next page, give the rule a name, then click **Finish**.

### Create an auto-enroll certificate template

#### Certificate Server

* Open the **Certification Authority** manager.
* Extend the left panel, right-click on **Certificate Templates**, then **Manage**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-1.png)

* Right-click on the **Web Server** template, then on **Duplicate Template**.
* On the **General** tab, name your template and check the following boxes:

    * **Publish certificate in Active Directory**
    * **Do not automatically reenroll...**
    
![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-2.png)

* Go to the **Request Handling** tab.
* Check the option **Allow private key to be exported**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-3.png)

* Go to the **Security** tab.
* Click on **Add...**, then type **Domain Computers**
* Set the following permissions:

    * **Read**
    * **Enroll**
    * **Autoenroll**.

 ![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-4.png)

* Go to the **Subject Name** tab.
* Configure as shown below:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-5.png)

* Click on **OK** and close the **Certificate Template Console**.
* In the **crtsrv** window, right-click on **Certificate Templates**, then click **New** and **Certificate Template to Issue**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-6.png)

* Select the previously created **WinRM Cert** template, then click on **OK**.
* Close the **certsrv** window.

#### Active Directory Server

> If an autoenroll GPO is already configured on your domain, you can skip that part.

* In the **Group Policy Manager**, create a new policy for the autoenrollment.
* Right-click on this policy, then click on **Edit...**

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-7.png)

* In the **Group Policy Management Editor**, go to **Computer Configuration > Policies > Windows Settings > Security Settings > Public Key Policies**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-8.png)

* Double-click on **Certificate Service Client - Certificate Enrollment Policy**.
* Set **Configuration Model** to **Enabled**.
* Click **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-9.png)

* Double-click on **Certificate Services Client - Auto-Enrollment**.
* Set **Configuration Model** to **Enabled**.
* Check the following options:

   * **Renew expired certificates...**
   * **Update certificates...**

* Click on **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-10.png)

* Close the **Group Policy Manager Editor**.
* In **Group Policy Mangement**, right-click on the Auto-Enrollment policy and click on **Enforced**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-11.png)

* Also, set the **Enable WinRM** rule to **Enforced**.

A dedicated certificate will be issued for each server that is part of your domain. These certificates will be used to encrypt the communication between Centreon and your Windows servers by using WSMAN and the HTTPS protocol.

#### Deploy the script

To link this certificate to the WinRM service, you will have to run the following PowerShell (.ps1) script on each server.
It can be done through a GPO or locally on each server.

Create the "WinRM-HTTPS.ps1" script on your Domain Controller.

Script:

``` bash
$FQDN=$(($i=[System.Net.Dns]::GetHostByName($env:computerName))).HostName

$Thumbprint=Invoke-Command -ComputerName $FQDN `
                             -ScriptBlock {
                                Get-ChildItem -Path Cert:\LocalMachine\My |
                                Where-Object{($TmplExt = $_.Extensions |Where-Object {$_.Oid.FriendlyName -match 'Certificate Template'}) -and $TmplExt.format(0) -match 'WinRM'} |
                                Sort-Object -Property NotAfter |
                                Select-Object -Last 1 -ExpandProperty Thumbprint
                             }


Set-WSManInstance -ResourceURI winrm/config/Listener `
                  -SelectorSet @\{Address="*";Transport="HTTPS"\} `
                  -ComputerName $FQDN `
                  -ValueSet @\{CertificateThumbprint=$Thumbprint\}

winrm create winrm/config/Listener?Address=*+Transport=HTTPS "@\{Hostname=".$FQDN.".;CertificateThumbprint=".$Thumbprint."\}"
```

* Copy this script in the following location to be able to deploy it massively:

``` bash
\\<DOMAIN_NAME>\SYSVOL\<DOMAIN_NAME>\scripts
```

In our case it looks like this:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-1.png)

* Go back to your **Enable WinRM** policy.
* Go to **Computer Configuration > Preferences > Windows Settings > Files**.
* Right-click in the right panel and select **New > Files**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-2.png)

* Select the **Source file(s)** and **Destination File**
    * In this example:
        * Source file: **\\contoso.local\SYSVOL\contoso.local\scripts\WinRM-HTTPS.ps1**
        * Destination file: **C:\Windows\Temp\WinRM-HTTPS.ps1**

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-3.png)

* Click **Apply**, then **OK**.

#### Create a scheduled task

* Go to the **Computer Configuration > Preferences > Control Panel Settings > Schedule Task** menu.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-4.png)

* Right-click in the right panel and select **New > Scheduled Task (At least Windows 7)**.
* Name your task.
* Select the user **NT Authority\Systems**.
* Select **Run whether user is logged on or not**.
* Check **Run with highest privileges**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-5.png)

* Go to the **Triggers** tab.
* Add a new trigger.
* Select **At task creation/modification**.
* Check **Repeat task every:**
    * Select **5 minutes**.
    * and **For a duration of 30 minutes**.
* Check **Enabled**.
* Click on **OK**.

> The **Repeat task** parameter is necessary to take into account new servers joining the domain.
> Indeed, the script might get executed before the certificate gets issued.
> With that parameter, we ensure that the task will be executed at least once after the WinRM certificate is issued.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-6.png)

* Go to the **Actions** tab.
* Add a new action.
* Fill in the following settings:
    * Action: **Start a program**.
    * Program/script: **PowerShell.exe**.
    * Add argument: **-file C:\Windows\Temp\WinRM-HTTPS.ps1**.
        * Adjust this parameter to match with the "File destination" setting previously configured.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-7.png)

* Save the configuration.

> Adapt the configuration to meet your needs.

> If you don't mind authenticating with the domain Admin user, you can jump straight to the Kerberos section.
> Otherwise, you can continue following the documentation to set up a dedicated service user.

### Configure service user

On your Active Directory server:

* Open **Active Directory Users and Computers**.
* In the left panel, select **@DOMAIN NAME@ > Users**.
* Right-click in the right panel and select **New > User**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-1.png)

* Create your user.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-2.png)

* Set up the password.
* Uncheck option **User must change password at next logon**.
* Check the options:

    * **User cannot change password**
    * **Password never expires**

* Click **Next**, then **Finish**.
    
![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-3.png)

* In the left panel go to **Builtin**.
* Add the service user as a member of the following groups:
    * **Distributed COM Users**
    * **Event Log Readers**
    * **Performance Log Users**
    * **Performance Monitor Users**
    * **Remote Management Users**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-4.png)

* Go back to the **Group Policy Manager** and edit the rule **Enable WinRM**.
* Go to **Computer Configuration > Policies > Windows Settings > Security Settings > Restricted Groups**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-5.png)

* Right-click on the right panel and click on **Add Group...**.
* Click on **Browse...**.
* Type **Distributed COM Users**, click on **Check Names**, then click on **OK**.
* Click on **OK...** again.
* Add your service user in the **Member of this group:** section.
* Click **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-6.png)

* Repeat the process for all builtin groups:
    * Event Log Readers
    * Performance Log Users
    * Performance Monitor Users
    * Remote Management Users.

When the configuration is done, it should look like that:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-7.png)

### Configure WMI permissions

For this step, you will need to connect to one target server to configure adequate rights.
Unfortunately, the WMI permission delegation can't be done through a GPO: this configuration needs to be done locally on each server.
To apply that configuration massively, we will create a configuration template from one of your servers, then apply this template through a scheduled task on your servers.

In PowerShell, run the following command:

``` bash
WmiMgmt.msc
```

Right-click on **WMI Control**, then on **Properties**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-1.png)

Click on **Security**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-2.png)

Select **Root** and click on **Security**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-3.png)

Click on **Add...**, select the service user (here, **sa_centreon**), and allow the following permissions:

* **Enable Account**
* **Remote Enable**

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-4.png)

> To make things easier, we will add a permission on this namespace and all subnamespaces.
> If you want to allow each mandatory namespace manually, you'll have to create one dedicated template per namespace.
> Mandatory namspaces:
> * **Root**
> * **Root/CIMV2**
> * **Root/DEFAULT**
> * **Root/RSOP**
> * **Root/RSOP/Computer**
> * **Root/WMI**
> * **Root/CIMv2/Security/MicrosoftTpm**.

* Click on **Advanced**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-5.png)

* Click on your service user, then on **Edit**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-6.png)

* On the line **Applies to:**, select **This namespace and all subnamespaces**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-7.png)

* Click on **OK** for each open window.

* Restart the service **WinRM**.

#### Create a WMI security template file

On the same server, run the following command in PowerShell:

``` bash
$SidHelper = New-Object System.Management.ManagementClass Win32_SecurityDescriptorHelper
$SdList = @($null)
$(Get-WMIObject -Namespace "root" -Class __SystemSecurity).PsBase.InvokeMethod("GetSD",$SdList)

[System.Management.Automation.PSSerializer]::Serialize($SdList) | Set-Content sdlist.txt 
```

You should now have a **sdlist.txt** file in your directory.

* Copy this file to your Domain Controller in the **\\contoso.local\SYSVOL\contoso.local\scripts** directory.

#### Deploy the WMI security template through a GPO

On your Domain Controller, create the **Set-WMINameSpaceSecurity.ps1** script:

``` bash
$SdList = [System.Management.Automation.PSSerializer]::Deserialize($(Get-Content C:\Windows\Temp\sdlist.txt))

$SidHelper = New-Object System.Management.ManagementClass Win32_SecurityDescriptorHelper
$RootSecurity = $(Get-WMIObject -Namespace "root" -Class __SystemSecurity)
$RootSecurity.PsBase.InvokeMethod("SetSd",$SdList) 
```

* Copy this script to the following location to be able to deploy this script massively.

``` bash
\\<DOMAIN_NAME>\SYSVOL\<DOMAIN_NAME>\scripts
```

* Go back to your **Enable WinRM** policy.
* Go to **Computer Configuration > Preferences > Windows Settings > Files**.
* Right-click in the right panel and select **New > Files**.

* Select the **Source file(s)** and **Destination File**.
    * In this example:
        * Source file: **\\contoso.local\SYSVOL\contoso.local\scripts\Set-WMINameSpaceSecurity.ps1**
        * Destination file: **C:\Windows\Temp\Set-WMINameSpaceSecurity.ps1**

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-8.png)

* Click **Apply** and **OK**.

* Repeat that process for the **sdlist.txt** file.
* Select the **Source file(s)** and **Destination File**.
    * In this example:
        * Source file: **\\contoso.local\SYSVOL\contoso.local\scripts\sdlist.txt**
        * Destination file: **C:\Windows\Temp\sdlist.txt**

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-9.png)

#### Execute the WMI security template through a GPO

* Go to the **Computer Configuration > Preferences > Control Panel Settings > Schedule Task** menu.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-4.png)

* Right-click in the right panel and select **New > Scheduled Task (At least Windows 7)**.
* Name your task.
* Select the user **NT Authority\Systems**.
* Select **Run whether user is logged on or not**.
* Check **Run with highest privileges**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-10.png)

* Go to the **Triggers** tab.
* Add a new trigger.
* Select **At task creation/modification**.
* Check **Enabled**.
* Click on **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-11.png)

* Go to the **Actions** tab.
* Add a new action.
* Fill in the following settings:
    * Action: **Start a program**
    * Program/script: **PowerShell.exe**
    * Add argument: **-file C:\Windows\Temp\Set-WMINameSpaceSecurity.ps1**
        * Adjust this parameter to match with the "File destination" setting previously configured.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-12.png)

* Save the configuration.

> Adapt the configuration to meet your needs.

### Configure Services permissions

As in the previous section, permissions have to be managed locally on each server.

#### File deployment

On your Domain Controller, create the **system-services.ps1** script:

```bash
# Query service manager to get the current permissions in SDDL format.
$command = @'
cmd.exe /C  sc sdshow scmanager
'@

$HostPermissions = Invoke-Expression -Command:$command

# Visually compare the two strings
Write-Host "  Host: " $HostPermissions

$NewPermission = $HostPermissions.replace('(A;;CC;;;AU)','(A;;CCLCRPRC;;;AU)')

Write-Host "New: $NewPermission"

$SetPermissionsCommand = @"
cmd.exe /C  sc sdset scmanager `"$($NewPermission)`"
"@

Invoke-Expression -Command:$SetPermissionsCommand
```

* Copy this script to the following location to be able to massively deploy it.

``` bash
\\<DOMAIN_NAME>\SYSVOL\<DOMAIN_NAME>\scripts
```

* Go back to your **Enable WinRM** policy.
* Go to **Computer Configuration > Preferences > Windows Settings > Files**.
* Right-click in the right panel and select **New > Files**.

* Select the **Source file(s)** and **Destination File**.
    * In this example:
        * Source file: **\\contoso.local\SYSVOL\contoso.local\scripts\system-services.ps1**
        * Destination file: **C:\Windows\Temp\system-services.ps1**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-services-permissions-1.png)

* Click **Apply**, then **OK**.

#### Schedule task creation

* Go to the **Computer Configuration > Preferences > Control Panel Settings > Schedule Task** menu.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-4.png)

* Right-click in the right panel and select **New > Scheduled Task (At least Windows 7)**.
* Name your task.
* Select the user **NT Authority\Systems**.
* Select **Run whether user is logged on or not**.
* Check **Run with highest privileges**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-services-permissions-2.png)

* Go to the **Triggers** tab.
* Add a new trigger.
* Select **At task creation/modification**.
* Check **Enabled**.
* Click on **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-11.png)

* Go to the **Actions** tab.
* Add a new action.
* Fill in the following settings:
    * Action: **Start a program**
    * Program/script: **PowerShell.exe**
    * Add argument: **-file C:\Windows\Temp\system-services.ps1**
        * Adjust this parameter to match with the "File destination" setting previously configured.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-services-permissions-3.png)

* Save the configuration.

> Adapt the configuration to meet your needs.

### Allow PowerShell command-line execution

As in the previous section, permissions have to be managed locally on each server.

#### File deployment

On your Domain Controler, create the "**RootSDDL-Permision.ps1** script.

> This script will set the **Execution** and **Read** permissions for your service user through WinRM.

``` bash
$user = $args[0]

#Adding the below script should replace "winrm configSDDL default"
$GENERIC_READ = 0x80000000
$GENERIC_WRITE = 0x40000000
$GENERIC_EXECUTE = 0x20000000
$GENERIC_ALL = 0x10000000

# get SID of user/group to add

$user_sid = (New-Object -TypeName System.Security.Principal.NTAccount -ArgumentList $user).Translate([System.Security.Principal.SecurityIdentifier])

# get the existing SDDL of the WinRM listener
$sddl = (Get-Item -Path WSMan:\localhost\Service\RootSDDL).Value

# convert the SDDL string to a SecurityDescriptor object
$sd = New-Object -TypeName System.Security.AccessControl.CommonSecurityDescriptor -ArgumentList $false, $false, $sddl

# apply a new DACL to the SecurityDescriptor object
$sd.DiscretionaryAcl.AddAccess(
[System.Security.AccessControl.AccessControlType]::Allow,
$user_sid,
($GENERIC_READ -bor $GENERIC_EXECUTE),
[System.Security.AccessControl.InheritanceFlags]::None,
[System.Security.AccessControl.PropagationFlags]::None
)

# get the SDDL string from the changed SecurityDescriptor object
$new_sddl = $sd.GetSddlForm([System.Security.AccessControl.AccessControlSections]::All)

# apply the new SDDL to the WinRM listener
Set-Item -Path WSMan:\localhost\Service\RootSDDL -Value $new_sddl -Force
```

* Copy this script to the following location to be able to deploy it massively.

``` bash
\\<DOMAIN_NAME>\SYSVOL\<DOMAIN_NAME>\scripts
```

* Go back to the **Enable WinRM** policy.
* Go to **Computer Configuration > Preferences > Windows Settings > Files**.
* Right-click in the right panel and select **New > Files**.

* Select the **Source file(s)** and **Destination File**.
    * In this example:
        * Source file: **\\contoso.local\SYSVOL\contoso.local\scripts\RootSDDL-Permision.ps1**
        * Destination file: **C:\Windows\Temp\RootSDDL-Permision.ps1**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-rootsddl-1.png)

* Click **Apply**, then **OK**.

#### Schedule task creation

* Go to the **Computer Configuration > Preferences > Control Panel Settings > Schedule Task** menu.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-https-4.png)

* Right-click in the right panel and select **New > Scheduled Task (At least Windows 7)**.
* Name your task.
* Select the user **NT Authority\Systems**.
* Select **Run whether user is logged on or not**.
* Check **Run with highest privileges**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-rootsddl-2.png)

* Go to the **Triggers** tab.
* Add a new trigger.
* Select **At task creation/modification**.
* Check **Enabled**.
* Click on **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-11.png)

* Go to the **Actions** tab.
* Add a new action.
* Fill in the following settings:
    * Action: **Start a program**
    * Program/script: **PowerShell.exe**
    * Add argument: **-file C:\Windows\Temp\RootSDDL-Permision.ps1** <span style={{color:'#FF0000'}}>**@SERVICE_USERNAME@**</span>
        * Adjust this parameter to match with the **File destination** setting previously configured.
        * In our exemple the argument is **-file C:\Windows\Temp\RootSDDL-Permision.ps1<span style={{color:'#FF0000'}}> sa_centreon</span>**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-rootsddl-2.png)

* Save the configuration.

> Adapt the configuration to meet your needs.

### File system permissions

On your Domain Controller:

* Go back to your **Enable WinRM** policy.
* Go to **Computer Configuration > Policies > Windows settings > Security Settings > File System**.
* Right-click in the right panel and select **Add File...**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-file-system-1.png)

* Select the directory you want to grant permissions and click on **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-file-system-2.png)

* Click on **Add...** and select your service user.
* Set the following permissions:
    * **Read and Execute**
    * **List Folder Contents**
    * **Read**.
* Click on **Apply**, then on **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-file-system-3.png)

* Select whether you want to propagate these permissions to the subfolders or not.
* Click on **OK**.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-file-system-4.png)

### Configure Kerberos on the Centreon server

On the Centreon server, run the following command:

``` bash
yum install sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python -y
realm join --user=administrator <YOUR_DOMAIN>
```

> If you are using Debian 12:

``` bash
apt -y install realmd sssd sssd-tools libnss-sss libpam-sss adcli samba-common-bin oddjob oddjob-mkhomedir packagekit krb5-user 
realm join --user=administrator <YOUR_DOMAIN>
```

You will be asked to type your domain admin account password.

In our example, it looks like this:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-centreon-kerberos-1.png)

#### Kerberos ticket

Kerberos authentication tickets expire every 10 hours, disconnecting the **centreon-engine** user and disabling the authentication. Additionally, Kerberos tickets have a lifetime of 7 days.
We will automatically renew the authentication ticket every 9 hours, as well as reinitialize the lifetime every Saturday through a cron job to work around this issue.

You will have to create a "keytab" file associated with your service account to allow connection without a password.

Run the following command, replacing **@USERNAME@** with the correct value.

``` bash
ktutil
addent -password -p @USERNAME@ -k 1 -e aes256-cts
wkt /var/lib/centreon-engine/@USERNAME@.keytab
q
```

Copy the "keytab" to the home directory of the **centreon-engine** and **centreon-gorgone** users and change the "keytab" file's permissions.

Run the following command, replacing **@USERNAME@** with the correct value.

``` bash
cp /var/lib/centreon-engine/@USERNAME@.keytab /var/lib/centreon-engine/
chown centreon-engine. /var/lib/centreon-engine/@USERNAME@.keytab

cp /var/lib/centreon-engine/@USERNAME@.keytab /var/lib/centreon-gorgone/
chown centreon-gorgone. /var/lib/centreon-gorgone/@USERNAME@.keytab
```

When done, run the following commands to allow centreon-engine and centreon-gorgone to perform the authentication:

``` bash
su - centreon-engine
kinit -k -t @USERNAME@.keytab @USERNAME@
logout
su - centreon-gorgone
kinit -k -t @USERNAME@.keytab @USERNAME@
```

Create the cron job, replacing **@USERNAME@** with the correct value.

``` bash
cat <<EOF > /etc/cron.d/kerberos
# ########################################
#
# Cron Configuration for Kerberos
#
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# rewrite file with new cron line
CRONTAB_EXEC_USER=""

############################ Renew ticket
0 */9 * * *  centreon-engine kinit -R
0 */9 * * *  centreon-gorgone kinit -R


############################ Reinitilaize ticket liftime
0 0 * * 6  centreon-engine kinit -k -t @USERNAME@.keytab @USERNAME@
0 0 * * 6  centreon-gorgone kinit -k -t @USERNAME@.keytab @USERNAME@
EOF
```

Restart the crond process.

``` bash
systemctl restart crond
```

Everything is now configured to monitor your Windows servers using WSMAN with a service user account, with an end-to-end encrypted protocol.

### How to test your configuration from your Centreon poller

```bash
/usr/lib/centreon/plugins/centreon_windows_wsman.pl --plugin=os::windows::wsman::plugin --mode=cpu --hostname=wsman.contoso.local --wsman-scheme=https --wsman-port=5986 --wsman-username='' --wsman-password='' --wsman-auth-method='gssnegotiate'
OK: CPU(s) average usage is 0.84 % - CPU '0' usage: 0.84 % | 'cpu.utilization.percentage'=0.84%;;;0;100 '0#core.cpu.utilization.percentage'=0.84%;;;0;100
```

> This authentication method requires you to use the DNS name of your Windows server, otherwise Kerberos will not allow the connection.
> Option `--wsman-auth-method='gssnegotiate'` is mandatory to use a domain account.
> As the Centreon system users (**centreon-engine** and **centreon-gorgone**) are already authenticated through the **kinit** command, you don't need to fill up the options **wsman-username** and  **wsman-password**

</TabItem>
</Tabs>
