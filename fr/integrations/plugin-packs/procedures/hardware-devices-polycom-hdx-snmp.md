---
id: hardware-devices-polycom-hdx-snmp
title: Polycom HDX SNMP
---

## Vue d'ensemble

La solution Polycom HDX vous permet d'établir des visioconférences HD flexibles pour des communications de qualité en
environnement professionnel. Rapide et simple à implémenter, le système Polycom HDX répond idéalement aux besoins des
professionnels de l'enseignement, de la santé, du commerce et de l'industrie et de la collaboration à la demande.

Le Plugin-Pack Centreon utilise le protocole SNMP pour se connecter et récupérer informations et métriques relatives aux équipements
Polycom HDX.

## Contenu du Plugin-Pack

### Objets supervisés

* Systèmes de conférences Polycom HDX

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-Detailed-->

| Metric name                           | Description                 | Unit  |
| :------------------------------------ | :-------------------------- | :---- |
| cpu.user.utilization.percentage       | CPU User utilization        |   %   |
| cpu.nice.utilization.percentage       | CPU Nice utilization        |   %   |
| cpu.system.utilization.percentage     | CPU System utilization      |   %   |
| cpu.idle.utilization.percentage       | CPU Idle utilization        |   %   |
| cpu.wait.utilization.percentage       | CPU Wait utilization        |   %   |
| cpu.kernel.utilization.percentage     | CPU Kernel utilization      |   %   |
| cpu.interrupt.utilization.percentage  | CPU Interrupt utilization   |   %   |
| cpu.softirq.utilization.percentage    | CPU SoftIrq utilization     |   %   |
| cpu.steal.utilization.percentage      | CPU Steal utilization       |   %   |
| cpu.guest.utilization.percentage      | CPU Guest utilization       |   %   |
| cpu.guestnice.utilization.percentage  | CPU Guest Nice utilization  |   %   |

<!--Interfaces-->

| Metric name                         | Description                                   | Unit |
| :---------------------------------- | :-------------------------------------------- | :--- |
| status                              | Status of the interface                       |      |
| interface.traffic.in.bitspersecond  | Incoming traffic going through the interface. | b/s  |
| interface.traffic.in.percentage     | Incoming traffic going through the interface. | b/s  |
| interface.traffic.out.bitspersecond | Outgoing traffic going through the interface. | b/s  |

Vous pouvez restreindre ce contrôle sur une interface donnée en spécifiant le nom de l'interface à superviser
(par exemple ```--interface='^eth0$'```) conjointement avec le paramètre ```--name```.

<!--Load-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| load1                       | System load 1 minute-sample                        |
| load5                       | System load 5 minutes-sample                       |
| load15                      | System load 15 minutes-sample                      |

<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device.               |   B   |
| memory.free.bytes       | Free memory on the device.                |   B   |
| memory.usage.percentage | Percentage of Memory usage on the device. |   %   |
| memory.buffer.bytes     | Buffered Memory allocation.               |   B   |
| memory.cached.bytes     | Cached Memory allocation.                 |   B   |
| memory.shared.bytes     | Shared Memory allocation.                 |   B   |

<!--Uptime-->

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      |   s   |

<!--ViewStation-Statistics-->

| Metric name                             | Description                                                                                  | Unit |
| :-------------------------------------- | :------------------------------------------------------------------------------------------- | :--- |
| viewstation.h323.packet.loss.percentage | The current combined (audio/video) average percentage packet loss when in an H.323 call      |  %   |
| viewstation.h323.jitter.milliseconds    | The current combined (audio/video) cumulative average jitter (in ms) when in an H.323 call.  |  ms  |
| viewstation.h323.latency.count          | The current average latency based on round trip delay when in an H.323 call.                 |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SNMP de l'équipement

Sur l'équipement Polycom HDX, configurez et activez l'agent SNMP en suivant ces étapes:

* Connectez-vous à l'interface Web d'administration de l'équipement
* Dans le menu, sélectionnez *System > Manage > Credentials*
* Configurez les paramètres SNMP en spécifiant la version et la communauté à utiliser

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements Polycom HDX:

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Hdx-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Polycom HDX SNMP* 
depuis la page "Configuration > Plugin Packs > Gestionnaire" 

<!--Offline IMP License-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements Polycom HDX:

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Hdx-Snmp
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-hardware-devices-polycom-hdx-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Polycom HDX SNMP* 
depuis la page "Configuration > Plugin Packs > Gestionnaire"

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Device-Polycom-Hdx-SNMP-Custom*

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
/usr/lib/centreon/plugins/centreon_polycom_hdx_snmp.pl \
    --plugin=hardware::devices::polycom::hdx::snmp::plugin  \
	--mode=viewstation-stats \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='mysnmpcommunity' \
	--warning-h323-packet-loss='5' \
	--critical-h323-packet-loss='10'
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: View Station Phone Number: '0123456789' Stats: H323 Packet Loss 1.00 %, H323 (audio/video) Jitter 30.00 ms, H323 (audio/video) Latency 4.00 |
'h323-packet-loss'=1.00%;;;0;100 'h323-jitter'=30.00ms;;;0;100 'vs_latency'=4.00;;;0;100
```

Dans cet exemple, le Plugin récupère les statistiques de sessions d'un équipement Polycom HDX (```--plugin=hardware::devices::polycom::hdx::snmp::plugin --mode=viewstation-stats```)
identifié par l'adresse IP *10.0.0.1* (```--hostname=10.0.0.1```). Les paramètres de communauté et de version SNMP (```--snmp-version='2c' --snmp-community='mysnmpcommunity'```) 
correspondants sont renseignés afin de pouvoir joindre l'équipement.

Une alarme WARNING sera ainsi déclenchée si le taux moyen de *packet-loss* des sessions H323 est supérieur à 5% (```---warning-h323-packet-loss='5'```);
l'alarme sera de type CRITICAL au delà de 10% de ce même taux observé (```--critical-h323-packet-loss='10'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée 
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_polycom_hdx_snmp.pl --plugin=hardware::devices::polycom::hdx::snmp::plugin --mode=viewstation-stats --help
```

### J'obtiens le message d'erreur suivant:

#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Polycom HDX sur le port UDP/161, 
ou que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un pare-feu bloque le flux.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes.