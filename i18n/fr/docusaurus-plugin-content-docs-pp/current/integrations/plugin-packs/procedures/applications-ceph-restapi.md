---
id: applications-ceph-restapi
title: Ceph Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Ceph apporte un modèle d'hôte :
* App-Ceph-Restapi-custom

Il apporte les modèles de service suivants :

| Alias  | Modèle de services      | Défaut | Découverte |
|:-------|:------------------------|:--------|:----------|
| Health | App-Ceph-Restapi-Health | X       |           |
| Osd    | App-Ceph-Restapi-Osd    | X       |           |
| Pools  | App-Ceph-Restapi-Pools  |         | X         |

### Règles de découverte

| Nom de la règle            | Description                                   |
|:---------------------------|:----------------------------------------------|
| App-Ceph-Restapi-Pool-Name | Découvre les pools et supervise l'utilisation |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Health" label="Health">

| Metric name   | Description                    | Unit  |
| :------------ | :----------------------------- | :---- |
| health status | Current overall cluster status |       |

</TabItem>
<TabItem value="Osd" label="Osd">

| Metric name                  | Description                                                 | Unit  |
| :--------------------------- | :---------------------------------------------------------- | :---- |
| osd.detected.count           | Number of online storage daemons detected                   |       |
| osd.online.count             | Number of online storage daemons in Ceph cluster            |       |
| osd.online.percentage        | Percentage of online storage daemons in Ceph cluster       | %     |
| osd.participating.count      | Number of participating storage daemons in Ceph cluster     |       |
| osd.participating.percentage | Percentage of participating storage daemons in Ceph cluster | %     |

</TabItem>
<TabItem value="Pools" label="Pools">

| Metric name                                 | Description                          | Unit  |
| :------------------------------------------ | :----------------------------------- | :---- |
| pools.detected.count                        | Number of pools detected             |       |
| *pool_name*#pool.space.usage.bytes          | Space used on the pool               |       |
| *pool_name*#pool.space.free.bytes           | Free space left on the pool          |       |
| *pool_name*#pool.space.usage.percentage     | Space used on the pool in percentage | %     |
| *pool_name*#pool.read.usage.bytespersecond  | Read rate                            | B/s   |
| *pool_name*#pool.write.usage.bytespersecond | Write rate                           | B/s   |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision Ceph, un utilisateur avec les droits en lecture est nécessaire :
cf: https://docs.ceph.com/en/latest/mgr/ceph_api/

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Ceph RestAPI** :

```bash
yum install centreon-plugin-Applications-Ceph-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **Ceph RestAPI** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Ceph RestAPI** :

```bash
yum install centreon-plugin-Applications-Ceph-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Ceph RestAPI** :

```bash
yum install centreon-pack-applications-ceph-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **Ceph RestAPI** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **Ceph RestAPI**.
* Appliquez le modèle d'hôte **App-Ceph-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Obligatoire | Nom                 | Description                                                                |
| :---------- | :------------------ | :------------------------------------------------------------------------- |
| X           | CEPHAPIPORT         | Port used (Default: 8443)                                                  |
| X           | CEPHAPIPROTO        | Specify http if needed (default: 'https')                                  |
| X           | CEPHAPIUSERNAME     | Api username                                                               |
| X           | CEPHAPIPASSWORD     | Api password                                                               |
|             | CEPHAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_ceph_restapi.pl \
    --plugin=apps::ceph::restapi::plugin \
    --mode=osd \
    --hostname='10.0.0.1' \
    --port='8443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Number of osd detected: 3, online 100.00% (3 on 3), participating 100.00% (3 on 3) | 'osd.detected.count'=3;;;0; 'osd.online.count'=3;;;0;3 'osd.online.percentage'=100.00%;;;0;100 'osd.participating.count'=3;;;0;3 'osd.participating.percentage'=100.00%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ceph_restapi.pl \
    --plugin=apps::ceph::restapi::plugin \
    --mode=osd \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ceph_restapi.pl \
    --plugin=apps::ceph::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
