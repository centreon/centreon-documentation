---
id: centreon-commercial-extensions
title: Commercial Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Commercial
Extension**.

> It is very important when you update your system to refer to this
> section in order to learn about behavior changes or major changes that
> have been made on this version. This will let you know the impact of
> the installation of these versions on the features you use or the
> specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please contact support.

## Centreon MAP

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon BAM

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon MBI

### 21.04.2

`July 15, 2021`

#### Improvements

- Optimized widget requests

#### Bugfixes

- Immediate execution in job parameters did not work
- BA names were missing in the BV-BA-Availabilities-1 report
- Division by zero caused an error within the widget

### 21.04.1

`June 24, 2021`

#### Bugfixes

- Fixed JQuery issues with MBI web client

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon Auto Discovery

`July 19, 2021`

### 21.04.1

#### Host discovery

- Disable the refresh button when listings are loading
- Autosave custom string when clicking away from input in mapper fields supporting text entry 
- Suggest reinstalling the PP if in 21.04 or higher when the installed provider is not compatible
- Warn the user that unsaved changes will be lost by leaving job edition
- Prevent usage of discovery.credentials attributes in host discovery mappers (except Macro)
- Add translation to mappers' conditions to display conjugated operators

### 21.04.0

#### Host discovery

- *Association* mappers are now named *property*.
- Ability to link the discovered hosts to host groups, either already existing ones or new ones created on-the-fly.
- Ability to link the discovered hosts to host categories, either already existing ones or new ones created on-the-fly.
- Ability to link the discovered hosts to host existing host severities.
- Property, macro, hostgroup and hostcategory mappers now support concatenation of either custom strings or discovered information.
- UX alignment with Resource Status
    - Clicking anywhere on a job's row now opens the side panel, not the job's result.
    - Clicking on the contextual arrow leads to the job's result (*ie.* the discovered hosts).

## Centreon Plugin Packs Manager

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon License Manager

### 21.04.0

- Compatibility with Centreon 21.04
