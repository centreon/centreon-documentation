---
id: explore-analyze
title: Exploring and analyzing logs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';

According to your [use case](./getting-started/use-cases.md), you’ll either filter the log explorer for high-severity logs or rely on alert events for more complex situations.

> To see logs in Centreon Log Management, you first need to [configure an OpenTelemetry collector on each host you want to receive logs from](./collector/collector.md).

Centreon Log Management gives you several ways to explore your data:

* The [log explorer](log-explorer.md): search and filter logs to investigate issues and perform root-cause analysis.
* [**Alert events**](alerts.md#viewing-the-last-alert-event-for-an-alert-rule): see what's happening in real time and react quickly to incidents. (To get alert events, you need to create [alert rules](alerts.md) first.)
* [Dashboards](./dashboards.md): view current and historical data visually to examine trends and understand changes over time.

## In this section

<DocCardList />
