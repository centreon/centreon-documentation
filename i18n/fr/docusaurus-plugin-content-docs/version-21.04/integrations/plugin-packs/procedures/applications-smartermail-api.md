---
id: applications-smartermail-api
title: Smartermail Server
---

## Vue d'ensemble

SmarterMail est un outils de la suite SmarterTool. 

Le Plugin Pack *Smartermail Server* récupère des métriques sur l'utilisatation 
de la solution au travers de son API. 

## Contenu du Plugin-Pack

### Objets supervisés

* Licenses
* Spools
* Services 

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Licenses-->

| Metric name                                    | Description                                | Unit   |
| :--------------------------------------------- | :----------------------------------------- | :----- |
| license.upgrade.protection.expires.days.count  | Number of days before license expiration   | Count  |

<!--Services-->

Aucune métrique remontée, le Mode contrôle que les Services utilisées sont bien dans un état 
*running*

<!--Spools-->

| Metric name                        | Description                       | Unit   |
| :--------------------------------- | :-------------------------------- | :----- |
| *spool_name*#spool.messages.count  | Number of messages in the Spool   | Count  |

Il est possible de filtrer sur le nom du *Spool* grâce à l'option `--filter-spool`. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis 

Un compte de supervision doit être créé sur le serveur Smartermail. D'avantage 
de détails sur l'API sont disponibles sur la documentation officielle: 
https://mail.smartertools.com/Documentation/api#/topics/overview 

Le Collecteur supervisant le serveur doit pouvoir communiquer avec lui via le 
protocole HTTPS.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur les Collecteurs utilisés pour superviser le serveur SmarterMail:

```bash
yum install centreon-plugin-Applications-Smartermail-Api
```

2. Dans l'interface web Centreon, utiliser le menu "Configuration > Plugin Packs > Gestionnaire de Plugin Pack"
pour installer le Plugin Pack *Smartermail Server* 

<!--Offline IMP License-->

1. Installer le Plugin sur les Collecteurs utilisés pour superviser le serveur SmarterMail:

```bash
yum install centreon-plugin-Applications-Smartermail-Api
```

1. Installer le RPM Plugin Pack sur le serveur Centreon central:

```bash
yum install centreon-pack-smartermail-api
```

3. Dans l'interface web Centreon, utiliser le menu "Configuration > Plugin Packs > Gestionnaire de Plugin Pack"
pour installer le Plugin Pack *Smartermail Server* 

<!--END_DOCUSAURUS_CODE_TABS-->

## Centreon Configuration

* Connectez-vous à l'interface Centreon et ajouter un nouveal Hôte via le menu "Configuration > Hôte".
* Appliquer le Modèle *App-Smartermail-Api-custom* et configurer les Macros suivante::

| Obligatoire | Name                       | Description                             |
| :---------- | :------------------------- | :-------------------------------------- |
| X           | SMARTERMAILAPIUSERNAME     | Utilisateur compte de supervision       |
| X           | SMARTERMAILAPIPASSWORD     | Mot de passe du compte de supervision   | 
|             | SMARTERMAILAPIPROTO        | Protocole utilisé (default: 'http')     |
|             | SMARTERMAILAPIPORT         | Port de l'API (default: '443')          |
|             | SMARTERMAILAPIEXTRAOPTIONS | Option(s) supplémentaire(s) (e.g proxy) |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin Centreon installé, il est possible de le tester directement 
via un terminal sur le Collecteur et en utilisant le compte centreon-engine:

```bash
/usr/lib/centreon/plugins/centreon_smartermail_api.pl \
  --plugin=apps::smartermail::restapi::plugin \
  --mode=spools \
  --hostname=10.0.0.1 \
  --proto='https' \
  --port='443' \
  --api-username='myusername' \
  --api-password='mypassword' \
  --warning-spool-messages='' \
  --critical-spool-messages=''
```

Voici un exemple de retour: 

```bash
OK: All spools are ok | 'default#spool.messages.count'=11;;;0; 'quarantine_limit#spool.messages.count'=5000;;;0; 'spam#spool.messages.count'=0;;;0; 'spool_limit#spool.messages.count'=50000;;;0; 'throttledDomains#spool.messages.count'=0;;;0; 'throttledMailingLists#spool.messages.count'=0;;;0; 'throttledUsers#spool.messages.count'=0;;;0; 'virus#spool.messages.count'=0;;;0; 'waiting#spool.messages.count'=3;;;0;
```

La commande ci-dessus contrôle les *Spools* (`--mode=spools`) de message configurés 
sur le serveur Smartermail. L'API est accessible via le protocol HTTPS (`--proto='https'`)
et le port 443 (`--port=443`). 

Les seuils disponibles et plus globalement les options utilisables avec le mode 
sont affichables grâce au flag `--help` en fin de commande:

```bash
/usr/lib/centreon/plugins/centreon_smartermail_api.pl \
  --plugin=apps::smartermail::restapi::plugin \
  --mode=spools \
  --help
```

Il est possible d'afficher les modes associés au Plugin via la commande suivante:

```bash
/usr/lib/centreon/plugins/centreon_smartermail_api.pl \
  --plugin=apps::smartermail::restapi::plugin \
  --list-mode
```

### Pourquoi obtiens-je l'erreur suivante? 

#### ```UNKNOWN: 500 Can't connect to ...:443```

Ce message est dû au fait que le Plugin n'arrive pas à contacter le serveur
Smartermail. Il est possible qu'un équipement tiers de type pare-feu bloque 
la requête. 

Il se peut également qu'un proxy soit nécessaire pour atteindre l'équipement,
dans ce cas vous pouvez utiliser l'option `--proxyurl` pour le spécifier.

#### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported |```

Quand vous utiliser un proxy pour vous connecter au serveur Smartmail, cette erreur
signifie que la librairie utilisée par défaut par le Plugin ne supporte pas le mode
de connection souhaité par le proxy. 

Vous pouvez ajouter la directive suivante dans la macro SMARTERMAILAPIEXTRAOPTIONS
de votre Hôte pour solutionner le problème: `--http-backend='curl'`.