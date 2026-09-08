---
id: ot-serena-itsm
title: Serena ITSM
---

The Serena ITSM Open Tickets provider uses the Serena ITSM server to open incidents about your monitoring alerts.

## Feature information

| Open ticket | Close ticket (from Centreon to Serena ITSM) | Handle custom fields |
| -- | -- | -- |
| ✓ | ✘ | ✘ |

## Prerequisites

### Network flow

| Source | Destination | Protocol/Port |
| -- | -- | -- |
| Centreon central server | Serena ITSM | TCP/443 (https) or TCP/80 (http) |

### Account

You need the following information:

- Username
- Password

The aforementioned account must at least be able to open a ticket through the SOAP API endpoint **gsoap/gsoap_ssl.dll?XXXXXX**, where **XXXXXX** is the namespace that will be used.

Some test commands that you can run from your Centreon central server are available in the [Test commands](#test-commands) section.

## Data sent

This open ticket connector can send the following information when opening a ticket:

- Project ID
- Category
- Sub Category
- Sub Category Details

## Test commands

The curl commands listed below must be run from your central server. You need to replace all elements between `<>`. For example `<URL>` may be replaced with `http://127.0.0.1//gsoap/gsoap_ssl.dll?XXXXXX`.

In the **--data part** of the curl command, all `<UPPER CASE>` information must be replaced with their appropriate values (therefore, `<TITLE>` must be replaced by "Test ticket").

### Open a ticket

Keep in mind that the data in the command below is just an example and your footprints server may ask you to add mandatory data.

```bash
curl --location 'https://<URL>' \
--header 'text/xml;charset=UTF-8' \
--header 'SOAPAction: ae:CreatePrimaryItem' \
--data '<?xml version="1.0"?>
<SOAP-ENV:Envelope
  xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
  SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
<SOAP-ENV:Body>
<ae:CreatePrimaryItem xmlns:ae="urn:XXXXXXX">
    <ae:auth>
        <ae:userId><USERNAME></ae:userId>
        <ae:password><![CDATA[<PASSWORD>]]></ae:password>
        <ae:hostname></ae:hostname>
        <ae:loginAsUserId></ae:loginAsUserId>
    </ae:auth>
    <ae:project>
        <ae:displayName></ae:displayName>
        <ae:id><PROJECT_ID></ae:id>
        <ae:uuid></ae:uuid>
        <ae:fullyQualifiedName></ae:fullyQualifiedName>
    </ae:project>
    <ae:parentItem></ae:parentItem>
    <ae:item>
        <ae:id>
                <ae:displayName></ae:displayName>
                <ae:id></ae:id>
                <ae:uuid></ae:uuid>
                <ae:tableId></ae:tableId>
                <ae:tableIdItemId></ae:tableIdItemId>
                <ae:issueId></ae:issueId>
        </ae:id>
        <ae:itemType></ae:itemType>
        <ae:project>
                <ae:displayName></ae:displayName>
                <ae:id></ae:id>
                <ae:uuid></ae:uuid>
                <ae:fullyQualifiedName></ae:fullyQualifiedName>
        </ae:project>
        <ae:title><![CDATA[<TITLE>]]></ae:title>
        <ae:description><![CDATA[<TICKET CONTENT>]]></ae:description>
        <ae:createdBy>
                <ae:displayName></ae:displayName>
                <ae:id></ae:id>
                <ae:uuid></ae:uuid>
                <ae:loginId></ae:loginId>
        </ae:createdBy>
        <ae:createDate></ae:createDate>
        <ae:modifiedBy>
                <ae:displayName></ae:displayName>
                <ae:id></ae:id>
                <ae:uuid></ae:uuid>
                <ae:loginId></ae:loginId>
        </ae:modifiedBy>
        <ae:modifiedDate></ae:modifiedDate>
        <ae:activeInactive></ae:activeInactive>
        <ae:state>
                <ae:displayName></ae:displayName>
                <ae:id></ae:id>
                <ae:uuid></ae:uuid>
                <ae:isClosed></ae:isClosed>
        </ae:state>
        <ae:owner>
                <ae:displayName></ae:displayName>
                <ae:id></ae:id>
                <ae:uuid></ae:uuid>
                <ae:loginId></ae:loginId>
        </ae:owner>
        <ae:url/>
        <ae:subtasks/>

    </ae:item>
</ae:CreatePrimaryItem>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
'
```
