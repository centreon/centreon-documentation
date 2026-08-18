---
id: network-tab-indicators
title: Network data
description: Understand ping-based network response time data
---

The Network data feature allows you to set up a regular ping on your site to measure the response time. The ping's results over time can be seen on a timeline graph by clicking on **Network Data** from the main menu.

## What is a ping?

A ping is a network test. The idea is to send a request to a server to check for a response and measure how long it takes to receive that response.

The goal is to verify there are no communication issues with the servers over the internet.

> At the moment all measurements are performed from our infrastructure in Europe. If your site is hosted on another continent, latency may be higher.

### Difference between TCP Ping and ICMP Ping

Both are network tests. The difference is the protocol and how each one communicates.

- ICMP ping measures basic network connectivity to the server over the internet. It is common for production machines to be configured to ignore ICMP (not as a result of an incident but deliberately). To cover cases where ICMP is not allowed, we run a second test that targets a service which is required to respond: a TCP ping.
- TCP ping works on the same principle as ICMP but uses TCP on port 80, which is the protocol used by your web servers. Port 80 must be open for your site to be reachable, so a TCP ping is a reliable fallback when ICMP is blocked.

## Understanding the results

### What do the grey and red zones mean?

Grey means no data is available for this section. It appears for the time before the Network Data feature was enabled and for times where pings were not performed.

Red means your site was unreachable due to a network problem. The probe sent the ping but never got a response. Ping response time depends on both bandwidth and the route between the Experience Monitoring probe and your hosting location. Isolated, small red bars are not a cause for concern as downtimes can happen for a variety of reasons.

### Situations that deserve your attention

You should contact your network administrator or site's host in the following cases:

- Both graphs show red bars. This means the site cannot be reached via either protocol. This is an ongoing network incident.

- Response times have significantly increased or there are recurring spikes on one or both charts. This indicates a bandwidth issue or a change in the routing path between the probe and your server.

### Situations that are usually not a concern

- An isolated spike on one chart. Most likely a single measurement anomaly with no impact on end users.

- ICMP shows persistent red since setup. This is most likely not an incident but a sign that ICMP is disabled for your site. Ask your network administrator or host to enable ICMP if you want full visibility.

- ICMP turns red but TCP stays green. Your site is still reachable. ICMP was likely blocked while the web service remains available on port 80.
