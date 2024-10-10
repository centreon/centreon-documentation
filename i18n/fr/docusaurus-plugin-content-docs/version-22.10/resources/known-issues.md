---
id: known-issues
title: Problèmes connus
---

Voici une liste de problèmes connus et/ou bugs que vous pouvez rencontrer.
Nous essayons ici de fournir des contournements.
Nous appliquons des correctifs lorsque cela est nécessaire et améliorons continuellement notre logiciel afin de résoudre les problèmes de prochaines versions.

## Centreon Web

### Résultats incohérents lors de la supervision d'un métaservice

Cet incident peut se produire lorsque vous créez un métaservice lié à des services supervisés tels que des services Ping par exemple. Alors que les services Ping renvoient des résultats corrects, les résultats reçus dans le panneau de détail pour le métaservice peuvent être incohérents et renvoyer le statut **inconnu** avec un message.

#### Contournement

Il n'existe actuellement pas de contournement.

### Environment variable not found: "hostCentreon"

Lors de l'installation d'un serveur central (ou d'un serveur distant), un message d'erreur apparaît pendant un court instant dans la barre de notification lors de l'accès à l'assistant pour terminer l'installation. Le message d'erreur est le suivant :

```sql
The controller for URI "/centreon/api/latest/platform/versions" is not callable: Environment variable not found: "hostCentreon".
```

#### Contournement

Il n'y a pas de solution de contournement et ce message n'empêche pas de finaliser l'installation.

### Vous avez atteint le nombre maximum d'id dans la table centreon_storage.index_data

#### Contournement

Exécutez les requêtes suivantes dans MariaDB :

Dans votre base de données temps réel :
```sql
ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;
ALTER TABLE metrics MODIFY index_id bigint unsigned;
```

Dans votre base de données de configuration :
```sql
ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;
ALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;
```

> Selon la volumétrie de vos métriques, cette opération peut être plus ou moins longue.

### L'Autologin ne fonctionne pas avec certaines pages

#### Description

L'autologin n'est actuellement pas géré pour les pages suivantes :

* **Supervision > Map (legacy exclus)**
* **Monitoring > Resources Status**
* **Configuration > Hosts > Discovery**
* **Configuration > Business Activity > Business Views**
* **Configuration > Business Activity > Business Activity**

#### Contournement

Il n'existe actuellement pas de contournement.

## Anomaly Detection

### Problème de filtre dans Statut des ressources

Dans la vue Statut des ressources, vous ne pouvez pas sauvegarder de nouveau filtre de type Anomaly Detection.

### Impossible de superviser un service de détection d'anomalies lié à un métaservice

Lorsque vous créez un métaservice auquel est lié un service de détection des anomalies, il se peut que vous ne receviez pas de données pour les graphiques et les prédictions.

#### Contournement

Il n'existe actuellement pas de contournement.

## Centreon MBI

### Vous obtenez des erreurs lors de l'import journalier et calcul des statistiques

#### Description

Après la mise à jour de MBI, vous obtenez une erreur similaire à la suivante pendant le calcul des statistiques.

```shell
[Tue Jun 1 18:28:26 2021] [FATAL] mod_bi_hgservicemonthavailability insertion execute error : Out of range value for column 'mtbf' at row 1
[Tue Jun 1 18:28:26 2021] [FATAL] Program terminated with errors
```

Cette erreur est due à un problème de mise à jour des colonnes dans la base de données.

#### Solution

1. Vous devez exécuter un script pour mettre à jour les colonnes de la base de données, en entrant cette commande sur le serveur central :

  ```shell
  php /usr/share/centreon/www/modules/centreon-bi-server/tools/updateColumnsToBigint.php
  ```

2. Puis suivez cette procédure pour [reprendre partiellement les données de reporting](../reporting/concepts.md#comment-reprendre-partiellement-les-données-de-reporting-).

### Les rapports contenant des graphes sont vides

> Cet incident ne concerne que **MBI 22.10** sur **EL7**.

Votre serveur central est en HTTPS et les graphes suivants ne s'affichent pas lors de la génération des rapports :

- Host-Graph-v2
- Hostgroup-Graph-v2

Cet incident est dû au lien manquant vers le fichier des certificats CA.

#### Contournement

- Exécutez les commandes suivantes en tant qu'utilisateur root :

> Notez que le chemin vers le fichier **cacerts** de Java peut varier en fonction de la version installée.

```shell
rm /usr/java/jdk-17/lib/security/cacerts
ln -s /etc/pki/ca-trust/extracted/java/cacerts /usr/java/jdk-17/lib/security/cacerts
```

### Erreur lors de l'exécution du script ETL

Cet incident est dû à des changements apportés sur les paquets et renvoie une erreur similaire à celle-ci :

```shell
Can't open perl script "/usr/share/centreon-bi/etl/perfdataStatisticsBuilder_legacy.pl": No such file or folder
```

#### Contournement

Exécutez la commande suivante en tant qu'utilisateur ``root`` ou ``centreonBI`` :

```shell
sed -i 's/_legacy//g' /usr/share/centreon-bi/bin/centreonBIETL
```

### MBI ne fonctionne pas si les bases de données ont des noms personnalisés

#### Contournement

Il n'existe actuellement pas de contournement.

### L'onglet Paramètres du rapport d'une tâche est vide

#### Description

L'onglet **Paramètres du rapport** d'une tâche est vide (**Rapports > Monitoring Business Intelligence > Tâches**)

#### Contournement

* Allez à l'onglet **Configuration** de la tâche
* Sélectionnez un modèle différent dans la liste **Modèle de rapport**
* Sélectionnez le bon modèle de rapport
* Retournez sur l'onglet **Paramètres du rapport**

### Vous avez atteint le nombre maximum d'id pour les colonnes servicemetric_id

#### Description

Si vous possédez une très large infrastructure, il est possible que la taille limite de la colonne `servicemetric_id` soit atteinte.

#### Contournement

> Selon la volumétrie des données, cette opération peut être plus ou moins longue.

* Connectez-vous sur le serveur de reporting
* Désactivez la tâche planifiée dans `/etc/cron.d/centreon-bi-engine` :

    ```shell
    #30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1
    ```

* Exécutez les requêtes suivantes dans la base de données `centreon_storage` :

    ```sql
    ALTER TABLE mod_bi_metricdailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metrichourlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metricmonthcapacity MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metriccentiledailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metriccentilemonthlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_metriccentileweeklyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;
    ALTER TABLE mod_bi_servicemetrics MODIFY id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT;
    ```

* Activez la tâche planifiée dans `/etc/cron.d/centreon-bi-engine` :

    ```shell
    30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1
    ```

* Si l'opération est effectuée pendant le lancement habituel de la tâche planifiée, exécutez la commande suivante en indiquant les bonnes dates de début et de fin :

    ```shell
    /usr/share/centreon-bi/bin/centreonBIETL -rIEDP -s YYYY-MM-DD -e YYYY-MM-DD
    ```

## Centreon BAM

### Problème de configuration des nouvelles Activités métier

Les niveaux par défaut des méthodes de calcul impact et ratio ne sont pas reportés par défaut dans la configuration des nouvelles activités métier.

#### Contournement

Il n'existe actuellement pas de contournement.
