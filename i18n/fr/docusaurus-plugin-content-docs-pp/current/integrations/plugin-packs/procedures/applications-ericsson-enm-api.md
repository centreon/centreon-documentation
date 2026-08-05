---
id: applications-ericsson-enm-api
title: Ericsson ENM API
description: "Supervisez Ericsson Network Manager via son API REST : statut de synchronisation des nœuds, unités remplaçables et statut des cellules TDD."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Ericsson ENM API**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Ericsson ENM API** apporte un modèle d'hôte :

* **App-Ericsson-Enm-Api-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-Ericsson-Enm-Api-custom" label="App-Ericsson-Enm-Api-custom">

| Alias | Modèle de service                 | Description                | Découverte |
|:------|:----------------------------------|:---------------------------|:----------:|
| Cache | App-Ericsson-Enm-Cache-Api-custom | Crée les fichiers de cache |            |
| Nodes | App-Ericsson-Enm-Nodes-Api-custom | Contrôle l'état des noeuds | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Ericsson-Enm-Api-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                |
|:----------------|:-------------------------------------------|
| Ericsson ENM    | Discover nodes from Ericsson ENM inventory |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                      | Description |
|:-------------------------------------|:------------|
| App-Ericsson-Enm-Api-Node-Celltdd-Id | Découvre les cells tdd et supervise leur statut            |
| App-Ericsson-Enm-Api-Node-Fru-Id     | Découvre les unités remplaçables et supervise leur statut            |
| App-Ericsson-Enm-Api-Node-Id         | Découvre les noeuds et supervise ses composants (fru, cells)            |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

Pas de métriques.

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Nom               | Unité |
|:------------------|:------|
| nodes.total.count | count |
| node-sync-status  | N/A   |
| fru-status        | N/A   |
| cell-tdd-status   | N/A   |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre Ericsson Network Manager, l'API Rest doit être configurée.
Le Pack ne supporte que l'authentification par utilisateur et mot de passe.

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-ericsson-enm-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-ericsson-enm-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-ericsson-enm-api
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Ericsson ENM API**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Ericsson-Enm-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Ericsson-Enm-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-ericsson-enm-api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Ericsson-Enm-Api-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                   | Description                                                                                          | Valeur par défaut | Obligatoire |
|:------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ERICSSONENMAPIUSERNAME  | API username                                                                                         |                   | X           |
| ERICSSONENMAPIPASSWORD  | API password                                                                                         |                   | X           |
| ERICSSONENMAPIPROTO     | Specify https if needed (default: 'https')                                                           | https             |             |
| ERICSSONENMAPIPORT      | Port used (default: 443)                                                                             | 443               |             |
| ERICSSONENMEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Macro                  | Description                                                                                                                                                                                                            | Valeur par défaut                      | Obligatoire |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| FILTERNODEID           | Filter nodes by ID (can be a regexp)                                                                                                                                                                                   |                                        |             |
| EXCLUDENODEID          | Exclude nodes from the check if their ID matches the specified regular expression                                                                                                                                                                                                                       |                                        |             |
| FILTERFRUID            | Filter field replaceable units by ID (can be a regexp)                                                                                                                                                                 |                                        |             |
| EXCLUDEFRUID           | Exclude field replaceable units from the check if their ID matches the specified regular expression                                                                                                                                                                                                                       |                                        |             |
| FILTERCELLTDDID        | Filter tdd cells by ID (can be a regexp)                                                                                                                                                                               |                                        |             |
| EXCLUDECELLTDDID       | Exclude TDD cells from the check if their ID matches the specified regular expression                                                                                                                                                                                                                       |                                        |             |
| WARNINGCELLTDDSTATUS   | Set warning threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}          |                                        |             |
| CRITICALCELLTDDSTATUS  | Set critical threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}         |                                        |             |
| WARNINGFRUSTATUS       | Set warning threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}  |                                        |             |
| CRITICALFRUSTATUS      | Set critical threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\} |                                        |             |
| WARNINGNODESTOTAL      | Threshold                                                                                                                                                                                                              |                                        |             |
| CRITICALNODESTOTAL     | Threshold                                                                                                                                                                                                              |                                        |             |
| CRITICALNODESYNCSTATUS | Set critical threshold for synchronization status (default: '%\{sync\_status\} =~ /unsynchronized/i'). You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                           | %\{sync\_status\} =~ /unsynchronized/i |             |
| WARNINGNODESYNCSTATUS  | Set warning threshold for synchronization status. You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                                                                                |                                        |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                     | --verbose --cache-use                  |             |

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
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
	--plugin=apps::ericsson::enm::api::plugin \
	--mode=nodes \
	--hostname='10.0.0.1' \
	--port='443' \
	--proto='https' \
	--api-username='xxxxxxx' \
	--api-password='xxxxxxx'  \
	--filter-node-id='' \
	--exclude-node-id='' \
	--filter-fru-id='' \
	--exclude-fru-id='' \
	--filter-cell-tdd-id='' \
	--exclude-cell-tdd-id='' \
	--warning-node-sync-status='' \
	--critical-node-sync-status='%\{sync\_status\} =~ /unsynchronized/i' \
	--warning-nodes-total='' \
	--critical-nodes-total='' \
	--warning-cell-tdd-status='' \
	--critical-cell-tdd-status='' \
	--warning-fru-status='' \
	--critical-fru-status='' \
	--verbose \
	--cache-use
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Node 'ORA01200E_02' synchronization status: synchronized - All field replaceable units are ok - All tdd cells are ok | 'nodes.total.count'=1;;;0;
checking node 'ORA01200E_02'
    synchronization status: synchronized
    field replaceable unit 'BB-1' [label: ORA01200E_02] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-1' [label: RRU-1_ORA4043_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-10' [label: RRU-10_ORA4010_11] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-11' [label: RRU-11_ORA4019_11] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-12' [label: RRU-12_ORA4024_11_12] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-13' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-14' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-15' operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    field replaceable unit 'RRU-2' [label: RRU-2_ORA4045_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-3' [label: RRU-3_ORA4047_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-4' [label: RRU-4_ORA4049_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-5' [label: RRU-5_ORA4056_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-6' [label: RRU-6_ORA4054_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-7' [label: RRU-7_ORA4052_11_12] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-8' [label: RRU-8_ORA4050_11] operational state: enabled, admin state: unlocked
    field replaceable unit 'RRU-9' [label: RRU-9_ORA4005_11_12] operational state: disabled, admin state: unlocked, availability status: [dependency_locked, dependency]
    tdd cell 'ORA4005_11' [label: ORA-Metro-S31A_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4005_12' [label: ORA-Metro-S31B_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4010_11' [label: ORA-Metro-S36_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4019_11' [label: ORA-Metro-S41_85] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4024_11' [label: ORA-Metro-S46A_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4024_12' [label: ORA-Metro-S46B_265] operational state: disabled, admin state: locked, availability status: [off_line]
    tdd cell 'ORA4043_11' [label: ORA-Metro-T2F04_245] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4045_11' [label: ORA-Metro-T2F16_325] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4045_12' [label: ORA-Metro-T2F16-RDS_140] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4047_11' [label: ORA-Metro-T2F28_10] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4047_12' [label: ORA-Metro-T2F28-RDS_195] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4049_11' [label: ORA-Metro-T2F34_80] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4050_11' [label: ORA-Metro-T2F94_100] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4052_11' [label: ORA-Metro-T2F90_65] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4052_12' [label: ORA-Metro-T2F90-RDS_215] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4054_11' [label: ORA-Metro-T2F80_0] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4054_12' [label: ORA-Metro-T2F80-RDS_150] operational state: enabled, admin state: unlocked
    tdd cell 'ORA4056_11' [label: ORA-Metro-T2F68_270] operational state: enabled, admin state: unlocked

```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
	--plugin=apps::ericsson::enm::api::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                      | Modèle de service associé         |
|:------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------|
| cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/cache.pm)]                         | App-Ericsson-Enm-Cache-Api-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/discovery.pm)]                 | Used for host discovery           |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/listnodes.pm)]                | Used for service discovery        |
| list-nodes-celltdd [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/listnodescelltdd.pm)] | Used for service discovery        |
| list-nodes-fru [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/listnodesfru.pm)]         | Used for service discovery        |
| nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/ericsson/enm/api/mode/nodes.pm)]                         | App-Ericsson-Enm-Nodes-Api-custom |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Nodes" label="Nodes">

| Option                      | Description                                                                                                                                                                                                                |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           |   Only display some counters (regexp can be used). Example: --filter-counters='total'                                                                                                                                      |
| --filter-node-id            |   Filter nodes by ID (can be a regexp).                                                                                                                                                                                    |
| --filter-fru-id             |   Filter field replaceable units by ID (can be a regexp).                                                                                                                                                                  |
| --filter-cell-tdd-id        |   Filter tdd cells by ID (can be a regexp).                                                                                                                                                                                |
| --unknown-node-sync-status  |   Set unknown threshold for synchronization status. You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                                                                                  |
| --warning-node-sync-status  |   Set warning threshold for synchronization status. You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                                                                                  |
| --critical-node-sync-status |   Set critical threshold for synchronization status (default: '%\{sync\_status\} =~ /unsynchronized/i'). You can use the following variables: %\{node\_id\}, %\{sync\_status\}                                             |
| --unknown-fru-status        |   Set unknown threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}    |
| --warning-fru-status        |   Set warning threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}    |
| --critical-fru-status       |   Set critical threshold for field replaceable unit status. You can use the following variables: %\{node\_id\}, %\{fru\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}   |
| --unknown-cell-tdd-status   |   Set unknown threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}            |
| --warning-cell-tdd-status   |   Set warning threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}            |
| --critical-cell-tdd-status  |   Set critical threshold for cell tdd status. You can use the following variables: %\{node\_id\}, %\{cell\_tdd\_id\}, %\{label\}, %\{administrative\_state\}, %\{availability\_status\}, %\{operational\_state\}           |
| --warning-* --critical-*    |   Thresholds. Can be: 'nodes-total'.                                                                                                                                                                                       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_ericsson_enm_api.pl \
	--plugin=apps::ericsson::enm::api::plugin \
	--mode=nodes \
	--help
```
