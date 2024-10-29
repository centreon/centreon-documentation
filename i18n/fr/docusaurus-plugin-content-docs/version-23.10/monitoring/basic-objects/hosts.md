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

* **Nom** : nom d’hôte utilisé par le moteur de supervision. Ne peut pas contenir : `~!$%^&|'"<>?,()=*{}` et les espaces.
* **Alias** : un autre nom pour l'hôte. Les espaces et caractères interdits dans le nom peuvent être employés ici. L'alias peut être utilisé dans la barre de recherche **Nom** pour retrouver un hôte.
* **Adresse** : adresse IP ou nom DNS de l’hôte. Le bouton **Résoudre** permet de tester le nom du domaine en interrogeant le serveur DNS configuré dans le serveur central. Dans le cas où un nom DNS est utilisé pour remplir le champ, le bouton **Résoudre** le remplacera également par l'adresse IP correspondante.
* **Communauté SNMP & Version** : contiennent respectivement le nom de la communauté ainsi que la version SNMP.
* **Serveur de supervision** : détermine si c'est Central, un poller ou un serveur distant sera chargé de superviser cet hôte.
* **Fuseau horaire** : localisation de l'hôte. Tenez en compte que c'est le fuseau horaire établi ici qui détermine à quel moment sont réalisés les contrôles de cet hôte.
* **Modèles** : permet d’associer un ou plusieurs [modèles](../templates.md) à cet objet.

Si plusieurs [modèles](../templates.md) tenteraient de modifier le même champ, les caractéristiques du [modèle](../templates.md) placé au-dessus des autres seront appliquées.

> schéma ici

   Ce bouton ![image](../../assets/configuration/common/move.png#thumbnail2) nous permet de changer l'ordre des modèles hôtes.
   Ce bouton ![image](../../assets/configuration/common/delete.png#thumbnail2) sert à supprimer le modèle hôte.

* Si la case **Oui** est cochée pour **Créer aussi les services liés aux modèles**, Centreon génère automatiquement les
  services en se basant sur les [modèles](../templates.md) de services liés aux [modèles](../templates.md) d’hôtes définis au-dessus.

### Options de contrôle de l'hôte

* **Commande de vérification** : commande utilisée pour vérifier la disponibilité de l’hôte.
* **Arguments** : arguments donnés à la commande de vérification (chaque argument commence avec un ”!”).

* Section [**Macros personnalisées**](../macros/#custom-macros) :

   * Les champs **Nom** et **Valeur** établissent le nom et la valeur de la macro.
   * Cocher la case **Mot de passe** cache la valeur de la macro.

   Pour réinitialiser la macro avec sa valeur par défaut définie par le [modèle](../templates.md) cliquez sur ![image](../../assets/configuration/common/undo.png#thumbnail2)

   Pour afficher la description de la macro, cliquez sur ![image](../../assets/configuration/common/description.png#thumbnail2)

   Pour supprimer la macro, cliquez sur ![image](../../assets/configuration/common/delete.png#thumbnail2)

   Pour changer l’ordre des macros, cliquez sur ![image](../../assets/configuration/common/move.png#thumbnail2)

### Options d’ordonnancement

* **Période de contrôle** : définit la période temporelle durant laquelle l’ordonnanceur vérifie activement le statut de l’objet.
* **Nombre de contrôles avant validation de l'état** : définit le nombre de contrôles à effectuer avant de confirmer le statut de l’hôte comme non-OK.
  lorsque le statut est validé, le processus de notification est enclenché.
* **Intervalle normal de contrôle** : exprimé en minutes. Il définit l’intervalle entre chaque contrôle lorsque
  le statut de l’hôte est OK.
* **Intervalle non-régulier de contrôle** : exprimé en minutes, désigne l'intervalle de temps entre chaque contrôle réalisé avant la validation de l'état. Une fois le nombre de contrôles de validation réalisé, l'intervalle revient à son rythme normal.
* **Contrôle actif activé** et **Contrôle passif activé** activent / désactivent les contrôles actifs et passifs. [Les contrôles passifs](../../monitoring/passive-monitoring/enable-snmp-traps.md) sont les informations que la ressource supervisée envoie au Central sans que celles-ci aient été activement demandées.

## Onglet Notification

* **Notification activée** : activer ou de désactiver les notifications concernant l’objet.
* **Contacts liés** : contacts qui recevront les notifications. Ces contacts doivent être d'abord configurés dans l'onglet **Utilisateurs**.
* **Groupes de contacts liés** : tous les contacts appartenant aux groupes de contacts définis recevront les
  notifications. Les groupes doivent d'abord être configurés dans l'onglet **Utilisateurs**.
  
  **Vertical inheritance only** : établit les contacts et/ou groupes de contacts à notifier. Elle se trouve dans l'onglet **Administration > Paramètres > Centreon web**. Une fois activée, deux cases supplémentaires apparaissent :

    * Cocher **Contacts hérités additionnels** écrase pas la configuration du parent modèle d'hôte
  mais ajoute les contacts en plus des contacts définis dans le modèle parent.
    * Cocher **Groupes de contacts hérités additionnels** n'écrasera pas la configuration du parent modèle d'hôte
  mais ajoute les contacts en plus des groupes de contacts définis dans le modèle parent.

* **Options de notifications** : définit les statuts pour lesquels une notification sera envoyée. Si aucune case n'est cochée, vous serez notifié pour tous les statuts listés.
* **Intervalle de notification** : exprimé en minutes. Il indique la durée entre chaque envoi de notification
  lorsque le statut est non-OK. Si la valeur est définie à 0, l’ordonnanceur envoie une seule notification par
  changement de statut.
* **Période de notification** : indique la période temporelle durant laquelle les notifications seront activées.
* **Délai de première notification** : exprimé en minutes. Il fait référence au délai à respecter avant l’envoi
  de la première notification lorsqu’un statut non-OK est confirmé. Mettre la valeur à 0 résulte en l'envoi immédiat de la notification.
* **Délai de première notification de recouvrement** : est le temps qui doit s'écouler avant qu'une notification de type **Récupération** soit envoyée (lorsque l'hôte revient à un état DISPONIBLE). Mettre la valeur à 0 résulte en l'envoi immédiat de la notification.

## Onglet Relations

* **Groupes d'hôtes** : les groupes d’hôtes auxquels l’hôte appartient. Les groupes vous permettent de faire des changements sur plusieurs hôtes en même temps.
* **Catégories d'hôte** : les catégories auxquelles l’hôte appartient.
* **Hôtes parents** : relations physiques de parenté entre objet. Le parent d'un hôte est l'objet entre l'hôte et son superviseur qui est également le plus proche de l'objet supervisé. On considère qu'un hôte n'a pas de parent s'il se trouve sur le même segment du réseau que l'hôte qui le supervise ssans aucun intermédiaire. Laissez ce champs libre dans ce cas-là.
* **Hôtes enfants** : établir l'hôte actuel en tant que parent d'un autre hôte.

## Onglet Traitement des données

* **Obsess Over Host** : active la commande de remontée des contrôles de l’hôte.
* **Check Freshness** : contrôle actif réalisé lorsque la quantité de temps établie s'est écoulée depuis le dernier contrôle passif de l'objet.
* **Freshness Threshold** : exprimé en secondes. Si durant cette période aucune demande de changement de
  statut de l’hôte (commande passive) n’a été reçue alors la commande de vérification active est exécutée. Si le contrôle est activé mais que le champs est laissé vide, un seuil sera determiné automatiquement.
* **Flap Detection Enabled** : active ou désactive la détection du bagotage des statuts (statut
  changeant trop fréquemment de valeur sur une période donnée).
* **Low Flap Threshold** et **High Flap Threshold** : les seuils hauts et bas pour la détection du
  bagotage en pourcentage de changement de statuts.
* **Retain Status Information** et **Retain Non Status Information** : indiquent si les informations concernant
  ou non le statut sont sauvegardées après chaque relance de la commande de vérification.
* **Stalking Options** : options à enregistrer si la **Rétention** est activée.
* **Event Handler Enabled** : activer ou de désactiver le gestionnaire d’évènements.
* **Event Handler** : commande à exécuter si le gestionnaire d’évènements est activé.
* **Args** : arguments de la commande du gestionnaire d’évènements.

## Onglet Informations détaillées de l’hôte

### Moteur de supervision

* **URL de la note** : URL cliquable qui apparaitra dans la colonne **Notes** de l'écran **Statut des Ressources** (la colonne **Notes** doit être activée pour cette fonction).
* **Note** : notes optionnelles concernant l’hôte qui seront visibles dans l'écran **Statut des Ressources** (la colonne **Notes** doit être activée pour cette fonction).
* **URL d'action** : URL habituellement utilisée pour donner des informations d’actions sur l’hôte
  (maintenance...).
* **Icône** : icône à utiliser pour l’hôte, cet icône est visible à divers endroits. Un formqt 40x40 pixels est recommandé.
* **Icône alternative** : texte optionnel apparaissant lorsque l'icône ne peut être affiché.
* **Criticité d'hôte** : niveau de criticité de l’hôte. Il s'agit d'une sorte de catégorie spéciale que vous pouvez utiliser pour organiser l'écran **Statut des Ressources** par niveau de criticité.
* **Image de la carte des états** : logo du module Centreon Map.
* **Coordonnées géographiques** : coordonnées géographiques utilisées par le module Centreon Map pour positionner
  l'élément sur la carte. Définissez "Latitude, Longitude", par exemple pour le jeu de coordonnées de Paris "48.51,2.20"

Les champs **Coordonnées 2D** et **Coordonnées 3D** sont obsolètes et n'ont aucun impact sur l'hôte.

### Groupes d'accès

* **ACL Resource Groups** : ([listes de contrôles d'accès](../../administration/access-control-lists.md) en français) permet de lier l’hôte
  à un groupe d’hôtes afin de pouvoir visualiser ce dernier. Uniquement visible aux utilisateurs non administrateurs

### Informations supplémentaires

* **Activer/désactiver la ressource** : détermine si l'hôte doit être supervisé ou pas. Si l'hôte est désactivé, il n'apparaitra pas sur l'écran **Statut des Ressources**.
* **Commentaires** : ajouter un commentaire concernant l’hôte.

> N'oubliez pas de [déployer la configuration](../monitoring-servers/deploying-a-configuration.md) pour que les changements réalisés soient pris en compte.

