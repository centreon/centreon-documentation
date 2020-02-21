---
id: post-install
title: First configuration
---

## Web installation

To get the IP address of your Centreon server, uses the command:

```Bash
ip addr
```

Log in to Centreon web interface via the URL: http://[SERVER_IP]/centreon.
The Centreon setup wizard is displayed. Click on **Next**.

![image](assets/installation/acentreonwelcome.png)

The Centreon setup wizard checks the availability of the modules. Click on **Next**.

![image](assets/installation/acentreoncheckmodules.png)

Click on **Next**.

![image](assets/installation/amonitoringengine2.png)

Click on **Next**.

![image](assets/installation/abrokerinfo2.png)

Provide the information on the admin user, then click on **Next**.

![image](assets/installation/aadmininfo.png)

By default, the *localhost* server is defined, the database root user is set to *root* and the root password is empty.
If you use a remote database server, change these entries. In this case, you only need to define a password for the
user accessing the Centreon databases, i.e., *Centreon*. Click on **Next**.

![image](assets/installation/adbinfo.png)

> If the **"Add innodb_file_per_table=1 in my.cnf file under the [mysqld] section and restart MySQL Server."** error
> message appears, perform the following operations:
> 
> 1. Log in to the *root* user on your server.
> 
> 2. Modify this **/etc/my.cnf** file
> 
> 3. Add these lines to the file:
>
>```Bash
>[mysqld]
>innodb_file_per_table=1
>```
>
>4. Restart the mysql service:
>
>```Bash
>systemctl restart mysql
>```
>
>5. Click on **Refresh**.

> If you use a deported MySQL v8.x DBMS, you may have the following error message: *error*.
> Please have a look to this @TODO@(:ref:`procedure`) to solve this issue.

The Centreon setup wizard configures the databases. Click on **Next**.

![image](assets/installation/adbconf.png)

You will now be able to install the Centreon server modules.

Click on **Install**.

![image](assets/installation/module_installationa.png)

Once installation is complete, click on **Next**.

![image](assets/installation/module_installationb.png)

At this point, an advertisement informs you of the latest Centreon news and products. If your platform is connected to
the internet, the information you receive will be up to date. If you are not online, only information on the current
version will be displayed.

![image](assets/installation/aendinstall.png)

The installation is complete. Click on **Finish**.

You can now log in.

![image](assets/installation/aconnection.png)

## Initialization of the monitoring

To start the monitoring engine:

1. From your web interface, go to **Configuration \> Pollers**.
2. Keep the default options and click on **Export configuration**.
3. Select **Central** poller from the box input **Pollers**.
4. Uncheck **Generate Configuration Files** and **Run monitoring engine debug (-v)**.
5. Check **Move Export Files** and **Restart Monitoring Engine** with the **Restart** option selected.
6. Click on **Export** again.
7. Log on to the *root* user on your server.
8. Start Centreon Broker:

```Bash
systemctl start cbd
```

9. Start Centreon Engine:

```Bash
systemctl start centengine
```

10. Start centcore:

```Bash
systemctl start centcore
```

11. Start centreontrapd:

```Bash
systemctl start centreontrapd
```

Monitoring is now working. You can begin monitoring your IT system.

To automatically start services at system bootup, run these commands on the central server:

```Bash
systemctl enable centcore
systemctl enable centreontrapd
systemctl enable cbd
systemctl enable centengine
systemctl enable centreon
```

### Installation of available extensions

Go to **Administration \> Extensions \> Manager** menu and click on **Install all**:

![image](assets/installation/install_imp_2.png)

## Getting started

Go to the [Getting Started](../tutorials/tutorials) chapter to configure your first monitoring.
