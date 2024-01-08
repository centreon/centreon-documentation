---
id: hosts
title: Créer un hôte manuellement
---

Pour créer un hôte manuellement :

1. Allez à la page **Configuration > Hôtes > Hôtes**, puis cliquez sur **Ajouter**.
2. Remplissez les différents champs (voir ci-dessous), puis cliquez sur **Sauvegarder**.
3. [Déployez la configuration](../monitoring-servers/deploying-a-configuration.md).

## Informations générales

* Le champ **Nom** définit le nom d’hôte qui sera utilisé par le moteur de supervision.
* Le champ **Alias** indique l’alias de l’hôte.
* Le champ **Adresse** définit l'adresse IP ou le nom DNS de l’hôte. Le bouton **Résoudre** permet de résoudre le nom de
  domaine en interrogeant le serveur DNS configuré sur le serveur central.
* Le champ **Modèles** permet d’associer un ou plusieurs modèles d’hôtes à cet objet.

   En cas de conflits de paramètres présents sur plusieurs modèles, le modèle d’hôte au-dessus écrase les propriétés
identiques définies dans modèles d’hôtes en dessous.

   Ce bouton nous permet de changer l'ordre des modèles hôtes ![image](../../assets/configuration/common/move.png#thumbnail2)
   Ce bouton sert à supprimer le modèle hôte ![image](../../assets/configuration/common/delete.png#thumbnail2)

* Le champ **Activer/désactiver la ressource** permet d’activer ou de désactiver l’hôte.

## Paramètres de supervision

* Le champ **Serveur de supervision** indique quel est le serveur de supervision chargé de superviser cet hôte.
* Les champs **Communauté SNMP & Version** contiennent respectivement le nom de la communauté ainsi que la version SNMP.
* Section **Macros personnalisées** :

   * Les champs **Nom** et **Valeur** permettent respectivement de définir le nom et la valeur de la macro.
   * La case **Mot de passe** permet de cacher la valeur de la macro.

   Pour réinitialiser la macro avec sa valeur par défaut (définie dans le template) cliquez sur ![image](../../assets/configuration/common/undo.png#thumbnail2)

   Pour afficher la description de la macro, cliquez sur ![image](../../assets/configuration/common/description.png#thumbnail2)

   Pour supprimer la macro, cliquez sur ![image](../../assets/configuration/common/delete.png#thumbnail2)

   Pour changer l’ordre des macros, cliquez sur ![image](../../assets/configuration/common/move.png#thumbnail2)

* Le champ **Période de contrôle** définit la période temporelle durant laquelle l’ordonnanceur vérifie le statut de l’objet.
* Le champ **Fuseau horaire** indique l'emplacement du fuseau horaire des hôtes surveillés.

## Options d'ordonnancement

* Le champ **Nombre de contrôles avant validation de l'état** définit le nombre de contrôles à effectuer avant de valider le statut de l’hôte :
  lorsque le statut est validé, le processus de notification est enclenché.
* Le champ **Intervalle normal de contrôle** est exprimé en minutes. Il définit l’intervalle entre chaque vérification lorsque
  le statut de l’hôte est OK.
* Le champ **Intervalle non-régulier de contrôle** est exprimé en minutes. Il définit l’intervalle de validation du statut non-OK de l’hôte.

## Classification

* Le champ **Groupes d'hôtes** définit les groupes d’hôtes auxquels l’hôte appartient.
* Le champ **Catégories d'hôte** définit les catégories auxquelles l’hôte appartient.
* Le champ **Criticité d'hôte** indique le niveau de criticité de l’hôte.

## Informations supplémentaires

* Le champ **Icône** indique l’icône à utiliser pour l’hôte.
* Le champ **Note** permet d’ajouter des notes optionnelles concernant l’hôte.
* Le champ **URL de la note** définit une URL qui peut être utilisée pour donner davantage d’informations sur l’hôte.
* Le champ **URL d'action** définit une URL habituellement utilisée pour donner des informations d’actions sur l’hôte
  (maintenance...).
* Le champ **Coordonnées géographiques** définit les coordonnées géographiques utilisées par le module Centreon Map pour positionner
  l'élément sur la carte. Définissez "Latitude, Longitude", par exemple pour le jeu de coordonnées de Paris "48.51,2.20"
