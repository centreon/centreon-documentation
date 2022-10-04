---
id: virtualization-proxmox-ve-restapi
title: Proxmox VE Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Proxmox VE apporte un modèle d'hôte :
* Virt-Proxmox-Ve-Restapi-custom

Il apporte les modèles de service suivants :

| Alias         | Modèle de services                    | Défaut | Découverte |
|:--------------|:--------------------------------------|:--------|:----------|
| Node-Usage    | Virt-Proxmox-Ve-Node-Usage-Restapi    | X       | X         |
| Storage-Usage | Virt-Proxmox-Ve-Storage-Usage-Restapi | X       | X         |
| Vm-Usage      | Virt-Proxmox-Ve-Vm-Usage-Restapi      | X       | X         |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle    | Description                                   |
|:-------------------|:----------------------------------------------|
| Proxmox VM         | Découverte des machines virtuelles Proxmox VE |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
<TabItem value="Service" label="Service">

| Nom de la règle                      | Description                                                 |
|:-------------------------------------|:------------------------------------------------------------|
| Virt-Proxmox-Ve-Restapi-Node-Name    | Découvre les noeuds et supervise l'utilisation              |
| Virt-Proxmox-Ve-Restapi-Storage-Name | Découvre les stockages et supervise l'utilisation           |
| Virt-Proxmox-Ve-Restapi-Vm-Name      | Découvre les machines virtuelles et supervise l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Node-Usage" label="Node-Usage">

| Metric name                               | Description                    | Unit  |
| :---------------------------------------- | :----------------------------- | :---- |
| node status                               | Current overall node status    |       |
| *node_id*#node.cpu.utilization.percentage | CPU utilization                | %     |
| *node_id*#node.memory.usage.bytes         | Memory used                    | B     |
| *node_id*#node.filesystem.usage.bytes     | Space used for root filesystem | B     |
| *node_id*#node.swap.usage.bytes           | Swap used                      | B     |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Metric name                            | Description                    | Unit  |
| :------------------------------------- | :----------------------------- | :---- |
| storage status                         | Current overall storage status |       |
| *storage_id*#storage.space.usage.bytes | Space used                     | B     |

</TabItem>
<TabItem value="Vm-Usage" label="Vm-Usage">

| Metric name                             | Description                    | Unit  |
| :-------------------------------------- | :----------------------------- | :---- |
| node status                             | Current overall node status    |       |
| *vm_name*#vm.cpu.utilization.percentage | CPU utilization                | %     |
| *vm_name*#vm.memory.usage.bytes         | Memory used                    | B     |
| *vm_name*#vm.swap.usage.bytes           | Swap used                      | B     |
| *vm_name*#vm.read.usage.iops            | Number of read operations      |       |
| *vm_name*#vm.write.usage.iops           | Number of write operations     |       |
| *vm_name*#vm.traffic.in.bitspersecond   | Incoming traffic going         | b/s   |
| *vm_name*#vm.traffic.out.bitspersecond  | Outgoing traffic going         | b/s   |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec les droits en lecture est nécessaire : `VM.Monitor`, `VM.Audit`, `Datastore.Audit`, `Sys.Audit`, `Sys.Syslog`.

Référez vous à la documentation officielle : https://pve.proxmox.com/wiki/Proxmox_VE_API

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Proxmox VE** :

```bash
yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **Proxmox VE** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Proxmox VE** :

```bash
yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Proxmox VE** :

```bash
yum install centreon-pack-virtualization-proxmox-ve-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **Proxmox VE** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **Proxmox VE**.
* Appliquez le modèle d'hôte **Virt-Proxmox-Ve-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.


| Obligatoire | Nom                    | Description                                                                |
| :---------- | :--------------------- | :------------------------------------------------------------------------- |
| X           | PROXMOXAPIPORT         | Port used (Default: 443)                                                   |
| X           | PROXMOXAPIPROTO        | Specify http if needed (default: 'https')                                  |
| X           | PROXMOXAPIUSERNAME     | Api username                                                               |
| X           | PROXMOXAPIPASSWORD     | Api password                                                               |
| X           | PROXMOXAPIREALM        | Api username realm                                                         |
|             | PROXMOXAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
    --plugin=apps::proxmox::ve::restapi::plugin \
    --mode=storage \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --realm='my-realm' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Storage 'storage/nuc/local' state: available, space total: 217.61 GB used: 145.86 GB (67.03%) free: 71.76 GB (32.97%) | 'storage/nuc/local#storage.space.usage.bytes'=156610641920B;;;0;233658822656
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
    --plugin=apps::proxmox::ve::restapi::plugin \
    --mode=storage \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_proxmox_ve_restapi.pl \
    --plugin=apps::proxmox::ve::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
