---
id: create-graphical-view
title: Créer une vue graphique
description: "Comment créer des vues d'infrastructure en temps réel avec Centreon MAP"
---

Ce tutoriel vous montre comment utiliser Centreon MAP pour offrir à vos équipes d'exploitation et à vos utilisateurs métier une vue d'ensemble en temps réel du statut de votre infrastructure IT.

Avec Centreon MAP, vous créez et partagez des vues graphiques de votre infrastructure, de votre réseau, de vos applications et de vos services directement depuis l'interface web de Centreon. Par exemple, une vue peut montrer d'un coup d'œil la disponibilité de vos applications métier critiques : en cas de panne, les équipes réagissent plus vite et rétablissent les services plus tôt.

![image](../assets/graph-views/ng/map-web-global-view.png)

À la fin de ce tutoriel, vous saurez :

- Créer une carte standard et la concevoir avec l'éditeur MAP.
- Créer une vue géographique.
- Afficher vos cartes et les partager avec les bons utilisateurs.

> Centreon MAP est une **extension** Centreon qui nécessite une [licence](../administration/licenses.md) valide. Pour en acheter une et récupérer les dépôts nécessaires, contactez [Centreon](mailto:sales@centreon.com).

## Avant de commencer

### Vérifier que vous pouvez créer des cartes

Pour créer des cartes, vous devez être administrateur Centreon ou appartenir à un groupe d'accès auquel le rôle de créateur est attribué. Si le bouton **Ajouter une carte** s'affiche à la page **Supervision > Map**, vous êtes autorisé à créer des cartes. Sinon, demandez à votre administrateur de [vous attribuer le rôle de créateur](../graph-views/map-web-access.md#attribuer-le-rôle-de-créateur).

### Définir l'objectif de votre carte

Avant de commencer à concevoir, définissez à quoi va servir la carte. Voici quelques questions à vous poser :

- Qui va utiliser cette carte, et que doit-on y voir ?
- De quel niveau de détail les utilisateurs ont-ils besoin : un statut global, ou le statut de chaque serveur, service ou lien réseau ?
- Toutes les ressources et tous les indicateurs dont vous avez besoin sont-ils déjà supervisés dans Centreon ?
- Que doit contenir la carte : des ressources, des graphiques de performance, des liens réseau, des images, etc. ?

## Créer une carte standard

Une carte standard est un schéma de votre infrastructure, dans lequel chaque élément affiche le statut en temps réel de la ressource qu'il représente.

### Créer la carte

1. Allez à la page **Supervision > Map**.
2. Dans la section **Cartes standard**, cliquez sur **Ajouter une carte**.
3. Saisissez un **Nom** pour la carte. Si vous le souhaitez, renseignez les **Coordonnées géographiques** (au format `Latitude, Longitude`) pour pouvoir ajouter plus tard cette carte à une vue géographique, et sélectionnez une **Image** pour illustrer la carte dans la liste des cartes.
4. Cliquez sur **Ajouter**.

La nouvelle carte s'ouvre dans l'éditeur MAP.

### Découvrir l'éditeur MAP

![image](../assets/graph-views/ng/map-web-editor-description.png)

L'éditeur est organisé de la manière suivante :

1. **Fil d'Ariane** : indique où vous vous trouvez dans la carte, lorsque celle-ci comporte plusieurs niveaux.
2. **Barre d'outils** : permet d'afficher ou de masquer les panneaux, d'annuler ou de rétablir des actions, et de zoomer ou dézoomer.
3. **Rechercher une ressource** : permet d'effectuer une recherche sur les ressources.
4. Panneau **Formes** : contient tous les éléments que vous pouvez ajouter à votre carte, des formes basiques aux ressources Centreon.
5. Panneau **Format** : permet de modifier le format de l'élément sélectionné.
6. **Espace de travail** : la zone dans laquelle vous concevez votre carte.
7. **Onglets** : permettent de naviguer entre les niveaux de votre carte.

### Concevoir la carte

1. Ajoutez vos ressources Centreon :
    - Pour ajouter une ressource, faites glisser un élément **Host**, **Service**, **Host group**, **Service group**, **Metaservice** ou **Business activity** du panneau **Formes** vers l'espace de travail, faites un clic droit dessus, sélectionnez **Modifier les paramètres...**, choisissez la ressource, puis cliquez sur **Soumettre**.
    - Pour ajouter plusieurs ressources à la fois, utilisez la barre **Rechercher une ressource** située au-dessus de l'espace de travail, sélectionnez les ressources voulues, puis cliquez sur **Ajouter à la carte**.
2. Donnez du contexte à votre carte :
    - Les **widgets** affichent des données sur vos ressources, par exemple un graphique à camembert des statuts, un graphique linéaire des données de performance, une jauge ou l'output d'un service.
    - Les **liens** relient les éléments entre eux. Un **Status link** prend la couleur du statut d'une ressource, et un **Metric link** affiche les métriques d'un service.
    - Les éléments **Médias** permettent d'ajouter des images et des URL, et les formes **Basiques** permettent d'organiser votre carte à l'aide de formes et de texte.
3. Si votre carte comporte plusieurs niveaux (par exemple, un niveau par site ou par application), ajoutez des **conteneurs**. En mode visualisation, chaque conteneur devient une carte avec son propre statut.
4. Utilisez le panneau **Format** pour personnaliser le style, le texte et la disposition de vos éléments.
5. Cliquez sur **Enregistrer**, puis sur **Quitter**.

Votre carte s'affiche en mode visualisation, et chaque élément indique le statut en temps réel de sa ressource.

> Pour en savoir plus sur les éléments disponibles et leurs paramètres, consultez [Créer une carte standard](../graph-views/map-web-create-standard-map.md).

## Créer une vue géographique

Si votre infrastructure est répartie sur une ville, un pays ou le monde entier, une vue géographique affiche le statut de vos ressources sur une zone géographique.

### Prérequis : ajouter des coordonnées géographiques à vos ressources

Une ressource ne peut s'afficher sur une vue géographique que si elle possède des coordonnées géographiques. Pour un hôte :

1. Allez à la page **Configuration > Hôtes > Hôtes** et cliquez sur l'hôte.
2. Dans l'onglet **Informations détaillées de l'hôte**, remplissez le champ **Coordonnées géographiques** au format `Latitude, Longitude`.
3. Cliquez sur **Sauvegarder**.

Vous pouvez également ajouter des coordonnées géographiques aux groupes d'hôtes, aux activités métier et aux cartes standard.

### Créer la vue

1. Allez à la page **Supervision > Map**.
2. Dans la section **Vues géographiques**, cliquez sur **Ajouter une vue géographique**.
3. Saisissez un **Nom** pour la vue et, si vous le souhaitez, sélectionnez une **Image**.
4. Dans la section **Ajouter des ressources**, sélectionnez les cartes, groupes d'hôtes, hôtes et activités métier à afficher.
5. Cliquez sur **Ajouter**.

Chaque ressource s'affiche sous la forme d'un cercle dont la couleur indique son statut. Lorsque des ressources sont proches les unes des autres, elles sont regroupées dans un seul cercle, qui affiche le statut le plus critique et le nombre de ressources dans ce statut.

> Pour en savoir plus, consultez [Créer une vue géographique](../graph-views/map-web-create-geoview.md).

## Afficher et partager vos cartes

L'accès aux cartes repose sur les groupes d'accès Centreon : chaque équipe ne voit que les cartes qui la concernent.

- **Partager une carte** : à la page **Supervision > Map**, cliquez sur le bouton de **partage** de la carte, définissez les privilèges de chaque groupe d'accès, puis cliquez sur **Sauvegarder**. Consultez [Comprendre les droits d'accès aux cartes (ACL)](../graph-views/map-understanding-access.md).
- **Envoyer un lien vers une carte** : en mode visualisation, cliquez sur **Copier l'URL de la carte**.
- **Ajouter une carte à un tableau de bord** : ajoutez le widget **MAP - Afficher une vue** à un [tableau de bord](../alerts-notifications/dashboards.md), puis sélectionnez la carte à afficher.

Vous connaissez maintenant les principales fonctionnalités de Centreon MAP. Pour aller plus loin, consultez la [documentation de Centreon MAP](../graph-views/introduction-map.md).
