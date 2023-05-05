---
id: rest-api-v2
title: Rest API (v2)
---

## Overview

Centreon Web Rest API v2 aims to replace first version.

To start using it, please refer to the [dedicated
page](https://docs-api.centreon.com/api/centreon-web/22.10/).

## Create a Postman collection from the OpenAPI definition

In order to manipulate the API more efficiently or just understand how it works,
there is nothing more handy than a [Postman](https://learning.postman.com/docs/getting-started/introduction/)
collection.

### Import the OpenAPI definition

From your workspace, click on the **Import** button.

![image](../assets/api/postman-import.png)

Go to the **Link** tab and enter the URL to the OpenAPI definition from GitHub:

```text
https://raw.githubusercontent.com/centreon/centreon/22.10.x/centreon/doc/API/centreon-api-v22.10.yaml
```

![image](../assets/api/postman-import-link.png)

Click on **Continue** and tune some of the default parameters:

- Select only *Collection* as an import method,
- Select *Example* for the *Request parameter generation* as it will bring more
  context on path variables or query parameters,
- Select *Tags* for the *Folder organization* as it will arrange the collection
  as in the documentation.

Then click on **Import** and wait a few seconds for the process to be done.

![image](../assets/api/postman-import-feedback.png)

### Add an environment

To be able to communicate with your platform, the collection will use
environment variables to define access information and credentials.

From your workspace, click on the **Manage Environments** icon.

![image](../assets/api/postman-environment.png)

Click on **Add** and set the variables as below with your platform information:

![image](../assets/api/postman-environment-add.png)

Then click on **Add**, and select it in the environments list.

> The API version is not set in the environment variables. It's more of a
> collection variable. It can be changed directly in the collection by editing
> it.
>
> ![image](../assets/api/postman-collection-edit.png)
>
> In the **Variables** tab, change the *version* value to one of "beta",
> "latest" or "v2".
>
> ![image](../assets/api/postman-collection-variables.png)
>
> Other variables will be overload by environment variables.

### Edit the Login request

To make the *Login* request use the previously defined credentials, and retrieve
the API token from the response, it needs to be edited.

From the collection, select the *Login* request from the *Authentication*
folder.

In the **Body** tab, change the *login* and *password* values by the environment
variables `{{username}}` and `{{password}}` as below:

![image](../assets/api/postman-login-body.png)

In the **Tests** tab, add the following code:

```javascript
pm.test("Status code is 200", function () { pm.response.to.have.status(200); });

const responseJson = pm.response.json();

pm.test("The response has all properties", () => {
  pm.expect(responseJson).to.be.an("object");
  pm.expect(responseJson.contact.alias).to.eql(pm.environment.get("username"));
  pm.expect(responseJson.security.token).to.be.a('string');
});

pm.environment.set("token", responseJson.security.token);
```

![image](../assets/api/postman-login-test.png)

Then click on **Save** or use *Ctrl+S* shortcut.

### Use the API token

Once saved, **Send** the *Login* request.

![image](../assets/api/postman-login-response.png)

If successful, it will add a new *token* enviroment variable filled with the
token retrieved from login.

![image](../assets/api/postman-environment-view.png)

To use it in all the requests, edit the collection.

![image](../assets/api/postman-collection-edit.png)

In the **Authorization** tab, choose *API Key* type and fill the *Key* field
with `X-AUTH-TOKEN` and *Value* field with `{{token}}`.

![image](../assets/api/postman-collection-edit-authorization.png)

Make sure it will be added to *Header*.

Then click on **Update**.

### Make requests

Now that a valid token is stored, you can execute requests on other endpoints.

Uncheck unused query parameters or fill them with values, and click on **Send**.

![image](../assets/api/postman-hosts-list-console.png)

You will notice the token added in the defined header.

If the token expires, just re-execute the *Login* request to get a new one.
