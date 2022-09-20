---
id: develop-with-centreon-plugins
title: Develop with centreon-plugins
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Setup your environment

To use the centreon-plugins framework, you'll need the following: 

- A Linux operating system, ideally Debian 11 or RHEL/RHEL-like >= 8
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) command line utility
- A [GitHub](https://github.com/) account


### Enable our standard repositories

<Tabs groupId="sync">
<TabItem value="Debian 11" label="Debian 11">

```shell
echo "deb https://apt.centreon.com/repository/22.04/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

</TabItem>
<TabItem value="RHEL 8 and alike" label="RHEL 8 and alike">

```shell
dnf install -y https://yum.centreon.com/standard/22.04/el8/stable/noarch/RPMS/centreon-release-22.04-3.el8.noarch.rpm
```

</TabItem>
</Tabs>

Install the following dependencies: 

<Tabs groupId="sync">
<TabItem value="Debian 11" label="Debian 11">

```shell
apt-get install 'libpod-parser-perl' 'libnet-curl-perl' 'liburi-encode-perl' 'libwww-perl' \
    'liblwp-protocol-https-perl' 'libhttp-cookies-perl' 'libio-socket-ssl-perl' 'liburi-perl' \
    'libhttp-proxypac-perl' 'libcryptx-perl' 'libjson-xs-perl' 'libjson-path-perl' \
    'libcrypt-argon2-perl' 'libkeepass-reader-perl' 
```

</TabItem>
<TabItem value="RHEL 8 and alike" label="RHEL 8 and alike">

```shell
dnf install 'perl(Digest::MD5)' 'perl(Pod::Find)' 'perl-Net-Curl' 'perl(URI::Encode)' \
    'perl(LWP::UserAgent)' 'perl(LWP::Protocol::https)' 'perl(IO::Socket::SSL)' 'perl(URI)' \
    'perl(HTTP::ProxyPAC)' 'perl-CryptX' 'perl(MIME::Base64)' 'perl(JSON::XS)' 'perl-JSON-Path' \
    'perl-KeePass-Reader' 'perl(Storable)' 'perl(POSIX)' 'perl(Encode)'
```

</TabItem>
</Tabs>

### Setup centreon-plugins repository 

Clone the repository: 

```shell
git clone https://<githubusername>@github.com/centreon/centreon-plugins
``` 

Create a branch: 
```shell
cd centreon-plugins
git checkout -b 'my-first-plugin'
```

