---
id: total-blocking-time
title: TBT - Total Blocking Time (Web Vitals)
--- 

> TBT is documented on [Google's Web Dev](https://web.dev/tbt/) site. This page summarizes that documentation.

> Total Blocking Time (TBT) is an aggregated metric measuring how non-interactive a page is during loading. It quantifies how long the main thread remains blocked before the page becomes reliably interactive.

## What is TBT?

- Total Blocking Time measures the total amount of time the main thread is blocked long enough that a user interaction would not produce a timely response.

- These periods are measured between First Contentful Paint (FCP) and Time to Interactive (TTI). That is from when the first content appears to when the page becomes interactive.

- The main thread is considered "blocked" when a task runs longer than 50ms. If the user interacts at that moment, the site won't respond until the task finishes, which is perceivable.

- The blocking time for a task is the portion of its duration beyond 50ms. TBT is the sum of all blocking times.

## Scoring

| Good | < 300ms |
| --- | --- |
| Fair | between 300ms and 600ms |
| Poor | > 600ms |
