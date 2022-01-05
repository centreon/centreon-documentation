---
id: monitoring-guide
title: Supervision de Centreon-HA
---

## Supervision des services de clustering et des ressources du cluster

Pour commencer, se référer à la [page de documentation du Plugin-Pack Linux SNMP](integrations/plugin-packs/procedures/operatingsystems-linux-snmp.md) pour installer tous les prérequis et superviser les indicateurs de santé système basiques des deux serveurs centraux.

Puis se référer à la [page de documentation du Plugin-Pack Centreon-HA](integrations/plugin-packs/procedures/applications-monitoring-centreon-ha.md) pour superviser ces processus et ces ressources sur les deux nœuds centraux.

## Supervision de la réplication MariaDB

Se référer à la [page de documentation du Plugin-Pack MySQL/MariaDB](integrations/plugin-packs/procedures/applications-databases-mysql.md) pour installer tous les prérequis et superviser les indicateurs de santé standards de MariaDB.

L'adresse IP du poller doit être une source d'authentification reconnue par les bases de données. Ces requêtes *GRANT* doivent donc être exécuters sur le nœud principal (actif) et seront répliquées immédiatement sur le nœud secondaire (remplacer les champs encadrés par des chevrons `<>`) :

```sql
CREATE USER '<login>'@'<poller ip address>' IDENTIFIED BY '<password>';
GRANT SELECT on centreon.* TO '<login>'@'<poller ip address>' ;
GRANT SELECT on centreon_storage.* TO '<login>'@'<poller ip address>' ;
GRANT REPLICATION CLIENT on *.* TO '<login>'@'<poller ip address>' ;
```

Après avoir appliqué le modèle d'hôte *App-DB-MySQL-custom* et paramétré convenablement les macros *PORT*, *USERNAME* et *PASSWORD*, s'assurer que tous les services ajoutés par défaut sont supervisés correctement (pas d'état *UNKNOWN*).

Puis ajouter un nouveau service en naviguant vers `Configuration` > `Services` > `Services par hôte` et en cliquant sur `Ajouter` et remplir le formulaire conformément à la table ci-dessous :

| Champ           | Valeur                                                       |
|:----------------|:-------------------------------------------------------------|
| *Description*   | MariaDB-Replication                                          |
| *Lié aux hôtes* | Central node                                                 |
| *Modèle*        | App-DB-MySQL-MariaDB-Replication-custom                      |
| `PEERHOST`      | Adresse IP de l'autre nœud                                   |
| `PEERPORT`      | Port du serveur MariaDB de l'autre nœud (par défaut : 3306)  |
| `PEERUSERNAME`  | Identifiant de connexion au serveur MariaDB de l'autre nœud  |
| `PEERPASSWORD`  | Mot de passe de connexion au serveur MariaDB de l'autre nœud |

Puis cliquer sur `Sauvegarder`, et exporter et appliquer la configuration du collecteur.

Le message affiché par ce service doit ressembler à ce qui suit:

```text
OK: No problems. Replication is ok.
Connection Status 'mysql:host=<host ip address>;port=3306' [OK]
Connection Status 'mysql:host=<peer node ip address>;port=3306' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Supervision du Quorum Device

Comme pour les nœuds centraux, il faut commencer par appliquer le [Plugin-Pack Linux SNMP](integrations/plugin-packs/procedures/operatingsystems-linux-snmp.md) pour installer tous les prérequis et superviser les indicateurs de santé système basiques du serveur supportant le Quorum Device.

Puis ajouter un nouveau service en naviguant vers `Configuration` > `Services` > `Services par hôte` et en cliquant sur `Ajouter` et remplir le formulaire conformément à la table ci-dessous :

| Champ           | Valeur                                                   |
|:----------------|:---------------------------------------------------------|
| *Description*   | proc-corosync-qnetd                                      |
| *Lié aux hôtes* | Serveur supportant le Quorum Device                      |
| *Modèle*        | App-Monitoring-Centreon-HA-Process-corosync-qnetd-custom |





