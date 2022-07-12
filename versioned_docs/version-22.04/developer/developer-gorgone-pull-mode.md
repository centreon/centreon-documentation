---
id: developer-gorgone-pull-mode
title : Configuring Gorgone in pull mode
---

This procedure describes how to configure Gorgone between a distant poller and a central server.

- Pull mode allows the poller to act as a client and connect to the Central (which will be the server). 

- Pull mode is relevant when firewalls are set on pollers and prevent incoming traffic.

- Pull mode is relevant when the Central is in the cloud and pollers are not reachable through usual IP addresses. So the pull (or reverse) mode is used to make each poller to initiate a connection to the public IP address of the Central. Learn more about this use case in [this article](https://thewatch.centreon.com/product-how-to-21/how-to-use-the-gorgone-pull-mode-374).


> Note: In our case, we have the configuration described below (you have to adapt the procedure regarding your configuration).

Central server:
- address: 10.30.2.203

Distant Poller:
- id: 6 (configured in Centreon interface as zmq. You can get this id from the Centreon interface).
-	address: 10.30.2.179
-	rsa public key thumbprint: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s

## On the distant poller side

### Installation requirement
Ensure the distant poller and Gorgone are already installed.

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
      target_path: 10.30.2.203:5556
      ping: 1
```

## On the Central server side

### Installation requirement
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
      - key: nJSH9nZN2ugQeksHif7Jtv19RQA58yjxfX-Cpnhx09s
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
  - id: 6
    type: pull
    prevail: 1
```
