---
id: speed-up-website-with-applications-or-server-configuration
title: Speed up your website with application or server configuration
--- 

## Breakdown of waiting time

Waiting time corresponds to the time spent waiting for the server (it includes the time spent inside Magento). Experience Monitoring breaks this down into two parts thanks to the profiling module installed by your integrator.

- **Magento Time**: time taken by Magento to generate the page. Optimizing this is typically done with your agency or developer.
- **Other**: processing time outside the Magento application. Optimizing this is usually done with your hosting provider.

If most of the time is spent in "Magento time", click "More details" again to analyze Magento's time per feature.

## Magento code analysis

Experience Monitoring breaks down page generation time within Magento into several steps.

- Start investigating the largest time-consuming steps to find optimization opportunities.
- You can zoom into two particular steps: "Magento Loading" and "Layout Rendering". Click the "More details" buttons to do so.
- In this example we will zoom into the Layout Rendering Time.

## Focus on Magento blocks

Experience Monitoring automatically identifies the Magento code blocks that take the most time or that showed the largest variation.

Select the blocks that interest you (preferably the top ones that took the longest to render) and click "See block details".

Each block can be analyzed/compared as charts to view its evolution over time (the timeline is useful to identify recurring issues).
