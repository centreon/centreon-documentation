---
id: using-connectors
title: Utiliser des connecteurs de supervision
description: "Les étapes pour appliquer le modèle d'un connecteur de supervision Centreon à un hôte et commencer à le superviser."
---

## Prérequis

[Installez le connecteur de supervision dont vous avez besoin](./installing-connectors.md).

## Effectuer des contrôles

1. Créez l'hôte ou le service : allez à la page **Configuration > Hôtes > Hôtes**, puis cliquez sur **Ajouter**.
2. Dans le champ **Modèle(s)**, choisissez le modèle du connecteur de supervision voulu.
3. [Personnalisez le comportement du connecteur](./integrations/plugin-packs/getting-started/how-to-guides/plugin-customization.md) : adaptez les seuils et les macros.
4. [Déployez la configuration](#déployer-la-configuration).
5. [Vérifiez que tout fonctionne](./connectors-test.md). Si ce n'est pas le cas, [identifiez le problème](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md).

## Effectuer une découverte d'hôtes ou de services

Plutôt que de créer les hôtes et les services un par un, vous pouvez laisser Centreon les trouver pour vous. La découverte nécessite le module **Auto Discovery**, qui est une extension de Centreon (voir [Installer le module Auto Discovery](/docs/monitoring/discovery/installation)).

Les connecteurs de supervision fournissent ce dont la découverte a besoin :

* Les **fournisseurs de découverte**, utilisés par la découverte d'hôtes. Un fournisseur sait trouver des hôtes dans un environnement donné, comme un sous-réseau scanné en SNMP, un vCenter VMware ou un abonnement Azure.
* Les **règles de découverte**, utilisées par la découverte de services. Une règle sait trouver les éléments à superviser sur un hôte existant, comme les interfaces réseau, les disques ou les systèmes de fichiers.

Si l'option **Installation automatique des plugins** est réglée sur **ON** à la page **Configuration > Connecteurs > Connecteurs de supervision**, le plugin de découverte est installé automatiquement sur le collecteur au moment de la découverte.

### Découvrir des hôtes

1. Installez le connecteur de supervision qui fournit le fournisseur de découverte dont vous avez besoin. Sa procédure de supervision indique s'il inclut un fournisseur et quels paramètres celui-ci demande.
2. Allez à la page **Configuration > Hôtes > Découverte** et cliquez sur **+AJOUTER**.
3. Dans l'assistant, choisissez le fournisseur, saisissez les paramètres d'accès (identifiants, sous-réseau, etc.), sélectionnez le collecteur qui exécutera la découverte, puis définissez les mappers qui transforment les résultats en hôtes. En général, les mappers appliquent un modèle d'hôte fourni par le même connecteur de supervision.
4. Exécutez la tâche, puis analysez les résultats et enregistrez les hôtes à superviser (ou laissez la tâche les créer automatiquement).
5. [Déployez la configuration](#déployer-la-configuration) des collecteurs qui supervisent les nouveaux hôtes.

Voir [Découvrir des hôtes automatiquement](/docs/monitoring/discovery/hosts-discovery) pour la procédure complète, et [Parcours d'une tâche de découverte d'hôtes](./workflow-host-discovery.md) pour un exemple complet, du début à la fin.

### Découvrir des services

1. Installez le connecteur de supervision qui fournit les règles de découverte dont vous avez besoin. Ses règles apparaissent à la page **Configuration > Services > Règles**.
2. Vérifiez que l'hôte utilise un modèle d'hôte lié à la règle. Une règle s'exécute uniquement sur les hôtes qui utilisent l'un de ses modèles d'hôtes.
3. Exécutez la règle :
   * Manuellement, pour un hôte : allez à la page **Configuration > Services > Scan**, sélectionnez l'hôte et la commande de découverte, cliquez sur **Scan**, puis sélectionnez les éléments à superviser et cliquez sur **Sauvegarder**.
   * Automatiquement : activez la règle. Elle s'exécute alors de façon planifiée sur tous les hôtes qui lui sont liés.
4. [Déployez la configuration](#déployer-la-configuration) des collecteurs qui supervisent ces hôtes.

Voir [Découvrir des services automatiquement](/docs/monitoring/discovery/services-discovery) pour la procédure complète, et [Parcours d'une règle de découverte de services](./workflow-service-discovery.md) pour un exemple complet, du début à la fin.

## Déployer la configuration

Les hôtes et les services que vous créez ou modifiez, manuellement ou par découverte, ne sont supervisés qu'une fois la configuration déployée sur les collecteurs qui les supervisent :

1. Allez à la page **Configuration > Collecteurs > Collecteurs**. Les changements de configuration sont signalés dans la colonne **Changement de configuration**.
2. Sélectionnez les collecteurs concernés et cliquez sur **Exporter la configuration**.
3. Cochez **Générer les fichiers de configuration**, **Lancer le débogage du moteur de supervision (-v)**, **Déplacer les fichiers générés** et **Redémarrer l'ordonnanceur**, avec la méthode **Recharger**.
4. Cliquez sur **Exporter**, puis lisez le journal pour vérifier qu'aucune erreur n'a été renvoyée.

Si l'option **Installation automatique des plugins** est réglée sur **ON**, le déploiement de la configuration installe aussi les plugins dont le collecteur a besoin pour les modèles qu'il utilise.

Une fois la configuration déployée, le collecteur commence à exécuter les contrôles. Voir [Déployer une configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration) pour toutes les options d'export.
