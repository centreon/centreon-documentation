---
id: map-web-migrate
title: Migrating the extension
---

This section explains how to move Centreon MAP server over to another server.

This task may be useful if you need to migrate your reporting server from
Alma 8 to Alma 9.

### Install the new Centreon MAP server

Please refer to the installation procedure in this documentation to install your new Centreon MAP server.

### Synchronize the data

  1. Stop Centreon MAP service on both Centreon MAP servers:
  
  ```shell
  systemctl stop centreon-map-engine
  ```

2. You need to extract MAP data from Centreon. Make sure you dump your Centreon MAP data onto a partition with the necessary available space:

  ```shell
  mysqldump -u XXXXXX -p centreon_map > /tmp/centreon_map.sql
  ```

3. Upload **centreon_studio.sql** to the new Centreon MAP (in /tmp) server and import it into the database:

  ```shell
  mysql -u XXXXXX -p centreon_map < /tmp/centreon_map.sql
  ```

4. Start Centreon Map service on the new Centreon MAP server:

  ```shell
  systemctl start centreon-map-engine
  ```
