---
id: stm-hardware
title: Hardware requirements for STM probes
description: Size the resources of the STM probes running in your private Synthetic Monitoring Zones
---

An STM probe runs in a Docker container that contains the driver program and the browser that execute your user journeys.
To get stable timings that you can compare with the ones measured from public zones, give each container the same processor and memory budget as a slot in a public zone:

- **Processor**: about 620 MHz per container.
- **Memory**: 2 GB per container.

This page explains how to translate this budget into the Docker options of your probe, depending on the machine that hosts it.

## Processor

### Compute the --cpus value

The `--cpus` option sets a share of your machine's processor, so the same 620 MHz budget translates into a different value on every machine. Compute it as follows:

```text
--cpus = 620 / F
```

**F** is the sustained clock speed of your machine's processor, in MHz.

| Sustained clock speed of the processor | --cpus value       |
|----------------------------------------|--------------------|
| 2.4 GHz (a slower server)              | 620 / 2400 ≈ 0.26  |
| 3.1 GHz (same as public zones)         | 620 / 3100 = 0.20  |
| 3.6 GHz (a workstation)                | 620 / 3600 ≈ 0.17  |
| 4.5 GHz (a fast desktop)               | 620 / 4500 ≈ 0.14  |

To find the clock speed of your processor on Linux:

- The `lscpu` command shows the processor model and its base and maximum speeds. The sustained speed is listed in the manufacturer's specification sheet for that model.
- The following command shows the actual speed of the cores while a container is running. This is the most reliable figure:

  ```shell
  watch grep MHz /proc/cpuinfo
  ```

### Fine-tune the value

This calculation gives a close approximation, but two factors can make your private zone faster or slower than public zones:

- Hyperthreading: the budget of public zones is based on machines with hyperthreading enabled. If hyperthreading is disabled on your machine, each core does more work at the same clock speed (about 30% more). Lower your `--cpus` value accordingly.
- Processor generation: recent processors do more work per clock cycle than older ones. To adjust for this, run the same user journey from your private zone and from a public zone for a day, then compare the timings. If your private zone is consistently faster, lower `--cpus`. If it is slower, raise it.

### Check that the limit is reached

A limit is only useful if the container actually reaches it. When loading a page, the browser runs several processes at once and can use more than one core. If the container never reaches its limit, the limit has no effect and your timings vary as if there were no limit at all.

In practice, the computed value is always below 1. A value of 1 or more means there is an error in your calculation.

Once the container has run a few journeys, check how many times it was held back for exceeding its limit:

```shell
docker exec <container> cat /sys/fs/cgroup/cpu.stat
```

On older systems, use this command instead:

```shell
docker exec <container> cat /sys/fs/cgroup/cpu,cpuacct/cpu.stat
```

The `nr_throttled` value must be greater than zero and increase from one check to the next. If it stays at zero after several journeys, the container never reaches its limit: lower the `--cpus` value.

You can also use the `docker stats` command, although it is less precise: while a journey runs, the CPU percentage of the container should level off at `--cpus` × 100% without going above it.

### Rules for the --cpus value

- Always set a limit**, and keep it the same over time.
- Use the same budget for all containers in a zone. If a zone spans machines with different processors, compute the value for each machine, so that every container gets the same 620 MHz budget.

>Do not allocate more processor time than the machine has.
>The number of logical CPUs of the machine must be greater than or equal to the number of containers × `--cpus`.
>Otherwise, when all containers are busy at the same time, they compete for the same cores and interfere with each other.

If you do not need to compare your results with public zones (for example, you only monitor from your private zones and compare each journey with its own history), the exact budget matters less. These rules still apply.

## Memory

- Set `--memory` to 2 GB. This matches public zones and does not depend on the machine. A simple journey uses about 1 GB. A lower value increases the risk of the browser being stopped during a journey, which results in failed runs. A higher value is not useful.
- Plan for about 1 GB of machine memory per container, or 2 GB per container if you want to be sure that the system never runs out of memory.
- You do not need any other memory option, the probe configures the browser so that the default values are enough.

## Launch the probe with resource limits

Add the resource options to the command shown in the **Associate a probe** window of your Synthetic Monitoring Zone (see [Monitoring non-public user journeys](stm-zones.md)):

```shell
docker run -d \
  --cpus="<COMPUTED>" \
  --memory="2g" --memory-swap="2g" \
  --restart unless-stopped \
  <PROBE_IMAGE> \
  --auth-token <AUTH_TOKEN> \
  --zone-id <ZONE_ID> \
  --run-mode stm
```

- Replace `<PROBE_IMAGE>`, `<AUTH_TOKEN>` and `<ZONE_ID>` with the values shown in the **Associate a probe** window.
- Replace `<COMPUTED>` with the `--cpus` value you computed for the machine that runs the container.
