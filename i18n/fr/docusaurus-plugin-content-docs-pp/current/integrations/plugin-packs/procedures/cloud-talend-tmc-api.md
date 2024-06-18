---
id: cloud-talend-tmc-api
title: Talend TMC API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Talend TMC API** apporte un modèle d'hôte :

* Cloud-Talend-Tmc-Api-custom

Il apporte les modèles de service suivants :

| Alias          | Modèle de service                   | Description                 | Défaut | Découverte |
|:---------------|:------------------------------------|:----------------------------|:-------|:-----------|
| Cache          | Cloud-Talend-Tmc-Cache-Api          | Crée les fichiers de cache  |        |            |
| Plans          | Cloud-Talend-Tmc-Plans-Api          | Contrôle les plans          |        | X          |
| Remote-Engines | Cloud-Talend-Tmc-Remote-Engines-Api | Contrôle les remote engines | X      | X          |
| Tasks          | Cloud-Talend-Tmc-Tasks-Api          | Contrôle les tâches         |        | X          |

### Règles de découverte

| Nom de la règle                         | Description                                        |
|:----------------------------------------|:---------------------------------------------------|
| Cloud-Talend-Tmc-Api-Task-Id            | Découvre les tâches et supervise le statut         |
| Cloud-Talend-Tmc-Api-Plan-Id            | Découvre les plans et supervise le statut          |
| Cloud-Talend-Tmc-Api-Remote-Engine-Name | Découvre les remote engines et supervise le statut |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cache" label="Cache">

Pas de métriques.

</TabItem>
<TabItem value="Plans" label="Plans">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| plans.executions.detected.count               |       |
| *plan_name*#plan.executions.failed.percentage | %     |
| *plan_name*#plan.execution.last.seconds       | s     |
| *plan_name*#plan.running.duration.seconds     | s     |
| plan execution status                         |       |

</TabItem>
<TabItem value="Remote-Engines" label="Remote-Engines">

| Métrique                      | Unité |
|:------------------------------|:------|
| remote_engines.detected.count |       |
| remote_engines.unpaired.count |       |
| remote engine status          |       |

</TabItem>
<TabItem value="Tasks" label="Tasks">

| Métrique                                      | Unité |
|:----------------------------------------------|:------|
| tasks.executions.detected.count               |       |
| *task_name*#task.executions.failed.percentage | %     |
| *task_name*#task.execution.last.seconds       | s     |
| *task_name*#task.running.duration.seconds     | s     |
| task execution status                         |       |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un token doit être généré.

Référez-vous à la documentation officielle : https://help.talend.com/r/en-US/Cloud/management-console-user-guide/cloud-access-token?utm_source=tadoc&utm_medium=learn_more

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-talend-tmc-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-talend-tmc-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-talend-tmc-api
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Talend TMC API**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Talend-Tmc-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Talend-Tmc-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-talend-tmc-api
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Talend TMC**.
* Appliquez le modèle d'hôte **Cloud-Talend-Tmc-Api-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro           | Description                                                                            |
|:------------|:----------------|:---------------------------------------------------------------------------------------|
|             | APIEXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
| X           | APIREGION       | (Défaut : 'eu')                                                                        |
| X           | APITOKEN        |                                                                                        |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_talend_tmc_api.pl \
    --plugin=cloud::talend::tmc::plugin \
    --mode=remote-engines \
    --region='eu' \
    --api-token='mytoken' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All remote engines are ok | 'remote_engines.detected.count'=2;;;0; 'remote_engines.unpaired.count'=0;;;0;2
remote engine 'talre-01-dev' status: paired [availability: available]
remote engine 'talre-02-dev' status: paired [availability: available]
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_talend_tmc_api.pl \
    --plugin=cloud::talend::tmc::plugin \
    --mode=remote-engines \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_talend_tmc_api.pl \
    --plugin=cloud::talend::tmc::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
