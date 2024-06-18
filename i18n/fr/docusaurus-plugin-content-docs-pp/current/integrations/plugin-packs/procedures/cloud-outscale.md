---
id: cloud-outscale
title: Outscale API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Outscale** apporte un modèle d'hôte :

* Cloud-Outscale-Osscli-custom

Il apporte les modèles de service suivants :

| Alias                | Modèle de service                          | Description                              | Défaut | Découverte |
|:---------------------|:-------------------------------------------|:-----------------------------------------|:-------|:-----------|
| Account-Consumptions | Cloud-Outscale-Account-Consumptions-Osccli | Contrôle la consommation de votre compte | X      |            |
| Client-Gateways      | Cloud-Outscale-Client-Gateways-Osccli      | Contrôle les passerelles clientes        |        | X          |
| Internet-Services    | Cloud-Outscale-Internet-Services-Osccli    | Contrôle les services internet           |        | X          |
| Load-Balancers       | Cloud-Outscale-Load-Balancers-Osccli       | Contrôle les load balancers              |        | X          |
| Nat-Services         | Cloud-Outscale-Nat-Services-Osccli         | Contrôle les services NAT                |        | X          |
| Nets                 | Cloud-Outscale-Nets-Osccli                 | Contrôle les Nets                        |        | X          |
| Quotas               | Cloud-Outscale-Quotas-Osccli               | Contrôle les quotas                      |        | X          |
| Route-Tables         | Cloud-Outscale-Route-Tables-Osccli         | Contrôle les tables de routage           |        | X          |
| Subnets              | Cloud-Outscale-Subnets-Osccli              | Contrôle les sous-réseaux                |        | X          |
| Virtual-Gateways     | Cloud-Outscale-Virtual-Gateways-Osccli     | Contrôle les passerelles virtuelles      |        | X          |
| Vms                  | Cloud-Outscale-Vms-Osccli                  | Contrôle les machines virtuelles         |        | X          |
| Volumes              | Cloud-Outscale-Volumes-Osccli              | Contrôle les volumes                     |        | X          |
| Vpn-Connections      | Cloud-Outscale-Vpn-Connections-Osccli      | Contrôle les connexions VPN              |        | X          |

### Règles de découverte

| Nom de la règle                             | Description                                                |
|:--------------------------------------------|:-----------------------------------------------------------|
| Cloud-Outscale-Osccli-Client-Gateway-Name   | Découvre les passerelles clientes et supervise le statut   |
| Cloud-Outscale-Osccli-Internet-Service-Name | Découvre les services internet et supervise le statut      |
| Cloud-Outscale-Osccli-Load-Balancer-Name    | Découvre les load balancers et supervise le statut         |
| Cloud-Outscale-Osccli-Nat-Service-Name      | Découvre les services NAT et supervise le statut           |
| Cloud-Outscale-Osccli-Net-Name              | Découvre les Nets et supervise le statut                   |
| Cloud-Outscale-Osccli-Quota-Type-Name       | Découvre les quotas et supervise le statut                 |
| Cloud-Outscale-Osccli-Route-Table-Id        | Découvre les tables de routage et supervise le statut      |
| Cloud-Outscale-Osccli-Subnet-Name           | Découvre les sous-réseaux et supervise le statut           |
| Cloud-Outscale-Osccli-Virtual-Gateway-Name  | Découvre les passerelles virtuelles et supervise le statut |
| Cloud-Outscale-Osccli-Vm-Name               | Découvre les machines virtuelles et supervise le statut    |
| Cloud-Outscale-Osccli-Volume-Id             | Découvre les volumes et supervise le statut                |
| Cloud-Outscale-Osccli-Vpn-Connection-Name   | Découvre les connexions VPN et supervise le statut         |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Account-Consumptions" label="Account-Consumptions">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| account.consumptions.detected.count               |       |
| *title~service~region*#accounts.consumption.count |       |

</TabItem>
<TabItem value="Client-Gateways" label="Client-Gateways">

| Métrique                        | Unité |
|:--------------------------------|:------|
| client_gateways.detected.count  |       |
| client_gateways.available.count |       |
| client_gateways.pending.count   |       |
| client_gateways.deleting.count  |       |
| client_gateways.deleted.count   |       |
| client gateway status           |       |

</TabItem>
<TabItem value="Internet-Services" label="Internet-Services">

| Métrique                          | Unité |
|:----------------------------------|:------|
| internet_services.detected.count  |       |
| internet_services.available.count |       |
| internet service status           |       |

</TabItem>
<TabItem value="Load-Balancers" label="Load-Balancers">

| Métrique                                                       | Unité |
|:---------------------------------------------------------------|:------|
| load_balancers.detected.count                                  |       |
| *load_balancer_name*#load_balancer.virtual_machines.up.count   |       |
| *load_balancer_name*#load_balancer.virtual_machines.down.count |       |
| load balancer virtual machine status                           |       |

</TabItem>
<TabItem value="Nat-Services" label="Nat-Services">

| Métrique                     | Unité |
|:-----------------------------|:------|
| nat_services.detected.count  |       |
| nat_services.pending.count   |       |
| nat_services.available.count |       |
| nat_services.deleting.count  |       |
| nat_services.deleted.count   |       |
| nat service status           |       |

</TabItem>
<TabItem value="Nets" label="Nets">

| Métrique             | Unité |
|:---------------------|:------|
| nets.detected.count  |       |
| nets.pending.count   |       |
| nets.available.count |       |
| nets.deleted.count   |       |
| net status           |       |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *quota_type~quota_name*#quota.usage.count      |       |
| *quota_type~quota_name*#quota.free.count       |       |
| *quota_type~quota_name*#quota.usage.percentage |       |

</TabItem>
<TabItem value="Route-Tables" label="Route-Tables">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| route_tables.detected.count                |       |
| *route_table_id*#route_tables.routes.count |       |

</TabItem>
<TabItem value="Subnets" label="Subnets">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| subnets.detected.count                    |       |
| subnets.pending.count                     |       |
| subnets.available.count                   |       |
| subnets.deleted.count                     |       |
| *subnet_name*#subnet.addresses.free.count |       |
| subnet status                             |       |

</TabItem>
<TabItem value="Virtual-Gateways" label="Virtual-Gateways">

| Métrique                         | Unité |
|:---------------------------------|:------|
| virtual_gateways.detected.count  |       |
| virtual_gateways.available.count |       |
| virtual_gateways.pending.count   |       |
| virtual_gateways.deleting.count  |       |
| virtual_gateways.deleted.count   |       |
| virtual gateway status           |       |

</TabItem>
<TabItem value="Vms" label="Vms">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| virtual_machines.detected.count      |       |
| virtual_machines.pending.count       |       |
| virtual_machines.running.count       |       |
| virtual_machines.stopping.count      |       |
| virtual_machines.stopped.count       |       |
| virtual_machines.shutting-down.count |       |
| virtual_machines.terminated.count    |       |
| virtual_machines.quarantine.count    |       |
| virtual machine status               |       |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Métrique                 | Unité |
|:-------------------------|:------|
| volume.detected.count    |       |
| volume.creating.count    |       |
| volume.available.count   |       |
| volume.in-use.count      |       |
| volume.updating.count    |       |
| volume.deleting.count    |       |
| volume.error.count       |       |
| volume status            |       |
| volume attachment status |       |

</TabItem>
<TabItem value="Vpn-Connections" label="Vpn-Connections">

| Métrique                        | Unité |
|:--------------------------------|:------|
| vpn_connections.detected.count  |       |
| vpn_connections.available.count |       |
| vpn_connections.pending.count   |       |
| vpn_connections.deleting.count  |       |
| vpn_connections.deleted.count   |       |
| vpn connection status           |       |

</TabItem>
</Tabs>

## Prérequis

Veuillez suivre la procédure officielle pour l'installation de ```osc-cli``` pour l'utilisateur ```centreon-engine``` :
https://docs.outscale.com/fr/userguide/Installer-et-configurer-OSC-CLI.html

Un utilisateur Outscale avec les droits suivants doit être utilisé :
```
    "Statement": [
        {
            "Action": [
                "*:Describe*",   ç Les droits sont bien positionnés…
                "*:Read*"
            ],
            "Resource": "*",
            "Effect": "Allow"
        }
    ]

```

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
dnf install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-outscale
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Outscale**
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
dnf install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-outscale-api
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Outscale**.
* Appliquez le modèle d'hôte **Cloud-Outscale-Osscli-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro                | Description                                                                            |
|:------------|:---------------------|:---------------------------------------------------------------------------------------|
|             | OUTSCALEEXTRAOPTIONS | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | OUTSCALEPROFILE      | Outscale osc-cli profil                                                                |
|             | OUTSCALEVIRTUALENV   | Environnement virtuel Python pour osc-cli (ex: /var/lib/centreon-engine/.venv)         |
|             | PROXYURL             |                                                                                        |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
    --plugin=cloud::outscale::plugin \
    --mode=quotas \
    --custommode='osccli' \
    --profile='default' \
    --virtual-env='/var/lib/centreon-engine/.venv' \
    --filter-name='^networklink_limit$' \
    --filter-type='^vpc-42484aa9$' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: quota 'networklink_limit' [type: vpc-42484aa9] total: 75 used: 1 (1.33%) free: 74 (98.67%) | 'vpc-42484aa9~networklink_limit#quota.usage.count'=1;;;0;75 'vpc-42484aa9~networklink_limit#license.free.count'=74;;;0;75 'vpc-42484aa9~networklink_limit#license.usage.percentage'=1.33%;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
    --plugin=cloud::outscale::plugin \
    --mode=quotas \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
    --plugin=cloud::outscale::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
