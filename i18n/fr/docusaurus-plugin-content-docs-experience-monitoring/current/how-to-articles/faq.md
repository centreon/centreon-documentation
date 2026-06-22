---
id: faq
title: FAQ agents
---

## Quels ports du pare-feu doivent être ouverts pour l'agent Experience Monitoring ?

Pour garantir le bon fonctionnement de l'agent, les connexions HTTPS sortantes vers nos adresses IP doivent être autorisées.

<details>
  <summary>Adresses IP</summary>

- 18.200.8.204
- 34.241.126.134
- 34.242.201.38
- 34.243.127.23
- 34.248.113.181
- 34.250.75.1
- 34.252.162.102
- 34.255.79.251
- 52.17.157.120
- 52.18.157.52
- 52.19.60.226
- 52.30.194.126
- 52.31.137.223
- 52.48.148.3
- 52.48.151.164
- 52.50.31.122
- 52.51.174.216
- 52.208.14.10
- 52.209.27.6
- 52.210.233.251
- 52.212.161.58
- 52.214.41.253
- 54.78.224.201
- 54.154.70.169
- 54.170.78.117
- 54.170.157.253
- 63.34.122.21
- 63.34.67.195
- 99.81.201.50
- 176.34.232.22
- 185.48.122.159

</details>

Pour l'installation des paquets, votre serveur doit également être autorisé à se connecter via HTTP à `apt.quanta.io`.

Vous pouvez également configurer un proxy HTTP si votre serveur ne dispose pas d'un accès direct à Internet. Ajoutez l'URL de votre proxy dans la configuration de l'agent (**/etc/quanta/agent.yml**) en ajoutant une ligne du type `proxy_url: http://user:password@1.2.3.4` sous la catégorie « server ».

## Je dispose de plusieurs instances Redis, Memcached ou Varnish, puis-je toutes les superviser ?

Oui, à partir de la version 1.1.0 de l'agent.

Vous devez définir un fichier de configuration par instance dans **/etc/quanta/agent.yml**. Par exemple, pour superviser deux instances Redis différentes (l’une pour les sessions sur le port 6379 et l’autre pour le cache sur le port 6378) :

- **/etc/quanta/modules.d/redis_sessions.yml**

```
module: redis
redis:
instance: sessions
host: 127.0.0.1
port: 6379
```

- **/etc/quanta/modules.d/redis_cache.yml**

```
module: redis
redis:
instance: cache
host: 127.0.0.1
port: 6378
```

Cette configuration fonctionne de la même manière pour Memcached et Varnish. N'oubliez pas de modifier le paramètre « module » et la clé de configuration.

Pour Varnish, le paramètre « instance » sert également de nom d'instance Varnish ; assurez-vous donc qu'il corresponde (équivalent à l'argument « -n » en ligne de commande).

## Puis-je superviser des services qui ne se trouvent pas sur la même machine ?

Nous vous recommandons d’installer l’agent sur tous les serveurs de votre infrastructure. Toutefois, si cela n’est pas possible sur certains serveurs (par exemple, sur une base de données) et que vous souhaitez tout de même superviser MySQL, vous pouvez modifier le paramètre **host** dans la configuration de l’agent.

## Mon serveur est partagé entre plusieurs sites, chacun disposant d’un abonnement à Experience Monitoring. Comment faire pour que les données soient visibles sur les deux sites ?

Pour associer un serveur à plusieurs sites, vous pouvez spécifier plusieurs jetons (un par site) dans **/etc/quanta/agent.yml**, séparés par des virgules, par exemple : « quanta_token: tokensite1,tokensite2 ».

Le serveur sera créé sur les deux sites et les données système seront envoyées aux deux.

Il existe certaines limitations si les deux sites utilisent le module PHP :

- Les événements PHP seront envoyés aux deux sites, quel que soit le site qui les a générés.
- Les informations figurant dans la section PHP de l’interface Experience Monitoring proviendront de l’un ou l’autre site (et peuvent ne pas être correctes).

## Dois-je créer mon serveur dans Experience Monitoring ?

Non, la création est automatique dès la première réception de données. Si votre serveur existait déjà dans Experience Monitoring, sa configuration sera mise à jour automatiquement.

Vous devez supprimer manuellement le serveur dans Experience Monitoring si vous le retirez de votre infrastructure.

## Je m'inquiète pour la sécurité de mon serveur, pouvez-vous m'expliquer comment fonctionnent l'agent Experience Monitoring et le module PHP ?

Nous accordons autant d’importance que vous à la sécurité de nos outils. Voici une description technique :

Tous les paquets que nous fournissons sont signés à l’aide d’une clé GPG que vous devez installer dans votre système de gestion de paquets afin de vérifier leur origine.

### Agent Experience Monitoring

L’agent Experience Monitoring est un service d’arrière-plan (démon) sur votre serveur qui effectue plusieurs opérations :

- Il collecte des données système en lisant les fichiers dans **/proc**.
- Il collecte des données sur les services actifs (Apache, Nginx, Varnish, Memcached, Redis, MySQL), généralement via une connexion au service. L’agent n’a jamais besoin d’un utilisateur privilégié pour accéder à ces données.
- Il reçoit des données du module PHP via un socket Unix (les permissions sont configurables).
- Il envoie les données collectées à Experience Monitoring via un protocole HTTPS sécurisé (l’utilisation d’un proxy est possible).

Tous les modules de l’agent Experience Monitoring peuvent être désactivés indépendamment les uns des autres.

L’agent démarre en tant qu’utilisateur root pour l’initialisation (ouverture du socket, chargement de la configuration, etc.), mais bascule vers un utilisateur standard pour toutes les opérations de collecte (l’utilisateur et le groupe sont configurables).

Les données collectées par l'agent sont stockées en mémoire avant d'être envoyées à Experience Monitoring et ne sont jamais stockées ailleurs.

### Profileur PHP

Le profileur PHP est une extension PHP (bibliothèque dynamique) chargée par PHP lors de l'exécution.

Il collecte des données uniquement :

- Lorsque vous effectuez des actions dans votre back-office
- Lors des requêtes émises par nos sondes (identifiées par un en-tête spécifique).

Le module ne modifie pas le comportement de l’application ; il se contente de collecter des informations de profilage concernant PHP.

Le module dispose également d’un mode « xhprof » (profilage complet de l’exécution), qui fonctionne de manière similaire mais n’est jamais activé par Experience Monitoring sans intervention de l’utilisateur.

Les données sont envoyées à l’agent via le socket Unix désigné et ne sont jamais stockées ni transmises ailleurs.
