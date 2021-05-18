---
id: services
title: Les services
---

Un service est un point de contrôle lié/rattaché à un hôte. Par exemple : Pourcentage d’utilisation partition sur un
serveur, niveau d’encre sur une imprimante.

Tous les ajouts de services se font dans le menu : **Configuration > Services > Add**.

![image](../../assets/configuration/03addservice.png)

## Configuration du service

### Informations général

* Le champ **Description** définit le nom du service.
* Le champ **Service template** indique le modèle de service auquel le service est lié.

### Service State

* Le champ **Is Volatile**  indique si le service est volatile ou non (d’une manière générale uniquement les services
  passifs sont volatiles).
* Le champ **Check Period** définit la période temporelle durant laquelle l’ordonnanceur vérifie le statut du service.
* Le champ **Check Command** indique la commande utilisée pour vérifier la disponibilité du service.
* Le tableau **Args** définit les arguments donnés à la commande de vérification (le nombre d’arguments varie en
  fonction de la commande de vérification choisie).
* Le champ **Max Check Attempts** définit le nombre de contrôles à effectuer avant de valider le statut du service.
  Lorsque le statut est validé, le processus de notification est enclenché.
* Le champ **Normal Check Interval** est exprimé en minutes. Il définit l’intervalle entre chaque vérification lorsque
  le statut du service est OK.
* Le champ **Retry Check Interval** est exprimé en minutes. Il définit l’intervalle de validation du statut non-OK du service.
* Les champs **Active Checks Enabled** et **Passive Checks Enabled** activent / désactivent le type de contrôle du service.

### Macros

* Les champs **Macro name** et **Macro value** permettent respectivement de définir le nom et la valeur de la macro.
* La case **Password** permet de cacher la valeur de la macro.

Pour réinitialiser la macro avec sa valeur par défaut (définie dans le templae) cliquez sur <img src="../../assets/configuration/common/undo.png" width="32" />

Pour afficher la description de la macro, cliquez sur <img src="../../assets/configuration/common/description.png" width="32" />

Pour supprimer la macro, cliquez sur <img src="../../assets/configuration/common/delete.png" width="32" />

Pour déplacer l’ordre des macros, cliquez sur <img src="../../assets/configuration/common/move.png" width="32" />

### Notification

* Le champ **Notification Enabled** permet d’activer ou de désactiver les notifications pour l’objet.
* Le champ **Inherit contacts from host** permet de faire hériter les contacts depuis la configuration de l’hôte.
* Si la case **Contact additive inheritance** est cochée, alors Centreon n’écrase pas la configuration du modèle de
  service parent mais ajoute les contacts en complément des contacts définis au niveau du modèle parent.
* La liste **Implied Contacts** indique les contacts qui recevront les notifications.
* Si la case **Contact group additive inheritance** est cochée, alors Centreon n’écrase pas la configuration du modèle
  de service parent mais ajoute les groupes de contacts en complément des groupes de contacts définis au niveau du
  modèle parent.
* Si la case **Inherit only contacts/contact group from host** est cochée, alors lors de la génération de la
  configuration, les contacts et/ou groupes de contacts de l’hôte (ou de ses templates suivant l’héritage) viendront
  écraser ceux du service ou de ses modèles de service. Cette fonction désactive la saisie de contacts et groupes de
  contacts pour ce service.
* Au sein de la liste **Implied Contact Groups** tous les contacts appartenant aux groupes de contacts définis recevront
  les notifications.
* Le champ **Notification Interval** est exprimé en minutes. Il indique la durée entre chaque envoi de notification
  lorsque le statut est non-OK. Si la valeur est définie à 0 alors l’ordonnanceur envoie une seule notification par
  changement de statut.
* Le champ **Notification Type** définissent les statuts pour lesquels une notification sera envoyée.
* Le champ **First notification delay** est exprimé en minutes. Il fait référence au délai à respecter avant l’envoi
  d’une première notification lorsqu’un statut non-OK est validé.

## Onglet Relations

### Relations

* La liste **Linked with Hosts** permet de définir le ou les hôtes auxquels lier ce service.
* La liste **Linked with Servicegroups** permet de lier le service à un ou plusieurs groupes de services.

### SNMP traps

Le champ **Service Trap Relation** permet de définir les traps SNMP qui pourront modifier le comportement du service.

## Traitement des données

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

## Informations supplémentaires du service

### Centreon

* La liste **Graph template** définit le modèle de graphique à utiliser pour présenter les données de performances
  liées au service.
* La liste **Categories** définit la(les) catégorie(s) à laquelle (auxquelles) le service appartient.

### Moteur de supervision

* Le champ **URL** définit une URL qui peut être utilisée pour donner davantage d’informations sur le service.
* Le champ **Notes** permet d’ajouter des notes optionnelles concernant le service.
* Le champ **Action URL** définit une URL habituellement utilisée pour donner des informations d’actions sur le service
  (maintenance...).
* Le champ **Icon** indique l’icône à utiliser pour le service.
* Le champ **Alt icon** est le texte utilisé si l’icône ne peut être affichée.
* Le champ **Severity level** indique le niveau de criticité du service.

### Informations supplémentaires

* Le champ **Status** permet d’activer ou de désactiver le service.
* Le champ **Comment** permet d’ajouter un commentaire concernant le service.

## Détachement d’un service

Si un service est lié à plusieurs hôtes, alors il sera identique pour chacun d’eux. Il ne sera donc pas possible de
modifier unitairement le service d’un hôte pour modifier une propriété. C’est pourquoi il est possible de transformer
ce service lié à plusieurs hôtes en un service unique pour chaque hôte:

1. Dans la liste des services, sélectionnez le service lié à plusieurs hôtes (habituellement ce service est surligné en
  orange)
2. Dans le menu **More actions...** cliquez sur le bouton **Detach** et validez

Il existe maintenant un service unique par hôte.
