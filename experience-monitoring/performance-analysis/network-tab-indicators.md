---
id: network-tab-indicators
title: Understanding the Network tab indicators
--- 

## What is a ping?

A ping is a network test. The idea is to send a request to a server to check for a response and measure how long it takes to receive that response.

The goal is to verify there are no communication issues with the servers over the internet.

## Difference between TCP Ping and ICMP Ping

Both are network tests. The difference is the protocol — TCP or ICMP — and each one tests different communication layers.

- ICMP ping measures basic network connectivity to the server over the internet. It is common for production machines to be configured to ignore ICMP (not as a result of an incident but deliberately). To cover cases where ICMP is not allowed, we run a second test that targets a service which is required to respond: a TCP ping.
- TCP ping works on the same principle as ICMP but uses TCP on port 80, which is the protocol used by your web servers. Port 80 must be open for your site to be reachable, so a TCP ping is a reliable fallback when ICMP is blocked.

## Analysis

### What do the red bars mean?

If you see occasional red on this chart, it means your site was unreachable due to a network problem. Ping response time depends on both bandwidth and the route between the Experience Monitoring probe and your hosting location. For clarity we separate what is harmless, what requires attention, and what requires an urgent intervention.

> At the moment all measurements are performed from our infrastructure in Europe. If your site is hosted on another continent, latency may be higher.

### When should you act urgently?

A red bar on both charts indicates the site cannot be reached due to a network issue. In that case, escalate to your host or network administrator immediately — your site is unreachable.

### Situations that deserve your attention

A significant increase in response time or recurring spikes on the charts indicates a bandwidth issue or a change in the route taken by the probe to reach your site. We recommend escalating this information to your host or network administrator.

### Situations that are usually not a concern

An isolated spike on one of the charts is not necessarily serious — a single measurement spike often does not affect end users.

- A persistent red bar on the ICMP chart since Experience Monitoring was installed usually means ICMP has been intentionally disabled; this is not an incident. For better visibility you can ask your network administrator (or hosting provider) to enable ICMP ping.
- If a red bar suddenly appears on the ICMP chart but the TCP test still succeeds, don’t panic: your site remains available. This typically means ICMP has been deliberately blocked while the web service remains reachable via TCP.
