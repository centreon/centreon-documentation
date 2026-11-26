---
id: archived-repos
title: Dépôts des versions archivées
description: "Dépôts archivés de Centreon 22.04 à 24.04 sur EL ou Debian : mettez à jour une plateforme en fin de vie avant sa montée de version ou sa migration."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Lorsqu'une version de Centreon arrive en fin de vie, ses paquets sont déplacés vers les dépôts archivés, à l'adresse `https://packages.centreon.com/archives/`. Si votre plateforme utilise l'une de ces versions, utilisez les dépôts archivés pour :

* mettre à jour votre plateforme vers la dernière version mineure de sa version, avant de la monter de version ou de la migrer ;
* monter de version votre plateforme en passant par des versions intermédiaires.

Les versions suivantes sont disponibles dans les dépôts archivés : 22.04, 22.10, 23.04, 23.10 et 24.04.

> Les versions antérieures à 22.04 ne sont pas disponibles dans les dépôts archivés. Si votre plateforme utilise l'une de ces versions, [contactez le support Centreon](https://support.centreon.com/).

> Si vous utilisez des extensions Business, consultez le [portail du support](https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories) pour obtenir l'adresse du dépôt Business correspondant à votre version.

<Tabs groupId="sync">
<TabItem value="EL" label="EL">

Les fichiers de dépôt ont une URL au format suivant :

```text
https://packages.centreon.com/archives/repo-files/standard/rpm/<version>/<os>/centreon-<version>.repo
```

| Version de Centreon | OS supportés                                                     | Valeur de `<os>` |
| ------------------- | ---------------------------------------------------------------- | ---------------- |
| 22.04, 22.10        | CentOS 7, RHEL/Oracle Linux 7                                    | `el7`            |
|                     | RHEL/Oracle Linux/AlmaLinux 8                                    | `el8`            |
| 23.04, 23.10, 24.04 | RHEL/Oracle Linux/AlmaLinux 8                                    | `el8`            |
|                     | RHEL/Oracle Linux/AlmaLinux 9                                    | `el9`            |

Chaque fichier de dépôt pointe déjà vers la bonne clé GPG et inclut le dépôt des plugins.

Par exemple, pour ajouter le dépôt de Centreon 22.10 sur EL8 :

```shell
dnf config-manager --add-repo https://packages.centreon.com/archives/repo-files/standard/rpm/22.10/el8/centreon-22.10.repo
dnf clean all --enablerepo=*
```

Sur CentOS 7 et RHEL/Oracle Linux 7, utilisez `yum-config-manager` au lieu de `dnf config-manager`, et `yum` au lieu de `dnf`.

</TabItem>
<TabItem value="Debian" label="Debian">

> Debian n'était pas supporté dans les versions de Centreon antérieures à 22.04.

Les fichiers de dépôt ont une URL au format suivant :

```text
https://packages.centreon.com/archives/repo-files/standard/apt/<version>/<codename>/centreon-<version>.list
```

| Version de Centreon | OS disponibles (`<codename>`)              |
| ------------------- | ------------------------------------------ |
| 22.04               | Debian 11 (bullseye)                       |
| 22.10               | Debian 11 (bullseye)                       |
| 23.04               | Debian 11 (bullseye)                       |
| 23.10               | Debian 11 (bullseye)                       |
| 24.04               | Debian 11 (bullseye), Debian 12 (bookworm) |

Par exemple, pour ajouter le dépôt de Centreon 23.10 sur Debian 11 :

1. Téléchargez le fichier de dépôt dans le répertoire **/etc/apt/sources.list.d/** :

   ```shell
   wget -O /etc/apt/sources.list.d/centreon-23.10.list https://packages.centreon.com/archives/repo-files/standard/apt/23.10/bullseye/centreon-23.10.list
   ```

2. Téléchargez la clé des dépôts archivés :

   ```shell
   wget -O /usr/share/keyrings/centreon-archives.asc https://packages.centreon.com/archives/repo-files/apt/centreon-archives-apt.asc
   ```

3. À partir de Centreon 23.04, les dépôts archivés ne contiennent ni les plugins, ni certains paquets nécessaires à Centreon Gorgone. Ajoutez le dépôt actuel des plugins et importez sa clé :

   ```shell
   echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
   wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
   ```

4. Mettez à jour la liste des paquets :

   ```shell
   apt update
   ```

</TabItem>
</Tabs>
