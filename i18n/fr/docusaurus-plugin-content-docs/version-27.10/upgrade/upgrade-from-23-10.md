---
id: upgrade-from-23-10
title: Monter de version depuis Centreon 23.10
description: "Monter une plateforme Centreon de la version 23.10 vers la version 26.10"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Intro from './_intro.mdx'
import UpgradeCentral from './_upgrade-central.mdx'
import UpgradeRemotes from './_upgrade-remotes.mdx'
import UpgradePollers from './_upgrade-pollers.mdx'

<Intro oldCentreonVersion="23.10" oldMariadbVersion="10.5.x" oldPhpVersion="8.1" oldMysqlVersion="MySQL 8.0 ou 8.4" showVmwareWarning={true} showMapLegacyWarning={true}/>

<UpgradeCentral oldCentreonVersion="23.10" oldMariadbVersion="10.5.x" oldPhpVersion="8.1" oldMysqlVersion="MySQL 8.0 ou 8.4" />

<UpgradeRemotes />

<UpgradePollers />