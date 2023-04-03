---
id: update
title: Mise à jour de l'extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

La mise à jour de Centreon MBI se fait en 2 étapes :

- La mise à jour de Centreon MBI server (interface)
- La mise à jour du serveur de reporting

## Mettre à jour l'interface

1. Mettre à jour le paquet: se connecter sur le serveur Centreon et exécuter la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum clean all
yum update centreon-bi-server
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt clean all
apt update centreon-bi-server
```

</TabItem>
</Tabs>

2. Mettre à jour l'interface: Se connecter à l'interface web de Centreon et se rendre dans le menu
 **Administration > Extension > Manager** puis cliquer sur le bouton de mise à jour de l'extension et des widgets.

## Mettre à jour le serveur de reporting

Premièrement, arrêtez le service d'ordonnancement (CBIS):

```shell
systemctl stop cbis
```

Puis mettre à jour les paquets, en exécutant la commande suivante:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum clean all
yum update centreon-bi\*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt clean all
apt update centreon-bi\*
```

</TabItem>
</Tabs>

Enfin, redémarrer le service d'ordonnancement:

```shell
systemctl start cbis
```