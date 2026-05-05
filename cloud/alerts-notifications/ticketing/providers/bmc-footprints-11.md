---
id: bmc-footprints-11
title: BMC Footprints 11
---

## Features information

| open ticket | close ticket (from Centreon to BMC Footprints) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✘ | ✘ |

## Prerequisites

### Network Flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | BMC Footprints | TCP/443 (https) or TCP/80 (http) |

### Account

You need the following information

- Username
- Password

The aforementioned account must be able to at least be able to open a ticket through the SOAP API action **MRWebServices**

Some tests commands that you can run from your Centreon central server are available in the [Test commands chapter](#test-commands)

## Sent data

This open ticket connector can send the following information when opening a ticket

- Project ID
- Priority
- Assignee
- Status

## Test commands

The below Curl commands must be run from your central server. You need to replace everything between `<>` for example `<footprints_address>` may become **my_footprints.local**

In the --data part of the curl command, all `<UPPER CASE>` information must be replaced by their approriate values (therefore, `<TITLE>` must be replaced by "Test ticket" )

### Open a ticket

Keep in mind that the data in the below command is just an example and your footprints server may ask you to add mandatory data

```bash
curl --location 'https://<footprints_address>/<footprints_action>' \
--header 'text/xml;charset=UTF-8' \
--header 'SOAPAction: https://<footprints_address>/<footprints_action>#MRWebServices__createIssue' \
--data '<?xml version="1.0" encoding="UTF-8"?>
          <soap:Envelope
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"
              xmlns:xsd="http://www.w3.org/2001/XMLSchema"
              soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"
              xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
          <soap:Body>
              <MRWebServices__createIssue
                  xmlns="https://<footprints_address>/<footprints_action>">
                  <c-gensym3 xsi:type="xsd:string"><USERNAME></c-gensym3>
        <c-gensym5 xsi:type="xsd:string"><![CDATA[<PASSWORD>]]></c-gensym5>
        <c-gensym7 xsi:type="xsd:string"/>
        <c-gensym9>
            <assignees
                soapenc:arrayType="xsd:string[1]" xsi:type="soapenc:Array">
                <item xsi:type="xsd:string"><ASSIGNEE></item>
            </assignees>
            <projfields><<PROJECT_NAME> xsi:type="xsd:string"><PROJECT_VALUE></<PROJECT_NAME></projfields>
          
            <status xsi:type="xsd:string"><STATUS></status>
            <projectID xsi:type="xsd:int"><PROJECT_ID></projectID>
            <title xsi:type="xsd:string"><![CDATA[<TITLE>]]></title>
            <description xsi:type="xsd:string"><![CDATA[<DESCRIPTION>]]></description>
        </c-gensym9>
    </MRWebServices__createIssue>
</soap:Body>
</soap:Envelope>
'
```
