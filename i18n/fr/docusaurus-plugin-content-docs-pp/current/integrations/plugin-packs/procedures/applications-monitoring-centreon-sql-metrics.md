---
id: applications-monitoring-centreon-sql-metrics
title: Centreon SQL Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Ce Plugin Pack construit des métriques sur la base d'informations récupérées dans la base de données temps-réel de Centreon. Un article sur la plateforme the Watch vous offre une vue d'ensemble de ses capacités autour des [courbes virtuelles](https://thewatch.centreon.com/product-how-to-21/get-to-know-app-centreon-sql-metric-pack-and-start-building-some-virtual-curves-296).

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Centreon Poller apporte un modèle d'hôte :

* App-Monitoring-Centreon-SQL-Metrics-custom

Il apporte les modèles de service suivants :

| Alias           | Modèle de service                           | Description                                                              | Défaul |
| :-------------- | :------------------------------------------ | :----------------------------------------------------------------------- | :------ |
| Poller-Delay    | App-Monitoring-Centreon-SQL-Poller-Delay    | Controle le délai dans la mise à jour des collecteurs                    |         |
| Virtual-Curve   | App-Monitoring-Centreon-SQL-Virtual-Curves  | Combine des métriques existantes et fais des calculs supplémentaires     |         |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Poller-Delay" label="Poller-Delay">

| Metric Name                    | Unit   |
| :----------------------------- | :----- |
| centreon.poller.delay.seconds  |    s   |

</TabItem>
<TabItem value="Virtual-Curve" label="Virtual-Curve">

Les métriques dépendent de la configuration du service. Vous pouvez consulter l'article The Watch proposé en haut de la page. 

</TabItem>
</Tabs>

## Prérequis

Le collecteur exécutant le contrôle doit pouvoir se connecter au serveur de base de données Centreon via le port 
3306/TCP grâce aux valeurs fournies par les options --username et --password. 

L'utilisateur doit avoir les droits de réaliser un 'SELECT' sur les tables index_data, metrics et instances de la base centreon_storage. 

Pour le service Virtual-Curve, le fichier de configuration associé doit pouvoir être lu par l'utilisateur centreon-engine.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur le serveur Central :

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Centreon SQL Metrics** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur le serveur Central :

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-SQL-Metrics
```

2. Sur le serveur Central, installer le RPM du Pack **Centreon SQL Metrics** :

```bash
yum install centreon-pack-applications-monitoring-centreon-poller
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Centreon SQL Metrics** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur de base de données Centreon. 
* Appliquez le modèle d'hôte **App-Monitoring-Centreon-SQL-Metrics-custom**.

* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.

| Obligatoire | Nom                      | Description                                      |
| :---------- | :----------------------- | :----------------------------------------------- |
|     x       | CENTREONDATABASEUSER     | Nom d'utilisateur pour la base centreon_storage  |
|     x       | CENTREONDATABASEPASSWORD | Mot de passe pour la base centreon_storage       |
|             | EXTRAOPTIONS             | Options supplémentaires pour les contrôles       |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
    --plugin=database::mysql::plugin \
    --dyn-mode=apps::centreon::sql::mode::pollerdelay \
    --host=10.25.14.139 \
    --username=readerstorage \
    --password=rostorage
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All poller delay for last update are ok | 'Central#centreon.poller.delay.seconds'=30s;;;; 'poller#centreon.poller.delay.seconds'=14s;;;;
```

La liste de toutes les options complémentaires et leur signification peut être affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_centreon_sql_metrics.pl \
    --plugin=database::mysql::plugin \
    --dyn-mode=apps::centreon::sql::mode::pollerdelay \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md) pour le diagnostic des erreurs communes des plugins Centreon.