---
id: anomaly-detection
title: Anomaly detection
---

> Centreon Anomaly Detection is currently in **closed-beta phase** and require a
> valid token provided by Centreon. We will soon open the beta phase to the
> public under certain conditions.

## Description

The **Centreon Anomaly Detection** module detects deviations from the regular
service behavior.

Collected data is sent to the Centreon Cloud platform in order to be able to
compute a regular behavior model thanks to the history of this data.

Once the model has been calculated, predictions are then generated and retrieved
on the on-premise Centreon platform.

These predictions will serve as floating thresholds which will then be used by
the monitoring engine to compare the collected value with the predicted
thresholds to highlight deviations and generate alerts.

![image](assets/monitoring/anomaly/centreon_cloud.png)

## Prerequisites

The Centreon Anomaly Detection module requires the following prerequisites:

  - Centreon in minimum version 20.04
  - A token provided by Centreon to access the Centreon Cloud platform
  - An Internet connection from the Centreon Central server
  - Prediction best works with monitored services that present a seasonal
    behaviour as shown below:

![image](assets/monitoring/anomaly/simple_scheme.png)

## Installation

### Installing packages

Run the following command as a privileged user:

```shell
yum install centreon-anomaly-detection
```

### UI installation

Go to `Administration > Extensions > Manager` and search **anomaly**. Click
on **Install selection**:

![imaage](assets/monitoring/anomaly/install_01.png)

Your module is now installed:

![imaage](assets/monitoring/anomaly/install_02.png)

### Restart process

Run the following command as a privileged user:

```shell
systemctl restart gorgoned
```

### Add your token

Go to the `Configuration > Services > Anomaly Detection` menu and click on
**Add Centreon Cloud Token** button:

![imaage](assets/monitoring/anomaly/install_03.png)

Enter your token and click on **Save**:

![imaage](assets/monitoring/anomaly/install_04.png)

> If your Centreon Central server needs a proxy configuration to access the
> Internet, check the **Use proxy** box.

Go to the `Configuration > Pollers` menu and edit the **Centreon central**
server:

![imaage](assets/monitoring/anomaly/install_05.png)

Change the reload command of Centreon Broker to:

``` Shel
service cbd restart
```

Click on **Save**.

Your Centreon platform is now ready to use Centreon Anomaly Detection.

## Configuration

> In its beta version, the Centreon Anomaly Detection module does not allow you
> to configure services from classic services already supervised by your
> Centreon platform.

Configuration must be done in 3 steps:

1.  [Activate the sending of the collected data to Centreon
    Cloud](#activate-the-sending-of-the-collected-data-to-centreon-cloud) in
    order to start modeling regular behavior then control via the menu
    `Monitoring > Performances > Graphs` the first modeling calculations
    carried out.
2.  Once the model seems right, [activate the generation of
    alerts](#activate-the-generation-of-alerts)
3.  As soon as the alerts generated seem correct to you, [activate the
    notification process](#activate-the-notification-process)

### Activate the sending of the collected data to Centreon Cloud

Go to the `Configuration > Services > Anomaly Detection` menu and click on
**Add Anomaly Service** button:

![imaage](assets/monitoring/anomaly/configure_01.png)

#### Configuration fields

  - The **Description** field defined the name of the service.
  - The **Status** field allows us to enable or disable the service.
  - The **Select host - service** field allows to choose the host / service
    couple from which the data will be selected.
  - The **Select metric** field allows to select the metric on which will we
    apply anomaly detection.
  - Select a default contact for the **Implied Contacts** field.
  - Set **0** for the **Notification Interval** field.
  - Select a default period for the **Notification Period** field.
  - Select **None** for the **Notification Type** field.
  - You can select a **Severity level**.

Click on **Save**.

It is now time to [deploy the
monitoring](./monitoring-servers/deploying-a-configuration).

Then go to the `Monitoring > Status Details > Services` menu and select
**All** value for the Service Status filter. After a few minutes, the first
results of the monitoring appear.

> The behavior model calculation will start. However, to obtain a model
> representing a regular behavior, it is necessary to wait several weeks (around
> 6 weeks) in order to obtain a stable model.

> If the data on which you apply the anomaly detection has been supervised for a
> certain time, it is possible to [transfer the data
> history](#forward-history-of-data) to obtain a reliable model more quickly.

### Activate the generation of alerts

If, by regularly following the generated model and the data from the
`Monitoring > Performances > Graphs` menu, you think that your model is
stable, you can activate alert generation.

Go to the `Configuration > Services > Anomaly Detection` menu and edit your
anomaly detection service:

![imaage](assets/monitoring/anomaly/configure_02.png)

You can now enable **Enable change of status** and select the number of
deviations you want before to validate the alert using the **Detect anomalies
after** field.

Click on **Save** and [deploy the monitoring
configuration](./monitoring-servers/deploying-a-configuration).

### Activate the notification process

If the generated alerts seem relevant to you, you can now activate the
notification process.

Go to the `Configuration > Services > Anomaly Detection` menu and edit your
anomaly detection service:

![imaage](assets/monitoring/anomaly/configure_03.png)

  - Select **Enabled** for the **Enable notification** option.
  - Select the **Implied Contacts** will receive notification.
  - Select the **Implied Contact Groups** will receive notification.
  - Select the **Notification Interval**, by default **0** to receive only one
    notification by status.
  - Select the **Notification Period** on which you will receive notification.
  - Select the **Notification Type** that you want to receive.

Click on **Save** and [deploy the monitoring
configuration](./monitoring-servers/deploying-a-configuration).

## View the anomalies detected

Anomaly services are regular services but have floating thresholds that adapt
according to the calculated model. It is therefore possible to view its services
and the alerts detected though:

  - The `Monitoring > Status Details > Services` menu.
  - The `Monitoring > Performances > Graphs` menu.
  - The `Monitoring > Event Logs > vent Logs` menu.
  - The **service-monitoring** widget in the `Home > Custom Views` menu.
  - And all menus where you can operate on services.

## Forward history of data

> Sending data history is a very CPU intensive process. Depending on the number
> of services monitored, the extraction of data from the **centreon\_storage**
> database can take several tens of minutes. This will strongly impact the
> performance of the database and may slow down the overall monitoring platform.

To send the historic of data of an anomaly service, connect to your Centreon
Central server and access to the **centreon** user:

```shell
su - centreon
```

Select the anomaly service using the following command:

```shell
/usr/share/centreon/bin/anomaly_detection --list-services
```

You will see the list of services with their ID:

```shell
List of available anomaly detection services:

- id: 14, hostname: fw-beijing, servicename: anomaly-nbr-connect, metric name: connection
- id: 15, hostname: fw-brasilia, servicename: anomaly-nbr-connect, metric name: connection
- id: 17, hostname: fw-mexico, servicename: anomaly-nbr-connect, metric name: connection
- id: 18, hostname: fw-berlin, servicename: anomaly-nbr-connect, metric name: connection
- id: 22, hostname: fw-brasilia, servicename: anomaly-traffic-in, metric name: traffic_in
```

To send history of data for the anomaly service with ID 14 for the last 4 weeks
execute the following command:

```shell
/usr/share/centreon/bin/anomaly_detection --send-history 14 --history-period 4w
```

Wait until the end of the process:

```shell
Sending data from 2020-03-09T09:32:31 to 2020-03-10T00:00:00
Sending data from 2020-03-10T00:00:00 to 2020-03-11T00:00:00
Sending data from 2020-03-11T00:00:00 to 2020-03-12T00:00:00
Sending data from 2020-03-12T00:00:00 to 2020-03-13T00:00:00
Sending data from 2020-03-13T00:00:00 to 2020-03-14T00:00:00
Sending data from 2020-03-14T00:00:00 to 2020-03-15T00:00:00
Sending data from 2020-03-15T00:00:00 to 2020-03-16T00:00:00
Sending data from 2020-03-16T00:00:00 to 2020-03-17T00:00:00
Sending data from 2020-03-17T00:00:00 to 2020-03-18T00:00:00
Sending data from 2020-03-18T00:00:00 to 2020-03-19T00:00:00
Sending data from 2020-03-19T00:00:00 to 2020-03-20T00:00:00
Sending data from 2020-03-20T00:00:00 to 2020-03-21T00:00:00
Sending data from 2020-03-21T00:00:00 to 2020-03-22T00:00:00
Sending data from 2020-03-22T00:00:00 to 2020-03-23T00:00:00
Sending data from 2020-03-23T00:00:00 to 2020-03-24T00:00:00
Sending data from 2020-03-24T00:00:00 to 2020-03-25T00:00:00
Sending data from 2020-03-25T00:00:00 to 2020-03-26T00:00:00
Sending data from 2020-03-26T00:00:00 to 2020-03-27T00:00:00
Sending data from 2020-03-27T00:00:00 to 2020-03-28T00:00:00
Sending data from 2020-03-28T00:00:00 to 2020-03-29T00:00:00
Sending data from 2020-03-29T00:00:00 to 2020-03-30T00:00:00
Sending data from 2020-03-30T00:00:00 to 2020-03-31T00:00:00
Sending data from 2020-03-31T00:00:00 to 2020-04-01T00:00:00
Sending data from 2020-04-01T00:00:00 to 2020-04-02T00:00:00
Sending data from 2020-04-02T00:00:00 to 2020-04-03T00:00:00
Sending data from 2020-04-03T00:00:00 to 2020-04-04T00:00:00
Sending data from 2020-04-04T00:00:00 to 2020-04-05T00:00:00
Sending data from 2020-04-05T00:00:00 to 2020-04-06T00:00:00
```
