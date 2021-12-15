---
id: applications-jvm-jmx
title: JVM JMX
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Plugin Pack

### Objets supervisés

Le Pack JVM JMX collecte les données pour:
* Class
* Gc
* Memory
* System (cpu, load-average, fd)
* Threads

### Métriques collectées

<Tabs groupId="operating-systems">
<TabItem value="Classcount" label="Classcount">

| Metric name                | Description                      | Unit |
| :------------------------- | :------------------------------- | :--- |
| class.loaded.current.count | Current number of classes loaded |      |
| class.loaded.count         | Number of classes loaded         |      |
| class.unloaded.count       | Number of classes unloaded       |      |

</TabItem>
<TabItem value="Cpuload" label="Cpuload">

| Metric name                 | Description                  | Unit |
| :-------------------------- | :--------------------------  | :--- |
| system.cpu.load.percentage  | Cpu load of the machine      | %    |
| process.cpu.load.percentage | Cpu load of the jvm instance | %    |

</TabItem>
<TabItem value="Fdusage" label="Fdusage">

| Metric name                | Description                                   | Unit |
| :------------------------- | :-------------------------------------------- | :--- |
| fd.opened.usage.count      | Number of used file descriptors               |      |
| fd.opened.free.count       | Number of free file descriptors               |      |
| fd.opened.usage.percentage | Number of used file descriptors in percentage | %    |

</TabItem>
<TabItem value="Gcusage" label="Gcusage">

| Metric name                             | Description                              | Unit |
| :-------------------------------------- | :--------------------------------------- | :--- |
| gc.collection.time.elapsed.milliseconds | Accumulated collection elapsed time      | ms   |
| gc.collection.count                     | Number of collections that have occurred |      |

</TabItem>
<TabItem value="Loadaverage" label="Loadaverage">

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
<TabItem value="Memorydetailed" label="Memorydetailed">

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
| threads.started.count | Number of threads started          |      |
| threads.daemon.count  | Count of threads marked as daemons |      |

</TabItem>
</Tabs>

## Prérequis

Veuiller installer l'agent Jolokia sur votre JVM [Jolokia download page](https://jolokia.org/download).
Demander à votre administrateur de le déployer et de vous fournir l'URL.

## Installation

<Tabs groupId="operating-systems">
<TabItem value="online" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Jvm-Jmx
```

2. Sur l'interface Web de Centreon, installer le Pack *JVM JMX* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="offline" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Jvm-Jmx
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-applications-jvm-jmx
```

3. Sur l'interface Web de Centreon, installer le Pack *JVM JMX* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page **Configuration > Hôtes**.
* Appliquez le modèle *App-Jvm-JMX-custom* et configurez toutes les macros nécessaires:

| Mandatory   | Name                | Description                                                                |
| :---------- | :------------------ | :------------------------------------------------------------------------- |
| X           | JOLOKIAURL          | Jolokia URL (eg: http://jvm.centreon.com:8080/jolokia)                     |
|             | JOLOKIAUSERNAME     | Jolokia user name                                                          |
|             | JOLOKIAPASSWORD     | Jolokia password                                                           |
|             | JOLOKIAEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-username``` ou ```api-password``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_jvm_jmx.pl \
--plugin=apps::java::jvm::jmx::plugin \
--mode=class-count \
--url='http://jvm.centreon.com:8080/jolokia' \
--verbose
```

Exemple de sortie:
```
OK: Class current: 3009, loaded: 0, unloaded: 0 | 'class.loaded.current.count'=3009;;;0; 'class.loaded.count'=0;;;0; 'class.unloaded.count'=0;;;0;
```

La commande ci-dessus contrôle l'utilisation des classes de la JVM (```--mode=class-count```).
Le Plugin utilise l'URL (```--url='http://jvm.centreon.com:8080/jolokia'```) pour se connecter.

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_jvm_jmx.pl \
--plugin=apps::java::jvm::jmx::plugin \
--mode=class-count \
--help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins)
