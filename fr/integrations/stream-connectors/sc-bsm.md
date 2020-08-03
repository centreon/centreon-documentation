---
id: bsm
title: BSM
---

## Ce qu'apporte l'intégration de BSM + Centreon 

Le Stream Connector BSM envoie les données de **Centreon** vers le gestionnaire de service **Micro Focus BSM** (Business Service Management).

## Comment ça marche

* Chaque fois qu'un service ou un hôte est vérifié par le moteur de supervision, le résultat passe par *Centreon Broker*, qui utilise les fonctions définies dans le script du Stream Connector pour transmettre les changements d'état à BSM.

## Prérequis

* Pour pouvoir transmettre des données vers BSM, il faut avoir créé un webservice au préalable. Veuillez contacter votre expert BSM pour cette partie.
* L'intégration d'un Stream Connector nécessite un **compte Centreon avec des privilèges d'administrateur** ou bien les accès aux menus **Exporter la configuration** et **Configuration de Centreon Broker**.
* Un **accès `root` en ligne de commande sur le serveur Centreon central** est également requis.

## Support

Si vous avez besoin d'aide, vous pourrez en trouver via deux canaux, suivant votre statut :

* **Clients de Centreon titulaires d'un contrat de support** : vous pouvez vous adresser directement à [l'équipe du Support de Centreon](mailto:support@centreon.com).
* **Utilisateurs de l'édition Open Source** ou de **Centreon IT-100** (versions gratuites) : nous vous invitons à rejoindre notre [communauté sur Slack](https://centreon.github.io) où nos utilisateurs et nos équipes feront de leur mieux pour vous aider.

## Procédure d'intégration

### Installation

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
luarocks install luaxml
```

Ce paquet est nécessaire au bon fonctionnement du script LUA qu'il ne reste plus qu'à télécharger :

```bash
wget -O /usr/share/centreon-broker/lua/bsm_connector.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/bsm/bsm_connector.lua
chmod 644 /usr/share/centreon-broker/lua/bsm_connector.lua
```

Le Stream Connector BSM est maintenant installé sur votre serveur Centreon central !

### Configuration

#### Configuration de *Centreon Broker*

1. Se connecter à l'interface Web de Centreon avec un compte administrateur.
2. Naviguer vers **Configuration** > **Collecteurs** et choisir **Configuration de Centreon Broker**.
3. Cliquer sur l'objet de configuration **central-broker-master** et naviguer dans l'onglet **Output**.
4. Sélectionner **Generic - Stream connector** et cliquer sur **Ajouter** pour créer une nouvelle sortie.
5. Choisir son nom (**Name**) par exemple **BSM** et saisir l'emplacement (**Path**) où le script a été installé : `/usr/share/centreon-broker/lua/bsm_connector.lua`.
6. Le paramètre `http_server_url` est à personnaliser dans tous les cas :

| Name              | Type   | Value                                                             |
|-------------------|--------|-------------------------------------------------------------------|
| `http_server_url` | String | `https://<my.bsm.server>:30005/bsmc/rest/events/<my-webservice>/` |

7. Sauvegarder la configuration, puis naviguer vers le menu **Configuration** > **Collecteurs** et choisir **Collecteurs**.
8. Sélectionner le collecteur **Central** et cliquer sur **Exporter la configuration**.
9. Conserver les cases **Générer les fichiers de configuration** et **Lancer le débogage du moteur de supervision (-v)** et cocher également **Deplacer les fichiers générés** puis cliquer sur le bouton **Exporter**.
10. Redémarrer le service `cbd` :

```bash
systemctl restart cbd
```

Votre serveur central a maintenant chargé le Stream Connector et commence à envoyer des données vers BSM !

> Pour s'assurer que tout fonctionne bien, on consultera les fichiers `central-broker-master.log` et `stream-connector-bsm.log`, tous deux situés à l'emplacement `/var/log/centreon-broker` du serveur central.

#### Configuration avancée

**Tableau des paramètres**

| Name                | Type   | Value (exemple)                                                   | Explication                                                                                                            |
|---------------------|--------|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `http_server_url`   | String | `https://<my.bsm.server>:30005/bsmc/rest/events/<my-webservice>/` | URL de votre plateforme BSM                                                                                            |
| `http_proxy_string` | String | `http://your.proxy.server:3128`                                   | Paramétrage du proxy permettant de sortir vers Internet en HTTP/HTTPS                                                  |
| `source_ci`         | String | `Centreon` (valeur par défaut)                                    | Nom permettant d'identifier l'émetteur                                                                                 |
| `log_level`         | Number | 2 (valeur par défaut)                                             | Niveau de verbosité des logs 0: errors seulement, 1: +warnings, 2: +verbose, 3: +debug                                 |
| `log_path`          | String | `/var/log/centreon-broker/my-custom-logfile.log`                  | Chemin complet du fichier de log                                                                                       |
| `max_buffer_size`   | Number | 1 (valeur par défaut)                                             | Nombre maximum d'événements à stocker en mémoire tampon en attendant de les transmettre en un seul envoi               |
| `max_buffer_age`    | Number | 5 (valeur par défaut)                                             | Temps d'attente maximum avant d'envoyer les événements en mémoire tampon si `max_buffer_size` n'est pas encore atteint |

**Remarques**

* La valeur par défaut de 2 pour le paramètre `log_level` est adaptée à la mise en place et au *troubleshooting* initial éventuel, cela peut cependant générer un volume important de logs. Il est donc recommandé, une fois la mise en place validée, de l'abaisser à 1.
* La valeur par défaut de 1 pour le paramètre `max_buffer_size` fonctionne bien et garantit une latence réduite au minimum entre l'apparition d'une alerte et sa transmission à BSM. Il pourrait s'avérer utile de l'augmenter dans le cas où le flux à transmettre comporterait en continu plusieurs événements par seconde et au-delà. 

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
rm -f /usr/share/centreon-broker/lua/bsm_connector.lua
```

