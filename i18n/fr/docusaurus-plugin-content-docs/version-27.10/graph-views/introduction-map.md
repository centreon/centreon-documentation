---
id: introduction-map
title: Introduction à Centreon MAP
description: "Centreon MAP vous permet de créer, personnaliser, consulter et partager des cartes de votre infrastructure supervisée dans l'interface web Centreon."
---

Centreon MAP vous permet de créer, visualiser et partager des représentations graphiques de votre infrastructure supervisée, directement dans l'interface web Centreon.

> Centreon MAP est une **extension** Centreon qui nécessite une [licence](../administration/licenses.md) valide.
> Pour en acquérir une et récupérer les dépôts nécessaires, contactez [Centreon](mailto:sales@centreon.com).

> **À partir de Centreon 24.10, MAP Legacy n'est plus disponible.** Que vous utilisiez encore MAP Legacy ou non, consultez la page [Fin de vie de MAP Legacy](https://docs.centreon.com/fr/docs/24.10/graph-views/map-legacy-eol/).

> Pour gérer les cartes à l'aide de l'API REST de Centreon MAP, consultez [Automatiser MAP via l'API](../api/map-api.md).

## Aperçu de l'interface

Créez, personnalisez et visualisez vos cartes au sein d'une unique interface web.

Commencez par créer vos cartes dans l'éditeur MAP :

![image](../assets/graph-views/ng/map-web-editor-view.png)

Visualisez ensuite votre carte en mode visualisation :

![image](../assets/graph-views/ng/map-web-global-view.png)

Vos cartes peuvent être affichées de deux façons dans l'interface :
- À la page **Supervision > Map**, en mode visualisation.
- À la page **Accueil > Vues personnalisées**, à l'aide d'un [widget](../alerts-notifications/custom-views.md) MAP dédié.

## Procédures

Les procédures suivantes permettent de gérer et d'utiliser Centreon MAP.

### Gérer MAP
  - [Installer MAP](map-web-install.md) décrit les prérequis et les procédures d'installation de MAP.
  - [Installer MAP sur un serveur distant](map-web-install-remote.md) explique comment installer MAP sur un serveur distant.
  - [Mettre à jour MAP](map-web-update.md) décrit la procédure de mise à jour de MAP.
  - [Gérer les droits d'accès dans MAP](map-web-access.md) décrit les différents droits et permissions sur les cartes.
  - [Problèmes connus dans MAP](map-web-known-issues.md) répertorie les problèmes que vous pouvez rencontrer en utilisant MAP.
  - [Dépanner MAP](map-web-troubleshooting.md) vous aide à résoudre certains incidents survenant dans MAP.

### Utiliser MAP
  - [Bonnes pratiques pour utiliser les cartes](map-best-practices.md) donne des conseils pour créer des cartes claires et faciles à maintenir.
  - [Gérer les cartes dans MAP](map-web-manage.md) explique comment gérer les cartes à partir de l'interface Centreon MAP.
  - [Créer une carte standard](map-web-create-standard-map.md) décrit comment créer des cartes standard et comment les personnaliser à l'aide de l'éditeur MAP.
  - [Créer une vue géographique](map-web-create-geoview.md) explique comment afficher vos ressources dans une zone géographique définie.
