---
id: dashboards
title: Tableaux de bord Beta
---

> Centreon Tableaux de bord est disponible en version bêta à partir de **Centreon version 23.10**.

Commencez par créer des tableaux de bord et ajoutez des widgets spécialement conçus pour optimiser votre expérience utilisateur. Bénéficiez ensuite d'options de visualisation de données pour afficher et suivre vos ressources en temps réel.

![image](../assets/alerts/dashboard-view.png)

## Activer la fonctionnalité Tableaux de bord Beta

L'accès à la fonctionnalité Tableaux de bord n'est pas géré au niveau de l'utilisateur, mais via des groupes d'accès ou des listes de contrôle d'accès (ACL). Vous autorisez les utilisateurs à accéder à la fonctionnalité en accordant des droits à l'ACL à laquelle ils appartiennent (en savoir plus [sur les ACL](../administration/access-control-lists.md)).

### Configurer l'ACL

> Vous devez être connecté à Centreon en tant qu'administrateur.

- Dans cet exemple, nous allons créer une nouvelle ACL appelée **Utilisateurs des tableaux de bord**. Cette ACL contiendra les utilisateurs appartenant au groupe **Guests**.

1. Allez dans **Administration > ACL > Gestion des accès aux menus**.
2. Cliquez sur le bouton **Ajouter**. Ceci ouvre le formulaire **Ajouter une ACL**.
3. Renseignez le champ **Nom de l'ACL**. Dans cet exemple : **Dashboards users**.
4. Sélectionnez **Activé** dans les paramètres **Statut**.
5. Sélectionnez les **Groupes liés** à inclure dans cette ACL. Dans cet exemple : **Guests**.
6. Dans la section **Pages disponibles**, développez le menu **Accueil**, puis le menu **Tableaux de bord**. La liste des profils à sélectionner s'affiche.

  > - **Viewer:** ne peut voir que les tableaux de bord auxquels il a accès.
  > - **Creator:** peut créer et modifier les tableaux de bord auxquels il a accès.
  > - **Administrator:** peut accéder à tous les tableaux de bord et les modifier.

7. Sélectionnez le profil à définir pour cette ACL. Dans cet exemple : **Viewer**.
8. Cliquez sur **Sauvegarder** pour confirmer vos modifications.

### Vérifier que la fonctionnalité est activée

> Vous devez disposer d'un compte d'utilisateur avec des droits d'accès à la fonctionnalité Tableaux de bord.

1. Connectez-vous à Centreon.
2. Vous devriez voir dans le menu **Accueil**, l'entrée **Tableaux de bord Beta**.

## Créer votre premier tableau de bord

> Vous devez être connecté à Centreon avec des droits d'administrateur ou de créateur.

1. Dans la page **Bibliothèque de tableaux de bord**, cliquez sur le bouton **Créer un tableau de bord**. Cela ouvre la modale **Créer un tableau de bord**.
2. Nommez le tableau de bord et renseignez une description si nécessaire.
3. Cliquez sur **Créer** pour confirmer la création.

Votre tableau de bord est maintenant ajouté ! Vous pouvez directement commencer à ajouter des widgets.

### Ajouter des widgets

> Votre tableau de bord doit être ouvert en mode édition.

- S'il s'agit de votre tout premier widget, cliquez sur la zone **Ajouter widget**.
- Sinon, cliquez sur le bouton **+ Ajouter widget** à droite de l'interface.

![image](../assets/alerts/widget-view.png)

#### Étape 1 : sélectionner le type de widget

 > Les paramètres du widget dépendent du widget sélectionné.

1. Renseignez les **Propriétés du widget** (titre et description).
2. Renseignez les **Paramètres de valeur** : selon le widget que vous avez sélectionné, il s'agit principalement d'options de visualisation des données.

#### Étape 2 : sélectionner les ressources

1. Sélectionnez un **type de ressource**.
2. Sélectionnez ensuite une **ressource**.

#### Étape 3 : sélectionner les métriques

1. Sélectionnez le **nom du service**.
2. Sélectionnez ensuite une **métrique**.
3. Cliquez sur **+ Ajouter une ressource** si vous avez besoin d'ajouter d'autres ressources.
4. Enregistrez vos modifications.

### Autres actions

Cliquez sur le menu avec les **trois points verticaux** en haut à droite du widget pour le modifier ou pour accéder à d'autres actions :
- Actualiser
- Dupliquer
- Supprimer le widget

> En mode édition, vous pouvez facilement organiser vos widgets en les déplaçant ou en les redimensionnant. N'oubliez pas de sauvegarder vos modifications.

## Gérer les tableaux de bord

> Vous devez être dans la page **Bibliothèque de tableaux de bord** pour avoir une vue d'ensemble de vos tableaux de bord.

### Modifier un tableau de bord

#### Mettre les propriétés à jour

Cliquez sur le bouton **roue dentée** en bas à droite du tableau de bord pour mettre son nom et sa description à jour.

#### Modifier les widgets du tableau de bord 

1. Cliquez sur le tableau de bord pour l'ouvrir en mode vue.
2. Cliquez sur **Éditer le tableau de bord** pour accéder aux widgets et les gérer en mode édition.

### Supprimer un tableau de bord

Cliquez sur le bouton **Corbeille** en bas à gauche du tableau de bord pour le supprimer. Confirmez ensuite la suppression.

### Partager un tableau de bord

> Vous pouvez partager des tableaux de bord en utilisant l'interface **Gestion des droits d'accès**.

#### À propos des droits d'accès

Vous utilisez la fonctionnalité Tableaux de bord avec un profil de **viewer** ou **editor** :

- Les **viewers** : peuvent uniquement visualiser les tableaux de bord que vous partagez avec eux.
- Les **editors** : peuvent visualiser et modifier les tableaux de bord que vous partagez avec eux.

#### Gérer les droits d'accès

1. Cliquez sur le bouton **partager** en bas à droite du tableau de bord.
2. Dans la liste déroulante **Ajouter un contact**, sélectionnez l'utilisateur à ajouter.
3. Sélectionnez le profil **Viewer** ou **Editor**.
4. Cliquez sur le bouton **+** pour l'ajouter.
5. Répétez l'action pour chaque utilisateur que vous souhaitez ajouter.
6. Cliquez sur le bouton **Mettre à jour** pour enregistrer vos modifications.

Les utilisateurs que vous venez d'ajouter ont maintenant accès au partage de votre tableau de bord, selon le profil que vous avez défini pour eux.

> Utilisez la fonction **Copier le lien** pour partager l'URL du tableau de bord directement avec les utilisateurs qui ont accès à votre plateforme.
