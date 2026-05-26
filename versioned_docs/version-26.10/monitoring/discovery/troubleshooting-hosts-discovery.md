---
id: troubleshooting-hosts-discovery
title: Troubleshooting host discovery issues
---

## No more host discovery jobs appear in the Discovery page

The **Configuration > Hosts > Discovery** page is blank and no longer displays the host discovery jobs.

### Problem

The following error occurs in the **gorgoned.log** file:

``` shell
ERROR - [autodiscovery] -class- host discovery - cannot get host discovery jobs - request error [code: '500'] [message: 'Call to a member function getUuidAttributes() on null']
```

### Solution

> Do not remove the Monitoring Connector then install it again!

You need to reinstall the corresponding Monitoring Connector using the **reinstall** button: ![image](../../assets/monitoring/discovery/reinstall-complete.png).

## Host scan remains stuck in a scheduled state

When a host scan is initiated, it remains blocked in a scheduled state.

### Problem

The following error occurs in the **gorgoned.log** file:

``` shell
ERROR - [autodiscovery] -class- host discovery - cannot get platform versions - Login error [code: '401'] [message: 'Unauthorized']
```

### Solution

In the **/etc/centreon-gorgone/config.d/31-centreon-api.yaml** file, replace the **base_url** value with **http://127.0.0.1/centreon/api/latest/**

### Additional checks

- Check that the user and password are correct in the **/etc/centreon-gorgone/config.d/31-centreon-api.yaml** file.

- Check that the user specified in the **/etc/centreon-gorgone/config.d/31-centreon-api.yaml** file is accessing the API configuration. In the Centreon interface, go to the **Configuration > Users > Contacts / Users** page. Then, in the **Centreon Authentication** tab, check that the **Reach API Configuration** field is set to **Yes**.

## "No provider found" message appears when creating a host discovery task

When clicking the **ADD** button in the **Configuration > Hosts > Discovery** page, a "No provider found" message is displayed in the wizard.

### Checks

- Check that the Auto Discovery module is up to date in the **Administration > Extensions > Manager** page.

- Reinstall the corresponding Monitoring Connector using the **reinstall** button: ![image](../../assets/monitoring/discovery/reinstall-complete.png).
