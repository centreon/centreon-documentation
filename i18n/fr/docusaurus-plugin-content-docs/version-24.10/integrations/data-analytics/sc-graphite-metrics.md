---
id: sc-graphite-metrics
title: Graphite Metrics
description: "Envoyer les métriques de performance des hôtes et services Centreon vers Graphite, avec en option les min/max, les seuils, l'état et les tags de groupes d'hôtes"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Graphite Metrics vous permet d'envoyer des données depuis Centreon vers Graphite.

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. 
Il est également possible de les envoyer depuis un serveur distant ou un collecteur 
(par exemple si vous voulez éviter que le serveur central ne représente un point de 
défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector 
sur un collecteur ou un serveur distant dans l'infrastructure de votre client).
- Par défaut, le stream connector Graphite Metrics envoie des **métriques** issues des évènements Broker 
**[host_status](../../developer/developer-broker-mapping.md#host-status)** et
**[service_status](../../developer/developer-broker-mapping.md#service-status)**.
Ces métriques sont contenues dans le champ **perf_data** des évènements.
Le format des évènements est décrit **[ici](#format-des-évènements)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres 
dédiés vous permettent de [ne pas envoyer certains évènements](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-graphite).

## Installation

Faites l'installation sur le serveur qui enverra les données à Graphite (serveur central, 
serveur distant, collecteur).

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré. 
2. Exécutez la commande adaptée à votre système :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-graphite
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-graphite
```

</TabItem>

<TabItem value="Debian 12" label="Debian 12">

```shell
apt install centreon-stream-connector-graphite
```

</TabItem>
</Tabs>

## Configuration de votre équipement Graphite

Vous devrez paramétrer votre équipement Graphite pour qu'il puisse recevoir des données 
de la part de Centreon. Reportez-vous à la documentation de Graphite.

Assurez-vous que Graphite puisse recevoir les données envoyées par Centreon : les flux 
ne doivent pas être bloqués par la configuration de Graphite ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de 
Centreon Broker**. 
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les 
évènements seront envoyés par un serveur distant ou un collecteur). 
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez 
sur **Ajouter**. Un nouvel output apparaît dans la liste. 
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                    |
|-----------------|-----------------------------------------------------------|
| Name            | Graphite metrics                                          |
| Path            | /usr/share/centreon-broker/lua/graphite-metrics-apiv2.lua |
| Filter category | Neb                                                       |

5. Pour permettre à Centreon de se connecter à votre équipement Graphite, remplissez les 
paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add 
a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom     | Description         | Exemple de valeur     |
| ------ |---------|---------------------|-----------------------|
| string | address | Adresse de Graphite | `graphite.test.local` |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom       | Description                                               | Valeur par défaut                             |
| ------ |-----------|-----------------------------------------------------------|-----------------------------------------------|
| string | logfile   | Fichier dans lequel les logs sont écrits                  | /var/log/centreon-broker/graphite-metrics.log |
| number | log_level | Niveau de verbosité des logs : de 1 (erreurs) à 3 (debug) | 1                                             |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les 
données que vous voulez que Centreon envoie à Graphite](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-graphite).
8. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md). 
9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Graphite reçoit maintenant les données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir 
   [Commandes de test : tester le stream connector](#commandes-de-test--tester-le-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à Graphite

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) 
qui vous permettent de filtrer les données que vous enverrez à Graphite, de reformater 
les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation 
correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** 
en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. 
Par exemple, si vous ne voulez envoyer à Graphite que les évènements traités par un collecteur
nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector Graphite Metrics, les données suivantes surchargent toujours les 
valeurs par défaut. Il n'est donc pas nécessaire de les redéfinir dans l'interface.

| Type   | Nom                         | Valeur par défaut pour le stream connector Graphite |
| ------ | --------------------------- | --------------------------------------------------- |
| string | accepted_categories         | neb                                                 |
| string | accepted_elements           | host_status,service_status                          |
| number | max_buffer_size             | 1000                                                |
| number | hard_only                   | 0                                                   |
| number | enable_service_status_dedup | 0                                                   |
| number | enable_host_status_dedup    | 0                                                   |
| string | metric_name_regex           | `(no_forbidden_character)`                          |

* Le stream connector Graphite Metrics fournit également un jeu de paramètres dédiés qui vous 
permettent d'ajuster les données envoyées et la manière dont elles sont envoyées.

> Attention, les options listées dans le tableau ci-dessous qui ajoutent des données à une métrique sont toutes désactivées par défaut. Gardez à l'esprit que les activer augmentera le volume de données envoyé à Graphite, car elles vont soit :
> - Ajouter de nouveaux tags à une métrique
> - Générer jusqu'à 5 évènements de métrique supplémentaires par métrique, avec leurs tags (les groupes d'hôtes étant envoyés uniquement sous forme de tags)
> Les commandes de la section [Commandes de test](#commandes-de-test--tester-le-stream-connector) sont des exemples où chaque option est définie à 1 ou à "as_metric".

| Type   | Nom                 | Valeur par défaut | Description                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------ | ------------------- | ----------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| number | port                | 2003              | Port utilisé par Graphite                                                                                                                                                                                                                                                                                                                                                                                                  |
| string | username            | ""                | Username Graphite                                                                                                                                                                                                                                                                                                                                                                                                          |
| string | password            | ""                | Password Graphite                                                                                                                                                                                                                                                                                                                                                                                                          |
| string | add_min_max_mode    | ""                | Peut être défini à "as_tag" ou à "as_metric". Dans le premier cas, les valeurs min et max sont ajoutées sous forme de tags à la métrique. Dans le second cas, une métrique dédiée nommée `\<\metric_name\>\.min` est générée, avec un tag "type" défini à "metric_min". La valeur par défaut est vide, ce qui signifie que les valeurs min/max ne sont pas envoyées                                                        |
| string | add_thresholds_mode | ""                | Peut être défini à "as_tag" ou à "as_metric". Dans le premier cas, les valeurs des seuils warning et critical sont ajoutées sous forme de tags à la métrique. Dans le second cas, une métrique dédiée nommée `\<\metric_name\>\.warning_threshold` est générée, avec un tag "type" défini à "metric_warning_threshold". La valeur par défaut est vide, ce qui signifie que les seuils warning/critical ne sont pas envoyés |
| number | add_hostgroups      | 0                 | Désactiver (0) / Activer (1) l'ajout de la liste des groupes d'hôtes sous forme de tags dans l'évènement de métrique                                                                                                                                                                                                                                                                                                       |
| number | add_state_metric    | 0                 | Désactiver (0) / Activer (1) la création d'un nouvel évènement de métrique pour envoyer l'état de l'hôte ou du service (ok, warning...). Ce type d'évènement de métrique a un tag "type" défini à "metric_state"                                                                                                                                                                                                           |

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable 
d'envoyer plus d'un évènement lors de chaque appel à Graphite.

Pour utiliser cette fonctionnalité, vous devez ajouter le paramètre suivant à la configuration du stream connector.

| Type   | Nom             | Valeur           |
| ------ | --------------- |------------------|
| number | max_buffer_size | `supérieure à 1` |

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Évènement service_status

```txt
pl.max;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_max 100.0 1786629716
pl.warning_threshold;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_warning_threshold 40.0 1786629716
pl.critical_threshold;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_critical_threshold 80.0 1786629716
pl.state;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_state 1 1786629716
pl;host=google;poller=Central;service=loop_service;hostgroups=hg_1_1,hg_1;type=metric_value 0.0 1786629716
```

### Évènement host_status

```txt
pl.max;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_max 100.0 1786629579
pl.warning_threshold;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_warning_threshold 80.0 1786629579
pl.critical_threshold;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_critical_threshold 100.0 1786629579
pl.state;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_state 0 1786629579
pl;host=central;poller=Central;hostgroups=hg_1_1,hg_1;type=metric_value 0.0 1786629579
```

### Format d'évènement personnalisé

Ce stream connector n'est pas compatible avec le format d'événements personnalisé. 
Vous ne pouvez pas modifier le format de l'événement pour les stream connectors dédié aux métriques.


## Commandes de test : tester le stream connector

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à Graphite :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à 
Graphite (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
   echo -n 'pl.min,host=new-host-in-cache;poller=Central;hostgroups=;type=metric_min 0.0 1786629792
pl.max;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_max 100.0 1786629792
pl.warning_threshold;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_warning_threshold 80.0 1786629792
pl.critical_threshold;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_critical_threshold 100.0 1786629792
pl.state;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_state 0 1786629792
pl;host=new-host-in-cache;poller=Central;hostgroups=;type=metric_value 0.0 1786629792' | nc -z -v <graphite_address> <graphite_port>
```

> Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par les valeurs correctes. 
Par exemple, *\<graphite_address\>* peut devenir *graphite.test.local*.

3. Vérifiez que l'évènement a bien été reçu par Graphite.

## Informations complémentaires

Graphite est souvent associé à Grafana. 
Voici un exemple de requête Grafana que vous pouvez utiliser.

Voici les métriques Centreon envoyées à Graphite pour cet exemple 
(une pour la valeur de la métrique, une pour le seuil warning).

```txt
animals.count;host=central;poller=Central;metric_instance=ducks;metric_subinstances=mallard;service=passive;hostgroups=hg_1_1,hg_1;type=metric_value 62.0 1786627949
animals.count.warning_threshold;host=central;poller=Central;metric_instance=ducks;metric_subinstances=mallard;service=passive;hostgroups=hg_1_1,hg_1;type=metric_warning_threshold 80.0 1786627949
```

Vous pouvez utiliser les requêtes Grafana suivantes :

```txt
aliasByTags(seriesByTag('metric_instance=ducks', 'type=metric_value', 'metric_subinstances=mallard'), 'name', 'metric_instance', 'metric_subinstances', 'type')
aliasByTags(seriesByTag('metric_instance=ducks', 'type=metric_warning_threshold', 'metric_subinstances=mallard'), 'name', 'metric_instance', 'metric_subinstances', 'type')
```

Où :

- la fonction seriesByTag() et ses paramètres servent à filtrer la métrique voulue.
- la fonction aliasByTags() et ses paramètres servent à éviter d'afficher un nom de métrique inutilement long (par défaut, tous les tags sont affichés).
- la première requête sert à afficher l'évolution de la valeur de la métrique dans le temps.
- la seconde requête sert à afficher la courbe du seuil warning sur le graphique.

Le tableau ci-dessous liste tous les tags utilisables :

| Nom du tag                | Optionnel | Description                                                                                                                  |
| ------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| poller                    | non       | le nom du collecteur qui supervise l'hôte                                                                                    |
| host                      | non       | le nom de l'hôte                                                                                                             |
| type                      | non       | peut être `metric_[value\|state\| min\|max\|warning_threshold\|critical_threshold]`                                          |
| service                   | oui       | uniquement pour les évènements de services, le nom du service                                                                |
| hostgroups                | oui       | uniquement si le paramètre "add_hostgroups" est défini à "1" et qu'au moins un groupe d'hôtes est lié à l'hôte               |
| metric_instance           | oui       | uniquement si le format moderne de la métrique Centreon en contient une                                                      |
| metric_subinstances       | oui       | uniquement si le format moderne de la métrique Centreon en contient au moins une                                             |
| metric_min                | oui       | uniquement si le paramètre "add_min_max_mode" est défini à "as_tag" et qu'une valeur min est disponible                      |
| metric_max                | oui       | uniquement si le paramètre "add_min_max_mode" est défini à "as_tag" et qu'une valeur max est disponible                      |
| metric_warning_threshold  | oui       | uniquement si le paramètre "add_thresholds_mode" est défini à "as_tag" et qu'une valeur de seuil warning est disponible      |
| metric_critical_threshold | oui       | uniquement si le paramètre "add_thresholds_mode" est défini à "as_tag" et qu'une valeur de seuil critical est disponible     |