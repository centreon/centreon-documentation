---
id: applications-oracle-ucp-jmx
title: Oracle UCP JMX
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Oracle UCP JMX** apporte un modèle d'hôte pour la supervision d'**Oracle Universal Connection Pool** :

* App-Oracle-Ucp-JMX-custom

Il apporte le modèle de service suivant :

| Alias            | Modèle de service                   | Description                                                          | Défaut | Découverte |
|:-----------------|:------------------------------------|:---------------------------------------------------------------------|:-------|:-----------|
| Connection-Pools | App-Oracle-Ucp-Connection-Pools-JMX | Contrôle permettant de vérifier l'utilisation des pools de connexion |        | X          |

### Règles de découverte

| Nom de la règle                         | Description                                                |
|:----------------------------------------|:-----------------------------------------------------------|
| App-Oracle-Ucp-Jmx-Connection-Pool-Name | Découvre les pools de connexion et supervise l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Connection-Pools" label="Connection-Pools">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| *pool_name*#connection_pool.usage.count      |       |
| *pool_name*#connection_pool.free.count       |       |
| *pool_name*#connection_pool.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Veuillez installer l'agent Jolokia sur votre JVM : [Jolokia download page](https://jolokia.org/download.html).
Demandez à votre administrateur de le déployer et de vous fournir l'URL.

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
dnf install centreon-pack-applications-oracle-ucp-jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-oracle-ucp-jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-oracle-ucp-jmx
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Oracle UCP JMX**
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
dnf install centreon-plugin-Applications-Oracle-Ucp-Jmx
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Oracle-Ucp-Jmx
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-oracle-ucp-jmx
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Oracle UCP**.
* Appliquez le modèle d'hôte **App-Oracle-Ucp-JMX-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro               | Description                                                                            |
|:------------|:--------------------|:---------------------------------------------------------------------------------------|
| X           | JOLOKIAURL          | Jolokia URL (eg: http://jvm.centreon.com:8080/jolokia)                                 |
|             | JOLOKIAPASSWORD     |                                                                                        |
|             | JOLOKIAUSERNAME     |                                                                                        |
|             | JOLOKIAEXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_oracle_ucp_jmx.pl \
    --plugin=apps::oracle::ucp::jmx::plugin \
    --mode=connection-pools \
    --url='http://jvm.centreon.com:8080/jolokia' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All connection pools are ok | 'DATASOURCE_FLUX#connection_pool.usage.count'=2B;;;0;50 'DATASOURCE_FLUX#connection_pool.free.count'=48B;;;0;50 'DATASOURCE_FLUX#connection_pool.usage.percentage'=4.00%;;;0;100 'DATASOURCE_MS#connection_pool.usage.count'=2B;;;0;50 'DATASOURCE_MS#connection_pool.free.count'=48B;;;0;50 'DATASOURCE_MS#connection_pool.usage.percentage'=4.00%;;;0;100
Connection pool 'DATASOURCE_FLUX' total: 50 used: 2 (4.00%) free: 48 (96.00%)
Connection pool 'DATASOURCE_MS' total: 50 used: 2 (4.00%) free: 48 (96.00%)
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_oracle_ucp_jmx.pl \
    --plugin=apps::oracle::ucp::jmx::plugin \
    --mode=connection-pools \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_oracle_ucp_jmx.pl \
    --plugin=apps::oracle::ucp::jmx::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
