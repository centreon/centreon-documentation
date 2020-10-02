---
id: administration
title: Administration
---

## Mise à jour

> Lors de la montée de version vers 20.04, toutes les données de la
> fonctionnalité **Host Discovery** seront perdues:
>
> - Tâches de découverte,
> - Paramètres/informations d'identification sauvegardés.
>
> Cela est dû à la nouvelle méthode renforcée de stockage des informations
> d'identification dans cette version.
>
> Les hôtes découverts au travers des tâches ne sont pas touchés.
>
> La montée de version vers 20.10 conserve toutes les données présentent depuis
> la version 20.04.

Pour mettre à jour le module, exécutez la commande suivante :

``` shell
yum update -y centreon-auto-discovery-server
```

Connectez-vous sur l’interface web de Centreon en utilisant un compte ayant les
droits d’installer des modules et rendez-vous dans le menu `Administration >
Extensions > Gestionnaire`.

> Assurez vous que les modules **License Manager** et **Plugin Packs Manager**
> sont à jour avant de procéder à la mise à jour du module **Auto Discovery**

Cliquez sur l’icône de mise à jour correspondant au module **Auto Discovery** :

![image](../../assets/monitoring/discovery/update.png)

Le module est maintenant à jour :

![image](../../assets/monitoring/discovery/install-after.png)

## Désinstallation

Connectez-vous sur l’interface web de Centreon en utilisant un compte ayant les
droits d’installer des modules et rendez-vous dans le menu `Administration >
Extensions > Gestionnaire`.

Cliquer sur l’icône de suppression correspondant au module **Auto Discovery** :

![image](../../assets/monitoring/discovery/install-after.png)

Une fenêtre de confirmation apparaît, confirmer l’action :

![image](../../assets/monitoring/discovery/uninstall-popin.png)

Le module est maintenant désinstallé :

![image](../../assets/monitoring/discovery/install-before.png)

> La désinstallation du module supprimera toutes les données associées. Les
> données ne pourront être restaurées sauf si une sauvegarde de la base de
> données a été faite.

## Configuration du module Gorgone

Le module **Auto Discovery** amène une configuration spécifique pour le service
Gorgone du serveur Central. La configuration par défaut est
`/etc/centreon-gorgone/config.d/41-autodiscovery.yaml`.

Une durée maximale pour les tâches de découverte d'hôtes est configurée de
manière globale au module. S'il est nécessaire de la modifier (par exemple pour
une découverte SNMP sur un large sous-réseau), il faut éditer le fichier
de configuration et ajouter le directive *global_timeout*.

Si les notifications par mail ont été activées dans des règles de dévouverte de
services, les paramètres relatifs au système d'envoie peuvent être défini pour
choisir l'expéditeur, le sujet ou la commande mail.

Exemple de configuration :

```yaml
gorgone:
  modules:
    - name: autodiscovery
      package: "gorgone::modules::centreon::autodiscovery::hooks"
      enable: true
      # Host Discovery
      check_interval: 15
      global_timeout: 300
      # Service Discovery
      mail_subject: Centreon Auto Discovery
      mail_from: centreon-autodisco
      mail_command: /bin/mail
```

> Assurez vous de redémarrer le service Gorgone après chaque modification :
>
> ```shell
> systemctl restart gorgoned
> ```

### Architecture distribuée

La découverte d'hôtes et de services se basent sur Gorgone pour effectuer les
découvertes à la fois sur le serveur Central et sur les Remote Servers ou
Pollers.

> Il est nécessaire d'avoir une communication en ZMQ entre le serveur Central
> et un Remote Server pour effectuer une découverte sur un Poller rattaché à ce
> Remote Server.
>
> Consultez la documentation sur les différents types de
> [communication](../monitoring-servers/communications.html) pour en savoir
> plus.

### Tâche planifiée de découverte de services

Toutes les règles de découverte actives sont exécutées périodiquement à travers
d'une tâche ordonnancée par le module cron de Gorgone. Le module **Auto
Discovery** amène une définition pour cette tâche dans le fichier suivant :
`/etc/centreon-gorgone/config.d/cron.d/41-service-discovery.yaml`.

```yaml
- id: service_discovery
  timespec: "30 22 * * *"
  action: LAUNCHSERVICEDISCOVERY
```

La configuration par défaut exécute les règles de découvertes tous les jours à
22h30.

### Accès aux API

A l'installation de Gorgone, une configuration par défaut pour accéder aux API
de Centreon se trouve ici `/etc/centreon-gorgone/config.d/31-centreon-api.yaml`.

Elle défini les accès pour Centreon CLAPI et l'API Rest pour permettre à la
découverte de communiquer avec Centreon.

Exemple de configuration :

```yaml
gorgone:
  tpapi:
    - name: centreonv2
      base_url: "http://127.0.0.1/centreon/api/beta/"
      username: admin
      password: centreon
    - name: clapi
      username: admin
      password: centreon
```

> Les directives *username* et *password* sont susceptibles d'être
> modifiées pour s'adapter aux informations d'identifications d'un utilisteur
> *admin* nécessaire pour la création des services et le rechargement de la
> configuration, ou d'un utilisateur avec des droits d'accès à l'API pour la
> découverte d'hôtes.
