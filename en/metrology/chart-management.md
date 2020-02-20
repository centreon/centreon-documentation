---
id: metrology
title: Metrology
---

Centreon can be used to generate graphs from monitoring information. There are two types of graph:

* Performance graphs serve to view the evolution of services intuitively. E.g.: filling level of a hard disc, network
  traffic, etc.
* History graphs (or status graphs) serve to view the evolution of the statuses of a service.

Performance graphs always have a time period for the x-axis and a unit as the y-axis (Volts, Octets, etc.). History
graphs always have a time period for the x-axis, their y-axes do not vary. Only the color of the graph can be used to
view the status of the object:

* <span style="color:green">Green</span> for OK status 
* <span style="color:orange">Orange</span> for WARNING status
* <span style="color:red">Red</span> for CRITICAL status
* <span style="color:grey">Grey</span> for UNKNOWN status

Example of performance graph:

![image](assets/metrology/01perf_graph.png)

## Graph management

### Performance graphs

There are several ways to view performance graphs:

* Viewing the graph in the list of services, from **Monitoring \> Status Details \> Services** menu, by mouse-over the
  icon ![image](assets/common/column-chart.png)
* Viewing the graphs from the host' detail page by clicking on **View graphs for host**
* Viewing the graph from the service' details page
* From the **Monitoring \> Performances \> Graphs** menu to view multiple graphs

### Status graphs

In the same way as for the performance graphs, there are several ways of accessing status history graphs:

* From the service' details page
* From the **Monitoring \> Performances \> Graphs** menu, by first selecting a specific service.

### Viewing multiple graphs

To view all graphs, go to the **Monitoring \> Performances \> Graphs** menu.

![image](assets/metrology/01graph_list.png)

This page offers several selection options as well as filtering options:

* The **Chart** option allows to select the chart you want to display
* The **Period** option allows you to select a predefined the time window to display the data
* The **From** and **To** fields allow to select a manual time window to display the data
* The **Filter by Host** option allows to filter the **Chart** list by presenting only the graphics linked to the
  selected resources
* The **Filter by Hostgroup** option allows to filter the **Chart** list by presenting only the graphics linked to the
  selected resources
* The **Filter by Servicegroup** option allows to filter the **Chart** list by presenting only the graphics linked to
  the selected resources

Several actions are possible on the page:

* To refresh manually the data by clicking on the icon ![image](assets/common/refresh.png)
* To automatically refresh the data by clicking on the icon ![image](assets/common/timer-gray.png) and by selecting a
  predefined period
* To display charts on 1, 2 or 3 columns by clicking on the associated icon ![image](assets/metrology/columns_selection.png)

Several actions are possible on each graph:

* **Split chart**: separates multiple curves of a graph into multiple graphs each containing one curve
* **Display multiple periods**: displays the graph over a period of 1 day, 1 week, 1 month, 1 year
* To export the graph in a CSV format by clicking on the icon ![image](assets/common/csv.png) or in PNG by clicking on the
  icon ![image](assets/common/png.png)
* To move back in time by clicking on the icon ![image](assets/metrology/right_arrow.png) or backward by clicking on the
  icon ![image](assets/metrology/left_arrow.png)
* It is also possible to zoom in on a time period by clicking on the graph and then selecting a time window:

![image](assets/metrology/chart_zoom.gif)

## Graph template

### Definition

Graph models are models which can be used to shape graph layouts. Graph models can be used to configure multiple
presentation settings including the y-axis measurement, the width and the height of the graph, or colors, etc.

### Configuration

Go to the **Monitoring \> Performances \> Templates** menu

![image](assets/metrology/02addgraph_template.png)

* The **Template name** field represents the name for the graph model
* The **Vertical label** field contains the legend for the y-axis (type of data measured).
* The **Width** and **Height** fields are expressed in pixels and express respectively the width and the height of the model.
* The **Lower limit** field defines the minimum limit of the y-axis.
* The **Upper limit** field defines the maximum limit of the y-axis.
* The **Base** list defines the calculation base for the data during the scaling of the graph y-axis. Use 1024 for
  measurements like the Bytes (1 KB = 1 024 Bytes) and 1 000 for measurements like the volt (1 kV = 1 000 Volts).
* The **Scale Graph Values** checkbox enable auto scale of the graph and bypass previous options
* The **Default Centreon Graph Template** allows to display all chart without predefined template using these values

> If the box **Size to max** is checked, the graph will automatically be scaled to the scale of the maximum value
> ordinates shown on the given period.

### Using a graph template

You can add this layout model on edition a service (or a template of service) by going into the **Service Extended Info**
tab in configuration form:

![image](assets/metrology/02linkgraph_template.png)

## Curves

### Definition

A curve is the representation of the evolution performance data (metrics produced from the collection of data) visible
via performance graphs. A graph may contain multiple curves. It is possible to customize the curves by changing certain
settings: curve profile, position of the curves on the graph, legend and additional information (average, total value, etc.).

### Configuration

Go to the **Monitoring \> Performances \> Curves** menu

![image](assets/metrology/02addcurve.png)

* The **Template Name** field defines the name of the model.
* The **Hosts/Service Data Source** lists defines the host/service for which this curve will be used. If this information
  is not filled in, this curve definition will be applied to all services in which this metric appears.
* The **Data Source Name** field can be used to select the metric which will use this definition. The **List of known metrics**
  list can be used to choose the already existing metrics used by the services.
* If the **Stack** box is checked, this curve will be stacked on the others (useful to see the proportion of one metric in
  relation to another).
* If the **Stack** box is checked, the **Order** list can be used to define the order display / stacking of the curve (the
  smaller the number, the closer it will be to the x-axis).
* If the **Invert** box is checked, the curve is reversed (opposite to the absolute value) in relation to the y-axis (useful
  for seeing the proportion of the incoming traffic compared to the outgoing traffic).
* The **Thickness** list expresses the thickness of the line of the curve (expressed in pixels).
* The **Line color** field defines the color of the curve.
* The **Area color** field concerns the filling color of the curve if the Filling option is checked, (see below). It contains
  3 fields that correspond with the colors of the OK, WARNING and CRITICAL statuses respectively.
* The **Transparency** field defines the level of transparency of the contour color.
* If the **Filling** box is checked, all the curve is filled with the color of the area defined according to the status.

The attributes below concern the information situated under the graph:

* The **Legend** field defines the legend of the curve.
* If the **Display only the legend** box is checked, the curve will be masked but the legend will be visible.
* The **Empty lines after this legend** list can be used to define a certain number of empty lines after the legend.
* If the **Print max value** box is checked, the maximum value reached by the curve will be displayed.
* If the **Print min value** box is checked, the minimum value reached by the curve will be displayed.
* If the **Round the min and max** box is checked, the minimum and maximum values will be rounded.
* If the **Print Average** box is checked, the average of the points of the curve will be displayed.
* If the **Print last value** box is checked, the last value collected from the curve will be displayed.
* If the **Print total value** box is checked, the total value is displayed (sum of all the values of the curve on the selected period).
* The **Comment** field can be used to comment on the curve.

### Examples of curves

Stacked curves:

![image](assets/metrology/02graphempile.png)

Reversed curves:

![image](assets/metrology/02graphinverse.png)
 
Curves with filling:

![image](assets/metrology/02graphremplissage.png)

## Virtual metrics

### Definition

The virtual metrics are the display of curves resulting from the processing / aggregation of data from a set of data.
The set of data corresponds to various values of curves on the period covered by the graph. 
The creation of virtual metrics is based on the RPN (Reverse Polish Notation) language.

Two types of sets of data are available:

* CDEF: this command creates a new set of points starting from one or more series of data. The aggregation is performed
  on each point (data).
* VDEF: the result of each aggregation is a value and a time component. This result can also be used in the miscellaneous
  graph and printing elements.

#### CDEF vs VDEF

The CDEF type works on a set of points (data table). The result of the processing (e.g.: multiplication by 8 to convert
bits into Bytes) will be a set of points. The VDEF type enables us to extract the maximum from a set of points.

> For more information on the RPN type notation, refer to the [official RRD documentation](http://oss.oetiker.ch/rrdtool/tut/rpntutorial.en.html)

### Configuration

Go to the **Monitoring \> Performances \> Virtual Metrics** menu

![image](assets/metrology/02addvmetric.png)

* The field **Metric name** defines the name of the metric.
* The **Host/Service Data Source** list can be used to define the service from which to work the metrics.
* The **DEF Type** field defines the type of data set used to calculate the virtual curve.
* The **RPN (Reverse Polish Notation) Function** field defines the formula to be used to calculate the virtual metric.

> It is not possible to add together the metrics of different services. However, it is possible to add virtual metrics
> for the calculation of a new metric.

* The **Metric Unit** field defines the units of the metric.
* The **Warning threshold** field defines the alert threshold to be displayed on the graph.
* The **Critical threshold** field defines the critical threshold to be displayed on the graph.
* If the **Hidden Graph and Legend** box is checked, the curve and the legend are hidden.
* The **Comment** field can be used comment on the metric.

### Example

Configuration:

![image](assets/metrology/02virtualmetric_conf.png)

Result:

![image](assets/metrology/02virtualmetric_example.png)
