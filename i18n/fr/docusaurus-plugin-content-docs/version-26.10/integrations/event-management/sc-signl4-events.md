---
id: sc-signl4-events
title: Signl4 Events
description: Envoyer les événements d'hôtes et de services de Centreon vers Signl4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Signl4 Events vous permet d'envoyer des données depuis Centreon vers des instances Signl4.

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. Il est également possible de les envoyer depuis un 
serveur distant ou un collecteur (par exemple si vous voulez éviter que le serveur central ne représente un point de défaillance unique, 
ou bien si vous êtes un MSP et vous installez le stream connector sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector Signl4 Events envoie des évènements Broker [**host_status**](../../developer/developer-broker-mapping.md#host-status) 
et [**service_status**](../../developer/developer-broker-mapping.md#service-status). Le format des évènements est décrit **[ici](#format-des-évènements)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres dédiés vous permettent de [ne pas envoyer certains évènements](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-signl4).

## Installation

Faites l'installation sur le serveur qui enverra les données à Signl4 (serveur central, serveur distant, collecteur).

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré.

2. Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-signl4
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-signl4
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-signl4
```

</TabItem>
</Tabs>

## Configurer votre équipement Signl4

Vous devrez paramétrer votre équipement Signl4 pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation Signl4.
Assurez-vous que Signl4 puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration de Signl4 ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                 |
| --------------- |--------------------------------------------------------|
| Name            | Signl4 events                                          |
| Path            | /usr/share/centreon-broker/lua/signl4-events-apiv2.lua |
| Filter category | Neb                                                    |

5. Pour permettre à Centreon de se connecter à votre équipement Signl4, remplissez les paramètres obligatoires suivants. 
La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom         | Explication  | Exemple de valeur |
| ------ |-------------|--------------|-------------------|
| string | team_secret | Team secret  | x3x[..]2c         |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom                | Explication                                               | Valeur par défaut                          |
|--------|--------------------|-----------------------------------------------------------|--------------------------------------------|
| string | logfile            | Fichier dans lequel les logs sont écrits                  | /var/log/centreon-broker/signl4-events.log |
| number | log_level          | Niveau de verbosité des logs : de 1 (erreurs) à 3 (debug) | 1                                          |
| string | server_address     | URL de l'instance Signl4                  | `https://connect.signl4.com`               |
| string | x_s4_source_system | Système source à afficher dans Signl4                     | Centreon                                   |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à Signl4](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-signl4).

8. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

Signl4 reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#commandes-curl--tester-le-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à Signl4

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) 
qui vous permettent de filtrer les données que vous enverrez à votre équipement Signl4, de reformatter les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter 
un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à Signl4 que les évènmenes traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector Signl4 Events, les données suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface).

| Type   | Nom                 | Valeur par défaut pour le stream connector |
| ------ |---------------------|--------------------------------------------|
| string | accepted_categories | neb                                        |
| string | accepted_elements   | host_status,service_status                 |

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement lors de chaque appel à l'API REST Signl4.

Pour utiliser cette fonctionnalité, vous devez ajouter le paramètre suivant à la configuration de votre stream connector.

| Type   | Nom            | Valeur           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Évènement service_status

```json
{
  "EventType": "SERVICE",
  "Date": "Fri Nov 26 11:54:29 CET 2021",
  "Host": "Highway",
  "Service": "to hell!",
  "Message": "acdc song",
  "Status": "CRITICAL",
  "Title": "Highway/to hell! is CRITICAL",
  "X-S4-SourceSystem": "Centreon",
  "X-S4-ExternalID": "HOSTALERT_666",
  "X-S4-Status": "new"
}
```

### Évènement host_status

```json
{
  "EventType": "HOST",
  "Date": "Fri Nov 26 11:54:29 CET 2021",
  "Host": "Highway",
  "Message": "to hell!",
  "Status": "DOWN",
  "Title": "Highway is DOWN",
  "X-S4-SourceSystem": "Centreon",
  "X-S4-ExternalID": "HOSTALERT_666",
  "X-S4-Status": "new"
}
```

### Format d'évènement personnalisé

Ce stream connector vous permet de modifier le format de l'événement en fonction de vos besoins. Seule la partie **event** du json est personnalisable. Il vous permet également de gérer des types d'événements qui ne sont pas gérés par défaut, tels que les événements **ba_status**.

Pour utiliser cette fonctionnalité, vous devez configurer un fichier json de format d'événement et ajouter un nouveau paramètre de connecteur de flux.

| Type   | Nom         | Valeur                                         |
| ------ |-------------| ---------------------------------------------- |
| string | format_file | /etc/centreon-broker/signl4-events-format.json |

> Le fichier de configuration du format des événements doit être lisible par l'utilisateur **centreon-broker**.

Pour en savoir plus sur les formats d'événements personnalisés et les fichiers modèles, consultez **[cette page](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Commandes Curl : tester le stream connector

### Envoyer des évènements

Vous pouvez déclencher un signal avec la commande suivante :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à Signl4 (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X POST -H 'content-type: application/json' 'https://connect.signl4.com/webhook/<team_secret>' -d '{"EventType": "HOST","Date": "Fri Nov 26 11:54:29 CET 2021","Host": "Highway","Message": "to hell!","Status": "DOWN", "Title": "Highway is DOWN", "X-S4-SourceSystem": "Centreon","X-S4-ExternalID": "HOSTALERT_666","X-S4-Status": "new"}'
```

  > Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte. Par exemple, `team_secret` pourra être remplacé par *x3x[..]2c*.

3. Vérifiez que l'évènement a bien été reçu par Signl4.

Vous pouvez notifier la fin de l'alerte associée au signal avec la commande suivante :

```shell
curl -X POST -H 'content-type: application/json' 'https://connect.signl4.com/webhook/<team_secret>' -d '{"EventType": "HOST","Date": "Fri Nov 26 12:00:00 CET 2021","Host": "Highway","Message": "to hell!","Status": "OK", "Title": "Highway is UP", "X-S4-SourceSystem": "Centreon","X-S4-ExternalID": "HOSTALERT_666","X-S4-Status": "resolved"}'
```

  > Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte. Par exemple, `team_secret` pourra être remplacé par *x3x[..]2c*.