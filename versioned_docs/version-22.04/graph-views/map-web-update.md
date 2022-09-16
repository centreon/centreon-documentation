---
id: map-web-update
title: Update MAP Web
---

This chapter describes how to update your MAP Web module.

We had to change the database schema and therefore a reset of your MAP Web database is necessary. The modifications you made on your map using the web editor will be lost.

Of course, your legacy database (and therefore maps) will not be impacted!

To update your MAPWeb version:

Stop the centreon-map-ng service.

Run this command on the machine hosting the Centreon MAP Web service:
 

sudo systemctl stop centreon-map-ng
 

Update packages.

Run this command on the machine(s) hosting the Central service and the Centreon MAP Web service:
 

sudo yum update "centreon-map-server-ng" "centreon-map-web-client" --enablerepo="centreon-beta-stable\*"
 

Purge the MAP Web database.

Connect to the database and execute the following requests:
 

drop database centreon_map; create database centreon_map; grant all privileges on centreon_map.* to 'centreon_map'@'%' identified by 'centreon_map';
 

Clear your browser cache.
 

Restart the centreon-map-ng service:
 

sudo systemctl start centreon-map-ng
 

