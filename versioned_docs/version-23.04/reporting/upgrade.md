---
id: upgrade
title: Upgrade the extension
---

> When updating from version < 18.10 to a version >= 18.10, you need to
>
> - Retrieve a new license from Centreon support
> - Make sure your Centreon MBI server is based on CentOS/RH 7. You may use the
>   following procedure to migrate your server: [Migrate your
>   reporting server](migrate.md)

The upgrade of Centreon MBI consists of 4 steps :

- Updating the repository
- Updating the extension interface
- Updating the reporting server
- Updating the MariaDB database

## Prerequisites

### Update the RPM signing key

For security reasons, the keys used to sign Centreon RPMs are rotated regularly. The last change occurred on October 14, 2021. When upgrading from an older version, you need to go through the [key rotation procedure](../security/key-rotation.md#existing-installation), to remove the old key and install the new one.

## Step 1: Update the repository

When you upgrade from a previous major version to 22.10.x, you first need to update the repository on your Central & Reporting servers.

You will find the new "Business" repository on the "Repositories" page in your [Centreon Support account](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories).

## Step 2: Upgrade the extension interface

1. Update the package, run the following commands:

    ```shell
    yum update centreon-bi-server
    ```

2. Update through the interface:  Log on to the Centreon web interface and go to 
the *Administration > Extension > Manager* page and click on the 
AirUpdate button to update the extension and the widgets

## Step 3: Upgrade the reporting server 

#### Java version requirement
  
  > Ensure a version of Java 17 or later is installed before you start the procedure.
  
  - If you need to check the Java version, enter the following command:
  
  ```shell
  java -version
  ```
  
  - If you need to upgrade the Java installation to Java 17 (or later), go to the [Oracle official download](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) page.

  - If several Java versions are installed, you need to activate the right version. Display the installed versions using the following command and select the Java 17 (or later) version:
  ```shell
  sudo update-alternatives --config java
  ```
  
  Then restart the service:
  
  ```shell
  systemctl restart cbis
  ```

Now you can start the update process: 

1. Connect to your reporting server and stop the scheduler service (CBIS):

    ```shell
    systemctl stop cbis
    ```

2. Then run the following commands: 

    ```shell
    yum clean all
    yum update centreon-bi\*
    ```

3. Start the scheduler service: 

    ```shell
    systemctl start cbis
    ```

## Step 4: Upgrade the MariaDB database

1. Stop the **cbis** service:
    ```shell
    systemctl stop cbis
    ```

2. See [Upgrading MariaDB](../upgrade/upgrade-mariadb.md).

3. Start the **cbis** service:
    ```shell
    systemctl start cbis
    ```
