---
id: digital-sobriety-score
title: Digital Sobriety Score
---

The Digital Sobriety Score (DSS) is a grade given by Centreon Experience Monitoring that informs on a website's impact on the environment. While websites are immaterial, there is a physical infrastructure that keeps them running. The DSS measures the environmental impact of this infrastructure.

The DSS can be found on the **Global View**

It is somewhat similar to the [GreenIT collective](https://www.ecoindex.fr/en/)'s Eco Index. However, while the Eco Index emphasizes simple evaluation based on three technical criteria for a given URL, which is particularly useful during development, CXM's Digital Sobriety Score adopts a broader, audit-style approach more suited to sites already in production.

The DSS is a combination of the average Carbon Footpring Per Click (CFPC) and the average Eco-Design Score (EDS), a more detailed breakdown of what composes these metrics can be seen below.

![Image](../assets/digital-sobriety/digital-sobriety-score-3.png)

## How is the Digital Sobriety Score calculated?

The Digical Sobriety Score can be calculated with two types of audits : a "simple audit" and a "full audit". Simple audits are free and can be performed on the [quanta.green website](https://www.quanta.green/).

|  | Simple method (see [quanta.green](http://quanta.green)) | Full audit method |
| --- | --- | --- |
| Duration | 3 to 5 minutes | minimum of 7 days so collected data is sufficiently comprehensive |
| Precision | Average based on the 10 most visited pages of the site | Considers 100% of pages, weighted by each page's share of total site traffic |
| Installation required | None | Requires installing a Real User Monitoring tag (Note: CXM’s RUM tag enables full audits while remaining GDPR-compatible) |
| Cost | Free on quanta.green | Requires a CXM subscription or another tool capable of calculating the Digital Sobriety Score |
| Time-series comparison | Yes, but at quarterly precision (quanta.green stores scores for 3 months). After 3 months, a new analysis shows evolution over time. | Yes, in real time and historized automatically over multiple years in CXM |
| Certification | The "Simple audit" certification includes a summary visual that can be displayed on the site to describe its environmental impact. | The "Full audit" certification includes a summary visual that can be displayed on the site to describe its environmental impact. |

The site’s carbon footprint is calculated from measured traffic data and can be incorporated into a company’s overall carbon inventory to better represent digital emissions.

To allow comparison across web applications of different sizes, results are expressed relative to traffic.

The Digital Sobriety Score combines several criteria into a single metric. It is not a measure of carbon emissions alone, but a comparative indicator designed to evaluate web applications independently of their audience size.

### What is taken into account for the calculations?

The CFPC quantifies the environmental impact associated with a single page view or any click-triggered context change within a web application. The use of click-based measurement is particularly relevant for the increasingly common Single Page Applications (SPAs), where user interactions often update the view without initiating a full page reload. In these cases, each interaction, regardless of whether it triggers navigation, has an environmental cost and must be accounted for in the assessments.

The EDS is composed from multiple indicators:

- Time To First Byte (TTFB)

   TTFB measures the latency between a client request and the first byte received from the server. It is commonly used as a proxy for server-side processing time. Higher TTFB values generally indicate longer server execution, which correlates with increased energy consumption at the hosting infrastructure.

- Page Weight

   Page weight represents the total volume of data transferred to the client during a page load or a dynamic context update. Larger payloads require more network resources and increase energy consumption across the delivery chain.

- Frontend Execution Time

   Following content delivery, client devices execute JavaScript and perform rendering tasks locally. Although this processing occurs outside the datacenter and is often not monitored by site operators, it contributes to overall energy usage and associated emissions on end-user devices.

- Number of HTTP(S) Requests

   Each HTTP(S) request introduces additional network overhead and requires processing on both the server and client. A higher number of requests increases data exchange, network energy consumption, and client-side CPU utilization.

- DOM Size

   The Document Object Model (DOM) defines the in-memory structure of HTML elements. Larger DOM trees increase memory usage and computational overhead for rendering, layout calculations, and scripting, thereby elevating energy consumption on client devices.


CXM calculates a number from 0 to 100 by calculating the EDS from these indicators, combining it with the CFPC and then gives the corresponding letter grade:

| Digital Sobriety Score | Letter grade |
| ---------------------- | ------------ |
| 0 to 45                | E            |
| 45 to 60               | D            |
| 60 to 75               | C            |
| 75 to 90               | B            |
| 90 to 100              | A            |

## Obtaining a Digital Sobriety Score Certificate

Centreon Experience Monitoring can issue a certificate for the site's DSS. The certificate comes with detailed information on the website's measurments that can be suitable for presentations, communication or in-site use.

### Certification requirements

A CXM Digital Sobriety license connected to the site, with Real User Monitoring enabled
An expert review to produce the full report

The score is calculated in real time.

### Certification validity

Initial certification: based on the previous 30 days of data; valid for one year
Renewal: based on the following 12 months of data
From the second year onward: based on a full year of traffic, with optional year-over-year comparison
