---
id: licenses
title: Licenses
---

## How can I obtain a license?

* You can request your token for the [free IT-100 edition](../getting-started/IT100.html) on our website.
* If you have purchased a license, request your license files from our support team.

## Types of licenses

According to your [Centreon edition](https://www.centreon.com/en/editions/), your license can be:
- offline: uses one or several license files
- online: uses a token. Your Centreon platform must be connected to the internet.

## Which modules require a license?

The following modules need to be installed separately and require a valid license.

- [Plugin Packs](https://docs.centreon.com/current/en/monitoring/pluginpacks.html#installation)
- [Auto Discovery](https://docs.centreon.com/current/en/monitoring/discovery/installation.html)
- [Anomaly Detection](https://docs.centreon.com/current/en/monitoring/anomaly-detection.html)
- [Service mapping (BAM)](https://docs.centreon.com/current/en/service-mapping/install.html)
- [Graphical views (MAP)](https://docs.centreon.com/current/en/graph-views/install.html)
- [Reporting (MBI)](https://docs.centreon.com/current/en/reporting/installation.html)

## Viewing license-based modules

Go to **Administration > Extensions > Manager**. All modules currently installed on your platform have a green border and a green tick mark in their top right corner. Modules that require a license have a colored banner at the bottom (red if you have no valid license, green if you have one).

![image](../assets/administration/licenses.png)

## Adding a license to your Centreon platform

<!--DOCUSAURUS_CODE_TABS-->
<!--Offline licenses-->

1. To request your license:

    1. Go to **Administration > Extensions > Manager**.

    2. Click on **Get fingerprint**.

    3. Paste the fingerprint in an email to our support team requesting the license.

2. Once you have received your license, in the **Administration > Extensions > Manager** page, click on **Upload license**.

5. Browse to the file and then click **OK**. The license is applied and the corresponding modules display their validity date:
    
    ![image](../assets/administration/license_valid.png)

6. If you have several licenses (e.g. for BAM, MBI...), repeat the steps above until you have uploaded all license files.

<!--Online licenses-->

To use an online license, your Centreon platform must be connected to the internet.

1. Make sure you have your license token (provided by our support team).

2. Go to **Administration > Extensions > Manager**.

3. Click on **Add Token**. A popup window appears.

4. Paste your token in the popup window, then click on **Add**.

    - If your token contains one license, a confirmation message appears.

    - If your token contains several licenses, choose the license you want and then click on **Choose**. 

    Press **Esc** to close the popup window. The license is applied and the corresponding modules display their validity date:
    
    ![image](../assets/administration/license_valid.png)

    The **Add token** button changes to become a **View license** button.

<!--END_DOCUSAURUS_CODE_TABS-->

## Free IT-100 license

See chapter [Set up your free IT-100 solution](https://docs.centreon.com/current/en/getting-started/IT100.html).

## Troubleshooting

### No valid file uploaded

![image](../assets/administration/license_not_valid.png)

Check the contents of the following directory:

```shell
ls -lah /etc/centreon/license.d/
```

If the directory already contains licences with rights that are not apache/apache, delete them or change their rights so that they can be overwritten by the new licenses:

```shell
chown apache:apache /etc/centreon/license.d/*
chmod 640 /etc/centreon/license.d/*
```

### Your EPP license is not valid

* Check that the fingerprint of the central server (on page **Administration > Extensions > Gestionnaire**) matches the fingerprint in the license.

    ```shell
    less /etc/centreon/license.d/epp.license
    ```

* Check that you do not have more hosts than your license allows. To know the total number of hosts you are supervising, go to **Configuration > Hosts > Hosts**, and then use the dropdown list to the right above the list of hosts:

    ![image](../assets/administration/number-of-hosts.png)

    You can also use the following command:

    ```sql
    SELECT COUNT(*) FROM centreon.host WHERE host_register='1';
    ```
