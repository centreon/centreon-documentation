---
id: upgrade-from-25-10
title: Upgrade from Centreon 25.10
description: "Upgrade Centreon from version 25.10 to 27.10: back up your data, upgrade the central server and its database, then remote servers and pollers."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Intro from './_intro.mdx'
import UpgradeCentral from './_upgrade-central.mdx'
import UpgradeRemotes from './_upgrade-remotes.mdx'
import UpgradePollers from './_upgrade-pollers.mdx'

<Intro oldCentreonVersion="25.10" oldMariadbVersion="10.11.x" oldPhpVersion="8.2" oldMysqlVersion="MySQL 8.0 or 8.4"/>

<UpgradeCentral oldCentreonVersion="25.10" showSecondPoint={true} showThirdPoint={true} oldMariadbVersion="10.11.x" oldPhpVersion="8.2" oldMysqlVersion="MySQL 8.0 or 8.4" />

<UpgradeRemotes />

<UpgradePollers />
