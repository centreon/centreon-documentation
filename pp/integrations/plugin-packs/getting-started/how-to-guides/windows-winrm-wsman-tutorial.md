---
id: windows-winrm-wsman-tutorial
title: Windows WSMAN Configuration tutorial
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

WS-Management (Web Services-Management) is a DMTF open standard defining a SOAP-based protocol for the management of servers, devices, applications and various Web services. WS-Management provides a common way for systems to access and exchange management information across the IT infrastructure.

## WinRM configuration

<Tabs groupId="sync">
<TabItem value="Local Configuration" label="Local Configuration">

### WSMAN configuration

On your Windows server open PowerShell with Administrator privileges run the following command lines.

Enable WinRM and allow remote access:

``` bash
winrm quickconfig
```

Enable basic authentication:

``` bash
winrm s winrm/config/service/auth '@{Basic="true"}'
```

### Firewall configuration

* Open *Server Manager*
* From the *Tools* menu select *Windows Defender Firewall with Advance Security*
* Click on *Inbound Rules*
* Click on *New Rule...*
* Click on Port, then *Next*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-1.png)

* Enter the value *5986* in the field for Specific local ports and click on *Next*.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-2.png)

* Verify that the radio button next to Allow the connection is selected, and click Next.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-3.png)

* On the next page, select the firewall profiles for which the rule should apply, and click Next.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-4.png)

* On the next page, give the rule a name, and click Finish.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-firewall-5.png)

### Create Self-Signed certuficate.

Open PowerShell with Administrator privileges and run the followin command line by replacing
@HOSTNAME@ with the right value.

``` bash
New-SelfSignedCertificate -Subject 'CN=@HOSTNAME@' -TextExtension '2.5.29.37={text}1.3.6.1.5.5.7.3.1'
```

Copy the Thumbprint for the next step

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-certificate-1.png)

Create the WinRM HTTPS listener by replacing the value @HOSTNAME@ and @THUMBPRINT@ with the right values.

``` bash
winrm create winrm/config/Listener?Address=*+Transport=HTTPS  '@{Hostname="@HOSTNAME@";CertificateThumbprint="@THUMBPRINT@"}'
```

From here, you can monitor your Windows server by using the local Adminsitrator account.
Is not recommanded to use the Administrator account within Centreon.

## Dedicate User configuration

This section will describe you how to configure a local user and minimum privileges to monitor your server.
All configuration can be done through GPO for global deployement.

### Create User

Open a PowerShell with Administrator privileges.

Create your user:

``` bash
net user @USERNAME@ @PASSWORD@ /add
```

### Group configuration

Open the *Computer Management* and add your user into the following groups:
* Distributed COM Users
* Event Log Readers
* Performance Log Users
* Performance Monitor Users
* Remote Management Users

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-group-config.png)

### WMI access configuration

In PowerShell run the command:

``` bash
WMImgmt.msc
```

Right click on *WMI Control*, then *Properties*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-wmi-configuration-1.png)

Click on *Security*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-wmi-configuration-2.png)

Select *Root* and click on *Security*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-wmi-configuration-3.png)

Click on *Add...*, select the *Remote Management Users* group
And allow the following permissions:
* Execute Methods
* Enable Account
* Remote Enable
* Read Security

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-wmi-configuration-4.png)

Click on *Apply* and *OK*

The permissions are not apply recursively, so you will have to repeat the previous process on the following directories:

* Root
* Root/CIMV2
* Root/DEFAULT
* Root/RSOP
* Root/RSOP/Computer
* Root/WMI
* Root/CIMv2/Security/MicrosoftTpm

*Apply* and *OK*
Close WMImgmt windows

### Allow script execution

In PowerShell run the following command line:

``` bash
winrm configSDDL default
```

Add the *Remote Management Users* group.
Allow the right:
* Read(Get,Enumerate,Subscribe)
* Execute(Invoke)

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-tutorial/windows-winrm-wsman-script-execution.png)

*Apply* and *OK*

### Grant permission about services

#### Retrieve the user SID

To do so, run the following command line in PowerShell by replacing the value *@USERNAME@* with the correct value.

```bash
wmic useraccount where name="@USERNAME@" get name,sid
```

Output:
><p>Name&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;SID</p>
>@USRNAME@&ensp;&ensp;S-1-5-21-3051596711-3341658857-577043467-1000

#### Retrieve current SDDL for Service Control Manager

From a Windows Command Prompt (cmd) run the follwing command line:

``` bash
sc sdshow scmanager
```

Your SDDL looks something like this:

>D:(A;;CC;;;AU)(A;;CCLCRPRC;;;IU)(A;;CCLCRPRC;;;SU)(A;;CCLCRPWPRC;;;SY)(A;;KA;;;BA)(A;;CC;;;AC)(A;;CC;;;S-1-15-3-1024-528118966-3876874398-709513571-1907873084-3598227634-3698730060-278077788-3990600205)S:(AU;FA;KA;;;WD)(AU;OIIOFA;GA;;;WD)

#### Modify SDDL

Copy this output and add the following section *(A;;CCLCRPRC;;;@USERSID@)* in the *D:* section just before the *S:* one.

In this exemple the SDDL is now looking like this:

>D:(A;;CC;;;AU)(A;;CCLCRPRC;;;IU)(A;;CCLCRPRC;;;SU)(A;;CCLCRPWPRC;;;SY)(A;;KA;;;BA)(A;;CC;;;AC)(A;;CC;;;S-1-15-3-1024-528118966-3876874398-709513571-1907873084-3598227634-3698730060-278077788-3990600205)*__(A;;CCLCRPRC;;;S-1-5-21-3051596711-3341658857-577043467-1000)__*S:(AU;FA;KA;;;WD)(AU;OIIOFA;GA;;;WD)

#### Set security credentials for accessing the Service Control Manage

In your Windows Command Prompt (cmd) run the following command by replacing *@NEWSDDL@* with the correct value:

``` bash
sc sdset scmanager "@NEWSDDL@"
```

In this example:

>sc sdset scmanager "D:(A;;CC;;;AU)(A;;CCLCRPRC;;;IU)(A;;CCLCRPRC;;;SU)(A;;CCLCRPWPRC;;;SY)(A;;KA;;;BA)(A;;CC;;;AC)(A;;CC;;;S-1-15-3-1024-528118966-3876874398-709513571-1907873084-3598227634-3698730060-278077788-3990600205)(A;;CCLCRPRC;;;S-1-5-21-3051596711-3341658857-577043467-1000)S:(AU;FA;KA;;;WD)(AU;OIIOFA;GA;;;WD)"

From here, your dedicate user is fully setup to monitor your Windows server without using a local Administrator account.

</TabItem>
<TabItem value="Domain Configuration" label="Domain Configuration">

> For this procedure we will asume that your Active Directory is properly configured and that a root certificate is deploy on each servers

### Enable & configure WinRM through GPO

* Open the *Group Policy Manager*
* Extend Forest > Domains > @DOMAIN_NAME@
* Right click on @DOMAIN_NAME@ and click on *Creat a GPO in this domain, and link it here...*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-create-gpo.png)

* Name your GPO. In this exemple we will name it *Enable WinRM.*
* Right click on the new GPO *Enable WinRM*, and click on *Edit...*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-edit.png)

* In the *Group Policy Editor*, go into Computer Configuration > Policies > Administrative Templates > Windows Components > Windows Remote Management (WinRM) > WinRM Service

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-winrm.png)

* Enable the rule *Allow remote server management through WinRM*
* Add "\*" in *IPv4 filter* and *IPv6 filter*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-enable-remote.png)

* Disabled the following rules:
    * Allow Basic authentication
    * Allow CredSSP authentication
    * Allow unencrypted traffic
    
The result must look like this:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-winrm-2.png)

### Automatically start WinRM service through GPO

In the same *Enable WinRM* GPO rule.
* Go into Computer Configuration > Preferences > Control Pannel Settings > Services

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-enable-service-1.png)

* On the right pannel right click, then *New* and *Service*
* In Startup select *Automatic*
* In Serbice name type *WinRM*
* Service action *Start service*
* Click *OK*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-enable-service-2.png)

### Configure HTTPS WSMAN firewall rule through GPO

In the same *Enable WinRM* GPO rule.
* Go into Computer Configuration > Windows Settiengs > Security Settings > Windows Defender Firewall with Advanced Security > Windows Defender > Inbound Rules

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-gpo-firewall-1.png)

* Right click on the right pannel and click on *New Rule...*
* Click on Port, then *Next*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-firewall-1.png)

* Enter the value *5986* in the field for Specific local ports and click on *Next*.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-firewall-2.png)

* Verify that the radio button next to Allow the connection is selected, and click Next.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-firewall-3.png)

* On the next page, select the firewall profiles for which the rule should apply, and click Next.

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-firewall-4.png)

* On the next page, give the rule a name, and click Finish.

### Create auto-enroll certificate template

#### Certificate Server

* Open the *Certification Authority* manager
* Extend left pannel, right click on *Certificate Templates*, then *Manage*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-1.png)

* Right click on the template *Web Server* and *Duplicate Template*
* In the *General* tab Name your template and check boxes:
    * Publish certificat in Active Directory
    * Do not automatically reenroll...
    
![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-2.png)

* Go in the *Request Handling* tab
* Check the option *Allow private key to be exported*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-3.png)

* Go in the *Security* tab
* Click on *Add...*, type *Domain Computers*
* Allow the following permission:
    * Read
    * Enroll
    * Autoenroll

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-4.png)

* Go in the *Subject Name* tab
* Configure as shown bellow

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-5.png)

* Click on *OK* and close the *Certificate Template Console*
* In the *crtsrv* window right click on *Certificate Templates*, *New* and *Certificate Template to Issue*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-6.png)

* Select the priviously created *WinRM Cert* template, then click on *OK*
* Close the certsrv window

#### Active Directory Server

> If an autoenroll GPO is already configure on your domain, you can skip that part

* In the *Group Policy Manager*, create a new Policy for the autoenrollment
* Right click on this policy and click on *Edit...*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-7.png)

* In the *Group Policy Management Editor*, go in Computer Configuration > Windows Settings > Security Settings > Public Key Policies

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-8.png)

* Double-click on *Certificate Service Client - Certificate Enrollement Policy*
* Configuration Model > Enabled
* Then *OK*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-9.png)

* Double-click on *Certificate Services Client - Auto-Enrollment*
* Configuration Model > Enabled
* Check the following options:
    * Renew expired certificates...
    * Update certificates...
* Click on *OK*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-10.png)

* Close the *Group Policy Manager Editor*
* In *Group Policy Mangement*, right click on the Auto-Entrollment policy and click on *Enforced*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-certificate-11.png)

* Also enable *Enforced* the *Enable WinRM* rule

A dedicated certificate will be issue for each server part of your domain. This certificates will be use to encrypt the communication between Centreon and your Windows servers by using WSMAN and HTTPS protocol.

To link those certificate with the WinRM service you will have to run the following PowerShell (.ps1) script on each server.
It can be done though GPO or locally on each servers.

``` bash
$FQDN=$(($i=[System.Net.Dns]::GetHostByName($env:computerName))).HostName
$Thumbprint=$((Get-ChildItem cert:\LocalMachine\my |Where-Object{($TmplExt = $_.Extensions |Where-Object {$_.Oid.FriendlyName -match 'Certificate Template'}) -and $TmplExt.format(0) -match 'WinRM'})).Thumbprint

winrm create winrm/config/Listener?Address=*+Transport=HTTPS "@{Hostname=".$FQDN.".;CertificateThumbprint=".$Thumbprint."}"
```

### Configure service user

On your Active Directory server 

* Open *Active Directory Users and Computers*
* In the left pannel extend @DOMAIN NAME@ > User
* Right click on the right pannel New > User

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-1.png)

* Create your user

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-2.png)

* Setup the password
* Uncheck option *User must change password at next logon*
* Check the options:
    * User cannot change password
    * Password never expired
* Click *Next*, and *Finish*
    
![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-3.png)

* In the left pannel go in Builtin
* Add the service user as member of the following groups:
    * Distributed COM Users
    * Event Log Readers
    * Performance Log Users
    * Performance Monitor Users
    * Remote Management Users

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-4.png)

* Go back in the *Group Policy Manager* and edit the rule *Enable WinRM*
* Go in Computer Configuration > Windows Settings > Local Policies > Security Options

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-5.png)

* Select the rule *DCOM: Machine Access Restriction...(SDDL)*
* Check *Define this policy setting*
* Click on *Edit Security...*
* Click on *Add...*
* Add *Dstributed DCOM User* group
* Allow *Local Access* and *remote Access*
* Click *OK*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-6.png)

* Select the rule *DCOM: Machine Lunch Restriction in Security...*
* Click on *Edit Security...*
* Click on *Add...*
* Add *Dstributed DCOM User* group
* Allow all options
* Click *OK*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-7.png)

Your policies must look like this:

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-user-8.png)

### Configure WMI permissions

In a prompt run the following command line:

``` bash
WmiMgmt.msc
```

Right click on *WMI Control*, then *Properties*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-1.png)

Click on *Security*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-2.png)

Select *Root* and click on *Security*

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-3.png)

Click on *Add...*, select the *Remote Management Users* group
And allow the following permissions:
* Execute Methods
* Enable Account
* Remote Enable
* Read Security

![image](../../../../assets/integrations/plugin-packs/how-to-guides/windows-winrm-wsman-gpo-tutorial/windows-winrm-wsman-wmi-configuration-4.png)

Click on *Apply* and *OK*

The permissions are not apply recursively, so you will have to repeat the previous process on the following directories:

* Root
* Root/CIMV2
* Root/DEFAULT
* Root/RSOP
* Root/RSOP/Computer
* Root/WMI
* Root/CIMv2/Security/MicrosoftTpm

*Apply* and *OK*
Close WMImgmt windows

### Configure Kerberos on the Centreon server

On the Centreon server run the following command:

``` bash
yum install sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python -y
realm join --user=administrator <YOUR_DOMAIN>
```

You will be ask to type your domain account password.
When done run the follwoing command:

``` bash
kinit Administrator@<YOUR_DOMAIN>
```

From here everything is configure to monitor your Windows servers by using WSMAN with a service user account, with encrypted protocol.
Plkease find bellow an example of command line from Centreon

### Test check from Centreon server

```bash
./centreon_plugins.pl --plugin=os::windows::wsman::plugin --mode=cpu --hostname=EC2AMAZ-VU25UDV  --wsman-scheme=https --wsman-port=5986 --wsman-username="sa_centreon@CONTOSO.LOCAL" --wsman-password='XXXXX' --wsman-auth-method='gssnegotiate' --verbose
OK: CPU(s) average usage is 0.24 % - CPU '0' usage: 0.24 % | 'cpu.utilization.percentage'=0.24%;;;0;100 '0#core.cpu.utilization.percentage'=0.24%;;;0;100
CPU '0' usage: 0.24 %
```

> This authentication methode require you to use the DNS name of your windows server or Kerberos will not allow the connection
> Option "--wsman-auth-method='gssnegotiate'" is mandatory to use a domain account
> The domain name in '--wsman-username="sa_centreon@CONTOSO.LOCAL"' is case sensitive and must be in capital.

</TabItem>
</Tabs>
