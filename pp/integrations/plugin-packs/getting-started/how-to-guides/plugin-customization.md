---
id: plugin-customization
title: Customizing plugin behavior
---

Le connecteur de supervision HTTP Server
créer un hôte
appliquer template
exporter la conf, les services aussi sont créés
un check est fait - commande du service response time (temps que prend la page html à répondre)
vérifier qu'on obtient bien la page demandée et pas juste une réponse d'erreur ou de maintenance
donc personnaliser e check de service
personnaliser le comportament du plugin
--help : options d'output
filter perfdata=time : garde uniquement le time

If you want to remove the former metric size, then go to **Administration > Parameters > Data** (this menu is not available in Centreon Cloud) search for your host/service and click on the service. Then select the metric(s) you want to remove and choose “Delete graphs”.