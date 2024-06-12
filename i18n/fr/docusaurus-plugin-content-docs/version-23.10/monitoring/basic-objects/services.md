---
id: services
title: Créer un service manuellement
---

Pour créer un service, allez à la page **Configuration > Services > Services par hôtes**, puis cliquez sur **Ajouter**.

## Configuration du service

### Onglet Informations générales

#### Informations sur le service

* Le champ **Nom** définit le nom du service. Les seuls caractères spéciaux autorisés sont : slash, tiret et underscore.
* La liste **Hôtes** permet de définir le ou les hôtes auxquels lier ce service. Il est recommandé de ne lier un service qu'à un seul hôte.
* Le champ **Modèle** indique le modèle de service auquel le service est lié.

#### Options de contrôle des services

* Le champ **Commande de vérification** indique la commande utilisée pour vérifier la disponibilité du service.
* **Macros personnalisées** :
   * Les champs **Nom** et **Valeur** permettent respectivement de définir le nom et la valeur de la macro.
   * La case **Mot de passe** permet de cacher la valeur de la macro.

   Pour réinitialiser la macro avec sa valeur par défaut (définie dans le template) cliquez sur ![image](../../assets/configuration/common/undo.png#thumbnail1)

   Pour afficher la description de la macro, cliquez sur ![image](../../assets/configuration/common/description.png#thumbnail1)

   Pour supprimer la macro, cliquez sur ![image](../../assets/configuration/common/delete.png#thumbnail1)

   Pour déplacer l’ordre des macros, cliquez sur ![image](../../assets/configuration/common/move.png#thumbnail1)
* Le tableau **Arguments** définit les arguments donnés à la commande de vérification (le nombre d’arguments varie en
  fonction de la commande de vérification choisie).

#### Options d'ordonnancement des services

* Le champ **Période de contrôle** définit la période temporelle durant laquelle l’ordonnanceur vérifie le statut du service.
* Le champ **Nombre de contrôles avant validation de l'état** définit le nombre de contrôles à effectuer avant de valider le statut du service.
  Lorsque le statut est validé, le processus de notification est enclenché.
* Le champ **Intervalle normal de contrôle** est exprimé en minutes. Il définit l’intervalle entre chaque vérification lorsque
  le statut du service est OK.
* Le champ **Intervalle non-régulier de contrôle** est exprimé en minutes. Il définit l’intervalle de validation du statut non-OK du service.
* Les champs **Contrôle actif activé** et **Contrôle passif activé** activent / désactivent le type de contrôle du service.
* Le champ **Est Volatile**  indique si le service est volatile ou non (d’une manière générale uniquement les services
  passifs sont volatiles).

### Onglet Notifications

* Le champ **Notification activée** permet d’activer ou de désactiver les notifications pour l’objet.
* Si la case **Hériter seulement les contacts/groupes de contacts depuis la définition de l'hôte** est cochée, alors lors de la génération de la
  configuration, les contacts et/ou groupes de contacts de l’hôte (ou de ses templates suivant l’héritage) viendront
  écraser ceux du service ou de ses modèles de service. Cette fonction désactive la saisie de contacts et groupes de
  contacts pour ce service.

* La liste **Contacts liés** indique les contacts qui recevront les notifications.
* Au sein de la liste **Groupes de contacts liés** tous les contacts appartenant aux groupes de contacts définis recevront
  les notifications.

  Si à la page **Administration > Paramètres > Centreon web**, l'option **Vertical inheritance only** est activée, deux cases supplémentaires apparaissent :

    * Si la case **Contacts hérités additionnels** est cochée, Centreon n'écrase pas la configuration du parent modèle d'hôte
  mais ajoute les contacts en plus des contacts définis dans le modèle parent.
    * Si la case **Groupes de contacts hérités additionnels** est cochée, Centreon n'écrase pas la configuration du parent modèle d'hôte
  mais ajoute les contacts en plus des groupes de contacts définis dans le modèle parent.

* Le champ **Intervalle de notification** est exprimé en minutes. Il indique la durée entre chaque envoi de notification
  lorsque le statut est non-OK. Si la valeur est définie à 0 alors l’ordonnanceur envoie une seule notification par
  changement de statut.
* Le champ **Période de notification**  indique la période temporelle durant laquelle les notifications seront activées.
* Le champ **Type de notification** définissent les statuts pour lesquels une notification sera envoyée.
* Le champ **Délai de première notification** est exprimé en minutes. Il fait référence au délai à respecter avant l’envoi
  d’une première notification lorsqu’un statut non-OK est validé.
* Le champ **Délai de première notification de recouvrement** est le temps qui doit s'écouler avant qu'une notification de type **Récupération** soit envoyée (lorsque le service revient à un état OK).

## Onglet Relations

### Relations

* La liste **Groupes de services** permet de lier le service à un ou plusieurs groupes de services.

### Traps SNMP

Le champ **Traps SNMP reliés au service** permet de définir les traps SNMP qui pourront modifier le comportement du service.

## Onglet Traitement des données

* Si le champ **Obsess over service** est activé, alors la commande de remontée des contrôles de l’hôte sera activée.
* Le champ **Check freshness** permet d’activer ou de désactiver le contrôle de fraîcheur du résultat.
* Le champ **Freshness threshold** est exprimé en secondes. Si durant cette période aucune demande de changement de
  statut du service (commande passive) n’a été reçue alors la commande de vérification est exécutée.
* Le champ **Flap Detection Enabled** permet d’activer ou de désactiver la détection du bagotage des statuts (statut
  changeant trop fréquemment de valeur sur une période donnée).
* Les champs **Low flap threshold** et **High flap threshold** définissent les seuils hauts et bas pour la détection du
  bagotage en pourcentage de changement.
* Le champ **Performance data processing** permet d’activer ou de désactiver le traitement des données de performances
  (et donc la génération des graphiques de performances).
* Les champs **Retain status information** et **Retain non status information** indiquent si les informations
  concernant ou ne concernant pas le statut sont sauvegardées après chaque relance de la commande de vérification.
* Le champ **Stalking Options** définit les options à enregistrer si la rétention est activée.
* Le champ **Event handler enabled** permet d’activer ou de désactiver le gestionnaire d’évènements.
* Le champ **Event handler** définit la commande à exécuter si le gestionnaire d’évènements est activé.
* Le champ **Args** définit les arguments de la commande du gestionnaire d’évènements.

## Onglet Informations complémentaires

### Centreon

* La liste **Modèle de graphique** définit le modèle de graphique à utiliser pour présenter les données de performances
  liées au service.
* La liste **Catégories de service** définit la(les) catégorie(s) à laquelle (auxquelles) le service appartient.

### Moteur de supervision

* Le champ **URL de la note** définit une URL qui peut être utilisée pour donner davantage d’informations sur le service.
* Le champ **Note** permet d’ajouter des notes optionnelles concernant le service.
* Le champ **URL d'action** définit une URL habituellement utilisée pour donner des informations d’actions sur le service
  (maintenance...).
* Le champ **Icône** indique l’icône à utiliser pour le service.
* Le champ **Icône alternative** est le texte utilisé si l’icône ne peut être affichée.
* Le champ **Criticité du service** indique le niveau de criticité du service.
* Le champ **Coordonnées géographiques** définit les coordonnées géographiques utilisées par le module Centreon Map pour positionner
  l'élément sur la carte. Définissez "Latitude, Longitude", par exemple pour le jeu de coordonnées de Paris "48.51,2.20"

### Informations supplémentaires

* Le champ **Activer/désactiver la ressource** permet d’activer ou de désactiver le service.
* Le champ **Commentaires** permet d’ajouter un commentaire concernant le service.

## Détachement d’un service

Si un service est lié à plusieurs hôtes, alors il sera identique pour chacun d’eux. Il ne sera donc pas possible de
modifier unitairement le service d’un hôte pour modifier une propriété. C’est pourquoi il est possible de transformer
ce service lié à plusieurs hôtes en un service unique pour chaque hôte:

1. Dans la liste des services, sélectionnez le service lié à plusieurs hôtes (habituellement ce service est surligné en
  orange)
2. Dans le menu **More actions...** cliquez sur le bouton **Detach** et validez

Il existe maintenant un service unique par hôte.
