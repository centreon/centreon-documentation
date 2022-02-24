---
id: applications-hashicorp-vault-restapi
title: HashiCorp Vault Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

Vault is a tool for securely accessing secrets. A secret is anything that you want to tightly control access to, such as API keys, passwords
or certificates. Vault provides a unified interface to any secret, while providing tight access control and recording a detailed audit log.

The Plugin Pack Centreon HashiCorp Vault relies on the Vault Rest API to collect status and metrics related to the Vault service.

## Pack Assets

### Monitored Objects

* HashiCorp Vault instances
    * Health
    * Raft-Storage

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Status Name | Description                       |
|:------------|:----------------------------------|
| seal-status | Seal status of the node           |
| init-status | Initialization status of the node |

</TabItem>
<TabItem value="Raft-Storage" label="Raft-Storage">

| Metric Name                                        | Description                                | Unit |
|:---------------------------------------------------|:-------------------------------------------|:-----|
| vault.raftstorage.committime.seconds               | Average time to commit data to the Storage | s    |
| *db_name*#vault.raftstorage.spilltime.seconds      | Average spill time                         | s    |
| *db_name*#vault.raftstorage.rebalance_time.seconds | Average rebalance_time                     | s    |
| *db_name*#vault.raftstorage.write_time.seconds     | Average write time                         | s    |

</TabItem>
</Tabs>

## Prerequisites

The Centreon Poller must be allowed to connect and to authenticate against the HashiCorp Vault resource.
The credentials used to authenticate must be part of a Vault policy allowing to read the `/sys/` path.

The following authentication methods are supported:
* token (default method)
* userpass
* azure
* cert
* github
* ldap
* okta
* radius

Depending of the chosen method, you will have to set the related parts of information in the *EXTRAOPTIONS* Host Macro. Please refer to the Plugin
help for more details (by adding the ```--help``` parameter when executing the command).
All the options needed for each authentication method can be found on the official Vault documentation
https://www.vaultproject.io/api-docs/auth .

## Setup 

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor HashiCorp Vault Rest API resources:

```bash
yum install centreon-plugin-Applications-HashiCorp-Vault-Restapi
```

2. On the Centreon Web interface, install the *HashiCorp Vault Rest API* Centreon Pack on the "Configuration > Plugin Packs > Manager" page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor HashiCorp Vault Rest API resources:

```bash
yum install centreon-plugin-Applications-HashiCorp-Vault-Restapi
```

2. Install the Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-hashicorp-vault-restapi.noarch
```

3. On the Centreon Web interface, install the *HashiCorp Vault Rest API* Centreon Pack on the "Configuration > Plugin Packs > Manager" page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the IP address corresponding to the HashiCorp Vault instance.

* Select the *App-HashiCorp-Vault-Restapi-Custom* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Nom                | Description                                                        |
|:----------|:-------------------|:-------------------------------------------------------------------|
| X         | VAULTAPIPORT       | Vault API port (default: '8200')                                   |
| X         | VAULTAPIPROTOCOL   | Vault API protocol (default: 'http')                               |
| X         | VAULTAPIVERSION    | Vault API version (default: 'v1')                                  |
| X         | VAULTAPIAUTHMETHOD | The method used to authenticate against the API (default: 'token') |
|           | VAULTTOKEN         | The Vault token used to authenticate (if 'token' method is used)   |
|           | EXTRAOPTIONS       | Associated Resource Group if resource name is used                 |

## How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* 
user account and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_hashicorp_vault_restapi.pl \
    --plugin=apps::hashicorp::vault::restapi::plugin \
    --mode=health \
    --hostname=10.0.0.1 \
    --api-port='8200' \
    --api-proto='http' \
    --auth-method='token' \
    --vault-token='s.1234567890abcd' \
    --critical-seal-status='%{sealed} ne "unsealed"' \ 
    --critical-init-status='%{init} ne "initialized"'
```

Expected command output is shown below:

```bash
OK: Server vault-cluster-12345abc seal status : unsealed, init status : initialized |
```

The command above check the *health* of a HashiCorp Vault instance reachable at *10.0.0.1* (```--plugin=cloud::azure::database::cosmosdb::plugin
--mode=cpu --custommode=api```). To reach the API of the instance, the *HTTP* protocol is used on the port *8200* (```-api-port='8200' --api-proto='http'```).

In this example, we use the *token* authentication method with the related proper Vault token (```--auth-method='token' --vault-token='s.1234567890abcd'```).

This command would trigger a CRITICAL alarm:
* if the seal status of the instance differs from 'unsealed' (```--critical-seal-status='%{sealed} ne "unsealed"'```)
* if the instance returns a initialization status different from 'initialized' (```--critical-init-status='%{init} ne "initialized"```)

All the available options for a given mode can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hashicorp_vault_restapi.pl \
    --plugin=apps::hashicorp::vault::restapi::plugin \
    --mode=health \
    --help
```

### Troubleshooting

Please find all the troubleshooting documentation for the API-based Plugins in the [dedicated chapter](../tutorials/troubleshooting-plugins#http-and-api-checks)
of the Centreon documentation.
