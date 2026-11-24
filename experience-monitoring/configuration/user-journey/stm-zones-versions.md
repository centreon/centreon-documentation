---
id: stm-zones-versions
title: Internal probe versions
description: "How to check your internal probe's version, which version to use, what happens if you don't update, and how often Centreon publishes internal probe updates."
---

Internal probes are the probes you deploy in your own infrastructure to run user journeys from a [private STM zone](stm-zones.md). They are not updated automatically: you update them yourself.

## How do I know my probe's version?

On your organization page, open the **Synthetic Monitoring Zones** tab. The version of each probe is displayed in the **Version** column of the zone's probe list.

## Which version should my probe have?

Your probes must run the latest version. Earlier versions are not supported.

To update a probe, follow the [update procedure](stm-zones.md#update-a-probe).

## What happens if I do not update?

If you do not update your probe, you may miss important bug fixes and security fixes. Consider subscribing to [our security bulletins on our community platform The Watch](https://thewatch.centreon.com/latest-security-bulletins-64).

## How often do you publish updates?

New versions of the internal probe are listed in the [internal probe release notes](../../stm-zones-release-notes.md), with the changes they contain. Check them regularly.

Note that any breaking changes are announced in advance in the Experience Monitoring interface.
