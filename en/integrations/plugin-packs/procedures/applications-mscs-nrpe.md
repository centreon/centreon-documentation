---
id: applications-mscs-nrpe
title: Microsoft Cluster Server NSClient++ NRPE
---

## Overview

## Pack assets

### Monitored objects

### Collected metrics

## Prerequisites

### NSClient++

To monitor a *Microsoft Cluster Server* through NRPE, install the Centreon repackaged version 
of the NSClient++ agent. Please follow our [official documentation](../plugin-packs/tutorials/centreon-nsclient-tutorial.html) 
and make sure that the **NRPE Server** configuration is correct. 

## Installation 

``` shell
yum install centreon-nrpe-plugin
```

## Host configuration

## Important information

* You cannot use the `|` character in your Centreon Macro definitions