---
id: faq
title: FAQ
---

## Which firewall ports should be opened for the Experience Monitoring agent?

To ensure the agent works, outgoing HTTPS connections [to our IP addresses](../installation/experience-monitoring-ip-addresses.md) must be allowed.

For package installation, your server must also be allowed to connect via HTTP to `apt.quanta.io`.

You can also set up an HTTP proxy if your server does not have direct internet access. Add your proxy URL in the agent configuration (**/etc/quanta/agent.yml**) by adding a line like `proxy_url: http://user:password@1.2.3.4` under the "server" category.

## I don't see data coming in, where can I find information to troubleshoot?

The agent uses syslog for logging; you will generally find logs in **/var/log/daemon.log** or **/var/log/syslog**. If you can't find the source of the error, please contact us.

You can send logs to another file by changing the **file** variable under the **logger** section in **/etc/quanta/agent.yml** (make sure to set up log rotation).

## I have Varnish on my server and installed the Varnish module but see no data, how can I fix this?

It's likely that your Varnish instance is not the default one, meaning you use the -n `name` flag to start Varnish and for admin commands.
If so, just add the following configuration in **/etc/quanta/modules.d/varnish.yml**:

*varnish:*

*instance: your_instance_name*

## I have multiple Redis, Memcached, or Varnish instances, can I monitor them all?

Yes, from agent version 1.1.0.

You need to specify a configuration file per instance in **/etc/quanta/agent.yml**. For example, to monitor 2 different Redis instances (one for sessions on port 6379 and one for cache on port 6378):

- **/etc/quanta/modules.d/redis_sessions.yml**

*module: redis*

*redis:*

*instance: sessions*

*host: 127.0.0.1*

*port: 6379*

- **/etc/quanta/modules.d/redis_cache.yml**

*module: redis*

*redis:*

*instance: cache*

*host: 127.0.0.1*

*port: 6378*

This configuration works the same for Memcached and Varnish. Don't forget to change the "module" parameter and the configuration key.

For Varnish, the "instance" parameter is also used as the Varnish instance name, so make sure it matches (equivalent to the "-n" argument in the command line).

## Can I monitor services not on the same machine?

We recommend installing the agent on all servers in your infrastructure. However, if you can't on some servers (e.g., on a database) and still want to monitor MySQL, you can change the **host** parameter in the agent configuration (**/etc/quanta/modules.d/service.yml**).

## My server is shared between several sites, each with an Experience Monitoring subscription. How can data be visible on both sites?

To link a server to multiple sites, you can specify several tokens (one per site) in **/etc/quanta/agent.yml**, separated by commas, e.g., "quanta_token: tokensite1,tokensite2".

The server will be created on both sites and system data will be sent to both.

There are some limitations if both sites use the PHP module:

- Magento events will be sent to both sites, regardless of which site generated them.
- Information in the Magento section of the Experience Monitoring interface will be from one site or the other (and may not be correct).

## I already installed the Magento module, how does the update work?

The update is automatic; when we receive the first metrics from the new PHP extension, we stop querying the old Magento module. When a scenario uses the new PHP module, you will see a "new module" flag in your scenario configuration.

We recommend uninstalling the old module once the new one is installed.

## Do I need to create my server in Experience Monitoring?

No, creation is automatic the first time we receive data. If your server already existed in Experience Monitoring, its configuration will be updated automatically.

You must manually delete the server in Experience Monitoring if you remove it from your infrastructure.

# I'm concerned about my server's security, can you explain how the Experience Monitoring agent and PHP module work?

We care as much as you do about the security of our tools. Here is a technical description:

All packages we provide are signed with a GPG key you must install in your package system to verify their origin.

### Experience Monitoring agent

The Experience Monitoring agent is a background service (daemon) on your server that performs several operations:

- It collects system data by reading files in **/proc**.
- It collects data on active services (Apache, Nginx, Varnish, Memcached, Redis, MySQL), usually via a service connection. No privileged user is ever needed for the agent to access this data.
- It receives data from the PHP module via a Unix socket (permissions are configurable).
- It sends collected data to Experience Monitoring via secure HTTPS (using a proxy is possible).

All Experience Monitoring agent modules can be disabled independently.

The agent starts as root for initialization (socket opening, config loading, etc.) but switches to a standard user for all collection operations (user and group are configurable).

Data collected by the agent is stored in memory before being sent to Experience Monitoring and is never stored elsewhere.

### PHP module

The PHP module is a PHP extension (dynamic library) loaded by PHP during execution.

It collects data only:

- When you perform actions in your back office
- During requests made by our probes (identified by a specific header).

The module does not alter application behavior; it only collects profiling information about Magento.

The module also has an "xhprof" mode (full execution profiling), which works similarly but is never activated by Experience Monitoring without user action.

Data is sent to the agent via the designated Unix socket and is never stored or sent elsewhere.

If you have further questions, feel free to contact our support team; we will be happy to help.
