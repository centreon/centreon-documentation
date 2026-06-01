---
id: synthetic-monitoring
title: Synthetic Monitoring (or "User Journeys")
---

Synthetic Monitoring performs regular browsing, following a predetermined path on a website to measure various web performance indicators.

## Key advantages

- Monitor the proper functioning of the typical browsing experience and calculate its availability rate (e.g., "it was possible to browse and purchase on the ecommerce site 99.5% of the time this month").
- Alert site managers in real time in case of site malfunction with notifications containing a detailed incident report.
- Measure and record page load times according to several key criteria (including Google's [Core Web Vitals](https://web.dev/vitals/)).
- Obtain personalized recommendations to make the site faster.

Here is an example of a typical journey for an ecommerce site:

![image](../assets/getting-started/synthetic-monitoring-2.png)

On the left, we can see a screenshot of each step of the user journey. On the right, the loading times for each step.

These journeys can be performed under several different conditions, for example:

- Using a browser in **Desktop or Mobile** mode
- Deciding whether or not to load **third parties** (e.g., Google Analytics tags, AB Tasty, etc.)

We recommend configuring the user journey to represent common user actions performed on the site.
For example, if it is an ecommerce site, it will be important to test proper login to a user account as it is an essential step in the sales funnel, or the search engine if it is central to site navigation.

If a structural change to the site (e.g., new deployment, tag addition, etc.) causes an unexpected malfunction at one of these key steps, Experience Monitoring can automatically alert the right people with the corresponding explanations.

