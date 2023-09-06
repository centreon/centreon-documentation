---
id: cloud-aws-ec2
title: Amazon EC2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Amazon EC2** apporte 3 modèles d'hôte :

* **Cloud-Aws-Ec2-Asg-custom**
* **Cloud-Aws-Ec2-Instance-custom**
* **Cloud-Aws-Ec2-Spot-Fleet-Request-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Ec2-Asg-custom" label="Cloud-Aws-Ec2-Asg-custom">

| Alias          | Modèle de service                   | Description                                                      |
|:---------------|:------------------------------------|:-----------------------------------------------------------------|
| Ec2-Cpu-Credit | Cloud-Aws-Ec2-Cpu-Credit-Api-custom | Contrôle l'utilisation des crédits CPU                           |
| Ec2-Cpu-Usage  | Cloud-Aws-Ec2-Cpu-Usage-Api-custom  | Contrôle l'utilisation CPU                                       |
| Ec2-Network    | Cloud-Aws-Ec2-Network-Api-custom    | Contrôle l'utilisation réseau                                    |
| Ec2-Status     | Cloud-Aws-Ec2-Status-Api-custom     | Contrôle permettant de vérifier le statut des contrôles internes |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Ec2-Asg-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-Ec2-Instance-custom" label="Cloud-Aws-Ec2-Instance-custom">

| Alias          | Modèle de service                   | Description                                                      |
|:---------------|:------------------------------------|:-----------------------------------------------------------------|
| Ec2-Cpu-Credit | Cloud-Aws-Ec2-Cpu-Credit-Api-custom | Contrôle l'utilisation des crédits CPU                           |
| Ec2-Cpu-Usage  | Cloud-Aws-Ec2-Cpu-Usage-Api-custom  | Contrôle l'utilisation CPU                                       |
| Ec2-Diskio     | Cloud-Aws-Ec2-Diskio-Api-custom     | Contrôle l'utilisation des écritures                             |
| Ec2-Network    | Cloud-Aws-Ec2-Network-Api-custom    | Contrôle l'utilisation réseau                                    |
| Ec2-Status     | Cloud-Aws-Ec2-Status-Api-custom     | Contrôle permettant de vérifier le statut des contrôles internes |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Ec2-Instance-custom** est utilisé.

</TabItem>
<TabItem value="Cloud-Aws-Ec2-Spot-Fleet-Request-custom" label="Cloud-Aws-Ec2-Spot-Fleet-Request-custom">

| Alias                    | Modèle de service                   | Description                                                                                   |
|:-------------------------|:------------------------------------|:----------------------------------------------------------------------------------------------|
| EC2Spot-Active-Instances | Cloud-Aws-Ec2-Spot-Instances-custom | Contrôle permettant de contrôler le nombre d'instance spot active pour une Spot Fleet Request |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Cloud-Aws-Ec2-Spot-Fleet-Request-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                       | Modèle de service                                | Description                                                     |
|:----------------------------|:-------------------------------------------------|:----------------------------------------------------------------|
| Ec2-Asg-Status-Global       | Cloud-Aws-Ec2-Asg-Status-Global-Api-custom       | Contrôle permettant de vérifier le statut des ASG               |
| Ec2-Instances-Status-Global | Cloud-Aws-Ec2-Instances-Status-Global-Api-custom | Contrôle permettant de vérifier le statut des instances         |
| Ec2-Instances-Types-Global  | Cloud-Aws-Ec2-Instances-Types-Global-Api-custom  | Contrôle permettant de remonter le nombre d'instances par types |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                             |
|:----------------|:----------------------------------------|
| Amazon AWS EC2  | Discover Amazon AWS EC2 instances       |
| Amazon AWS ASG  | Discover Amazon AWS Auto Scaling Groups |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="EC2Spot-Active-Instances" label="EC2Spot-Active-Instances">

| Métrique                           | Unité |
|:-----------------------------------|:------|
| ec2.spot.instances.active.count    | count |
| ec2.spot.instances.healthy.count   | count |
| ec2.spot.instances.unhealthy.count | count |

</TabItem>
<TabItem value="Ec2-Asg-Status-Global" label="Ec2-Asg-Status-Global">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| *aws_asg*#ec2.asg.instance.current.count | count |
| *aws_instances*#instances                | N/A   |

</TabItem>
<TabItem value="Ec2-Cpu-Credit" label="Ec2-Cpu-Credit">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| ec2.cpu.utilization.percentage       | %     |
| ec2.cpu.credit.balance.count         | count |
| ec2.cpu.credit.usage.count           | count |
| ec2.cpu.credit.surplus.balance.count | count |
| ec2.cpu.credit.surplus.charged.count | count |

</TabItem>
<TabItem value="Ec2-Cpu-Usage" label="Ec2-Cpu-Usage">

| Métrique                             | Unité |
|:-------------------------------------|:------|
| ec2.cpu.utilization.percentage       | %     |
| ec2.cpu.credit.balance.count         | count |
| ec2.cpu.credit.usage.count           | count |
| ec2.cpu.credit.surplus.balance.count | count |
| ec2.cpu.credit.surplus.charged.count | count |

</TabItem>
<TabItem value="Ec2-Diskio" label="Ec2-Diskio">

| Métrique                   | Unité |
|:---------------------------|:------|
| ec2.disk.bytes.read.bytes  | B     |
| ec2.disk.bytes.write.bytes | B     |
| ec2.disk.ops.read.count    | ops   |
| ec2.disk.ops.write.count   | ops   |
| ec2.disk.bytes.read.bytes  | B     |
| ec2.ebs.bytes.write.bytes  | B     |
| ec2.ebs.ops.read.count     | ops   |
| ec2.ebs.ops.write.count    | ops   |

</TabItem>
<TabItem value="Ec2-Instances-Status-Global" label="Ec2-Instances-Status-Global">

| Métrique                                | Unité |
|:----------------------------------------|:------|
| ec2.instances.status.pending.count      | count |
| ec2.instances.status.running.count      | count |
| ec2.instances.status.shuttingdown.count | count |
| ec2.instances.status.terminated.count   | count |
| ec2.instances.status.stopping.count     | count |
| ec2.instances.status.stopped.count      | count |
| *aws_instances*#status                  | N/A   |
| *aws_instances*#ec2.uptime.days         | d     |

</TabItem>
<TabItem value="Ec2-Instances-Types-Global" label="Ec2-Instances-Types-Global">

Coming soon

</TabItem>
<TabItem value="Ec2-Network" label="Ec2-Network">

| Métrique                      | Unité   |
|:------------------------------|:--------|
| ec2.network.in.bytes          | B       |
| ec2.network.out.bytes         | B       |
| ec2.network.packets.in.count  | packets |
| ec2.network.packets.out.count | packets |

</TabItem>
<TabItem value="Ec2-Status" label="Ec2-Status">

Coming soon

</TabItem>
</Tabs>

## Prérequis

### Privilèges AWS

Configurez un compte de service (via une combinaison d'access et secret key) et affectez-lui les privilèges suivants :

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| XXXXX:XXXXXXXXXXXXXXXX         | Get XXXXX.                                                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch.           |

### Dépendances du Plugin

Afin de récupérer les informations nécessaires via les APIs AWS, il est possible d'utiliser soit le binaire *awscli* fourni par Amazon, soit le SDK Perl *paws*. Le SDK est recommandé car plus performant.

> **Attention**, il n'est pas possible d'utiliser *paws* si la connexion s'effectue au travers d'un proxy.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bash
yum install perl-Paws
```

</TabItem>
<TabItem value="aws-cli-installation" label="aws-cli-installation">

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

</TabItem>
</Tabs>

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-aws-ec2
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-ec2
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-cloud-aws-ec2
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-ec2
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Amazon EC2**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

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
dnf install centreon-plugin-Cloud-Aws-Ec2-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Ec2-Api
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-cloud-aws-ec2-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Ec2-Api
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Ec2-Asg-custom" label="Cloud-Aws-Ec2-Asg-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Ec2-Asg-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro           | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (Required) (can be defined multipletimes)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (Required) (Can be: 'asg', 'instance')                                                               | asg               | X           |
| AWSREGION       | Set the region name (Required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-Ec2-Instance-custom" label="Cloud-Aws-Ec2-Instance-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Ec2-Instance-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro           | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set arn of the role to be assumed                                                                                          |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSINSTANCENAME | Set the instance name (Required) (can be defined multipletimes)                                                            |                   | X           |
| AWSINSTANCETYPE | Set the instance type (Required) (Can be: 'asg', 'instance')                                                               | instance          | X           |
| AWSREGION       | Set the region name (Required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="Cloud-Aws-Ec2-Spot-Fleet-Request-custom" label="Cloud-Aws-Ec2-Spot-Fleet-Request-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Cloud-Aws-Ec2-Spot-Fleet-Request-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires, notamment la macro permettant de définir le [custom mode](#custom-modesdisponibles), c'est-à-dire la méthode de connexion à la ressource.

| Macro              | Description                                                                                                                | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY       | Set AWS access key                                                                                                         |                   |             |
| AWSCUSTOMMODE      | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | awscli            |             |
| AWSREGION          | Set the region name (Required)                                                                                             |                   | X           |
| AWSSECRETKEY       | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL           |                                                                                                                            |                   |             |
| SPOTFLEETREQUESTID |                                                                                                                            |                   | X           |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                      |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="EC2Spot-Active-Instances" label="EC2Spot-Active-Instances">

| Macro             | Description                                                                                         | Valeur par défaut | Obligatoire |
|:------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGACTIVE     | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| CRITICALACTIVE    | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| WARNINGHEALTHY    | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| CRITICALHEALTHY   | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| WARNINGUNHEALTHY  | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| CRITICALUNHEALTHY | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'                       |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Ec2-Asg-Status-Global" label="Ec2-Asg-Status-Global">

| Macro             | Description                                                                                                                                                             | Valeur par défaut                                     | Obligatoire |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| FILTERASG         | Filter by autoscaling group name (can be a regexp)                                                                                                                      | .*                                                    |             |
| WARNINGCOUNT      | Warning threshold about number of instances in the autoscaling group                                                                                                    |                                                       |             |
| CRITICALCOUNT     | Critical threshold about number of instances in the autoscaling group                                                                                                   |                                                       |             |
| CRITICALINSTANCES | Set critical threshold for instances states (Default: '%{health} =~ /Healthy/ && %{lifecycle} !~ /InService/'). Can use special variables like: %{health}, %{lifecycle} | %{health} =~ /Healthy/ && %{lifecycle} !~ /InService/ |             |
| WARNINGINSTANCES  | Define the conditions to match for the status to be WARNING (Default: ''). Can use special variables like: %{health}, %{lifecycle}                                      |                                                       |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                     | --verbose                                             |             |

</TabItem>
<TabItem value="Ec2-Cpu-Credit" label="Ec2-Cpu-Credit">

| Macro                           | Description                                                                                                                                              | Valeur par défaut | Obligatoire |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                    | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', 'CPUSurplusCreditBalance', 'CPUSurplusCreditsCharged', 'CPUUtilization') (Can be a regexp) | Credit            |             |
| STATISTIC                       |                                                                                                                                                          | average           |             |
| TIMEFRAME                       |                                                                                                                                                          | 600               |             |
| PERIOD                          |                                                                                                                                                          | 60                |             |
| WARNINGCPUCREDITBALANCE         | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITBALANCE        | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITSURPLUSBALANCE  | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITSURPLUSBALANCE | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITSURPLUSCHARGED  | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITSURPLUSCHARGED | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITUSAGE           | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITUSAGE          | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUUTILIZATION           | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUUTILIZATION          | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                      | --verbose         |             |

</TabItem>
<TabItem value="Ec2-Cpu-Usage" label="Ec2-Cpu-Usage">

| Macro                           | Description                                                                                                                                              | Valeur par défaut | Obligatoire |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERMETRIC                    | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', 'CPUSurplusCreditBalance', 'CPUSurplusCreditsCharged', 'CPUUtilization') (Can be a regexp) | Utilization       |             |
| STATISTIC                       |                                                                                                                                                          | average           |             |
| TIMEFRAME                       |                                                                                                                                                          | 600               |             |
| PERIOD                          |                                                                                                                                                          | 60                |             |
| WARNINGCPUCREDITBALANCE         | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITBALANCE        | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITSURPLUSBALANCE  | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITSURPLUSBALANCE | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITSURPLUSCHARGED  | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITSURPLUSCHARGED | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUCREDITUSAGE           | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUCREDITUSAGE          | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| WARNINGCPUUTILIZATION           | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| CRITICALCPUUTILIZATION          | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization')      |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                      | --verbose         |             |

</TabItem>
<TabItem value="Ec2-Diskio" label="Ec2-Diskio">

| Macro                  | Description                                                                                                                                                        | Valeur par défaut   | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC              |                                                                                                                                                                    | average             |             |
| TIMEFRAME              |                                                                                                                                                                    | 600                 |             |
| PERIOD                 |                                                                                                                                                                    | 60                  |             |
| FILTERMETRIC           | Filter metrics (Can be: 'DiskReadBytes', 'DiskWriteBytes', 'DiskReadOps', 'DiskWriteOps') (Can be a regexp)                                                        |                     |             |
| WARNINGDISKBYTESREAD   | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| CRITICALDISKBYTESREAD  | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| WARNINGDISKBYTESWRITE  | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| CRITICALDISKBYTESWRITE | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| WARNINGDISKOPSREAD     | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| CRITICALDISKOPSREAD    | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| WARNINGDISKOPSWRITE    | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| CRITICALDISKOPSWRITE   | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write') |                     |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                | --per-sec --verbose |             |

</TabItem>
<TabItem value="Ec2-Instances-Status-Global" label="Ec2-Instances-Status-Global">

| Macro                | Description                                                                                                             | Valeur par défaut | Obligatoire |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERINSTANCEID     | Filter by instance id (can be a regexp)                                                                                 | .*                |             |
| WARNINGPENDING       | Thresholds                                                                                                              |                   |             |
| CRITICALPENDING      | Thresholds                                                                                                              |                   |             |
| WARNINGRUNNING       | Thresholds                                                                                                              |                   |             |
| CRITICALRUNNING      | Thresholds                                                                                                              |                   |             |
| WARNINGSHUTTINGDOWN  | Thresholds                                                                                                              |                   |             |
| CRITICALSHUTTINGDOWN | Thresholds                                                                                                              |                   |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}  |                   |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{display} |                   |             |
| WARNINGSTOPPED       | Thresholds                                                                                                              |                   |             |
| CRITICALSTOPPED      | Thresholds                                                                                                              |                   |             |
| WARNINGSTOPPING      | Thresholds                                                                                                              |                   |             |
| CRITICALSTOPPING     | Thresholds                                                                                                              |                   |             |
| WARNINGTERMINATED    | Thresholds                                                                                                              |                   |             |
| CRITICALTERMINATED   | Thresholds                                                                                                              |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                     | --verbose         |             |

</TabItem>
<TabItem value="Ec2-Instances-Types-Global" label="Ec2-Instances-Types-Global">

| Macro        | Description                                                                                           | Valeur par défaut | Obligatoire |
|:-------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERFAMILY | Filter by instance family (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'accelerated') | .*                |             |
| FILTERTYPE   | Filter by instance type (regexp)                                                                      | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)   | --verbose         |             |

</TabItem>
<TabItem value="Ec2-Network" label="Ec2-Network">

| Macro                     | Description                                                                                                   | Valeur par défaut   | Obligatoire |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                 |                                                                                                               | average             |             |
| TIMEFRAME                 |                                                                                                               | 600                 |             |
| PERIOD                    |                                                                                                               | 60                  |             |
| FILTERMETRIC              | Filter metrics (Can be: 'NetworkIn', 'NetworkOut', 'NetworkPacketsIn', 'NetworkPacketsOut') (Can be a regexp) |                     |             |
| WARNINGNETWORKIN          | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| CRITICALNETWORKIN         | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| WARNINGNETWORKOUT         | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| CRITICALNETWORKOUT        | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| WARNINGNETWORKPACKETSIN   | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| CRITICALNETWORKPACKETSIN  | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| WARNINGNETWORKPACKETSOUT  | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| CRITICALNETWORKPACKETSOUT | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'           |                     |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)           | --per-sec --verbose |             |

</TabItem>
<TabItem value="Ec2-Status" label="Ec2-Status">

| Macro          | Description                                                                                                                                                                           | Valeur par défaut | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}. 'status' can be: 'passed', 'failed'                                      |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /failed/i'). You can use the following variables: %{status}. 'status' can be: 'passed', 'failed' |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                   | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une instance AWS en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_aws_ec2_api.pl \
	--plugin=cloud::aws::ec2::plugin \
	--mode=network \
	--custommode='awscli' \
	--aws-secret-key='' \
	--aws-access-key='' \
	--aws-role-arn='' \
	--region='' \
	--type='asg' \
	--name='' \
	--proxyurl=''  \
	--filter-metric='' \
	--statistic='average' \
	--timeframe='600' \
	--period='60' \
	--warning-network-in='' \
	--critical-network-in='' \
	--warning-network-out='' \
	--critical-network-out='' \
	--warning-network-packets-in='' \
	--critical-network-packets-in='' \
	--warning-network-packets-out='' \
	--critical-network-packets-out='' \
	--per-sec \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Network In: 50 B Network Out: 60 B Network Packets In: 95 packets Network Packets Out: 33 packets | 'ec2.network.in.bytes'=50B;;;; 'ec2.network.out.bytes'=60B;;;; 'ec2.network.packets.in.count'=95packets;;;; 'ec2.network.packets.out.count'=33packets;;;; 
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
/usr/lib/centreon/plugins/centreon_aws_ec2_api.pl \
	--plugin=cloud::aws::ec2::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                              | Modèle de service associé                                                   |
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|
| asg-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/asgstatus.pm)]                                | Cloud-Aws-Ec2-Asg-Status-Global-Api-custom                                  |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/cpu.pm)]                                             | Cloud-Aws-Ec2-Cpu-Credit-Api-custom<br />Cloud-Aws-Ec2-Cpu-Usage-Api-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/discovery.pm)]                                 | Used for host discovery                                                     |
| discovery-fleet-requests [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/discoveryspotfleetrequests.pm)] | Not used in this Monitoring Connector                                       |
| diskio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/diskio.pm)]                                       | Cloud-Aws-Ec2-Diskio-Api-custom                                             |
| instances-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/instancesstatus.pm)]                    | Cloud-Aws-Ec2-Instances-Status-Global-Api-custom                            |
| instances-types [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/instancestypes.pm)]                      | Cloud-Aws-Ec2-Instances-Types-Global-Api-custom                             |
| list-asg [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/listasg.pm)]                                    | Not used in this Monitoring Connector                                       |
| list-instances [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/listinstances.pm)]                        | Not used in this Monitoring Connector                                       |
| list-spot-fleet-requests [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/listspotfleetrequests.pm)]      | Not used in this Monitoring Connector                                       |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/network.pm)]                                     | Cloud-Aws-Ec2-Network-Api-custom                                            |
| spot-active-instances [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/spotactiveinstances.pm)]           | Cloud-Aws-Ec2-Spot-Instances-custom                                         |
| status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ec2/mode/status.pm)]                                       | Cloud-Aws-Ec2-Status-Api-custom                                             |

### Custom modes disponibles

Ce connecteur offre plusieurs méthodes pour se connecter à la ressource (CLI, bibliothèque, etc.), appelées **custom modes**.
Tous les custom modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-custommode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_ec2_api.pl \
	--plugin=cloud::aws::ec2::plugin \
	--list-custommode
```

Le plugin apporte les custom modes suivants :

* awscli
* paws

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Options des custom modes

Les options spécifiques aux **custom modes** sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="awscli" label="awscli">

| Option              | Description                                                                                                                                                                                                                           |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --aws-secret-key    | Set AWS secret key.                                                                                                                                                                                                                   |
| --aws-access-key    | Set AWS access key.                                                                                                                                                                                                                   |
| --aws-session-token | Set AWS session token.                                                                                                                                                                                                                |
| --aws-role-arn      | Set arn of the role to be assumed.                                                                                                                                                                                                    |
| --aws-profile       | Set AWS profile.                                                                                                                                                                                                                      |
| --endpoint-url      | Override AWS service endpoint URL if necessary.                                                                                                                                                                                       |
| --region            | Set the region name (Required).                                                                                                                                                                                                       |
| --period            | Set period in seconds.                                                                                                                                                                                                                |
| --timeframe         | Set timeframe in seconds.                                                                                                                                                                                                             |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                           |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.                                                                                                                                        |
| --timeout           | Set timeout in seconds (Default: 50).                                                                                                                                                                                                 |
| --sudo              | Use 'sudo' to execute the command.                                                                                                                                                                                                    |
| --command           | Command to get information (Default: 'aws'). Can be changed if you have output in a file.                                                                                                                                             |
| --command-path      | Command path (Default: none).                                                                                                                                                                                                         |
| --command-options   | Command options (Default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                          |
| --proxyurl          | Proxy URL if any                                                                                                                                                                                                                      |
| --skip-ssl-check    | Avoid certificate issuer verification. Useful when AWS resources are hosted by a third-party.  Note that it strips all stderr from the command result. Will be enhanced someday. Debug will only display CLI instead of evreything.   |

</TabItem>
<TabItem value="paws" label="paws">

| Option              | Description                                                                                      |
|:--------------------|:-------------------------------------------------------------------------------------------------|
| --aws-secret-key    | Set AWS secret key.                                                                              |
| --aws-access-key    | Set AWS access key.                                                                              |
| --aws-session-token | Set AWS session token.                                                                           |
| --aws-role-arn      | Set arn of the role to be assumed.                                                               |
| --region            | Set the region name (Required).                                                                  |
| --period            | Set period in seconds.                                                                           |
| --timeframe         | Set timeframe in seconds.                                                                        |
| --statistic         | Set cloudwatch statistics (Can be: 'minimum', 'maximum', 'average', 'sum').                      |
| --zeroed            | Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.   |
| --proxyurl          | Proxy URL if any                                                                                 |

</TabItem>
</Tabs>

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="EC2Spot-Active-Instances" label="EC2Spot-Active-Instances">

| Option                   | Description                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------|
| --warning-* --critical-* | Warning and Critical thresholds. You can use 'active', 'healthy', 'unhealthy'    |

</TabItem>
<TabItem value="Ec2-Asg-Status-Global" label="Ec2-Asg-Status-Global">

| Option                          | Description                                                                                                                                                               |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               | Only display some counters (regexp can be used). Possible values: asg / instances                                                                                         |
| --filter-asg                    | Filter by autoscaling group name (can be a regexp).                                                                                                                       |
| --warning-instances             | Define the conditions to match for the status to be WARNING (Default: ''). Can use special variables like: %{health}, %{lifecycle}                                        |
| --critical-instances            | Set critical threshold for instances states (Default: '%{health} =~ /Healthy/ && %{lifecycle} !~ /InService/'). Can use special variables like: %{health}, %{lifecycle}   |
| --warning-asg-instance-current  | Warning threshold about number of instances in the autoscaling group                                                                                                      |
| --critical-asg-instance-current | Critical threshold about number of instances in the autoscaling group                                                                                                     |

</TabItem>
<TabItem value="Ec2-Cpu-Credit" label="Ec2-Cpu-Credit">

| Option                   | Description                                                                                                                                                 |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                   | Set the instance type (Required) (Can be: 'asg', 'instance').                                                                                               |
| --name                   | Set the instance name (Required) (can be defined multipletimes).                                                                                            |
| --filter-metric          | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', 'CPUSurplusCreditBalance', 'CPUSurplusCreditsCharged', 'CPUUtilization') (Can be a regexp).   |
| --warning-* --critical-* | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization').        |

</TabItem>
<TabItem value="Ec2-Cpu-Usage" label="Ec2-Cpu-Usage">

| Option                   | Description                                                                                                                                                 |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                   | Set the instance type (Required) (Can be: 'asg', 'instance').                                                                                               |
| --name                   | Set the instance name (Required) (can be defined multipletimes).                                                                                            |
| --filter-metric          | Filter metrics (Can be: 'CPUCreditBalance', 'CPUCreditUsage', 'CPUSurplusCreditBalance', 'CPUSurplusCreditsCharged', 'CPUUtilization') (Can be a regexp).   |
| --warning-* --critical-* | Thresholds warning (Can be 'cpu-credit-usage', 'cpu-credit-balance', 'cpu-credit-surplus-balance', 'cpu-credit-surplus-charged', 'cpu-utilization').        |

</TabItem>
<TabItem value="Ec2-Diskio" label="Ec2-Diskio">

| Option                   | Description                                                                                                                                                           |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type                   | Set the instance type (Required) (Can be: 'asg', 'instance').                                                                                                         |
| --name                   | Set the instance name (Required) (can be defined multipletimes).                                                                                                      |
| --add-ebs-metrics        | Add EBS metrics ('EBSReadOps', 'EBSWriteOps', 'EBSReadBytes', 'EBSWriteBytes').                                                                                       |
| --filter-metric          | Filter metrics (Can be: 'DiskReadBytes', 'DiskWriteBytes', 'DiskReadOps', 'DiskWriteOps') (Can be a regexp).                                                          |
| --warning-* --critical-* | Thresholds (Can be 'disk-bytes-read', 'disk-bytes-write', 'disk-ops-read', 'disk-ops-write', 'ebs-bytes-read', 'ebs-bytes-write', 'ebs-ops-read', 'ebs-ops-write').   |
| --per-sec                | Change the data to be unit/sec.                                                                                                                                       |

</TabItem>
<TabItem value="Ec2-Instances-Status-Global" label="Ec2-Instances-Status-Global">

| Option                   | Description                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^running$'                                                       |
| --filter-instanceid      | Filter by instance id (can be a regexp).                                                                                                      |
| --add-uptime             | Monitor instances uptime.                                                                                                                     |
| --uptime-unit            | Select the unit for uptime threshold. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is days.   |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                        |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{state}, %{display}                       |
| --warning-* --critical-* | Thresholds. Can be: 'pending', 'running', 'shuttingdown', 'terminated', 'stopping', 'stopped', 'uptime'.                                      |

</TabItem>
<TabItem value="Ec2-Instances-Types-Global" label="Ec2-Instances-Types-Global">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-family          | Filter by instance family (regexp) (Can be: 'general', 'compute', 'memory', 'storage', 'accelerated')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --filter-type            | Filter by instance type (regexp)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --warning-* --critical-* | Warning threshold. Can be: 'a1.medium', 'a1.large', 'a1.xlarge', 'a1.2xlarge', 'a1.4xlarge', 'm4.large', 'm4.xlarge', 'm4.2xlarge', 'm4.4xlarge', 'm4.10xlarge', 'm4.16xlarge', 'm5.large', 'm5.xlarge', 'm5.2xlarge', 'm5.4xlarge', 'm5.8xlarge', 'm5.12xlarge', 'm5.16xlarge', 'm5.24xlarge', 'm5.metal', 'm5a.large', 'm5a.xlarge', 'm5a.2xlarge', 'm5a.4xlarge', 'm5a.8xlarge', 'm5a.12xlarge', 'm5a.16xlarge', 'm5a.24xlarge', 'm5ad.large', 'm5ad.xlarge', 'm5ad.2xlarge', 'm5ad.4xlarge', 'm5ad.12xlarge', 'm5ad.24xlarge', 'm5d.large', 'm5d.xlarge', 'm5d.2xlarge', 'm5d.4xlarge', 'm5d.8xlarge', 'm5d.12xlarge', 'm5d.16xlarge', 'm5d.24xlarge', 'm5d.metal', 't2.nano', 't2.micro', 't2.small', 't2.medium', 't2.large', 't2.xlarge', 't2.2xlarge', 't3.nano', 't3.micro', 't3.small', 't3.medium', 't3.large', 't3.xlarge', 't3.2xlarge', 't3a.nano', 't3a.micro', 't3a.small', 't3a.medium', 't3a.large', 't3a.xlarge', 't3a.2xlarge', 'c4.large', 'c4.xlarge', 'c4.2xlarge', 'c4.4xlarge', 'c4.8xlarge', 'c5.large', 'c5.xlarge', 'c5.2xlarge', 'c5.4xlarge', 'c5.9xlarge', 'c5.12xlarge', 'c5.18xlarge', 'c5.24xlarge', 'c5.metal', 'c5d.large', 'c5d.xlarge', 'c5d.2xlarge', 'c5d.4xlarge', 'c5d.9xlarge', 'c5d.18xlarge', 'c5n.large', 'c5n.xlarge', 'c5n.2xlarge', 'c5n.4xlarge', 'c5n.9xlarge', 'c5n.18xlarge', 'r4.large', 'r4.xlarge', 'r4.2xlarge', 'r4.4xlarge', 'r4.8xlarge', 'r4.16xlarge', 'r5.large', 'r5.xlarge', 'r5.2xlarge', 'r5.4xlarge', 'r5.8xlarge', 'r5.12xlarge', 'r5.16xlarge', 'r5.24xlarge', 'r5.metal', 'r5a.large', 'r5a.xlarge', 'r5a.2xlarge', 'r5a.4xlarge', 'r5a.8xlarge', 'r5a.12xlarge', 'r5a.16xlarge', 'r5a.24xlarge', 'r5ad.large', 'r5ad.xlarge', 'r5ad.2xlarge', 'r5ad.4xlarge', 'r5ad.12xlarge', 'r5ad.24xlarge', 'r5d.large', 'r5d.xlarge', 'r5d.2xlarge', 'r5d.4xlarge', 'r5d.8xlarge', 'r5d.12xlarge', 'r5d.16xlarge', 'r5d.24xlarge', 'r5d.metal', 'u-6tb1.metal', 'u-9tb1.metal', 'u-12tb1.metal', 'x1.16xlarge', 'x1.32xlarge', 'x1e.xlarge', 'x1e.2xlarge', 'x1e.4xlarge', 'x1e.8xlarge', 'x1e.16xlarge', 'x1e.32xlarge', 'z1d.large', 'z1d.xlarge', 'z1d.2xlarge', 'z1d.3xlarge', 'z1d.6xlarge', 'z1d.12xlarge', 'z1d.metal', 'd2.xlarge', 'd2.2xlarge', 'd2.4xlarge', 'd2.8xlarge', 'h1.2xlarge', 'h1.4xlarge', 'h1.8xlarge', 'h1.16xlarge', 'i3.large', 'i3.xlarge', 'i3.2xlarge', 'i3.4xlarge', 'i3.8xlarge', 'i3.16xlarge', 'i3.metal', 'i3en.large', 'i3en.xlarge', 'i3en.2xlarge', 'i3en.3xlarge', 'i3en.6xlarge', 'i3en.12xlarge', 'i3en.24xlarge','f1.2xlarge', 'f1.4xlarge', 'f1.16xlarge', 'g3s.xlarge', 'g3.4xlarge', 'g3.8xlarge', 'g3.16xlarge', 'p2.xlarge', 'p2.8xlarge', 'p2.16xlarge', 'p3.2xlarge', 'p3.8xlarge', 'p3.16xlarge', 'p3dn.24xlarge'.   |
| --running                | Only check running instances.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

</TabItem>
<TabItem value="Ec2-Network" label="Ec2-Network">

| Option                   | Description                                                                                                      |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------|
| --type                   | Set the instance type (Required) (Can be: 'asg', 'instance').                                                    |
| --name                   | Set the instance name (Required) (can be defined multipletimes).                                                 |
| --filter-metric          | Filter metrics (Can be: 'NetworkIn', 'NetworkOut', 'NetworkPacketsIn', 'NetworkPacketsOut') (Can be a regexp).   |
| --warning-* --critical-* | Thresholds warning (Can be 'network-in', 'network-out', 'network-packets-in', 'network-packets-out'.             |
| --per-sec                | Change the data to be unit/sec.                                                                                  |

</TabItem>
<TabItem value="Ec2-Status" label="Ec2-Status">

| Option            | Description                                                                                                                                                                               |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --type            | Set the instance type (Required) (Can be: 'asg', 'instance').                                                                                                                             |
| --name            | Set the instance name (Required) (can be defined multipletimes).                                                                                                                          |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}. 'status' can be: 'passed', 'failed'.                                         |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{status} =~ /failed/i'). You can use the following variables: %{status}. 'status' can be: 'passed', 'failed'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aws_ec2_api.pl \
	--plugin=cloud::aws::ec2::plugin \
	--mode=network \
	--custommode='paws' \
	--help
```
