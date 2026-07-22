---
id: map-web-change-port
title: Changer le port du serveur Centreon MAP
description: Modifier le port par défaut utilisé par le serveur Centreon MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Des erreurs de modification de fichiers de configuration peuvent entraîner des dysfonctionnements du logiciel. Nous vous recommandons de faire une sauvegarde du fichier avant de le modifier et de ne changer que les paramètres conseillés par Centreon.

Par défaut, le serveur Centreon MAP écoute et envoie des informations via le port 8080.
Si vous avez configuré le SSL (voir [Configuration HTTPS/TLS](secure-your-map-platform.md#configurer-httpstls-sur-le-serveur-map)), utilisez le port 8443.

Vous pouvez modifier ce port (par exemple, si un pare-feu sur votre réseau le bloque).

Sur votre serveur Centreon MAP, arrêtez le service centreon-map :

```shell
systemctl stop centreon-map
```

Modifiez le fichier de paramètres **map-config.properties** situé dans **/etc/centreon-map** :

```shell
vi /etc/centreon-map/map-config.properties
```

Ajoutez la ligne suivante à la section MAP SERVER :

```text
centreon-map.port=XXXX
```

> Remplacez *XXXX* par le port que vous souhaitez.

Redémarrez ensuite le serveur MAP de Centreon :

```shell
systemctl start centreon-map
```

Attendez que le service Centreon MAP ait fini de démarrer (~30 secondes à une minute).

Vérifiez que votre serveur est opérationnel et accessible sur le nouveau port que vous avez défini, en entrant l'URL suivante dans votre navigateur web :

<Tabs groupId="sync">
<TabItem value="HTTP" label="HTTP">

```shell
http://<MAP_IP>:<8080>/centreon-map/api/latest/actuator/health
```

</TabItem>
<TabItem value="HTTPS" label="HTTPS">

```shell
https://<MAP_IP>:<8443>/centreon-map/api/latest/actuator/health
```

</TabItem>
</Tabs>
