---
id: monitoring
title: Comment mettre mon premier hôte en supervision ?
description: "Comment configurer et superviser votre premier hôte dans Centreon Cloud en le liant à un collecteur et à un modèle de connecteur de supervision"
---

Assurez-vous d'avoir lu la page [Bases de la supervision](concepts.md) avant de mettre votre première ressource en supervision.

## Superviser un hôte

> Nous recommandons d'installer l'[agent de supervision Centreon (Centreon Monitoring Agent, CMA)](../cma/cma.md), une brique logicielle qui supervise l'hôte sur lequel il est installé. Il collecte des métriques, calcule des statuts et les envoie à Centreon. Lorsque vous installez CMA sur un hôte, vous pouvez choisir de créer automatiquement cet hôte dans Centreon.

Pour superviser un hôte dans Centreon Cloud :

1. Pour créer l'hôte, allez à la page **Configuration > Hôtes > Hôtes** puis cliquez sur **Ajouter**.
2. Liez le nouvel hôte au collecteur qui doit le superviser.
3. Liez le nouvel hôte au modèle d'hôte correspondant fourni par un [Connecteur de supervision](../monitoring/pluginpacks.md).
4. [Exportez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md). L'hôte apparaîtra à la page **Supervision > Statut des ressources** sous peu. De là, vous pouvez suivre tout changement de statut.

## Voir aussi

Consultez nos [tutoriels](tutorials.md) pour vous aider à mettre en place votre supervision.

Les articles suivants peuvent également être intéressants (en anglais sur notre plateforme communautaire **The Watch**):

* [Analyze the response time of your websites with precision with Curl and Centreon](https://thewatch.centreon.com/product-how-to-21/analyze-the-response-time-of-your-websites-with-precision-with-curl-and-centreon-113)
* [Monitoring Microsoft Azure with Centreon](https://thewatch.centreon.com/product-how-to-21/monitoring-microsoft-azure-with-centreon-114)
* [Monitoring Microsoft Office 365 with Centreon](https://thewatch.centreon.com/product-how-to-21/monitoring-microsoft-office-365-with-centreon-120)
