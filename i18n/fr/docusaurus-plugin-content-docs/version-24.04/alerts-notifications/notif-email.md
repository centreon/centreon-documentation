---
id: notif-email
title: Notifications par email
---

Le façon la plus courante d'envoyer des notifications avec Centreon est par email. Suivez la procédure [Configurer les notifications](./notif-configuration.md) pour les paramétrer.

Attention, pour que Centreon puisse envoyer des emails de notification, vous devez configurer un serveur SMTP local, par exemple [Postfix](../administration/postfix.md). Les notifications sont envoyées par le collecteur qui supervise la ressource, ce qui signifie que vous devez avoir un serveur SMTP pour chaque collecteur qui enverra des notifications.
