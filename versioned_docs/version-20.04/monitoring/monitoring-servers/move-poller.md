---
id: move-poller
title: Attach the poller to a new server
---

Here is the procedure for attaching a collector from the Centreon Central server to a Remote Server, or from one Remote Server
to another.

## Update the Centreon Poller configuration

Go to the **Configuration > Pollers > Pollers** menu and edit your poller.

Select the Remote Server from the **Attach to Master Remote Server** field:

![image](../../assets/monitoring/monitoring-servers/move_poller_conf_1.png)

Click on **Save**.

## Update the Centreon Gorgone configuration

From the Pollers listing, click on the **Display Gorgone configuration** action
icon on the line corresponding to your Poller <img src="../../assets/monitoring/monitoring-servers/gorgone-configuration.png" width="32" />

A pop-in will show the configuration to copy into the **Poller terminal**.
Click on **Copy to clipboard**.

![image](../../assets/monitoring/monitoring-servers/poller-gorgone-display-config.png)

Paste the content of the clipboard directly into the **Poller terminal** as it
contains the following content, and will fill the right file:

``` shell
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

Hit the *Enter* key for the command to be applied.

> You can copy the configuration in a custom file by copying the content from
> the pop-in.

Restart Centreon Gorgone:
```shell
systemctl restart gorgoned
```

## Update the Centreon Broker configuration

Go to the **Configuration > Pollers > Pollers** menu and edit the broker configuration of the poller.

In the **Output** tab, add or edit the previous **TCP - IPv4** entry to connect to the new server:

![image](../../assets/monitoring/monitoring-servers/move_poller_conf_2.png)

Click on **Save**

## Deploy the new configuration

Go to **Configuration > Pollers > Pollers** and deploy the configuration of the poller.

On the server on which you have attached your server, restart Centreon Gorgone:
```shell
systemctl restart gorgoned
```
