---
id: troubleshooting
title: Troubleshooting MBI
---

lien vers notre section bonne pratiques en demandant à l'utilisateur s'il a bien suivi les recommendations

on ne sait pas dans l'interface si tes paramètres de rétention sont trop élevés (obligé de faire un df -h)

Quand une partition est trop remplie tu peux perdre des données, perdre la synchro entre central et pollers - aucun moyen simple de récupération dans Centreon, l'utilisateur est dépendant du support si sa partition est pleine


trop de choses dans general options et tout dépend de la même table : si trop de données, la requête ne passe pas, il faut faire les modifs en base (ville de paris )