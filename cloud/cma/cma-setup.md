---
id: cma-setup
title: Setting up the agent's environment
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PollerAgentConfiguration from './_poller-agent-configuration.mdx';

## Using the ready-to-run installation command

> This procedure only applies to the "Agent-initiated connection" mode.

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


<!-- ## What happens when you run the command

On the poller, [certificates](cma-certificates.md) are managed automatically:

* the CA certificate is generated and stored in **/etc/pki/centreon-engine**.
* a private key/certificate pair is generated, based on the CA files (Low TTL, renewed auotmatically every 30 days). This pair will be stored in the memory of the poller.

On the central server:

* a [CMA token](../administration/api_tokens.md) is created.
* the [agent configuration](cma-setup-manual.md#configure-polleragent-communication) is created for the poller you selected.
* the fingerprint of the certificate is stored in the database.

On the host: the CMA agent is deployed.

At the end, the connection between CMA and the pller is established in TLS.
 -->