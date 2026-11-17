<!--
  Modèle de https://docs.centreon.com/fr/llms.txt, lu par les assistants IA et
  les agents (https://llmstxt.org). Le README.md de ce dossier liste ce qui
  est remplacé à la construction du site.

  Rester factuel et concis : les assistants IA reprennent ces textes quand
  ils présentent Centreon.
-->

# Documentation Centreon

> Centreon est une plateforme de supervision et d'observabilité IT, open source dans son cœur, qui supervise infrastructures, réseaux, applications, ressources cloud et expérience numérique des utilisateurs depuis une console unique. Cette documentation couvre Centreon Infra Monitoring (OnPrem et Cloud), les plus de {connectorCount} Monitoring Connectors, Centreon Experience Monitoring et Centreon Log Management. Chaque produit ci-dessous renvoie vers son propre llms.txt, un index complet des pages de sa documentation regroupées par thème : c'est la manière recommandée d'explorer un produit.

## Faits essentiels

<!--
  Ne pas lister ici les distributions supportées : elles changent à chaque
  version, et la page de compatibilité fait référence.
-->

- **Produits** : Centreon Infra Monitoring (CIM), disponible OnPrem (auto-hébergé, version actuelle {version}) ou en Centreon Cloud (SaaS géré par Centreon) ; Centreon Experience Monitoring (CXM : parcours utilisateurs, real user monitoring, sobriété numérique) ; Centreon Log Management (CLM : collecte de logs avec OpenTelemetry, exploration et alertes).
- **Architecture (OnPrem)** : un **serveur central** porte la configuration, l'interface web et les bases de données ; des **collecteurs** (pollers) exécutent les contrôles au plus près des ressources supervisées ; des **serveurs distants** optionnels affichent une partie des données pour un site. Tous les serveurs doivent être dans la même version majeure.
- **Composants** : **Centreon Engine** planifie et exécute les contrôles ; **Centreon Broker** transporte les données de supervision (protocole BBDO) vers MariaDB/MySQL, le stockage RRD et les stream connectors ; **Centreon Gorgone** permet au central de communiquer avec les collecteurs et serveurs distants ; le **Centreon Monitoring Agent (CMA)** collecte les données sur les hôtes Windows et Linux.
- **Modèle de supervision** : un **hôte** est une ressource supervisée, le plus souvent un équipement doté d'une adresse IP (serveur, équipement réseau, machine virtuelle…) mais aussi un compte cloud, une API ou une application SaaS ; un **service** est un indicateur contrôlé sur un hôte (CPU, bande passante, température…) et peut porter plusieurs **métriques**. Statuts : OK, Warning, Critical, Unknown pour les services ; Up, Down, Unreachable pour les hôtes. **Statut des ressources** (Resource Status) est la vue temps réel de toutes les ressources.
- **Monitoring Connectors** (anciennement Plugin Packs) : modèles d'hôtes et de services prêts à l'emploi, avec les plugins correspondants ; une ressource est supervisée en lui appliquant un modèle. L'autodécouverte détecte les nouveaux hôtes et services.
- **Automatisation** : API REST v2 (recommandée), API REST v1 et ligne de commande CLAPI pour la configuration ; les stream connectors (Lua) exportent événements et métriques vers des outils tiers (ITSM, SIEM, plateformes d'observabilité).
- **Systèmes supportés pour OnPrem {version}** : serveurs Linux, installés à partir de paquets RPM ou DEB, avec une base MariaDB ou MySQL. Les distributions et versions supportées changent à chaque version : consulter la page de compatibilité, citée dans « Pages clés », plutôt que les supposer.

## Utiliser cette documentation

- Les pages OnPrem sont versionnées : les URL sous {siteUrl}docs/ décrivent la version actuelle ({version}) ; les versions précédentes sont sous {siteUrl}docs/<version>/. Cloud est sous /fr/cloud/, les connecteurs sous /fr/pp/, Experience Monitoring sous /fr/experience-monitoring/ et Log Management sous /fr/logmanagement/.
- La documentation existe aussi en anglais : mêmes chemins sans /fr/, avec son propre llms.txt.
- Quand la réponse dépend du déploiement, préciser si elle vaut pour OnPrem, Cloud ou les deux.

## Pages clés

Une sélection de pages essentielles d'Infra Monitoring OnPrem {version}. Les index des produits ci-dessous listent toutes les pages.

{{page docs/getting-started/concepts/}}
{{page docs/installation/architectures/}}
{{page docs/installation/compatibility/}}
{{page docs/installation/installation-of-a-central-server/using-packages/ | Installer un serveur central (paquets)}}
{{page docs/installation/installation-of-a-poller/using-packages/ | Installer un collecteur (paquets)}}
{{page docs/monitoring/basic-objects/hosts-create/}}
{{page docs/monitoring/monitoring-servers/deploying-a-configuration/}}
{{page docs/alerts-notifications/resources-status/}}
{{page docs/upgrade/introduction/}}
{{page docs/api/rest-api-v2/}}
{{page docs/resources/glossary/}}

<!-- Les sections générées : une par famille de produits (Infra Monitoring, Experience Monitoring, Log Management), puis Autres langues. -->
{{indexes}}

<!--
  « Optional » reste en anglais : le format llms.txt réserve ce titre aux
  liens que les outils peuvent ignorer quand la place manque. La garder en
  dernier. De même, les liens s'écrivent « [nom](url): notes », sans espace
  avant les deux-points.
-->

## Optional

- [Plugins Centreon (GitHub)](https://github.com/centreon/centreon-plugins): code source des plugins de supervision utilisés par les connecteurs.
- [Communauté The Watch](https://thewatch.centreon.com): questions et réponses de la communauté Centreon.
