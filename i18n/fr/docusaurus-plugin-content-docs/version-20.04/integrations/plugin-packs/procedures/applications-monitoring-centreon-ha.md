---
id: applications-monitoring-centreon-ha
title: Centreon-HA
---

## Vue d'ensemble

Centreon-HA est l'implémentation en haute disponibilité de la fonction centrale de Centreon. Plus d'informations sont disponibles [ici](installation/installation-of-centreon-ha/overview.md).

Le Plugin-Pack Centreon-HA s'appuie sur deux autre Plugin-Packs :

* [Pacemaker](integrations/plugin-packs/procedures/applications-pacemaker-ssh.md)
* [Linux SNMP](integrations/plugin-packs/procedures/operatingsystems-linux-snmp.md)

Par conséquent, il utilise les protocoles de ces deux Plugin-Packs - **SNMP** et **SSH** - pour se connecter aux nœuds du cluster Centreon-HA et récupérer informations et métriques relatives aux processus et à la santé du cluster.

## Contenu du Plugin-Pack

### Objets supervisés

* Nœuds d'un cluster Centreon-HA
* Noœud actif d'un cluster Centreon-HA *via* la VIP
* Serveur tiers fournissant le service de Quorum Device (service `corosync-qnetd`)

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--PCS-Status-->

Ce modèle ne collecte pas de métrique, mais donne l'état général du cluster :

* remontée des "failed actions"
* état des ressource :
  * `php7`
  * `cbd_rrd`
  * `vip`
  * `http`
  * `gorgone`
  * `centreon_central_sync`
  * `cbd_central_broker`
  * `centengine`
  * `centreontrapd`
  * `snmptrapd`

<!--proc-corosync-->

| Metric name | Description                                                    | Unit  |
|:------------|:---------------------------------------------------------------|:------|
| nbproc      | Nombre de processus dont le nom correpond au filtre `corosync` | Count |

<!--proc-pacemakerd-->

| Metric name | Description                                                      | Unit  |
|:------------|:-----------------------------------------------------------------|:------|
| nbproc      | Nombre de processus dont le nom correpond au filtre `pacemakerd` | Count |

<!--proc-pcsd-->

| Metric name | Description                                                | Unit  |
|:------------|:-----------------------------------------------------------|:------|
| nbproc      | Nombre de processus dont le nom correpond au filtre `pcsd` | Count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SNMP de l'équipement

La configuration de SNMP sur un serveur Linux est expliquée dans [la page de documentation du Plugin-Pack Linux SNMP](integrations/plugin-packs/procedures/operatingsystems-linux-snmp.md#configuration-du-serveur-snmp).

### Configuration de la connexion SSH sans mot de passe

> NB : Il est très fortement recommandé de surveiller le cluster à partir d'un poller plutôt qu'à partir du cluster.

Ouvrir une session en ligne de commande sur :

* le poller qui sera chargé de superviser le cluster
* chaque nœud de ce cluster

Une fois ces sessions ouvertes, lancer cette commande :

```bash
su - centreon-engine
```

À présent nous sommes dans l'environnement `bash` de `centreon-engine`. Lancer ensuite cette commande :

```bash
ssh-keygen -t ed25519 -a 100
```

Nous avons généré une paire de clés sur chaque serveur, ainsi que le répertoire `~/.ssh`. 

Sur le poller lancer cette commande pour afficher la clé publique créée :

```bash
cat ~/.ssh/id_ed25519.pub
```

Après avoir lancé cette commande, copier le contenu du fichier qui s'est affiché sous la commande `cat` et le coller à la fin du fichier (probablement à créer) `~/.ssh/authorized_keys` des nœuds centraux, puis appliquer les bons droits sur le fichier (toujours en tant que `centreon-engine`) :

```bash
chmod 600 ~/.ssh/authorized_keys
```

Une fois cette étape effectuée sur chaque nœud central, il ne reste plus qu'à initialiser une première connexion depuis le poller vers chacun des nœuds :

```bash
ssh <cluster-node-ip-address>
```

L'utilisateur `centreon-engine` du poller est alors capable d'ouvrir une session SSH sur les deux nœuds centraux. 

Il ne reste plus qu'à l'intégrer au groupe `haclient` pour lui permettre d'exécuter les commandes nécessaires à la surveillance du cluster :

```bash
usermod -a -G haclient centreon-engine
```

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser un cluster Centreon-HA :

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Centreon-HA* depuis la page "Configuration > Plugin Packs > Gestionnaire" 

<!--Offline IMP License-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser un cluster Centreon-HA :

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-applications-monitoring-centreon-ha
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Centreon-HA* depuis la page "Configuration > Plugin Packs > Gestionnaire"

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *App-Monitoring-Centreon-HA-Cluster-Node-custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres d'authentification et de chiffrement adéquats.

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon **en vous connectant avec l'utilisateur `centreon-engine`** :

```bash
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \
    --plugin=apps::pacemaker::local::plugin \
	--mode=crm \
	--hostname=10.0.0.1 \
	--remote \
	--command='pcs' \
	--command-options='status --full' \
	--verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```text
OK: Cluster is OK |
Resource 'php7' is started on node 'central-primary'
Resource 'php7' is started on node 'central-secondary'
Resource 'cbd_rrd' is started on node 'central-primary'
Resource 'cbd_rrd' is started on node 'central-secondary'
Resource 'vip' is started on node 'central-secondary'
Resource 'http' is started on node 'central-secondary'
Resource 'gorgone' is started on node 'central-secondary'
Resource 'centreon_central_sync' is started on node 'central-secondary'
Resource 'cbd_central_broker' is started on node 'central-secondary'
Resource 'centengine' is started on node 'central-secondary'
Resource 'centreontrapd' is started on node 'central-secondary'
Resource 'snmptrapd' is started on node 'central-secondary'
```

Dans cet exemple, le Plugin récupère les informations concernant l'état général du cluster Centreon-HA par l'intermédiaire du nœud identifié par l'adresse IP *10.0.0.1* (```--hostname=10.0.0.1```). 

Une alarme WARNING sera ainsi déclenchée si une ou plusieurs *failed actions* sont remontées par la commande `pcs status --full`. L'alarme sera de type CRITICAL si une ou plusieurs ressource sont arrêtées alors qu'elles devraient être démarrées.

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl --plugin=apps::pacemaker::local::plugin --mode=crm --help
```

Les options `--command='pcs'` et `--command-options='status --full'` permettent de surcharger le fonctionnement du plugin en remplaçant la commande `crm_mon -1 -r -f 2>&1` par `pcs status --full`.

### J'obtiens le message d'erreur suivant:

#### The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established

> Attention, la tentative d'exécution du plugin et de connexion via SSH doivent impérativement se faire depuis le compte `centreon-engine`.

Le message complet ressemble à ce qui suit :

```text
The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.
ECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
ECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
Are you sure you want to continue connecting (yes/no)? UNKNOWN: Command too long to execute (timeout)...
```

Si vous obtenez ce message, cela signifie que vous n'avez pas accepté l'empreinte du serveur.

Pour y remédier il faut initier une première connexion :

```bash
ssh x.x.x.x
```

Puis taper 'yes' à l'invite suivante :

```text
The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.
ECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
ECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
Are you sure you want to continue connecting (yes/no)?
```

#### UNKNOWN: Command error: Permission denied, please try again

Le message complet ressemble à ce qui suit :

```text
UNKNOWN: Command error: Permission denied, please try again. - Permission denied, please try again. - Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).
```

Si l'exécution de la sonde renvoie ce message, c'est que la clé publique du compte `centreon-engine` du poller n'est pas correctement déposée sur le nœud que l'on cherche à superviser.

Il faut tout d'abord s'assurer que celle-ci (contenue dans `/var/lib/centreon-engine/.ssh/id_ed25519.pub`) est bien présente dans le fichier `/var/lib/centreon-engine/.ssh/authorized_keys`.

Si le point précédent est bien validé, alors s'assurer que les permissions du fichier `authorized_keys` et du répertoire `.ssh` qui le contient sont conformes à ce qui s'affiche suite à la commande :

```bash
ls -al /var/lib/centreon-engine/.ssh
```

Le résultat doit être conforme à ce qui suit :

```text
total 20
drwx------  2 centreon-engine centreon-engine 4096 Sep  4 14:44 .
drwxr-xr-x. 5 centreon-engine centreon-engine 4096 Sep  4 14:44 ..
-rw-------  1 centreon-engine centreon-engine    0 Sep  4 14:44 authorized_keys
```

Dans le cas contraire, lancer ces commandes :

```bash
chmod 700 /var/lib/centreon-engine/.ssh
chmod 600 /var/lib/centreon-engine/.ssh/authorized_keys
```
