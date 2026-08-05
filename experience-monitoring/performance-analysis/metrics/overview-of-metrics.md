---
id: overview-of-metrics
title: Overview of metrics
description: Directory of all Experience Monitoring performance metrics
---

Experience Monitoring offers several performance metrics listed in this topic. Click any metric to open a dedicated page with more details.

## [Hero Time](./hero-time.md)

Hero Time is an Experience Monitoring-specific metric. It measures the time the Experience Monitoring probe takes from the start of the interaction until the success verification occurs (examples: the page is loaded, the cookie consent popup appears, etc.).

Improving this metric means the interactivity is better: interaction results are visible faster.

## [TTFB (Time To First Byte)](./time-to-first-byte.md)

When a user requests a page, there is a wait before the response arrives: the request travels across the internet, the server receives and processes it, generates the page, and then the response travels back. TTFB measures the waiting time before receiving the very first byte of the response.

During this time the page is blank. Improving TTFB makes the page show up faster and benefits all other performance metrics.

## [Speed Index](./speed-index.md)

Speed Index is a score that evaluates how quickly a page visually completes. A page that loads in 5s but stays blank for 4s will have a worse Speed Index than a page that also finishes in 5s but starts rendering elements on the first second.

Speed Index is a complex indicator: it’s expressed in seconds but should be treated as a score rather than a pure time measurement. Improving it means the perceived rendering speed is better for users.

## [Onload](./on-load.md)

Onload is the moment when the page has finished loading.

A long Onload may indicate the page is too heavy or complex.

## [LCP (Largest Contentful Paint)](./largest-contentful-paint.md)

LCP measures when the most visually significant element appears. This can be an image or a text block. On an ecommerce homepage it is often the main banner. On a product page it is usually the product image.

LCP is a Core Web Vitals metric monitored by Google. Improving LCP enhances perceived rendering speed and can improve SEO.

## [TBT (Total Blocking Time)](./total-blocking-time.md)

Total Blocking Time quantifies how unusable a page is before it becomes stable and smooth.

During page loading, many files are parsed and executed by the browser. These executions can block the main thread (i.e. the user cannot interact with the page during that time and may perceive it). TBT measures the cumulative duration of such blocking between the time the first visual element appears and the time the page becomes fully interactive.

Improving TBT helps ensure the page is usable even before it is fully loaded.

## [CLS (Cumulative Layout Shift)](./cumulative-layout-shift.md)

CLS measures visual stability. If an element appears and then shifts during loading, users may be frustrated (for example: the close button for a popup moving). A CLS score of 0 is perfect: nothing moves after rendering.

CLS is a Core Web Vitals metric monitored by Google. Improving it reduces frustration and benefits SEO.

## Performance score

The performance score, from 1 to 100 (for full page load), represents the overall page performance across the metrics above.
