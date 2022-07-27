---
id: migrate
title: Migrer l'extension
---

Cette section explique comment déplacer le serveur MAP de Centreon vers un autre serveur.

Cette tâche peut être utile si vous devez faire migrer votre serveur de rapports de CentOS 6 à CentOS 7.

### Installation du nouveau serveur Centreon MAP

Veuillez vous reporter au chapitre sur l'installation de cette documentation pour installer votre nouveau serveur Centreon MAP.

### Synchroniser les données

Arrêtez le service Centreon MAP sur les deux serveurs Centreon MAP :

```shell
systemctl stop centreon-map
```

Extraire les données MAP de Centreon :

```shell
mysqldump -u XXXXXX -p centreon_studio > /tmp/centreon_studio.sql
```

Téléchargez centreon_studio.sql sur le nouveau serveur Centreon MAP (dans /tmp) et importez-le dans la base de données :

```shell
mysql -u XXXXXX -p centreon_studio < /tmp/centreon_studio.sql
```

Démarrez le service Centreon Map sur les nouveaux serveurs Centreon MAP :

```shell
systemctl start centreon-map
```
