---
id: servicenow-mid-server
title: ServiceNow MID Server
---

## Ce qu'apporte l'intégration de ServiceNow MID Server + Centreon 

## Comment ça marche

* À chaque fois qu'un service ou hôte est vérifié, l'évènement est traité par Centreon Broker qui charge le Stream Connector pour envoyer les changements d'états.
* Un changement d'état peut se produire en cas de changement de statut ou d'une métrique qui dépasse les seuils définis

### Filtres

Plusieurs filtres ont été installé au niveau du Stream Connector ServiceNow MID Server Event :
* Seuls les changements de status des services et des hôtes sont traités
* Seuls les états HARD sont traités
* Si l'hôte ou le service est downtime, ou que les notifications sont désactivées, il n'est pas traité
* Les hôtes et services *PENDING* (sans statut) sont également ignorés 

### Format des données

Voici un exemple des données transmises via requête HTTP POST au format JSON contenant un statut d'hôte et un statut de service :

```json
[
  {
    "message_key": "24/0/1596634138",
    "type": "HOST",
    "resource": "HOST",
    "metric_name": "HOST",
    "severity": 0,
    "source_instance": "Centreon central server",
    "description": "OK: dummy\n",
    "time_of_event": "2020-08-05T13:30:55.000",
    "source": "Centreon",
    "node": "test-host_10",
    "additional_info": {
      "host_groups": [
        "Test-Machines",
        "Serveurs-Linux",
        "gold"
      ]
    }
  },
  {
    "message_key": "24/93/1595260330",
    "type": "test-svc",
    "resource": "test-svc",
    "metric_name": "test-svc",
    "severity": 2,
    "source_instance": "Centreon central server",
    "description": "CRITICAL: sample output\n",
    "time_of_event": "2020-08-06T08:26:13.000",
    "source": "Centreon",
    "node": "test-host_10",
    "additional_info": {
      "host_groups": [
        "Test-Machines",
        "Serveurs-Linux",
        "gold"
      ],
      "service_groups": [
        "Groupe-de-Services",
        "Autre-groupe-de-services"
      ]
    }
  }
]
```

## Prérequis

* L'intégration dans ServiceNow MID Server nécessite que vous ayez un accès de l'un des deux types suivants :
    * compte disposant du privilège `evt_mgmt_admin` pour être en mesure d'appliquer la procédure [Configurer la collecte d'événements MID WebService](https://docs.servicenow.com/bundle/newyork-it-operations-management/page/product/event-management/task/configure-em-context-extension.html#event-collection-extension). 
    * compte autorisé à se connecter à l'API JSONv2, dont l'URL doit se terminer comme dans cet exemple : `http://{MID_Server_IP}:{MID_Web_Server_Port}/api/mid/em/jsonv2`.
* Il est également nécessaire d'avoir un **compte Centreon avec des privilèges d'administrateur** ou bien les accès aux menus **Exporter la configuration** et **Configuration de Centreon Broker**, de même qu'un **accès `root` en ligne de commande**.

## Support

Si vous avez besoin d'aide, vous pourrez en trouver via deux canaux, suivant votre statut :

* **Clients de Centreon titulaires d'un contrat de support** : vous pouvez vous adresser directement à [l'équipe du Support de Centreon](mailto:support@centreon.com).
* **Utilisateurs de l'édition Open Source** ou de **Centreon IT-100** (versions gratuites): nous vous invitons à rejoindre notre [communauté sur Slack](https://centreon.github.io) où nos utilisateurs et nos équipes feront de leur mieux pour vous aider.

## Procédure d'intégration

### Dans ServiceNow MID Server

Il sera nécessaire de [configurer un Webservice collecteur d'événements dans ServiceNow MID Server](https://docs.servicenow.com/bundle/newyork-it-operations-management/page/product/event-management/task/configure-em-context-extension.html).

### Dans Centreon

#### Installation 

Se connecter en tant que `root` au serveur central Centreon avec votre client SSH favori.

Dans le cas où votre serveur doit passer par un proxy pour accéder à Internet, il faudra exporter la variable d'environnement `https_proxy` et configurer `yum` pour être en mesure d'installer toutes les dépendances.

```bash
export https_proxy=http://my.proxy.server:3128
echo "proxy=http://my.proxy.server:3128" >> /etc/yum.conf
```

Maintenant que le serveur peut accéder à Internet, lancer les commandes :

```bash
yum install -y lua-curl epel-release
yum install -y luarocks
luarocks install luatz
```

Ces paquets sont nécessaires au bon fonctionnement du script LUA qu'il ne reste plus qu'à télécharger :

```bash
wget -O /usr/share/centreon-broker/lua/servicenow-mid-server.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/servicenow/servicenow-mid-server.lua
chmod 644 /usr/share/centreon-broker/lua/servicenow-mid-server.lua
```

Le Stream Connector ServiceNow MID Server Events est maintenant installé sur votre serveur Centreon central !

#### Configuration de *Centreon Broker*

1. Se connecter à l'interface Web de Centreon avec un compte administrateur.
2. Naviguer vers **Configuration** > **Collecteurs** et choisir **Configuration de Centreon Broker**.
3. Cliquer sur l'objet de configuration **central-broker-master** et naviguer dans l'onglet **Output**.
4. Sélectionner **Generic - Stream connector** et cliquer sur **Ajouter** pour créer une nouvelle sortie.
5. Choisir son nom (**Name**) par exemple **ServiceNow** et saisir l'emplacement (**Path**) où le script a été installé : `/usr/share/centreon-broker/lua/servicenow-mid-server.lua`.
6. Renseigner au minimum ces 3 champs:

| Name               | Type   | Value                                                                                    |
|--------------------|--------|------------------------------------------------------------------------------------------|
| `MID_Servers_List` | String | Liste des MID Servers séparés par des virgules (ex. : `http://srv1:80,https://srv2:443`) |
| `MID_Login`        | String | Login pour l'authentification "basic" auprès de l'API JSONv2 du MID Server               |
| `MID_Password`     | String | Mot de passe pour l'authentification "basic" auprès de l'API JSONv2 du MID Server        |

7. Sauvegarder la configuration, puis naviguer vers le menu **Configuration** > **Collecteurs** et choisir **Collecteurs**.
8. Sélectionner le collecteur **Central** et cliquer sur **Exporter la configuration**.
9. Conserver les cases **Générer les fichiers de configuration** et **Lancer le débogage du moteur de supervision (-v)** et cocher également **Deplacer les fichiers générés** puis cliquer sur le bouton **Exporter**.
10. Redémarrer le service `cbd` 

```bash
systemctl restart cbd
```

Votre serveur central a maintenant chargé le Stream Connector et commence à envoyer des données vers ServiceNow MID Server !

> Pour s'assurer que tout fonctionne bien, on consultera les fichiers `central-broker-master.log` et `stream-connector-snow-mid-server.log`, tous deux situés à l'emplacement `/var/log/centreon-broker` du serveur central.

#### Configuration avancée

**Tableau des paramètres**

| Name                | Type   | Value example                                    | Explanation                                                                                                            |
|---------------------|--------|--------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `http_proxy_string` | String | `http://your.proxy.server:3128`                  | Paramétrage du proxy permettant de sortir vers Internet en HTTP/HTTPS                                                  |
| `log_level`         | Number | 2 (default value)                                | Niveau de verbosité des logs 0: errors seulement, 1: +warnings, 2: +verbose, 3: +debug                                 |
| `log_path`          | String | `/var/log/centreon-broker/my-custom-logfile.log` | Chemin complet du fichier de log                                                                                       |
| `max_buffer_size`   | Number | 1 (default value)                                | Nombre maximum d'événements à stocker en mémoire tampon en attendant de les transmettre en un seul envoi               |
| `max_buffer_age`    | Number | 5 (default value)                                | Temps d'attente maximum avant d'envoyer les événements en mémoire tampon si `max_buffer_size` n'est pas encore atteint |

**Remarques**

* La valeur par défaut de 2 pour le paramètre `log_level` est adaptée à la mise en place et au *troubleshooting* initial éventuel, cela peut cependant générer un volume important de logs. Il est donc recommandé, une fois la mise en place validée, de l'abaisser à 1.
* La valeur par défaut de 1 pour le paramètre `max_buffer_size` fonctionne bien et garantit une latence réduite au minimum entre l'apparition d'une alerte et sa transmission à ServiceNow MID Server. Il pourrait s'avérer utile de l'augmenter dans le cas où le flux à transmettre comporterait en continu plusieurs événements par seconde.

---------------

## Désinstallation

1. Se connecter à l'interface Web de Centreon avec un compte administrateur.
2. Naviguer vers **Configuration** > **Collecteurs** et choisir **Configuration de Centreon Broker**.
3. Cliquer sur l'objet de configuration **central-broker-master** et naviguer dans l'onglet **Output**.
4. Supprimer la sortie **Generic - Stream connector** en cliquant sur la croix rouge entourée d'un cercle à la fin de la ligne.
5. Sauvegarder la configuration, puis naviguer vers le menu **Configuration** > **Collecteurs** et choisir **Collecteurs**.
6. Sélectionner le collecteur **Central** et cliquer sur **Exporter la configuration**.
7. Conserver les cases **Générer les fichiers de configuration** et **Lancer le débogage du moteur de supervision (-v)** et cocher également **Deplacer les fichiers générés** puis cliquer sur le bouton **Exporter**.
8. Redémarrer le service `cbd` :

```bash
systemctl restart cbd
```

Le Stream Connector n'est plus chargé par `centreon-broker`.

9. Ce n'est pas nécessaire, mais vous pouvez également supprimer le script pour désinstaller complètement le Stream Connector :

```bash
rm -f /usr/share/centreon-broker/lua/servicenow-mid-server.lua
```
