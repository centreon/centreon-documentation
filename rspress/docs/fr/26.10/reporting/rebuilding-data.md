---
id: rebuilding-data
title: Reconstruire les données MBI
---

## En quoi consiste la reconstruction des données ?

Reconstruire les données veut dire [exécuter l'ETL pour calculer les dimensions et les agrégations](how-mbi-works.md#phase-2--lancement-de-letl-les-données-sont-copiées-sur-mbi-puis-agrégées). Les rapports ne peuvent être générés que lorsque l'ETL a fini de tourner et que toutes les données sont prêtes.

## Quand faut-il reconstruire les données?

Reconstruire les données est nécessaire dans les cas suivants :

- Certaines modifications ont été apportées à la configuration (par exemple, si les membres d'un groupe d'hôtes ont changé et que vous disposez déjà de données pour ces hôtes, ou si vous créez un groupe d'hôtes comprenant des hôtes qui disposent déjà de données). Vous avez deux options :
    - [**Reconstruction complète**](#reconstruction-complète--écraser-toutes-les-données-existantes) : vous souhaitez recalculer toutes vos données avec la nouvelle configuration qui leur est appliquée. Le cas d'utilisation typique pour cela est lorsque vous configurez MBI : vous devrez peut-être ajuster la configuration plusieurs fois pour obtenir le résultat souhaité. Après avoir modifié les ressources sur votre serveur central (par exemple, les groupes d'hôtes ou les catégories de services), vous devrez mettre à jour les données dans votre base MBI en conséquence.
    - [**Reconstruction partielle**](#reconstruction-partielle--conserver-lhistorique-de-vos-données) : vous souhaitez conserver l'historique de vos données (pour diverses raisons telles que la conformité, les audits, la référence à des rapports actuels ou le test d'une nouvelle configuration sans modifier les données historiques). Par exemple, si un groupe d'hôtes n'existe plus, vous pouvez tout de même souhaiter conserver une trace qu'il a existé à un moment donné.
- Vous devez [réparer les trous dans vos données](#réparer-les-trous-dans-vos-données) : lancez une reconstruction partielle pour le faire. Des trous dans vos données peuvent apparaître si une ou plusieurs exécutions quotidiennes de l'ETL n'ont pas abouti, par exemple en raison d'erreurs de base de données ou de pannes de réseau.

## À propos de l'ETL MBI

### Quand s'exécute l'ETL?

L'ETL s'exécute dans trois contextes différents :

* Lors de la [construction initiale des données](installation.md#étape-5--construire-la-base-de-données-mbi) après avoir installé MBI.
* [Tous les jours (à 4h30 du matin par défaut)](how-mbi-works.md#phase-2--lancement-de-letl-les-données-sont-copiées-sur-mbi-puis-agrégées), lorsque les donées du jour précédent sont compilées.
* Lorsque vous lancez une [reconstruction manuelle](#quand-faut-il-reconstruire-les-données) : c'est le cas d'usage décrit dans cette page.

### Comment fonctionne l'ETL ?

* Lire [**Comment fonctionne MBI**, phase 2](how-mbi-works.md#phase-2--lancement-de-letl-les-données-sont-copiées-sur-mbi-puis-agrégées).
* Lire [**Référence des commandes de l'ETL**](#référence-des-commandes-de-letl).

### Avant de commencer avec l'ETL

* Avant de commencer avec MBI, assurez-vous d'avoir [préparé vos données comme décrit ici](preparing-data.md). Ensuite, vérifiez que le processus **gorgoned** fonctionne correctement. Redémarrez-le si nécessaire.

   ```shell
   systemctl status gorgoned
   ```

   ```shell
   systemctl restart gorgoned 
   ```

* Avant de lancer une opération de reconstruction, essayez d'estimer le temps nécessaire ([consultez les logs](troubleshooting.md#où-sont-stockés-les-logs-) pour voir combien de temps prend l'exécution). Selon le volume de données sur le serveur central, le processus de reconstruction peut prendre beaucoup de temps. Si vous disposez d'un volume important de données, afin d'éviter les doublons ou les interruptions pendant la reconstruction, commentez temporairement la ligne suivante dans le fichier cron **/etc/cron.d/centreon-bi-engine** afin de désactiver l'exécution quotidienne de l'ETL :

   ```shell
   #30 4 * * * root /usr/share/centreon-bi/bin/centreonBIETL -d >> /var/log/centreon-bi/centreonBIETL.log 2>&1
   ```

   Puis relancez **crond** :

   ```shell
   systemctl restart crond
   ```

   > N'oubliez pas de [décommenter la ligne dans le fichier cron et de relancer **crond**](#après-avoir-exécuté-des-scripts-de-reconstruction) une fois la reconstruction terminée.

* Pour éviter que le gestionnaire de rétention des données ne tourne en même temps que la reconstruction et ne cause des problèmes, commentez temporairement la ligne suivante dans **/etc/cron.d/centreon-bi-purge**.

   ```shell
   #30 7 * * 1-5 root /usr/share/centreon-bi//etl/dataRetentionManager.pl >> /var/log/centreon-bi//dataRetentionManager.log 2>&1
   ```

   Puis relancez **crond** :

   ```shell
   systemctl restart crond
   ```

   > N'oubliez pas de [décommenter la ligne dans le fichier cron et de relancer **crond**](#après-avoir-exécuté-des-scripts-de-reconstruction) une fois la reconstruction terminée.

## Reconstruction complète : écraser toutes les données existantes

### Vous avez beaucoup de données

Dans un premier temps, lisez la section [**Avant de commencer avec l'ETL**](#avant-de-commencer-avec-letl).

Dans ce cas d'usage, nous partons du principe que vous disposez déjà des données brutes. Cette procédure n'inclut donc pas l'importation des données brutes des métriques : c'est pourquoi les 4 scripts de l'ETL sont lancés séparément. Assurez-vous que toutes les données importées depuis Centreon sont à jour sur votre serveur de reporting en exécutant la commande suivante :

```shell
/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
```

Assurez-vous que le résultat contient le message suivant : **ETL OK - Database is up to date**, OU que les tables suivantes ne sont pas listées:

- data_bin
- hoststatevents
- servicestateevents

S'il y a un problème avec le résultat, lisez [**Identifier les données ou partitions manquantes**](troubleshooting.md#identifier-des-données-ou-partitions-manquantes-avec-les-commandes---partitions-et---db-content).

Une fois que vous avez confirmé que vos données sont bonnes, exécutez les commandes suivantes pour mettre à jour et reconstruire vos données de reporting :

1. Importez la configuration Centreon la plus récente :

   ```shell
   /usr/share/centreon-bi/etl/importData.pl -r --centreon-only
   ```

2. Calculez les dimensions du reporting :

   ```shell
   /usr/share/centreon-bi/etl/dimensionsBuilder.pl -r
   ```

3. Agrégez les évènements et les disponibilités :

   ```shell
   nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r > /var/log/centreon-bi/rebuildAllEvents.log &
   ```

4. Agrégez les données de performance (stockage, trafic, etc.):

   ```shell
   nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r > /var/log/centreon-bi/rebuildAllPerf.log &
   ```

5. Une fois la reconstruction terminée, [faites toute opération post-reconstruction nécessaire](#après-avoir-exécuté-des-scripts-de-reconstruction).

### Vous n'avez pas beaucoup de données

Dans un premier temps, lisez la section [**Avant de commencer avec l'ETL**](#avant-de-commencer-avec-letl).

Si vous n'avez pas beaucoup de données, les temps d'exécution ne poseront pas problème et vous pouvez utiliser le script global **centreonBI** avec les options suivantes :

```shell
nohup /usr/share/centreon-bi//bin/centreonBIETL -rICDEP >> /var/log/centreon-bi//centreonBIETL.log 2>&1 &
```

- L'option **-rICDEP** signifie que vous allez extraire les données de la base de données de configuration Centreon en important uniquement la configuration des hôtes, groupes d'hôtes, services, catégories de services, etc.
- Cette procédure supprime toutes les données précédemment calculées et les liens entre les objets, puis recalcule les données en fonction de la période de rétention définie dans la dernière configuration Centreon.

Une fois la reconstruction terminée, [faites toute opération post-reconstruction nécessaire](#après-avoir-exécuté-des-scripts-de-reconstruction).

## Reconstruction partielle : conserver l'historique de vos données

### Granularité de l'agrégation

MBI permet de reconstruire les données à différents niveaux de granularité : horaire, quotidienne ou mensuelle. La granularité dépend de la période spécifiée lors du lancement du processus de reconstruction. Par exemple, si une reconstruction est effectuée pour la période du 1er juillet au 1er août, MBI ne reconstruira que les données horaires et quotidiennes pour cette période. Cependant, les données mensuelles sont calculées d'une manière spécifique : le calcul pour le mois M a lieu le premier jour du mois M+1. Par conséquent, pour reconstruire toutes les données du mois de juillet, y compris les agrégats mensuels, vous devez inclure le 1er août dans la période en spécifiant une date de fin au 2 août car les données du jour spécifié comme date de fin ne sont pas incluses.

### Options pour une reconstruction partielle

Les options **-s** et **-e** définissent la période de temps pour la reconstruction des données.

- **-s** définit la date de début (**AAAA-MM-JJ**).
- **-e** définit la date de fin (**AAAA-MM-JJ**). Notez que le jour spécifié comme date de fin ne sera pas inclus dans les données :
   - Pour inclure les données jusqu'à un jour spécifique (par exemple, le 7 août), définissez **-e** au jour suivant (**2025-08-08**).
   - Pour inclure un mois complet (par exemple, juillet), définissez la date de début (**-s**) sur le 1er jour du mois (**2025-07-01**) et la date de fin (**-e**) sur le 2e jour du mois suivant (**2025-08-02**, voir [**Granularité d'agrégation**](#granularité-de-lagrégation)).

L'option **-d** de **dimensionBuilder.pl** effectue une mise à jour incrémentale, en ajoutant ou en modifiant uniquement les éléments de configuration modifiés. Elle est idéale pour tester ou mettre à jour des périodes spécifiques sans affecter les données historiques.

L'option **--no-purge** est extrêmement importante : elle préserve les données statistiques existant en dehors de la plage de dates spécifiée. Seules les données comprises dans la période sélectionnée seront supprimées et recalculées. Si vous oubliez de spécifier cette option, les données en dehors de la plage de dates seront supprimées.

### Commandes pour une reconstruction partielle

Dans un premier temps, lisez la section [**Avant de commencer avec l'ETL**](#avant-de-commencer-avec-letl).

Si vous souhaitez conserver les statistiques précédemment agrégées et appliquer la nouvelle configuration uniquement à une période spécifique, utilisez les commandes suivantes (notez que vous DEVEZ utiliser l'option **--no-purge**, sinon toutes vos autres données seront supprimées) :

1. Importez la configuration Centreon entre les dates spécifiées :

   ```shell
   /usr/share/centreon-bi/etl/importData.pl -r --centreon-only -s $date_start$ -e $date_end$ --no-purge
   ```

2. Calculez les dimensions du reporting :

   ```shell
   /usr/share/centreon-bi/etl/dimensionsBuilder.pl -d
   ```

3. Agrégez les évènements et la disponibilité :

   ```shell
   nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r  -s $date_start$ -e $date_end$ --no-purge > /var/log/centreon-bi/rebuildAllEvents.log &
   ```

4. Agrégez les données de performance (stockage, trafic, etc.) entre les dates spécifiées :

   ```shell
   nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r -s $date_start$ -e $date_end$ --no-purge > /var/log/centreon-bi/rebuildAllPerf.log &
   ```

5. Une fois la reconstruction terminée, [faites toute opération post-reconstruction nécessaire](#après-avoir-exécuté-des-scripts-de-reconstruction).

### Reconstruire uniquement des évènements/disponibilités ou uniquement des métriques

La procédure décrite ci-dessus est la procédure standard recommandée. Cependant, si vous disposez d'une grande quantité de données et que vous êtes certain de ne devoir reconstruire que les événements/la disponibilité ou uniquement les métriques, suivez les étapes indiquées dans le tableau ci-dessous :

* Évènements/disponibilité uniquement : étapes 1, 3 et 4.
* Métriques uniquement : étapes 2, 3, 5 et 6.

Une fois la reconstruction terminée, [faites toute opération post-reconstruction nécessaire](#après-avoir-exécuté-des-scripts-de-reconstruction).

| Étapes | Description | Commande | Temps d'exécution |
|--------|-------------|----------|--------------------|
| **1. Importer les données d'évènements et de disponibilités (hors données de performances)** | Importe les données d'évènements mais pas les données de performance (`data_bin`) entre deux dates spécifiques. (Utiliser cette commande en cas de problème avec le contenu des tables `mod_bam_reporting`, `hoststateevents` ou `servicestateevents`). | `nohup /usr/share/centreon-bi/etl/importData.pl -r -s $date_start$ -e $date_end$ --ignore-databin --no-purge > /var/log/centreon-bi/rebuild_importDataEvents.log &` | **Rapide** (quelques minutes) |
| **2. Importer les métriques (`data_bin`)** | Importe uniquement les données `data_bin` entre deux dates spécifiques. | `nohup /usr/share/centreon-bi/etl/importData.pl -r --no-purge --databin-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_importDataBin.log &` | De quelques minutes à plusieurs heures |
| **3. Mettre à jour les dimensions de reporting** | Met à jour les dimensions de reporting. Utilisez `-d` pour conserver l’historique des changements de configuration. | `nohup /usr/share/centreon-bi/etl/dimensionsBuilder.pl -d > /var/log/centreon-bi/rebuild_dimensions.log &` | **Rapide** (de quelques secondes à quelques minutes), selon le nombre de groupes, catégories et métriques importés |
| **4. Reconstruire les tables d'évènements** | Reconstruit les évènements en fonction de la période de rétention définie dans **Reporting > Monitoring Business Intelligence > General options**, onglet **Options de rétention des données**. | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --events-only --no-purge > /var/log/centreon-bi/rebuild_events.log &` | **De quelques minutes à plusieurs heures** (rarement plus de 24h) |
| **5. Reconstruire les tables de disponibilité** | Reconstruit les statistiques de disponibilité entre les dates spécifiées (vérifiez les dates dans les tables `mod_bi_hostavailability` et `mod_bi_serviceavailability` avec le connecteur MBI). | `nohup /usr/share/centreon-bi/etl/eventStatisticsBuilder.pl -r --no-purge --availability-only -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_availability.log &` | **De quelques minutes à plusieurs heures** |
| **6. Reconstruire les statistiques de performance** | Reconstruit les statistiques de performance entre les dates spécifiées (vérifiez les dates dans les tables `mod_bi_metrichourlyvalue` et `mod_bi_metricdailyvalue` avec le connecteur MBI). | `nohup /usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r --no-purge -s $date_start$ -e $date_end$ > /var/log/centreon-bi/rebuild_perfData.log &` | **De quelques minutes à plusieurs heures**. Plus long si la reconstruction concerne plus de jours que ce que permet la rétention horaire. |

## Réparer les trous dans vos données

1. Dans un premier temps, lisez la section [**avant de commencer avec l'ETL**](#avant-de-commencer-avec-letl).
2. [Identifiez des trous dans vos données](troubleshooting.md#identifier-des-données-ou-partitions-manquantes-avec-les-commandes---partitions-et---db-content).
3. [Lancez une reconstruction partielle de vos données, en conservant l'historique de vos données](#reconstruction-partielle--conserver-lhistorique-de-vos-données).
4. Une fois la reconstruction terminée, [faites toute opération post-reconstruction nécessaire](#après-avoir-exécuté-des-scripts-de-reconstruction).

## Après avoir exécuté des scripts de reconstruction

### Cas 1 : La reconstruction a pris moins d'un jour

1. Décommentez les lignes dans **/etc/cron.d/centreon-bi-engine** et **/etc/cron.d/centreon-bi-purge**.  
2. Redémarrez crond:

   ```shell
   systemctl restart crond
   ```

Une fois toutes les opérations terminées vérifiez que votre [connecteur de supervision MBI](./installation.md#supervisez-votre-serveur-mbi-avec-centreon) indique **ETL execution OK, database is up-to-date**.

### Cas 2 : la reconstruction se termine le lendemain

1. Décommentez les lignes dans **/etc/cron.d/centreon-bi-engine** et **/etc/cron.d/centreon-bi-purge**.
2. Redémarrez crond :

   ```shell
   systemctl restart crond
   ```

3. Exécutez manuellement le script quotidien, car il n'aura pas été exécuté pour la journée en cours :

   ```shell
   /usr/share/centreon-bi/bin/centreonBIETL -d
   ```

Une fois toutes les opérations terminées vérifiez que votre [connecteur de supervision MBI](./installation.md#supervisez-votre-serveur-mbi-avec-centreon) indique **ETL execution OK, database is up-to-date**.

### Cas 3 : la reconstruction prend plusieurs jours

1. Décommentez les lignes dans **/etc/cron.d/centreon-bi-engine** et **/etc/cron.d/centreon-bi-purge**.
2. Redémarrez crond :

```shell
   systemctl restart crond
   ```

3. Effectuez une [reconstruction partielle](#reconstruction-partielle--conserver-lhistorique-de-vos-données), en spécifiant les dates de début et de fin correctes pour la période pendant laquelle la reconstruction a été effectuée. Exemple : pour reconstruire les données du 1er janvier au 4 janvier inclus, utilisez **date_start=2025-01-01** et **date_end=2025-01-05**.

Une fois toutes les opérations terminées vérifiez que votre [connecteur de supervision MBI](./installation.md#supervisez-votre-serveur-mbi-avec-centreon) indique **ETL execution OK, database is up-to-date**.

## Comment reconstruire les statistiques BAM manquantes

Les statistiques BAM ne sont pas compilées par l'ETL, mais par le serveur central. Si les statistiques BAM ne sont pas à jour, suivez cette procédure :

1. Sur le serveur central, exécutez la commande suivante pour reconstruire les statistiques BAM :

```shell
   /usr/share/centreon/www/modules/centreon-bam-server/engine/centreon-bam-rebuild-events --all
   ```

2. Ensuite, réimportez les données mises à jour sur le serveur MBI :

```shell
   /usr/share/centreon-bi/etl/importData.pl -r --bam-only
   ```

## Comment reconstruire les statistiques centiles

Pour utiliser le rapport **"Monthly Network Percentile"**, vous devez activer le calcul et le stockage des centiles. Accédez à :  **Reporting > Business Intelligence > General Options**, onglet **Options de l'ETL**, puis configurez la sous-section **"Paramètres pour le calcul des centiles"** comme décrit ci-dessous pour définir la ou les combinaisons centiles/périodes appropriées.

### Configuration nécessaire

| Paramètre                                      | Valeur                                                       |
|-----------------------------------------------|-------------------------------------------------------------|
| **Calculate centile aggregation**              | Mensuellement (minimum)                                           |
| **Sélectionner les catégories de services sur lesquelles aggréger les données**  | Selectionez au moins une catéforie de service de trafic category                |
| **Premier jour de la semaine**                 | Lundi (par défaut)                                            |
| **Créer les combinaisons centile-plage horaire qui couvrent vos besoins**  | Créez-en au moins une `99.0000 - 24x7`                 |

Seules les catégories de services sélectionnées dans la section **"Sélection du périmètre du reporting"** apparaîtront dans la liste des catégories de services disponibles pour les statistiques centiles.

Vous pouvez créer autant de **combinaisons centile-plage-horaire** que nécessaire. Cependant, notez que l'augmentation du nombre de combinaisons peut **augmenter le temps de calcul**. Il est recommandé de commencer avec un **petit nombre** de combinaisons afin d'évaluer l'impact sur les performances.

### Importer les données de configuration sur le serveur de reporting

```shell
/usr/share/centreon-bi/bin/centreonBIETL -rIC
``` 

### Mettre à jour la configuration des centiles dans l'entrepôt de données

```shell
/usr/share/centreon-bi/etl/dimensionsBuilder.pl -d
``` 

### Calculer uniquement les statistiques centiles
```shell
/usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl -r --centile-only
```

## Référence des commandes de l'ETL

Centreon MBI utilise un script basé sur Perl pour orchestrer son ETL (Extract, Transform, Load). Le script principal chargé de déclencher ces processus est :

```shell
/usr/share/centreon-bi/bin/centreonBIETL (-c|-d|-r) 
```

Ce script prend en charge plusieurs options d'exécution pour effectuer des tâches telles que la création de [dimensions](../reporting/concepts.md#dimension), la copie et l'agrégation des données de la veille ou la reconstruction de l'ensemble de la base de données MBI.

Cette section se concentre spécifiquement sur l'option `-r` (reconstruction) et son utilisation.

### Options d'exécution

| Option | Description |
|--------|-------------|
| `-c`   | Créer les dimensions du reporting. |
| `-d`   | Calculer les statistiques selon les données du jour précédent (s'exécute quotidiennement) |
| `-r`   | Calculer les statistiques d'une période spécifique (mode reconstruction). |

### Arguments pour l'option `-r`

| Option | Description |
|--------|-------------|
| `-I`   | Extraire des données du serveur central. |
| `-D`   | Calculer des dimensions. |
| `-E`   | Calculer des statistiques d'évènements et disponibilité. |
| `-P`   | Calculer des statistiques de données de performance. |

> Si aucun des éléments suivants n'est spécifié (uniquement l'option **-r**), ces arguments sont sélectionnés par défaut : `-IDEP`.

### Autres options for `-rIDEP`

| Option | Description |
|--------|-------------|
| `-s`   | Date de début au format `AAAA-MM-JJ`. Si rien n'est spécifié, utilise la période de rétention définie dans la configuration de Centreon MBI. |
| `-e`   | Date de fin au format `AAAA-MM-JJ`. Si rien n'est spécifié, utilise la période de rétention définie dans la configuration de Centreon MBI. |
| `-p`   | Ne vide pas les tables de statistiques ; supprime uniquement les entrées correspondant à la période traitée. Non applicable aux tables de données brutes. |

> **Remarque** : Si aucune date de début ou de fin n’est fournie, le script les calcule automatiquement à l’aide des paramètres de rétention définis dans l’interface sous **Option générale > Paramètres de rétention des données**.

### Arguments supplémentaires pour l’option `-I`

| Option | Description |
|--------|-------------|
| `-C`   | Extraire uniquement la base de données de configuration de Centreon. |
| `-i`   | Ignorer l’extraction des données de performance depuis le serveur central. |
| `-o`   | Extraire uniquement les données de performance depuis le serveur central. |
