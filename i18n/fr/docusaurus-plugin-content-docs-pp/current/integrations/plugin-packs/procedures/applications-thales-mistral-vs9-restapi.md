---
id: applications-thales-mistral-vs9-restapi
title: Thales Mistral VS9 Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Thales Mistral VS9 Rest API** apporte 2 modèles d'hôte différents :

* App-Thales-Mistral-Vs9-Host-Restapi-custom
* App-Thales-Mistral-Vs9-Mmc-Restapi-custom

Il apporte les modèles de service suivants :

<Tabs groupId="sync">
<TabItem value="App-Thales-Mistral-Vs9-Host-Restapi-custom" label="App-Thales-Mistral-Vs9-Host-Restapi-custom">

| Alias             | Modèle de service                                            | Description                    | Défaut |
|:------------------|:-------------------------------------------------------------|:-------------------------------|:-------|
| Certificates      | App-Thales-Mistral-Vs9-Host-Device-Certificates-Restapi      | Contrôle les certificates      | X      |
| Connection-Status | App-Thales-Mistral-Vs9-Host-Device-Connection-Status-Restapi | Contrôle la connexion au MMC   | X      |
| Interfaces        | App-Thales-Mistral-Vs9-Host-Device-Interfaces-Restapi        | Contrôle les interfaces        | X      |
| Mistral           | App-Thales-Mistral-Vs9-Host-Device-Mistral-Restapi           | Contrôle l'équipement Mistral  | X      |
| System            | App-Thales-Mistral-Vs9-Host-Device-System-Restapi            | Contrôle le système            | X      |
| Tunnels           | App-Thales-Mistral-Vs9-Host-Device-Tunnels-Restapi           | Contrôle les tunnels vpn       | X      |

</TabItem>
<TabItem value="App-Thales-Mistral-Vs9-Mmc-Restapi-custom" label="App-Thales-Mistral-Vs9-Mmc-Restapi-custom">

| Alias             | Modèle de service                               | Description                    | Défaut |
|:------------------|:------------------------------------------------|:-------------------------------|:-------|
| Certificates      | App-Thales-Mistral-Vs9-Mmc-Certificates-Restapi | Contrôle les certificats CA   | X      |
| Cluster           | App-Thales-Mistral-Vs9-Mmc-Cluster-Restapi      | Contrôle l'état du cluster MMC | X      |
| Clusters          | App-Thales-Mistral-Vs9-Clusters-Restapi         | Contrôle l'état des clusters   |        |

</TabItem>
</Tabs>

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Host" label="Host">

| Nom de la règle            | Description                                        |
|:---------------------------|:---------------------------------------------------|
| Thales Mistral VS9 Devices | Discover devices from Thales Mistral MMC inventory |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/hosts-discovery)
pour en savoir plus sur la découverte automatique d'hôtes.

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Clusters" label="Clusters">

| Métrique                                                    | Unité |
|:------------------------------------------------------------|:------|
| clusters.detected.count                                     |       |
| cluster status                                              |       |
| member status                                               |       |
| *cluster_name~member_name*#member.contact.last.time.seconds | s     |

</TabItem>
<TabItem value="Device-Certificates" label="Device-Certificates">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *certificate_name*#certificate.expires.seconds | s     |

</TabItem>
<TabItem value="Device-Connection-Status" label="Device-Connection-Status">

| Métrique                                            | Unité |
|:----------------------------------------------------|:------|
| connection status                                   |       |
| *serial_number*#device.connection.last.time.seconds | s     |

</TabItem>
<TabItem value="Device-Interfaces" label="Device-Interfaces">

| Métrique                                                           | Unité |
|:-------------------------------------------------------------------|:------|
| interface status                                                   |       |
| *serial_number~interface_name*#interface.traffic.in.bitspersecond  | bps   |
| *serial_number~interface_name*#interface.traffic.out.bitspersecond | bps   |

</TabItem>
<TabItem value="Device-Mistral" label="Device-Mistral">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| mistral version                            |       |
| operating state                            |       |
| *serial_number*#device.temperature.celsius | C     |
| autotest state                             |       |

</TabItem>
<TabItem value="Device-System" label="Device-System">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| system version                             |       |
| *serial_number*#system.uptime.seconds      | s     |
| *serial_number*#system.time.offset.seconds |       |

</TabItem>
<TabItem value="Device-Tunnels" label="Device-Tunnels">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| ike service state                                    |       |
| ike sa state                                         |       |
| sa state                                             |       |
| *serial_number~sa_name*#vpn.sa.traffic.bitspersecond | bps   |

</TabItem>
<TabItem value="Mmc-Cluster" label="Mmc-Cluster">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| cluster status                          |       |
| cluster.synchronization.done.percentage | %     |
| mmc node status                         |       |

</TabItem>
<TabItem value="Mmc-Certificates" label="Mmc-Certificates">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *certificate_name*#certificate.expires.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Pour la supervision, un utilisateur avec les droits en lecture sur l'API MMC est nécessaire.

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
dnf install centreon-pack-applications-thales-mistral-vs9-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-thales-mistral-vs9-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-thales-mistral-vs9-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Thales Mistral VS9 Rest API**
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
dnf install centreon-plugin-Applications-Thales-Mistral-Vs9-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Thales-Mistral-Vs9-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-thales-mistral-vs9-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

#### Mistral équipement

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Thales Mistral VS9 Host**.
* Appliquez le modèle d'hôte **App-Thales-Mistral-Vs9-Host-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro              | Description        |
|:------------|:-------------------|:-------------------|
| X           | DEVICEID           |                    |
| X           | DEVICESN           |                    |
| X           | MMCAPIHOSTNAME     |                    |
| X           | MMCAPIUSERNAME     |                    |
| X           | MMCAPIPASSWORD     |                    |
|             | MMCAPIPORT         | (Défaut : '5572')  |
|             | MMCAPIPROTO        | (Défaut : 'https') |
|             | MMCAPIEXTRAOPTIONS | --insecure         |

#### Mistral MMC

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Thales Mistral VS9 MMC**.
* Appliquez le modèle d'hôte **App-Thales-Mistral-Vs9-Mmc-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro              | Description        |
|:------------|:-------------------|:-------------------|
| X           | MMCAPIUSERNAME     |                    |
| X           | MMCAPIPASSWORD     |                    |
|             | MMCAPIPORT         | (Défaut : '5572')  |
|             | MMCAPIPROTO        | (Défaut : 'https') |
|             | MMCAPIEXTRAOPTIONS | --insecure         |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_thales_mistral_vs9_restapi.pl \
    --plugin=apps::thales::mistral::vs9::restapi::plugin \
    --mode=mmc-cluster \
    --hostname='10.0.0.1' \
    --port='5572' \
    --proto='https' \
    --api-username='my-username' \
    --api-password='my-password' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: cluster enabled: yes, replication status: synchronized - all nodes are ok | 'cluster.synchronization.done.percentage'=0%;;;0;100
node 'mmc-1.local' status: true
node 'mmc-2.local' status: true
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_thales_mistral_vs9_restapi.pl \
    --plugin=apps::thales::mistral::vs9::restapi::plugin \
    --mode=mmc-cluster \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_thales_mistral_vs9_restapi.pl \
    --plugin=apps::thales::mistral::vs9::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.
