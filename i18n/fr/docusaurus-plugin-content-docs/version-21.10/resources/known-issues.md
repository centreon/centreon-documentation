---
id: known-issues
title: Problèmes connus
---

Voici une liste de problèmes connus et/ou bugs que vous pouvez rencontrer.
Nous essayons ici de fournir des contournements.
Nous appliquons des correctifs lorsque cela est nécessaire et améliorons continuellement notre logiciel afin de résoudre les problèmes de prochaines versions.

## Centreon web

### La reconstruction des fichiers RRD d'un service rend invalide le fichier RRD de statut

Toutes ses données historiques seront affichées comme CRITIQUE.

#### Contournement

Voici une solution de contournement pour procéder correctement à la reconstruction (sur le serveur central) :

1. Faites une sauvegarde de tous les fichiers RRD de statut liés aux services que vous souhaitez reconstruire.
2. Lancez la reconstruction RRD.
3. Une fois la reconstruction terminée, restaurez les fichiers RRD.

Si la reconstruction a déjà été effectuée, vous ne pourrez pas récupérer les données antérieures. Supprimez le fichier RRD de statut et toutes les nouvelles données seront affichées correctement avec le bon statut.

### Vous avez atteint le maximum d'id dans la table centreon_storage.index_data

#### Contournement

Exécutez la requête suivante dans MariaDB :

Dans votre base de données temps réel :

```mysql
ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;
ALTER TABLE metrics MODIFY index_id bigint unsigned;
```

Dans votre base de données de configuration :

```mysql
ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;
ALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;
```

Selon la volumétrie de vos métriques, cette opération peut être plus ou moins longue.

#### Contournement

Il n'existe pas de contournement, si ce n'est de désactiver les outputs BAM dans la configuration de broker, ce qui revient à désactiver BAM. Ce problème est rencontré sur toutes les versions majeures actuellement supportées et devrait être corrigé courant janvier 2022.

### L'Autologin ne fonctionne pas avec certaines pages

* Monitoring > Resources Status
* Configuration > Hosts > Discovery
* Configuration > Business Activity > Business Views
* Configuration > Business Activity > Business Activity

### Le contenu des pages n'est pas traduit selon la langue de l'utilisateur

Vous devez installer les langues sur votre système d'exploitation avec la commande suivante :

```shell
yum install -y glibc-all-langpacks
```

Puis redémarrez PHP à l'aide de la commande suivante

```shell
systemctl restart php-fpm
```

## Centreon BAM

### Problème de rafraîchissement sur BAM

Sur des plateformes ayant le module BAM et supervisant plusieurs dizaines de milliers de services, après un redémarrage du service `cbd`, il est possible que les données en provenance de la supervision mettent plusieurs dizaines de minutes avant de se rafraîchir dans l'interface. D'après nos observations, cela peut prendre 20 minutes pour une plateforme supervisant 50k services. **Aucune donnée n'est perdue, et la latence se résorbe durablement jusqu'au redémarrage suivant.**

## Centreon MBI

### Onglet vide dans MBI

Dans MBI, l'onglet **Paramètres du rapport** d'une tâche est vide (**Rapports > Monitoring Business Intelligence > Tâches**)

#### Contournement

1. Allez à l'onglet **Configuration** de la tâche.
2. Sélectionnez un modèle différent dans la liste **Modèle de rapport**.
3. Sélectionnez le bon modèle de rapport
4. Retournez sur l'onglet **Paramètres du rapport**.

### MBI ne fonctionne pas si les bases de données ont des noms personnalisés

#### Contournement

Il n'existe actuellement pas de contournement.

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
