--- 
id: gray-areas-on-charts
title: What does a gray area on my chart mean?
--- 

## What does a gray area on my chart mean?

A gray area on the chart indicates that Experience Monitoring could not collect data during that period, or that the data was null or non-existent.

This can happen when:

- a scenario was manually disabled by a site administrator for a given period (in which case events should mark the start and end of the gray area)
- a server in the System section stopped sending data (for example: a network issue or a temporary shutdown of the server hosting the monitored site)
- you're viewing profiler data in the Applications section (for PHP applications) and the page was served from a full-page cache (for example Varnish). In that case there is no PHP execution and therefore no profiler data to record.

Finally, in rare situations, Experience Monitoring's STM probes may be non-functional for a few minutes. To avoid skewing analysis by making it appear the site was unreachable, Experience Monitoring displays a gray area (red indicates a detected incident on the monitored site).
