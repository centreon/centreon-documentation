---
id: using-containers
title: Installing a poller in a container
description: "Install a Centreon poller using docker-compose"
---

> This container-based poller deployment method is currently in **BETA**.

<details>
<summary>Technical details</summary>

Centreon also provides a Docker-based deployment for pollers. Instead of a single
monolithic container, each poller component runs in its own dedicated container
(Centreon Engine, Gorgone, and optionally SNMP trap handling and VMware
monitoring), orchestrated by a single `docker-compose.yaml` file.

This deployment method relies on a generated installation command that downloads
and runs an installer script on the target Docker host. The script generates the
`.env` and `docker-compose.yaml` files for you and starts the stack.

> See [Users and groups](https://docs.centreon.com/docs/installation/technical/) for the system users
> (`centreon-engine`, `centreon-gorgone`, etc.) used inside these containers.

</details>

## Prerequisites

* On the central server, [Gorgone's **pullwss** module must be configured to accept connections](./pollers-containers-prerequisites.md). This is a one-time setup, shared by all pollers in containers. It does not affect other types of poller deployments.
* A Linux host with **Docker Engine** and the **Docker Compose v2** plugin
  installed (`docker compose version` must succeed).
* a poller-type token
* Outbound network access from this host to your Centreon central server.
* If you plan to receive SNMP traps on this poller, UDP port 162 must be
  reachable on this host.
* If you plan to monitor VMware infrastructure from this poller, the
  `centreon-vmware` Docker image must be built beforehand (see
  [Optional: centreon-vmware container](./using-containers-advanced-configuration.md#optional-centreon-vmware-container)).

## Step 1: Generate the install command

1. On the central server, click **Pollers** at the top left of the screen and
   click **Create new poller** (currently in BETA).

   ![image](../../assets/installation/create-poller-banner.png)

2. Fill in the poller's information, select its environment and token, then
   generate the installation command:

   ![image](../../assets/installation/create-poller-ui.png)

   1. **Poller name**: a unique name for this poller.
   2. **Poller address**: the poller's own address (see note below).
   3. **Centreon Central address, as seen by this poller**: the URL this
      poller uses to reach the central server.
   4. **Container**: the environment to generate the command for (as opposed
      to **VM or physical**).
   5. **Select token**: an existing Gorgone poller token.
   6. The button that generates the installation command.

   > The **Poller address** does not affect connectivity: Gorgone uses
   > PullWSS, so the poller always initiates the connection to the central
   > server, not the other way around.

3. Copy the generated installation command, and keep this window open. It
   looks like this:

   ![image](../../assets/installation/create-poller-ui-with-command.png)

   ```shell
   curl -fsSL <CENTRAL_URL>/poller/install.sh | bash -s -- \
     --type docker \
     --poller_token <TOKEN_NAME>:<TOKEN_SECRET> \
     --uid <POLLER_UID> \
     --name '<POLLER_NAME>' \
     --central_url <CENTRAL_URL> \
     --appsecret <APP_SECRET> \
     --salt <SALT>
   ```

   > Replace **\<CENTRAL_URL\>** with the full URL of your Centreon central
   > server, including its web application base path (for example,
   > `https://centreon.example.com/centreon`).

## Step 2: Run the install command on the Docker host

Run the copied command as a user who is allowed to use Docker on the target
host. The script:

1. Checks that Docker and the Docker Compose v2 plugin are available.
2. Generates a `.env` file and a `docker-compose.yaml` file in the current
   directory.
3. Starts the stack with `docker compose up -d`, unless `--no-start` was
   added to the command (in that case, start it yourself later with
   `docker compose up -d`).

By default, the generated stack always includes two services:

* **centengine**: Centreon Engine, the monitoring engine.
* **gorgone**: Gorgone, in charge of retrieving the poller's configuration and
  communicating with the central server.

## Step 3: Add optional services

Add these flags to the install command **before running it** to include
additional services in the generated stack:

| Flag | Effect |
|------|--------|
| `--with-snmptrap` | Adds the `snmptrapd` and `centreontrapd` services, for passive monitoring via SNMP traps. |
| `--with-vmware` | Adds the `centreon-vmware` service (see prerequisite below). |
| `--with-cma` | Mounts TLS certificates and exposes port 4317, for pollers that accept connections from the Centreon Monitoring Agent (CMA) over OpenTelemetry gRPC. |
| `--tz <timezone>` | Sets the container timezone (default: `UTC`). |
| `--debug true` | Enables debug logging on the services. |
| `--gorgone-ssl <true\|false>` | Overrides the SSL setting used for the Gorgone connection to the central server. |
| `--no-start` | Only generates `.env` and `docker-compose.yaml`; does not start the stack. |

If you already ran the install command without these flags, you can also add
the corresponding service(s) by hand to the generated `docker-compose.yaml`
and `.env` files, then run `docker compose up -d` again.

For VMware monitoring, custom check scripts and plugin dependencies, CMA
support, and email notifications, see
[Advanced Docker configuration](./using-containers-advanced-configuration.md).

## Generated files reference

The `docker-compose.yaml` generated by the install script wires the services
together using named Docker volumes, so you don't need to configure this
yourself:

| Volume | Shared between | Purpose |
|--------|-----------------|---------|
| `poller-engine` | centengine, gorgone | Centreon Engine configuration (`/etc/centreon-engine`) |
| `poller-broker` | centengine, gorgone | Centreon Broker configuration (`/etc/centreon-broker`) |
| `poller-centcmd` | centengine, gorgone, centreontrapd | Centreon Engine's external command pipe (`/var/lib/centreon-engine/rw`) |
| `poller-snmp-spool` | snmptrapd, centreontrapd | Spool directory where received traps are written and then processed |
| `poller-snmp-traps` | gorgone, centreontrapd | SNMP trap definitions pushed by the central server |

Each service also has a Docker healthcheck, so `docker compose ps` reports
`healthy` once a service is fully up.

## Step 4: Confirm the connection and export the configuration

The poller creation window does not show a "connected" status by itself.
Instead, check the health status of the `gorgone` container on the Docker
host:

```shell
docker compose ps
```

Once `gorgone` reports `healthy`, the connection to the central server is
established. Go back to the poller creation window and click
**Export configuration** to push the monitoring configuration to the poller.

The poller then shows up as running on the **Configuration > Pollers** page:

![image](../../assets/installation/connected-poller.png)

If `gorgone` does not become healthy after a few minutes, check its logs
(`docker compose logs gorgone`), then see
[Attach a poller to a central or a remote server](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md)
and [Communications between servers](../../monitoring/monitoring-servers/communications.md)
for more details on how pollers register and communicate with the central
server.

## Step 5: Secure your platform

Remember to secure your Centreon platform following our
[recommendations](../../administration/secure-platform.md).
