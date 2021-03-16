---
id: install
title: Install Centreon MAP extension
---

> Centreon MAP requires a valid license key. To purchase one and retrieve the
> necessary repositories, contact [Centreon](mailto:sales@centreon.com).

This chapter describes how to install Centreon MAP. The server must be
installed on a dedicated machine to allow Centreon MAP to operate with
its own database and avoid any potential conflict with the Centreon
central server.

Before installation, be sure to review the Prerequisites chapter for
system requirements (CPU and memory). Remember to choose the best type
of architecture to suit your needs.

## Architecture

Centreon MAP consists of three components:

- Centreon MAP Server, developed in Java, using SpringBoot, Hibernate and CXF
- Centreon MAP Web interface, developed in Javascript, based on
  [Backbone.js](http://backbonejs.org/)
- Centreon MAP Desktop Client, developed in Java, based on [Eclipse RCP
  4](https://wiki.eclipse.org/Eclipse4/RCP).

The diagram below summarizes the architecture:

![image](../assets/graph-views/map_architect.png)

**Table of network flow**

| Application    | Source     | Destination               | Port      | Protocol   | Purpose                                             |
|----------------|------------|---------------------------|-----------|------------|-----------------------------------------------------|
| Map Server     | Map server | Centreon central broker   | 5758      | TCP        | Get real-time status updates                        |
| Map Server     | Map server | Centreon MariaDB database | 3306      | TCP        | Retrieve configuration and other data from Centreon |
| Map Server     | Map server | Map server database       | 3306      | TCP        | Store all views and data related to Centreon MAP    |
| Web + Desktop  | Map server | Centreon central          | 80/443    | HTTP/HTTPS | Authentication & data retrieval                     |
| Web interface  | User       | Map server                | 8080/8443 | HTTP/HTTPS | Retrieve views & content                            |
| Web interface  | User       | Internet\* (Mapbox)       | 443       | HTTPS      | Retrieve Mapbox data                                |
| Desktop client | User       | Map server                | 8080/8443 | HTTP/HTTPS | Retrieve and create views & content                 |
| Desktop client | User       | Internet\* (Mapbox)       | 443       | HTTPS      | Retrieve Mapbox data                                |
| Desktop client | User       | Internet\* (p2 repo)      | 80        | HTTP       | Retrieve automatic desktop client update            |

\* *With or without a proxy*

## Prerequisites

### Centreon

The required version of Centreon software for compatibility with Centreon
MAP is **Centreon 21.04**

**Centreon must be installed using the RPM packages.**

### Centreon MAP Server

#### License

The server requires the license to be available and valid on Centreon's central
server. To do this, you must contact the support [Centreon support
team](https://centreon.force.com/) to get & install your license key.

#### Hardware

Hardware requirements for your dedicated Centreon MAP server are as follows:

| *Monitored services*     | \< 10 000               | \< 20 000            | \< 40 000            | \> 40 000            |
| ------------------------ | ----------------------- | -------------------- | -------------------- | -------------------- |
| *CPU*                    | 2 vCPU ( 3Ghz ) minimum | 4 CPU (3GHz) Minimum | 4 CPU (3GHz) Minimum | Ask Centreon Support |
| *Dedicated Memory*       | 2GB                     | 4GB                  | 8GB                  | Ask Centreon Support |
| *MariaDB data partition* | 2GB                     | 5GB                  | 10GB                 | Ask Centreon Support |

To correctly implement the dedicated memory, you have to edit the
*JAVA\_OPTS* parameter in the Centreon Map configurations file
`/etc/centreon-studio/centreon-map.conf` and restart the service:

```text
JAVA_OPTS="-Xms512m -Xmx4G"
```

> The Xmx value depends on the amount of memory indicated in the above table.

Then restart the service:

```shell
systemctl restart centreon-map
```

The space used by Centreon MAP server is directly determined by the
number of elements you add into your views. An element is any graphical
object in Centreon MAP. Most elements (like hosts, groups, etc.) have
children which must be included in the count.

> These values are applied after optimization of Centreon MAP tables.

#### Software

- OS: CentOS or Redhat 7 / 8
- DBMS: MariaDB 10.5
- Firewall: Disabled
- SELinux: Disabled

#### Information required during configuration

- Centreon Web login with admin rights.

> Even with a correctly sized server, you should have in mind the best
> practices & recommandations when creating views so you don't face
> performance issues.

### Centreon MAP Web interface

#### License

The web interface requires the license to be available and valid on Centreon's
central server. To do this, you must contact the support [Centreon support
team](https://centreon.force.com/) to get & install your license key.

#### Compatibility

The Centreon MAP Web interface is compatible with the following web browsers:

- Firefox (latest version)
- Chrome (latest version)
- Safari (latest version)
- Microsoft Edge Chromium

Resolution must be at least 1280 x 768.

### Centreon MAP Desktop Client

- 4 GB of RAM minimum, 8 GB advised (mandatory for 10,000 or more services)
- **Java 64 bits version 8**
- Resolution must be at least 1280 x 768.
- Debian 7,8 or 9

> Desktop Client is not compatible with Microsoft Windows Server. * If a
> version of Java other than 8 is installed, consider installing Java 8 and
> modifying Centreon-Map4.ini to add the following line `-vm
> $path_to_java8$` BEFORE `-vmwargs`.

To optimize the desktop client, you have to "give" it more memory than the
default value. Modify the following file:

<!--DOCUSAURUS_CODE_TABS-->

<!--Windows-->

```shell
C:\Users\<YOUR_USERNAME>\AppData\Local\Centreon-Map4\Centreon-Map4.ini
```

<!--Linux-->

```shell
/opt/centreon-map4-desktop-client/Centreon-Map4.ini
```

<!--END_DOCUSAURUS_CODE_TABS-->

And add the following lines at the end of the file, on a new line:

```text
-Xms512m
-Xmx4g
```

### Network requirements

Centreon MAP Server machine must access:

- Centreon Central broker, usually on Centreon Central machine, using TCP
  port 5758
- Centreon Database, usually on Centreon Central machine, using TCP port 3306
- Centreon MAP database, usually on localhost, using TCP port 3306.

All the ports above are default values and can be changed if needed.

- Centreon Web Central, using HTTP port 80 or HTTPS port 443

Centreon MAP Desktop Client machines must access:

- Centreon MAP Server, using HTTP port 8080 or 8443 when HTTPS/TLS is enabled
- Internet with or without proxy.

Ports 8080 and 8443 are recommanded default values, but other
configurations are possible.

## Server installation

### Centreon Web interface

The Centreon MAP server requires a dedicated user who has access to all
resources. Since the password will be stored in human-readable form in a
configuration file, you should not use a Centreon admin user account.

Provide this user with access to the Centreon Web real-time API:

![image](../assets/graph-views/reach-api.png)

### Centreon Central server

Create a user in the mysql instance hosting 'centreon' and 'centreon_storage'
databases:

```sql
CREATE USER 'centreon_map'@'<IP_SERVER_MAP>' IDENTIFIED BY 'centreon_map';
GRANT SELECT ON centreon_storage.* TO 'centreon_map'@'<IP_SERVER_MAP>';
GRANT SELECT, INSERT ON centreon.* TO 'centreon_map'@'<IP_SERVER_MAP>';
```

The INSERT privilege will only be used during the installation process
in order to create new Centreon Broker output. It will be revoked later.

### Centreon MAP server

If you installed your Centreon MAP server from a "fresh CentOS installation"
you need to install the `centreon-release` package:

<!--DOCUSAURUS_CODE_TABS-->

<!--RHEL / CentOS / Oracle Linux 8-->

```shell
dnf install http://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-2.el8.noarch.rpm
```

<!--CentOS 7-->

```shell
yum install http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-2.el7.centos.noarch.rpm
```

<!--END_DOCUSAURUS_CODE_TABS-->

> If the URL doesn't work, you can manualy find this package in the folder.

Install Centreon MAP repository, you can find it on the
[support portal](https://support.centreon.com/s/repositories).

Then install Centreon MAP server using the following command:

<!--DOCUSAURUS_CODE_TABS-->

<!--RHEL / CentOS / Oracle Linux 8-->

```shell
dnf install centreon-map-server
```

<!--CentOS 7-->

```shell
yum install centreon-map-server
```

<!--END_DOCUSAURUS_CODE_TABS-->

When installing Centreon MAP server, it will automatically install java
(OpenJDK 11) if needed.

> You need to have a MySQL/MariaDB database to store Centreon MAP data, wether
> it's on localhost or somewhere else.

### Configuration

Make sure the database that stores Centreon MAP data is optimized
(automatically added by the RPM in `/etc/my.cnf.d/map.cnf`):

```text
max_allowed_packet = 20M
innodb_log_file_size = 200M
```

Then, restart MariaDB:

```shell
systemctl restart mariadb
```

Execute the Centreon MAP server configuration script. Two modes are available:
interactive or automatic.

- interactive *(no option/default mode)*: Several questions will be asked to
  interactively fill in the installation variables.
- automatic *(--automatic or -a)*: The installation will be done automatically
  from the values set in `/etc/centreon-studio/vars.sh` file

If it's your first installation, we advice you to use the standard mode
(interactive) and choose **No** when asked for advanced installation mode:

```shell
/etc/centreon-studio/configure.sh
```

### Central server

> Before restarting Broker you must export the configuration from the Centreon
> Web interface.

Restart Centreon Broker on the Central server:

```shell
systemctl restart cbd
```

Remove the INSERT privilege from user centreon_map:

```sql
REVOKE INSERT ON centreon.* FROM 'centreon_map'@'<IP_SERVER_MAP>';
```

### Centreon MAP server

Check your configuration:

```shell
/etc/centreon-studio/diagnostic.sh
```

If configuration is correct, the centreon-map service can be
started from the Centreon MAP server:

```shell
systemctl restart centreon-map
```

Enable the service to start up automatically on server boot:

```shell
systemctl enable centreon-map
```

Centreon Map server is now started and enabled, let's install
the interface part of the extension.

## Web Interface installation

### Central server

Install Centreon MAP repository, you can find it on the
[support portal](https://support.centreon.com/s/repositories).

Then execute the following command:

<!--DOCUSAURUS_CODE_TABS-->

<!--RHEL / CentOS / Oracle Linux 8-->

```shell
dnf install centreon-map-web-client
```

<!--CentOS 7-->

```shell
yum install centreon-map-web-client
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Web

Go to `Centreon > Administration > Extensions` and click on the install
button:

- License Manager (*if not yet installed*)
- Map Web Client

![image](../assets/graph-views/install-web-step-1.png)

You can see a red stripe asking for a license.

Upload the license **map.license** given by the support team. Refresh
the page and the banner must be green with the valid license date.

![image](../assets/graph-views/install-web-step-2.png)

Click on Back to return to the Extensions page. Now that the module is
installed, we will configure it.

### Configuration

Go to `Administration > Extensions > Options`, and in the Centreon MAP menu
update the Centreon MAP server address field:

> Use the real IP address/hostname of your Centreon MAP server.

![image](../assets/graph-views/install-web-step-3.png)

### Using the client

The Centreon MAP Web interface is now available in `Monitoring > MAP`.

![image](../assets/graph-views/install-web-step-4.png)

>If the content doesn't display, you may empty your browser cache

You can see to which IP the client is connected.

![image](../assets/graph-views/ng/connected-server-container.png)

### Centreon MAP Widget

By installing the Web interface, you automatically add the Centreon MAP
Widget, but you need to perform one last task. Go to
`Administration > Extensions` and click on the "Install" button on the
widget. The result after installed:

![image](../assets/graph-views/install-web-step-widget.png)

## Desktop Client

### Executables

The desktop client is currently available only for **64-bit** Windows,
Mac and Linux platforms (Debian and Ubuntu).

You can find the installers in `Monitoring > Map > Desktop Client` or
[here](https://download.centreon.com/?action=product&product=centreon-map&version=21.04&secKey=9ae03a4457fa0ce578379a4e0c8b51f2).

> For performance considerations, we highly recommand to have less than 5, 10
> users maximum connected at the same time manipulating views.

### Installation

#### On user's computer

The desktop client requires **Java 8**. You can download and install the latest
version of Java from [here](https://java.com/fr/download/manual.jsp).

> Be sure to download the 64-bit version. Browsers are usually 32-bit
> and the Oracle website generally proposes 32-bit Java instead of the
> 64-bit version. If you already have Java installed, use the java
> -version command to check the architecture. If 64-bit does not appear,
> the version is 32-bit.

> On a Mac platform, note that you must install Oracle JDK instead of
> the usually-required JRE.

To check the Java version run the command:

```shell
java -version
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Windows-->

Execute centreon-map4-desktop-client-xxxx.exe:

> You do not need to be the administrator of your computer to perform the
> installation. All the files are will be installed in your personnal folders.

The default installation folder is `C:\Users\$user$\AppData\LocalCentreon-Map4`.

You can install the software at this location without administrator rights but
can change the destination to Program files if you have the sufficient rights.

Use the installer to install the software properly and integrate it into the
Windows environment. The installer can also be used to uninstall it from the
Windows dedicated configuration page.

![image](../assets/graph-views/windows_start_menu.png)

<!--Debian-->

Download the provided DEB file and run the command from the root directory:

```shell
sudo dpkg -i centreon-map4-desktop-client*.deb
```

Alternatively, you can open the DEB file using the Ubuntu software Center.

You should now be able to run Centreon-Map4.

```shell
centreon-map4
```

You will also find it in the list of installed applications.

![image](../assets/graph-views/ubuntu_launch_menu.png)

<!--END_DOCUSAURUS_CODE_TABS-->

### Updates

Once installed, the Desktop Client is automatically kept up to date
through an online update system. When it connects to a Centreon MAP
server it automatically downloads and installs the latest version
compatible with the server. Auto-update requires your computer to have
internet access.

## Centreon MAP NG

The server is in **experimental phase** and is subject to evolution.

It is currently only used for visualizing maps. Maps creation and edition
still use the server as we know it.

### Server

The Centreon MAP NG Server is available on the same repository as
the usual server.

To begin, install the server using the following command:

<!--DOCUSAURUS_CODE_TABS-->

<!--RHEL / CentOS / Oracle Linux 8-->

```shell
dnf install centreon-map-server-ng
```
<!--CentOS 7-->

```shell
yum install centreon-map-server-ng
```
<!--END_DOCUSAURUS_CODE_TABS-->

And proceed to the configuration with the following command:

```shell
/etc/centreon-map/configure.sh
```

The configuration is exactly the same as the usual server, but is stored
in the **/etc/centreon-map/** folder.

> The default listening port is **8081**.

If the configuration is correct, the server can be started:

```shell
systemctl restart centreon-map-ng
```

Enable the service to be started automatically at server startup:

```shell
systemctl enable centreon-map-ng
```

### Client

The client does not require any other installation than the actual
Centreon MAP Web Client.

However, new options are available in the
`Administration > Extensions > Options` page:

- An input field for the IP address and port of the NG server,
- A "yes/no" toggle to choose whether the new server should be
  used to display maps.

![image](../assets/graph-views/ng/configuration-ng-server-map.png)

In the `Monitoring > Map` page, new actions allow to launch
synchronizations: - Resources from the production server to the NG
server - Standard maps - Geoviews - ACLs - Images

Synchronization progression can then be followed from this same page.

![image](../assets/graph-views/ng/sync-ng-steps-ui.png)

> At each synchronizations, all resources are deleted and imported
> again.

## Secure your platform

Don't forget to secure your Centreon platform following our
[recommendations](secure-your-map-platform.html)
