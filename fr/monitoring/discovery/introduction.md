---
id: introduction
title: Introduction
---

> Centreon Auto Discovery est une **extension** Centreon qui nécessite une clé
> de licence valide. Pour en acheter une clé et récupérer les référentiels
> nécessaires, contactez [Centreon](mailto:sales@centreon.com).

Centreon Auto Discovery est un complément de la fonctionnalité Enterprise Plugin
Pack.

Le module de découverte automatique utilise les plugins pour obtenir une liste
des nouvelles ressources à surveiller : nouveaux hôtes ou nouveaux services. Ces
ressources peuvent ensuite être configurées dans Centreon à l’aide de modèles
d’hôte ou de modèle de service.

Les règles de découverte d’hôte et les règles de découverte de service indiquent
à Centreon comment se connecter à un équipement et obtenir la liste des
ressources pouvant être surveillées. Ces règles de découverte sont incluses dans
les Plugin Packs.

Par exemple, les noeuds ESX et les machines virtuelles peuvent être
automatiquement découverts dans un cluster VMware. Ou interfaces réseau et
volumes de disque sur un serveur Linux.

Pour tous les hôtes ou services pour lesquels des règles de découverte sont
disponibles, l’interface utilisateur de configuration de Centreon propose de se
connecter à l’équipement et d’extraire une liste des ressources disponibles avec
leur modèle associé, prêt à être configuré dans Centreon.

Ce mécanisme de découverte peut également être planifié et exécuté
automatiquement. Les nouvelles ressources découvertes automatiquement peuvent
éventuellement être configurées automatiquement dans Centreon.

Le même mécanisme de découverte peut s’appliquer à des ressources qui ne
seraient plus disponibles. Elees peuvent être répertoriées et éventuellement
désactivées dans la configuration.

Les contacts peuvent être associés à une règle de découverte pour être avertis
en cas de modification de la configuration.
