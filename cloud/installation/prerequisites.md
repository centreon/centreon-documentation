---
id: prerequisites
title: Prerequisites
---

> **IMPORTANT**: The poller is a component that is deployed in the customers' infrastructure. Its administration (material and virtual infrastructure, OS, security, monitoring and Centreon applicative layers, etc) is solely the responsibility of the customers, as per the Terms and Conditions.
## OS

The poller must be installed on a dedicated fresh Alma Linux/RHEL/Oracle Linux 8 or 9, or Debian 11 server.

## Hardware

The host machine must have at least the following characteristics:

* To handle testing or small environments (up to 2000 services with checks every 5 minutes, or up to 500 services with checks every minute):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3 GHz) | 2 vCPU    |
| RAM                         | 2 GB      |
| HDD                         | 40 GB     |

* To handle production environments (up to 7000 services with checks every 5 minutes):

| Element                     | Value     |
| ----------------------------| --------- |
| CPU  (logical core at 3 GHz) | 4 vCPU    |
| RAM                         | 4 GB      |
| HDD                         | 40 GB     |

> A poller can monitor around 7000 active services. vCPU must have a frequency of approximately 3 GHz. The number of
> vCPU depends on the complexity of the checks. If you use connectors or perform a large number of system/third-party
> binary calls, you should add more vCPU.

It is recommended that you partition the poller's disk to prevent it from becoming full and unusable (for instance, in case of retention issues).
Perform the partitioning following these recommendations:

| File system                | Size                                                                  |
|----------------------------|-----------------------------------------------------------------------|
| swap                       | 1 to 1.5 total size of RAM space                                      |
| /                          | at least 20 GB                                                        |
| /var/log                   | at least 10 GB                                                        |
| /var/lib/centreon-broker   | at least 5 GB                                                         |

## Network

| Description    | Direction | Protocol   | IP           | Port   |
| -------------- | --------- | ---------- | ------------ | ------ |
| INTERNET       | Outbound  | HTTPS      | *            | 443    |
| NTP (optional) | Outbound  | UDP        | TBA          | 123    |

| Source            | Destination         | Port/Protocol      | Monitoring protocol   |
| ----------------- | ------------------- | ------------------ | --------------------- |
| Centreon servers  | Devices to monitor  | 80/443 TCP         | API                   |
| Centreon servers  | Database to monitor | 3306/1521/1433 TCP | MySQL/Oracle/MSSQL    |

## Allowing traffic to/from AWS IP ranges

If you are filtering flows based on IP addresses, authorize the AWS IP ranges your poller needs to interact with.

AWS provides a [list of their IP ranges](https://ip-ranges.amazonaws.com/ip-ranges.json). You can retrieve the list of IP addresses you want using a curl command. Example for AWS Ireland with the EC2 service for IPV6 and IPV4:

```shell
curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq -r '.ipv6_prefixes[] | select(.region == "eu-west-1") | select(.service == "EC2") | .ipv6_prefix' 
curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq -r '.prefixes[] | select(.region == "eu-west-1") | select(.service == "EC2") | .ip_prefix' 
```
