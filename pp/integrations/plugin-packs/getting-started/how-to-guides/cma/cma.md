---
id: cma
title: Introduction to CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PollerAgentConfiguration from '../_poller-agent-configuration.mdx';

> Note to Centreon Cloud users: The Centreon Monitoring Agent is still in its beta phase for Centreon Cloud. To get support, visit [our dedicated group on The Watch](https://thewatch.centreon.com/groups/opentelemetry-agent-beta-program-61).

## Introduction

The Centreon Monitoring Agent (CMA) is a piece of software installed on the host it monitors: it collects metrics and computes statuses, and sends them to Centreon.

The agent can execute native checks, or use Centreon plugins to execute non-native checks. Native checks are run directly by the agent (as opposed to non-native checks, which require local plugins to be installed on the host). Native checks have better performance and a better footprint (reduced CPU and memory usage).

Both native and non-native checks are defined in either the **Linux Centreon Monitoring Agent** connector or the **Windows Centreon Monitoring Agent** connector. The connectors provide the templates and the agent retrieves the configuration of these checks at regular intervals after the connection has been established.

The agent performs the checks (for non-native checks, using the local plugins) and sends the data to the poller. The part of the poller's Engine that receives data from the agent is called the OTLP receiver (OTLP means OpenTelemetry protocol).

Custom Nagios-compatible plugins can also be used with this agent.

### When do I need to use an agent?

Use the CMA agent:

* when security policies only allow outgoing flows (no checks can be performed by pollers, SNMP is not authorized).
* on sites that have no local poller.
* when you need to run a script locally on the monitored machine for security (rights and/or protocols) or performance reasons.

### How do the host and the poller interact?

Depending on the case, either the agent or the poller initiates the connection.

* In the case of an agent-initiated connection, you simply configure the poller to listen on a specific port. A poller can receive data from n agents/hosts.
* If the agent is not allowed to connect to the poller for security reasons (e.g. when the poller is in a DMZ), you can use a poller-initiated connection. You need to declare in Centreon each host that will be monitored by this agent in the **Poller/agent configuration** menu. The poller will receive data from n hosts via the agent.

<!--You can use both types of communication at the same time (for different hosts).-->

Depending on the direction in which the connection is established, the poller or host can be either client or server. The connection between the poller and the agent must be secure in production.<!-- 2 options are possible:-->

<!--* TLS: the certificate is signed by a certification authority and the Common Name (CN) is verified.
* TLS insecure: the certification authority and Common Name are not verified (self-signed certificates can be used).-->

Store the certificates in the **/etc/pki** directory of the poller. Store them where you like on the host. The diagrams below describe the certificate files to be used in each case.

<Tabs groupId="sync">
<TabItem value="Agent connects to poller, TLS secure" label="Agent connects to poller, TLS secure">

![image](../../../../../assets/integrations/plugin-packs/how-to-guides/cma/TLS_SEC_initiated-by-agent.png)

The poller will be configured the following way, using the **Agent configuration** page, in the **OTLP receiver** section:

* Public certificate (.crt)
* Private key (.key)
* CA: rarely necessary in this case, except to manage a double handshake. The TLS protocol with certificates validates the identity of the server for the client, but the "double handshake" goes further: it adds the validation of the client's identity by the server. This is useful for enhanced security but rarely necessary on the internet.

The agent will be configured the following way on the host [(for Windows using the installer or the CLI, and for Linux using the **centagent.json** file)](cma-setup.md#step-2-prepare-the-host).

The DNS name that the agent will use to connect to the poller must be identical to the Common Name of the certificate.
If this is not possible, you can add an IP **collector_host_name** mapping in the **C:\Windows\System32\drivers\etc\hosts** file (Windows) or **/etc/hosts** (Linux).

* Encryption = yes
* Trusted CA’s certificate file (can be loaded into the certificate store and not referenced in the agent's configuration)
* Certificate Common Name (rarely necessary)

</TabItem>
<TabItem value="Poller connects to agent, TLS secure" label="Poller connects to agent, TLS secure">

![image](../../../../../assets/integrations/plugin-packs/how-to-guides/cma/TLS_SEC_initiated-by-poller.png)

The poller will be configured the following way, using the **Poller/agent configuration** page.

* In the **OTLP Receiver** section, the certificate is not technically necessary but is still mandatory in the interface.

* In the **Host configuration** section:

   CA and CA Common Name (CN) are optional.

   * CA : In the case of a public certificate, the standard OS certification chain is sufficient, this parameter is not required.
   In the case of a self-signed certificate, the CA can be added to the OS in its certification chains, making this parameter unnecessary. If you do not add the CA to the OS, fill in the CA field.

   * CN : The poller uses a domain name or IP to connect to the agent. If the certificate used on the agent matches this domain/IP, then leave the field blank. If it doesn't match, fill in the field.

   Please note that the CN field in the certificate must match the name that will be used by the poller to connect to the host. For example, if you have entered **myhostname** in the CN, the poller must be able to connect to the host **myhostname** without using the IP address (a solution if **myhostname** is not in the DNS: add the IP myhostname mapping in the **/etc/hosts** file).

The agent will be configured the following way on the host [(for Windows using the installer or the CLI, and for Linux using the **centagent.json** file)](cma-setup.md#step-2-prepare-the-host).

* Encryption = yes
* Public certificate file (.crt)
* Private key file (.key)

</TabItem>
</Tabs>

#### Testing mode: unencrypted communication

In Centreon OnPrem 24.10, you can leave the connection unencrypted **for test purposes only**. In this mode, you do not need any certificates or tokens.

> Note that this connection will only last for one hour. Do not use this setting in production!

To configure this mode, select **No TLS** from the **Encryption level** list in the [**Agent configuration**](cma-setup.md#configure-polleragent-communication) window.

The agent will be configured the following way on the host:
- [for Windows, using the corresponding option in the installer or the CLI](cma-setup.md#step-2-prepare-the-host)
- for Linux, using the **centagent.json** file:

<Tabs groupId="sync">
<TabItem value="No encryption, agent connects to poller" label="No encryption, agent connects to poller">


```json
{
  "log_level":"info",
  "endpoint":"<IP POLLER>:4317",
  "encryption" : "false",
  "host":"host_1",
  "log_type":"file",
  "log_file":"/var/log/centreon-monitoring-agent/centagent.log" 
}
```

</TabItem>
<TabItem value="No encryption, poller connects to agent" label="No encryption, poller connects to agent">

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

### Generating a self-signed certificate

To generate a self-signed certificate that is valid for a year, run the following command on your poller (replace **poller_hostname** by the correct value):

```shell
openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout {key} -out {cert} -subj '/CN={poller_hostname}'
```
- \{key\} = path to the private key file
- \{cert\} = path to the public key file or certificate
- \{poller_hostname\} = DNS name of the poller

### Supported OSs

The CMA can be installed on and monitor the following OSs:

<Tabs groupId="sync">
<TabItem value="Linux" label="Linux">

* RHEL/Oracle Linux/Alma Linux 8
* RHEL/Oracle Linux/Alma Linux 9
* Debian 11
* Debian 12
* Ubuntu 22.04/24.04 LTS

</TabItem>
<TabItem value="Windows" label="Windows">

* Windows 10
* Windows 11
* Windows Server 2016
* Windows Server 2019
* Windows Server 2022

</TabItem>
</Tabs>

### Limitations

The Centreon Monitoring Agent is in Beta Phase. The following limitations need to be considered :

* The scope of supported monitoring is limited, new (native) controls will be introduced in the final version.
