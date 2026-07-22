---
id: cma-custom
title: Using custom plugins with CMA
description: "Run custom Bash, Perl, Python, or PowerShell plugins with CMA"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Centreon Monitoring Agent** can execute custom plugins. Use this feature if your monitoring needs are specific and not covered by native Centreon controls and plugins. Supported languages are: PowerShell, Perl, Python, Bash.

To get started, create your plugin: for example, you can use [our developer guide](/pp/integrations/plugin-packs/dev-resources/introduction).

## Actions on the host

Copy the plugin on the host, to the directory of your choice.

## Actions in Centreon

1. On your central server, create a command that runs the plugin (or, if you were using NSClient++, adapt the existing command), depending on the language. Here is an example for each supported language:

   * PowerShell (Windows)
     ```bash
     "C:\\Program Files\\PowerShell\\7\\pwsh.exe" -File Z:\\tmp\\custom_script.ps1
     ```

     Adjust the interpreter's path according to the case and version.

   * Perl (Windows)
     ```bash
     C:/Strawberry/perl/bin/perl.exe Z:/tmp/custom_script.pl
     ```

   * Perl (Linux)
     ```bash
     /<path>/<to>/custom_script.pl
     ```

    * Python (Windows)
      ```bash
      "C:\\Program Files\\Python313\\python.exe" "Z:\\tmp\\custom_script.py"
      ```

      Adjust the interpreter's path according to the case and version.

     * Python (Linux)

       ```bash
       /<path>/<to>/custom_script.py
       ```

     * Bash (Windows, .bat)

       ```bash
       "Z:\\tmp\\custom_script.bat"
       ```

    * Bash (Linux, .sh)

      ```bash
      /<path>/<to>/custom_script.sh
      ```

2. Associate this command with the **Centreon Monitoring Agent** connector (**Connectors** field).

3. If you haven't already done so, [create a host](../monitoring/basic-objects/hosts.md) for the resource to be monitored.
4. You can associate the command with an existing service template or create a dedicated service template.
The template must inherit (directly or via its parent) from the **OS-Windows-Centreon-Monitoring-Agent** or **OS-Linux-Generic-Centreon-Monitoring-Agent** templates, or alternatively be configured with passive checks enabled and active checks disabled.
5. [Deploy the configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).
