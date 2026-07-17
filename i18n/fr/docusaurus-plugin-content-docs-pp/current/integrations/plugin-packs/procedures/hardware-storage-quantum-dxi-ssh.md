---
id: hardware-storage-quantum-dxi-ssh
title: Quantum DXi Series SSH
description: "Supervisez les baies de stockage Quantum DXi Series via SSH : compactage, déduplication, utilisation disque, santé, mémoire, réseau et débit."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Quantum DXi Series** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Quantum DXi Series** apporte un modèle d'hôte :

* **HW-Storage-Quantum-Dxi-SSH-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Quantum-Dxi-SSH-custom" label="HW-Storage-Quantum-Dxi-SSH-custom">

| Alias                  | Modèle de service                                        | Description                                                        |
|:-----------------------|:---------------------------------------------------------|:-------------------------------------------------------------------|
| Compaction             | HW-Storage-Quantum-Dxi-Compaction-SSH-custom             | Contrôle le statut et les volumes du service de compactage         |
| Dedupnas               | HW-Storage-Quantum-Dxi-Dedupnas-SSH-custom               | Contrôle le statut et l'évolution de la déduplication vers les NAS |
| Disk-Usage             | HW-Storage-Quantum-Dxi-Disk-Usage-SSH-custom             | Contrôle l'utilisation du disque                                   |
| Health                 | HW-Storage-Quantum-Dxi-Health-SSH-custom                 | Contrôle la santé des services                                     |
| Hostbus-Adapter-Status | HW-Storage-Quantum-Dxi-Hostbus-Adapter-Status-SSH-custom | Contrôle l'utilisation du disque                                   |
| Memory                 | HW-Storage-Quantum-Dxi-Memory-SSH-custom                 | Contrôle l'utilisation de la mémoire                               |
| Network                | HW-Storage-Quantum-Dxi-Network-SSH-custom                | Contrôle le statut des ports réseau                                |
| Reclamation            | HW-Storage-Quantum-Dxi-Reclamation-SSH-custom            | Contrôle le statut et les volumes du service de reclamation        |
| Reduction              | HW-Storage-Quantum-Dxi-Reduction-SSH-custom              | Contrôle les statistiques du service de réduction                  |
| Storage-Array-Status   | HW-Storage-Quantum-Dxi-Storage-Array-Status-SSH-custom   | Contrôle le statut des baies de stockage                           |
| System-Status          | HW-Storage-Quantum-Dxi-System-Status-SSH-custom          | Contrôle le statut des composants matériels                        |
| Throughput             | HW-Storage-Quantum-Dxi-Throughput-SSH-custom             | Contrôle le statut et les volumes du service de reclamation        |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Quantum-Dxi-SSH-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Compaction" label="Compaction">

| Nom              | Unité |
|:-----------------|:------|
| status           | N/A   |
| status-progress  | %     |
| compacted        | B     |
| still-to-compact | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Dedupnas" label="Dedupnas">

| Nom                         | Unité |
|:----------------------------|:------|
| status                      | N/A   |
| *global*#original-data-size | B     |
| *global*#sent-data-size     | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Nom                                 | Unité |
|:------------------------------------|:------|
| used                                | B     |
| free-space                          | B     |
| reclaimable-space                   | B     |
| deduplicated-data                   | B     |
| system-metadata                     | B     |
| data-not-intended-for-deduplication | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Health" label="Health">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Hostbus-Adapter-Status" label="Hostbus-Adapter-Status">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom  | Unité |
|:-----|:------|
| used | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Network" label="Network">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Reclamation" label="Reclamation">

| Nom                   | Unité |
|:----------------------|:------|
| status                | N/A   |
| stage-status-progress | %     |
| total-progress        | %     |
| data-scanned          | B     |
| reclaimable-space     | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Reduction" label="Reduction">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| size-before-reduction                    | B     |
| size-after-reduction                     | B     |
| incoming-namespace                       | B     |
| nfs-deduplicated-shares                  | B     |
| cifs-smb-deduplicated-shares             | B     |
| application-specific-deduplicated-shares | B     |
| deduplicated-partitions                  | B     |
| ost-storage-servers                      | B     |
| total-reduction-ratio                    | %     |
| deduplication-ratio                      | %     |
| compression-ratio                        | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Storage-Array-Status" label="Storage-Array-Status">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Nom        | Unité |
|:-----------|:------|
| read-rate  | B/s   |
| write-rate | B/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Configuration SSH

L'utilisation de ce connecteur requiert la création d'un utilisateur sur la
ressource supervisée, lequel sera utilisé par le collecteur Centreon pour
s'authentifier et exécuter les requêtes SSH. Les privilèges `sudo` ou `root` ne
sont pas nécessaires, un utilisateur 'simple' est suffisant.

Deux méthodes de connexion SSH sont possibles :
* soit en échangeant la clé SSH publique de l'utilisateur `centreon-engine` du collecteur Centreon
* soit en définissant votre utilisateur et votre mot de passe directement dans les macros d'hôtes.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-quantum-dxi-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-quantum-dxi-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-quantum-dxi-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-quantum-dxi-ssh
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Quantum DXi Series**
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
dnf install centreon-plugin-Hardware-Storage-Quantum-Dxi-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Quantum-Dxi-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-quantum-dxi-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Quantum-Dxi-Ssh
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Quantum-Dxi-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli, plink and libssh                                                                                             | sshcli            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                  |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Compaction" label="Compaction">

| Macro                  | Description                                                                                                                                      | Valeur par défaut                   | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:-----------:|
| WARNINGCOMPACTED       | Threshold                                                                                                                                        |                                     |             |
| CRITICALCOMPACTED      | Threshold                                                                                                                                        |                                     |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{compaction\_status\}                       | %\{compaction\_status\} !~ /ready/i |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{compaction\_status\}                        |                                     |             |
| WARNINGSTATUSPROGRESS  | Threshold                                                                                                                                        |                                     |             |
| CRITICALSTATUSPROGRESS | Threshold                                                                                                                                        |                                     |             |
| WARNINGSTILLTOCOMPACT  | Threshold                                                                                                                                        |                                     |             |
| CRITICALSTILLTOCOMPACT | Threshold                                                                                                                                        |                                     |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                     |             |

</TabItem>
<TabItem value="Dedupnas" label="Dedupnas">

| Macro                | Description                                                                                                                                                       | Valeur par défaut        | Obligatoire |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| WARNINGORIGINALSIZE  | Threshold                                                                                                                                                         |                          |             |
| CRITICALORIGINALSIZE | Threshold                                                                                                                                                         |                          |             |
| WARNINGSENTDATASIZE  | Threshold                                                                                                                                                         |                          |             |
| CRITICALSENTDATASIZE | Threshold                                                                                                                                                         |                          |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{state\}, %\{duration\}, %\{percent\_complete\}  | %\{state\} !~ /Enabled/i |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{state\}, %\{duration\}, %\{percent\_complete\} |                          |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                  |                          |             |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Macro                    | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDATANOTDEDUP      | Threshold                                                                                                                                        |                   |             |
| CRITICALDATANOTDEDUP     | Threshold                                                                                                                                        |                   |             |
| WARNINGDEDUPLICATEDDATA  | Threshold                                                                                                                                        |                   |             |
| CRITICALDEDUPLICATEDDATA | Threshold                                                                                                                                        |                   |             |
| WARNINGFREESPACE         | Threshold                                                                                                                                        |                   |             |
| CRITICALFREESPACE        | Threshold                                                                                                                                        |                   |             |
| WARNINGRECLAIMABLESPACE  | Threshold                                                                                                                                        |                   |             |
| CRITICALRECLAIMABLESPACE | Threshold                                                                                                                                        |                   |             |
| WARNINGSYSTEMDATA        | Threshold                                                                                                                                        |                   |             |
| CRITICALSYSTEMDATA       | Threshold                                                                                                                                        |                   |             |
| WARNINGUSAGE             | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGE            | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Health" label="Health">

| Macro          | Description                                                                                                                                      | Valeur par défaut                | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}, %\{state\}            | %\{status\} !~ /Ready\|Success/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}, %\{state\}             |                                  |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                  |             |

</TabItem>
<TabItem value="Hostbus-Adapter-Status" label="Hostbus-Adapter-Status">

| Macro          | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}                        | %\{status\} !~ /Normal/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}                         |                          |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS         | Units of thresholds. Can be : '%', 'B'                                                                                                           | %                 |             |
| WARNINGUSAGE  | Warning threshold                                                                                                                                |                   |             |
| CRITICALUSAGE | Critical threshold                                                                                                                               |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Network" label="Network">

| Macro          | Description                                                                                                                                      | Valeur par défaut    | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}                        | %\{status\} !~ /Up/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}                         |                      |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                      |             |

</TabItem>
<TabItem value="Reclamation" label="Reclamation">

| Macro                       | Description                                                                                                                                      | Valeur par défaut                    | Obligatoire |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|:-----------:|
| WARNINGDATASCANNED          | Threshold                                                                                                                                        |                                      |             |
| CRITICALDATASCANNED         | Threshold                                                                                                                                        |                                      |             |
| WARNINGRECLAIMABLESPACE     | Threshold                                                                                                                                        |                                      |             |
| CRITICALRECLAIMABLESPACE    | Threshold                                                                                                                                        |                                      |             |
| WARNINGSTAGESTATUSPROGRESS  | Threshold                                                                                                                                        |                                      |             |
| CRITICALSTAGESTATUSPROGRESS | Threshold                                                                                                                                        |                                      |             |
| CRITICALSTATUS              | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{reclamation\_status\}                      | %\{reclamation\_status\} !~ /ready/i |             |
| WARNINGSTATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{reclamation\_status\}                       |                                      |             |
| WARNINGTOTALPROGRESS        | Threshold                                                                                                                                        |                                      |             |
| CRITICALTOTALPROGRESS       | Threshold                                                                                                                                        |                                      |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                                      |             |

</TabItem>
<TabItem value="Reduction" label="Reduction">

| Macro                                 | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGAPPSPECIFICDEDUPLICATEDSHARES  | Threshold                                                                                                                                        |                   |             |
| CRITICALAPPSPECIFICDEDUPLICATEDSHARES | Threshold                                                                                                                                        |                   |             |
| WARNINGCIFSSMBDEDUPLICATEDSHARES      | Threshold                                                                                                                                        |                   |             |
| CRITICALCIFSSMBDEDUPLICATEDSHARES     | Threshold                                                                                                                                        |                   |             |
| WARNINGCOMPRESSIONRATIO               | Threshold                                                                                                                                        |                   |             |
| CRITICALCOMPRESSIONRATIO              | Threshold                                                                                                                                        |                   |             |
| WARNINGDEDUPLICATEDPARTITIONS         | Threshold                                                                                                                                        |                   |             |
| CRITICALDEDUPLICATEDPARTITIONS        | Threshold                                                                                                                                        |                   |             |
| WARNINGDEDUPLICATIONRATIO             | Threshold                                                                                                                                        |                   |             |
| CRITICALDEDUPLICATIONRATIO            | Threshold                                                                                                                                        |                   |             |
| WARNINGINCOMINGNAMESPACE              | Threshold                                                                                                                                        |                   |             |
| CRITICALINCOMINGNAMESPACE             | Threshold                                                                                                                                        |                   |             |
| WARNINGNFSDEDUPLICATEDSHARES          | Threshold                                                                                                                                        |                   |             |
| CRITICALNFSDEDUPLICATEDSHARES         | Threshold                                                                                                                                        |                   |             |
| WARNINGOSTSTORAGESERVERS              | Threshold                                                                                                                                        |                   |             |
| CRITICALOSTSTORAGESERVERS             | Threshold                                                                                                                                        |                   |             |
| WARNINGSIZEAFTERREDUCTION             | Threshold                                                                                                                                        |                   |             |
| CRITICALSIZEAFTERREDUCTION            | Threshold                                                                                                                                        |                   |             |
| WARNINGSIZEBEFOREREDUCTION            | Threshold                                                                                                                                        |                   |             |
| CRITICALSIZEBEFOREREDUCTION           | Threshold                                                                                                                                        |                   |             |
| WARNINGTOTALREDUCTIONRATIO            | Threshold                                                                                                                                        |                   |             |
| CRITICALTOTALREDUCTIONRATIO           | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS                          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Storage-Array-Status" label="Storage-Array-Status">

| Macro          | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}                        | %\{status\} !~ /Normal/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}                         |                          |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Macro          | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}                        | %\{status\} !~ /Normal/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}                         |                          |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                          |             |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGREADRATE   | Threshold                                                                                                                                        |                   |             |
| CRITICALREADRATE  | Threshold                                                                                                                                        |                   |             |
| WARNINGWRITERATE  | Threshold                                                                                                                                        |                   |             |
| CRITICALWRITERATE | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

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
/usr/lib/centreon/plugins/centreon_quantum_dxi.pl \
	--plugin=storage::quantum::dxi::ssh::plugin \
	--mode=system-status \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--warning-status='' \
	--critical-status='%\{status\} !~ /Normal/i' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All component status are ok 
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
/usr/lib/centreon/plugins/centreon_quantum_dxi.pl \
	--plugin=storage::quantum::dxi::ssh::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                | Modèle de service associé                                |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
| compaction [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/compaction.pm)]                       | HW-Storage-Quantum-Dxi-Compaction-SSH-custom             |
| dedupnas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/dedupnas.pm)]                           | HW-Storage-Quantum-Dxi-Dedupnas-SSH-custom               |
| dedupvtl [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/dedupvtl.pm)]                           | Not used in this Monitoring Connector                    |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/diskusage.pm)]                        | HW-Storage-Quantum-Dxi-Disk-Usage-SSH-custom             |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/health.pm)]                               | HW-Storage-Quantum-Dxi-Health-SSH-custom                 |
| hostbus-adapter-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/hostbusadapterstatus.pm)] | HW-Storage-Quantum-Dxi-Hostbus-Adapter-Status-SSH-custom |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/memory.pm)]                               | HW-Storage-Quantum-Dxi-Memory-SSH-custom                 |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/network.pm)]                             | HW-Storage-Quantum-Dxi-Network-SSH-custom                |
| reclamation [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/reclamation.pm)]                     | HW-Storage-Quantum-Dxi-Reclamation-SSH-custom            |
| reduction [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/reduction.pm)]                         | HW-Storage-Quantum-Dxi-Reduction-SSH-custom              |
| storage-array-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/storagearraystatus.pm)]     | HW-Storage-Quantum-Dxi-Storage-Array-Status-SSH-custom   |
| system-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/systemstatus.pm)]                  | HW-Storage-Quantum-Dxi-System-Status-SSH-custom          |
| throughput [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/throughput.pm)]                       | HW-Storage-Quantum-Dxi-Throughput-SSH-custom             |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --ssh-backend                              |   Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  |   Timeout in seconds for the command (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --command                                  |   Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             |   Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          |   Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Compaction" label="Compaction">

| Option                   | Description                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                          |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{compaction\_status\}                                       |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{compaction\_status\} !~ /ready/i'). You can use the following variables: %\{compaction\_status\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'status-progress', 'compacted', 'still-to-compact'.                                                                                                       |

</TabItem>
<TabItem value="Dedupnas" label="Dedupnas">

| Option                   | Description                                                                                                                                                                                                 |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                                                      |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{state\} !~ /Enabled/i'). You can use the following variables: %\{status\}, %\{state\}, %\{duration\}, %\{percent\_complete\}.   |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{status\}, %\{state\}, %\{duration\}, %\{percent\_complete\}.                          |
| --warning-* --critical-* |   Thresholds. Can be: 'original-data-size', 'sent-data-size'.                                                                                                                                               |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Option                   | Description                                                                                                                                        |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='usage'                                                              |
| --warning-* --critical-* |   Thresholds. Can be: 'usage', 'free-space','reclaimable-space', 'deduplicated-data', 'system-metadata', 'data-not-intended-for-deduplication'.    |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}, %\{state\}                                     |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Ready\|Success/i'). You can use the following variables: %\{name\}, %\{status\}, %\{state\}    |

</TabItem>
<TabItem value="Hostbus-Adapter-Status" label="Hostbus-Adapter-Status">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}                             |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Normal/i'). You can use the following variables: %\{name\}, %\{status\}    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description              |
|:-----------------|:-------------------------|
| --warning-usage  |   Warning threshold.     |
| --critical-usage |   Critical threshold.    |

</TabItem>
<TabItem value="Network" label="Network">

| Option            | Description                                                                                                                                                      |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}                         |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Up/i'). You can use the following variables: %\{name\}, %\{status\}    |

</TabItem>
<TabItem value="Reclamation" label="Reclamation">

| Option                   | Description                                                                                                                                                                       |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                            |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{reclamation\_status\}                                        |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{reclamation\_status\} !~ /ready/i'). You can use the following variables: %\{reclamation\_status\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'status-progress', 'compacted', 'still-to-compact'.                                                                                                         |

</TabItem>
<TabItem value="Reduction" label="Reduction">

| Option                   | Description                                                                                                                                                                                                                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                                                                                                                                                                                                        |
| --warning-* --critical-* |   Thresholds. Can be: 'size-before-reduction', 'size-after-reduction', 'incoming-namespace', 'nfs-deduplicated-shares', cifs-smb-deduplicated-shares', 'application-specific-deduplicated-shares', 'deduplicated-partitions', 'ost-storage-servers', 'total-reduction-ratio', 'deduplication-ratio', 'compression-ratio'.    |

</TabItem>
<TabItem value="Storage-Array-Status" label="Storage-Array-Status">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}                             |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Normal/i'). You can use the following variables: %\{name\}, %\{status\}    |

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}                             |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Normal/i'). You can use the following variables: %\{name\}, %\{status\}    |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Option                   | Description                                         |
|:-------------------------|:----------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'read-rate', 'write-rate'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_quantum_dxi.pl \
	--plugin=storage::quantum::dxi::ssh::plugin \
	--mode=system-status \
	--help
```
