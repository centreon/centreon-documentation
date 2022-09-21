---
id: map-web-update
title: Update MAP Web
---

> A reset of your MAP Web database is necessary: the modifications you made on your maps using the web editor will be lost. Otherwise, note that the MAP Legacy database (and therefore legacy maps) will not be impacted.

Use the following procedure to update your MAP Web version:

1. Stop the **centreon-map-ng** service by running this command on the machine hosting the Centreon MAP Web service:
 
  ```shell
  sudo systemctl stop centreon-map-ng
  ```

2. Update the packages by running this command on the machine(s) hosting the central service and the Centreon MAP Web service:
 
  ```shell
  sudo yum update "centreon-map-server-ng" "centreon-map-web-client" --enablerepo="centreon-beta-stable\*"
  ```

3. Purge the MAP Web database by connecting to the database and executing the following requests:
 
  ```shell
  drop database centreon_map; create database centreon_map; grant all privileges on centreon_map.* to 'centreon_map'@'%' identified by 'centreon_map';
  ```

4. Clear your browser cache.
 

5. Restart the **centreon-map-ng** service using the following command:
 
  ```shell
  sudo systemctl start centreon-map-ng
  ```
