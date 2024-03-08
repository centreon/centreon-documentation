---
id: operatingsystems-linux-nrpe4
title: Linux NRPE3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

NRPE (Nagios Remote Plugin Executor) est un protocole qui a été conçu pour lancer à distance des commandes de supervision locales sur les serveurs supervisés.

## Contenu du pack

### Modèles

Le connecteur de supervision **Linux NRPE4** apporte un modèle d'hôte :

* **OS-Linux-NRPE4-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Linux-NRPE4-custom" label="OS-Linux-NRPE4-custom">

| Alias  | Modèle de service            | Description                                                                                                                                                               |
|:-------|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cpu    | OS-Linux-Cpu-NRPE4-custom    | Contrôle du taux d'utilisation CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |
| Load   | OS-Linux-Load-NRPE4-custom   | Contrôle de la charge serveur                                                                                                                                             |
| Memory | OS-Linux-Memory-NRPE4-custom | Contrôle du taux d'utilisation de la mémoire vive                                                                                                                         |
| Ntp    | OS-Linux-Ntp-NRPE4-custom    | Contrôle la synchronisation du système avec un serveur NTP                                                                                                           |
| Protocol-NRPE4 | OS-Linux-Protocol-NRPE4-custom | Contrôle de la bonne configuration du protocole NRPE v4.    |
| Swap   | OS-Linux-Swap-NRPE4-custom   | Contrôle du taux d'utilisation de la mémoire virtuelle                                                                                                                    |
| Uptime | OS-Linux-Uptime-NRPE4-custom | Durée depuis laquelle le serveur tourne sans interruption                                                                                                                 |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Linux-NRPE4-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias               | Modèle de service                         | Description                                                                                                                                                                           | Découverte |
|:--------------------|:------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|
| Cmd-Generic         | OS-Linux-Cmd-Generic-NRPE4-custom         | Permet de vérifier le code retour de commandes Linux                                                                                                                                  |            |
| Connections-Generic | OS-Linux-Connections-Generic-NRPE4-custom | Contrôle les connexions TCP/UDP                                                                                                                                                       |            |
| Cpu-Detailed        | OS-Linux-Cpu-Detailed-NRPE4-custom        | Contrôle du taux d'utilisation détaillé du CPU de la machine. Ce contrôle pourra remonter la moyenne du taux d'utilisation des CPU ainsi que le taux par CPU pour les CPU multi-coeur |            |
| Disk-IO             | OS-Linux-Disk-IO-NRPE4-custom             | Contrôle les compteurs I/O des disques                                                                                                                                                |            |
| Disks               | OS-Linux-Disks-NRPE4-custom               | Contrôle du taux d'espace libre disponible des disques. Pour chaque contrôle apparaîtra le point de montage des disques                                                               | X          |
| File-Date-Generic   | OS-Linux-File-Date-Generic-NRPE4-custom   | Permet de vérifier la date de modification/création/accès/... de fichiers et/ou répertoires                                                                                          |            |
| File-Size-Generic   | OS-Linux-File-Size-Generic-NRPE4-custom   | Permet de vérifier la taille de fichiers et/ou répertoires                                                                                                                            |            |
| Inodes              | OS-Linux-Inodes-NRPE4-custom              | Contrôle du taux d'inodes disponible des disques                                                                                                                                      |            |
| Is-File-Generic     | OS-Linux-Is-File-Generic-NRPE4-custom     | Permet de vérifier si le fichier 'xxx' est présent                                                                                                                                    |            |
| Is-Not-File-Generic | OS-Linux-Is-Not-File-Generic-NRPE4-custom | Permet de vérifier si le fichier 'xxx' n'est pas présent                                                                                                                              |            |
| Open-Files          | OS-Linux-Open-Files-NRPE4-custom          | Permet de vérifier le nombre de modification/création/accès/... de fichiers et/ou répertoires                                                                                          |            |
| Packet-Errors       | OS-Linux-Packet-Errors-NRPE4-custom       | Contrôle le pourcentage de paquets en erreur/écartés de plusieurs interfaces réseau                                                                                                    |            |
| Pending-Updates     | OS-Linux-Pending-Updates-NRPE4-custom     | Contrôle le statut des services systemd                                                                                                                                               |            |
| Process-Generic     | OS-Linux-Process-Generic-NRPE4-custom     | Contrôle permettant de vérifier des processus Linux                                                                                                                                   |            |
| Systemd-Journal     | OS-Linux-Systemd-Journal-NRPE4-custom     | Compte les entrées de journal grâce à la commande `journalctl`             |            |
| Systemd-Sc-Status   | OS-Linux-Systemd-Sc-Status-NRPE4-custom   | Contrôle le statut des services systemd                                                                                                                                               |            |
| Traffic             | OS-Linux-Traffic-NRPE4-custom             | Contrôle de la bande passante des interfaces. Pour chaque contrôle apparaîtra le nom de l'interface                                                                                   | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle             | Description                                                             |
|:----------------------------|:------------------------------------------------------------------------|
| OS-Linux-NRPE4-Disk-Name    | Découvre les partitions disque et supervise l'occupation de l'espace               |
| OS-Linux-NRPE4-Traffic-Name | Découvre les interfaces réseau et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Métrique         | Unité |
|:-----------------|:------|
| total            | count |
| con\_synSent     | count |
| con\_finWait1    | count |
| con\_listen      | count |
| con\_established | count |
| con\_lastAck     | count |
| con\_timeWait    | count |
| con\_closeWait   | count |
| con\_synReceived | count |
| con\_closing     | count |
| con\_closed      | count |
| con\_finWait2    | count |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| cpu.utilization.percentage                 | %     |
| *cpu_core*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Métrique                        | Unité |
|:--------------------------------|:------|
| core.cpu.utilization.percentage | %     |
| cpu.utilization.percentage      | %     |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| *device*#device.io.read.usage.bytespersecond  | B/s   |
| *device*#device.io.write.usage.bytespersecond | B/s   |
| *device*#device.io.read.wait.milliseconds     | ms    |
| *device*#device.io.write.wait.milliseconds    | ms    |
| *device*#device.io.servicetime.count          | count |
| *device*#device.io.utils.percentage           | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disks" label="Disks">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| *disk_name*#storage.space.usage.bytes | B     |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Métrique         | Unité |
|:-----------------|:------|
| file.size.bytes  | B     |
| files.size.bytes | B     |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| *inodes*#storage.inodes.usage.percentage | %     |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Métrique                | Unité |
|:------------------------|:------|
| command.exit.code.count | count |

</TabItem>
<TabItem value="Load" label="Load">

| Métrique     | Unité |
|:-------------|:------|
| avg\_load1   | N/A   |
| avg\_load5   | N/A   |
| avg\_load15  | N/A   |
| load1        | N/A   |
| load5        | N/A   |
| load15       | N/A   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                    | Unité |
|:----------------------------|:------|
| memory.usage.bytes          | B     |
| memory.free.bytes           | B     |
| memory.usage.percentage     | %     |
| memory.available.bytes      | B     |
| memory.available.percentage | %     |
| memory.buffer.bytes         | B     |
| memory.cached.bytes         | B     |
| memory.slab.bytes           | B     |
| swap.usage.bytes            | B     |
| swap.free.bytes             | B     |
| swap.usage.percentage       | %     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| peers.detected.count                  | count |
| *peers*#status                        | N/A   |
| *peers*#peer.time.offset.milliseconds | ms    |
| *peers*#peer.stratum.count            | count |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Métrique                | Unité |
|:------------------------|:------|
| system.files.open.count | count |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| *interface*#status                                   | N/A   |
| *interface*#interface.packets.in.discard.percentage  | %     |
| *interface*#interface.packets.out.discard.percentage | %     |
| *interface*#interface.packets.in.error.percentage    | %     |
| *interface*#interface.packets.out.error.percentage   | %     |

</TabItem>
<TabItem value="Pending-Updates" label="Pending-Updates">

| Métrique                     | Unité |
|:-----------------------------|:------|
| pending.updates.total.count  | count |
| security.updates.total.count | count |
| *updates*#update             | N/A   |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| *processes*#time                              | N/A   |
| *processes*#memory-usage                      | N/A   |
| *processes*#cpu-utilization                   | N/A   |
| *processes*#disks-read                        | N/A   |
| *processes*#disks-write                       | N/A   |
| processes.total.count                         | count |
| processes.memory.usage.bytes                  | B     |
| processes.cpu.utilization.percentage          | %     |
| processes.disks.io.read.usage.bytespersecond  | B/s   |
| processes.disks.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Protocol-NRPE4" label="Protocol-NRPE4">

Pas de métrique pour ce service.

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique              | Unité |
|:----------------------|:------|
| swap.usage.bytes      | B     |
| swap.free.bytes       | B     |
| swap.usage.percentage | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Systemd-Journal" label="Systemd-Journal">

| Métrique              | Unité |
|:----------------------|:------|
| journal.entries.count | count |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Métrique                       | Unité |
|:-------------------------------|:------|
| systemd.services.running.count | count |
| systemd.services.failed.count  | count |
| systemd.services.dead.count    | count |
| systemd.services.exited.count  | count |
| *sc*#status                    | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Métrique                                        | Unité |
|:------------------------------------------------|:------|
| *interface*#status                              | N/A   |
| *interface*#interface.traffic.in.bitspersecond  | b/s   |
| *interface*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Les prérequis ci-dessous doivent être appliqués sur les serveurs Linux à superviser pour que le connecteur de supervision puisse fonctionner.

### Flux réseau

Le port TCP par défaut pour le protocole NRPE est le port 5666.

| Source | Destination    | Protocole | Port |
| ------ | -------------- | --------- | ---- |
| Collecteur | Hôte supervisé | TCP       | 5666 |

### Prérequis système

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

- Installer l'agent.

```bash
dnf -y install epel-release
dnf -y install nrpe
dnf -y config-manager --set-enabled 'powertools'
mkdir -p /var/lib/centreon/centplugins/
chown nrpe: /var/lib/centreon/centplugins/
```

2. Modifiez l'adresse IP pour le paramètre `allowed_hosts` dans **/etc/nagios/nrpe.cfg** (remplacez `POLLER_IP_ADDRESS` par l'adresse IP du collecteur qui en fera la supervision).

```bash
sed -i 's/dont_blame_nrpe=0/dont_blame_nrpe=1/'  /etc/nagios/nrpe.cfg
sed -i 's/allowed_hosts=127.0.0.1,::1/allowed_hosts=POLLER_IP_ADDRESS/' /etc/nagios/nrpe.cfg
```

3. Ajoutez la définition de la commande `check_centreon_plugins`.

```bash
cat >/etc/nrpe.d/centreon-commands.cfg <<'EOF'
command[check_centreon_plugins]=/usr/lib/centreon/plugins/centreon_linux_local.pl --plugin=$ARG1$ --mode=$ARG2$ $ARG3$
EOF
```

4. Redémarrez le service pour que le changement soit pris en compte :

```bash
systemctl restart nrpe
systemctl enable nrpe
```

5. Pour permettre la supervision de **systemd-journal**, lancez les commandes suivantes :

```bash
usermod -a -G systemd-journal nrpe
systemctl restart nrpe
```

6. Pour permettre la supervision de **systemctl-sc** et **traffic**, lancez les commandes suivantes :

```bash
setenforce Permissive
sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config
reboot
```

7. Ajoutez le dépôt des plugins Centreon :

```bash
cat >/etc/yum.repos.d/centreon-plugins.repo <<'EOF'
[centreon-plugins-stable]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el8/stable/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-stable-noarch]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el8/stable/noarch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/testing/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/testing/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el8/unstable/$basearch/ 
enabled=0 
gpgcheck=1 
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES 
module_hotfixes=1 
 
[centreon-plugins-unstable-noarch] 
name=Centreon plugins repository. (UNSUPPORTED) 
baseurl=https://packages.centreon.com/rpm-plugins/el8/unstable/noarch/ 
enabled=0 
gpgcheck=1 
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES 
module_hotfixes=1 
EOF 
```

8. Installez le plugin :

```bash
dnf install -y centreon-plugin-Operatingsystems-Linux-Local.noarch https://packages.centreon.com/artifactory/rpm-standard/23.04/el8/stable/noarch/RPMS/perl-cpan-libraries/perl-JSON-Path-0.5-2.el8.noarch.rpm
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. Installez l'agent.

```bash
dnf -y install nrpe
dnf -y config-manager --set-enabled 'crb'
mkdir -p /var/lib/centreon/centplugins/
chown nrpe: /var/lib/centreon/centplugins/
```

2. Modifiez l'adresse IP pour le paramètre allowed_hosts dans `/etc/nagios/nrpe.cfg` (remplacez `POLLER_IP_ADDRESS` 
par l'adresse IP du collecteur qui en fera la supervision).

```bash 
sed -i 's/dont_blame_nrpe=0/dont_blame_nrpe=1/' /etc/nagios/nrpe.cfg 
sed -i 's/allowed_hosts=127.0.0.1,::1/allowed_hosts=POLLER_IP_ADDRESS/' /etc/nagios/nrpe.cfg 
``` 

3. Ajoutez la définition de la commande `check_centreon_plugins`.
 
```bash
cat >/etc/nrpe.d/centreon-commands.cfg <<'EOF'
command[check_centreon_plugins]=/usr/lib/centreon/plugins/centreon_linux_local.pl --plugin=$ARG1$ --mode=$ARG2$ $ARG3$
EOF
```

4. Redémarrez le service pour que le changement soit pris en compte.

```bash
systemctl restart nrpe
systemctl enable nrpe
```

5. Pour permettre la supervision de **systemd-journal**, lancez les commandes suivantes :

```bash
usermod -a -G systemd-journal nrpe
systemctl restart nrpe
```

6. Ajoutez le dépôt des plugins Centreon :

```bash
cat >/etc/yum.repos.d/centreon-plugins.repo <<'EOF'
[centreon-plugins-stable]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el9/stable/$basearch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-stable-noarch]
name=Centreon plugins repository.
baseurl=https://packages.centreon.com/rpm-plugins/el9/stable/noarch/
enabled=1
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/testing/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-testing-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/testing/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/unstable/$basearch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1

[centreon-plugins-unstable-noarch]
name=Centreon plugins repository. (UNSUPPORTED)
baseurl=https://packages.centreon.com/rpm-plugins/el9/unstable/noarch/
enabled=0
gpgcheck=1
gpgkey=https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
module_hotfixes=1
EOF
```

7. Installez le plugin :

```bash
dnf install -y centreon-plugin-Operatingsystems-Linux-Local.noarch https://packages.centreon.com/artifactory/rpm-standard/23.04/el9/stable/noarch/RPMS/perl-cpan-libraries/perl-JSON-Path-0.5-1.el9.noarch.rpm
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

1. Ajoutez le dépôt des plugins Centreon.

```bash
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
apt update
```

À ce stade, si vous obtenez cette erreur :

```text
W: GPG error: https://packages.sury.org/php bullseye InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B188E2B695BD4743
E: The repository 'https://packages.sury.org/php bullseye InRelease' is not signed.
```

Vous pouvez la régler de cette façon :

```bash
apt-key adv --fetch-keys 'https://packages.sury.org/php/apt.gpg' > /dev/null 2>&1
apt update
```

2. Installez l'agent et le plugin :

```bash
apt -y install centreon-nrpe4-daemon centreon-plugin-operatingsystems-linux-local
```

3. Modifiez l'adresse IP pour le paramètre allowed_hosts dans `/etc/nagios/nrpe.cfg` (remplacez `POLLER_IP_ADDRESS` 
par l'adresse IP du collecteur qui en fera la supervision).

```bash
sed -i 's/allowed_hosts=127.0.0.1,::1/allowed_hosts=POLLER_IP_ADDRESS/' /etc/nrpe/centreon-nrpe4.cfg
```

4. Redémarrez le service pour que le changement soit pris en compte.

```bash
systemctl restart centreon-nrpe4.service
systemctl enable centreon-nrpe4.service
```

5. Pour permettre la supervision de **systemd-journal**, lancez les commandes suivantes :

```bash
usermod -a -G systemd-journal centreon-engine
systemctl restart centreon-nrpe4.service
```

</TabItem>
</Tabs>

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-operatingsystems-linux-nrpe4
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-linux-nrpe4
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-operatingsystems-linux-nrpe4
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-linux-nrpe4
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Linux NRPE4**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install nagios-nrpe-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install nagios-plugins-nrpe
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Linux-NRPE4-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro            | Description                                                                                          | Valeur par défaut              | Obligatoire |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| NRPEPORT         |                                                                                                      | 5666                           |             |
| NRPECLIENT       |                                                                                                      | check\_nrpe                    |             |
| NRPESTATEFILEDIR | Define the cache directory (default: '/var/lib/centreon/centplugins')                                | /var/lib/centreon/centplugins/ |             |
| NRPETIMEOUT      |                                                                                                      | 5                              |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Macro          | Description                                                                                                                                       | Valeur par défaut | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND        | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                                                                           |                   | X           |
| COMMANDOPTIONS | Command options (default: none)                                                                                                                   |                   |             |
| THRESHOLDS     | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem |                   | X           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                |                   |             |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CONNECTIONCOMMAND | Default mode for parsing and command: 'netstat' (default) or 'ss'                                  | ss                | X           |
| WARNING           | Warning threshold for total connections                                                            |                   |             |
| CRITICAL          | Critical threshold for total connections                                                           |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAVERAGE  | Warning threshold average CPU utilization                                                          |                   |             |
| CRITICALAVERAGE | Critical threshold average CPU utilization                                                         |                   |             |
| WARNINGCORE     | Warning thresholds for each CPU core                                                               |                   |             |
| CRITICALCORE    | Critical thresholds for each CPU core                                                              |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLE  | Warning threshold in percent                                                                       |                   |             |
| CRITICALIDLE | Critical threshold in percent                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Macro              | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERPARTITIONAME | Filter partition name (regexp can be used)                                                         |                   |             |
| WARNINGREADUSAGE   | Thresholds                                                                                         |                   |             |
| CRITICALREADUSAGE  | Thresholds                                                                                         |                   |             |
| WARNINGREADWAIT    | Thresholds                                                                                         |                   |             |
| CRITICALREADWAIT   | Thresholds                                                                                         |                   |             |
| WARNINGSVCTIME     | Thresholds                                                                                         |                   |             |
| CRITICALSVCTIME    | Thresholds                                                                                         |                   |             |
| WARNINGUTILS       | Thresholds                                                                                         |                   |             |
| CRITICALUTILS      | Thresholds                                                                                         |                   |             |
| WARNINGWRITEUSAGE  | Thresholds                                                                                         |                   |             |
| CRITICALWRITEUSAGE | Thresholds                                                                                         |                   |             |
| WARNINGWRITEWAIT   | Thresholds                                                                                         |                   |             |
| CRITICALWRITEWAIT  | Thresholds                                                                                         |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose --skip  |             |

</TabItem>
<TabItem value="Disks" label="Disks">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMOUNTPOINT | Filter filesystem mount point (regexp can be used)                                                 |                   |             |
| WARNING          | Warning threshold                                                                                  |                   |             |
| CRITICAL         | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Macro        | Description                                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES        | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   | X           |
| FILTERPLUGIN | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNING      | Warning threshold in seconds for each files/directories (diff time)                                                                        |                   |             |
| CRITICAL     | Critical threshold in seconds for each files/directories (diff time)                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                         | --verbose         |             |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Macro         | Description                                                                                                                                | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILES         | Files/Directories to check. (Shell expansion is ok)                                                                                        |                   | X           |
| FILTERPLUGIN  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used |                   |             |
| WARNINGONE    | Warning threshold in bytes for each files/directories                                                                                      |                   |             |
| CRITICALONE   | Critical threshold in bytes for each files/directories                                                                                     |                   |             |
| WARNINGTOTAL  | Warning threshold in bytes for all files/directories                                                                                       |                   |             |
| CRITICALTOTAL | Critical threshold in bytes for all files/directories                                                                                      |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                         | --verbose         |             |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMOUNTPOINT | Filter filesystem mount point (regexp can be used)                                                 |                   |             |
| WARNING          | Warning threshold in percent                                                                       |                   |             |
| CRITICAL         | Critical threshold in percent                                                                      |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                            | test              | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMMAND      | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'                            | test              | X           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Load" label="Load">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                |                   |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Thresholds.                                                                                                   |                   |             |
| CRITICAL     | Thresholds.                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro           | Description                                                                                                                                                         | Valeur par défaut            | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| NTPCOMMAND      | Default mode for parsing and command: 'ntpq' (default), 'chronyc' or 'all'                                                                                          | all                          |             |
| FILTERPEERNAME  | Filter peer name (can be a regexp)                                                                                                                                  | .*                           |             |
| FILTERPEERSTATE | Filter peer state (can be a regexp)                                                                                                                                 | .*                           |             |
| WARNINGOFFSET   | Warning threshold offset deviation value in milliseconds                                                                                                            |                              |             |
| CRITICALOFFSET  | Critical threshold offset deviation value in milliseconds                                                                                                           |                              |             |
| WARNINGPEERS    | Warning threshold minimum amount of NTP-Server                                                                                                                      |                              |             |
| CRITICALPEERS   | Critical threshold minimum amount of NTP-Server                                                                                                                     |                              |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}  |                              |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display} |                              |             |
| WARNINGSTRATUM  | Warning threshold                                                                                                                                                   |                              |             |
| CRITICALSTRATUM | Critical threshold                                                                                                                                                  |                              |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                  | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Macro          | Description                                                                                        | Valeur par défaut            | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERAPPNAME  | Filter application name (can be a regexp)                                                          |                              |             |
| FILTERUSERNAME | Filter username name (can be a regexp)                                                             |                              |             |
| FILTERPID      | Filter PID (can be a regexp)                                                                       |                              |             |
| WARNING        | Thresholds                                                                                         |                              |             |
| CRITICAL       | Thresholds                                                                                         |                              |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose --use-new-perfdata |             |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Macro              | Description                                                                                        | Valeur par défaut       | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERINTERFACE    | Filter interface name (regexp can be used)                                                         |                         |             |
| FILTERSTATE        | Filter filesystem type (regexp can be used)                                                        |                         |             |
| WARNINGINDISCARD   | Thresholds.                                                                                        |                         |             |
| CRITICALINDISCARD  | Thresholds.                                                                                        |                         |             |
| WARNINGINERROR     | Thresholds.                                                                                        |                         |             |
| CRITICALINERROR    | Thresholds.                                                                                        |                         |             |
| WARNINGOUTDISCARD  | Thresholds.                                                                                        |                         |             |
| CRITICALOUTDISCARD | Thresholds.                                                                                        |                         |             |
| WARNINGOUTERROR    | Thresholds.                                                                                        |                         |             |
| CRITICALOUTERROR   | Thresholds.                                                                                        |                         |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose --no-loopback |             |

</TabItem>
<TabItem value="Pending-Updates" label="Pending-Updates">

| Macro            | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OSMODE           | Default mode for parsing and command: 'rhel' (default), 'debian', 'suse'                           | rhel              |             |
| FILTERPACKAGE    | Filter package name                                                                                |                   |             |
| FILTERREPOSITORY | Filter repository name                                                                             |                   |             |
| WARNINGTOTAL     | Warning threshold for total amount of pending updates                                              |                   |             |
| CRITICALTOTAL    | Critical threshold for total amount of pending updates                                             |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro         | Description                                                                                                                                           | Valeur par défaut | Obligatoire |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERCOMMAND | Filter process commands (regexp can be used)                                                                                                          |                   |             |
| FILTERARG     | Filter process arguments (regexp can be used)                                                                                                         |                   |             |
| FILTERSTATE   | Filter process states (regexp can be used). You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep' |                   |             |
| WARNINGTIME   | Thresholds                                                                                                                                            |                   |             |
| CRITICALTIME  | Thresholds                                                                                                                                            |                   |             |
| WARNINGTOTAL  | Thresholds                                                                                                                                            |                   |             |
| CRITICALTOTAL | Thresholds                                                                                                                                            |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                    | --verbose         |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                    |                   |             |
| CRITICAL     | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%)                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Systemd-Journal" label="Systemd-Journal">

| Macro           | Description                                                                                                                                                     | Valeur par défaut | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SINCE           | Defines the amount of time to look back at messages. Can beminutes (ie 5 "minutes ago") or 'cache' to use the timestamp from last execution. (default: 'cache') | cache             |             |
| TIMEZONE        | Defines the timezone to convert date/time to the host timezone when using timestamp from cache. (default: 'local')                                              | local             |             |
| UNIT            | Only look for messages of the specified unit, ie the name of thesystemd service who created the message                                                         |                   |             |
| FILTERMESSAGE   | Filter on message content (can be a regexp)                                                                                                                     |                   |             |
| WARNINGENTRIES  | Thresholds on the number of entries found in the journal for the specified parameters                                                                           |                   |             |
| CRITICALENTRIES | Thresholds on the number of entries found in the journal for the specified parameters                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                              |                   |             |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Macro                | Description                                                                                                                                                                                                                                                                                                                                                                                                                             | Valeur par défaut            | Obligatoire |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------:|
| FILTERNAME           | Filter service name (can be a regexp)                                                                                                                                                                                                                                                                                                                                                                                                   | .*                           |             |
| EXCLUDENAME          | Exclude service name (can be a regexp)                                                                                                                                                                                                                                                                                                                                                                                                  |                              |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot} Example of statuses for the majority of these variables: %{active}: active, inactive %{sub}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %{load}: loaded, not-found %{boot}: enabled, disabled, static, indirect                                      |                              |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%{active} =~ /failed/i'). You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot} Example of statuses for the majority of these variables: %{active}: active, inactive %{sub}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %{load}: loaded, not-found %{boot}: enabled, disabled, static, indirect |                              |             |
| WARNINGTOTALDEAD     | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| CRITICALTOTALDEAD    | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| WARNINGTOTALEXITED   | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| CRITICALTOTALEXITED  | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| CRITICALTOTALFAILED  | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              | 0                            |             |
| WARNINGTOTALFAILED   | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| WARNINGTOTALRUNNING  | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| CRITICALTOTALRUNNING | Thresholds                                                                                                                                                                                                                                                                                                                                                                                                                              |                              |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                                                                                                                                                                                                                      | --use-new-perfdata --verbose |             |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Macro           | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSTATE     | Filter interfaces type (regexp can be used)                                                        | RU                |             |
| FILTERINTERFACE | Filter interface name (regexp can be used)                                                         |                   |             |
| SPEED           | Set interface speed (in Mb)                                                                        |                   | X           |
| WARNINGIN       | Warning threshold in percent for 'in' traffic                                                      |                   |             |
| CRITICALIN      | Critical threshold in percent for 'in' traffic                                                     |                   |             |
| WARNINGOUT      | Warning threshold in percent for 'out' traffic                                                     |                   |             |
| CRITICALOUT     | Critical threshold in percent for 'out' traffic                                                    |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in seconds                                                                       |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                      |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib64/nagios/plugins//check_nrpe -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'traffic'  ' \
	--filter-interface="" \
	--warning-in="" \
	--critical-in="" \
	--warning-out="" \
	--critical-out="" \
	--filter-state="RU" \
	--speed="" \
	--statefile-dir=/var/lib/centreon/centplugins/ rn '
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All interfaces are ok | '*interface*#interface.traffic.in.bitspersecond'=b/s;;;;'*interface*#interface.traffic.out.bitspersecond'=b/s;;;;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib64/nagios/plugins//check_nrpe -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'traffic'  ' \
	--filter-interface="" \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                    | Modèle de service associé                                                                                                   |
|:----------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| check-plugin [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/checkplugin.pm)]                 | Not used in this Monitoring Connector                                                                                       |
| cmd-return [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cmdreturn.pm)]                     | OS-Linux-Cmd-Generic-NRPE4-custom<br />OS-Linux-Is-File-Generic-NRPE4-custom<br />OS-Linux-Is-Not-File-Generic-NRPE4-custom |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/connections.pm)]                  | OS-Linux-Connections-Generic-NRPE4-custom                                                                                   |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpu.pm)]                                  | OS-Linux-Cpu-NRPE4-custom                                                                                                   |
| cpu-detailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/cpudetailed.pm)]                 | OS-Linux-Cpu-Detailed-NRPE4-custom                                                                                          |
| discovery-snmp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmp.pm)]             | Not used in this Monitoring Connector                                                                                       |
| discovery-snmpv3 [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/discoverysnmpv3.pm)]         | Not used in this Monitoring Connector                                                                                       |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/diskio.pm)]                            | OS-Linux-Disk-IO-NRPE4-custom                                                                                               |
| files-date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filesdate.pm)]                     | OS-Linux-File-Date-Generic-NRPE4-custom                                                                                     |
| files-size [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/filessize.pm)]                     | OS-Linux-File-Size-Generic-NRPE4-custom                                                                                     |
| inodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/inodes.pm)]                            | OS-Linux-Inodes-NRPE4-custom                                                                                                |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listinterfaces.pm)]           | Used for service discovery                                                                                                  |
| list-partitions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listpartitions.pm)]           | Not used in this Monitoring Connector                                                                                       |
| list-storages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/liststorages.pm)]               | Used for service discovery                                                                                                  |
| list-systemdservices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/listsystemdservices.pm)] | Not used in this Monitoring Connector                                                                                       |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/loadaverage.pm)]                         | OS-Linux-Load-NRPE4-custom                                                                                                  |
| lvm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/lvm.pm)]                                  | Not used in this Monitoring Connector                                                                                       |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/memory.pm)]                            | OS-Linux-Memory-NRPE4-custom                                                                                                |
| mountpoint [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/mountpoint.pm)]                    | Not used in this Monitoring Connector                                                                                       |
| ntp [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/ntp.pm)]                                  | OS-Linux-Ntp-NRPE4-custom                                                                                                   |
| open-files [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/openfiles.pm)]                     | OS-Linux-Open-Files-NRPE4-custom                                                                                            |
| packet-errors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/packeterrors.pm)]               | OS-Linux-Packet-Errors-NRPE4-custom                                                                                         |
| paging [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/paging.pm)]                            | Not used in this Monitoring Connector                                                                                       |
| pending-updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/pendingupdates.pm)]           | OS-Linux-Pending-Updates-NRPE4-custom                                                                                       |
| process [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/process.pm)]                          | OS-Linux-Process-Generic-NRPE4-custom                                                                                       |
| quota [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/quota.pm)]                              | Not used in this Monitoring Connector                                                                                       |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/storage.pm)]                          | OS-Linux-Disks-NRPE4-custom                                                                                                 |
| swap [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/swap.pm)]                                | OS-Linux-Swap-NRPE4-custom                                                                                                  |
| systemd-journal [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/systemdjournal.pm)]           | OS-Linux-Systemd-Journal-NRPE4-custom                                                                                       |
| systemd-sc-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/systemdscstatus.pm)]        | OS-Linux-Systemd-Sc-Status-NRPE4-custom                                                                                     |
| traffic [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/traffic.pm)]                          | OS-Linux-Traffic-NRPE4-custom                                                                                               |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/linux/local/mode/uptime.pm)]                            | OS-Linux-Uptime-NRPE4-custom                                                                                                |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sudo  sudo command                       | .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cmd-Generic" label="Cmd-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (default: none).                                                                                                                       |
| --exec-command-options | Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Connections-Generic" label="Connections-Generic">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning     | Warning threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --critical    | Critical threshold for total connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --service     | Check tcp connections following rules: tag,\[type\],\[state\],\[port-src\],\[port-dst\],\[filter-ip-src\],\[filter -ip-dst\],\[threshold-warning\],\[threshold-critical\]  Example to test SSH connections on the server: --service="ssh,,,22,,,,10,20"  \<tag\>           Name to identify service (must be unique and     couldn't be 'total').  \<type\>          regexp - can use 'ipv4', 'ipv6', 'udp', 'udp6'.     Empty means all.  \<state\>         regexp - can use 'finWait1', 'established',...     Empty means all (minus listen). For udp     connections, there are 'established' and     'listen'.  \<filter-ip-*\>   regexp - can use to exclude or include some IPs.  \<threshold-*\>   nagios-perfdata - number of connections.   |
| --application | Check tcp connections of mutiple services: tag,\[services\],\[threshold-warning\],\[threshold-critical\]  Example: --application="web,http\|https,100,200"  \<tag\>           Name to identify application (must be unique).  \<services\>      List of services (used the tag name. Separated     by '\|').  \<threshold-*\>   nagios-perfdata - number of connections.                                                                                                                                                                                                                                                                                                                                                                             |
| --con-mode    | Default mode for parsing and command: 'netstat' (default) or 'ss'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-average      | Warning threshold average CPU utilization.                                                                                                                                                                                                    |
| --critical-average     | Critical threshold average CPU utilization.                                                                                                                                                                                                   |
| --warning-core         | Warning thresholds for each CPU core                                                                                                                                                                                                          |
| --critical-core        | Critical thresholds for each CPU core                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                        |
| --critical-*           | Critical threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                                       |

</TabItem>
<TabItem value="Disk-IO" label="Disk-IO">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'read-usage', 'write-usage', 'read-wait', 'write-wait', 'svctime', 'utils'.                                                                                                                                               |
| --filter-partition-name  | Filter partition name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-partition-name | Exclude partition name (regexp can be used).                                                                                                                                                                                                  |
| --bytes-per-sector       | Bytes per sector (default: 512)                                                                                                                                                                                                               |
| --interrupt-frequency    | Linux Kernel Timer Interrupt Frequency (default: 1000)                                                                                                                                                                                        |
| --skip                   | Skip partitions with 0 sectors read/write.                                                                                                                                                                                                    |

</TabItem>
<TabItem value="Disks" label="Disks">

| Option               | Description                                            |
|:---------------------|:-------------------------------------------------------|
| --warning-usage      | Warning threshold.                                     |
| --critical-usage     | Critical threshold.                                    |
| --units              | Units of thresholds (default: '%') ('%', 'B').         |
| --free               | Thresholds are on free space left.                     |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   |
| --filter-type        | Filter filesystem type (regexp can be used).           |
| --filter-fs          | Filter filesystem (regexp can be used).                |
| --exclude-fs         | Exclude filesystem (regexp can be used).               |

</TabItem>
<TabItem value="File-Date-Generic" label="File-Date-Generic">

| Option          | Description                                                                                                                                            |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files         | Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning       | Warning threshold in seconds for each files/directories (diff time).                                                                                   |
| --critical      | Critical threshold in seconds for each files/directories (diff time).                                                                                  |
| --separate-dirs | Do not include size of subdirectories.                                                                                                                 |
| --max-depth     | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --time          | Check another time than modified time.                                                                                                                 |
| --exclude-du    | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="File-Size-Generic" label="File-Size-Generic">

| Option           | Description                                                                                                                                            |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| --files          | Files/Directories to check. (Shell expansion is ok)                                                                                                    |
| --warning-one    | Warning threshold in bytes for each files/directories.                                                                                                 |
| --critical-one   | Critical threshold in bytes for each files/directories.                                                                                                |
| --warning-total  | Warning threshold in bytes for all files/directories.                                                                                                  |
| --critical-total | Critical threshold in bytes for all files/directories.                                                                                                 |
| --separate-dirs  | Do not include size of subdirectories.                                                                                                                 |
| --max-depth      | Don't check fewer levels. (can be use --separate-dirs)                                                                                                 |
| --all-files      | Add files when you check directories.                                                                                                                  |
| --exclude-du     | Exclude files/directories with 'du' command. Values from exclude files/directories are not counted in parent directories. Shell pattern can be used.   |
| --filter-plugin  | Filter files/directories in the plugin. Values from exclude files/directories are counted in parent directories!!! Perl Regexp can be used.            |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Option               | Description                                            |
|:---------------------|:-------------------------------------------------------|
| --warning-usage      | Warning threshold in percent.                          |
| --critical-usage     | Critical threshold in percent.                         |
| --filter-mountpoint  | Filter filesystem mount point (regexp can be used).    |
| --exclude-mountpoint | Exclude filesystem mount point (regexp can be used).   |
| --filter-type        | Filter filesystem type (regexp can be used).           |
| --filter-fs          | Filter filesystem (regexp can be used).                |
| --exclude-fs         | Exclude filesystem (regexp can be used).               |

</TabItem>
<TabItem value="Is-File-Generic" label="Is-File-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (default: none).                                                                                                                       |
| --exec-command-options | Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Is-Not-File-Generic" label="Is-Not-File-Generic">

| Option                 | Description                                                                                                                                         |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| --manage-returns       | Set action according command exit code. Example: %(code) == 0,OK,File xxx exist#%(code) == 1,CRITICAL,File xxx not exist#,UNKNOWN,Command problem   |
| --separator            | Set the separator used in --manage-returns (default : #)                                                                                            |
| --exec-command         | Command to test (default: none). You can use 'sh' to use '&&' or '\|\|'.                                                                            |
| --exec-command-path    | Command path (default: none).                                                                                                                       |
| --exec-command-options | Command options (default: none).                                                                                                                    |

</TabItem>
<TabItem value="Load" label="Load">

| Option     | Description                             |
|:-----------|:----------------------------------------|
| --warning  | Warning threshold (1min,5min,15min).    |
| --critical | Critical threshold (1min,5min,15min).   |
| --average  | Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --swap                   | Check swap also.                                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'memory-usage' (B), 'memory-usage-free' (B), 'memory-usage-prct' (%), 'memory-available' (B), 'memory-available-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'slab' (B).    |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option             | Description                                                                                                                                                            |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --ntp-mode         | Default mode for parsing and command: 'ntpq' (default), 'chronyc' or 'all'.                                                                                            |
| --filter-name      | Filter peer name (can be a regexp).                                                                                                                                    |
| --filter-state     | Filter peer state (can be a regexp).                                                                                                                                   |
| --warning-peers    | Warning threshold minimum amount of NTP-Server                                                                                                                         |
| --critical-peers   | Critical threshold minimum amount of NTP-Server                                                                                                                        |
| --warning-offset   | Warning threshold offset deviation value in milliseconds                                                                                                               |
| --critical-offset  | Critical threshold offset deviation value in milliseconds                                                                                                              |
| --warning-stratum  | Warning threshold.                                                                                                                                                     |
| --critical-stratum | Critical threshold.                                                                                                                                                    |
| --unknown-status   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}     |
| --warning-status   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}     |
| --critical-status  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{rawstate}, %{type}, %{rawtype}, %{reach}, %{display}    |

</TabItem>
<TabItem value="Open-Files" label="Open-Files">

| Option                   | Description                                  |
|:-------------------------|:---------------------------------------------|
| --filter-appname         | Filter application name (can be a regexp).   |
| --filter-username        | Filter username name (can be a regexp).      |
| --filter-pid             | Filter PID (can be a regexp).                |
| --warning-* --critical-* | Thresholds. Can be: 'files-open'.            |

</TabItem>
<TabItem value="Packet-Errors" label="Packet-Errors">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --unknown-status       | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                                                                                                                       |
| --warning-status       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                                                                                                                       |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{status} ne "RU"'). You can use the following variables: %%{status}, %{display}                                                                                      |
| --warning-*            | Warning threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                           |
| --critical-*           | Critical threshold in percent of total packets. Can be: in-error, out-error, in-discard, out-discard                                                                                                                                          |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --filter-state         | Filter filesystem type (regexp can be used).                                                                                                                                                                                                  |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Pending-Updates" label="Pending-Updates">

| Option              | Description                                                                                     |
|:--------------------|:------------------------------------------------------------------------------------------------|
| --os-mode           | Default mode for parsing and command: 'rhel' (default), 'debian', 'suse'.                       |
| --warning-total     | Warning threshold for total amount of pending updates.                                          |
| --critical-total    | Critical threshold for total amount of pending updates.                                         |
| --warning-security  | Warning threshold for total amount of pending security updates.                                 |
| --critical-security | Critical threshold for total amount of pending security updates.                                |
| --filter-package    | Filter package name.                                                                            |
| --filter-repository | Filter repository name.                                                                         |
| --check-security    | Display number of pending security updates.  Only available for Red Hat-Based distributions.    |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --add-cpu                | Monitor CPU usage.                                                                                                                                                                                                                            |
| --add-memory             | Monitor memory usage. It's inaccurate but it provides a trend.                                                                                                                                                                                |
| --add-disk-io            | Monitor disk I/O.                                                                                                                                                                                                                             |
| --filter-command         | Filter process commands (regexp can be used).                                                                                                                                                                                                 |
| --exclude-command        | Exclude process commands (regexp can be used).                                                                                                                                                                                                |
| --filter-arg             | Filter process arguments (regexp can be used).                                                                                                                                                                                                |
| --exclude-arg            | Exclude process arguments (regexp can be used).                                                                                                                                                                                               |
| --filter-ppid            | Filter process ppid (regexp can be used).                                                                                                                                                                                                     |
| --filter-state           | Filter process states (regexp can be used). You can use: 'zombie', 'dead', 'paging', 'stopped', 'InterrupibleSleep', 'running', 'UninterrupibleSleep'.                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'total-memory-usage', 'total-cpu-utilization', 'total-disks-read', 'total-disks-write', 'time', 'memory-usage', 'cpu-utilization', 'disks-read', 'disks-write'.                                                  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option                   | Description                                                                         |
|:-------------------------|:------------------------------------------------------------------------------------|
| --no-swap                | Threshold if no active swap (default: 'critical').                                  |
| --warning-* --critical-* | Threshold, can be 'usage' (in Bytes), 'usage-free' (in Bytes), 'usage-prct' (%).    |

</TabItem>
<TabItem value="Systemd-Journal" label="Systemd-Journal">

| Option                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:-------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                          | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --redis-server                       | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-attribute                    | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-db                           | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --failback-file                      | Failback on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --memexpiration                      | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-dir                      | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-suffix                   | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-concat-cwd               | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-format                   | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-key                      | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --statefile-cipher                   | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --no-pager                           |      Examples:      Look for sent emails by Postfix:      # perl centreon\_plugins.pl --plugin=os::linux::local::plugin     entries~Emails sent'      OK: Emails sent: 17 \| 'emails.sent.count'=17;;;0;      Look for Puppet errors:      # perl centreon\_plugins.pl --plugin=os::linux::local::plugin      OK: Journal entries: 1 \| 'journal.entries.count'=1;;;0;      Look for the number of Centreon Engine reloads      # perl centreon\_plugins.pl --plugin=os::linux::local::plugin     last hour'      OK: Centreon Engine reloads over the last hour: 0 \|     'centreon.engine.reload.count'=0;;;0;   |
| --unit                               | Only look for messages of the specified unit, ie the name of thesystemd service who created the message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-message                     | Filter on message content (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --since                              | Defines the amount of time to look back at messages. Can beminutes (ie 5 "minutes ago") or 'cache' to use the timestamp from last execution. (default: 'cache')                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timezone                           | Defines the timezone to convert date/time to the host timezone when using timestamp from cache. (default: 'local')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --warning-entries --critical-entries | Thresholds on the number of entries found in the journal for the specified parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

</TabItem>
<TabItem value="Systemd-Sc-Status" label="Systemd-Sc-Status">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter service name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                     |
| --exclude-name           | Exclude service name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-* --critical-* | Thresholds. Can be: 'total-running', 'total-dead', 'total-exited', 'total-failed'.                                                                                                                                                                                                                                                                                                                                                         |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot} Example of statuses for the majority of these variables: %{active}: active, inactive %{sub}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %{load}: loaded, not-found %{boot}: enabled, disabled, static, indirect                                         |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{active} =~ /failed/i'). You can use the following variables: %{display}, %{active}, %{sub}, %{load}, %{boot} Example of statuses for the majority of these variables: %{active}: active, inactive %{sub}: waiting, plugged, mounted, dead, failed, running, exited, listening, active %{load}: loaded, not-found %{boot}: enabled, disabled, static, indirect    |

</TabItem>
<TabItem value="Traffic" label="Traffic">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-in           | Warning threshold in percent for 'in' traffic.                                                                                                                                                                                                |
| --critical-in          | Critical threshold in percent for 'in' traffic.                                                                                                                                                                                               |
| --warning-out          | Warning threshold in percent for 'out' traffic.                                                                                                                                                                                               |
| --critical-out         | Critical threshold in percent for 'out' traffic.                                                                                                                                                                                              |
| --unknown-status       | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{status}, %{display}                                                                                                         |
| --warning-status       | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{display}                                                                                                         |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{status} ne "RU"'). You can use the following variables: %{status}, %{display}                                                                                       |
| --units                | Units of thresholds (default: 'b/s') ('%', 'b/s'). Percent canbe used only if --speed is set.                                                                                                                                                 |
| --filter-interface     | Filter interface name (regexp can be used).                                                                                                                                                                                                   |
| --exclude-interface    | Exclude interface name (regexp can be used).                                                                                                                                                                                                  |
| --filter-state         | Filter interfaces type (regexp can be used).                                                                                                                                                                                                  |
| --speed                | Set interface speed (in Mb).                                                                                                                                                                                                                  |
| --guess-speed          | Try to guess speed with commands ethtool and iwconfig.                                                                                                                                                                                        |
| --no-loopback          | Don't display loopback interfaces.                                                                                                                                                                                                            |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option     | Description                      |
|:-----------|:---------------------------------|
| --warning  | Warning threshold in seconds.    |
| --critical | Critical threshold in seconds.   |
| --seconds  | Display uptime in seconds.       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib64/nagios/plugins//check_nrpe -H 10.0.0.1 -p 5666 -t 5  -c check_centreon_plugins -a 'os::linux::local::plugin' 'traffic'  ' \
	--filter-interface="" \
	--warning-in="" \
	--help
```
