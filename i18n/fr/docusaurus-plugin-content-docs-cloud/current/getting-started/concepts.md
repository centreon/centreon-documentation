---
id: concepts
title: Bases de la supervision
---

## Que supervise Centreon?

Centreon vous permet de superviser des ressources. Les ressources peuvent être des hôtes ou des services :

* Un **hôte** (ou host en anglais) est tout équipement qui possède une adresse IP et que l'on souhaite superviser : un serveur physique, une machine virtuelle, une sonde de température, une caméra IP, une imprimante ou un espace de stockage, par exemple.
* Un **service** est un point de contrôle, ou indicateur, à superviser sur un hôte. Cela peut être le taux d'utilisation du CPU, la température, la détection de mouvement, le taux d'utilisation de la bande passante, les E/S disque, etc.

## Comment fonctionne la supervision?

Afin de mesurer chaque indicateur, on utilise des sondes de supervision (plugin en anglais) qui sont exécutées périodiquement par un moteur de collecte appelé Centreon Engine.

## Comment voir les ressources en cours de supervision?

Une fois les hôtes et services mis en supervision, ceux-ci ont un statut dans Centreon (**OK**, **Alerte**, **Critique**...). Vous pouvez suivre leur évolution à la page **Statut des ressources**.

En cas de problème (statut non-OK/non-DISPONIBLE), les [contacts](../users/users.md) pourront recevoir des [notifications](../alerts-notifications/notif-configuration.md), suivant des périodes de temps définies.

## Quelles fonctionnalités m'aident à superviser des ressources?

Avec Centreon, la supervision est rendue facile par les éléments suivants :

* les modèles d'hôtes et de services, qui permettent de définir des valeurs par défaut afin d’accélérer la création de ces objets.

* les [Plugin Packs](../monitoring/pluginpacks.md), qui fournissent des modèles d'hôtes et de services prêts à l'emploi. Ceux-ci simplifient énormément la configuration des hôtes et des services : par exemple, il suffit d'appliquer les modèles issus d'un Plugin Pack à un hôte afin de mettre celui-ci en supervision.

* la fonctionnalité d'autodécouverte d'hôtes et de services qui permet d'obtenir une liste des nouveaux hôtes ou services et de les ajouter automatiquement à la liste des ressources supervisées.
