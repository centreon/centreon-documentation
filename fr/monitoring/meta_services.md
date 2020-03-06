---
id: meta-services
title: Les méta-services
---

## Definition

Un méta-service est un service virtuel permettant l’agrégation de métriques issues de différents services au travers
d’une opération mathématique. Les méta-services sont gérés de la même manière qu’un service c’est à dire qu’ils
possèdent des seuils, un processus de notification, génèrent un graphique de performance...

Exemple : Il est possible de déterminer la consommation totale de trafic WAN en additionnant au sein d’un méta-service
l’ensemble des services supervisant le trafic WAN unitairement.

### Les types de calcul

Plusieurs types de calculs sont possibles sur les métriques récupérées :

* **Average** : réalise la moyenne des données de performances
* **Sum** : réalise la somme des données de performances
* **Min** : récupère le minimum de l’ensemble des données de performances
* **Max** : récupère le maximum de l’ensemble des données de performances

### Les types de sources de données

Le résultat du calcul est une donnée de performance (métrique) qui génèrera un graphique de performance. Afin de tracer
au mieux le résultat, il faut sélectionner le type de source de données (par défaut GAUGE). Les types de sources de
données disponibles sont :

* Le type **GAUGE** enregistre une valeur instantanée (température, humidité, CPU, ...)
* Le type **COUNTER** enregistre une valeur incrémentale par rapport au résultat précédent
* Le type **DRIFT** stockera la dérivée de la ligne allant de la dernière à la valeur courante de la source de données.
  Cela peut être utile pour des jauges, par exemple, de mesurer le taux de personnes entrant ou quittant une pièce.
* Le type **ABSOLUTE** est pour les compteurs qui se réinitialisent à la lecture. Il est utilisé pour les compteurs
  rapides qui ont tendance à déborder.

> Plus d’informations sur le site de [RRDTools](http://oss.oetiker.ch/rrdtool/doc/rrdcreate.en.html).

## Configuration

Pour ajouter un méta-service :

Rendez-vous dans le menu : **Configuration \> Services \> Meta Services** et cliquez sur le bouton **Add**

![image](assets/configuration/02addmetaservice.png)
 
### Informations générales

* Le champ **Meta Service Name** correspond au nom du méta-service affiché dans l’interface.
* Le champ **Output format string (printf-style)** correspond au message de sortie (‘output’) visible dans Centreon.
  La valeur “%d” correspond à la valeur calculée par le méta-service.
* Le champ **Warning level** and **Critical level** correspondent respectivement aux seuils "WARNING" et
  "CRITICAL" du méta-service.
* Les champs **Calculation Type** et **Data source Type** correspondent respectivement aux calculs et à la description
  de la source de données
* Le champ **Selection Mode** ermet de sélectionner les services contenant les métriques qui entreront dans le calcul
  du méta-service.

Si l'option **Service list** est sélectionnée alors les métriques choisies seront issues de services sélectionnés
manuellement.

Si l’option **SQL matching**  est sélectionnée alors les services utilisés seront sélectionnés automatiquement par
Centreon via une recherche à partir du champ Expression SQL à rechercher de type LIKE. La métrique à utiliser sera dans
ce cas à sélectionner dans la liste déroulante Métrique.

> Plus d’informations sur le formatage [PRINTF](http://en.wikipedia.org/wiki/Printf_format_string).

### Etat du Meta Service

* Le champ **Check Period** définit la période temporelle durant laquelle l’ordonnanceur vérifie le statut du méta-service.
* Le champ **Max Check Attempts** définit le nombre de contrôles à effectuer avant de valider le statut du méta-service
  : lorsque le statut est validé, une notification est envoyée.
* Le champ **Normal Check Interval** est exprimé en minutes. Il définit l’intervalle entre chaque vérification lorsque
  le statut du méta-service est OK.
* Le champ **Retry Check Interval** est exprimé en minutes. Il définit l’intervalle de validation du statut non-OK du
  méta-service.

### Notification 

* Le champ **Notification Enabled** permet d’activer les notifications.
* Le champ **Linked Contacts Groups** permet de définir les groupes de contacts qui seront alertés.
* Le champ **Notification Interval** est exprimé en minutes et permet de définir l’intervalle de temps entre l’envoi
  de deux notifications.
* Le champ **Notification Period** permet de définir la période de notification.
* Le champ **Notification Type** définit les types de notifications envoyées.

### Informations supplémentaires

* La liste **Graphic Template** définit le modèle de graphique utilisé par ce méta-service.
* Les champs **Status** et **Comments** permettent d’activer / désactiver ou de commenter le méta-service.

## Sélectionner manuellement des services

Si vous avez choisi l’option **Service list**, au sein de l’écran regroupant l’ensemble des méta-services :

1. Cliquez sur fsuivant pour sélectionner les métriques entrant en jeu dans le calcul du méta-service. Ces métriques
  sont appelées indicateurs. ![image](assets/configuration/common/flechedirection.png)
2. Cliquez sur le bouton **Add**

![image](assets/configuration/02metaservicesindicators.png)

* Le champ **Host** permet de sélectionner l’hôte auquel le service à sélectionner appartient.
* Le champ **Service** permet de choisir le service (première liste) ainsi que la métrique au sein de ce service
  (seconde liste).
* Les champs **Status** et **Comment** permettent d’activer / désactiver ou de commenter l’indicateur.

3. Répétez l’opération jusqu’à avoir ajouté tous les indicateurs nécessaires au calcul du méta-service.

> Un méta-service est à considérer comme service régulier. Il est nécessaire de générer la configuration de
> l’ordonnanceur central, d’exporter cette dernière puis de redémarrer l’ordonnanceur.
