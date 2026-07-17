---
id: hardware-servers-sun-mgmtcards
title: Sun MgmtCard
description: "Supervisez le matériel des serveurs Sun (cartes ALOM, ILOM, XSCF, RSC) via Telnet, SSH ou IPMI : statut des disques, ventilateurs, alimentations et capteurs."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Sun MgmtCard**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Sun MgmtCard** apporte 9 modèles d'hôte :

* **HW-Server-Sun-Alom-TELNET-custom**
* **HW-Server-Sun-Alom4v-SSH-custom**
* **HW-Server-Sun-Ilom-IPMITOOL-custom**
* **HW-Server-Sun-Ilom-SSH-custom**
* **HW-Server-Sun-Mseries-SSH-custom**
* **HW-Server-Sun-Sf2xx-TELNET-custom**
* **HW-Server-Sun-Sfxxxx-TELNET-custom**
* **HW-Server-Sun-V4xx-TELNET-custom**
* **HW-Server-Sun-V8xx-TELNET-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Server-Sun-Alom-TELNET-custom" label="HW-Server-Sun-Alom-TELNET-custom">

| Alias    | Modèle de service                               | Description                                                            |
|:---------|:------------------------------------------------|:-----------------------------------------------------------------------|
| Hardware | HW-Sun-MgmtCard-Showenvironment-TELNET-custom   | Contrôle le matériel Sun vXXX (v240, v440, v245,...) via ALOM          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Server-Sun-Alom-TELNET-custom** est utilisé.

</TabItem>
<TabItem value="HW-Server-Sun-Alom4v-SSH-custom" label="HW-Server-Sun-Alom4v-SSH-custom">

| Alias    | Modèle de service                               | Description                                                            |
|:---------|:------------------------------------------------|:-----------------------------------------------------------------------|
| Hardware | HW-Sun-MgmtCard-Showfaults-SSH-custom           | Contrôle le matériel Sun 'T1xxx', 'T2xxx' et 'T5xxx' via ALOM4v        |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Server-Sun-Alom4v-SSH-custom** est utilisé.

</TabItem>
<TabItem value="HW-Server-Sun-Ilom-IPMITOOL-custom" label="HW-Server-Sun-Ilom-IPMITOOL-custom">

Ce modèle d'hôte n'est associé à aucun modèle de service.

</TabItem>
<TabItem value="HW-Server-Sun-Ilom-SSH-custom" label="HW-Server-Sun-Ilom-SSH-custom">

| Alias    | Modèle de service                               | Description                                                            |
|:---------|:------------------------------------------------|:-----------------------------------------------------------------------|
| Hardware | HW-Sun-MgmtCard-Show-Faulty-SSH-custom          | Contrôle le matériel Sun 'T3-x', 'T4-x' et 'T5xxx' via ILOM            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Server-Sun-Ilom-SSH-custom** est utilisé.

</TabItem>
<TabItem value="HW-Server-Sun-Mseries-SSH-custom" label="HW-Server-Sun-Mseries-SSH-custom">

| Alias    | Modèle de service                               | Description                                                            |
|:---------|:------------------------------------------------|:-----------------------------------------------------------------------|
| Hardware | HW-Sun-MgmtCard-Showstatus-SSH-custom           | Contrôle le matériel Sun Mxxx (M3000, M5000,...) via XSCF              |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Server-Sun-Mseries-SSH-custom** est utilisé.

</TabItem>
<TabItem value="HW-Server-Sun-Sf2xx-TELNET-custom" label="HW-Server-Sun-Sf2xx-TELNET-custom">

Ce modèle d'hôte n'est associé à aucun modèle de service.

</TabItem>
<TabItem value="HW-Server-Sun-Sfxxxx-TELNET-custom" label="HW-Server-Sun-Sfxxxx-TELNET-custom">

| Alias    | Modèle de service                               | Description                                                            |
|:---------|:------------------------------------------------|:-----------------------------------------------------------------------|
| Hardware | HW-Sun-MgmtCard-Showboards-TELNET-custom        | Contrôle le matériel Sun SFxxxx (sf6900, sf6800, sf3800,...) via ScApp |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Server-Sun-Sfxxxx-TELNET-custom** est utilisé.

</TabItem>
<TabItem value="HW-Server-Sun-V4xx-TELNET-custom" label="HW-Server-Sun-V4xx-TELNET-custom">

| Alias    | Modèle de service                               | Description                                                            |
|:---------|:------------------------------------------------|:-----------------------------------------------------------------------|
| Hardware | HW-Sun-MgmtCard-Environment-V4xx-TELNET-custom  | Contrôle le matériel Sun v480 et v490 via RSC                          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Server-Sun-V4xx-TELNET-custom** est utilisé.

</TabItem>
<TabItem value="HW-Server-Sun-V8xx-TELNET-custom" label="HW-Server-Sun-V8xx-TELNET-custom">

| Alias    | Modèle de service                               | Description                                                            |
|:---------|:------------------------------------------------|:-----------------------------------------------------------------------|
| Hardware | HW-Sun-MgmtCard-Environment-V8xx-TELNET-custom  | Contrôle le matériel Sun v890 et v880 via RSC                          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Server-Sun-V8xx-TELNET-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Environment-Sf2xx" label="Environment-Sf2xx">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Environment-V4xx" label="Environments-V4xx">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Environment-V8xx" label="Environment-V8xx">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Show-Boards" label="Show-Boards">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Show-Environment" label="Show-Environment">

| Nom    | Unité |
|:-------|:------|
| disk.status | N/A   |
| fan.status | N/A   |
| psu.status | N/A   |
| sensor.status | N/A   |
| si.status | N/A   |
| fan.status | N/A   |
| voltage.status | N/A   |

</TabItem>
<TabItem value="Show-Faults" label="Show-Faults">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Show-Faulty" label="Show-Faulty">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Show-Status" label="Show-Status">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
</Tabs>

## Prérequis

Il faut installer les dépendances nécessaires selon le mode de communication choisi (Telnet, SSH ou IPMI) et configurer les identifiants d’accès.

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
dnf install centreon-pack-hardware-servers-sun-mgmtcards
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-servers-sun-mgmtcards
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-servers-sun-mgmtcards
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-servers-sun-mgmtcards
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Sun MgmtCard**
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
dnf install centreon-plugin-Hardware-Servers-Sun-Mgmtcards
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Servers-Sun-Mgmtcards
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-servers-sun-mgmtcards
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Servers-Sun-Mgmtcards
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

<Tabs groupId="sync">
<TabItem value="HW-Server-Sun-Alom-TELNET-custom" label="HW-Server-Sun-Alom-TELNET-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Sun-Alom-TELNET-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TELNETUSERNAME     | ssh username                                                                                         |                   |             |
| SSHUSERNAME        | ssh username                                                                                         |                   |             |
| TELNETPASSWORD     | ssh password                                                                                         |                   |             |
| SSHPASSWORD        | ssh password                                                                                         |                   |             |
| TELNETPORT         | telnet port (default: 23)                                                                            | 23                |             |
| TELNETEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="HW-Server-Sun-Alom4v-SSH-custom" label="HW-Server-Sun-Alom4v-SSH-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Sun-Alom4v-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME        | ssh username                                                                                         |                   |             |
| TELNETUSERNAME     | ssh username                                                                                         |                   |             |
| SSHPASSWORD        | ssh password                                                                                         |                   |             |
| TELNETPASSWORD     | ssh password                                                                                         |                   |             |
| TELNETPORT         | telnet port (default: 23)                                                                            |                   |             |
| TELNETEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="HW-Server-Sun-Ilom-IPMITOOL-custom" label="HW-Server-Sun-Ilom-IPMITOOL-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Sun-Ilom-IPMITOOL-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro        | Description | Valeur par défaut | Obligatoire |
|:-------------|:------------|:------------------|:-----------:|
| IPMIUSERNAME | IPMI username            |                   |             |
| IPMIPASSWORD | IPMI password            |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="HW-Server-Sun-Ilom-SSH-custom" label="HW-Server-Sun-Ilom-SSH-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Sun-Ilom-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME        | ssh username                                                                                         |                   |             |
| TELNETUSERNAME     | ssh username                                                                                         |                   |             |
| SSHPASSWORD        | ssh password                                                                                         |                   |             |
| TELNETPASSWORD     | ssh password                                                                                         |                   |             |
| TELNETPORT         | telnet port (default: 23)                                                                            |                   |             |
| TELNETEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="HW-Server-Sun-Mseries-SSH-custom" label="HW-Server-Sun-Mseries-SSH-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Sun-Mseries-SSH-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME        | ssh username                                                                                         |                   |             |
| TELNETUSERNAME     | ssh username                                                                                         |                   |             |
| SSHPASSWORD        | ssh password                                                                                         |                   |             |
| TELNETPASSWORD     | ssh password                                                                                         |                   |             |
| TELNETPORT         | telnet port (default: 23)                                                                            |                   |             |
| TELNETEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="HW-Server-Sun-Sf2xx-TELNET-custom" label="HW-Server-Sun-Sf2xx-TELNET-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Sun-Sf2xx-TELNET-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TELNETUSERNAME     | ssh username                                                                                         |                   |             |
| SSHUSERNAME        | ssh username                                                                                         |                   |             |
| TELNETPASSWORD     | ssh password                                                                                         |                   |             |
| SSHPASSWORD        | ssh password                                                                                         |                   |             |
| TELNETPORT         | telnet port (default: 23)                                                                            | 23                |             |
| TELNETEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="HW-Server-Sun-Sfxxxx-TELNET-custom" label="HW-Server-Sun-Sfxxxx-TELNET-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Sun-Sfxxxx-TELNET-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TELNETUSERNAME     | ssh username                                                                                         |                   |             |
| SSHUSERNAME        | ssh username                                                                                         |                   |             |
| TELNETPASSWORD     | ssh password                                                                                         |                   |             |
| SSHPASSWORD        | ssh password                                                                                         |                   |             |
| TELNETPORT         | telnet port (default: 23)                                                                            | 23                |             |
| TELNETEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="HW-Server-Sun-V4xx-TELNET-custom" label="HW-Server-Sun-V4xx-TELNET-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Sun-V4xx-TELNET-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TELNETUSERNAME     | ssh username                                                                                         |                   |             |
| SSHUSERNAME        | ssh username                                                                                         |                   |             |
| TELNETPASSWORD     | ssh password                                                                                         |                   |             |
| SSHPASSWORD        | ssh password                                                                                         |                   |             |
| TELNETPORT         | telnet port (default: 23)                                                                            | 23                |             |
| TELNETEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
<TabItem value="HW-Server-Sun-V8xx-TELNET-custom" label="HW-Server-Sun-V8xx-TELNET-custom">

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Server-Sun-V8xx-TELNET-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| TELNETUSERNAME     | ssh username                                                                                         |                   |             |
| SSHUSERNAME        | ssh username                                                                                         |                   |             |
| TELNETPASSWORD     | ssh password                                                                                         |                   |             |
| SSHPASSWORD        | ssh password                                                                                         |                   |             |
| TELNETPORT         | telnet port (default: 23)                                                                            | 23                |             |
| TELNETEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

</TabItem>
</Tabs>

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_sun_mgmtcards.pl \
	--plugin=hardware::server::sun::mgmt_cards::plugin \
	--mode=showstatus \
	--hostname=10.0.0.1 \
	--username='' \
	--password=''  \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Component 'CPU#1' status is 'Normal'
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
/usr/lib/centreon/plugins/centreon_sun_mgmtcards.pl \
	--plugin=hardware::server::sun::mgmt_cards::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                              | Modèle de service associé                       |
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| environment-sf2xx [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/sun/mgmt_cards/mode/environmentsf2xx.pm)] | HW-Sun-MgmtCard-Environment-Sf2xx-TELNET-custom |
| environment-v4xx [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/sun/mgmt_cards/mode/environmentv4xx.pm)]   | HW-Sun-MgmtCard-Environment-V4xx-TELNET-custom  |
| environment-v8xx [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/sun/mgmt_cards/mode/environmentv8xx.pm)]   | HW-Sun-MgmtCard-Environment-V8xx-TELNET-custom  |
| show-faulty [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/sun/mgmt_cards/mode/showfaulty.pm)]             | HW-Sun-MgmtCard-Show-Faulty-SSH-custom          |
| showboards [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/sun/mgmt_cards/mode/showboards.pm)]              | HW-Sun-MgmtCard-Showboards-TELNET-custom        |
| showenvironment [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/sun/mgmt_cards/mode/showenvironment.pm)]    | HW-Sun-MgmtCard-Showenvironment-TELNET-custom   |
| showfaults [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/sun/mgmt_cards/mode/showfaults.pm)]              | HW-Sun-MgmtCard-Showfaults-SSH-custom           |
| showstatus [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/sun/mgmt_cards/mode/showstatus.pm)]              | HW-Sun-MgmtCard-Showstatus-SSH-custom           |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component            |   Which component to check (default: '.*'). Can be: 'temperature', 'si', 'disk', 'fan', 'voltage', 'psu', 'sensors'.                                                                                                                            |
| --filter               |   Exclude the items given as a comma-separated list (example: --filter=fan). You can also exclude items from specific instances: --filter=fan,F1.RS                                                                                             |
| --absent-problem       |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                          |
| --no-component         |   Define the expected status if no components are found (default: critical).                                                                                                                                                                    |
| --threshold-overload   |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: status,regexp). Example: --threshold-overload='UNKNOWN,Normal'                                                      |
| --warning              |   Define the warning threshold for temperatures (syntax: type,instance,threshold) Example: --warning='temperature,.*,30'                                                                                                                        |
| --critical             |   Define the critical threshold for temperatures (syntax: type,instance,threshold) Example: --critical='temperature,.*,40'                                                                                                                      |
| --warning-count-*      |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                  |
| --critical-count-*     |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                 |
| --hostname             |   Hostname to query.                                                                                                                                                                                                                            |
| --port                 |   telnet port (default: 23).                                                                                                                                                                                                                    |
| --username             |   ssh username.                                                                                                                                                                                                                                 |
| --password             |   ssh password.                                                                                                                                                                                                                                 |
| --timeout              |   Timeout in seconds for the command (default: 30).                                                                                                                                                                                             |
| --command-plink        |   Plink command (default: plink). Use to set a path.                                                                                                                                                                                            |
| --ssh                  |   Use ssh (with plink) instead of telnet.                                                                                                                                                                                                       |
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --memory               |   Returns new errors (retention file is used by the following option).                                                                                                                                                                          |
| --exclude              |   Filter components (multiple) (can be a regexp). Example: --exclude='MEM#2B' --exclude='MBU\_A\>MEM#0B'.                                                                                                                                       |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_sun_mgmtcards.pl \
	--plugin=hardware::server::sun::mgmt_cards::plugin \
	--mode=showstatus \
	--help
```
