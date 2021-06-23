---
id: introduction
title: Introduction
---

> Centreon Auto Discovery est une **extension** Centreon qui nécessite une clé
> de licence valide. Pour acheter une clé et récupérer les référentiels
> nécessaires, contactez [Centreon](mailto:sales@centreon.com).

Le module de découverte automatique permet d'obtenir une liste des nouveaux hôtes ou services et, si vous le désirez, 
de les créer automatiquement dans Centreon. La découverte se fait
via des fournisseurs de recherche et des règles de découverte, qui sont inclus dans des [Plugin Packs](../pluginpacks.html).

- La découverte peut être planifiée et exécutée automatiquement, régulièrement.
- Vous pouvez également détecter que des ressources ne
sont plus disponibles, afin d'éventuellement les désactiver dans la configuration.
- Les contacts peuvent être associés à une règle de découverte de services pour être avertis en cas de modification de la configuration.

## Fonctionnement

1. Paramétrez une tâche de découverte pour chaque type d'hôte, en utilisant le bon [Plugin Pack](../pluginpacks.html). Par exemple, une tâche pour découvrir les noeuds ESX et une autre pour découvrir les machines virtuelles dans un cluster VMware. 

    Pour les services, paramétrez des règles de découverte : par exemple, une pour découvrir les 
interfaces réseau sur un serveur Linux, et une autre pour découvrir les volumes de disque.

2. La tâche ou la règle de découverte sont effectuées et obtiennent une liste des nouveaux hôtes ou services correspondant au Plugin Pack.

3. Selon votre paramétrage, vous choisissez dans la liste les ressources à ajouter à votre Centreon, ou bien elles sont ajoutées automatiquement. Ces ressources peuvent ensuite être configurées dans Centreon 
à l’aide de modèles d’hôte ou de modèles de service.
