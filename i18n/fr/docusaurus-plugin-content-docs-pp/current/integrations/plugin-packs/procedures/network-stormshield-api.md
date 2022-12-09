---
id: network-stormshield-api
title: Stormshield API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Plugin Centreon **Stormshield API** apporte un modèle d'hôte :

* Net-Stormshield-Api-custom

Il apporte les modèles de service suivants :

| Alias      | Modèle de service              | Description                                         | Défaut | Découverte |
|:-----------|:-------------------------------|:----------------------------------------------------|:-------|:-----------|
| Cpu        | Net-Stormshield-Cpu-Api        | Contrôle du taux d'utilisation du CPU de la machine | X      |            |
| Ha         | Net-Stormshield-Ha-Api         | Contrôle la haute disponibilité                     |        |            |
| Hardware   | Net-Stormshield-Hardware-Api   | Contrôle le matériel                                | X      |            |
| Health     | Net-Stormshield-Health-Api     | Contrôle l'état de santé                            | X      |            |
| Interfaces | Net-Stormshield-Interfaces-Api | Contrôle les interfaces                             |        | X          |
| Memory     | Net-Stormshield-Memory-Api     | Contrôle la mémoire                                 | X      |            |
| Uptime     | Net-Stormshield-Uptime-Api     | Contrôle l'uptime                                   | X      |            |

### Règles de découverte

| Nom de la règle                        | Description                                                   |
|:---------------------------------------|:--------------------------------------------------------------|
| Net-Stormshield-Api-Interface-Username | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| cpu.utilization.percentage                | %     |
| *cpu_num*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Ha" label="Ha">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| members.detected.count                  |       |
| members.none.count                      |       |
| members.starting.count                  |       |
| members.waiting_peer.count              |       |
| members.ready.count                     |       |
| members.reboot.count                    |       |
| members.down.count                      |       |
| member state                            |       |
| member link status                      |       |
| member config status                    |       |
| *member_name*#member.quality.percentage | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| disk status                              |       |
| fan status                               |       |
| *fan_num*#hardware.fan.speed.rpm         | rpm   |
| power supply status                      |       |
| *psu_num*#hardware.fan.speed.rpm         | rpm   |
| *component*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Health" label="Health">

| Métrique              | Unité |
|:----------------------|:------|
| service health status |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                                      | Unité |
|:------------------------------------------------------------------------------|:------|
| interface status                                                              |       |
| *interface_user_name~interface_real_name*#interface.traffic.in.bitspersecond  | b/s   |
| *interface_user_name~interface_real_name*#interface.traffic.out.bitspersecond | b/s   |
| *interface_user_name~interface_real_name*#interface.packets.accepted.count    |       |
| *interface_user_name~interface_real_name*#interface.packets.blocked.count     |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                         | Unité |
|:---------------------------------|:------|
| memory.protected_host.percentage | %     |
| memory.fragmented.percentage     | %     |
| memory.connections.percentage    | %     |
| memory.icmp.percentage           | %     |
| memory.data_tracking.percentage  | %     |
| memory.dynamic.percentage        | %     |
| memory.ether_state.percentage    | %     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique    | Unité |
|:------------|:------|
| uptime      |       |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec les droits en lecture sur l'API est nécessaire.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-stormshield-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-stormshield-api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-stormshield-api
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Stormshield API**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

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
dnf install centreon-plugin-Network-Stormshield-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Stormshield-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-stormshield-api
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Stormshield**.
* Appliquez le modèle d'hôte **Net-Stormshield-Api-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                      | Description |
|:------------|:---------------------------|:------------|
|             | STORMSHIELDAPIEXTRAOPTIONS | --insecure  |
| X           | STORMSHIELDAPIPASSWORD     |             |
|             | STORMSHIELDAPIPORT         |             |
|             | STORMSHIELDAPIPROTO        |             |
| X           | STORMSHIELDAPIUSERNAME     |             |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_stormshield_api.pl \
    --plugin=network::stormshield::api::plugin \
    --mode=uptime \
    --hostname='10.0.0.1' \
    --api-username='my-username' \
    --api-password='my-password'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: uptime is: 6d 7h 33m 46s | 'system.uptime.seconds'=545626s;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_stormshield_api.pl \
    --plugin=network::stormshield::api::plugin \
    --mode=uptime \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_stormshield_api.pl \
    --plugin=network::stormshield::api::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
