---
id: virtualization-hyperv-nscp-restapi
title: Hyper-V NSCP Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Hyper-V apporte 2 modèles d'hôtes :
* Virt-Hyperv-Node-Nscp-Restapi-custom
* Virt-Hyperv-Scvmm-Nscp-Restapi-custom

Il apporte les Modèles de Service suivants :

| Service Alias             | Service Template                                   | Default | Discovery |
|:--------------------------|:---------------------------------------------------|:--------|:----------|
| Node-Integration-Service  | Virt-Hyperv-Node-Integration-Service-Nscp-Restapi  | X       |           |
| Node-Replication          | Virt-Hyperv-Node-Replication-Nscp-Restapi          | X       |           |
| Node-Snapshot             | Virt-Hyperv-Node-Snapshot-Nscp-Restapi             | X       |           |
| Node-Vm-Status            | Virt-Hyperv-Node-Vm-Status-Nscp-Restapi            | X       |           |
| Scvmm-Integration-Service | Virt-Hyperv-Scvmm-Integration-Service-Nscp-Restapi | X       |           |
| Scvmm-Snapshot            | Virt-Hyperv-Scvmm-Snapshot-Nscp-Restapi            | X       |           |
| Scvmm-Vm-Status           | Virt-Hyperv-Scvmm-Vm-Status-Nscp-Restapi           | X       |           |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Hosts" label="Hosts">

| Rule name                                       | Description                                        |
| :---------------------------------------------- | :------------------------------------------------- |
| Virt-Hyperv-Nscp-Restapi-HostDiscovery-Scvmm-Vm | Découvrez vos Machines Virtuelles liées à un SCVMM |

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Node-Integration-Service" label="Node-Integration-Service">

| Metric name    | Description                                                    | Unit  |
| :------------- | :------------------------------------------------------------- | :---- |
| global status  | Global status of virtual machines integration services         |       |
| service status | Primary and secondary status of each virtual machines services |       |

</TabItem>

<TabItem value="Node-Replication" label="Node-Replication">

| Metric name         | Description                                        | Unit  |
| :------------------ | :------------------------------------------------- | :---- |
| replication status  | Health replication status of each virtual machines |       |

</TabItem>

<TabItem value="Node-Snapshot" label="Node-Snapshot">

| Metric name                             | Description                                           | Unit  |
| :-------------------------------------- | :---------------------------------------------------- | :---- |
| vm.snapshot.time.last.execution.seconds | Last snapshot execution time of each virtual machines | s     |

</TabItem>

<TabItem value="Node-Vm-Status" label="Node-Vm-Status">

| Metric name  | Description                     | Unit  |
| :----------- | :------------------------------ | :---- |
| vm status    | Status of each virtual machines |       |

</TabItem>

<TabItem value="Scvmm-Integration-Service" label="Scvmm-Integration-Service">

| Metric name         | Description                                               | Unit  |
| :------------------ | :-------------------------------------------------------- | :---- |
| status              | Addition status of each virtual machines                  |       |
| osshutdown status   | Operating system shutdown status of each virtual machines |       |
| timesync status     | Time synchronization status of each virtual machines      |       |
| dataexchange status | Data exchange status of each virtual machines             |       |
| heartbeat status    | Heartbeat status of each virtual machines                 |       |
| backup status       | Backup status of each virtual machines                    |       |

</TabItem>

<TabItem value="Scvmm-Snapshot" label="Scvmm-Snapshot">

| Metric name                             | Description                                           | Unit  |
| :-------------------------------------- | :---------------------------------------------------- | :---- |
| vm.snapshot.time.last.execution.seconds | Last snapshot execution time of each virtual machines | s     |

</TabItem>

<TabItem value="Scvmm-Vm-Status" label="Scvmm-Vm-Status">

| Metric name  | Description                     | Unit  |
| :----------- | :------------------------------ | :---- |
| vm status    | Status of each virtual machines |       |

</TabItem>
</Tabs>

## Prérequis

### NSClient Configuration

Pour surveiller un *Hyper-V* via NRPE, installez la version packagée Centreon de l'agent NSClient++. 
Merci de suivre notre [documentation officielle](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)

Veuillez télécharger et installer la dernière version en date de **Centreon-NSClient-xxx.exe**: https://github.com/centreon/centreon-nsclient-build/releases

Par défaut, l'utilisateur **centreon** avec le mot de passe **centreon** est utilisé pour se connecter à NSClient.

### Flux réseau

La communication doit être possible sur le port TCP 8443 depuis le collecteur 
Centreon vers l'équipement supervisé.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Hyper-V NSCP API** :

```bash
yum install centreon-plugin-Applications-Protocol-Nrpe
```

2. Sur l'interface Web de Centreon, installer le Pack **Hyper-V NSCP API** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources **Hyper-V NSCP API** :

```bash
yum install centreon-plugin-Applications-Protocol-Nrpe
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Hyper-V NSCP API** :

```bash
yum install centreon-pack-virtualization-hyperv-nscp-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack **Hyper-V NSCP API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **Hyper-V**.
* Appliquez un des Modèles d'Hôtes suivants :

<Tabs groupId="sync">
<TabItem value="Virt-Hyperv-Node-Nscp-Restapi-custom" label="Virt-Hyperv-Node-Nscp-Restapi-custom">

| Mandatory | Name                      | Description                                                                  |
| :-------- | :------------------------ | :--------------------------------------------------------------------------- |
|           | NSCPRESTAPIPORT           | Port used (Default: 8443)                                                    |
|           | NSCPRESTAPIPROTO          | Protocol used (Default: https)                                               |
|           | NSCPRESTAPIUSERNAME       | NSClient API username                                                        |
|           | NSCPRESTAPIPASSWORD       | NSClient API password                                                        |
|           | NSCPRESTAPILEGACYPASSWORD | NSClient API legacy authentication password                                  |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --insecure)       |

</TabItem>
<TabItem value="Virt-Hyperv-Scvmm-Nscp-Restapi-custom" label="Virt-Hyperv-Scvmm-Nscp-Restapi-custom">

| Mandatory | Name                      | Description                                                                  |
| :-------- | :------------------------ | :--------------------------------------------------------------------------- |
|           | NSCPRESTAPIPORT           | Port used (Default: 8443)                                                    |
|           | NSCPRESTAPIPROTO          | Protocol used (Default: https)                                               |
|           | NSCPRESTAPIUSERNAME       | NSClient API username                                                        |
|           | NSCPRESTAPIPASSWORD       | NSClient API password                                                        |
|           | NSCPRESTAPILEGACYPASSWORD | NSClient API legacy authentication password                                  |
|           | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to the command (eg. a --insecure)       |
| X         | SCVMMHOSTNAME             | SCVMM address (Default: localhost)                                           |
| X         | SCVMMUSERNAME             | SCVMM username                                                               |
| X         | SCVMMPASSWORD             | SCVMM password                                                               |
| X         | SCVMMPORT                 | SCVMM port used (Default: 8001)                                              |

</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester la bonne configuration NSClient directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine** :

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_version
```

La commande devrait retourner un message de sortie similaire à :

```bash
0.5.2.41 2018-04-26
```

Vous pouvez maintenant tester le Plugin Hyper-V :

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::hyperv::2012::local::plugin' \
    --arg='node-vm-status' \
    --arg='--filter-vm="" --verbose' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All virtual machines are ok 
VM 'vm1' status: Operating normally (state: Running, is clustered: 1)
VM 'vm2' status: Operating normally (state: Running, is clustered: 0)
VM 'vm3' status: Operating normally (state: Running, is clustered: 1)
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::hyperv::2012::local::plugin' \
    --arg='node-vm-status' \
    --arg='--help'
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_protocol_nrpe.pl \
    --plugin=apps::protocols::nrpe::plugin \
    --mode=query \
    --custommode=nsclient \
    --hostname='10.0.0.1' \
    --username=centreon \
    --password=centreon \
    --insecure \
    --http-backend=curl \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::hyperv::2012::local::plugin' \
    --arg='xxx' \
    --arg='--list-mode'
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des Plugins Centreon.