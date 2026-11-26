---
id: stm-zones-release-notes
title: Internal probe (STM zones) release notes
description: "Changes in each version of the internal probe that runs your private STM zones: new features, fixes and behaviour changes to check before you update."
---

The internal probe is the probe you deploy in your own infrastructure to run user journeys from a [private STM zone](configuration/user-journey/stm-zones.md). Internal probes are not updated automatically, and only the latest version is supported: [update your probes](configuration/user-journey/stm-zones.md#update-a-probe) when a new version is released.

To check which version your probes run and what the support policy is, see [Internal probe versions](configuration/user-journey/stm-zones-versions.md).

Versions are listed newest first. Release dates are the day each version was merged for release: the public image may have been published later. Each change is labeled as follows:

- **Enhancement**: adds or improves a capability.
- **Fix**: corrects a defect.
- **Maintenance**: updates components.
- **Behaviour change**: may make an existing journey fail after the update. Check your journeys before you update.

<!--
Template for a new probe version (one entry per published probe image, newest first):

## X.Y.Z

Release date: Month Dth, YYYY. [Update procedure](configuration/user-journey/stm-zones.md#update-a-probe).

- **Enhancement**: ...
- **Fix, behaviour change**: ... (say what used to happen, what happens now, and which journeys are affected)
- **Fix**: ...
- **Maintenance**: ...

Do not copy the update procedure into the entry: link to it.
-->

## 1.0.5

Release date: November 25th, 2026. [Update procedure](configuration/user-journey/stm-zones.md#update-a-probe).

- **Enhancement**: The probe masks the journey values marked as secret in everything it uploads to the platform: logs, network recordings and results, whatever the name of the value. Screenshots are not masked. Probes older than 1.0.5 ignore the secret marking and only mask values based on their name: if you use secret values, update your probes.
- **Enhancement**: Each image is tagged with its version (for example `1.0.5`) in addition to `latest`, so that you can pin a probe to a specific version. Images also carry standard labels (product, vendor, licence, version, build date) that you can read with `docker inspect`.
- **Fix, behaviour change**: A form step now fails immediately when one of its fields cannot be found, and the incident names that field. Until now, the field was skipped, the form was submitted anyway, and the journey failed later on an unrelated step. Journeys that relied on a field being silently skipped will start failing.
- **Fix**: The probe's logs show journey and variable names instead of their values.
- **Maintenance**: Third-party components have been updated, including the Ruby runtime (4.0.10).

## 1.0.4

Release date: November 9th, 2026.

- **Enhancement**: The probe connects to `exp.mycentreon.com` by default. The former address still works, so probes started with an explicit address, or older probes, need no change.

## 1.0.3

Release date: November 2nd, 2026.

- **Fix, behaviour change**: An expectation on a request is now checked as a web address. A value that is not a web address (an empty value or a page selector) used to match every request, so the expectation passed on whatever loaded first. The step now fails and says that the address is invalid. Journeys with such an expectation will start failing and must be corrected.
- **Fix**: Wildcards are accepted in request expectations, for example to match any protocol, sub-domain or port.
- **Maintenance**: Third-party components have been updated, including the Ruby runtime (4.0.9).

## 1.0.2

Release date: September 30th, 2026.

- **Fix**: When the browser stops unexpectedly during a journey, the run is reported as a failed step, with a "browser exited" incident that names the step. Until now, nothing was reported, which left a gap in the journey's status timeline.
- **Fix**: A journey that cannot start at all (the browser fails to launch, or the journey cannot be read) now reports a failure instead of nothing.

## 1.0.1

Release date: September 15th, 2026.

- **Fix**: Journey graphs no longer show recurring grey gaps or doubled bars: each result is recorded against the measurement period it was scheduled for, instead of being spread across two periods.
- **Maintenance**: Third-party components with known security advisories have been updated.

## 1.0.0

Release date: September 8th, 2026. First numbered version of the internal probe.

- **Enhancement**: The probe reports its version to the platform and writes it in its logs, at start-up and at the start of each journey.
- **Enhancement**: Results are no longer lost when the platform cannot be reached or is overloaded. The probe stores undelivered results on its disk and sends them again later, oldest first, once fresh results have been sent. The backlog is limited to 500 MB by default. Beyond this limit, the oldest results are dropped and the loss is logged.
- **Fix**: A journey whose definition cannot be read is reported as failed, instead of producing no result.
- **Fix**: An expectation on a request no longer fails when a content delivery network serves the same file from a fallback address after a first failed attempt.
- **Fix**: Finding an element by its text only matches text actually displayed on the page. Text in scripts, styles or the page title is ignored.
