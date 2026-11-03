---
id: upgrade
title: Monter de version l'extension
description: "Monter de version l'extension Centreon BAM et sa licence"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prérequis

### Monter de version Centreon web sur votre serveur central

Voir le [chapitre correspondant](../upgrade/introduction.md).

### Installer le dépôt Business

Lorsque vous montez vers une nouvelle version majeure ou mineure (c'est-à-dire version A.B.x avec A ou B qui
évolue), vous devez installer le nouveau dépôt Business. Vous pouvez trouver son adresse sur le [portail support](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).

### Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Si votre plateforme utilise encore une ancienne clé, suivez la [procédure de changement de clé](../security/key-rotation.md#installation-existante) afin de supprimer l'ancienne clé et d'installer la nouvelle.

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
