---
id: chart-virtual-metrics
title: Virtual metrics
---

## Definition

The virtual metrics are the display of curves resulting from the processing / aggregation of data from a set of data.
The set of data corresponds to various values of curves on the period covered by the graph. 
The creation of virtual metrics is based on the RPN (Reverse Polish Notation) language.

Two types of sets of data are available:

* CDEF: this command creates a new set of points starting from one or more series of data. The aggregation is performed
  on each point (data).
* VDEF: the result of each aggregation is a value and a time component. This result can also be used in the miscellaneous
  graph and printing elements.

### CDEF vs VDEF

The CDEF type works on a set of points (data table). The result of the processing (e.g.: multiplication by 8 to convert
bits into Bytes) will be a set of points. The VDEF type enables us to extract the maximum from a set of points.

> For more information on the RPN type notation, refer to the [official RRD documentation](http://oss.oetiker.ch/rrdtool/tut/rpntutorial.en.html)

## Configuration

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

## Example

Configuration:

![image](assets/metrology/02virtualmetric_conf.png)

Result:

![image](assets/metrology/02virtualmetric_example.png)
