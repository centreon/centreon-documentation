---
id: sc-logstash-events
title: Logstash Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Logstash Events vous permet d'envoyer des données depuis Centreon vers Logstash. Le stream connector traduit les données en un format compréhensible par Logstash, et les envoie à un input plugin HTTP dans Logstash.

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. Il est également possible de les envoyer depuis un serveur distant ou un collecteur (par exemple si vous voulez éviter que le serveur central ne représente un point de défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector Logstash Events envoie des évènements Broker [**host_status**](../../developer/developer-broker-mapping.md#host-status) et [**service_status**](../../developer/developer-broker-mapping.md#service-status). Le format des évènements est décrit **[ici](#format-des-évènements)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres dédiés vous permettent de [ne pas envoyer certains évènements](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-logstash).

## Installation

Faites l'installation sur le serveur qui enverra les données à Logstash (serveur central, serveur distant, collecteur).

1. Connectez-vous en tant que `root` sur le serveur Centreon central en utilisant votre client SSH préféré.

2. Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-logstash
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-logstash
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-logstash
```

</TabItem>
</Tabs>

## Configurer votre équipement Logstash

Vous devrez paramétrer votre équipement Logstash pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation Logstash.
Assurez-vous que Logstash puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration de Logstash ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                    |
| --------------- | -------------------------------------------------------- |
| Name            | Logstash events                                          |
| Path            | /usr/share/centreon-broker/lua/logstash-events-apiv2.lua |
| Filter category | Neb                                                      |

5. Pour permettre à Centreon de se connecter à votre équipement Logstash, remplissez les paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom             | Explication                           | Exemple            |
| ------ | --------------- | ------------------------------------- | ------------------------ |
| string | http_server_url | The URL of the Logstash HTTP plugin   | `https:/mylogstash.test` |
| number | port            | The port for your Logstash HTTP plugin | `8443`                   |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom      | Explication                                                                            | Valeur par défaut                                |
| ------ | --------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| string | username  | the username if your are using https with basic auth for your logstash http plugin             |                                              |
| string | password  | the password of your user if you are using https with basic auth for your logstash http plugin |                                              |
| string | logfile   | the file in which logs are written                                                             | /var/log/centreon-broker/logstash-events.log |
| number | log_level | logging level from 1 (errors) to 3 (debug)                                                     | 1                                            |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à Logstash](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-logstash).

8. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Logstash reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#commandes-curl--tester-le-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à Logstash

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) qui vous permettent de filtrer les données que vous enverrez à votre équipement Logstash, de reformater les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à Logstash que les évènements traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector Logstash Events, les données suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface).

| Type   | Nom                 | Valeur par défaut pour le stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement lors de chaque envoi au plugin HTTP de Logstash.

Pour utiliser cette fonctionnalité, vous devez ajouter le paramètre suivant à la configuration de votre stream connector.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `plus que un` |

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Évènement service_status

```json
{
  "event_timestamp": 1653434348,
  "hostname": "my-host",
  "output": "[CRITICAL] low power",
  "service": "my-service",
  "state": "CRITICAL",
  "title": "CRITICAL: my-host, my-service"
}
```

### Évènement host_status

```json
{
  "event_timestamp": 1653434348,
  "hostname": "my-host",
  "output": "[DOWN] server is down",
  "state": "DOWN",
  "title": "DOWN: my-host"
}
```

### Format d'évènement personnalisé

Ce stream connector vous permet de changer le format de l'évènement afin de s'adapter à vos besoins. Seule la partie **event** du json est personnalisable. Il vous permet également de prendre en charge des types d'évènement qui ne sont pas supportés par défaut, comme par exemple les évènements **ba_status**.

Pour utiliser cette fonctionnalité vous devez configurer un fichier json de format d'évènement et ajouter un nouveau paramètre au stream connector.

| Type   | Nom         | Valeur                                           |
| ------ | ----------- | ------------------------------------------------ |
| string | format_file | /etc/centreon-broker/logstash-events-format.json |

> Le fichier de format d'évènement doit être lisible par l'utilisateur **centreon-broker**.

POur en savoir plus sur les formats d'évènement personnalisés et les fichiers de templating, voir [cette documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation).

## Commandes Curl : tester le stream connector

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à Logstash :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à Logstash (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X PUT -H "accept: application/json" curl -X PUT 'http://<logstash_address>:<logstash_port>' -d '{"event_timestamp": 1653434348,"hostname": "my-host","output": "[DOWN] server is down","state": "DOWN","title": "DOWN: my-host"}'
```

> Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte. *\<logstash_port\>* pourra devenir *8080*.

3. Vérifiez que les données ont été reçues par Logstash.
