---
id: poller-update-upgrade
title: Mettre à jour/monter de version un collecteur
description: "Comment mettre à jour ou monter de version un collecteur vers la dernière version à l'aide de la commande d'installation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **IMPORTANT** : [Mettre à jour l'OS de la machine hôte du collecteur](https://thewatch.centreon.com/product-how-to-21/os-updates-security-3136) relève de la responsabilité du client. D'autre part, Centreon fournit des mises à jour applicatives pour les collecteurs, mais il revient au client d'appliquer ces mises à jour sur leurs collecteurs.

Actuellement, il n'est pas nécessaire de monter de version les collecteurs en version 25.10. Mettez-les simplement à jour vers la dernière version mineure 25.10.

## Mettre à jour un collecteur vers la dernière version 25.10

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. Videz le cache :

  ```shell
  dnf clean all --enablerepo=*
  ```

2. Mettez à jour l'ensemble des composants :

  ```shell
  dnf update centreon\* --exclude=centreon-plugin*
  ```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. Videz le cache :

  ```shell
  dnf clean all --enablerepo=*
  ```

2. Mettez à jour l'ensemble des composants :

  ```shell
  dnf update centreon\* --exclude=centreon-plugin*
  ```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

1. Videz le cache :

  ```shell
  apt clean
  apt update
  ```

2. Mettez à jour l'ensemble des composants :

  ```shell
  apt-get update && apt-mark hold centreon-plugin* && apt-get install --only-upgrade 'centreon*' 
  ```

</TabItem>
</Tabs>

  > Acceptez les nouvelles clés GPG des dépôts si nécessaire.

3. Déployez la configuration du collecteur depuis l'interface web en suivant [cette
procédure](../monitoring/monitoring-servers/deploying-a-configuration.md), et
en choisissant la méthode **Redémarrer** pour le processus Engine.

4. Redémarrez enfin le service Gorgone s'il est utilisé sur le collecteur :

  ```shell
  systemctl restart centengine gorgoned
  ```

5. Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Rien à faire pour cet OS.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Rien à faire pour cet OS.

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

  ```shell
  apt-mark unhold centreon-plugin*
  ```

</TabItem>
</Tabs>