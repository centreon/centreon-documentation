---
id: faq
title: FAQ
--- 

## Quels sont les ports de firewall à ouvrir pour l'agent Experience Monitoring ?

Il est nécessaire pour que l'agent fonctionne, d'autoriser en sortie les connections HTTPS [vers nos IPs](../installation/experience-monitoring-ip-addresses.md).

Pour l'installation des paquets il faudra également autoriser votre serveur à se connecter en HTTP à apt.quanta.io

Vous pouvez également mettre en place un proxy HTTP si votre serveur n'à pas d'accès direct à Internet. Vous pouvez ajouter l'URL de votre proxy dans la configuration de l'agent (*/etc/quanta/agent.yml*) en ajoutant une ligne de la forme `proxy_url: http://user:password@1.2.3.4` sous la catégorie "server".

## Je ne vois pas les données remonter, où puis-je trouver des informations pour résoudre le problème ?

L'agent utilise syslog pour générer des logs, vous les trouverez généralement dans le fichier */var/log/daemon.log* ou */var/log/syslog*. Si vous ne trouvez pas la source de l'erreur, nous vous invitons à nous contacter.

Vous pouvez envoyer les logs dans un autre fichier en remplacant la variable **file** sous la section **logger** dans le fichier */etc/quanta/agent.yml* (pensez néanmoins à mettre en place un mécanisme de rotation de logs).

## J'ai Varnish sur mon serveur et j'ai installé le module Varnish mais je ne vois pas de données remonter, comment résoudre cela ?

Il est probable que l'instance Varnish que vous utilisez ne soit pas l'instance par défaut (c'est à dire que vous utilisez le flag "-n &lt;nom&gt;" pour lancer Varnish ainsi que pour utiliser les différentes commandes d'administration).

Si c'est bien le cas, il vous suffit d'ajouter la configuration suivante dans le fichier /etc/quanta/modules.d/varnish.yml:

*varnish:*

*instance: nom_de_votre_instance*

## J'ai plusieurs instances de Redis, Memcached ou Varnish, est-ce possible de toutes les monitorer ?

Oui, c'est possible à partir de la version 1.1.0 de l'agent.

Il vous faudra pour cela spécifier un fichier de configuration par instance dans le dossier /etc/quanta/agent.yml. Par exemple pour suivre 2 instances redis différentes (une instance pour les sessions qui écoute sur le port 6379 et une autre pour le cache qui écoute sur le port 6378) on peut avoir 2 fichiers comme suit.

- /etc/quanta/modules.d/redis_sessions.yml

*module: redis*

*redis:*

*instance: sessions*

*host: 127.0.0.1*

*port: 6379*

- /etc/quanta/modules.d/redis_cache.yml

*module: redis*

*redis:*

*instance: cache*

*host: 127.0.0.1*

*port: 6378*

Ce type de configuration fonctionne de la même manière avec Memcached et Varnish, il ne faut pas oublier de remplacer le paramêtre "module" qui permet à l'agent de savoir quel module charger ainsi que la clef de configuration.

Pour varnish, le paramètre "instance" est également utilisé comme nom d'instance Varnish, il faut donc veiller à ce que cela corresponde (équivalent de l'argument "-n" en ligne de commande).

## Est-il possible de monitorer des services qui ne sont pas sur la même machine ?

Nous recommandons d'installer l'agent sur l'ensemble des serveurs de votre infrastructure, néanmoins si vous ne pouvez pas le faire sur certains de vos serveurs (base de données par exemple) et que vous souhaitez tout de même monitorer le service MySQL, vous pouvez changer le paramètre **host** dans la configuration de l'agent (*/etc/quanta/modules.d/&lt;service&gt;.yml*)

## Mon serveur est mutualisé entre plusieurs sites qui ont chacun un abonnement Experience Monitoring, comment faire pour que les données soient visibles dans les 2 sites ?

Pour rattacher un serveur à plusieurs sites, vous pouvez renseigner dans le fichier de configuration */etc/quanta/agent.yml* plusieurs tokens (un pour chaque site) en les séparent par des virgules, cela donne par exemple "quanta_token: tokensite1,tokensite2".

Le serveur sera alors crée sur les 2 sites et les données système remonteront donc sur les 2 sites.

Il y a quelques limitations à ce système si vos 2 sites utilisent également le module PHP:

- Les évènements Magento seront remontés sur les 2 sites, quelque soit le site qui les a généré.
- Les informations qui remonteront dans la partie Magento de l'interface de configuration dans Experience Monitoring seront celles de l'un ou l'autre site (et du coup ne seront pas forcément les bonnes).

## J'ai déjà installé le module Magento auparavant, comment se passe la mise à jour ?

La mise à jour se fait de manière automatique, lorsque nous recevrons les premières métriques de la nouvelle extension PHP, nous arrêterons de requêter l'ancien module Magento. Lorsqu'un scénario utilise bien le nouveau module PHP, vous verrez un flag "nouveau module" dans la configuration de vos scénarios.

Nous vous recommandons de désinstaller l'ancien module lorsque le nouveau est installé.

## Ai-je besoin de créer mon serveur dans Experience Monitoring ?

Non, la création est automatique et se fait la première fois que nous recevons des données. Si votre serveur existait déjà dans Experience Monitoring sa configuration sera mise à jour automatiquement.

Vous devrez néanmoins supprimer le serveur dans Experience Monitoring manuellement si vous le retirez de votre infrastructure.

## Je suis concerné par la sécurité de mon serveur, pouvez-vous m'expliquer un peu plus en détail comment l'agent Experience Monitoring et le module PHP fonctionnent ?

Nous nous sentons tout aussi concernés que vous de la sécurité des outils que nous vous proposons, voici une description technique de leur fonctionnement.

Tout les paquets que nous fournissons sont signés avec une clef GPG qu'il vous faut installer dans votre système de paquets et qui permet de vérifier la provenance de ces paquets.

### L'agent Experience Monitoring

L'agent Experience Monitoring est un service qui tourne en tache de fond sur votre serveur (daemon) et qui effectue plusieurs opérations:

- Collecte de données système via lecture des fichiers présents dans */proc*.
- Collecte de données sur les services actifs de votre server (Apache, Nginx, Varnish, Memcached, Redis, MySQL), via une connection au service généralement. Dans tout les cas, il n'est jamais nécéssaire de créer un utilisateur privilégié pour que l'agent puisse accéder à ces données.
- Réception des données du module PHP via une socket Unix (les droits étant configurables si besoin)
- Envoi des données collectées à Experience Monitoring via le protocole sécurisé HTTPS (il est possible d'utiliser un proxy si besoin).

Tout les modules de l'agent Experience Monitoring sont désactivables indépendamment si vous le souhaitez.

L'agent se lance en root pour sa phase d'initialisation (ouverture de sa socket, chargement de la configuration, etc) mais change en utilisateur standard pour toutes les opérations de collecte (l'utilisateur et le groupe sont configurables).

Les données récoltées par l'agent sont stockées en mémoire avant d'être envoyées à Experience Monitoring mais ne jamais stockées ailleurs.

### Le module PHP

Le module PHP est une extension PHP (sous forme de bibliothèque dynamique) qui sera donc chargée par PHP lors de l'execution de PHP sur votre serveur.

Il collecte ses données uniquement:

- Lorsque vous effectuez des actions dans votre backoffice
- Lors des requêtes effectuées par nos sondes (identifiées via un header particulier dans la requête)

Le module n'altère pas le fonctionnement de l'application, il se contente de récupérer différentes informations de profiling sur le fonctionnement de Magento.

Le module dispose également d'un mode "xhprof" (profiling complet de l'exécution), qui fonctionne sur le même principe mais n'est jamais activé par Experience Monitoring sans action de l'utilisateur.

Les données sont transmises à l'agent via la socket Unix prévue à cet effet et ne seront jamais stockées ou envoyées autre part.

Si vous avez d'autres questions précises, n'hésitez pas à contacter le support à ce sujet, nous serons ravis de vous répondre.
