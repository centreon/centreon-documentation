---
id: docker-advanced-configuration
title: Advanced Docker configuration
description: "Optional configuration for a Docker-based poller: VMware monitoring, custom plugins, CMA support, and email notifications"
---

This page covers optional configuration for a poller deployed with
[Docker containers](using-docker-poller.md), beyond the default `centengine`
and `gorgone` services.

## Optional: centreon-vmware container

Monitoring VMware infrastructure requires the proprietary VMware Perl SDK:
the daemon cannot start at all without it, even with plain-text credentials.
Because the SDK cannot be redistributed for licensing reasons, the
`centreon-vmware` container image is **not published on a registry**. The
generated `docker-compose.yaml` references it as
`connector-vmware:${VMWARE_TAG:-local}` with `pull_policy: never`, so you must
build it locally, on the Docker host, before using `--with-vmware`.

Download the SDK archives from the Broadcom developer portal (see the
[prerequisites of the VMware ESX plugin pack](/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx/#prerequisites)
for instructions), then clone `centreon-plugins`, place the archives in its
`sdks-vmware` directory, and build the image:

```shell
git clone https://github.com/centreon/centreon-plugins.git
cd centreon-plugins
# Place the downloaded SDK archives in sdks-vmware/ before building
docker build \
  --file .github/docker/connector/Dockerfile.connector-vmware \
  --tag connector-vmware:local \
  .
```

> This downloads the latest package from Centreon's stable APT repository and
> includes the SDK by default. Add `--build-arg VERSION=<version>` to pin a
> specific release, or `--build-arg PACKAGE_SOURCE=mount` to build from a
> `.deb` package placed in a `packages-centreon` directory instead. Building
> with `--build-arg WITH_SDK=false` only validates that the image builds: the
> resulting daemon cannot start, since the SDK is required in all cases.

## Custom checks and plugin dependencies

The `centengine` container can install custom check scripts and extra APT
dependencies without rebuilding the image. Add the corresponding volumes to
the `centengine` service in the generated `docker-compose.yaml`:

```yaml
    volumes:
      # Custom plugin scripts (must be executable)
      - ./custom-plugins:/usr/lib/nagios/plugins/custom:ro
      # Extra APT packages, installed at startup
      - ./custom-deps.json:/etc/centreon-engine/custom-deps.json:ro
```

* **Custom plugin scripts** placed in `./custom-plugins` become available
  under `/usr/lib/nagios/plugins/custom` inside the container.
* **`custom-deps.json`** lists arbitrary APT packages to install, for example:

  ```json
  {
    "apt": ["snmp", "jq"]
  }
  ```

  This file is read when the container starts, and watched for changes
  afterward: editing it on the host triggers an automatic install of the
  listed packages, with no need to restart the container. Package
  installation runs in the background, so `centengine` is not blocked while
  it happens.

> Centreon monitoring plugins (from Monitoring Connectors) don't need to be
> configured here: Gorgone installs them automatically, in the same shared
> configuration volume, whenever **Automatic installation of plugins** is
> enabled on the **Configuration > Connectors > Monitoring Connectors** page
> and the poller's configuration is deployed from the central server. See
> [Monitoring Connectors](../../monitoring/pluginpacks.md) for details.

### Baking dependencies into a custom image

Instead of installing dependencies at container startup, you can build your
own image on top of the official one and install everything at build time:

```dockerfile
FROM docker.centreon.com/centreon/centreon-engine-trixie:26.10

RUN apt-get update && apt-get install -y --no-install-recommends \
      snmp \
      jq \
    && rm -rf /var/lib/apt/lists/*
```

Build it, then reference it as `ENGINE_TAG` (or override the `image:` value
directly) in your `docker-compose.yaml`. The main advantage of this approach
is startup time: when a poller needs many dependencies, installing them once
at build time is faster than installing them every time the container starts
via `custom-deps.json`.

## Optional: Centreon Monitoring Agent (CMA) support

Add `--with-cma` to the install command so that `centengine` can accept
connections from the Centreon Monitoring Agent over OpenTelemetry gRPC. This
adds the following to the `centengine` service:

```yaml
    volumes:
      - ./certs/poller.crt:/etc/pki/poller.crt:ro
      - ./certs/poller.key:/etc/pki/poller.key:ro
    ports:
      - "4317:4317"
```

Generate the TLS certificates and configure the agent side following
[Configuring certificates](../../cma/cma-certificates.md) and
[Setting up the agent's environment](../../cma/cma-setup.md).

## Optional: Email notifications

The `centengine` image ships two independent ways to send email
notifications, so you can use whichever fits your infrastructure:

* A **native SMTP command**, using the `mail` command (from `mailutils`)
  relayed through `msmtp`.
* The **`centreon-plugin-notification-email` connector**, the same
  Monitoring Connector used for email notifications on package-based
  installations.

Both need an SMTP relay to send through, configured with environment
variables on the `centengine` service:

| Variable | Effect |
|----------|--------|
| `SMTP_HOST` | Address of the SMTP relay. Required for either option to work: notifications are silently not sent while this is empty. |
| `SMTP_PORT` | Port of the SMTP relay (default: `25`). |
| `SMTP_FROM` | `From:` address used in outgoing notification emails. |
| `SMTP_TLS` | Set to `on` to use TLS when connecting to the relay (default: `off`). |

The `docker-compose.yaml` generated by the install script does not map these
variables by default. Add them directly to the `centengine` service's
`environment:` block, or, to keep them out of the `.env` file the install
script regenerates on every run, put them in a separate file and reference it
as an extra `env_file`:

```yaml
services:
  centengine:
    # ...
    env_file:
      - .env
      - .env.smtp
```

```shell
# .env.smtp
SMTP_HOST=smtp.example.com
SMTP_PORT=25
SMTP_FROM=centreon-engine@example.com
SMTP_TLS=off
```

Restart the `centengine` service (`docker compose up -d`) after changing
these variables.

### Option 1: Native SMTP command

`mailutils` and `msmtp` are pre-installed in the image. At startup,
`centengine` writes an `msmtp` configuration from the `SMTP_*` variables
above, so `/usr/bin/mail` sends through your relay with no further setup.

> Centreon Engine executes `command_line` directly, without going through a
> shell: it does not understand pipes (`|`) or redirections on its own. A
> command combining `printf` and `mail` with a pipe must be wrapped in
> `/bin/sh -c '...'` so the shell (not Centreon Engine) interprets the pipe -
> otherwise `printf` runs alone and silently sends nothing. Define
> notification commands like this one on the **Configuration > Commands**
> page:

```shell
/bin/sh -c 'printf "%b" "***** Centreon *****\n\nNotification Type: $NOTIFICATIONTYPE$\n\nHost: $HOSTALIAS$\nState: $HOSTSTATE$\nAddress: $HOSTADDRESS$\nInfo: $HOSTOUTPUT$\n\nDate/Time: $LONGDATETIME$\n" | /usr/bin/mail -s "Host $HOSTSTATE$ alert for $HOSTALIAS$" $CONTACTEMAIL$'
```

### Option 2: centreon-plugin-notification-email connector

The connector is pre-installed under `$CENTREONPLUGINS$` (usually
`/usr/lib/centreon/plugins/`), as `centreon_notification_email.pl`. Its
`--smtp-address`, `--smtp-port` and `--from-address` options can either be
set directly in the command, or reused from the relay you configured above
via poller resource macros (**Configuration > Pollers > Resources**), since
`SMTP_HOST`/`SMTP_PORT`/`SMTP_FROM` are also exposed as the Centreon Engine
macros `$SMTPADDRESS$`, `$SMTPPORT$` and `$SMTPFROMADDRESS$`:

```shell
$CENTREONPLUGINS$centreon_notification_email.pl --plugin=notification::email::plugin --mode=alert --to-address='$CONTACTEMAIL$' --host-address='$HOSTADDRESS$' --host-name='$HOSTNAME$' --host-alias='$HOSTALIAS$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --type='$NOTIFICATIONTYPE$' --host-id='$HOSTID$' --smtp-nossl --smtp-address='$SMTPADDRESS$' --smtp-port='$SMTPPORT$' --from-address='$SMTPFROMADDRESS$'
```

> A full configuration export from the central server regenerates
> `resource.cfg` entirely, which would remove the `$SMTPADDRESS$`-style
> macros set from the environment variables above. If you rely on the
> connector, define these values as poller resource macros in the Centreon
> UI (**Configuration > Pollers > Resources**) instead, so they survive
> future exports; the native SMTP command above is not affected by this,
> since `msmtp`'s configuration lives outside any file Gorgone manages.

Remove `--smtp-nossl` and add `--smtp-user`/`--smtp-password` if your relay
requires authentication. See the connector's own documentation for the full
list of options (host/service duration, Centreon URL for clickable links in
the email, etc.).
