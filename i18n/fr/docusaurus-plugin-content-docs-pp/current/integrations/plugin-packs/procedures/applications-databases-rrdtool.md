---
id: applications-databases-rrdtool
title: RRDtool
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Plugin-Pack

### Objets supervisés

Le plugin-pack inclue la supervision Query.

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Query" label="Query">

| Metric name                                  | Description                | Unit |
| :------------------------------------------- | :------------------------- | :--- |
| *dsname*#datasource.value.minimum.count      | Minimun value on timeframe |      |
| *dsname*#datasource.value.average.count      | Average value on timeframe |      |
| *dsname*#datasource.value.maximum.count      | Maximul value on timeframe |      |

</TabItem>
</Tabs>

## Prérequis

La sonde permet de requêter RRDtool avec :

* la ligne de commande avec le binaire ```rrdtool``` (exécution en locale ou en ssh)
* le module perl (exécution en locale)

```rrdcached``` n'est pas encore supporté.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Databases-Rrdtool
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *RRDtool* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Databases-Rrdtool
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-databases-rrdtool
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *RRDtool* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
</Tabs>

## Configuration d'un service

<Tabs groupId="sync">
<TabItem value="Local" label="Local">

* Créer un service et appliquer le modèle de service the *App-DB-Rrdtool-Local-Query*.

> Une fois le modèle appliqué, certaines Macros doivent être renseignées :

| Mandatory | Name      | Description                                                                  |
| :-------- | :-------- | :--------------------------------------------------------------------------- |
| X         | RRDFILE   | Ficher rrd cible                                                             |
| X         | DSNAME    | Datasource cible  (Défaut: 'value')                                          |
| X         | TIMEFRAME | Set timeframe in seconds (E.g '3600' to check last 60 minutes) (Défaut: 600) |

</TabItem>
<TabItem value="SSH" label="SSH">

* Créer un service et appliquer le modèle de service *App-DB-Rrdtool-SSH-Query*.

> Une fois le modèle appliqué, certaines Macros doivent être renseignées :

| Mandatory | Name      | Description                                                                 |
| :-------- | :-------- | :-------------------------------------------------------------------------- |
| X         | RRDFILE   | Ficher rrd cible                                                            |
| X         | DSNAME    | Datasource cible (Défaut: 'value')                                          |
| X         | TIMEFRAME | Période en seconde (cf: '3600' pour les 60 dernières minutes) (Défaut: 600) |

* Sur votre hôte, certaines Macros doivent être renseignées :

</TabItem>
<TabItem value="sshcli backend" label="sshcli backend">

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```sshcli```                                                                    |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |          
|             | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication                |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

> Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur distant. (Macro SSHUSERNAME).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- | 
| X           | SSHBACKEND      | Nom du backend: ```plink```                                                                     |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

> Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur distant. (Macro SSHUSERNAME).

</TabItem>
<TabItem value="libssh backend (par défaut)" label="libssh backend (par défaut)">

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```libssh```                                                                    |          
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

Avec ce backend, vous n'avez pas à valider manuellement le fingerprint du serveur cible.

</TabItem>
</Tabs>

## FAQ

#### Comment faire le test en ligne de commande et que signifient les principales options ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine* :

```bash
/usr/lib/centreon/plugins/centreon_rrdtool.pl \
    --plugin=database::rrdtool::local::plugin \
    --custommode=perlmod \
    --mode=query \
    --rrd-file='/var/lib/centreon/metrics/1490.rrd' \
    --ds-name='value' \
    --timeframe='3600' \
    --warning-value-maximum=50 \
    --critical-value-maximum=100
```

Exemple de sortie:
```
OK: datasource 'value': 3.12 (min), 4.52 (avg), 5.13 (max) | 'value#datasource.value.minimum.count'=3.12;;;; 'value#datasource.value.average.count'=4.52;;;; 'value#datasource.value.maximum.count'=5.13;0:50;0:100;;
```

La commande ci-dessus contrôle (```--mode=query```) une métrique de la base de données RRDtool */var/lib/centreon/metrics/1490.rrd* (les fichiers Centreon rrd sont visibles dans l'interface : ```Administration  >  Parameters  >  Data```).

Le plugin vérifie la datasource *value* (```--ds-name='value'```. Centreon utilise toujours ```value``` comme datasource. Il est toujours possible de vérifier le nom de la datasource avec la commande: ```rrdtool info /var/lib/centreon/metrics/1490.rrd```) during the last hour (--timeframe='3600').

Cette commande déclenchera une alarme WARNING si la valeur maxium est supérieur à 50 (```--warning-value-maximum=50```)
et une alarme CRITICAL si la valeur est supérieur à 100 (```--critical-value-maximum=100```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_rrdtool.pl \
    --plugin=database::rrdtool::local::plugin \
    --custommode=perlmod \
    --help
```
