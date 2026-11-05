---
id: using-containers
title: Installing a poller in a container
description: "Install a Centreon poller in containers with docker-compose using a command generated in the central server's interface, then export its configuration."
---

> The container-based poller deployment method is currently in **BETA**. You can test it and [give your feedback in our dedicated group on our community platform The Watch](https://thewatch.centreon.com/groups/cim-pollers-in-containers-75).

A ready-to-use installation command for container-based pollers can be retrieved from the central server's interface, tailored to your platform.

<details>
<summary>Container contents</summary>

Container-based pollers use Debian 13.

Instead of a single monolithic container, each poller component runs in its own dedicated container
(Centreon Engine, Gorgone, and optionally SNMP trap handling and VMware
monitoring), orchestrated by a single `docker-compose.yaml` file.

This deployment method relies on a generated installation command that downloads
and runs an installer script on the target container host. The script generates the
`.env` and `docker-compose.yaml` files for you and starts the stack.

> See [Users and groups](https://docs.centreon.com/docs/installation/technical/) for the system users
> (`centreon-engine`, `centreon-gorgone`, etc.) used inside these containers.

</details>

## Prerequisites

* On the central server, [Gorgone's **pullwss** module must be configured to accept connections](./pollers-containers-prerequisites.md). This only needs to be done once, before you install your first poller in a container.
* A Linux host with one of the following container engines installed:
  * **Docker Engine** and the **Docker Compose v2** plugin
    (`docker compose version` must succeed).
  * **Podman** and `podman compose` or `podman-compose`. See
    [Using Podman](./using-containers-advanced-configuration.md#using-podman)
    for the additional requirements.
* You must have created a poller-type authentication token.
* Outbound network access from this host to your Centreon central server: web port (443 for HTTPS, 80 for HTTP) and TCP port 5669 (Centreon Broker).
* If you plan to receive SNMP traps on this poller, UDP port 162 must be
  reachable on this host.
* If you plan to monitor VMware infrastructure from this poller, a
  `centreon-plugins` checkout and the VMware SDK archives must be available
  on this host (see
  [Allow the poller to monitor VMware resources](./using-containers-advanced-configuration.md#allow-the-poller-to-monitor-vmware-resources)).

## Step 1: Generate the install command

1. On the central server, click the pollers zone at the top left of the screen and in the popup that opens, click **Create new poller**.

   ![image](../../assets/installation/create-poller-banner.png)

2. Fill in the poller's information:

   * **Poller name**: a unique name for this poller. It will appear in the list of pollers. The name must contain no spaces or special characters, and the first character must be alphanumeric.
   * **Poller address**: the address of the host machine where you are going to install the poller.
      > The **Poller address** does not affect connectivity: Gorgone uses
      > PullWSS, so the poller always initiates the connection to the central
      > server, not the other way around.
   * **Centreon Central address, as seen by this poller**: the URL this poller uses to reach the central server, e.g. `http(s)://10.10.10.10/centreon`. If your central server is configured in HTTPS, the connection between the central server and the poller will be automatically configured in HTTPS too.

3. Select **Container** as the poller's environment.

4. Select the [authentication token](#prerequisites) you have created for this poller.

5. In the **Generate installation command** section, click the button and wait for the command to be generated.

6. Copy the command using the button at the top right of the code block. Keep the window open: you will need to use it again later.

7. Add to the command any [optional flags](#optional-services-to-add-to-the-installation-command) you want (e.g. to allow the poller to receive data from CMA agents, or if you want to monitor VMware resources. In both cases, you will need to follow the corresponding procedures in [Advanced container configuration](./using-containers-advanced-configuration.md)).

8. If you want to be able to use email notifications or custom plugins, follow the corresponding procedures in
[Advanced container configuration](./using-containers-advanced-configuration.md).

## Step 2: Run the install command on the container host

1. Run the copied command as a user who is allowed to use containers on the target
host.

   > If your central server uses HTTPS, the container host must trust its certificate. If you are using a self-signed certificate, use curl's `-k` (`--insecure`) option to allow insecure connections.

   <details>
   <summary>What the script does</summary>

   The script:

   1. Detects the compose command to use: `docker compose` if the Docker
      daemon is reachable, otherwise `podman compose`, otherwise
      `podman-compose`. With Podman, it also checks the
      [Podman requirements](./using-containers-advanced-configuration.md#using-podman).
   2. Generates a `.env` file and a `docker-compose.yaml` file in the current
      directory, and an empty `.env.smtp` file if it does not exist yet. If
      `.env` or `docker-compose.yaml` already exist, see
      [Running the install command again](#running-the-install-command-again).
   3. Starts the stack with the detected compose command (e.g.
      `docker compose up -d`), unless `--no-start` was added to the command
      (in that case, start it yourself later with the same command).

   By default, the generated stack always includes two services:

   * **centengine**: Centreon Engine, the monitoring engine.
   * **gorgone**: Gorgone, in charge of retrieving the poller's configuration and
   communicating with the central server.

   **Generated files reference**

   The `docker-compose.yaml` generated by the install script wires the services
   together using named Docker volumes, so you don't need to configure this
   yourself:

   | Volume | Used by | Purpose |
   |--------|-----------------|---------|
   | `poller-etc` | gorgone, centreon-vmware | Centreon configuration (`/etc/centreon`) |
   | `poller-engine` | centengine, gorgone | Centreon Engine configuration (`/etc/centreon-engine`) |
   | `poller-broker` | centengine, gorgone | Centreon Broker configuration (`/etc/centreon-broker`) |
   | `poller-centcmd` | centengine, gorgone, centreontrapd | Centreon Engine's external command pipe (`/var/lib/centreon-engine/rw`) |
   | `poller-centlog` | centengine | Centreon Engine logs (`/var/log/centreon-engine`) |
   | `poller-gorgone-data` | gorgone | Gorgone data (`/var/lib/centreon-gorgone`) |
   | `poller-snmp-spool` | snmptrapd, centreontrapd | Spool directory where received traps are written and then processed |
   | `poller-snmp-traps` | gorgone, centreontrapd | SNMP trap definitions pushed by the central server |
   | `poller-cma-pki` | centengine | CA used for Centreon Monitoring Agent connections (`/etc/pki/centreon-engine`), with `--with-cma` only |

   Each service also has a Docker healthcheck, so `docker compose ps` reports
   `healthy` once a service is fully up.

   </details>

2. Check the health status of the `gorgone` container on the container's host:

   ```shell
   docker compose ps
   ```

   > If you use Podman, replace `docker compose` with `podman compose` or
   > `podman-compose` in the commands on this page.

   Once `gorgone` reports `healthy`, the connection to the central server is established.
   
   If `gorgone` does not become healthy after a few minutes, check its logs
(`docker compose logs gorgone`), then see
[Attach a poller to a central or a remote server](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md)
and [Communications between servers](../../monitoring/monitoring-servers/communications.md)
for more details on how pollers register and communicate with the central
server.

## Step 3: Export the configuration

On the central server, go back to the poller creation window and click
**Export configuration**.

The poller then shows up as running on the **Configuration > Pollers** page:

![image](../../assets/installation/connected-poller.png)

## Step 4: Secure your platform

If your central server is configured in HTTPS, the connection between the central server and the poller will automatically be configured in HTTPS as well. However, remember to carry out the other security measures for your Centreon platform by following our [recommendations](../../administration/secure-platform.md).

## Optional services to add to the installation command

The basic generated command looks like this:

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

Add the following flags to the install command to include additional features:

| Flag | Effect |
|------|--------|
| `--with-snmptrap` | Adds the `snmptrapd` and `centreontrapd` services, for passive monitoring via [SNMP traps](../../monitoring/passive-monitoring/enable-snmp-traps.md). |
| `--with-vmware` | [Allow the poller to monitor VMware resources](using-containers-advanced-configuration.md#allow-the-poller-to-monitor-vmware-resources) (adds the `centreon-vmware` service to the docker-compose, built locally from a `centreon-plugins` checkout). |
| `--vmware-path <path>` | Path to the `centreon-plugins` checkout used to build the `centreon-vmware` image (default: `./centreon-plugins`). Only used with `--with-vmware`. |
| `--with-cma` | [Allows the poller to receive data from Centreon Monitoring Agents (CMA)](./using-containers-advanced-configuration.md#allow-the-poller-to-receive-data-from-centreon-monitoring-agents-cma). Stores the poller's CMA certificate authority in a persistent volume and exposes port 4317, for pollers that accept connections from the Centreon Monitoring Agent (CMA) over OpenTelemetry gRPC. |
| `--cma-hostname <hostname>` | Host name of the `centengine` container, also used as the name in the poller's CMA certificate authority (default: `centengine`). Set it to the host name the agents use to reach the poller. Only used with `--with-cma`. |
| `--tz <timezone>` | Sets the container timezone (default: `UTC`). |
| `--debug true` | Enables debug logging on the services. |
| `--gorgone-ssl <true\|false>` | Overrides the SSL setting used for the Gorgone connection to the central server (by default, HTTPS if the central server already uses HTTPS). |
| `--no-start` | Only generates `.env` and `docker-compose.yaml`; does not start the stack. |
| `--overwrite` | Overwrites existing `.env` and `docker-compose.yaml` files without asking. Use it for non-interactive runs (scripts, automation). |

If you already ran the install command without these flags, you can also add
the corresponding service(s) by hand to the generated `docker-compose.yaml`
and `.env` files, then run `docker compose up -d` again.

## Running the install command again

If `.env` or `docker-compose.yaml` already exist in the current directory,
the install command does not overwrite them silently:

* In an interactive terminal, it asks you whether to overwrite them.
* If you answer no, or if the command runs without a terminal (e.g. from a
  script), it writes the new content to `.env.new` and
  `docker-compose.yaml.new` instead, and does not start the stack. Compare
  them with your current files (`diff .env .env.new`), then replace both
  files together.
* With `--overwrite`, it overwrites both files without asking.

Any manual change made to `.env` or `docker-compose.yaml` (custom plugins,
extra volumes, etc.) is lost when they are overwritten: back them up first.
The `.env.smtp` file is never overwritten.

> In Centreon 26.10.0, the install command overwrites `.env` and
> `docker-compose.yaml` without warning.
