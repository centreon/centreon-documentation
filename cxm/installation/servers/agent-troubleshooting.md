---
id: agent-troubleshooting
title: Troubleshooting the agent and additional modules
---

## I don't see data coming in, where can I find information to troubleshoot?

The agent uses syslog for logging; you will generally find logs in **/var/log/daemon.log** or **/var/log/syslog**. If you can't find the source of the error, please contact us.

You can send logs to another file by changing the **file** variable under the **logger** section in **/etc/quanta/agent.yml** (make sure to set up log rotation).

## I have Varnish on my server and installed the Varnish module but see no data, how can I fix this?

It's likely that your Varnish instance is not the default one, meaning you use the -n `name` flag to start Varnish and for admin commands.
If so, just add the following configuration in **/etc/quanta/modules.d/varnish.yml**:

```shell
varnish:
instance: your_instance_name
```
