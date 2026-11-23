---
id: introduction
title: Introduction
description: "Automatisez Centreon avec ses API REST : Centreon Web (v2), Autodiscovery, MAP et BAM, avec une première requête en trois étapes, Postman, l'API v1 et CLAPI."
landing: true
landing_breadcrumb: [Infra Monitoring, OnPrem, API]
hide_title: true
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

import ApiLanding from '@site/src/components/ApiLanding';

<ApiLanding
  eyebrow="API Centreon"
  title="Automatisez Centreon avec ses API"
  tagline="Créez votre configuration depuis votre CMDB, lisez le statut temps réel de vos ressources, lancez des découvertes et construisez des cartes. Chaque API est documentée endpoint par endpoint, et vous pouvez essayer chaque requête depuis cette documentation."
  actions={[
    {label: "Démarrer avec l'API v2", href: '~/api/reference/web/centreon-web-restapi'},
    {label: 'Créer un jeton d\'API', href: '~/api/authentication-tokens'},
  ]}
  facts={[
    {value: '4', label: 'API REST'},
    {value: '320+', label: 'endpoints documentés'},
    {value: 'OpenAPI', label: 'définitions à télécharger'},
  ]}
  sample={{
    title: 'Votre première requête',
    code: 'curl "https://<your-centreon-server>/centreon/api/latest/monitoring/hosts?limit=20" \\\n  -H "X-AUTH-TOKEN: <token>"',
    caption: 'Liste 20 hôtes avec leur statut temps réel.',
  }}
  apisTitle="Choisissez votre API"
  apisSubtitle="chacune a une page de démarrage et une page par endpoint"
  apis={[
    {
      icon: 'extend',
      name: 'Centreon Web REST API',
      badge: 'API v2',
      text: "L'API principale : la configuration de votre plateforme, la supervision temps réel et l'administration.",
      uses: ['Hôtes et services', 'Acquittements et plages de maintenance', 'Utilisateurs et droits'],
      cta: 'Démarrer',
      href: '~/api/reference/web/centreon-web-restapi',
    },
    {
      icon: 'discover',
      name: 'API Autodiscovery',
      text: 'Découvrez des hôtes avec les fournisseurs de vos connecteurs, et ajoutez-les à votre configuration.',
      uses: ['Fournisseurs et identifiants', 'Tâches de découverte', 'Hôtes découverts'],
      cta: 'Démarrer',
      href: '~/api/reference/autodiscovery/centreon-auto-discovery-api',
    },
    {
      icon: 'image',
      name: 'API MAP',
      text: 'Créez et modifiez des cartes et des vues, et gérez qui peut les voir.',
      uses: ['Cartes', 'Vues', "Droits d'accès"],
      cta: 'Démarrer',
      href: '~/api/reference/map/centreon-map-api',
    },
    {
      icon: 'dashboard',
      name: 'API BAM',
      text: 'Lisez vos vues métier, vos activités métier et leurs indicateurs, avec leur statut temps réel.',
      uses: ['Vues métier', 'Activités métier', 'Indicateurs'],
      cta: 'Démarrer',
      href: '~/api/reference/bam/centreon-bam-api',
    },
  ]}
  stepsTitle="Votre première requête"
  stepsSubtitle="en trois étapes"
  steps={[
    {
      title: "Trouvez l'URL de l'API",
      text: 'Toutes les requêtes vont vers votre serveur central :',
      code: 'https://<your-centreon-server>/centreon/api/latest',
    },
    {
      title: 'Obtenez un jeton',
      text: "Créez un jeton d'API dans Administration > Jetons d'authentification. Il fonctionne avec toutes les API.",
      link: {label: "Jetons d'authentification", href: '~/api/authentication-tokens'},
    },
    {
      title: 'Envoyez votre requête',
      text: "Envoyez le jeton dans l'en-tête X-AUTH-TOKEN, ou essayez la requête depuis n'importe quelle page d'endpoint, avec Envoyer la requête.",
      code: 'X-AUTH-TOKEN: <token>',
    },
  ]}
  moreTitle="Autres façons d'automatiser"
  moreSubtitle="guides et API précédentes"
  more={[
    {icon: 'send', title: "Utiliser l'API v2 avec Postman", text: "Importez l'API dans Postman et envoyez vos premières requêtes.", href: '~/api/rest-api-v2'},
    {icon: 'book', title: "Automatiser MAP via l'API", text: "Un scénario complet, de la connexion à l'ajout d'une forme sur une carte.", href: '~/api/map-api'},
    {icon: 'reference', title: 'Rest API (v1)', badge: 'v1', text: "La première version de l'API REST, pour la configuration.", href: '~/api/rest-api-v1'},
    {icon: 'administer', title: 'Command Line API (v1) - CLAPI', badge: 'v1', text: 'Gérez la configuration en ligne de commande sur le serveur central, et exportez-la ou importez-la.', href: '~/api/clapi'},
  ]}
/>
