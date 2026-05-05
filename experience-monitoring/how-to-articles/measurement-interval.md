---
id: measurement-interval
title: Measurement interval
--- 

## Definition

The user-journey measurement interval determines how often Experience Monitoring probes run on your site.

For example: if your measurement interval is 3 minutes, the probe will perform a full run of the journey every 3 minutes.

Note: the total execution time of your user journey must not exceed this interval.

## Configuration

The measurement interval for a user journey can be configured in the advanced settings of each journey.

[Create a scenario ("User journey")](../configuration/user-journey/create-a-scenario.md)

## Implications

Changing the measurement interval has several implications:

- If the interval is reduced, some gray areas may appear in your historical data because the number of points shown in charts will differ from before.
- The alert configuration for that journey will be automatically adjusted to take the new measurement interval into account.
