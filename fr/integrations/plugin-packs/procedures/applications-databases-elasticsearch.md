---
id: applications-databases-elasticsearch
title: Elasticsearch
---

## Vue d'ensemble

Elasticsearch est un moteur de recherche et d'analyse distribué et en open source pour tout type de données, y compris les données textuelles, numériques, géospatiales, structurées et non structurées. Elasticsearch a été conçu à partir d'Apache Lucene et a été lancé en 2010 par Elasticsearch N. V. (maintenant appelé Elastic). 

## Contenu du Plugin-Pack

### Objets supervisés

* Bases de donnéess
* Noeuds
* Partitions 
* Clusters
* Indices
* Documents
* Licences

### Métriques Collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--cluster-statistics-->

| Métrique                 | Description                                | Unité   |
| :----------------------- | :----------------------------------------- | :------ |
| display                  | Nom du cluster Elasticsearch               |         |
| status                   | Status du cluster Elasticsearch            |         |
| nodes_total              | Nombre de noeuds                           |         |
| nodes_donnée             | Nombre de données                          |         |
| nodes_coordinating       | Nombre de noeuds se coordonnants           |         |
| nodes_master             | Nombre de noeuds maîtres                   |         |
| nodes_ingest             | Nombre de données ingérées                 |         |
| indices_count            | Nombre d'indices                           |         |
| Shards_total             | Nombre total de partitions                 |         |
| Shards_active            | Nombre de partitions actives               |         |
| Shards_unassigned        | Nombre de partitions non-assignées         |         |
| Shards_relocating        | Nombre de partitions se relocalisants      |         |
| active_Shards_percent    | Pourcentage de partitions active           |    %    |
| tasks_pending            | Nombre de tâches suspendues                |         |
| docs_count               | Nombre de documents                        |         |
| size_in_bytes            | Tailles de toutes les partitions assignées |    B    |

<!--indice-statistics-->

| Métrique           | Description                                            |  Unité   |
| :----------------------- | :----------------------------------------------- | :------ |
| display                  | Nom de l'Indice Elasticsearch                     |         |
| status                   | Status de l'Indice Elasticsearch                     |         |
| Shards_active            | Nombre de partitions actives                     |         |
| Shards_unassigned        | Nombre de partitions non-assignées               |         |
| docs_count               | Nombre de documents                              |         |
| size_in_bytes_primaries  | Taille de toute les partitions primaires         |    B    |
| size_in_bytes_total      | Taille totale de toutes les partitions assignées |    B    |

<!--license-->

| Métrique           | Description                              | Unité   |
| :----------------- | :--------------------------------------- | :------ |
| type               | Type de Licence                          |         |
| status             | Status de la Licence                     |         |
| issued_to          | Propriétaire de la licence               |         |
| issue_date         | Date de concession de la licence         |         |


<!--node-statistics-->

| Métrique          | Description                                               | Unité   |
| :---------------- | :-------------------------------------------------------- | :-----  |
| display           | Nom du noeud Elasticsearch                                |         |
| indices_count     | Nombre d'indices dans le noeud                            |         |
| heap_used_percent | Pourcentage de mémoire actuellement utilisée dans la pile |    %    |
| heap_used_in_bytes| Mémoire disponible pour la pile                           |    B    |
| heap_max_in_bytes | Taille maximum de mémoire disponible pour la pile         |    B    |
| available_in_bytes| Nombre total d'octets disponibles                         |    B    |
| total_in_bytes    | Taille totale de tous les fichiers stockés                |    B    |
| docs_count        | Nombre de documents dans l'indice                         |         |
| size_in_bytes     | Taille totale de toutes les partitions assignées au noeud |    B    |

<!--Rules-->

| Non de la rêgle                        | Description                                       |
| :------------------------------------- | :------------------------------------------------ |
| App-DB-Elasticsearch-Indice-Statistics | Découverte des indices sur votre BD Elasticsearch |
| App-DB-Elasticsearch-Node-Statistics   | Découverte des noeuds sur votre BD Elasticsearch  |  

<!--END_DOCUSAURUS_CODE_TABS-->

Utilisez le module de découverte pour pouvoir superviser vos bases de donnée Elasticsearch, Allez dans  Configuration > Services > Découverte pour lancer l'analyse.

## Prerequis 

Afin de superviser un cluster Elasticsearch, celui-ci doit être configuré comme indiqué dans la documentation officielle d'Elasticsearch: https://www.elastic.co/guide/en/elasticsearch/reference/7.8/monitor-elasticsearch-cluster.html
Pour pouvoir communiquer avec le collecteurs Centreon poller, l'API du noeud Elasticsearch doit utiliser le protocole http et le port 9200.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!-- Licence Business & IT Editions en ligne-->

1. Installer le Plugin sur tous les collecteurs Centreon contrôlants les ressources Elasticsearch:

```bash
yum install centreon-plugin-Applications-donnéebases-Elasticsearch
```

2. Installer le Plugin-Pack *Elasticsearch* dans la page *Configuration  \>  Packs de plugins*  de l'interface Web Centreon

<!--Licenses hors lignes-->

1. Installer le Plugin sur tous les collecteurs Centreon contrôlants les ressources Elasticsearch:

```bash
yum install centreon-plugin-Applications-donnéebases-Elasticsearch
```

2. Installer le Plugin-Pack RPM sur le serveur Centreon  **Central**:

```bash
yum install centreon-pack-applications-donnéebases-elasticsearch
```

3. Dans la page *Configuration  \> Packs de plugins* de l'interface Web Centreon, installer le Plugin-Pack *Elasticsearch*

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Toujours dans l'interface Web Centreon, aller à la page  *Configuration \> Hôstes* et cliquer sur *Ajouter*. Remplir alors les champs du formulaires. 
Dans le champs *Modèles* cliquer sur *+ Ajouter une nouvelle entrée* puis sélectionner *App-DB-Elascticsearch-custom*

Cliquer sur le bouton *Sauvegarder*.

Les macros suivantes doivent être configurées sur l'hôte:

| Macro                 | Description                         | Valeur par défaut | Exemple  |
| :-------------------- | :---------------------------------- | :---------------- | :------- |
| ELASTICSEARCHPORT     | The Elasticsearch instance port     | 9200              | 1234     |
| ELASTICSEARCHPROTO    | The Elasticsearch instance protocol | http              | https    |
| ELASTICSEARCHUSERNAME | The Elasticsearch instance username |                   | centreon |
| ELASTICSEARCHPASSWORD | The Elasticsearch instance password |                   | centreon |

## FAQ

### Comment tester en ligne de commande et que signifient les options principales ?

Une fois que le Plugin est installé, vous pouvez le tester directement en ligne de commande depuis votre collecteurs Centreon avec l'utilsiateur *centreon-engine*:

```bash
su - centreon-engine \
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \ 
--hostname=168.253.16.125 \
--port=9200 \
--proto=http \
--plugin=database::elasticsearch::restapi::plugin \
--mode=node-statistics \
--filter-name='Node 1' \
--username='Elasticsearch_username' \
--password='Elasticsearch_password'

```

Sortie: 

```bash
OK: Node 'i-Vertix Node 1' JVM Heap: 26%, Free Disk Space: 1.56TB, Documents: 4362761044, donnée: 1.26TB | 'i-Vertix Node 1#node.jvm.heap.usage.percentage'=26%;;;0;100 'i-Vertix Node 1#node.jvm.heap.usage.bytes'=36380302240B;;;0;137151119360 'i-Vertix Node 1#node.disk.free.bytes'=1710072680448B;;;0;3113589145600 'i-Vertix Node 1#node.documents.total.count'=4362761044;;;0; 'i-Vertix Node 1#node.donnée.size.bytes'=1386278479651B;;;0;
```
La commande demande des statistiques au noeud Elasticsearch nommé 'Node 1' (```--mode=node-statistics --filter-name='Node 1```) qui possède l'adresse IP/FQDN *168.253.16.125* (```--hostname=168.253.16.125```). Nous utiliserons le port 92000 (```--port=9200```) et le protocole http (```proto=http''```). Le nom d'utilisateur de la base de donnée est *Elasticsearch_username* (```--username='Elasticsearch_username'```) et son mot de passe *Elasticsearch_password*(```--password='Elasticsearch_password'```)

Tous les modes disponibles peuvent être listés par la ligne de commande suivante:

```bash
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
    --list-mode
```

Et les options des différents modes peuvent être affichées grâce au paramètre ```--help```:  

```bash
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
    --mode=node-statistics \
    --help
```

### Comment interpréter les erreurs suivantes ?

#### UNKNOWN: 500 Can't connect

Ce message indique que la connexion a l'API a échouée.

Il est nécessaire de vérifier qu'aucun équipement tiers agissant en tant que Pare-Feu ne bloque le flux. Il est également possible qu'une connexion via proxy soit requise. Dans ce cas, il vous est possible de renseigner l'adresse de votre proxy grâce à l'option --proxyurl

#### UNKNOWN: 501 Protocol scheme 'connect' is not supported

SI vous utilisez un proxy, il est possible d'obtenir cette erreur. Lorsque c'est le cas, utiliser le Backend curl qui résoudra cette erreur:
*--http-backend='curl'*.