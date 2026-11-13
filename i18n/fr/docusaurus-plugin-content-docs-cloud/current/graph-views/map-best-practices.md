---
id: map-best-practices
title: Bonnes pratiques pour utiliser les cartes
description: "Concevez des vues Centreon MAP claires et faciles à maintenir : adaptez chaque carte à son public, choisissez le bon type de carte et les bons widgets, gérez les accès et les mises à jour."
---

Suivez ces conseils pour créer des cartes claires, faciles à maintenir et utiles aux personnes qui les consultent.

## Concevoir selon le public

Selon le profil de l'utilisateur, une même infrastructure doit être présentée différemment. Avant de commencer à créer une carte, identifiez le type de profil :

- **Direction** : elle a besoin d'une vue d'ensemble de la santé de l'activité. Utilisez des KPI parlants pour le métier et n'affichez pas les alertes techniques.
- **Responsables d'applications et de processus métier** : ils ont besoin des informations techniques et métier côte à côte. Par exemple, une carte du parcours client peut afficher des contrôles techniques (connexion, base de données) à côté de données métier (commandes, paiements).
- **Équipes d'exploitation** : elles doivent repérer les problèmes rapidement. Faites ressortir immédiatement les ressources critiques et limitez les éléments décoratifs au strict nécessaire.

Pensez aussi à l'endroit où la carte sera affichée :

- **Sur un écran mural que personne ne manipule :** affichez uniquement l'essentiel, car personne ne peut cliquer pour en savoir plus.
- **Sur un écran que les utilisateurs manipulent :** rendez les ressources cliquables et permettez aux utilisateurs d'acquitter les alertes depuis la carte.

## Choisir le bon type de carte

- **Tableaux de bord spécialisés :** pour les spécialistes IT. Ils affichent des détails techniques, comme la charge des serveurs, la mémoire ou le réseau.
- **Vues métier :** pour un large public. Elles résument l'état de l'activité et sont construites avec [Centreon BAM](../service-mapping/introduction.md).
- **Vues géographiques :** elles affichent les [ressources selon leur emplacement](map-web-create-geoview.md). Vous ne pouvez y ajouter que des hôtes, des groupes d'hôtes et des activités métier. Définissez d'abord leurs coordonnées géographiques (`Latitude, Longitude`).

## Garder des cartes faciles à lire

Les utilisateurs doivent comprendre une carte en quelques secondes :

- N'ajoutez que ce dont la carte a besoin.
- Si une carte est trop chargée, utilisez des [conteneurs](map-web-create-standard-map.md#conteneur) pour la découper en niveaux (par exemple, site > bâtiment > salle serveur). Ne créez pas trop de niveaux.
- Regroupez les éléments liés. Utilisez les mêmes couleurs et les mêmes formes pour les ressources du même type.
- Utilisez des liens de statut et de métrique plutôt que du texte simple. Ainsi, la carte affiche toujours les dernières données.
- Choisissez le widget qui montre ce dont vous avez besoin, et utilisez les mêmes widgets sur toute la carte :
  - **Graphique à camembert :** les statuts d'un hôte ou d'un groupe d'hôtes.
  - **Graphique linéaire :** l'évolution des performances d'un service.
  - **Jauge :** une métrique sous forme de pourcentage. Vous devez définir une valeur maximale.
  - **Output :** la dernière sortie d'un service.
  - **Processus :** une correction rapide, comme le redémarrage d'un service. Utilisez-le uniquement pour des actions simples et sans risque.

## Réutiliser les éléments d'une carte à l'autre

Vous pouvez inclure une carte dans une autre, par exemple une carte applicative dans une vue métier destinée à la direction. Dans ce cas, réutilisez le même élément ou la même activité métier. Ne créez pas de copie. Si vous créez deux versions d'une même ressource, elles risquent d'afficher des statuts différents.

## Gérer les droits d'accès

Vous donnez accès aux cartes par des groupes d'accès. Les Administrateurs et les Éditeurs peuvent créer des cartes, et peuvent voir, modifier, supprimer et partager toutes les cartes. Les Utilisateurs (Opérateurs) ne voient que les cartes partagées avec eux. Voir [Gérer les droits d'accès dans MAP](map-web-access.md).

- Quand vous partagez une carte avec les Utilisateurs, accordez le privilège le plus faible dont ils ont besoin : **Accès en lecture** dans la plupart des cas, **Accès en écriture** uniquement s'ils doivent modifier la carte.
- Vérifiez le contenu d'une carte avant de la partager. Avec le privilège **Accès en lecture**, les utilisateurs voient toutes les ressources de la carte, même s'ils ne disposent pas de l'ACL correspondante.
- Pour donner à une équipe l'accès à une partie seulement d'une carte, [créez une carte à partir d'un conteneur](map-web-create-standard-map.md#créer-une-carte-à-partir-dun-conteneur-existant) et partagez-la. Ne copiez pas la carte et ne donnez pas accès à toute la carte.
- Ne retirez pas le privilège **Propriétaire** au rôle **Éditeur**. Sinon, tous les utilisateurs risquent de perdre l'accès aux cartes.

## Gagner du temps et tenir les cartes à jour

- Pour ajouter plusieurs ressources similaires à la fois, utilisez la barre **Rechercher une ressource**.
- Enregistrez la perspective (zoom et position). La carte s'ouvrira alors toujours de la même façon. C'est utile pour les écrans muraux.
- Vérifiez vos cartes quand votre infrastructure change. Supprimez les éléments qui ne sont plus liés à une ressource supervisée.
