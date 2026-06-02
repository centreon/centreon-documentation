---
id: load-tests
title: Load Tests
---

This section allows analysis of how the platform hosting your web application behaves under conditions of heavy traffic. To access it, open the main menu and select **Load Tests**.

Performing a Load Test (often abbreviated “LT”) consists of launching a large number of web browsers in parallel directly from Experience Monitoring and having them interact with a website to deliberately "stress" the platform and the web application.

![image](../assets/getting-started/load-tests-1.png)

With just a few clicks, it's possible to reproduce the conditions of a day of **very high traffic** in order to intentionally analyze the site's behavior under those conditions.

Depending on the needs, a Load Test can serve **three main objectives**:

- **measure the site's capacity** on its current architecture or on a planned/future architecture (in that case, the test is performed in a pre-production or a “future prod” environment).

Example conclusion: “*During the load test performed on the production site MonSite.com, we observed 1,450 page views per minute before user experience degradation, equivalent to 43,500 unique visitors per hour. Compared with the site's Google Analytics history, the load test exceeded last January's sales traffic peak by a factor of 4.5 while preserving a comfortable browsing experience.*”

- **identify the bottleneck(s)** primarily responsible for reaching the capacity limit. Identifying these bottlenecks will provide strong guidance for optimization efforts that increase capacity.

Example conclusion: “*We observe that the add-to-cart function and the delivery selection are the steps whose times increase the fastest. Just before failure, they reach average load times of 18 and 34 seconds respectively. Optimizing them would save resources and increase capacity.*”

- **analyze the disruption's symptoms under overload and the nature of any 'crash'** to guide DEV and OPS teams in improving the site's operational reliability.

Example conclusion: “*Near the limit, several 503 errors (internal server errors) were detected on the webservice MonSiteEcommerce.com/reloadBasket.php, making cart display inoperative in the user's browser; a few minutes later, delivery selection had [...]*”

Offered with or without expert support, Experience Monitoring's load tests are billed separately. For more information, contact your sales representative or the Experience Monitoring by Centreon sales team at [sales@quanta.io](mailto:sales@quanta.io).
