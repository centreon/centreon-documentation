---
id: map-web-advanced
title: Paramètres avancés dans MAP
---

## Définir les vues et les paramètres de calcul du statut

Le serveur Centreon MAP vous offre la possibilité de personnaliser la façon dont le statut hérité est calculé et rendu dans les vues.
Vous pouvez utiliser les paramètres suivants pour adapter le comportement du calcul du statut hérité à votre cas d'utilisation.

| Paramètre                           | Valeur possible | Valeur par défaut | Description                                                                                                 |
| ----------------------------------- | --------------- | ----------------- | ----------------------------------------------------------------------------------------------------------- |
| resource.status.use-hard              | true or false   | false             | Utiliser uniquement la valeur de l'état HARD pour la propagation de l'état hérité.                           |
|resource.status.ignore-on-downtime   | true or false   | false             | Ne pas propager l'état des ressources en temps d'arrêt                                                      |
| resource.status.ignore-on-acknowledgement | true or false   | false             | Ne pas propager le statut des ressources acquittées                                                          |
| resource.status.ignore-above-severity    | integer         | max value                 | Ne pas propager le statut des ressources dont la sévérité est supérieure à cette valeur.                     |

Les paramètres suivants peuvent être configurés dans **/etc/centreon-map/map-config.properties**.

Si vous ajoutez, supprimez ou mettez à jour un paramètre, veillez à redémarrer **centreon-map-engine**.

**Qu'est-ce qu'un statut hérité ?**

Un statut hérité est un statut personnalisé de Centreon MAP associé à certains objets, et qui est basé sur le pire statut de ses enfants. Voici les règles :

- Un hôte a deux statuts : son propre statut (up/down/pending) et un statut hérité qui est basé sur le pire état de ses services.
- Un groupe d'hôtes n'a qu'un statut hérité correspondant au pire état de ses enfants (hôtes, services).
- Un groupe de services n'a qu'un état hérité : le pire état de ses enfants (services).
- Un conteneur n'a qu'un statut hérité : le pire statut de ses enfants (hôtes, services, méta-services, host groups, service groups, BA, widgets).
