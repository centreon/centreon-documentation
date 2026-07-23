---
id: digital-sobriety-concepts
title: Digital Sobriety concepts
description: How the Digital Sobriety Score measures environmental impact
---

Although websites are immaterial, they rely on physical infrastructure: servers, networks, and end-user devices that all consume energy. 
Measuring the environmental footprint of digital activity is an evolving challenge, no single approach has yet become the definitive standard.

Experience Monitoring has its own approach called the Digital Sobriety Score based on the five principles of the [GHG Protocol](https://ghgprotocol.org/): Relevance, Completeness, Consistency, Transparency, and Accuracy. This score reflects how environmentally efficient your website is.

The score runs from 0 to 100 and is translated into a letter grade from A (most efficient) to E (least efficient). 
It combines two underlying metrics: the Carbon Footprint Per Click (CFPC), which captures the environmental cost of individual user interactions, and the Eco-Design Score (EDS), which evaluates how efficiently your pages are built.

![image](../assets/digital-sobriety/digital-sobriety-details.png)

Because the DSS is grounded in real traffic data and follows the principles of the GHG Protocol, it can feed directly into a company's carbon inventory, making it a practical tool for sustainability reporting.

If you have the Digital Sobriety option, you must provide Experience Monitoring with two pieces of information:
- Where are your servers located?
- Are they hosted in the Cloud?

To fill in these details, go to **Configuration > Site**.

Based on this information, Experience Monitoring will estimate the CO2 emitted per page.

Experience Monitoring scores each user journey on your site individually, as well as producing a combined score across all journeys. 
Scores can also be calculated using [RUM data](https://docs.centreon.com/experience-monitoring/rum/rum-intro/).
You can view these at any time from the Global View.
For a full breakdown of how the score is calculated, see [Digital Sobriety Score calculations](https://docs.centreon.com/experience-monitoring/digital-sobriety/digital-sobriety-score/#how-is-it-calculate). 
To learn how to act on your score and track improvements over time, see [Improving your Digital Sobriety Score](improve-dss.md).
