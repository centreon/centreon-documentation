---
id: MBI widgets dashboard
title: MBI Widgets dashboard
---

# Reporting widgets

Widgets dashboard are used in Centreon with [Dashboards](../alerts-notifications/dashboards.md): This means you can use dashboard to create real-time AND
reporting statistics (e.g., for availability, applications, and performance).

This is current list of available MBI dashboard widgets

> - Business Activity availability
> - Business Activity Availability History
> - Hostgroup Availability History
> - Metric Capacity planning
> - Storage near saturation

## Business Activity availability

### Description

The Business Activity availability widget displays availability for Business Activities (BA) based on specific period.

This widget provides visibility into:

- BA availability percentage for the selected period
- Alert and critical event counts
- SLA threshold monitoring
- Downtime tracking

### Objectives

Provide an instant view of business activity availability over a given period to verify SLA compliance and quickly identify critical incidents.

### Parameters

**Widget Properties:**

- **Title**: Custom widget title
- **Description**: Optional descriptive text with rich text formatting
- **Display description toggle**: Show/hide description on dashboard

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

**Dataset Selection:**

- **Resource type**: Business Activity
- **Resource selection**: Choose specific BA to monitor (e.g., ba_name_1)

## Business Activity availability history

### Description

The Business Activity availability history widget displays historical availability trends for Business Activities (BA) over time with visual chart representation.

This widget provides visibility into:

- Historical BA availability percentage trends
- Performance metrics over time
- Alert occurrences visualization

### Objectives

Analyze the historical evolution of business activity availability over time to identify performance trends and recurring problematic periods.

### Parameters

**Widget Properties:**

- **Title**: Custom widget title
- **Description**: Optional descriptive text with rich text formatting
- **Show description toggle**: Show/hide description on dashboard

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

**Dataset Selection:**

- **Resource type**: Business Activity
- **Resource selection**: Choose specific BA to monitor (e.g., ba_name_1)
- **Add filter**: Optional filtering capabilities

## Hostgroup availability history

### Description

The Hostgroup availability history widget displays historical availability trends for host groups over time.

This widget provides visibility into:

- Historical host group availability percentage trends
- Comparative availability across multiple host groups
- Time-based availability patterns analysis
- Hostcategories performance comparison

### Objectives

Compare the historical availability of multiple host groups to identify the most stable infrastructures and detect failure patterns by group or category.

### Parameters

**Widget Properties:**

- **Title**: Custom widget title
- **Description**: Optional descriptive text with rich text formatting
- **Show description toggle**: Show/hide description on dashboard

**Value Settings:**

- **Calculations based on time period**: Define monitoring time coverage
  - 24x7 (continuous monitoring)
  - Business hours
  - Custom time periods
- **Display with this resource type**:
  - Host groups (default selection)
  - Host categories
  - Individual hosts

**Thresholds:**

- **Show thresholds toggle**: Display threshold lines on chart
- **Warning threshold**:
  - Default (uses configured threshold)
  - Custom (specify custom percentage value)
- **Critical threshold**:
  - Default (uses configured threshold)
  - Custom (specify custom percentage value)

**Refresh Interval:**

- **Dashboard global interval**: Uses default 15 seconds refresh
- **Custom refresh interval**: Specify custom refresh rate in seconds
- **Manual refresh**: No automatic refresh

**Graph Settings:**

- **Display availability as**:
  - Bar chart (comparative bars)
  - Line chart

- **Graph style**:
  - **Bar radius**: Adjust rounded corners (0-100%)
  - **Bar opacity**: Set transparency level (0-100%)
  
- **Axes**:
  - **Show axis borders toggle**: Display chart borders
  - **Y-axis label rotation**: Rotate axis labels (0-360°)
  - **Zero-centered toggle**: Center Y-axis at zero
  - **Show gridlines toggle**: Display grid on chart
  - **Gridline type**: 
    - Horizontal
    - Vertical
    - Both
  - **Scale**:
    - Linear
    - Logarithmic
  - **Y-axis boundaries**:
    - Auto (automatic scaling)
    - Custom (define min/max values)

- **Legend**:
  - **Show legend toggle**: Display chart legend
  - **Display mode**:
    - Grid (grid layout)
    - List (vertical list)

- **Tooltips**:
  - **Display**:
    - All (show all tooltips)
    - Only one (show single tooltip on hover)
    - Hidden (disable tooltips)
  - **Value sort order**:
    - By name (alphabetical)
    - Ascending (lowest to highest)
    - Descending (highest to lowest)

**Dataset Selection:**

- **Resource type**: Host Group or Host Category
- **Resource selection**: Choose specific host groups to monitor (e.g., hostgroup_name_1, hostgroup_name_2)
- **Multiple selection**: Support for comparing multiple host groups simultaneously
- **Additional resource type**: Host Category with category selection (e.g., host_category_name_1)

## Metric capacity planning

### Description

The Metric capacity planning widget displays predictive capacity forecasting based on historical metric data with threshold visualization.

This widget provides visibility into:

- Historical metric performance trends
- Future capacity predictions based on historical data
- Threshold breach forecasting
- Capacity planning timeline with estimated dates

### Objectives

Anticipate future capacity needs by analyzing metric consumption trends and predict threshold breach dates to plan infrastructure investments.

### Parameters

**Widget Properties:**

- **Title**: Custom widget title
- **Description**: Optional descriptive text with rich text formatting
- **Show description toggle**: Show/hide description on dashboard

**Value Settings:**

- **Calculations based on time period**: Define monitoring time coverage
  - 24x7 (continuous monitoring)
  - Business hours
  - Custom time periods

- **Forecast based on past X days**: Define prediction window
  - Input value: Number of days (e.g., 120 days)
  - Uses historical data to calculate future trends

- **Thresholds toggle**: Enable/disable threshold lines on chart

**Refresh Interval:**

- **Dashboard global interval**: Uses default 15 seconds refresh
- **Custom refresh interval**: Specify custom refresh rate in seconds
- **Manual refresh**: No automatic refresh

**Graph Settings:**

- **Display average as**:
  - Line chart (default)
  - Bar chart

- **Style for average data**:
  - **Curve type**:
    - Linear
    - Curved
    - Step
  - **Display curve points toggle**: Show data points on line
  - **Line width**:
    - Auto (automatic width)
    - Custom (specify width value)
  - **Area**:
    - Auto (automatic fill)
    - Show (fill area under curve)
    - Hide (no fill)
  - **Line style**:
    - Solid
    - Dashes
    - Dots

- **Axes**:
  - **Show axis borders toggle**: Display chart borders
  - **Y-axis label rotation**: Rotate axis labels (0-360°)
  - **Show gridlines toggle**: Display grid on chart
  - **Gridline type**: 
    - Horizontal
    - Vertical
    - Both
  - **Scale**:
    - Linear
    - Logarithmic

- **Legend**:
  - **Show legend toggle**: Display chart legend
  - **Display mode**:
    - Grid (grid layout)
    - List (vertical list)
  - **Position**:
    - Left
    - Bottom
    - Right

**Dataset Selection:**

- **Resources**:
  - **Select type**: Host or Service
  - **Select resource**: Choose specific host (e.g., host_name_1)
  - **Select type**: Service (for service-level metrics)
  - **Select resource**: Choose specific service (e.g., service_name_186)
  - **Add filter**: Optional filtering capabilities

- **Metrics**:
  - **Select metric**: Choose specific performance metric (e.g., metric.1)


## Storage near saturation

### Description

The Storage near saturation widget displays storage resources approaching capacity thresholds with predictive saturation forecasting.

This widget provides visibility into:

- Storage resources nearing saturation
- Time to saturation predictions
- Current saturation levels
- Evolution trends compared to yesterday

### Objectives

Proactively identify storage resources at risk of saturation and predict their saturation date to prevent capacity incidents before they impact services.

### Parameters

**Widget Properties:**

- **Title**: Custom widget title
- **Description**: Optional descriptive text with rich text formatting
- **Show description toggle**: Show/hide description on dashboard

**Value Settings:**

- **Thresholds**:
  - **Show thresholds toggle**: Enable/disable threshold display
  - **Warning threshold**:
    - Default (none)
    - Custom (specify custom percentage value)
  - **Critical threshold**:
    - Default (none)
    - Custom (specify custom percentage value)

- **Calculations based on time period**: Define monitoring time coverage
  - 24x7 (continuous monitoring)
  - Business hours
  - Custom time periods

- **Forecast based on past X days**: Define prediction window
  - Input value: Number of days (e.g., 7 days)
  - Uses historical data to calculate saturation timeline

- **Alert**: Configure early warning notification
  - Input value: Number of days before saturation (e.g., 20 days before saturations)
  - Triggers alert when saturation is predicted within specified timeframe

- **Display**: Configure number of results shown
  - Input value: Number of lines to display (e.g., 10 line)
  - **Show value label toggle**: Display metric values in widget

**Refresh Interval:**

- **Dashboard global interval**: Uses default 15 seconds refresh
- **Custom refresh interval**: Specify custom refresh rate in seconds
- **Manual refresh**: No automatic refresh

**Dataset Selection:**

- **Resources**:
  - **Select type**: Host Group, Host Category, or Service Category
  - **Select resource**: Choose specific host group (e.g., hostgroup_name_5)
  - **Select type**: Host Category
  - **Select resource**: Choose specific host category (e.g., host_category_name_3)
  - **Select type**: Service Category
  - **Select resource**: Choose specific service category (e.g., service_category_name_2)

- **Metrics** :
  - **Select metrics**: Choose storage-related metrics (e.g., used, disk_storage)
  - **Search**: Filter available metrics
  - **Multiple selection**: Select multiple metrics to monitor