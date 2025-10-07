---
id: ticketing-install
title: Installing Open Tickets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installing Open Tickets

1. Install the following package:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
dnf install centreon-open-tickets
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

``` shell
dnf install centreon-open-tickets
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

``` shell
apt install centreon-open-tickets
```

</TabItem>
</Tabs>

2. Go to **Administration > Extensions > Manager** and install the **Open Tickets** module. There is now a new menu in Centreon: **Configuration > Notifications > Open Tickets > Rules**.
