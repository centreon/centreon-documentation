---
id: centreon-commercial-extensions
title: Commercial Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Commercial Extension**.

> It is very important when you update your system to refer to this section in
> order to learn about behavior changes or major changes that have been made on
> this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have
> built on your platform (modules, widgets, plugins).

If you have feature requests or want to report a bug, please go to our [Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon MAP

### 20.04.0

Released April, 17 2020.

#### New features


**Packaging simplified**

The packaging has been simplified so we don't require Tomcat. Logs are now accessible in `/var/log/centreon-map/`
and the service is now `centreon-map` (*systemctl restart centreon-map for instance*).

**Silent installation**

It's now possible to install Centreon Map using a silent mode instead of the only interactive mode.

**License on Central server**

The licensing system has been simplified.

The MAP license resides now on the Centreon **central** server, as any other
commercial extension. No worry, the compatibility with the previous licensing
mecanism (license on the map server) is maintained.

Anyway, if you want to perfectly finish your migration, you may ask the support
team to generate a new Centreon Map license for your Central server 
and upload at `Administration > Extensions > Manager`


## Centreon BAM

### 20.04.0

#TODO 

Manage compatibility with Centreon 20.04

## Centreon MBI

### Centreon MBI 20.04.0

Manage compatibility with Centreon 20.04