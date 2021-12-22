---
id: known-issues
title: Problèmes connus
---

Voici une liste de problèmes connus et/ou bugs que vous pouvez rencontrer.
Nous essayons ici de fournir des contournements.
Nous appliquons des correctifs lorsque cela est nécessaire et améliorons continuellement notre logiciel afin de résoudre les problèmes de prochaines versions.

| Problèmes | contournement s'il existe |
| --------- | ------------------------- |
| Sur des plateformes ayant le module BAM et supervisant plusieurs dizaines de milliers de services, après un redémarrage du service `cbd`, il est possible que les données en provenance de la supervision mettent plusieurs dizaines de minutes avant de se rafraîchir dans l'interface. D'après nos observations, cela peut prendre 20 minutes pour une plateforme supervisant 50k services. **Aucune donnée n'est perdue, et la latence se résorbe durablement jusqu'au redémarrage suivant.** | Il n'existe pas de contournement, si ce n'est de désactiver les outputs BAM dans la configuration de broker, ce qui revient à désactiver BAM. Ce problème est rencontré sur toutes les versions majeures actuellement supportées et devrait être corrigé courant janvier 2022. |
| Vous avez atteint le maximum d'id dans la table centreon_storage.index_data | Exécutez la requête suivante dans MariaDB :<br/> Dans votre base de données temps réel :<br /> `ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;`<br /> `ALTER TABLE metrics MODIFY index_id bigint unsigned;`<br/> Dans votre base de données de configuration :<br /> `ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;`<br /> `ALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;`<br /> Selon la volumétrie de vos métriques, cette opération peut être plus ou moins longue. |
|Dans MBI, l'onglet **Paramètres du rapport** d'une tâche est vide (**Rapports > Monitoring Business Intelligence > Tâches**)|<ul><li>Allez à l'onglet **Configuration** de la tâche</li><li>Sélectionnez un modèle différent dans la liste **Modèle de rapport**</li><li>Sélectionnez le bon modèle de rapport</li><li>Retournez sur l'onglet **Paramètres du rapport**.</li></ul>|
| Lorsque plusieurs connexions à la base de données sont configurées, vous pouvez obtenir ce type de message: </br>`Lock wait timeout exceeded; try restarting transaction`. Broker ne peut alors plus insérer de données en base.| Mettez le paramètre **Number of connections to the database** à 1 dans tous les outputs du broker du serveur central, à la page **Configuration > Collecteurs > Configuration de Centreon Broker**, onglet **Output** :</br><ul><li>Output 1 - Broker SQL Database</li><li>Output 3 - Perfdata Generator (Centreon Storage)</li></ul> |
|L'Autologin ne fonctionne pas avec certaines pages : <ul><li>Monitoring > Resources Status</li><li>Configuration > Hosts > Discovery</li><li>Configuration > Business Activity > Business Views</li><li>Configuration > Business Activity > Business Activity</li></ul>||
| Le contenu des pages n'est pas traduit selon la langue de l'utilisateur | Vous devez installer les langues sur votre système d'exploitation avec la commande suivante : <br /> `yum install -y glibc-all-langpacks` <br /> puis redémarrer PHP à l'aide de la commande suivante : <br /> `systemctl restart php-fpm` |
