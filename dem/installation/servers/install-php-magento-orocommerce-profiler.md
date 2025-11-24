---
id: install-php-magento-orocommerce-profiler
title: Install the PHP / Magento / OroCommerce Profiler
---

# Install the PHP / Magento / OroCommerce Profiler

The DEM PHP module comes as a PHP extension that allows you to collect detailed information about the execution time of each part of your CMS.

# Prerequisites

<aside>
⚠️ The profiler requires the installation of the system agent. Refer to the dedicated page to install the agent.

[Install System Agents](./install-system-agents.md)
</aside>

# Compatibility

| Distribution | OS Version | PHP Version | DEM PHP Module |
|--------------|------------|-------------|-------------------|
| Debian | Buster (10) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Debian | Bullseye (11) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Debian | Bookworm (12) | 7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Ubuntu | Jammy (22.04) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Ubuntu | Kinetic (22.10) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| Ubuntu | Lunar (23.04) | 7.3/7.4/8.0/8.1/8.2/8.3 | 1.3.4 |
| CentOS | 7 | 7.3/7.4 | 1.3.3 (beta repo) |

# Installation

<aside>
💡 The PHP module must be installed on every server running your PHP application.
</aside>

### Install the DEM PHP Module for Debian / Ubuntu

You must have added the DEM repositories, which you should already have done during the system agent installation.

Depending on your PHP version, install the corresponding package. Here are a few examples:

- For PHP 7.3:

    ```bash
    apt install php73-quanta-mon
    ```

- For PHP 7.4:

    ```bash
    apt install php74-quanta-mon
    ```

- For PHP 8.0:

    ```bash
    apt install php80-quanta-mon
    ```

- For PHP 8.1:

    ```bash
    apt install php81-quanta-mon
    ```

- For PHP 8.2:

    ```bash
    apt install php82-quanta-mon
    ```

Then, enable the extension with the command:

```bash
phpenmod quanta_mon
```

### Install the DEM PHP Module for CentOS / RedHat

You must have added the DEM repositories, which you should already have done during the system agent installation.

Depending on your PHP version, install the corresponding package, for example:

- For PHP 7.2:

    ```bash
    yum install php72-quanta-mon
    ```

- For PHP 7.3:

    ```bash
    yum install php73-quanta-mon
    ```

- For PHP 7.4:

    ```bash
    yum install php74-quanta-mon
    ```

Then, enable the extension with the command:

```bash
phpenmod quanta_mon
```

### Install the PHP Module for Other OS

We do not officially support packages for other operating systems. However, you can compile the module yourself — the source code is available on GitHub:  
[https://github.com/quanta-computing/quanta-php-module](https://github.com/quanta-computing/quanta-php-module)

# Configure Your Backoffice URL if You Use Magento

If you use Magento and a custom URL is used to access the Magento backoffice (i.e., an URL that does **not** start with **"/admin/"**), you must modify the module configuration so that “Magento” type events are correctly reported in DEM.

This file is usually located here for Debian/Ubuntu:

```bash
/etc/php<VERSION>/mods-available/quanta_mon.ini
```

and here for CentOS:

```bash
/etc/php.d/quanta_mon.ini
```

However, this may vary depending on your PHP installation.

For example, if your backoffice URL is "http://admin.mysite.com/admin_123456/", you must enter the following parameter:

```
quanta_mon.admin_url="/admin_123456/"
```

# Restarting the Web Server

After installing the module, you must restart your web service so that the PHP extension is loaded and activated.

- For example, if you use Apache on Debian:

    ```bash
    systemctl restart apache2
    ```

- If you use PHP-FPM, the command would be for example:

    ```bash
    systemctl restart php8.2-fpm
    ```

# Verifying Proper Operation

Once everything is installed **and the web scenario has been created in DEM**, go to the Web Scenario menu, then click “+ details” in the legend of one of the pages requiring PHP execution (for example: a Cart page, which is usually never cached).

You should then see an “Application” tab (otherwise this tab is grayed out) with information about the time spent in PHP.

In the case of a Magento (v1 or 2) CMS or the OroCommerce platform, the color coding differs — it is orange for Magento and yellow for OroCommerce.

<aside>
💡 Advanced metrics (Apache, MySQL, Redis, etc.) must be installed separately. Refer to the dedicated page:

[Add Advanced Metrics](./add-advanced-metrics.md)
</aside>
