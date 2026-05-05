---
id: network-tab-indicators
title: Comprendre les indicateurs de l’onglet Réseau
--- 

## Qu’est ce que le ping ?

Un ping, c’est un test réseau. L’idée est d’envoyer une requête sur un serveur pour vérifier si l’on a une réponse et mesurer en combien de temps nous recevons cette réponse.

Le but est de vérifier qu’il n’y a pas de problème de communication avec les serveurs via internet.

## Différence entre TCP Ping et ICMP Ping

Dans les deux cas, il s’agit d’un test réseau. Ce qui change, c’est le protocole utilisé. (ce ne sont pas les mêmes systèmes de communication qui seront testés entre le TCP ping et l’ICMP ping).

- L’ICMP ping permet de mesurer la connectivité au serveur via le réseau internet. Néanmoins, il n’est pas rare que les machines de production ne répondent pas à l’ICMP, non pas à cause d’un incident technique mais par choix délibéré de fermer ce système de communication. Pour pallier à l’éventualité où le test ICMP ne serait pas concluant, nous effectuons un 2e test avec un serveur qui est obligé de répondre : le TCP ping.
- Le TCP ping fonctionne donc selon le même principe que l’ICMP mais via un protocole TCP, sur le port 80 : c’est le moyen de communication de vos serveurs web. Ce port 80 est forcément ouvert, car le fermer reviendrait à rendre votre site indisponible.

## Analyse

### Que signifient les barres rouges ?

Si vous voyez du rouge ponctuellement sur ce graphique, cela signifie que votre site est indisponible à cause d’un problème de réseau. Le temps de réponse du ping dépend à la fois de la bande passante et du chemin à parcourir entre la sonde Experience Monitoring et l’endroit où est hébergé votre site. Dans un souci de clarté nous allons dissocier ce qui n’est pas grave, ce qui mérite votre attention et ce qui nécessite une intervention d’urgence.

>Il est a noter qu'à l'heure actuelle, toutes les mesures sont réalisées depuis notre infrastructure en Europe. Donc si votre site est hébergé sur un autre continent, il se peut que la latence soit plus élevée.

### Quand intervenir d’urgence ?

Une barre rouge sur les deux graphiques signifie qu’il est impossible de se connecter sur votre site à cause d’un problème de réseau. Dans ce cas là, escaladez l’information à votre hébergeur ou administrateur réseau immédiatement, votre site n'est plus joignable.

### La situation qui mérite votre attention

Une augmentation conséquente du temps de réponse ou des pics récurrents sur les graphes traduisent un souci de bande passante ou une modification dans le chemin parcouru par notre sonde sur internet pour arriver sur votre site. Nous vous conseillons dans ce cas d’escalader cette information à votre hébergeur ou administrateur réseau.

### Les situations qui ne doivent pas vous inquiéter

Un pic isolé sur l’un des deux graphiques n’est pas grave, le temps d’une seule mesure il est fort probable que les utilisateurs du site n’aient pas été perturbés.

- Une barre rouge continue depuis qu'Experience Monitoring est installé sur le graphe ICMP signifie que ce système de communication est fermé délibérément, cela ne constitue pas une anomalie mais pour une meilleure visibilité sur la qualité du réseau, nous vous invitons à demander à votre administrateur réseau (ou hébergeur) d’ouvrir l’accès au Ping.
- Si une barre rouge apparaît subitement sur le graphique ICMP, mais que le test TCP fonctionne toujours, pas de panique votre site est encore disponible. Cela signifie que le système de communication ICMP a probablement été coupé délibérément.
