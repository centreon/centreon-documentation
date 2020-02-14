---
id: troubleshooter
title: Troubleshooter
---

Troubleshooting
===============

This chapter describes common errors you might encounter while using
Centreon MAP. Please read the questions and answers below before
contacting our support team.

We will continue to update this section based on your feedback.

::: {.contents local=""}
:::

General
-------

### How can I check if my Centreon MAP server is running correctly?

Their are two main ways to check if your Centreon MAP server is up and
running.

First of all, check that Tomcat is running. To do so, connect through
SSH to the server hosting Centreon MAP and run the following command:

    systemctl status tomcat

You should receive the following output:

    tomcat.service - Apache Tomcat Web Application Container
    Loaded: loaded (/usr/lib/systemd/system/tomcat.service; disabled; vendor preset: disabled)
    Active: active (running) since ven. 2018-09-07 13:46:53 CEST; 4s ago

If your Tomcat is stopped the message will be:

    tomcat.service - Apache Tomcat Web Application Container
    Loaded: loaded (/usr/lib/systemd/system/tomcat.service; disabled; vendor preset: disabled)
    Active: inactive (dead)

In this case, start the Tomcat service:

    sudo systemctl start tomcat

Once you are sure your server is running, try to access its API through
your web browser. Check the REST API used by the web interface as
follows:

If your server is running in http mode enter
*http://\<IP\_SERVER\_MAP\>:8080/centreon-studio/docs*

If your server is running in HTTPS mode enter
*https://\<IP\_SERVER\_MAP\>:8443/centreon-studio/docs*

You should see the following page:

![image](../assets/data-presentation/screenshots/server-api-rest.png)

You can also check the SOAP API used by the desktop client:

If your server is running in http mode enter
*http://\<IP\_SERVER\_MAP\>:8080/centreon-studio/services*

If your server is running in HTTPS mode enter
*https://\<IP\_SERVER\_MAP\>:8443/centreon-studio/services*

![image](../assets/data-presentation/screenshots/server-api-soap.png)

### My Centreon MAP server (Tomcat) is running but I cannot access Centreon MAP API (/docs) pages. {#ts_api_pages}

You might want to check if the server containing Centreon MAP has a
firewall preventing it from running correctly. Run the following
command:

    # systemctl status iptables

If you see this output\...

    iptables: Firewall is not running.

then the problem is elsewhere.

If you have this output\...

    Table: filter
    Chain INPUT (policy ACCEPT)
    num  target     prot opt source               destination         
    1    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           state RELATED,ESTABLISHED 
    2    ACCEPT     icmp --  0.0.0.0/0            0.0.0.0/0           
    3    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           
    4    ACCEPT     tcp  --  0.0.0.0/0            0.0.0.0/0           state NEW tcp dpt:22 
    5    REJECT     all  --  0.0.0.0/0            0.0.0.0/0           reject-with icmp-host-prohibited 

    Chain FORWARD (policy ACCEPT)
    num  target     prot opt source               destination         
    1    REJECT     all  --  0.0.0.0/0            0.0.0.0/0           reject-with icmp-host-prohibited 

    Chain OUTPUT (policy ACCEPT)
    num  target     prot opt source               destination         

then your firewall is running, preventing any connection from and to
your Centreon MAP server. You must either add input and output rules for
Centreon MAP or disable your firewall.

To open the appropriate ports:

    # /sbin/iptables -A OUTPUT -p tcp --dport <PORT> -j ACCEPT
    # /sbin/iptables -A INPUT -p tcp --dport <PORT> -j ACCEPT

::: {.note}
::: {.title}
Note
:::

Replace \<PORT\> by the port your Centreon MAP server is using (mostly
8080 or 8443 if you have configured it in SSL).
:::

To simply disable your firewall, execute:

    # systemctl stop iptables

### My images from Centreon Web are not displayed in Centreon MAP.

Centreon MAP automatically imports all images from Centreon Web into its
own database. On your desktop client, you should see all your files from
Centreon Web under the Media tab panel in the \"Centreon\" folder. If
not, you may want to verify the following:

Check your MySQL configuration:

-   On your Centreon MAP server, open the file my.cnf and check if the
    line \'max\_allowed\_packet=20M\' is present.

```{=html}
<!-- -->
```
    # vi /etc/my.cnf

    max_allowed_packet=20M

Then reload your MySQL database:

    sudo systemctl reload mysqld

Wait a few minutes for the Centreon MAP server to synchronize Centreon
Web resources. The images from Centreon Web should then appear on your
desktop client under the Media tab panel in the Centreon folder.

![image](../assets/data-presentation/centreon_media_part.png)

If you still cannot see the list of images check your Centreon MAP
configuration file.

Connect through SSH to your Centreon MAP server. Open the
studio-config.properties file:

    # vim /etc/centreon-studio/studio-config.properties

For the \'centreon.url\' variable, check that there is a full path to
your Centreon Web interface:

    centreon.url=http://<IP_SERVER_MAP>

::: {.note}
::: {.title}
Note
:::

Don\'t forget to replace \"http\" with \"https\" if your Centreon Web
interface is using HTTPS.
:::

Wait a few minutes for the Centreon MAP server to synchronize the
Centreon Web resources. The images on Centreon Web should then appear on
your desktop client in the Centreon folder.

Centreon MAP desktop client
---------------------------

### The desktop can\'t start: \"Java was started but returned exit code = 13\".

The desktop client does not start and an error message \"error code =
13\" is displayed.

Install a 64-bit JVM.

### Impossible to create a new view.

On the desktop client, if you want to create a new view but the button
is disabled, you do not have the access rights.

![image](../assets/data-presentation/view_menu.png)

A Centreon MAP administrator must authorize you to create, update or
delete views. When you first install your Centreon MAP server, only
Centreon administrators are MAP administrators. It is their job to grant
administration privileges to other \"normal\" Centreon users.

### Impossible to import media.

When you right click on the Media panel, the Import button is disabled.

There are two facts you should know about media:

-   

    The Centreon folder, which is created automatically, contains all the images from Centreon Web.

    :   -   You cannot add or remove any image from this folder.
        -   All images are at the same level (no subfolders).

-   You cannot import images at the root of the media panel.

The solution is to create a new folder (e.g., *Icons*).

Then right click on this folder and select *Import*.

### I cannot see the \"MAP 3 Import menu.\" {#ts_import_map3}

You want to import views from MAP 3 to Centreon MAP \>= 4.x but the
corresponding menu is missing (see
`this page <map3_migration>`{.interpreted-text role="ref"}).

Please check the following prerequisites:

-   Your MAP 3 license is still valid.
-   Your Centreon Desktop Client version is at least v4.0.8 (you can
    check it directly from your desktop client interface, in the Help \>
    About menu).
-   If there is a proxy between your computer and your Centreon Web
    interface, you must define it in the Configure menu.

::: {.warning}
::: {.title}
Warning
:::

The proxy must be configured with the checkbox *use for internet*.
:::

-   On the Centreon MAP server configuration file
    (/etc/centreon-studio/studio-config.properties) you entered the IP
    of your central server.

This IP is also used by your desktop client to the access MAP 3 API. If
this IP is not reachable by your desktop client (because both your
Centreon MAP server and Centreon central server are on a DMZ) you must
specify a new one to your desktop client. To do so, edit the file:

    On Windows:
    \C:\Users\<YOUR_USERNAME>\AppData\Local\Centreon-Map4\Centreon-Map4.ini

    On Linux
    /opt/centreon-map4-desktop-client/Centreon-Map4.ini

Add the following line at the end of the file on a new line:

    -Dcentreon.url=<CENTREON_URL>

where \<CENTREON\_URL\> is the URL with which you access the web
interface of Centreon Web from your computer.

### An error occured when I open a geographic view.

If you open a geographic view or container and your background is
composed of gray with Xs and the following pop-up message\...

\"Error while retreiving Mapbox tiles. Please check your Mapbox
configuration.\"

![image](../assets/data-presentation/mapbox-configuration-error.png)

then you should check the following:

-   Ensure that your Mapbox credentials are valid. To configure your
    Mapbox credentials, see `this page <mapbox>`{.interpreted-text
    role="ref"}. Your Mapbox secret key may have changed. Since you
    cannot see the previously created keys, you might want to create a
    new one and add it in your Centreon MAP server configuration file.
-   If your computer is behind a proxy to gain internet access, please
    configure this proxy in the Centreon MAP Desktop Client.
-   The Mapbox style you used on your view might have been deleted.

Try to edit your view / container and change the Mapbox style:

![image](../assets/data-presentation/mapbox-change-style.png)

If you cannot select any style the issue is probably caused by one of
the above (i.e., credentials, proxy or deleted style).

### Error with special characters.

If you try to use characters in labels that are not using latin1
encoding and get a pop-up error displaying \"Could not execute
statement\" on your desktop client, your database is probably in latin1.
To change the database to UTF-8 encoding, you need to access your
Centreon MAP server in SSH and execute the following commands:

-   systemctl stop tomcat
-   mysqldump -uusername -p -h \<HOST\> centreon\_studio \> dump.sql
-   cp dump.sql dump-fixed.sql
-   vim dump-fixed.sql
-   :%s/DEFAULT CHARACTER SET latin1/DEFAULT CHARACTER SET utf8 COLLATE
    utf8\_general\_ci/
-   :%s/DEFAULT CHARSET=latin1/DEFAULT CHARSET=utf8/
-   :wq
-   mysql -uusername -ppassword -h \<HOST\> \< dump-fixed.sql
-   systemctl start tomcat

### My Desktop client is slow and I often get disconnected.

Depending on your Centreon server\'s monitoring perimeter (the number of
services running) and the computer hardware configuration, your desktop
client might need more RAM than it uses by default. It may start to
freeze and try to free up more memory. You can check this behavior by
opening your task manager (Ctrl + Maj + Esc) and checking the memory
consumption. If it increases and seems to reach a limit while your CPU
is working hard, your desktop client requires more memory.

To increase memory, edit the .ini file:

    On Windows:
    \C:\Users\<YOUR_USERNAME>\AppData\Local\Centreon-Map4\Centreon-Map4.ini

    On Linux
    /opt/centreon-map4-desktop-client/Centreon-Map4.ini

and add the following line at the end of the file, on a new line:

    -Xmx4g

The \"4g\" means 4 GB (by default it can only use 2 GB). You can change
this number depending on your hardware (e.g., by setting \"3g\").

Then restart your desktop client.

### I get the error \"Cannot authenticate user\" on the login page.

For Centreon Web \>= 2.8.6, verify that your user has checked the option
\"Reach Real Time API.\"

![image](../assets/data-presentation/reach-api.png)

### I\'m using Windows Remote Desktop (RDP) and I have many errors.

If you are using Centreon MAP Desktop Client through a Remote Session
(with RDP, for instance), you might encounter an error displaying a
number of pop-ups like \"128\" or \"512,\" rendering your desktop client
unusable.

To prevent this from happening, you need to change a parameter in your
RDP application:

Go to *Advance -\> Display* and select \"Highest quality (32bit)\". You
can then access your remote computer and this error will no longer
occur.

![image](../assets/data-presentation/rdp-config.png)

::: {.tip}
::: {.title}
Tip
:::

For Linux or Mac users of the application **rdesktop**, add this
argument to your command line: [-a 32]{.title-ref}
:::

::: {.note}
::: {.title}
Note
:::

This error may occur if you use the skin \"Windows server\" on your
computer. Go to your windows parameter and change the color settings to
use 32bit colors.
:::

Centreon MAP web interface
--------------------------

### Graphs are all shifted to the right after upgrading from Centreon MAP 4.4 to Centreon MAP 18.10. {#shift_graphs}

A bug affecting the web interface was shifting all the graphs to the
left compared to their position in the desktop client. This has been
fixed in Centreon MAP 18.10. If you have manually shifted the graphs to
the right to compensate in the web interface, all your graphs will be
over-shifted to the right after the upgrade.

We have provided a script that automatically unshifts all the graphs to
the left. Do not use this script if you know most of your graphs were
correctly positioned after the upgrade: you would have to manually
unshift the others.

Here is the SQL script that fixes the offset manually created by a user
for correct alignment in the web interface.

To execute it:

-   Make a backup of your centreon\_studio database.

-   Go to /etc/centreon-studio/utils/

-   Run the script: :

        mysql centreon_studio < update-position-graph.sql

-   Restart Tomcat: :

        services tomcat restart

### My web interface is displaying \"Authentication error.\"

The following error might appear on your web interface.

![image](../assets/data-presentation/web_client_authentication_error.png)

First, check if you have access to the Centreon MAP server APIs (see
`this entry <ts_api_pages>`{.interpreted-text role="ref"}).

On your Centreon Web interface, check your Centreon MAP web interface
configuration: Administration -\> Extensions -\> MAP -\> Options

The URL set in \'MAP server address\' must include the protocol (HTTP or
HTTPS) and the port used by your Centreon MAP server (usually 8080 for a
normal connexion or 8443 for a secure connexion).

![image](../assets/data-presentation/web_client_configuration.png)

### My web interface displays an empty page.

Your web interface is configured but it displays an empty page:

![image](../assets/data-presentation/web_empty_list.png)

Either no views are created on the server or you do not have access to
them.

If you are a Centreon MAP administrator, you can see all views. In this
case, no views have been created. Here are quick start instructions to
create one: `qs_create_view`{.interpreted-text role="ref"}

Otherwise, contact the Centreon MAP administrator or create your own
views if you have sufficient privileges.
