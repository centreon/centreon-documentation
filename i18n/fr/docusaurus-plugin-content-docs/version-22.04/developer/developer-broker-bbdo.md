---
id: developer-broker-bbdo
title: The BBDO protocol
---

The BBDO protocol has been created to be the default protocol of Centreon
Broker. It is lightweight on the wire and easy to decode. It is especially
designed for monitoring resources with Centreon Broker.

## Introduction

BBDO stands for Broker Binary Data Object. BBDO is designed to transfer
"data packets" from a node to another. These "data packets" are most of
the time monitoring information provided by the monitoring engine (eg.
Centreon Engine or Nagios). It uses mostly raw binary values which
allows it to consume very few memory.

With Broker 22.04.0, we introduce a new version of BBDO. It is based on
[Google Protobuf 3](https://developers.google.com/protocol-buffers). The new
protocol stays compatible with the previous one but introduces
new events. For example, PbService and PbServiceStatus events are
sent instead of Service and ServiceStatus events. Configured with BBDO 3, Broker
still understands Service and ServiceStatus events but by default it should
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

The packets format of Centreon Broker introduces only 16 bytes of header
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

Here, the only difference between BBDO 3 and previous versions is the data
content. In BBDO 3, this part is a serialized Protobuf object whereas in
previous versions it is data serialized as explained in the Types section.

### Packet ID

As seen in the previous paragraph, every packet holds an ID that expresses
by itself how data is encoded. This ID can be splitted in two 16-bits
components. The 16 most significant bits are the event category and the
16 least significant bits the event type.

The event categories serialize events properties one after the other, so
order is very important to not loose track when unserializing events.

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
have to be mixed with the BBDO_NEB_TYPE category to get a BBDO event ID.


| Type                   | Value | Uses Protobuf |
|------------------------|-------|---------------|
| Acknowledgement        | 1     |            No |
| Comment                | 2     |            No |
| Custom variable        | 3     |            No |
| Custom variable status | 4     |            No |
| Downtime               | 5     |            No |
| Event handler          | 6     |            No |
| Flapping status        | 7     |            No |
| Host check             | 8     |            No |
| Host dependency        | 9     |            No |
| Host group             | 10    |            No |
| Host group member      | 11    |            No |
| Host                   | 12    |            No |
| Host parent            | 13    |            No |
| Host status            | 14    |            No |
| Instance               | 15    |            No |
| Instance status        | 16    |            No |
| Log entry              | 17    |            No |
| Module                 | 18    |            No |
| Service check          | 19    |            No |
| Service dependency     | 20    |            No |
| Service group          | 21    |            No |
| Service group member   | 22    |            No |
| Service                | 23    |            No |
| Service status         | 24    |            No |
| Instance Configuration | 25    |            No |
| Responsive Instance    | 26    |            No |
| Pb Service             | 27    |           Yes |
| Pb Adaptive Service    | 28    |           Yes |
| Pb Service Status      | 29    |           Yes |
| Pb Host                | 30    |           Yes |
| Pb Adaptive Host       | 31    |           Yes |
| Pb Host Status         | 32    |           Yes |
| Pb Severity            | 33    |           Yes |
| Pb Tag                 | 34    |           Yes |

### Storage

The table below lists event types available in the Storage category.
They have to be mixed with the BBDO\_STORAGE\_TYPE category to get a BBDO
event ID.

| Type                    | Value | Uses Protobuf |
|-------------------------|-------|---------------|
| metric                  | 1     |            No |
| rebuild                 | 2     |            No |
| remove\_graph           | 3     |            No |
| status                  | 4     |            No |
| index mapping           | 5     |            No |
| metric mapping          | 6     |            No |
| Pb Rebuild Message      | 7     |           Yes |
| Pb Remove Graph Message | 8     |           Yes |

### BBDO

The table below lists event types available in the BBDO category.
They have to be mixed with the BBDO_BBDO_TYPE category to get a BBDO
event ID.


| Type              | Value
|-------------------|------
| version\_response | 1
| ack               | 2

### BAM

The table below lists event types available in the BAM category.
They have to be mixed with the BBDO_BAM_TYPE category to get a
BBDO event ID.

| Type                              | Value
|-----------------------------------|------
| ba_status                         | 1
| kpi_status                        | 2
| meta_service_status               | 3
| ba_event                          | 4
| kpi_event                         | 5
| ba_duration_event                 | 6
| dimension_ba_event                | 7
| dimension_kpi_event               | 8
| dimension_ba_bv_relation_event    | 9
| dimension_bv_event                | 10
| dimension_truncate_table_signal   | 11
| rebuild                           | 12
| dimension_timeperiod              | 13
| dimension_ba_timeperiod_relation  | 14
| dimension_timeperiod_exception    | 15
| dimension_timeperiod_exclusion    | 16
| inherited_downtime                | 17

### Dumper

The table below lists event types available in the Dumper category.
They have to be mixed with the BBDO_DUMPER_TYPE category to get a
BBDO event ID.

| Type                              | Value
|-----------------------------------|------
| Dump                              | 1
| Timestamp cache                   | 2
| Remove                            | 3
| Reload                            | 4
| Db dump                           | 5
| Db dump committed                 | 6
| Entries Ba                        | 7
| Entries Ba type                   | 8
| Entries boolean                   | 9
| Entries host                      | 10
| Entries kpi                       | 11
| Entries organization              | 12
| Entries service                   | 13
| Directory dump                    | 14
| Directory dump committed          | 15

### Extcmd

The table below lists event types available in the Extcmd category.
They have to be mixed with the BBDO_EXTCMD_TYPE category to get a
BBDO event ID.

| Type            | Value
|-----------------|-------
| Command request | 1
| Command result  | 2

## Event serialization

Most events listed in each [event category](#event-categories) have a mapping used to serialize their content. Indeed
their content is directly serialized in the [packet payload data](#packet-format), one field after the other in the
order described in the [mapping tables](developer-broker-mapping.md). They are encoded following rules described in the
[types paragraph](#types).

## Example

Let's take an example and see how an *host check event* gets sent in a
packet. Its mapping is as follow :

| Property              | Type             | Value in example
|-----------------------|------------------|--------------------------
| active_checks_enabled | boolean          | True.
| check_type            | short integer    | 0 (active host check).
| host_id               | unsigned integer | 42
| next_check            | time             | 1365080225
| command_line          | string           | ./my_plugin -H 127.0.0.1

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

BBDO is a protocol which can negotiate features. When establishing a
connection, a *version_response* packet is sent by the client. It
provides its supported BBDO protocol version and extensions. The server
replies to this message with another *version_response* packet
containing its own supported protocol version and extensions. If
protocol versions match, then starts the extensions negotiation.

Currently two extensions are supported : **TLS** and **COMPRESSION**. Right
after the **version_response** packet, each peer searches in the other
peer's extension list the extensions it supports. When one is found, it
is enabled (ie. it immediately starts).

### Example

Let's have **C** the client and *S* the server. The following steps are
performed sequentially.

  - **C** initiates a TCP connection with **S** and connection gets established
  - **C** sends a *version_response* packet with the following attributes
    - protocol major : 1
    - protocol minor : 0
    - protocol patch : 0
    - extensions : "TLS COMPRESSION"
  - **S** sends its own **version_response** packet in reply to **C**'s
    - protocol major : 1
    - protocol minor : 0
    - protocol patch : 0
    - extensions : "TLS COMPRESSION"
  - **C** and **S** determine which extensions they have in common (here TLS
    and COMPRESSION)
  - if order is important, extensions are applied in the order provided
    by the server
  - TLS connection is initiated, handshake performed, ...
  - compression connection is opened
  - now data transmitted between **C** and **S** is both encrypted and
    compressed !

## Acknowledgement

So called 'clever' clients/servers can acknowledge packets sent their ways.
This is used by Centreon Broker to insure every packet is accounted
for, and to start retention procedure in case the other side is unresponsive.

To do so, the other side must periodically send a BBDO 'ack' packet back
the same TCP channel. This packet has the number of packet acknowledged
by the client.

'Clever'/'Dumb' modes are configured on each TCP output, on a per Broker
basis.
