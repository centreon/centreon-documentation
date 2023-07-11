---
id: developer-broker-bbdo
title: Le protocole BBDO
---

Le protocole BBDO a été créé pour être le protocole par défaut de Centreon Broker. Il est léger, facile à décoder et spécialement conçu pour la surveillance des ressources avec Centreon Broker.

## Introduction

BBDO est l’abréviation de Broker Binary Data Object. BBDO est conçu pour transférer des « paquets de données » d’un nœud à un autre. Ces « paquets de données » sont la plupart du temps des informations de supervision fournies par le moteur de supervision (par exemple le moteur Centreon Engine ou Nagios). Il utilise principalement des valeurs binaires brutes, ce qui lui permet d’utiliser très peu de mémoire.

Avec Broker 22.04.0, nous avons introduit une nouvelle version de BBDO basée sur [Google Protobuf 3](https://developers.google.com/protocol-buffers). Le nouveau protocole reste compatible avec le précédent mais introduit de nouveaux événements. Par exemple, les événements PbService et PbServiceStatus sont envoyés au lieu des événements Service et ServiceStatus. Configuré avec BBDO 3, Broker comprend toujours les événements Service et ServiceStatus mais il doit envoyer par défaut les nouvelles versions.

## Types

Cette section porte sur le protocole BBDO 2.

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

| Type| Valeur| Utilise Protobuf
|----------|----------|----------
| Acknowledgement| 1| Non
| Comment| 2| Non
| Custom variable| 3| Non
| Custom variable status| 4| Non
| Downtime| 5| Non
| Event handler| 6| Non
| Flapping status| 7| Non
| Host check| 8| Non
| Host dependency| 9| Non
| Host group| 10| Non
| Host group member| 11| Non
| Host| 12| Non
| Host parent| 13| Non
| Host status| 14| Non
| Instance| 15| Non
| Instance status| 16| Non
| Log entry| 17| Non
| Module| 18| Non
| Service check| 19| Non
| Service dependency| 20| Non
| Service group| 21| Non
| Service group member| 22| Non
| Service| 23| Non
| Service status| 24| Non
| Instance Configuration| 25| Non
| Responsive Instance| 26| Non
| Pb Service| 27| Oui
| Pb Adaptive Service| 28| Oui
| Pb Service Status| 29| Oui
| Pb Host| 30| Oui
| Pb Adaptive Host| 31| Oui
| Pb Host Status| 32| Oui
| Pb Severity| 33| Oui
| Pb Tag| 34| Oui

### Storage

Le tableau ci-dessous répertorie les types d’événements disponibles dans la catégorie Storage. Ils doivent être combinés avec la catégorie BBDO\_STORAGE\_TYPE pour obtenir un ID d’événement BBDO.

| Type| Valeur| Utilise Protobuf
|----------|----------|----------
| metric| 1| Non
| rebuild| 2| Non
| remove\_graph| 3| Non
| status| 4| Non
| index mapping| 5| Non
| metric mapping| 6| Non
| Pb Rebuild Message| 7| Oui
| Pb Remove Graph Message| 8| Oui

### BBDO

Le tableau ci-dessous répertorie les types d’événements disponibles dans la catégorie BBDO. Ils doivent être combinés avec la catégorie BBDO\_BBDO\_TYPE pour obtenir un ID d’événement BBDO.

| Type| Valeur
|----------|----------
| version\_response| 1
| ack| 2

### BAM

Le tableau ci-dessous répertorie les types d’événements disponibles dans la catégorie BAM. Ils doivent être combinés avec la catégorie BBDO\_BAM\_TYPE pour obtenir un ID d’événement BBDO.

| Type| Valeur
|----------|----------
| ba\_status| 1
| kpi\_status| 2
| meta\_service\_status| 3
| ba\_event| 4
| kpi\_event| 5
| ba\_duration\_event| 6
| dimension\_ba\_event| 7
| dimension\_kpi\_event| 8
| dimension\_ba\_bv\_relation\_event| 9
| dimension\_bv\_event| 10
| dimension\_truncate\_table\_signal| 11
| rebuild| 12
| dimension\_timeperiod| 13
| dimension\_ba\_timeperiod\_relation| 14
| dimension\_timeperiod\_exception| 15
| dimension\_timeperiod\_exclusion| 16
| inherited\_downtime| 17

### Dumper

Le tableau ci-dessous répertorie les types d’événements disponibles dans la catégorie Dumper. Ils doivent être combinés avec la catégorie BBDO\_DUMPER\_TYPE pour obtenir un ID d’événement BBDO.

| Type| Valeur
|----------|----------
| Dump| 1
| Timestamp cache| 2
| Remove| 3
| Reload| 4
| Db dump| 5
| Db dump committed| 6
| Entries Ba| 7
| Entries Ba type| 8
| Entries boolean| 9
| Entries host| 10
| Entries kpi| 11
| Entries organization| 12
| Entries service| 13
| Directory dump| 14
| Directory dump committed| 15

### Extcmd

Le tableau ci-dessous répertorie les types d’événements disponibles dans la catégorie Extcmd. Ils doivent être combinés avec la catégorie BBDO\_EXTCMD\_TYPE pour obtenir un ID d’événement BBDO.

| Type| Valeur
|----------|----------
| Command request| 1
| Command result| 2

## Sérialisation des événements

La plupart des événements répertoriés dans chaque [catégorie d’événements](#catégories-dévénements) dispose d’un mapping utilisé pour sérialiser leur contenu. En effet, leur contenu est directement sérialisé dans les [données utiles du paquet](#format-de-paquet), un champ après l’autre dans l’ordre décrit dans les [tables de correspondance](developer-broker-mapping.md). Ils sont encodés selon les règles décrites dans le [paragraphe sur les types](#types).

## Exemple

Prenons un exemple et voyons comment un *événement* *host check* est envoyé dans un paquet. Son mapping est le suivant :

| Propriété| Type| Valeur dans l’exemple
|----------|----------|----------
| active\_checks\_enabled| booléen| True.
| check\_type| entier court| 0 (contrôle de l’hôte actif).
| host\_id| entier non signé| 42
| next\_check| temps| 1365080225
| command\_line| chaîne| ./my\_plugin -H 127.0.0.1

Et donne le paquet suivant avec les valeurs en hexadécimal.

```
+-----------------+-----------------+-----------------------------------+
|      CRC16      |      SIZE       |                ID                 |
+========+========+========+========+========+========+========+========+
|   0A   |   23   |   00   |   28   |   00   |   01   |   00   |   09   |
+--------+--------+--------+--------+--------+--------+--------+--------+

+--------+-----------------+-----------------------------------+--------
| active_|                 |                                   |
| checks_|    check_type   |              host_id              |    =>
| enabled|                 |                                   |
+========+========+========+========+==========================+========+
|   01   |   00   |   00   |   00   |   00   |   00   |   2A   |   00   |
+--------+--------+--------+--------+--------+--------+--------+--------+

--------------------------+--------------------------------------------
                            =>  next_check                      |    =>
+========+========+========+========+========+========+========+========+
|   00   |   00   |   00   |   51   |   5D   |   78   |   A1   |   2E   |
+--------+--------+--------+--------+--------+--------+--------+--------+

-----------------------------------------------------------------------
                            => command_line =>
+========+========+========+========+========+========+========+========+
|   2F   |   6D   |   79   |   5F   |   70   |   6C   |   75   |   67   |
+--------+--------+--------+--------+--------+--------+--------+--------+

-----------------------------------------------------------------------
                            => command_line =>
+========+========+========+========+========+========+========+========+
|   69   |   6E   |   20   |   2D   |   48   |   20   |   31   |   32   |
+--------+--------+--------+--------+--------+--------+--------+--------+

-----------------------------------------------------------------------+
                            => command_line                              |
+========+========+========+========+========+========+========+========+
|   37   |   2E   |   30   |   2E   |   30   |   2E   |   31   |   00   |
+--------+--------+--------+--------+--------+--------+--------+--------+
```

## Établissement de la connexion

BBDO est un protocole qui peut négocier des fonctionnalités. Lors de l’établissement d’une connexion, un paquet *version\_response* est envoyé par le client. Il fournit la version du protocole BBDO qu’il supporte et ses extensions. Le serveur répond à ce message par un autre paquet *version\_response* contenant sa propre version du protocole supportée et ses extensions. Si les versions du protocole correspondent, la négociation des extensions commence.

Actuellement, deux extensions sont supportées : **TLS** et **COMPRESSION**. Juste après le paquet **version\_response**, chaque pair recherche dans la liste des extensions de l’autre pair les extensions qu’il supporte. Lorsqu’il en trouve une, elle est activée (c’est-à-dire qu’elle démarre immédiatement).

### Exemple

Prenons **C** le client et **S** le serveur. Les étapes suivantes sont effectuées de manière séquentielle.

- **C** initie une connexion TCP avec **S** et la connexion est établie.
- **C** envoie un paquet *version\_response* avec les attributs suivants
  - protocole majeur : 1
  - protocole mineur : 0
  - protocole correctif : 0
  - extensions : « TLS COMPRESSION »
- **S** envoie son propre paquet **version\_response** en réponse à **C**
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

## Changement de version de BBDO

La version de BBDO doit être la même pour tous les serveurs de votre architecture (serveur central, serveurs distants, collecteurs).

> Si vous utilisez BBDO v2 avec cette version de Centreon, vous ne pourrez pas utiliser la page **Statut des ressources**.

Si vous voulez changer de version de BBDO (passer de la v3 à la v2 ou de la v2 à la v3), procédez comme suit :

1. Sur le serveur central, accédez à **Configuration > Collecteurs > Configuration de Centreon Broker**.

2. Sélectionnez le serveur souhaité, et dans l’onglet **Général**, dans la section **Paramètres avancés**, sélectionnez la version de BBDO souhaitée dans la liste **BBDO version**. Cliquez ensuite sur **Sauvegarder**.

3. Faites de même avec tous les éléments figurant sur la page **Configuration > Collecteurs > Configuration de Centreon Broker**.

4. Redémarrez **gorgoned** sur chaque serveur :
   
   ```shell
   systemctl restart gorgoned
   ```

5. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) pour tous les serveurs.

6. Arrêtez les services suivants :
   
   - Sur le serveur central et sur les serveurs distants :
     
     ```shell
     systemctl stop cbd centengine
     ```
   
   - Sur les collecteurs :
     
     ```shell
     systemctl stop centengine
     ```

7. Démarrez les services suivants :
   
   - Sur le serveur central et sur les serveurs distants :
     
     ```shell
     systemctl start cbd centengine
     ```
   
   - Sur les collecteurs :
     
     ```shell
     systemctl start centengine
     ```

Vous pouvez vérifier dans les journaux quelle version de BBDO est active pour un serveur :

- broker central :
  
  ```shell
  tail /var/log/centreon-broker/central-{broker,rrd,module}-master.log
  
  ```

- broker distant :
  
  ```shell
  tail /var/log/centreon-broker/<remote_name>-{broker,rrd,module}-master.log
  ```

- module collecteur :
  
  ```shell
  tail /var/log/centreon-broker/<poller_name>-module.log
  ```

La ligne suivante indique quelle version est utilisée pour chaque serveur :

```shell
[2022-05-17T14:53:44.828+00:00] [bbdo] [info] BBDO: peer is using protocol version 2.0.0, we're using version 2.0.0
```
