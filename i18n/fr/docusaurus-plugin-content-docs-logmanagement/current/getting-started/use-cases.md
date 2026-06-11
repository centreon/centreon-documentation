---
id: use-cases
title: Cas d'usage
---

Centreon Log Management vous permet de détecter et de résoudre une grande variété de problèmes dans un système informatique, allant des erreurs mineures aux incidents majeurs. De nombreux cas d'utilisation typiques de Log Management se concentrent sur l'analyse des causes profondes (root cause analysis). Voici quelques exemples concrets de ce que Log Management peut vous aider à détecter à partir de l'analyse des journaux manquants, des types de journaux inattendus ou des volumes de journaux inhabituels.

## Problèmes d'intégration et de communication entre services

### Microservices ou API en panne

Si un service interagissant avec d'autres services ou API ne répond pas ou échoue, cela sera souvent enregistré dans les logs (par exemple, erreurs HTTP telles que 500, 503 ou 404).

* [Règle d'alerte](../alerts.md) (nombre) : suivez les requêtes ayant échoué à partir d'un service spécifique (HTTP 4xx et 5xx) afin de détecter rapidement les défaillances de service ou d'API. Exemple de requête pouvant être utilisée dans une telle règle d'alerte :

   ```shell
   service_name:"my-service" AND attributes.http.response.status_code >= 400 AND attributes.http.response.status_code < 600
   ```

### Incohérence des données

Par exemple, si les données attendues ne sont pas reçues ou envoyées correctement entre différents services ou composants, cela peut générer des logs d'erreurs ou de conflits. La requête que vous utiliserez dans votre alerte dépendra de ce que votre service ou composant renvoie (par exemple, "missing argument", "bad deserialization of json" dans l'attribut **body.message** - ou le code HTTP correspondant).

### Problèmes de synchronisation

Les erreurs dans le traitement des files d'attente de messages ou des évènements asynchrones peuvent être identifiées par Log Management. Vous pouvez les détecter en filtrant Log explorer sur le nom du service (service_name: "synchronization service").

## Problèmes liés au serveur ou à l'infrastructure

### Pannes de serveur

Si un serveur subit une panne matérielle (telle qu'un problème de disque dur ou une surcharge), celle-ci apparaîtra généralement dans les logs du système. L'analyse des causes profondes peut être effectuée dans Log explorer.

## Erreurs d'application

### Problèmes de code

Les exceptions ou erreurs dans le code d'une application, comme des "null pointer exceptions", des erreurs de syntaxe ou des erreurs logiques, peuvent être facilement identifiées dans les logs.

* [Règle d'alerte](../alerts.md) (COUNT) : déclenche une alerte s'il y a X messages d'exception ou plus en 5 minutes, indiquant un problème potentiel dans l'application. Exemple de requête pouvant être utilisée dans une telle règle d'alerte :

   ```shell
   service_name:"my-app" AND severity_number>"17" AND body.message:"this is an exception"
   ```

### Échec de connexion à une base de données

Si une application ne parvient pas à se connecter à une base de données, Log Management peut signaler les messages d'erreur correspondants. Vous les détecterez généralement dans Log explorer.

### Erreurs de configuration

Par exemple, une erreur de configuration dans un fichier de paramètres (comme un port incorrect, une clé API ou des configurations manquantes).

## Problèmes de compatibilité ou de mise à jour

### Problèmes après une mise à jour

Après le déploiement ou la mise à jour d'une application, des erreurs ou des comportements inattendus peuvent apparaître dans les logs.

Un exemple typique est le déploiement d'une modification de configuration sur un petit ensemble de machines de test. Surveillez les logs dans log explorer en temps réel pour détecter tout problème, en filtrant par le nom du service ou le namespace que vous êtes en train de mettre à jour.

### Incompatibilité de version

Les conflits entre différentes versions de logiciels, d'outils ou de bibliothèques peuvent être identifiés dans les logs d'erreurs. Votre requête dépendra du type de messages renvoyés par votre application.

## Problèmes d'automatisation et de batchs

### Échecs de processus batch ou de jobs automatisés

Si une tâche automatisée ou un script de batch échoue, Log Management peut afficher les erreurs associées.

Exemples :

* Un batch nocturne met à jour et synchronise des données financières entre des systèmes : toutes les opérations doivent réussir. Créez une règle d'alerte qui détecte chaque échec.
* Un service copie des fichiers chaque nuit : il s'agit d'un cas moins critique, les échecs peuvent être détectés le matin en filtrant Log explorer.

### Problèmes de planification

Par exemple, si une tâche cron ne s'exécute pas correctement à une heure donnée, cela peut être signalé dans les logs.

## Problèmes de conformité

### Violation de règles ou de politiques de sécurité

Si des actions ou des tentatives de connexion ne respectent pas les règles de sécurité ou de conformité (par exemple, tentatives d'accès sans authentification forte), elles peuvent être détectées.

* Créez une règle d'alerte sur le nombre de tentatives de connexion.

## Problèmes de disponibilité et de scalabilité

### Diminution de la capacité à répondre aux demandes

Les logs peuvent également aider à détecter un manque de ressources ou une surcharge qui empêche les services de traiter un volume élevé de demandes.

* Créez une règle d'alerte sur le code HTTP correspondant.

## Incidents de sécurité

### Tentatives de connexion échouées ou attaques par force brute

Si un utilisateur ou un attaquant tente de se connecter à un système de manière répétée sans succès, cela génère des logs qui peuvent être analysés pour détecter des tentatives d'attaque par force brute.

* [Règle d'alerte](../alerts.md) (COUNT) : déclenche une alerte lorsqu'il y a plus de x tentatives de connexion SSH infructueuses dans un intervalle de temps donné. Exemple de requête pouvant être utilisée dans une telle règle d'alerte :

 ```shell
   event.type:"ssh_login" AND attributes.http.response.status_code >= 400 AND attributes.http.response.status_code < 500
   ```

### Intrusions ou accès non autorisés

Les logs peuvent révéler des tentatives d'accès non autorisé à des systèmes ou applications sensibles (par exemple, alertes pour des changements de permissions, connexions à un serveur sans clé valide, etc.).

* [Règle d'alerte](../alerts.md) (COUNT) : déclenche un événement d'alerte CRITIQUE si le nombre de logs enregistrant des tentatives d'accès à un dépôt GitHub spécifique est supérieur à 0 pour les utilisateurs n'appartenant pas à **my_github_group**. Exemple de requête pouvant être utilisée dans une telle règle d'alerte :

   ```shell
   repo:"my-github-repo" AND attributes.http.response.status_code IS NOT NULL AND NOT user_groups:"my_github_group"
   ```

## Problèmes réseau

### Erreurs de timeout

Les échecs de connexion ou de communication entre les services (par exemple, un serveur qui ne répond pas dans le délai prévu) peuvent être détectés dans les logs. Par exemple, 10 erreurs timeout sur 100 requêtes suggèrent un problème, par rapport à 10 erreurs timeout sur 1 000 000 de requêtes.

* [Règle d'alerte](../alerts.md) (RATIO) : déclenche une alerte lorsque le ratio de réponses HTTP 408 (timeout) dépasse X %. Cela indique que trop de requêtes expirent. Pour calculer ce ratio, vous pouvez utiliser des requêtes telles que celles-ci : <!--(attribute.http.response.status_code)-->

   * Requête à diviser :
      ```shell
      service:"my-service" AND attributes.http.response.status_code IS NOT NULL
      ```

   * Requête à diviser par :
      ```shell
      service:"my-service" AND attributes.http.response.status_code = 408
      ```

## Exemples de questions auxquelles vous pouvez trouver des réponses

* Quel service génère le plus d'erreurs aujourd'hui ? Filtrez la [timeline](../log-explorer.md) sur la journée courante, puis filtrez par severitynumber>17. Empilez le graphique par nom de service.
* Quels services ont changé de comportement après le déploiement ? Dans Log explorer, filtrez par nom de service ou espace de noms, et vérifiez s'il y a des erreurs.
