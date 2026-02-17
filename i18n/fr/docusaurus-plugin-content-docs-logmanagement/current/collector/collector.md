---
id: collector
title: Configurer un collecteur OpenTelemetry
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Comme expliqué dans [Qu'est-ce qu'OpenTelemetry et comment Centreon Log Management l'utilise-t-il ?](../getting-started/concepts.md#quest-ce-quopentelemetry-et-comment-centreon-log-management-lutilise-t-il-), vous devez installer un collecteur OpenTelemetry sur votre hôte pour pouvoir envoyer des logs à CLM.

## Comment configurer un collecteur OpenTelemetry ?

Un collecteur OpenTelemetry comporte trois composants principaux qui sont exécutés les uns après les autres :

* Les **récepteurs** (receivers) lisent les données à partir de fichiers ou reçoivent des données à partir d'un flux. Ils acceptent les logs dans différents formats et provenant de différentes sources (par exemple, OTLP, syslog, etc.).
* Les **processeurs** (processors) vous permettent de filtrer, transformer ou enrichir les données avant qu'elles ne quittent le collecteur.
* Les **exporteurs** (exporters) envoient les logs au format OpenTelemetry vers Centreon Log Management.

<!-- attributs custom
resource attributes -->

## Comment envoyer des logs à Centreon Log Management ?

### Prérequis

* Générez [un jeton pour authentifier l'hôte auprès de votre instance Log Management](../administration/tokens.md).
* L'endpoint requis pour connecter un collecteur OpenTelemetry à votre instance Log Management est `https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp`.

> CLM peut traiter des batch de logs d'une taille de 5 MiB maximum. Au-delà, vous recevrez une erreur 413. (Si besoin, utilisez [le paramètre **sending_queue.sizer.bytes** de votre exporteur](https://github.com/open-telemetry/opentelemetry-collector/tree/main/exporter/otlphttpexporter) pour adapter la taille de vos batchs.)

### Étape 1 : Installez OpenTelemetry Collector sur votre hôte

Utilisez les paquets **otelcol-contrib** pour installer OpenTelemetry Collector sur chaque hôte à partir duquel vous souhaitez collecter des logs.

<!--[en mode agent ou gateway - différence mode agent/mode gateway].-->

<Tabs groupId="os" queryString>
<TabItem value="Linux" label="Linux">

<Tabs groupId="distrib" queryString>
<TabItem value="EL" label="EL">

```shell
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.145.0/otelcol-contrib_0.145.0_linux_amd64.rpm 
```

</TabItem>
<TabItem value="Debian" label="Debian">

```shell
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.145.0/otelcol-contrib_0.145.0_linux_amd64.deb 
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Windows" label="Windows">

```shell
https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.145.0/otelcol-contrib_0.145.0_windows_x64.msi 
```

</TabItem>
</Tabs>
### Étape 2 : Définir les paramètres globaux du collecteur

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
   * Dans **X-Api-Key**, entrez le [jeton requis pour vous authentifier auprès de votre instance CLM](../administration/tokens.md).

   Exemple:

   ```yaml
   # Copyright 2025 Centreon.
   # SPDX-License-Identifier: Apache-2.0
   exporters:
     otlphttp/centreon:
       endpoint: "https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp"
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

   > L'indentation des paramètres dans votre fichier YAML doit être identique à celle de l'exemple. Les indentations sont de deux espaces pour chaque niveau.

### Étape 3 : Configurez chaque source de logs pour votre hôte

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

3. Récupérez sur GitHub le fichier d'exemple correspondant à la source de logs souhaitée : https://github.com/CentreonLabs/centreon-otel-col-log-template/tree/main.

4. Sur l'hôte source, copiez et collez l'extrait de code dans le fichier correspondant. Enregistrez le fichier. Si vous utilisez plusieurs sources de logs pour un collecteur, ne définissez le pipeline qu'une seule fois (dans l'un des fichiers). Le pipeline doit mentionner tous vos receivers. Dans notre exemple :

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

## Dépannage

Vérifiez l'état de votre collecteur sur l'hôte dont vous souhaitez recevoir les logs :

 ```shell
journalctl -u otelcol-contrib.service
```

Si vous ne recevez pas les journaux attendus dans CLM, vérifiez que l'utilisateur **otelcol-contrib** dispose des droits suffisants pour lire les fichiers requis, en fonction du type de receiver. Exemple :

```shell
ls -l /var/log/messages
id otelcol-contrib
usermod -aG root otelcol-contrib
```
