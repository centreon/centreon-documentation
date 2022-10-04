---
id: hardware-storage-hp-3par-ssh
title: HP 3PAR SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Objets supervisés

Le Pack Centreon **HP 3PAR** apporte un modèle d'hôte :
* HW-Storage-HP-3par-SSH-custom

Il apporte les modèles de services suivants :

| Alias        | Modèle de services                  | Description                                           | Défaut  |
|:-------------|:------------------------------------|:------------------------------------------------------|:--------|
| Afc          | HW-Storage-HP-3par-Afc-SSH          | Contrôle l'adaptive flash cache                       |         |
| Cages        | HW-Storage-HP-3par-Cages-SSH        | Contrôle les cages                                    |         |
| Capacity     | HW-Storage-HP-3par-Capacity-SSH     | Contrôle la capacité des différents types de stockage | X       |
| Components   | HW-Storage-HP-3par-Components-SSH   | Contrôle le matériel                                  | X       |
| Disk-Usage   | HW-Storage-HP-3par-Disk-Usage-SSH   | Contrôle les disques                                  | X       |
| Nodes        | HW-Storage-HP-3par-Nodes-SSH        | Contrôle les noeuds                                   | X       |
| Psu          | HW-Storage-HP-3par-Psu-SSH          | Contrôle les alimentations                            |         |
| Time         | HW-Storage-HP-3par-Time-SSH         | Contrôle la dérive de temps des noeuds                |         |
| Uptime       | HW-Storage-HP-3par-Uptime-SSH       | Contrôle la durée de fonctionnement des noeuds        |         |
| Volume-Usage | HW-Storage-HP-3par-Volume-Usage-SSH | Contrôle les volumes                                  | X       |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Afc" label="Afc">

| Metric name                                         | Unit |
| :-------------------------------------------------- | :--- |
| node adaptive flash cache status                    |      |
| *node_id*#node.flashcache.usage.bytes               | B    |
| *node_id*#node.flashcache.free.bytes                | B    |
| *node_id*#node.flashcache.usage.percentage          | %    |
| *node_id*#node.flashcache.readhits.percentage       | %    |
| *volume_name*#volume.flashcache.readhits.percentage | %    |

</TabItem>
<TabItem value="Cages" label="Cages">

| Metric name                                         | Unit |
| :-------------------------------------------------- | :--- |
| cage status                                         |      |
| cage board firmware status                          |      |
| cage board self status                              |      |
| cage board partner status                           |      |
| cage power supply status                            |      |
| cage power supply AC status                         |      |
| cage power supply DC status                         |      |
| cage power supply fan status                        |      |
| cage drive status                                   |      |
| cage drive portA status                             |      |
| cage drive portB status                             |      |
| *cage_id~drive_id*#battery.charge.remaining.percent | %    |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Metric name                                               | Unit |
| :-------------------------------------------------------- | :--- |
| *storage_type*#storage.space.usage.bytes                  | B    |
| *storage_type*#storage.space.free.bytes                   | B    |
| *storage_type*#storage.space.usage.percentage             | %    |
| *storage_type*#storage.space.unavailable.bytes            | B    |
| *storage_type*#storage.space.failed.bytes                 | B    |
| *storage_type*#storage.space.compaction.ratio.count       |      |
| *storage_type*#storage.space.deduplication.ratio.count    |      |
| *storage_type*#storage.space.compression.ratio.count      |      |
| *storage_type*#storage.space.data_reduction.ratio.count   |      |
| *storage_type*#storage.space.overprovisioning.ratio.count |      |

</TabItem>
<TabItem value="Components" label="Components">

| Metric name                                               | Unit |
| :-------------------------------------------------------- | :--- |
| battery power supply status                               |      |
| *psu_id~battery_id*#hardware.battery.charge.percentage    | %    |
| cim service state and status                              |      |
| disk state                                                |      |
| node state                                                |      |
| port state                                                |      |
| power supply state                                        |      |
| *node_id~sensor_name*#hardware.sensor.current.ampere      | A    |
| *node_id~sensor_name*#hardware.sensor.voltage.volt        | V    |
| *node_id~sensor_name*#hardware.sensor.power.watt          | W    |
| *node_id~sensor_name*#hardware.sensor.temperature.celsius | C    |
| *node_id~sensor_name*#hardware.sensor.current.speed       | rpm  |
| wsapi service state and status                            |      |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Metric name                           | Unit |
| :------------------------------------ | :--- |
| disk status                           |      |
| *disk_id*#disk.space.usage.bytes      | B    |
| *disk_id*#disk.space.free.bytes       | B    |
| *disk_id*#disk.space.usage.percentage | %    |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Metric name                                      | Unit |
| :----------------------------------------------- | :--- |
| node status                                      |      |
| *node_id~cpu_id*#core.cpu.utilization.percentage | %    |

</TabItem>
<TabItem value="Psu" label="Psu">

| Metric name                                       | Unit |
| :------------------------------------------------ | :--- |
| power supply status                               |      |
| power supply AC status                            |      |
| power supply DC status                            |      |
| power supply battery status                       |      |
| power supply fan status                           |      |
| *node_id~psu_id*#battery.charge.remaining.percent | %    |
| *node_id~psu_id*#battery.charge.remaining.minutes |      |

</TabItem>
<TabItem value="Time" label="Time">

| Metric name                        | Unit |
| :--------------------------------- | :--- |
| *node_id*#node.time.offset.seconds | s    |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name                    | Unit |
| :----------------------------- | :--- |
| *node_id*#node.uptime..seconds | s    |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Metric name                                 | Unit |
| :------------------------------------------ | :--- |
| *volume_name*#volume.space.usage.bytes      | B    |
| *volume_name*#volume.space.free.bytes       | B    |
| *volume_name*#volume.space.usage.percentage | %    |

</TabItem>
</Tabs>

## Prérequis

### Configuration de la connexion SSH

Suivez la procédure suivante sur tous les collecteurs Centreon devant superviser des ressources **HP 3PAR** :

a. Se loguer avec l'utilisateur **centreon-engine** :

    # su - centreon-engine

b. Générer les clés SSH si nécessaire :

    $ ssh-keygen

c. Récupérer la clé publique SSH :

    $ vi ~/.ssh/id_rsa.pub

d. Se connecter à votre ressource **HP 3PAR** en SSH avec le compte administrateur et copier la clé publique **centreon-engine** :

    3PAR01 cli% setsshkey
    Please enter the SSH public key below.  When finished, press enter twice.
    The key is usually long.  It's better to copy it from inside an editor
    and paste it here.  (Please make sure there are no extra blanks.)
    The maximum number of characters used to represent the SSH key
    (including the "from" option, key type, and additional comments) is 4095.
    
    ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAydSr8dvdf+N5apCrij3eom6a6gMZUibiBp6GUurADktPtm1jBdbZ2GVhnwiaeUqiwgxsBSjiGCKRlpIN/zBzM59li4k+fbhyO7SzXfB3IV3ueSVKlrVljyHQL6GqUjj9opxCg8jyKerCx6iTyqUvIJ4zmhaJXQAzxQFE7YLiuaaNN9ylH1z9ebuMZZKUh0gpXNT3ID4Ea+In5CAoPopwF50EdAIZ4QkS1EibhI9Lar8GqXMyHTNR/ZapvZ/KpI3lhduLT5OJ2QMbBzVrQFKXiLbYnU2AASYyFsQQC+7YASFwIEQ6D3sp0Wg8G1Dw/jmM01CsqthTm7j1Mw070OuJSw== centreon-engine@myserver
    
    SSH public key successfully set.
    
    3PAR01 cli%

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **HP 3PAR** :

```bash
yum install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

2. Sur l'interface web de Centreon, installer le Pack **HP 3PAR SSH** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **HP 3PAR** :

```bash
yum install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

2. Sur le serveur central Centreon, installer le RPM du Pack **HP 3PAR SSH** :

```bash
yum install centreon-pack-hardware-storage-hp-3par-ssh
```

3. Sur l'interface web de Centreon, installer le Pack **HP 3PAR SSH** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** et **IP Address / DNS** correspondant à votre équipement **HP 3PAR**.
* Appliquez le modèle d'hôte **HW-Storage-HP-3par-SSH-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="sshcli backend (par défaut)" label="sshcli backend (par défaut)">

| Obligatoire | Nom             | Description                                                                                   |
| :---------- | :-------------- | :-------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: **sshcli**                                                                    |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution **centengine** de votre collecteur |          
|             | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication              |
|             | SSHPORT         | Par default: 22                                                                               |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: **--ssh-priv-key=/user/.ssh/id_rsa**      |

> Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
> et l'utilisateur applicatif créé sur le serveur distant (Macro SSHUSERNAME).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Obligatoire | Nom             | Description                                                                                    |
| :---------- | :-------------- | :--------------------------------------------------------------------------------------------- | 
| X           | SSHBACKEND      | Nom du backend: **plink**                                                                      |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution **centengine** de votre collecteur  |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée |
|             | SSHPORT         | Par default: 22                                                                                |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: **--ssh-priv-key=/user/.ssh/id_rsa**       |

> Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
> et l'utilisateur applicatif créé sur le serveur distant (Macro SSHUSERNAME).

</TabItem>
<TabItem value="libssh backend" label="libssh backend">

| Obligatoire | Nom             | Description                                                                                    |
| :---------- | :-------------- | :--------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: **libssh**                                                                     |          
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution **centengine** de votre collecteur  |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée |
|             | SSHPORT         | Par default: 22                                                                                |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: **--ssh-priv-key=/user/.ssh/id_rsa**       |

> Avec ce backend, vous n'avez pas à valider manuellement le fingerprint du serveur cible.

</TabItem>
</Tabs>

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
    --plugin=storage::hp::3par::ssh::plugin \
    --mode=capacity \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=libssh \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All storage capacities are ok | 'FC#storage.space.usage.bytes'=9980928000000B;;;0;20103168000000 'FC#storage.space.free.bytes'=10122240000000B;;;0;20103168000000 'FC#storage.space.usage.percentage'=49.65%;;;0;100 'FC#storage.space.unavailable.bytes'=0B;;;0; 'FC#storage.space.failed.bytes'=0B;;;0; 'FC#storage.space.compaction.ratio.count'=2.31;;;0; 'FC#storage.space.overprovisioning.ratio.count'=0.92;;;0; 'SSD#storage.space.usage.bytes'=1476608000000B;;;0;4546560000000 'SSD#storage.space.free.bytes'=3069952000000B;;;0;4546560000000 'SSD#storage.space.usage.percentage'=32.48%;;;0;100 'SSD#storage.space.unavailable.bytes'=0B;;;0; 'SSD#storage.space.failed.bytes'=0B;;;0; 'SSD#storage.space.compaction.ratio.count'=4.93;;;0; 'SSD#storage.space.deduplication.ratio.count'=1.20;;;0; 'SSD#storage.space.data_reduction.ratio.count'=1.20;;;0; 'SSD#storage.space.overprovisioning.ratio.count'=0.48;;;0; 'Total#storage.space.usage.bytes'=11457536000000B;;;0;24649728000000 'Total#storage.space.free.bytes'=13192192000000B;;;0;24649728000000 'Total#storage.space.usage.percentage'=46.48%;;;0;100 'Total#storage.space.unavailable.bytes'=0B;;;0; 'Total#storage.space.failed.bytes'=0B;;;0; 'Total#storage.space.compaction.ratio.count'=2.59;;;0; 'Total#storage.space.deduplication.ratio.count'=1.23;;;0; 'Total#storage.space.data_reduction.ratio.count'=1.23;;;0; 'Total#storage.space.overprovisioning.ratio.count'=0.92;;;0;
checking storage 'FC'
    space usage total: 18.28 TB used: 9.08 TB (49.65%) free: 9.21 TB (50.35%), unavailable: 0.00 B, failed: 0.00 B
    compaction: 2.31, overprovisioning: 0.92
checking storage 'SSD'
    space usage total: 4.14 TB used: 1.34 TB (32.48%) free: 2.79 TB (67.52%), unavailable: 0.00 B, failed: 0.00 B
    compaction: 4.93, deduplication: 1.20, data reduction: 1.20, overprovisioning: 0.48
checking storage 'Total'
    space usage total: 22.42 TB used: 10.42 TB (46.48%) free: 12.00 TB (53.52%), unavailable: 0.00 B, failed: 0.00 B
    compaction: 2.59, deduplication: 1.23, data reduction: 1.23, overprovisioning: 0.92
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
    --plugin=storage::hp::3par::ssh::plugin \
    --mode=capacity \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
    --plugin=storage::hp::3par::ssh::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
