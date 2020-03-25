---
id: add-poller-to-configuration
title: Add a Poller to configuration
---

## Configure a new Poller

As of Centreon version 18.10, a new wizard has been added for defining a new
Poller on the Centreon platform.

> You also have the option of adding a new Poller `manually<add_manual_poller>`,
> but we recommend using the following procedure.

Go to the **Configuration \> Pollers \> Pollers** menu and click on **Add
server with wizard** to configure a new Poller.

Select **Add a Centreon Poller** and click on **Next**:

![image](assets/installation/poller/wizard-add-poller-1.png)

Type in the name, the IP address of the Poller and IP address of the Central
Server. Click on **Next**:

![image](assets/installation/poller/wizard-add-poller-2.png)

> The IP address of the Poller is the IP address or the FQDN used to access this
> poller from the Central server.
>
> The IP address of the Central server is the IP address or the FQDN used to
> access the Central server from the Poller.

If you want to link the poller to the Centreon Server, click on **Apply**:

![image](assets/installation/poller/wizard-add-poller-3.png)

Otherwise, if you want to link the poller to an existing Centreon Remote Server,
select one from the list. Then click **Apply**:

> If you want to change the direction of the flow between the Centreon Server (or
> the Remote Server and the Poller, check the **Advanced: reverse Centreon Broker
> communication flow** checkbox. In this case, it will be necessary to export the
> configuration of the collector as well as the server to which it will be
> attached.

In a few seconds the wizard will configure your new poller.

![image](assets/installation/poller/poller-list-zmq.png)

## Enable communication

The communication between a Central and a Poller is ensured by Gorgone and can
be done using ZMQ (with a Gorgone running on the Poller, recommended) or using
SSH protocol.

<!--DOCUSAURUS_CODE_TABS-->
<!--Using ZMQ (Recommended)-->
#### Select communication type

Edit the newly created Poller configuration, and select **ZMQ** as **Gorgone
connection protocol**. Define the suitable **port**.

![image](assets/installation/poller/poller-edit-zmq.png)

Click on **Save**.

#### Display Gorgone configuration

From the Pollers listing, click on the **Display Gorgone configuration** action
icon.

A popin will show the configuration to copy into the Poller terminal. Click on
**Copy to clipboard**.

![image](assets/installation/poller/poller-gorgone-display-config.png)

Paste directly into the terminal as the clipboard contains the following
content, and will fill the right file:

```shell
cat <<EOF > /etc/centreon-gorgone/config.d/40-gorgoned.yaml
name:  gorgoned-My Poller
description: Configuration for poller My Poller
gorgone:
  gorgonecore:
    id: 2
    external_com_type: tcp
    external_com_path: "*:5556"
    authorized_clients:
      - key: Np1wWwpbFD2I0MdeHWRlFx51FmlYkDRZy9JTFxkrDPI
    privkey: "/var/lib/centreon-gorgone/.keys/rsakey.priv.pem"
    pubkey: "/var/lib/centreon-gorgone/.keys/rsakey.pub.pem"
  modules:
    - name: action
      package: gorgone::modules::core::action::hooks
      enable: true

    - name: engine
      package: gorgone::modules::centreon::engine::hooks
      enable: true
      command_file: "/var/lib/centreon-engine/rw/centengine.cmd"

EOF
```

> You can copy the configuration in a custom file by copying the content from
> the popin.

#### Start Gorgone daemon

From the Poller, run the following command:

```shell
systemctl start gorgoned
```

Make sure it is started by running the following command:

```shell
systemctl status gorgoned
```

It should result as follow:

```shell
● gorgoned.service - Centreon Gorgone
   Loaded: loaded (/etc/systemd/system/gorgoned.service; disabled; vendor preset: disabled)
   Active: active (running) since Mon 2020-03-24 19:45:00 CET; 20h ago
 Main PID: 28583 (perl)
   CGroup: /system.slice/gorgoned.service
           ├─28583 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info
           ├─28596 gorgone-dbcleaner
           ├─28597 gorgone-engine
           └─28598 gorgone-action

Mar 24 19:45:00 localhost.localdomain systemd[1]: Started Centreon Gorgone.
```
<!--Using SSH-->
#### Select communication type

Edit the newly created Poller configuration, and select **SSH** as **Gorgone
connection protocol**. Define the suitable **port**.

![image](assets/installation/poller/poller-edit-ssh.png)

Click on **Save**.

#### Exchange SSH keys

If you do not have any private SSH keys on the central server for the
**centreon-gorgone** user:

```shell
su - centreon-gorgone
ssh-keygen -t rsa
```

> Hit enter when it prompts for a file to save the key to use the default
> location, or, create one in a specified directory. **Leave the passphrase
> blank**. You will receive a key fingerprint and a randomart image.

Generate a password for the **centreon** user on the new server:

```shell
passwd centreon
```

Copy this key on to the new server:

```shell
su - centreon-gorgone
ssh-copy-id -i .ssh/id_rsa.pub centreon@<IP_POLLER>
```
<!--END_DOCUSAURUS_CODE_TABS-->

To force the Central's Gorgone daemon to connect to the Poller, restart it with
the following command:

```shell
systemctl restart gorgoned
```

## Export the configuration

From the Pollers listing, select the Poller and click on **Export
configuration**.

Then check the four first boxes, select the **Restart** method and click on
**Export**:

![image](assets/installation/poller/generate-config.png)

The Poller will then connect to the Central Broker.

![image](assets/installation/poller/poller-list-zmq-started.png)

## Getting started

Go to the *[Getting Started](../tutorials/first-steps.html)* chapter to configure your first monitoring.
