---
id: hero-time
description: Métrique Hero Time pour mesurer la durée d'interaction d'une étape
title: Hero Time
--- 

## Principe

Le Hero Time est une mesure propre à Experience Monitoring. Elle n’existe nulle part ailleurs. Il s’agit du temps que la sonde Experience Monitoring va mettre entre le début et la fin d’une étape.

Une étape débute au moment de l’action, comme cliquer sur un lien, remplir un formulaire, ajouter un objet au panier, etc. Cette action se termine quand toutes les vérifications de succès sont atteintes. Ces vérifications peuvent être par exemple l’affichage d’une popup, la navigation vers une nouvelle page, ou une requête vers un de vos serveurs. Le Hero Time mesure le temps entre ces 2 évènements. 

## Exemples

### Chargement d’une page web

La sonde arrive sur la page d’accueil du site et doit cliquer sur un lien vers une des catégories. En cliquant, une nouvelle page doit se charger. Le Hero Time mesurera le temps entre le clic sur ce lien et la fin de la réception du document HTML. L’affichage de la page se poursuivra au-delà du Hero Time mais la sonde a déjà pu confirmer que la navigation est un succès.

### Ajout d’un objet au panier

En considérant un objet simple (pas besoin de choisir de taille ou de couleur), la sonde doit simplement cliquer sur “Ajouter au panier”. Quand un utilisateur ajoute un objet au panier, il ne navigue pas vers une autre page, mais une popup doit l’informer que l’objet est bien ajouté à son panier et le logo du panier change pour afficher le nombre d’objet dedans.

Dans ce cas, les vérifications de succès attendues sont multiples:

- Une requête vers /add-to-cart?id=id-de-mon-objet doit être faite et réussie
- La popup doit s’afficher
- Le chiffre dans le panier doit changer

La sonde clique sur “Ajouter au panier”. La requête vers /add-to-cart?id=id-de-mon-objet se lance. Le Hero Time continue d’augmenter car la requête est lancée mais le serveur n’a pas encore répondu.

Le serveur répond, la requête est validée. La première vérification est donc réussie mais le Hero Time continue d’augmenter car les autres vérifications ne sont pas validées.

Une fois la requête validée, la popup s’affiche quasiment instantanément. La deuxième vérification est validée

Mais le chiffre dans le panier ne se met à jour que toutes les 10 secondes. La sonde attend donc de voir le chiffre changer. Au bout de quelques secondes, il change. La dernière vérification est validée, le Hero Time s’arrête.
