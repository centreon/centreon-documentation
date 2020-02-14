---
id: applications-protocol-x509
title: X509 Certificat
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Protocol-X509
```

### Remote server

The remote server must have an X509's certificate.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                   | Value                      |
| :-------------------------------------- | :------------------------- |
| Host name                               | *Name of the host*         |
| Alias                                   | *Host description*         |
| IP                                      | *Host IP Address*          |
| Monitored from                          | *Monitoring Poller to use* |
| Host Multiple Templates                 | App-Protocol-X509-custom   |

Click on the *Save* button.

This service was automatically created for this host:

| Service         | Description                                     |
| :-------------- | :---------------------------------------------- |
| X509-Expiration | Monitor expiration date of a X509's certificate |

| Optionnal Service | Description                                                    |
| :---------------- | :------------------------------------------------------------- |
| X509-Subject      | Monitor an element of the subject name of a X509's certificate |
| X509-Issuer       | Monitor an element of the issuer name of a X509's certificate  |

### Service Macro Configuration

The following macros must be configured on service (\* means mandatory options):

| Macro      | Description                        | Default value | Example |
| :--------- | :--------------------------------- | :------------ | :------ |
| PORT\*     | Port to connect to server          | 443           | 443     |
| WARNING\*  | Warning Thresold (number of days)  | 60:           | 60:     |
| CRITICAL\* | Critical Thresold (number of days) | 30:           | 30:     |
| ISSUERNAME | Content of the issuer name         |               |         |
| OBJECTNAME | Content of the object name         |               |         |


