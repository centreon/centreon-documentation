---
id: cma-custom
title: Using custom plugins with CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Centreon Monitoring Agent** can execute custom plugins. Use this feature if your monitoring needs are specific and not covered by native Centreon controls and plugins. Supported languages are: PowerShell, Perl, Python, Bash.

To get started, create your plugin: for example, you can use [our developer guide](/pp/integrations/plugin-packs/dev-resources/introduction).
Custom plugins execution requires to declare associated commands in a dedicated file, on the host.
These commands will be used as macro values in the corresponding service.
## Actions on the host

1. Copy the plugin to the host, in the directory of your choice.
2. Create the commands file

The declaration of custom plugins (commands) is done in a dedicated file, on the host.

Supported formats: .txt or .ini

Example content:

```bash
[custom_checks]
check_echo = /usr/bin/echo "$ARG1$ $ARG2$"
custom_check_2 = /path/to/custom_check_2 -c /arg=$ARG1$
...
```

3. Declare the file

The path to the file must be declared in the agent configuration, via the **custom_check_file** parameter.

* Linux : centagent.json

```json
{
  ...
  "custom_check_file":"/path/to/commandsfile.ini",
  ...
}
```

* Windows: via the installer/silent mode (**/CUSTOMCHECK**) or directly in the registry (by adding a **custom_check_file** registry key).

## Actions in Centreon

On your central server, if not already done, [create the host](../monitoring/basic-objects/hosts.md) corresponding to the resource to be monitored.

Create a service based on the proposed service template or create a dedicated service template.
In that case, the template must inherit (directly or via its parent) from the **OS-Linux-Custom-Script-Centreon-Monitoring-Agent** or **OS-Windows-Custom-Script-Centreon-Monitoring-Agent** templates, and be configured with passive checks enabled and active checks disabled.

3. Fill in the macros

$_SERVICECUSTOMCHECK$: the name of the command declared on the host (e.g.: **check_echo**)
$_SERVICEARG1$: value that will be passed to **$ARG1$** in the declared command

It is possible to pass up to 8 values (**$_SERVICEARG1$** to **$_SERVICEARG8$**).
5. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).
