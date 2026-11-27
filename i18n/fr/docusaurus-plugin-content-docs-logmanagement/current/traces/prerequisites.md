---
id: traces-prerequisites
title: Prérequis pour les traces
description: "Instrumentez vos applications avec les SDK OpenTelemetry, puis configurez le Collecteur OpenTelemetry pour envoyer les traces à Log Management."
---

## Émettre des traces depuis vos applications

Pour pouvoir explorer des traces dans Log Management, vos applications doivent d'abord être instrumentées pour en émettre. OpenTelemetry fournit des [SDK pour la plupart des langages et frameworks](https://opentelemetry.io/docs/languages/).

## Envoyer les traces à Log Management

Vous devez également configurer votre Collecteur OpenTelemetry pour qu'il reçoive les traces de vos applications et les exporte vers Centreon Log Management.

1. [Créez un jeton](../administration/tokens.md#créer-un-jeton) pour vous authentifier auprès de votre plateforme Log Management, ou réutilisez celui que votre collecteur utilise déjà pour les logs.
2. Modifiez le fichier **config.yaml** de votre collecteur (voir [l'emplacement de ce fichier](../collector/collector.md#étape-2--définir-les-paramètres-globaux-du-collecteur)).
3. Dans ce fichier, définissez un récepteur OTLP, l'exporter Centreon et un pipeline **traces** :

   * Dans **endpoint**, saisissez `https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp`.
   * Dans **X-Api-Key**, saisissez votre jeton.

   ```yaml
   receivers:
     otlp:
       protocols:
         grpc:
           endpoint: 0.0.0.0:4317
         http:
           endpoint: 0.0.0.0:4318
   processors:
     batch:
   exporters:
     otlphttp/centreon:
       endpoint: "https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp"
       headers:
         "X-Api-Key": "mytoken"
   service:
     pipelines:
       traces:
         receivers: [otlp]
         processors: [batch]
         exporters: [otlphttp/centreon]
   ```

   Si votre collecteur envoie déjà des logs à Log Management, l'exporter **otlphttp/centreon** est déjà défini : ajoutez seulement le récepteur OTLP et le pipeline **traces**.

   > L'indentation des paramètres dans votre fichier YAML doit être identique à celle de l'exemple. Chaque niveau d'indentation correspond à deux espaces.

4. Configurez le SDK OpenTelemetry de vos applications pour qu'il envoie les traces au collecteur, par exemple en définissant la variable d'environnement `OTEL_EXPORTER_OTLP_ENDPOINT` à `http://<adresse_du_collecteur>:4318`.
5. Redémarrez le service OpenTelemetry Collector (voir [les commandes de redémarrage](../collector/collector.md#étape-3--configurez-chaque-source-de-logs-pour-votre-hôte)).
