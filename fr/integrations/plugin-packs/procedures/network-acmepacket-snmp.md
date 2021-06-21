---
id: network-acmepacket-snmp
title: Acme Packet SNMP
---

## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack Acme Packet SNMP collecte les données pour:
* Codec
* Hardware
* Interfaces
* Policy servers
* Realm
* Security
* Sip
* System

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Nom de la règle                        | Description                                                                                  |
| :------------------------------------- | :------------------------------------------------------------------------------------------- |
| Net-Acmepacket-SNMP-Interface-Name     | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |
| Net-Acmepacket-SNMP-Policy-Server-Name | Découvre les policy servers externes et supervise leurs statistiques                         |
| Net-Acmepacket-SNMP-Realm-Name         | Découvre les Realms et supervise l'utilisation                                               |
| Net-Acmepacket-SNMP-Sip-Name           | Découvre les interfaces Sip et supervise le statut et l'utilisation                          |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques et statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Codec-->

| Metric name                            | Description                                              | Unit |
| :------------------------------------- | :------------------------------------------------------- | :--- |
| transcoding.sessions.active.count      | Total number of active transcoded sessions               |      |
| transcoding.resources.usage.count      | Number of transcoding resources currently in-use         |      |
| transcoding.resources.free.count       | Number of transcoding resources currently free           |      |
| transcoding.resources.usage.percentage | The percentage of transcoding resources currently in-use | %    |

<!--Hardware-->

| Metric name                                        | Description                      | Unit |
| :------------------------------------------------- | :------------------------------- | :--- |
| fan status                                         | Status of the fan                |      |
| *fan\_description*#hardware.fan.speed.percentage   | Speed of the fan                 | %    |
| psu status                                         | Status of the power supply       |      |
| temperature status                                 | Status of the temperature sensor |      |
| *sensor\_description*#hardware.temperature.celsius | Temperature of the sensor        | C    |
| voltage status                                     | Status of the voltage sensor     |      |
| *sensor\_description*#hardware.voltage.volt        | Voltage of the sensor            | V    |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Policy-servers-->

| Metric name                                                                                | Description                                                                        | Unit |
| :----------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- | :--- |
| policy_servers.total.count                                                                 | Total number of policy servers                                                     |      |
| *policy\_name*\#policy_server.client_transactions.total.count                              | Total number of client transactions for Rx policy server                           |      |
| *policy\_name*\#policy_server.client_transactions.errors.count                             | Total number of client transactions Errors received for Rx policy server           |      |
| *policy\_name*\#policy_server.server_transactions.total.count                              | Total number of server transactions for Rx policy server                           |      |
| *policy\_name*\#policy_server.server_transactions.requests.count                           | Total number of requests received on server transaction for Rx policy server       |      |
| *policy\_name*\#policy_server.server_transactions.requests.dropped.count                   | Total number of requests dropped  by server transactions for Rx policy server      |      |
| *policy\_name*\#policy_server.server_transactions.responses.succeeded.count                | Total number of success responses sent by server transactions for Rx policy server |      |
| *policy\_name*\#policy_server.server_transactions.responses.errors.count                   | Total number of error responses sent by server transactions for Rx policy server   |      |
| *policy\_name*\#policy_server.messages.authorization_authentication_request.count          | Total number of AAR messages sent by this Rx policy server                         |      |
| *policy\_name*\#policy_server.messages.authorization_authentication_answer.succeeded.count | Total number of AAA success messages for Rx policy server                          |      |
| *policy\_name*\#policy_server.messages.authorization_authentication_answer.errors.count    | Total number of AAA error messages for Rx policy server                            |      |
| *policy\_name*\#policy_server.messages.session_termination_request.count                   | Total number of STR messages sent by this Rx policy server                         |      |
| *policy\_name*\#policy_server.messages.session_termination_answer.succeeded.count          | Total number of STA success messages for Rx policy server                          |      |
| *policy\_name*\#policy_server.messages.session_termination_answer.errors.count             | Total number of STA error messages for Rx policy server                            |      |
| *policy\_name*\#policy_server.messages.abort_session_request.count                         | Total number of ASR messages sent by this Rx policy server                         |      |
| *policy\_name*\#policy_server.messages.abort_session_answer.succeeded.count                | Total number of ASA success messages for Rx policy server                          |      |
| *policy\_name*\#policy_server.messages.abort_session_answer.errors.count                   | Total number of ASA error messages for Rx policy server                            |      |
| *policy\_name*\#policy_server.messages.re_auth_request.count                               | Total number of RAR messages received by this Rx policy server                     |      |
| *policy\_name*\#policy_server.messages.re_auth_answer.succeeded.count                      | Total number of RAA success messages for Rx policy server                          |      |
| *policy\_name*\#policy_server.messages.re_auth_answer.errors.count                         | Total number of RAA error messages for Rx policy server                            |      |

<!--Realm-usage-->

| Metric name                                       | Description                              | Unit |
| :------------------------------------------------ | :--------------------------------------- | :--- |
| *realm\_name*\#realm.sessions.in.current.count    | Current number of inbound sessions       |      |
| *realm\_name*\#realm.sessions.in.rate.count       | Current number of inbound sessions rate  |      |
| *realm\_name*\#realm.sessions.in.total.count      | Total number of inbound sessions         |      |
| *realm\_name*\#realm.sessions.out.current.count   | Current number of outbound sessions      |      |
| *realm\_name*\#realm.sessions.out.rate.count      | Current number of outbound sessions rate |      |
| *realm\_name*\#realm.sessions.out.total.count     | Total number of outbound sessions        |      |
| *realm\_name*\#realm.rfactor.qos.average.count    | Average number of QoS RFactor            |      |
| *realm\_name*\#realm.rfactor.execeded.total.count | Total number of RFactor exceeded         |      |

<!--Security-->

| Metric name                                                            | Description                                                    | Unit |
| :--------------------------------------------------------------------- | :------------------------------------------------------------- | :--- |
| security.ipsec.tunnels.count                                           | The number of IPsec tunnels currently in progress              |      |
| security.ipsec.license.usage.percentage                                | The percentage of licensed IPsec tunnels currently in progress |      |
| security.ims_aka.registrations.total.count                             | Total number of registration messages received                 |      |
| security.ims_aka.registrations.protected.count                         | Total number of protected registration messages received       |      |
| security.ims_aka.security_association_add.requests.in.count            | Total number of IMS-AKA ADD-SA requests received               |      |
| security.ims_aka.security_association_add.responses.out.succeded.count | Total number of IMS-AKA ADD-SA success responses sent          |      |
| security.ims_aka.security_association_add.responses.out.failed.count   | Total number of IMS-AKA ADD-SA fail responses sent             |      |
| security.ims_aka.security_association_add.added.count                  | Total number of IMS-AKA ADD-SA added                           |      |
| security.ims_aka.security_association_del.requests.in.count            | Total number of IMS-AKA DEL-SA requests received               |      |
| security.ims_aka.security_association_del.responses.out.succeded.count | Total number of IMS-AKA DEL-SA success responses sent          |      |
| security.ims_aka.security_association_del.responses.out.failed.count   | Total number of IMS-AKA DEL-SA fail responses sent             |      |
| security.ims_aka.security_association_del.deleted.count                | Total number of IMS-AKA DEL-SA fail responses sent             |      |

<!--Sip-usage-->

| Metric name                                 | Description                         | Unit |
| :------------------------------------------ | :---------------------------------- | :--- |
| status                                      | Status of the SIP                   |      |
| *sip\_name*\#sip.sessions.in.rate           | current number of inbound sessions  |      |
| *sip\_name*\#sip.sessions.out.rate          | current number of outbound sessions |      |
| *sip\_name*\#sip.stats.latency.milliseconds | Average Latency                     |      |
| *sip\_name*\#sip.stats.asr.percentage       | Answer-to-seizure ratio             |      |

<!--System-usage-->

| Metric name                | Description                 | Unit |
| :------------------------- | :-------------------------- | :--- |
| health.score.percentage    | Current health score        | %    |
| cpu.utilization.percentage | CPU utilization             | %    |
| memory.usage.percentage    | Memory usage                | %    |
| licence.usage.percentage   | Number of license used      | %    |
| sessions.current.count     | Current number of sessions  |      |
| calls.current.count        | Current number of calls     |      |
| replication status         | Status of the replication   |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Acme Packet, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Acmepacket-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack *Acme Packet* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Acmepacket-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin Pack via le RPM:

```bash
yum install centreon-pack-network-acmepacket-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack *Acme Packet* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Acmepacket-SNMP-Custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \
    --plugin=network::acmepacket::snmp::plugin \
    --mode=system-usage \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='acme_ro' \
    --warning-cpu-load='90' \
    --critical-cpu-load='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: System usage is ok | 'health.score.percentage'=100.00%;;;0;100 'cpu.utilization.percentage'=2.00%;0:90;0:95;0;100 'memory.usage.percentage'=9.00%;;;0;100 'licence.usage.percentage'=0.00%;;;0;100 'sessions.current.count'=0;;;0; 'calls.current.count'=0/s;;;0;
checking system
    health score: 100.00 %
    cpu load: 2.00 %
    memory used: 9.00 %
    license used: 0.00 %
    current sessions: 0
    current calls: 0/s
    replication state: active
```

Cette commande contrôle le système (```--mode=system-usage```) d'un équipement Acme Packet ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *acme_ro* (```--snmp-community='acme_ro'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-cpu-load='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-cpu-load='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \
    --plugin=network::acmepacket::snmp::plugin \
    --mode=system-usage \
    --help
```

### Diagnostic des erreurs communes  

#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.9148).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
