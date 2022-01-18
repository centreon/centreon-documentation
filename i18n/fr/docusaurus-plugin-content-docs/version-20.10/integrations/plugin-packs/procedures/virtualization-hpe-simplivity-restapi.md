---
id: virtualization-hpe-simplivity-restapi
title: HPE Simplivity Rest API
---

## Contenu du Pack

### Modèles

Le Pack Centreon HPE Simplivity Rest API apporte 1 modèle d'hôte :
* Virt-Hpe-Simplivity-Restapi-custom

Il apporte les Modèles de Service suivants :

| Service Alias      | Service Template                               | Default | Discovery |
|:-------------------|:-----------------------------------------------|:--------|:----------|
| Hosts              | Virt-Hpe-Simplivity-Hosts-Restapi              | X       | X         |
| Omnistack-Clusters | Virt-Hpe-Simplivity-Omnistack-Clusters-Restapi | X       |           |
| Virtual-Machines   | Virt-Hpe-Simplivity-Virtual-Machines-Restapi   |         |           |

### Règles de découverte

| Rule name                             | Description                                                |
|:--------------------------------------|:-----------------------------------------------------------|
| Virt-Hpe-Simplivity-Restapi-Host-Name | Découvre les hôtes et supervise le statut et l'utilisation |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                   | Description                            | Unit  |
| :---------------------------- | :------------------------------------- | :---- |
| cpu.utilization.5s.percentage | CPU utilization for the last 5 seconds | %     |
| cpu.utilization.1m.percentage | CPU utilization for the last minute    | %     |
| cpu.utilization.5m.percentage | CPU utilization for the last 5 minutes | %     |

<!--Hardware-->

| Metric name                                      | Description                        | Unit  |
| :----------------------------------------------- | :--------------------------------- | :---- |
| status                                           | Global health status of the device |       |
| *sensor_num*#hardware.sensor.temperature.celsius | Temperature of the sensor          | C     |
| *fan_num*#hardware.fan.speed.rpm                 | Speed of the fan                   | rpm   |

<!--Interfaces-->

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

<!--Memory-->

| Metric name             | Description                | Unit  |
| :---------------------- | :------------------------- | :---- |
| memory.usage.bytes      | Memory usage               | B     |
| memory.free.bytes       | Free memory                | B     |
| memory.usage.percentage | Memory usage in percentage | %     |

<!--Uptime-->

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre HPE Simplivity, l'API Rest doit être configurée:
* https://developer.hpe.com/platform/hpe-simplivity/home/

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **HPE Simplivity Rest API** :

```bash
yum install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

2. Sur l'interface Web de Centreon, installer le Pack **HPE Simplivity Rest API** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **HPE Simplivity Rest API** :

```bash
yum install centreon-plugin-Virtualization-Hpe-Simplivity-Restapi
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **HPE Simplivity Rest API** :

 ```bash
yum install centreon-pack-virtualization-hpe-simplivity-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack **HPE Simplivity Rest API** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, s**Alias** & **IP Address / DNS** correspondant à votre serveur **HPE Simplivity Rest API**.
* Appliquez le Modèle d'Hôte **Virt-Hpe-Simplivity-Restapi-custom**

Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                  | Description                                                                |
| :-------- | :-------------------- | :------------------------------------------------------------------------- |
| X         | OMNISTACKAPIPORT      | Port used (Default: 443)                                                   |
| X         | OMNISTACKAPIPROTO     | Specify https if needed (Default: 'https')                                 |
| X         | OMNISTACKAPIUSERNAME  | Api username                                                               |
| X         | OMNISTACKAPIPASSWORD  | Api password                                                               |
|           | OMNISTACKEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine**:

```bash
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
    --plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
    --mode=hosts \
    --hostname='10.0.0.1' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All hosts are ok | 'hosts.alive.count'=4;;;; 'hosts.faulty.count'=0;;;; 'hosts.managed.count'=0;;;; 'hosts.removed.count'=0;;;; 'hosts.suspected.count'=0;;;; 'hosts.unknown.count'=0;;;; 'svt01.acme.com#host.components.green.count'=15;;;; 'svt01.acme.com#host.components.yellow.count'=0;;;; 'svt01.acme.com#host.components.red.count'=0;;;; 'svt01.acme.com#host.components.unknown.count'=0;;;; 'svt02.acme.com#host.components.green.count'=15;;;; 'svt02.acme.com#host.components.yellow.count'=0;;;; 'svt02.acme.com#host.components.red.count'=0;;;; 'svt02.acme.com#host.components.unknown.count'=0;;;; 'svt11.acme.com#host.components.green.count'=15;;;; 'svt11.acme.com#host.components.yellow.count'=0;;;; 'svt11.acme.com#host.components.red.count'=0;;;; 'svt11.acme.com#host.components.unknown.count'=0;;;; 'svt12.acme.com#host.components.green.count'=15;;;; 'svt12.acme.com#host.components.yellow.count'=0;;;; 'svt12.acme.com#host.components.red.count'=0;;;; 'svt12.acme.com#host.components.unknown.count'=0;;;;
checking host 'svt01.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
checking host 'svt02.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
checking host 'svt11.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
checking host 'svt12.acme.com'
    status: alive
    logical drive '1' status: green
    logical drive '3' status: green
    physical drive '1:1-1' status: green
    physical drive '1:1-2' status: green
    physical drive '1:1-3' status: green
    physical drive '1:1-4' status: green
    physical drive '1:1-5' status: green
    physical drive '1:1-6' status: green
    physical drive '3:1-1' status: green
    physical drive '3:1-2' status: green
    physical drive '3:1-3' status: green
    physical drive '3:1-4' status: green
    physical drive '3:1-5' status: green
    physical drive '3:1-6' status: green
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
    --plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
    --mode=hosts \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_hpe_simplivity_restapi.pl \
    --plugin=apps::virtualization::hpe::simplivity::restapi::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins#http-and-api-checks)
pour le diagnostic des erreurs communes des Plugins Centreon.
