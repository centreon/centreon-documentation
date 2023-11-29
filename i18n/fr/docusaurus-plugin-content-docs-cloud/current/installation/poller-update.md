---
id: poller-update
title: Mettre à jour un collecteur
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette procédure décrit la mise à jour d'un collecteur d'une version mineure à une autre (c'est-à-dire par exemple le passage de 23.10.x à 23.10.y).

## Mettre à jour un collecteur

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
<TabItem value="Debian 11" label="Debian 11">

1. Videz le cache :

  ```shell
  apt clean all
  apt update
  ```

2. Mettez à jour l'ensemble des composants :

  ```shell
  apt upgrade centreon\* --exclude=centreon-plugin*
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
