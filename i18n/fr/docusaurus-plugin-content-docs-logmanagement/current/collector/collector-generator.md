---
id: collector-generator
title: Générer un fichier de configuration de collecteur OTel
---

La configuration d'un collecteur OpenTelemetry peut être complexe. Log Management fournit une interface dans laquelle vous pouvez sélectionner des snippets de configuration pour vos sources de données, les modifier pour les adapter à votre environnement, et télécharger le résultat prêt à l'emploi. D'autres sources de données seront ajoutées au fil du temps. Si votre source de données ne figure pas dans la liste, utilisez plutôt la [procédure de configuration manuelle](collector.md).

Le fichier généré contient des receivers, des processors et des exporters, comme expliqué dans [Fonctionnement d'un collecteur OpenTelemetry](opentelemetry-collector.md).

## Étape 1 : Configurer les receivers

1. Allez à la page **OTel collector configurator**, puis cliquez sur **Create**.
2. Dans la fenêtre qui s'ouvre, sélectionnez le pack correspondant à la source de données souhaitée. (Pour le moment, un pack contient un seul snippet) :
   * Utilisez la barre de recherche en haut de la fenêtre, ou
   * Cliquez sur **Add pack** dans la section **Configure packs**.
   Une fois le pack sélectionné, un résumé apparaît dans la section **Configure packs**, et le panneau **Preview configuration YAML** est mis à jour : votre source de données est ajoutée à la section **receivers** du fichier de configuration.
3. Vérifiez que le fichier de log affiché dans la section **Configure packs** pour votre source de données est correct.

## Étape 2 : Configurer les processors

1. Activez et configurez les paramètres souhaités dans la section **Configure processors**. Ceux-ci seront ajoutés à la section **processors** du fichier de configuration et s'appliqueront à toutes les sources de données.
2. Vérifiez que tout est correct dans le panneau **Preview configuration YAML**.
   * Un exporter pour Centreon Log Management est déjà pré-configuré (vous devrez le compléter à l'[étape 3](#étape-3--renseigner-le-jeton-dauthentification-pour-centreon-log-management)).
   * Le pipeline adapté à vos receivers, processor et exporter est généré automatiquement.

## Étape 3 : Renseigner le jeton d'authentification pour Centreon Log Management

1. Copiez ou téléchargez votre fichier de configuration à l'aide des boutons en bas de la fenêtre.
2. Avant de déployer votre fichier de configuration, remplacez la valeur d'exemple dans le champ **X-Api-Key** par votre [jeton d'authentification](../administration/tokens.md) Log Management.

## Étape 4 : Déployer votre fichier de configuration

Déployez votre fichier de configuration sur le serveur depuis lequel vous souhaitez collecter des logs.
