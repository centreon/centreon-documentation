---
id: deploying-a-configuration
title: Deploying a configuration
---

On creation/deletion/change of objects via the configuration interface, the
changes performed are not applied automatically to the scheduler. To apply the
changes performed, it is necessary to follow the procedure below.

## Procedure

1.  Go to the `Configuration > Pollers` menu
2.  Choose the pollers which you want to export configuration

![image](../../assets/monitoring/monitoring-servers/monitoring-servers-list.png)

3.  Click on **Export configuration**
4.  Check the boxes: **Generate Configuration Files**, **Run monitoring engine
    debug (-v)**, **Move Export Files** and **Restart Monitoring Engine**
5.  Click on **Export**

![image](../../assets/monitoring/monitoring-servers/monitoring-servers-generate-configuration.png)

> The **Post generation command** option can be used to request the execution of
> the command post-generation set at the configuration of the scheduler.

## Explanations

Multiple options are available in the configuration generation page:

  - **Generate Configuration Files**: Generates the scheduler configuration
    files in a temporary directory. This configuration is generated from objects
    configured via the web interface
  - **Run monitoring engine debug (-v)**: Enables the scheduler to check the
    generated configuration
  - **Move Export Files**: Moves the configuration files from the temporary
    directory to the scheduler directory
  - **Restart Monitoring Engine**: Restarts the scheduler to apply the new
    configuration files
  - **Post generation command**: Executes the command post-generation set at the
    configuration of the scheduler level
