---
id: hardware-servers-dell-vxm-restapi
title: Dell VxRail Manager Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon Dell VXM apporte un modèle d'hôte :
* HW-Server-Dell-Vxm-Restapi-custom

Il apporte les modèles de service suivants :

| Alias   | Modèle de service                  | Description          | Défaut  |
|:--------|:-----------------------------------|:---------------------|:--------|
| Chassis | HW-Server-Dell-Vxm-Chassis-Restapi | Contrôle les chassis | X       |
| Hosts   | HW-Server-Dell-Vxm-Hosts-Restapi   | Contrôle les hôtes   | X       |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle  | Description                                   |
|:-----------------|:----------------------------------------------|
| Dell VxRail Host | Découverte les hôtes VxRail                   |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Chassis" label="Chassis">

| Metric name             | Unit  |
| :---------------------- | :---- |
| chassis.detected.count  |       |
| chassis.unhealthy.count |       |
| chassis status          |       |
| power supply status     |       |

</TabItem>
<TabItem value="Hosts" label="Hosts">

| Metric name           | Unit  |
| :-------------------- | :---- |
| hosts.detected.count  |       |
| hosts.unhealthy.count |       |
| host status           |       |
| nic status            |       |
| disk status           |       |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec les droits en lecture est nécessaire.

Référez-vous à la documentation officielle : https://developer.dell.com/apis/5538/versions/7.0.210/docs/Introduction.md

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Dell VxRail Manager** :

```bash
yum install centreon-plugin-Hardware-Servers-Dell-Vxm-Restapi
```

2. Sur l'interface web de Centreon, installer le Pack **Dell VxRail Manager Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Dell VxRail Manager** :

```bash
yum install centreon-plugin-Hardware-Servers-Dell-Vxm-Restapi
```

2. Sur le serveur central Centreon, installer le RPM du Pack **Dell VxRail Manager Rest API** :

```bash
yum install centreon-pack-hardware-servers-dell-vxm-restapi
```

3. Sur l'interface web de Centreon, installer le Pack **Dell VxRail Manager Rest API** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**
* Complétez les champs **Nom**, **Alias** & **IP Address / DNS** correspondant à votre serveur **Dell VxRail Manager**.
* Appliquez le modèle d'hôte **HW-Server-Dell-Vxm-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.


| Obligatoire | Nom                | Description                                                                |
| :---------- | :----------------- | :------------------------------------------------------------------------- |
| X           | VXMAPIPORT         | Port used (Default: 443)                                                   |
| X           | VXMAPIPROTO        | Specify http if needed (default: 'https')                                  |
| X           | VXMAPIUSERNAME     | Api username                                                               |
| X           | VXMAPIPASSWORD     | Api password                                                               |
|             | VMXAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_dell_vxm_restapi.pl  \
    --plugin=hardware::server::dell::vxm::restapi::plugin \
    --mode=chassis \
    --hostname='10.0.0.1' \
    --port='443' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: number of chassis detected: 6, unhealthy: 0 - All chassis are ok | 'chassis.detected.count'=6;;;0; 'chassis.unhealthy.count'=0;;;0;
checking chassis '53FT2T2'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '53FW2T2'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '53GN2T2'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '5JDXF13'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '6JDXF13'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
checking chassis '7JDXF13'
    status: Healthy
    power supply 'Power Supply 1' status: Healthy
    power supply 'Power Supply 2' status: Healthy
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_dell_vxm_restapi.pl  \
    --plugin=hardware::server::dell::vxm::restapi::plugin \
    --mode=chassis \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_dell_vxm_restapi.pl  \
    --plugin=hardware::server::dell::vxm::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
