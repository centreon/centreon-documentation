---
id: developer-gorgone-rebound-mode
title : Configuring Gorgone in rebound mode
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This procedure describes how to configure Gorgone between a remote poller and a central server, via a rebound server.

> Note: In our case, we have the configuration described below (you must adapt the procedure to your configuration).

Central server:
- address: 10.30.2.203

Rebound server:
- id: 1024 (This id is an arbitrary number and must be unique).
- address: 10.30.2.67
- rsa public key thumbprint: NmnPME43IoWpkQoam6CLnrI5hjmdq6Kq8QMUCCg-F4g

Remote Poller:
- id: 6 (configured in Centreon interface as zmq. You can get this id from the Centreon interface)
- address: 10.30.2.179
- rsa public key thumbprint: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s

## On the remote poller side

### Installation requirements

Ensure the remote poller and Gorgone are already installed.

### Configuration

Configure the file **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** as follows:

```shell
name:  distant-server
description: Configuration for distant server
gorgone:
  gorgonecore:
    id: 6
    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"
    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"

  modules:
    - name: action
      package: gorgone::modules::core::action::hooks
      enable: true

    - name: engine
      package: gorgone::modules::centreon::engine::hooks
      enable: true
      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"

    - name: pull
      package: "gorgone::modules::core::pull::hooks"
      enable: true
      target_type: tcp
      target_path: 10.30.2.67:5556
      ping: 1
```

## On the rebound server side

### Installation requirements

Ensure you have installed a server with a [supported OS](../installation/compatibility.md#operating-systems).

Then install the Gorgone daemon using the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">


```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el8/centreon-23.10.repo
dnf clean all --enablerepo=*
dnf update
dnf install centreon-gorgone
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.10/el9/centreon-23.10.repo
dnf clean all --enablerepo=*
dnf update
dnf install centreon-gorgone
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

To install the Centreon repository, execute the following command:

```shell
echo "deb https://packages.centreon.com/apt-standard-23.10-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

Then import the repository key:

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
apt update
```

Then install Gorgone:

```shell
apt install centreon-gorgone
```

</TabItem>
</Tabs>

### Configuration

Configure the file **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** as follows:

```shell
name:  rebound-server
description: Configuration for rebound-server
gorgone:
  gorgonecore:
    id: 1024
    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"
    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"
    external_com_type: tcp
    external_com_path: "*:5556"
    authorized_clients:
        - key: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s

  modules:
    - name: proxy
      package: "gorgone::modules::core::proxy::hooks"
      enable: true

    - name: pull
      package: "gorgone::modules::core::pull::hooks"
      enable: true
      target_type: tcp
      target_path: 10.30.2.203:5556
      ping: 1
```

## On the central server side

### Installation requirements

Ensure the Central server and Gorgone are already installed.

### Configuration

Configure the file **/etc/centreon-gorgone/config.d/40-gorgoned.yaml** as follows:

```shell
...
gorgone:
  gorgonecore:
    ...
    external_com_type: tcp
    external_com_path: "*:5556"
    authorized_clients:
      - key: NmnPME43IoWpkQoam6CLnrI5hjmdq6Kq8QMUCCg-F4g
    ...
  modules:
    ...
    - name: register
      package: "gorgone::modules::core::register::hooks"
      enable: true
      config_file: /etc/centreon-gorgone/nodes-register-override.yml
    ...
```

We created the file **/etc/centreon-gorgone/nodes-register-override.yml**:

```shell
nodes:
  - id: 1024
    type: pull
    prevail: 1
    nodes:
      - id: 6
        pathscore: 1
```
