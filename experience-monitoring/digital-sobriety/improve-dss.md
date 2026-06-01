---
id: improve-dss
title: Improving your Digital Sobriety Score
---

The Digital Sobriety Score (DSS) is a calculation of your site's carbon emissions [taking diverse factors into account](digital-sobriety-score.md). In addition to calculating it, Centreon Experience Monitoring can offer advice on how to improve.

Details on your DSS and how to improve it are accessed from the corresponding widget located in the **Global View** page. 

![Image](../assets/digital-sobriety/digital-sobriety-details.png)

Click the **More details** button.

### How can I know what to improve?

The graph at the top shows information of your overall DSS. This is calculated using the combined data from all your **User Journeys**. 
Improving your DSS is done by improving aspects of individual user journeys. To learn about possible improvements, click the **More Details** button on a user journey, a graph of that user journey's DSS appears.
A Graph with details of the steps of that user journey is displayed below. Click the binoculars icon to the right of this second graph.

You are now on the page of **Last recommendations** for the selected user journey, here you can see a timeline showing how much time it takes for each step to load.

Below this is the **Diagnostic**, a list of recommendations to improve your score. They are separated in 3 groups according to their impact:
- The most impactful ones are have a red triangle.
- Followed by those with a yellow square
- The least impactful recommendations have a grey circle.

You can click on each individual recommendation to get more details on how to enact them.

> After modifying a user journey, you must relaunch the probe to update the displayed data.

### How do I know my changes made a difference?

In the **Last recommendations** page, scroll to the bottom of the page and click the **Compare with** button. You will be taken to the **Recommendations comparator**.
The most recent audit will already be opened in the first slot of the comparator.
Click the **Choose another recommendation audit** button to select an audit performed before your changes and click **Compare**.

You will be shown a timeline of the two journeys, the second one shows a more detailed comparison, displaying by how much your user journey has improved or worsened.

The list of recommendations below the timelines displays the recommendations for your current audit and the ones that were given for the previous one. This allows you to see which recommendations have been taken care of.