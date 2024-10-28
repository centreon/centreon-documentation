---
id: map-legacy-eol
title: Fin de vie de MAP Legacy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **MAP Legacy n'est plus disponible. À partir de la version 24.10,vous devez utiliser MAP.**

Cette page décrit quoi faire :

- si vous utilisiez toujours MAP Legacy et que vous souhaitez monter de version vers Centreon 24.10 sans perdre de données.
- si vous utilisiez toujours MAP Legacy et que vous êtes déjà montés de version vers Centreon 24.10, et que vous souhaitez passer à MAP sans perdre de données.
- si vous aviez déjà migré de MAP Legacy à MAP dans une version précédente (dans ce cas les fichiers MAP Legacy doivent être supprimés).

Si vous utilisiez toujours MAP Legacy, il est probable que vous n'ayez jamais installé MAP par le passé. Pour savoir si MAP est installé sur votre palteforme, exécutez la commande suivante :

```shell
rpm -q centreon-map-engine
```

Si vous aviez utilisé MAP par le passé, puis êtes retournés à MAP Legacy, sachez que migrer de MAP Legacy à MAP supprimera tout contenu créé dans MAP lorsque vous l'aviez utilisé à l'époque..

## J'utilisais toujours MAP Legacy et je n'ai pas encore monté de version vers la 24.10

* Faites une sauvegarde de vos données MAP legacy : sauvegardez tous les fichiers présents dans **/etc/centreon-studio** et faites un dump de la base de données MAP.
* [Montez de version votre plateforme Centreon en 24.10](../../upgrade/introduction).
* Si vous ne l'aviez jamais installé par le passé, [installez MAP](map-web-install.md). Si vous l'aviez déjà installé, [montez-le de version vers la 24.10](map-web-upgrade.md).
* [Montez MAP legacy de version vers la 24.10](upgrading-map-legacy.md).
* [Migrez de MAP Legacy à MAP](import-into-map-web.md) dans votre version actuelle. Cela inclut d'activer le nouveau module MAP et d'importer vos cartes legacy dans MAP.
* [Désinstallez MAP Legacy de votre plateforme Centreon](#how-to-fully-uninstall-map-legacy).

## J'utilisais toujours MAP Legacy et j'ai déjà monté de version ma platefrome et MAP Legacy et MAP vers la 24.10

* Faites une sauvegarde de vos données MAP legacy : sauvegardez tous les fichiers présents dans **/etc/centreon-studio** et faites un dump de la base de données MAP.
* [Migrez de MAP Legacy à MAP](import-into-map-web.md) dans votre version actuelle. Cela inclut d'activer le nouveau module MAP et d'importer vos cartes legacy dans MAP.
* [Désinstallez MAP Legacy de votre plateforme Centreon](#how-to-fully-uninstall-map-legacy).

## Je n'utilisais plus MAP Legacy mais il est toujours installé sur ma plateforme

Si vous aviez déjà migré vers MAP dans une version précédente de Centreon et que vous n'utilisiez plus MAP Legacy, [désinstallez MAP Legacy de votre plateforme Centreon 24.10](#how-to-fully-uninstall-map-legacy). En effet, certains fichiers legacy sont toujours présents et doivent être supprimés afin d'éviter tout problème lors d'une future montée de version.

## Comment désinstaller complètement MAP Legacy

> Il est obligatoire de désinstaller MAP Legacy de votre plateforme Centreon 24.10 afin d'éviter tout problème lors d'une future montée de version.

### Supprimer les paquets Legacy

Supprimez le paquet **centreon-map-server** du serveur sur lequel MAP Legacy était installé :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf remove centreon-map-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf remove centreon-map-server
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

```shell
apt remove centreon-map-server
```

</TabItem>
</Tabs>

### Procédures optionnelles

> Ces procédures de nettoyage vous permettront de travailler dans un environnement optimal. Si vous le souhaitez, vous pouvez faire une sauvegarde de vos données.

- Supprimez les fichiers de logs Legacy. (Si vous ne savez pas où les trouver, vérifiez le chemin d'accès dans ce fichier `/etc/centreon-studio/map-log.xml`. Le chemin par défaut est `/var/log/centreon-map/centreon-map.log`.)

  ```shell
  rm /var/log/centreon-map/centreon-map.log
  ```

- Supprimez les fichiers de configuration du serveur sur lequel MAP Legacy était installé :
  
  ```shell
  rm -rf /etc/centreon-studio
  ```

- Supprimez la base de données qui était utilisée par MAP Legacy :
  
  - Récupérez les informations pour vous connecter à la base de données dans ce fichier `/etc/centreon-studio/studio-database.properties`.

  - Entrez cette commande pour supprimer la base de données :

  ```shell
  mysql --host=$DB_HOST --port=$DB_PORT --user=$DB_USER --password $DB_NAME "DROP DATABASE centreon_studio;"
  ```
