---
id: known-issues
title: Problèmes connus sur Centreon Cloud
---

Les paragraphes ci-après détaillent les problèmes connus de Centreon. Ceux-ci seront corrigés dans une prochaine release.

## Groupes d'utilisateurs

* Il n'est pas possible de rechercher un utilisateur spécifique dans le formulaire de création/édition de groupes d'utilisateurs.

   **Contournement**: Scrollez dans la liste jusqu'à trouver l'utilisateur désiré.

## Gestion de l'accès aux ressources

* Il n'est pas possible de scroller dans les listes déroulantes dans le formulaire de création/édition de règles d'accès aux ressources.

   **Contournement**: Définissez une recherche plus précise, jusqu'à avoir moins de 10 résultats dans la liste déroulante.

* La zone de clic pour les cases "Tous" (**Tous les contacts**, **Tous les groupes de contacts**, **Tous les hôtes**...) est trop large : il est facile de sélectionner "Tous" par erreur.

* Il n'est pas possible de sélectionner une règle d'accès aux ressources dans le formulaire de configuration des Vues Métier.

   **Workaround**: Lorsque vous créez une nouvelle Vue Métier, allez dans le menu **Gestion de l'accès aux ressources** et ajoutez la Vue Métier à une règle.

* Pour donner accès à un service indépendemment de son hôte, vous pouvez définir des règles uniquement au niveau des groupes de services ou des catégories de services.

## Notifications

* Les changements ne sont pas affichés immédiatement lorsque vous éditez une règle de notification.

   **Contournement**:  Rafraîchissez la page afin d'afficher les paramètres corrects.

* Dans la liste des règles de notification, il n'est pas possible de trier les règles par leur nom.

* Lorsque vous éditez une règle de notification, il n'est pas possible de supprimer des ressources ou des contacts individuellement.

   **Contournement**: Supprimez la règle et recréez-la.

## Configuration

* Les changements massifs incrémentaux ne sont pas possibles pour les hôtes et les services. 

* Après édition, une commande personnalisée disparaît de la liste. Notez que la commande existe et qu'elle sera toujours utilisée.

* Les utilisateurs ne peuvent pas encore configurer des Stream Connectors eux-mêmes.

   **Contournement**: Centreon peut configurer des Stream Connectors pour vous. Contactez votre CSM.

* Il est possible de créer deux services portant le même nom rattachés à un même hôte.

* Déployer un service ne fonctionne pas si le modèle appliqué à un hôte existant a été changé. (Commande **Plus d'actions > Déployer les services**.)

* Il n'est pas encore possible de définir un collecteur par défaut. Lorsque vous créez un hôte, assurez-vous de définir le bon collecteur pour le superviser au lieu du serveur central.

* Les comptes de service (par exemple, **broker service user**) apparaissent dans les listes de sélection des contacts. Ne les utilisez pas.

* Dans le formulaire de configuration des Activités Métier, la section **Notification**  n'a aucun effet.

   **Contournement**: Il est possible de configurer des notifications liées aux Activités Métier en utilisant le mécanisme de notification standard.

## Connexion

* Un bouton **Connect with OpenID** peut apparaître brièvement sur l'écran de connexion. Attendez quelques secondes pour vous connecter.

## MAP

* Le facteur de zoom et la position par défaut ne sont pas sauvegardés.
