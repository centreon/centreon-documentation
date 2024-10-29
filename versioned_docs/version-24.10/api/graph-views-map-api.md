---
id: map-api
title: MAP API
---

If you want to automate standard maps creation or maintenance, you may use the Centreon MAP extension API.

## Permissions

With this API, you can create / update / delete standard maps. To be able to use the API, the account you use needs to have one
of the following privileges:

- Centreon Admin account.
- Map creation rights and editing rights for maps you wish to update / delete.

## How to use Centreon MAP API

> Because the Centreon MAP API is not trivial to use, here is a scenario to authenticate, then create a map and add a shape on it.

### Authenticate

```
POST : http://{{serverURL}}:8081/centreon-map/api/beta/auth/sign-in
```

```
Headers {
    Content-Type = application/json
    X-Client-Version = 24.04.0
}

Body {
    "login" : "admin"
    "password" : "denied"
}
```

- In the result, retrieve the {jwtToken}. You will need to use it for all your API calls. The headers will look like this:

```
Headers {
    Content-Type = application/json
    X-client-version = 24.04.0
    Authorization = Bearer {jwtToken}
}
```

### Create a map

```
POST http://{{serverURL}}:8081/centreon-map/api/beta/maps
```

```
Headers {
    Content-Type = application/json
    X-client-version =  24.04.0
    Authorization = Bearer {jwtToken}
}

Body {
      "name": "My new map created from API"
   }
```

- Retrieve the ID of the map {mapId} and the view {viewId} returned.

### Open the map

```
GET http://{{serverURL}}:8081/centreon-map/api/beta/maps/{mapId}/views/{viewId}
```

### Create and attach a "shape" element to the opened map

In this scenario, the "shape" element is a rectangle.

```
PUT http://{{serverURL}}:8081/centreon-map/api/beta/maps/{mapId}/views
```

```
Body: {
 "id": {viewId},
 "shapes": [
     {
        "type": "RECTANGLE",
        "graphics": {
             "label": "EN - Rectangle",
             "x": 120,
             "y": 120,
             "width": 130,
             "height": 53,
             "color": "#0096FF",
             "thickness": 1,
             "borderColor": "#F0F0F0",
             "line": "SOLID"
         }
      }
   ]
}
```

## More information

> Follow this [link](https://docs-api.centreon.com/api/centreon-map/24.10/) to access the Centreon API documentation and preview the API capabilities.
