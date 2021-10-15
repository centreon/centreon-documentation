### Superviser l'état général du cluster

Modifier sur les deux serveurs centraux les privilèges de l'utilisateur `centreon-engine` en l'intégrant au groupe haclient :

```bash
usermod -a -G haclient centreon-engine
```

Puis suivre les étapes suivantes :

* Installer le Plugin `centreon-plugin-Applications-Pacemaker-Ssh` sur le serveur Central master et slave.

```bash
yum install centreon-plugin-Applications-Pacemaker-Ssh
```

* Installer le Plugin Pack `centreon-pack-applications-pacemaker-ssh` sur le serveur Central master et slave.
* Finaliser l'installation du Plugin Pack sur l'interface web.
* Tester en ligne de commande la sonde Centreon Pacemaker :

```bash
su - centreon-engine
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --plugin="apps::pacemaker::local::plugin"     \
    --mode="crm"                                  \
    --command-options="-1 -f 2"                   \
    --standbyignore
```

```text
OK: Cluster is OK |
```

La macro **EXTRAOPTION** du service **CRM** déployé par le template d'hôte **App-Pacemaker-SSH-custom** peut ainsi être surchargé avec les options suivantes pour contrôler l'état général du cluster :

```text
    --command-options="-1 -f 2>$1" \
    --standbyignore
```

### Superviser la bascule du groupe `centreon`

```bash
su - centreon-engine
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --plugin="apps::pacemaker::local::plugin"     \
    --mode="crm"                                  \
    --command-options="-1 -f 2"                   \
    --standbyignore                               \
    --resources="centengine:@NAME_CENTRAL_MASTER@"
```

```text
OK: Cluster is OK |
```

```bash
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --plugin="apps::pacemaker::local::plugin"     \
    --mode="crm"                                  \
    --command-options="-1 -f 2"                   \
    --standbyignore                               \
    --resources="centengine:@NAME_CENTRAL_SLAVE@"
```

```text
CRITICAL: Resource 'centengine' is started on node '@NAME_CENTRAL_MASTER@' |
```

* Si la ressource `centengine` n'est plus sur le serveur `@CENTRAL_MASTER_NAME@` alors il y a eu bascule et le contrôle est en status **CRITICAL**
* Changer le nom de l'hôte `@CENTRAL_MASTER_NAME@` si besoin.

La macro **EXTRAOPTION** du service **CRM** déployé par le template d'hôte **App-Pacemaker-SSH-custom** peut ainsi être surchargé avec les options suivantes :

```bash
    --command-options="-1 -f 2" \
    --standbyignore             \
    --resources="centengine:@NAME_CENTRAL_MASTER@"
```

### Superviser la synchronisation des bases

Le plugin **centreon-plugin-Applications-Databases-Mysql** permet le contrôle de la réplication :

```bash
su - centreon-engine
/usr/lib/centreon/plugins/centreon_mysql.pl \
    --mode="replication-master-slave"     \
    --multiple                            \
    --host="@NAME_DATABASE_MASTER@"       \
    --username="@MARIADB_REPL_USER@"            \
    --password="@MARIADB_REPL_PASSWD@"      \
    --host="@NAME_DATABASE_SLAVE@"        \
    --username="@MARIADB_REPL_USER@"            \
    --password="@MARIADB_REPL_PASSWD@"
```

```text
OK: No problems. Replication is ok. | 'slave_latency'=0s;;;0;
```

**Note :** Changer le nom des hôtes `@CENTRAL_MASTER_NAME@` et `@CENTRAL_SLAVE_NAME@` ainsi que les informations de connexion aux bases de données si besoin.

Adapter les macro du service correspondant.

### Superviser les contraintes d'une rersource

Le mode **constraints** du plugin **centreon-plugin-Applications-Pacemaker-Ssh** permet le contrôle des contraintes d'une resouce :

```bash
su - centreon-engine
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --mode=constraints                            \
    --resource=ms_mysql-master
```

```text
OK: Resource 'ms_mysql-master' constraint location is OK |
```

**Note :** Changer le nom de la resource `ms_mysql-master` si besoin.

La macro **RESOURCENAME** du service **Constraints** déployé par le template d'hôte **App-Pacemaker-SSH-custom** peut ainsi être surchargé avec les options **Nom-de-la-resource**

## Administration du cluster

### Lister les agents de ressources OCF disponibles

Pour lister les agents de ressources OCF disponibles de Pacemaker, exécuter la commande :

```bash
pcs resource agents ocf:pacemaker
```

Pour lister les agents de ressources OCF disponibles de Heartbeat, exécuter la commande :

```bash
pcs resource agents ocf:heartbeat
```

### Mettre un noeud en maintenance/standby

Pour mettre en maintenance un noeud, exécuter la commande :

```bash
crm_standby -v on -N <node_name>
```

Pour réintégrer un noeud au cluster, exécuter la commande :

```bash
crm_standby -v off -N <node_name>
```
