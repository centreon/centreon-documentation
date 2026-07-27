---
id: licenses-faq
title: FAQ sur les licences
description: Problèmes courants avec les licences Centreon Cloud - licence invalide ou nombre maximum d'hôtes atteint
---

## Licence expirée ou limite d'hôtes dépassée?

Lorsqu'une licence expire ou que le nombre d'hôtes sur votre plateforme dépasse la limite autorisée par la licence, certains modules cessent de fonctionner correctement. Cette section explique comment identifier le problème et quel comportement anticiper.

### Comportement des modules lorsque la licence n'est pas valide

Lorsque votre licence est expirée ou que la limite d'hôtes est dépassée, les comportements suivants sont observés dans l'interface :

| Module | Comportement |
|---|---|
| Service Mapping (BAM) | Affiche le message : "Oops! License Invalid or Expired" |
| Vues graphiques (MAP) | Affiche une page blanche, ou le message : "Map server license is not valid, please contact Centreon support service" |
| Monitoring Connectors (EPP) | Affiche le message : "Your EPP License is not valid" |
| Auto Discovery (Host/Service Discovery) | Affiche le message : "Oops! License Invalid or Expired" |

> Lorsque le nombre d'hôtes de la licence est dépassé, il est toujours possible d'ajouter de nouveaux hôtes, mais ceux-ci ne pourront plus hériter des modèles d'hôtes issues des connecteurs de supervision.

### Résoudre le problème

Pour rétablir le fonctionnement normal des modules :

* Si votre licence est expirée : contactez l'équipe support Centreon pour la renouveler.
* Si la limite d'hôtes est dépassée, vous pouvez :
   * Supprimer les hôtes inutilisés (y compris ceux qui sont désactivés) afin de ramener le total sous la limite de la licence.
   * Mettre à niveau votre licence vers une limite d'hôtes supérieure en contactant votre représentant commercial.
