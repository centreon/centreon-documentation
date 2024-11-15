---
id: applications-controlm-restapi
title: Control-M Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Control-M Rest API** apporte un modèle d'hôte :

* App-Controlm-Restapi-custom

Il apporte le modèle de service suivant :

| Alias | Modèle de service         | Description       | Défaut | Découverte |
|:------|:--------------------------|:------------------|:-------|:-----------|
| Jobs  | App-Controlm-Restapi-Jobs | Contrôle les jobs |        | X          |

### Règles de découverte

| Nom de la règle               | Description                              |
|:------------------------------|:-----------------------------------------|
| App-Controlm-Restapi-Job-Name | Découvre les jobs et supervise le statut |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| jobs.executing.count                         |       |
| jobs.failed.count                            |       |
| jobs.succeeded.count                         |       |
| jobs.waiting.count                           |       |
| job status                                   |       |
| *application_name~job_name*#job.failed.count |       |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec des droits de lecture sur l'[Automation API](https://docs.bmc.com/docs/automation-api/918/) Control-M est nécessaire.

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
dnf install centreon-pack-applications-controlm-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-controlm-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-controlm-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Control-M Rest API**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Controlm-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Controlm-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-controlm-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Control-M**.
* Appliquez le modèle d'hôte **App-Controlm-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                   | Description        |
|:------------|:------------------------|:-------------------|
| X           | CONTROLMAPIUSERNAME     |                    |
| X           | CONTROLMAPIPASSWORD     |                    |
|             | CONTROLMAPIPORT         | (Default: '8443')  |
|             | CONTROLMAPIPROTOCOL     | (Default: 'https') |
|             | CONTROLMAPIEXTRAOPTIONS | --insecure         |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_controlm_restapi.pl \
    --plugin=apps::controlm::restapi::plugin \
    --mode=jobs \
    --hostname='10.0.0.1' \
    --port='8443' \
    --proto='https' \
    --api-username='myuser' \
    --api-password='mypass' \
    --filter-name='P2TLNBUS20|P2TLNBUS203' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Number of jobs succeeded: 5, errors: 0, jobs-executing : skipped (no value(s)), waiting: 0 - All jobs are ok | 'jobs.succeeded.count'=5;;;0;5 'jobs.failed.count'=0;;;0;5 'jobs.waiting.count'=0;;;0;5 'TALEND~P2TLNBUS200#job.failed.count'=1;;;0; 'TALEND~P2TLNBUS201#job.failed.count'=1;;;0; 'TALEND~P2TLNBUS202#job.failed.count'=1;;;0; 'TALEND~P2TLNBUS203#job.failed.count'=1;;;0; 'TALEND~P2TLNBUS204#job.failed.count'=1;;;0;
job 'TALEND/P2TLNBUS200' status: ended ok
job 'TALEND/P2TLNBUS201' status: ended ok
job 'TALEND/P2TLNBUS202' status: ended ok
job 'TALEND/P2TLNBUS203' status: ended ok
job 'TALEND/P2TLNBUS204' status: ended ok
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_controlm_restapi.pl \
    --plugin=apps::controlm::restapi::plugin \
    --mode=jobs \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_controlm_restapi.pl \
    --plugin=apps::controlm::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
