---
id: applications-redis-sentinel
title: Redis Sentinel
---

## Contenu du Pack

### Modèles

Le Pack Centreon Redis Sentinel apporte 1 modèle d'hôte :
* App-Redis-Sentinel-custom

Il apporte les Modèles de Service suivants :

| Service Alias     | Service Template                     | Default | Discovery |
|:------------------|:-------------------------------------|:--------|:----------|
| Redis-Clusters    | App-Redis-Sentinel-Redis-Clusters    | X       | X         |
| Sentinel-Clusters | App-Redis-Sentinel-Sentinel-Clusters | X       | X         |

### Règles de découverte

| Rule name                                | Description                                                                |
|:-----------------------------------------|:---------------------------------------------------------------------------|
| App-Redis-Sentinel-Redis-Cluster-Name    | Découvre les clusters et supervise le statut et l'utilisation des Redis    |
| App-Redis-Sentinel-Sentinel-Cluster-Name | Découvre les clusters et supervise le statut et l'utilisation des Sentinel |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Redis-Clusters-->

| Metric name                                                                        | Description                                                      | Unit |
|:---------------------------------------------------------------------------------- |:---------------------------------------------------------------- |:---- |
| cluster.redis.slaves.detected.count                                                | Number of detected slaves                                        |      |
| cluster.redis.subjectively_down.count                                              | Number of subjectively down redis instances                      |      |
| cluster.redis.objectively_down.count                                               | Number of objectively down redis instances                       |      |
| cluster.redis.slave_replication_offset.stddev.count                                | Slave replication offset standard deviation (between all slaves) |      |
| status                                                                             | Status of redis instance                                         |      |
| *cluster_name~redis_address:redis_port*#cluster.redis.ping_ok.latency.milliseconds | Last ok ping latency                                             | ms   |

<!--Sentinel-Clusters-->

| Metric name                                                                                 | Description                                    | Unit |
|:------------------------------------------------------------------------------------------- |:---------------------------------------------- |:---- |
| cluster.sentinels.slaves.detected.count                                                     | Number of detected sentinels                   |      |
| cluster.sentinels.subjectively_down.count                                                   | Number of subjectively down sentinel instances |      |
| cluster.sentinels.objectively_down.count                                                    | Number of objectively down sentinel instances  |      |
| quorum status                                                                               | Status of sentinel voted quorum                |      |
| status                                                                                      | Status of sentinel instance                    |      |
| *cluster_name~sentinel_address:sentinel_port*#cluster.sentinel.ping_ok.latency.milliseconds | Last ok ping latency                           | ms   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de superviser Redis Sentinel, le collecteur doit pouvoir réaliser des requêtes avec l'utilitaire **redis-cli** sur le port TCP/26379 (par défaut).
Voici la liste des commandes utilisées:
* sentinel ckquorum <cluster_name>
* sentinel masters
* sentinel replicas <cluster_name>
* sentinel sentinels <cluster_name>

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Redis Sentinel**:

```bash
yum install centreon-plugin-Applications-Redis-Sentinel
```

2. Sur l'interface Web de Centreon, installer le Pack **Redis Sentinel** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Redis Sentinel**:

```bash
yum install centreon-plugin-Applications-Redis-Sentinel
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Redis Sentinel**:

 ```bash
yum install centreon-pack-applications-redis-sentinel
```

3. Sur l'interface Web de Centreon, installer le Pack **Redis Sentinel** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **Redis Sentinel**.
* Appliquez le Modèle d'Hôte **applications-redis-sentinel-custom**

* Une fois le modèle appliqué, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires ("mandatory").

| Mandatory | Name             | Description                                                                  |
|:----------|:-----------------|:-----------------------------------------------------------------------------|
|           | SENTINELPORT     | (Default: '26379')                                                           |
|           | SENTINELUSERNAME | Sentinel username (redis-cli >= 6.x mandatory)                               |
|           | SENTINELPASSWORD | Sentinel password                                                            |
|           | EXTRAOPTIONS     | Any extra option you may want to add to the command (eg. a --tls --insecure) |

## Comment installer redis-cli 6.x ?

Pour le support TLS et des utilisateurs ACLs, une version 6.x minimum de **redis-cli** est nécessaire.

<!--DOCUSAURUS_CODE_TABS-->

<!--Centos 7-->

```bash
yum install epel-release
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm 
yum --enablerepo=remi install redis
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \
    --plugin=apps::redis::sentinel::plugin \
    --server='10.0.0.1' \
    --port='26379' \
    --mode=redis-clusters \
    --filter-cluster-name='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: cluster 'mymaster' number of detected slaves: 2, subjectively down instances: 0, objectively down instances: 0 - slave replication offset standard deviation: 843.00 - All redis instances are ok | 'mymaster#cluster.redis.slaves.detected.count'=2;;;0; 'mymaster#cluster.redis.subjectively_down.count'=0;;;0; 'mymaster#cluster.redis.objectively_down.count'=0;;;0; 'cluster.redis.slave_replication_offset.stddev.count'=843.00;;;; 'mymaster~10.25.52.107:6379#cluster.redis.ping_ok.latency.milliseconds'=1024s;;;0; 'mymaster~10.25.52.90:6379#cluster.redis.ping_ok.latency.milliseconds'=185s;;;0; 'mymaster~10.25.52.98:6379#cluster.redis.ping_ok.latency.milliseconds'=355s;;;0;
checking cluster 'mymaster'
    number of detected slaves: 2, subjectively down instances: 0, objectively down instances: 0
    slave replication offset standard deviation: 843.00
    instance '10.25.52.107:6379' status: master [role: master], last ok ping: 1024 ms
    instance '10.25.52.90:6379' status: slave [role: slave], last ok ping: 185 ms
    instance '10.25.52.98:6379' status: slave [role: slave], last ok ping: 355 ms
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \
    --plugin=apps::redis::sentinel::plugin \
    --mode=redis-clusters \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_redis_sentinel.pl \
    --plugin=apps::redis::sentinel::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.html)
pour le diagnostic des erreurs communes des Plugins Centreon.
