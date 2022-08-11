---
id: prerequisites
title: Prerequisites
---

## OS

The poller should be installed on a dedicated fresh CentOS 7 server.

## Hardware

The host machine must have at least the following characteristics:

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 1 CPU     |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

It is recommended to partition the poller disk to prevent it from becoming full and unusable (for instance, in case of retention issue).
Perform the partitioning following these recommendations:

| File system                | Size                                                                  |
|----------------------------|-----------------------------------------------------------------------|
| swap                       | 1 to 1.5 total size of RAM space                                      |
| /                          | at least 20 GB                                                        |
| /var/log                   | at least 10 GB                                                        |
| /var/lib/centreon-broker   | at least 5 GB                                                         |
| /var/cache/centreon/backup | at least 5 Go (export the backups and delete the exported data daily) |

## Network

| Description | Direction | Protocol   | IP           | Port   |
| ----------- | --------- | ---------- | ------------ | ------ |
| VPN         | Outbound  | UDP        | VPN IP (TBA) | 1194   |
| INTERNET    | Outbound  | HTTP/HTTPS | *            | 80/443 |
| NTP         | Outbound  | UDP        | TBA          | 123    |

| Source            | Destination         | Port/Protocol      | Monitoring protocol   |
| ----------------- | ------------------- | ------------------ | --------------------- |
| Centreon servers  | Devices to monitor  | 80/443 TCP         | API                   |
| Centreon servers  | Database to monitor | 3306/1521/1433 TCP | MySQL/Oracle/MSSQL    |
