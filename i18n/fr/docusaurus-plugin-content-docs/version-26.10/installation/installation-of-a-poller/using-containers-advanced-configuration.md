---
id: using-containers-advanced-configuration
title: Configuration avancée des conteneurs
description: "Options de configuration d'un collecteur Centreon en conteneur : notifications par email, plugins personnalisés, supervision VMware, agent CMA, niveaux de log et Podman."
---

Cette page décrit la configuration optionnelle d'un collecteur [déployé dans un
conteneur](./using-containers.md),
au-delà des services `centengine` et `gorgone` présents par défaut.

## Permettre au collecteur d'envoyer des notifications par e-mail

Cette section s'applique si vous souhaitez que votre collecteur puisse envoyer des notifications.

Un collecteur en conteneur dispose de deux moyens d'envoyer des notifications par e-mail :
utilisez celui qui convient le mieux à votre infrastructure.

* Une [commande SMTP native](#option-1--commande-smtp-native), qui utilise la commande `mail` (du paquet `mailutils`)
  relayée par `msmtp`.
* Le [connecteur **centreon-plugin-notification-email**](#option-2--connecteur-centreon-plugin-notification-email).

### Option 1 : Commande SMTP native

Il s'agit de la manière la plus courante d'[envoyer des notifications](../../alerts-notifications/notif-configuration.md).

La commande SMTP native a besoin d'un relais SMTP pour envoyer les e-mails. Configurez-le à l'aide de variables d'environnement sur le service `centengine`, dans le fichier docker-compose.

| Variable | Effet |
|----------|--------|
| `SMTP_HOST` | Adresse du relais SMTP. Obligatoire pour la commande SMTP native : tant que cette variable est vide, les notifications ne sont pas envoyées, et aucune erreur n'est remontée. |
| `SMTP_PORT` | Port du relais SMTP (par défaut : `25`). |
| `SMTP_FROM` | Adresse d'expéditeur des e-mails de notification envoyés (utilisée à la fois comme expéditeur de l'enveloppe et dans l'en-tête `From:`). |
| `SMTP_TLS` | Définissez cette variable sur `on` pour utiliser TLS lors de la connexion au relais (par défaut : `off`). |

Le fichier `docker-compose.yaml` généré par le script d'installation charge ces variables
depuis un fichier `.env.smtp` situé dans le même répertoire :

```yaml
services:
  centengine:
    # ...
    env_file:
      - .env
      - .env.smtp
```

Le script d'installation crée le fichier `.env.smtp` vide, et ne le remplace jamais lorsque
vous l'exécutez à nouveau. Renseignez vos variables dans ce fichier :

```shell
# .env.smtp
SMTP_HOST=smtp.example.com
SMTP_PORT=25
SMTP_FROM=centreon-engine@example.com
SMTP_TLS=off
```

Redémarrez le service `centengine` (`docker compose up -d`) après avoir modifié ces variables.

`mailutils` et `msmtp` sont préinstallés dans l'image. Au démarrage, `centengine` écrit une
configuration `msmtp` à partir des variables `SMTP_*` ci-dessus : `/usr/bin/mail` envoie donc
les messages via votre relais, sans configuration supplémentaire.

> Dans Centreon 26.10.0, le script d'installation ne crée pas le fichier `.env.smtp` et le
> fichier `docker-compose.yaml` généré n'y fait pas référence : ajoutez vous-même les lignes
> `env_file` ci-dessus au service `centengine`. Les e-mails sont envoyés depuis l'adresse
> `centreon-engine@<nom d'hôte du conteneur>`, quelle que soit la valeur de `SMTP_FROM`.

### Option 2 : Connecteur centreon-plugin-notification-email

Les paramètres du relais SMTP du connecteur sont de simples options en ligne de commande : vous pouvez donc les définir directement dans la commande.

Le connecteur est préinstallé dans `$CENTREONPLUGINS$` (généralement
`/usr/lib/centreon/plugins/`), sous le nom `centreon_notification_email.pl`. Ses options
`--smtp-address`, `--smtp-port` et `--from-address` suffisent à renseigner votre relais,
sans aucune variable d'environnement.

Le connecteur choisit entre son modèle de notification d'hôte et son modèle de notification de
service selon que l'option `--service-description` est renseignée ou non : la **même
command_line** peut donc servir à la fois de commande de notification d'hôte et de service.
Remplacez les valeurs SMTP, l'URL Centreon et le jeton de l'exemple ci-dessous par les vôtres,
puis définissez la commande à la page **Configuration > Commandes** :

```shell
$CENTREONPLUGINS$centreon_notification_email.pl --plugin=notification::email::plugin --mode=alert --to-address='$CONTACTEMAIL$' --host-address='$HOSTADDRESS$' --host-name='$HOSTNAME$' --host-alias='$HOSTALIAS$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --host-attempts='$HOSTATTEMPT$' --max-host-attempts='$MAXHOSTATTEMPTS$' --host-duration='$HOSTDURATION$' --date='$SHORTDATETIME$' --type='$NOTIFICATIONTYPE$' --service-description='$SERVICEDESC$' --service-displayname='$SERVICEDISPLAYNAME$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --service-longoutput='$LONGSERVICEOUTPUT$' --service-attempts='$SERVICEATTEMPT$' --max-service-attempts='$MAXSERVICEATTEMPTS$' --service-duration='$SERVICEDURATION$' --host-id='$HOSTID$' --service-id='$SERVICEID$' --notif-author='$NOTIFICATIONAUTHOR$' --notif-comment='$NOTIFICATIONCOMMENT$' --centreon-url='https://central.example.com' --smtp-address='smtp.example.com' --smtp-port='25' --from-address='centreon-engine@example.com' --centreon-user='admin' --centreon-token='your-autologin-key' --smtp-nossl
```

* `--centreon-url`, `--centreon-user` et `--centreon-token` (une clé d'auto-connexion Centreon,
  **Administration > Comptes > votre utilisateur > Sécurité**) permettent d'inclure dans
  l'e-mail un lien vers la ressource ainsi que son graphique de performance. Omettez ces trois
  options si vous n'en avez pas besoin : l'e-mail est envoyé quand même.
* `--insecure` ignore la vérification du certificat TLS lors de la récupération de ce graphique,
  ce qui est utile lorsque `--centreon-url` utilise un certificat autosigné.
* Ajoutez `--smtp-user` et `--smtp-password` si votre relais nécessite une authentification,
  et supprimez `--smtp-nossl` pour utiliser TLS.

> Stocker `--centreon-token` dans une définition de commande revient à l'écrire en clair
> dans la configuration de Centreon Engine. Utilisez un jeton associé à un compte dédié
> disposant de droits limités plutôt qu'à un compte administrateur.

Ces options peuvent également utiliser les macros de ressources du collecteur
`$SMTPADDRESS$`, `$SMTPPORT$` et `$SMTPFROMADDRESS$`. Définissez leurs valeurs à la page
**Configuration > Collecteurs > Ressources** : le conteneur ne les modifie pas. Les
variables `SMTP_*` (voir l'option 1) ne sont utilisées que par la commande SMTP native.

> Dans Centreon 26.10.0, ces macros sont écrasées à chaque démarrage du conteneur par
> les valeurs des variables `SMTP_HOST`, `SMTP_PORT` et `SMTP_FROM`, et sont vidées
> lorsque ces variables ne sont pas définies.

## Permettre au collecteur d'utiliser des plugins personnalisés pour la supervision

Cette section s'applique uniquement si vous souhaitez utiliser vos propres plugins personnalisés pour la supervision. Aucune action n'est nécessaire pour utiliser les connecteurs de supervision officiels Centreon.

Le conteneur `centengine` peut installer des scripts de contrôle personnalisés et des dépendances APT supplémentaires sans qu'il soit nécessaire de reconstruire l'image.

Dans le fichier `docker-compose.yaml` généré, ajoutez les volumes suivants au service `centengine` :

```yaml
    volumes:
      # Scripts de plugins personnalisés (ils doivent être exécutables)
      - ./custom-plugins:/usr/lib/nagios/plugins/custom:ro
      # Paquets APT supplémentaires, installés au démarrage
      - ./custom-deps.json:/etc/centreon-engine/custom-deps.json:ro
```

* Créez un répertoire **custom-plugins** et placez-y vos scripts de plugins personnalisés. Le conteneur les copiera dans `/usr/lib/nagios/plugins/custom`.
* Si votre plugin nécessite des dépendances système, vous devez les déclarer dans un fichier `custom-deps.json`. Par exemple :

  ```json
  {
    "apt": ["snmp", "jq"]
  }
  ```

  Ce fichier est lu au démarrage du conteneur, puis surveillé : le modifier depuis l'hôte
  déclenche automatiquement l'installation des paquets listés, sans qu'il soit nécessaire de
  redémarrer le conteneur. L'installation des paquets s'exécute en arrière-plan : `centengine`
  n'est donc pas bloqué pendant ce temps.

### Intégrer les dépendances dans une image personnalisée

Si vous avez un grand nombre de dépendances, vous pouvez construire une image personnalisée basée sur l'image officielle, plutôt que d'ajouter les dépendances une à une au fichier `custom-deps.json`. Votre image personnalisée sera déployée via le docker-compose.

<!-- Plutôt que d'installer les dépendances au démarrage du conteneur, vous pouvez construire
votre propre image basée sur l'image officielle et tout installer au moment de la construction : -->

```dockerfile
FROM ghcr.io/centreon/centreon-engine:26.10

RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends \
      snmp \
      jq \
    && sudo apt-get clean
```

Construisez-la, puis référencez-la dans `ENGINE_TAG` (ou remplacez directement la valeur
`image:`) dans votre fichier `docker-compose.yaml`. Le principal avantage de cette approche est
le temps de démarrage : lorsqu'un collecteur a besoin de nombreuses dépendances, les installer
une seule fois lors de la construction est plus rapide que de les installer à chaque démarrage
du conteneur via `custom-deps.json`.

## Permettre au collecteur de superviser des ressources VMware

Suivez cette procédure avant de déployer un collecteur en conteneur avec l'option `--with-vmware`.

La supervision d'une infrastructure VMware nécessite le SDK Perl propriétaire de VMware :
sans lui, le démon ne peut pas démarrer du tout, même avec des identifiants en clair.
Comme ce SDK ne peut pas être redistribué pour des raisons de licence, l'image de conteneur
`centreon-vmware` n'est pas publiée sur un registre. Le fichier `docker-compose.yaml` généré
avec `--with-vmware` la construit localement, sur l'hôte des conteneurs, à partir d'une copie
locale du dépôt `centreon-plugins`, au premier démarrage des services.

1. Clonez le dépôt `centreon-plugins` sur l'hôte des conteneurs, dans le répertoire depuis
   lequel vous exécuterez la commande d'installation :

   ```shell
   git clone https://github.com/centreon/centreon-plugins.git
   ```

   Pour utiliser un autre emplacement, ajoutez `--vmware-path <chemin>` à la commande
   d'installation.

2. Téléchargez les archives du SDK depuis le portail développeur de Broadcom (voir les
   [prérequis du connecteur de supervision VMware
   ESX](/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx#prérequis)
   pour la marche à suivre), puis placez-les dans le répertoire `sdks-vmware` du dépôt
   cloné :

   * `VMware-vSphere-Perl-SDK-7.0.0-17698549.x86_64.tar.gz`
   * `vsan-sdk-perl.zip`

3. Exécutez la commande d'installation avec `--with-vmware`. Le script d'installation
   vérifie la présence du dépôt cloné et des archives du SDK avant de générer les fichiers,
   et s'arrête avec un message d'erreur s'ils sont absents.

L'image n'est construite que si elle n'existe pas encore. Pour la reconstruire, par exemple
après avoir mis à jour votre copie locale du dépôt `centreon-plugins`, exécutez :

```shell
docker compose build centreon-vmware
docker compose up -d
```

> La construction télécharge le dernier paquet depuis le dépôt APT stable de Centreon.
> Pour figer une version précise, ajoutez un argument de construction `VERSION` dans la
> section `build:` du service `centreon-vmware` du fichier `docker-compose.yaml`
> (`args: [VERSION=<version>]`).

> Dans Centreon 26.10.0, le fichier `docker-compose.yaml` généré ne construit pas l'image :
> construisez-la vous-même avant d'exécuter la commande d'installation, avec
> `docker build --file .github/docker/connector/Dockerfile.connector-vmware --tag connector-vmware:local .`
> depuis la racine du dépôt `centreon-plugins` cloné.

## Permettre au collecteur de recevoir des données des agents CMA

Ajoutez `--with-cma` à la commande d'installation du collecteur pour que `centengine` puisse
accepter les connexions de l'agent CMA (Centreon Monitoring Agent) via OpenTelemetry gRPC.
L'option `--with-cma` ajoute les éléments suivants au service `centengine` dans le docker-compose :

```yaml
    volumes:
      - poller-cma-pki:/etc/pki/centreon-engine
    ports:
      - 4317:4317
```

Au premier démarrage, `centengine` génère l'autorité de certification (CA) du collecteur
dans le volume `poller-cma-pki`. La CA est conservée lorsque le conteneur est recréé : les
agents qui lui font déjà confiance continuent donc de fonctionner.

La CA est émise pour le nom d'hôte du conteneur `centengine`, défini avec `--cma-hostname`
(par défaut : `centengine`). Les agents doivent joindre le collecteur avec ce nom :

1. Ajoutez `--cma-hostname <nom d'hôte>` à la commande d'installation, où `<nom d'hôte>`
   est le nom d'hôte de l'hôte des conteneurs, tel que le résolvent les hôtes supervisés
   (par exemple `poller1.example.com`).
2. Configurez les agents en suivant la page
   [Configurer l'environnement de l'agent](../../cma/cma-setup.md), en utilisant ce nom
   d'hôte comme adresse du collecteur.

Pour changer de nom d'hôte par la suite, modifiez `ENGINE_HOSTNAME` dans le fichier `.env`,
supprimez le volume `poller-cma-pki` (la commande `docker volume ls` affiche son nom complet),
puis exécutez `docker compose up -d`. Une nouvelle CA est générée : configurez à nouveau les
agents avec la nouvelle empreinte numérique (voir
[Supprimer la CA de l'hôte](../../cma/cma-setup.md#supprimer-la-ca-de-lhôte)).

> Dans Centreon 26.10.0, `--with-cma` monte les fichiers `./certs/poller.crt` et
> `./certs/poller.key` au lieu du volume `poller-cma-pki`, et l'option `--cma-hostname`
> n'existe pas : générez vous-même les certificats en suivant la page
> [Configurer les certificats](../../cma/cma-certificates.md).

## Définir le niveau de log des services

Les variables suivantes du fichier `.env` généré définissent le niveau de log de Gorgone et
de `centreontrapd`. Exécutez `docker compose up -d` après les avoir modifiées.

| Variable | Effet |
|----------|--------|
| `GORGONE_LOG_LEVEL` | Niveau de log de Gorgone : `fatal`, `error`, `warning`, `notice`, `info` ou `debug` (par défaut : `info`). |
| `CENTREONTRAPD_LOG_LEVEL` | Niveau de log de `centreontrapd`, uniquement avec `--with-snmptrap` (par défaut : `error`). |

Lorsque vous exécutez à nouveau la commande d'installation et que le fichier `.env` est
remplacé, ces variables reprennent leur valeur par défaut. Pour conserver votre valeur,
exportez la variable avant d'exécuter la commande (par exemple
`export GORGONE_LOG_LEVEL=debug`).

## Utiliser Podman

Le script d'installation prend également en charge Podman, en mode rootful ou rootless
(exécuté par un utilisateur standard). Il utilise `podman compose` ou `podman-compose`
lorsque Docker n'est pas disponible, et vérifie les points suivants avant de générer les
fichiers :

* Si la commande compose s'appuie sur `docker-compose`, le socket de l'API Podman doit être
  actif. Activez-le avec `sudo systemctl enable --now podman.socket` (mode rootful) ou
  `systemctl --user enable --now podman.socket` (mode rootless).
* En mode rootless avec `--with-snmptrap`, l'utilisateur doit être autorisé à publier le
  port 162 :

  ```shell
  echo 'net.ipv4.ip_unprivileged_port_start=162' | sudo tee /etc/sysctl.d/99-centreon-poller.conf
  sudo sysctl --system
  ```

* En mode rootless, les services s'arrêtent lorsque l'utilisateur se déconnecte, sauf si le
  mode *linger* est activé pour cet utilisateur (le script affiche un avertissement).
* Avec `--with-vmware`, Podman ne prend pas en charge l'instruction `COPY --link` du
  Dockerfile de `centreon-vmware`. Retirez l'option `--link` du Dockerfile dans votre copie
  locale du dépôt `centreon-plugins` :

  ```shell
  sed -i 's/COPY --link /COPY /' .github/docker/connector/Dockerfile.connector-vmware
  ```

Podman ne redémarre pas les conteneurs lorsque l'hôte redémarre. Pour que les services
redémarrent automatiquement après un redémarrage de l'hôte, exécutez :

* En mode rootful :

  ```shell
  sudo systemctl enable podman-restart.service
  ```

* En mode rootless :

  ```shell
  sudo loginctl enable-linger $(id -un)
  systemctl --user enable podman-restart.service
  ```

> Podman n'est pas pris en charge dans Centreon 26.10.0.

<!--
Fichier écrit : _translation/versioned_docs/version-26.10/installation/installation-of-a-poller/using-containers-advanced-configuration.md

Termes hors glossaire (choix de traduction à valider) :
- container -> conteneur ; container host -> hôte des conteneurs
- SMTP relay -> relais SMTP
- to hardcode -> coder en dur
- custom plugin scripts -> scripts de plugins personnalisés
- extra APT dependencies / packages -> dépendances / paquets APT supplémentaires
- to bake dependencies into an image -> intégrer les dépendances dans une image
- build time / at build time -> lors de la construction (de l'image)
- self-signed certificate -> certificat autosigné
- autologin key -> clé d'auto-connexion (terme utilisé dans connect/autologin.md)
- poller resource macros -> macros de ressources du collecteur
- daemon -> démon ; registry -> registre
- Chemin d'interface non vérifié : **Administration > Comptes > votre utilisateur > Sécurité**
  (repris tel quel de la source anglaise ; dans la doc FR, la clé d'auto-connexion est décrite
  à l'onglet **Authentification** de l'utilisateur).
- Ancres traduites : #option-1--commande-smtp-native, #option-2--connecteur-centreon-plugin-notification-email,
  #permettre-au-collecteur-de-superviser-des-ressources-vmware,
  #permettre-au-collecteur-de-recevoir-des-données-des-agents-cma, et
  #prérequis pour le lien vers la page pp VMware ESX.
-->
