---
id: network-data
title: Données Réseau
---

Le module **Données Réseau** permet d'avoir une vue d'ensemble de la réactivité du site au fil du temps grâce à une sonde réseau qui le contacte régulièrement.

![image](../assets/getting-started/network-view.png)

> Pour le moment, toutes les mesures sont effectuées depuis notre infrastructure en Europe. Si votre site est hébergé sur un autre continent, la latence peut être plus élevée.

Votre site est régulièrement pingué par une sonde pour vérifier qu'il répond et mesurer le temps que met cette réponse à arriver. Cela est réalisé à l'aide de pings TCP et ICMP.

- Le ping ICMP mesure la connectivité réseau de base vers le serveur via internet. Il est courant que les machines en production soient configurées pour ignorer l'ICMP (pour des raisons de sécurité, par exemple). Pour couvrir les cas où l'ICMP n'est pas autorisé, nous effectuons un second test ciblant un service qui est tenu de répondre : un ping TCP.
- Le ping TCP fonctionne sur le même principe que l'ICMP, mais sur le port 80. Le port 80 est le port standard pour le trafic HTTP et doit être ouvert pour que votre site soit accessible ; le ping TCP constitue donc un recours fiable lorsque l'ICMP est bloqué.

Consultez notre [article dédié](https://docs.centreon.com/experience-monitoring/experience-monitoring/getting-started/network-tab-indicators/) pour en savoir plus sur ce module.