---
id: map-web-advanced-configuration
title: Configuration avancée dans MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre décrit les procédures avancées de configuration de votre système Centreon MAP.

## Superviser votre serveur Centreon MAP après installation

Centreon fournit un [connecteur de supervision et un plugin](/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map-engine-actuator) pour superviser votre serveur Centreon MAP.

### Configurer vos services

Accédez à votre interface Web Centreon. Allez à la page **Configuration > Hôtes > Hôtes**, puis cliquer sur **Ajouter**.

Remplissez les informations de base sur votre hôte et ajoutez les modèles d'hôte suivants :

- OS-Linux-SNMP-custom
- App-Jvm-actuator-custom

![image](../assets/graph-views/jvm1.png)
![image](../assets/graph-views/jvm2.png)

Pour surveiller la JVM centreon-map, veuillez utiliser les valeurs de macro suivantes :

| Nom                     | Valeur                                    |
| :---------------------- | :---------------------------------------- |
| ACTUATORCUSTOMMODE      | ```centreonmap```                         |
| ACTUATORAPIURLPATH      | ```/centreon-studio/api/beta```           |
| ACTUATORAPIUSERNAME     | Le nom d'utilisateur Api doit être défini |
| ACTUATORAPIPASSWORD     | Le mot de passe Api doit être défini      |

> N'oubliez pas de cocher la case "Créer aussi les services liés aux modèles".

Vous pouvez maintenant exporter votre configuration, et votre serveur Centreon MAP sera supervisé.

![image](../assets/graph-views/jvm3.png)

Vous pouvez également vérifier l'URL suivante, qui indique si le serveur est opérationnel ou non :

<Tabs groupId="sync">
<TabItem value="HTTP" label="HTTP">

```shell
http://<MAP_IP>:8080/centreon-studio/api/beta/actuator/health.
```

</TabItem>
<TabItem value="HTTPS" label="HTTPS">

```shell
https://<MAP_IP>:8443/centreon-studio/api/beta/actuator/health.
```

</TabItem>
</Tabs>

### Sauvegarder le serveur Centreon MAP

### Éléments sauvegardés

Les éléments sauvegardés sont :

- Les fichiers de configuration (**/etc/centreon-studio**).
- La base de données (**centreon\_studio**)

### Comment ça marche ?

Le script de sauvegarde est exécuté quotidiennement (2 heures du matin) avec une tâche cron située dans **/etc/cron.d/centreon-map-server-backup** :

```text
#
# Cron to backup Centreon MAP server
#
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# rewrite file with new cron line
CRONTAB_EXEC_USER=""

0 2 * * * root bash /usr/share/centreon-map-server/bin/centreon-map-server-backup.sh >> /var/log/centreon-studio/backup.log 2>&1
```

La sauvegarde **centreon-map-server-yyyy-mm-dd.tar.gz** est stockée dans **BACKUP\_DIR**, qui est défini dans le fichier de configuration.

### Paramètres de sauvegarde

Les paramètres de sauvegarde sont enregistrés dans **/etc/centreon-studio/backup.conf**.

- ENABLE : activer/désactiver le mécanisme de sauvegarde (valeur par défaut : 0)
- BACKUP\_DIR : emplacement où la sauvegarde est stockée (valeur par défaut : **/var/backup**)
- RETENTION\_AGE : rétention de la sauvegarde en jours (valeur par défaut : 8)

> Nous conseillons d'exporter les sauvegardes vers un autre serveur que votre serveur Centreon afin de les sécuriser.

### Restaurer les données du serveur Centreon MAP

Le processus de restauration est divisé en plusieurs étapes :

- Extraction de la sauvegarde
- Restauration des fichiers de configuration
- Restauration de la base de données

> Nous supposons que vous avez suivi la procédure d'installation du serveur Centreon MAP pour obtenir une nouvelle installation.

### Extraire la sauvegarde

Récupérez la dernière sauvegarde **centreon-map-server-yyyy-mm-dd.tar.gz** et extrayez-la dans le répertoire **/tmp** :

```shell
cd /tmp
tar xzf centreon-map-server-yyyy-mm-dd.tar.gz
```

### Restaurer les fichiers de configuration

Pour restaurer les fichiers de configuration, exécutez la commande suivante :

```shell
cp -R etc/centreon-studio/* /etc/centreon-studio/
```

### Restaurer la base de données

Pour restaurer la base de données **centreon\_studio**, exécutez la commande suivante :

```shell
systemctl stop centreon-map
mysql -h <db_host> -u <db_user> -p<db_password> <db_name> < centreon-map-server.dump
systemctl start centreon-map
```

## Changer le port du serveur Centreon MAP

> Des erreurs de modification de fichiers de configuration peuvent entraîner des dysfonctionnements du logiciel. Nous vous recommandons de faire une sauvegarde du fichier avant de le modifier et de ne changer que les paramètres conseillés par Centreon.

Par défaut, le serveur Centreon MAP écoute et envoie des informations via le port 8080. 
Si vous avez configuré le SSL (voir [Configuration HTTPS/TLS](secure-your-map-platform.md#configure-httpstls-on-the-web-server)), utilisez le port 8443.

Vous pouvez modifier ce port (par exemple, si un pare-feu sur votre réseau bloque ces ports).

> Si le nouveau port est inférieur à 1024, utilisez plutôt la procédure ci-dessous "Définir un port inférieur à 1024".

Sur votre serveur Centreon MAP, arrêtez le serveur Centreon MAP :

```shell
systemctl stop centreon-map
```

Modifiez le fichier de paramètres **studio-config.properties** situé dans **/etc/centreon-studio** :

```shell
vi /etc/centreon-studio/studio-config.properties
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

```shell
http://<MAP_IP>:<NEW_PORT>/centreon-studio/api/beta/actuator/health
```
