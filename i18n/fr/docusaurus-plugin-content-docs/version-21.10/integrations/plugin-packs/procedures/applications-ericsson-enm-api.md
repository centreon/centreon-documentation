---
id: applications-ericsson-enm-api
title: Ericsson ENM API
---

## Contenu du Pack

### Objets supervisés

Le Pack Ericsson ENM collecte les données pour:
* Nodes

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Hosts-->

Le Pack Centreon *Ericsson ENM API* inclut un *provider* de découverte d'Hôtes.
Celui-ci permet de découvrir l'ensemble des noeuds rattachés à un Ericsson Network Manager.

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module:
[Découverte des hôtes](../../../monitoring/discovery/hosts-discovery)

<!--Services-->

| Nom de la règle                      | Description                                                  |
| :----------------------------------- | :----------------------------------------------------------- |
| App-Ericsson-Enm-Api-Node-Celltdd-Id | Découvre les cells tdd et supervise leur statut              |
| App-Ericsson-Enm-Api-Node-Fru-Id     | Découvre les unités remplaçables et supervise leur statut    |
| App-Ericsson-Enm-Api-Node-Id         | Découvre les noeuds et supervise ses composants (fru, cells) |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Nodes-->

| Metric name                 | Description                                  | Unit  |
| :-------------------------- | :------------------------------------------- | :---- |
| nodes.total.count           | Number of nodes                              |       |
| node synchronization status | Current synchronization status of the node   |       |
| fru status                  | Current status of the field replaceable unit |       |
| cell tdd status             | Current status of the cell tdd               |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre Ericsson Network Manager, l'API Rest doit être configurée.
Le Pack ne supporte que l'authentification par utilisateur et mot de passe.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Ericsson-Enm-Api
```

2. Sur l'interface Web de Centreon, installer le Pack *Ericsson ENM API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Ericsson-Enm-Api
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-applications-ericsson-enm-api
```

3. Sur l'interface Web de Centreon, installer le Pack *Ericsson ENM API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Pack est conçu de manière à avoir dans Centreon un hôte par Ericsson Network Manager.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Ericsson-Enm-Api-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                    | Description                                                                |
| :-------- | :---------------------- | :------------------------------------------------------------------------- |
| X         | ERICSSONENMAPIPORT      | Port used (Default: 443)                                                   |
| X         | ERICSSONENMAPIPROTO     | Specify https if needed (Default: 'https')                                 |
| X         | ERICSSONENMAPIUSERNAME  | Api username                                                               |
| X         | ERICSSONENMAPIPASSWORD  | Api password                                                               |
|           | ERICSSONENMEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
    --plugin=apps::ericsson::enm::api::plugin \
    --mode=nodes \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --http-backend='curl' \
    --insecure \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --filter-node-id='ORA01200E_02' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Node 'ORA01200E_02' synchronization status: synchronized - All field replaceable units are ok - All tdd cells are ok | 'nodes.total.count'=1;;;0;
checking node 'ORA01200E_02'
    synchronization status: synchronized
    field replaceable unit 'BB-1' [label: ORA01200E_02] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-1' [label: RRU-1_ORA4043_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-10' [label: RRU-10_ORA4010_11] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-11' [label: RRU-11_ORA4019_11] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-12' [label: RRU-12_ORA4024_11_12] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-13' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-14' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-15' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-2' [label: RRU-2_ORA4045_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-3' [label: RRU-3_ORA4047_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-4' [label: RRU-4_ORA4049_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-5' [label: RRU-5_ORA4056_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-6' [label: RRU-6_ORA4054_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-7' [label: RRU-7_ORA4052_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-8' [label: RRU-8_ORA4050_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-9' [label: RRU-9_ORA4005_11_12] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    tdd cell 'ORA4005_11' [label: ORA-Metro-S31A_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4005_12' [label: ORA-Metro-S31B_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4010_11' [label: ORA-Metro-S36_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4019_11' [label: ORA-Metro-S41_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4024_11' [label: ORA-Metro-S46A_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4024_12' [label: ORA-Metro-S46B_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4043_11' [label: ORA-Metro-T2F04_245] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4045_11' [label: ORA-Metro-T2F16_325] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4045_12' [label: ORA-Metro-T2F16-RDS_140] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4047_11' [label: ORA-Metro-T2F28_10] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4047_12' [label: ORA-Metro-T2F28-RDS_195] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4049_11' [label: ORA-Metro-T2F34_80] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4050_11' [label: ORA-Metro-T2F94_100] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4052_11' [label: ORA-Metro-T2F90_65] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4052_12' [label: ORA-Metro-T2F90-RDS_215] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4054_11' [label: ORA-Metro-T2F80_0] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4054_12' [label: ORA-Metro-T2F80-RDS_150] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4056_11' [label: ORA-Metro-T2F68_270] operational state: enabled, admin state: unlocked
```

Cette commande contrôle les noeuds (```--mode=nodes```).

La commande utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et elle se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichés
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
    --plugin=apps::ericsson::enm::api::plugin \
    --mode=nodes \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins#http-and-api-checks)
