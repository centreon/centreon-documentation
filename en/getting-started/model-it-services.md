---
id: model-it-services
title: Model your IT services
---

Centreon Business Activity Monitoring (Centreon-BAM) is an extension for modeling
IT services and applications, ideally, from end users point of view. It reports on the
status of a agregated indicators in real time, tracking any changes, thereby allowing you to
measure results against business-oriented service level agreements (SLAs) with
internal or external users.

> Centreon BAM is a Centreon **extension** that requires a valid license key. To
> purchase one and retrieve the necessary repositories, contact
> [Centreon](mailto:sales@centreon.com).

## Concept

Centreon BAM aggregates raw sets of resources status, called indicators, against which to
measure business performance. *These indicators* collected by the Centreon
monitoring system can be either a Centreon service, a logical rule between
multiple services or any another business-centric monitoring indicator, called a
Business Activity (BA).

You can use a BA as an indicator for another BA to create an impact tree and
modelize the IT services or applications for analysis.

The evolution of a BA status will determine the quality of service (QoS) that
reflects how well the application performs for its users. Based on this QoS
rating, you can define the BA's operating levels and the SLA.

If a BA fails, the malfunction(s) that led to the drop in QoS can be analyzed
and the SLA failure diagnosed.

Below is an example of a business activity that correspond to a generic Application:

![image](../assets/service-mapping/example.png)

## Introduction

Modeling a service or an application (that becomes a BA in Centreon's world) and
its related indicators should be simple and methodical. Ideally, you should
first include indicators that are directly related to the overall function of
the service/applications and then gradually add other indicators that would have
a potential impact on BA status.

All indicators added to a BA must initially be monitored one at a time by the
system to determine the operational status of the BA. 

The important thing to understand here is the way the business activity status will be computed. There are
four calculation method that can be used:

- **Best status**: When you only need to be warned that ALL indicators are critical at the same times 
- **Wors status**: When you immediately want to know that at least 1 indicator is not-ok
- **Ratio**: When you want to model **Cluster** concepts by specifying a number of percentage of critical resources that you don't want to exceed
- **Impact**: When you want to precisely define the weight of each indicators and reflect that on your BA status 

For mor information, have a look to the [calculation method explanations](ba-management.html#calculation-methods)

## Implementation method 

The first step when you want to create a business activity is to have a clear view of the IT service, application, component
you want to model. Don't hesitate to first model the Tree on a paper so that you'll just have to replicate the configuration 
in Centreon. 

**The way you think** about an application or service IT may be **Top-Down**: you want to visualize the state of the Application > "A"
that relies on Network, Backends, Frontends clusters, they themselves rely on servers & network equipment which status rely
on service monitored by Centreon

**The way you create** an business activity in Centreon is **Bottom-up**: you start by creating the down-level indicators that > represent server or network equipment status, then you agregated them into Network, Frontend, Backend component and you
finish by creating a Top level component to show the global Application "A" status.

Now that you know what application you want to model and what indicators this application relies on, 
you can sort them into two categories:

  - Indicators known to have a blocking impact
  - Indicators whose impact cannot be measured.

> It's simpler to start by using only the blocking indicators. You'll be able to add more indicators later if you 
> need to have BA status impacted more precisely.

## Example

If we take a simple example: You have multiple frontend servers (10) and you want at least 20% of your servers to be available.

This will be done into two steps (bottom-up):

- First, define what's a frontend server that is OK: create business activities that correspond to frontend servers
- Then, define our cluster: create the business activity that will agreggate my frontend-x servers 

First, we're going to create "Frontend-X" (business activity) that correspond to the frontend servers.
Let's say that a frontend server that correctly perform may be defined by:

 - a Load below a critical state
 - and a Disk usage below a critical state
 - and a Swap usage below a critical state

So the state of a frontend-X is the Worst status between these 3 indicators: the first step is over, let's create a 
Frontend-1 business activity:

<!--DOCUSAURUS_CODE_TABS-->

<!-- Concept   -->

![image](../assets/service-mapping/frontend-1-concept.png)

<!-- Configuration -->

![image](../assets/service-mapping/frontend-1-conf.png)

<!--END_DOCUSAURUS_CODE_TABS-->


Now that we've define our 10 frontend servers, we'll attach them to a parent business activity called "Frontends Cluster"
so that it tell us wether we've 20% of Frontend servers available or not

<!--DOCUSAURUS_CODE_TABS-->

<!-- Concept   -->

![image](../assets/service-mapping/ratio.png)

<!-- Configuration -->

![image](../assets/service-mapping/conf-ratio.png)

<!--END_DOCUSAURUS_CODE_TABS-->


If we want to be proactive and NEVER go to 20%, we may add a Warning threshold to our Cluster business activity 
to be warn when 50% of the frontend servers are not available: just add "50%" to the Warning threshold:

![image](assets/service-mapping/conf-ratio-with-warn.png)

So at the end, we combined multiple calculation methods, multiple type of resources and our business activity
 will look like that:

 ![image](assets/service-mapping/final-frontend.png)

Using the product on a daily basis helps to follow the daily evolution of the BA to adjust indicators or rules that
apply.

## Reporting consideration

Now that you can proactively manage your IT services & application, thanks to the real time BA tracking.
It's time to have a look to availability & SLA.This is possible with the reporting capabilities 
and the **Centreon MBI extension** and the settings done in the "Reporting" section of the BA.

**How to we compare availability & SLA?**

The final value of the SLA is linked to the time spent in *OK*, *Warning* /
*Critical* conditions (downtime/uptime), which are visible in the Reporting
screens.

Examples:

  - 24/7 monitoring
  - Over a 1-day period, the time spent in the status is as follow:
      - BA in a OK status = 23hours & 30min
      - BA in a WARNING status = 10 minutes
      - BA in a CRITICAL status = 20 minutes

In this example, the following availability will be calculated:

  - % Up and optimum performance \~ 98.61% (OK+Warning)
  - % Up but degraded \~ 97.91% (OK)
  - % Not available \~ 1.38% (Critical).

You may use **Centreon MBI extension** to access advanced reporting capabilities on business activities data.
