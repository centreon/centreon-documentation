---
id: lifecycle
title: Products lifecycle policy
---

Centreon has been publishing new releases of the
Centreon solution at regular intervals since version 18.10, enabling the community, businesses and
developers to plan their roadmaps with the guarantee of upstream visibility on the
latest open source capabilities.

## Version number format: YY.MM

Releases of Centreon are named according to the year and period of delivery.
For example, Centreon 21.04 was released in spring 2021. All modules and
components of the Centreon software suite use the same version numbers.

## Release frequency

Centreon delivers two releases per year. The first
will occur in the spring and will be major (including new products or features as well as larger architecture changes),
while the second will be in the fall and will be minor (including primarily enhancements and fixes to existing features). 
Between these two, Centreon will regularly deliver minor updates (versioned YY.MM.NN), 
including security/vulnerability fixes, bug fixes and enhancements to the software.

## Maintenance and security updates

### Until version 21.04

Version 21.04 and prior versions have been supported for 18 months. The lifecycle of a version is divided into three phases:

1.  First phase: Bugs of all severity levels (minor, major, critical, blocker)
    and security issues are fixed according to their priority.
2.  Second phase: Major, critical bugs and blockers, or security issues are
    fixed according to their priority.
3.  Third phase: Blockers or security issues are fixed according to their priority.

> Prioritization is made by Centreon’s product team.

The first phase of the lifecycle begins on the day of a version release.

The second phase of a version begins when the next major version is available.
For example, the release of Centreon 21.04 triggers the second phase of Centreon
20.10.

The third phase of a version begins when the second next major version is
available. For example, the release of Centreon 21.04 triggers the third phase of
Centreon 20.04 and the second phase of Centreon 20.10.

### From version 21.10

From version 21.10, versions are supported for 2 years. The lifecycle of a version is divided into 2 phases of 12 months each.

1.  First phase: Bugs of all severity levels (minor, major, critical, blocker)
    and security issues are fixed according to their priority.
2.  Second phase: Major, critical bugs and blockers, or security issues are
    fixed according to their priority.

> Prioritization is made by Centreon’s product team.

### Schema

This diagram outlines the Centreon version lifecycle policy:

![image](../assets/releases/lifecycle.png)

## Maintenance table for earlier products

> Any other products not described in the following tables are no longer supported
> by Centreon.

### Centreon OSS

| Product                 | Version  | Release date | End of life    | State         |
| ----------------------- | -------- | ------------ | -------------- | ------------- |
| Centreon Web            | 2.8.x    | 2016/11/14   | Centreon 20.04 | Not supported |
| Centreon Engine         | 1.8.x    | 2017/09/19   | Centreon 20.04 | Not supported |
| Centreon Broker         | 3.0.x    | 2016/11/14   | Centreon 20.04 | Not supported |
| Centreon DSM            | 2.x      | 2014/09/01   | Centreon 20.04 | Not supported |
| Centreon Open Tickets   | 1.2.x    | 2016/06/20   | Centreon 20.04 | Not supported |
| Centreon AWIE           | 1.x      | 2018/04/11   | Centreon 20.04 | Not supported |
| Centreon Poller Display | 1.5.x    | 2018/04/11   | Centreon 20.04 | Not supported |
| Centreon Widgets        | 1.x      | N/A          | Centreon 20.04 | Not supported |
| Centreon Plugins        | YYYYMMDD | N/A          | Centreon 20.04 | Not supported |

### Centreon IMP

| Product                       | Version | Release date | End of life    | State           |
| ----------------------------- | ------- | ------------ | -------------- | --------------- |
| Centreon OSS                  | 3.4     | 2016/11/14   | Centreon 20.04 | Not supported   |
| Centreon License Manager      | 1.1.x   | 2018/02/23   | Centreon 20.04 | Not supported   |
| Centreon Plugin Packs Manager | 2.4.x   | 2018/05/30   | Centreon 20.04 | Not supported   |
| Plugin Packs                  | 3.x     | N/A          | N/A            | All issues      |

### Centreon EMS

| Product                 | Version | Release date | End of life    | State                     |
| ----------------------- | ------- | ------------ | -------------- | ------------------------- |
| Centreon IMP            | 3.4     | 2016/11/14   | Centreon 20.04 | Not supported             |
| Centreon BAM            | 3.6.x   | 2018/02/22   | Centreon 20.04 | Not supported             |
| Centreon MAP            | 4.4.x   | 2017/01/02   | Centreon 20.04 | Not supported             |
| Centreon MBI            | 3.2.x   | 2018/07/09   | Centreon 20.04 | Not supported             |
| Centreon Auto Discovery | 2.3.x   | 2017/08/24   | Centreon 20.04 | Not supported             |