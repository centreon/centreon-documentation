---
id: monitoring-connectors-basics
title: Les bases des connecteurs de supervision
description: "Découvrez ce qu'est un connecteur de supervision Centreon, ce que vous pouvez superviser avec et comment il collecte les données. Commencez par là avant d'en configurer un."
---

## Qu'est-ce qu'un connecteur de supervision ?

Un connecteur de supervision Centreon associe deux éléments qui servent à superviser un type de ressource informatique précis :

* un plugin : le script qui exécute les contrôles depuis un collecteur ;
* un pack : les commandes, les modèles d'hôtes et les modèles de services, avec des seuils par défaut. Certains connecteurs incluent aussi des éléments de découverte : un fournisseur de découverte d'hôtes (pour trouver des hôtes) et/ou des règles de découverte de services (pour trouver les éléments à superviser sur un hôte).

Ces deux éléments s'installent séparément, mais fonctionnent ensemble pour former le connecteur. (Anciennement appelé « Plugin Pack ».)

## Que puis-je faire avec un connecteur de supervision ?

Un connecteur de supervision Centreon vous permet de :

* Mettre rapidement en place la supervision d'une ressource précise (serveur, base de données, équipement réseau, etc.) en lui appliquant ses modèles prêts à l'emploi.
* Suivre automatiquement les métriques utiles, comme le CPU, la mémoire, le disque ou le trafic réseau, avec des seuils d'alerte par défaut que vous pouvez ajuster.
* Découvrir automatiquement des ressources (avec certains connecteurs et le module Auto Discovery) :
  * des hôtes, comme les serveurs d'un sous-réseau, les machines virtuelles d'un cluster VMware ou les ressources d'un compte cloud ;
  * des services sur des hôtes existants, comme les partitions de disque ou les interfaces réseau.

  Voir [Effectuer une découverte d'hôtes ou de services](./using-connectors.md#effectuer-une-découverte-dhôtes-ou-de-services).

## Que puis-je superviser avec un connecteur ?

Vous pouvez superviser presque n'importe quelle ressource informatique. Notre catalogue comprend les catégories suivantes :

* Applications : applications métier et web (par exemple Apache, Microsoft Exchange)
* Centreon : supervision des composants de Centreon
* Cloud : services cloud comme Azure et AWS
* Base de données : MySQL, PostgreSQL, Oracle, etc.
* Matériel : serveurs physiques et composants
* Réseau : commutateurs, routeurs, pare-feu
* Système d'exploitation : Linux, Windows
* Protocole : contrôles génériques en SNMP, HTTP, etc.
* Capteur : température, sondes environnementales
* Stockage : systèmes SAN/NAS
* ToIP-VoIP : téléphonie et voix
* UPS-PDU : onduleurs et unités de distribution d'alimentation
* Virtualisation : VMware, Hyper-V, etc.

## Comment le connecteur collecte-t-il les données ?

Il existe plusieurs [types de connecteurs de supervision](./types-of-connectors.md), selon la façon dont ils accèdent à la ressource à superviser : par un agent, une API, un protocole standard ou SNMP. Le type change seulement ce que vous devez mettre en place : un agent à installer, une API à joindre, des identifiants à fournir, etc.

Quel que soit leur type, tous les connecteurs de supervision fonctionnent sur le même principe : Centreon Engine exécute le plugin du connecteur depuis un collecteur, à l'aide des commandes et des modèles fournis par le connecteur, puis les résultats sont renvoyés au serveur central. La découverte suit la même logique, avec les fournisseurs et les règles de découverte fournis par le connecteur. Voir [Fonctionnement des connecteurs](./workflow-service-check.md) pour un exemple détaillé, étape par étape.

## Un connecteur de supervision a-t-il besoin d'autre chose qu'un plugin et un pack ?

* Plugin + pack uniquement : c'est le cas standard. Le plugin exécute les contrôles depuis le collecteur et le pack fournit les modèles. Rien d'autre n'est nécessaire.
* Plugin + pack + un connecteur : certains connecteurs de supervision nécessitent un composant supplémentaire, un connecteur Centreon (par exemple pour AS400 ou VMware).
* Plugin + pack + un agent : certains nécessitent un agent installé sur l'hôte supervisé (par exemple Windows NRPE, ou l'agent CMA).

<!-- 
old contents

A Monitoring Connector is a downloadable package containing a set of configuration
templates that make it fast and easy to monitor your IT infrastructure.
Applying a template from a Monitoring Connector is the easiest way to monitor a host.

Monitoring Connectors consist of 2 elements, which are installed separately:

- A plugin that executes the monitoring commands from a poller. Plugins can be
installed using the command line interface, or automatically.

- A pack that contains commands, host templates and service templates. 
Packs are installed via the Centreon interface. For each type of equipment,
 the templates determine which indicators will be
monitored and set default warning and critical thresholds (these may be
fine-tuned later on).

  Some packs also contain [discovery rules](./using-connectors.md#discovery-connectors). -->
