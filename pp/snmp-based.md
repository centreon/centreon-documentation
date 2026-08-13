---
id: snmp-based
title: SNMP-based connectors
description: "Learn what information an SNMP-based connector needs, from device and network requirements to host configuration and version-specific credentials."
---

When setting up an SNMP-based connector, here's the basic information you need:

## On the monitored device

The SNMP agent must be configured and running on the device (refer to the manufacturer's documentation).
The device may require a list of authorized addresses that can query it—make sure the addresses of your Centreon pollers are included.

## Network connectivity

The Centreon poller must be able to reach the device's UDP/161 SNMP port.

## For the host configuration in Centreon

* The host details: name, alias, and IP address/DNS.
* The SNMP version you'll use (e.g. 1, 2c, or 3).
* Credentials, which depend on the version:
   * For SNMP v1/v2c: the community string.
   * For SNMP v3: authentication parameters. When using SNMP v3, you use the SNMPEXTRAOPTIONS macro to add the specific authentication parameters (username, auth passphrase/protocol, privacy passphrase/protocol).

Once the template is applied, you fill in these values through the connector's macros and can adjust warning/critical thresholds. It's also good practice to test the connection from the poller CLI before deploying, to confirm the device responds.

## Troubleshooting SNMP-based connectors

* See the [**Troubleshooting SNMP** section of our troubleshooting page](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#troubleshooting-snmp).
* The [**Common problems**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#common-problems) section may also help.

## How SNMP works

SNMP (Simple Network Management Protocol) is a standard protocol used to monitor and manage devices on a network—things like routers, switches, servers, printers, and UPS units. Here's the basic idea:

### The main components

Manager — the monitoring system (in your case, the Centreon poller). It requests information from devices and collects the responses.
Agent — a small piece of software running on each monitored device. It knows the device's status and answers the manager's requests.
MIB (Management Information Base) — a structured catalog of everything that can be monitored on a device. Each piece of data (CPU load, interface traffic, temperature, etc.) has a unique address called an OID (Object Identifier), written as a string of numbers like 1.3.6.1.2.1.1.3.0.

### How the communication works

Most monitoring is polling: the manager sends a request to the agent asking for the value of a specific OID, and the agent replies with the current value. This happens over UDP port 161. Typical operations are GET (fetch one value), GETNEXT/GETBULK (walk through multiple values), and SET (change a setting on the device).

There's also a reverse direction called a trap (on UDP port 162): instead of waiting to be asked, the agent proactively sends an alert to the manager when something happens—for example, a link going down.

### Versions and security

v1 / v2c — authenticate using a simple shared password called a community string (often "public" for read-only). It's sent in plain text, so it's not secure.
v3 — adds real security: user-based authentication and encryption. This is why v3 needs extra parameters (username, auth passphrase/protocol, privacy passphrase/protocol).

So in short: your Centreon poller (manager) periodically asks each device's agent for values identified by OIDs, the agent answers, and Centreon turns those numbers into metrics, statuses, and alerts.
