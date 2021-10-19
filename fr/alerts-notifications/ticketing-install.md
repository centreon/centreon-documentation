---
id: ticketing-install
title: Installation d'Open Tickets
---

**Centreon Open Tickets** est un module communautaire développé pour
créer des tickets vers une plateforme ITSM à l'aide des API.

Une fois la configuration du fournisseur de service effectuée, le module
permet à un opérateur de créer des tickets pour les ressources dans un
état non-ok à l'aide d'un widget dédié. En effet, un bouton associé
permet à Centreon de se connecter à l'API et de créer un ticket tout
acquittant les ressources dans Centreon.

Concernant la configuration du widget, il est possible de voir les
tickets créés en présentant l'ID des tickets ainsi que la date de
création de ceux-ci.

## Installation des paquets

Exécutez la commande suivante :

``` shell
yum install centreon-open-tickets
```

## Installation via l'interface

Après avoir installé le rpm, vous devez terminer l'installation du
module via l'interface Web. Rendez-vous dans le menu
`Administration > Extensions > Manager` et recherchez **open tickets**.
Cliquez sur **Install selection**:

![image](../assets/alerts/open_tickets_install_01.png)

Le module est maintenant installé.

![image](../assets/alerts/open_tickets_install_02.png)

