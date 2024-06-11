---
id: applications-jenkins
title: Jenkins API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Jenkins API** apporte un modèle d'hôte :

* App-Jenkins-Api-custom

Il apporte le modèle de service suivant :

| Alias | Modèle de service    | Description              | Défaut | Découverte |
|:------|:---------------------|:-------------------------|:-------|:-----------|
| Jobs  | App-Jenkins-Jobs-Api | Contrôle l'état des jobs |        | X          |

### Règles de découverte

| Nom de la règle          | Description                              |
|:-------------------------|:-----------------------------------------|
| App-Jenkins-Api-Job-Name | Découvre les jobs et supervise le statut |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Jobs" label="Jobs">

| Métrique                        | Unité |
|:--------------------------------|:------|
| *job_name*#job.score.percentage | %     |
| *job_name*#job.violations.count | count |

</TabItem>
</Tabs>

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
dnf install centreon-pack-applications-jenkins
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-jenkins
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-jenkins
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Jenkins API**
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
dnf install centreon-plugin-Applications-Jenkins
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Jenkins
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-jenkins
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Jenkins**.
* Appliquez le modèle d'hôte **App-Jenkins-Api-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                  | Description        |
|:------------|:-----------------------|:-------------------|
| X           | JENKINSAPIUSERNAME     |                    |
| X           | JENKINSAPIPASSWORD     |                    |
|             | JENKINSAPIPORT         | (Défaut : '443')   |
|             | JENKINSAPIPROTO        | (Défaut : 'https') |
|             | JENKINSAPIEXTRAOPTIONS | --insecure         |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_jenkins.pl \
    --plugin=apps::jenkins::plugin \
    --mode=jobs \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --username='myuser' \
    --password='mytoken' \
    --filter-job-name='centreon-plugins' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All jobs are ok | 'centreon-plugins-stable#job.score.percentage'=100.00%;;;0;100 'centreon-plugins-stable#job.violations.count'=0;;;0; 'centreon-plugins-testing#job.score.percentage'=100.00%;;;0;100 'centreon-plugins-testing#job.violations.count'=0;;;0; 'centreon-plugins/update-jenkinsfile-to-s3-alt-apt#job.score.percentage'=100.00%;;;0;100 'centreon-plugins/update-jenkinsfile-to-s3-alt-apt#job.violations.count'=0;;;0;
Job 'centreon-plugins-stable' score: 100.00 %, violations: 0
Job 'centreon-plugins-testing' score: 100.00 %, violations: 0
Job 'centreon-plugins/update-jenkinsfile-to-s3-alt-apt' score: 100.00 %, violations: 0
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_jenkins.pl \
    --plugin=apps::jenkins::plugin \
    --mode=jobs \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_jenkins.pl \
    --plugin=apps::jenkins::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
