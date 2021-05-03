---
id: centreon-commercial-extensions
title: Extensions Commerciales
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions
commerciales** de Centreon.

> Il est important de mettre à jour en utilisant la documentation
> adéquate de mise à jour et de lire attentivement les notes de mise à
> jour afin d'être au courant des changements qui pourraient impacter
> votre usage ou votre plateforme ou des développements spécifiques que
> vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions
commerciales, veuillez contacter le support.

## Centreon MAP

### 20.10.4

#### Bugfixes

- [Desktop] Le filtre de recherches des ressources est trop lent
- [Server] Ajout d'un indice de propriétés personnalisées à la configuration du journal
- [Server] RestTemplate en tant que client http doit valider avec truststore ou ignorer la validation par l'autorité de certification du certificat signé automatiquement
- [Server] Essayez d'écraser les données en temps réel du statut du serveur hérité, le desktop n'a pas besoin d'afficher des informations en temps réel lors de la création d'un élément graphique.
- [Server] Le rpm du serveur apporte à présent un client mysql
- [Web-Client] Ne pas afficher d'action cliquable sur une forme et un texte si non cliquable
- [Web-Client] L'horodatage ne s'affiche pas correctement dans l'info-bulle des temps d'arrêt

### 20.10.3

`11 février 2021`

#### Bugfixes

- Nom d'hôte manquant dans le titre d'un service graph
- Un graph créé depuis un service dans un élément host n'était pas correctement
  rafraichi
- Ouvrir une map depuis le listing ou le widget pouvait être trop long

### 20.10.2

`16 décembre 2020`

#### Améliorations

- Le protocole TLS pour communiquer avec le composant Broker a été implémenté

#### Correctifs

- Mettre à jour depuis des versions précédentes causait parfois un
  échec lors du redémarrage du service centreon-map
- Une mise à jour ou une nouvelle installation causait parfois une
  mauvaise attribution des droits sur le dossier media
- Ajouter ou supprimer un Downtime depuis l'interface web causait
  parfois une rupture de connexion avec Broker
- Créer une carte avec un nom vide rendait parfois le menu 'Monitoring >
  Map' inaccessible
- Ajouter un Output dans Studio avait parfois pour résultat une
  métrique mal formattée
- Des événements WhatsUp étaient levés inutilement lors de sessions
  web causant parfois des baisses de performances
- [API] Une requête de token sur Swagger-iu retournait parfois une erreur

### 20.10.1

`19 novembre 2020`

#### Correctifs

- Sauvegarder une Geo View sur un Widget Custom View MAP était impossible
  dû à l'absence du bouton "Sauvegarder"
- Partager les métriques de statistiques d'usage entre le serveur MAP et
  le Central en HTTPS échouait
- Créer des liens en utilisant l'API REST peut maintenant recourir aux
  propriétés 'bendpoints', 'displayValue' et 'displayPercent'
- Ajouter des ressources Centreon lors de la création d'un Widget Output
  par l'API REST est maintenant possible
- Installer MAP Studio lors d'une nouvelle installation échouait à cause
  de la configuration du back-up automatique

### 20.10.0

`21 octobre 2020`

#### Améliorations

- La licence est maintenant entièrement géré sur le serveur Centreon
  Central.

#### Serveur plus rapide pour les cartes complexes

Cette version pose les bases de l'évolution de l'expérience
dans la création et la visualisation de cartes.

La première étape étant la naissance d'un nouveau serveur Centreon MAP
(nom de code **"NG"** pour "Nouvelle Génération"), qui a été conçu pour
être plus puissant, plus rapide et plus léger.

Le serveur est en **phase expérimentale** et est sujet à évolution.

Il n'est utilisé pour le moment que pour la visualisation des cartes. La
création et l'édition de cartes utilisent toujours le serveur que nous
connaissons.

Du côté de l'interface Centreon, tout a été fait pour pouvoir utiliser
ces deux serveurs. Il est ainsi possible de basculer la consultation
des cartes d'un serveur à l'autre facilement.

Pour l'utiliser, il est nécessaire de l'installer et l'activer.
Référez-vous à la [documentation dédiée](../graph-views/install.html#centreon-map-ng)

## Centreon BAM

### 20.10.2

`February 24, 2021`

#### Correctifs

- Ajout d'un fichier manquant lors du processus de mise à jour, qui rendait
  les pages de configuration de BAM non utilisables.

### 20.10.1

`16 février 2021`

#### Correctifs

- Dans le listing de supervision des BA, les infobulles de graphique des BA sont
  désormais correctement affichées.

### 20.10.0

`21 octobre 2020`

#### Améliorations

- [Configuration] Mise à jour du style des pages *Activités métiers*
  et *Vues métiers*

## Centreon MBI

### 20.10.0

`21 octobre 2020`

- Compatibilité avec Centreon 20.10

## Centreon Auto Discovery

### 20.10.3

`17 mars 2021`

#### Correctifs de sécurité

- [Service Discovery] Mise en conformité des appels jQuery avec la dernière
version (apportant des corrections de failles de sécurité)

#### Correctifs

- [Core] Une mauvaise requête générait des erreurs 400

#### Améliorations

- [Host Discovery] Limiter la définition du *provider* de découverte qui est
importé à la version 2.0


### 20.10.2

`7 décembre 2020`

#### Correctifs

- [Host Discovery] Des valeurs longues dans le champs *host.ip* provoquent
  l'erreur "Error when sorting and filtering host modification results"
- [Host Discovery] Le script de sauvegarde fonctionne maintenant sous
  CentOS 8

#### Améliorations

- [Host Discovery] Ajout d'une boite de dialogue de confirmation lors de
  la suppression d'une tâche
- [Host Discovery] Changement de la formulation "Paramètres additionnels"
  en "Paramètres de découverte" dans les écrans

### 20.10.1

`27 octobre 2020`

#### Correctifs

- Les scripts de mise à jour en doubles dans la version précédente
  entraînent une erreur SQL dans le log

### 20.10.0

`21 octobre 2020`

> Référez vous à la [Configuration du module Gorgone](../monitoring/discovery/administration.html#configuration-du-module-Gorgone)
> pour vous assurer que la configuration correspond aux prérequis minimaux.

> Si une découverte est effectuée sur un Remote Server ou un Poller,
> assurez-vous que le serveur utilise les derniers composants 20.10.

> Sur un Remote Server, le module Autodiscovery peut être désinstallé depuis
> le menu `Administration > Extensions > Gestionnaire` afin de ne
> pas générer d'erreurs inutiles dans les logs de Gorgone.

#### Host Discovery

L'assistant de découverte d'hôte permet désormais de planifier vos découvertes
de plusieurs manières : annuelle, mensuelle, quotidienne et même
toutes les x heures ou minutes.

Les tâches de découverte planifiées peuvent être suspendues et reprises à
tout moment.

Le résultat de la découverte peut également être traité automatiquement pour
ajouter, désactiver et, si nécessaire, réactiver les hôtes dans la
configuration.

Si vous décidez d'ajouter manuellement les hôtes à partir de la page de
résultats de la tâche, la règle d'association peut maintenant être
modifiée et enregistrée à partir de cette page pour répondre à vos besoins
en appliquant la règle directement sur le résultat.

Les nouveaux modificateurs *d'exclusion* et *d'inclusion* vous aideront à
décider quels hôtes sont censés être ajoutés dans la configuration, et ceux
qui doivent être désactivés ou activés.

Jetez un oeil à cet exemple pour bien comprendre leurs impacts:
[Mettre à jour votre configuration dynamiquement](../monitoring/discovery/hosts-discovery.html#mettre-a-jour-votre-configuration-dynamiquement)

#### Service Discovery

La découverte de service utilise maintenant Gorgone pour exécuter les plugins
de découverte, et par conséquent le système de communication de Gorgone et
non plus des connexions SSH autonomes.

#### Correctifs

- Contient tous les correctifs jusqu'à la version 20.04.6

## Centreon Plugin Packs Manager

### 20.10.1

`26 février 2021`

#### Correctifs de sécurité

- [Core] Vulnerable handlebars.js library

### 20.10.0

`21 octobre 2020`

- Compatibilité avec Centreon 20.10

## Centreon License Manager

### 20.10.2

`24 mars 2021`

#### Correctifs

- The Add Token button is not visible when the online license is over

### 20.10.1

`2 décembre 2020`

#### Correctifs

- After adding a license or a token the user must access to associated functionalities
- Rights issues with the gnupg library with multiple users (only with Docker)
- Disable 'Add' button when input is empty

### 20.10.0

`21 octobre 2020`

- Compatibilité avec Centreon 20.10

## Centreon Anomaly Detection

### 20.10.0

`21 octobre 2020`

- Compatibilité avec Centreon 20.10
