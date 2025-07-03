---
id: troubleshooting
title: Troubleshooting MBI
---

## Generated report is empty

A cronjob is launched at approximately 4h30 AM that will compile and calculate all the data of the day before. CBIS then goes into the compiled data at the scheduled time to pick out the data relevant to the report it needs to generate. If reports are being generated without data in them, it's possible CBIS is sending its SQL requests before the cronjob is finished and so the data CBIS requests does not exist yet. Try pushing back the cyclic launch hour so that CBIS does not request data before the cronjob has finished. 


lien vers notre section bonne pratiques en demandant à l'utilisateur s'il a bien suivi les recommendations

on ne sait pas dans l'interface si tes paramètres de rétention sont trop élevés (obligé de faire un df -h)

Quand une partition est trop remplie tu peux perdre des données, perdre la synchro entre central et pollers - aucun moyen simple de récupération dans Centreon, l'utilisateur est dépendant du support si sa partition est pleine


trop de choses dans general options et tout dépend de la même table : si trop de données, la requête ne passe pas, il faut faire les modifs en base (ville de paris)