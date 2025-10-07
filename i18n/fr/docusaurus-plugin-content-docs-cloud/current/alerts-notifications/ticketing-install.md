---
id: ticketing-install
title: Installer Open Tickets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installer Open Tickets

1. Installez le paquet suivant:

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

2. Allez à la page **Administration > Extensions > Gestionnaire** et installez le module **Open Tickets**. Un nouveau menu apparaît dans l'interface de Centreon: **Configuration > Notifications > Open Tickets > Règles**.
