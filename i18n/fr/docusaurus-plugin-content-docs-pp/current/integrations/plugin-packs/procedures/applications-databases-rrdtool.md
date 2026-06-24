---
id: applications-databases-rrdtool
slug: /applications-databases-rrdtool
title: RRDtool
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **RRDtool**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **RRDtool** n'apporte pas de modèle d'hôte.

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias | Modèle de service                 | Description                                                                        |
|:------|:----------------------------------|:-----------------------------------------------------------------------------------|
| Query | App-DB-Rrdtool-SSH-Query-custom   | Contrôle permettant de vérifier les valeurs min/max/average d'un DS sur une période |
| Query | App-DB-Rrdtool-Local-Query-custom | Contrôle permettant de vérifier les valeurs min/max/average d'un DS sur une période |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Query*" label="Query*">

| Nom                            | Unité |
|:-------------------------------|:------|
| datasource.value.minimum.count | count |
| datasource.value.average.count | count |
| datasource.value.maximum.count | count |

> Concerne les modèles de service suivants : Query, Query

</TabItem>
</Tabs>

## Prérequis

La sonde permet de requêter RRDtool avec :

* la ligne de commande avec le binaire ```rrdtool``` (exécution en locale ou en ssh)
* le module perl (exécution en locale)

```rrdcached``` n'est pas encore supporté.

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
dnf install centreon-pack-applications-databases-rrdtool
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-rrdtool
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-rrdtool
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-rrdtool
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **RRDtool**
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
dnf install centreon-plugin-Applications-Databases-Rrdtool
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Rrdtool
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-rrdtool
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Rrdtool
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Query" label="Query">

| Macro                | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CUSTOMMODE           | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | perlmod           |             |
| DSNAME               | Set DS name to query (default: 'value')                                                                                    | value             | X           |
| TIMEFRAME            | Set timeframe in seconds (E.g '3600' to check last 60 minutes)                                                             | 600               | X           |
| RRDFILE              | Set rrd file to query                                                                                                      |                   | X           |
| WARNINGVALUEAVERAGE  | Threshold                                                                                                                  |                   |             |
| CRITICALVALUEAVERAGE | Threshold                                                                                                                  |                   |             |
| WARNINGVALUEMAXIMUM  | Threshold                                                                                                                  |                   |             |
| CRITICALVALUEMAXIMUM | Threshold                                                                                                                  |                   |             |
| WARNINGVALUEMINIMUM  | Threshold                                                                                                                  |                   |             |
| CRITICALVALUEMINIMUM | Threshold                                                                                                                  |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                         |                   |             |

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
/usr/lib/centreon/plugins/centreon_rrdtool.pl \
	--plugin=database::rrdtool::local::plugin \
	--mode=query \
	--custommode='perlmod' \
	--rrd-file='xxxxxx' \
	--ds-name='value' \
	--timeframe='600' \
	--warning-value-minimum='' \
	--critical-value-minimum='' \
	--warning-value-average='' \
	--critical-value-average='' \
	--warning-value-maximum='' \
	--critical-value-maximum=''
```

La commande devrait retourner un message de sortie similaire à :

```
OK: datasource 'value': 3.12 (min), 4.52 (avg), 5.13 (max) | 'value#datasource.value.minimum.count'=3.12;;;; 'value#datasource.value.average.count'=4.52;;;; 'value#datasource.value.maximum.count'=5.13;;;;
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
/usr/lib/centreon/plugins/centreon_rrdtool.pl \
	--plugin=database::rrdtool::local::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                               | Modèle de service associé                                              |
|:-------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
| query [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/rrdtool/local/mode/query.pm)] | App-DB-Rrdtool-SSH-Query-custom<br />App-DB-Rrdtool-Local-Query-custom |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Query*" label="Query*">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --rrd-file               |   Set rrd file to query.                                                                                                      |
| --ds-name                |   Set DS name to query (default: 'value').                                                                                    |
| --timeframe              |   Set timeframe in seconds (E.g '3600' to check last 60 minutes).                                                             |
| --warning-* --critical-* |   Thresholds. Can be: 'value-minimum', 'value-average', 'value-maximum'.                                                      |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_rrdtool.pl \
	--plugin=database::rrdtool::local::plugin \
	--mode=query \
	--help
```
