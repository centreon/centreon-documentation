---
id: about
title: Principes de base de la supervision
---

Voici quelques notions propres à Centreon :

* Un [**hôte**](basic-objects/hosts-create) (ou **host** en anglais) est tout équipement qui possède une adresse IP et que l'on souhaite superviser :
un serveur physique, une machine virtuelle, une sonde de température, une caméra IP, une imprimante ou un espace de
stockage, par exemple.
* Un [**service**](basic-objects/services-create) est un point de contrôle, ou indicateur, à superviser sur un hôte. Cela peut être le taux d'utilisation
du CPU, la température, la détection de mouvement, le taux d'utilisation de la bande passante, les E/S disque, etc.
* Afin de mesurer chaque indicateur, on utilise des **sondes** de supervision (**plugin** en anglais) qui sont exécutées
périodiquement par un moteur de collecte appelé **Centreon Engine**.
* Pour être exécutée, une sonde a besoin d'un ensemble d'arguments qui définissent par exemple à quel hôte se connecter
ou via quel protocole. La sonde et ses arguments associés forment une [**commande**](basic-objects/commands) (**command** en anglais).

Ainsi, superviser un hôte avec Centreon consiste à configurer l'ensemble des commandes nécessaires à la mesure des
indicateurs désirés, puis à [déployer cette configuration](monitoring-servers/deploying-a-configuration) sur le moteur de collecte afin que ces commandes soient
exécutées périodiquement.

Une fois les hôtes et services mis en supervision, ceux-ci ont un [statut](../alerts-notifications/concepts) dans Centreon (**OK**, **Alerte**, **Critique**...). Vous pouvez suivre leur évolution à la page [Statut des ressources](../alerts-notifications/resources-status).

En cas de problème (statut non-OK/non-DISPONIBLE), les [contacts](basic-objects/contacts) pourront recevoir des [notifications](../alerts-notifications/notif-configuration), suivant des [périodes de temps](basic-objects/timeperiods) définies.

Avec Centreon, la supervision est rendue facile par les éléments suivants :

- les [modèles d'hôtes](basic-objects/hosts-templates) et de [services](basic-objects/services-templates), qui permettent de définir des valeurs par défaut afin d’accélérer la création de ces objets.

- les [Plugin Packs](pluginpacks), qui fournissent des modèles d'hôtes et de services prêts à l'emploi. Ceux-ci simplifient énormément la configuration des hôtes et des services : par exemple, il suffit d'appliquer les modèles issus d'un Plugin Pack à un hôte afin de mettre celui-ci en supervision.

- la [fonctionnalité d'autodécouverte d'hôte et de services](discovery/introduction) qui permet d'obtenir une liste des nouveaux hôtes ou services et de les ajouter automatiquement à la liste des ressources supervisées.