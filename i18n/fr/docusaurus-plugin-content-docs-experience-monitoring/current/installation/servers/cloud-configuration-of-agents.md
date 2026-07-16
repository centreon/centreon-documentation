---
id: cloud-configuration-of-agents
description: Configurer un hostid unique pour les agents en environnement autoscaling
title: Installer l'agent dans un environnement en autoscaling
--- 

Cette page s'applique si votre application ou votre site est hébergé sur Docker ou dans un environnement en autoscaling.

Avec l'essor du cloud, des services gérés, de l'IaaS et du PaaS, chaque infrastructure utilise ses propres processus d'orchestration pour déployer de nouveaux serveurs (machines virtuelles ou conteneurs). Les environnements en autoscaling sont dynamiques : des machines sont constamment créées et supprimées. Vous devrez déployer l'agent système et les agents d'application sur chaque machine.

## Fonctionnement de l'**hostid**

L’utilisation de l’agent Experience Monitoring est entièrement compatible avec les infrastructures conteneurisées, mais elle nécessite une légère adaptation du processus d’installation.

### Explication

L’**hostid** est un paramètre interne qui permet à Experience Monitoring d’identifier de manière unique un serveur. Chaque serveur doit disposer d’un **hostid** unique, qui est automatiquement configuré par le script d’installation (à partir de l’adresse MAC de la première interface réseau, sans les caractères `:`).

Cependant, dans le cas des conteneurs Docker, la configuration empêche le script d’installation de trouver cette valeur. Dans les systèmes en autoscaling (tels que AWS ASG ou Azure Scale Set), la copie de l’image duplique également l’**hostid**.

### Solution de contournement

Pour disposer d'un **hostid** unique, vous pouvez le configurer dans le fichier **/etc/quanta/agent.yml** à l'aide d'un script exécuté au démarrage du conteneur ou de la machine virtuelle (**script de démarrage**). Vous pouvez spécifier un identifiant unique généré au moment de l’exécution (par exemple, à l’aide des métadonnées AWS ou des variables d’environnement Docker) ou utiliser un élément unique tel que la valeur UUID issue de **/proc/sys/kernel/random/uuid**.

## Adapter la procédure standard

Pour [installer l’agent système, vous devez suivre la procédure de base](./install-system-agents.md), mais veillez à gérer correctement les paramètres suivants.

Lorsque des instances (machines virtuelles ou conteneurs) sont déployées automatiquement ou de manière semi-automatique, certains champs de configuration doivent être modifiés ou répliqués pour chaque instance nouvellement créée :

- **Token** : le jeton d’identification doit être identique pour tous les agents Experience Monitoring appartenant à la même licence et au même site. Il est stocké dans le fichier de configuration `/etc/quanta/agent.yml`. Le jeton indique à l’agent à quel site appartiennent les données supervisées.
- **Hostid** : également situé dans `/etc/quanta/agent.yml`. L’hostid est un identifiant unique utilisé par Experience Monitoring pour identifier de manière univoque une instance :
    - Pour les serveurs statiques, l’hostid doit être différent pour chaque nouvelle instance, afin que votre nouvelle instance `front-nginx-3` n’écrase pas les données envoyées par `front-nginx-2`.
    - Dans les scénarios d'autoscaling', vous devrez peut-être conserver un identifiant stable lorsqu’une instance est supprimée puis recréée ultérieurement. Par exemple, si vous ajoutez un quatrième serveur front chaque soir à 19 h pour gérer les pics de trafic et que vous le supprimez à 21 h, vous souhaiterez probablement éviter de voir un nouveau graphique créé chaque jour dans Experience Monitoring (et une liste de graphiques qui s'allonge rapidement). Dans ce cas, vous devriez réutiliser un `hostid` issu d’un ensemble d’identifiants uniques chaque fois que vous supprimez et recréez ce serveur  afin que ses données apparaissent toujours dans le même graphique.
- **Nom d’hôte** : Également dans `/etc/quanta/agent.yml`, ce paramètre vous permet d’attribuer une étiquette à votre instance. Contrairement à l’identifiant d’hôte, le nom d’hôte est simplement un nom convivial destiné à faciliter la lecture des graphiques (par exemple `VM prod 006 - Varnish - 3`). Vous pouvez également le modifier depuis l’interface utilisateur d’Experience Monitoring.
