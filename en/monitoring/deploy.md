---
id: deploy
title: Deploying a configuration
---

## Procedure

On creation/deletion/change of objects via the configuration interface, the changes performed are not applied automatically
to the scheduler. To apply the changes performed, it is necessary to follow the procedure below.

> It should always be done in 2 steps.

### First step

1. Go into the **Configuration \> Pollers** menu
2. Choose the pollers which you want to export configuration
3. Click on **Apply configuration**

![image](assets/configuration/poller_menu_generate.png)

4. Check the boxes: **Generate Configuration Files** and **Run monitoring engine debug (-v)**
5. Click on **Export**

![image](assets/configuration/poller_generate_1.png)

Check that no error appears during generation.

> If there are errors, correct the errors and repeat the first step.

### Second step

1. Uncheck the boxes: **Generate Configuration Files** and **Run monitoring engine debug (-v)**
2. Then check the boxes: **Move Export Files** and **Restart Monitoring Engine**
3. Click on **Export**

![image](assets/configuration/poller_generate_2.png)

> The **Post generation command** option can be used to request the execution of the command post-generation set at the
> configuration of the scheduler.

## Explanations

Multiple options are available in the configuration generation page:

* **Generate Configuration Files**: Generates the scheduler configuration files in a temporary directory. This configuration
  is generated from objects configured via the web interface
* **Run monitoring engine debug (-v)**: Enables the scheduler to check the generated configuration
* **Move Export Files**: Moves the configuration files from the temporary directory to the  scheduler directory
* **Restart Monitoring Engine**: Restarts the scheduler to apply the new configuration files
* **Post generation command**: Executes the command post-generation set at the configuration of the scheduler level 
