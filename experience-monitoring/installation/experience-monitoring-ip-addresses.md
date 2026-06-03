---
id: experience-monitoring-ip-addresses
title: Experience Monitoring IP addresses
---

## Probe addresses

Our probes can query your site on ports 80 (HTTP) and 443 (HTTPS) or use the ICMP protocol. For most publicly accessible sites no configuration is required; however, in some cases firewalls or bot protections like Imperva or reCaptcha may automatically block our visits.

If that's the case, here is the list of IP addresses you should whitelist to allow Experience Monitoring access:

- 18.200.8.204
- 34.241.126.134
- 34.242.201.38
- 34.243.127.23
- 34.248.113.181
- 34.250.75.1
- 34.252.162.102
- 34.255.79.251
- 52.17.157.120
- 52.18.157.52
- 52.19.60.226
- 52.30.194.126
- 52.31.137.223
- 52.48.148.3
- 52.48.151.164
- 52.50.31.122
- 52.51.174.216
- 52.208.14.10
- 52.209.27.6
- 52.210.233.251
- 52.212.161.58
- 52.214.41.253
- 54.78.224.201
- 54.154.70.169
- 54.170.78.117
- 54.170.157.253
- 63.34.122.21
- 63.34.67.195
- 99.81.201.50
- 176.34.232.22
- 185.48.122.159

## Endpoint addresses for server agents

If you use server agents (the “System” section in Experience Monitoring), each of your servers regularly sends data (once per minute) to the Experience Monitoring service.

This is outbound HTTPS traffic (port 443) and is often allowed by default. However, if your firewall rules are strict and you need to allow specific destinations for Experience Monitoring, list the following destination IP addresses:

- 52.215.166.110
- 52.215.179.235
- 52.215.180.115
