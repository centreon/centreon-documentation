---
id: ot-easyvista-rest-api
title: EasyVista RestAPI
---

The EasyVista Open Tickets provider uses the EasyVista Rest API to open incidents about your monitoring alerts.

## Requirements

- Before going any further, make sure that you have correctly set up [Centreon Open Tickets](https://docs.centreon.com/docs/alerts-notifications/ticketing-install/) on your Centreon instance.

- Then you need to [configure Open Tickets](../../alerts-notifications/ticketing.md#hosts--services) in order for resources (hosts and services) to receive a ticket number.

## Installing the EasyVistaRest provider

1. [Download](https://share.centreon.com/s/qypnoTgYfxHejaS) the **EasyVistaRest** folder into **/usr/share/centreon/www/modules/centreon-open-tickets/providers** on the central server, or a remote server.

2. Edit the **/usr/share/centreon/www/modules/centreon-open-tickets/providers/register.php** file by adding a line for EasyVistaRest at the end, as follows:

  ```shell
  $register_providers['RequestTracker2'] = 12;
  $register_providers['Itop'] = 13;
  $register_providers['EasyVistaRest'] = 14;
  ```
  
## Configuring your EasyVista server

You may need to configure your EasyVista server so that it can receive data from Centreon. Please refer to EasyVista's documentation. Make sure EasyVista is able to receive data sent by Centreon: flows must not be blocked by EasyVista's configuration or by a security equipment.

## Configuring the connector in Centreon

1. In Centreon, go to **Configuration > Notification > Rules** to configure Centreon Open Tickets. This opens the **Rules** form.

2. Click **Add** and enter a new **Rule name** for EasyVistaRest.

3. Select **EasyVistaRest** in the **Provider** list.

### Set mandatory parameters

You must enter the following parameters in the **Easyvista Rest Api** section:

- **Address**: IP address of the EasyVista server you want to open tickets on.
- **API path**
- **Account**: user account to access the API.
- **Bearer token or account password**: the use of an API token (Bearer token) is recommended but you still can set a standard authentication. If you set a **Bearer token**, refer to the [EasyVista documentation](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/?language=en#HProcedures).
- **Use token**: enter **0** if you set a standard authentication.

### Add EasyVista custom fields

> You must refer to the custom fields you have created in EasyVista.

Your custom fields will appear in the pop up that will allow you to open a ticket. You must use EasyVista's specific syntax: the name of a custom field must begin with ``e_``. 

In this procedure, we will add the **e_city** field.

#### Add the field

1. In the **Easyvista Rest Api** section, click **+Add a new entry**.
2. In the **Argument** list, select **Custom Field**.
3. Fill in the **Value** following this format: ``{$select.e_city.value}`` (with **e_city** in this example).
  > The element **e_city** must be identical to the EasyVista field name.
  
  > The element **.value** can be replaced with **.placeholder**.
4. Add as many entries as you need.

#### Define the type of the field

Now you need to define the type of the argument you previously set. As you have added custom fields, the argument should have the **custom** type.

1. In the **Common** section, click **+Add a new entry** in the **Lists** parameter.
2. Following our example, enter:
   - **e_city** in the **Id** field,
   - **Best cities** in the **Label** field,
   - **Custom** in the **Type** field.
  > Ensure the **Id** is identical to what you entered in the custom field above: **e_city** in this case.

#### Define possible values

Now the custom field is configured, you need to associate possible values to it. This is the list of values users will see in Centreon when opening a ticket. In this case, you will define the possible values for **e_city**.

> For the value you set previously in the **Argument** field:
- if you specified ``{$select.e_city.value}``: the name of the **value** parameter will be sent to EasyVista,
- if you specified ``{$select.e_city.placeholder}``: the name of the **label** parameter will be sent to EasyVista. The **Label** field will be the one users will see in the value selection list when opening the ticket.

1. In the **Custom list definition**, click **+Add a new entry**.
2. Fill in the **Value** (for instance the zip code of the city) and **Label** (for instance the name of the city) parameters.
3. Add as many new entries as you need. In this case, this would be several cities with their zip code and name.

### Set filters for assets

All information sent from Centreon to EasyVista comes from Centreon. The only exception may be assets (equipments, configuration items and monitored resources) that can be retrieved from EasyVista APIs.

> The filter field will have the following format (this is an example): ``search=field:value1,field:value2`` (see the [EasyVista documentation](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20See%20a%20list%20of%20assets/?language=en)).

Follow this procedure if you need to import assets from EasyVista:

1. In the **Common** section, click **+Add a new entry** in the **Lists** parameter.
2. Fill in the parameters as follows (this is an example):
   - **Id**
   - **Label:** Asset
   - **Type:** Asset
   - **Filter:** search=field:value

## Testing the connector

To help you analyze problems, use the following curl commands to test the stream connector.

Note that you must adapt the following commands with your own values. For instance, ``<easy_vista_address>`` should be replaced with the address of your EasyVista server.

The commands below assume that you are using the Bearer token authentication method.
If you use the standard authentication method (user and password), you need to replace ``-H 'Authorization: Bearer`` with ``-u ':'``.

> The commands below are given as examples.

### Test the opening of a ticket

```shell
curl -X POST -k 'https://<easy_vista_address>/api/v1/requests' -H 'Content-Type:
application/json' -H 'Authorization: Bearer <token>' -d '{"requests":
[{"catalog_guid:"1234","catalog_code":"1234"}]}'
```

> This is an example. See the [EasyVista documentation](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20Create%20an%20incident-request/).


### Test the closing of a ticket

```shell
curl -X PUT -k 'https://<easy_vista_address>/api/v1/requests/<ticket_id>' -H
'Content-Type: application/json' -H 'Authorization: Bearer <token>' -d '{"closed":
{}}
```

### Retrieve assets

- With filter:

  ```shell
  curl -X GET -k 'https://<easy_vista_address>/api/v1/assets/?fields=asset_tag,HREF'
  -H 'Content-Type: application/json' -H 'Authorization: Bearer <token>'
  ```

- Without filter:

  ```shell
  curl -X GET -k 'https://<easy_vista_address>/api/v1/assets/?
  fields=asset_tag,HREF&search=field:value' -H 'Content-Type: application/json' -H
  'Authorization: Bearer <token>'
  ```
