<!--
  Modèle de https://docs.centreon.com/fr/llms.txt, destiné aux assistants IA
  et aux agents (https://llmstxt.org). Tout est recopié tel quel, sauf :

  - ces commentaires, supprimés ;
  - {siteUrl} : https://docs.centreon.com/fr/
  - {version} : version OnPrem actuelle ;
  - {{page <chemin>}} ou {{page <chemin> | libellé}} : un lien vers une page,
    avec le titre et la description de la page publiée ;
  - {{pages <préfixe>}} : toutes les pages d'un produit, par catégorie du menu ;
  - {{categories <préfixe>}} : une ligne par catégorie du menu.

  Rester factuel et concis : les assistants IA reprennent ces textes quand
  ils présentent Centreon. Voir tools/llms-txt/README.md.
-->
# Documentation Centreon

> Centreon est une plateforme de supervision et d'observabilité IT, open source dans son cœur, qui supervise infrastructures, réseaux, applications, ressources cloud et expérience numérique des utilisateurs depuis une console unique. Cette documentation couvre Centreon Infra Monitoring (OnPrem et Cloud), les plus de 700 Monitoring Connectors, Centreon Experience Monitoring et Centreon Log Management.

## Faits essentiels

- **Produits** : Centreon Infra Monitoring (CIM), disponible OnPrem (auto-hébergé, version actuelle {version}) ou en Centreon Cloud (SaaS géré par Centreon) ; Centreon Experience Monitoring (CXM : parcours utilisateurs, real user monitoring, sobriété numérique) ; Centreon Log Management (CLM : collecte de logs avec OpenTelemetry, exploration et alertes).
- **Architecture (OnPrem)** : un **serveur central** porte la configuration, l'interface web et les bases de données ; des **collecteurs** (pollers) exécutent les contrôles au plus près des ressources supervisées ; des **serveurs distants** optionnels affichent une partie des données pour un site. Tous les serveurs doivent être dans la même version majeure.
- **Composants** : **Centreon Engine** planifie et exécute les contrôles ; **Centreon Broker** transporte les données de supervision (protocole BBDO) vers MariaDB/MySQL, le stockage RRD et les stream connectors ; **Centreon Gorgone** permet au central de communiquer avec les collecteurs et serveurs distants ; le **Centreon Monitoring Agent (CMA)** collecte les données sur les hôtes Windows et Linux.
- **Modèle de supervision** : un **hôte** est une ressource supervisée, le plus souvent un équipement doté d'une adresse IP (serveur, équipement réseau, machine virtuelle…) mais aussi un compte cloud, une API ou une application SaaS ; un **service** est un indicateur contrôlé sur un hôte (CPU, bande passante, température…) et peut porter plusieurs **métriques**. Statuts : OK, Warning, Critical, Unknown pour les services ; Up, Down, Unreachable pour les hôtes. **Statut des ressources** (Resource Status) est la vue temps réel de toutes les ressources.
- **Monitoring Connectors** (anciennement Plugin Packs) : modèles d'hôtes et de services prêts à l'emploi, avec les plugins correspondants ; une ressource est supervisée en lui appliquant un modèle. L'autodécouverte détecte les nouveaux hôtes et services.
- **Automatisation** : API REST v2 (recommandée), API REST v1 et ligne de commande CLAPI pour la configuration ; les stream connectors (Lua) exportent événements et métriques vers des outils tiers (ITSM, SIEM, plateformes d'observabilité).
- **Systèmes supportés pour OnPrem {version}** : RHEL, Oracle Linux et Alma Linux 8 et 9, Debian 12 ; base MariaDB ou MySQL. La page de compatibilité donne la matrice exacte.

## Utiliser cette documentation

- Les pages OnPrem sont versionnées : les URL sous {siteUrl}docs/ décrivent la version actuelle ({version}) ; les versions précédentes sont sous {siteUrl}docs/<version>/. Cloud est sous /fr/cloud/, les connecteurs sous /fr/pp/, Experience Monitoring sous /fr/experience-monitoring/ et Log Management sous /fr/logmanagement/.
- La documentation existe aussi en anglais : mêmes chemins sans /fr/, avec son propre llms.txt.
- Quand la réponse dépend du déploiement, préciser si elle vaut pour OnPrem, Cloud ou les deux.

## Par où commencer

{{page docs/getting-started/concepts/}}
{{page docs/getting-started/platform/}}
{{page docs/installation/architectures/}}
{{page docs/installation/compatibility/}}
{{page docs/installation/prerequisites/}}
{{page docs/installation/installation-of-a-central-server/using-packages/ | Installer un serveur central (paquets)}}
{{page docs/installation/installation-of-a-poller/using-packages/ | Installer un collecteur (paquets)}}
{{page docs/monitoring/basic-objects/hosts-create/}}
{{page docs/monitoring/monitoring-servers/deploying-a-configuration/}}
{{page docs/alerts-notifications/resources-status/}}
{{page docs/alerts-notifications/notif-configuration/}}
{{page docs/upgrade/introduction/}}
{{page docs/api/rest-api-v2/}}
{{page docs/developer/developer-stream-connector/}}
{{page docs/releases/introduction/}}
{{page docs/resources/glossary/}}
{{page cloud/getting-started/about-centreon-cloud/}}
{{page logmanagement/getting-started/concepts/}}

## Centreon Infra Monitoring OnPrem ({version})

Plateforme de supervision auto-hébergée : installation, configuration des ressources supervisées, événements et alertes, tableaux de bord, administration, mises à jour, API et développement.

{{pages docs}}

## Centreon Cloud

Centreon Infra Monitoring en service : Centreon héberge et exploite la plateforme centrale, vous installez les collecteurs chez vous.

{{pages cloud}}

## Centreon Experience Monitoring

Supervision de l'expérience numérique : parcours utilisateurs scriptés (STM), real user monitoring (RUM), sobriété numérique, données métier et système.

{{pages experience-monitoring}}

## Centreon Log Management

Collecte de logs avec OpenTelemetry, exploration et analyse, alertes sur les motifs de logs.

{{pages logmanagement}}

## Monitoring Connectors

Modèles et plugins prêts à l'emploi pour plus de 700 technologies. Chaque page de connecteur donne ses prérequis, les modèles et services fournis, ses métriques et son dépannage. Une ligne par catégorie :

{{categories pp}}

<!--
  « Optional » reste en anglais : le format llms.txt réserve ce titre aux
  liens que les outils peuvent ignorer quand la place manque. De même, les
  liens s'écrivent « [nom](url): notes », sans espace avant les deux-points.
-->
## Optional

- [Plugins Centreon (GitHub)](https://github.com/centreon/centreon-plugins): code source des plugins de supervision utilisés par les connecteurs.
- [Communauté The Watch](https://thewatch.centreon.com): questions et réponses de la communauté Centreon.
