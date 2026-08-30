---
id: experience-monitoring-glossary
title: Experience Monitoring glossary
description: Definitions of key Experience Monitoring terms
---

## Action

One of the stages of a [user journey](#user-journey). An action is anything the user can do without changing pages or the act of changing pages itself.
Actions are contained within [steps](#step). A step can contain multiple actions.

## CSS Selector

A pattern used in a website's stylesheet to identify which part of a page should be styled. 
Just as you might highlight specific words in a document before changing their font, a CSS selector picks out specific elements so visual rules can be applied to them precisely.
CSS Selectors are less sensitive to site changes so they are a reliable element to select for [User Journeys](./configuration/user-journey/user-journey-intro.md). If you don't know how to create CSS selectors, you can join our [community platform](https://thewatch.centreon.com/) to ask for help configuring your user journey.

## Digital Sobriety Score

A score ranging from 0 to 100 that indicates the overall efficiency of your site to help you reduce its environmental impact.
Calculated using data from either [Real User Monitoring](#real-user-monitoring) or your [user journeys](#user-journey).

## Hero Time

A metric exclusive to Experience Monitoring. It measures the time the [User Journey](#user-journey) probe takes between the start and the end of a step.

## Largest Contentful Paint

Largest Contentful Paint (LCP) is the metric of the render time of the largest image or text block visible from the start of page load.

## Load Test

[Load Tests](https://docs.centreon.com/experience-monitoring/getting-started/load-tests/) are a module of Experience Monitoring.
The test consists of simulating heavy traffic on your site to evaluate how it behaves in these conditions and identify bottlenecks.
The users are simulated by Experience Monitoring but results in real traffic on your site.

## OnLoad

Onload is the metric of how long it takes for all elements of the page to have fully loaded.

## Ping

A ping is a network test. A request is sent to a server to check for a response and measure how long it takes to receive that response.
Experience Monitoring uses [TCP and ICMP](https://docs.centreon.com/experience-monitoring/performance-analysis/network-tab-indicators/#difference-between-tcp-ping-and-icmp-ping) for its tests.

## Real User Monitoring

[Real User Monitoring (or RUM)](https://docs.centreon.com/experience-monitoring/getting-started/real-user-monitoring/) is a module of Experience Monitoring.
Using an HTML tag inserted into your site's code, Experience Monitoring can measure the loading times experienced by real users.
The tag is loaded separately to avoid it influencing the data.

## Speed Index

Speed Index is the metric of how quickly the visual elements of a page are displayed during the loading.
A page that begins rendering elements after 1s and finishes at 5s will have a better Speed Index than a page that also finishes at 5s but only starts rendering at 4s.

Speed Index is expressed in seconds but should be treated as a score. It doesn't correspond to a single event on a timeline.

## Step

One of the stages of a [user journey](#user-journey). A step represents a page of the site.
Steps contain [actions](#action) which determine what the probe does within a given page. A step can contain multiple actions.

## Synthetic Monitoring Zone

A [Synthetic Monitoring Zone (or STM zone)](./configuration/user-journey/stm-zones.md) is a domain internal to your organization. STM zones allow the User Journey probe to make its checks on sites unavailable to users outside of your organization.

## Time To First Byte

Time To First Byte (TTFB) is the metric of the interval between the browser's initial HTTP request for a page and the start of the response (i.e. when the first byte of data is received).

## User Journey

[User Journey](./getting-started/synthetic-monitoring.md) is the synthetic monitoring (or "STM") module of Experience Monitoring.
A probe is configured to follow a set navigation path of your site and measure the loading times of the pages.

## Webhook

One-way communication between applications triggered by a specified event. Webhooks allow for the integration of applications that may not have been originally designed to work together.
In Experience Monitoring, webhooks are used to send [notifications](./configuration/user-journey/experience-monitoring-notifications.md) to applications.