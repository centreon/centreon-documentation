---
id: user-journey-notifications
title: Recevoir et configurer les notifications
description: Configurer des notifications pour les parcours utilisateur en échec ou hors délai
---

Vous pouvez configurer Experience Monitoring pour vous envoyer une notification lorsque l'un de vos [parcours utilisateur](./user-journey-intro.md) échoue ou dépasse le délai d'attente.

Les notifications par e-mail sont disponibles pour tous les utilisateurs. De plus, certaines licences permettent de recevoir des notifications par SMS, Slack ou [webhooks](../../experience-monitoring-glossary.md#webhook).
Pour souscrire à cette option, contactez votre représentant commercial.
Les notifications sont également disponibles au sein de la plateforme Experience Monitoring. Cliquez sur votre icône en haut à droite, puis cliquez sur **Notifications**.

> Notez que si les notifications par e-mail, webhook ou Slack sont illimitées, un quota de SMS est disponible par site et par mois.
Pour consulter votre quota SMS, accédez à **Configuration**, puis à l'onglet **Site**. Vous trouverez votre quota dans la section **Alertes & Rapports**.

## Paramétrage des notifications

### Coordonnées

Chaque utilisateur doit configurer individuellement le numéro de téléphone ou les comptes sur lesquels il recevra les notifications. Pour ce faire, cliquez sur votre icône en haut à droite, puis cliquez sur **Mon compte**.

L'adresse e-mail, le numéro de téléphone et les comptes Slack indiqués dans votre profil sont ceux qui seront utilisés pour vous envoyer des notifications.

De plus, Experience Monitoring permet aux utilisateurs de recevoir des alertes via un webhook pour une meilleure intégration avec d'autres outils et systèmes.
Par exemple, si vous utilisez Microsoft Teams à la place de Slack, un webhook permettra l'intégration.
Lorsqu'un incident est détecté sur une application web supervisée, Experience Monitoring peut envoyer une requête HTTP POST vers une URL spécifiée par l'utilisateur.
Cette URL peut être protégée par htaccess, et l'utilisateur peut également définir des **en-têtes HTTP** si nécessaire.
Vous pouvez configurer cette URL en cliquant sur le mot **Webhook** d'une alerte nouvelle ou existante, puis en cliquant sur l'icône crayon.

### Plages horaires des alertes

Les utilisateurs peuvent définir des périodes pendant lesquelles ils ne reçoivent pas d'alertes, afin de mieux refléter leurs horaires de travail ou leur disponibilité.
Par défaut, les utilisateurs sont considérés comme disponibles 24h/24 et 7j/7. Cliquez sur les barres vertes pour ajouter des plages rouges indiquant les moments où l'utilisateur ne recevra pas de notifications.

![image](../../assets/configuration/receive-and-configure-alerts-4.png)

De plus, chaque alerte peut être activée/désactivée pour des plages horaires spécifiques, de sorte qu'elle ne notifie pas les personnes abonnées quelle que soit leur planning personnel.

### Activer les notifications

Après avoir renseigné vos coordonnées et vos plages de disponibilité, cliquez sur **Configuration**, puis sur l'onglet **Alerting**.

Vous pouvez choisir de vous abonner aux notifications d'une notification existante en cliquant sur la liste des utilisateurs qui reçoivent ces notifications.
Une fenêtre avec les utilisateurs abonnés s'ouvre ; cliquez sur « Subscribe yourself » pour vous ajouter à cette notification et cochez les cases correspondant aux types de notifications que vous souhaitez recevoir.

Les administrateurs peuvent également abonner ou désabonner d'autres utilisateurs d'une notification.

Si la notification à laquelle vous souhaitez vous abonner n'a pas encore été créée, cliquez sur l'icône + pour la créer vous-même.

1. Choisissez pour quel type de problème la notification sera envoyée : le statut du parcours utilisateur ou une métrique.
2. Choisissez quel parcours utilisateur sera couvert par cette notification.
3. Décidez qui doit recevoir cette notification et comment. Pour vous sélectionner, cliquez sur le bouton **Vous inscrire**.
4. Déterminez les seuils qui déclencheront cette notification. Cliquez sur l'icône d'engrenage pour ouvrir l'éditeur de seuils de notification.
Les deux premiers champs sous **Alerter quand** définissent les critères pour commencer à envoyer des notifications.
Le champ sous **Marquer comme résolu** détermine quand considérer qu'un parcours n'a plus de problèmes et que les notifications doivent s'arrêter.

En plus des notifications, vous pouvez vous abonner à des rapports quotidiens, hebdomadaires ou mensuels sur les performances de vos parcours utilisateur avec l'option **Digests**.
