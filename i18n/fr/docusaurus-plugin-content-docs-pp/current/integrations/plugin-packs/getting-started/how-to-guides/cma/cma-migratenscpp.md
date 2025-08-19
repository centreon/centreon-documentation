---
id: cma-migratenscpp
title: Migrer vers CMA depuis NSClient++
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



Si vous utilisez déjà NSClient++ ou NRPE avec Centreon, ce guide vous aidera à passer progressivement à Centreon Monitoring Agent.

Centreon Monitoring Agent offre plusieurs avantages par rapport à NSClient++ et NRPE : 
* Meilleures performances dans l'exécution des contrôles, c'est-à-dire impact réduit sur l'hôte.
* Sécurité renforcée, implémentée par défaut (chiffrement TLS, jeton d'authentification).
* Configuration facile grâce à une interface dédiée, notamment pour la sécurité des connexions.
* Mode « hors ligne » pour installer des plugins sur des hôtes sans accès Internet.
* Mode d'installation en ligne de commande pour un déploiement massif sous Windows.
* Méthode de surveillance basée uniquement sur des contrôles passifs.
* Prise en charge complète par Centreon et feuille de route dédiée.
 

## Déploiement et configuration de l'agent

Déployez et configurez l'agent de supervision Centreon à l'aide de la [documentation](/pp/integrations/plugin-packs/getting-started/how-to-guides/cma/cma).

## Configuration de la supervision
 
### Installez les connecteurs de supervision Windows et/ou Linux dédiés (selon les besoins).

Voici la correspondance avec les connecteurs NSClient++/NRPE :

| Connecteur NSClient++/NRPE | Connecteur Centreon Monitoring Agent |
| ----------- | ----------- |
| Windows NSClient API | Windows Centreon Monitoring Agent |
| Windows NSClient 0.5 NRPE | Windows Centreon Monitoring Agent |
| Linux NRPE4 | Linux Centreon Monitoring Agent |

### Modifiez les modèles d'hôte sur les ressources existantes (hôtes)

Voici la correspondance avec les modèles d'hôte NSClient++/NRPE :

| Modèle d'hôte NSClient++/NRPE | Modèle d'hôte Centreon Monitoring Agent |
| ----------- | ----------- |
| OS-Windows-NSClient-05-Restapi-custom | Windows Centreon Monitoring Agent |
| OS-Windows-NSClient-05-NRPE-custom | Windows Centreon Monitoring Agent |
| OS-Linux-NRPE4-custom | Linux Centreon Monitoring Agent |

### Adaptez/remplacez les services existants

**Commandes de plugins Centreon**

Il s'agit des mêmes plugins que ceux pour NSClient++/NRPE ; seule la commande change.
Les macros portant le même nom sont conservées, vous pouvez donc remplacer le modèle de service existant par celui lié à l'agent de supervision Centreon.

Par exemple : OS-Linux-Memory-NRPE4 → OS-Linux-Memory-NRPE4-custom

**Commandes de vérification natives (NSClient++)**

L'agent de supervision Centreon fournit des vérifications natives dont la structure (commande JSON) diffère de celle de NSClient++ et du reste de l'écosystème Centreon.

Il sera nécessaire de créer un nouveau service ou de modifier le modèle de service existant en adaptant les macros.

Par exemple : OS-Windows-NSClient05-NRPE-Cpu ou OS-Windows-NSClient05-Restapi-Cpu → OS-Windows-Centreon-Monitoring-Agent-CPU

**Commandes de vérification personnalisables**

Ces scripts restent compatibles avec l'agent de surveillance Centreon. 
Vous devrez adapter les commandes (ou les dupliquer pour qu'elles fonctionnent en mode double exécution).
Un [guide dédié](/pp/integrations/plugin-packs/getting-started/how-to-guides/cma/cma-custom) est disponible.
