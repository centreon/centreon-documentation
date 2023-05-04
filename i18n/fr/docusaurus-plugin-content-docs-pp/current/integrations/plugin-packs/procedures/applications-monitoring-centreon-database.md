---
id: applications-monitoring-centreon-database
title: Centreon Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Vue d'ensemble

Le connecteur de supervision Centreon Database permet une mise en place simple et rapide de la surveillance de la base de données de supervision.

## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon Centreon Database apporte un modèle d'hôte :
* App-Monitoring-Centreon-Database-custom

Il apporte les templates de services suivants : 

| Service Alias      | Service Template                              | Service Description                                              | Default |
|:-------------------|:----------------------------------------------|:-----------------------------------------------------------------|:--------|
| Partitioning       | App-Centreon-MySQL-Partitioning-custom        | Contrôle le partitionnement de la base de données de supervision | X       |
| Connection-Time    | App-DB-MySQL-Connection-Time-custom           | Contrôle le temps de connexion à la base de données              | X       |
| Connections-Number | App-DB-MySQL-Connections-Number-custom        | Contrôle le nombre de connexions à la base de données            | X       |
| Database-size      | App-DB-MySQL-Database-Size-custom             | Contrôle la taille de la base de données                         | X       |
| Myisam-Keycache    | App-DB-MySQL-Myisam-Keycache-custom           | Contrôle du Mysisam Keycache                                     | X       |
| Open-Files         | App-DB-MySQL-Open-Files-custom                | Cpntrôle le nombre de fichiers ouverts                           | X       |
| Queries            | App-DB-MySQL-Queries-custom                   | Contrôle le nombre de requêtes faites à la base                  | X       |
| Slowqueries        | App-DB-MySQL-Slowqueries-custom               | Contrôle le nombre de requêtes lentes                            | X       |
| Swap               | OS-Linux-Swap-SNMP-custom                     | Contrôle l'utilisation de la swap                                | X       |
| Memory             | OS-Linux-Memory-SNMP-custom                   | Contrôle l'utilisation de la mémoire                             | X       |
| Load               | OS-Linux-Load-SNMP-custom                     | Contrôle la load                                                 | X       |
| Cpu                | OS-Linux-Cpu-SNMP-custom                      | Contrôle l'utilisation du CPU                                    | X       |


### Métriques & statuts collectés

Indicateurs base de données:

<Tabs groupId="sync">
<TabItem value="Partitionning" label="Partitionning">

| Métrique                     | Unité |
| :--------------------------- | :---- |
| Partitioning Status          | string |

</TabItem>

<TabItem value="Connection-time" label="Connection-time">

| Métrique                     | Unité |
| :--------------------------- | :---- |
| Connection time              | s     |

</TabItem>

<TabItem value="Connection-Numbers" label="Connection-Numbers">

| Métrique                     | Unité         |
| :--------------------------- | :------------ |
| Connections number           | count or %    |

</TabItem>

<TabItem value="Database-size" label="Database-size">

| Métrique                     | Unité         |
| :--------------------------- | :------------ |
| Database size                | Bytes or %    |

</TabItem>

<TabItem value="Myisam-Keycache" label="Myisam-Keycache">

| Métrique                     | Unité |
| :--------------------------- | :---- |
| Myisam Keycache              | %     |

</TabItem>

<TabItem value="Open-files" label="Open-files">

| Métrique                     | Unité |
| :--------------------------- | :---- |
| Open Files                   | %     |

</TabItem>

<TabItem value="Slowqueries" label="Slowqueries">

| Métrique                     | Unité |
| :--------------------------- | :---- |
| Slowqueries                  | count |

</TabItem>

<TabItem value="Queries" label="Queries">

| Métrique                     | Unité  |
| :--------------------------- | :----- |
| Queries                      | count  |

</TabItem>
</Tabs>

Indicateurs système:

<Tabs groupId="sync">
<TabItem value="CPU" label="CPU">

| Métrique                           | Unité  |
| :--------------------------------- | :----- |
| cpu.utilization.percentage         | %      |
| core.cpu.utilization.percentage    | %      |

</TabItem>

<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
| :---------------------  | :---- |
| memory.usage.bytes      | Bytes |
| memory.free.bytes       | Bytes |
| memory.usage.percentage | %     |
| memory.buffer.bytes     | Bytes |
| memory.cached.bytes     | Bytes |
| memory.shared.bytes     | Bytes |

</TabItem>

<TabItem value="Swap" label="Swap">

| Métrique                    | Unité   |
| :-------------------------- | :------ |
| swap.usage.bytes            | Bytes   |
| swap.free.bytes             | Bytes   |
| swap.usage.percentage       | %       |

</TabItem>

<TabItem value="Load" label="Load">

| Métrique                    | Unité                          |
| :-------------------------- | :----------------------------- |
| load1                       | System load 1 minute-sample    |
| load5                       | System load 5 minutes-sample   |
| load15                      | System load 15 minutes-sample  |

</TabItem>
</Tabs>

## Prérequis

### Création d'un utilisateur de base de données 

Pour permettre la collecte d'informations liées à la base de données, la création d'un utilisateur avec des droits spécifiques est nécessaire :


``` mysql
CREATE USER 'monitor_user'@'IP_POLLER' IDENTIFIED BY 'a_very_secure_passwd';
GRANT SELECT ON *.* to 'monitor_user'@'IP_POLLER';
```

### SNMP

SNMP doit être configuré sur le serveur central. Vous pouvez vous aider de cette [documentation](operatingsystems-linux-snmp.md#prerequisites) pour mettre en place rapidement une simple configuration SNMP. 

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez les plugins centreon suivant sur le collecteur qui supervisera la base de donnée :

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Database centreon-plugin-Operatingsystems-Linux-Snmp

```

2. Sur l'interface Web de Centreon, installez le connecteur de supervision **Centreon Databse** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installez les plugins centreon suivant sur le collecteur qui supervisera la base de donnée :


```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Database centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Sur le serveur Central Centreon, installez le RPM du Pack **Centreon Database** :


 ```bash
yum install centreon-pack-applications-monitoring-centreon-database
```

3. Sur l'interface Web de Centreon, installez le connecteur de supervision **Centreon Databse** depuis la page **Configuration > Packs de plugins**.

</TabItem>

</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur *Centreon Database*.
* Appliquez le Modèle d'Hôte **App-Monitoring-Centreon-Database-custom**.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.
* Les valeurs à renseigner pour les macros MYSQLUSERNAME et MYSQLPASSWORD sont celles correspondants à l'utilisateur qui a été créé précédemment pour superviser la base de données.

| Mandatory  | Macro            |
| :--------- | :--------------  |
| X          | MYSQLPORT        |
| X          | MYSQLUSERNAME    |
| X          | MYSQLPASSWORD    |
|            | SNMPEXTRAOPTIONS |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
	--host=localhost   \
	--username='monitor_user' \
	--password='a_very_secure_passwd' \
	--port='3306' \
	--mode=threads-connected \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Client connected threads total: 151 used: 10 (6.62%) free: 141 (93.38%)
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
	--host=localhost   \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande :

```
/usr/lib/centreon/plugins//centreon_mysql.pl \
	--plugin=database::mysql::plugin  \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des Plugins Centreon.