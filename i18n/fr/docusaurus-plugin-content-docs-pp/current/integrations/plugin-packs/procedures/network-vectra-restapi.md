---
id: network-vectra-restapi
title: Vectra Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Vectra Rest API** apporte un modèle d'hôte :

* Net-Vectra-Restapi-custom

Il apporte les modèles de service suivants :

| Alias      | Modèle de service             | Description                                               | Défaut | Découverte |
|:-----------|:------------------------------|:----------------------------------------------------------|:-------|:-----------|
| Cpu        | Net-Vectra-Cpu-Restapi        | Contrôle du taux d'utilisation du CPU de la machine       | X      |            |
| Disk       | Net-Vectra-Disk-Restapi       | Contrôle l'utilisation disque                             | X      |            |
| Interfaces | Net-Vectra-Interfaces-Restapi | Contrôle les interfaces                                   |        | X          |
| Memory     | Net-Vectra-Memory-Restapi     | Contrôle du taux d'utilisation mémoire                    | X      |            |
| Sensors    | Net-Vectra-Sensors-Restapi    | Contrôle les sondes                                       |        | X          |
| Uptime     | Net-Vectra-Uptime-Restapi     | Durée depuis laquelle le serveur tourne sans interruption | X      |            |

### Règles de découverte

| Nom de la règle                   | Description                                                             |
|:----------------------------------|:------------------------------------------------------------------------|
| Net-Vectra-Restapi-Interface-Name | Découvre les interfaces réseau et supervise le statut et l'utilisation |
| Net-Vectra-Restapi-Sensor-Name    | Découvre les sondes réseau et supervise l'utilisation                  |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                   | Unité |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk" label="Disk">

| Métrique              | Unité |
|:----------------------|:------|
| disk.usage.bytes      | B     |
| disk.free.bytes       | B     |
| disk.usage.percentage | %     |
| raid status           |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| interface status                                      |       |
| *interface_name*#interface.traffic.peak.bitspersecond | b/s   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| dimm status             |       |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Métrique                                                          | Unité |
|:------------------------------------------------------------------|:------|
| sensor status                                                     |       |
| sensor connectivity statu                                         |       |
| sensor trafficdrop status                                         |       |
| sensor interface status                                           |       |
| *sensor_name~interface_name*#interface.traffic.peak.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds |       |

</TabItem>
</Tabs>

## Prérequis

Le Pack utilise les endpoints d'API suivants :
* /health/connectivity
* /health/cpu
* /health/disk
* /health/memory
* /health/sensors
* /health/system
* /health/trafficdrop

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-vectra-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Vectra Rest API**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-vectra-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Vectra**.
* Appliquez le modèle d'hôte **Net-Vectra-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro           | Description        |
|:------------|:----------------|:-------------------|
|             | APIEXTRAOPTIONS | --insecure         |
|             | APIPORT         | (Défaut : '443')   |
|             | APIPROTO        | (Défaut : 'https') |
| X           | APITOKEN        |                    |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_vectra_restapi.pl \
    --plugin=network::vectra::restapi::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --token='mytoken'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Ram total: 187.39 GB used (-buffers/cache): 85.47 GB (45.61%) free: 59.08 GB (31.53%) - All dimm are ok | 'memory.usage.bytes'=91772731392B;;;0;201210691584 'memory.free.bytes'=63436963840B;;;0;201210691584 'memory.usage.percentage'=45.61%;;;0;100
Dimm 'mc0' status: ok
Dimm 'mc1' status: ok
Dimm 'mc2' status: ok
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
    --plugin=network::vectra::restapi::plugin \
    --mode=memory \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
    --plugin=network::vectra::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
