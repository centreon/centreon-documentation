---
id: pagerduty
title: PagerDuty
---

## Ce qu'apporte l'intégration de PagerDuty + Centreon 

* Notification du personnel en astreinte quand une alerte est détectée par Centreon.
* Résolution automatique des incidents dans PagerDuty lorsque leur statut redevient normal.
* Génère des incidents de haute et basse priorité en fonction du statut de l'alerte dans Centreon.
* Transmet à PagerDuty les métriques associées à l'alerte pour une meilleure compréhension de la situation.

## Comment ça marche

* Chaque fois qu'un service ou un hôte est vérifié par le moteur de supervision, le résultat passe par *Centreon Broker*, qui charge le script du Stream Connector pour transmettre les changements d'état.
* Ces changements d'états peuvent être dûs à la détection d'une situation anormale comme la perte d'un hôte, ou bien une métrique qui dépasse les seuils prévus.
* Une fois que l'indicateur revient à la normale, un événement de type résolution est envoyé à PagerDuty pour terminer l'incident.

## Prérequis

* L'intégration avec PagerDuty nécessite de disposer d'un accès ayant le rôle Admin pour pouvoir donner des permissions à un compte. Si vous n'en disposez pas, veuillez vous adresser à une personne ayant un tel rôle dans votre organisation pour configurer l'intégration de PagerDuty avec Centreon.
* Il est également nécessaire d'avoir un **compte Centreon avec des privilèges d'administrateur** ou bien les accès aux menus **Exporter la configuration** et **Configuration de Centreon Broker**, de même qu'un **accès `root` en ligne de commande**.

## Support

si vous avez besoin d'aide, vous pourrez en trouver via deux canaux, suivant votre statut :

* **Clients de Centreon titulaires d'un contrat de support** : vous pouvez vous adresser directement à [l'équipe du Support de Centreon](mailto:support@centreon.com).
* **Utilisateurs de l'édition Open Source** ou de **Centreon IT-100** (versions gratuites): nous vous invitons à rejoindre notre [communauté sur Slack](https://centreon.github.io) où nos utilisateurs et nos équipes feront de leur mieux pour vous aider.

## Procédure d'intégration

### Dans PagerDuty

Il y a deux façons de s'intégrer avec PagerDuty, via *Global Event Routing* ou via un service PagerDuty.

Si vous ajoutez cette intégration à un service PagerDuty existant, vous pouvez passer directement à [cette section](#int%C3%A9gration-%C3%A0-un-service-pagerduty)

#### Intégration via *Global Event Routing*

L'intégration via *Global Event Routing* permet de router les alertes vers des services spécifiques en fonction du contenu de l'événement. Pour en savoir plus, vous pouvez consulter [cet article](https://community.pagerduty.com/forum/t/service-configuration-guide/1660).

1. Dans le menu de configuration, sélectionner **Event Rules**.
2. Une fois dans la page des des *Event Rules*, **cliquer sur la flèche** à côté de *Incoming Event Source* pour afficher les informations relatives à la clé d'intégration. **Copier cette clé**. Elle servira également pour tous les autres outils que vous intégrerez via les *Event rules*. Une fois la configuration dans Centreon terminée, vous reviendrez à cette interface pour choisir comment vous souhaitez router les événements de Centreon vers vos services dans PagerDuty.

![](https://pdpartner.s3.amazonaws.com/ig-template-incoming-event-source-key.png)

#### Intégration à un service PagerDuty

1. Dans le menu **Configuration**, sélectionner **Services**.
2. Il y a deux façons d'ajouter une intégration à un service :
   * **Si vous ajoutez une intégration à un service existant** : Cliquer sur le **nom** du service auquel vous voulez ajouter une intégration, sélectionner l'onglet **Intégrations** et cliquer sur le bouton **New Integration**.
   * **Si vous créez un nouveau service pour cette intégration** : Veuillez lire la documentation dans la section [Configuring Services and Integrations](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) et suivre les étapes suggérées dans la partie de la documentation qui concerne la [création d'un nouveau service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) en sélectionnant **Centreon** dans **Integration Type** à l'étape 4. Poursuivre en passant à la section "[Dans Centreon](#dans-centreon)" quand vous aurez passé ces étapes.
3. Saisir un **Integration Name** en choisissant un nom de la forme `monitoring-tool-service-name` (par exemple `Centreon-Shopping-Cart`) et sélectionner **Centreon** dans le menu **Integration Type**.
4. Cliquer sur le bouton **Add Integration** pour sauvegarder la nouvelle intégration. Vous serez alors redirigé vers l'onglet d'intégration de votre service.
5. Une clé d'intégration (**Integration Key**) sera générée dans cette page. Conserver cette clé en lieu sûr, elle sera utilisée pour configurer Centreon dans la section suivante.

![](https://pdpartner.s3.amazonaws.com/ig-template-copy-integration-key.png)

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
wget -O /usr/share/centreon-broker/lua/pagerduty.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/master/pagerduty/pagerduty.lua
chmod 644 /usr/share/centreon-broker/lua/pagerduty.lua
```

Le Stream Connector PagerDuty est maintenant installé sur votre serveur Centreon central !

#### Configuration de *Centreon Broker*

1. Se connecter à l'interface Web de Centreon avec un compte administrateur.
2. Naviguer vers **Configuration** > **Collecteurs** et choisir **Configuration de Centreon Broker**.
3. Cliquer sur l'objet de configuration **central-broker-master** et naviguer dans l'onglet **Output**.
4. Sélectionner **Generic - Stream connector** et cliquer sur **Ajouter** pour créer une nouvelle sortie.
5. Choisir son nom (**Name**) par exemple **PagerDuty** et saisir l'emplacement (**Path**) où le script a été installé : `/usr/share/centreon-broker/lua/pagerduty.lua`.
6. Le paramètre `pdy_routing_key` est à personnaliser dans tous les cas :

| Name              | Type   | Value                           |
| ----------------- | ------ | ------------------------------- |
| `pdy_routing_key` | String | `<coller la clé d'intégration>` |

7. Sauvegarder la configuration, puis naviguer vers le menu **Configuration** > **Collecteurs** et choisir **Collecteurs**.
8. Sélectionner le collecteur **Central** et cliquer sur **Exporter la configuration**.
9. Conserver les cases **Générer les fichiers de configuration** et **Lancer le débogage du moteur de supervision (-v)** et cocher également **Deplacer les fichiers générés** puis cliquer sur le bouton **Exporter**.
10. Redémarrer le service `cbd` :

```bash
systemctl restart cbd
```

Votre serveur central a maintenant chargé le Stream Connector et commence à envoyer des données vers PagerDuty.

Pour s'assurer que tout fonctionne bien, on consultera les fichiers `central-broker-master.log` et `stream-connector-pagerduty.log`, tous deux situés à l'emplacement `/var/log/centreon-broker` du serveur central.

#### Configuration avancée

**Tableau des paramètres**

| Name                | Type   | Value (exemple)                                  | Explication                                                                                                            |
| ------------------- | ------ | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `http_proxy_string` | String | `http://your.proxy.server:3128`                  | Paramétrage du proxy permettant de sortir vers Internet en HTTP/HTTPS                                                  |
| `pdy_centreon_url`  | String | `http://your.centreon.server`                    | URL du serveur Centreon                                                                                                |
| `log_level`         | Number | 2 (valeur par défaut)                            | Niveau de verbosité des logs 0: errors seulement, 1: +warnings, 2: +verbose, 3: +debug                                 |
| `log_path`          | String | `/var/log/centreon-broker/my-custom-logfile.log` | Chemin complet du fichier de log                                                                                       |
| `max_buffer_size`   | Number | 1 (valeur par défaut)                            | Nombre maximum d'événements à stocker en mémoire tampon en attendant de les transmettre en un seul envoi               |
| `max_buffer_age`    | Number | 5 (valeur par défaut)                            | Temps d'attente maximum avant d'envoyer les événements en mémoire tampon si `max_buffer_size` n'est pas encore atteint |

**Remarques**

* La valeur par défaut de 2 pour le paramètre `log_level` est adaptée à la mise en place et au *troubleshooting* initial éventuel, cela peut cependant générer un volume important de logs. Il est donc recommandé, une fois la mise en place validée, de l'abaisser à 1.
* La valeur par défaut de 1 pour le paramètre `max_buffer_size` fonctionne bien et garantit une latence réduite au minimum entre l'apparition d'une alerte et sa transmission à PagerDuty. Il pourrait s'avérer utile de l'augmenter dans le cas où le flux à transmettre comporterait en continu plusieurs événements par seconde et au-delà. 

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
rm -f /usr/share/centreon-broker/lua/pagerduty.lua
```

