---
id: release-notes
title: Release notes
---

## Introduction

You can find in this chapter all changelogs that give you knowledges about the
changes integrated into each releases of Centreon components and extensions.

> It is very important when you update your system to refer to this section in
> order to learn about behavior changes or major changes that have been made on
> this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have
> built on your platform (modules, widgets, plugins).

If you have any questions relating to the content of the notes, you can ask your
questions on our [github](https://github.com/centreon/centreon).

#TODO

## Centreon Core (Open source)

<!--DOCUSAURUS_CODE_TABS-->
<!--Centreon Web -->

#### Centreon Web 20.04.0

*Released April, 22  2020*

#### New features

##### Events view (beta)

Centreon Web comes with a brand new events view management experience. This new view is released 
as a beta feature becauwe we want to make this new view the most efficient monitoring view dedicated to operators
and system/network administrator. To get to that point, we'll quicly iterate based on what we already 
know and your feedbacks.

This new view is accessible directly from `Home > Events view (beta)"` and brings the following capabilities:

* A unified page that regroups host & service resources in one single place for a unified events management
* Regexp search based on multi-criteria and the possibility to force the search on a specific criteria 
 (host name, host alias, host address, service description)
* Multi-criteria search based on multi-selects 
* Inline & massive quick actions: acknowledgement, set a planned downtime, re-check a resource
* Detail information just above the listing to quickyl access information and not losing what you were currently looking at
* ... *And more to come in the next weeks/month*

![image](../assets/alerts/events-view/events-view-demo.gif)

To know more about this feature, have a look to [the documentation](../alerts/events-view)

##### Mobility

Centreon comes now with a Mobile App. that you can install on your phone to be able to perform the 
most common actions on resources:

* Display resources status 
* Filter resource status 
* Act on any resource: acknowledge or set a downtime
* Display detail status information and graph when appropriate

<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="path/to/poster_image.png">
    <source src="../assets/mobile/mobile-demo.mp4" type="video/mp4">
  </video>
</figure>

Find more about this mobile application in the [dedicated section](../mobile/introduction)

#### Bug fixes

<!--Centreon Engine -->

#### Centreon Engine 20.04.0


<!--Centreon Broker -->

#### Centreon Broker 20.04.0



<!--END_DOCUSAURUS_CODE_TABS-->

## Centreon Commercial Extensions

<!--DOCUSAURUS_CODE_TABS-->

<!--Centreon MAP -->

#### Centreon MAP 20.04.0

Released April, 17 2020.

**New features**

The licensing system has been simplified.

The MAP license resides now on the Centreon **central** server, as any other
commercial extension. No worry, the compatibility with the previous licensing
mecanism (license on the map server) is maintained.

Anyway, if you want to perfectly finish your migration, you may ask the support
team to generate a new Centreon Map license for your Central server and upload :

  - Administration > Extensions > Manager


<!--Centreon BAM -->

#### Centreon BAM 20.04.0

#TODO


<!--Centreon MBI -->

#### Centreon MBI 20.04.0

Manage compatibility with Centreon 20.04

<!--END_DOCUSAURUS_CODE_TABS-->


## Centreon Open source extensions 

<!--DOCUSAURUS_CODE_TABS-->

<!--Centreon DSM -->

#### Centreon DSM 20.04.0

Manage compatibility with Centreon 20.04


<!--Centreon Open Ticket  -->

#### Centreon Open Ticket 20.04.0

Manage compatibility with Centreon 20.04


<!--END_DOCUSAURUS_CODE_TABS-->

