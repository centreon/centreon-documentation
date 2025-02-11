---
id: hardware-telephony-alcatel-oxe-snmp
title: Alcatel OXE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Alcatel OXE** apporte un modèle d'hôte :

* HW-Telephony-Alcatel-OXE-SNMP-custom

Il apporte les modèles de service suivants :

|| Alias | Modèle de service | Description                                     | Défaut                                                                                                                                                                       |    |
|-------|-:-----------------|-:-----------------------------------------------|-:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-:--|
|       | Cpu               | HW-Telephony-Alcatel-OXE-Cpu-SNMP               | Contrôle du taux d'utilisation du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur | X  |
|       | Disk-Generic-Id   | HW-Telephony-Alcatel-OXE-Disk-Generic-Id-SNMP   | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le nom du disque                                                                       |    |
|       | Disk-Generic-Name | HW-Telephony-Alcatel-OXE-Disk-Generic-Name-SNMP | Contrôle du taux d'espace libre disponible du disque. Pour chaque contrôle apparaîtra le point de montage du disque                                                          |    |
|       | Disk-Global       | HW-Telephony-Alcatel-OXE-Disk-Global-SNMP       | Contrôle du taux d'espace libre disponible des disques. Pour chaque contrôle apparaîtra le point de montage des disques                                                      |    |
|       | Domain-Usage      | HW-Telephony-Alcatel-OXE-Domain-Usage-SNMP      | Contrôle le nombre d'appels externes par domaine via SNMP                                                                                                                    | X  |
|       | Memory            | HW-Telephony-Alcatel-OXE-Memory-SNMP            | Contrôle du taux d'utilisation de la mémoire vive                                                                                                                            | X  |
|       | PBX-Role          | HW-Telephony-Alcatel-OXE-PBX-Role-SNMP          | Contrôle le rôle du PBX                                                                                                                                                      | X  |
|       | State             | HW-Telephony-Alcatel-OXE-State-SNMP             | Contrôle l'état du serveur                                                                                                                                                   | X  |
|       | Swap              | HW-Telephony-Alcatel-OXE-Swap-SNMP              | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                       | X  |
|       | Trunks            | HW-Telephony-Alcatel-OXE-Trunk-SNMP             | Contrôle les métriques liées aux trunks                                                                                                                                      | X  |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk-Generic-Id" label="Disk-Generic-Id">

| Métrique                            | Unité |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

</TabItem>
<TabItem value="Disk-Generic-Name" label="Disk-Generic-Name">

| Métrique                            | Unité |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Métrique                            | Unité |
|:------------------------------------|:------|
| storage.partitions.count            | count |
| *storage*#storage.access.count      | count |
| *storage*#storage.space.usage.bytes | bytes |

</TabItem>
<TabItem value="Domain-Usage" label="Domain-Usage">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| *domain*#domain.communications.external.overrun.count | count |
| *domain*#domain.communications.external.current.count | count |
| *domain*#domain.conference.circuits.outoforder.count  | count |
| *domain*#domain.conference.circuits.current.count     | count |
| *domain*#domain.compressors.outofservice.count        | count |
| *domain*#domain.compressors.overrun.count             | count |
| *domain*#domain.compressors.current.count             | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| swap.usage.bytes        | B     |
| swap.free.bytes         | B     |
| swap.usage.percentage   | %     |

</TabItem>
<TabItem value="PBX-Role" label="PBX-Role">

Statut sous forme de chaîne.

</TabItem>
<TabItem value="State" label="State">

Statut sous forme de chaîne.

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique              | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

</TabItem>
<TabItem value="Trunks" label="Trunks">

| Métrique                                  | Unité  |
|:------------------------------------------|:-------|
| *trunk*#trunk.channels.outofservice.count | count  |
| *trunk*#trunk.channels.current.count      | count  |
| %\{trunkstatus\}                            | string |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Alcatel OXE** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* LINK

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Alcatel OXE** :

```bash
yum install centreon-plugin-Hardware-Telephony-Alcatel-OXE-Snmp
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **Alcatel OXE** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Alcatel OXE** :

```bash
yum install centreon-plugin-Hardware-Telephony-Alcatel-OXE-Snmp
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **Alcatel OXE** :

```bash
yum install centreon-pack-hardware-telephony-alcatel-oxe-snmp
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **Alcatel OXE** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Alcatel OXE**.
* Appliquez le modèle d'hôte **HW-Telephony-Alcatel-OXE-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_alcatel_oxe.pl \
    --plugin=network::alcatel::oxe::snmp::plugin \
    --mode=pbx-role \
    --hostname=10.0.0.1 \
    --snmp-community='my-snmp-community' \
    --snmp-version='2c' \
    --verbose \
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: PBX Role is 'main' | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_alcatel_oxe.pl \
    --plugin=network::alcatel::oxe::snmp::plugin \
    --mode=pbx-role \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_alcatel_oxe.pl \
    --plugin=network::alcatel::oxe::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.