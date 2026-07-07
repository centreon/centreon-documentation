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

| Type                            | Value |
|---------------------------------|-------|
| Pb Service                      | 27    |
| Pb Adaptive Service             | 28    |
| Pb Service Status               | 29    |
| Pb Host                         | 30    |
| Pb Adaptive Host                | 31    |
| Pb Host Status                  | 32    |
| Pb Severity                     | 33    |
| Pb Tag                          | 34    |
| Pb Comment                      | 35    |
| Pb Downtime                     | 36    |
| Pb Custom variable              | 37    |
| Pb Custom variable status       | 38    |
| Pb Host check                   | 39    |
| Pb Service check                | 40    |
| Pb Log entry                    | 41    |
| Pb Instance Status              | 42    |
| Pb Instance                     | 44    |
| Pb Acknowledgement              | 45    |
| Pb Responsive Instance          | 46    |

### Storage

The table below lists event types available in the Storage category.
They must be mixed with the BBDO\_STORAGE\_TYPE category to get a BBDO
event ID.

| Type                            | Value |
|---------------------------------|-------|
| Pb Rebuild Message              | 7     |
| Pb Remove Graph Message         | 8     |
| Pb Metric                       | 9     |
| Pb Status                       | 10    |
| Pb Index mapping                | 11    |
| Pb Metric mapping               | 12    |

### BBDO

The table below lists event types available in the BBDO category.
They must be mixed with the BBDO\_BBDO\_TYPE category to get a BBDO
event ID.

| Type              | Value|
|----------------------|---|
| de_rebuild_graphs    | 4 |
| de_remove_graphs     | 5 |
| de_remove_poller     | 6 |
| de_welcome           | 7 |
| Pb ack               | 8 |
| Pb stop              | 9 |
| de_pb_diff_state     | 10 |
| de_pb_diff_state_ack | 11 |

### BAM

The table below lists event types available in the BAM category.
They must be mixed with the BBDO\_BAM\_TYPE category to get a
BBDO event ID.

| Type                                | Value |
|------------------------------------ | ----- |
| Pb Inherited Downtime               | 18    |
| Pb BA status                        | 19    |
| Pb BA event                         | 20    |
| Pb KPI event                        | 21    |
| Pb Dimension BV Event               | 22    |
| Pb Dimension BA BV Relation Event   | 23    |
| Pb Dimension Timeperiod             | 24    |
| Pb Dimension BA Event               | 25    |
| Pb Dimension KPI Event              | 26    |
| Pb KPI status                       | 27    |
| Pb BA Duration Event                | 28    |
| Pb Dimension BA Timeperiod Relation | 29    |
| Pb Dimension Truncate Table Signal  | 30    |

## Connection establishment

BBDO is a protocol that can negotiate features. When establishing a
connection, a **welcome** message is sent by the client. It
provides its supported BBDO protocol version and extensions. The server
replies to this message with another **welcome** packet
containing its own supported protocol version and extensions. If
protocol versions match, then the extension negotiation begins.

Currently, two extensions are supported: **TLS** and **COMPRESSION**. Right
after the **welcome** packet, each peer searches in the other
peer's extension list for the extensions it supports. When one is found, it
is enabled (i.e., it immediately starts).

### Example

Let us call the client **C** and the server *S*. The following steps are
performed sequentially.

  - **C** initiates a TCP connection with **S** and the connection is established
  - **C** sends a **welcome** packet with the following attributes
    - protocol major: 1
    - protocol minor: 0
    - protocol patch: 0
    - extensions: "TLS COMPRESSION"
  - **S** sends its own **welcome** packet in reply to **C**'s
    - protocol major: 1
    - protocol minor: 0
    - protocol patch: 0
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
