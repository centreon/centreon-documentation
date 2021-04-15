---
id: using-sources
title: A partir des sources
---

## Prérequis

> La plupart des utilisateurs de CentOS préfèreront installer Centreon Web en utilisant
[les paquets fournis par Centreon](using-packages.html).

<!--DOCUSAURUS_CODE_TABS-->
<!--CentOS 8-->
Afin d'installer les logiciels Centreon, le dépôt CodeReady Builder de Red Hat doit être activé.

Exécutez les commandes suivantes :
```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Installez le dépôt Centreon pour les dépendances perl additionnelles :
```shell
dnf install -y https://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-4.el8.noarch.rpm
```

Activez PHP 7.3 avec la commande suivante :
```shell
dnf module enable php:7.3 -y
```

Contrôlez que PHP 7.3 est activé :
```shell
dnf module list php
```

Vous devriez avoir le résultat suivant :
```shell
CentOS Linux 8 - AppStream
Name                                Stream                                 Profiles                                                 Summary
php                                 7.2 [d]                                common [d], devel, minimal                               PHP scripting language
php                                 7.3 [e]                                common [d], devel, minimal                               PHP scripting language
php                                 7.4                                    common [d], devel, minimal                               PHP scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

Les dépôts sont maintenant installés.

Vous pouvez maintenant installer les prérequis :
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

Des commandes supplémentaires sont nécessaires pour configurer correctement l'environnement :
```shell
/bin/pear channel-update pear.php.net
```

Si vous ne pouvez pas accéder directement à Internet mais que vous devez passer par un proxy, exécutez la commande
suivante :
```shell
/bin/pear config-set http_proxy http://my_proxy.com:port
```

Puis exécutez :
```shell
/bin/pear upgrade-all
```
<!--Oracle Linux 8-->
Afin d'installer les logiciels Centreon, le dépôt Oracle CodeReady Builder de Oracle doit être activé.

Exécutez les commandes suivantes :
```shell
dnf -y install dnf-plugins-core oracle-epel-release-el8
dnf config-manager --set-enabled ol8_codeready_builder
```

Installez le dépôt Centreon pour les dépendances perl additionnelles :
```shell
dnf install -y https://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-4.el8.noarch.rpm
```

Activez PHP 7.3 avec la commande suivante :
```shell
dnf module enable php:7.3 -y
```

Contrôlez que PHP 7.3 est activé :
```shell
dnf module list php
```

Vous devriez avoir le résultat suivant :
```shell
Oracle Linux 8 Application Stream (x86_64)
Name                                Stream                                 Profiles                                                 Summary
php                                 7.2 [d]                                common [d], devel, minimal                               PHP scripting language
php                                 7.3 [e]                                common [d], devel, minimal                               PHP scripting language
php                                 7.4                                    common [d], devel, minimal                               PHP scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

Les dépôts sont maintenant installés.

Vous pouvez maintenant installer les prérequis :
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

Des commandes supplémentaires sont nécessaires pour configurer correctement l'environnement :
```shell
/bin/pear channel-update pear.php.net
```

Si vous ne pouvez pas accéder directement à Internet mais que vous devez passer par un proxy, exécutez la commande
suivante :
```shell
/bin/pear config-set http_proxy http://my_proxy.com:port
```

Puis exécutez :
```shell
/bin/pear upgrade-all
```
<!--RHEL 8-->
Afin d'installer les logiciels Centreon, le dépôt CodeReady Builder de Redhat doit être activé.

Exécutez les commandes suivantes :
```shell
dnf -y install dnf-plugins-core https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

Installez le dépôt Centreon pour les dépendances perl additionnelles :
```shell
dnf install -y https://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-4.el8.noarch.rpm
```

Activez PHP 7.3 avec la commande suivante :
```shell
dnf module enable php:7.3 -y
```

Contrôlez que PHP 7.3 est activé :
```shell
dnf module list php
```

Vous devriez avoir le résultat suivant :
```shell
Red Hat Enterprise Linux 8 for x86_64 - AppStream (RPMs)
Name                                Stream                                 Profiles                                                 Summary
php                                 7.2 [d]                                common [d], devel, minimal                               PHP scripting language
php                                 7.3 [e]                                common [d], devel, minimal                               PHP scripting language
php                                 7.4                                    common [d], devel, minimal                               PHP scripting language

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
```

Les dépôts sont maintenant installés.

Vous pouvez maintenant installer les prérequis :
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

Des commandes supplémentaires sont nécessaires pour configurer correctement l'environnement :
```shell
/bin/pear channel-update pear.php.net
```

Si vous ne pouvez pas accéder directement à Internet mais que vous devez passer par un proxy, exécutez la commande
suivante :
```shell
/bin/pear config-set http_proxy http://my_proxy.com:port
```

Puis exécutez :
```shell
/bin/pear upgrade-all
```
<!--Redhat/CentOS 7-->
Pour installer Centreon, vous devrez configurer le dépôt officiel des collections de logiciels pris en charge par
Redhat.

> Des collections de logiciels sont nécessaires pour l'installation de PHP 7 et des bibliothèques associées.

Installez le dépôt des collections de logiciels à l'aide de cette commande :

``` shell
yum install -y centos-release-scl
```

Ajoutez le dépôt nodesource :
```shell
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
```

Les dépôts sont maintenant installés.

Vous pouvez maintenant installer les prérequis :
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

Des commandes supplémentaires sont nécessaires pour configurer correctement l'environnement :

``` shell
usermod -U apache
/opt/rh/rh-php73/root/bin/pear channel-update pear.php.net
```

Si vous ne pouvez pas accéder directement à Internet mais que vous devez passer par un proxy, exécutez la commande
suivante :

``` shell
/opt/rh/rh-php73/root/bin/pear config-set http_proxy http://my_proxy.com:port
```

Puis exécutez :

``` shell
/opt/rh/rh-php73/root/bin/pear upgrade-all
```
<!--Debian Buster-->
Installez les prérequis suivants :
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

Activate the modules :
```shell
a2enmod proxy_fcgi setenvif proxy rewrite
a2enconf php7.3-fpm
a2dismod php7.3
systemctl restart apache2 php7.3-fpm
```

Des commandes supplémentaires sont nécessaires pour configurer correctement l'environnement :
```shell
groupadd -g 6000 centreon
useradd -u 6000 -g centreon -m -r -d /var/lib/centreon -c "Centreon Admin" -s /bin/sh centreon
```

Pour terminer, vous devez installer les MIB SNMP. En raison d'un problème de licence, les fichiers MIB ne sont pas
disponibles par défaut dans Debian. Pour les ajouter, modifiez le fichier /etc/apt/sources.list et ajoutez la catégorie
*non-free*.

Exécutez les commandes suivantes :
```shell
apt-get update
apt-get install snmp-mibs-downloader
```

Puis modifiez le fichier de configuration SNMP */etc/default/snmpd* en ajoutant :
```shell
export MIBDIRS=/usr/share/snmp/mibs
export MIBS=ALL
```

Et commentez :
```shell
#mibs ALL
```

Redémarrez le service SNMP :
```shell
service snmpd restart
service snmptrapd restart
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Centreon library (Centreon CLIB)

Installez Centreon CLIB en utilisant [cette procédure](https://github.com/centreon/centreon-clib#fetching-sources).

## Monitoring engine (Centreon Engine)

### Prérequis

Créez un utilisateur et un groupe Centreon Engine :
```shell
groupadd -g 6001 centreon-engine
useradd -u 6001 -g centreon-engine -m -r -d /var/lib/centreon-engine -c "Centreon Engine" -s /bin/bash centreon-engine
```

### Installation

Installez Centreon Engine en utilisant [cette procédure](https://github.com/centreon/centreon-engine/blob/master/README.md#fetching-sources).
> N'oubliez pas d'installer les [Nagios plugins](http://nagios.sourceforge.net/docs/3_0/quickstart.html) si vous ne l'avez pas déjà fait.

## Stream Multiplexer (Centreon Broker)

### Prérequis

Créez un utilisateur et un groupe Centreon Broker :
```shell
groupadd -g 6002 centreon-broker
useradd -u 6002 -g centreon-broker -m -r -d /var/lib/centreon-broker -c "Centreon Broker"  -s /bin/bash centreon-broker
```

### Installation

Installez Centreon Broker en utilisant [cette procédure](https://github.com/centreon/centreon-broker/blob/master/README.md#fetching-sources).

> Si vous souhaitez utiliser la fonctionnalité Stream Connector, installez
> [lua-curl](https://luarocks.org/modules/moteus/lua-curl).


## Centreon Plugins

Téléchargez la dernière version depuis le [site Web de téléchargement Centreon](https://download.centreon.com)
dans l'onglet **Custom Platforms**, puis l'onglet **Plugins**.

Copiez ensuite l'archive tar sur votre serveur dans le répertoire **/tmp** et exécutez les commandes suivantes :
```shell
tar xzf centreon-plugins-20210317.tar.gz
cd centreon-plugins-20210317
chown centreon-engine: *
chmod gu+x *
mkdir -p /usr/lib/centreon/plugins
mv * /usr/lib/centreon/plugins/
```

> Modifiez la date du paquet **20210317** par la votre.

## Centreon Gorgone

Installez Centreon Gorgone en utilisant [cette procédure](https://github.com/centreon/centreon-gorgone/blob/master/docs/getting_started.md#installation).

## Centreon

Téléchargez la dernière version depuis le [site Web de téléchargement Centreon](https://download.centreon.com)
dans l'onglet **Custom Platforms**, puis l'onglet **Web**.

Ouvrez l'archive Centreon :
```shell
tar zxf centreon-web-YY.MM.x.tar.gz
cd centreon-web-YY.MM.x
```

> Le script d'installation permet une configuration personnalisée, cette procédure vous montrera les meilleurs chemins à utiliser.
> 
> En outre, les questions rapides Yes/No peuvent être répondues par [y] la plupart du temps.
> 
> Si les sources de centreon ont été téléchargées depuis github, exécutez ces commandes :
> ```shell
> composer install --no-dev --optimize-autoloader
> npm ci
> npm run build
> ```
>
> Vous pouvez télécharger **composer** deuisp [le site officiel](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos).

Exécutez le script d'installation :
```shell
./install.sh -i
```

### Contrôle de prérequis

> Si l'étape d'installation des prérequis s'est déroulée avec succès, vous ne devriez avoir aucun problème lors de cette
> étape. Sinon, reprennez la procédure d'installation des prérequis.

``` shell
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

### Approbation de la licence

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

### Composants principaux

Répondez **[y]** à toutes les questions :

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

### Définition des chemins d'installation

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

### Utilisateur et groupe centreon

Le groupe d'applications **centreon** est utilisé pour les droits d'accès entre les différents logiciels de la suite
Centreon :

``` shell
What is the Centreon group ? [centreon]
default to [centreon]
>

What is the Centreon user ? [centreon]
default to [centreon]
>
```

### Utilisateur de la supervision

Cet utilisateur exécute le moteur de supervision Centreon Engine.

``` shell
What is the Monitoring engine user ? [centreon-engine]
default to [centreon-engine]
>
```

Cet utilisateur exécute le multiplexeur de flux Centreon Broker.

``` shell
What is your Centreon Broker user ? [centreon-broker]
default to [centreon-broker]
>
```

### Répertoire des journaux d'évènements

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

### Configuration des droits sudo

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

### Configuration du serveur Apache

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

### Configuration de PHP FPM

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

### Installation des modules pear

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

### Installation du fichier de configuration

``` shell
------------------------------------------------------------------------
            Centreon Post Install
------------------------------------------------------------------------
Create /usr/share/centreon/www/install/install.conf.php    OK
Create /etc/centreon/instCentWeb.conf                      OK
```

### Installation du composant Centstorage

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

### Installation des plugins

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

### Installation du système de gestion des traps SNMP (Centreontrapd)

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

#### Fin de l'installation

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

### Installation des dépendances PHP

Tout d'abord, vous devez installer l'installeur de dépendance PHP **composer**. Composer peut être téléchargé
[ici](https://getcomposer.org/download/) (celui-ci est également disponible dans les dépôts EPEL).

Une fois que composer est installé, rendez-vous dans les répertoires Centreon (habituellement **/usr/share/centreon/**)
et exécutez la commande suivante :

``` shell
composer install --no-dev --optimize-autoloader
```

### Installation des dépendances Javascript

Tout d'abord, vous devez installer l'environnement d'exécution javascript **nodejs**. Les instructions d'installation
sont disponibles [ici](https://nodejs.org/en/download/package-manager/).

Une fois que nodejs est installé, copiez les fichiers JSON vers le dossier d'installation :

``` shell
cp /usr/local/src/centreon-web-YY.MM.x/package* /usr/share/centreon/
```

Puis, rendez vous dans le répertoire centreon (habituellement **/usr/share/centreon/**) et exécutez les commandes
suivantes :

``` shell
npm install
npm run build
rm -rf node_modules
```

### Pour tous les OS

SELinux doit être désactivé. Pour cela, vous devez modifier le fichier **/etc/sysconfig/selinux** et remplacer
**enforcing** par **disabled** comme dans l'exemple suivant :

``` shell
SELINUX=disabled
```

Après avoir sauvegardé le fichier, veuillez redémarrer votre système d'exploitation pour prendre en compte les changements.

La timezone par défaut ainsi que des paramètres requis de PHP doivent être configurés. Pour cela, allez dans le
répertoire `/etc/php/7.2/cli/conf.d` ou `/etc/php/7.2/apache2/conf.d` et créez un fichier nommé `centreon.ini` contenant
les lignes suivantes :

``` shell
date.timezone = Europe/Paris
max_execution_time = 300
session.use_strict_mode = 1
session.gc_maxlifetime = 7200
```

Après avoir sauvegardé le fichier, n'oubliez pas de redémarrer le service apache de votre serveur.

La base de données MariaDB doit être disponible pour pouvoir continuer l'installation (localement ou non). Pour
information, nous recommandons MariaDB.

## Installation web

Terminez l'installation en réalisant les
[étapes de l'installation web](../web-and-post-installation.html#installation-web).
