---
id: MBI widgets dashboard
title: MBI Widgets dashboard
---

widgets dashboard are used in Centreon with [Dashboards](../alerts-notifications/dashboards.md): This means you can use dashboard to create real-time AND
reporting statistics (e.g., for availability, applications, and performance).

## Reporting widgets

> - Business Activity availability
> - Business Activity Availability History
> - Hostgroup Availability History
> - Metric Capacity planning
> - Storage near saturation

### Business Activity availability

#### Description

The Business Activity availability widget displays availability for Business Activities (BA) based on specific period.

This widget provides visibility into:

- BA availability percentage for the selected period
- Alert and critical event counts
- SLA threshold monitoring
- Downtime tracking

#### Parameters

**Widget Properties:**

- **Title**: Custom widget title
- **Description**: Optional descriptive text with rich text formatting
- **Display description toggle**: Show/hide description on dashboard

**Data Source:**

- **Resource type**: Business Activity
- **Resource selection**: Choose specific BA to monitor (e.g., ba_name_1)

**Value settings:**

- **Display format**:
  - Text
  - Gauge
  - Bar
- **Reporting period**:
  - This year 
  - This month
  - This week
  - Yesterday

### Business Activity availability history

#### Description

The Business Activity availability history widget displays historical availability trends for Business Activities (BA) over time with visual chart representation.

This widget provides visibility into:

- Historical BA availability percentage trends
- Performance metrics over time
- Alert occurrences visualization

#### Parameters

**Widget Properties:**

- **Title**: Custom widget title
- **Description**: Optional descriptive text with rich text formatting
- **Show description toggle**: Show/hide description on dashboard

**Data Source:**

- **Resource type**: Business Activity
- **Resource selection**: Choose specific BA to monitor (e.g., ba_name_1)
- **Add filter**: Optional filtering capabilities

**Value Settings:**

- **Aggregation frequency**:
  - Daily (shows daily availability data points)
  - Monthly (shows monthly availability aggregates)

- **Reporting period**:
  - This year
  - This month
  - This week
  - Last week
  - Last 6 months
  - Lat 12 months

- **Thresholds:**

  - **Show thresholds toggle**: Display threshold lines on chart

- **Legend:**

  - **Position**:
    - Left
    - Bottom
    - Right

  - **Refresh Interval:**

    - **Dashboard global interval**: Uses default 15 seconds refresh
    - **Custom refresh interval**: Specify custom refresh rate in seconds
    - **Manual refresh**: No automatic refresh

