---
id: services
title: Créer un service manuellement
---

Pour créer un service, allez à la page **Configuration > Services > Services par hôte**, puis cliquez sur **Ajouter**.

## Configuration du service

### Informations générales

* La liste **Hôte** permet de définir l'hôtes auxquels lier ce service.
* Le champ **Nom** définit le nom du service. Les seuls caractères spéciaux autorisés sont : slash, tiret et underscore.
* Le champ **Modèle** indique le modèle de service auquel le service est lié.
* Le champ **Activer/désactiver la ressource** permet d’activer ou de désactiver le service.

### Paramètres de supervision

* **Macros personnalisées** :
   * Les champs **Nom** et **Valeur** permettent respectivement de définir le nom et la valeur de la macro.
   * La case **Mot de passe** permet de cacher la valeur de la macro.

   Pour réinitialiser la macro avec sa valeur par défaut (définie dans le template) cliquez sur ![image](../../assets/configuration/common/undo.png#thumbnail1)

   Pour afficher la description de la macro, cliquez sur ![image](../../assets/configuration/common/description.png#thumbnail1)

   Pour supprimer la macro, cliquez sur ![image](../../assets/configuration/common/delete.png#thumbnail1)

   Pour déplacer l’ordre des macros, cliquez sur ![image](../../assets/configuration/common/move.png#thumbnail1)
* Le champ **Période de contrôle** définit la période temporelle durant laquelle l’ordonnanceur vérifie le statut du service.

### Options d'ordonnancement des services

* Le champ **Nombre de contrôles avant validation de l'état** définit le nombre de contrôles à effectuer avant de valider le statut du service :
  lorsque le statut est validé, le processus de notification est enclenché.
* Le champ **Intervalle normal de contrôle** est exprimé en minutes. Il définit l’intervalle entre chaque vérification lorsque
  le statut du service est OK.
* Le champ **Intervalle non-régulier de contrôle** est exprimé en minutes. Il définit l’intervalle de validation du statut non-OK du service.

### Classification

* La liste **Groupes de services** permet de lier le service à un ou plusieurs groupes de services.
* La liste **Catégories de service** définit la(les) catégorie(s) à laquelle (auxquelles) le service appartient.
* Le champ **Criticité du service** indique le niveau de criticité du service.

### Informations supplémentaires

* Le champ **Icône** indique l’icône à utiliser pour le service.
* Le champ **Note** permet d’ajouter des notes optionnelles concernant le service.
* Le champ **URL de la note** définit une URL qui peut être utilisée pour donner davantage d’informations sur le service.
* Le champ **URL d'action** définit une URL habituellement utilisée pour donner des informations d’actions sur le service
  (maintenance...).
* Le champ **Coordonnées géographiques** définit les coordonnées géographiques utilisées par le module Centreon Map pour positionner
  l'élément sur la carte. Définissez "Latitude, Longitude", par exemple pour le jeu de coordonnées de Paris "48.51,2.20"
