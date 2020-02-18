---
id: ba-settings
title: Settings
---

The default settings are conveniently prefilled to assist you in
creating new BAs and indicators (KPIs). It can be found in  `Monitoring > Business Activity > Default Settings`

## Impact settings

### Services & Meta services

The following parameters correpond to the default values behind the *Weak*,
*Minor*, *Major*, *Critical* and *Blocking* impact types when configuring
indicators in *Regular* mode.

![image](assets/service-mapping/guide/list_impacts_basic.png)

Impact types have to be defined in percentage.

![image](assets/service-mapping/guide/impacts_configuration.png)

### Business Activity and Boolean rule

These default parameters are used for prefilling the fields for **Business
Activity** or **Boolean rule**-type indicators in *Advanced* mode.

![image](assets/service-mapping/guide/impacts_ba_boolean.png)

## Business Activity settings

The default parameters below define values for BAs.

![image](assets/service-mapping/guide/defaut_ba_settings.png)

| Column                   | Description                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| Warning Threshold        | *Warning* threshold: Corresponds to a warning condition of the BA. A notification can then be sent.   |
| Critical Threshold       | *Critical* threshold: Corresponds to a critical condition of the BA. A notification can then be sent. |
| Reporting Period         | Time Default BA reporting time period                                                                 |
| Notification Time Period | Default BA notification time period                                                                   |
| Contact Groups           | Default BA notified contact groups                                                                    |
| Notification Interval    | Default BA notification interval                                                                      |
| Height Impact Tree       | Default height for window showing impact tree                                                         |

To be able to notify user/external solutions (Slack, OpenDuty etc..) belonging
to the contact group you defined, you have to configure the dedicated Business
Activity notification section in user's form:

![image](assets/service-mapping/guide/bam_user_notification.png)

## User settings

The **User Settings** are personalised options that belong to each user profile,
you can configure it in `Monitoring > Business Activity > User Settings`

## Custom Overview

![image](assets/service-mapping/guide/user_custom.png)

## Default Graph Style

*Deprecated feature - will be removed in future version*.

## Graph colors

*Deprecated feature - will be removed in future version*.

## Miscellaneous

*Deprecated feature - will be removed in future version*.
