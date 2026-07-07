---
id: cloud-configuration-of-agents
title: Configuration de nos agents pour le cloud
--- 

Avec l'avènement du cloud, des services managés, des IaaS et des PaaS, nos paquets ne se suffisent plus à eux même et chaque infrastructure utilise ses propres processus d'orchestration quant au déploiement de nouveaux serveurs (VM ou conteneurs).

Si c'est votre cas alors cet article est fait pour vous, vous y découvrirez comment configurer nos agents à l'aide de vos orchestrateurs.

## Procédure standard d'installation

Afin de bien comprendre la suite vous trouverez  le guide d'installation standard de notre agent est ici:

[Installer les agents systèmes](./install-system-agents.md)

 Et le guide d'installation de notre module PHP (si vous utilisez cette technologie) ici:

[Installer le profiler PHP / Magento / OroCommerce](./install-php-magento-orocommerce-profiler.md)

## Dynamisation pour le cloud

Dans le cas de déploiement automatique ou semi-automatique d'instances (VM ou conteneurs) certains champs de configurations devront être modifiés ou répliqués entre chaque instance nouvellement créées:

- **Token**: Le token d'identification doit être le même pour tous les agents Experience Monitoring d'une même licence et d'un même site, celui-ci se trouve dans le fichier de configuration "/etc/quanta/agent.yml". Le token indique à l'agent à quel site appartiennent les données monitorées.
- **Hostid**: Celui-ci se trouve également dans le fichier de configuration "/etc/quanta/agent.yml". Le hostid est un identifiant unique permettant à Experience Monitoring d'identifier de manière unique une instance:
    - Dans la grande majorité des cas le hostid doit être différents pour chaque nouvelle instance, ainsi votre nouvelle instance "front-nginx-3" n'essaiera pas d'écraser les données envoyées par l'instance "front-nginx-2"
    - Dans le cas d'auto-scaling vous pouvez avoir besoin de conserver un identifiant unique lorsque une instance est supprimée puis recréée plus tard. Par exemple si tous les soirs vers 19h vous ajoutez un quatrième front pour gérer la charge de début de soirée et le supprimez vers 21h vous voudrez surement éviter d'avoir tous les jours un nouveau graphique qui apparaisse dans vos données Experience Monitoring (et vous retrouver avec une liste très rapidement trop longues de graphiques). Dans ce cas précis il vous faudra conserver un identifiant unique à chaque fois que vous supprimez et re-créez le front en question, ainsi les données apparaitrons toujours dans le même graphique.
- **Hostname**: Toujours dans le même fichier "/etc/quanta/agent.yml", cette variable de configuration vous permet d'attribuer un label à votre instance, contrairement au hostid ce n'est pas un identifiant mais uniquement un nom afin de vous faciliter la lecture dans les graphiques, par exemple "VM prod 006 - Varnish - 3". Vous pouvez également le modifier depuis l'interface Experience Monitoring.

## Adaptation

Certains fournisseurs de Cloud proposent des services managés, AWS propose RDS et ElastiCache par exemple pour les services de base de données et de gestion de cache espectivement. Ces services managés viennent généralement clés en main et ne vous permettent pas d'installer des packets sur leurs instances.

Pour palier à cette situation vous pouvez installer un agent sur une autre instance sur laquelle vous avez la main, par exemple un front, et lui demander de monitorer également une machine distante en lui indiquant l'ip et le port du service managé concerné.

Par exemple, dans le cas de RDS il vous suffit de déployer l'agent "quanta-agent-mysql" (cf le guide standard) et de modifier le fichier de configuration de l'agent "/etc/quanta/modules.d/mysqlstat.yml" pour y indiquer le host et le port du service managé (IP et port).

De plus si vous utilisez plusieurs instances de ElastiCache ou équivalent (plusieurs types de cache ainsi que sessions) vous pouvez facilement configurer l'agent Redis (ou Varnish ou Memcached) afin de lui indiquer les différentes bases à cibler. Le guide pour ce point se trouve là:

[Ajouter les métriques avancées](./add-advanced-metrics.md)
