---
id: migrate
title: Migrate the extension
---

This section explains how to move Centreon MAP (Legacy) server over to another server.

This task may be useful if you need to migrate your reporting server from
CentOS 6 to CentOS 7.

### Install the new Centreon MAP (Legacy) server

Please refer to the installation chapter in this documentation to install
your new Centreon MAP (Legacy) server.

### Synchronize the data

Stop Centreon MAP (Legacy) service on both Centreon MAP (Legacy) servers:

```shell
systemctl stop centreon-map
```

Dump the Centreon MAP (Legacy) data:

```shell
mysqldump -u XXXXXX -p centreon_studio > /tmp/centreon_studio.sql
```

Upload **centreon_studio.sql** to the new Centreon MAP (Legacy) (in /tmp) server and import it into the database:

```shell
mysql -u XXXXXX -p centreon_studio < /tmp/centreon_studio.sql
```

Start Centreon Map (Legacy) service on the new Centreon MAP servers:

```shell
systemctl start centreon-map
```
