---
id: errors-and-unavailability-front-end
title: Understanding errors & unavailability in Experience Monitoring
--- 

> The HAR for all steps can be found under the incident screenshot to help your developers understand where the incident originated.

# Troubleshooting user journey incidents

When a probe detects a failure during a user journey run, Experience Monitoring records an incident.
This page explains how to investigate incidents using screenshots, and describes the most common error types you may encounter.

## Viewing the incident screenshot

When a probe detects an incident, it attempts to capture a screenshot of the page
at the moment of failure. This is usually the fastest way to understand what went wrong.

To view the screenshot:

1. On the journey graph, click the red area corresponding to the incident.
2. Select **Incident details** (or **View screenshot**) from the menu that appears.
3. A window will open showing the page the probe encountered during the failure.

No screenshot available?

The probe cannot capture a screenshot when the server returns no content at all.
This most commonly occurs during a Step timed out error, where there is simply nothing to capture.

## Error reference

### Expected string not found

What it means:

Each step can be configured with an expected word or phrase that should appear on the page to confirm the correct page loaded.
This error means that string could not be found.

Possible causes and fixes:

- The page content has changed: the string no longer exists on the page.
  Update the expected string to match current page content.
- The page no longer exists: the journey was redirected elsewhere (for example, a removed product page). 
  Update the journey to point to a valid page and set a new expected string.
- The page did not fully load: less common, but the string may have been
  present in content that hadn't loaded yet when the probe checked.

### User journey timeout

What it means:

The entire journey took longer than its measurement interval allows. 
For example, a journey set to run every 3 minutes must complete all its steps within those 3 minutes.

What to do:

The individual steps may be working correctly but there simply wasn't enough time to complete them all.
You can try:

- Increasing the measurement interval to give the journey more time.
- Reducing the number or complexity of steps.
- Investigating whether any individual steps are running slower than expected (see [Step timeout](#step-timeout)) 

### Step timeout

What it means:

One step took longer than its allowed timeout and was marked as failed.

Possible causes and fixes:

- Slow page load: the page itself is taking too long to respond.
  Investigate server or network performance.
- Timeout set too short: the timeout for this step may be too aggressive for the content it loads.
  Increase the step timeout in the step's advanced settings.
- Misconfigured verification: if the step is looking for an element that doesn't exist, it will wait until it times out on every run.
  Review the step's expected string or element selector.

### Invalid return code

What it means:

Every web page returns a status code when it loads.
The expected code is 200 (success). This error means the probe received a different code, such as:

- `404` — page not found
- `503` — service unavailable

What to do:

- If the page no longer exists (for example, a removed product), update the journey to use a valid URL.
- If the page should exist but is returning an error, the issue lies with the server or application and requires further investigation.

### Unable to resolve host

What it means:

The probe could not translate the site's domain name into an IP address.
This points to a DNS issue. 
The DNS server either failed to respond or returned no result for the domain.

What to do:

Check whether the domain resolves correctly from outside your network.
If the issue is intermittent, it may indicate DNS instability. 
If it is persistent, verify your DNS configuration and that the domain is still active.