---
id: network-tab-indicators
title: Données réseau
---

Le module **Données réseau** vous permet de configurer un ping régulier sur votre site afin de mesurer le temps de réponse. Les résultats du ping dans le temps sont visibles sur un graphique chronologique en cliquant sur **Données réseau** dans le menu principal.

## Qu'est-ce qu'un ping ?

Un ping est un test réseau. Le principe consiste à envoyer une requête à un serveur pour vérifier qu'il répond et mesurer le temps nécessaire pour recevoir cette réponse.

L'objectif est de vérifier qu'il n'y a pas de problème de communication avec les serveurs sur internet.

> Pour le moment, toutes les mesures sont effectuées depuis notre infrastructure en Europe. Si votre site est hébergé sur un autre continent, la latence peut être plus élevée.

### Différence entre TCP Ping et ICMP Ping

Les deux sont des tests réseau. La différence réside dans le protocole et la manière dont chacun communique.

- Le ping ICMP mesure la connectivité réseau de base avec le serveur sur internet. Il est courant que les machines de production soient configurées pour ignorer l'ICMP (non pas à la suite d'un incident, mais délibérément). Pour couvrir les cas où l'ICMP n'est pas autorisé, nous effectuons un second test ciblant un service qui est tenu de répondre : un ping TCP.
- Le ping TCP fonctionne sur le même principe que l'ICMP, mais utilise TCP sur le port 80, qui est le protocole utilisé par vos serveurs web. Le port 80 doit être ouvert pour que votre site soit accessible ; le ping TCP constitue donc une solution de repli fiable lorsque l'ICMP est bloqué.

## Comprendre les résultats

### Que signifient les zones grises et rouges ?

Le gris signifie qu'aucune donnée n'est disponible pour cette section. Il apparaît pour la période antérieure à l'activation de la fonctionnalité **Données réseau** et pour les périodes où aucun ping n'a été effectué.

Le rouge signifie que votre site était inaccessible en raison d'un problème réseau. La sonde a envoyé le ping mais n'a jamais reçu de réponse. Le temps de réponse au ping dépend à la fois de la bande passante et du chemin entre la sonde Experience Monitoring et votre hébergement. Des barres rouges isolées et de courte durée ne sont pas préoccupantes, car des interruptions peuvent survenir pour diverses raisons.

### Situations qui méritent votre attention

Vous devriez contacter votre administrateur réseau ou l'hébergeur de votre site dans les cas suivants :

- Les deux graphiques affichent des barres rouges. Cela signifie que le site est inaccessible via les deux protocoles. Il s'agit d'un incident réseau en cours.
- Les temps de réponse ont significativement augmenté ou des pics récurrents apparaissent sur l'un ou les deux graphiques. Cela indique un problème de bande passante ou un changement dans le chemin de routage entre la sonde et votre serveur.

### Situations qui ne sont généralement pas préoccupantes

- Un pic isolé sur un seul graphique. Il s'agit très probablement d'une anomalie de mesure ponctuelle sans impact sur les utilisateurs finaux.
- L'ICMP affiche du rouge en permanence depuis la configuration. Il ne s'agit très probablement pas d'un incident, mais d'un signe que l'ICMP est désactivé pour votre site. Demandez à votre administrateur réseau ou à votre hébergeur d'activer l'ICMP si vous souhaitez une visibilité complète.
- L'ICMP passe au rouge mais le TCP reste vert. Votre site est toujours accessible. L'ICMP a probablement été bloqué tandis que le service web reste disponible sur le port 80.
