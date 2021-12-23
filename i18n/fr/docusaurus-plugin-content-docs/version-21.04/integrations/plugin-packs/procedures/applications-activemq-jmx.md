---
id: applications-activemq-jmx
title: ActiveMQ JMX
---

## Vue d'ensemble

Apache ActiveMQ est un serveur de messagerie multi protocole Open Source développé en Java.

## Contenu du Plugin-Pack

### Éléments supervisés

* Brokers (queue / topic)

### Règles de découverte

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                     | Description                |
| :---------------------------- | :------------------------- |
| App-Activemq-Jmx-Brokers-Name |  Discover ActiveMQ Broker  |

<!--DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Brokers-->

| Metric name                                    | Description                                         |
| :--------------------------------------------- | :-------------------------------------------------- |
| Broker.store.usage.percentage                  | Broker store percentage usage. Unit: %              |
| Broker.temporary.usage.percentage              | Broker temporary store percentage usage. Unit: %    |
| Broker.memory.usage.percentage                 | Broker memory usage. Unit: %                        |
| Broker.queue.average.enqueue.time.milliseconds | Broker average enqueue time (queue). Unit: ms       |
| Broker.queue.consumers.connected.count         | Broker queue connected consumers. Unit: count       |
| Broker.queue.producers.connected.count         | Broker queue connected producers . Unit: count      |
| Broker.queue.memory.usage.percentage           | Broker queue memory usage. Unit: %                  |
| Broker.queue.size.count                        | Broker queue size. Unit:count                       |
| Broker.queue.messages.enqueued.count           | Broker enqueued messages. Unit: count               |
| Broker.queue.messages.dequeue.count            | Broker dequeued messages. Unit: count               |
| Broker.queue.messages.expired.count            | Broker queue expired messages. Unit: count          |
| Broker.queue.messages.inflighted.count         | Broker queue inflighted messages. Unit: count       |
| Broker.queue.messages.size.average.bytes       | Broker queue average messages size. Unit: bytes     |
| Broker.topic.average.enqueue.time.milliseconds | Broker average queue time per topic. Unit: ms       |
| Broker.topic.consumers.connected.count         | Broker connected consumers per topic. Unit: count   |
| Broker.topic.producers.connected.count         | Broker connected producers per topic. Unit: count   |
| Broker.topic.memory.usage.percentage           | Broker memory percentage usage per topic. Unit: %   |
| Broker.topic.size.count                        | Broker topic size. Unit:count                       |
| Broker.topic.messages.enqueued.count           | Broker enqueued messages per topic. Unit: count     |
| Broker.topic.messages.dequeue.count            | Broker messages deuque per topic. Unit: count       |
| Broker.topic.messages.expired.count            | Broker expired messages per topic. Unit: count      |
| Broker.topic.messages.inflighted.count         | Broker inflighted messages per topic. Unit: count   |
| Broker.topic.messages.size.average.bytes       | Broker average messages size per topic. Unit: bytes |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration ActiveMQ

ActiveMQ embarque un agent Jolokia par défaut à l'adresse : http://localhost:8161/api/jolokia
Vous trouverez plus d'informations sur la documentation officielle d'ActiveMQ : https://activemq.apache.org/rest

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources ActiveMQ via JMX:

```bash
yum install centreon-plugin-Applications-ActiveMQ-Jmx
```

2. Dans l'interface Web de Centreon, installer le Plugin-Pack *ActiveMQ JMX* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources ActiveMQ via JMX:

```bash
yum install centreon-plugin-Applications-ActiveMQ-Jmx
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
centreon-pack-applications-activemq-jmx.noarch
```

<!--END_DOCUSAURUS_CODE_TABS-->

3. Dans l'interface Web de Centreon, installer le Plugin-Pack *ActiveMQ JMX* depuis la page "Configuration > Plugin Packs > Manager"

## Configuration

* Depuis l'interface Web de Centreon, ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes".
* Appliquez le modèle "App-Activemq-JMX-custom" et configurez toutes les macros nécessaires:

| Mandatory   | Name                | Description                                                                |
| :---------- | :------------------ | :------------------------------------------------------------------------- |
| X           | JOLOKIAURL          | Jolokia URL (ex: http://myactivemq.int.centreon.com:8161/api/jolokia)      |
| X           | JOLOKIAUSERNAME     | Jolokia user name                                                          |
| X           | JOLOKIAPASSWORD     | Jolokia password                                                           |
|             | JOLOKIAEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

**Utilisez le module discovery pour ajouter vos *Brokers* à votre supervision**
**Allez dans le menu *Configuration > Services > Scan* pour exécuter une découverte**

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_activemq_jmx.pl \
  --plugin apps::mq::activemq::jmx::plugin \
  --mode Brokers \
  --url='http://myactivemq.int.centreon.com:8161/api/jolokia' \
  --username='admin' \
  --password='admin' \
```

Cette commande supervise les Brokers d'un serveur ActiveMQ via l'url *http://myactivemq.int.centreon.com:8161/api/jolokia* (```--url='http://myactivemq.int.centreon.com:8161/api/jolokia'```) à l'aide de l'utilisateur admin et de son password (```--username='admin' --password='admin'```).

La commande retourne le message de sortie ci-dessous:

```bash
OK: Broker 'localhost' store usage: 0.00 %, temporary usage: 0.00 %, memory usage: 0.00 % - queue 'foo.bar' average time messages remained enqueued: 0.000 ms, consumers connected: 0, producers connected: 0, memory usage: 0.00 %, queue size: 1, messages enqueued: 0, messages dequeued: 0, messages expired: 0, messages in-flighted: 0, average messages size: 1.09 KB - All topics are ok | 'localhost#Broker.store.usage.percentage'=0.00%;;;0;100 'localhost#Broker.temporary.usage.percentage'=0.00%;;;0;100 'localhost#Broker.memory.usage.percentage'=0.00%;;;0;100
```

Des seuils peuvent être positionnés à l'aide des options --warning-* et --critical-* sur les métriques.

Pour chaque mode, les options disponibles peuvent être consultées en ajoutant l'option --help à la commande :

```bash
/usr/lib/centreon/plugins/centreon_activemq_jmx.pl \
  --plugin apps::mq::activemq::jmx::plugin \
  --mode Brokers \
  --help
```

Vous pouvez afficher tous les modes disponibles à l'aide de la commande suivante :

```bash
/usr/lib/centreon/plugins/centreon_activemq_jmx.pl \
  --plugin apps::mq::activemq::jmx::plugin \
  --list-mode
```

### J'obtiens le message d'erreur suivant:

#### UNKNOWN: protocol issue: Error while fetching http://myactivemq.int.centreon.com:8161/url/path

Ce message d'erreur indique le plugin n'a pas réussi requêter l'API. Vérifiez que les credentials fournis sont les bons.

#### UNKNOWN: JMX Request: Cant get a single value.

Ce message d'erreur indique le plugin n'a pas réussi à récupérer des valeurs via l'API. Vérifiez le chemin de l'url (path).

#### UNKNOWN: protocol issue: java.lang.Exception : Origin null is not allowed to call this agent

Jolokia par défaut dans ActiveMQ n'autorise pas le Cross-Origin Resource Sharing (CORS).
Il faudra désactiver cette vérification en éditant le fichier jolokia-access.xml et retirer la balise `<strict-checking/>` :

```xml
<cors>
 <strict-checking/>
</cors>
```

Puis redémarrer ActiveMQ
