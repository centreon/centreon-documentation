---
id: applications-oracle-ovm-api
title: Oracle VM Manager API
---

## Contenu du Plugin-Pack

### Objets supervisés

Le plugin-pack inclue la supervision File-servers, Manager, Server-pools, Servers et Vm.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--File-servers-->

| Metric name                                                         | Description               | Unit |
| :------------------------------------------------------------------ | :------------------------ | :--- |
| *serverpoolname*~*filesystemname*#serverpool.space.usage.bytes      | Space usage               | B    |
| *serverpoolname*~*filesystemname*#serverpool.space.free.bytes       | Free space                | B    |
| *serverpoolname*~*filesystemname*#serverpool.space.usage.percentage | Space usage in percentage | %    |

<!--Manager-->

| Metric name                                | Description                                          | Unit |
| :----------------------------------------- | :--------------------------------------------------- | :--- |
| manager status                             | Manager status, possible to set string-based alerts  |      |
| *managername*#manager.jobs.succeeded.count | Number of jobs succeeded                             |      |
| *managername*#manager.jobs.failed.count    | Number of jobs failed                                |      |

<!--Server-pools-->

| Metric name                                         | Description                | Unit |
|:--------------------------------------------------- |:-------------------------- | :--- |
| *serverpoolname*#serverpool.servers.running.count   | Number of servers running  |      |
| *serverpoolname*#serverpool.servers.stopped.count   | Number of servers stopped  |      |
| *serverpoolname*#serverpool.vm.running.count        | Number of vm running       |      |
| *serverpoolname*#serverpool.vm.stopped.count        | Number of vm stopped       |      |
| *serverpoolname*#serverpool.memory.usage.bytes      | Memory usage               | B    |
| *serverpoolname*#serverpool.memory.free.bytes       | Free memory                | B    |
| *serverpoolname*#serverpool.memory.usage.percentage | Memory usage in percentage | %    |

<!--Servers-->

| Metric name                                 | Description                | Unit |
| :------------------------------------------ | :------------------------- | :--- |
| servers.running.count                       | Number of servers running  |      |
| servers.stopped.count                       | Number of servers stopped  |      |
| server status                               | server status              |      |
| *servername*#server.memory.usage.bytes      | Memory usage               | B    |
| *servername*#server.memory.free.bytes       | Free memory                | B    |
| *servername*#server.memory.usage.percentage | Memory usage in percentage | %    |

<!--Vm-->

| Metric name                             | Description          | Unit |
| :---------------------------- --------- | :--------------------| :--- |
| virtualmachines.running.count           | Number of vm running |      |
| virtualmachines.stopped.count           | Number of vm stopped |      |
| vm status                               | vm status            |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler l'application Oracle VM Manager, l'API Rest doit être configuré (cf: https://docs.oracle.com/en/virtualization/oracle-vm/3.4/developer/vmapi-preface.html)

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Oracle-Ovm-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Oracle VM Manager API* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Oracle-Ovm-Api
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-oracle-ovm-api
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Oracle VM Manager API* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par application Oracle VM Manager.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Oracle-Ovm-Api-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Name               | Description                                                                |
| :---------- | :----------------- | :-------------------------------------------------------------------- ---- |
| X           | OVMAPICUSTOMMODE   | API mode (Default: 'rest')                                                 |
| X           | OVMAPIPORT         | Port used (Default: 7002)                                                  |
| X           | OVMAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X           | OVMAPIPASSWORD     | Oracle VM Manager username                                                 |
| X           | OVMAPIUSERNAME     | Oracle VM Manager password                                                 |
|             | OVMAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*
(Les paramètres tels que ```api-username``` ou ```api-password``` doivront être ajustés):

```bash
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \
    --plugin=apps::oracle::ovm::api::plugin \
    --mode=server-pools \
    --hostname='10.30.2.79' \
    --port='7002' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-server-pool-name='TESTPOOL01' \
    --warning-memory-usage-prct='90' \
    --critical-memory-usage-prct='95' \
    --verbose
```

Exemple de sortie:
```
OK: Server pool 'TESTPOOL01' servers running: 2, stopped: 0 - virtual machines running: 3, stopped: 0 - memory usage total: 255.32 GB used: 217.87 GB (85.33%) free: 37.45 GB (14.67%) | 'TESTPOOL01#serverpool.servers.running.count'=2;;;0;2 'TESTPOOL01#serverpool.servers.stopped.count'=0;;;0;2 'TESTPOOL01#serverpool.vm.running.count'=3;;;0;3 'TESTPOOL01#serverpool.vm.stopped.count'=0;;;0;3 'TESTPOOL01#serverpool.memory.usage.bytes'=233939402752B;;;0;274148098048 'TESTPOOL01#serverpool.memory.free.bytes'=40208695296B;;;0;274148098048 'TESTPOOL01#serverpool.memory.usage.percentage'=85.33%;90;95;0;100
checking server pool 'TESTPOOL01'
servers running: 2, stopped: 0
virtual machines running: 3, stopped: 0
memory usage total: 255.32 GB used: 217.87 GB (85.33%) free: 37.45 GB (14.67%)
```

La commande ci-dessus contrôle les pools serveurs de l'application Oracle VM Manager via l'API (```--mode=server-pools```) nommée *TESTPOOL01* (```--filter-server-pool-name='TESTPOOL01'```).
Le Plugin utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et il se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _7002_ (```--port='7002'```) utilisant le protocol _https_ (```--proto='https'```).

Cette commande déclenchera une alarme WARNING si la mémoire utilisée est supérieur à 90% (```--warning-memory-usage-prct='90'```)
et une alarme CRITICAL si la mémoire utilisée est supérieur à 95% (```--critical-memory-usage-prct='95'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl --plugin=apps::oracle::ovm::api::plugin \
     --mode=server-pools \
     --help
```

### J'obtiens le message d'erreur suivant: 

#### ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```

Lors du déploiement de mes contrôles, j'obtiens le message suivant ```UNKNOWN: 500 Can't connect to 10.30.2.79:443 |```.
Cela signifie que Centreon n'a pas réussi à se connecter à l'Oracle VM Manager API (*10.30.2.79*).
La plupart du temps, il faut préciser le proxy à utiliser pour requêter l'URL *10.30.2.79* en utilisant l'option ```--proxyurl='http://proxy.mycompany:8080'```.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Suite à la mise en place du proxy, j'obtiens le message suivant ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```
Cela signifie que le protocole de connexion au proxy n'est pas supporté par la libraire *LWP* utlisée par défaut par le Plugin Centreon.
Cette erreur peut être résolue en utilisant le backend HTTP *curl*. Pour ce faire, ajoutez l'option ```--http-backend='curl'``` à la commande.

