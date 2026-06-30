---
id: collector
title: Configuration complète de collecteur (sources de logs multiples)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

La section [Configurations simples de collecteur](opentelemetry-collector.md) fournit un fichier de configuration permettant de mettre en place la collecte des logs à partir d'une machine Windows. La procédure ci-dessous est plus adaptée aux cas où plusieurs types de journaux sont collectés sur le même hôte (sous Windows comme sous Linux).

> **Gagnez du temps avec les modèles Centreon**
>
> Centreon met à disposition [des modèles de configuration prêts à l'emploi pour les sources de logs les plus courantes](https://github.com/CentreonLabs/centreon-otel-col-log-template/tree/main). Utilisez-les comme point de départ pour configurer rapidement votre collecteur.

Si vous rencontrez des problèmes, consultez la page [Dépanner votre installation](collector-troubleshooting.md).

<!-- attributs custom
resource attributes -->

## Prérequis

* Générez [un jeton pour authentifier l'hôte auprès de votre plateforme Centreon Log Management](../administration/tokens.md).
* L'endpoint requis pour connecter un collecteur OpenTelemetry à votre plateforme Centreon Log Management est `https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp/v1/logs`.

> Log Management peut traiter des batch de logs d'une taille de 5 MiB maximum. Au-delà, vous recevrez une erreur 413. (Si besoin, utilisez [le paramètre **sending_queue.sizer.bytes** de votre exporteur](https://github.com/open-telemetry/opentelemetry-collector/tree/main/exporter/otlphttpexporter) pour adapter la taille de vos batchs.)

## Étape 1 : Installez OpenTelemetry Collector sur votre hôte

Utilisez les paquets **otelcol-contrib** pour installer OpenTelemetry Collector sur chaque hôte à partir duquel vous souhaitez collecter des logs.

<Tabs groupId="os" queryString>
<TabItem value="Linux" label="Linux">

<Tabs groupId="distrib" queryString>
<TabItem value="EL" label="EL">

```shell
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.145.0/otelcol-contrib_0.145.0_linux_amd64.rpm
dnf install ./otelcol-contrib_0.145.0_linux_amd64.rpm
```

</TabItem>
<TabItem value="Debian" label="Debian">

```shell
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.145.0/otelcol-contrib_0.145.0_linux_amd64.deb
apt install ./otelcol-contrib_0.145.0_linux_amd64.deb
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Windows" label="Windows">

```shell
https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.147.0/otelcol-contrib_0.147.0_windows_x64.msi 
```

</TabItem>
</Tabs>

## Étape 2 : Définir les paramètres globaux du collecteur

1. Modifiez le fichier **config.yaml** créé lors de l'installation du collecteur :

   <Tabs groupId="os" queryString>
   <TabItem value="Linux" label="Linux">

   Vous devez être connecté en tant que **root**.

   ```text
   /etc/otelcol-contrib/config.yaml
   ```

   </TabItem>
   <TabItem value="Windows" label="Windows">

   ```text
   C:\Program Files\OpenTelemetry Collector\config.yaml
   ```

   Assurez-vous d'enregistrer le fichier en tant qu'administrateur.

   </TabItem>
   </Tabs>

2. Dans ce fichier, entrez les paramètres globaux de collecte des logs spécifiques à cet hôte. Ceux-ci s'appliqueront à toutes les sources de logs pour cet hôte.

   * Dans **endpoint**, entrez `https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp`.
   * Dans **X-Api-Key**, entrez le [jeton requis pour vous authentifier auprès de votre plateforme Log Management](../administration/tokens.md).

   Exemple:

   ```yaml
   # Copyright 2025 Centreon.
   # SPDX-License-Identifier: Apache-2.0
   exporters:
     otlphttp/centreon:
       endpoint: "https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp"
       headers:
         "X-Api-Key": "mytoken"
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

   > L'indentation des paramètres dans votre fichier YAML doit être identique à celle de l'exemple. Les indentations sont de deux espaces pour chaque niveau.

## Étape 3 : Configurez chaque source de logs pour votre hôte

Configurez une source de logs pour chaque service souhaité (syslog, apache, etc.) sous la forme d'un fichier YAML.

1. Créez le répertoire suivant :

   <Tabs groupId="os" queryString>
   <TabItem value="Linux" label="Linux">

   ```shell
   mkdir /etc/otelcol-contrib/conf.d/
   ```

   </TabItem>
   <TabItem value="Windows" label="Windows">

   ```shell
   C:\Program Files\OpenTelemetry Collector\conf.d
   ```

   </TabItem>
   </Tabs>

2. Dans ce répertoire, créez un fichier par source de logs. Par exemple : les fichiers **httpd-combined.yaml** et **httpd-error.yaml** contiendront respectivement la configuration du journal d'accès Apache et du journal d'erreurs Apache.

3. [Récupérez sur GitHub](https://github.com/CentreonLabs/centreon-otel-col-log-template/tree/main) le fichier d'exemple correspondant à la source de logs souhaitée.

4. Sur l'hôte source, copiez et collez l'extrait de code dans le fichier correspondant, puis adaptez-le en fonction de votre environnement et de votre OS. Enregistrez le fichier. Si vous utilisez plusieurs sources de logs pour un collecteur, ne définissez le pipeline qu'une seule fois (dans l'un des fichiers). Le pipeline doit mentionner tous vos receivers. Dans notre exemple :

    ```shell
    service:
      pipelines:
        logs:
          receivers: [filelog/httpd-combined,filelog/apache-error]
    ```

   > L'indentation des paramètres dans votre fichier YAML doit être identique à celle de l'exemple. Les indentations sont de deux espaces pour chaque niveau.

5. Déclarez chacun des fichiers que vous avez créés : déclarez une option **--config** pour chaque fichier, comme dans l'exemple suivant (veillez à conserver la déclaration du fichier de configuration global **config.yaml**) :

   <Tabs groupId="os" queryString>
   <TabItem value="Linux" label="Linux">

   Dans **/etc/otelcol-contrib/otelcol-contrib.conf**, ajoutez la ligne suivante (adaptez-la avec vos noms de fichiers réels):

   ```shell
   OTELCOL_OPTIONS="--config=/etc/otelcol-contrib/config.yaml --config=/etc/otelcol-contrib/conf.d/httpd-combined.yaml --config=/etc/otelcol-contrib/conf.d/httpd-error.yaml"
   ```

   </TabItem>
   <TabItem value="Windows" label="Windows">

   Dans un terminal PowerShell, exécutez la commande suivante (adaptez-la avec vos noms de fichiers réels):

   ```shell
   Get-WmiObject win32_service -filter "Name='otelcol-contrib'" | Invoke-WmiMethod -Name Change -ArgumentList @($null,$null,$null,$null,$null, '"C:\Program Files\OpenTelemetry Collector\otelcol-contrib.exe" --config "C:\Program Files\OpenTelemetry Collector\config.yaml" --config "C:\Program Files\OpenTelemetry Collector\conf.d\windows-event-log.yaml"')
   ```

   </TabItem>
   </Tabs>

6. Redémarrez le service OpenTelemetry Collector.

   <Tabs groupId="os" queryString>
   <TabItem value="Linux" label="Linux">

   ```shell
   systemctl restart otelcol-contrib.service
   ```

   </TabItem>
   <TabItem value="Windows" label="Windows">

   ```shell
   net stop otelcol-contrib
   net start otelcol-contrib
   ```

   </TabItem>
   </Tabs>
