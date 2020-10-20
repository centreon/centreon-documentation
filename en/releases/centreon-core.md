---
id: centreon-core
title: Centreon Core
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Core**.

> It is very important when you update your system to refer to this section in
> order to learn about behavior changes or major changes that have been made on
> this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have
> built on your platform (modules, widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon Web release notes

### 20.10.0

## Centreon Engine release notes

### 20.10.0

> Known behaviours:
>
>   - If Engine on a Poller or Remote Server is not upgraded to 20.10,
>     configuration files copied from an upgraded Central by Gorgone using ZMQ
>     communication will not be readable by Engine process, resulting to this
>     error in Engine log:
>
>     ```text
>     Error: Parsing of global configuration failed: Can't open file '/etc/centreon-engine/centengine.cfg'
>     ```
>
>     This is due to more strict rights on those files.
>
>     As always, we **strongly recommand** to upgrade all components to
>     match Central serie.
>
>     However, during an upgrade process, it is possible to manually
>     add the user *centreon-engine* to *centreon-gorgone* group with
>     the following command:
>
>     ```shell
>     usermod -a -G centreon-gorgone centreon-engine
>     ```

## Centreon Broker release notes

### 20.10.0

> Known behaviours:
>
>   - If Broker on a Poller or Remote Server is not upgraded to 20.10
>     (or with a version prior to 20.04.9), the communication between those
>     Poller or Remote Server and an upgraded Central may not work.
>
>     As always, we **strongly recommand** to upgrade all components to match
>     Central serie.
>
>     However, during an upgrade process, communication can be maintained
>     by making sure Brokers' configurations match the following conditions:
>
>       - *TLS encryption* and *compression* are either set to
>         *Auto* or *No* on Central input,
>       - *TLS encryption* and *compression* are either set to
>         *Auto* or *No* on Poller or Remote Server output.
>
>     If the reversed connection mode (*one peer retention*) is used,
>     the Broker upgrade is mandatory.

## Centreon Gorgone release notes

### 20.10.0
