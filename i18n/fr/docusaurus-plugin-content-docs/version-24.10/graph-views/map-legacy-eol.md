---
id: map-legacy-eol
title: Fin de vie de MAP Legacy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> **MAP Legacy n'est plus disponible. À partir de la version 24.10, vous devez utiliser MAP.**

Cette page décrit les étapes à suivre concernant MAP Legacy une fois que vous avez migré vers la version disponible de MAP.

## Comment désinstaller complètement MAP Legacy

Étant donné que MAP Legacy n'est plus livré, vous devez le désinstaller complètement en suivant les instructions ci-dessous.

> Il est impératif d'effectuer ces étapes sans tarder, car vous risquez de rencontrer des problèmes lors de la mise à jour vers les versions postérieures.

### Migrer vers Centreon MAP

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

- Supprimez les fichiers de logs Legacy :
  
  > Vous pouvez vérifier le chemin d'accès dans ce fichier `/etc/centreon-studio/map-log.xml` . Il doit être par défaut `/var/log/centreon-map/centreon-map.log`.

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
 