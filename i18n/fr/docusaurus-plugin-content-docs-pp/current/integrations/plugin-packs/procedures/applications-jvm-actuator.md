---
id: applications-jvm-actuator
title: JVM Actuator
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Plugin Pack

### Objets supervisés

Le Pack collecte les données pour:
* Class
* Memory
* System (cpu, load-average, fd)
* Threads

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Class-count" label="Class-count">

| Metric name                | Description                      | Unit |
| :------------------------- | :------------------------------- | :--- |
| class.loaded.current.count | Current number of classes loaded |      |
| class.unloaded.count       | Number of classes unloaded       |      |

</TabItem>
<TabItem value="Cpu-load" label="Cpu-load">

| Metric name                 | Description                  | Unit |
| :-------------------------- | :--------------------------  | :--- |
| system.cpu.load.percentage  | Cpu load of the machine      | %    |
| process.cpu.load.percentage | Cpu load of the jvm instance | %    |

</TabItem>
<TabItem value="Fd-usage" label="Fd-usage">

| Metric name                | Description                                   | Unit |
| :------------------------- | :-------------------------------------------- | :--- |
| fd.opened.usage.count      | Number of used file descriptors               |      |
| fd.opened.free.count       | Number of free file descriptors               |      |
| fd.opened.usage.percentage | Number of used file descriptors in percentage | %    |

</TabItem>
<TabItem value="Load-average" label="Load-average">

| Metric name          | Description                             | Unit |
| :------------------- | :-------------------------------------- | :--- |
| system.load.1m.count | System load average for the last minute |      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                | Description                           | Unit |
| :------------------------- | :------------------------------------ | :--- |
| memory.heap.usage.bytes    | Current heap memory usage             | B    |
| memory.nonheap.usage.bytes | Current memory usage outside the heap | B    |

</TabItem>
<TabItem value="Memory-detailed" label="Memory-detailed">

| Metric name                  | Description                    | Unit |
| :--------------------------- | :----------------------------- | :--- |
| memory.eden.usage.bytes      | Current eden memory usage      | B    |
| memory.tenured.usage.bytes   | Current tenured memory usage   | B    |
| memory.survivor.usage.bytes  | Current survivor memory usage  | B    |
| memory.permanent.usage.bytes | Current permanent memory usage | B    |
| memory.code.usage.bytes      | Current code memory usage      | B    |

</TabItem>
<TabItem value="Threads" label="Threads">

| Metric name           | Description                        | Unit |
| :-------------------- | :--------------------------------- | :--- |
| threads.active.count  | Number of active threads           |      |
| threads.daemon.count  | Count of threads marked as daemons |      |

</TabItem>
</Tabs>

## Prérequis

Veuiller installer le module Spring Boot Actuator: https://docs.spring.io/spring-boot/docs/current/reference/html/actuator
Demander à votre administrateur de le déployer et de vous fournir l'adresse.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Jvm-Actuator
```

2. Sur l'interface Web de Centreon, installer le Pack *JVM Actuator* depuis la page **Configuration > Plugin Packs > Manager**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Jvm-Actuator
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-applications-jvm-actuator
```

3. Sur l'interface Web de Centreon, installer le Pack *JVM Actuator* depuis la page **Configuration > Plugin Packs > Manager**

</TabItem>
</Tabs>

## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**.
* Appliquez le modèle *App-Jvm-Actuator-custom* et configurez toutes les macros nécessaires:

| Mandatory | Name                    | Description                                                                |
| :-------- | :---------------------- | :------------------------------------------------------------------------- |
| X         | ACTUATORCUSTOMMODE      | Custom mode to get metrics (Default: ```standard```)                       |
| X         | ACTUATORAPIPORT         | Port used (Default: 8080)                                                  |
| X         | ACTUATORAPIPROTO        | Specify https if needed (Default: ```http```)                              |
| X         | ACTUATORAPIURLPATH      | Api endpoint (Default: ```/actuator```)                                    |
|           | ACTUATORAPIUSERNAME     | Api username                                                               |
|           | ACTUATORAPIPASSWORD     | Api password                                                               |
|           | ACTUATORAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

To monitor *centreon-map* JVM, please use following macro values:

| Name                    | Value                           |
| :---------------------- | :------------------------------ |
| ACTUATORCUSTOMMODE      | ```centreonmap```               |
| ACTUATORAPIURLPATH      | ```/centreon-studio/api/beta``` |
| ACTUATORAPIUSERNAME     | Api username must be set        |
| ACTUATORAPIPASSWORD     | Api password must be set        |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-username``` ou ```api-password``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
    --plugin=apps::java::jvm::actuator::plugin \
    --custommode=standard \
    --mode=class-count \
    --hostname='10.30.2.79' \
    --port='8080' \
    --proto='http' \
    --url-path='/actuator'
    --verbose
```

Exemple de sortie:
```
OK: Class current: 6486, unloaded: 38 | 'class.loaded.current.count'=6486;;;0; 'class.unloaded.count'=38;;;0;
```

La commande ci-dessus contrôle l'utilisation des classes de la JVM (```--mode=class-count```).
Le Plugin se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _8080_ (```--port='8080'```) utilisant le protocol _http_ (```--proto='http'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
    --plugin=apps::java::jvm::actuator::plugin \
    --custommode=standard \
    --mode=class-count \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.md)
