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

### Fork and clone centreon-plugins repository 

Within GitHub UI, on the top left, click on the fork button:

![image](../../../assets/integrations/plugin-packs/dev-resources/00_dev-resources_centreon-plugins-fork.png)

Use git utility to fetch your repository fork: 

```shell
git clone https://<githubusername>@github.com/<githubusername>/centreon-plugins
``` 

Create a branch: 
```shell
cd centreon-plugins
git checkout -b 'my-first-plugin'
```

You can also choose 

## Understand project organization

### Layout and concepts

The project content is made of a main binary (`centreon_plugins.pl`), and a logical 
directory structure allowing to separate plugins and modes files across the domain they 
are refering to. 

You can display it using the command `tree -L 1`. 

```shell
.
├── apps
├── blockchain
├── centreon
├── centreon_plugins.pl
├── changelog
├── cloud
├── contrib
├── database
├── doc
├── example
├── hardware
├── Jenkinsfile
├── LICENSE.txt
├── network
├── notification
├── os
├── README.md
├── snmp_standard
├── sonar-project.properties
└── storage
```

Let's take a deeper look to the layout of the directory containing modes to monitor Linux
system through the command-line (`tree os/linux/local/ -L 1`). 

```shell
os/linux/local/
├── custom      # Type: Directory. Contains code that can be used by several modes.
│   └── cli.pm  # Type: File. *Custom mode* defining common methods 
├── mode        # Type: Directory. Contains all **modes**. 
[...]
│   └── cpu.pm  # Type: File. **Mode** containing the code to monitor the CPU
[...]
└── plugin.pm   # Type: File. **Plugin** definition.
```

Note the os/linux/**local**. The project offer  

Now, let's see how these concepets combine to buil a command line:

```shell 
# <perl interpreter> <main_binary> --plugin=<perl_normalized_path_to_plugin_file> --mode=<mode_name> 
perl centreon_plugins.pl --plugin=os::linux::local::plugin --mode=cpu
```

### Shared directories

Some specific directories are not related to a domain (os, cloud, ...) and are used
across all plugins. 

#### The **centreon** directory

The **centreon** directory is specific, it contains:
- Project libraries/packages. This is all the code that will help you to develop faster
by avoiding the coding of protocol related things (SNMP,HTTPx,SSH,...) or common things like 
options or cache management from scratch.
- Common files shared by multiple plugins. This is to avoid duplicating code across the 
directory tree and ease the maintenance of the project.

#### The **snmp_standard/mode** directory

The **snmp_standard/mode** exists since the beginning when SNMP monitoring was much more used
than it is today. All the modes it contains use standard OIDs, which means that many plugins are 
relying on these as soon as the the manufacturer supports standard MIBS on their devices.

