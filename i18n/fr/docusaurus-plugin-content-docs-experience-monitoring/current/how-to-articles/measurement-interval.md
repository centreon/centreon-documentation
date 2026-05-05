---
id: measurement-interval
title: Intervalle de mesure
--- 

## Définition

L'intervalle de mesure d'un parcours utilisateur définit le temps entre chaque passage de la sonde Experience Monitoring sur votre site.

Par exemple : si votre intervalle de mesure est de 3 minutes, la sonde effectuera donc un passage complet du parcours toutes les 3 minutes.

Attention : cela signifie aussi que le temps total de l'exécution de votre parcours utilisateur ne doit pas dépasser cet intervalle de temps.

## Configuration

L'intervalle de mesure d'un parcours utilisateur est configurable dans les paramètres avancés de chaque parcours.

[Création d’un scénario (”Parcours Utilisateur”)](../configuration/user-journey/create-a-scenario.md)

## Implications

Modifier l'intervalle de mesure a plusieurs implications :

- Si l'intervalle est réduit, certaines zones grises apparaitrons sur vos anciennes données car le nombre de points affichés dans les graphiques ne sera pas le même que précédemment
- La configuration des alertes de ce parcours sera automatiquement changée pour prendre en compte ce nouvel intervalle de mesure
