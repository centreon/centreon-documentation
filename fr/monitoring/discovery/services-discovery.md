---
id: services-discovery
title: Découverte des services
---

Une fois les règles de découverte programmées, il est possible de les exécuter au travers de l’interface web Centreon.
Pour cela, se connecter et accéder au menu **Configuration > Services > Auto Discovery > Scan**.

Commencez à saisir le nom de l’hôte sur lequel réaliser la découverte et l’interface vous proposera de compléter
automatiquement ce dernier :

![image](../../assets/configuration/autodisco/manual_scan_select_host.png)

Sélectionnez ensuite la commande de découverte à exécuter dans la liste déroulante qui vient d’apparaître :

![image](../../assets/configuration/autodisco/manual_scan_select_command.png)

> Si cette liste est vide, cela signifie que cet hôte n’appartient pas à un groupe d’hôtes lié à une règle de découverte.

Cliquez sur le bouton **Scan** et patienter durant l’analyse des éléments disponibles :

![image](../../assets/configuration/autodisco/manual_scan_wait.png)

Le résultat s’affiche. Sélectionnez les éléments à intégrer à la supervision et cliquez sur le bouton **Save** :

![image](../../assets/configuration/autodisco/manual_scan_result.png)

Les éléments ont été ajoutés et il n’est plus possible de les sélectionner :

![image](../../assets/configuration/autodisco/manual_scan_added.png)

> Dans la liste de résultat de la découverte des éléments, il se peut que certains éléments ne puissent être sélectionnés.
> Cela indique qu’ils font déjà partie de la configuration.

Les services ont été ajoutés et sont visibles dans le menu **Configuration > Services > Services by host**:

![image](../../assets/configuration/autodisco/manual_scan_services.png)
