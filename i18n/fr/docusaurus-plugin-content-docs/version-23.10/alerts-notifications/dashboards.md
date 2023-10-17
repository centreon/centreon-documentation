---
id: dashboards
title: Dashboards Beta
---

> Centreon Dashboards est disponible en version beta à partir de **Centreon version 23.10**.

Commencez par créer des tableaux de bord et ajoutez des widgets spécialement conçus pour optimiser votre expérience utilisateur. Bénéficiez ensuite d'options de visualisation de données pour afficher et suivre vos ressources en temps réel.

![image](../assets/alerts/dashboard-view.png)

## Activation de la fonctionnalité Dashboards Beta

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

### Ajouter un widget

![image](../assets/alerts/widget-view.png)

### Mettre à jour un widget

### Supprimer un widget

## Gérer les tableaux de bord

### Partager un tableau de bord

### Mettre à jour/supprimer un tableau de bord

## Liste des widgets
