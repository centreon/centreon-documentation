---
id: network-athonet-epc-snmp
title: Athonet ePC SNMP
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Athonet ePc SNMP collecte les données pour:
* aggregate
* apns
* interfaces (diameter, GA, GTPC, LTE)
* licence
* lte

Ce tableau décrit quelles données peuvent être collectés sur les différents rôles.

|                     | MME | SPGW | HSS | PCRF |
| :------------------ | :-: | :--: | :-: | :--: |
| aggregate           |     |  X   |  X  |      |
| apns                |     |  X   |     |      |
| interfaces-diameter |  X  |  X   |  X  |  X   |
| interfaces-ga       |     |  X   |     |      |
| interfaces-gtpc     |  X  |  X   |     |      |
| interfaces-lte      |  X  |      |     |      |
| license             |  X  |  X   |  X  |  X   |
| lte                 |  X  |      |     |      |

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Aggregate-->

| Metric name                          | Description                       | Unit  |
| :----------------------------------- | :-------------------------------- | :---- |
| aggregate.traffic.in.bytespersecond  | Aggregate incoming traffic        | B/s   |
| aggregate.traffic.out.bytespersecond  Aggregate outgoing traffic         | B/s   |
| hss.users.roaming.connected.count    | Number of roaming users connected |       |
| hss.requests.authentication.count    | Number of authentication requests |       |
| hss.location.updates.count           | Number of location updates        |       |

<!--Apns-->

| Metric name                                | Descritption                           | Unit  |
| :----------------------------------------- | :------------------------------------- | :---- |
| *apn_name*\#apn.traffic.in.bytespersecond  | Incoming traffic going through the apn | B/s   |
| *apn_name*\#apn.traffic.out.bytespersecond | Outgoing traffic going through the apn | B/s   |
| *apn_name*\#apn.pdp_contexts.count         | Number of pdp contexts                 |       |

<!--Interfaces-diameter-->

| Metric name                     | Description                  | Unit  |
| :------------------------------ | :--------------------------- | :---- |
| diameter.interfaces.total.count | Number of interfaces         |       |
| status                          | Status of the interface      |       |
| transport status                | Status of the transport      |       |

<!--Interfaces-gtpc-->

| Metric name                     | Description                  | Unit  |
| :------------------------------ | :--------------------------- | :---- |
| gtpc.interfaces.total.count     | Number of interfaces         |       |
| status                          | Status of the interface      |       |

<!--Interfaces-ga-->

| Metric name                     | Description                  | Unit  |
| :------------------------------ | :--------------------------- | :---- |
| ga.interfaces.total.count       | Number of interfaces         |       |
| status                          | Status of the interface      |       |

<!--Interfaces-lte-->

| Metric name                                                                             | Description                                                                     | Unit  |
| :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ | :---- |
| lte.interfaces.total.count                                                              | Number of interfaces                                                            |       |
| status                                                                                  | Status of the interface                                                         |       |
| *interface_name*\#lte.interface.traffic.in.bytespersecond                               | Incoming traffic going through the interface                                    | B/s   |
| *interface_name*\#lte.interface.traffic.out.bytespersecond                              | Outgoing traffic going through the interface                                    | B/s   |
| *interface_name*\#lte.interface.users.connected.count                                   | Number of connected users                                                       |       |
| *interface_name*\#lte.interface.users.idle.count                                        | Number of idle users                                                            |       |
| *interface_name*\#lte.interface.sessions.active.count                                   | Number of active sessions from users                                            |       |
| *interface_name*\#lte.interface.requests.attach.success.count                           | Number of succesfull attach request                                             |       |
| *interface_name*\#lte.interface.requests.attach.success.percentage                      | Percentage of succesfull attach request                                         | %     |
| *interface_name*\#lte.interface.requests.pdn_context.activations.success.count          | Number of succesfull PDN context activation                                     |       |
| *interface_name*\#lte.interface.requests.pdn_context.activations.success.percentage     | Percentage of succesfull PDN context activation                                 | %     |
| *interface_name*\#lte.interface.requests.ue_context_release.total.count                 | Number of UE context request release                                            |       |
| *interface_name*\#lte.interface.requests.ue_context_release.radio_lost.count            | Number of UE context request release with cause 'Radio Connection with UE lost' |       |
| *interface_name*\#lte.interface.requests.pdn_context.reject.insufficent_resources.count | Number of PDN Context reject with cause 'Insufficent Resources'                 |       |
| *interface_name*\#lte.interface.requests.pdn_context.reject.no_apn.count                | Number of PDN Context reject with cause 'Missing or unknown APN'                |       |
| *interface_name*\#lte.interface.requests.pdn_context.reject.not_subscribed.count        | Number of PDN Context reject with cause 'Request service option not subscribed' |       |

<!--License-->

| Metric name                              | Description                                   | Unit  |
| :--------------------------------------- | :-------------------------------------------- | :---- |
| status                                   | Status of the license                         |       |
| license.expires.days                     | Expiration time                               |       |
| license.users.active.usage.count         | Number of active users on the license         |       |
| license.users.active.free.count          | Number of free active users on the license    |       |
| license.users.active.usage.percentage    | Percentage of active users on the license     | %     |
| license.sessions.active.usage.count      | Number of active sessions on the license      |       |
| license.sessions.active.free.count       | Number of free active sessions on the license |       |
| license.sessions.active.usage.percentage | Percentage of active sessions on the license  | %     |
| license.usim.usage.count                 | Number of provisioned usim on the license     |       |
| license.usim.free.count                  | Number of provisioned usim on the license     |       |
| license.usim.usage.percentage            | Percentage of provisioned usim on the license | %     |

<!--Lte-->

| Metric name                                                           | Description                                                                     | Unit  |
| :-------------------------------------------------------------------- | :------------------------------------------------------------------------------ | :---- |
| lte.interface.traffic.in.bytespersecond                               | Incoming traffic going through the interface                                    | B/s   |
| lte.interface.traffic.out.bytespersecond                              | Outgoing traffic going through the interface                                    | B/s   |
| lte.interface.users.connected.count                                   | Number of connected users                                                       |       |
| lte.interface.users.idle.count                                        | Number of idle users                                                            |       |
| lte.interface.sessions.active.count                                   | Number of active sessions from users                                            |       |
| lte.interface.requests.attach.success.count                           | Number of succesfull attach request                                             |       |
| lte.interface.requests.attach.success.percentage                      | Percentage of succesfull attach request                                         | %     |
| lte.interface.requests.pdn_context.activations.success.count          | Number of succesfull PDN context activation                                     |       |
| lte.interface.requests.pdn_context.activations.success.percentage     | Percentage of succesfull PDN context activation                                 | %     |
| lte.interface.requests.ue_context_release.total.count                 | Number of UE context request release                                            |       |
| lte.interface.requests.ue_context_release.radio_lost.count            | Number of UE context request release with cause 'Radio Connection with UE lost' |       |
| lte.interface.requests.pdn_context.reject.insufficent_resources.count | Number of PDN Context reject with cause 'Insufficent Resources'                 |       |
| lte.interface.requests.pdn_context.reject.no_apn.count                | Number of PDN Context reject with cause 'Missing or unknown APN'                |       |
| lte.interface.requests.pdn_context.reject.not_subscribed.count        | Number of PDN Context reject with cause 'Request service option not subscribed' |       |

<!--END_DOCUSAURUS_CODE_TABS-->


## Prérequis

Afin de contrôler vos équipement Athonet ePC, le SNMP doit être configuré. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Athonet-Epc-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Athonet ePC SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Athonet-Epc-Snmp
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-athonet-epc-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Athonet ePC SNMP* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Adresse IP/DNS*, *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *Net-Athonet-Epc-SNMP-Custom*

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
/usr/lib/centreon/plugins/centreon_athonet_epc_snmp.pl \
    --plugin=network::athonet::epc::snmp::plugin \
    --mode=lte \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='athonet_ro' \
    --warning-users-connected='100' \
    --critical-users-connected='200' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Lte traffic in: 0 B/s, traffic out: 0 B/s - connected users: 0, idle users: 0, active sessions: 0 - attach requests total: 0 success: 0 (100.00%) - pdn context activation requests total: 0 success: 0 (100.00%) - ue context release requests: 0, ue context release with radio lost requests: 0 - pdn context requests reject insufficent resources: 0, missing or unknown apn: 0, not subscribed: 0 | 'lte.traffic.in.bytespersecond'=0B/s;;;0; 'lte.traffic.out.bytespersecond'=0B/s;;;0; 'lte.users.connected.count'=0;0:100;0:200;0; 'lte.users.idle.count'=0;;;0; 'lte.sessions.active.count'=0;;;0; 'lte.requests.attach.success.count'=0;;;0;0 'lte.requests.attach.success.percentage'=100%;;;0;100 'lte.requests.pdn_context.activations.success.count'=0;;;0;0 'lte.requests.pdn_context.activations.success.percentage'=100%;;;0;100 'lte.requests.ue_context_release.total.count'=0;;;0; 'lte.requests.ue_context_release.radio_lost.count'=0;;;0; 'lte.requests.pdn_context.reject.insufficent_resources.count'=0;;;0; 'lte.requests.pdn_context.reject.no_apn.count'=0;;;0; 'lte.requests.pdn_context.reject.not_subscribed.count'=0;;;0;
checking lte
    traffic in: 0 B/s, traffic out: 0 B/s
    connected users: 0, idle users: 0, active sessions: 0
    attach requests total: 0 success: 0 (100.00%)
    pdn context activation requests total: 0 success: 0 (100.00%)
    ue context release requests: 0, ue context release with radio lost requests: 0
    pdn context requests reject insufficent resources: 0, missing or unknown apn: 0, not subscribed: 0
```

Cette commande contrôle les statistiques LTE (```--mode=lte```) d'un équipement Athonet ePC ayant pour adresse *10.30.2.114* (```--hostname=10.30.2.114```) 
en version *2c* du protocol SNMP (```--snmp-version='2c'```) et avec la communauté *athonet_ro* (```--snmp-community='athonet_ro'```).

Cette commande déclenchera une alarme WARNING si le nombre d'utilisateurs connectés est supérieur à 100 (```--warning-users-connected='100'```)
et une alarme CRITICAL si supérieur à 200 (```--critical-users-connected='200'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_athonet_epc_snmp.pl \
    --plugin=network::athonet::epc::snmp::plugin \
    --mode=lte \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement sur le port 161, 
ou alors que la communauté SNMP configurée n'est pas correcte. 
Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 
 * L'équipement ne prend pas en charge la MIB utilisée par le Plugin (branche: .1.3.6.1.4.1.35805.10).
 * L'OID SNMP ciblé ne peut pas être récupéré en raison de privilèges d'équipement insuffisants.
