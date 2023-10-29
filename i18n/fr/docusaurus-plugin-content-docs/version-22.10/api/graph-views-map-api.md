---
id: map-api
title: MAP API
---

Si vous souhaitez automatiser la création ou la maintenance de cartes standard, vous pouvez utiliser l'API de Centreon MAP.

## Permissions

Avec cette API, vous pouvez créer / mettre à jour / supprimer des cartes standard. Pour pouvoir utiliser l'API, le compte que vous utilisez doit avoir l'un des privilèges suivants :

- Un compte Centreon Admin.
- Les droits de création de carte et de modification sur les cartes que vous souhaitez mettre à jour / supprimer.

## Comment utiliser l'API de Centreon MAP

> Parce que l'API de Centreon MAP n'est pas évidente à utiliser, voici un scénario pour s'authentifier, puis créer une carte et y ajouter une "shape".

### S'authentifier

```
POST : http://{{serverURL}}:8081/centreon-map/api/beta/auth/sign-in
```

```
Headers {
    Content-Type = application/json
    X-Client-Version = 22.10.0
}

Body {
    "login" : "admin"
    "password" : "denied"
}
```

- Dans le résultat, récupérez le {jwtToken}. Vous devrez l'utiliser pour tous vos appels à l'API. Les headers ressembleront à ceci :

```
Headers {
    Content-Type = application/json
    X-client-version = 22.10.0
    Authorization = Bearer {jwtToken}
}
```

### Créer une carte

```
POST http://{{serverURL}}:8081/centreon-map/api/beta/maps
```

```
Headers {
    Content-Type = application/json
    X-client-version =  22.10.0
    Authorization = Bearer {jwtToken}
}

Body {
      "name": "My new map created from API"
   }
```

- Récupérez l'identifiant de la carte {mapId} et de la vue {viewId} renvoyés.

### Ouvrir la carte

```
GET http://{{serverURL}}:8081/centreon-map/api/beta/maps/{mapId}/views/{viewId}
```

### Créer et attacher un élément "shape" à la carte ouverte

Dans ce scénario, l'élément "shape" est un rectangle.

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
             "label": "FR - Rectangle",
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

## Pour plus d'informations

> Suivez ce [lien](https://docs-api.centreon.com/api/centreon-map/) pour accéder à la documentation de l'API Centreon et avoir un aperçu des fonctionnalités de l'API.
