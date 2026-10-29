---
id: cma-setup
title: Setting up the agent's environment
description: "Set up and configure Centreon Monitoring Agent on pollers and hosts"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PollerAgentConfiguration from './_poller-agent-configuration.mdx';

## Using the ready-to-run installation command

> This procedure only applies to the "Agent-initiated connection" mode. For Poller-initiated mode, either adapt the procedure to the correct parameters, or use the [manual installation procedure](cma-setup-manual.md).

1. Go to **Configuration > Pollers > Agent configurations**, then click **Command**.
2. In the window that appears, fill in the details corresponding to your environment (poller that will monitor your hosts, type of OS for your hosts).
3. Copy the command displayed in the window, then run it on each host you want to monitor with the agent.
   The CMA agent is deployed, and the connection between CMA and the poller is established in TLS.

> Running this command requires the host to have internet access.

### How are certificates managed?

When a poller is created, certificates are managed automatically:
* The CA certificate is generated and stored in **/etc/pki/centreon-engine** (TTL of 10 years).
* A private/public key pair is generated from the CA files (low TTL, renewed automatically every 30 days). This pair is stored in the poller's memory, and its fingerprint is stored in the database.
* Once deployed, CMA will use this fingerprint to retrieve and validate the public key and establish the TLS connection with the poller.

If you want to manually configure certificates, the agent configuration, and/or tokens, refer to the [dedicated documentation](cma-setup-manual.md).

### What happens on the host at the first connection?

When the agent connects to the poller and a **fingerprint** is set in its configuration (which is the case with the ready-to-run installation command), the agent uses a trust-on-first-use mechanism:

1. The agent first tries to establish a TLS connection with its current configuration. If this works, nothing else happens.
2. Otherwise, the agent retrieves the poller's CA certificate over a TLS connection that does not verify the CA.
3. The agent computes the SHA-256 fingerprint of this CA and compares it with the configured fingerprint. If they do not match, the CA is rejected and the connection is not established.
4. If they match, the agent adds the CA to the host's trust configuration so that it can be used for all future connections. The message **[SECURITY] CA bootstrap succeeded from fingerprint** appears in the [agent logs](cma-troubleshooting.md#location-of-poller-and-agent-logs).

Where the CA is stored depends on the host's operating system:

<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">

The CA is added to the system-wide **Local Computer > Trusted Root Certification Authorities** certificate store. This store is not limited to CMA: all applications on the host that rely on the Windows certificate store trust this CA.

If the CA cannot be added to the store, the agent saves it in the **cma-ca.pem** file in the agent's installation directory, and saves the path of this file in the **ca_certificate** value of the agent's registry key (**HKEY_LOCAL_MACHINE\SOFTWARE\Centreon\CentreonMonitoringAgent** by default).

</TabItem>
<TabItem value="Linux" label="Linux">

The CA is not added to the system trust store. It is saved in the **/etc/centreon-monitoring-agent/cma-ca.crt** file, which belongs to the **centreon-monitoring-agent** user, and its path is saved in the **ca_certificate** parameter of the **/etc/centreon-monitoring-agent/centagent.json** file. Only the agent uses this CA.

</TabItem>
</Tabs>

The poller's CA certificate is valid for 10 years. The host trusts this CA until it expires or until you remove it.

> **Security implications**: on Windows, the host trusts any certificate signed by the poller's CA, for any application and any server, not only for CMA. Anyone who obtains the CA's private key (stored on the poller in **/etc/pki/centreon-engine**) could issue certificates that the host would trust. Restrict access to this directory on the poller, and only use fingerprints retrieved from your Centreon interface.

#### Checking the CA installed on the host

<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">

Run the following command in PowerShell as an administrator, replacing **&lt;FINGERPRINT&gt;** with the fingerprint used by the agent (**fingerprint** value of the agent's registry key):

```powershell
Get-ChildItem Cert:\LocalMachine\Root | Where-Object {
  [Convert]::ToBase64String([Security.Cryptography.SHA256]::Create().ComputeHash($_.RawData)) -eq '<FINGERPRINT>'
} | Format-List Subject, NotAfter, Thumbprint
```

If the command returns a certificate, the poller's CA is installed in the store. You can also open the store with the **certlm.msc** console.

</TabItem>
<TabItem value="Linux" label="Linux">

Display the CA's details and compute its fingerprint:

```shell
openssl x509 -in /etc/centreon-monitoring-agent/cma-ca.crt -noout -subject -enddate
openssl x509 -in /etc/centreon-monitoring-agent/cma-ca.crt -outform DER | openssl dgst -sha256 -binary | base64
```

The fingerprint must match the **fingerprint** parameter in the **/etc/centreon-monitoring-agent/centagent.json** file.

</TabItem>
</Tabs>

#### Removing the CA from the host

Uninstalling the agent does not remove the CA. To stop trusting the poller's CA, remove it manually.

> If the fingerprint is still set in the agent's configuration, the agent retrieves the CA again the next time it starts. Remove the fingerprint as well, unless you want the agent to install the CA again.

<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">

1. In PowerShell, as an administrator, remove the CA from the store:

   ```powershell
   Get-ChildItem Cert:\LocalMachine\Root | Where-Object {
     [Convert]::ToBase64String([Security.Cryptography.SHA256]::Create().ComputeHash($_.RawData)) -eq '<FINGERPRINT>'
   } | Remove-Item
   ```

2. If the agent saved the CA in a file instead, delete the **cma-ca.pem** file from the agent's installation directory.
3. If the agent is still installed, remove the **fingerprint** and **ca_certificate** values from the agent's registry key (or replace **ca_certificate** with the path to your own CA), then restart the agent's service.

</TabItem>
<TabItem value="Linux" label="Linux">

1. Delete the CA file:

   ```shell
   rm /etc/centreon-monitoring-agent/cma-ca.crt
   ```

2. If the agent is still installed, in the **/etc/centreon-monitoring-agent/centagent.json** file, remove the **fingerprint** and **ca_certificate** parameters (or replace **ca_certificate** with the path to your own CA), then restart the agent:

   ```shell
   systemctl restart centagent
   ```

</TabItem>
</Tabs>


## Using the installation scripts

The installation scripts allow you to deploy CMA on a host directly from the command line, without going through the Centreon interface.
These scripts are downloaded and retrieved by the installation command described above, but can also be used independently, for example for automation purposes.

<Tabs groupId="sync">
<TabItem value="Windows" label="Windows">

### Syntax

```powershell
.\install_cma.ps1 -Endpoint <endpoint> -Token <token> [options]
```

### Parameters

| Parameter | Script option | CLI option (`/PARAM=`) | Default value |
|---|---|---|---|
| Endpoint | `-Endpoint` | `endpoint` | _(required)_ |
| Token | `-Token` | `token` | _(prompted at runtime)_ |
| Host name | `-HostName` | `host` | `%COMPUTERNAME%` |
| Host template | `-HostTemplate` | `hosttemplate` | _(empty)_ |
| Version | `-Version` | — | `26.10` |
| Components | `-Components` | `components` | `agent,plugins` |
| Encryption | `-Encryption` | `encryption` | `full` |
| Reverse (poller → agent) | `-Reverse` | `reverse` | `false` |
| Certificate | `-Cert` | `cert` | _(empty)_ |
| Private key | `-Key` | `key` | _(empty)_ |
| CA certificate | `-CA` | `ca` | _(empty)_ |
| Common name | `-CommonName` | `commonname` | _(empty)_ |
| Fingerprint | `-Fingerprint` | `fingerprint` | _(empty)_ |
| Log type | `-LogType` | `logtype` | `event-log` |
| Log level | `-LogLevel` | `loglevel` | `error` |
| Log file | `-LogFile` | `logfile` | _(empty)_ |
| Max log file size (MB) | `-MaxFileSize` | `maxfilesize` | `10` |
| Max number of log files | `-MaxNumber` | `maxnumber` | `10` |
| Custom check file | `-CustomCheckFile` | `customcheckfile` | _(empty)_ |
| Plugin source | `-PluginSrc` | `pluginsrc` | `auto` |
| Agent instance | — | `agentinstance` | _(empty)_ |

</TabItem>
<TabItem value="Linux" label="Linux">

### Syntax

```bash
./install_cma.sh --endpoint <endpoint> --token <token> [options]
```

### Parameters

| Parameter | Short option | Long option | centagent.json config key | Default value |
|---|---|---|---|---|
| Endpoint | `-e` | `--endpoint` | `endpoint` | _(required)_ |
| Token | `-t` | `--token` | `token` | _(prompted at runtime)_ |
| Host name | `-n` | `--host` | `host` | `$(hostname)` |
| Host template | `-H` | `--host-template` | `host_template` | _(empty)_ |
| Version | `-v` | `--version` | — | `26.10` |
| Components | `-p` | `--components` | — | `agent,plugins` |
| Encryption | `-c` | `--encryption` | `encryption` | `full` |
| Reverse (poller → agent) | `-r` | `--reverse` | `reversed_grpc_streaming` | `false` |
| Certificate | `-C` | `--cert` | `public_cert` | _(empty)_ |
| Private key | `-k` | `--key` | `private_key` | _(empty)_ |
| CA certificate | `-a` | `--ca` | `ca_certificate` | _(empty)_ |
| Common name | `-N` | `--common-name` | `ca_name` | _(empty)_ |
| Fingerprint | `-f` | `--fingerprint` | `fingerprint` | _(empty)_ |
| Log type | `-T` | `--log-type` | `log_type` | `file` |
| Log level | `-l` | `--log-level` | `log_level` | `error` |
| Log file | `-L` | `--log-file` | `log_file` | `/var/log/centreon-monitoring-agent/centagent.log` |
| Max log file size (MB) | `-M` | `--max-file-size` | `log_max_file_size` | `10` |
| Max number of log files | `-m` | `--max-number` | `log_max_files` | `10` |
| Custom check file | `-x` | `--custom-check-file` | `custom_check_file` | _(empty)_ |
| Dry run | `-d` | `--dry-run` | — | `false` |

</TabItem>
</Tabs>
