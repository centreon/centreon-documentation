---
id: total-blocking-time
title: TBT - Total Blocking Time (Web Vitals)
--- 

# TTB - Total Blocking Time (Web Vital)

<aside>
🌐 TBT is documented on Google's Web Dev: [https://web.dev/tbt/]. This page summarizes that documentation.

</aside>

<aside>
💡 Total Blocking Time (TBT) is an aggregated metric measuring how non-interactive a page is during loading. It quantifies how long the main thread remains blocked before the page becomes reliably interactive.

</aside>

## What is TBT

Total Blocking Time measures the total amount of time the main thread is blocked long enough that a user interaction would not produce a timely response.

These periods are measured between First Contentful Paint (FCP) and Time to Interactive (TTI) — that is, from when the first content appears to when the page becomes interactive.

The main thread is considered "blocked" when a task runs longer than 50ms. If the user interacts at that moment, the site won't respond until the task finishes, which is perceivable.

The blocking time for a task is the portion of its duration beyond 50ms. TBT is the sum of all blocking times.

For example, consider this main thread:

![image](https://web-dev.imgix.net/image/admin/clHG8Yv239lXsGWD6Iu6.svg)

Among five tasks, three are blocking: the first two and the last one.

The first lasts 250ms and therefore contributes 200ms of blocking time. The second lasts 90ms and contributes 40ms. The last lasts 155ms and contributes 105ms.

![image](https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xKxwKagiz8RliuOI2Xtc.svg)

TBT is 345ms (the sum of blocking times), while the main thread total duration is 560ms (the sum of all task durations).

| Good | < 300ms |
| --- | --- |
| Fair | between 300ms and 600ms |
| Poor | > 600ms |
