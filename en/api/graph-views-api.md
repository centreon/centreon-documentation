---
id: graph-views-api
title: Graphical views API (beta)
---

If you want to automate standard views creation or maintenance, you may
use the Centreon MAP extension API.

With this API, in beta version, you can create/update/delete standard
views. To be able to use the API, the account you use needs to have one
of the following privileges:

-   Centreon Admin
-   Centreon MAP admin
-   Centreon MAP view creation rights & editions rights on views you
    want to update/delete

To access the API documentation, two possibilities:

-   You have Centreon MAP, go to the following URL:

     `http(s)://{map\_server\_url}/centreon-studio/api/beta/`

-   You don\'t have Centreon MAP, you can preview the API capabilities
    here: [Online documentation](https://api-documentation.centreon.com/centreon-map/index.html)

Because the Centreon Map API is not trivial to use, here is a scenario
that authenticate, then create a map and add an host on it.

**1. Authentication**

```
POST : http://{{serverURL}}:8080/centreon-studio/api/beta/authentication
```

```
Headers {
    Content-Type = application/json
    X-Client-Version = 19.10.0
}

Body {
    user = admin
    password = centreon
}
```

In the result, retrieve the {studio-session} (token), you'll need to
use it all your API calls. The headers will look like this:

```
Headers {
    Content-Type = application/json
    X-client-version = 19.10.0
    studio-session = {studio-session}
}
```

**2. Create a Map**

```
POST http://{{serverURL}}:8080/centreon-studio/api/beta/maps
```

```
Headers {
    Content-Type = application/json
    X-client-version = 19.10.0
    studio-session = {studio-session}
}

Body {
      "label": "My new Map create from API"
   }
```

Retrieve the ID of the view returned: {viewId}

**3.Open the Map**

```
GET http://{{serverURL}}:8080/centreon-studio/api/beta/maps/{viewId}
```

**4.Create a \"Shape\" (Rectangle) element (not yet on the map)**

```
POST http://{{serverURL}}:8080/centreon-studio/api/beta/centreon-resources
```

```
Body: {
    "label": "FR - Rectangle",
    "abscissa": 120,
    "ordinate": 120,
    "width": 130,
    "height": 53,
    "color": "#0096ff",
    "thickness": 1,
    "borderColor": "#f0f0f0",
    "line": 1,
    "type": "RECTANGLE"
}
```

Retrieve the element id you just created : `{id}`

**5. Attach the element to the opened view**

```
PUT http://{{serverURL}}:8080/centreon-studio/api/beta/views/{viewId}/elements/{id}
```