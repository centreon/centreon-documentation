---
id: types-of-connectors
title: Types de connecteurs et configuration
description: "Découvrez les quatre types de connecteurs de supervision (à base d'agent, d'API, de protocole et de SNMP) et la façon dont chacun collecte les données."
---

Les connecteurs de supervision collectent les données de la ressource à superviser de différentes façons. Savoir à quel type appartient un connecteur vous indique les informations dont vous aurez besoin pour le configurer : un agent à installer, une API à joindre, des identifiants à fournir, etc. Il existe quatre grands types :

* [**Connecteurs à base d'agent**](./agent-based.md) : un petit logiciel (un agent) s'exécute sur l'équipement supervisé et collecte les données localement, puis le collecteur Centreon les récupère. Cette catégorie comprend l'agent CMA, NSClient++ et NRPE.
* [**Connecteurs à base d'API**](./api-based.md) : le connecteur interroge l'API de la cible (en général une API REST) pour collecter les données. C'est courant pour les services cloud et les applications récentes.
* [**Connecteurs à base de protocole**](./protocol-based.md) : le connecteur se connecte directement à un service ou exécute un contrôle via un protocole standard, comme HTTP/HTTPS, SSH ou une connexion à une base de données.
* [**Connecteurs à base de SNMP**](./snmp-based.md) : le connecteur utilise SNMP (Simple Network Management Protocol) pour interroger des équipements comme des routeurs, des commutateurs, des serveurs et des imprimantes, en UDP.

Quel que soit le type, vous appliquez le modèle du connecteur à votre hôte, puis vous renseignez les valeurs nécessaires dans ses macros. La procédure de supervision du connecteur indique précisément ce dont chacun a besoin.
