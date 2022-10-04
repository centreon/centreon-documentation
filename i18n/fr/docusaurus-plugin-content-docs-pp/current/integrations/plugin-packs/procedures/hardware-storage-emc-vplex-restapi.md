---
id: hardware-storage-emc-vplex-restapi
title: EMC Vplex Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Objets supervisés

Le Pack Centreon **EMC VPLEX** apporte un modèle d'hôte :
* HW-Storage-EMC-Vplex-Restapi-custom

Il apporte les modèles de services suivants :

| Alias                 | Modèle de services                                 | Description                                    | Défaut  |
|:----------------------|:---------------------------------------------------|:-----------------------------------------------|:--------|
| Cluster-Communication | HW-Storage-EMC-Vplex-Cluster-Communication-Restapi | Contrôle l'état de la communication du cluster | X       |
| Cluster-Devices       | HW-Storage-EMC-Vplex-Cluster-Devices-Restapi       | Contrôle l'état des périphériques du cluster   | X       |
| Directors             | HW-Storage-EMC-Vplex-Directors-Restapi             | Contrôle l'état des directeurs                 | X       |
| Distributed-Devices   | HW-Storage-EMC-Vplex-Distributed-Devices-Restapi   | Contrôle l'état des périphériques distribués   | X       |
| Fans                  | HW-Storage-EMC-Vplex-Fans-Restapi                  | Contrôle l'état des ventilateurs               | X       |
| Psus                  | HW-Storage-EMC-Vplex-Psus-Restapi                  | Contrôle l'état des alimentations              | X       |
| Storage-Volumes       | HW-Storage-EMC-Vplex-Storage-Volumes-Restapi       | Contrôle l'état des volumes                    | X       |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cluster-Communication" label="Cluster-Communication">

| Metric name       | Unit  |
| :-----------------| :---- |
| operational state |       |

</TabItem>
<TabItem value="Cluster-Devices" label="Cluster-Devices">

| Metric name | Unit  |
| :-----------| :---- |
| heath state |       |

</TabItem>
<TabItem value="Directors" label="Directors">

| Metric name           | Unit  |
| :---------------------| :---- |
| heath state           |       |
| communication status  |       |
| temperature status    |       |
| voltage status        |       |
| vplex kdrviver status |       |

</TabItem>
<TabItem value="Distributed-Devices" label="Distributed-Devices">

| Metric name        | Unit  |
| :------------------| :---- |
| heath state        |       |
| operational status |       |
| service status     |       |

</TabItem>
<TabItem value="Fans" label="Fans">

| Metric name        | Unit  |
| :------------------| :---- |
| operational status |       |
| speed status       |       |

</TabItem>
<TabItem value="Psus" label="Psus">

| Metric name        | Unit  |
| :------------------| :---- |
| operational status |       |
| temperature status |       |

</TabItem>
<TabItem value="Storage-Volumes" label="Storage-Volumes">

| Metric name | Unit  |
| :-----------| :---- |
| heath state |       |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement **EMC VPLEX**, l'API Rest doit être configurée.

Le Pack Centreon supporte l'APIv1 et l'APIv2. Les services **Fans** et **Psus** ne sont pas fonctionnelles avec l'APIv2 (non supporté par l'APIv2).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **EMC VPLEX** :

```bash
yum install centreon-plugin-Hardware-Storage-Emc-Vplex-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **EMC Vplex** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **EMC VPLEX** :

```bash
yum install centreon-plugin-Hardware-Storage-Emc-Vplex-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **EMC Vplex** :

```bash
yum install centreon-pack-hardware-storage-emc-vplex-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **EMC Vplex** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** et **IP Address / DNS** correspondant à votre équipement **EMC VPLEX**.
* Appliquez le modèle d'hôte **HW-Storage-EMC-Vplex-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Nom               | Description                                                                |
| :---------- | :---------------- | :------------------------------------------------------------------------- |
| X           | VPLEXCUSTOMMODE   | API version used (Default: 'apiv1'. Can be: 'apiv2')                       |
| X           | APIPORT           | Port used (Default: 443)                                                   |
| X           | APIPROTO          | Specify https if needed (Default: 'https')                                 |
| X           | VPLEXUSERNAME     | API username                                                               |
| X           | VPLEXPASSOWRD     | API password                                                               |
|             | VPLEXEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_emc_vplex.pl \
    --plugin=storage::emc::vplex::restapi::plugin \
    --custommode='apiv1' \
    --mode=cluster-communication \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --vplex-username='myusername' \
    --vplex-password='mypassword' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
All cluster witness components are ok
Cluster witness component 'cluster-1' operational state: 'in-contact' [admin: enabled]
Cluster witness component 'cluster-2' operational state: 'in-contact' [admin: enabled]
Cluster witness component 'server' operational state: 'clusters-in-contact' [admin: enabled]
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_emc_vplex.pl \
    --plugin=storage::emc::vplex::restapi::plugin \
    --custommode='apiv1' \
    --mode=cluster-communication \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_emc_vplex.pl \
    --plugin=storage::emc::vplex::restapi::plugin \
    --custommode='apiv1' \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
