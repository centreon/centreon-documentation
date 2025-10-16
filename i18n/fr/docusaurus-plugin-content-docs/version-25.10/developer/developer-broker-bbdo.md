---
id: developer-broker-bbdo
title: Le protocole BBDO
---

Le protocole BBDO a été créé pour être le protocole par défaut de Centreon Broker. Il est léger, facile à décoder et spécialement conçu pour la surveillance des ressources avec Centreon Broker.

## Introduction

BBDO est l’abréviation de Broker Binary Data Object. BBDO est conçu pour transférer des « paquets de données » d’un nœud à un autre. Ces « paquets de données » sont la plupart du temps des informations de supervision fournies par le moteur de supervision (par exemple le moteur Centreon Engine ou Nagios). Il utilise principalement des valeurs binaires brutes, ce qui lui permet d’utiliser très peu de mémoire.

Avec Broker 22.04.0, nous avons introduit une nouvelle version de BBDO basée sur [Google Protobuf 3](https://developers.google.com/protocol-buffers). Le nouveau protocole reste compatible avec le précédent mais introduit de nouveaux événements. Par exemple, les événements PbService et PbServiceStatus sont envoyés au lieu des événements Service et ServiceStatus. Configuré avec BBDO 3, Broker comprend toujours les événements Service et ServiceStatus mais il doit envoyer par défaut les nouvelles versions.

## Types

En tant que protocole binaire, BBDO utilise des types de données pour sérialiser les données. Ils sont écrits dans un format Big Endian et décrits dans le tableau suivant.

| Type| Représentation| Taille (octets)
|----------|----------|----------
| entier| binaire| 4
| entier court| binaire| 2
| entier long| binaire| 8
| temps| binaire (horodatage)| 8
| booléen| binaire (0 est False, tout le reste est True)| 1
| chaîne| chaîne UTF-8 non terminée| variable
| réel| chaîne UTF-8 non terminée (au format fixe (2013) ou scientifique (2.013e+3))| variable

## Format de paquet

Le format des paquets de Centreon Broker n’introduit que 16 octets d’en-tête pour transmettre chaque événement de supervision (généralement environ 100-200 octets chacun). Les champs sont fournis au format Big Endian.

| Champ| Type| Description
|----------|----------|----------
| checksum| entier court non signé| CRC-16-CCITT X.25 de la taille, de l’ID, de la source et de la destination. La somme de contrôle peut être utilisée pour récupérer un paquet de données incomplet envoyé dans le flux en laissant tomber les octets un par un.
| size| entier court non signé| Taille du paquet, hors en-tête.
| id| entier non signé| ID de l’événement.
| source\_id| entier non signé| L’ID de l’instance source de cet événement.
| destination\_id| entier non signé| L’ID de l’instance de destination de cet événement.
| data| | Données utiles.

Ici, la seule différence entre BBDO 3 et les versions précédentes est le contenu des données. Dans BBDO 3, cette partie est un objet Protobuf sérialisé alors que dans les versions précédentes, il s’agit de données sérialisées comme expliqué dans la section Types.

### ID de paquet

Comme nous l’avons vu dans le paragraphe précédent, chaque paquet contient un ID qui exprime par lui-même la façon dont les données sont encodées. Cet ID peut être divisé en deux composants de 16 bits. Les 16 bits les plus significatifs sont la catégorie d’événement et les 16 bits les moins significatifs sont le type d’événement.

Les catégories d’événements sérialisent les propriétés des événements l’une après l’autre, l’ordre est donc très important pour ne pas perdre le fil lors de la désérialisation des événements.

## Catégories d’événements

Les catégories actuellement disponibles sont décrites dans le tableau ci-dessous.

| Catégorie| macro API| Valeur| Description
|----------|----------|----------|----------
| NEB| BBDO\_NEB\_TYPE| 1| Événements classiques de supervision (hôtes, services, notifications, gestionnaires d’événements, exécution des plugins, ...).
| BBDO| BBDO\_BBDO\_TYPE| 2| Catégorie interne au protocole BBDO.
| Storage| BBDO\_STORAGE\_TYPE| 3| Catégorie liée à la création de graphiques RRD.
| Correlation| BBDO\_CORRELATION\_TYPE| 4| Corrélation d’état (obsolète).
| Dumper| BBDO\_DUMPER\_TYPE| 5| Événements de dumper (utilisés uniquement pour les tests).
| Bam| BBDO\_BAM\_TYPE| 6| Événements BAM.
| Extcmd| BBDO\_EXTCMD\_TYPE| 7| Commandes externes de Centreon Broker (obsolète).
| Internal| BBDO\_INTERNAL\_TYPE| 65535| Réservé à l’usage interne du protocole.

### NEB

Le tableau ci-dessous répertorie les types d’événements disponibles dans la catégorie NEB. Ils doivent être combinés avec la catégorie BBDO\_NEB\_TYPE pour obtenir un ID d’événement BBDO.

| Type | Valeur |
|----------|----------|
| Pb Service | 27 |
| Pb Adaptive Service | 28 |
| Pb Service Status | 29 |
| Pb Host | 30 |
| Pb Adaptive Host | 31 |
| Pb Host Status | 32 | 
| Pb Severity | 33 |
| Pb Tag | 34 | 

### Storage

Le tableau ci-dessous répertorie les types d’événements disponibles dans la catégorie Storage. Ils doivent être combinés avec la catégorie BBDO\_STORAGE\_TYPE pour obtenir un ID d’événement BBDO.

| Type                            | Value |
|---------------------------------|-------|
| Pb Rebuild Message              | 7     |
| Pb Remove Graph Message         | 8     |
| Pb Metric                       | 9     |
| Pb Status                       | 10    |
| Pb Index mapping                | 11    |
| Pb Metric mapping               | 12    |

### BBDO

Le tableau ci-dessous répertorie les types d’événements disponibles dans la catégorie BBDO. Ils doivent être combinés avec la catégorie BBDO\_BBDO\_TYPE pour obtenir un ID d’événement BBDO.

| Type              | Valeur|
|-------------------|-------|
| Pb ack            | 8     |
| Pb stop           | 9     |

### BAM

Le tableau ci-dessous répertorie les types d’événements disponibles dans la catégorie BAM. Ils doivent être combinés avec la catégorie BBDO\_BAM\_TYPE pour obtenir un ID d’événement BBDO.

| Type                                | Valeur |
|------------------------------------ | ------ |
| Pb Inherited Downtime               | 18     |
| Pb BA status                        | 19     |
| Pb BA event                         | 20     |
| Pb KPI event                        | 21     |
| Pb Dimension BV Event               | 22     |
| Pb Dimension BA BV Relation Event   | 23     |
| Pb Dimension Timeperiod             | 24     |
| Pb Dimension BA Event               | 25     |
| Pb Dimension KPI Event              | 26     |
| Pb KPI status                       | 27     |
| Pb BA Duration Event                | 28     |
| Pb Dimension BA Timeperiod Relation | 29     |
| Pb Dimension Truncate Table Signal  | 30     |

## Établissement de la connexion

BBDO est un protocole qui peut négocier des fonctionnalités. Lors de l’établissement d’une connexion, un message **welcome** est envoyé par le client. Il fournit la version du protocole BBDO qu’il supporte et ses extensions. Le serveur répond à ce message par un autre message **welcome** contenant sa propre version du protocole supportée et ses extensions. Si les versions du protocole correspondent, la négociation des extensions commence.

Actuellement, deux extensions sont supportées : **TLS** et **COMPRESSION**. Juste après le message **welcome**, chaque pair recherche dans la liste des extensions de l’autre pair les extensions qu’il supporte. Lorsqu’il en trouve une, elle est activée (c’est-à-dire qu’elle démarre immédiatement).

### Exemple

Prenons **C** le client et **S** le serveur. Les étapes suivantes sont effectuées de manière séquentielle.

- **C** initie une connexion TCP avec **S** et la connexion est établie.
- **C** envoie un message **welcome** avec les attributs suivants
  - protocole majeur : 1
  - protocole mineur : 0
  - protocole correctif : 0
  - extensions : « TLS COMPRESSION »
- **S** envoie son propre message **welcome** en réponse à **C**
  - protocole majeur : 1
  - protocole mineur : 0
  - protocole correctif : 0
  - extensions : « TLS COMPRESSION »
- **C** et **S** déterminent les extensions qu’ils ont en commun (ici TLS et COMPRESSION)
- si l’ordre est important, les extensions sont appliquées dans l’ordre fourni par le serveur
- la connexion TLS est initiée, le handshake est effectué...
- la connexion de compression est ouverte
- les données transmises entre **C** et **S** sont maintenant à la fois chiffrées et compressées

## Acquittement

Les clients/serveurs dits « intelligents » peuvent acquitter les paquets qui leur sont envoyés. Cette fonction est utilisée par Centreon Broker pour s’assurer que chaque paquet est pris en compte et pour lancer la procédure de rétention au cas où l’autre partie ne répondrait pas.

Pour cela, l’autre partie doit envoyer périodiquement un paquet BBDO « ack » sur le même canal TCP. Ce paquet comporte le numéro du paquet acquitté par le client.

Les modes « Clever »/« Dumb » sont configurés sur chaque sortie TCP, pour chaque Broker.
