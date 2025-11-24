---
id: installation-checklist
title: Checklist d'installation
--- 

# Checklist d’installation de DEM

Cette liste couvre les besoins pour permettre le bon fonctionnement des différents modules de DEM sur un site donnée.

# Parcours utilisateur

**Rien n’est à installer**. Vous pouvez avoir besoin d’autoriser les IPs pour éviter que la sécurité ne les arrête.

[Les adresses IP de DEM](./dem-ip-addresses.md)

# Real User Monitoring

Le Real User Monitoring s’installe comme Google Analytics (ou autres outils du même type): via l’insertion d’un tag javascript. Pour retrouver la procédure complète et les instructions d’installation rendez-vous sur la page dédiée:

[Installer le Real User Monitoring](./real-user-monitoring-installation.md)

# Agent système

La partie système de DEM nécessite à minima l’installation des agents systèmes, puis l’ajout de modules selon le niveau de détails souhaité ou accessible avec la licence de votre entreprise.

## Installation minimale

Pour installer les agents systèmes, vous pouvez retrouver la procédure détaillée ici: 

[Installer les agents systèmes](./servers/install-system-agents.md)

## Installation pour les métriques avancées

Une fois l’agent installé, vous pouvez installer des modules supplémentaires:

- Les agents applicatifs Apache, MySQL, Varnish, … pour obtenir des informations sur les middlewares
    
    [Ajouter les métriques avancées](./servers/add-advanced-metrics.md)
    
- Le profiler PHP pour Magento ou OroCommerce
    
    [Installer le profiler PHP / Magento / OroCommerce](./servers/install-php-magento-orocommerce-profiler.md)
    

# Evénements automatiques

Vous avez la possibilité d’ajouter des évènements manuellement dans l’interface mais également automatiquement par API. **C’est utile notamment pour le déploiement de nouvelles versions.** Nous le recommandons dans tous les cas afin d’apporter un contexte à tous les utilisateurs.

[Suivre automatiquement les événements de mise en production](./monitor-production-events.md)