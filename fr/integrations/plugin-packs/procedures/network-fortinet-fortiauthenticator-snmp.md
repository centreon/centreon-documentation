---
id: network-fortinet-fortiauthenticator-snmp
title: Fortinet FortiAuthenticator SNMP
---

## Vue d'ensemble

FortiAuthenticator est une solution physique ou virtuelle de gestion d'identités et d'authentification sécurisée distribuée par
la société Fortinet.

Le Plugin-Pack Centreon utilise le protocole SNMP pour se connecter et récupérer les informations
et métriques relatives aux équipements FortiAuthenticator.

## Contenu du Plugin-Pack

### Objets supervisés

* *Appliances* et machines virtuelles FortiAuthenticator

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Authenticator-->

| Metric name                                     | Description                                  | Unit |
|:------------------------------------------------|:---------------------------------------------|:-----|
| authenticator.authentication.events.persecond   | Number of authentication events per second   |      |
| authenticator.authentication.failures.persecond | Number of authentication failures per second |      |
| authenticator.groups.count                      | Total number of user groups                  |      |
| authenticator.groups.percentage                 | Percentage of user groups usage              | %    |
| authenticator.radius.nas.count                  | Total number of Radius NAS                   |      |
| authenticator.radius.nas.percentage             | Percentage of Radius NAS usage               | %    |
| authenticator.users.count                       | Total number of local users                  |      |
| authenticator.users.percentage                  | Percentage of users usage                    | %    |

<!--Cpu-->

| Metric name                 | Description                  | Unit  |
| :-------------------------- | :--------------------------- | :---- |
| cpu.utilization.percentage  | Current CPU usage percentage |   %   |

<!--Disk-Log-->

| Metric name                     | Description                                       | Unit |
|:--------------------------------|:--------------------------------------------------|:-----|
| disk.log.space.usage.percentage | Percentage of used space on the device's log disk | %    |

<!--Ha-->

| Metric name | Description                                     |
|:------------|:------------------------------------------------|
| ha-status   | Current status of the high-availability feature |

<!--Interfaces-->

* Per interface

| Metric name                                            | Description                                         | Unit |
|:-------------------------------------------------------|:----------------------------------------------------|:-----|
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

Vous pouvez restreindre ce contrôle sur une interface donnée en spécifiant le nom de l'interface à superviser
(par exemple ```--interface='^eth0$'```) conjointement avec le paramètre ```--name```.

<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.percentage | Percentage of memory usage on the device. |   %   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SNMP de l'équipement

Sur l'équipement FortiAuthenticator, configurez et activez l'agent SNMP en suivant ces étapes:

* Connectez-vous à l'interface Web d'administration de l'équipement
* Dans le menu, sélectionnez *System > Administration > SNMP*
* Configurez les paramètres SNMP en spécifiant la version et la communauté à utiliser

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements FortiAuthenticator:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiauthenticator-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Fortinet Fortiauthenticator SNMP*
depuis la page "Configuration > Plugin Packs > Gestionnaire"

<!--Offline IMP License-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements FortiAuthenticator:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiauthenticator-Snmp
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-network-fortinet-fortiauthenticator-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Fortinet Fortiauthenticator SNMP*
depuis la page "Configuration > Plugin Packs > Gestionnaire"

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Fortinet-Fortiauthenticator-SNMP-Custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortiauthenticator_snmp.pl \
    --plugin=network::fortinet::fortiauthenticator::snmp::plugin \
    --mode=authenticator \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='mysnmpcommunity' \
    --warning-users-usage-prct='80' \
    --critical-users-usage-prct='90' \
    --warning-authentication-failures='50' \
    --critical-authentication-failures='100' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Authenticator statistics are ok | 'authenticator.users.count'=9;;;0;10100 'authenticator.users.percentage'=0.09%;;;0;100
'authenticator.groups.count'=1;;;0;1010 'authenticator.groups.percentage'=0.10%;;;0;100 'authenticator.radius.nas.count'=3;;;0;10100
'authenticator.radius.nas.percentage'=0.03%;;;0;100 'authenticator.authentication.events.persecond'=0/s;;;0;
'authenticator.authentication.failures.persecond'=0/s;;;0;
checking authenticator
    users total: 10100 used: 9 (0.09%) free: 10091 (99.91%)
    groups total: 1010 used: 1 (0.10%) free: 1009 (99.90%)
    radius nas total: 10100 used: 3 (0.03%) free: 10097 (99.97%)
    authentication events: 0/s, failures: 0/s
```

Dans cet exemple, le Plugin récupère les statistiques d'authentification d'un équipement FortiAuthenticator (```--plugin=network::fortinet::fortiauthenticator::snmp::plugin
--mode=authenticator```) identifié par l'adresse IP *10.0.0.1* (```--hostname=10.0.0.1```). Les paramètres de communauté et de version SNMP (```--snmp-version='2c' --snmp-community='mysnmpcommunity'```)
correspondants sont renseignés afin de pouvoir joindre l'équipement.

Une alarme WARNING sera ainsi déclenchée si le nombre de sessions utilisateur en cours est supérieur à 80% (```--warning-users-usage-prct='80'```) des capacités
de l'équipement; l'alarme sera de type CRITICAL au delà de 90% de sessions utilisées (```--critical-users-usage-prct='90'```).
De la même manière, des alarmes WARNING & CRITICAL seront déclenchées en cas de dépassement des seuils fixés du nombre d'authentifications erronées par seconde (```--warning-authentication-failures='50'
--critical-authentication-failures='100'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortiauthenticator_snmp.pl --plugin=network::fortinet::fortiauthenticator::snmp::plugin --mode=authenticator --help
```

### J'obtiens le message d'erreur suivant:

#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement FortiAuthenticator sur le port UDP/161,
ou que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un pare-feu bloque le flux.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes:
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes.