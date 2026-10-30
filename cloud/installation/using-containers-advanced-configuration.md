---
id: using-containers-advanced-configuration
title: Advanced container configuration
description: "Optional configuration for a container-based poller: VMware monitoring, custom plugins, CMA support"
---

This page covers optional configuration for a poller [deployed in a
container](./using-containers.md),
beyond the default `centengine` and `gorgone` services.

## Allow the poller to use custom plugins for monitoring

This section only applies if you want to use your own custom plugins for monitoring. No action is needed to use the official Centreon monitoring connectors.

The `centengine` container can install custom check scripts and extra APT dependencies without rebuilding the image.

In the generated `docker-compose.yaml`, add the following volumes to the `centengine` service :

```yaml
    volumes:
      # Custom plugin scripts (must be executable)
      - ./custom-plugins:/usr/lib/nagios/plugins/custom:ro
      # Extra APT packages, installed at startup
      - ./custom-deps.json:/etc/centreon-engine/custom-deps.json:ro
```

* Create a **custom-plugins** directory and store your custom plugin scripts there. The container will copy them to `/usr/lib/nagios/plugins/custom`.
* If your plugin needs system dependencies, you must declare them in a `custom-deps.json` file. For example:

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

### Baking dependencies into a custom image

If you have a large number of dependencies, you can build a custom image on top of the official one instead of adding the dependencies one by one to the `custom-deps.json` file. Your custom image will be deployed using the docker-compose.

<!-- Instead of installing dependencies at container startup, you can build your
own image on top of the official one and install everything at build time: -->

```dockerfile
FROM ghcr.io/centreon/centreon-engine:26.10

RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends \
      snmp \
      jq \
    && sudo apt-get clean
```

Build it, then reference it as `ENGINE_TAG` (or override the `image:` value
directly) in your `docker-compose.yaml`. The main advantage of this approach
is startup time: when a poller needs many dependencies, installing them once
at build time is faster than installing them every time the container starts
via `custom-deps.json`.

## Allow the poller to monitor VMware resources

Follow this procedure before you deploy a poller in a container using the `--with-vmware` option.

Monitoring VMware infrastructure requires the proprietary VMware Perl SDK:
the daemon cannot start at all without it, even with plain-text credentials.
Because the SDK cannot be redistributed for licensing reasons, the
`centreon-vmware` container image is not published on a registry. The
generated `docker-compose.yaml` references it as
`connector-vmware:${VMWARE_TAG:-local}` with `pull_policy: never`, so you must
build it locally, on the container host, before using `--with-vmware`.

Download the SDK archives from the Broadcom developer portal (see the
[prerequisites of the VMware ESX monitoring
connector](/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx#prerequisites)
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

## Allow the poller to receive data from Centreon Monitoring Agents (CMA)

Add `--with-cma` to the poller install command so that `centengine` can accept
connections from the Centreon Monitoring Agent over OpenTelemetry gRPC. Using `--with-cma`
adds the following to the `centengine` service in the docker-compose:

```yaml
    volumes:
      - ./certs/poller.crt:/etc/pki/poller.crt:ro
      - ./certs/poller.key:/etc/pki/poller.key:ro
    ports:
      - "4317:4317"
```

Then generate the corresponding TLS certificates and configure the agent side following
[Configuring certificates](../cma/cma-certificates.md) and
[Setting up the agent's environment](../cma/cma-setup.md).
