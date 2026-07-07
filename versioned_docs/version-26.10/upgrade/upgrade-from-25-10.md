---
id: upgrade-from-25-10
title: Upgrade from Centreon 25.10
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Intro from './_intro.mdx'
import UpgradeCentral from './_upgrade-central.mdx'
import UpgradeRemotes from './_upgrade-remotes.mdx'

<Intro type="25.10" />

## Which components need upgrading

| Component | Version in 25.10 | Version in 26.10 |
| --- | --- | --- |
| PHP | 8.2 | 8.4 |
| Database | <ul><li>MariaDB 10.11.x</li><li>MySQL 8.0 or 8.4</li></ul> | <ul><li>MariaDB 11.8</li><li>MySQL 8.4</li></ul> |

## Prerequisites

### Perform a backup

Be sure that you have fully backed up your environment for the following
servers:

- Central server
- Database server

### Check the repositories

Before upgrading your Centreon platform, make sure the following package repositories are enabled:

<Tabs groupId="sync">
<TabItem value="EL" label="EL">

* EPEL
* BaseOS
* AppStream
* centreon
* centreon-modules, if you are using Centreon Business Edition.

</TabItem>
</Tabs>

## Upgrade the Centreon Central server

> When you run a command, check its output. If you get an error message, stop the procedure and fix the issue.

> If you installed MariaDB from their official repositories, you may run into a conflict issue. Read our [dedicated procedure](../resources/known-issues.md#you-have-a-conflict-between-packages-mysql-common-and-mariadb-common) for a workaround.

<UpgradeCentral centreonVersion='25.10' phpVersion="8.2" showSecondPoint={true} showThirdPoint={true} props.oldMariadbVersion="10.11.x" />

<UpgradeRemotes />

<UpgradePollers />
