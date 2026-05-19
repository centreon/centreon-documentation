---
id: network-data
title: Network Data
---

The **Network view** feature allows for an overview of the site's responsiveness over time using a network probe.

> At the moment all measurements are performed from our infrastructure in Europe. If your site is hosted on another continent, latency may be higher.

Your site is pinged regularly by the probe to check for a response and measure how long it takes for that response to arrive. This is done using TCP and ICMP pings.

Both are network tests. The difference is the protocol, TCP or ICMP, and each one tests different communication layers.

- ICMP ping measures basic network connectivity to the server over the internet. It is common for production machines to be configured to ignore ICMP (not as a result of an incident but deliberately). To cover cases where ICMP is not allowed, we run a second test that targets a service which is required to respond: a TCP ping.
- TCP ping works on the same principle as ICMP but uses TCP on port 80, which is the protocol used by your web servers. Port 80 must be open for your site to be reachable, so a TCP ping is a reliable fallback when ICMP is blocked.

Network views also records structural changes like an update to the FQDN and allows user to leave comments on the timeline.

The result of these pings over time can be seen in a timeline by clicking on **Network View** from the main menu.