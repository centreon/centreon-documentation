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

Avant d'installer Centreon :

1. Vérifiez la [compatibilité](compatibility.md) (OS supportés, SGBD).
2. Choisissez [le type d'architecture](architectures.md) qui convient le mieux à vos besoins.
3. Vérifiez les [prérequis](prerequisites.md) (ressources CPU, mémoire, disques, partitionnement, etc...).
4. [Téléchargez Centreon](https://download.centreon.com/).
5. Enfin, vous pourrez procéder à l'installation de la plateforme.

## Script "unattended"

Pour tester rapidement Centreon et installer un serveur central sur AlmaLinux / Oracle Linux / RHEL 8 ou 9, vous pouvez utiliser un script.

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
<TabItem value="RHEL 9" label="RHEL 9">

```shell
dnf update
subscription-manager register --username my_username --password my_password --auto-attach --force
subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
```

</TabItem>
<TabItem value="Alma / Oracle Linux 9" label="Alma / Oracle Linux 9">

```shell
dnf update
```

</TabItem>

</Tabs>

2. Exécutez la commande suivante en **root** :

``` shell
curl -L https://download.centreon.com/23.04/unattended.sh | sh
```

Le script installera un serveur central avec la version 23.04, depuis le dépôt stable, avec une sortie minimale sur votre terminal.

En cas de problèmes à l'exécution du script, exécutez-le à nouveau en utilisant la commande suivante :

```shell
sh -x unattended.sh install -t central -v 23.04 -r stable -l DEBUG  2>&1 |tee -a /tmp/unattended-$(date +"%m-%d-%Y-%H%M%S").log
```

Vous obtiendrez un fichier de log complet avec toutes les erreurs dans votre répertoire tmp, fichier nommé unattended(date).log.

3. Une fois le script exécuté, il vous suffit de suivre les étapes de l'[installation web](web-and-post-installation.md).
