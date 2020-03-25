---
id: installation
title: Installation
---

## Architecture

Le module **Centreon Auto Discovery** est composé de 3 parties :

* Une interface Web : création des règles, administration et exploitation du module ;
* Les sondes de découvertes ;
* Les tâches CRON qui exécutent les règles de découverte.

Les sondes de découverte vérifient la présence de nouveaux éléments à superviser. Voir
[sondes de découvertes](disco-service-create-rule#discovery-plugins) pour plus de détails.

Les règles, gérées à travers l’interface Web, sont sauvegardées dans la base de données Centreon et sont exécutées
périodiquement (toutes les nuits à 22h30) par une [tâche planifiée cron](disco-administration#tâche-programmée).

disco-administration.html#tâche-programmée

Les schémas suivants décrivent le fonctionnement général du module :

![image](assets/configuration/autodisco/centreon_auto_disco_schema.png)

## Installing packages

Exécutez la commande suivante :
```Bash
yum install centreon-auto-discovery-server
```

## Configuration des accès à l’API Centreon

Editez le fichier **/etc/centreon/centreon_autodisco.pm** et modifiez les valeurs des paramères **clapi_user** et
**clapi_password** puis sauvegarder les modifications.

## Installation web

Connectez-vous à l’interface web de Centreon en utilisant un compte ayant les droits d’installer des modules et
rendez-vous dans le menu **Administration \> Extensions \> Manager**.

Cliquez sur l’icône d’installation correspondant au module **Centreon Auto Discovery** :

![image](assets/configuration/autodisco/install.png)

Le module est maintenant installé :

![image](assets/configuration/autodisco/list_modules.png)

## Installer les Plugin Packs

Afin de bénéficier de règles de découverte prêtes à l’emploi, rendez-vous dans le menu **Configuration \> Pluin Packs**
et [installez vos premiers packs](../pluginpacks#installation-du-pack)
