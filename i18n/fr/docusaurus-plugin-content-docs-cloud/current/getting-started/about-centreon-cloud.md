---
id: about-centreon-cloud
title: À propos de Centreon Cloud
---

## Qu'est-ce que Centreon Cloud ?

Centreon Cloud est la plateforme de supervision Centreon fournie en tant que service, hébergée et gérée par Centreon depuis notre infrastructure Cloud. Pour plus d'informations, consultez notre [page de description du produit](https://www.centreon.com/fr/centreon-cloud/).

## Quel SLA pour Centreon Cloud ?

Centreon Cloud s'engage à offrir un service de haute qualité avec les garanties suivantes :

* Le SLA pour Centreon Cloud est de 99.5%. Plus d'information dans notre document [Terms and Conditions](https://www.centreon.com/legal/en/Cloud-Services-terms-ROW).

* Le RPO (Recovery Point Objective, Perte de données maximale admissible) est de 24 heures.

* Le RTO (Recovery Time Objective, Durée maximale d'interruption admissible) est de 4 heures.

## Où sont hébergées mes données ?

Centreon utilise [plusieurs hébergeurs](../security/security.md#sécurité-de-lhébergement), principalement situés en Europe. Nous sommes [partenaires AWS](https://www.centreon.com/fr/partenaires/centreon-et-aws/).

## Combien de temps sont gardées mes données ?

Les données de supervision sont gardées 12 mois : données de performance data (métriques), plages de maintenance, acquittements, commentaires, logs...
Toutes les autres données (par exemple la configuration) sont gardées jusqu'à la fin de votre souscription.

## Quelles mesures de sécurité Centreon prend-il ?

Pour une vue d'ensemble complète de nos mesures de sécurité, visitez notre page dédiée à la [gestion de la sécurité de Centreon Cloud](../security/security.md).

## Accord d'usage non abusif (Fair Use Policy)

Pour comprendre nos limitations en matière d'utilisation des ressources, consultez notre [accord d'usage non-abusif](https://www.centreon.com/legal/en/centreon-cloud-service-fair-use-policy).

## Maintenance : mises à jour et montées de version

* La plateforme Centreon Cloud (application web, ingestion des données, transformation, stockage...) est entièrement gérée et mise à jour par Centreon. Aucune action de votre part n'est requise.
* Vos [collecteurs](../resources/glossary.md#collecteur) sont situés dans votre infrastructure : leur [mise à jour et montée de version](../installation/poller-update-upgrade.md) relève de votre responsabilité.
