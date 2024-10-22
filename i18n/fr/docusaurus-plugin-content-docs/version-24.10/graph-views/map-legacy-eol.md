---
id: map-legacy-eol
title: Fin de vie de MAP Legacy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **MAP Legacy n'est plus disponible à partir de la version 24.10, vous devez utiliser MAP.**

Cette page décrit les étapes à suivre concernant MAP Legacy une fois que vous avez migré vers la version disponible de MAP.

## Comment désinstaller complètement MAP Legacy

Étant donné que MAP Legacy n'est plus livré, vous devez le désinstaller complètement en suivant les instructions ci-dessous.

> Il est impératif d'effectuer ces étapes sans tarder, car vous risquez de rencontrer des problèmes lors de la mise à jour vers les versions postérieures.

### Migrer vers Centreon MAP

> MAP Legacy doit être désinstallé après la migration vers MAP.

Assurez-vous que vous utilisez la [bonne version de MAP](https://docs.centreon.com/fr/docs/graph-views/introduction-map/). Utilisez la procédure de [migration vers Centreon MAP](https://docs.centreon.com/fr/docs/graph-views/import-into-map-web/) si nécessaire.

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

- Supprimez les fichiers de configuration du serveur sur lequel MAP Legacy était installé :
  
  ```shell
  rm -rf /etc/centreon-studio
  ```

- Supprimez les fichiers de logs Legacy :
  
  > Vous pouvez vérifier le chemin d'accès à l'aide de cette commande `/etc/centreon/studio/centreon-map.log`

  ```shell
  rm centreon-map.log
  ```

- Supprimez la base de données qui était utilisée par MAP Legacy :
  
  > Vous pouvez vérifier le service et la base de données à l'aide de cette commande `/etc/centreon/studio/studio-database.properties`

  ```shell
  DROP DATABASE centreon_studio;
  ```
 
