---
id: snmp-based
title: Connecteurs à base de SNMP
description: "Découvrez les informations dont un connecteur à base de SNMP a besoin, des prérequis sur l'équipement et le réseau à la configuration de l'hôte et aux identifiants propres à chaque version."
---

Pour configurer un connecteur à base de SNMP, vous avez besoin des informations suivantes.

## Sur l'équipement supervisé

L'agent SNMP doit être configuré et démarré sur l'équipement (consultez la documentation du constructeur).
L'équipement peut exiger une liste d'adresses autorisées à l'interroger : vérifiez que les adresses de vos collecteurs Centreon y figurent.

## Connectivité réseau

Le collecteur Centreon doit pouvoir joindre le port SNMP UDP/161 de l'équipement.

## Pour la configuration de l'hôte dans Centreon

* Les informations sur l'hôte : nom, alias et adresse IP ou nom DNS.
* La version SNMP utilisée (par exemple 1, 2c ou 3).
* Les identifiants, qui dépendent de la version :
   * Pour SNMP v1/v2c : la communauté SNMP.
   * Pour SNMP v3 : les paramètres d'authentification. Avec SNMP v3, utilisez la macro SNMPEXTRAOPTIONS pour ajouter les paramètres d'authentification (nom d'utilisateur, phrase secrète et protocole d'authentification, phrase secrète et protocole de chiffrement).

Une fois le modèle appliqué, vous renseignez ces valeurs dans les macros du connecteur et pouvez ajuster les seuils d'alerte et critique. Nous vous recommandons de [tester le contrôle en ligne de commande depuis le collecteur](./connectors-test.md) avant de déployer la configuration, pour vérifier que l'équipement répond.

## Fonctionnement de SNMP

SNMP (Simple Network Management Protocol) est un protocole standard qui sert à superviser et à gérer les équipements d'un réseau : routeurs, commutateurs, serveurs, imprimantes, onduleurs, etc.

### Les principaux composants

Gestionnaire : le système de supervision (ici, le collecteur Centreon). Il demande des informations aux équipements et collecte les réponses.
Agent : un petit logiciel qui s'exécute sur chaque équipement supervisé. Il connaît l'état de l'équipement et répond aux requêtes du gestionnaire.
MIB (Management Information Base) : un catalogue structuré de tout ce qui peut être supervisé sur un équipement. Chaque donnée (charge CPU, trafic d'une interface, température, etc.) possède une adresse unique appelée OID (Object Identifier), qui s'écrit sous forme d'une suite de nombres, comme 1.3.6.1.2.1.1.3.0.

### Fonctionnement des échanges

La plupart du temps, la supervision fonctionne par interrogation : le gestionnaire envoie à l'agent une requête qui demande la valeur d'un OID précis, et l'agent répond avec la valeur actuelle. Ces échanges passent par le port UDP 161. Les opérations courantes sont GET (récupérer une valeur), GETNEXT/GETBULK (parcourir plusieurs valeurs) et SET (modifier un paramètre de l'équipement).

Les échanges peuvent aussi se faire dans l'autre sens, avec les traps SNMP (sur le port UDP 162) : au lieu d'attendre qu'on l'interroge, l'agent envoie de lui-même une alerte au gestionnaire lorsqu'un évènement se produit, par exemple la coupure d'un lien.

### Versions et sécurité

v1 / v2c : l'authentification repose sur un simple mot de passe partagé, appelé communauté SNMP (souvent « public » en lecture seule). Il circule en clair, ce qui n'est pas sécurisé.
v3 : apporte une vraie sécurité, avec une authentification par utilisateur et le chiffrement des échanges. C'est pourquoi la v3 demande des paramètres supplémentaires (nom d'utilisateur, phrase secrète et protocole d'authentification, phrase secrète et protocole de chiffrement).

En résumé, le collecteur Centreon (le gestionnaire) interroge régulièrement l'agent de chaque équipement pour obtenir des valeurs identifiées par des OID, l'agent répond, et Centreon transforme ces nombres en métriques, en statuts et en alertes.

## Résoudre les problèmes des connecteurs à base de SNMP

* Voir la section [**Dépannage de SNMP** de notre page de résolution des problèmes](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#dépannage-de-snmp).
* La section [**Problèmes communs**](./integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md#problèmes-communs) peut aussi vous aider.
