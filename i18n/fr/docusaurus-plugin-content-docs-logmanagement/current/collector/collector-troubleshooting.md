---
id: collector-troubleshooting
title: Dépanner votre installation
description: Dépanner l'installation du collector OpenTelemetry et les problèmes de collecte de logs
---

## Vérifications initiales

Avant de vous lancer dans un dépannage complexe, assurez-vous que les vérifications de base suivantes sont effectuées :

* Version du collector : vérifiez que vous utilisez une version prise en charge et stable d'**otelcol-contrib**.
* Configuration système requise : confirmez que votre environnement respecte les exigences minimales en matière de CPU, de mémoire et d'espace disque pour la charge attendue.
* Emplacement du fichier de configuration : assurez-vous que le collector charge le bon fichier de configuration. L'emplacement par défaut varie selon la méthode d'installation (par exemple, **/etc/otelcol/config.yaml** pour les installations en tant que service sous Linux).
* Règles de pare-feu : vérifiez que les ports entrants et sortants utilisés par le collector (par exemple, 4317/4318 pour OTLP) sont ouverts dans les paramètres de votre pare-feu.

## Consulter les logs

Les logs sont la ressource la plus essentielle pour diagnostiquer les problèmes. L'emplacement des logs du collector dépend de la manière dont il a été installé :

* Service systemd (Linux) : `journalctl -u otelcol-contrib.service`.
* Windows : dans l'Observateur d'événements Windows, sélectionnez **Windows Logs > Application**, puis filtrez sur **otelcol-contrib**.
* Exécution du collector directement depuis son répertoire d'installation (`otelcol-contrib.exe --config config.yaml`) : consultez la sortie standard (stdout) ou l'emplacement défini dans le fichier `--config`.

### Messages de logs courants

Portez une attention particulière aux messages d'erreur ou d'avertissement liés à :

* Analyse de la configuration : les erreurs à ce niveau indiquent des problèmes de syntaxe (par exemple, une indentation YAML incorrecte) ou des références à des composants non définis.
* Liaison du récepteur (receiver binding) : si le collector ne parvient pas à se lier au port configuré (par exemple, le port 4317), cela suggère qu'un autre processus utilise ce port ou qu'il y a un problème de permissions.
* Échecs des exporteurs : les erreurs de connexion au backend se traduisent généralement par des messages de type « connexion refusée » ou « délai d'attente dépassé ».
* Erreurs des processeurs : les problèmes survenant pendant la manipulation ou le regroupement (batching) des données peuvent indiquer des contraintes de ressources ou une mauvaise configuration.

## Validation de la configuration

Une part importante des problèmes du collector provient d'une mauvaise configuration.

### Vérifier les droits

Si vous ne recevez pas les logs attendus dans Centreon Log Management, vérifiez que l'utilisateur **otelcol-contrib** dispose de droits suffisants pour lire les fichiers requis, selon le type de récepteur. Exemple :

```shell
ls -l /var/log/messages
id otelcol-contrib
usermod -aG root otelcol-contrib
```

### Valider la syntaxe YAML

Utilisez un outil de validation (linter) YAML pour vérifier l'intégrité structurelle de votre fichier de configuration. Des deux-points manquants, une imbrication incorrecte ou des caractères invalides peuvent empêcher le démarrage.

### Vérifier l'intégrité des composants

Assurez-vous que chaque composant listé dans la section **service::pipelines** est défini dans les sections correspondantes **receivers**, **processors** et **exporters**.

Un exemple de configuration simple pour vérification :

```yaml
receivers:
  otlp:
    protocols:
      grpc:
      http:
exporters:
  logging:
    loglevel: debug
service:
  pipelines:
    traces:
      receivers: [otlp]
      exporters: [logging]
```

## Vérifier l'endpoint et les identifiants

Vérifiez que la configuration de l'exporteur inclut l'URL de l'endpoint correcte et le jeton d'authentification nécessaire.

| Composant | Information à vérifier |
| --- | --- |
| Récepteurs (receivers) | Protocole correct (par exemple, otlp GRPC/HTTP) et numéro de port |
| Processeurs (processors) | Ordre correct dans le pipeline ; s'assurer que les sous-paramètres requis sont présents |
| Exporteurs (exporters) | URL et port de l'endpoint cible, jeton d'authentification |

## Réseau et connectivité

Si le collector démarre correctement mais qu'aucune donnée n'atteint Centreon Log Management, le problème est probablement lié au réseau.

* Vérifier la disponibilité des ports : utilisez des outils comme **netstat** ou **ss** pour vérifier que le processus du collector écoute bien sur les ports de récepteur configurés. Exemple (Linux) : `sudo netstat -tuln | grep 4317`
* Tester l'accessibilité du backend : depuis l'hôte du collector, testez la connectivité vers l'endpoint de Log Management à l'aide d'outils comme **ping**, **telnet** ou **curl**. Exemple (test de la cible de l'exporteur OTLP) : `telnet <backend_ip> 4317` (assurez-vous que la connexion s'établit).
* Vérification de l'agent/application source : assurez-vous que les applications envoyant les données (par exemple, les services instrumentés) sont configurées pour envoyer les données vers l'IP et le port du collector. C'est souvent l'étape la plus négligée.

## Débugage avancé

Si les étapes de base échouent, activez le débugage détaillé.

### Régler les logs sur debug

Réglez le **loglevel** dans la configuration du collector sur **debug**. Cela fournit une sortie détaillée, incluant des informations sur l'ingestion et le traitement des données.

```yaml
service:
  telemetry:
    logs:
      level: debug
```

### Utiliser l'extension Health Check

Si vous utilisez la distribution Collector Contrib, ajoutez l'extension **health_check** pour surveiller l'état opérationnel du collector.

Ajoutez ce qui suit à votre configuration :

```yaml
extensions:
  health_check:
service:
  extensions: [health_check]
```

L'accès au statut à l'adresse `http://localhost:13133` peut fournir un aperçu immédiat des composants défaillants. Le collector doit être en cours d'exécution pour accéder à l'endpoint du health check.

## Voir aussi

Consultez la [documentation officielle d'OpenTelemetry](https://opentelemetry.io/docs/collector/troubleshooting/).