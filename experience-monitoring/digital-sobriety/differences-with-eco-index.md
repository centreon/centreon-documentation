---
id: differences-with-eco-index
title: Differences between the Digital Sobriety Score and the Eco Index
--- 

The distinction between Experience Monitoring's Digital Sobriety Score and the Eco Index developed by the GreenIT collective rests on several fundamental points, reflecting different approaches to evaluating the environmental footprint of websites.

## Eco Index

Evaluation criteria: The Eco Index is based on three main criteria to assess a website's environmental footprint: DOM size, page weight, and number of HTTP requests. In the Eco Index formula these criteria are weighted 3, 1 and 2 respectively, giving particular emphasis to DOM size and to the number of HTTP requests:

![Image](../assets/digital-sobriety/difference-score-and-eco-index-1.png)

Purpose: By focusing on these three criteria, the Eco Index encourages targeted technical improvements to reduce a website's environmental impact. This simplicity is a useful starting point for adopting eco-design practices during development, but it has limitations when it comes to assessing environmental impacts related to server usage and end-user devices.

## Experience Monitoring's Digital Sobriety Score

Evaluation criteria: Experience Monitoring's Digital Sobriety Score covers a broader set of indicators, typically measured on a representative panel of 10 reference pages per site, totaling up to 60 measurement points. The Digital Sobriety Score includes page weight, number of HTTP requests, and DOM size, but also Time To First Byte (TTFB), frontend execution time, and carbon footprint per click. This more holistic approach captures both front-end and back-end aspects of websites and their greenhouse gas impacts via the carbon footprint per click.

Here is the calculation algorithm for the Digital Sobriety Score showing the weighting of each evaluation criterion leading to the overall score:

![Image](../assets/digital-sobriety/difference-score-and-eco-index-2.png)

Advantages: By valuing a wider spectrum of indicators and analyzing a representative panel of pages rather than a single URL, Experience Monitoring's Digital Sobriety Score provides a more comprehensive assessment of a site's environmental footprint. These indicators account for:

- backend code optimization to assess the environmental cost of server usage at the hosting datacenter;
- frontend efficiency work performed by development teams (typically JavaScript execution) on end-user devices. This metric helps show whether a site uses so much energy that it makes older phones struggle, or whether it's efficient and easy on them.

Purpose: Experience Monitoring's initiative aims to offer all stakeholders a free, global view of a website's environmental footprint, with a score comparable between two sites that may not have the same traffic level. The initiative encourages extensive optimization efforts and supports reductions in digital ecological impact across servers, networks, and by promoting longer device lifetimes.

## Which indicator should you follow?

That depends on your goals. Both approaches are complementary: the Eco Index emphasizes simple evaluation based on three technical criteria for a given URL — very useful during development — while Experience Monitoring's Digital Sobriety Score adopts a broader, audit-style approach more suited to sites already in production.
