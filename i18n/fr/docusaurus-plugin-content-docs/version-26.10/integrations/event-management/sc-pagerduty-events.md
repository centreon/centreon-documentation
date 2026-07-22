---
id: sc-pagerduty-events
title: PagerDuty Events
description: Envoyer les événements d'hôtes et de services de Centreon vers PagerDuty
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector PagerDuty Events vous permet d'envoyer des données depuis Centreon vers des instances PagerDuty.

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. 
Il est également possible de les envoyer depuis un serveur distant ou un collecteur (par exemple si vous voulez éviter 
que le serveur central ne représente un point de défaillance unique, ou bien si vous êtes un MSP et vous installez le 
stream connector sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector PagerDuty Events envoie des évènements Broker [**host_status**](../../developer/developer-broker-mapping.md#host-status) 
et [**service_status**](../../developer/developer-broker-mapping.md#service-status). Le format des évènements est décrit **[ici](#format-des-évènements)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres dédiés vous permettent de 
[ne pas envoyer certains évènements](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-pagerduty).

## Installation

Faites l'installation sur le serveur qui enverra les données à PagerDuty (serveur central, serveur distant, collecteur).

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré.

2. Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-pagerduty
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-pagerduty
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-pagerduty
```

</TabItem>
</Tabs>

## Configurer votre équipement PagerDuty

Vous devrez paramétrer votre équipement PagerDuty pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation PagerDuty.
Assurez-vous que PagerDuty puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration de PagerDuty ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                    |
| --------------- |-----------------------------------------------------------|
| Name            | PagerDuty events                                          |
| Path            | /usr/share/centreon-broker/lua/pagerduty-events-apiv2.lua |
| Filter category | Neb                                                       |

5. Pour permettre à Centreon de se connecter à votre équipement PagerDuty, remplissez les paramètres obligatoires suivants. 
La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom             | Explication                     | Exemple de valeur |
| ------ |-----------------|---------------------------------|-------------------|
| string | pdy_routing_key | The event api key for pagerduty | xxxxxxxxxxxxx     |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom              | Explication                                               | Valeur par défaut                             |
|--------|------------------|-----------------------------------------------------------|-----------------------------------------------|
| string | logfile          | Fichier dans lequel les logs sont écrits                  | /var/log/centreon-broker/pagerduty-events.log |
| number | log_level        | Niveau de verbosité des logs : de 1 (erreurs) à 3 (debug) | 1                                             |
| string | pdy_centreon_url | URL de votre serveur Centreon                             | `http://set.pdy_centreon_url.parameter`       |
| string | http_server_url  | URL de l'endpoint event de PagerDuty                      | `https://events.pagerduty.com/v2/enqueue`     |
| string | client           | Le client PagerDuty                                       | Centreon Stream Connector                     |
| string | pdy_source       | Source de l'event                                         | `nil`                                         |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à PagerDuty](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-pagerduty).

8. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

PagerDuty reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#commandes-curl--tester-le-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à PagerDuty

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) qui vous permettent de filtrer les données que vous enverrez à votre équipement PagerDuty, de reformatter les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à PagerDuty que les évènements traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector PagerDuty Events, les données suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface).

| Type   | Nom                 | Valeur par défaut pour le stream connector |
| ------ |---------------------|--------------------------------------------|
| string | accepted_categories | neb                                        |
| string | accepted_elements   | host_status,service_status                 |

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement lors de chaque appel à l'API REST PagerDuty.

Pour utiliser cette fonctionnalité, vous devez ajouter le paramètre suivant à la configuration de votre stream connector.

| Type   | Nom            | Valeur           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Évènement service_status

```json
{
   "payload": {
      "summary": "my_host/my_service: it is on fire",
      "timestamp": "2021-09-24T14:37:22.000",
      "severity": "critical",
      "source": "my_host",
      "component": "my_service",
      "group": "hg_1, hg_2",
      "class": "service",
      "custom_details": {
         "Hostseverity": 5,
         "Serviceseverity": 3,
         "Hosgroups": "hg_1, hg_2",
         "Servicegroups": "sg_1, sg_2"
      },
      "routing_key": "dzajzd321dzad412",
      "event_action": "trigger",
      "dedup_key": "my_host_my_service",
      "client": "Centreon Stream Connector",
      "client_url": "https://my_super_centreon.bzh",
      "links": [
         {
            "href": "https://my_super_centreon.bzh/centreon/main.php?p=20202&o=h&host_name=my_host",
            "text": "Link to Centreon host summary"
         }
      ]
   }
}
```

### Évènement host_status

```json
{
   "payload": {
      "summary": "my_host: it is on fire",
      "timestamp": "2021-09-24T14:37:22.000",
      "severity": "critical",
      "source": "my_host",
      "component": "my_host",
      "group": "hg_1, hg_2",
      "class": "host",
      "custom_details": {
         "Hostseverity": 5,
         "Hosgroups": "hg_1, hg_2",
      },
      "routing_key": "dzajzd321dzad412",
      "event_action": "trigger",
      "dedup_key": "my_host_H",
      "client": "Centreon Stream Connector",
      "client_url": "https://my_super_centreon.bzh",
      "links": [
         {
            "href": "https://my_super_centreon.bzh/centreon/main.php?p=20202&o=h&host_name=my_host",
            "text": "Link to Centreon host summary"
         }
      ]
   }
}
```

### Format d'évènement personnalisé

Ce stream connector vous permet de modifier le format de l'événement en fonction de vos besoins. Seule la partie **event** du json est personnalisable. 
Il vous permet également de gérer des types d'événements qui ne sont pas gérés par défaut, tels que les événements **ba_status**.

Pour utiliser cette fonctionnalité, vous devez configurer un fichier json de format d'événement et ajouter un nouveau paramètre de connecteur de flux.

| Type   | Nom         | Valeur                                            |
| ------ |-------------|---------------------------------------------------|
| string | format_file | /etc/centreon-broker/pagerduty-events-format.json |

> Le fichier de configuration de format d'événements doit être lisible par l'utilisateur **centreon-broker**.

Pour en savoir plus sur les formats d'événements personnalisés et les fichiers modèles, consultez **[cette page](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Commandes Curl : tester le stream connector

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à PagerDuty :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à PagerDuty (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X POST -H 'content-type: application/json' 'https://events.pagerduty.com/v2/enqueue' -d '{"dedup_key":<my_host>_H","payload":{"component":<my_host>","group":"<hg_1>","summary":"winter is coming","class":"host","severity":"info","timestamp":"2021-09-24T14:37:22.000","custom_details":{"Hostgroups":"<hg_1>","Hostseverity":2},"source":<my_host>"},"event_action":"trigger","client":"Centreon Stream Connector","routing_key":"dzada32193dzbe1fz51xz","links":[{"href":"<centreon_url>","text":"Link to Centreon host summary"}]}'
```

Vous devez remplacer tous les *`<xxxx>`* à l'intérieur de la commande ci-dessus par leur valeur appropriée. \<my_host\>* peut devenir *linuxServerA*.

3. Vérifiez que l'évènement a bien été reçu par PagerDuty.