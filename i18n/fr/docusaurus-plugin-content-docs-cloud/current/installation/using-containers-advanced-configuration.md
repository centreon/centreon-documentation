---
id: using-containers-advanced-configuration
title: Configuration avancée des conteneurs
description: "Configuration optionnelle d'un collecteur en conteneur : supervision VMware, plugins personnalisés, prise en charge de l'agent CMA et notifications par email"
---

Cette page décrit la configuration optionnelle d'un collecteur [déployé dans un
conteneur](./using-containers.md),
au-delà des services `centengine` et `gorgone` présents par défaut.

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

* Vous devrez ajouter vos commandes personnalisées à la [liste blanche de commandes du collecteur](../monitoring/basic-objects/commands.Md#ajouter-une-commande-à-la-liste-blanche).

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
la référence sous la forme `connector-vmware:${VMWARE_TAG:-local}` avec `pull_policy: never` :
vous devez donc la construire localement, sur l'hôte des conteneurs, avant d'utiliser
`--with-vmware`.

Téléchargez les archives du SDK depuis le portail développeur de Broadcom (voir les
[prérequis du connecteur de supervision VMware
ESX](/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx#prérequis)
pour la marche à suivre), puis clonez `centreon-plugins`, placez les archives dans son
répertoire `sdks-vmware` et construisez l'image :

```shell
git clone https://github.com/centreon/centreon-plugins.git
cd centreon-plugins
# Placez les archives du SDK téléchargées dans sdks-vmware/ avant de construire l'image
docker build \
  --file .github/docker/connector/Dockerfile.connector-vmware \
  --tag connector-vmware:local \
  .
```

> Cette commande télécharge le dernier paquet depuis le dépôt APT stable de Centreon et
> inclut le SDK par défaut. Ajoutez `--build-arg VERSION=<version>` pour figer une version
> précise, ou `--build-arg PACKAGE_SOURCE=mount` pour construire l'image à partir d'un paquet
> `.deb` placé dans un répertoire `packages-centreon`. Construire avec
> `--build-arg WITH_SDK=false` permet uniquement de vérifier que l'image se construit
> correctement : le démon obtenu ne peut pas démarrer, car le SDK est requis dans tous les cas.

## Permettre au collecteur de recevoir des données des agents CMA

Ajoutez `--with-cma` à la commande d'installation du collecteur pour que `centengine` puisse
accepter les connexions de l'agent CMA (Centreon Monitoring Agent) via OpenTelemetry gRPC.
L'option `--with-cma` ajoute les éléments suivants au service `centengine` dans le docker-compose :

```yaml
    volumes:
      - ./certs/poller.crt:/etc/pki/poller.crt:ro
      - ./certs/poller.key:/etc/pki/poller.key:ro
    ports:
      - "4317:4317"
```

Générez ensuite les certificats TLS correspondants et configurez le côté agent en suivant les pages
[Configurer les certificats](../cma/cma-certificates.md) et
[Configurer l'environnement de l'agent](../cma/cma-setup.md).

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
