---
id: how-mbi-works
title: Comment fonctionne MBI ?
---

Chaque jour, MBI suit 3 phases principales indépendantes :

* [Le serveur central prépare les données brutes](#phase-1--les-données-sont-préparées-par-le-serveur-central).
* [L'ETL copie les données du jour précédent sur le serveur MBI et les agrège](#phase-2--lancement-de-letl-les-données-sont-copiées-sur-mbi-puis-agrégées). Les données sont alors prêtes à être utilisées dans les rapports.
* Aux heures prévues, [CBIS recueille les données pertinentes pour un rapport et le génère](#phase-3--cbis-génère-les-rapports).

Bien que chaque phase soit indépendante des autres, une configuration incorrecte dans l'une des trois phases peut entraîner l'échec de la génération du rapport.

## Phase 1 : Les données sont préparées par le serveur central

1. Au fur et à mesure que les contrôles sont effectués, chaque résultat est enregistré dans la base de données centrale (dans la table **centreon_storage.logs** pour les statuts, dans **data_bin** pour les métriques).

2. Sur le serveur central, un script (**eventReportBuilder**) est lancé par un cronjob tous les jours à 3h du matin : il convertit les résultats des contrôles en [évènements](concepts.md#évènements) qui seront utilisés pour calculer la disponibilité. L'heure à laquelle ce script est lancé est définie dans **/etc/cron.d/centreon**.

> La conversion des résultats des contrôles en évènements doit être totalement terminée **avant** [le lancement de l'ETL](#phase-2--lancement-de-letl-les-données-sont-copiées-sur-mbi-puis-agrégées), sinon les rapports seront vides. En cas de doute, vérifiez ce journal pour voir si la conversion est terminée : **/var/log/centreon/eventReportBuilder.log**.

## Phase 2 : Lancement de l'ETL (les données sont copiées sur MBI puis agrégées)

Sur le serveur MBI, un cronjob lance l'ETL tous les jours à 4h30 du matin. Cela permet à Gorgone d'exécuter 4 scripts en tenant compte des options définies dans la page **Reporting > Monitoring Business Intelligence > General options** :

1. **/usr/share/centreon-bi/etl/importData.pl**: [Les évènements](concepts.md#évènements) et les métriques ainsi que la configuration (hôtes, catégories d'hôtes, ACL...) sont copiées depuis la base de données centrale vers la base de données MBI pour le jour précédent (de minuit à minuit).
   * Le script n'importera que les groupes d'hôtes, les catégories d'hôtes et les catégories de services que vous avez définis dans la page **Reporting > Monitoring Business Intelligence > General options**, sous l'onglet **Options de l'ETL**, dans la section **Sélection du périmètre du reporting**.
   * Dans tous les cas, toutes les métriques seront importées.
   * Tous les hôtes ou services qui n'appartiennent pas à au moins un groupe d'hôtes et une catégorie d'hôtes, ou une catégorie de services sont exclus.

2. **/usr/share/centreon-bi/etl/dimensionsBuilder.pl** : l'ETL prépare une liste de toutes les [dimensions](concepts.md#dimension) présentes dans les données importées, pour chaque hôte, service et métrique.

3. **/usr/share/centreon-bi/etl/eventStatisticsBuilder.pl** : l'ETL calcule la [disponibilité](concepts.md#disponibilité) des ressources en fonction des données copiées depuis le serveur central et des dimensions calculées juste avant. La disponibilité de chaque ressource est calculée par jour et par mois, en tenant compte des [périodes temporelles](../monitoring/basic-objects/timeperiods.md) sélectionnées dans le champ **Sélectionner les plages de services pour le calcul des statistiques de disponibilité** de la page **General options**, dans l'onglet **Options de l'ETL**.

4. **/usr/share/centreon-bi/etl/perfdataStatisticsBuilder.pl** : l'ETL agrège toutes les métriques par heure/jour/mois, en tenant compte des [périodes temporelles](../monitoring/basic-objects/timeperiods.md) sélectionnées dans le champ **Sélectionner les plages de services pour le calcul des statistiques de performance** de la page **General options**, dans l'onglet **Options de l'ETL**. Le script inclut le calcul des centiles, s'il est configuré.

Une fois toutes les agrégations calculées, MBI est prêt à générer des rapports.

> L'agrégation des données doit être totalement terminée [**avant** que les rapports puissent être générés](#phase-3--cbis-génère-les-rapports), faute de quoi les rapports seront vides ou incomplets. En fonction de la quantité de données, les 4 étapes de l'ETL peuvent prendre beaucoup de temps. En cas de doute, consultez les journaux pour savoir si l'ETL a terminé son travail (**/var/log/centreon-bi/centreonBIETL.log**).

Notez que pour [BAM](../service-mapping/introduction.md), les données agrégées ont déjà été calculées par le serveur central. L'ETL se contente de les copier sur le serveur MBI.

## Phase 3 : CBIS génère les rapports

Les rapports peuvent être générés immédiatement à la demande de l'utilisateur, ou lorsqu'ils sont programmés.

> Dans les deux cas, toutes les agrégations doivent avoir été calculées. Cela signifie que si vous venez d'apporter des modifications aux catégories d'hôtes, aux groupes d'hôtes et aux catégories de services, les agrégations correspondantes n'auront pas encore été calculées. Vous devrez [reconstruire les données](rebuilding-data.md).

* Un seul rapport est généré par format : pdf, xlsx, docx, etc.
* Le périmètre des données dans le rapport est déterminé par l'onglet **Paramètres du rapport** de la tâche. N'oubliez pas que le rapport et toutes ses données seront partagés avec d'autres utilisateurs en fonction de ce que vous avez défini dans les [groupes de tâches](concepts.md#groupes-de-tâches), indépendamment des ACL des autres utilisateurs sur les ressources.
* Les rapports générés sont copiés sur le serveur central, dans **/var/lib/centreon/centreon-bi-server/archives**. (Cette opération est effectuée en exécutant la [règle de publication](reports-publication-rule.md) SFTP globale appelée [**Default**](reports-publication-rule.md#fonctionnement-de-la-règle-de-publication-default).)
* Toutes les autres [règles de publication**globales**](reports-publication-rule.md#règles-globales-et-règles-personnalisées) sont ensuite exécutées.

## Phase 4 (facultative) : Les rapports sont envoyés aux utilisateurs

Une fois les rapports écrits sur le serveur central et toutes les règles de publication globales exécutées, CBIS vérifie si des règles de publication non globales existent pour la tâche, et les exécute si c'est le cas.

Exemple : Centreon peut envoyer des rapports par email selon les paramètres définis dans une [une règle de publication](reports-publication-rule.md) SMTP ([postfix](../administration/postfix.md) doit être configuré).
