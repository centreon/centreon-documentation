---
id: poller-troubleshoot
title: Dépanner vos collecteurs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Cette page propose des procédures pour dépanner les collecteurs Centreon **dans l'environnement Centreon Cloud**.

## Qu'y a-t-il dans un collecteur ?

Pour résumer, un collecteur consiste en deux services :

* **Gorgone** (le processus **gorgoned**) est responsable de gérer la configuration de la supervision. Gorgone reçoit et applique la configuration sur le collecteur lorsqu'un utilisateur [déploie la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) pour ce collecteur depuis l'interface Centreon Cloud.

* **centengine** ou **centreon-engine**/Engine est responsable de planifier et exécuter les contrôles sur les ressources supervisées et d'envoyer les résultats des contrôles à la plateforme Centreon Cloud.

Les deux services sont connectés aux services hébergés par Centreon.

## Problèmes d'installation

Vérifiez le fichier de log suivant et repérez les éventuelles erreurs (le fichier est situé dans le dossier créé par le script d'installation, dans le répertoire où le script d'installation a été exécuté).

```shell
less ./log/register-poller.log
```

## Les changements de la supervision ne sont pas pris en compte lorsque je déploie la configuration

Typiquement, les contrôles ne sont pas exécutés. Faites les vérifications suivantes : si une étape a fonctionné, passez à la suivante.

### Étape 1 : Tester la connexion de Gorgone à la plateforme

Vérifiez que Gorgone peut se connecter à votre plateforme Centreon Cloud.

```shell
nc -zv -w 5 gorgone-<organization_code>.euwest1.centreon.cloud 443
```

Vous devriez obtenir un message similaire à celui-ci :

```shell
Ncat: Connected to n.n.n.n:443.
```

Si vous obtenez un timeout, cela signifie que la configuration réseau ne permet pas au collecteur de parler à la plateforme.
Vérifiez si vous avez besoin d'un proxy, ou si vous devez [ouvrir certains flux](prerequisites.md#réseau) ou [autoriser certaines plages d'IP](prerequisites.md#autoriser-le-trafic-vers-ou-en-provenance-des-plages-dip-aws).

### Étape 2 : Vérifier que Gorgone tourne

Exécutez la commande suivante :

```shell
systemctl status gorgoned
```

Si le statut de Gorgone n'est pas **active (running)**, redémarrez-le :

```shell
systemctl restart gorgoned
```

### Étape 3 : Vérifier les logs Gorgone

Les logs Gorgone sont écrits dans le fichier suivant : repérez d'éventuelles erreurs.

```shell
/var/log/centreon-gorgone/gorgoned.log
```

### Étape 4 : Mettre le niveau de log de Gorgone à info ou debug

Le niveau de log par défault de Gorgone est **error**. Si vous avez besoin de plus de détails sur ce que fait Gorgone :

1. Éditez le fichier suivant :

   ```shell
   /etc/sysconfig/gorgoned
   ```

2. Passez le paramètre **--severity** à **info** ou **debug**.

3. Redémarrez le processus **gorgoned** :

   ```shell
   systemctl restart gorgoned
   ```

### Étape 5 : Vérifier la connexion de Gorgone

Une fois que vous avez défini le niveau de log à info ou debug, ce message de type INFO devrait apparaître dans les logs de Gorgone :

```shell
INFO - [pullwss] websocket connected
```

Si vous obtenez un message différent, cela signifie qu'il y a un problème avec la configuration réseau, ou un problème d'authentification.

### Étape 6 : Vérifier que la commande de déploiement fonctionne

Vérifiez les messages de log générés par Gorgone pendant que la configuration est en train d'être déployée. Le log devrait contenir les lignes suivantes, qui signifient que le collecteur a reçu la configuration.

```shell
2024-09-13 14:28:50 - INFO - [action] Copy processing - Received chunk for '/etc/centreon-engine//'
2024-09-13 14:28:51 - INFO - [action] Copy processing - Copy to '/etc/centreon-engine//' finished successfully
2024-09-13 14:28:51 - INFO - [action] Copy processing - Received chunk for '/etc/centreon-broker/'
2024-09-13 14:28:51 - INFO - [action] Copy processing - Copy to '/etc/centreon-broker/' finished successfully
```

Si toutes les étapes suivantes ont fonctionné mais que le log ne montre pas que le collecteur a reçu la configuration, contactez [notre équipe support](https://support.centreon.com/hc/en-us).

### Étape 7 : Vérifier que les fichiers de configuration sont correctement mis à jour

Vérifiez les dates de modification des fichiers de configuration : si vous voyez que les fichiers n'ont pas été mis à jour lorsque vous avez déployé la configuration, vérifiez que l'utilisateur **gorgone** a des droits sur le répertoire correspondant.

```shell
ls -al /etc/centreon-engine
```

### Étape 8 : Vérifier que Engine se recharge ou redémarre correctement

Vérifiez le fichier de log d'Engine suivant la méthode sélectionnée lors du déploiement de la configuration.

1. Ouvrez le fichier de log :

```shell
tail -f /var/log/centreon-engine/centengine.log
```

2. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) depuis l'interface en utilisant soit la méthode **Recharger** soit la méthode **Redémarrer**.

3. Dans le fichier de log, repérez les messages suivants :

* Si vous avez sélectionné la méthode **Recharger**, le fichier de log devrait contenir :

```shell
[process] [info] [646] Starting to reload configuration.
(...)
[process] [info] [646] Reload configuration finished.
```

* Si vous avez sélectionné la méthode **Redémarrer**, le fichier de log devrait contenir :

```shell
[process] [info] [3142] Centreon Engine yy.mm.p starting ...
```

Si le fichier ne contient pas les lignes ci-dessus, vérifiez que **gorgoned** a le droit d'écrire dans `/etc/centreon-engine` et que **centengine** a le droit de lire dedans.

## Le collecteur n'envoie pas de données à la plateforme

### Étape 1 : Tester la connectivité réseau

Vérifiez que le collecteur peut envoyer des données temps-réel à la plateforme Centreon Cloud. Exécutez la commande suivante (remplacez **{org-code}** par le code de votre organisation) :

```shell
nc -zv -w 5 broker-{org-code}.euwest1.centreon.cloud 443
```

La commande devrait retourner un message similaire à celui-ci :

```shell
Ncat: Connected to n.n.n.n:443.
```

Si vous obtenez un message différent, vérifiez votre configuration réseau. Par exemple, vérifiez qu'aucun filtrage par nom de domaine ne bloque le processus **Broker**.

### Étape 2 : Vérifier que Engine fonctionne

Exécutez la commande suivante :

```shell
systemctl status centengine
```

Si le statut de **centengine** n'est pas **active (running)**, redémarrez-le :

```shell
systemctl restart centengine
```

### Étape 3 : Vérifier s'il existe des fichiers de retention

Inspectez le dossier contenant les fichiers de rétention pour déterminer s'il existe actuellement de la rétention sur le collecteur.

```shell
ls -l /var/lib/centreon-engine
```

Si les 2 précédents tests on retourné le résultat attendu mais qu'il y a de la rétention sur le collecteur, contactez [notre équipe support](https://support.centreon.com/hc/en-us).

### Étape 4 : Activer et inspecter les logs d'Engine

Modifiez les niveaux de log pour obtenir plus d'informations sur ce que Engine fait.

1. Éditez le fichier **centengine.cfg**.

   ```shell
   vi /etc/centreon-engine/centengine.cfg
   ```

2. Localisez et ajustez les paramètres préfixés par **log\_level\_**. Les valeurs par défaut sont :

   ```text
   log_level_functions=warning
   log_level_config=info
   log_level_events=info
   log_level_checks=info
   log_level_notifications=info
   log_level_eventbroker=warning
   log_level_external_command=info
   log_level_commands=warning
   log_level_downtimes=info
   log_level_comments=info
   log_level_macros=warning
   log_level_process=info
   log_level_runtime=warning
   ```

3. Redémarrez Centreon Engine.

   ```shell
   systemctl restart centengine
   ```

> Note : Ces changements seront écrasés la prochaine fois que la configuration sera déployée.

### Étape 5 : Activer et inspecter les logs cbmod

1. Éditez la configuration de Centreon Broker module (remplacez **{hostname}** par la valeur correcte) :

   ```shell
   vi /etc/centreon-broker/{hostname}-module.json
   ```

2. Ajustez l'objet **centreonBroker.log.loggers** au niveau de log désiré.

3. Redémarrez Centreon Engine.

   ```shell
    systemctl restart centengine
   ```

> Note : Ce changement sera écrasé la prochaine fois que la configuration sera déployée.

### Étape 6 : Vérifier les statistiques d'export

Certaines statistiques concernant les données temps réel exportées dans Centreon Cloud sont disponibles sous forme de fichier JSON. Vérifiez si ce fichier contient des erreurs.

```shell
cat /var/lib/centreon-engine/*-module-stats.json
```

> Note : Ce fichier est un fichier de tube UNIX et est seulement accessible lorsque le service **centengine** tourne.

Si toutes ces étapes de dépannage ont échoué, contactez [notre équipe support](https://support.centreon.com/hc/en-us).

## Fichiers de log du collecteur

| Utiliser pour débugguer quoi? | Process | Fichier | Symptômes |
|--------------------|---------|------|----------|
| Installation du collecteur |   | {scriptdir}/logs/register-poller.log | |
| Centreon Engine | centengine | /var/log/centreon-engine/centengine.log | <ul><li>Les contrôles ne sont pas effectués</li><li>Les objets supprimés sont toujours supervisés</li></ul> |
| Gorgone | gorgoned | /var/log/centreon-gorgone/gorgoned.log | Les actions ne se déclenchent pas : aquittements, plages de maintenance, contrôles forcés, autodiscovery |
