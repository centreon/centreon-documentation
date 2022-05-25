---
id: hardware-storage-hp-storeonce3-restapi
title: HP StoreOnce 3.x Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon HP StoreOnce apporte un modèle d'hôte :
* HW-Storage-Hp-Storeonce3-Restapi-custom

Il apporte les modèles de service suivants :

| Alias            | Modèle de services                                | Défaut  | Découverte |
|:-----------------|:--------------------------------------------------|:--------|:-----------|
| Cluster-Usage    | HW-Storage-Hp-Storeonce3-Cluster-Usage-Restapi    | X       |            |
| Fcs-Usage        | HW-Storage-Hp-Storeonce3-Fcs-Usage-Restapi        |         |            |
| Nas-Usage        | HW-Storage-Hp-Storeonce3-Nas-Usage-Restapi        |         |            |
| Serviceset-Usage | HW-Storage-Hp-Storeonce3-Serviceset-Usage-Restapi | X       |            |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cluster-Usage" label="Cluster-Usage">

| Metric name                                        | Description                        | Unit  |
| :------------------------------------------------- | :--------------------------------- | :---- |
| cluster status                                     | Current overall cluster status     |       |
| *appliance_name*#cluster.space.usage.bytes         | Space used on the cluster          | B     |
| *appliance_name*#cluster.deduplication.ratio.count | Deduplication ratio on the cluster |       |

</TabItem>
<TabItem value="Fcs-Usage" label="Fcs-Usage">

| Metric name                              | Description                                             | Unit  |
| :--------------------------------------- | :------------------------------------------------------ | :---- |
| fcs status                               | Current overall federated catalyst store status         |       |
| *fcs_name*#fcs.space.usage.bytes         | Space used on the federated catalyst store              | B     |
| *fcs_name*#fcs.deduplication.ratio.count | Deduplication ratio on the federated catalyst store     |       |
| *fcs_name*#fcs.items.count               | Current number of items on the federated catalyst store |       |

</TabItem>
<TabItem value="Nas-Usage" label="Nas-Usage">

| Metric name  | Description                  | Unit  |
| :----------- | :--------------------------- | :---- |
| nas status   | Current overall nas status   |       |
| share status | Current overall share status |       |

</TabItem>
<TabItem value="Serviceset-Usage" label="Serviceset-Usage">

| Metric name                                             | Description                            | Unit  |
| :------------------------------------------------------ | :------------------------------------- | :---- |
| service set status                                      | Current overall service set status     |       |
| *serviceset_alias*#serviceset.space.usage.bytes         | Space used on the service set          | B     |
| *serviceset_alias*#serviceset.deduplication.ratio.count | Deduplication ratio on the service set |       |

</TabItem>
</Tabs>

## Prérequis

Ce Pack supporte uniquement les versions 3.x des équipements HP StoreOnce.
Pour la supervision, un utilisateur avec les droits en lecture est nécessaire. Référez-vous à la documentation officielle : https://support.hpe.com/hpesc/public/docDisplay?docId=c05273975

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **HP StoreOnce 3.x Rest API** :

```bash
yum install centreon-plugin-Hardware-Storage-Hp-Storeonce3-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **HP StoreOnce 3.x Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **HP StoreOnce 3.x Rest API** :

```bash
yum install centreon-plugin-Hardware-Storage-Hp-Storeonce3-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **HP StoreOnce 3.x Rest API** :

```bash
yum install centreon-pack-hardware-storage-hp-storeonce3-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **HP StoreOnce 3.x Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **HP StoreOnce 3.x Rest API**.
* Appliquez le modèle d'hôte **HW-Storage-Hp-Storeonce3-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Nom                   | Description                                                                |
| :---------- | :-------------------- | :------------------------------------------------------------------------- |
| X           | STOREONCEUSERNAME     | Api username                                                               |
| X           | STOREONCEPASSWORD     | Api password                                                               |
|             | STOREONCEEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce3_restapi.pl \
    --plugin=storage::hp::storeonce::3::restapi::plugin \
    --mode=cluster-usage \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --username='my-username' \
    --password='my-password' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Cluster 'TABZ37161Q01' status: ok, Usage Total: 62.17 TB Used: 59.78 TB (96.15%) Free: 2.39 TB (3.85%), Dedup Ratio: 14.51 | 'TABZ37161Q01#cluster.space.usage.bytes'=65731753164800B;;;0;68360696004608 'TABZ37161Q01#cluster.deduplication.ratio.count'=14.51;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce3_restapi.pl \
    --plugin=storage::hp::storeonce::3::restapi::plugin \
    --mode=cluster-usage \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande :

```bash
$CENTREONPLUGINS$/centreon_hp_storeonce3_restapi.pl \
    --plugin=storage::hp::storeonce::3::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
