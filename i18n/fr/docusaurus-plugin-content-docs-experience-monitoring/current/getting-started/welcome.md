---
id: welcome
title: Centreon Experience Monitoring
description: "Premiers pas avec Centreon Experience Monitoring : mettre en place le Real User Monitoring, créer des parcours utilisateurs et superviser l'expérience numérique de vos utilisateurs."
landing: true
landing_breadcrumb: [Experience Monitoring]
hide_title: true
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

import ProductLanding from '@site/src/components/ProductLanding';

<ProductLanding
  title="Centreon Experience Monitoring"
  tagline="Mesurez de bout en bout l'expérience numérique de vos utilisateurs : utilisateurs réels, parcours synthétiques et données métier."
  searchLabel="Rechercher dans Experience Monitoring"
  stats={[
    {value: 'RUM', label: 'utilisateurs réels'},
    {value: 'STM', label: 'parcours synthétiques'},
    {value: 'Web Vitals', label: 'LCP · CLS · TBT'},
  ]}
  alternative={{
    eyebrow: 'Intégration native',
    title: 'Centreon Infra Monitoring',
    text: 'Supervisez vos parcours utilisateurs depuis Infra Monitoring avec le connecteur dédié.',
    label: 'Voir le connecteur',
    href: '/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-experience-monitoring-restapi/',
  }}
  quickStartTitle="Démarrer rapidement"
  quickStartSubtitle="les tâches les plus fréquentes"
  quickStart={[
    {icon: 'user', title: 'Mettre en place le RUM', href: '/experience-monitoring/installation/real-user-monitoring-installation/'},
    {icon: 'journey', title: 'Créer un parcours utilisateur', href: '/experience-monitoring/configuration/user-journey/create-a-scenario/'},
    {icon: 'server', title: 'Superviser des parcours non publics', kind: 'Zones STM', href: '/experience-monitoring/configuration/user-journey/stm-zones/'},
  ]}
  resourcesTitle="Ressources"
  resourcesSubtitle="références & mises à jour"
  resources={[
    {icon: 'reference', title: 'Notes de version', href: '/experience-monitoring/release-notes/'},
    {icon: 'administer', title: "Checklist d'installation", href: '/experience-monitoring/installation/installation-checklist/'},
    {icon: 'troubleshoot', title: 'Dépannage', href: '/experience-monitoring/troubleshooting/'},
    {icon: 'book', title: 'Glossaire', href: '/experience-monitoring/experience-monitoring-glossary/'},
  ]}
/>
