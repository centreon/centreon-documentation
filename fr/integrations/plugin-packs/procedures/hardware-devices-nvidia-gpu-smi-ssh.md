---
id: hardware-devices-nvidia-gpu-smi-ssh
title: NVIDIA GPU SMI SSH
---

## Contenu du Pack

### Objets supervisés

Le Pack NVIDIA GPU collecte les données pour:
* Gpu-stats

### Métriques collectées

<!--Gpu-stats-->

| Metric name                                                        | Description                                                                                                                                                          | Unit  |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| devices.gpu.total.count                                            | Number of gpu devices                                                                                                                                                |       |
| *product\_name:id*#device.gpu.utilization.percentage               | Percent of time over the past sample period (between 1 second and 1/6 second depending on the product) during which one or more kernels was executing on the GPU     | %     |
| *product\_name:id*#device.gpu.memory.utilization.percentage        | Percent of time over the past sample period (between 1 second and 1/6 second depending on the product) during which global (device) memory was being read or written | %     |
| *product\_name:id*#device.gpu.encoder.utilization.percentage       | Percent of time over the past sample period (sampling rate is variable) during which the GPU video encoder was being used                                            | %     |
| *product\_name:id*#device.gpu.decoder.utilization.percentage       | Percent of time over the past sample period (sampling rate is variable) during which the GPU video decoder was being used                                            | %     |
| *product\_name:id*#device.gpu.frame_buffer.memory.usage.bytes      | On-board frame buffer memory usage                                                                                                                                   | B     |
| *product\_name:id*#device.gpu.frame_buffer.memory.free.bytes       | On-board frame buffer memory available usage                                                                                                                         | B     |
| *product\_name:id*#device.gpu.frame_buffer.memory.usage.percentage | On-board frame buffer memory usage in percentage                                                                                                                     | %     |
| *product\_name:id*#device.gpu.bar1.memory.usage.bytes              | BAR1 memory usage                                                                                                                                                    | B     |
| *product\_name:id*#device.gpu.bar1.memory.free.bytes               | BAR1 memory available usage                                                                                                                                          | B     |
| *product\_name:id*#device.gpu.bar1.memory.usage.percentage         | BAR1 memory usage in percentage                                                                                                                                      | %     |
| *product\_name:id*#device.gpu.fan.speed.percentage                 | Fan speed value                                                                                                                                                      | %     |
| *product\_name:id*#device.gpu.temperature.celsius                  | Temperature value                                                                                                                                                    | C     |
| *product\_name:id*#device.gpu.power.consumption.watt               | The last measured power draw for the  entire  board                                                                                                                  | W     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de fonctionner, le Plugin nécessite une connexion SSH entre le Poller et le serveur avec les GPU NVIDIA. L'utilisateur distant
doit avoir assez de privilèges pour executer la commande ```nvidia-smi```. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh
```

2. Sur l'interface Web de Centreon, installer le Pack *NVIDIA GPU SMI SSH* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-hardware-devices-nvidia-gpu-smi-ssh
```

3. Sur l'interface Web de Centreon, installer le Pack *NVIDIA GPU SMI SSH* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *HW-Device-Nvidia-Gpu-Smi-SSH-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées.

<!--DOCUSAURUS_CODE_TABS-->

<!--sshcli backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```sshcli```                                                                    |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |          
|             | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication                |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur distant (Macro SSHUSERNAME).

<!--plink backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- | 
| X           | SSHBACKEND      | Nom du backend: ```plink```                                                                     |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur distant (Macro SSHUSERNAME).

<!--libssh backend (par défaut)-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```libssh```                                                                    |          
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

Avec ce backend, vous n'avez pas à valider manuellement le fingerprint du serveur cible.

<!--END_DOCUSAURUS_CODE_TABS-->

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine*

```bash
/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \
    --plugin=hardware::devices::nvidia::gpu::smi::plugin \
    --mode=stats \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=libssh \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: All devices are ok | 'devices.gpu.total.count'=2;;;0; 'Quadro K6000:00000000:08:00.0#device.gpu.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.memory.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.encoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.decoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.usage.bytes'=1349517312B;;;0;12798918656 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.free.bytes'=11449401344B;;;0;12798918656 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.usage.percentage'=10.54%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.usage.bytes'=13631488B;;;0;268435456 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.free.bytes'=254803968B;;;0;268435456 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.usage.percentage'=5.08%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.fan.speed.percentage'=26.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.temperature.celsius'=40C;;;; 'Quadro K6000:00000000:08:00.0#device.gpu.power.consumption.watt'=24.16W;;;0; 'Quadro K6000:00000000:84:00.0#device.gpu.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.memory.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.encoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.decoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.usage.bytes'=732954624B;;;0;12798918656 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.free.bytes'=12065964032B;;;0;12798918656 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.usage.percentage'=5.73%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.usage.bytes'=5242880B;;;0;268435456 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.free.bytes'=263192576B;;;0;268435456 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.usage.percentage'=1.95%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.fan.speed.percentage'=26.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.temperature.celsius'=40C;;;; 'Quadro K6000:00000000:84:00.0#device.gpu.power.consumption.watt'=23.86W;;;0;
checking device gpu 'Quadro K6000:00000000:08:00.0'
    utilization gpu: 0.00 %, memory: 0.00 %, encoder: 0.00 %, decoder: 0.00 %
    frame buffer memory usage total: 11.92 GB used: 1.26 GB (10.54%) free: 10.66 GB (89.46%)
    bar1 memory usage total: 256.00 MB used: 13.00 MB (5.08%) free: 243.00 MB (94.92%)
    fan speed: 26.00 %
    gpu temperature: 40 C
    power consumption: 24.16 W
checking device gpu 'Quadro K6000:00000000:84:00.0'
    utilization gpu: 0.00 %, memory: 0.00 %, encoder: 0.00 %, decoder: 0.00 %
    frame buffer memory usage total: 11.92 GB used: 699.00 MB (5.73%) free: 11.24 GB (94.27%)
    bar1 memory usage total: 256.00 MB used: 5.00 MB (1.95%) free: 251.00 MB (98.05%)
    fan speed: 26.00 %gpu temperature: 40 C
    power consumption: 23.86 W
```

La commande ci-dessus contrôle les statistiques GPU (```--mode=stats```).
Le Plugin utilise le Backend _libssh_ (```--ssh-backend='libssh'```) avec l'utisateur _centreon_ (```--ssh-username=centreon --ssh-password='centreon-password'```)
et il se connecte à l'hôte _10.30.2.81_ (```--hostname='10.30.2.81'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichés
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \
    --plugin=hardware::devices::nvidia::gpu::smi::plugin \
    --mode=stats \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.html#ssh-and-cli-checks)
