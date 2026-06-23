---
id: improve-dss
title: Improving your Digital Sobriety Score
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Digital Sobriety Score (DSS) is a calculation of your site's carbon emissions [taking diverse factors into account](https://docs.centreon.com/experience-monitoring/experience-monitoring/digital-sobriety/digital-sobriety-score/). In addition to calculating it, Centreon Experience Monitoring can offer advice on how to improve it.

Details on your DSS and how to improve it are accessed from the corresponding widget located in the **Global View** page. 

![Image](../assets/digital-sobriety/digital-sobriety-details.png)

Click the **More details** button.

## How can I know what to improve?

The graph at the top shows information of your overall DSS. This is calculated using the combined data from all your **User Journeys** or your **RUM** data.
Improving your DSS is done by improving the individual steps of user journeys or certain pages if you are using RUM. To learn about possible improvements:

<Tabs groupId="sync">
<TabItem value="For User Journeys" label="For User Journeys">

1. From the **User Journeys** page, click the **Overview of this journey** button for the journey you want to improve.
2. Inside the **Overview** page, the steps of the user journey are listed. To the right of each step is a a magnifying glass icon named **Last detailed analysis**. Click the icon of the step you want to improve.
3. Click the **Last recommendations** tab at the top.

You are now on the page of **Last recommendations** for the selected step, here you can see a timeline showing how much time it takes for each step to load.

Below this is the **Diagnostic**, a list of recommendations to improve your score. They are separated in 3 groups according to their impact:
- The most impactful ones have a red triangle.
- Followed by those with a yellow square
- The least impactful recommendations have a grey circle.

You can click on each individual recommendation to get more details on how to enact them.

</TabItem>
<TabItem value="For RUM" label="For RUM">

1. From the **Real User Monitoring** page, click the **URLs** tab 
2. To the right of certain URLs, there is a binoculars icon, click on it.

You are now on the page of **Last recommendations** for the selected URL, here you can see a timeline showing how much time it takes for each step to load.

Below this is the **Diagnostic**, a list of recommendations to improve your score. They are separated in 3 groups according to their impact:
- The most impactful ones have a red triangle.
- Followed by those with a yellow square
- The least impactful recommendations have a grey circle.

You can click on each individual recommendation to get more details on how to enact them.

</TabItem>
</Tabs>

## How do I know my changes made a difference?

In the **Last recommendations** page, scroll to the bottom of the page and click the **Compare with** button. 

The latest recommendation audit is selected by default. Select an earlier audit to see the impact of your changes.
Remember that the recommendations probe is executed once a day so your changes may not be visible until the next day.