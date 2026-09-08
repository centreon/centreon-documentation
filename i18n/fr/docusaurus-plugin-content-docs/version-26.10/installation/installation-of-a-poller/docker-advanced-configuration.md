---
id: docker-advanced-configuration
title: Configuration Docker avancée
description: "Configuration optionnelle pour un collecteur basé sur Docker : supervision VMware, plugins personnalisés, prise en charge du CMA et notifications par e-mail"
---

Cette page couvre la configuration optionnelle d'un collecteur déployé avec
des [containers Docker](using-docker.md), au-delà des services
`centengine` et `gorgone` par défaut.

## Optionnel : container centreon-vmware

La supervision d'une infrastructure VMware nécessite le SDK Perl VMware
propriétaire : le démon ne peut pas démarrer sans lui, même avec des
identifiants en clair. Comme ce SDK ne peut pas être redistribué pour des
raisons de licence, l'image du container `centreon-vmware` **n'est pas
publiée sur un registre**. Le `docker-compose.yaml` généré la référence sous
la forme `connector-vmware:${VMWARE_TAG:-local}` avec `pull_policy: never` :
vous devez donc la construire localement, sur l'hôte Docker, avant d'utiliser
`--with-vmware`.

Téléchargez les archives du SDK depuis le portail développeur de Broadcom
(voir les
[prérequis du plugin pack VMware ESX](/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx/#prérequis)
pour la marche à suivre), puis clonez `centreon-plugins`, déposez les
archives dans son répertoire `sdks-vmware`, et construisez l'image :

```shell
git clone https://github.com/centreon/centreon-plugins.git
cd centreon-plugins
# Déposez les archives SDK téléchargées dans sdks-vmware/ avant de construire
docker build \
  --file .github/docker/connector/Dockerfile.connector-vmware \
  --tag connector-vmware:local \
  .
```

> Cette commande télécharge la dernière version du paquet depuis le dépôt
> APT stable de Centreon et inclut le SDK par défaut. Ajoutez
> `--build-arg VERSION=<version>` pour épingler une version précise, ou
> `--build-arg PACKAGE_SOURCE=mount` pour construire à partir d'un paquet
> `.deb` déposé dans un répertoire `packages-centreon`. Construire avec
> `--build-arg WITH_SDK=false` ne fait que valider que l'image se construit :
> le démon résultant ne peut pas démarrer, le SDK étant requis dans tous les
> cas.

## Checks personnalisés et dépendances des plugins

Le container `centengine` peut installer des scripts de check personnalisés
et des dépendances supplémentaires sans reconstruire l'image. Ajoutez les
volumes correspondants au service `centengine` dans le `docker-compose.yaml`
généré :

```yaml
    volumes:
      # Scripts de plugins personnalisés (doivent être exécutables)
      - ./custom-plugins:/usr/lib/nagios/plugins/custom:ro
      # Paquets APT supplémentaires, installés au démarrage
      - ./custom-deps.json:/etc/centreon-engine/custom-deps.json:ro
```

* Les **scripts de plugins personnalisés** placés dans `./custom-plugins`
  deviennent disponibles sous `/usr/lib/nagios/plugins/custom` à l'intérieur
  du container.
* **`custom-deps.json`** liste des paquets APT arbitraires à installer, par
  exemple :

  ```json
  {
    "apt": ["snmp", "jq"]
  }
  ```

  Ce fichier est lu au démarrage du container, puis surveillé en continu :
  le modifier sur l'hôte déclenche automatiquement l'installation des
  paquets listés, sans avoir besoin de redémarrer le container.
  L'installation des paquets s'exécute en arrière-plan, ce qui n'interrompt
  pas `centengine` pendant ce temps.

> Les plugins de supervision Centreon (issus des Connecteurs de supervision)
> n'ont pas besoin d'être configurés ici : Gorgone les installe
> automatiquement, dans le même volume de configuration partagé, dès lors que
> **Installation automatique des plugins** est activée à la page
> **Configuration > Connecteurs > Connecteurs de supervision** et que la
> configuration du collecteur est déployée depuis le serveur central.
> Consultez [Connecteurs de supervision](../../monitoring/pluginpacks.md)
> pour plus de détails.

### Intégrer les dépendances dans une image personnalisée

Plutôt que d'installer les dépendances au démarrage du container, vous pouvez
construire votre propre image à partir de l'image officielle et tout
installer au moment du build :

```dockerfile
FROM docker.centreon.com/centreon/centreon-engine-trixie:26.10

RUN apt-get update && apt-get install -y --no-install-recommends \
      snmp \
      jq \
    && rm -rf /var/lib/apt/lists/*
```

Construisez-la, puis référencez-la via `ENGINE_TAG` (ou en surchargeant
directement la valeur `image:`) dans votre `docker-compose.yaml`. L'intérêt
principal de cette approche est le temps de démarrage : lorsqu'un collecteur
nécessite de nombreuses dépendances, les installer une seule fois au moment
du build est plus rapide que de les réinstaller à chaque démarrage du
container via `custom-deps.json`.

## Optionnel : prise en charge du Centreon Monitoring Agent (CMA)

Ajoutez `--with-cma` à la commande d'installation pour que `centengine`
puisse accepter les connexions du Centreon Monitoring Agent via OpenTelemetry
gRPC. Cela ajoute les éléments suivants au service `centengine` :

```yaml
    volumes:
      - ./certs/poller.crt:/etc/pki/poller.crt:ro
      - ./certs/poller.key:/etc/pki/poller.key:ro
    ports:
      - "4317:4317"
```

Générez les certificats TLS et configurez l'agent en suivant
[Configurer les certificats](../../cma/cma-certificates.md) et
[Configurer l’environnement de l’agent](../../cma/cma-setup.md).

## Optionnel : Notifications par e-mail

L'image `centengine` propose deux méthodes indépendantes pour envoyer des
notifications par e-mail, à choisir selon votre infrastructure :

* Une **commande SMTP native**, utilisant la commande `mail` (fournie par
  `mailutils`) relayée via `msmtp`.
* Le **connecteur `centreon-plugin-notification-email`**, le même Connecteur
  de supervision utilisé pour les notifications par e-mail sur les
  installations par paquets.

La **commande SMTP native** nécessite un relais SMTP, configuré via des
variables d'environnement sur le service `centengine`. Le **connecteur**
n'en a pas besoin : ses paramètres de relais SMTP sont de simples options en
ligne de commande, que vous pouvez donc renseigner directement dans la
commande (voir
[Option 2](#option-2--connecteur-centreon-plugin-notification-email)
ci-dessous).

| Variable | Effet |
|----------|--------|
| `SMTP_HOST` | Adresse du relais SMTP. Requise pour la commande SMTP native : tant qu'elle est vide, les notifications ne sont silencieusement pas envoyées. |
| `SMTP_PORT` | Port du relais SMTP (par défaut : `25`). |
| `SMTP_FROM` | Adresse `From:` utilisée dans les e-mails de notification sortants. |
| `SMTP_TLS` | Mettre à `on` pour utiliser TLS lors de la connexion au relais (par défaut : `off`). |

Si vous utilisez la commande SMTP native, le `docker-compose.yaml` généré
par le script d'installation ne mappe pas ces variables par défaut.
Ajoutez-les directement dans le bloc `environment:` du service `centengine`,
ou, pour les garder en dehors du fichier `.env` que le script d'installation
régénère à chaque exécution, placez-les dans un fichier séparé référencé
comme `env_file` supplémentaire :

```yaml
services:
  centengine:
    # ...
    env_file:
      - .env
      - .env.smtp
```

```shell
# .env.smtp
SMTP_HOST=smtp.example.com
SMTP_PORT=25
SMTP_FROM=centreon-engine@example.com
SMTP_TLS=off
```

Redémarrez le service `centengine` (`docker compose up -d`) après avoir
modifié ces variables.

### Option 1 : commande SMTP native

`mailutils` et `msmtp` sont préinstallés dans l'image. Au démarrage,
`centengine` génère une configuration `msmtp` à partir des variables
`SMTP_*` ci-dessus, de sorte que `/usr/bin/mail` envoie via votre relais
sans configuration supplémentaire.

> Centreon Engine exécute `command_line` directement, sans passer par un
> shell : il ne comprend pas les pipes (`|`) ni les redirections par
> lui-même. Une commande combinant `printf` et `mail` via un pipe doit être
> encapsulée dans `/bin/sh -c '...'` pour que ce soit le shell (et non
> Centreon Engine) qui interprète le pipe - sinon `printf` s'exécute seul et
> n'envoie silencieusement rien. Définissez les commandes de notification
> ainsi sur la page **Configuration > Commandes** :

```shell
/bin/sh -c 'printf "%b" "***** Centreon *****\n\nNotification Type: $NOTIFICATIONTYPE$\n\nHost: $HOSTALIAS$\nState: $HOSTSTATE$\nAddress: $HOSTADDRESS$\nInfo: $HOSTOUTPUT$\n\nDate/Time: $LONGDATETIME$\n" | /usr/bin/mail -s "Host $HOSTSTATE$ alert for $HOSTALIAS$" $CONTACTEMAIL$'
```

### Option 2 : connecteur centreon-plugin-notification-email

Le connecteur est préinstallé sous `$CENTREONPLUGINS$` (généralement
`/usr/lib/centreon/plugins/`), sous le nom `centreon_notification_email.pl`.
Ses options `--smtp-address`, `--smtp-port` et `--from-address` prennent
votre relais directement, sans variable d'environnement.

Le connecteur choisit entre son modèle de notification hôte et son modèle
service selon que `--service-description` est renseigné ou non : la
**même command_line** peut donc servir à la fois comme commande de
notification d'hôte et de service. Remplacez les valeurs SMTP, l'URL
Centreon et le token ci-dessous par les vôtres, puis définissez-la sur la
page **Configuration > Commandes** :

```shell
$CENTREONPLUGINS$centreon_notification_email.pl --plugin=notification::email::plugin --mode=alert --to-address='$CONTACTEMAIL$' --host-address='$HOSTADDRESS$' --host-name='$HOSTNAME$' --host-alias='$HOSTALIAS$' --host-state='$HOSTSTATE$' --host-output='$HOSTOUTPUT$' --host-attempts='$HOSTATTEMPT$' --max-host-attempts='$MAXHOSTATTEMPTS$' --host-duration='$HOSTDURATION$' --date='$SHORTDATETIME$' --type='$NOTIFICATIONTYPE$' --service-description='$SERVICEDESC$' --service-displayname='$SERVICEDISPLAYNAME$' --service-state='$SERVICESTATE$' --service-output='$SERVICEOUTPUT$' --service-longoutput='$LONGSERVICEOUTPUT$' --service-attempts='$SERVICEATTEMPT$' --max-service-attempts='$MAXSERVICEATTEMPTS$' --service-duration='$SERVICEDURATION$' --host-id='$HOSTID$' --service-id='$SERVICEID$' --notif-author='$NOTIFICATIONAUTHOR$' --notif-comment='$NOTIFICATIONCOMMENT$' --centreon-url='https://central.example.com' --smtp-address='smtp.example.com' --smtp-port='25' --from-address='centreon-engine@example.com' --centreon-user='admin' --centreon-token='votre-cle-autologin' --smtp-nossl
```

* `--centreon-url`, `--centreon-user` et `--centreon-token` (une clé
  autologin Centreon, **Administration > Comptes > votre utilisateur >
  Sécurité**) permettent à l'e-mail de renvoyer vers la ressource et d'y
  intégrer son graphique de performance. Omettez les trois si vous n'en avez
  pas besoin - l'e-mail est envoyé quand même.
* `--insecure` désactive la vérification du certificat TLS lors de la
  récupération de ce graphique, utile si `--centreon-url` utilise un
  certificat auto-signé.
* Ajoutez `--smtp-user`/`--smtp-password` si votre relais nécessite une
  authentification, et retirez `--smtp-nossl` pour utiliser TLS.

> Stocker `--centreon-token` dans une définition de commande le place en
> clair dans la configuration de Centreon Engine. Utilisez un token
> rattaché à un compte dédié à privilèges limités plutôt qu'à un
> administrateur.

Si vous préférez ne pas coder le relais en dur dans la commande, réutilisez
plutôt les variables d'environnement `SMTP_*` de l'
[Option 1](#option-1--commande-smtp-native) ci-dessus : elles sont
également exposées comme macros Centreon Engine `$SMTPADDRESS$`,
`$SMTPPORT$` et `$SMTPFROMADDRESS$`, donc
`--smtp-address='$SMTPADDRESS$' --smtp-port='$SMTPPORT$'
--from-address='$SMTPFROMADDRESS$'` fonctionne aussi.

> Un export complet de la configuration depuis le serveur central régénère
> entièrement `resource.cfg`, ce qui supprimerait à nouveau ces macros. Si
> vous choisissez cette option, définissez plutôt ces valeurs comme macros
> de ressources du collecteur dans l'interface Centreon
> (**Configuration > Pollers > Ressources**), afin qu'elles survivent aux
> futurs exports - ou codez simplement le relais en dur dans la commande
> comme montré ci-dessus.

Consultez la documentation du connecteur pour la liste complète des options.
