---
id: hosts
title: Créer un hôte manuellement
---

Pour créer un hôte manuellement :

1. Allez à la page **Configuration > Hôtes > Hôtes**, puis cliquez sur **Ajouter**.
2. Remplissez les différents champs (voir [ci-dessous](#onglet-configuration-de-lhôte)), puis cliquez sur **Sauvegarder**.
3. [Déployez la configuration](../monitoring-servers/deploying-a-configuration.md).

## Onglet Configuration de l’hôte

### Information de base sur l'hôte

* Le champ **Nom** définit le nom d’hôte qui sera utilisé par le moteur de supervision. Les caractères suivants ne sont pas autorisés : `~!$%^&|'"<>?,()=*{}` et les espaces.
* Le champ **Alias** indique l’alias de l’hôte.
* Le champ **Adresse** définit l'adresse IP ou le nom DNS de l’hôte. Le bouton **Résoudre** permet de résoudre le nom de
  domaine en interrogeant le serveur DNS configuré sur le serveur central.
* Les champs **Communauté SNMP & Version** contiennent respectivement le nom de la communauté ainsi que la version SNMP.
* Le champ **Serveur de supervision** indique quel est le serveur de supervision chargé de superviser cet hôte.
* Le champ **Fuseau horaire** indique l'emplacement du fuseau horaire des hôtes surveillés.
* Le champ **Modèles** permet d’associer un ou plusieurs modèles d’hôtes à cet objet.

   En cas de conflits de paramètres présents sur plusieurs modèles, le modèle d’hôte au-dessus écrase les propriétés
identiques définies dans modèles d’hôtes en dessous.

   Ce bouton nous permet de changer l'ordre des modèles hôtes ![image](../../assets/configuration/common/move.png#thumbnail2)
   Ce bouton sert à supprimer le modèle hôte ![image](../../assets/configuration/common/delete.png#thumbnail2)

* Si la case **Créer aussi les services liés aux modèles** est définit à **Oui**, Centreon génère automatiquement les
  services en se basant sur les modèles de services liés aux modèles d’hôtes définis au-dessus
  (voir chapitre Les *[modèles](../templates.md)*).

### Options de contrôle de l'hôte

* Le champ **Commande de vérification** indique la commande utilisée pour vérifier la disponibilité de l’hôte.
* Le champ **Arguments** définit les arguments donnés à la commande de vérification (chaque argument commence avec un ”!”).

* Section **Macros personnalisées** :

   * Les champs **Nom** et **Valeur** permettent respectivement de définir le nom et la valeur de la macro.
   * La case **Mot de passe** permet de cacher la valeur de la macro.

   Pour réinitialiser la macro avec sa valeur par défaut (définie dans le template) cliquez sur ![image](../../assets/configuration/common/undo.png#thumbnail2)

   Pour afficher la description de la macro, cliquez sur ![image](../../assets/configuration/common/description.png#thumbnail2)

   Pour supprimer la macro, cliquez sur ![image](../../assets/configuration/common/delete.png#thumbnail2)

   Pour changer l’ordre des macros, cliquez sur ![image](../../assets/configuration/common/move.png#thumbnail2)

### Options d’ordonnancement

* Le champ **Période de contrôle** définit la période temporelle durant laquelle l’ordonnanceur vérifie le statut de l’objet.
* Le champ **Nombre de contrôles avant validation de l'état** définit le nombre de contrôles à effectuer avant de valider le statut de l’hôte :
  lorsque le statut est validé, le processus de notification est enclenché.
* Le champ **Intervalle normal de contrôle** est exprimé en minutes. Il définit l’intervalle entre chaque vérification lorsque
  le statut de l’hôte est OK.
* Le champ **Intervalle non-régulier de contrôle** est exprimé en minutes. Il définit l’intervalle de validation du statut non-OK de l’hôte.
* Les champs **Contrôle actif activé** et **Contrôle passif activé** activent / désactivent les contrôles actifs et passifs.

## Onglet Notification

* Le champ **Notification activée** permet d’activer ou de désactiver les notifications concernant l’objet.
* La liste **Contacts liés** indique les contacts qui recevront les notifications.
* La liste **Groupes de contacts liés** tous les contacts appartenant aux groupes de contacts définis recevront les
  notifications.
  
  Si à la page **Administration > Paramètres > Centreon web**, l'option **Vertical inheritance only** est activée, deux cases supplémentaires apparaissent :

    * Si la case **Contacts hérités additionnels** est cochée, Centreon n'écrase pas la configuration du parent modèle d'hôte
  mais ajoute les contacts en plus des contacts définis dans le modèle parent.
    * Si la case **Groupes de contacts hérités additionnels** est cochée, Centreon n'écrase pas la configuration du parent modèle d'hôte
  mais ajoute les contacts en plus des groupes de contacts définis dans le modèle parent.

* Le champ **Options de notifications** définit les statuts pour lesquels une notification sera envoyée.
* Le champ **Intervalle de notification**  est exprimé en minutes. Il indique la durée entre chaque envoi de notification
  lorsque le statut est non-OK. Si la valeur est définie à 0 alors l’ordonnanceur envoie une seule notification par
  changement de statut.
* Le champ **Période de notification**  indique la période temporelle durant laquelle les notifications seront activées.
* Le champ **Délai de première notification** est exprimé en minutes. Il fait référence au délai à respecter avant l’envoi
  d’une première notification lorsqu’un statut non-OK est validé.
* Le champ **Délai de première notification de recouvrement** est le temps qui doit s'écouler avant qu'une notification de type **Récupération** soit envoyée (lorsque l'hôte revient à un état DISPONIBLE).

## Onglet Relations

* Le champ **Groupes d'hôtes** définit les groupes d’hôtes auxquels l’hôte appartient.
* Le champ **Catégories d'hôte** définit les catégories auxquelles l’hôte appartient.
* La liste **Hôtes parents** permet de définir les relations physiques de parenté entre objet.
* La liste **Hôtes enfants** permet de définir les relations physiques de parenté entre objet.

## Onglet Traitement des données

* Si le **Obsess Over Host** est activé, alors la commande de remontée des contrôles de l’hôte sera activée.
* Le champ **Check Freshness** permet d’activer ou de désactiver le contrôle de fraîcheur du résultat.
* Le champ **Freshness Threshold**  est exprimé en secondes. Si durant cette période aucune demande de changement de
  statut de l’hôte (commande passive) n’a été reçue alors la commande de vérification active est exécutée.
* Le champ **Flap Detection Enabled** permet d’activer ou de désactiver la détection du bagotage des statuts (statut
  changeant trop fréquemment de valeur sur une période donnée).
* Les champs **Low Flap Threshold** et **High Flap Threshold** définissent les seuils hauts et bas pour la détection du
  bagotage en pourcentage de changement de statuts.
* Les champs **Retain Status Information** et **Retain Non Status Information** indiquent si les informations concernant
  ou non le statut sont sauvegardées après chaque relance de la commande de vérification.
* Le champ **Stalking Options** définit les options à enregistrer si la rétention est activée.
* Le champ **Event Handler Enabled** permet d’activer ou de désactiver le gestionnaire d’évènements.
* Le champ **Event Handler** définit la commande à exécuter si le gestionnaire d’évènements est activé.
* Le champ **Args** définit les arguments de la commande du gestionnaire d’évènements.

## Onglet Informations détaillées de l’hôte

### Moteur de supervision

* Le champ **URL de la note** définit une URL qui peut être utilisée pour donner davantage d’informations sur l’hôte.
* Le champ **Note** permet d’ajouter des notes optionnelles concernant l’hôte.
* Le champ **URL d'action** définit une URL habituellement utilisée pour donner des informations d’actions sur l’hôte
  (maintenance...).
* Le champ **Icône** indique l’icône à utiliser pour l’hôte.
* Le champ **Icône alternative** est le texte utilisé si l’icône ne peut être affichée.
* Le champ **Criticité d'hôte** indique le niveau de criticité de l’hôte.
* Le champ **Image de la carte des états** défini le logo du module Centreon Map.
* Le champ **Coordonnées géographiques** définit les coordonnées géographiques utilisées par le module Centreon Map pour positionner
  l'élément sur la carte. Définissez "Latitude, Longitude", par exemple pour le jeu de coordonnées de Paris "48.51,2.20"

Les champs présentés ci-dessous sont obsolètes :

* **Coordonnées 2D**
* **Coordonnées 3D**

### Groupes d'accès

* Le champ **ACL Resource Groups** (seulement visible pour les utilisateurs non administrateurs), permet de lier l’hôte
  à un groupe d’hôtes afin de pouvoir visualiser ce dernier (voir le chapitre sur
  *[les listes de contrôles d'accès](../../administration/access-control-lists.md)*).

### Informations supplémentaires

* Le champ **Activer/désactiver la ressource** permet d’activer ou de désactiver l’hôte.
* Le champ **Commentaires** permet d’ajouter un commentaire concernant l’hôte.
