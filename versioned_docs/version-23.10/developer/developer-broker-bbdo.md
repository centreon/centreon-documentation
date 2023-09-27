---
id: developer-broker-bbdo
title: The BBDO protocol
---

The BBDO protocol has been created to be the default protocol of Centreon
Broker. It is lightweight on the wire and easy to decode. It is especially
designed for monitoring resources with Centreon Broker.

## Introduction

BBDO stands for Broker Binary Data Object. BBDO is designed to transfer
"data packets" from one node to another. These "data packets" spend most of
the time monitoring information provided by the monitoring engine (e.g.
Centreon Engine or Nagios). It uses mostly raw binary values, which
allows it to consume very little memory.

With Broker 22.04.0, we introduced a new version of BBDO. It is based on
[Google Protobuf 3](https://developers.google.com/protocol-buffers). The new
protocol remains compatible with the previous one, but introduces
new events. For example, PbService and PbServiceStatus events are
sent instead of Service and ServiceStatus events. Configured with BBDO 3, Broker
still understands Service and ServiceStatus events, but by default it should
send the new versions.

## Types

This section is about BBDO 2.

As a binary protocol, BBDO uses data types to serialize data. They are
written in a Big Endian format and described in the following table.


| Type          | Representation                                                                       | Size (bytes)
|---------------|--------------------------------------------------------------------------------------|--------------
| integer       | binary                                                                               | 4
| short integer | binary                                                                               | 2
| long integer  | binary                                                                               | 8
| time          | binary (timestamp)                                                                   | 8
| boolean       | binary (0 is false, everything else is true)                                         | 1
| string        | nul-terminated UTF-8 string                                                          | variable
| real          | nul-terminated UTF-8 string (either in fixed (2013) or scientific (2.013e+3) format) | variable

## Packet format

The packet format of Centreon Broker introduces only 16 bytes of header
to transmit each monitoring event (usually about 100-200 bytes each).
Fields are provided in the big endian format.

| Field          | Type                   | Description
|----------------|------------------------|-------------------------------------------------------
| checksum       | unsigned short integer | CRC-16-CCITT X.25 of size, id, source and destination. The checksum can be used to recover from an incomplete data packet sent in the stream by dropping bytes one by one.
| size           | unsigned short integer | Size of the packet, excluding header.
| id             | unsigned integer       | ID of the event.
| source_id      | unsigned integer       | The id of the source instance of this event.
| destination_id | unsigned integer       | The id of the destination instance for this event.
| data           |                        | Payload data.

Here, the only difference between BBDO 3 and the previous versions is the data
content. In BBDO 3, this part is a serialized Protobuf object, whereas in
previous versions it is data serialized as explained in the Types section.

### Packet ID

As seen in the previous paragraph, every packet holds an ID that expresses
by itself how data is encoded. This ID can be split into two 16-bit
components. The 16 most significant bits are the event category and the
16 least significant bits the event type.

The event categories serialize event properties one after the other, so
order is very important to not lose track when unserializing events.

## Event categories

The current available categories are described in the table below.

| Category    | API macro             | Value | Description
|-------------|-----------------------|-------|--------------------------------------------------
| NEB         | BBDO_NEB_TYPE         | 1     | Classical monitoring events (hosts, services, notifications, event handlers, plugin execution, ...).
| BBDO        | BBDO_BBDO_TYPE        | 2     | Category internal to the BBDO protocol.
| Storage     | BBDO_STORAGE_TYPE     | 3     | Category related to RRD graph building.
| Correlation | BBDO_CORRELATION_TYPE | 4     | Status correlation (deprecated).
| Dumper      | BBDO_DUMPER_TYPE      | 5     | Dumper events (only used for tests).
| Bam         | BBDO_BAM_TYPE         | 6     | Bam events.
| Extcmd      | BBDO_EXTCMD_TYPE      | 7     | Centreon Broker external commands (deprecated).
| Internal    | BBDO_INTERNAL_TYPE    | 65535 | Reserved for internal protocol use.

### NEB

The table below lists event types available in the NEB category. They
must be mixed with the BBDO_NEB_TYPE category to get a BBDO event ID.


| Type                            | Value | Uses Protobuf |
|---------------------------------|-------|---------------|
| Acknowledgement                 | 1     |            No |
| Comment                         | 2     |            No |
| Custom variable                 | 3     |            No |
| Custom variable status          | 4     |            No |
| Downtime                        | 5     |            No |
| Event handler                   | 6     |            No |
| Host check                      | 8     |            No |
| Host dependency                 | 9     |            No |
| Host group                      | 10    |            No |
| Host group member               | 11    |            No |
| Host                            | 12    |            No |
| Host parent                     | 13    |            No |
| Host status                     | 14    |            No |
| Instance                        | 15    |            No |
| Instance status                 | 16    |            No |
| Log entry                       | 17    |            No |
| Module                          | 18    |            No |
| Service check                   | 19    |            No |
| Service dependency              | 20    |            No |
| Service group                   | 21    |            No |
| Service group member            | 22    |            No |
| Service                         | 23    |            No |
| Service status                  | 24    |            No |
| Instance Configuration          | 25    |            No |
| Responsive Instance             | 26    |            No |
| Pb Service                      | 27    |           Yes |
| Pb Adaptive Service             | 28    |           Yes |
| Pb Service Status               | 29    |           Yes |
| Pb Host                         | 30    |           Yes |
| Pb Adaptive Host                | 31    |           Yes |
| Pb Host Status                  | 32    |           Yes |
| Pb Severity                     | 33    |           Yes |
| Pb Tag                          | 34    |           Yes |
| Pb Comment                      | 35    |           Yes |
| Pb Downtime                     | 36    |           Yes |
| Pb Custom variable              | 37    |           Yes |
| Pb Custom variable status       | 38    |           Yes |
| Pb Host check                   | 39    |           Yes |
| Pb Service check                | 40    |           Yes |
| Pb Log entry                    | 41    |           Yes |
| Pb Instance Status              | 42    |           Yes |
| Pb Instance                     | 44    |           Yes |
| Pb Acknowledgement              | 45    |           Yes |
| Pb Responsive Instance          | 46    |           Yes |

### Storage

The table below lists event types available in the Storage category.
They must be mixed with the BBDO\_STORAGE\_TYPE category to get a BBDO
event ID.

| Type                            | Value | Uses Protobuf |
|---------------------------------|-------|---------------|
| Metric                          | 1     |            No |
| Rebuild                         | 2     |            No |
| Remove\_graph                   | 3     |            No |
| Status                          | 4     |            No |
| Index mapping                   | 5     |            No |
| Metric mapping                  | 6     |            No |
| Pb Rebuild Message              | 7     |           Yes |
| Pb Remove Graph Message         | 8     |           Yes |
| Pb Metric                       | 9     |           Yes |
| Pb Status                       | 10    |           Yes |
| Pb Index mapping                | 11    |           Yes |
| Pb Metric mapping               | 12    |           Yes |

### BBDO

The table below lists event types available in the BBDO category.
They must be mixed with the BBDO\_BBDO\_TYPE category to get a BBDO
event ID.


| Type              | Value| Uses Protobuf |
|-------------------|------|---------------|
| version response  | 1    |            No |
| ack               | 2    |            No |
| stop              | 3    |            No |
| Pb ack            | 8    |           Yes |
| Pb stop           | 9    |           Yes |

### BAM

The table below lists event types available in the BAM category.
They must be mixed with the BBDO\_BAM\_TYPE category to get a
BBDO event ID.

| Type                                | Value | Uses Protobuf |
|------------------------------------ | ----- | ------------- |
| BA status                           | 1     |            No |
| KPI status                          | 2     |            No |
| Meta Service Status                 | 3     |            No |
| BA event                            | 4     |            No |
| KPI event                           | 5     |            No |
| BA Duration Event                   | 6     |            No |
| Dimension BA Event                  | 7     |            No |
| Dimension KPI Event                 | 8     |            No |
| Dimension BA BV Relation Event      | 9     |            No |
| Dimension BV Event                  | 10    |            No |
| Dimension Truncate Table Signal     | 11    |            No |
| Rebuild                             | 12    |            No |
| Dimension Timeperiod                | 13    |            No |
| Dimension BA Timeperiod Relation    | 14    |            No |
| Inherited Downtime                  | 17    |            No |
| Pb Inherited Downtime               | 18    |           Yes |
| Pb BA status                        | 19    |           Yes |
| Pb BA event                         | 20    |           Yes |
| Pb KPI event                        | 21    |           Yes |
| Pb Dimension BV Event               | 22    |           Yes |
| Pb Dimension BA BV Relation Event   | 23    |           Yes |
| Pb Dimension Timeperiod             | 24    |           Yes |
| Pb Dimension BA Event               | 25    |           Yes |
| Pb Dimension KPI Event              | 26    |           Yes |
| Pb KPI status                       | 27    |           Yes |
| Pb BA Duration Event                | 28    |           Yes |
| Pb Dimension BA Timeperiod Relation | 29    |           Yes |
| Pb Dimension Truncate Table Signal  | 30    |           Yes |

## Event serialization

Most events listed in each [event category](#event-categories) have a mapping used to serialize their content. In fact,
their content is directly serialized in the [packet payload data](#packet-format), one field after the other in the
order described in the [mapping tables](developer-broker-mapping.md). They are encoded according to the rules described in the
[types paragraph](#types).

## Example

Let's take an example and see how a *host check event* is sent in a
packet. Its mapping is as follows:

| Property                | Type             | Value in example
|-------------------------|------------------|---------------------------
| active\_checks\_enabled | boolean          | True.
| check\_type             | short integer    | 0 (active host check).
| host\_id                | unsigned integer | 42
| next\_check             | time             | 1365080225
| command\_line           | string           | ./my\_plugin -H 127.0.0.1

And gives the following packet with values in hexadecimal.

```
+-----------------+-----------------+-----------------------------------+
|      CRC16      |      SIZE       |                ID                 |
+========+========+========+========+========+========+========+========+
|   0A   |   23   |   00   |   28   |   00   |   01   |   00   |   09   |
+--------+--------+--------+--------+--------+--------+--------+--------+

+--------+-----------------+-----------------------------------+--------
| active_|                 |                                   |
| checks_|    check_type   |              host_id              |    =>
| enabled|                 |                                   |
+========+========+========+========+==========================+========+
|   01   |   00   |   00   |   00   |   00   |   00   |   2A   |   00   |
+--------+--------+--------+--------+--------+--------+--------+--------+

--------------------------+--------------------------------------------
                            =>  next_check                      |    =>
+========+========+========+========+========+========+========+========+
|   00   |   00   |   00   |   51   |   5D   |   78   |   A1   |   2E   |
+--------+--------+--------+--------+--------+--------+--------+--------+

-----------------------------------------------------------------------
                            => command_line =>
+========+========+========+========+========+========+========+========+
|   2F   |   6D   |   79   |   5F   |   70   |   6C   |   75   |   67   |
+--------+--------+--------+--------+--------+--------+--------+--------+

-----------------------------------------------------------------------
                            => command_line =>
+========+========+========+========+========+========+========+========+
|   69   |   6E   |   20   |   2D   |   48   |   20   |   31   |   32   |
+--------+--------+--------+--------+--------+--------+--------+--------+

-----------------------------------------------------------------------+
                            => command_line                              |
+========+========+========+========+========+========+========+========+
|   37   |   2E   |   30   |   2E   |   30   |   2E   |   31   |   00   |
+--------+--------+--------+--------+--------+--------+--------+--------+
```

## Connection establishment

BBDO is a protocol that can negotiate features. When establishing a
connection, a *version_response* packet is sent by the client. It
provides its supported BBDO protocol version and extensions. The server
replies to this message with another *version_response* packet
containing its own supported protocol version and extensions. If
protocol versions match, then the extension negotiation begins.

Currently, two extensions are supported: **TLS** and **COMPRESSION**. Right
after the **version_response** packet, each peer searches in the other
peer's extension list for the extensions it supports. When one is found, it
is enabled (i.e., it immediately starts).

### Example

Let us call the client **C** and the server *S*. The following steps are
performed sequentially.

  - **C** initiates a TCP connection with **S** and the connection is established
  - **C** sends a *version_response* packet with the following attributes
    - protocol major: 1.
    - protocol minor: 0.
    - protocol patch: 0.
    - extensions: "TLS COMPRESSION"
  - **S** sends its own **version_response** packet in reply to **C**'s
    - protocol major: 1.
    - protocol minor: 0
    - protocol patch: 0.
    - extensions: "TLS COMPRESSION"
  - **C** and **S** determine which extensions they have in common (here TLS
    and COMPRESSION)
  - if order is important, extensions are applied in the order provided
    by the server
  - TLS connection is initiated, handshake performed, etc.
  - compression connection is opened
  - now data transmitted between **C** and **S** is both encrypted and
    compressed!

## Acknowledgement

So called 'clever' clients/servers can acknowledge packets sent to them.
This is used by Centreon Broker to ensure every packet is accounted
for, and to start a retention procedure in case the other side is unresponsive.

To do so, the other side must periodically send a BBDO 'ack' packet back
on the same TCP channel. This packet has the number of packets acknowledged
by the client.

'Clever'/'Dumb' modes are configured on each TCP output, on a per Broker
basis.

## Switching versions of BBDO

BBDO must have the same version for all servers in your architecture (central server, remote servers, pollers).

> If you use BBDO v2 with this version of Centreon, you will not be able to use the **Resources Status** page.

If you want to switch versions of BBDO (either switch from v3 to v2 or from v2 to v3), follow this procedure:

1. On the central server, go to **Configuration > Pollers > Broker configuration**.
2. Select the server you want, and on the **General** tab, in **Advanced options**, select the version of BBDO you want from the **BBDO version** list. Then click **Save**.
3. Do the same with all the elements listed on the **Configuration > Pollers > Broker configuration page
4. Restart gorgoned on each server:

   ```shell
   systemctl restart gorgoned
   ```

5. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) for all servers.
6. Stop the following services:
   - On the central server and on remote servers:

     ```shell
     systemctl stop cbd centengine
     ```

   - On the pollers:

     ```shell
     systemctl stop centengine
     ```

7. Start the following services:
   - On the central server and on remote servers:

     ```shell
     systemctl start cbd centengine
     ```

   - On the pollers:

     ```shell
     systemctl start centengine
     ```

You can check in the logs which version of BBDO is active for a server:

- central broker:

  ```shell
  tail /var/log/centreon-broker/central-{broker,rrd,module}-master.log

- remote broker:

  ```shell
  tail /var/log/centreon-broker/<remote_name>-{broker,rrd,module}-master.log
  ```

- poller module:

  ```shell
  tail /var/log/centreon-broker/<poller_name>-module.log
  ```

The following line states which version is used for each server:

```shell
[2022-05-17T14:53:44.828+00:00] [bbdo] [info] BBDO: peer is using protocol version 2.0.0, and we are using version 2.0.0
```
