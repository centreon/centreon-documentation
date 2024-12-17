---
id: map-web-migrate
title: Migrer l'extension
---

Cette section explique comment déplacer le serveur Centreon MAP vers un autre serveur.

Cette tâche peut être utile si vous devez migrer votre serveur de CentOS 6 à CentOS 7.

### Installation du nouveau serveur Centreon MAP

Veuillez vous reporter à la procédure d'installation dans cette documentation pour installer votre nouveau serveur Centreon MAP.

### Synchroniser les données

1. Arrêtez le service Centreon MAP sur les deux serveurs Centreon MAP :

  ```shell
  systemctl stop centreon-map-engine
  ```

2. Vous devez extraire les données MAP de Centreon. Veillez à transférer les données sur une partition ayant l'espace disponible nécessaire :

  ```shell
  mysqldump -u XXXXXX -p centreon_map > /tmp/centreon_map.sql
  ```

3. Téléchargez **centreon_studio.sql** sur le nouveau serveur Centreon MAP (dans /tmp) et importez-le dans la base de données :

  ```shell
  mysql -u XXXXXX -p centreon_map < /tmp/centreon_map.sql
  ```

4. Démarrez le service **centreon-map** sur le nouveau serveur Centreon MAP :

  ```shell
  systemctl start centreon-map-engine
  ```
