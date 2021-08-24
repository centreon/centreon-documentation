---
id: about
title: Principes de base de la supervision
---

Voici quelques notions propres à Centreon :

* Un [**hôte**](basic-objects/hosts-create.html) (ou **host** en anglais) est tout équipement qui possède une adresse IP et que l'on souhaite superviser :
  un serveur physique, une machine virtuelle, une sonde de température, une caméra IP, une imprimante ou un espace de
  stockage, par exemple.
* Un **service** est un point de contrôle, ou indicateur, à superviser sur un hôte. Cela peut être le taux d'utilisation
  du CPU, la température, la détection de mouvement, le taux d'utilisation de la bande passante, les E/S disque, etc.
* Afin de mesurer chaque indicateur, on utilise des **sondes** de supervision (**plugin** en anglais) qui sont exécutées
  périodiquement par un moteur de collecte appelé **Centreon Engine**.
* Pour être exécutée, une sonde a besoin d'un ensemble d'arguments qui définissent par exemple à quel hôte se connecter
  ou via quel protocole. La sonde et ses arguments associés forment une [**commande**](basic-objects/commands.html) (**command** en anglais).
  
Ainsi, superviser un hôte avec Centreon consiste à configurer l'ensemble des commandes nécessaires à la mesure des
indicateurs désirés, puis à [déployer cette configuration](monitoring-servers/deploying-a-configuration.html) sur le moteur de collecte afin que ces commandes soient
exécutées périodiquement.

Pour simplifier la configuration on s'appuyera sur des modèles de supervision :

* Un [**modèle d'hôte**](basic-objects/hosts-templates.html) (**host template** en anglais) définit la configuration des indicateurs pour un type d'équipement donné.
* Il s'appuie sur des [**modèles de service**](basic-objects/services-templates.html) (**service templates**) qui définissent la configuration des commandes
  nécessaires à la mesure de ces indicateurs.
* Centreon fournit des [**Plugins Packs**](pluginpacks.html) téléchargeables à installer sur sa plateforme de supervision: chaque Plugin
  Pack regroupe modèles d'hôtes et de services pour configurer en quelques clics la supervision d'un équipement
  particulier.

![image](../assets/getting-started/host_service_command.png)