---
id: stm-hardware
title: Hardware requirements for internal probes
description: Size the resources of the probes running in your private Synthetic Monitoring Zones, and calculate how many probes a zone needs
---

An STM probe runs in a Docker container that contains the driver program and the browser that execute your user journeys.
Without a limit, a container uses whatever processing power is free on the machine at any given moment, so the power available to it fluctuates.
To get stable timings that you can compare with the ones measured from an external probe, give each container the same processor and memory budget as what we use for probes hosted on the cloud by Centreon:

- Processor: about 620 MHz per container.
- Memory: 2 GB per container.

This page explains how to translate this budget into the Docker options of your probe, depending on the machine that hosts it.
It also explains how to size the [recommendations probe](#recommendations-probes), which has different needs, and how to calculate [how many containers a zone needs](#capacity-planning).

## Processor for STM probes

### Calculate the --cpus value

The `--cpus` option sets a share of your machine's processor, so the same 620 MHz budget translates into a different value on every machine. Calculate it as: `--cpus = 620 / F`

"F" is the sustained clock speed of your machine's processor, in MHz.

| Sustained clock speed of the processor | --cpus value       |
|----------------------------------------|--------------------|
| 2.4 GHz (a slower server)              | 620 / 2400 ≈ 0.26  |
| 3.1 GHz (same as public zones)         | 620 / 3100 = 0.20  |
| 3.6 GHz (a workstation)                | 620 / 3600 ≈ 0.17  |
| 4.5 GHz (a fast desktop)               | 620 / 4500 ≈ 0.14  |

In practice, the computed value is always below 1. A value of 1 or more means there is an error in your calculation.

To find the clock speed of your processor on Linux use the following command:

```shell
watch grep MHz /proc/cpuinfo
```

It shows the actual speed of the cores while a container is running. This is the most reliable figure.

### Fine-tune the value

This calculation gives a close approximation, but two factors can make your private zone faster or slower than public zones:

- Hyperthreading: the budget of public zones is based on machines with hyperthreading enabled. If hyperthreading is disabled on your machine, each core does more work at the same clock speed (about 30% more). Lower your `--cpus` value accordingly.
- Processor generation: recent processors do more work per clock cycle than older ones. To adjust for this, run the same user journey from your private zone and from a public zone for a day, then compare the timings. If your private zone is consistently faster, lower `--cpus`. If it is slower, raise it.

### Check that the limit is reached

When loading a page, the browser runs several processes at once and can use more than one core. If the container never reaches its limit, the limit has no effect and your timings vary as if there were no limit at all.

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

- Always set a limit, and keep it the same over time.
- Use the same budget for all containers in a zone. If a zone spans machines with different processors, compute the value for each machine, so that every container gets the same 620 MHz budget.

>Do not allocate more processor time than the machine has.
>The number of logical CPUs of the machine must be greater than or equal to the number of containers × `--cpus`.
>Otherwise, when all containers are busy at the same time, they compete for the same cores and interfere with each other.

If you do not need to compare your results with public zones (for example, you only monitor from your private zones and compare each journey with its own history), the exact budget matters less. 
The two rules above still apply.

## Memory for STM probes

- Set `--memory` to 2 GB. This matches public zones and does not depend on the machine. A simple journey uses about 1 GB. A lower value increases the risk of the browser being stopped during a journey, which results in failed runs. A higher value is not useful.
- Plan for about 1 GB of machine memory per container, or 2 GB per container if you want to be sure that the system never runs out of memory.
- You do not need any other memory option. The probe configures the browser so that the default values are enough.

### Launch an STM probe with resource limits

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

## Recommendations probes

The recommendations probe (`--run-mode recommendations`) runs Google Lighthouse audits, an open-source tool for measuring web pages quality.
Its needs are the opposite of those of STM probes.

Lighthouse slows itself down on purpose to emulate a mid-range phone on an average connection: for each audit, it applies a CPU slowdown multiplier (4× when the journey emulates a mobile device, 1× for a desktop) and the bandwidth limits of the journey.
This is why, in public zones, the recommendations browser has no limit and runs one audit at a time on a dedicated machine with 2 logical CPUs and 8 GB of memory: each audit gets a whole machine.

If a `--cpus` limit already slows the container down, the 4× slowdown of Lighthouse applies to a browser that is already slow, and the audit measures a device slower than the one it emulates.
Lighthouse warns that this "can negatively affect your performance score" (see [Check the CPU/Memory power index](#check-the-cpumemory-power-index)).

Give the recommendations probe a larger container, whose processor limit, if any, is never reached.

### Processor

- Do not use `--cpus` to slow down the container. In public zones, an audit gets two 3.1 GHz hyperthreads with no limit. If you set a limit to protect the machine from a runaway audit, set it to at least 2.
- Never set `--cpus` below 1. A limit under one core works by pausing the container for part of every fraction of a second, and Lighthouse can neither detect these pauses nor compensate for them.
- [Check the throttling counter](#check-that-the-limit-is-reached): for this container, `nr_throttled` must stay at zero. A growing counter means that the limit is too low.
- Match the clock speed, not the share of the processor. Lighthouse measures the speed of the single core its speed test runs on. A machine that holds about 3 GHz or more on a core that nothing else uses matches public zones. To confirm it, [check the CPU/Memory power index](#check-the-cpumemory-power-index).
- Use a real core. Avoid machines whose processor is shared or "burstable" (for example, a cloud instance that has used up its CPU credits, or an oversubscribed virtual machine): the effective speed of the core changes from one run to the next, and so do the scores.
- Prefer a dedicated machine. At the very least, do not place the container next to a full set of STM containers: they are sized to use all the processor time they are given.

### Memory

Set `--memory` to at least 4 GB. 8 GB matches the machines of public zones.
During an audit, the container holds the browser, Lighthouse and the driver program at the same time, and Lighthouse keeps a detailed recording of the whole page load in memory.

### Launch the recommendations probe

```shell
docker run -d \
--cpus="<CPUS>" \
--memory="4g" --memory-swap="4g" \
--restart unless-stopped \
<PROBE_IMAGE> \
--auth-token <AUTH_TOKEN> \
--zone-id <ZONE_ID> \
--run-mode recommendations
```

- Replace `<PROBE_IMAGE>`, `<AUTH_TOKEN>` and `<ZONE_ID>` with the values shown in the **Associate a probe** window.
- The `--cpus` option is optional. If you keep it, replace `<CPUS>` with a value of 2 or more.

### Check the CPU/Memory power index

At the start of every audit, before applying any slowdown, Lighthouse runs a short speed test in the browser. It records the result in the report as the benchmark index, shown in Experience Monitoring as CPU/Memory power.
Lighthouse describes this index as "a rough approximation of the host device's CPU performance" and publishes the following reference brackets:

| Device class     | Example             | Benchmark index |
|------------------|---------------------|-----------------|
| High-end desktop | 16-inch MacBook Pro | 1500 – 2000     |
| Low-end desktop  | Intel NUC i3        | 1000 – 1500     |
| High-end mobile  | Samsung S10         | 800 – 1200      |
| Mid-tier mobile  | Moto G4             | 125 – 800       |
| Low-end mobile   | Samsung Galaxy J2   | Below 125       |

The default 4× slowdown is calibrated to move "a typical run in the high-end desktop bracket somewhere into the mid-tier mobile bracket". Lighthouse considers a machine with an index below 1000 too slow for this default.
In this case, the command-line version of Lighthouse displays the following warning: "The tested device appears to have a slower CPU than Lighthouse expects. This can negatively affect your performance score". The probe does not display this warning in the container logs, so you have to check the index in Experience Monitoring.

The speed test runs on a single core, so the index reflects the speed of one core and its limit, not the number of cores. Raising `--cpus` above 2 does not raise the index, but a limit below 1 lowers it directly, and so does a slow or shared core.

To check the index:

1. Start the recommendations probe of the zone. A journey that has never been audited from this zone can be audited right away: the first audit starts about a minute after the container comes online, so you do not need to wait a day. After that, each journey of the zone is audited once every 24 hours.
2. In the Experience Monitoring interface, open a journey step, then open the **Last recommendations** tab of a run whose header shows the name of your private zone in the zone block.
3. In the simulation block of the header, read the following values:
   - CPU/Memory power: the benchmark index, i.e., the raw speed that Lighthouse measured for the container before slowing it down.
   - CPU slowdown: the multiplier applied (4x for a journey that emulates a mobile device, 1x for a desktop).
4. Compare these values with a run of the same journey from a public zone, and with the brackets above. Aim for a CPU/Memory power of 1000 or more, ideally in the same bracket as the run from the public zone.

If the index is too low:

- Check that no `--cpus` limit below 1 is applied, and that the sum of the limits on the machine does not exceed its number of logical CPUs.
- Move the container to a machine with a faster or dedicated core, or away from busy STM containers.
- If the gap with public zones is systematic and you cannot close it, take it into account when you read the scores. A lower index moves the emulated device down one bracket, so the performance scores of this zone will always be lower than those of public zones for the same page.

## Capacity planning

### How work is distributed

Each container is a single worker that does one thing at a time:

- Every 60 seconds, it asks the platform for a job for its zone.
- If it gets one, it runs the journey to the end, sends the result, and only then waits for its next request. A journey that takes longer than a minute delays the next request.
- Containers of the same zone are independent. To add a worker, start another container. You do not need to configure anything else: identical `docker run` commands create distinct probes in the zone, each identified by its container name.

The platform gives each request the most overdue journey of the zone, and gives a journey at most once per polling interval.
When a zone lacks capacity, journeys are not queued for later: the interval goes by without a run. On the graph of the journey, this shows as a gap or irregular spacing between points, not as an error. This is the symptom to watch for.

### Number of STM probes

Each journey has a polling interval, defined in its settings, that sets how often it runs: 1, 2, 3, 6, 12, 24 or 60 minutes (2 minutes by default). Your plan may impose a minimum interval.

For each journey, you need two values:

- "P": the polling interval, in seconds.
- "D": the duration of one run, in seconds. Use the journey duration shown in Experience Monitoring, plus about 10 seconds to start the browser and send the result. Long journeys with many steps on slow sites can last several minutes.

A container never asks for work more than once per minute, so even a short journey occupies its container for a full minute. Calculate the number of containers as follows:

1. Time a journey occupies a container: "S" = the larger of 60 and D.
2. Load of the zone (number of workers kept busy): "L" = the sum of S / P for all journeys.
3. Number of containers: "N" = L / 0.7, rounded up.

Dividing by 0.7 leaves 30% of spare capacity, so that the platform can catch up when several journeys are due at the same time. With a load close to 100%, every container is always busy, and every journey runs late.
Whatever the result, use at least 2 containers, so that the zone keeps running when a container restarts or is updated.

For example, for a zone with the following journeys:

| Journeys                 | Interval P | Duration D | Occupation S | Load S / P         |
|--------------------------|------------|------------|--------------|--------------------|
| 10 short journeys        | 60 s       | 20 s       | 60 s         | 10 × 1.00 = 10.0   |
| 20 medium journeys       | 120 s      | 45 s       | 60 s         | 20 × 0.50 = 10.0   |
| 5 long checkout journeys | 360 s      | 150 s      | 150 s        | 5 × 0.42 = 2.1     |
| Total load L         |            |            |              | 22.1           |

N = 22.1 / 0.7 ≈ 31.6, so 32 containers.
On 3 GHz machines (`--cpus="0.2"`, see [Calculate the --cpus value](#calculate-the---cpus-value)) with `--memory="2g"` and about 1 GB of real memory per container, this represents 6.4 logical CPUs and about 32 GB of memory across the machines of the zone. For example, two machines with 4 logical CPUs and 16 GB of memory each, running 16 containers each.
Slower machines need a higher `--cpus` value per container, and therefore more logical CPUs for the same 32 containers.

### When the numbers are too high

In the example above, the ten one-minute journeys alone represent almost half of the load, because a journey that runs every minute occupies a worker permanently. Before adding machines, consider the following options:

- Increase the polling interval of the journeys that do not need one-minute resolution. Going from 1 to 2 minutes halves the load of a journey, and going from 1 to 6 minutes divides it by six. In the example, running the ten short journeys every 2 minutes instead of every minute reduces the load to 17.1, and the number of containers to 25.
- Shorten long journeys, or split them in two: a 150-second journey occupies a container for two and a half minutes at each run.
- Split the zone: journeys that only need to run from a given network can have a smaller dedicated zone with its own containers.

### Number of recommendations probes

Each journey of the zone is audited once every 24 hours. The duration of an audit is shown in Experience Monitoring, on the recommendations report of the journey. Use this value to calculate the number of containers:

- Audits per day per container = 86,400 / the larger of 60 and the audit duration in seconds.
- Number of containers = number of journeys with recommendations enabled / audits per day per container, rounded up.

For example, if audits last 2 minutes, one container handles up to 720 journeys a day. One recommendations container per zone is enough in most cases.
Run two only for redundancy, and size them as explained in [Recommendations probes](#recommendations-probes). Never reduce their size to run more of them.

The recommendations container does not need to run all the time. The platform does not audit a journey at a fixed time of day: as soon as a container asks for work, it gets any journey whose last audit is more than 24 hours old.
A container that runs only a few hours a day, or only on some days, audits all the journeys that are due one after the other when it comes online, then waits.
While it is stopped, you only lose the audits that would have run in the meantime: if the container was down for two days, a journey is audited once when the container is back, not twice.

This means that you can run the recommendations container on a machine that is otherwise busy, during a quiet time window (for example, at night), instead of dedicating a machine to it permanently.
The window must be long enough for all due audits: number of journeys × the larger of 60 and the audit duration, in seconds, plus about a minute for the container to start.

### Before going live

- Start with the calculated number of containers, then watch the zone for a day. If the points of a journey are spaced further apart than its polling interval, the zone lacks workers, or the durations you assumed were too short.
- Calculate the number of containers again whenever you add journeys to the zone or shorten their polling intervals.
- Keep all the STM containers of a zone identical: same processor budget, same `--memory` value, same image version. Containers that differ bring back the variance that the limits are there to remove.
