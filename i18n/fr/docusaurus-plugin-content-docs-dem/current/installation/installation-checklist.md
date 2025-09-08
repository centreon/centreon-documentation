---
id: installation-checklist
title: Checklist d'installation
--- 

# Checklist d’installation de Quanta

Cette liste couvre les besoins pour permettre le bon fonctionnement des différents modules de Quanta sur un site donnée.

# Parcours utilisateur

**Rien n’est à installer**. Vous pouvez avoir besoin d’autoriser les IPs pour éviter que la sécurité ne les arrête.

[Les adresses IP de Quanta](Les%20adresses%20IP%20de%20Quanta%20fe266c2b790649f28b33d1c9c0a1a51a.md)

# Real User Monitoring

Le Real User Monitoring s’installe comme Google Analytics (ou autres outils du même type): via l’insertion d’un tag javascript. Pour retrouver la procédure complète et les instructions d’installation rendez-vous sur la page dédiée:

[Installer le Real User Monitoring](Installer%20le%20Real%20User%20Monitoring%20fa29c4e7154540579d91d32719616546.md)

# Agent système

La partie système de Quanta nécessite à minima l’installation des agents systèmes, puis l’ajout de modules selon le niveau de détails souhaité ou accessible avec la licence de votre entreprise.

## Installation minimale

Pour installer les agents systèmes, vous pouvez retrouver la procédure détaillée ici: 

[Installer les agents systèmes](Installer%20les%20agents%20syst%C3%A8mes%200b72daf5790f48cebc84ee760b81ef37.md)

## Installation pour les métriques avancées

Une fois l’agent installé, vous pouvez installer des modules supplémentaires:

- Les agents applicatifs Apache, MySQL, Varnish, … pour obtenir des informations sur les middlewares
    
    [Ajouter les métriques avancées](Ajouter%20les%20m%C3%A9triques%20avanc%C3%A9es%202661aa6dad7f4b4487bc0a53513b8445.md)
    
- Le profiler PHP pour Magento ou OroCommerce
    
    [Installer le profiler PHP / Magento / OroCommerce](Installer%20le%20profiler%20PHP%20Magento%20OroCommerce%2015ba69c7c03f4aad8bd54e10d5ee8d61.md)
    

# Evénements automatiques

Vous avez la possibilité d’ajouter des évènements manuellement dans l’interface mais également automatiquement par API. **C’est utile notamment pour le déploiement de nouvelles versions.** Nous le recommandons dans tous les cas afin d’apporter un contexte à tous les utilisateurs.

[Suivre automatiquement les événements de mise en production](Suivre%20automatiquement%20les%20%C3%A9v%C3%A9nements%20de%20mise%20en%20p%20f8560b2885dc4386a150b967388f8a4b.md)