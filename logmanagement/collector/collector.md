---
id: collector
title: Configuring an OpenTelemetry collector
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## How is an OpenTelemetry Collector configured?

An OpenTelemetry Collector has three main components that are executed one after the other:

* **Receivers** ingest data. They accept logs in various formats and from various sources (e.g., OTLP, syslog, etc).
* **Processors** let you filter, transform, or enrich data before it leaves the collector.
* **Exporters** send the logs in OpenTelemetry format to Centreon Log Management. The corresponding exporter is configured using the general config.yaml file of the collector.

attributs custom
resource attributes

## Comment collecter des logs dans l'outil Centreon Log Management?

### Prérequis

* token ou Clé API??
* URL de l'endpoint nécessaire à la connexion d’OpenTelemetry Collector à notre plateforme de Log Management.

### Procédure

1. Installez OpenTelemetry Collector sur chaque équipement dont vous souhaitez recueillir les logs : utilisez les paquets **otelcol-contrib**. [en mode agent ou gateway - différence mode agent/mode gateway].

<Tabs groupId="os" queryString>
<TabItem value="Linux" label="Linux">

https://opentelemetry.io/docs/collector/installation/#linux

</TabItem>
<TabItem value="Windows" label="Windows">

https://opentelemetry.io/docs/collector/installation/#windows

</TabItem>
</Tabs>

2. En root, éditez le fichier **config.yaml** : spécifiez les paramètres globaux de collecte de logs propres à cet équipement (jeton - fourni par Centreon, adresse de l'endpoint où envoyer les logs, etc - donner plus de contexte, voir prérequis). Ceux-ci s'appliqueront à toutes les sources de données pour cet équipement. Utilisez le snippet fourni.
   * Sous Linux, le chemin du fichier est **/etc/otelcol-contrib/config.yaml**
   * Sous Windows, le chemin du fichier est **C:\Program Files\OpenTelemetry Collector\config.yaml** (save as admin)

```yaml
# Copyright 2025 Centreon.
# SPDX-License-Identifier: Apache-2.0
exporters:
  otlphttp/centreon:
    endpoint: "https://api.logs.mycentreon.net/v1/ingress/otlp"
    headers:
      "X-Api-Key": "<%TOKEN%>"
  debug:
    verbosity: detailed
processors:
  batch:
  resourcedetection:
    detectors: ["system"]
    system:
      resource_attributes:
        host.name:
          enabled: true
        os.name:
          enabled: true
        os.type:
          enabled: true
        os.version:
          enabled: true
```

> L'indentation des paramètres dans votre fichier yaml doit être identique à celle de l'exemple.

3. Paramétrez une source de logs pour chaque service désiré (syslog, apache, etc), sous forme de fichier yaml.
   1. Créez le répertoire suivant :
      * Linux : /etc/otelcol-contrib/conf.d/   ( mkdir /etc/otelcol-contrib/conf.d/ )
      * Windows : C:\Program Files\OpenTelemetry Collector\conf.d
   2. Dans ce répertoire, créez un fichier par source de logs. Par exemple : des fichiers **httpd-combined.yaml** et **httpd-error.yaml** contiendront respectivement la configuration pour Apache access log et Apache error log.
   1. Dans CLM, allez à la page ... et sélectionnez le type de service dont vous souhaitez récupérer les logs. Un extrait de code s'affiche. /// Récupérez le bon fichier sur GitHub : https://github.com/CentreonLabs/centreon-otel-col-log-template/tree/main.
   2. Sur l'équipement source, copiez-collez l'extrait de code dans le fichier correspondant. Sauvegardez le fichier.
   
   > L'indentation des paramètres dans votre fichier yaml doit être identique à celle de l'exemple.

4. Déclarez chacun des fichiers créés dans le fichier **/etc/otelcol-contrib/otelcol-contrib.conf** : dans le paramètre **OTELCOL_OPTIONS**, ajoutez une option **--config** pour chaque fichier, comme dans l'exemple suivant (veillez à conserver la déclaration du fichier de configuration globale **config.yaml**) :

```
OTELCOL_OPTIONS="--config=/etc/otelcol-contrib/config.yaml --config=/etc/otelcol-contrib/conf.d/httpd-combined.yaml --config=/etc/otelcol-contrib/conf.d/httpd-error.yaml"
```

4a. 

```
Get-WmiObject win32_service -filter "Name='otelcol-contrib'" | Invoke-WmiMethod -Name Change -ArgumentList @($null,$null,$null,$null,$null, '"C:\Program Files\OpenTelemetry Collector\otelcol-contrib.exe" --config "C:\Program Files\OpenTelemetry Collector\config.yaml" --config "C:\Program Files\OpenTelemetry Collector\conf.d\windows-event-log.yaml"')
```

5. Redémarrez le service OpenTelemetry Collector.
   * Linux : systemctl restart otelcol-contrib.service
   * Windows :
               net stop otelcol-contrib
               net start otelcol-contrib

comment je sais que ma conf est correcte? que ça marche bien?
journalctl -u otelcol-contrib.service
vérifiez que l'utilisateur **otelcol-contrib** a le droit de lire les fichiers nécessaires suivant le type de receiver.
exemple : 
ls -l /var/log/messages
id otelcol-contrib
usermod -aG root otelcol-contrib