---
id: known-issues
title: Problèmes connus
---

Voici une liste de problèmes connus et/ou bugs que vous pouvez rencontrer.
Nous essayons ici de fournir des contournements.
Nous appliquons des correctifs lorsque cela est nécessaire and améliorons continuellement notre logiciel afin de résoudre les problèmes de prochaines versions.

| Problèmes | contournement s'il existe |
| --------- | ------------------------- |
| Vous avez atteint le maximum d'id dans la table centreon_storage.index_data | Exécutez la requête suivante dans MySQL / MariaDB :<br/> Dans votre base de données temps réel :<br /> `ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;`<br /> `ALTER TABLE metrics MODIFY index_id bigint unsigned;`<br/> Dans votre base de données de configuration :<br /> `ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;`<br /> `ALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;`<br /> Selon la volumétrie de vos métriques, cette opération peut être plus ou moins longue. |
|Autodiscovery : Lorsque des noms d'hôtes contiennent des 0, ceux-ci ne sont pas conservés lorsque l'hôte est ajouté à la configuration.||
