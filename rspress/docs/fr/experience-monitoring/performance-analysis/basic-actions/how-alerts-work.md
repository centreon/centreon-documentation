---
id: how-alerts-work
title: Comprendre le fonctionnement des alertes dans Experience Monitoring
--- 

## Préambule

Experience Monitoring peut vous alerter sur de nombreux sujets, si vous n'avez pas encore souscrit aux alertes, rendez-vous ici:

[Recevoir et configurer les alertes](../../configuration/receive-and-configure-alerts.md)

Cet article vise à être exhaustif sur les alertes que vous pouvez recevoir afin de bien les comprendre et vous permettre une meilleure analyse de ces dernières.

## Alertes liées aux scénarios

>Disponible par email sur toutes les licences, néanmoins, les alertes Slack, Chat et SMS ne sont disponible sur les licences d’entrée de gamme.

Ces alertes se déclenchent lorsque nos sondes détectent une anomalie sur l'un de vos scénarios. On en distingue deux types :

### Alertes sur le statut du scenario

Ces alertes se produisent dès lors qu'un de vos scénarios suivi se trouve en erreur pendant plusieurs minutes, par défaut 3 échecs sur une période de 5 minutes.
Une notification de résolution vous est ensuite envoyée une fois que le scénario fonctionne normalement pendant plusieurs minutes, par défaut 5 succès sur une période de 5 minutes. On considère alors que l'alerte est clôturée.
Ces notifications vous sont envoyées via le canal de votre choix (mail, sms ou Slack.).

Voici une liste des alertes que nous pouvons vous envoyer:

- Chaîne attendue non trouvée
- Temps de l'étape expiré
- Temps du scénario expiré
- Code de retour invalide
- Dynamic selector not found
- Erreur réseau durant la réception des données
- Erreur lors de la négociation SSL

Ces alertes sont également visualisables sur vos scénarios, vous verrez apparaître des barres rouges sur vos graphiques.

### Alertes sur le temps d'exécution du scénario

Ces alertes sont envoyées quand nos sondes identifient une variation du temps d'exécution du scénario supérieure au seuil que vous avez défini.

Le temps actuel de parcours du scénario est comparé chaque minute à une période de référence équivalente selon vos préférences. Vous pouvez ainsi choisir parmi jour, semaine ou mois la période de référence.

Si vous êtes un mardi 12 à 16h:

- Que vous choisissez de comparer avec la valeur journalière, alors votre temps moyen à 16h sera comparé à la moyenne des X derniers jours à 16h.
- Par contre si vous vous choisissez de comparer avec la valeur hebdomadaire, cette fois votre temps moyen du mardi 16h sera comparé au temps moyen des X derniers mardi à 16.
- Enfin si vous choisissez de comparer mensuellement alors ce sera les X derniers 12 du mois.

Il est également possible d'alerter une fois qu'un temps arbitraire que vous aurez défini est dépassé par le scénario.

Ces alertes vous sont envoyées par défaut quand nous constatons un écart au moins 15 fois sur une période de 25 minutes, et résolu une fois que cet écart n'est plus constaté pendant au moins 20 minutes sur 25.

## Alertes liées à vos données business

>Disponible par défaut sur les licences Business et Full, en option sur les autres.

Les scénarios peuvent souvent permettre d'identifier les problèmes de manière très réactives, mais il est difficile de mettre en place un scénario qui pourra prendre en compte toutes les anomalies possibles. C'est pourquoi nous vous proposons de surveiller les conséquences de ces éventuelles anomalies et non plus uniquement une liste finie de causes possibles.

L'alerting business vous permet de déceler toute baisse anormale de votre trafic ou de votre conversion, et vous permet d'analyser finement les périodes pendant lesquelles une baisse est enregistrée.

Les données étant récupérées depuis Google Analytics, celles-ci sont analysées avec un décalage de 4 heures par défaut (car les données fournies par Google Analytics s'affinent avec le temps)

### Alertes sur le taux de conversion

On regarde ici si la moyenne de votre taux de conversion moyen sur une période donnée, 2 heures par défaut, est plus basse par rapport à la même période où alors en comparaison de la moyenne sur les semaines précédentes ou les mois précédents.

Cette alerte se déclenche lorsque cette comparaison donne un écart de 30 % de la conversion habituelle par défaut. Une notification de résolution est envoyée quand cette comparaison aboutit à un taux de 75 % de la conversion habituelle.

Il est également possible de choisir une valeur fixe du taux de conversion au-dessous de laquelle vous souhaitez être alerté.

### Alertes sur les pages vues

C'est exactement le même principe que pour les alertes sur le taux de conversion, mais appliqué aux pages vues par minute.
