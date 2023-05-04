---
id: share-view
title: Partager une vue
---

Si vous voulez partager une vue avec quelqu'un qui ne connaît pas Centreon et/ou qui ne veut pas avoir à se connecter à Centreon mais seulement voir une vue de la carte Centreon, vous pouvez créer un compte limité dédié et donner accès uniquement au menu, aux actions et aux vues dédiés.

Comment créer l'URL :

- Disposez d'un compte limité dédié et copiez sa clé d'autologin et son nom d'utilisateur (ex : partner-1 & `autologin key = 23d501aa0\[\...\]8bf4fbc8a`)

- Récupérez le lien direct pour aller sur votre site (ex : `https://demo.centreon.com/centreon/main.php?p=288#renderGate/View1/xxxx/`).

  *Vous pouvez récupérer l'URL en utilisant le raccourci "Copier dans le presse-papiers" à côté du fil d'Ariane.*

- Décidez de masquer ou non le menu Centreon (ex : ajoutez *&min=1* à l'URL pour minifier le menu)

Voici un exemple qui utilise notre plateforme de démonstration afin que l'utilisateur (partenaire-1) accède directement à la vue en mode plein écran (sans menu)

```url
https://demo.centreon.com/centreon/main.php?autologin=1&min=1&useralias=partner-1&token=23d501aa07a2ebd7cd2d1480d782f898bf4fbc8a&p=288#renderGate/122355/122354/HILLMORE%20Insurance
```