---
id: business-alerts
title: Alertes business
---

> Disponible par défaut avec les licences Business et Full ; en option sur les autres plans.

Les alertes business supervisent l'impact des problèmes sur le site (par exemple, les baisses de trafic ou de conversion) plutôt qu'une liste prédéfinie de causes.

Elles détectent les baisses anormales de trafic ou de conversion et permettent d'analyser précisément le moment où ces baisses se sont produites.

Ces données provenant de Google Analytics, elles sont traitées avec un délai par défaut de 4 heures (les données GA sont affinées au fil du temps).

## Prérequis

[Les utilisateurs doivent avoir renseigné leurs données personnelles](../configuration/manage-users-and-rights.md) (e-mail, SMS, Slack) et défini les plages horaires pendant lesquelles ils souhaitent être notifiés ou non.

## Créer une alerte business

1. Allez à la page **Configuration > Alerting**.
2. Dans la section **Alertes business**, cliquez sur **Ajouter une alerte métier**, puis sélectionnez le type d'alerte souhaité ([**Alerte sur le taux de conversion**](#alertes-sur-le-taux-de-conversion) ou [**Alertes sur les pages vues/mn**](#alertes-sur-les-pages-vues)).
3. Nommez votre alerte et définissez les utilisateurs qui doivent la recevoir. Sélectionnez e-mail, SMS ou Slack.
4. Si vous souhaitez définir un canal de notification autre que l'e-mail, le SMS ou Slack, définissez le webhook à utiliser. Ce type de notifications n'est pas lié à un utilisateur.
5. Survolez la tuile de l'alerte. 2 boutons apparaissent :

   * **Configurer la planification de cette alerte** : définissez les plages horaires pendant lesquelles les alertes doivent être envoyées.
   * **Configurer les seuils de cette alerte** : définissez les critères de déclenchement d'une alerte et d'une notification de rétablissement.

### Alertes sur le taux de conversion

Cette alerte vérifie si votre taux de conversion moyen sur une période donnée (2 heures par défaut) est inférieur par rapport à la même période historiquement (références journalières, hebdomadaires ou mensuelles).

Par défaut, cette alerte se déclenche lorsque le taux de conversion chute de 30 % par rapport à la valeur habituelle. Une notification de rétablissement est envoyée lorsque la métrique revient à 75 % du taux de conversion habituel.

Vous pouvez également définir un seuil fixe de taux de conversion en dessous duquel vous souhaitez être alerté.

### Alertes sur les pages vues

Cette alerte fonctionne de la même manière que les alertes sur le taux de conversion, mais s'applique aux pages vues par minute.
