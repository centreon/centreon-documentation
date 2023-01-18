---
id: prerequisites
title: Prerequisites
---

## OS

The poller should be installed on a dedicated fresh CentOS 7 server.

## Hardware

The host machine must have at least the following characteristics:

* To handle between 2000 services with checks every 5 minutes to 500 services with checks every minute:

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* To handle up to 7000 services with checks every 5 minutes:

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

> A poller can monitor around 7000 active services. vCPU must have a frequency of approximately 3 GHz. The number of
> vCPU depends of the complexity of checks. If you use connectors or perform a large number of system/third-party
> binary calls, you should add more vCPU.

It is recommended to partition the poller's disk to prevent it from becoming full and unusable (for instance, in case of retention issues).
Perform the partitioning following these recommendations:

| File system                | Size                                                                  |
|----------------------------|-----------------------------------------------------------------------|
| swap                       | 1 to 1.5 total size of RAM space                                      |
| /                          | at least 20 GB                                                        |
| /var/log                   | at least 10 GB                                                        |
| /var/lib/centreon-broker   | at least 5 GB                                                         |

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
