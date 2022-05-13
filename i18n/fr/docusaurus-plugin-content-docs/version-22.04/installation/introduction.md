---
id: introduction
title: Introduction
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre décrit les différentes étapes de mise en place d'une plateforme de
supervision Centreon.

La plateforme de supervision peut être installée de plusieurs manières.
Cependant, **nous vous recommandons vivement d'utiliser les dépôts
Centreon (paquets), pour installer votre plateforme**. Profitez ainsi de nos
travaux d'industrialisation de l'installation et de la mise à jour de
l'environnement. Profitez également des optimisations installées en standard par
le système.

L'installation de Centreon peut être effectuée à partir des sources (tar.gz)
mais le travail est plus complexe. De plus l'installation ne sera supportée que par
la communauté.

Avant toute installation :

1. Veillez à bien suivre les [prérequis
   d'installation](prerequisites.md) et de dimensionnement
   (ressources CPU, mémoire, disques, partitionnement, etc...)
2. Prenez également soin de bien choisir le [type
   d'architecture](architectures.md) qu'il convient d'utiliser pour vos besoins
3. [Téléchargez Centreon](https://download.centreon.com/)
4. Enfin, vous pourrez procéder à l'installation de la plateforme.

## Script "unattended"

Pour tester rapidement Centreon et installer un serveur central sur CentOS 7 ou AlmaLinux 8 / Oracle Linux 8 / RHEL 8, vous pouvez utiliser un script.

1. Mettez votre système à jour :

<Tabs groupId="sync">
<TabItem value=" RHEL 8" label="RHEL 8">

```shell
dnf update
subscription-manager register --username my_username --password my_password --auto-attach --force
subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms
```

> Remplacez **my_username** et **my_password** par les identifiants de votre compte RedHat.

</TabItem>
<TabItem value="Alma / Oracle Linux 8" label="Alma / Oracle Linux 8">

```shell
dnf update
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum update
```

</TabItem>
</Tabs>

2. Exécutez la commande suivante en **root** :

``` shell
curl -L https://raw.githubusercontent.com/centreon/centreon/master/unattended.sh | sh
```

3. Une fois le script exécuté, il vous suffit de suivre les étapes de l'[installation web](web-and-post-installation.md).
