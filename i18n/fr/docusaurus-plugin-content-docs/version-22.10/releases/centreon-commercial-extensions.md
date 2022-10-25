---
id: centreon-commercial-extensions
title: Extensions Commerciales
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions commerciales** de Centreon.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions commerciales, veuillez contacter le support.

## Centreon MAP

### 22.10.0

Release date: `October 26, 2022`

#### Performance

- Move to Java 17

## Centreon BAM

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon MBI

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

#### Performance

- ETL daily and rebuild optimizations
- Move to Java 17

## Centreon Auto Discovery

### 22.10.0

Release date: `October 26, 2022`

#### Enhancements

- Already monitored hosts can now be updated by Host Discovery in manual mode. It had been made available in automatic mode in the [22.04 release](../../22.04/releases/centreon-commercial-extensions/#centreon-auto-discovery), it is now available in manual mode. Changes can be made to macros, templates, host groups, host categories, host severity and the monitoring server
- When no template mappers apply to a host, one can choose whether the default template must be applied or if the host must not be monitored at all

## Centreon Plugin Packs Manager

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon License Manager

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon Anomaly Detection

### 22.10.0

Release date: `October 26, 2022`

- Added new type of resources in Resource Status (display and filter)
- Added prediction envelope size management by user from Resources Status
- Downtimes on regular services are now propagated to related Anomaly Detection service(s)
