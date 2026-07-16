---
id: faq
title: Agent FAQ
description: Firewall ports and IP addresses required for the monitoring agent
---

## Which firewall ports should be opened for the Experience Monitoring agent?

To ensure the agent works, outgoing HTTPS connections to our IP addresses must be allowed.

<details>
  <summary>IP addresses</summary>

- 18.200.8.204
- 34.241.126.134
- 34.242.201.38
- 34.243.127.23
- 34.248.113.181
- 34.250.75.1
- 34.252.162.102
- 34.255.79.251
- 52.17.157.120
- 52.18.157.52
- 52.19.60.226
- 52.30.194.126
- 52.31.137.223
- 52.48.148.3
- 52.48.151.164
- 52.50.31.122
- 52.51.174.216
- 52.208.14.10
- 52.209.27.6
- 52.210.233.251
- 52.212.161.58
- 52.214.41.253
- 54.78.224.201
- 54.154.70.169
- 54.170.78.117
- 54.170.157.253
- 63.34.122.21
- 63.34.67.195
- 99.81.201.50
- 176.34.232.22
- 185.48.122.159

</details>

For package installation, your server must also be allowed to connect via HTTP to `apt.quanta.io`.

You can also set up an HTTP proxy if your server does not have direct internet access. Add your proxy URL in the agent configuration (**/etc/quanta/agent.yml**) by adding a line like `proxy_url: http://user:password@1.2.3.4` under the "server" category.

## I have multiple Redis, Memcached, or Varnish instances, can I monitor them all?

Yes, from agent version 1.1.0.

You need to specify a configuration file per instance in **/etc/quanta/agent.yml**. For example, to monitor 2 different Redis instances (one for sessions on port 6379 and one for cache on port 6378):

- **/etc/quanta/modules.d/redis_sessions.yml**

```
module: redis
redis:
instance: sessions
host: 127.0.0.1
port: 6379
```

- **/etc/quanta/modules.d/redis_cache.yml**

```
module: redis
redis:
instance: cache
host: 127.0.0.1
port: 6378
```

This configuration works the same for Memcached and Varnish. Don't forget to change the "module" parameter and the configuration key.

For Varnish, the "instance" parameter is also used as the Varnish instance name, so make sure it matches (equivalent to the "-n" argument in the command line).

## Can I monitor services not on the same machine?

We recommend installing the agent on all servers in your infrastructure. However, if you can't on some servers (e.g., on a database) and still want to monitor MySQL, you can change the **host** parameter in the agent configuration.

## My server is shared between several sites, each with an Experience Monitoring subscription. How can data be visible on both sites?

To link a server to multiple sites, you can specify several tokens (one per site) in **/etc/quanta/agent.yml**, separated by commas, e.g., "quanta_token: tokensite1,tokensite2".

The server will be created on both sites and system data will be sent to both.

There are some limitations if both sites use the PHP module:

- PHP events will be sent to both sites, regardless of which site generated them.
- Information in the PHP section of the Experience Monitoring interface will be from one site or the other (and may not be correct).

## Do I need to create my server in Experience Monitoring?

No, creation is automatic the first time we receive data. If your server already existed in Experience Monitoring, its configuration will be updated automatically.

You must manually delete the server in Experience Monitoring if you remove it from your infrastructure.

## I'm concerned about my server's security, can you explain how the Experience Monitoring agent and PHP module work?

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

### PHP profiler

The PHP profiler is a PHP extension (dynamic library) loaded by PHP during execution.

It collects data only:

- When you perform actions in your back office
- During requests made by our probes (identified by a specific header).

The module does not alter application behavior; it only collects profiling information about PHP.

The module also has an "xhprof" mode (full execution profiling), which works similarly but is never activated by Experience Monitoring without user action.

Data is sent to the agent via the designated Unix socket and is never stored or sent elsewhere.
