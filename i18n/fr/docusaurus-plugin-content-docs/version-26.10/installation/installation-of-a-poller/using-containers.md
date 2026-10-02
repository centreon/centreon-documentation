---
id: using-containers
title: Installer un collecteur dans un conteneur
description: "Installer un collecteur Centreon à l'aide de docker-compose"
---

> La méthode de déploiement de collecteurs en conteneur est actuellement en **BÊTA**.

Une commande d'installation prête à l'emploi et adaptée à votre plateforme est disponible depuis l'interface du serveur central.

<details>
<summary>Contenu des conteneurs</summary>

Les collecteurs en conteneur utilisent Debian 13.

Plutôt qu'un seul conteneur monolithique, chaque composant du collecteur s'exécute dans son
propre conteneur (Centreon Engine, Gorgone et, en option, la gestion des traps SNMP et la
supervision VMware), le tout orchestré par un unique fichier `docker-compose.yaml`.

Cette méthode de déploiement repose sur une commande d'installation générée, qui télécharge
puis exécute un script d'installation sur l'hôte des conteneurs. Le script génère pour vous les
fichiers `.env` et `docker-compose.yaml`, puis démarre l'ensemble des services.

> Voir [Utilisateurs et groupes](https://docs.centreon.com/docs/installation/technical/) pour connaître les
> utilisateurs système (`centreon-engine`, `centreon-gorgone`, etc.) utilisés dans ces conteneurs.

</details>

## Prérequis

* Sur le serveur central, [le module **pullwss** de Gorgone doit être configuré pour accepter les connexions](./pollers-containers-prerequisites.md). Cette opération n'est à réaliser qu'une seule fois, avant d'installer votre premier collecteur en conteneur.
* Un hôte Linux sur lequel **Docker Engine** et le plugin **Docker Compose v2** sont
  installés (la commande `docker compose version` doit aboutir).
* Vous devez avoir créé un jeton d'authentification de type collecteur.
* Un accès réseau sortant depuis cet hôte vers votre serveur central Centreon.
* Si vous prévoyez de recevoir des traps SNMP sur ce collecteur, le port UDP 162 doit être
  accessible sur cet hôte.
* Si vous prévoyez de superviser une infrastructure VMware depuis ce collecteur, l'image
  Docker `centreon-vmware` doit avoir été construite au préalable (voir
  [Conteneur centreon-vmware](./using-containers-advanced-configuration.md#permettre-au-collecteur-de-superviser-des-ressources-vmware)).

## Étape 1 : Générer la commande d'installation

1. Sur le serveur central, cliquez sur la zone des collecteurs en haut à gauche de l'écran puis, dans la fenêtre qui s'ouvre, cliquez sur **Créer un collecteur**.

   ![image](../../assets/installation/create-poller-banner.png)

2. Renseignez les informations concernant le collecteur :

   * **Nom du collecteur** : un nom unique pour ce collecteur. Il apparaîtra dans la liste des collecteurs.
   * **Adresse du collecteur** : l'adresse de la machine hôte sur laquelle vous allez installer le collecteur.
      > L'adresse du collecteur n'a aucune incidence sur la connectivité : Gorgone
      > utilise PullWSS, c'est donc toujours le collecteur qui initie la connexion vers le
      > serveur central, et non l'inverse.
   * **Adresse du serveur central Centreon, telle que vue par ce collecteur** : l'URL que ce collecteur utilise pour joindre le serveur central, par exemple `http(s)://10.10.10.10/centreon`. Si votre serveur central est configuré en HTTPS, la connexion entre le serveur central et le collecteur sera automatiquement configurée en HTTPS aussi.

3. Sélectionnez **Conteneur** comme environnement du collecteur.

4. Sélectionnez le [jeton d'authentification](#prérequis) que vous avez créé pour ce collecteur.

5. Dans la section **Générer la commande d'installation**, cliquez sur le bouton et patientez le temps que la commande soit générée.

6. Copiez la commande à l'aide du bouton situé en haut à droite du bloc de code. Laissez la fenêtre ouverte : vous en aurez de nouveau besoin par la suite.

7. Ajoutez à la commande les [options facultatives](#services-optionnels-à-ajouter-à-la-commande-dinstallation) que vous souhaitez (par exemple pour permettre au collecteur de recevoir des données des agents CMA, ou pour superviser des ressources VMware. Dans les deux cas, vous devrez suivre les procédures correspondantes dans [Configuration avancée des conteneurs](./using-containers-advanced-configuration.md)).

8. Si vous souhaitez pouvoir utiliser les notifications par e-mail ou des plugins personnalisés, suivez les procédures correspondantes dans
[Configuration avancée des conteneurs](./using-containers-advanced-configuration.md).

## Étape 2 : Exécuter la commande d'installation sur l'hôte des conteneurs

1. Exécutez la commande copiée en tant qu'utilisateur autorisé à utiliser des conteneurs sur
l'hôte cible.

   <details>
   <summary>Ce que fait le script</summary>

   Le script :

   1. Vérifie que Docker et le plugin Docker Compose v2 sont disponibles.
   2. Génère un fichier `.env` et un fichier `docker-compose.yaml` dans le répertoire
      courant.
   3. Démarre les services avec `docker compose up -d`, sauf si l'option `--no-start` a
      été ajoutée à la commande (dans ce cas, démarrez-les vous-même plus tard avec
      `docker compose up -d`).

   Par défaut, deux services sont toujours générés :

   * **centengine** : Centreon Engine, le moteur de supervision.
   * **gorgone** : Gorgone, chargé de récupérer la configuration du collecteur et de
   communiquer avec le serveur central.

   **Référence des fichiers générés**

   Le fichier `docker-compose.yaml` généré par le script d'installation relie les services
   entre eux à l'aide de volumes Docker nommés : vous n'avez donc rien à configurer
   vous-même.

   | Volume | Partagé entre | Rôle |
   |--------|-----------------|---------|
   | `poller-engine` | centengine, gorgone | Configuration de Centreon Engine (`/etc/centreon-engine`) |
   | `poller-broker` | centengine, gorgone | Configuration de Centreon Broker (`/etc/centreon-broker`) |
   | `poller-centcmd` | centengine, gorgone, centreontrapd | Pipe de commandes externes de Centreon Engine (`/var/lib/centreon-engine/rw`) |
   | `poller-snmp-spool` | snmptrapd, centreontrapd | Répertoire de spool dans lequel les traps reçus sont écrits, puis traités |
   | `poller-snmp-traps` | gorgone, centreontrapd | Définitions des traps SNMP transmis par le serveur central |

   Chaque service dispose également d'un healthcheck Docker : la commande
   `docker compose ps` indique donc `healthy` dès qu'un service est complètement démarré.

   </details>

2. Vérifiez l'état de santé du conteneur `gorgone` sur l'hôte des conteneurs :

   ```shell
   docker compose ps
   ```

   Dès que `gorgone` indique `healthy`, la connexion au serveur central est établie.

   Si `gorgone` n'atteint pas l'état `healthy` au bout de quelques minutes, consultez ses logs
(`docker compose logs gorgone`), puis reportez-vous aux pages
[Rattacher un collecteur à un serveur central ou distant](../../monitoring/monitoring-servers/add-a-poller-to-configuration.md)
et [Communications entre serveurs](../../monitoring/monitoring-servers/communications.md)
pour en savoir plus sur la façon dont les collecteurs s'enregistrent et communiquent avec le
serveur central.

## Étape 3 : Exporter la configuration

Sur le serveur central, revenez à la fenêtre de création du collecteur et cliquez sur
**Exporter la configuration**.

Le collecteur apparaît alors comme actif à la page **Configuration > Collecteurs** :

![image](../../assets/installation/connected-poller.png)

## Étape 4 : Sécuriser votre plateforme

Si votre serveur central est configuré en HTTPS, la connexion entre le serveur central et le collecteur sera automatiquement configurée en HTTPS aussi. Pensez cependant à effectuer les autres actions de sécurisation de votre plateforme Centreon en suivant nos
[recommandations](../../administration/secure-platform.md).

## Services optionnels à ajouter à la commande d'installation

La commande générée de base ressemble à ceci :

```shell
curl -fsSL <CENTRAL_URL>/poller/install.sh | bash -s -- \
   --type docker \
   --poller_token <TOKEN_NAME>:<TOKEN_SECRET> \
   --uid <POLLER_UID> \
   --name '<POLLER_NAME>' \
   --central_url <CENTRAL_URL> \
   --appsecret <APP_SECRET> \
   --salt <SALT>
```

Ajoutez les options suivantes à la commande d'installation pour inclure des fonctionnalités supplémentaires :

| Option | Effet |
|------|--------|
| `--with-snmptrap` | Ajoute les services `snmptrapd` et `centreontrapd`, pour la supervision passive via les [traps SNMP](../../monitoring/passive-monitoring/enable-snmp-traps.md). |
| `--with-vmware` | [Permet au collecteur de superviser des ressources VMware](using-containers-advanced-configuration.md#permettre-au-collecteur-de-superviser-des-ressources-vmware) (ajoute le service `centreon-vmware` au docker-compose). |
| `--with-cma` | [Permet au collecteur de recevoir des données des agents CMA](./using-containers-advanced-configuration.md#permettre-au-collecteur-de-recevoir-des-données-des-agents-cma). Monte les certificats TLS et expose le port 4317, pour les collecteurs qui acceptent les connexions de l'agent CMA (Centreon Monitoring Agent) via OpenTelemetry gRPC. |
| `--tz <timezone>` | Définit le fuseau horaire des conteneurs (par défaut : `UTC`). |
| `--debug true` | Active les logs de débug sur les services. |
| `--gorgone-ssl <true\|false>` | Remplace le paramètre SSL utilisé pour la connexion de Gorgone au serveur central (par défaut : HTTPS si le serveur central utilise déjà HTTPS). |
| `--no-start` | Génère uniquement les fichiers `.env` et `docker-compose.yaml` ; ne démarre pas les services. |

Si vous avez déjà exécuté la commande d'installation sans ces options, vous pouvez également
ajouter le ou les services correspondants à la main dans les fichiers `docker-compose.yaml`
et `.env` générés, puis exécuter de nouveau `docker compose up -d`.
