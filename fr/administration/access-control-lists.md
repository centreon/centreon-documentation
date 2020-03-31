---
id: access-control-lists
title: Listes de Contrôles d'Accès (ACL)
---

Les listes de contrôles d'accès (LCA ou Access Control List en Anglais)
permettent de limiter l'accès à l'interface web aux utilisateurs de Centreon à
travers diverses règles. Les ACL permettent également de créer plusieurs profils
utilisateur permettant de focaliser sur un ensemble précis de ressources.

> La gestion des contrôles d'accès est une fonction propre à Centreon,
> l'exportation de la configuration vers les moteurs de supervision n'est pas
> nécessaire pour les activer.

Les groupes d'accès sont des groupes contenant les utilisateurs de Centreon.
Pour chaque groupe d'accès, il est possible de définir trois types de contrôles
d'accès :

- Les filtres d'accès aux ressources permettent de limiter l'accès aux objets
de Centreon (hôtes, services...),
- Les filtres d'accès aux menus permettent de limiter l'accès aux menus de
Centreon,
- Les filtres d'accès sur les actions permettent de limiter l'accès aux
actions que l'utilisateur peut entreprendre sur un moteur de supervision ou
sur les ressources elles-mêmes (planifier temps d'arrêt, arrêter moteur de
supervision...).

> Un utilisateur peut appartenir à plusieurs groupes d'accès permettant ainsi
> d'additionner l'ensemble des autorisations d'accès.

Les ACLs respectent des règles très strictes :

- Les administrateurs de Centreon ne sont pas soumis aux ACLs (propriété du
contact),
- Un utilisateur (non administrateur) n'appartenant à aucun groupe d'accès n'a
aucun droit sur la plateforme de supervision (écran vide après connexion),
- Les ACLs sont recalculées toutes les minutes, c'est pourquoi il est parfois
nécessaire de patienter quelques instants avant de voir appliquer la
modification sur le profil.

> L'ajout de modules complémentaires à Centreon permet parfois d'ajouter des
> filtres supplémentaires pour les groupes d'accès. Exemple : les modules Centreon
> BI, BAM et MAP peuvent être soumis à des filtres

## Groupes d'accès

Pour ajouter un groupe d'accès :

1. Rendez-vous dans le menu **Administration \> ACL**
2. Cliquez sur **Ajouter**

### Informations générales

- Les champs **Nom du groupe** et **Alias** définissent le nom et l'alias du
groupe
- La liste **Contacts liés** permet de lier des contacts au groupe d'accès
- La liste **Groupes de contacts liés** permet de lier des groupes de contacts
au groupe d'accès
- Le champ **Statut** permet d'activer ou de désactiver le groupe d'accès

> Les groupes de contacts peuvent être des groupes provenant de l'annuaire LDAP
> connecté à l'interface Centreon.
>
> Les groupes créés sur Centreon ne doivent pas avoir le même nom que les groupes
> LDAP. Si c'est le cas, les groupes dans Centreon devront être renommés.

### Autorisations

Les listes présentes au sein de cet onglet permettent de lier les différents
types de contrôles d'accès déjà créés au groupe d'accès.

## Filtre d'accès aux ressources

Les filtres d'accès aux ressources permettent de limiter la visualisation des
objets (hôtes, groupes d'hôtes, services, groupes de services) à un profil
utilisateur.

Pour ajouter un filtre d'accès aux ressources :

1. Rendez-vous dans le menu **Administration \> ACL**
2. Dans le menu de gauche, cliquez sur **Gestion des accès aux ressources**
3. Cliquez sur **Ajouter**

> Une fois les filtres sur les ressources paramétrez, vous pouvez visualiser le
> résultat via le menu **Vérifier la vue de l'utilisateur** à côté de l'option
> pour ajouter un nouveau filtre.

### Informations générales

- Les champs **Nom du groupe** et **Description** définissent le nom et la
description du filtre
- La liste **Groupes liés** permet de lier des groupes d'accès à ce filtre de
ressources
- Le champ **Statut** et **Commentaires** permet d'activer/désactiver le
filtre ainsi que de le commenter

### Gestion des hôtes

L'onglet **Gestion des hôtes** permet d'ajouter :

- Des hôtes
- Des groupes d'hôtes

Si la case **Inclure tous les hôtes** ou **Inclure tous les groupes d'hôtes**
est cochée, alors tout objet nouvellement créé sera automatiquement ajouté au
filtre.

> Il est possible d'exclure explicitement des hôtes du filtre (pratique dans le
> cas où 1 ou 2 hôtes uniquement ne doivent pas faire partie du filtre) dans le
> cas où les options **Inclure tous les hôtes** ou **Inclure tous les groupes
> d'hôtes** sont cochées.

### Gestion des services

L'onglet **Gestion des services** permet d'ajouter des groupes de services au
filtre.

### Méta-Services

L'onglet **Méta-Services** permet d'ajouter des méta-services au filtre.

### Filtres

- La liste **Filtrer par collecteur** permet de sélectionner les hôtes en
fonction des collecteurs de supervision (si aucun n'est sélectionné alors
tous les collecteurs sont pris en compte)
- La liste **Filtrer par catégorie d'hôte** permet de filtrer les hôtes par
catégorie
- La liste **Filtrer par catégorie de service** permet de filtrer les services
par catégorie

> Les filtres par collecteur ou par catégorie d'objet sont des filtres d'inclusion
> (UNION). Seuls les objets appartenant à ces filtres en plus des groupes d'objets
> (hôtes et services) seront visibles.

## Filtre d'accès aux menus

Les filtres d'accès au menu permettent de limiter l'accès aux différents menus
de l'interface Centreon. Les menus sont hiérarchisés de la manière suivante :

- Les menus de niveau 1 (Accueil, Supervision, Vues, ...)
- Les menus de niveau 2 (Supervision \> Hôtes, Supervision \> Services, ...)
- Les menus contextuels de niveau 3 (Supervision \> Services \> Par hôtes /
détails)
- Les menus contextuels de niveau 4 (Supervision \> Services \> Par hôtes /
détails \> Problems)

> Par défaut, l’accès est donné en lecture seule (**Read Only**). Si vous
> souhaitez autoriser vos utilisateurs à modifier la configuration, il faudra
> sélectionner l’option **Read/Write** pour chaque sous menu.

> Pour accéder à un niveau de menu 'n-1', l'utilisateur doit avoir accès au menu
> de niveau 'n' sinon ce dernier ne pourra pas visualiser le menu au travers de
> l'interface. Dans le cas contraire, l'utilisateur devra accéder directement à la
> page concernée via un lien direct (autologin, ...).

> L’accès au menu d’édition des commandes, ainsi que l’accès au menu d’édition des
> traps SNMP peut être très dangereux. En effet, un utilisateur privilégié peut
> créer des commandes pouvant permettre la création de failles de sécurité (RCE).
> Ne donnez cet accès qu’à des personnes dignes de confiance.

Pour ajouter un filtre d'accès aux menus :

1. Rendez-vous dans le menu **Administration \> ACL**
2. Dans le menu de gauche, cliquez sur **Gestion des accès aux menus**
3. Cliquez sur **Ajouter**

- Les champs **Nom du groupe** et **Alias** définissent le nom et l'alias du
filtre d'accès
- Le champ **Statut** permet d'activer ou de désactiver le filtre
- La liste **Groupes liés** permet d'associer un groupe d'accès au filtre
- La catégorie **Pages disponibles** permet d'associer des menus au filtre (Le
menu parent doit être coché pour pouvoir accéder au menu enfant)
- Le champ **Commentaires** donne des indications sur le filtre

> Lors de la définition de l'accès aux menus **Configuration \> Hôtes** et
> **Configuration \> Service**, il est possible de donner accès en lecture seule
> aux différents objets ou en lecture/écriture.

> A chaque ajout de nouveau module Centreon possédant une interface web accessible
> au travers d'un nouveau menu, ce dernier devra être ajouté dans les groupes
> d'accès au menu afin que les utilisateurs puissent y accéder le cas échéant.

## Filtre d'accès sur les actions

Les filtres sur les actions permettent de limiter l'accès aux actions
réalisables sur les ressources (hôtes et services) ainsi que sur les
ordonnanceurs de supervision (arrêt des notifications, redémarrage d
l'ordonnanceur, ...).

Pour ajouter un filtre d'accès aux actions :

1. Rendez-vous dans le menu **Administration \> ACL**
2. Dans le menu de gauche, cliquez sur **Gestion des accès sur les actions**
3. Cliquez sur **Ajouter**

- Les champs **Nom de l'action** et **Description** contiennent le nom du
filtre ainsi que sa description
- La liste **Groupes liés** permet d'associer un groupe d'accès au filtre

Le tableau ci-dessous décrit les fonctionnalités générales d'accès :

| Champ                                                           | Actions associées                                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Afficher les statistiques des hôtes et services dans le bandeau | Affiche les statistiques de supervision sous forme de tableau présent dans le bandeau de Centreon |
| Afficher les statistiques des collecteurs dans le bandeau       | Affiche les statistiques des collecteurs en haut à droite (voir la case **Etat des collecteurs**) |
| Afficher la liste des collecteurs                               | Affiche la liste des collecteurs dans **Supervision \> Hôtes** ou **Supervision \> Services**     |

Le tableau ci-dessous décrit les fonctionnalités de génération de la
configuration :

| Champ                                   | Actions associées                                                                                                                             |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Générer les fichiers de configuration   | Permet de générer, tester et exporter la configuration des collecteurs et de redémarrer les moteurs de supervision                            |
| Générer la configuration des traps SNMP | Permet de générer et exporter la configuration des traps SNMP pour le processus Centreontrapd sur les collecteurs et de redémarrer ce dernier |

Le tableau ci-dessous décrit l'ensemble des actions qui peuvent être autorisées
sur l'ordonnanceur :

| Champ                                                           | Actions associées                                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Afficher les statistiques des hôtes et services dans le bandeau | Affiche les statistiques de supervision sous forme de tableau présent dans le bandeau de Centreon |
| Afficher les statistiques des collecteurs dans le bandeau       | Affiche les statistiques des collecteurs en haut à droite (voir la case **Etat des collecteurs**) |
| Afficher la liste des collecteurs                               | Affiche la liste des collecteurs dans **Supervision \> Hôtes** ou **Supervision \> Services**     |
| Arrêter l'ordonnanceur                                          | Autoriser l'arrêt de l'ordonnanceur                                                               |
| Redémarrer l'ordonnanceur                                       | Autoriser le redémarrage de l'ordonnanceur                                                        |
| Activer/Désactiver les notifications                            | Activer/Désactiver l'envoi de notifications                                                       |
| Activer/Désactiver les contrôles des services                   | Activer/Désactiver les contrôles des services                                                     |
| Activer/Désactiver les contrôles passifs des services           | Activer/Désactiver les contrôles passifs pour les services                                        |
| Activer/Désactiver les contrôles des hôtes                      | Activer/Désactiver les contrôles sur les hôtes                                                    |
| Activer/Désactiver les contrôles des passifs d'hôtes            | Activer/Désactiver les contrôles passifs pour les hôtes                                           |
| Activer/Désactiver le gestionnaire d'évènements                 | Activer/Désactiver le gestionnaire d'évènement                                                    |
| Activer/Désactiver la détection de bagotage                     | Activer/Désactiver la détection du statut FLAPPING (ou bagotage)                                  |
| Activer/Désactiver la commande post contrôle des services       | Activer/Désactiver la commande post-contrôle des services                                         |
| Activer/Désactiver la commande post contrôle des hôtes          | Activer/Désactiver la commande post-contrôle des hôtes                                            |
| Activer/Désactiver les données de performance                   | Activer/Désactiver les données de performances                                                    |

Le tableau ci-dessous décrit l'ensemble des actions qui peuvent être autorisées
sur les services :

| Champ                                                          | Actions associées                                                                |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Activer/Désactiver les vérifications pour un service           | Activer/Désactiver les vérifications pour un service                             |
| Activer/Désactiver les notifications pour un service           | Activer/Désactiver les notifications pour un service                             |
| Prendre en compte un incident d'un service                     | Permettre aux utilisateurs d'acquitter un service                                |
| Supprimer la prise en compte d'un service                      | Permettre aux utilisateurs de supprimer un acquittement de service               |
| Re-planifier la prochaine vérification d'un service            | Re-planifier la prochaine vérification d'un service                              |
| Re-planifier la prochaine vérification d'un service (Forcé)    | Re-planifier la prochaine vérification d'un service (Forcé)                      |
| Planifier un temps d'arrêt pour un service                     | Planifier un temps d'arrêt pour un service                                       |
| Ajouter/Supprimer un commentaire pour un service               | Autoriser l'ajout de commentaires pour un service                                |
| Activer/Désactiver le gestionnaire d'évènement pour un service | Activer/Désactiver le gestionnaire d'évènement pour un service                   |
| Activer/Désactiver la détection de bagotage d'un service       | Activer/Désactiver la détection du statut FLAPPING (ou bagotage) pour un service |
| Activer/Désactiver le contrôle passif d'un service             | Activer/Désactiver le contrôle passif pour les services                          |
| Soumettre un résultat pour un service                          | Autoriser la soumission d'un résultat pour un service                            |
| Afficher la commande exécutée par le moteur de collecte        | Autoriser l'affichage de la commande exécutée pour un service                    |

Le tableau ci-dessous décrit l'ensemble des actions qui peuvent être autorisées
sur les hôtes :

| Champ                                                       | Actions associées                                                             |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Activer/Désactiver les vérifications pour un hôte           | Activer/Désactiver les vérifications pour un hôte                             |
| Activer/Désactiver les notifications pour un hôte           | Activer/Désactiver les notifications pour un hôte                             |
| Prendre en compte un incident d'un hôte                     | Permettre aux utilisateurs d'acquitter un hôte                                |
| Supprimer la prise en compte d'un hôte                      | Permettre aux utilisateurs de supprimer un acquittement d'un hôte             |
| Re-planifier la prochaine vérification d'un hôte            | Re-planifier la prochaine vérification d'un hôte                              |
| Re-planifier la prochaine vérification d'un hôte (Forcé)    | Re-planifier la prochaine vérification d'un hôte (Forcé)                      |
| Planifier un temps d'arrêt pour un hôte                     | Planifier un temps d'arrêt pour un hôte                                       |
| Ajouter/Supprimer un commentaire pour un hôte               | Autoriser l'ajout de commentaires pour un hôte                                |
| Activer/Désactiver le gestionnaire d'évènement pour un hôte | Activer/Désactiver le gestionnaire d'évènement pour un hôte                   |
| Activer/Désactiver la détection de bagotage d'un hôte       | Activer/Désactiver la détection du statut FLAPPING (ou bagotage) pour un hôte |
| Activer/Désactiver les contrôles des services de l'hôte     | Activer/Désactiver les contrôles des services d'un hôte                       |
| Soumettre un résultat pour un hôte                          | Autoriser la soumission d'un résultat pour un hôte                            |

- Le champ **Statut** permet d'activer ou de désactiver le filtre

## Recalculer les ACLs

Il est possible de recalculer manuellement les ACLs :

1. Rendez-vous dans le menu **Administration \> ACL**
2. Dans le menu de gauche, cliquez sur **Recharger les ACL**
3. Sélectionnez le ou les utilisateurs pour lesquels vous souhaitez recharger
les ACL
4. Dans le menu **Plus d'actions**, cliquez sur **Recharger les ACL**
