---
id: installation-checklist
title: Checklist d'installation
--- 

Cette liste couvre les besoins pour permettre le bon fonctionnement des différents modules d'Experience Monitoring sur un site donnée.

## Parcours utilisateur

Il n'y a **rien n’est à installer** puisqu'Experience Monitoring vient se connecter à votre application comme le ferait n'importe quel internaute.

Néanmoins, en fonction du niveau de sécurité mis en place sur votre site, vous pourriez avoir besoin d’autoriser nos IPs pour éviter que votre système "anti-robot" ne bloque nos sondes. Si vous êtes dans ce cas, vous trouverez la procédure à suivre :

[Les adresses IP d'Experience Monitoring](./experience-monitoring-ip-addresses.md)

## Real User Monitoring

Le Real User Monitoring s’installe comme n'importe quel tag marketing : via l’insertion d’un tag javascript. Pour retrouver la procédure complète et les instructions d’installation rendez-vous sur la page dédiée :

[Installer le Real User Monitoring](./real-user-monitoring-installation.md)

## Agent système

La partie système d'Experience Monitoring nécessite à minima l’installation des agents systèmes, puis l’ajout de modules selon le niveau de détails souhaité ou accessible dans votre licence.

### Installation minimale

Pour installer les agents systèmes, vous pouvez retrouver la procédure détaillée ici: 

[Installer les agents systèmes](./servers/install-system-agents.md)

### Installation pour les métriques avancées

Une fois l’agent installé, vous pouvez installer des modules supplémentaires:

- Les agents applicatifs Apache, MySQL, Varnish, … pour obtenir des informations sur chacun de ces services :
    
    [Ajouter les métriques avancées](./servers/add-advanced-metrics.md)
    
- Le profiler, compatible avec toute application PHP comme Magento ou OroCommerce :
    
    [Installer le profiler PHP / Magento / OroCommerce](./servers/install-php-magento-orocommerce-profiler.md)
    

## Evénements automatiques

Vous avez la possibilité d’ajouter des évènements manuellement dans l’interface mais également automatiquement par API. **C’est utile notamment que vous déployez une nouvelle version de votre site.** Nous recommandons dans tous les cas cette installation afin de garder trace de ces changements dans Experience Monitoring.

[Suivre automatiquement les événements de mise en production](./monitor-production-events.md)
