---
id: known-issues
title: Problèmes connus
description: Problèmes connus et contournements pour la plateforme Centreon
---

Voici une liste de problèmes connus et/ou bugs que vous pouvez rencontrer.
Nous essayons ici de fournir des contournements.
Nous appliquons des correctifs lorsque cela est nécessaire et améliorons continuellement notre logiciel afin de résoudre les problèmes de prochaines versions.

## Centreon Tableaux de bord

### Un nombre trop élevé de widgets provoque une erreur "413 : Request Entity Too Large"

Au-delà d’un certain nombre de widgets dans un même tableau de bord, tout ajout de nouveau widget génère une erreur `413 error on Save (POST | Request Entity Too Large)`.
La taille maximale du corps de la requête a été atteinte. Vous pouvez résoudre cette erreur en modifiant la configuration PHP/Apache.

#### Contournement

1. Modifiez le fichier `/etc/httpd/conf.d/mod_security.conf` et augmentez la valeur de `SecRequestBodyNoFilesLimit`. Par défaut, cette valeur est de **131072 (128 Mo)**. Vous pouvez l'augmenter à **524288 (512 Mo)**.
2. Redémarrez ensuite le service Apache.

## Anomaly Detection

### Limitations des services Anomaly Detection utilisés en tant qu'indicateurs dans BAM

Lorsqu'ils sont utilisés en tant qu'indicateurs dans [BAM](../service-mapping/introduction.md), les services Anomaly Detection :

1. Ne sont ni pris en charge par [CLAPI](../api/clapi.md) ni par [l'API V1](../api/rest-api-v1.md).
2. Ne peuvent pas être configurés via la page **Configuration > Activités métier > Indicateurs**. Il faut d'abord créer une activité métier via la page **Configuration > Activités métier > Activités métier**, puis utiliser le service Anomaly Detection dans l'activité métier.

#### Contournement

1. Utilisez l'API v2.
2. Créez d'abord l'activité métier, puis utilisez le service Anomaly Detecion en tant qu'indicateur dans celle-ci (voir ci-dessus).

### La fonctionnalité d'exclusion de données n'est pas encore disponible

La fonctionnalité qui vous permet d'exclure des données de calcul du modèle de détection des anomalies apparaît dans l'interface mais n'est pas encore implémentée. Vous obtenez le message "Not implemented yet" lorsque vous essayez d'utiliser cette fonctionnalité.

#### Contournement

Il n'existe pas de contournement mais la fonctionnalité sera disponible dans une prochaine version.

## Centreon Web

### Environment variable not found: "hostCentreon"

Lors de l'installation d'un serveur central (ou d'un serveur distant), un message d'erreur apparaît pendant un court instant dans la barre de notification lors de l'accès à l'assistant pour terminer l'installation. Le message d'erreur est le suivant :

```sql
The controller for URI "/centreon/api/latest/platform/versions" is not callable: Environment variable not found: "hostCentreon".
```

#### Contournement

Il n'y a pas de solution de contournement et ce message n'empêche pas de finaliser l'installation.

### Vous avez atteint le nombre maximum d'id dans la table centreon_storage.index_data

#### Contournement

Exécutez les requêtes suivantes dans MariaDB/MySQL :

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

2. Puis suivez cette procédure pour [reprendre partiellement les données de reporting](../reporting/rebuilding-data.md#reconstruction-partielle--conserver-lhistorique-de-vos-données).

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

## Base de données

### Vous avez un conflit entre les paquets mysql-common et MariaDB-common

#### Description

Si vous avez installé mariadb depuis les dépôts officiels de mariadb, il est possible que vous obteniez l'erreur suivante lors de la mise à jour de votre plateforme (`dnf update`) :

```shell
Error: Transaction test error:
  file /usr/share/mysql/charsets/Index.xml conflicts between attempted installs of mysql-common-8.0.43-1.el9_6.x86_64 and MariaDB-common-10.11.15-1.el9.x86_64
  file /usr/share/mysql/charsets/armscii8.xml conflicts between attempted installs of mysql-common-8.0.43-1.el9_6.x86_64 and MariaDB-common-10.11.15-1.el9.x86_64
  ...
```

Cela est dû à la version 4.053 de perl-DBD-MySQL qui nécessite maintenant mysql-common et qui rentre en conflit avec MariaDB-common.

#### Contournement

Afin de pouvoir mettre à jour la plateforme, il est nécessaire de bloquer l'installation de perl-DBD-MySQL-4.053 :

```shell
echo "exclude=perl-DBD-MySQL-4.053*" >> /etc/dnf/dnf.conf
```

Vous devriez maintenant pouvoir mettre à jour votre plateforme :

```shell
dnf update
```
