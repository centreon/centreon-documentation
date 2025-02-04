---
id: map-web-advanced
title: Paramètres avancés dans MAP
---

## Définir les paramètres de calcul du statut

Le serveur Centreon MAP vous offre la possibilité de personnaliser la façon dont le statut hérité est calculé et rendu dans les vues.
Vous pouvez utiliser les paramètres suivants pour adapter le comportement du calcul du statut hérité à votre cas d'utilisation.

### Qu'est-ce qu'un statut hérité ?

Un statut hérité est un statut personnalisé de Centreon MAP associé à certains objets, et qui est basé sur le pire statut de ses enfants. Voici les règles :

- Un hôte a deux statuts : son propre statut (disponible/indisponible/en attente) et un statut hérité qui est basé sur le pire statut de ses services. Pour simplifier la lecture, le statut affiché est le résultat du calcul du pire statut des deux.
- Un groupe d'hôtes n'a qu'un statut hérité correspondant au pire statut de ses enfants (hôtes, services).
- Un groupe de services n'a qu'un statut hérité : le pire statut de ses enfants (services).
- Un conteneur n'a qu'un statut hérité : le pire statut de ses enfants (hôtes, services, méta-services, groupes d'hôtes, groupes de services, BA, widgets).

### Paramètres de calcul du statut

| Paramètre                           | Valeur possible | Valeur par défaut | Description                                                                                                 |
| ----------------------------------- | --------------- | ----------------- | ----------------------------------------------------------------------------------------------------------- |
| resource.status.use-hard              | true or false   | false             | Utiliser uniquement la valeur du statut HARD pour la propagation du statut hérité. Si le paramètre est à TRUE, les changements de statut SOFT ne sont pas pris en compte dans le calcul. Si le paramètre est à FALSE (valeur par défaut), les statuts SOFT et HARD sont pris en compte. Voir plus d'infos sur les [types de statut](../alerts-notifications/concepts.md#types-de-statuts).               |
|resource.status.ignore-on-downtime   | true or false   | false             | Ne pas propager l'état des ressources en maintenance. Si le paramètre est à TRUE, le statut n'est pas pris en compte dans le calcul du statut hérité.                                                 |
| resource.status.ignore-on-acknowledgement | true or false   | false             | Ne pas propager l'état des ressources acquittées. Si le paramètre est à TRUE, le statut n'est pas pris en compte dans le calcul du statut hérité.                            |
| resource.status.ignore-above-severity    | integer         | max value                 | Ne pas propager l'état des ressources dont la sévérité est strictement supérieure à cette valeur. Plus le numéro de la sévérité est bas, plus la ressource est critique. Par exemple, si ce paramètre est positionné à 1, seules les ressources avec une sévérité égale à 0 ou 1 seront prises en compte. Les sévérités dans Centreon prennent leur valeur entre 0 et 127*.        |

*Les ressources qui n'ont pas de sévérité configurée, sont considérées comme ayant une sévérité maximale. Ceci implique que si ce paramètre est positionné, quelle que soit sa valeur, les ressources n'ayant pas de sévérité dans Centreon ne seront jamais prises en compte dans les calculs des statuts hérités.

### Modifier les paramètres

- Vous pouvez configurer ces paramètres dans le fichier **/etc/centreon-map/map-config.properties**.

- Si vous ajoutez, supprimez ou mettez à jour un paramètre, veillez à redémarrer **centreon-map-engine**.
