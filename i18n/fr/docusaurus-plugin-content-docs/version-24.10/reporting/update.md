---
id: update
title: Mise à jour de l'extension
description: "Mettre à jour l'interface et le serveur de reporting de Centreon MBI"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

La mise à jour de Centreon MBI se fait en 2 étapes :

- La mise à jour de Centreon MBI server (interface)
- La mise à jour du serveur de reporting

## Mettre à jour l'interface

> Veuillez vous assurer que le processus ETL est bien terminé avant de procéder à la mise à jour de l'extension.

1. Mettre à jour le paquet: se connecter sur le serveur Centreon et exécuter la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt clean
apt --only-upgrade install centreon-bi\*
```

</TabItem>
</Tabs>

2. Mettre à jour l'interface: Se connecter à l'interface web de Centreon et se rendre dans le menu
 **Administration > Extension > Manager** puis cliquer sur le bouton de mise à jour de l'extension et des widgets.

## Mettre à jour le serveur de reporting

Premièrement, arrêtez le service d'ordonnancement **CBIS** :

```shell
systemctl stop cbis
```

Ensuite arrêtez **gorgoned** :

```shell
systemctl stop gorgoned
```

Puis mettre à jour les paquets, en exécutant la commande suivante:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt clean
apt --only-upgrade install centreon-bi\*
```

</TabItem>
</Tabs>

Vous devez également mettre à jour Centreon Gorgone :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update centreon-gorgone\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update centreon-gorgone\*
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt --only-upgrade install centreon-gorgone\*
```

</TabItem>
</Tabs>

Enfin, redémarrez le service d'ordonnancement **CBIS** :

```shell
systemctl start cbis
```

Ainsi que **gorgoned** :

```shell
systemctl start gorgoned
```

MBI est maintenant à jour.

> Suivez cette procédure si [vous obtenez une erreur due à un problème de mise à jour de colonne](../resources/known-issues.md#vous-obtenez-des-erreurs-lors-de-limport-journalier-et-calcul-des-statistiques) dans la base de données.
