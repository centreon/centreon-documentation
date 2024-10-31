---
id: map-web-migrate
title: Migrer l'extension
---

Cette section explique comment déplacer le serveur Centreon MAP vers un autre serveur.

Cette tâche peut être utile si vous devez faire migrer votre serveur de CentOS 6 à CentOS 7.

### Installation du nouveau serveur Centreon MAP

Veuillez vous reporter au chapitre sur l'installation de cette documentation pour installer votre nouveau serveur Centreon MAP.

### Synchroniser les données

Arrêtez le service Centreon MAP sur les deux serveurs Centreon MAP :

```shell
systemctl stop centreon-map
```

Extrayez les données MAP de Centreon :

```shell
mysqldump -u XXXXXX -p centreon_studio > /tmp/centreon_studio.sql
```

Téléchargez **centreon_studio.sql** sur le nouveau serveur Centreon MAP (dans /tmp) et importez-le dans la base de données :

```shell
mysql -u XXXXXX -p centreon_studio < /tmp/centreon_studio.sql
```

Démarrez le service **centreon-map** sur le nouveau serveur Centreon MAP :

```shell
systemctl start centreon-map
```