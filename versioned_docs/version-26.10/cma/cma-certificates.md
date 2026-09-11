---
id: cma-certificates
title: Configuring certificates
description: "Configure TLS certificates for secure CMA agent-poller communication"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## TLS

### How it works

The TLS (1.3) connection is negotiated by the client (poller or agent, depending on the direction) and requires certificates.
Depending on the connection direction, the agent/the poller checks that the IP/DNS used to reach the server strictly matches the information in the certificate. If this is not the case, the connection is not allowed.
The verification is performed on the **alt_names** block of the certificate, which may contain several DNS, IP, or CN entries.

### Certificate files

Supported formats are :

- public certificate file, CA or wildcard: .crt/.cert/.cer
- private key file: .key

Certificate files stored on the poller can be put in any directory (except forbidden).

#### Forbidden directories

```shell
/tmp 
/root 
/proc 
/mnt 
/run 
/snap 
/sys 
/boot 
/etc (only /etc/pki/** is allowed)
/.*
```

#### Permissions

Certificate files must have the following permissions:

```shell
chmod 644 /path/to/certificate/agent.crt
chmod 644 /path/to/certificate/agent.key
```

> Caution: do not apply these permissions to the entire /etc/pki/ directory, as this may cause a global failure of the poller.

Certificate files stored on the host can be stored in the directory of your choice.

These files can also be saved directly in the certificate store (agent-inititated connection).
In this case, it is not necessary to enter them in the configuration made on the host (**Host configuration** column in the table below).

> **Windows certificate store**: on Windows, CMA reads CA certificates from the **Local Computer** Windows certificate store. This is the standard system-wide trust store, readable by all processes on the machine, but requires administrator privileges to write to it. The correct location for root CA and intermediate CA certificates is: **Local Computer > Trusted Root Certification Authorities**.

### Summary of possible configurations

<Tabs groupId="cmaConnect" queryString>
<TabItem value="The agent connects to the poller" label="The agent connects to the poller">

When connecting to the poller, the agent verifies that the IP/DNS entered in the **Poller endpoint** parameter of the agent configuration strictly matches the information in the certificate (SAN or CN).
If this is not the case, the connection is not allowed.

| Use case      															  | File(s) on the poller | File(s) on the host (if not loaded in the certificate store) | Poller configuration (interface) | Host machine configuration   |
| -----------      															  | -----------                  | -----------           |-----------							   | -----------				|
| Certificate signed by a CA           	 | Public certificate and private key files                        | CA file                       | In the **OTLP receiver** section:<ul><li>**Public certificate**: path to the public certificate (example: '/etc'/pki'/certificate.crt)</li><li>**Private key**: path to the private key (example: '/etc'/pki'/certificate.key)</li><li>**CA**: empty</li></ul> | <ul><li>**Poller endpoint**: IP/DNS of the poller</li><li>**Private key file/private_key**: empty</li><li>**Certificate file**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: path to the CA</li><li>**Certificate Common Name/ca_name**: empty</li></ul>	|
| Self-signed certificate         	 | Public certificate and private key files                         | Public certificate file                       | In the **OTLP receiver** section:<ul><li>**Public certificate**: path to the public certificate (example: '/etc'/pki'/certificate.crt)</li><li>**Private key**: path to the private key (example: '/etc'/pki'/certificate.key)</li><li>**CA**: empty, except when a double handshake is needed</li></ul> | <ul><li>**Poller endpoint**: IP/DNS of the poller</li><li>**Private Key file/private_key**: empty</li><li>**Certificate file/public_certificate**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: path to the public certificate</li><li>**Certificate Common Name/ca_name**: empty</li></ul> |
| Wildcard certificate    | Wildcard and private key files                         | Wildcard file              | In the **OTLP receiver** section:<ul><li>**Public certificate**: Wildcard certificate file</li><li>**Private key**: path to the private key</li><li>**CA**: empty</li></ul> | <ul><li>**Private Key file/private_key**: empty</li><li>**Certificate file/public_cert**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: path to the wildcard certificate</li><li>**Certificate Common Name/ca_name**: empty</li></ul>							|
| Public certificate (managed service, e.g. central Centreon Cloud poller)        | None                        | None                 | In the **OTLP receiver** section:<ul><li>**Public certificate**: empty</li><li>**Private key**: empty</li><li>**CA**: empty</li></ul> | <ul><li>**Poller endpoint**: IP/DNS of the load balancer bearing the public certificate</li><li>**Private Key file/private_key**: empty</li><li>**Certificate file/public_cert**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name :** empty</li></ul>							|
| Public certificate (key files)        | Public certificate and private key files                         | None                 | In the **OTLP receiver** section:<ul><li>**Public certificate**: path to the public certificate (example: '/etc'/pki'/certificate.crt)</li><li>**Private key**: path to the private key (example: '/etc'/pki'/certificate.key)</li><li>**CA**: empty</li></ul> | <ul><li>**Poller endpoint**: IP/DNS of the poller</li><li>**Private Key file/private_key**: empty</li><li>**Certificate file/public_cert**: empty</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name**: empty</li></ul>							|

</TabItem>
<TabItem value="The poller connects to the agent" label="The poller connects to the agent">

When connecting to the agent, the poller checks that the IP/DNS entered for the host (in the agent configuration) strictly matches the information in the certificate (SAN or CN).
If this is not the case, the connection to this host is not allowed.

| Use case      															  | File(s) on the poller | File(s) on the host | Poller configuration (interface) | Host machine configuration  |
| -----------      															  | -----------                  | -----------           |-----------								       | -----------							|
| Certificate signed by a CA            	 | CA file                   | Public certificate and private key files                      | In the **Host configurations** section: <ul><li>**CA:** path to the CA</li><li>**CA common name (CN):** empty</li></ul>	 | <ul><li>**Private Key file/private_key**: path to the private key</li><li>**Certificate file/public_cert**: path to the public certificate</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name**: empty</li></ul>	|
| Self-signed certificate  	 | Public certificate file                       | Public certificate and private key files    | In the **Host configurations** section:<ul><li>**CA**: path to the public certificate</li><li>**CA Common Name (CN)**: empty</li></ul> | <ul><li>**Private Key file/private_key**: path to the private key</li><li>**Certificate file/public_cert**: path to the public certificate</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name**: empty</li></ul>	|
| Wildcard certificate      | Wildcard file                       | Wildcard and private key files   | In the **Host configurations** section:<ul><li>**CA**: path to the wildcard certificate</li><li>**Nom commun CA (CN)**: empty</li></ul>    | <ul><li>**Private Key file/private_key**: path to the private key</li><li>**Certificate file/public_cert**: path to the wildcard certificate</li><li>**Trusted CA's certificate file/ca_certificate**: empty</li><li>**Certificate Common Name/ca_name**: empty</li></ul>							|

</TabItem>
</Tabs>

## Insecure TLS

### How it works

Some configurations require a more flexible approach to establishing the connection.

In TLS, the client (agent or poller) verifies that the IP/DNS used to reach the server strictly matches the information in the certificate.
If this is not the case, the connection is refused.
The verification is performed on the **alt_names** block of the certificate, which may contain multiple DNS, IP, or CN entries.

It may sometimes be necessary to accept the connection, even when this correspondence is not verified.

For example, in the case of an MSP, which mutualize pollers for its customers.
The hosts within the customer base do not know the DNS of the pollers and must use the IP, which will not necessarily match the information in the certificate.
This makes particular sense in cases where the same certificate must be used on multiple pollers, and security restrictions do not allow the use of a wildcard.

The unsecured TLS encryption mode addresses this use case.

In unsecured TLS, the client (agent/poller) first checks the client's “Common Name CA” field.
* If the “Common Name CA” field is filled in, its value is compared with the certificate information, which must match exactly.
* If the “Common Name CA” field is empty, the verification is based on the IP/DNS used to reach the server, as in TLS mode.

If no match is found, the connection is denied.
The verification is performed on the **subject** and **alt_names** blocks of the certificate, which may contain multiple DNS, IP, or CN entries.


### Certificate files

See [dedicated section for TLS](#certificate-files), prerequisites are the same.

### Summary of possible configurations

The configuration is similar to [the one specified for TLS](#summary-of-possible-configurations).

The difference lies in the use of the “Common Name CA” field on the client side.

<Tabs groupId="cmaConnect" queryString>
<TabItem value="The agent connects to the poller" label="The agent connects to the poller">

The **Certificate Common Name/ca_name** field will contain the value (DNS, IP, or CN) specified in the certificate.

</TabItem>
<TabItem value="The poller connects to the agent" label="The poller connects to the agent">

In the **Host Configurations** section, the **Common Name CA (CN)** field will contain the value (DNS, IP, or CN) specified in the certificate.

</TabItem>
</Tabs>

### How to generate a self-signed certificate (optional)

If you do not have a certificate, you can generate a self-signed one, which can be used by all your collectors and agents. 
To generate a self-signed certificate that is valid for one year, run the following command on your poller or host:

```shell
openssl req -new -subj '/CN={server_hostname}' \
                 -addext "subjectAltName = DNS:{alt_server_DNS}, IP:{alt_server_IP}" \
                 -days 365 -nodes -x509 \
                 -newkey rsa:2048 -keyout {key} -out {cert}
```

- \{key\} = path to the private key file
- \{cert\} = path to the public certificate file
- \{server_hostname\} = DNS name of the server and/or use \{alt_poller_DNS\} and/or use \{alt_poller_IP\}
In TLS encryption mode, the DNS/IP of the server used by the client must correspond to a CN or SAN (altName) entry in the certificate (\{server_hostname\}).
The line -subj '/CN=\{server_hostname\}' \ is optional if SANs are defined.
In unsecured TLS encryption mode, the server's DNS/IP may differ from the certificate information. In this case, you will need to enter the value to be used in “Common Name CA” in the client configuration.

Certificate files stored on the poller must be stored in **/etc/pki/**, either at the root or in a subdirectory.
They must have the following permissions:

```shell
chmod 644 /etc/pki/agent.crt
chmod 644 /etc/pki/agent.key
```
> Caution: do not apply these permissions to the entire /etc/pki/ directory, as this may cause a global failure of the poller.

<Tabs groupId="cmaConnect" queryString>
<TabItem value="The agent connects to the poller" label="The agent connects to the poller">

**\{server_hostname\}** must match the DNS/IP used in **Poller endpoint** (Installer) / **endpoint* (json), in the agent configuration, on the host.

</TabItem>
<TabItem value="The poller connects to the agent" label="The poller connects to the agent">

**\{server_hostname\}** must match the DNS/IP used in the **Host Configurations > Host** field of the agent configuration in the interface.

</TabItem>
</Tabs>

## Testing mode: unencrypted communication

You can leave the connection unencrypted **for test purposes only**. In this mode, you do not need any certificates but a token remains mandatory.

> Note that this connection will only last for one hour. Do not use this setting in production!

To configure this mode, select **No TLS** from the **Encryption level** list in the [**Agent configuration** window](cma-setup.md#configure-polleragent-communication).

The agent will be configured the following way on the host:
- [for Windows, using the corresponding option in the installer or the CLI](cma-setup.md#step-3-prepare-the-host)
- for Linux, using the **centagent.json** file:

<Tabs groupId="cmaConnect" queryString>
<TabItem value="The agent connects to the poller" label="The agent connects to the poller">


```json
{
  "log_level":"info",
  "endpoint":"<POLLER IP/DNS>:4317",
  "encryption" : "false",
  "host":"host_1",
  "log_type":"file",
  "log_file":"/var/log/centreon-monitoring-agent/centagent.log" 
}
```

</TabItem>
<TabItem value="The poller connects to the agent" label="The poller connects to the agent">

```json
{
  "log_level":"info",
  "endpoint":"0.0.0.0:4317",
  "encryption" : "false",
  "host":"host_1",
  "log_type":"file",
  "log_file":"/var/log/centreon-monitoring-agent/centagent.log" ,
  "reversed_grpc_streaming":true
}
```

</TabItem>
</Tabs>
