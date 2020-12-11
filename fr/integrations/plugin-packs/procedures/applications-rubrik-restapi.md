---
id: applications-rubrik-restapi
title: Rubrik Rest API
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Centreon Rubrik permet (par l'interrogation de l'API Rest) de superviser 
le statut et les performances Clusters et ses Noeuds. Cela inclut notamment les composants 
disques, les tâches, etc.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Disk-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| cluster.disks.total.count                            | Total number cluster disks                       |      |
| cluster.disks.active.count                           | Number of active disks                           | ms   |

<!--Cluster-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| cluster.io.read.usage.bytespersecond                 | Usage of cluster read I/Os                       | B/s  |
| cluster.io.write.usage.bytespersecond                | Usage of cluster write I/Os                      | B/s  |
| cluster.io.read.usage.iops                           | Usage of cluster read I/Os                       | iops |
| cluster.io.write.usage.iops                          | Usage IOPS of cluster write I/Os                 | iops |

<!--Compliance-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| backup.objects.incompliance.24h.count                | Number of backup objects compliance in 24h       |      |
| backup.objects.noncompliance.24h.count               | Number of backup objects no compliance in 24h    |      |

<!--Node-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| cluster.nodes.total.count                            | Total number of node in the cluster              |      |
| cluster.nodes.ok.count                               | Number of node "OK" in the cluster               |      |

<!--Storage-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| storage.space.usage.bytes                            | Usage space storage                              | B    |
| storage.space.free.bytes                             | Free space storage                               | B    |
| storage.space.usage.percentage                       | Percentage usage space storage                   | %    |
| storage.full.remaining.days.count                    | Number of remaining day storage full             | d    |

<!--Task-->

| Metric name                                          | Description                                      | Unit |
|:---------------------------------------------------- |:------------------------------------------------ |:---- |
| tasks.succeeded.24h.count                            | Number of task succeeded in 24h                  |      |
| tasks.failed.24h.count                               | Number of task failed in 24h                     |      |
| tasks.canceled.24h.count                             | Number of task canceled in 24h                   |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

L'API Rubrik REST fournit une interface RESTful pour travailler avec les clusters Rubrik et les *appliances* virtuelles Rubrik Edge. 

L'API peut être utilisée pour interroger, configurer et contrôler presque toutes les opérations du logiciel Rubrik.

Si vous avez accès à un cluster Rubrik, vous pouvez également utiliser l'aire de jeu Rubrik API à l'adresse suivante:

https://{{node_ip}}/docs/{{{v1|v2|internal}}/playground

_Note : les paramètres internes de l'API peuvent changer entre les versions du MDP2_

Plus d'informations disponibles sur : https://github.com/rubrikinc/api-documentation

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser les ressources *Rubrik Rest API*:

```bash
yum install centreon-plugin-Applications-Rubrik-Restapi
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Rubrik Rest API*
depuis la page "Configuration > Plugin Packs > Gestionnaire"

<!--Offline IMP License-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser les ressources *Rubrik Rest API*:

```bash
yum install centreon-plugin-Applications-Rubrik-Restapi
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-rubrik-restapi
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Rubrik RestAPI*
depuis la page "Configuration > Plugin Packs > Gestionnaire"

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur Rubrik RestAPI
* Appliquez le Modèle d'Hôte *App-Rubrik-Restapi-custom*


Les Macros d'Hôte ci-après doivent être renseignées le cas échéant:

| Mandatory | Name                       | Description                                                                        |
|:----------|:-------------------------- |:-----------------------------------------------------------------------------------|
| X         | RUBRIKAPIPORT              | RestAPI port of the Rubrik RestAPI (Default: '443')                                |
| X         | RUBRIKAPIPROTO             | Protocol used to reach the Rubrik RestAPI (Default: 'https')                       |
|           | RUBRIKAPIEXTRAOPTIONS      | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
    --plugin=apps::backup::rubrik::restapi::plugin \
    --mode=nodes \
    --hostname='10.0.0.1' \
    --proto='https' \
    --port='443' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --api-password='****' \
    --api-username='centreon' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: cluster 'RubrikOne' nodes are ok | 'RubrikOne#cluster.nodes.total.count'=7;;;0; 'RubrikOne#cluster.nodes.ok.count'=7;;;0;7
checking cluster 'RubrikOne'
node 'RVM15CS00XXXX' [ip address: 172.10.69.92] status: ok
node 'RVM15CS00XXXX' [ip address: 172.10.69.93] status: ok
node 'RVM15CS00XXXX' [ip address: 172.10.69.94] status: ok
node 'RVM18BS00XXXX' [ip address: 172.10.69.91] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.95] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.96] status: ok
node 'RVMHM194S00XXXX' [ip address: 172.10.69.97] status: ok
```

Dans cet exemple, le Plugin récupère les statuts des *nodes* (```--plugin=apps::backup::rubrik::restapi::plugin --mode=nodes```)
du cluster Rubrik ayant l'adresse IP *10.0.0.1* (```--hostname='10.0.0.1'```).

La liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_rubrik_restapi.pl \
    --plugin=apps::backup::rubrik::restapi::plugin \
    --mode=nodes \
    --help
```

### J'obtiens le message d'erreur suivant: ```UNKNOWN: 500 Can't connect to 10.0.0.1:80 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant: ```UNKNOWN: 500 Can't connect to 10.0.0.1:443 |```.

Cette erreur signifie que Centreon n'a pas réussi à se connecter à l'API du cluster Rubrik RestAPI.
Vérifiez que la requête n'est pas bloquée par un outil externe
(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans
la Macro *EXTRAOPTIONS* de l'Hôte ou directement dans la
commande avec l'option ```--proxyurl```.

Si un certificat auto-signé est utilisé, il est nécessaire d'ajouter les options suivantes permettant d'ignorer 
sa validité:
```--http-backend='curl' --ssl-opt='SSL_verify_mode => SSL_VERIFY_NONE'```


### J'obtiens le message d'erreur suivant: ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Dans certains cas, et plus spécifiquement lors de l'usage d'un proxy
d'entreprise, le protocole de connexion n'est pas supporté par la libraire *lwp*
utlisée par défaut par le Plugin Centreon.

Cette erreur peut être résolue en utilisant le backend HTTP *curl*.
Pour ce faire, ajoutez l'option ```--http-backend='curl'``` la Macro *EXTRAOPTIONS* de l'Hôte ou directement à la commande.
