---
id: notifications
title: Paramétrer des notifications
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Des notifications peuvent être envoyées lorsqu'une [règle d'alerte](alerts.md) déclenche un [évènement d'alerte](./resources/glossary.md#évènement-dalertestatut-dalerte) et que certaines conditions sont remplies. Pour l'instant, vous pouvez configurer un webhook pour envoyer un message à une application tierce.

## Étape 1 : Créer un canal de notification

1. Allez à la page **Alerts and notifications > Notification channels**.

2. Cliquez sur **Add** ou **Create a notification channel** et entrez un nom et une description.

3. Dans la section **Settings** :
   * Saisissez l'URL du webhook que vous avez récupérée depuis votre application tierce. Vous devez inclure **http://** ou **https://**.
   * Sélectionnez la méthode HTTP que vous souhaitez que le webhook utilise.
   * Rédigez le corps du message à envoyer.
   * Définissez les en-têtes que vous souhaitez transmettre à votre application tierce.

4. Cliquez sur **Create**. Le canal de notification apparaît dans la liste.

## Étape 2 : Associer une règle d'alerte à un canal de notification

1. Allez à la page **Alerts and notifications > Alert rules**.

2. Créez une nouvelle règle d'alerte ou modifiez une règle existante : dans la section **Notification channels**, cliquez sur **Add channel**.

3. Dans la section qui apparaît :

   * Définissez quels statuts d'alerte doivent déclencher une notification.
   * Définissez quand les notifications doivent être envoyées : **On every status change/on every alert event**.
   * Sélectionnez le canal de notification que vous avez créé à l'étape 1.

4. Cliquez sur **Save**. Les notifications commenceront à être envoyées dès que les évènements d'alerte répondront aux conditions que vous avez définies.
