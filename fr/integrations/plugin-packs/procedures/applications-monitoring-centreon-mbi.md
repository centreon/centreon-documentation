---
id: applications-monitoring-centreon-mbi
title: Centreon MBI
---

## Vue d'ensemble

Centreon Monitoring Business Intelligence est une solution d'aide à la décision 
et facilite la gestion de votre infrastructure IT. Centreon MBI vous apporte une
visibilité complète sur vos infrastructures et vos activités avec un reporting
aux normes ITIL sur les évènements, les compteurs de performances ainsi que les
données de capacité provenant de Centreon.

## Contenu du Plugin-Pack

### Ojets supervisés

* Serveur de reporting Centreon MBI

### Métriques collectées

En plus des modes et des métriques détaillés ci-après, il est également possible
de superviser les éléments suivants: 

* DWH-db-content : Vérifier si les données présentes dataware house sont à jour
* DWH-partitions : Vérifier si toutes les partitions MySQL partitions sont à jour
* failed-jobs : Vérifier si des tâches ont échouées
* Ntp : Vérifier le décalage de temps du serveur avec le serveur ntp
* proc-cbis : Status du processus cbis sur le serveur de reporting
* proc-mysql : Status du processus MySQL sur le serveur de reporting

<!--DOCUSAURUS_CODE_TABS-->

<!--cpu-->

| Metric name                        | Description                                   |
| :--------------------------------- | :-------------------------------------------- |
| cpu.utilization.percentage         | CPU utilization. Unit : %                     |
| core.cpu.utilization.percentage    | Per Core CPU utilization. Unit : %            |

<!--Memory-->

| Metric name             | Description                                              |
| :---------------------  | :------------------------------------------------------- |
| memory.usage.bytes      | Memory usage on the device. Unit : Bytes                 |
| memory.free.bytes       | Free memory on the device. Unit : Bytes                  |
| memory.usage.percentage | Percentage of Memory usage on the device. Unit : %       |
| memory.buffer.bytes     | Buffered Memory allocation. Unit : Bytes                 |
| memory.cached.bytes     | Cached Memory allocation. Unit : Bytes                   |
| memory.shared.bytes     | Shared Memory allocation. Unit : Bytes                   |

<!--Swap-->

| Metric name                 | Description                                       |
| :-------------------------- | :------------------------------------------------ |
| swap.usage.bytes            | Used swap. Unit: Bytes                            |
| swap.free.bytes             | Free swap. Unit: Bytes                            |
| swap.usage.percentage       | Percentage of used swap. Unit: %                  |

<!--Load-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| load1                       | System load 1 minute-sample                        |
| load5                       | System load 5 minutes-sample                       |
| load15                      | System load 15 minutes-sample                      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Pour superviser un serveur de reporting Centreon MBI, les services NRPE3 et SNMP
doivent être installés et configurés.

### NRPE3

Le port TCP par défaut pour le protocole NRPE est le port 5666.

| Source      | Destination                       | Protocole  | Port    |
| :---------- | :-------------------------------- | :--------- | :------ |
| Collecteur  | Serveur de reporting Centreon MBI | TCP        | 5666    |

Le serveur de reporting Centreon MBI supervisé a besoin de deux composants pour
que cela fonctionne : 

* le Plugin `centreon_linux_local.pl`
* L'agent (*daemon*) NRPE3

Installer les paquets suivants :

```shell
yum install http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
yum install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch
```

Les champs `allowed_hosts` dans le fichier `/etc/nrpe/centreon-nrpe3.cfg` doit 
être modifiés pour inclure l'adresse IP du collecteur supervisant le serveur de 
reporting Centreon MBI :

```ini
[...]
# ALLOWED HOST ADDRESSES
# This is an optional comma-delimited list of IP address or hostnames
# that are allowed to talk to the NRPE daemon. Network addresses with a bit mask
# (i.e. 192.168.1.0/24) are also supported. Hostname wildcards are not currently
# supported.
allowed_hosts=127.0.0.1,::1
[...]
```

Ajouter les lignes suivantes à la fin du fichier :

```ini
command[check_partitions]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --partitions
command[check_db]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
command[check_jobs]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --jobs
```

Redémarrer le service :

```shell
systemctl restart centreon-nrpe3.service
```

Install the plugin on each needed poller:

```shell
yum install centreon-nrpe3-plugin
```

Si tout a été correctement installé et configuré, la commande :

```shell
/usr/lib64/nagios/plugins/check_centreon_nrpe3 -H monitored_host_ip -p 5666
```

devrait aboutir au résultat suivant :

```
NRPE v3.2.1
```

Dans le cas contraire, se référer à la section [troubleshooting](#troubleshooting).

### SNMP

La communication doit être possible sur le port UDP 161 depuis le collecteur 
Centreon vers le serveur de reporting Centreon MBI supervisé. 

| Source      | Destination                    | Protocol   | Port    |
| :---------- | :----------------------------- | :--------- | :------ |
| Poller      | Centreon MBI reporting server  | UDP        | 161     |


Installer le service SNMP sur le serveur de reporting Centreon MBI :

```shell
yum install net-snmp
```

Dans le fichier */etc/snmp/snmpd.conf*, remplacer `my-snmp-community` par la 
communauté appropriée. Commenter les lignes commençant par `view` et ajouter la
ligne suivante :

```
view systemview included .1
```

Le bloc devrait ressembler à ceci :

```
com2sec notConfigUser  default       my-snmp-community
[...]
#view    systemview    included   .1.3.6.1.2.1.1
#view    systemview    included   .1.3.6.1.2.1.25.1.1
view    systemview    included   .1
```

Il est nécessaire de redémarrer le processus SNMP après avoir modifié le fichier
de configuration. De plus, assurez vous que le processus SNMP soit configuré
pour démarrer automatiquement lors du redémarrage du serveur.

```shell
systemctl restart snmpd && systemctl enable snmpd
```

Si tout a été correctement installé et configuré, la commande :

```shell
snmpwalk -v 1 -c my-snmp-community IPSERVER .1.3.6.1.2.1.1.1
```

devrait aboutir au résultat suivant :

```shell
SNMPv2-MIB::sysDescr.0 = STRING: Linux <SERVER> 2.6.18-128.1.10.el5 #1 SMP Thu May 7 10:39:21 EDT 2009 i686
```

Dans le cas contraire, se référer à la section [troubleshooting](#troubleshooting).

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le plugin Linux SNMP Centreon sur l'ensemble des collecteurs Centreon supervisant le serveur de reporting Centreon MBI :

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Installer le Plugin-Pack *Centreon MBI* depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--Offline IMP License-->

1. Installer le plugin Linux SNMP Centreon sur l'ensemble des collecteurs Centreon supervisant le serveur de reporting Centreon MBI :

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Installer les RPMs des Plugin-Packs contenant les modèles de supervision :

```bash
yum install centreon-pack-operatingsystems-linux-snmp centreon-pack-applications-monitoring-centreon-mbi
```

3. Installer le Plugin-Pack *Centreon MBI* depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration de l'hôte dans Centreon

Aller dans *Configuration* > *Hôte* > et cliquer sur *Ajouter*. Renseigner les 
valeurs pour les champs *Snmp Community* et *Snmp Version* et appliquer le 
modèle `App-Monitoring-Centreon-MBI-custom`.

:warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP 3
et configurez les paramètres SNMP v3 via la macro *SNMPEXTRAOPTIONS*

| Obligatoire | Nom              | Description                                                                                                                         |
| :---------- | :--------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
|     X       | NRPECLIENT       | Nom du Plugin employé pour dialoguer avec l'agent NRPE3 (par défaut `check_centreon_nrpe3`)                                         |
|     X       | NRPEPORT         | Port sur lequel écoute l'agent NRPE3 (par défaut 5666)                                                                              |
|     X       | NRPETIMEOUT      | Temps maximum autorisé pour exécuter la commande (par défaut 5s)                                                                    |
|             | NRPEEXTRAOPTIONS | Options supplémentaires (par défaut `-u` pour que le Plugin NRPE retourne un état `UNKNOWN` en cas d'erreur de connexion à l'agent) |
|             | SNMPEXTRAOPTIONS | Option supplémentaires pour configurer les paramètres SNMPv3                                                 |

#### Note

Nous vous conseillons également d'associer le modèle `App-DB-MySQL-custom` à 
l'hôte. Référez vous à sa documentation.

## FAQ

### Troubleshooting

##### `connect to address x.x.x.x port 5666: Connection refused`

Si le message retourné est le suivant :

```text
connect to address x.x.x.x port 5666: Connection refused
```

L'adresse IP x.x.x.x d'où est venue la requête (*ie.* le poller) n'est
probablement pas autorisée à interroger l'agent NRPE. Vérifier le paramètre 
`allowed_hosts` dans le fichier `/etc/nrpe/centreon-nrpe3.cfg` 
([*cf* plus haut](#NRPE3).

Puis redémarrer le service.

```bash
systemctl restart centreon-nrpe3.service
```

##### `CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds`

Si le message retourné est le suivant :

```text
CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds.
```

Vérifier alors les points suivants :

* le service `centreon-nrpe3` est bien démarré

```bash
systemctl status centreon-nrpe3.service
```

* le port utilisé par le Plugin (`-p 5666` par exemple) est conforme à la configuration de l'agent, si le port a été personnalisé
* aucun pare-feu local ne bloque le port NRPE (`iptables -L`)
* aucun équipement de type firewall ne filtre ce port sur le réseau

#### `NRPE: Command 'my_command' not defined`

Si le message retourné est le suivant :

```text
NRPE: Command 'my_command' not defined
```

Cela signifie que l'agent NRPE essaye d'exécuter une commande qui lui est 
inconnue.

Pour qu'une commande soit reconnue, il faut qu'elle soit convenablement 
déclarée avec la syntaxe suivante :

```ini
[my_command]=/full/path/to/command --argument --other-argument
```

Et redémarrer le service :

```bash
systemctl restart centreon-nrpe3.service
```

#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter
le serveur Linux sur le port 161, ou alors que la communauté SNMP configurée 
n'est pas correcte. Il est également possible qu'un firewall bloque le flux.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

Les autorisations données à l'utilisateur en SNMP sont trop restreintes pour 
faire fonctionner le mode/Plugin.
