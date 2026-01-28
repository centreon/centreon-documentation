---
id: collector
title: Configurer un collecteur OpenTelemetry
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Comme expliqué dans [Qu'est-ce qu'OpenTelemetry et comment Centreon Log Management l'utilise-t-il ?](../getting-started/concepts.md#quest-ce-quopentelemetry-et-comment-centreon-log-management-lutilise-t-il-), vous devez installer un collecteur OpenTelemetry sur votre hôte pour pouvoir envoyer des logs à CLM.

## Comment configurer un collecteur OpenTelemetry ?

Un collecteur OpenTelemetry comporte trois composants principaux qui sont exécutés les uns après les autres :

* Les **récepteurs** (receivers) ingèrent les données. Ils acceptent les logs dans différents formats et provenant de différentes sources (par exemple, OTLP, syslog, etc.).
* Les **processeurs** (processors) vous permettent de filtrer, transformer ou enrichir les données avant qu'elles ne quittent le collecteur.
* Les **exporteurs** (exporters) envoient les logs au format OpenTelemetry vers Centreon Log Management. Les exporteurs sont configurés à l'aide du fichier général **config.yaml** du collecteur.

<!-- attributs custom
resource attributes -->

## Comment envoyer des logs à Centreon Log Management ?

### Prérequis

* Générez [un jeton pour authentifier l'hôte auprès de votre instance Log Management](../administration/tokens.md).
* L'endpoint requis pour connecter un collecteur OpenTelemetry à votre instance Log Management est `https://api.euwest1.obs.mycentreon.com/v1/ingress/otlp`.

### Étape 1 : Installez OpenTelemetry Collector sur votre hôte

Utilisez les paquets **otelcol-contrib** pour installer OpenTelemetry Collector sur chaque hôte à partir duquel vous souhaitez collecter des logs.

<!--[en mode agent ou gateway - différence mode agent/mode gateway].-->

<Tabs groupId="os" queryString>
<TabItem value="Linux" label="Linux">

https://opentelemetry.io/docs/collector/installation/#linux

</TabItem>
<TabItem value="Windows" label="Windows">

https://opentelemetry.io/docs/collector/installation/#windows

</TabItem>
</Tabs>

### Étape 2 : Définir les paramètres globaux du collecteur

1. En tant que **root**, modifiez le fichier **config.yaml** créé lors de l'installation du collecteur :

   <Tabs groupId="os" queryString>
   <TabItem value="Linux" label="Linux">

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

   > L'indentation des paramètres dans votre fichier YAML doit être identique à celle de l'exemple.

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

4. Sur l'hôte source, copiez et collez l'extrait de code dans le fichier correspondant. Enregistrez le fichier.
   
   > L'indentation des paramètres dans votre fichier YAML doit être identique à celle de l'exemple.

5. Dans **/etc/otelcol-contrib/otelcol-contrib.conf**, déclarez chacun des fichiers que vous avez créés : dans le paramètre **OTELCOL_OPTIONS**, ajoutez une option **--config** pour chaque fichier, comme dans l'exemple suivant (veillez à conserver la déclaration du fichier de configuration global **config.yaml**) :

   ```shell
   OTELCOL_OPTIONS="--config=/etc/otelcol-contrib/config.yaml --config=/etc/otelcol-contrib/conf.d/httpd-combined.yaml --config=/etc/otelcol-contrib/conf.d/httpd-error.yaml"
   ```

<!-- ```
Get-WmiObject win32_service -filter "Name='otelcol-contrib'" | Invoke-WmiMethod -Name Change -ArgumentList @($null,$null,$null,$null,$null, '"C:\Program Files\OpenTelemetry Collector\otelcol-contrib.exe" --config "C:\Program Files\OpenTelemetry Collector\config.yaml" --config "C:\Program Files\OpenTelemetry Collector\conf.d\windows-event-log.yaml"')
``` -->

5. Redémarrez le service OpenTelemetry Collector.

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
