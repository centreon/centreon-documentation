---
id: hosts
title: Les hôtes
---

Un hôte est toute entité possédant une adresse IP correspondant à une ressource du système d’informations. Exemples : Un
serveur, une imprimante réseau, un serveur NAS, une base de données, une sonde de température, une caméra IP...

Tous les ajouts d’hôtes se font dans le menu : **Configuration \> Hosts \> Add**.

![image](assets/configuration/02addhost.png)

## Configuration de l’hôte

### Informations générales

* Le champ **Host Name**  définit le nom d’hôte qui sera utilisé par le moteur de supervision.
* Le champ **Alias** indique l’alias de l’hôte.
* Le champ **IP address / DNS** Adresse IP ou nom DNS de l’hôte. Le bouton **Resolve** permet de résoudre le nom de
  domaine en interrogeant le serveur DNS configuré sur le serveur central.
* Les champs **SNMP Community & Version** contiennent respectivement le nom de la communauté ainsi que la version SNMP.
* Le champ **Monitored from** indique quel est le serveur de supervision chargé de superviser cet hôte.
* Le champ **Timezone / Location** indique l'emplacement du fuseau horaire des hôtes surveillés.
* Le champ **Host Templates** permet d’associer un ou plusieurs modèles d’hôtes à cet objet.

En cas de conflits de paramètres présents sur plusieurs modèles, le modèle d’hôte au-dessus écrase les propriétés
identiques définies dans modèles d’hôtes en dessous.

Ce bouton nous permet de changer l'ordre des modèles hôtes ![image](assets/configuration/common/move.png)
Ce bouton sert à supprimer le modèle hôte ![image](assets/configuration/common/delete.png)

* Si la case **Create Services linked to the Template too** est définit à **Yes**, Centreon génère automatiquement les
  services en se basant sur les modèles de services liés aux modèles d’hôtes définis au-dessus (voir chapitre Les [modèles](templates)).

### Macros

* Le champ **Check Command** indique la commande utilisée pour vérifier la disponibilité de l’hôte.
* Le champ **Args** définit les arguments donnés à la commande de vérification (chaque argument commence avec un ”!”).

La partie Macros permet d’ajouter des macros personnalisées.

* Les champs **Macro name** et **Macro value** permettent respectivement de définir le nom et la valeur de la macro.
* La case **Password** permet de cacher la valeur de la macro.

Pour réinitialiser la macro avec sa valeur par défaut (définie dans le templae) cliquez sur ![image](assets/configuration/common/undo.png)

Pour afficher la description de la macro, cliquez sur ![image](assets/configuration/common/description.png)

Pour supprimer la macro, cliquez sur ![image](assets/configuration/common/delete.png)

Pour déplacer l’ordre des macros, cliquez sur ![image](assets/configuration/common/move.png)

### Propriété d’ordonancement de l’hôte

* Le champ **Check Period** définit la période temporelle durant laquelle l’ordonnanceur vérifie le statut de l’objet.
* Le champ **Max Check Attempts** définit le nombre de contrôle à effectuer avant de valider le statut de l’hôte :
  lorsque le statut est validé, le processus de notification est enclenché.
* Le champ **Normal Check Interval** est exprimé en minutes. Il définit l’intervalle entre chaque vérification lorsque
  le statut de l’hôte est OK.
* Le champ **Retry Check Interval** est exprimé en minutes. Il définit l’intervalle de validation du statut non-OK de l’hôte.
* Les champs **Active Checks Enabled** et **Passive Checks Enabled** activent / désactivent les contrôles actifs et passifs.

## Onglet Notification

* Le champ **Notification Enabled** permet d’activer ou de désactiver les notifications concernant l’objet.
* Le champ **Notification Options** définissent les statuts pour lesquels une notification sera envoyée.
* Le champ **Notification Interval**  est exprimé en minutes. Il indique la durée entre chaque envoi de notification
  lorsque le statut est non-OK. Si la valeur est définie à 0 alors l’ordonnanceur envoie une seule notification par
  changement de statut.
* Le champ **Notification Period**  indique la période temporelle durant laquelle les notifications seront activées.
* Le champ **First notification delay** est exprimé en minutes. Il fait référence au délai à respecter avant l’envoi
  d’une première notification lorsqu’un statut non-OK est validé.
* Si la case **Contact additive inheritance** est cochée, Centreon n'écrase pas la configuration du parent modèle d'hôte
  mais ajoute les contacts en plus des contacts définis dans le modèle parent.
* La liste **Linked contacts** indique les contacts qui recevront les notifications.
* Si la case **Contact group additive inheritance** est cochée, Centreon n'écrase pas la configuration du parent modèle d'hôte
  mais ajoute les contacts en plus des groupes de contacts définis dans le modèle parent.
* La liste **Linked contacts Groups** tous les contacts appartenant aux groupes de contacts définis recevront les
  notifications.

## Onglet Relations

* Le champ **Parent Host Groups** définit les groupes d’hôtes auxquels l’hôte appartient.
* Le champ **Parent Host Categories** définit les catégories auxquelles l’hôte appartient.
* La liste **Parent Hosts** permet de définir les relations physiques de parenté entre objet.
* La liste **Child Hosts** permet de définir les relations physiques de parenté entre objet.

## Traitement des données

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

## Informations détaillées de l’hôte

### Moteur de supervision

* Le champ **URL** définit une URL qui peut être utilisée pour donner davantage d’informations sur l’hôte.
* Le champ **Notes** permet d’ajouter des notes optionnelles concernant l’hôte.
* Le champ **Action URL** définit une URL habituellement utilisée pour donner des informations d’actions sur l’hôte
  (maintenance...).
* Le champ **Icon** indique l’icône à utiliser pour l’hôte.
* Le champ **Alt Icon** est le texte utilisé si l’icône ne peut être affichée.
* Le champ **Severity level** indique le niveau de criticité de l’hôte.
* Le champ **Status Map Image** défini le logo du module Centreon Map.
* The **Geo coordinates** défini les coordonnées géographiques utilisées par le module Centreon Map pour positionner
  l'élément sur la carte. Définissez "Latitude, Longitude", par exemple pour le jeu de coordonnées de Paris "48.51,2.20"

Les champs présentés ci-dessous sont obsolètes :

* **2d Coords**
* **3d Coords**

### Groupes d'accès

* Le champ **ACL Resource Groups** (seulement visible pour les utilisateurs non administrateur), permet de lier l’hôte
  à un groupe d’hôtes afin de pouvoir visualiser ce dernier (Voir le chapitre sur les contrôles d'accès @TODO@:ref:`acl`).

### Informations supplémentaires

* Le champ **Status** permet d’activer ou de désactiver l’hôte.
* Le champ **Comments** permet d’ajouter un commentaire concernant l’hôte.
