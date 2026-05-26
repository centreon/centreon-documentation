---
id: gray-areas-on-charts
title: Que signifie une zone grise sur mon graphique ?
--- 

Une zone grise sur le graphique indique qu'Experience Monitoring n’a pas pu récupérer de donnée durant cette période ou que les données étaient nulles ou inexistantes.

Cela peut être le cas si :

- un scénario a été désactivé manuellement par un administrateur du site pendant une période donnée (auquel cas des évènements doivent l’indiquer au début et la fin de la période grise)
- un serveur dans la section Système a cessé de nous envoyer ses données (exemple : problème réseau ou arrêt momentané d’un serveur hébergeant le site monitoré)
- on observe les données du profiler Experience Monitoring (section “Applications” dans le cas où l’application est en PHP) et si la page a été mise en cache à 100% (par exemple par un Varnish). Dans ce cas précis, il n’y aura aucune execution du code PHP, et donc pas de données à enregistrer.

Enfin, il peut également arriver, dans des cas relativement rares, que les sondes STM d'Experience Monitoring soient non-fonctionnelles pendant quelques minutes. Dans le but de ne pas fausser l'analyse en donnant l’impression que le site était inaccessible, Experience Monitoring affiche également une zone grise (rouge étant la couleur indiquant un incident sur le site observé).
