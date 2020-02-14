---
id: applications-selenium
title: Selenium
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Nov  9 2018 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Selenium
```

Be sure that centreon-plugin-Applications-Selenium is installed and that the communication between your monitoring
poller and the selenium server is OK on port 4444

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                                  |
| :---------------------- | :----------------------------------------------------- |
| Host name               | *Name of the host*                                     |
| Alias                   | *Host description*                                     |
| IP                      | *Host IP Address*                                      |
| Monitored from          | *Monitoring Poller to use*                             |
| Host Multiple Templates | App-Selenium-WAA-custom or App-Selenium-Katalon-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host using App-Selenium-Katalon-custom template :

| Macro             | Description                                           | Default value          |
| :---------------- | :---------------------------------------------------- | :--------------------- |
| SELENIUMHOSTNAME  | Hostname of the Selenium server                       |                        |
| SELENIUMPORT      | Port of the Selenium server                           | 4444                   |
| SELENIUMBROWSER   | Browser used by Selenium server                       | \*firefox              |
| SCENARIODIRECTORY | Directory on the poller where the scenarii are stored | /var/lib/centreon\_waa |

Click on the *Save* button.

### Service Macro Configuration

The following macros must be configured on the deployed services :

| Macro        | Description                            |
| :----------- | :------------------------------------- |
| SCENARIONAME | Name of the scenario without extension |

Click on the *Save* button.

