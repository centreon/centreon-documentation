---
id: operatingsystems-linux-ssh
title: Linux SSH
---

## Vue d'ensemble

Linux est une famille de systèmes d'exploitation à source ouverte de type Unix basée sur le noyau Linux, un noyau de système d'exploitation publié pour la première fois le 17 septembre 1991 par Linus Torvalds. 

## Contenu du Plugin-Pack

### Objets supervisés

Ce Plugin-Pack est compatible avec n'importe quelle distribution Linux avec un daemon SSH installé :

* Serveur
* Centos 
* Redhat
* Debian
* Ubuntu
* Fedora
* Suse

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                        | Description                                    |
| :--------------------------------- | :--------------------------------------------- |
| cpu.utilization.percentage         | CPU utilization. Unit: %                       |
| core.cpu.utilization.percentage    | CPU utilization by core. Unit: %               |

<!--Cpu Detailled-->

* Per CPU :

| Metric name     | Description                          |
| :---------------| :----------------------------------- |
| cpu_user        | Average user for CPU. Unit : %       |
| cpu_nice	  | Average nice for CPU. Unit : %       |
| cpu_system	  | Average system for CPU. Unit : %     |
| cpu_idle	  | Average idle for CPU. Unit : %       |
| cpu_wait	  | Average wait for CPU. Unit : %       |
| cpu_interrupt	  | Average interrupt for CPU. Unit : %  |
| cpu_softirq	  | Average softirq for CPU. Unit : %    |
| cpu_steal       | Average steal for CPU. Unit : %      |
| cpu_guest       | Average guest for CPU. Unit : %      |
| cpu_guestnice   | Average guest nice for CPU. Unit : % |

* Total :
 
| Metric name              | Description                             |
| :----------------------- | :-------------------------------------- |
| total_cpu_guest_avg      | Total average guest CPUs. Unit : %      |
| total_cpu_guestnice_avg  | Total average guest nice CPUs. Unit : % |
| total_cpu_idle_avg	   | Total average idle CPUs. Unit : %       |
| total_cpu_interrupt_avg  | Total average interrupt CPUs. Unit : %  |
| total_cpu_nice_avg       | Total average nice CPUs. Unit : %       |
| total_cpu_softirq_avg	   | Total average softirq CPUs. Unit : %    |
| total_cpu_steal_avg      | Total average steal CPUs. Unit : %      |
| total_cpu_system_avg     | Total average system CPUs. Unit : %     |
| total_cpu_user_avg 	   | Total average user CPUs. Unit : %       |
| total_cpu_wait_avg       | Total average wait CPUs. Unit : %       |

<!--Memory-->

| Metric name           | Description                                   |
| :-------------------- | :-------------------------------------------- |
| used                  | Memory used. Unit : B                         |
| slab                  | Slab allocation memory used. Unit : B         |
| buffer                | Memory buffured. Unit : B                     |
| cached                | Memory cached. Unit : B                       |

<!--Filesdate-->

| Metric name           | Description                                                 |
| :-------------------- | :---------------------------------------------------------- |
| name                  | Time (modified, creation,...) of files/directories. Unit: s |

<!--Filessize-->

| Metric name           | Description                               |
| :-------------------- | :---------------------------------------- |
| name                  | Size of one file/directorie. Unit : B     |
| total                 | Total Size of files/directories. Unit : B |

<!--Diskio-->

| Metric name                            | Description                                                  |
| :------------------------------------- | :----------------------------------------------------------- |
| device.io.read.usage.bytespersecond    | Read IO usage in bytes per second. Unit : B/s                |
| device.io.write.usage.bytespersecond   | Write IO usage in bytes per second. Unit : B/s               |
| device.io.read.time.milliseconds       | Read time in milliseconds. Unit : ms                         |
| device.io.write.time.milliseconds      | Write time in milliseconds. Unit : ms                        |
| device.io.utils.percentage             | IO utilization for  different usage type of CPU. Unit : %    |

<!--Openfiles-->

| Metric name                 | Description                           |
| :-------------------------- | :------------------------------------ |
| system.files.open.count     | Number of files opened on the system  |

<!--Swap-->

| Metric name                 | Description                       |
| :-------------------------- | :-------------------------------- |
| swap.usage.bytes            | Swap usage. Unit: B               |
| swap.free.bytes             | Swap free. Unit: B                |
| swap.usage.percentage       | Swap usage in percentage. Unit: % |

<!--Load-->

| Metric name                 | Description                  |
| :-------------------------- | :--------------------------- |
| load1                       | Load average on 1 minute.    |
| load5                       | Load average on 5 minutes.   |
| load15                      | Load average on 15 minutes.  |

<!--Uptime-->

| Metric name                 | Description                                                 |
| :-------------------------- | :---------------------------------------------------------- |
| uptime                      | Duration of system has been working and available. Unit : s |

<!--Paging-->

| Metric name                            | Description                                                      |
| :------------------------------------- | :--------------------------------------------------------------- |
| system.pgpgin.usage.bytespersecond     | Usage of the number of pgpgin in bytes per second. Unit : B/s    |
| system.pgpgout.usage.bytespersecond    | Usage of the number of pgpgout in bytes per second. Unit : B/s   |
| system.pswpin.usage.bytespersecond     | Usage of the number of pswpin in bytes per second. Unit : B/s    |
| system.pswpout.usage.bytespersecond    | Usage of the number of pages in bytes per second. Unit : B/s     |
| system.pgfault.usage.bytespersecond    | Usage pgfault in bytes per second. Unit : B/s                    |
| system.pgmajfault.usage.bytespersecond | Usage pgmajfault in bytes per second. Unit : B/s                 |

<!--Connections-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| app                         | Number of application connection                   |
| service                     | Number of service connection                       |
| con_closed                  | Number of connection closed                        |
| con_closeWait               | Number of connection on wait close                 |
| con_closing                 | Number of connection closing                       | 
| con_established             | Number of connection etablished                    |
| con_finWait1                | Number of connection fin Wait1                     |
| con_finWait2                | Number of connection fin Wait2                     | 
| con_lastAck                 | Number of connection on last Ack                   |
| con_listen                  | Number of connection on listen                     |
| con_synReceived             | Number of connection synchronized syn Received     |
| con_synSent                 | Number of connection synchronized syn Sent         |
| con_timeWait                | Number of connection on time wait                  | 
| total                       | Total of connection                                |

<!--Inodes-->

| Metric name                 | Description                                 |
| :-------------------------- | :------------------------------------------ |
| used                        | Inodes space usage on partitions. Unit : %  |

<!--Process-->

| Metric name                 | Description                    |
| :-------------------------- | :----------------------------- |
| nbproc                      |  Number of current processes.  |

<!--Ntp-->

| Metric name           | Description                        |
| :-------------------- | :--------------------------------- |
| offset                | Offset of ntpd service. Unit : ms  |

<!--Quota-->

| Metric name           | Description                         |
| :-------------------- | :---------------------------------- |
| data_used             | Quota usage on partitions. Unit : B |

<!--Storage-->

| Metric name           | Description              |
| :-------------------- | :----------------------- |
| used                  | Storage usages. Unit : B |

<!--Traffic-->

| Metric name                         | Description                                                |
| :---------------------------------- | :--------------------------------------------------------- |
| status                              | Status of the interface                                    |
| interface.traffic.in.bitspersecond  | Incoming traffic going through the interface. Units: b/s   |
| interface.traffic.out.bitspersecond | Outgoing traffic going through the interface. Units: b/s   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SSH

Un simple utilisateur est nécessaire pour interroger le système d'exploitation Linux par SSH. Il n'est pas nécessaire d'avoir des privilèges root ou sudo.
Il y a deux façons possibles d'effectuer la vérification SSH, soit en échangeant la clé SSH de centreon-engine au serveur cible, 
ou en définissant votre utilisateur et votre mot de passe directement dans les macros hôtes.

<!--DOCUSAURUS_CODE_TABS-->

<!--Exchange des Clés SSH -->

Ajouter et générer un mot de passe pour votre utilisateur sur le **Serveur Cible** :

```bash
adduser ro_ssh_centreon
passwd ro_ssh_centreon
```

Basculer vers l'environnement bash de `centreon-engine` sur votre serveur Central et sur Poller :

```bash
su - centreon-engine
```

Ensuite, copier cette clé sur le **Serveur cible** avec les commandes suivantes :

```bash
ssh-keygen -t ed25519 -a 100
ssh-copy-id -i .ssh/id_ed25519.pub ro_ssh_centreon@<IP_TARGET_SERVER>
```

<!--Autentification Utilisateur/Mot de passe-->

Après avoir défini les paramètres du nom, de l'alias, de l'IP et du modèle d'hôte, vous devez remplir les macros décritent dans la partie **Configuration** ci-dessous.

<!--END_DOCUSAURUS_CODE_TABS-->

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Linux SSH :

```bash
yum install centreon-plugin-Operatingsystems-Linux-Ssh.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Linux SSH* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Linux SSH :

```bash
yum install centreon-plugin-Operatingsystems-Linux-Ssh.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-operatingsystems-linux-ssh.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Linux SSH* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Créer un nouvel hôte dans Centreon et lui appliquer le modèle d'hôte "OS-Linux-SSH-custom".
Une fois le modèle défini, vous devez définir des valeurs en fonction du backend SSH choisi.
3 backends SSH sont disponibles pour se connecter au serveur Linux : *sshcli*, *plink* et *libssh* qui sont détaillés ci-dessous.  

<!--DOCUSAURUS_CODE_TABS-->

<!--sshcli backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```sshcli```                                                                    |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre collecteur |          
|             | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication                |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur Linux. (Macro SSHUSERNAME).

<!--plink backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- | 
| X           | SSHBACKEND      | Nom du backend: ```plink```                                                                     |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur Linux. (Macro SSHUSERNAME).

<!--libssh backend (par défaut)-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```libssh```                                                                    |          
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

Avec ce backend, vous n'avez pas à valider manuellement le fingerprint du serveur cible. 

## FAQ

### Comment vérifier en ligne de commande que la configuration est correcte et quelles sont les principales options ?

Une fois le Plugin installé, connectez-vous à votre poller en utilisant le compte utilisateur *centreon-engine* et testez en lançant la commande suivante :

```bash
 /usr/lib/centreon/plugins//centreon_linux_ssh.pl \
      --plugin=os::linux::local::plugin \
      --mode=cpu \
      --hostname='10.30.2.114' \
      --ssh-backend='libssh' \
      --ssh-username='centreon' \
      --ssh-password='centreon-password' \
      --ssh-port='22' \
      --warning-core='60' \
      --critical-core='70' \
      --warning-average='60' \
      --critical-average='75' \
      --verbose \
      --use-new-perfdata	
	
OK: CPU(s) average usage is 11.91 % - CPU '0' usage : 11.91 % |
'cpu.utilization.percentage'=11.91%;;;0;100 '0#core.cpu.utilization.percentage'=11.91%;;;0;100 
CPU '0' usage : 11.91 %
```

La commande ci-dessus supervise la moyenne d'un CPU d'un équipement en utilisant SSH (```--mode=CPU```).
Il y a pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) comme Backend SSH  (```--ssh-backend='libssh'```) 
avec les centreon comme username _centreon_ (```--ssh-username=centreon```) et comme mot de passe _centreon-password_ (```--ssh-password='centreon-password'```). 

Cette commande déclenchera une alarme WARNING si la moyenne du CPU augmente à plus de 60% (```--warning-average='60'```)
et une alarme CRITICAL si plus de 75% (```--critical-average='75'```).
Des seuils peuvent être fixés sur toutes les métriques de l'appareil en utilisant la syntaxe "```--warning-*metric* --critical-*metric*```".

Toutes les options qui peuvent être utilisées avec ce plugin se trouvent sur la commande ```--help``` :

```bash
/usr/lib/centreon/plugins//centreon_linux_ssh.pl --plugin=os::linux::local::plugin
--mode=cpu --help
```

### J'ai ce message d'erreur : ```UNKNOWN: Command error: Host key verification failed.```. Qu'est-ce que cela signifie ?

Cela signifie que vous n'avez pas validé manuellement la signature (fingerprint) du serveur cible avec ```ssh``` or ```plink``` sur le Poller Centreon.
