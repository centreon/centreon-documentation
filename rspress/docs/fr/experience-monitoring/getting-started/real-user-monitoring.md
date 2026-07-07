---
id: real-user-monitoring
title: Le Real User Monitoring (ou RUM)
--- 

Appelé “RUM” pour les intimes, le “Real User Monitoring” consiste à observer et analyser **l'expérience perçue par les internautes réels**, et ce directement depuis leurs navigateurs quels qu’ils soient.

![image](../assets/getting-started/rum-1.png)

Il est important de noter que :

- cette fonctionnalité implique l’ajout d’un **tag externe** dans la page, qui est conçu pour être chargé de façon **asynchrone** et être **extrêmement léger dans son fonctionnement** afin de ne pas ralentir la navigation de l’internaute sur le site.
- le type de données remontées par le navigateur grâce au tag Experience Monitoring ainsi que la manière dont Experience Monitoring enregistre ces éléments dans sa base de donnée garantissent **l’exclusion du tag Experience Monitoring du périmètre de la GDPR**. En effet, les chiffres remontés via le tag sont purement techniques et **non nominatifs**. Le tableau de bord Experience Monitoring permet d’observer le comportement du site pour différents type de navigateurs (Chrome, Safari Mobile, EDGE, ...) mais sans possibilité d'identifier un internaute unique.

Une fois ce tag mis en place, Experience Monitoring est capable d’enregistrer l’expérience perçue par l’ensemble des internautes **avec ou sans échantillonnage** ce qui permet d’obtenir une vue très précise des métriques clés de performance (ex: TTFB, Speed Index, temps de chargement complet de la page, etc.)

Les **bénéfices clés** apportés par le RUM sont :

- une vue **objective** de la performance car mesurée **par les internautes eux-mêmes**. Exemple : si le site est majoritairement consulté par des internautes utilisant Safari et que le code du site fonctionne particulièrement mal sur celui-ci, il sera immédiatement visible qu’un problème **sur ce navigateur en particulier** impacte une majorité du trafic du site.
    
![image](../assets/getting-started/rum-2.png)
    
- une vue **exhaustive** de la performance pour **toutes les pages** consultées par les internautes. C’est une différence majeure par rapport au [Monitoring Synthétique](./synthetic-monitoring.md) qui mesure certaines pages ou parcours de référence. A l’inverse, le collecteur de donnée RUM va enregistrer les métriques de performance (TTFB, Speed Index, etc.) **à chaque fois qu’un clic est réalisé** sur le site. Le résultat est la construction d’une vue croisée et actualisée en temps réel des pages les + consultées avec leurs notations respectives quant à la performance :
    
![image](../assets/getting-started/rum-3.png)
    

> A suivre : comment [Installer le Real User Monitoring](../installation/real-user-monitoring-installation.md).
