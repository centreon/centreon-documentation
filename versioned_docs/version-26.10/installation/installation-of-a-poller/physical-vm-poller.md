id: physical-vm-poller
title: Installing a poller on a physical or virtual machine
description: "Installing a poller on a physical or virtual machine from the Centreon interface"
---

> The following feature is in beta phase.

A tailored command for installing a poller on a virtual or physical machine can be generated from the central server interface.

## Prerequisites

* The machine on which you will install the poller must fulfill the [poller installation prerequisites](../prerequisites.md#poller-sizing).
* Have a previously created poller-type authentication token.

## Step 1: generate the installation command

1. On the central server interface, click on the pollers are in the top left. Then, click on **Create new poller**.

![image](../../assets/installation/create-poller-banner.png)

2. Fill in the form with the poller information:

    * **Poller name**: a unique name for this poller. It will appear in the list of pollers.
   * **Poller address**: the address of the host machine where you are going to install the poller.
      > The **Poller address** does not affect connectivity: Gorgone uses
      > PullWSS, so the poller always initiates the connection to the central
      > server, not the other way around.
   * **Centreon Central address, as seen by this poller**: the URL this poller uses to reach the central server, e.g. `http(s)://10.10.10.10/centreon`. If your central server is configured in HTTPS, the connection between the central server and the poller will be automatically configured in HTTPS too.

3. Select **VM or physical** as the poller's environment

4. Select the [authentication token](#prerequisites) you have created for this poller.

5. In the **Generate installation command** section, click the button and wait for the command to be generated.

6. Copy the command using the button at the top right of the code block and execute it.

7. Click the **Export configuration**.

