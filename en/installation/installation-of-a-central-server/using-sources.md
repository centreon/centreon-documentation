---
id: using-sources
title: Using sources
---

## Prerequisites

> Most CentOS users will find easier to install Centreon Web by [using packages](using-packages.html).

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS 8-->
To install Centreon you will need to enable the official PowerTools repository.

Enable the PowerTools repository using these commands:

- For Centos 8.2:

    ```shell
    dnf -y install dnf-plugins-core epel-release
    dnf config-manager --set-enabled PowerTools
    ```

- For CentOS 8.3 and CentOS Stream:
    ```shell
    dnf -y install dnf-plugins-core epel-release
    dnf config-manager --set-enabled powertools
    ```

Install the Centreon repository for additional perl dependencies:
```shell
dnf install -y https://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-4.el8.noarch.rpm
```

Enable PHP 7.3 using the following command:
```shell
dnf module enable php:7.3 -y
```

Check that PHP 7.3 is activated:
```shell
dnf module list php
```

You should have this result:
```shell
CentOS Linux 8 - AppStream
Name                                Stream                                 Profiles                                                 Summary
php                                 7.2 [d]                                common [d], devel, minimal                               PHP scripting language
php                                 7.3 [e]                                common [d], devel, minimal                               PHP scripting language
php                                 7.4                                    common [d], devel, minimal                               PHP scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

The repository are now installed.

You can now install the necessary prerequisites:
```shell
dnf update
dnf install -y \
    cpp \
    dmidecode \
    fping \
    freetds \
    gcc \
    gcc-c++ \
    glib2-devel \
    gnutls \
    gnutls-devel \
    httpd \
    libstdc++ \
    lm_sensors \
    lua \
    lua-devel \
    mailx \
    make \
    net-snmp \
    net-snmp-libs \
    net-snmp-perl \
    net-snmp-utils \
    net-tools \
    npm \
    openssl \
    openwsman-perl \
    perl \
    perl-Crypt-DES \
    perl-DBD-MySQL \
    perl-DBI \
    perl-DateTime \
    perl-DateTime-Format-Duration-ISO8601 \
    perl-Digest-HMAC \
    perl-Digest-SHA1 \
    perl-Encode \
    perl-interpreter \
    perl-IO-Socket-INET6 \
    perl-JSON \
    perl-MQSeries \
    perl-MongoDB \
    perl-Net-Curl \
    perl-Redis \
    perl-Socket \
    perl-Socket6 \
    perl-Sys-Syslog \
    perl-URI \
    perl-UUID \
    perl-rrdtool \
    php \
    php-cli \
    php-common \
    php-devel \
    php-fpm \
    php-gd \
    php-intl \
    php-json \
    php-ldap \
    php-mbstring \
    php-mysqlnd \
    php-pdo \
    php-pear \
    php-process \
    php-snmp \
    php-xml \
    php-zip \
    plink \
    quota \
    rrdtool \
    rrdtool-devel \
    unixODBC
```

Additional commands are necessary to configure the environment correctly:
```shell
/bin/pear channel-update pear.php.net
```

If you can’t access the Internet directly but have to pass via a proxy,
perform the following command:
```shell
/bin/pear config-set http_proxy http://my_proxy.com:port
```

Then execute:
```shell
/bin/pear upgrade-all
```
<!--Oracle Linux 8-->
To install Centreon you will need to enable the official Oracle CodeReady Builder repository supported by Oracle.

Enable the CodeReady Builder repository using these commands:

```shell
dnf -y install dnf-plugins-core oracle-epel-release-el8
dnf config-manager --set-enabled ol8_codeready_builder
```

Install the Centreon repository for additional perl dependencies:
```shell
dnf install -y https://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-4.el8.noarch.rpm
```

Enable PHP 7.3 using the following command:
```shell
dnf module enable php:7.3 -y
```

Check that PHP 7.3 is activated:
```shell
dnf module list php
```

You should have this result:
```shell
Oracle Linux 8 Application Stream (x86_64)
Name                                Stream                                 Profiles                                                 Summary
php                                 7.2 [d]                                common [d], devel, minimal                               PHP scripting language
php                                 7.3 [e]                                common [d], devel, minimal                               PHP scripting language
php                                 7.4                                    common [d], devel, minimal                               PHP scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

The repository are now installed.

You can now install the necessary prerequisites:
```shell
dnf update
dnf install -y \
    cpp \
    dmidecode \
    fping \
    freetds \
    gcc \
    gcc-c++ \
    glib2-devel \
    gnutls \
    gnutls-devel \
    httpd \
    libstdc++ \
    lm_sensors \
    lua \
    lua-devel \
    mailx \
    make \
    net-snmp \
    net-snmp-libs \
    net-snmp-perl \
    net-snmp-utils \
    net-tools \
    npm \
    openssl \
    openwsman-perl \
    perl \
    perl-Crypt-DES \
    perl-DBD-MySQL \
    perl-DBI \
    perl-DateTime \
    perl-DateTime-Format-Duration-ISO8601 \
    perl-Digest-HMAC \
    perl-Digest-SHA1 \
    perl-Encode \
    perl-interpreter \
    perl-IO-Socket-INET6 \
    perl-JSON \
    perl-MQSeries \
    perl-MongoDB \
    perl-Net-Curl \
    perl-Redis \
    perl-Socket \
    perl-Socket6 \
    perl-Sys-Syslog \
    perl-URI \
    perl-UUID \
    perl-rrdtool \
    php \
    php-cli \
    php-common \
    php-devel \
    php-fpm \
    php-gd \
    php-intl \
    php-json \
    php-ldap \
    php-mbstring \
    php-mysqlnd \
    php-pdo \
    php-pear \
    php-process \
    php-snmp \
    php-xml \
    php-zip \
    plink \
    quota \
    rrdtool \
    rrdtool-devel \
    unixODBC
```

Additional commands are necessary to configure the environment correctly:
```shell
/bin/pear channel-update pear.php.net
```

If you can’t access the Internet directly but have to pass via a proxy,
perform the following command:
```shell
/bin/pear config-set http_proxy http://my_proxy.com:port
```

Then execute:
```shell
/bin/pear upgrade-all
```
<!--RHEL 8-->
To install Centreon you will need to enable the official CodeReady Builder repository supported by Redhat.

Enable the CodeReady Builder repository using these commands:

```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Install the Centreon repository for additional perl dependencies:
```shell
dnf install -y https://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-4.el8.noarch.rpm
```

Enable PHP 7.3 using the following command:
```shell
dnf module enable php:7.3 -y
```

Check that PHP 7.3 is activated:
```shell
dnf module list php
```

You should have this result:
```shell
Red Hat Enterprise Linux 8 for x86_64 - AppStream (RPMs)
Name                                Stream                                 Profiles                                                 Summary
php                                 7.2 [d]                                common [d], devel, minimal                               PHP scripting language
php                                 7.3 [e]                                common [d], devel, minimal                               PHP scripting language
php                                 7.4                                    common [d], devel, minimal                               PHP scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

The repository are now installed.

You can now install the necessary prerequisites:
```shell
dnf update
dnf install -y \
    cpp \
    dmidecode \
    fping \
    freetds \
    gcc \
    gcc-c++ \
    glib2-devel \
    gnutls \
    gnutls-devel \
    httpd \
    libstdc++ \
    lm_sensors \
    lua \
    lua-devel \
    mailx \
    make \
    net-snmp \
    net-snmp-libs \
    net-snmp-perl \
    net-snmp-utils \
    net-tools \
    npm \
    openssl \
    openwsman-perl \
    perl \
    perl-Crypt-DES \
    perl-DBD-MySQL \
    perl-DBI \
    perl-DateTime \
    perl-DateTime-Format-Duration-ISO8601 \
    perl-Digest-HMAC \
    perl-Digest-SHA1 \
    perl-Encode \
    perl-interpreter \
    perl-IO-Socket-INET6 \
    perl-JSON \
    perl-MQSeries \
    perl-MongoDB \
    perl-Net-Curl \
    perl-Redis \
    perl-Socket \
    perl-Socket6 \
    perl-Sys-Syslog \
    perl-URI \
    perl-UUID \
    perl-rrdtool \
    php \
    php-cli \
    php-common \
    php-devel \
    php-fpm \
    php-gd \
    php-intl \
    php-json \
    php-ldap \
    php-mbstring \
    php-mysqlnd \
    php-pdo \
    php-pear \
    php-process \
    php-snmp \
    php-xml \
    php-zip \
    plink \
    quota \
    rrdtool \
    rrdtool-devel \
    unixODBC
```

Additional commands are necessary to configure the environment correctly:
```shell
/bin/pear channel-update pear.php.net
```

If you can’t access the Internet directly but have to pass via a proxy,
perform the following command:
```shell
/bin/pear config-set http_proxy http://my_proxy.com:port
```

Then execute:
```shell
/bin/pear upgrade-all
```
<!--Redhat/CentOS 7-->
To install Centreon you will need to set up the official software collections repository supported by Redhat.

> Software collections are required for installing PHP 7 and associated libraries (Centreon requirement).

Install the software collections repository using this command:

``` shell
yum install -y centos-release-scl
```

Add nodesource repository:
```shell
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
```

The repository are now installed.

You can now install the necessary prerequisites:
```shell
yum update
yum install -y \
    cpp \
    dmidecode \
    fping \
    freetds \
    gcc \
    gcc-c++ \
    glib2-devel \
    gnutls \
    gnutls-devel \
    httpd \
    libstdc++ \
    lm_sensors \
    lua \
    lua-devel \
    mailx \
    make \
    net-snmp \
    net-snmp-libs \
    net-snmp-perl \
    net-snmp-utils \
    net-tools \
    npm \
    openssl \
    openwsman-perl \
    perl \
    perl-Crypt-DES \
    perl-DBD-MySQL \
    perl-DBI \
    perl-DateTime \
    perl-DateTime-Format-Duration-ISO8601 \
    perl-Digest-HMAC \
    perl-Digest-SHA1 \
    perl-Encode \
    perl-interpreter \
    perl-IO-Socket-INET6 \
    perl-JSON \
    perl-MQSeries \
    perl-MongoDB \
    perl-Net-Curl \
    perl-Redis \
    perl-Socket \
    perl-Socket6 \
    perl-Sys-Syslog \
    perl-URI \
    perl-UUID \
    perl-rrdtool \
    rh-php73 \
    rh-php73-php-cli \
    rh-php73-php-common \
    rh-php73-php-fpm \
    rh-php73-php-gd \
    rh-php73-php-intl \
    rh-php73-php-json \
    rh-php73-php-ldap \
    rh-php73-php-mbstring \
    rh-php73-php-mysqlnd \
    rh-php73-php-pdo \
    rh-php73-php-pear \
    rh-php73-php-process \
    rh-php73-php-snmp \
    rh-php73-php-xml \
    rh-php73-php-zip \
    plink \
    quota \
    rrdtool \
    rrdtool-devel \
    unixODBC
```

Additional commands are necessary to configure the environment correctly:

``` shell
usermod -U apache
/opt/rh/rh-php73/root/bin/pear channel-update pear.php.net
```

If you can’t access the Internet directly but have to pass via a proxy,
perform the following command:

``` shell
/opt/rh/rh-php73/root/bin/pear config-set http_proxy http://my_proxy.com:port
```

Then execute:

``` shell
/opt/rh/rh-php73/root/bin/pear upgrade-all
```
<!--Debian Buster-->
Install the following prerequisites:
```shell
apt-get install \
    bsd-mailx \
    cmake \
    dnsutils \
    fping \
    gawk \
    gettext \
    libapache2-mod-php7.3 \
    libcgsi-gsoap-dev \
    libconfig-inifiles-perl \
    libcrypt-des-perl \
    libdate-manip-perl \
    libdatetime-perl \
    libdbd-mysql-perl \
    libdbd-pg-perl \
    libdbi-perl \
    libdigest-hmac-perl \
    libdigest-sha-perl \
    libgcrypt-dev \
    libgd-perl \
    libgnutls28-dev \
    libjson-perl \
    libkrb5-dev \
    libldap2-dev \
    liblua5.2-dev \
    libmariadb-dev \
    libmcrypt-dev \
    libmodule-build-perl \
    libmodule-install-perl \
    libnet-dns-perl \
    libnet-ldap-perl \
    libnet-ntp-perl \
    libnet-snmp-perl \
    libnet-telnet-perl \
    libperl-dev \
    librrd-dev \
    librrds-perl \
    libsnmp-dev \
    libsnmp-perl \
    libssh2-1-dev \
    libssl-dev \
    liburi-encode-perl \
    libwrap0-dev \
    libwww-perl \
    libxerces-c-dev \
    libxml-libxml-perl \
    libxml-xpath-perl \
    lsb-release \
    mariadb-server \
    ntp \
    php-curl \
    php-date \
    php-fpm \
    php-gd \
    php-intl \
    php-json \
    php-ldap \
    php-mbstring \
    php-mysql \
    php-pear \
    php-readline \
    php-snmp \
    php-sqlite3 \
    php-xml \
    php-zip \
    python3-pip \
    rrdtool \
    smbclient \
    snmp \
    snmpd \
    snmptrapd \
    sudo \
    tofrodos \
    zlib1g-dev
```

Activate the modules:

``` shell
a2enmod proxy_fcgi setenvif proxy rewrite
a2enconf php7.3-fpm
a2dismod php7.3
systemctl restart apache2 php7.3-fpm
```

Additional commands are necessary to configure the environment correctly:

``` shell
groupadd -g 6000 centreon
useradd -u 6000 -g centreon -m -r -d /var/lib/centreon -c "Centreon Admin" -s /bin/sh centreon
```

To finish, you should install SNMP MIBs. Because of a license problem the MIB files are not available by default in
Debian. To add them, change the /etc/apt/sources.list file and add the *non-free* category.

Execute the following commands:

``` shell
apt-get update
apt-get install snmp-mibs-downloader
```

Then modify the SNMP configuration file */etc/default/snmpd* by adding:

``` shell
export MIBDIRS=/usr/share/snmp/mibs
export MIBS=ALL
```

And commenting:

``` shell
#mibs ALL
```

Restart SNMP service:

``` shell
service snmpd restart
service snmptrapd restart
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Centreon library (Centreon CLIB)

Please install Centreon CLIB using [this procedure](https://github.com/centreon/centreon-clib#fetching-sources).

## Monitoring engine (Centreon Engine)

### Prerequisites

Create Centreon Engine user and group:
```shell
groupadd -g 6001 centreon-engine
useradd -u 6001 -g centreon-engine -m -r -d /var/lib/centreon-engine -c "Centreon Engine" -s /bin/bash centreon-engine
```

### Installation

Please install Centreon Engine using [this procedure](https://github.com/centreon/centreon-engine/blob/master/README.md#fetching-sources).
> Don’t forget to install the [Nagios plugins](http://nagios.sourceforge.net/docs/3_0/quickstart.html) if you have not already done so.

## Stream Multiplexer (Centreon Broker)

### Prerequisites

Create Centreon Broker user and group:
```shell
groupadd -g 6002 centreon-broker
useradd -u 6002 -g centreon-broker -m -r -d /var/lib/centreon-broker -c "Centreon Broker"  -s /bin/bash centreon-broker
```

### Installation

Please install Centreon Broker using [this procedure](https://github.com/centreon/centreon-broker/blob/master/README.md#fetching-sources).

> If you want to use Stream Connector functionality, please install [lua-curl](https://luarocks.org/modules/moteus/lua-curl).


## Centreon Plugins

Download the latest version from the [Centreon download web site](https://download.centreon.com) in **Custom Platforms**
tab, then **Plugins** tab.

Then copy the tarball on your server in **/tmp** directory and execute the following commands:
```shell
tar xzf centreon-plugins-20210317.tar.gz
cd centreon-plugins-20210317
chown centreon-engine: *
chmod gu+x *
mkdir -p /usr/lib/centreon/plugins
mv * /usr/lib/centreon/plugins/
```

> Change the timestamp **20210317** date.

## Centreon Gorgone

Please install Centreon Gorgone using [this procedure](https://github.com/centreon/centreon-gorgone/blob/master/docs/getting_started.md#installation).

### Secure MySQL installation

If you have installed the Centreon server with a local database, since MariaDB 10.5 it is necessary to secure its installation
before installing Centreon.

> Answer NO to any question EXCEPT the ones listed below:

```shell
mysql_secure_installation
Enter current password for root (enter for none): 
OK, successfully used password, moving on...
[...]
Change the root password? [Y/n] y
New password: 
Re-enter new password: 
Password updated successfully!
Reloading privilege tables..
... Success!
[...]
Reload privilege tables now? [Y/n] y
... Success!
```

> For more information, please see [official documentation](https://mariadb.com/kb/en/mysql_secure_installation/).

## Server name

Define the server name using following command:
```shell
hostnamectl set-hostname new_server_name
```

## Centreon

Download the latest version from the [Centreon download web site](https://download.centreon.com)
in **Custom Platforms** tab, then **Web** tab.

Extract the Centreon archive:

```shell
tar zxf centreon-web-YY.MM.x.tar.gz
cd centreon-web-YY.MM.x
```

> The installation script allows customized configuration; this process will show you the best paths to use. Furthermore
quick yes/no questions can be replied to by [y] most of the time.
>
> If centreon sources have been downloaded from github, run those commands:
>
> ```shell
> composer install --no-dev --optimize-autoloader
> npm ci
> npm run build
> ```
>
> you can download **composer** from [official web site](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos).

Run the installation script:

```shell
./install.sh -i
```

### Prerequisites check

> If the Prerequisites installation step has been run successfully you should have
> no problem during this stage. Otherwise repeat the Prerequisites installation
> process:

```shell
###############################################################################
#                                                                             #
#                         Centreon (www.centreon.com)                         #
#                          Thanks for using Centreon                          #
#                                                                             #
#                                    vYY.MM.x                                 #
#                                                                             #
#                              infos@centreon.com                             #
#                                                                             #
#                   Make sure you have installed and configured               #
#         centreon-gorgone - sudo - sed - php - apache - rrdtool - mysql      #
#                                                                             #
###############################################################################
------------------------------------------------------------------------
        Checking all needed binaries
------------------------------------------------------------------------
rm                                                         OK
cp                                                         OK
mv                                                         OK
/bin/chmod                                                 OK
/bin/chown                                                 OK
echo                                                       OK
more                                                       OK
mkdir                                                      OK
find                                                       OK
/bin/grep                                                  OK
/bin/cat                                                   OK
/bin/sed                                                   OK

------------------------------------------------------------------------
        Check mandatory gorgone service status
------------------------------------------------------------------------

Is the Gorgone module already installed?
[y/n], default to [n]:
> y
```

### License agreement

``` shell
This General Public License does not permit incorporating your program into
proprietary programs.  If your program is a subroutine library, you may
consider it more useful to permit linking proprietary applications with the
library.  If this is what you want to do, use the GNU Library General
Public License instead of this License.

Do you accept GPLv2 license ?
[y/n], default to [n]:
> y
```

### Main components

Answer **[y]** to all the questions:

``` shell
------------------------------------------------------------------------
        Please choose what you want to install
------------------------------------------------------------------------

Do you want to install : Centreon Web Front
[y/n], default to [n]:
> y

Do you want to install : Centreon Nagios Plugins
[y/n], default to [n]:
> y

Do you want to install : CentreonTrapd process
[y/n], default to [n]:
> y
```

### Definition of installation paths

``` shell
------------------------------------------------------------------------
        Start CentWeb Installation
------------------------------------------------------------------------

Where is your Centreon directory ?
default to [/usr/local/centreon]
> /usr/share/centreon
Path /usr/share/centreon                                   OK

Where is your Centreon log directory ?
default to [/usr/local/centreon/log]
> /var/log/centreon

Do you want me to create this directory ? [/var/log/centreon]
[y/n], default to [n]:
> y
Path /var/log/centreon                                     OK

Where is your Centreon etc directory ?
default to [/etc/centreon]
>

Do you want me to create this directory ? [/etc/centreon]
[y/n], default to [n]:
> y
Path /etc/centreon                                         OK

Where is your Centreon variable state information directory ?
default to [/var/lib/centreon]
>

Do you want me to create this directory ? [/var/lib/centreon]
[y/n], default to [n]:
> y
Path /var/lib/centreon                                     OK

Where is rrdtool
default to [/usr/bin/rrdtool]
> /opt/rrdtool-broker/bin/rrdtool
/opt/rrdtool-broker/bin/rrdtool                            OK

/usr/bin/mail                                              OK

Where is your php binary ?
default to [/usr/bin/php]
>
/usr/bin/php                                               OK

Where is PEAR [PEAR.php]
default to [/usr/share/pear/PEAR.php]
> /usr/share/php/PEAR.php
Path /usr/share/php/PEAR.php                               OK
/usr/bin/perl                                              OK
Composer dependencies are installed                        OK
Frontend application is built                              OK
Enable Apache configuration                                OK
Conf centreon already enabled
Finding Apache user :                                      www-data
Finding Apache group :                                     www-data
```

### Centreon user and group

Le groupe d'applications **centreon** est utilisé pour les droits d'accès
entre les différents logiciels de la suite Centreon:

``` shell
What is the Centreon group ? [centreon]
default to [centreon]
>

What is the Centreon user ? [centreon]
default to [centreon]
>
```

### Monitoring user

This is the user used to run the monitoring engine (Centreon Engine).

``` shell
What is the Monitoring engine user ? [centreon-engine]
default to [centreon-engine]
>
```

This is the user used to run the stream broker (Centreon Broker).

``` shell
What is your Centreon Broker user ? [centreon-broker]
default to [centreon-broker]
>
```

### Monitoring logs directory

``` shell
What is the Monitoring engine log directory ?[/var/log/centreon-engine]
default to [/var/log/centreon-engine]
>
Path                                                       OK
Path                                                       OK
Add group centreon to user www-data                        OK
Add group centreon to user centreon-engine                 OK
Add group centreon-engine to user www-data                 OK
Add group centreon-engine to user centreon                 OK
Add group www-data to user centreon                        OK
```

### Sudo configuration

``` shell
------------------------------------------------------------------------
        Configure Sudo
------------------------------------------------------------------------

Where is sudo configuration file ?
default to [/etc/sudoers.d/centreon]
>

Do you want me to create this file ? [/etc/sudoers.d/centreon]
[y/n], default to [n]:
>  y
/etc/sudoers.d/centreon                                    OK

What is the Monitoring engine binary ? [/usr/sbin/centengine]
default to [/usr/sbin/centengine]
>

Where is the Monitoring engine configuration directory ? [/etc/centreon-engine]
default to [/etc/centreon-engine]
>

Where is the configuration directory for broker module ? [/etc/centreon-broker]
default to [/etc/centreon-broker]
>

Where is your service command binary ?
default to [/usr/sbin/service]
>
Your sudo is not configured

Do you want me to configure your sudo ? (WARNING)
[y/n], default to [n]:
>  y
Configuring Sudo                                           OK
```

### Apache configuration

``` shell
------------------------------------------------------------------------
        Configure Apache server
------------------------------------------------------------------------

Do you want to add Centreon Apache sub configuration file ?
[y/n], default to [n]:
> y
Create '/etc/apache2/conf-available/centreon.conf'         OK
Configuring Apache                                         OK

Do you want to reload your Apache ?
[y/n], default to [n]:
> y
Reloading Apache service                                   OK
```

### PHP FPM configuration

``` shell
------------------------------------------------------------------------
        Configure PHP FPM service
------------------------------------------------------------------------

Do you want to add Centreon PHP FPM sub configuration file ?
[y/n], default to [n]:
> y
Creating directory /var/lib/centreon/sessions              OK
Create 'etc/php/7.2/fpm/pool.d/centreon.conf'              OK
Configuring PHP FPM                                        OK

Do you want to reload PHP FPM service ?
[y/n], default to [n]:
> y
Reloading PHP FPM service                                  OK
Preparing Centreon temporary files                         OK
Change right on /var/log/centreon                          OK
Change right on /etc/centreon                              OK
Change macros for insertBaseConf.sql                       OK
Change macros for sql update files                         OK
Change macros for php files                                OK
Change macros for php config file                          OK
Change macros for perl binary                              OK
Change right on /etc/centreon-engine                       OK
Add group centreon-broker to user www-data                 OK
Add group centreon-broker to user centreon-engine          OK
Add group centreon to user centreon-broker                 OK
Change right on /etc/centreon-broker                       OK
Copy CentWeb in system directory                           OK
Install CentWeb (web front of centreon)                    OK
Change right for install directory                         OK
Install libraries                                          OK
Write right to Smarty Cache                                OK
Change macros for centreon.cron                            OK
Install Centreon cron.d file                               OK
Change macros for centAcl.php                              OK
Change macros for downtimeManager.php                      OK
Change macros for centreon-backup.pl                       OK
Install cron directory                                     OK
Change right for eventReportBuilder                        OK
Change right for dashboardBuilder                          OK
Change right for centreon-backup.pl                        OK
Change right for centreon-backup-mysql.pl                  OK
Change macros for centreon.logrotate                       OK
Install Centreon logrotate.d file                          OK
Prepare centFillTrapDB                                     OK
Install centFillTrapDB                                     OK
Prepare centreon_trap_send                                 OK
Install centreon_trap_send                                 OK
Prepare centreon_check_perfdata                            OK
Install centreon_check_perfdata                            OK
Prepare centreonSyncPlugins                                OK
Install centreonSyncPlugins                                OK
Prepare centreonSyncArchives                               OK
Install centreonSyncArchives                               OK
Prepare generateSqlLite                                    OK
Install generateSqlLite                                    OK
Install changeRrdDsName.pl                                 OK
Prepare export-mysql-indexes                               OK
Install export-mysql-indexes                               OK
Prepare import-mysql-indexes                               OK
Install import-mysql-indexes                               OK
Prepare clapi binary                                       OK
Install clapi binary                                       OK
Centreon Web Perl lib installed                            OK
```

### Pear module installation

``` shell
------------------------------------------------------------------------
Pear Modules
------------------------------------------------------------------------
Check PEAR modules
PEAR                            1.4.9       1.10.8         OK
DB                              1.7.6       1.9.2          OK
Date                            1.4.6       1.4.7          OK
All PEAR modules                                           OK
```

### Configuration file installation

``` shell
------------------------------------------------------------------------
            Centreon Post Install
------------------------------------------------------------------------
Create /usr/share/centreon/www/install/install.conf.php    OK
Create /etc/centreon/instCentWeb.conf                      OK
```

### Performance data component (Centstorage) installation

``` shell
------------------------------------------------------------------------
        Starting CentStorage Installation
------------------------------------------------------------------------

Where is your Centreon Run Dir directory?
default to [/var/run/centreon]
>

Do you want me to create this directory ? [/var/run/centreon]
[y/n], default to [n]:
> y
Path /var/run/centreon                                     OK

Where is your CentStorage binary directory ?
default to [/usr/share/centreon/bin]
>
Path /usr/share/centreon/bin                               OK

Where is your CentStorage RRD directory ?
default to [/var/lib/centreon]
>
Path /var/lib/centreon                                     OK
Preparing Centreon temporary files
/tmp/centreon-setup exists, it will be moved...
install www/install/createTablesCentstorage.sql            OK
Creating Centreon Directory '/var/lib/centreon/status'     OK
Creating Centreon Directory '/var/lib/centreon/metrics'    OK
Change right : /var/run/centreon                           OK
Install logAnalyserBroker                                  OK
Install nagiosPerfTrace                                    OK
Change macros for centstorage.cron                         OK
Install CentStorage cron                                   OK
Create /etc/centreon/instCentStorage.conf                  OK
```

### Plugin installation

``` shell
------------------------------------------------------------------------
        Starting Centreon Plugins Installation
------------------------------------------------------------------------
Path                                                       OK
Path                                                       OK

Where is your CentPlugins lib directory
default to [/var/lib/centreon/centplugins]
>

Do you want me to create this directory ? [/var/lib/centreon/centplugins]
[y/n], default to [n]:
> y
Path /var/lib/centreon/centplugins                         OK
Create /etc/centreon/instCentPlugins.conf                  OK
```

### Centreon SNMP trap management installation

``` shell
------------------------------------------------------------------------
        Starting CentreonTrapD Installation
------------------------------------------------------------------------

Path                                                       OK
Path                                                       OK

Where is your SNMP configuration directory ?
default to [/etc/snmp]
>
/etc/snmp                                                  OK

Where is your CentreonTrapd binaries directory ?
default to [/usr/local/centreon/bin]
> /usr/share/centreon/bin
/usr/share/centreon/bin                                    OK

Finding Apache user :                                      www-data
Preparing Centreon temporary files
Change macros for snmptrapd.conf                           OK
Replace CentreonTrapd init script Macro                    OK
Replace CentreonTrapd default script Macro                 OK

Do you want me to install CentreonTrapd init script ?
[y/n], default to [n]:
> y
CentreonTrapd init script installed                        OK
CentreonTrapd default script installed                     OK

Do you want me to install CentreonTrapd run level ?
[y/n], default to [n]:
> y
trapd Perl lib installed                                   OK
Install : snmptrapd.conf                                   OK
Install : centreontrapdforward                             OK
Install : centreontrapd                                    OK
Change macros for centreontrapd.logrotate                  OK
Install Centreon Trapd logrotate.d file                    OK
Create /etc/centreon/instCentPlugins.conf                  OK
```

#### End

``` shell
###############################################################################
#                                                                             #
#                         Thanks for using Centreon.                          #
#                          -----------------------                            #
#                                                                             #
#                 Go to the URL : http://localhost.localdomain/centreon/      #
#                          to finish the setup                                #
#                                                                             #
#                Please read the documentation available here :               #
#                         documentation.centreon.com                          #
#                                                                             #
#      ------------------------------------------------------------------     #
#                                                                             #
#         Report bugs at https://github.com/centreon/centreon/issues          #
#                                                                             #
#                        Contact : contact@centreon.com                       #
#                          http://www.centreon.com                            #
#                                                                             #
#                          -----------------------                            #
#              For security issues, please read our security policy           #
#              https://github.com/centreon/centreon/security/policy           #
#                                                                             #
###############################################################################
```

### PHP dependencies installation

First, you need to install PHP dependency installer **composer**. Composer can be downloaded
[here](https://getcomposer.org/download/) (it is also available in EPEL repository).

Once composer is installed, go to the centreon directory (usually **/usr/share/centreon/**) and run the following
command:

``` shell
composer install --no-dev --optimize-autoloader
```

### Javascript dependencies installation

First, you need to install javascript runtime **nodejs**. Installation instructions are available
[here](https://nodejs.org/en/download/package-manager/).

Once nodejs is installed, copy the JSON files to the installation folder:

``` shell
cp /usr/local/src/centreon-web-YY.MM.x/package* /usr/share/centreon/
```

Then go to the centreon directory (usually **/usr/share/centreon/**) and run the following commands:

``` shell
npm install
npm run build
rm -rf node_modules
```

### Any operating system

SELinux should be disabled; for this, you have to modify the file **/etc/sysconfig/selinux**
and replace **enforcing** by **disabled**:

``` shell
SELINUX=disabled
```

After saving the file, please reboot your operating system to apply the changes.

Timezone and mandatory PHP parameters have to be set: go to `/etc/php/7.2/cli/conf.d` or `/etc/php/7.2/apache2/conf.d`
directory and create a file named `centreon.ini` which contains the following lines:

``` shell
date.timezone = Europe/Paris
max_execution_time = 300
session.use_strict_mode = 1
session.gc_maxlifetime = 7200
```

After saving the file, please don't forget to restart apache server.

The Mysql database server should be available to complete installation (locally or not). MariaDB is recommended.

After this step you should connect to Centreon to finalize the installation process.

## Web installation

Conclude installation by performing
[web installation steps](../web-and-post-installation.html#web-installation).
