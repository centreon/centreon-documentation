---
id: sc-kafka-events
title: Kafka Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Kafka Events vous permet d'envoyer des données depuis Centreon vers des instances Kafka.

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. Il est également possible de les envoyer 
depuis un serveur distant ou un collecteur (par exemple si vous voulez éviter que le serveur central ne représente un 
point de défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector sur un collecteur ou un 
serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector Kafka Events envoie des évènements Broker [**host_status**](../../developer/developer-broker-mapping.md#host-status), 
 [**service_status**](../../developer/developer-broker-mapping.md#service-status) et [**ba_status**](../../developer/developer-broker-mapping.md#ba-status-event). 
Le format des évènements est décrit **[ici](#format-des-évènements)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres dédiés vous permettent de 
[ne pas envoyer certains évènements](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-kafka).

## Installation

Faites l'installation sur le serveur qui enverra les données à Kafka (serveur central, serveur distant, collecteur).

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré.

2. Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-kafka
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-kafka
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-kafka
```

</TabItem>
</Tabs>

## Configurer votre équipement Kafka

Vous devrez paramétrer votre équipement Kafka pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation Kafka.
Assurez-vous que Kafka puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration de Kafka ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                |
| --------------- |-------------------------------------------------------|
| Name            | Kafka events                                          |
| Path            | /usr/share/centreon-broker/lua/kafka-events-apiv2.lua |
| Filter category | Neb,Bam                                               |

5. Pour permettre à Centreon de se connecter à votre équipement Kafka, remplissez les paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom     | Explication                                                                      | Exemple de valeur                           |
| ------ |---------|----------------------------------------------------------------------------------|---------------------------------------------|
| string | topic   | Le topic dans lequel les événements vont être écrits                             | Monitoring                                  |
| string | brokers | Liste des brokers séparés par des virgules, qui sont prêt à recevoir les données | broker_address1:port1,broker_address2:port2 |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom       | Explication                                               | Valeur par défaut                         |
|--------|-----------|-----------------------------------------------------------|-------------------------------------------|
| string | logfile   | Fichier dans lequel les logs sont écrits                  | /var/log/centreon-broker/kafka-events.log |
| number | log_level | Niveau de verbosité des logs : de 1 (erreurs) à 3 (debug) | 1                                         |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à Kafka](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-kafka).

En plus des paramètres des stream connectors, il y a quelques paramètres disponibles grâce à la bibliothèque librdkafka. 
Ils sont tous documentés dans la **[documentation officielle](https://github.com/edenhill/librdkafka/blob/v0.11.4/CONFIGURATION.md)** de librdkafka. 
Pour les utiliser, il suffit d'ajouter le préfixe **_sc_kafka_**.

Dans cette façon, le paramètre **sasl.mechanism** devient **_sc_kafka_sasl.mechanism** dans la configuration de votre broker.


8. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

Kafka reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#commandes-curl--tester-le-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à Kafka

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) 
qui vous permettent de filtrer les données que vous enverrez à votre équipement Kafka, de reformatter les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, 
afin d'ajouter un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à Kafka que les évènements traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector Kafka Events, les données suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface).

| Type   | Nom                 | Valeur par défaut pour le stream connector |
| ------ |---------------------|--------------------------------------------|
| string | accepted_categories | neb                                        |
| string | accepted_elements   | host_status,service_status                 |

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement lors de chaque appel à l'API REST Kafka.

Pour utiliser cette fonctionnalité, vous devez ajouter le paramètre suivant à la configuration de votre stream connector.

| Type   | Nom            | Valeur           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Évènement service_status

```json
{
  "host": "my_host",
  "service": "my_service",
  "output": "CRITICAL: the wind broke my umbrella",
  "state": "CRITICAL"
}
```

### Évènement host_status

```json
{
  "host": "my_host",
  "output": "DOWN: putting gas in my eletric car was not a good idea",
  "state": "DOWN"
}
```

### Évènement ba_status

```json
{
  "ba": "my_ba",
  "state": "CRITICAL"
}
```

### Format d'évènement personnalisé

Ce stream connector vous permet de modifier le format de l'événement en fonction de vos besoins. 
Seule la partie **event** du json est personnalisable. Il vous permet également de gérer des types d'événements qui 
ne sont pas gérés par défaut, tels que les événements **ba_status**.

Pour utiliser cette fonctionnalité, vous devez configurer un fichier json de format d'événement et ajouter un nouveau paramètre de connecteur de flux.

| Type   | Nom         | Valeur                                        |
| ------ |-------------|-----------------------------------------------|
| string | format_file | /etc/centreon-broker/kafka-events-format.json |

> Le fichier de configuration du format des événements doit être lisible par l'utilisateur **centreon-broker**.

Pour en savoir plus sur les formats d'événements personnalisés et les fichiers modèles, consultez **[cette page](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Commandes curl : tester le stream connector

L'envoi de données à Kafka peut être assez compliqué en raison de tous les paramètres impliqués (soit du stream connector lui-même, soit de la bibliothèque Kafka).

Pour faciliter les choses, un script de test de connexion en Lua est disponible.

Pour l'installer, vous devez suivre la **[procédure d'installation](#installation)** et ensuite exécuter la commande suivante :

```shell
wget -O /tmp/kafka_test_connection.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/modules/tests/kafka_test_connexion.lua 
```

**Ouvrez** le script et **configurez** les options Kafka que vous voulez utiliser à partir de la librdkafka 
(**[documentation officielle](https://github.com/edenhill/librdkafka/blob/v0.11.4/CONFIGURATION.md)**).
Vous n'avez pas besoin d'ajouter le préfixe *_sc_kafka_* cette fois-ci, mettez simplement le paramètre entre les crochets **config[]**.

Il y a déjà des configurations mises en place à titre d'exemple pour vous guider.

Si cela ne fonctionne pas, vous devriez avoir un message d'erreur comme ci-dessous (avec le message d'erreur approprié). 
Il est fortement conseillé d'avoir accès à Kafka pour vérifier si un message est envoyé depuis le script de test.

```shell
%3|1622459610.760|FAIL|rdkafka#producer-1| [thrd:sasl_plaintext://cps-kafkan:9093/bootstrap]: sasl_plaintext://cps-kafkan:9093/bootstrap: Failed to resolve 'cps-kafkan:9093': Name or service not known
```