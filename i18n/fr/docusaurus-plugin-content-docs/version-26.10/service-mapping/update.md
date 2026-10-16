---
id: update
title: Mettre à jour l'extension
description: "Mettre à jour le paquet et le module de l'extension Centreon BAM"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Mise à jour du paquet

Pour mettre à jour le module Centreon BAM, exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update centreon-bam-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf update centreon-bam-server
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt update && apt install --only-upgrade centreon-bam-server
```

</TabItem>
</Tabs>

## Mise à jour via l'interface

Connectez-vous à l'interface web de Centreon et allez dans **Administration > Extensions > Gestionnaire**.

Un bouton de mise à jour s'affiche lorsqu'une mise à jour est disponible. Cliquez dessus pour mettre à jour le module, puis faites de même pour le widget.
