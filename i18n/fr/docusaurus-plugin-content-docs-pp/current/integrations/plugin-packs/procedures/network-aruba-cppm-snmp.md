---
id: network-aruba-cppm-snmp
title: Aruba CPPM SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Aruba CPPM SNMP** apporte un modèle d'hôte :

* Net-Aruba-Cppm-SNMP-custom

Il apporte les modèles de service suivants :

| Alias        | Modèle de service                | Description                                             | Défaut | Découverte |
|:-------------|:---------------------------------|:--------------------------------------------------------|:-------|:-----------|
| Cpu          | Net-Aruba-Cppm-Cpu-SNMP          | Contrôle l'utilisation processeur                       | X      |            |
| Disks        | Net-Aruba-Cppm-Disks-SNMP        | Contrôle l'utilisation des disques                      | X      |            |
| Interfaces   | Net-Aruba-Cppm-Interfaces-SNMP   | Contrôle les interfaces                                 |        | X          |
| Memory       | Net-Aruba-Cppm-Memory-SNMP       | Contrôle l'utilisation mémoire                          | X      |            |
| Radius       | Net-Aruba-Cppm-Radius-SNMP       | Contrôle les statistiques radius                        |        |            |
| Repositories | Net-Aruba-Cppm-Repositories-SNMP | Contrôle les statistiques des dépôts d'authentification |        |            |
| Tacacs       | Net-Aruba-Cppm-Tacacs-SNMP       | Contrôle les statistiques TACACS                        |        |            |

### Règles de découverte

| Nom de la règle                    | Description                                                            |
|:-----------------------------------|:-----------------------------------------------------------------------|
| Net-Aruba-Cppm-SNMP-Interface-Name | Découvre les interfaces réseau et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| cpu.utilization.percentage                | %     |
| *cpu_num*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disks" label="Disks">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| *hostname*#disk.space.usage.bytes      | B     |
| *hostname*#disk.space.free.bytes       | B     |
| *hostname*#disk.space.usage.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                  | Unité |
|:--------------------------------------------------------- |:----- |
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| *hostname*#memory.usage.bytes      | B     |
| *hostname*#memory.free.bytes       | B     |
| *hostname*#memory.usage.percentage | %     |

</TabItem>
<TabItem value="Radius" label="Radius">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| *hostname*#radius.policy.evaluation.milliseconds | ms    |
| *hostname*#radius.requests.count                 |       |
| *hostname*#radius.requests.failed.count          |       |
| *hostname*#radius.requests.succeeded.count       |       |
| *hostname*#radius.requests.milliseconds          | ms    |

</TabItem>
<TabItem value="Repositories" label="Repositories">

| Métrique                                                         | Unité |
|:-----------------------------------------------------------------|:------|
| *source_name*#authentication_repository.requests.milliseconds    | ms    |
| *source_name*#authentication_repository.requests.count           |       |
| *source_name*#authentication_repository.requests.failed.count    |       |
| *source_name*#authentication_repository.requests.succeeded.count |       |

</TabItem>
<TabItem value="Tacacs" label="Tacacs">

| Métrique                                                                   | Unité |
|:---------------------------------------------------------------------------|:------|
| *hostname*#tacacs.authentication.service.policy.evaluation.milliseconds    | ms    |
| *hostname*#tacacs.authentication.requests.count                            |       |
| *hostname*#tacacs.authentication.requests.authentication.time.milliseconds | ms    |
| *hostname*#tacacs.authentication.requests.failed.count                     |       |
| *hostname*#tacacs.authentication.requests.succeeded.count                  |       |
| *hostname*#tacacs.authentication.requests.time.milliseconds                | ms    |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Aruba CPPM** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* LINK

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

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
dnf install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-aruba-cppm-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Aruba CPPM SNMP**
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
dnf install centreon-plugin-Network-Aruba-Cppm-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Aruba-Cppm-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-aruba-cppm-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Aruba CPPM**.
* Appliquez le modèle d'hôte **Net-Aruba-Cppm-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_aruba_cppm_snmp.pl \
    --plugin=network::aruba::cppm::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Memory 'cppm.centreon.fr' usage total: 8.00 GB used: 4.05 GB (50.60%) free: 3.95 GB (49.40%) | 'cppm.centreon.fr#memory.usage.bytes'=4346740736B;;;0;8589803520 'cppm.centreon.fr#memory.free.bytes'=4243062784B;;;0;8589803520 'cppm.centreon.fr#memory.usage.percentage'=50.60%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aruba_cppm_snmp.pl \
    --plugin=network::aruba::cppm::snmp::plugin \
    --mode=memory \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aruba_cppm_snmp.pl \
    --plugin=network::aruba::cppm::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
