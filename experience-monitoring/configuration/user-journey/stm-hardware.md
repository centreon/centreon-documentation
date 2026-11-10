---
id: stm-hardware
title: Hardware requirements for internal probes
description: Size the resources of the probes running in your private Synthetic Monitoring Zones, and calculate how many probes a zone needs
---

When running an STM probe or a recommendation probe on an STM zone, the probe is hosted on your own machine as a Docker container.
This means the probe is using up processor time and memory. 
A container without limits uses any spare processing power the machine has at the moment.
Because of this, the processing power available to the container can change depending on how the machine is being used and impact the probe results. 
To avoid the results being influenced, limit a part of the container to be dedicated to running the probe.
This way, each run of the probe is done in similar conditions.

This topic explains how to calculate the adequate limits to run the probes as there is no universal value for this.
The values are also different depending on whether you will be running an STM probe or a recommendations probe.

To establish these limits, Docker has two option: '--cpus' and '--memory'. Both must be written before the image name on the command line.
We also recommend using '--memory-swap' and set it as the same value as '--memory'. This prevents the container from using disk space as memory.
Note that it must be set at the same value as '--memory' to prevent this, setting it to 0 does not disable this option.

```shell
docker run -d \
  --cpus="<COMPUTED_VALUE>" \
  --memory="1g" --memory-swap="1g" \
  --restart unless-stopped \
  <PROBE_IMAGE> \
  --auth-token <AUTH_TOKEN> \
  --zone-id <ZONE_ID> \
  --run-mode stm
```

To get stable timings that you can compare with the ones measured from an external probe, you can give each container the same processor and memory budget as what we use for probes hosted on the cloud by Centreon:

- Processor: about 620 MHz per container.
- Memory: 2 GB per container.

However, this is a base value that works better when fine-tuned to your machine.
This page explains how to adapt the processing power into the Docker options of your probe, depending on the machine that hosts it.
This should only be done if you are frequently running into issues with your probe's results.

## Computing for an STM probe

Your starting point for the value of '--cpus' is 620 MHz divided by the sustained clock speed of the machine's processor. Note this is not the figure printed on the box (which is the maximum speed of the processor nor the idle figure). You can use the following command to determine the sustained clock speed of your machine on Linux:

```shell
watch grep MHz /proc/cpuinfo
```

| Processor sustained clock speed   | --cpus to use     |
| 2.4 GHz (a slower server)         | 620 / 2400 = 0.26 |
| 3.1 GHz (same as a public zone)   | 620 / 3100 = 0.20 |
| 3.6 GHz (a workstation)           | 620 / 3600 = 0.17 |
| 4.5 GHz (a fast desktop)          | 620 / 4500 = 0.14 |

This is only a starting point: the idea of setting a limit is that the container actually reaches it, otherwise it is the same as if it had no limit at all.
Let the probe run a few journeys then check the number of times it had to pause because the container reached its limit using this command:

```shell
docker exec <container> cat /sys/fs/cgroup/cpu.stat
```

This will return the 'nr_throttled' counter which must be greater than zero to confirm the container is reaching its limit.
If the counter shows zero, gradually reduce the number of CPUs until ___.
If the limits are too narrow, the runs will show as failed. Gradually increase the number of CPUs until ____.



As a reminder, we recommend also setting '--memory-swap' with the same values you established for '--memory'

## Computing for a recommendations probe

For the recommendations probe, we want the opposite of the STM probe: this probe should never reach its container's limits.
This is because the recommendation probe runs Google Lighthouse audits which intentionally slow down the probe to simulate browsing from different devices.
We still establish limits to avoid machine usage influencing the results but they should be large enough to never be reached.

## Capacity planning