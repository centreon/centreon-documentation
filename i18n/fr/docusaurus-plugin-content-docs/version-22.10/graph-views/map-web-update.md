---
id: map-web-update
title: Mettre à jour MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Suivez cette procédure pour mettre à jour la version de MAP :

1. Arrêtez le service **centreon-map-engine** en exécutant la commande suivante sur la machine hébergeant le service Centreon MAP :
 
  ```shell
  sudo systemctl stop centreon-map-engine
  ```

2. Mettez à jour les paquets en exécutant la commande suivante sur la ou les machines hébergeant le service du central et le service Centreon MAP :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
sudo dnf update centreon-map-engine centreon-map-web-client
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

``` shell
sudo yum update centreon-map-engine centreon-map-web-client
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

``` shell
sudo apt update centreon-map-engine centreon-map-web-client
```

</TabItem>
</Tabs>

3. Videz le cache de votre navigateur.

4. Redémarrez le service **centreon-map-engine** en exécutant la commande suivante :
 
  ```shell
  sudo systemctl start centreon-map-engine
  ```
