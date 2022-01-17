---
id: applications-ibmmq-mqi
title: IBM MQ MQI
---

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon IBM MQ MQI apporte 1 modèle d'hôte :
* App-Ibmmq-Mqi-custom

Il apporte les Modèles de Service suivants :

| Service Alias | Service Template            | Default |
|:--------------|:----------------------------|:--------|
| Channels      | App-Ibmmq-Channels-Mqi      | X       |
| Queue-Manager | App-Ibmmq-Queue-Manager-Mqi | X       |
| Queues        | App-Ibmmq-Queues-Mqi        | X       |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Channels-->

| Metric Name                       | Unit   |
|:----------------------------------|:-------|
| status                            | string |
| channel.traffic.in.bitspersecond  | b/s     |
| channel.traffic.out.bitspersecond | b/s    |

<!--Queue-Manager-->

| Metric Name                    | Unit   |
|:-------------------------------|:-------|
| queuemanager.connections.count | count  |
| status                         | string |

<!--Queues-->

| Metric Name                   | Unit  |
|:------------------------------|:------|
| queue.connections.input.count | count |
| queue.message.oldest.seconds  |       |
| queue.messages.depth.count    | count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de pouvoir exploiter ce Pack, vous devez installer le client IBM MQ pour 
Linux. Une procédure est disponible ici: https://www.ibm.com/docs/en/ibm-mq/8.0?topic=server-installing-mq-linux. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **IBM MQ MQI**:

```bash
yum install centreon-plugin-Applications-Ibmmq-Mqi
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **IBM MQ MQI** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **IBM MQ MQI**:

```bash
yum install centreon-plugin-Applications-Ibmmq-Mqi
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **IBM MQ MQI**:

```bash
yum install centreon-pack-applications-ibmmq-mqi
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **IBM MQ MQI** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**,**Alias** & **IP Address / DNS** correspondant à votre serveur **IBM MQ MQI**.
* Appliquez le Modèle d'Hôte **App-Ibmmq-Mqi-custom**

* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires ("mandatory").

| Mandatory | Name                 | Description                                                                                  |
|:----------|:---------------------|:---------------------------------------------------------------------------------------------|
|           | IBMMQMQIEXTRAOPTIONS | Nom de l'utilisateur à utiliser pour lancer les commandes (Par défaut: '--runas=centreon')   |
|           | IBMMQMQIPORT         | Port d'écoute de l'instance IBM MQ (Par défaut: '1414')                                      |
|           | EXTRAOPTIONS         | Option supplémentaire à ajouter à toutes les commandes de contrôles (ex: l'option --verbose) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins//centreon_ibmmq_mqi.pl \
    --plugin=apps::mq::ibmmq::mqi::plugin \
    --mode=queues \
    --hostname='10.0.0.1' \
    --channel='' \
    --port='1414' \
    --runas=centreon \
    --filter-name='^(?!(SYSTEM|PERL.COMMAND))' \
    --warning-connections-input='' \
    --critical-connections-input='' \
    --warning-messages-depth='200' \
    --critical-messages-depth='' \
    --warning-message-oldest='' \
    --critical-message-oldest='3600' \
    --verbose \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
WARNING: current input connections: 9000 | 'queue.connections.input.count'=9000;;;0; 'queue.messages.depth.count'=20;200;;0; 'queue.message.oldest.seconds'=9000;;3600;; 
```

Dans cet exemple, une alarme de type WARNING est déclenchée car le nombre de message dans la queue est 
supérieur au seuil de 200 configuré (`--warning-messages-depth='200'`). 

Une alarme CRITICAL serait déclenchée si un des messages datait de plus d'une heure/3600 secondes (`--critical-message-oldest='3600'`). 

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_ibmmq_mqi.pl \
    --plugin=apps::mq::ibmmq::mqi::plugin \
    --mode=queues \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins//centreon_ibmmq_mqi.pl \
    --plugin=apps::mq::ibmmq::mqi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins)
pour le diagnostic des erreurs communes des Plugins Centreon.