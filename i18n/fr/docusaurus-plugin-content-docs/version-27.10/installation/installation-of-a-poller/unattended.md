---
id: unattended-install-poller
title: Installation silencieuse d'un collecteur
description: "Installer rapidement un collecteur à l'aide d'un script d'installation silencieuse"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pour installer un collecteur rapidement, vous pouvez utiliser un script.

C'est utile lorsque vous devez installer plusieurs collecteurs avec des paramètres identiques, lorsque vous installez depuis un outil de déploiement ou une chaîne d'intégration continue, ou lorsque vous n'avez pas d'accès interactif à la machine cible.

Le script exécutera toutes les étapes de l'installation. Vous devrez ensuite [rattacher le collecteur au serveur central ou à un serveur distant](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md).

## Prérequis

1. Mettez votre système à jour :

   <Tabs groupId="os">
   <TabItem value="RHEL 9" label="RHEL 9">

   ```shell
   dnf update
   subscription-manager register --username my_username --password my_password --auto-attach --force
   subscription-manager repos --enable codeready-builder-for-rhel-9-x86_64-rpms
   ```

   Remplacez **my_username** et **my_password** par les identifiants de votre compte Red Hat.

   </TabItem>
   <TabItem value="Alma / Oracle Linux 9" label="Alma / Oracle Linux 9">

   ```shell
   dnf update
   ```

   </TabItem>
   <TabItem value="RHEL 10" label="RHEL 10">

   ```shell
   dnf update
   subscription-manager register --username my_username --password my_password --auto-attach --force
   subscription-manager repos --enable codeready-builder-for-rhel-10-x86_64-rpms
   ```

    Remplacez **my_username** et **my_password** par les identifiants de votre compte Red Hat.

   </TabItem>
   <TabItem value="Alma / Oracle Linux 10" label="Alma / Oracle Linux 10">

   ```shell
   dnf update
   ```

   </TabItem>
   <TabItem value="Debian 13" label="Debian 13">

   ```shell
   apt update && apt upgrade
   ```

   </TabItem>
   </Tabs>

2. Téléchargez le script :

   ```shell
   curl -L https://download.centreon.com/26.10/unattended.sh --output /tmp/unattended.sh
   ```

## Procédure d'installation

1. Exécutez la commande suivante en tant que **root** :

   ```shell
   bash /tmp/unattended.sh install -t poller -v 26.10 -r stable -l DEBUG  2>&1
   ```

   Le script écrit un journal complet, comprenant les éventuelles erreurs, dans `/var/log/centreon-unattended-<date>.log`.

2. Une fois le script exécuté, [rattachez le collecteur au serveur central ou à un serveur distant](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md).
