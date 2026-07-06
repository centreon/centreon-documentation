---
id: applications-virtualization-nutanix-prism-restapi
title: Nutanix Prism Element REST API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Présentation

Le connecteur de supervision **Nutanix Prism Element REST API** supervise
l'infrastructure hyperconvergée Nutanix via l'interface de gestion Prism Element.

Il couvre la totalité de la stack : santé du cluster, hôtes physiques, machines
virtuelles, stockage, réplication, contrôles NCC, alertes et tâches en arrière-plan —
le tout via une unique connexion API sur le port 9440.

| Caractéristique | Détail |
|---|---|
| API | Nutanix Prism Element REST API v2.0 |
| Port | 9440/TCP (HTTPS) |
| Authentification | HTTP Basic Auth |
| Version Prism | Prism Element 5.x et ultérieur |

---

## Contenu du pack

### Modèle d'hôte

| Modèle | Description |
|---|---|
| `App-virtualization-Nutanix-Prism-Restapi-custom` | Appliqué à la CVM (Controller VM) Prism Element ou à l'adresse VIP du cluster |

### Modèles de service

| Alias service | Nom du modèle | Description |
|---|---|---|
| Alerts | `App-virtualization-Nutanix-Prism-Alerts-Restapi-custom` | Alertes actives non résolues par sévérité |
| Capacity | `App-virtualization-Nutanix-Prism-Capacity-Restapi-custom` | Capacité CPU, mémoire et stockage du cluster |
| Cluster-Status | `App-virtualization-Nutanix-Prism-Cluster-Status-Restapi-custom` | État de santé du cluster et nombre de noeuds |
| Disks-Status | `App-virtualization-Nutanix-Prism-Disks-Status-Restapi-custom` | État de santé et capacité de chaque disque physique |
| Health-Checks | `App-virtualization-Nutanix-Prism-Health-Checks-Restapi-custom` | Résultats des contrôles NCC (PASS/FAIL/WARNING/ERROR) |
| Hosts-Usage | `App-virtualization-Nutanix-Prism-Hosts-Usage-Restapi-custom` | CPU, mémoire et nombre de VMs par hôte |
| Protection-Domains | `App-virtualization-Nutanix-Prism-Protection-Domains-Restapi-custom` | Santé de la réplication et réplications en attente |
| Snapshots | `App-virtualization-Nutanix-Prism-Snapshots-Restapi-custom` | Nombre et âge des snapshots des VMs |
| Storage-Containers | `App-virtualization-Nutanix-Prism-Storage-Containers-Restapi-custom` | Utilisation des conteneurs de stockage, compression et déduplication |
| Storage-Usage | `App-virtualization-Nutanix-Prism-Storage-Usage-Restapi-custom` | Utilisation des pools de stockage |
| Tasks | `App-virtualization-Nutanix-Prism-Tasks-Restapi-custom` | Compteurs de tâches récentes par statut |
| Vms-Count | `App-virtualization-Nutanix-Prism-Vms-Count-Restapi-custom` | Nombre total de VMs, réparti par état d'alimentation |
| Vms-Nics | `App-virtualization-Nutanix-Prism-Vms-Nics-Restapi-custom` | État de liaison et trafic des interfaces réseau des VMs |
| Vms-Performance | `App-virtualization-Nutanix-Prism-Vms-Performance-Restapi-custom` | Utilisation CPU et mémoire par VM |

### Règles de découverte

| Règle | Description | Mode |
|---|---|---|
| `App-virtualization-Nutanix-Prism-Hosts` | Découverte des hôtes physiques AHV | `list-hosts` |
| `App-virtualization-Nutanix-Prism-Vms` | Découverte des machines virtuelles | `list-vms` |
| `App-virtualization-Nutanix-Prism-Vms-Nics` | Découverte des interfaces réseau des VMs | `list-nics` |
| `App-virtualization-Nutanix-Prism-Protection-Domains` | Découverte des domaines de protection | `list-protection-domains` |
| `App-virtualization-Nutanix-Prism-Storage-Containers` | Découverte des conteneurs de stockage | `list-storage-containers` |

---

## Métriques et statuts collectés

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `alerts.severity.critical.count` | count |
| `alerts.severity.warning.count` | count |
| `alerts.severity.info.count` | count |
| `alerts.total.count` | count |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `cluster.cpu.capacity.count` | count |
| `cluster.cpu.allocated.count` | count |
| `cluster.cpu.usage.percentage` | % |
| `cluster.memory.capacity.bytes` | B |
| `cluster.memory.used.bytes` | B |
| `cluster.memory.usage.percentage` | % |
| `cluster.storage.capacity.bytes` | B |
| `cluster.storage.used.bytes` | B |
| `cluster.storage.free.bytes` | B |
| `cluster.storage.usage.percentage` | % |

</TabItem>
<TabItem value="Cluster-Status" label="Cluster-Status">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `cluster.nodes.count` | count |
| `status` | N/A |

</TabItem>
<TabItem value="Disks-Status" label="Disks-Status">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `disk.capacity.bytes` | B |
| `disk.free.bytes` | B |
| `disk.usage.percentage` | % |
| `status` | N/A |

</TabItem>
<TabItem value="Health-Checks" label="Health-Checks">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `healthchecks.pass.count` | count |
| `healthchecks.fail.count` | count |
| `healthchecks.warning.count` | count |
| `healthchecks.error.count` | count |

</TabItem>
<TabItem value="Hosts-Usage" label="Hosts-Usage">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `host.cpu.usage.percentage` | % |
| `host.memory.usage.percentage` | % |
| `host.vms.count` | count |
| `status` | N/A |

</TabItem>
<TabItem value="Protection-Domains" label="Protection-Domains">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `protection_domain.replications.pending.count` | count |
| `protection_domain.vstores.count` | count |
| `status` | N/A |

</TabItem>
<TabItem value="Snapshots" label="Snapshots">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `snapshots.total.count` | count |
| `vm.snapshots.count` | count |
| `vm.snapshot.oldest.age.seconds` | s |

</TabItem>
<TabItem value="Storage-Containers" label="Storage-Containers">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `storage.container.usage.bytes` | B |
| `storage.container.free.bytes` | B |
| `storage.container.usage.percentage` | % |
| `storage.container.compression.savings.percentage` | % |
| `storage.container.dedup.savings.percentage` | % |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `storage.pool.usage.bytes` | B |
| `storage.pool.free.bytes` | B |
| `storage.pool.usage.percentage` | % |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `tasks.running.count` | count |
| `tasks.succeeded.count` | count |
| `tasks.failed.count` | count |
| `tasks.aborted.count` | count |

</TabItem>
<TabItem value="Vms-Count" label="Vms-Count">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `vms.total.count` | count |
| `vms.on.count` | count |
| `vms.off.count` | count |

</TabItem>
<TabItem value="Vms-Nics" label="Vms-Nics">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `vm.nic.traffic.in.bytespersecond` | B/s |
| `vm.nic.traffic.out.bytespersecond` | B/s |
| `status` | N/A |

</TabItem>
<TabItem value="Vms-Performance" label="Vms-Performance">

| Nom de la métrique | Unité |
|:-------------------|:------|
| `vm.cpu.usage.percentage` | % |
| `vm.memory.usage.percentage` | % |
| `status` | N/A |

</TabItem>
</Tabs>

---

## Prérequis

### Côté Nutanix

- Nutanix Prism Element **5.x ou ultérieur** (REST API v2.0).
- Un compte de supervision dédié avec le rôle **Cluster Viewer** (accès en lecture seule suffisant).
- Le port **9440/TCP** ouvert entre le collecteur Centreon et la CVM Prism Element ou l'adresse VIP du cluster.
- Les certificats TLS auto-signés sont acceptés par défaut (aucune configuration supplémentaire requise).

### Création du compte de supervision

1. Connectez-vous à Prism Element en tant qu'administrateur.
2. Allez dans **Settings → Local User Management → + New User**.
3. Créez l'utilisateur (ex. `centreon-virtualization`) et assignez-lui le rôle **Cluster Viewer**.
4. Utilisez ce nom d'utilisateur et ce mot de passe dans les macros de l'hôte ci-dessous.

---

## Installation du connecteur de supervision

### Installation du pack (interface web Centreon)

1. Allez dans **Configuration → Gestionnaire de connecteurs de supervision**.
2. Recherchez **Nutanix Prism Element REST API**.
3. Cliquez sur **Installer**.

### Installation du plugin (sur les collecteurs)

Exécutez la commande suivante sur chaque collecteur qui supervisera l'infrastructure Nutanix :

```bash
dnf install centreon-plugin-Applications-virtualization-Nutanix-Prism-Restapi
```

---

## Utilisation du connecteur de supervision

### Créer un hôte

1. Allez dans **Configuration → Hôtes → Hôtes** et cliquez sur **Ajouter**.
2. Renseignez le **Nom**, l'**Alias** et l'**Adresse IP / DNS** (CVM Prism Element ou VIP).
3. Appliquez le modèle `App-virtualization-Nutanix-Prism-Restapi-custom`.
4. Configurez les macros décrites dans le tableau ci-dessous.
5. Cliquez sur **Sauvegarder** et déployez la configuration.

### Macros de l'hôte

| Macro | Description | Valeur par défaut | Obligatoire |
|---|---|---|---|
| `NUTANIXPRISMHOSTNAME` | Nom d'hôte ou adresse IP Prism Element | — | Oui |
| `NUTANIXPRISMPORT` | Port TCP de l'API | `9440` | Non |
| `NUTANIXPRISMPROTO` | Protocole (`http` ou `https`) | `https` | Non |
| `NUTANIXPRISMUSERNAME` | Nom d'utilisateur API | — | Oui |
| `NUTANIXPRISMPASSWORD` | Mot de passe API | — | Oui |
| `NUTANIXPRISMTIMEOUT` | Délai d'attente des requêtes HTTP (secondes) | `30` | Non |
| `EXTRAOPTIONS` | Options supplémentaires (ex. `--verbose`) | — | Non |

### Macros des modèles de service

#### Alerts

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGALERTSCRITICAL` | Seuil warning : nombre d'alertes critiques | — |
| `CRITICALALERTSCRITICAL` | Seuil critique : nombre d'alertes critiques | — |
| `WARNINGALERTSWARNING` | Seuil warning : nombre d'alertes warning | — |
| `CRITICALALERTSWARNING` | Seuil critique : nombre d'alertes warning | — |
| `WARNINGALERTSTOTAL` | Seuil warning : nombre total d'alertes | — |
| `CRITICALALERTSTOTAL` | Seuil critique : nombre total d'alertes | `1` |
| `WARNINGALERTSTATUS` | Condition warning sur une alerte individuelle | `%{severity} eq "WARNING"` |
| `CRITICALALERTSTATUS` | Condition critique sur une alerte individuelle | `%{severity} eq "CRITICAL"` |
| `EXTRAOPTIONS` | Options supplémentaires (ex. `--filter-severity=CRITICAL`) | — |

#### Capacity

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGCPUUSAGEPRCT` | Seuil warning : utilisation CPU du cluster (%) | `80` |
| `CRITICALCPUUSAGEPRCT` | Seuil critique : utilisation CPU du cluster (%) | `90` |
| `WARNINGMEMORYUSAGEPRCT` | Seuil warning : utilisation mémoire (%) | `80` |
| `CRITICALMEMORYUSAGEPRCT` | Seuil critique : utilisation mémoire (%) | `90` |
| `WARNINGSTORAGEUSAGEPRCT` | Seuil warning : utilisation stockage (%) | `80` |
| `CRITICALSTORAGEUSAGEPRCT` | Seuil critique : utilisation stockage (%) | `90` |

#### Cluster-Status

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGSTATUS` | Condition warning sur l'état du cluster | — |
| `CRITICALSTATUS` | Condition critique sur l'état du cluster | `%{state} ne "NORMAL"` |

#### Disks-Status

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGSTATUS` | Condition warning sur l'état d'un disque | — |
| `CRITICALSTATUS` | Condition critique sur l'état d'un disque | `%{status} ne "Normal"` |
| `WARNINGUSAGEPRCT` | Seuil warning : utilisation du disque (%) | `80` |
| `CRITICALUSAGEPRCT` | Seuil critique : utilisation du disque (%) | `90` |
| `EXTRAOPTIONS` | Options supplémentaires (ex. `--filter-node='^node01$'`) | — |

#### Health-Checks

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGCHECKSTATUS` | Condition warning par contrôle | `%{state} eq "WARNING"` |
| `CRITICALCHECKSTATUS` | Condition critique par contrôle | `%{state} =~ /^(FAIL\|ERROR)$/` |
| `WARNINGCHECKSFAIL` | Seuil warning : nombre de contrôles FAIL | — |
| `CRITICALCHECKSFAIL` | Seuil critique : nombre de contrôles FAIL | `1` |
| `EXTRAOPTIONS` | Options supplémentaires (ex. `--only-failing`) | `--only-failing` |

#### Hosts-Usage

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGCPUUSAGE` | Seuil warning : utilisation CPU de l'hôte (%) | `80` |
| `CRITICALCPUUSAGE` | Seuil critique : utilisation CPU de l'hôte (%) | `90` |
| `WARNINGMEMORYUSAGE` | Seuil warning : utilisation mémoire de l'hôte (%) | `80` |
| `CRITICALMEMORYUSAGE` | Seuil critique : utilisation mémoire de l'hôte (%) | `90` |
| `EXTRAOPTIONS` | Options supplémentaires (ex. `--filter-name='^node'`) | — |

#### Protection-Domains

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGSTATUS` | Condition warning sur l'état de réplication | — |
| `CRITICALSTATUS` | Condition critique sur l'état de réplication | `%{replication_status} ne "Healthy" and %{replication_status} ne "N/A"` |
| `WARNINGPENDINGREPLICATIONS` | Seuil warning : réplications en attente | — |
| `CRITICALPENDINGREPLICATIONS` | Seuil critique : réplications en attente | — |

#### Snapshots

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGOLDESTAGE` | Seuil warning : âge du snapshot le plus ancien (secondes) | `604800` (7 jours) |
| `CRITICALOLDESTAGE` | Seuil critique : âge du snapshot le plus ancien (secondes) | `2592000` (30 jours) |
| `WARNINGTOTALCOUNT` | Seuil warning : nombre total de snapshots | — |
| `CRITICALTOTALCOUNT` | Seuil critique : nombre total de snapshots | — |

#### Storage-Containers

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGUSAGEPRCT` | Seuil warning : utilisation du conteneur (%) | `80` |
| `CRITICALUSAGEPRCT` | Seuil critique : utilisation du conteneur (%) | `90` |
| `WARNINGCOMPRESSIONSAVINGS` | Seuil warning : économies par compression (%) | — |
| `WARNINGDEDUPSAVINGS` | Seuil warning : économies par déduplication (%) | — |

#### Storage-Usage

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGUSAGEPRCT` | Seuil warning : utilisation du pool de stockage (%) | `80` |
| `CRITICALUSAGEPRCT` | Seuil critique : utilisation du pool de stockage (%) | `90` |
| `WARNINGFREE` | Seuil warning : espace libre (octets) | — |
| `CRITICALFREE` | Seuil critique : espace libre (octets) | — |
| `EXTRAOPTIONS` | Options supplémentaires (ex. `--filter-name='^pool'`) | — |

#### Tasks

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGFAILED` | Seuil warning : nombre de tâches en échec | — |
| `CRITICALFAILED` | Seuil critique : nombre de tâches en échec | `1` |
| `WARNINGABORTED` | Seuil warning : nombre de tâches abandonnées | — |
| `CRITICALABORTED` | Seuil critique : nombre de tâches abandonnées | — |

#### Vms-Count

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGON` | Seuil warning : nombre de VMs allumées | — |
| `CRITICALON` | Seuil critique : nombre de VMs allumées | — |
| `WARNINGOFF` | Seuil warning : nombre de VMs éteintes | — |
| `CRITICALOFF` | Seuil critique : nombre de VMs éteintes | — |

#### Vms-Nics

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGSTATUS` | Condition warning sur l'état de l'interface | — |
| `CRITICALSTATUS` | Condition critique sur l'état de l'interface | `%{link_state} ne "UP"` |
| `WARNINGTRAFFICIN` | Seuil warning : trafic entrant (o/s) | — |
| `CRITICALTRAFFICIN` | Seuil critique : trafic entrant (o/s) | — |
| `EXTRAOPTIONS` | Options supplémentaires (ex. `--filter-vm-name='^prod'`) | — |

#### Vms-Performance

| Macro | Description | Valeur par défaut |
|---|---|---|
| `WARNINGSTATUS` | Condition warning sur l'état d'alimentation de la VM | `%{power_state} ne "ON"` |
| `CRITICALSTATUS` | Condition critique sur l'état d'alimentation de la VM | — |
| `WARNINGCPUUSAGE` | Seuil warning : utilisation CPU de la VM (%) | `80` |
| `CRITICALCPUUSAGE` | Seuil critique : utilisation CPU de la VM (%) | `90` |
| `WARNINGMEMORYUSAGE` | Seuil warning : utilisation mémoire de la VM (%) | `80` |
| `CRITICALMEMORYUSAGE` | Seuil critique : utilisation mémoire de la VM (%) | `90` |
| `EXTRAOPTIONS` | Options supplémentaires (ex. `--filter-name='^prod'`) | — |

---

## Modes disponibles

| Nom du mode | Modèle de service associé | Description |
|---|---|---|
| `alerts` | `App-virtualization-Nutanix-Prism-Alerts-Restapi-custom` | Alertes actives non résolues |
| `capacity` | `App-virtualization-Nutanix-Prism-Capacity-Restapi-custom` | Capacité du cluster (CPU, RAM, stockage) |
| `cluster-status` | `App-virtualization-Nutanix-Prism-Cluster-Status-Restapi-custom` | État de santé du cluster |
| `disks-status` | `App-virtualization-Nutanix-Prism-Disks-Status-Restapi-custom` | Santé et capacité des disques physiques |
| `health-checks` | `App-virtualization-Nutanix-Prism-Health-Checks-Restapi-custom` | Résultats des contrôles NCC |
| `hosts-usage` | `App-virtualization-Nutanix-Prism-Hosts-Usage-Restapi-custom` | CPU, mémoire et nombre de VMs par hôte |
| `protection-domains` | `App-virtualization-Nutanix-Prism-Protection-Domains-Restapi-custom` | Santé de la réplication par domaine de protection |
| `snapshots` | `App-virtualization-Nutanix-Prism-Snapshots-Restapi-custom` | Nombre et âge des snapshots |
| `storage-containers` | `App-virtualization-Nutanix-Prism-Storage-Containers-Restapi-custom` | Utilisation et économies des conteneurs de stockage |
| `storage-usage` | `App-virtualization-Nutanix-Prism-Storage-Usage-Restapi-custom` | Capacité des pools de stockage |
| `tasks` | `App-virtualization-Nutanix-Prism-Tasks-Restapi-custom` | Compteurs de tâches récentes par statut |
| `vms-count` | `App-virtualization-Nutanix-Prism-Vms-Count-Restapi-custom` | Nombre de VMs par état d'alimentation |
| `vms-nics` | `App-virtualization-Nutanix-Prism-Vms-Nics-Restapi-custom` | Trafic et état de liaison des interfaces réseau |
| `vms-performance` | `App-virtualization-Nutanix-Prism-Vms-Performance-Restapi-custom` | CPU et mémoire par VM |
| `list-hosts` | découverte | Liste les hôtes physiques pour la découverte automatique |
| `list-vms` | découverte | Liste les machines virtuelles pour la découverte automatique |
| `list-nics` | découverte | Liste les interfaces réseau des VMs pour la découverte automatique |
| `list-protection-domains` | découverte | Liste les domaines de protection pour la découverte automatique |
| `list-storage-containers` | découverte | Liste les conteneurs de stockage pour la découverte automatique |

---

## Tests en ligne de commande

Le binaire du plugin est installé sur les collecteurs à l'emplacement suivant :
`/usr/lib/centreon/plugins/centreon_nutanix_prism_restapi.pl`

### Exemple : vérification de la capacité du cluster

```bash
/usr/lib/centreon/plugins/centreon_nutanix_prism_restapi.pl \
    --plugin=apps::nutanix::prism::plugin \
    --mode=capacity \
    --hostname='prism.mycompany.local' \
    --port='9440' \
    --proto='https' \
    --username='centreon-virtualization' \
    --password='PASSWORD' \
    --warning-cpu-usage-prct='80' \
    --critical-cpu-usage-prct='90' \
    --warning-memory-usage-prct='80' \
    --critical-memory-usage-prct='90' \
    --warning-storage-usage-prct='80' \
    --critical-storage-usage-prct='90'
```

Résultat attendu :

```
OK: CPU usage: 45.30% - CPU capacity: 128 physical cores - vCPUs allocated: 256 - memory capacity: 1.50 TB - memory used: 936.24 GB - memory usage: 62.10% - storage capacity: 48.00 TB - storage used: 34.18 TB - storage free: 13.82 TB - storage usage: 71.20%
| 'cluster.cpu.usage.percentage'=45.30%;80;90;0;100 'cluster.cpu.capacity.count'=128;;;0; 'cluster.cpu.allocated.count'=256;;;0; 'cluster.memory.capacity.bytes'=1649267441664B;;;0; 'cluster.memory.used.bytes'=1005054648524B;;;0; 'cluster.memory.usage.percentage'=62.10%;;;0;100 'cluster.storage.capacity.bytes'=52776558133248B;;;0; 'cluster.storage.used.bytes'=37576892792832B;;;0; 'cluster.storage.free.bytes'=15199665340416B;;;0; 'cluster.storage.usage.percentage'=71.20%;80;90;0;100
```

### Exemple : liste des VMs (découverte automatique)

```bash
/usr/lib/centreon/plugins/centreon_nutanix_prism_restapi.pl \
    --plugin=apps::nutanix::prism::plugin \
    --mode=list-vms \
    --hostname='prism.mycompany.local' \
    --username='centreon-virtualization' \
    --password='PASSWORD'
```

### Exemple : performances des VMs avec filtre

```bash
/usr/lib/centreon/plugins/centreon_nutanix_prism_restapi.pl \
    --plugin=apps::nutanix::prism::plugin \
    --mode=vms-performance \
    --hostname='prism.mycompany.local' \
    --username='centreon-virtualization' \
    --password='PASSWORD' \
    --filter-name='^prod-' \
    --warning-cpu-usage='80' \
    --critical-cpu-usage='90' \
    --warning-memory-usage='80' \
    --critical-memory-usage='90'
```

### Options génériques utiles

| Option | Description |
|---|---|
| `--mode` | Mode d'exécution (obligatoire) |
| `--list-mode` | Liste tous les modes disponibles |
| `--verbose` | Sortie détaillée (détail par instance) |
| `--debug` | Sortie de débogage complète incluant les requêtes HTTP |
| `--timeout` | Délai d'attente des requêtes HTTP en secondes (défaut : 30) |

---

## Dépannage

| Symptôme | Cause probable | Solution |
|---|---|---|
| `UNKNOWN: Need to specify --hostname option` | Macro hostname manquante | Vérifier la macro `NUTANIXPRISMHOSTNAME` sur l'hôte |
| `UNKNOWN: API returned empty content` | Problème réseau ou TLS | Vérifier que le port 9440 est accessible ; contrôler que Prism répond |
| `UNKNOWN: Cannot decode JSON response` | Identifiants invalides ou erreur API | Vérifier le nom d'utilisateur et le mot de passe ; confirmer la version Prism Element >= 5.x |
| `OK: No VM found (check filters)` | Filtre `--filter-name` ou `--filter-state` trop restrictif | Ajuster le filtre ou le supprimer pour lister toutes les entités |
| Utilisation mémoire toujours à 0 % | Ancien champ API utilisé (ancienne version du plugin) | Mettre à jour vers la version courante — corrigé dans le mode `vmsperformance` |
