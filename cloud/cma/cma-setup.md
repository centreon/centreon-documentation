---
id: cma-setup
title: Setting up the agent's environment
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PollerAgentConfiguration from './_poller-agent-configuration.mdx';

## Using the ready-to-run installation command

1. Go to **Configuration > Pollers > Agent configurations**, then click **Command**.
2. In the window that appears, fill in the details corresponding to your environment (poller that will monitor your hosts, type of OS for your hosts).
3. Copy the command displayed in the window, then run it on each host you want to monitor with the agent.
   The CMA agent is deployed, and the connection between CMA and the pller is established in TLS.

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