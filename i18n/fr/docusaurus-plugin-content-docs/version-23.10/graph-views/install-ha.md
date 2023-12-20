---
id: install-ha
title: Installer MAP en HA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


> Centreon MAP nécessite une licence valide. Pour en acquérir une et récupérer les dépôts nécessaires, contactez [Centreon](mailto:sales@centreon.com).

## Aperçu

Centreon MAP HA repose sur les mêmes concepts que Centreon HA.
Vous trouverez toutes les informations sur l'[aperçu](../installation/installation-of-centreon-ha/overview.md).

## Prérequis

### Compréhension

Avant d'appliquer cette procédure, vous devez avoir une bonne connaissance de l'OS Linux, de Centreon, et des outils de clusters Pacemaker afin d'avoir une compréhension 
correcte de ce qui est fait.

> **Avertissement :** toute personne qui suit cette procédure le fait sous sa propre responsabilité. En aucun cas, la société Centreon ne peut être tenue responsable d'une 
quelconque panne ou perte de données.

### Flux réseau

En plus des flux nécessaires décrits dans la [documentation officielle](map-web-install.md#architecture), vous devrez ouvrir les flux suivants :

<Tabs groupId="sync">
<TabItem value="2 nœuds" label="2 nœuds">

| De                    | Destination           | Protocol | Port     | Application                                                                       |
| :-------------------- | :-------------------- | :------- | :------- | :-------------------------------------------------------------------------------- |
| Nœud actif            | Nœud  passif          | MariaDB    | TCP 3306 | Synchronisation MariaDB (doit être également ouvert du nœud passif vers le nœud actif) |
| MAP Servers + QDevice | MAP Servers + QDevice | Corosync | UDP 5404 | Communication à l'intérieur du cluster (Multicast)                                |
| MAP Servers + QDevice | MAP Servers + QDevice | Corosync | UDP 5405 | Communication à l'intérieur du cluster (Unicast)                                  |
| MAP Servers + QDevice | MAP Servers + QDevice | PCS      | TCP 2224 | Communication à l'intérieur du cluster                                            |
| MAP Servers + QDevice | MAP Servers + QDevice | Corosync | TCP 5403 | Communication avec le QDevice                                                     |

</TabItem>
<TabItem value="4 nœuds" label="4 nœuds">

| De                         | Destination                 | Protocol | Port     | Application                                                                       |
| :------------------------- | :-------------------------- | :------- | :------- | :-------------------------------------------------------------------------------- |
| Nœud Base de données actif | Nœud Base de données passif | MariaDB    | TCP 3306 | Synchronisation MariaDB (doit être également ouvert du nœud passif vers le nœud actif) |
| MAP Servers + DB + QDevice | MAP Servers + DB + QDevice  | Corosync | UDP 5404 | Communication à l'intérieur du cluster (Multicast)                                |
| MAP Servers + DB + QDevice | MAP Servers + DB + QDevice  | Corosync | UDP 5405 | Communication à l'intérieur du cluster (Unicast)                                  |
| MAP Servers + DB + QDevice | MAP Servers + DB + QDevice  | PCS      | TCP 2224 | Communication à l'intérieur du cluster                                            |
| MAP Servers + DB + QDevice | MAP Servers + DB + QDevice  | Corosync | TCP 5403 | Communication avec le QDevice                                                     |

</TabItem>
</Tabs>

### Installation de la plateforme Centreon MAP

Un cluster Centreon MAP HA ne peut être installé que sur la base d'une plateforme Centreon MAP en fonctionnement.
Avant de suivre cette procédure, il est nécessaire que **[cette procédure d'installation](map-web-install.md)** ait déjà été complétée et qu'**au moins 5GB d'espace libre soit disponible dans le volume groupe LVM** qui contient le répertoire de données MariaDB (point de montage `/var/lib/mysql` par défaut).

La réponse de la commande `vgs` doit ressembler à ceci (bien vérifier la valeur sous la mention `VFree`) :

```bash
  VG      #PV #LV #SN Attr   VSize  VFree
  vg_data   1   1   0 wz--n- 10,99g 5,99g
  vg_root   1   2   0 wz--n-  9,00g    0 
```

Les deux serveurs Centreon MAP doivent être liés au même serveur central.
Le script `/etc/centreon-map/diagnostic.sh` doit retourner `[OK]` sur **les deux** serveurs MAP :

<<<<<<< HEAD
=======
```bash
########## Centreon Map server version ##########

  [INFO] ii centreon-map-engine 23.10.3-bullseye amd64 Centreon Map service under Spring Boot framework

########## System ##########

  [INFO] SELinux is not available
Unit firewalld.service could not be found.
  [OK]   Firewall is disabled
  [INFO] Physical memory available on the server: 4013532 kb.
  [INFO] Number of CPU available on the server: 2 core(s)

########## Java ##########

  [OK]   Java 17 installed
  [OK]   Optimization found for JVM: JAVA_OPTS="-Xms512m -Xmx3G -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/var/log/centreon-map -Dmanagement.endpoints.enabled-by-default=false -Dmanagement.endpoint.health.enabled=true -Dmanagement.endpoint.metrics.enabled=true"

########## Database connection ##########

  [OK]   Connection to centreon
  [OK]   Connection to centreon_storage
  [OK]   Connection to centreon_map

########## Security ##########

  [OK]   Token signing key

########## Broker connection ##########

  [OK]   Connection to @CENTRAL_IPADDR@ 5758 port

########## Authentication ##########

  [OK]   Centreon Central authentication using user centreon_map

########## Protocol verification ##########

    [OK] Centreon Map server configured to use HTTPS protocol
    [INFO] Centreon Central configured in Map to use https protocol.
    [OK]   Centreon Central successfully answered to HTTPS request

>>>>>>> 089bf8963b4d0a90754344243fa9dcec7646a112
```bash
########## Centreon-MAP server version ##########

  [INFO] centreon-map-server-xx.xx.x-x.el7.noarch

########## System ##########

  [OK]   SELinux disabled
  [OK]   Firewall is disabled
  [INFO] Physical memory available on the server: 1884128 kb.
  [INFO] Number of CPU available on the server: 1 core(s)

########## Java ##########

  [OK]   Java 11 installed
  [INFO] No optimization found for the JVM (Xms and Xmx options).

########## Database connection ##########

  [OK]   Connection to centreon
  [OK]   Connection to centreon_storage
  [OK]   Connection to centreon_studio

########## Broker connection ##########

  [OK]   Connection to @CENTRAL_IPADDR@ 5758 port

########## Authentication ##########

  [OK]   Centreon Central authentication using user centreon_map

########## Protocol verification ##########

  [OK] Centreon Map server configured to use HTTPS protocol
  [INFO] Centreon Central configured in Map to use https protocol.
  [OK]   Centreon Central successfully answered to HTTPS request

```

> **Avertissement :** si ces prérequis spécifiques ne sont pas respectés, la méthode de synchronisation des bases de données décrite ci-dessous ne fonctionnera pas.

### Configuration de Studio

Toutes les options spécifiques configurées dans `/etc/centreon-studio/studio-config.properties` doivent 
être les mêmes sur les 2 nœuds. Les options qui peuvent être activées ou désactivées 
sont décrites [ici](configuration.md#définir-les-vues-et-les-paramètres-de-calcul-du-statut).

### Quorum Device

Afin de préserver le cluster des problèmes de "split brain", un troisième serveur est obligatoire pour résoudre l'élection du maître en cas de perte de connexion. 
Le rôle de Quorum Device peut être tenu par un poller de la plateforme de supervision.

### Définir les noms et adresses des hôtes

Dans cette procédure, nous ferons référence aux caractéristiques qui sont appelées à changer d'une plateforme à l'autre (comme les adresses IP) par les macros suivantes :

* `@MAP_PRIMARY_IPADDR@` : adresse IP du serveur MAP primaire
* `@MAP_PRIMARY_NAME@` : nom du serveur MAP primaire (doit être identique à `hostname -s`)
* `@MAP_SECONDARY_IPADDR@` : adresse IP du serveur MAP secondaire
* `@MAP_SECONDARY_NAME@` : nom du serveur MAP secondaire (doit être identique à `hostname -s`)
* `@QDEVICE_IPADDR@` : adresse IP du quorum
* `@QDEVICE_NAME@` : nom du quorum device (doit être identique à `hostname -s`)
* `@MARIADB_REPL_USER@` : identifiant de réplication MariaDB (par défaut : `centreon-repl`)
* `@MARIADB_REPL_PASSWD@` : mot de passe de réplication MariaDB
* `@MARIADB_CENTREON_USER@` : identifiant de MariaDB de Centreon MAP (par défaut : `centreon_map`)
* `@MARIADB_CENTREON_PASSWD@`: mot de passe de MariaDB de Centreon MAP
* `@VIP_IPADDR@` : adresse IP virtuelle du cluster
* `@VIP_IFNAME@` : périphérique réseau portant le VIP du cluster
* `@VIP_CIDR_NETMASK@` : longueur du masque de sous-réseau en bits (ex : 24)
* `@VIP_BROADCAST_IPADDR@` : l'adresse de diffusion VIP du cluster
* `@CENTREON_CLUSTER_PASSWD@` : mot de passe de l'utilisateur `hacluster`

## Paramètres du système

Avant de mettre en place le cluster, certaines conditions préalables doivent être remplies.

### Optimisation de la configuration de réseau

Afin d'améliorer la fiabilité du cluster, et puisque Centreon MAP HA ne prend en charge que l'IPv4, nous vous recommandons d'appliquer les paramètres de configuration 
suivants à tous vos serveurs Centreon MAP (y compris le quorum device) :

```bash
cat >> /etc/sysctl.conf <<EOF
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv4.tcp_retries2 = 3
net.ipv4.tcp_keepalive_time = 200
net.ipv4.tcp_keepalive_probes = 2
net.ipv4.tcp_keepalive_intvl = 2
EOF
systemctl restart networking
```

### Résolution de nom

Pour que le cluster Centreon MAP HA puisse rester opérationnel en cas de panne du système DNS, tous les nœuds du cluster doivent se connaître par leur nom et non par le DNS, en utilisant `/etc/hosts`.

```bash
cat >/etc/hosts <<"EOF"
127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4
@MAP_PRIMARY_IPADDR@ @MAP_PRIMARY_NAME@
@MAP_SECONDARY_IPADDR@ @MAP_SECONDARY_NAME@
@QDEVICE_IPADDR@ @QDEVICE_NAME@
EOF
```

À partir de ce point, `@MAP_PRIMARY_NAME@` sera nommé le " serveur/nœud primaire " et `@MAP_SECONDARY_NAME@` le " serveur/nœud secondaire ". Cette désignation est arbitraire, les deux nœuds seront bien sûr interchangeables une fois la configuration terminée.

### Installation des paquets système

Centreon propose un paquet nommé `centreon-ha-common`, qui fournit tous les fichiers et dépendances nécessaires à un cluster Centreon. Ces paquets doivent être installés sur les deux nœuds de Centreon MAP :

<Tabs groupId="sync">
<TabItem value="Debian11" label="Debian 11">

```bash
apt install centreon-ha-common pcs pacemaker corosync corosync-qdevice
```

</TabItem>
</Tabs>

### Échange de clés SSH

L'authentification basée sur une clé SSH doit être configurée pour que les fichiers et les commandes puissent être envoyés d'un nœud à l'autre par des comptes UNIX :

* `mysql`

Il existe deux façons d'échanger ces clés :

* En utilisant la commande `ssh-copy-id`. Il doit pouvoir se connecter à l'hôte distant en utilisant un mot de passe. Il n'est cependant pas sûr que de tels comptes système disposent d'une authentification par mot de passe. Si vous choisissez cette méthode, nous vous conseillons de révoquer ce mot de passe par la suite avec la commande suivante : `passwd -d mysql`.
* En copiant manuellement la clé publique dans `~/.ssh/authorized_keys`. Cette méthode est plus sûre.

La deuxième méthode sera documentée ci-dessous.

Pour le compte `mysql`, ces commandes doivent être exécutées sur les deux nœuds également :

```bash
systemctl stop mysql
mkdir /home/mysql
chown mysql: /home/mysql
usermod -d /home/mysql mysql
usermod -s /bin/bash mysql
systemctl start mysql
su - mysql
```

Pour le compte `mysql`, ces commandes doivent être exécutées sur les deux nœuds également :

```bash
ssh-keygen -t ed25519 -a 100
cat ~/.ssh/id_ed25519.pub
```

Une fois cela fait, copiez le contenu du fichier de clé publique affiché par `cat` et collez-le dans `~/.ssh/authorized_keys` (qui doit être créé) sur l'autre nœud et appliquez les permissions correctes au fichier (toujours en tant qu'utilisateur `mysql`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

L'échange de clés doit être validé par une connexion initiale de chaque nœud à l'autre afin d'accepter et d'enregistrer l'empreinte SSH du nœud pair (toujours comme utilisateur `mysql`) :

```bash
ssh <peer node hostname>
```

Ensuite, quittez la session `mysql` en tapant `exit` ou `Ctrl-D`.

## Configuration de la réplication des bases de données MariaDB

Un cluster MariaDB primaire-secondaire sera mis en place afin que tout soit synchronisé en temps réel. 

> Sauf indication contraire, chacune des étapes suivantes doit être exécutée **sur les deux nœuds MAP**.

### Configuration de MariaDB

<Tabs groupId="sync">
<TabItem value="Debian11" label="Debian 11">

Pour des raisons d'optimisation et de fiabilité du cluster, vous devez ajouter ces options de réglage à la configuration de MariaDB dans le fichier `/etc/mysql/mariadb.conf.d/50-server.cnf`. Collez ces lignes (certaines doivent être modifiées) dans cette section :

```ini
[server]
server-id=1 # SET TO 1 FOR PRIMARY AND 2 FOR SECONDARY
#read_only
log-bin=mysql-bin
binlog-do-db=centreon_map
innodb_flush_log_at_trx_commit=1
sync_binlog=1
binlog_format=MIXED
slave_compressed_protocol=1
datadir=/var/lib/mysql
pid-file=/var/lib/mysql/mysql.pid

ignore_db_dirs=lost+found

bind-address            = 0.0.0.0

#expire_logs_days        = 10

character-set-server  = utf8mb4
collation-server      = utf8mb4_general_ci

####
# for MAP engine
max_allowed_packet = 20M
innodb_log_file_size = 200M
```
</TabItem>
</Tabs>

> **Important :** la valeur de `server-id` doit être différente d'un serveur à l'autre. Les valeurs proposées dans le commentaire 1 => Primaire et 2 => Secondaire ne sont pas obligatoires mais recommandées.
> `bind-address` permet d'indiquer sur quelle(s) adresse(s) MariaDB écoutera les connexions, si par exemple vous disposez de plusieurs interfaces publiques. `0.0.0.0` signifie "toutes les interfaces".

Pour appliquer la nouvelle configuration, vous devez redémarrer le service de base de données :

```bash
systemctl restart mariadb
```

Assurez-vous que le redémarrage s'est bien passé :

```bash
systemctl status mariadb
```

> **Avertissement :** les autres fichiers dans `/etc/my.cnf.d/` tels que `map.cnf` seront ignorés à partir de maintenant. Toute personnalisation devra être ajoutée dans `50-server.cnf`.

### Création du compte MariaDB `centreon`.

Connectez-vous d'abord en tant que `root` sur les deux serveurs de base de données :

```
mysql -p
```

Puis collez de part et d'autre les commandes SQL suivantes à l'invité MariaDB pour créer l'utilisateur de l'application (par défaut : `centreon_map`). Bien sûr, vous remplacerez d'abord les macros :

```sql
CREATE USER '@MARIADB_CENTREON_USER@'@'@MAP_SECONDARY_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon_map.* TO '@MARIADB_CENTREON_USER@'@'@MAP_SECONDARY_IPADDR@';

CREATE USER '@MARIADB_CENTREON_USER@'@'@MAP_PRIMARY_IPADDR@' IDENTIFIED BY '@MARIADB_CENTREON_PASSWD@';
GRANT ALL PRIVILEGES ON centreon_map.* TO '@MARIADB_CENTREON_USER@'@'@MAP_PRIMARY_IPADDR@';
```

### Création du compte de réplication MariaDB

Toujours dans le même prompt, créez l'utilisateur de réplication (par défaut : `centreon-repl`) :

```sql
GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'localhost' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@MAP_SECONDARY_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';

GRANT SHUTDOWN, PROCESS, RELOAD, SUPER, SELECT, REPLICATION CLIENT, REPLICATION SLAVE ON *.* 
TO '@MARIADB_REPL_USER@'@'@MAP_PRIMARY_IPADDR@' IDENTIFIED BY '@MARIADB_REPL_PASSWD@';
```

### Configuration des tâches de purge des logs binaires

Les logs binaires de MariaDB doivent être purgés sur les deux nœuds, mais pas en même temps, donc les définitions des cron jobs doivent être définies à des moments différents :

* Sur le nœud primaire :

```bash
cat >/etc/cron.d/centreon-ha-mysql <<EOF
0 4 * * * root bash /usr/share/centreon-ha/bin/mysql-purge-logs.sh >> /var/log/centreon-ha/mysql-purge.log 2>&1
EOF
```

* Sur le nœud secondaire :

```bash
cat >/etc/cron.d/centreon-ha-mysql <<EOF
30 4 * * * root bash /usr/share/centreon-ha/bin/mysql-purge-logs.sh >> /var/log/centreon-ha/mysql-purge.log 2>&1
EOF
```

### Configuration des variables d'environnement des scripts MariaDB

Le fichier `/etc/centreon-ha/mysql-resources.sh` déclare des variables d'environnement qui doivent être configurées pour que les scripts Centreon MAP HA dédiés à MariaDB puissent fonctionner correctement. Il faut attribuer à ces variables les valeurs choisies pour les macros.

```bash
#!/bin/bash

###############################
# Database access credentials #
###############################

DBHOSTNAMEMASTER='@MAP_PRIMARY_NAME@'
DBHOSTNAMESLAVE='@MAP_SECONDARY_NAME@'
DBREPLUSER='@MARIADB_REPL_USER@'
DBREPLPASSWORD='@MARIADB_REPL_PASSWD@'
DBROOTUSER='@MARIADB_REPL_USER@'
DBROOTPASSWORD='@MARIADB_REPL_PASSWD@'
CENTREON_DB='centreon_map'
CENTREON_STORAGE_DB='centreon_map'

###############################
```

> **Note :** ce script est normalement utilisé pour Centreon HA, c'est pourquoi nous devons configurer deux fois centreon_map comme `CENTREON_DB` et `CENTREON_STORAGE_DB`.


Pour vous assurer que toutes les étapes précédentes ont réussi, et que les noms, identifiants et mots de passe corrects ont été saisis dans le fichier de configuration bash, exécutez cette commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est :

```text
Connection Status '@MAP_PRIMARY_NAME@' [OK]
Connection Status '@MAP_SECONDARY_NAME@' [OK]
Slave Thread Status [KO]
Error reports:
	No slave (maybe because we cannot check a server).
Position Status [SKIP]
!Error reports:
	Skip because we can't identify a unique slave.
```

Ce qui importe ici, c'est que les deux premiers tests de connexion soient `OK`.

### Passage en mode lecture seule

Maintenant que tout est bien configuré, vous allez activer le `read_only` sur les deux serveurs de base de données en décommentant (en enlevant le `#` en début de ligne) cette instruction dans le fichier `50-server.cnf` :

* Nœud primaire :

```ini
[server]
server-id=1
read_only
log-bin=mysql-bin
```

* Nœud secondaire :

```ini
[server]
server-id=2
read_only
log-bin=mysql-bin
```

Ensuite, appliquez ce changement en redémarrant MariaDB sur les deux nœuds :

```bash
systemctl restart mariadb
```

### Synchronisation des bases de données et activation de la réplication MariaDB

Lors du processus de synchronisation des bases de données, vous arrêterez d'abord le processus de la base de données secondaire afin que ses données puissent être écrasées par celles du nœud primaire. 

> Ce script utilise maintenant GTID et si votre nœud primaire n'a pas effectué de nouvelles écritures depuis la mise en place de cette configuration, vous risquez de rencontrer une erreur de type : **cannot get gtid current pos**. Afin de contourner ce problème, retirez le `read_only` et créez une map (carte) ou une vue de test afin que le nœud primaire ait quelques données à écrire. N'oubliez de repasser en `read_only` ensuite.

Exécutez cette commande **sur le nœud secondaire :**

```bash
systemctl stop mariadb
```

Il est important de s'assurer que MariaDB soit complètement arrêté. Vous allez exécuter cette commande et vérifier qu'elle ne renvoie aucun résultat :

```bash
ps -ef | grep mysql[d]
```

Si un ou plusieurs processus sont toujours en cours, exécutez cette autre commande (elle vous demandera le mot de passe root de MariaDB) :

```bash
mysqladmin -p shutdown
```

Une fois le service arrêté **sur le nœud secondaire**, vous exécuterez le script de synchronisation **depuis le nœud primaire** :

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

Ce script va effectuer les actions suivantes :

* vérifier que MariaDB est arrêté sur le nœud secondaire,
* arrêt de MariaDB sur le nœud primaire,
* monter un snapshot LVM sur le même volume groupe que celui qui contient le point de montage `/var/lib/mysql` (ou tout autre point de montage contenant les fichiers de données MariaDB),
* redémarrer MariaDB sur le nœud primaire,
* enregistrer la position actuelle dans le log binaire,
* désactiver le mode `read_only` sur le nœud primaire (ce nœud sera maintenant capable d'écrire dans sa base de données),
* synchronisation et réécriture de tous les fichiers de données (sauf la base de données système `mysql`),
* démontage du snapshot LVM,
* création du thread de réplication qui maintiendra les deux bases de données synchronisées.

Le résultat de ce script est très verbeux et vous ne pouvez pas vous attendre à tout comprendre, donc pour vous assurer que tout s'est bien passé, concentrez-vous sur les dernières lignes de son résultat, en vérifiant qu'elles ressemblent à ceci :

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed
Start MySQL Slave
Start Replication
Id	User	Host	db	Command	Time	State	Info	Progress
[variable number of lines]
```

La chose importante à vérifier est que `Start MySQL Slave` et `Start Replication` sont présents et qu'aucune erreur ne les suit.

De plus, le message de sortie de cette commande ne doit afficher que des résultats `OK` :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est :

```text
Connection Status '@MAP_PRIMARY_NAME@' [OK]
Connection Status '@MAP_SECONDARY_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Arrêter et désactiver les services

Les services applicatifs de Centreon ne seront plus lancés au démarrage, ils seront gérés par les outils du cluster. Ces services doivent donc être arrêtés et désactivés :

```bash
systemctl disable --now centreon-map-engine mariadb
```

Par défaut, le service `mariadb` est activé dans les perspectives de systemd et de system V, il est donc préférable de s'assurer qu'il est désactivé (**ne concerne pas Debian**) :

```bash
chkconfig mysql off
```

### Création du cluster

#### Activation des services du cluster

D'abord nous activons tous les services et démarrons `pcsd` sur les deux nœuds Centreon MAP :

```bash
systemctl start pcsd
```

#### Préparation du serveur qui assurera la fonction de *quorum device*

Vous pouvez utiliser un de vos pollers pour jouer ce rôle. Il doit être préparé avec les commandes suivantes : 
<Tabs groupId="sync">
<TabItem value="Debian11" label="Debian 11">

```bash
apt install corosync-qdevice pcs corosync-qnetd
systemctl enable --now pcsd.service
pcs qdevice setup model net --enable --start
pcs qdevice status net --full
```

Modifiez le paramètre `COROSYNC_QNETD_OPTIONS` dans le fichier `/etc/default/corosync-qnetd` pour être sûr que le service n'écoutera les connexions que sur IPv4.

```bash
COROSYNC_QNETD_OPTIONS="-4"
```
</TabItem>
</Tabs>

#### Authentification des membres du cluster

Pour des raisons de simplicité, l'utilisateur `hacluster` se verra attribuer le même mot de passe sur les deux nœuds de Centreon-MAP **et `@QDEVICE_NAME@`**.

```bash
passwd hacluster
```
<Tabs groupId="sync">
<TabItem value="Debian11" label="Debian 11">

Debian possède déjà une configuration de cluster préexistante par défaut. Avant de pouvoir authentifier vos membres du cluster, il faut détruire le cluster par défaut sur les 2 nœuds MAP :

```bash
pcs cluster destroy
```

</TabItem>
</Tabs>

Maintenant que les deux nœuds de Centreon-MAP **et** le serveur *quorum device* partagent le même mot de passe, vous allez exécuter cette commande **seulement sur l'un des nœuds de Centreon MAP** afin d'authentifier tous les hôtes participant au cluster.

```bash
pcs host auth \
	"@MAP_PRIMARY_NAME@" \
	"@MAP_SECONDARY_NAME@" \
	"@QDEVICE_NAME@" \
	-u "hacluster" \
	-p '@CENTREON_CLUSTER_PASSWD@' \
```

#### Création du cluster

La commande suivante crée le cluster. Elle doit être exécutée **seulement sur l'un des nœuds de Centreon MAP**. 

```bash
pcs cluster setup \
	centreon_map_cluster \
	"@MAP_PRIMARY_NAME@" \
	"@MAP_SECONDARY_NAME@"
```

Ensuite, démarrez le service `pacemaker` **sur les deux nœuds de Centreon MAP** :

```bash
systemctl enable pacemaker pcsd corosync
systemctl start pacemaker
```

Et ensuite définir ces propriétés **seulement sur un nœud** :

```bash
pcs property set symmetric-cluster="true"
pcs property set stonith-enabled="false"
pcs resource defaults update resource-stickiness="100"
```

Vous pouvez maintenant suivre l'état du cluster avec la commande `crm_mon`, qui affichera les nouvelles ressources au fur et à mesure de leur apparition.

#### Création du *Quorum Device*

Exécutez cette commande sur l'un des nœuds de Centreon MAP :

```bash
pcs quorum device add model net \
	host="@QDEVICE_NAME@" \
	algorithm="ffsplit"
```

### Créer les ressources du cluster MariaDB

À exécuter **seulement sur un nœud de Centreon MAP** :

<Tabs groupId="sync">
<TabItem value="Debian11" label="Debian 11">

```bash
pcs resource create "ms_mysql" \
	ocf:heartbeat:mariadb-centreon \
	config="/etc/mysql/mariadb.conf.d/50-server.cnf" \
	pid="/var/lib/mysql/mysql.pid" \
	datadir="/var/lib/mysql" \
	socket="/var/lib/mysql/mysql.sock" \
	replication_user="@MARIADB_REPL_USER@" \
	replication_passwd='@MARIADB_REPL_PASSWD@' \
	binary="/usr/bin/mysqld_safe" \
	test_user="@MARIADB_REPL_USER@" \
	test_passwd="@MARIADB_REPL_PASSWD@" \
	test_table='centreon_map.map' \
	node_list="@MAP_PRIMARY_NAME@ @MAP_SECONDARY_NAME@"
```

</TabItem>
<TabItem value="RHEL" label="RHEL">

```bash
pcs resource create "ms_mysql" \
	ocf:heartbeat:mysql-centreon \
	config="/etc/my.cnf.d/server.cnf" \
	pid="/var/lib/mysql/mysql.pid" \
	datadir="/var/lib/mysql" \
	socket="/var/lib/mysql/mysql.sock" \
	replication_user="@MARIADB_REPL_USER@" \
	replication_passwd='@MARIADB_REPL_PASSWD@' \
	max_slave_lag="15" \
	evict_outdated_slaves="false" \
	binary="/usr/bin/mysqld_safe" \
	test_user="@MARIADB_REPL_USER@" \
	test_passwd="@MARIADB_REPL_PASSWD@" \
	test_table='centreon_studio.data'
```

</TabItem>
</Tabs>

> **Avertissement :** la syntaxe de la commande suivante dépend de la distribution Linux que vous utilisez.

<Tabs groupId="sync">
<TabItem value="Debian11" label="Debian 11">

```bash
pcs resource promotable ms_mysql \
    master-node-max="1" \
    clone_max="2" \
    globally-unique="false" \
    clone-node-max="1" \
    notify="true"
```

</TabItem>
<TabItem value="RHEL" label="RHEL">

```bash
pcs resource master ms_mysql \
	master-node-max="1" \
	clone_max="2" \
	globally-unique="false" \
	clone-node-max="1" \
	notify="true"
```

</TabItem>
</Tabs>

### Création du groupe de ressources Centreon MAP

##### Adresse VIP

```bash
pcs resource create vip \
	ocf:heartbeat:IPaddr2 \
	ip="@VIP_IPADDR@" \
	nic="@VIP_IFNAME@" \
	cidr_netmask="@VIP_CIDR_NETMASK@" \
	broadcast="@VIP_BROADCAST_IPADDR@" \
	flush_routes="true" \
	meta target-role="started" \
	op start interval="0s" timeout="20s" \
	stop interval="0s" timeout="20s" \
	monitor interval="10s" timeout="20s" \
	--group centreon_map
```

#### Service Centreon MAP

```bash
pcs resource create centreon-map \
	systemd:centreon-map-engine \
	meta target-role="started" \
	op start interval="0s" timeout="90s" \
	stop interval="0s" timeout="90s" \
	monitor interval="5s" timeout="30s" \
	--group centreon_map
```

#### Contraintes de colocation

Afin de forcer le cluster à faire tourner le groupe de ressources `centreon_map` et la base de données MariaDB maître sur le même nœud, vous devez déclarer ces contraintes de colocation :

```bash
pcs constraint colocation add "centreon_map" with master "ms_mysql-clone"
pcs constraint colocation add master "ms_mysql-clone" with "centreon_map"
```

Après cette étape, toutes les ressources doivent fonctionner sur le même nœud, la plateforme doit être redondante et fonctionner correctement.

### Vérification de l'état du cluster

#### Vérification de l'état des ressources

Vous pouvez superviser les ressources du cluster en temps réel en utilisant la commande `crm_mon` :

```bash
Stack: corosync
Current DC: @MAP_SECONDARY_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 13:14:17 2020
Last change: Thu Feb 20 09:25:54 2020 by root via crm_attribute	on @MAP_PRIMARY_NAME@

2 nodes configured
4 resource instances configured

Online: [ @MAP_PRIMARY_NAME@ @MAP_SECONDARY_NAME@ ]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @MAP_PRIMARY_NAME@ ]
    * Slaves: [ @MAP_SECONDARY_NAME@ ]
  * Resource Group: centreon_map:
    * mapvip	(ocf::heartbeat:IPaddr2):	 Started @MAP_PRIMARY_NAME@
    * centreon-map	(systemd:centreon-map-engine):	 Started @MAP_PRIMARY_NAME@

 Master/Slave Set: ms_mysql-master [ms_mysql]
	 Masters: [ @MAP_PRIMARY_NAME@ ]
	 Slaves: [ @MAP_SECONDARY_NAME@ ]
 Resource Group: centreon
	 vip        (ocf::heartbeat:IPaddr2):	Started @MAP_PRIMARY_NAME@
	 centreon-map	(systemd:centreon-map):   Started @MAP_PRIMARY_NAME@
```

#### Vérification du thread de réplication de la base de données

L'état de la réplication de MariaDB peut être supervisé à tout moment avec la commande `mysql-check-status.sh` :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est :

```bash
Connection Status '@MAP_PRIMARY_NAME@' [OK]
Connection Status '@MAP_SECONDARY_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

Il peut arriver que le thread de réplication ne fonctionne pas juste après l'installation. Le redémarrage de la ressource `ms_mysql` peut résoudre ce problème.

```bash 
pcs resource restart ms_mysql
```

#### Vérification des contraintes

Normalement, les deux contraintes de colocation qui ont été créées pendant la configuration devraient être les seules contraintes que la commande `pcs constraint` affiche :

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon_map with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon_map (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

### Mise à jour de l'extension Centreon-Web UI

Maintenant que vous utilisez l'adresse VIP, vous devez mettre à jour le paramètre **Adresse du serveur Centreon MAP** 
dans le menu **Administration > Extensions > Options** avec l'adresse VIP ou le FQDN qui résout le VIP.

> En cas de HTTPS, il est possible que vous deviez accepter à nouveau le certificat (en cas de certificat auto-signé).
