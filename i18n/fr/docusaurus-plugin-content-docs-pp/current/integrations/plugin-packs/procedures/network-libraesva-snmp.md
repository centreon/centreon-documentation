---
id: network-libraesva-snmp
title: Libraesva SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Libraesva apporte un modèle d'hôte :
* Net-Libraesva-SNMP-custom

Il apporte les modèles de service suivants :

| Alias         | Modèle de services            | Défaut  | Découverte |
|:--------------|:------------------------------|:--------|:-----------|
| Interfaces    | Net-Libraesva-Interfaces-SNMP |         | X          |
| Load          | Net-Libraesva-Load-SNMP       | X       |            |
| Memory        | Net-Libraesva-Memory-SNMP     | X       |            |
| Storage       | Net-Libraesva-Storage-SNMP    |         | X          |
| Swap          | Net-Libraesva-Swap-SNMP       | X       |            |
| System        | Net-Libraesva-System-SNMP     | X       |            |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                   | Description                                                             |
|:----------------------------------|:------------------------------------------------------------------------|
| Net-Libraesva-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |
| Net-Libraesva-SNMP-Storage-Name   | Découvre les disques et supervise l'utilisation                         |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Interface" label="Interface">

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

</TabItem>
<TabItem value="Load" label="Load">

| Metric name            | Description                   | Unit |
| :--------------------- | :---------------------------- | :--- |
| load.1m.count          | System load 1 minute-sample   |      |
| load.5m.count          | System load 5 minutes-sample  |      |
| load.15m.count         | System load 15 minutes-sample |      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Description                              | Unit  |
| :---------------------  | :--------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device               | B     |
| memory.free.bytes       | Free memory on the device                | B     |
| memory.usage.percentage | Percentage of memory usage on the device | %     |
| memory.buffer.bytes     | Buffered memory allocation               | B     |
| memory.cached.bytes     | Cached memory allocation                 | B     |
| memory.shared.bytes     | Shared memory allocation                 | B     |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                                  | Description                     | Unit  |
| :------------------------------------------- | :------------------------------ |:----- |
| storage.partitions.count                     | Number of disk partition.       |       |
| *partition\_name*\#storage.space.usage.bytes | Used space on a disk partition. | B     |
| *partition\_name*\#storage.access            | Access disk partition.          |       |

</TabItem>
<TabItem value="Swap" label="Swap">

| Metric name                 | Description   | Unit |
| :-------------------------- | :------------ | :--- |
| swap.usage.bytes            | Swap usage    | B    |
| swap.free.bytes             | Swap free     | B    |
| swap.usage.percentage       | Swap usage    | %    |

</TabItem>
<TabItem value="System" label="System">

| Metric name                  | Description                          | Unit |
| :--------------------------- | :----------------------------------- | :--- |
| system.mails.sent.count      | Number of sent mails                 |      |
| system.mails.received.count  | Number of received mails             |      |
| system.mails.rejected.count  | Number of rejected mails             |      |
| system.mails.bounced.count   | Number of bounced mails              |      |
| system.messages.spam.count   | Number of messages marked as spam    |      |
| system.messages.virus.count  | Number of messages marked as a virus |      |
| system.mails.queue.in.count  | Number of mails in incoming queue    |      |
| system.mails.queue.out.count | Number of mails in outgoing queue    |      |
| cluster status               | Overall cluster status               |      |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement, le SNMP v2 ou v3 doit être configuré.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Libraesva SNMP** :

```bash
yum install centreon-plugin-Network-Libraesva-Snmp
```

2. Sur l'interface web de Centreon, installer le Pack **Libraesva SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Libraesva SNMP** :

```bash
yum install centreon-plugin-Network-Libraesva-Snmp
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Libraesva SNMP** :

```bash
yum install centreon-pack-network-libraesva-snmp
```

3. Sur l'interface web de Centreon, installer le Pack **Libraesva SNMP** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre équipement **Libraesva SNMP**.
* Appliquez le modèle d'hôte **Net-Libraesva-SNMPP-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Nom              | Description                                              |
| :---------- | :--------------- | :------------------------------------------------------- |
|             | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_libraesva_snmp.pl \
    --plugin=network::libraesva::snmp::plugin \
    --mode=memory \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Ram Total: 7.66 GB Used (-buffers/cache): 3.23 GB (42.20%) Free: 4.43 GB (57.80%), Buffer: 252.45 MB, Cached: 3.80 GB, Shared: 396.42 MB | 'memory.usage.bytes'=3470262272B;;;0;8223875072 'memory.free.bytes'=4753612800B;;;0;8223875072 'memory.usage.percentage'=42.20%;;;0;100 'memory.buffer.bytes'=264708096B;;;0; 'memory.cached.bytes'=4079517696B;;;0; 'memory.shared.bytes'=415678464B;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_libraesva_snmp.pl \
    --plugin=network::libraesva::snmp::plugin \
    --mode=memory \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_libraesva_snmp.pl \
    --plugin=network::libraesva::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
