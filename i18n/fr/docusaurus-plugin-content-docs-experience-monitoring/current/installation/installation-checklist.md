---
id: installation-checklist
title: Checklist d'installation Experience Monitoring
---

Cette liste présente les prérequis nécessaires au bon fonctionnement des différents modules de Centreon Experience Monitoring sur un site donné. (Notez que certaines fonctionnalités peuvent ne pas être incluses dans votre licence.)

## [Parcours utilisateurs / Monitoring synthétique (STM)](../configuration/user-journey/user-journey-intro.md)

Aucune installation n'est nécessaire, car Experience Monitoring se connecte à votre application comme n'importe quel utilisateur ordinaire.

Cependant, selon le niveau de sécurité de votre site, vous devrez peut-être autoriser nos adresses IP afin que votre système anti-bot ne bloque pas nos sondes.

<details>
<summary>
**Liste des adresses IP à mettre en liste blanche**
</summary>

Nos sondes peuvent interroger votre site sur les ports 80 (HTTP) et 443 (HTTPS) ou utiliser le protocole ICMP. Pour la plupart des sites accessibles publiquement, aucune configuration n'est requise ; cependant, dans certains cas, des pare-feux ou des protections anti-bot comme Imperva ou reCaptcha peuvent bloquer automatiquement nos visites. Assurez-vous que ces adresses IP sont en liste blanche :

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

## [Real User Monitoring (RUM)](../rum/rum-intro.md)

Le Real User Monitoring s'installe comme n'importe quel tag marketing : en insérant un tag JavaScript dans l'élément HEAD de votre site. Pour la procédure complète et les instructions d'installation, consultez [Installer le Real User Monitoring](./real-user-monitoring-installation.md).

## [Sobriété numérique](../digital-sobriety/digital-sobriety-concepts.md)

Les scores de sobriété numérique sont calculés à partir des données STM et RUM. Si STM et RUM sont correctement installés et configurés, aucune installation supplémentaire n'est requise.

## [Données business (Google Analytics / Matomo)](../configuration/configure-google-analytics.md)

Pour corréler vos données business avec les autres données d'Experience Monitoring, vous devez [associer votre compte Google Analytics ou Matomo à Experience Monitoring](../configuration/configure-google-analytics.md).

Dans la page **Données business** :

* L'onglet **Parcours et revenus** contient des données uniquement si vous avez configuré un [parcours utilisateur](#parcours-utilisateurs--monitoring-synthétique-stm).

* L'onglet **Coût d'infrastructure / clic** contient des données uniquement si vous avez configuré un agent collectant des [données système](#données-système-santé-du-serveur-hôte).

## [Données système (santé du serveur hôte)](../installation/servers/install-system-agents.md)

Pour superviser la santé de votre serveur hôte, vous devez installer un agent système sur celui-ci. Des modules supplémentaires peuvent être ajoutés selon le niveau de détail souhaité ou autorisé par votre licence.

* [Installez l'agent système](./servers/install-system-agents.md) pour récupérer les informations de base sur votre serveur.
* Une fois l'agent installé, vous pouvez installer des modules supplémentaires :

   * Si votre application fonctionne sur Apache, MySQL, Varnish (...), [installez un agent dédié](./servers/add-advanced-metrics.md) pour collecter les données de ces services.
   * Si vous utilisez une application PHP (par exemple Magento ou OroCommerce), [installez le profileur PHP](./servers/install-php-magento-orocommerce-profiler.md).

## [Performance réseau](../performance-analysis/network-tab-indicators.md)

Aucune action n'est requise — les données apparaissent automatiquement dans la page **Données réseau**.

## [Tests de charge](../how-to-articles/performing-load-tests.md)

Pour pouvoir exécuter des tests de charge, il vous suffit de configurer un parcours utilisateur. Aucune installation supplémentaire n'est nécessaire.
