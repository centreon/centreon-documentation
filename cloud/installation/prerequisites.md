---
id: prerequisites
title: Prerequisites
---

## OS

The poller should be installed on a dedicated fresh CentOS 7 server.

## Hardware

The host machine must have the following characteristics:

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3Ghz) | 1 CPU     |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

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
