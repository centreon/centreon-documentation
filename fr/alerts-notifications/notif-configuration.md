---
id: notif-configuration
title: Configuration
---

## Moteur de supervision

La première étape consiste à vérifier que le planificateur (Centreon Engine) est programmé pour envoyer des
notifications.

Rendez-vous dans le menu **Configuration > Pollers > Engine configuration** et sélectionnez un ordonnanceur.

![image](assets/alerts/notif_engine_conf.png)

Pour les options **Check Options**, sélectionnez **Yes** POUR L4OPTION **Notification Option**. puis cliquez sur
**Save**.

> Vous devrez également configurer le **mail relay** dans la configuration du serveur associé.
> Par défaut, le gestionnaire de messagerie installé est postfix. Regardez la [documentation officielle](http://www.postfix.org/BASIC_CONFIGURATION_README.html).

## Méthode de calcul pour les contacts et groupes de contacts

Depuis la version Centreon **19.10**, 3 méthodes de détermination des contacts et groupes de contacts qui seront
notifiés sont disponibles :

* **Vertical Inheritance Only** : récupère les contacts et les groupes de contacts des ressources et de modèles liés,
  en utilisant l'option d'héritage additif activée (méthode héritée, conserver pour la mise à niveau)
* **Closest Value** : récupère les contacts et groupes de contacts les plus proche des ressources, y compris des modèles
* **Cumulative inheritance** : Cumulez tous les contacts et groupes de contacts des ressources et des modèles liés
  (méthode utilisée pour la nouvelle installation)

Rendez-vous dans le menu **Administration > Parameters > Centreon UI** et sélectionnez l'option désirée.

![image](assets/alerts/notif_centreon_config.png)

Puis cliquez sur le bouton **Save**.

> L'option **Cumulative inheritance** est la plus simple à configurer.

## Contact

Pour recevoir une notification, les paramètres du contact doivent être configurés.

Rendez-vous dans le menu **Configuration > Users > Contacts / Users** et sélectionnez votre contact :

![image](assets/alerts/notif_contact_config.png)

1. Sélectionnez les états dont vous souhaitez recevoir des notifications à l'aide de l'option ** Option de notification
  **Notification Option**.
2. Sélectionnez la période pendant laquelle vous souhaitez recevoir les notifications via l'option **Notification Period**.
3. Sélectionnez ensuite la méthode pour recevoir une notification à l'aide de l'option **Notification Commands**

Puis cliquez sur le bouton **Save**.

Une fois que vos contacts sont prêts à recevoir des notifications, vous devez les lier aux ressources à partir desquelles
vous souhaitez recevoir des notifications.

> Vous pouvez utiliser les **[modèles de contact](../monitoring/templates#les-modèles-de-contacts)** pour définir les
> paramètres par défaut et hériter de tous vos contacts de ce modèle.

## Hôtes

Rendez-vous dans le menu **Configuration > Hosts > Hosts** et sélectionnez un hôte. Dans l'onglet **Notification**
définissez les paramètres :

![image](assets/alerts/notif_host_config.png)

* **Notification Options**: Sélectionnez les statuts dont vous souhaitez recevoir des notifications
* **Notification Interval**: Définit l'intervalle en minutes avant de notifier à nouveau un contact dans le cas où le
  service est toujours dans un état non-OK. La valeur 0 désactive l'envoi de plusieurs notifications - une unique
  notification sera envoyée concernant le problème.
* **Notification Period**: Spécifie les périodes de temps durant lesquelles les notifications d'événements doivent
  être envoyées aux contacts. Si un changement d'état intervient à un moment exclut de cette période temporelle,
  aucune notification ne sera envoyée.
* **First notification delay**: Définit le nombre "d'unités de temps" à attendre avant l'envoi de la notification du
  premier problème lorsque ce service entre dans un état non-OK. Avec l'unité de temps par défaut de 60s, ce nombre
  représente un multiple de 1 minute. Si la valeur spécifiée est 0, le moteur de supervision commencera à envoyer des
  notifications immédiatement.
* **Recovery notification delay**: Définit le nombre "d'unités de temps" à attendre avant l'envoi de la notification du
  rétablissement lorsque ce service entre dans un état OK. Avec l'unité de temps par défaut de 60s, ce nombre représente
  un multiple de 1 minute. Si la valeur spécifiée est 0, le moteur de supervision commencera à envoyer des notifications
  immédiatement.

> Pour faciliter la configuration de la notification, vous pouvez ajuster les paramètres sur un modèle d'hôte. Tous les
> hôtes qui héritent de ce modèle hériteront également de ces paramètres.

## Service

Rendez-vous dans le menu **Configuration > Services > Services by host** et sélectionnez un service. Dans l'onglet
**Notification** définissez les paramètres :

![image](assets/alerts/notif_service_config.png)

* **Notification Options**: Sélectionnez les statuts dont vous souhaitez recevoir des notifications
* **Notification Interval**: Définit l'intervalle en minutes avant de notifier à nouveau un contact dans le cas où le
  service est toujours dans un état non-OK. La valeur 0 désactive l'envoi de plusieurs notifications - une unique
  notification sera envoyée concernant le problème.
* **Notification Period**: Spécifie les périodes de temps durant lesquelles les notifications d'événements doivent
  être envoyées aux contacts. Si un changement d'état intervient à un moment exclut de cette période temporelle,
  aucune notification ne sera envoyée.
* **First notification delay**: Définit le nombre "d'unités de temps" à attendre avant l'envoi de la notification du
  premier problème lorsque ce service entre dans un état non-OK. Avec l'unité de temps par défaut de 60s, ce nombre
  représente un multiple de 1 minute. Si la valeur spécifiée est 0, le moteur de supervision commencera à envoyer des
  notifications immédiatement.
* **Recovery notification delay**: Définit le nombre "d'unités de temps" à attendre avant l'envoi de la notification du
  rétablissement lorsque ce service entre dans un état OK. Avec l'unité de temps par défaut de 60s, ce nombre représente
  un multiple de 1 minute. Si la valeur spécifiée est 0, le moteur de supervision commencera à envoyer des notifications
  immédiatement.

> Pour faciliter la configuration de la notification, vous pouvez ajuster les paramètres sur un modèle de service. Tous
> les hôtes qui héritent de ce modèle hériteront également de ces paramètres.
