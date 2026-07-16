---
id: collector-troubleshooting
title: Troubleshooting your installation
description: Troubleshoot OpenTelemetry collector installation and log collection issues
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Check the status of your collector on the host you want to receive logs from:

 ```shell
journalctl -u otelcol-contrib.service
```

If you do not receive expected logs in Centreon Log Management, check that the **otelcol-contrib** user has sufficient rights to read the required files, according to the type of receiver. Example:

```shell
ls -l /var/log/messages
id otelcol-contrib
usermod -aG root otelcol-contrib
```
