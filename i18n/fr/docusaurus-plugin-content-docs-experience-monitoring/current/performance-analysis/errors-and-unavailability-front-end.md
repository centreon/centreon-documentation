---
id: errors-and-unavailability-front-end
title: Comprendre les erreurs & indisponibilités dans Experience Monitoring
--- 

>Le HAR de toutes les étapes peut être trouvé sous le screenshot d’incident afin d’aider vos développeurs à comprendre d’où venait les incidents.

## Comment visualiser la capture d’écran de l’incident ?

Le meilleur moyen pour déterminer l’anomalie est de vérifier la capture d’écran prise au moment de l’erreur, celle-ci est disponible en cliquant sur la partie rouge au dessus du scénario et en sélectionnant « Détails de l’incident »:

Lorsque les sondes Experience Monitoring détectent un incident sur votre scénario web, elles tentent d'enregistrer un screenshot de la page renvoyée pour vous permettre de diagnostiquer plus facilement.

Vous pouvez visualiser ce screenshot en cliquant sur le graph dans la zone rouge et en sélectionnant l'option "voir le screenshot".

![image](../assets/performance-analysis/errors-and-unavailability-1.png)

Une fenêtre s'ouvre alors et vous montrera la page renvoyée lors de l'incident.

![image](../assets/performance-analysis/errors-and-unavailability-2.png)

## Pourquoi n’ai-je pas de screenshot dans les détails de l’un de mes incidents ?

Nos sondes ne sont pas parvenues à prendre le screenshot. Cela arrive notamment lorsque le serveur n'a pas renvoyé de contenu (par exemple lors de l'erreur "Temps de l'étape expirée").

## Les types d’erreurs

### Chaîne / élément attendue non trouvée

À chaque étape du scénario, il est possible de paramétrer une chaine de caractère attendue sur la page, cela permet de vérifier que c’est bien la page attendue qui est ouverte par le scénario.

L’erreur « Chaîne attendue non trouvée » se produit quand la chaîne de caractère paramétrée n’est pas retrouvée sur la page.

Quelques raisons possibles:

- La page a été modifiée et la chaîne de caractère vérifiée n’existe plus dessus, il faut dans ce cas modifier la chaîne de caractère attendue pour que celle ci corresponde à un élément sur la page.
- La page n’existe plus et le scénario a été redirigé vers une page différente (produit qui n’existe plus par exemple), il faut dans ce cas mettre à jour le scénario pour qu’il appelle bien une page existante, et mettre à jour la chaîne attendue pour qu’elle corresponde à un élément sur la nouvelle page
- Plus rare, il se peut que la page ne se soit pas chargée entièrement.

### Timeout du parcours utilisateurs

Cela signifie que le parcours utilisateurs a mis plus de temps que le temps qui lui était accordé. Un scénario qui passe toutes les 3 minutes a 3 minutes maximum pour faire le parcours entier.

Il n’y a donc pas forcément d’erreur dans les actions, seulement pas assez de temps.

### Timeout de l’étape

Cela signifie que l’étape a pris plus de temps que le temps maximum qui lui est accordé.

Cela peut venir de plusieurs problèmes:

- Le temps de chargement est trop long
- Le temps de l’étape est trop court
- La vérification a faire est mal configurée: l’étape ne la trouvera jamais et donc attendra indéfiniment.

### Code de retour invalide

Lorsqu’une page web se charge, elle envoie un code pour confirmer qu’elle a été chargée correctement; le plus souvent le code 200. Ce code est vérifié par Experience Monitoring lors de l’execution du scénario.

Ainsi, si la page renvoie un code différent (404 pour page introuvable ou 503 service non disponible par exemple), le scénario se met en erreur en précisant le code obtenu.

Il se peut que la page n'existe plus tout simplement (produit retiré de la vente par exemple) auquel cas il faut mettre à jour le scénario pour qu'il utilise une page encore fonctionnelle.

S’il s'agit bien d'une erreur et que la page ne s'affiche pas correctement, il faut alors investiguer le cas.

### Impossible de résoudre l'hôte

Assez rare, cela indique qu'il n'a pas été possible de récupérer l'IP du site, ce qui est le plus souvent révélateur d'un problème au niveau du DNS qui est censé la fournir.
