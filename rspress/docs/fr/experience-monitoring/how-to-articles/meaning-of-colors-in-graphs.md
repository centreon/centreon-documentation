---
id: meaning-of-colors-in-graphs
title: Que signifient les barres vertes-jaunes-rouges et grises dans les graphes ?
--- 

## Préambule

Il peut vous arriver de constater, en naviguant sur vos graphes Experience Monitoring, de voir apparaître des barres ou parfois des zones rouges ou grises avec des données incomplète. Mais qu'est-ce que ça peut bien vouloir dire ?

## Barres supérieures

![Image](../assets/how-to-articles/color-meaning-in-graphs-1.png)

Au-dessus de la plupart des graphs, vous trouverez une barre supérieure de couleur verte, jaune, ou rouge. Chaque couleur a sa signification:

- Vert: le résultat est bon
- Jaune: le résultat est bon mais le site peut être amélioré
- Rouge: le résultat doit être amélioré

Dans cette exemple, le Speed Index peut être amélioré.

En passant votre souris sur les quartiers dans cette bande supérieure, Experience Monitoring mettra en surbrillance les quartiers de même couleur.

## Barres verticales

### Barres rouges

![Image](../assets/how-to-articles/color-meaning-in-graphs-2.png)

Ces barres rouges qui peuvent s'afficher sur vos scénarios mettent en évidence des erreurs qui ont pu se produire lors de l'exécution de celui-ci.

Pour connaitre la nature de l'erreur, vous pouvez tout simplement pointer la barre rouge, ce qui vous indiquera à quelle étape le scénario s'est arrêté et pour quelle raison.

En cliquant dessus, on vous proposera également de visionner une capture d'écran de la page au moment de l'erreur, ce qui est souvent utile pour comprendre ce qui s'est passé.

### Barres grises

Vous retrouverez parfois sur les différents graphiques d'Experience Monitoring des barres grises comme ci-dessus, celles-ci indiquent simplement que les données n'ont pas pu être reçues au moment de la mesure.

Cela peut se produire principalement dans 2 cas:

- vous visualisez une période où la sonde n’était pas configuré pour passer (scénario pas encore créée ou désactivée par exemple)
- le site ne répond pas du tout. (Vous redémarrez un serveur, ou que celui-ci est tellement saturé qu'il n'arrive plus à faire de remontées de données)

Globalement, ces barres grises apparaissent quand l'infrastructure n'a pas été en mesure de produire les données.
