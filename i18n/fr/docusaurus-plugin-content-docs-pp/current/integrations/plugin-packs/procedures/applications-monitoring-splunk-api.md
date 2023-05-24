---
id: applications-monitoring-splunk-api
title: Splunk
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Splunk** apporte un modèle d'hôte :

* App-Monitoring-Splunk-Api-custom

Il apporte les modèles de service suivants :

| Alias                | Modèle de service                        | Description                                                                                                      | Défaut |
|:---------------------|:-----------------------------------------|:-----------------------------------------------------------------------------------------------------------------|:-------|
| Index-Update         | App-Monitoring-Splunk-Index-Update-Api   | Contrôle l'heure à laquelle un index a été mis à jour pour la dernière fois                                      | X      |
| Query-Matches-Number | App-Monitoring-Splunk-Query-Api          | Contrôle le nombre de résultats pour une requête donnée. La requête doit commencer par "search ". Par exemple    |        |
| Splunkd-Health       | App-Monitoring-Splunk-Splunkd-Health-Api | Contrôle l'état général de splunkd. Le statut de splunkd est basé sur l'état de toutes les features le composant | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Index-Update" label="Index-Update">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *index*#splunk.index.last.updated.seconds | s     |

</TabItem>
<TabItem value="Query-Matches-Number" label="Query-Matches-Number">

| Métrique                   | Unité |
|:---------------------------|:------|
| splunk.query.matches.count | count |

</TabItem>
<TabItem value="Splunkd-Health" label="Splunkd-Health">

| Status Name         |
|:--------------------|
| file-monitor-input  |
| index-processor     |
| resource-usage      |
| search-scheduler    |
| workload-management |

</TabItem>
</Tabs>

## Prérequis

Un utilisateur doit être créé/configuré afin d'accéder aux terminaisons d'API suivantes: 
- /services/data/indexes
- /services/server/health/splunkd/details
- /services/search/jobs/*

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-monitoring-splunk-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-monitoring-splunk-api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-monitoring-splunk-api
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Splunk**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Monitoring-Splunk-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Monitoring-Splunk-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-monitoring-splunk-api
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Splunk**.
* Appliquez le modèle d'hôte **App-Monitoring-Splunk-Api-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                 | Description                                                                            |
|:------------|:----------------------|:---------------------------------------------------------------------------------------|
|             | SPLUNKAPIEXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | SPLUNKAPIHOST         | Adresse IP ou FQDN de l'instance Splunk                                                |
|             | SPLUNKAPIPASSWORD     | Mot de passe pour accéder à l'API                                                      |
|             | SPLUNKAPIPORT         | Port d'écoute de l'API (Défaut : '8089')                                               |
|             | SPLUNKAPIPROTOCOL     | Protocol pour accèder à l'API (Défaut : 'https')                                       |
|             | SPLUNKAPIUSERNAME     | Nom d'utilisateur pour accéder à l'API                                                 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_splunk_api.pl \
    --plugin=apps::monitoring::splunk::plugin \
    --mode=index-update \
    --hostname='' \
    --port='8089' \
    --proto='https' \
    --api-username='' \
    --api-password='' \
    --index-name='' \
    --warning-index-last-update-seconds='600' \
    --critical-index-last-update-seconds='900' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: last update: 5 minutes  | 'splunk.index.last.updated.seconds'=300s;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_splunk_api.pl \
    --plugin=apps::monitoring::splunk::plugin \
    --mode=index-update \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_splunk_api.pl \
    --plugin=apps::monitoring::splunk::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.