---
id: cloud-outscale
title: Outscale API
description: "Supervisez les ressources cloud Outscale via l'API OSC CLI : machines virtuelles, volumes, connexions VPN, load balancers, etc."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Outscale API**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Outscale API** apporte un modèle d'hôte :

* **Cloud-Outscale-Osscli-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Outscale-Osscli-custom" label="Cloud-Outscale-Osscli-custom">

| Alias                | Modèle de service                                 | Description                              |
|:---------------------|:--------------------------------------------------|:-----------------------------------------|
| Account-Consumptions | Cloud-Outscale-Account-Consumptions-Osccli-custom | Contrôle la consommation de votre compte |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Outscale-Osscli-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias             | Modèle de service                              | Description                         | Découverte |
|:------------------|:-----------------------------------------------|:------------------------------------|:----------:|
| Client-Gateways   | Cloud-Outscale-Client-Gateways-Osccli-custom   | Contrôle les passerelles clientes   | X          |
| Internet-Services | Cloud-Outscale-Internet-Services-Osccli-custom | Contrôle les services internet      | X          |
| Load-Balancers    | Cloud-Outscale-Load-Balancers-Osccli-custom    | Contrôle les load balancers         | X          |
| Nat-Services      | Cloud-Outscale-Nat-Services-Osccli-custom      | Contrôle les services NAT           | X          |
| Nets              | Cloud-Outscale-Nets-Osccli-custom              | Contrôle les Nets                   | X          |
| Quotas            | Cloud-Outscale-Quotas-Osccli-custom            | Contrôle les quotas                 | X          |
| Route-Tables      | Cloud-Outscale-Route-Tables-Osccli-custom      | Contrôle les tables de routage      | X          |
| Subnets           | Cloud-Outscale-Subnets-Osccli-custom           | Contrôle les sous-réseaux           | X          |
| Virtual-Gateways  | Cloud-Outscale-Virtual-Gateways-Osccli-custom  | Contrôle les passerelles virtuelles | X          |
| Vms               | Cloud-Outscale-Vms-Osccli-custom               | Contrôle les machines virtuelles    | X          |
| Volumes           | Cloud-Outscale-Volumes-Osccli-custom           | Contrôle les volumes                | X          |
| Vpn-Connections   | Cloud-Outscale-Vpn-Connections-Osccli-custom   | Contrôle les connexions VPN         | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                             | Description                                      |
|:--------------------------------------------|:-------------------------------------------------|
| Cloud-Outscale-Osccli-Client-Gateway-Name   | Découvre les passerelles clientes et supervise leur statut                                                 |
| Cloud-Outscale-Osccli-Internet-Service-Name | Découvre les services et supervise leur utilisation système |
| Cloud-Outscale-Osccli-Load-Balancer-Name    | Découvre les load balancers et supervise leur statut                                                 |
| Cloud-Outscale-Osccli-Nat-Service-Name      | Découvre les services et supervise leur utilisation système |
| Cloud-Outscale-Osccli-Net-Name              | Découvre les Nets et supervise leur statut                                                 |
| Cloud-Outscale-Osccli-Quota-Type-Name       | Découvre les quotas et supervise leur statut                                                 |
| Cloud-Outscale-Osccli-Route-Table-Id        | Découvre les tables de routage et supervise leur statut                                                 |
| Cloud-Outscale-Osccli-Subnet-Name           | Découvre les sous-réseaux et supervise leur statut                                                 |
| Cloud-Outscale-Osccli-Virtual-Gateway-Name  | Découvre les passerelles virtuelles et supervise leur statut                                                 |
| Cloud-Outscale-Osccli-Vm-Name               | Découvre les machines virtuelles et supervise leur statut                                                 |
| Cloud-Outscale-Osccli-Volume-Id             | Découvre les volumes et supervise leur statut                                                 |
| Cloud-Outscale-Osccli-Vpn-Connection-Name   | Découvre les connexions VPN et supervise leur statut                                                 |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Account-Consumptions" label="Account-Consumptions">

| Nom                                       | Unité |
|:------------------------------------------|:------|
| account.consumptions.detected.count       | count |
| *consumptions*~accounts.consumption.count | count |

</TabItem>
<TabItem value="Client-Gateways" label="Client-Gateways">

| Nom                             | Unité |
|:--------------------------------|:------|
| client_gateways.detected.count  | count |
| client_gateways.available.count | count |
| client_gateways.pending.count   | count |
| client_gateways.deleting.count  | count |
| client_gateways.deleted.count   | count |
| cg-status                       | N/A   |

</TabItem>
<TabItem value="Internet-Services" label="Internet-Services">

| Nom                               | Unité |
|:----------------------------------|:------|
| internet_services.detected.count  | count |
| internet_services.available.count | count |
| internet-service-status           | N/A   |

</TabItem>
<TabItem value="Load-Balancers" label="Load-Balancers">

| Nom                                             | Unité |
|:------------------------------------------------|:------|
| load_balancers.detected.count                   | count |
| *lbs*~load_balancer.virtual_machines.up.count   | count |
| *lbs*~load_balancer.virtual_machines.down.count | count |
| vm-status                                       | N/A   |

</TabItem>
<TabItem value="Nat-Services" label="Nat-Services">

| Nom                          | Unité |
|:-----------------------------|:------|
| nat_services.detected.count  | count |
| nat_services.pending.count   | count |
| nat_services.available.count | count |
| nat_services.deleting.count  | count |
| nat_services.deleted.count   | count |
| nat-service-status           | N/A   |

</TabItem>
<TabItem value="Nets" label="Nets">

| Nom                  | Unité |
|:---------------------|:------|
| nets.detected.count  | count |
| nets.pending.count   | count |
| nets.available.count | count |
| nets.deleted.count   | count |
| net-status           | N/A   |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Nom                             | Unité |
|:--------------------------------|:------|
| *quotas*#quota.usage.count      | count |
| *quotas*#quota.free.count       | count |
| *quotas*#quota.usage.percentage | %     |

</TabItem>
<TabItem value="Route-Tables" label="Route-Tables">

| Nom                                | Unité |
|:-----------------------------------|:------|
| route_tables.detected.count        | count |
| *tables*#route_tables.routes.count | count |

</TabItem>
<TabItem value="Subnets" label="Subnets">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| subnets.detected.count                | count |
| subnets.pending.count                 | count |
| subnets.available.count               | count |
| subnets.deleted.count                 | count |
| subnet-status                         | N/A   |
| *subnets*~subnet.addresses.free.count | count |

</TabItem>
<TabItem value="Virtual-Gateways" label="Virtual-Gateways">

| Nom                              | Unité |
|:---------------------------------|:------|
| virtual_gateways.detected.count  | count |
| virtual_gateways.available.count | count |
| virtual_gateways.pending.count   | count |
| virtual_gateways.deleting.count  | count |
| virtual_gateways.deleted.count   | count |
| vg-status                        | N/A   |

</TabItem>
<TabItem value="Vms" label="Vms">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| virtual_machines.detected.count      | count |
| virtual_machines.pending.count       | count |
| virtual_machines.running.count       | count |
| virtual_machines.stopping.count      | count |
| virtual_machines.stopped.count       | count |
| virtual_machines.shutting-down.count | count |
| virtual_machines.terminated.count    | count |
| virtual_machines.quarantine.count    | count |
| vm-status                            | N/A   |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Nom                     | Unité |
|:------------------------|:------|
| volumes.detected.count  | count |
| volumes.creating.count  | count |
| volumes.available.count | count |
| volumes.in-use.count    | count |
| volumes.updating.count  | count |
| volumes.deleting.count  | count |
| volumes.error.count     | count |
| volume-status           | N/A   |
| vm-status               | N/A   |

</TabItem>
<TabItem value="Vpn-Connections" label="Vpn-Connections">

| Nom                             | Unité |
|:--------------------------------|:------|
| vpn_connections.detected.count  | count |
| vpn_connections.available.count | count |
| vpn_connections.pending.count   | count |
| vpn_connections.deleting.count  | count |
| vpn_connections.deleted.count   | count |
| vpn-connection-status           | N/A   |

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
dnf install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-outscale
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-outscale
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Outscale API**
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
dnf install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-outscale-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Outscale-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Outscale-Osscli-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                                                                          | Valeur par défaut | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| OUTSCALEPROFILE      | Set profile option                                                                                   |                   |             |
| OUTSCALEVIRTUALENV   | Set python virtual environment (to be used if osc-cli is installed in python venv)                   |                   |             |
| PROXYURL             | Proxy URL if any                                                                                     |                   |             |
| OUTSCALEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Account-Consumptions" label="Account-Consumptions">

| Macro                               | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERREGION                        | Filter account consumptions by region                                                              |                   |             |
| FILTERSERVICE                       | Filter account consumptions by service                                                             |                   |             |
| FILTERCATEGORY                      | Filter account consumptions by category                                                            |                   |             |
| FILTERTITLE                         | Filter account consumptions by title                                                               |                   |             |
| TIMEFRAME                           | Set timeframe in days (default: 1)                                                                 |                   |             |
| WARNINGACCOUNTCONSUMPTION           | Threshold                                                                                          |                   |             |
| CRITICALACCOUNTCONSUMPTION          | Threshold                                                                                          |                   |             |
| WARNINGACCOUNTCONSUMPTIONSDETECTED  | Threshold                                                                                          |                   |             |
| CRITICALACCOUNTCONSUMPTIONSDETECTED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Client-Gateways" label="Client-Gateways">

| Macro                | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CGTAGNAME            | Client gateway tags to be used for the name (default: 'name')                                                              | name              |             |
| FILTERNAME           | Filter client gateways by name                                                                                             |                   |             |
| WARNINGCGSAVAILABLE  | Threshold                                                                                                                  |                   |             |
| CRITICALCGSAVAILABLE | Threshold                                                                                                                  |                   |             |
| WARNINGCGSDELETED    | Threshold                                                                                                                  |                   |             |
| CRITICALCGSDELETED   | Threshold                                                                                                                  |                   |             |
| WARNINGCGSDELETING   | Threshold                                                                                                                  |                   |             |
| CRITICALCGSDELETING  | Threshold                                                                                                                  |                   |             |
| WARNINGCGSDETECTED   | Threshold                                                                                                                  |                   |             |
| CRITICALCGSDETECTED  | Threshold                                                                                                                  |                   |             |
| WARNINGCGSPENDING    | Threshold                                                                                                                  |                   |             |
| CRITICALCGSPENDING   | Threshold                                                                                                                  |                   |             |
| WARNINGCGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{cgName\}  |                   |             |
| CRITICALCGSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{cgName\} |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                         | --verbose         |             |

</TabItem>
<TabItem value="Internet-Services" label="Internet-Services">

| Macro                             | Description                                                                                                                             | Valeur par défaut | Obligatoire |
|:----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INTERNETSERVICETAGNAME            | Internet service tag to be used for the name (default: 'name')                                                                          | name              |             |
| FILTERID                          | Filter internet services by id                                                                                                          |                   |             |
| FILTERNAME                        | Filter internet services by name                                                                                                        |                   |             |
| WARNINGINTERNETSERVICESAVAILABLE  | Threshold                                                                                                                               |                   |             |
| CRITICALINTERNETSERVICESAVAILABLE | Threshold                                                                                                                               |                   |             |
| WARNINGINTERNETSERVICESDETECTED   | Threshold                                                                                                                               |                   |             |
| CRITICALINTERNETSERVICESDETECTED  | Threshold                                                                                                                               |                   |             |
| WARNINGINTERNETSERVICESTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{internetServiceName\}  |                   |             |
| CRITICALINTERNETSERVICESTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{internetServiceName\} |                   |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                      | --verbose         |             |

</TabItem>
<TabItem value="Load-Balancers" label="Load-Balancers">

| Macro                         | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VMTAGNAME                     | Virtual machine tags to used for the name (default: 'name')                                                                | name              |             |
| FILTERNAME                    | Filter load balancers by name                                                                                              |                   |             |
| WARNINGLOADBALANCERSDETECTED  | Threshold                                                                                                                  |                   |             |
| CRITICALLOADBALANCERSDETECTED | Threshold                                                                                                                  |                   |             |
| WARNINGLOADBALANCERVMSDOWN    | Threshold                                                                                                                  |                   |             |
| CRITICALLOADBALANCERVMSDOWN   | Threshold                                                                                                                  |                   |             |
| WARNINGLOADBALANCERVMSUP      | Threshold                                                                                                                  |                   |             |
| CRITICALLOADBALANCERVMSUP     | Threshold                                                                                                                  |                   |             |
| WARNINGVMSTATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vmName\}  |                   |             |
| CRITICALVMSTATUS              | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vmName\} |                   |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                         | --verbose         |             |

</TabItem>
<TabItem value="Nat-Services" label="Nat-Services">

| Macro                        | Description                                                                                                                 | Valeur par défaut | Obligatoire |
|:-----------------------------|:----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NATTAGNAME                   | Nat service tag to be used for the name (default: 'name')                                                                   | name              |             |
| FILTERID                     | Filter nat services by id                                                                                                   |                   |             |
| FILTERNAME                   | Filter nat services by name                                                                                                 |                   |             |
| WARNINGNATSERVICESAVAILABLE  | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESAVAILABLE | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESDELETED    | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESDELETED   | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESDELETING   | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESDELETING  | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESDETECTED   | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESDETECTED  | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESPENDING    | Threshold                                                                                                                   |                   |             |
| CRITICALNATSERVICESPENDING   | Threshold                                                                                                                   |                   |             |
| WARNINGNATSERVICESTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{natName\}  |                   |             |
| CRITICALNATSERVICESTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{natName\} |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                          | --verbose         |             |

</TabItem>
<TabItem value="Nets" label="Nets">

| Macro                 | Description                                                                                                                 | Valeur par défaut | Obligatoire |
|:----------------------|:----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NETTAGNAME            | Nets tag to be used for the name (default: 'name')                                                                          | name              |             |
| FILTERNAME            | Filter nets by name                                                                                                         |                   |             |
| WARNINGNETSAVAILABLE  | Threshold                                                                                                                   |                   |             |
| CRITICALNETSAVAILABLE | Threshold                                                                                                                   |                   |             |
| WARNINGNETSDELETED    | Threshold                                                                                                                   |                   |             |
| CRITICALNETSDELETED   | Threshold                                                                                                                   |                   |             |
| WARNINGNETSDETECTED   | Threshold                                                                                                                   |                   |             |
| CRITICALNETSDETECTED  | Threshold                                                                                                                   |                   |             |
| WARNINGNETSPENDING    | Threshold                                                                                                                   |                   |             |
| CRITICALNETSPENDING   | Threshold                                                                                                                   |                   |             |
| WARNINGNETSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{netName\}  |                   |             |
| CRITICALNETSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{netName\} |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                          | --verbose         |             |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter nets by name                                                                                |                   |             |
| FILTERTYPE             | Threshold                                                                                                   |                   |             |
| WARNINGQUOTAUSAGE      | Threshold                                                                                                   |                   |             |
| CRITICALQUOTAUSAGE     | Threshold                                                                                                   |                   |             |
| WARNINGQUOTAUSAGEFREE  | Threshold                                                                                                   |                   |             |
| CRITICALQUOTAUSAGEFREE | Threshold                                                                                                   |                   |             |
| WARNINGQUOTAUSAGEPRCT  | Threshold                                                                                                   |                   |             |
| CRITICALQUOTAUSAGEPRCT | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Route-Tables" label="Route-Tables">

| Macro                       | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERROUTETABLEID          | Filter route tables by id                                                                          |                   |             |
| WARNINGROUTETABLESDETECTED  | Threshold                                                                                          |                   |             |
| CRITICALROUTETABLESDETECTED | Threshold                                                                                          |                   |             |
| WARNINGROUTETABLESROUTES    | Threshold                                                                                          |                   |             |
| CRITICALROUTETABLESROUTES   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Subnets" label="Subnets">

| Macro                            | Description                                                                                                                    | Valeur par défaut | Obligatoire |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SUBNETTAGNAME                    | Subnet tags to be used for the name (default: 'name')                                                                          | name              |             |
| FILTERNAME                       | Filter subnets by name                                                                                                         |                   |             |
| WARNINGSUBNETADDRESSESUSAGEFREE  | Threshold                                                                                                                               |                   |             |
| CRITICALSUBNETADDRESSESUSAGEFREE | Threshold                                                                                                                               |                   |             |
| WARNINGSUBNETSAVAILABLE          | Threshold                                                                                                                      |                   |             |
| CRITICALSUBNETSAVAILABLE         | Threshold                                                                                                                      |                   |             |
| WARNINGSUBNETSDELETED            | Threshold                                                                                                                      |                   |             |
| CRITICALSUBNETSDELETED           | Threshold                                                                                                                      |                   |             |
| WARNINGSUBNETSDETECTED           | Threshold                                                                                                                      |                   |             |
| CRITICALSUBNETSDETECTED          | Threshold                                                                                                                      |                   |             |
| WARNINGSUBNETSPENDING            | Threshold                                                                                                                      |                   |             |
| CRITICALSUBNETSPENDING           | Threshold                                                                                                                      |                   |             |
| WARNINGSUBNETSTATUS              | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{subnetName\}  |                   |             |
| CRITICALSUBNETSTATUS             | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{subnetName\} |                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                             | --verbose         |             |

</TabItem>
<TabItem value="Virtual-Gateways" label="Virtual-Gateways">

| Macro                | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VGTAGNAME            | Virtual gateway tag to be used for the name (default: 'name')                                                              | name              |             |
| FILTERNAME           | Filter virtual gateways by name                                                                                            |                   |             |
| WARNINGVGSAVAILABLE  | Threshold                                                                                                                  |                   |             |
| CRITICALVGSAVAILABLE | Threshold                                                                                                                  |                   |             |
| WARNINGVGSDELETED    | Threshold                                                                                                                  |                   |             |
| CRITICALVGSDELETED   | Threshold                                                                                                                  |                   |             |
| WARNINGVGSDELETING   | Threshold                                                                                                                  |                   |             |
| CRITICALVGSDELETING  | Threshold                                                                                                                  |                   |             |
| WARNINGVGSDETECTED   | Threshold                                                                                                                  |                   |             |
| CRITICALVGSDETECTED  | Threshold                                                                                                                  |                   |             |
| WARNINGVGSPENDING    | Threshold                                                                                                                  |                   |             |
| CRITICALVGSPENDING   | Threshold                                                                                                                  |                   |             |
| WARNINGVGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vgName\}  |                   |             |
| CRITICALVGSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vgName\} |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                         | --verbose         |             |

</TabItem>
<TabItem value="Vms" label="Vms">

| Macro                   | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VMTAGNAME               | Virtual machine tag to be used for the name (default: 'name')                                                              | name              |             |
| FILTERID                | Filter virtual machines by id                                                                                              |                   |             |
| FILTERNAME              | Filter virtual machines by name                                                                                            |                   |             |
| WARNINGVMSDETECTED      | Threshold                                                                                                                  |                   |             |
| CRITICALVMSDETECTED     | Threshold                                                                                                                  |                   |             |
| WARNINGVMSPENDING       | Threshold                                                                                                                  |                   |             |
| CRITICALVMSPENDING      | Threshold                                                                                                                  |                   |             |
| WARNINGVMSQUARANTINE    | Threshold                                                                                                                  |                   |             |
| CRITICALVMSQUARANTINE   | Threshold                                                                                                                  |                   |             |
| WARNINGVMSRUNNING       | Threshold                                                                                                                  |                   |             |
| CRITICALVMSRUNNING      | Threshold                                                                                                                  |                   |             |
| WARNINGVMSSHUTTINGDOWN  | Threshold                                                                                                                  |                   |             |
| CRITICALVMSSHUTTINGDOWN | Threshold                                                                                                                  |                   |             |
| WARNINGVMSSTOPPED       | Threshold                                                                                                                  |                   |             |
| CRITICALVMSSTOPPED      | Threshold                                                                                                                  |                   |             |
| WARNINGVMSSTOPPING      | Threshold                                                                                                                  |                   |             |
| CRITICALVMSSTOPPING     | Threshold                                                                                                                  |                   |             |
| WARNINGVMSTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vmName\}  |                   |             |
| CRITICALVMSTATUS        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vmName\} |                   |             |
| WARNINGVMSTERMINATED    | Threshold                                                                                                                  |                   |             |
| CRITICALVMSTERMINATED   | Threshold                                                                                                                  |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                         | --verbose         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                    | Description                                                                                                                  | Valeur par défaut | Obligatoire |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VMTAGNAME                | Virtual machine tags to used for the name (default: 'name')                                                                  | name              |             |
| FILTERID                 | Filter volumes by id                                                                                                         |                   |             |
| WARNINGVMSTATUS          | Threshold                                                                                                                             |                   |             |
| CRITICALVMSTATUS         | Threshold                                                                                                                             |                   |             |
| WARNINGVOLUMESAVAILABLE  | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESAVAILABLE | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESCREATING   | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESCREATING  | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESDELETING   | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESDELETING  | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESDETECTED   | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESDETECTED  | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESERROR      | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESERROR     | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESINUSE      | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESINUSE     | Threshold                                                                                                                    |                   |             |
| WARNINGVOLUMESTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{volumeId\}  |                   |             |
| CRITICALVOLUMESTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{volumeId\} |                   |             |
| WARNINGVOLUMESUPDATING   | Threshold                                                                                                                    |                   |             |
| CRITICALVOLUMESUPDATING  | Threshold                                                                                                                    |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                           | --verbose         |             |

</TabItem>
<TabItem value="Vpn-Connections" label="Vpn-Connections">

| Macro                           | Description                                                                                                                 | Valeur par défaut | Obligatoire |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VPNTAGNAME                      | Vpn connection tag to be used for the name (default: 'name')                                                                | name              |             |
| FILTERNAME                      | Filter virtual connections by name                                                                                          |                   |             |
| WARNINGVPNCONNECTIONSAVAILABLE  | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSAVAILABLE | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSDELETED    | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSDELETED   | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSDELETING   | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSDELETING  | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSDETECTED   | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSDETECTED  | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSPENDING    | Threshold                                                                                                                   |                   |             |
| CRITICALVPNCONNECTIONSPENDING   | Threshold                                                                                                                   |                   |             |
| WARNINGVPNCONNECTIONSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vpnName\}  |                   |             |
| CRITICALVPNCONNECTIONSTATUS     | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vpnName\} |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                          | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
	--plugin=cloud::outscale::plugin \
	--mode=vpn-connections \
	--custommode='osccli' \
	--profile='' \
	--virtual-env='' \
	--proxyurl=''  \
	--filter-name='' \
	--vpn-tag-name='name' \
	--warning-vpn-connections-detected='' \
	--critical-vpn-connections-detected='' \
	--warning-vpn-connections-available='' \
	--critical-vpn-connections-available='' \
	--warning-vpn-connections-pending='' \
	--critical-vpn-connections-pending='' \
	--warning-vpn-connections-deleting='' \
	--critical-vpn-connections-deleting='' \
	--warning-vpn-connections-deleted='' \
	--critical-vpn-connections-deleted='' \
	--warning-vpn-connection-status='' \
	--critical-vpn-connection-status='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: detected: 79659 available: 55477 pending: 36052 deleting: 52086 deleted: 35352 | 'vpn_connections.detected.count'=79659;;;0; 'vpn_connections.available.count'=55477;;;0; 'vpn_connections.pending.count'=36052;;;0; 'vpn_connections.deleting.count'=52086;;;0; 'vpn_connections.deleted.count'=35352;;;0;
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
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
	--plugin=cloud::outscale::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                       | Modèle de service associé                         |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
| account-consumptions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/accountconsumptions.pm)]    | Cloud-Outscale-Account-Consumptions-Osccli-custom |
| client-gateways [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/clientgateways.pm)]              | Cloud-Outscale-Client-Gateways-Osccli-custom      |
| internet-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/internetservices.pm)]          | Cloud-Outscale-Internet-Services-Osccli-custom    |
| list-client-gateways [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listclientgateways.pm)]     | Used for service discovery                        |
| list-internet-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listinternetservices.pm)] | Used for service discovery                        |
| list-load-balancers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listloadbalancers.pm)]       | Used for service discovery                        |
| list-nat-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listnatservices.pm)]           | Used for service discovery                        |
| list-nets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listnets.pm)]                          | Used for service discovery                        |
| list-quotas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listquotas.pm)]                      | Used for service discovery                        |
| list-route-tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listroutetables.pm)]           | Used for service discovery                        |
| list-subnets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listsubnets.pm)]                    | Used for service discovery                        |
| list-virtual-gateways [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listvirtualgateways.pm)]   | Used for service discovery                        |
| list-vms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listvms.pm)]                            | Used for service discovery                        |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listvolumes.pm)]                    | Used for service discovery                        |
| list-vpn-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/listvpnconnections.pm)]     | Used for service discovery                        |
| load-balancers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/loadbalancers.pm)]                | Cloud-Outscale-Load-Balancers-Osccli-custom       |
| nat-services [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/natservices.pm)]                    | Cloud-Outscale-Nat-Services-Osccli-custom         |
| nets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/nets.pm)]                                   | Cloud-Outscale-Nets-Osccli-custom                 |
| quotas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/quotas.pm)]                               | Cloud-Outscale-Quotas-Osccli-custom               |
| route-tables [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/routetables.pm)]                    | Cloud-Outscale-Route-Tables-Osccli-custom         |
| subnets [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/subnets.pm)]                             | Cloud-Outscale-Subnets-Osccli-custom              |
| virtual-gateways [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/virtualgateways.pm)]            | Cloud-Outscale-Virtual-Gateways-Osccli-custom     |
| vms [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/vms.pm)]                                     | Cloud-Outscale-Vms-Osccli-custom                  |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/volumes.pm)]                             | Cloud-Outscale-Volumes-Osccli-custom              |
| vpn-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/outscale/mode/vpnconnections.pm)]              | Cloud-Outscale-Vpn-Connections-Osccli-custom      |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL if any                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --osc-secret-key                           |   Set Outscale secret key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --osc-access-key                           |   Set Outscale access key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --region                                   |   Set the region name (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --token                                    |   API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --profile                                  |   Set profile option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --virtual-env                              |   Set python virtual environment (to be used if osc-cli is installed in python venv).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --command                                  |   Command to get information (default: 'osc-cli'). Can be changed if you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-path                             |   Command path (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options (default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Account-Consumptions" label="Account-Consumptions">

| Option                   | Description                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------|
| --filter-title           |   Filter account consumptions by title.                                          |
| --filter-service         |   Filter account consumptions by service.                                        |
| --filter-category        |   Filter account consumptions by category.                                       |
| --filter-region          |   Filter account consumptions by region.                                         |
| --timeframe              |   Set timeframe in days (default: 1).                                            |
| --warning-* --critical-* |   Thresholds. Can be: 'account-consumptions-detected', 'account-consumption'.    |

</TabItem>
<TabItem value="Client-Gateways" label="Client-Gateways">

| Option                   | Description                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter client gateways by name.                                                                                              |
| --cg-tag-name            |   Client gateway tags to be used for the name (default: 'name').                                                               |
| --unknown-cg-status      |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{cgName\}    |
| --warning-cg-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{cgName\}    |
| --critical-cg-status     |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{cgName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'cgs-detected', 'cgs-available', 'cgs-pending', 'cgs-deleting', 'cgs-deleted'.                           |

</TabItem>
<TabItem value="Internet-Services" label="Internet-Services">

| Option                             | Description                                                                                                                                 |
|:-----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id                        |   Filter internet services by id.                                                                                                           |
| --filter-name                      |   Filter internet services by name.                                                                                                         |
| --internet-service-tag-name        |   Internet service tag to be used for the name (default: 'name').                                                                           |
| --unknown-internet-service-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{internetServiceName\}    |
| --warning-internet-service-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{internetServiceName\}    |
| --critical-internet-service-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{internetServiceName\}   |
| --warning-* --critical-*           |   Thresholds. Can be: 'internet-services-detected', 'internet-services-available'.                                                          |

</TabItem>
<TabItem value="Load-Balancers" label="Load-Balancers">

| Option                   | Description                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter load balancers by name.                                                                                               |
| --vm-tag-name            |   Virtual machine tags to used for the name (default: 'name').                                                                 |
| --unknown-vm-status      |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{vmName\}    |
| --warning-vm-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vmName\}    |
| --critical-vm-status     |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vmName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'load-balancers-detected', 'load-balancer-vms-up', ''load-balancer-vms-down'.                            |

</TabItem>
<TabItem value="Nat-Services" label="Nat-Services">

| Option                        | Description                                                                                                                                          |
|:------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id                   |   Filter nat services by id.                                                                                                                         |
| --filter-name                 |   Filter nat services by name.                                                                                                                       |
| --nat-tag-name                |   Nat service tag to be used for the name (default: 'name').                                                                                         |
| --unknown-nat-service-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{natName\}                         |
| --warning-nat-service-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{natName\}                         |
| --critical-nat-service-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{natName\}                        |
| --warning-* --critical-*      |   Thresholds. Can be: 'nat-services-detected', 'nat-services-pending', 'nat-services-available', 'nat-services-deleting', 'nat-services-deleted'.    |

</TabItem>
<TabItem value="Nets" label="Nets">

| Option                   | Description                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter nets by name.                                                                                                          |
| --net-tag-name           |   Nets tag to be used for the name (default: 'name').                                                                           |
| --unknown-net-status     |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{netName\}    |
| --warning-net-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{netName\}    |
| --critical-net-status    |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{netName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'nets-detected', 'nets-available', 'nets-pending', 'nets-deleted'.                                        |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Option                   | Description                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter nets by name.                                                                                                          |
| --net-tag-name           |   Nets tag to be used for the name (default: 'name').                                                                           |
| --unknown-net-status     |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{netName\}    |
| --warning-net-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{netName\}    |
| --critical-net-status    |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{netName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'nets-detected', 'nets-available', 'nets-pending', 'nets-deleted'.                                        |

</TabItem>
<TabItem value="Route-Tables" label="Route-Tables">

| Option                   | Description                                                              |
|:-------------------------|:-------------------------------------------------------------------------|
| --filter-route-table-id  |   Filter route tables by id.                                             |
| --warning-* --critical-* |   Thresholds. Can be: 'route-tables-detected', 'route-tables-routes'.    |

</TabItem>
<TabItem value="Subnets" label="Subnets">

| Option                   | Description                                                                                                                        |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter subnets by name.                                                                                                          |
| --subnet-tag-name        |   Subnet tags to be used for the name (default: 'name').                                                                           |
| --unknown-subnet-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{subnetName\}    |
| --warning-subnet-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{subnetName\}    |
| --critical-subnet-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{subnetName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'subnets-detected', 'subnets-available', 'subnets-pending', 'subnets-deleted'.                               |

</TabItem>
<TabItem value="Virtual-Gateways" label="Virtual-Gateways">

| Option                   | Description                                                                                                                    |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            |   Filter virtual gateways by name.                                                                                             |
| --vg-tag-name            |   Virtual gateway tag to be used for the name (default: 'name').                                                               |
| --unknown-vg-status      |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{vgName\}    |
| --warning-vg-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vgName\}    |
| --critical-vg-status     |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vgName\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'vgs-detected', 'vgs-available', 'vgs-pending', 'vgs-deleting', 'vgs-deleted'.                           |

</TabItem>
<TabItem value="Vms" label="Vms">

| Option                   | Description                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id              |   Filter virtual machines by id.                                                                                                                               |
| --filter-name            |   Filter virtual machines by name.                                                                                                                             |
| --vm-tag-name            |   Virtual machine tag to be used for the name (default: 'name').                                                                                               |
| --unknown-vm-status      |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{vmName\}                                    |
| --warning-vm-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vmName\}                                    |
| --critical-vm-status     |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vmName\}                                   |
| --warning-* --critical-* |   Thresholds. Can be: 'vms-detected', 'vms-pending', 'vms-running', 'vms-stopping', 'vms-stopped', 'vms-shutting-down', 'vms-terminated', 'vms-quarantine'.    |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option                   | Description                                                                                                                                                       |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-id              |   Filter volumes by id.                                                                                                                                           |
| --vm-tag-name            |   Virtual machine tags to used for the name (default: 'name').                                                                                                    |
| --unknown-volume-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{volumeId\}                                     |
| --warning-volume-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{volumeId\}                                     |
| --critical-volume-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{volumeId\}                                    |
| --warning-* --critical-* |   Thresholds. Can be: 'volumes-detected', 'volumes-creating', 'volumes-available',  'volumes-in-use', 'volumes-updating', 'volumes-deleting', 'volumes-error'.    |

</TabItem>
<TabItem value="Vpn-Connections" label="Vpn-Connections">

| Option                           | Description                                                                                                                                                         |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name                    |   Filter virtual connections by name.                                                                                                                               |
| --vpn-tag-name                   |   Vpn connection tag to be used for the name (default: 'name').                                                                                                     |
| --unknown-vpn-connection-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{vpnName\}                                        |
| --warning-vpn-connection-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{vpnName\}                                        |
| --critical-vpn-connection-status |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{vpnName\}                                       |
| --warning-* --critical-*         |   Thresholds. Can be: 'vpn-connections-detected', 'vpn-connections-available', 'vpn-connections-pending', 'vpn-connections-deleting', 'vpn-connections-deleted'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_outscale_api.pl \
	--plugin=cloud::outscale::plugin \
	--mode=vpn-connections \
	--help
```
