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
