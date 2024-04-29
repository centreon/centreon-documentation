---
id: network-freebox-restapi
title: Freebox RestAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Freebox** apporte un modèle d'hôte :

* Net-Freebox-Restapi-custom

Il apporte les modèles de service suivants :

| Alias     | Modèle de service             | Description                                           | Défaut |
|:----------|:------------------------------|:------------------------------------------------------|:-------|
| Dsl-Usage | Net-Freebox-Dsl-Usage-RESTAPI | Contrôle permettant de vérifier l'utilisation DSL     | X      |
| Net-Usage | Net-Freebox-Net-Usage-RESTAPI | Contrôle permettant de vérifier l'utilisation réseau  | X      |
| System    | Net-Freebox-System-RESTAPI    | Contrôle permettant de vérifier l'utilisation système | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Dsl-Usage" label="Dsl-Usage">

| Métrique    | Unité |
|:------------|:------|
| rate-down   | b/s   |
| rate-up     | b/s   |
| snr-down    | dB    |
| snr-up      | dB    |

</TabItem>
<TabItem value="Net-Usage" label="Net-Usage">

| Métrique      | Unité |
|:--------------|:------|
| bw-down       | b/s   |
| bw-up         | b/s   |
| rate-down     | b/s   |
| rate-up       | b/s   |
| vpn-rate-down | b/s   |
| vpn-rate-up   | b/s   |

</TabItem>
<TabItem value="System" label="System">

| Métrique           | Unité |
|:-------------------|:------|
| disk-status        |       |
| fan-speed          | rpm   |
| temperature-cpub   | C     |
| temperature-cpum   | C     |
| temperature-switch | C     |
| *wifi*#wifi-status |       |

</TabItem>
</Tabs>

## Prérequis

Il est nécessaire au préalable d'autoriser le client et choisir un _app\_id_ et obtenir un _token_. 

- Appelez la terminaison API permettant d'autoriser une application, remplacez les valeurs par celles souhaitées:

`curl http://<freebox_ip>/api/v4/login/authorize -d '{"app_id":"centreon","app_name":"centreon","app_version":"3.0","device_name":"Freebox"}'`

- Validez depuis l'écran de la freebox et récupérez le _token_
- Ouvrez la page suivante http://<freebox_ip>/api/v4/login/authorize/<app_id>
- Vérifiez que l'application est correcte et possède les bons droits

Conservez précieusement votre _app\_id_ et le _token_ car ils seront nécessaires durant la configuration de l'hôte.

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
dnf install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-freebox-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-freebox-restapi
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Freebox**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Freebox-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-freebox-restapi
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Freebox**.
* Appliquez le modèle d'hôte **Net-Freebox-Restapi-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro               | Description                                                                            |
|:------------|:--------------------|:---------------------------------------------------------------------------------------|
|             | FREEBOXAPPID        | L'identifiant d'application défini lors du déroulé des prérequis                      |
|             | FREEBOXAPPTOKEN     | Le token obtenu précédemment                                                           |
|             | FREEBOXEXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_freebox_restapi.pl \
    --plugin=network::freebox::restapi::plugin \
    --mode=system \
    --hostname='10.0.0.1' \
    --freebox-app-id='' \
    --freebox-app-token='' \
    --warning-wifi-status='%{status} =~ /bad_param/i' \
    --critical-wifi-status='%{status} =~ /failed/i' \
    --warning-disk-status='' \
    --critical-disk-status='%{status} =~ /error/i' \
    --warning-temperature-cpum='' \
    --critical-temperature-cpum='' \
    --warning-temperature-cpub='' \
    --critical-temperature-cpub='' \
    --warning-temperature-switch='' \
    --critical-temperature-switch='' \
    --warning-fan-speed='' \
    --critical-fan-speed='' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Temperature cpum : %s C Temperature cpub : %s C Temperature switch : %s C fan speed : %s rpm   | 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_freebox_restapi.pl \
    --plugin=network::freebox::restapi::plugin \
    --mode=system \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_freebox_restapi.pl \
    --plugin=network::freebox::restapi::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.