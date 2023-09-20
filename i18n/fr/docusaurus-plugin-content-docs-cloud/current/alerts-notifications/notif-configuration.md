---
id: notif-configuration
title: Configurer les notifications
---

Par défaut, les notifications sont actives pour tous les hôtes et tous les services. Dans Centreon Cloud, les notifications sont envoyées par le serveur central.

> Les notifications ne sont pas actives pour les utilisateurs de la version d'essai [Centreon Cloud trial](../getting-started/cc-trial.md).

## Dans quels cas des notifications sont-elles envoyées?

Des notifications sont envoyées dans les cas suivants :

* quand une ressource est dans un état non-ok (**Alerte** ou **Critique** pour un service, **Indisponible** ou **Injoignable** pour un hôte)
* quand une ressource revient dans un état OK
* quand une plage de maintenance commence.

## À qui sont envoyées les notifications?

Les notifications sont envoyées à tous les utilisateurs.

## Comment sont contrôlées les ressources?

Les ressources sont contrôlées selon les paramètres suivants :

* Les contrôles ont lieu 24x7, toutes les 5 minutes tant que l'hôte ou le service sont dans un état OK.
* Lorsqu'un hôte ou un service entre dans un statut non-ok (type de statut SOFT, par exemple Injoignable SOFT pour un hôte), Centreon vérifie 3 fois que l'hôte ou le service est toujours dans un état non-OK (ces 3 contrôles sont chacun espacés d'une minute).
* Si, après ces 3 contrôles, la ressource est toujours dans un statut non-ok, son type de statut devient HARD et les notifications commencent à être envoyées.
* Des contrôles ont alors lieu toutes les 5 minutes pour vérifier si la ressource est toujours dans un statut HARD. Des notifications sont envoyées toutes les 5 minutes.

> Pour assurer la compatibilité avec les versions futures, ne changez pas ces valeurs.
