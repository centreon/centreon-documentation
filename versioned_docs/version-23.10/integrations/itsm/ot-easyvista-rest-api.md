---
id: ot-easyvista-rest-api
title: EasyVista RestAPI
---

## How it works

EasyVista open-tickets provider uses the EasyVista Rest API to open incidents
about your monitoring alerts.

## Installing the EasyVistaRest provider

1. Download the **EasyVistaRest** folder into **/usr/share/centreon/www/modules/centreon-open-tickets/providers** on the central server.

2. Edit the **/usr/share/centreon/www/modules/centreon-open-tickets/providers/register.php** file by adding a line for EasyVistaRest at the end of the list, as follows:

```shell
$register_providers['RequestTracker2'] = 12;
$register_providers['Itop'] = 13;
$register_providers['EasyVistaRest'] = 14;
```

## Configuring the Open Tickets Rules form

1. Go to **Configuration > Notification > Rules** to configure Centreon Open Tickets. This opens the **Rules** form.

2. Click **Add** and enter a new **Rule name** for EasyVistaRest.

3. Select **EasyvistaRest** in the **Provider** list.

### Set mandatory parameters

You must enter the following parameters:

- **Address**: EasyVista IP address.
- User account to access the API.
- Select the authentication method: API token (Bearer token) or standard authentication (user and password). 
  > The use of an API token (Bearer token) is recommended but you still can set a standard authentication. If you set the authentication wih a Bearer token, you can find information in the [EasyVista documentation](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/#Procedure_RESTAPITokenSM) (only in French version).
- **User token** parameter: enter **0** if you set a standard authentication.

### Add EasyVista custom fields

You can add custom fields for EasyVista RestAPI using EasyVista's specific syntax.

> According to EasyVista documentation, the name of a custom field must begin with ``e_``. In this example, we will add the **e_city** field name.

1. In the **EasyVista** section, click **+Add a new entry**.
2. Then select **Custom Field** in **Argument**.
3. Fill in the **Value** as follows: ``{$select.e_city.value}``.
  > The element **e_city** must be identical to the EasyVista field name, [see this step](#define-the-type-of-argument).
  
  > The element **.value** can be replaced with **.placeholder**, [see this step](#define-possible-values).
4. Add as many entries as you need.

#### Define the type of argument

Now you need to define the type of the argument you previously set. As you have added custom fields, the argument should be **custom** type.

1. In the **Common** section, click **+Add a new entry** in the **Lists** parameter.
2. Enter **e_city** in the **Id** field and select **Custom** in the **Type** field.
  > Ensure the **Id** is identical to what you entered in the custom field: **e_city** in this case.

#### Define possible values

Now the custom field is configured, you need to associate possible values to it. In this case, you will define the possible values for **e_city**.

> When you previously set the value in the **Argument** field, note that:
- if you specified ``{$select.e_city.value}``: the name of the **value** parameter will be sent to EasyVista,
- if you specified ``{$select.e_city.placeholder}``: the name of the **label** parameter will be sent to EasyVista. The **Label** field will be the one users will see in the value selection list when opening the ticket.

1. In the **Custom list definition**, click **+Add a new entry**.
2. Fill in the **Value** (for instance the zip code of the city) and **Label** (for instance the name of the city) parameters.
3. Add as many new entries as you need. In this case, this would be several cities with their zip code and name.

### Set filters for assets

All information sent from Centreon to EasyVista comes from Centreon. The only exception may be assets that can be retrieved from EasyVista APIs.

> The filter field will follow this format: ``search=field:value1,field:value2`` according to the [EasyVista documentation](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20See%20a%20list%20of%20assets/).

Follow this procedure if you need to import assets from EasyVista:

1. In the **Common** section, click **+Add a new entry** in the **Lists** parameter.
2. Fill in the parameters as follows:
   - **Id**
   - **Label:** Asset
   - **Type:** Asset
   - **Filter:** search=field:value

## Configuration Item management

You can enter the name of the host or host group to which the stream connector belongs as a Configuration Item. If the ticket is open on several hosts at the same time, only common host groups will be listed.

## Testing with calls to the EasyVista Rest API

To help you analyze problems, this stream connector can perform three types of call to the EasyVista API Rest, with curl commands.

> Note that you must adapt the following commands with your own values. For instance, ``<easy_vista_address>`` should be replaced with the address of your EasyVista server.

The commands below assume that you are using the Bearer token authentication method.
If you use the standard authentication method (user and password), you need to replace ``-H 'Authorizaon: Bearer`` with ``-u ':'``.

### Test the ticket opening

```shell
curl -X POST -k 'https://<easy_vista_address>/api/v1/requests' -H 'Content-Type:
application/json' -H 'Authorization: Bearer <token>' -d '{"requests":
[{"catalog_guid:"1234","catalog_code":"1234"}]}'
```

> The list of fields is not exhaustive. Examples are available in the [EasyVista documentation](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20Create%20an%20incident-request/).


### Test the ticket closing

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
