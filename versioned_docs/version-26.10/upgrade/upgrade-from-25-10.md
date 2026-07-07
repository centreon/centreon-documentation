---
id: upgrade-from-25-10
title: Upgrade from Centreon 25.10
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Intro from './_intro.mdx'
import UpgradeCentral from './_upgrade-central.mdx'
import UpgradeRemotes from './_upgrade-remotes.mdx'

<Intro oldCentreonVersion="25.10" oldMariadbVersion="10.11.x" oldPhpVersion="8.2" oldMysqlVersion="MySQL 8.0 or 8.4"/>

<UpgradeCentral oldCentreonVersion="25.10" showSecondPoint={true} showThirdPoint={true} props.oldMariadbVersion="10.11.x" oldPhpVersion="8.2" oldMysqlVersion="MySQL 8.0 or 8.4" />

<UpgradeRemotes />

<UpgradePollers />
