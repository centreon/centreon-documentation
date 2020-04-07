---
id: notif-advanced
title: Pour aller plus loin
---

## Commandes

La notification est basée sur une commande qui sera exécutée par le moteur lors de l'émission de la notification.
Cette commande est attachée à chaque contact à notifier. Centreon propose des commandes par défaut que vous pouvez
modifier.

Accédez au chapitre de [configuration des commandes](../monitoring/commands#definition) pour modifier / ajouter de
nouvelles commandes de notification.

> Vous pouvez également trouver dans les [plugins Centreon](https://github.com/centreon/centreon-plugins/tree/master/notification)
> pour envoyer des e-mails HTML préformés, etc. Vous devez installer le plugin sur tous les collecteurs, et ajouter une
> commande pour utiliser ce plugin et changer la commande de vos contacts.

## Chatops

Un projet communautaire [Centreon-Chatops](https://github.com/centreon/centreon-chatops) a été développé pour permettre
la communication entre un chat d'équipe comme Mattermost ou Slack et Centreon via des commandes slash

## Stream connector

Vous pouvez également transférer l'événement vers une application tierce à l'aide de la fonctionnalité **Centreon Stream
Connector**. Voir le chapitre **Intregration / Stream-Connectors**.
