---
id: event-handler
title: Gestionnaire d'évènements (auto-remédiation)
---

## Introduction

Les gestionnaires d'évènements sont des commandes système facultatives (scripts ou
exécutables) qui sont exécutées chaque fois qu'un changement d'état d'un hôte ou d'un service se produit.

Une utilisation évidente du gestionnaire d'évènements est la possibilité pour Centreon de résoudre proactivement les
problèmes avant que quiconque ne soit averti.

### Quand le gestionnaire d'évènements est-il exécuté ?

Le gestionnaire d'évènements est exécuté lorsqu'un service ou un hôte :

* Est dans un état problématique SOFT
* Entre initialement dans un état problématique HARD
* Récupère initialement d'un état problématique SOFT ou HARD.

[Les états SOFT et HARD sont décrits ici](../alerts-notifications/concepts.md#types-de-statuts).

### Types de gestionnaires d'évènements

Il existe différents types de gestionnaires d'évènements que vous pouvez définir pour gérer les changements d'état :

* Gestionnaire d'évènements global pour les hôtes
* Gestionnaire d'évènements global pour les services
* Gestionnaire d'évènements spécifiques à un hôte
* Gestionnaire d'évènements spécifiques à un service

Les gestionnaires d'évènements globaux d'hôtes et de services sont exécutés pour chaque changement d'état d'hôte ou de
service qui se produit, immédiatement avant tout gestionnaire d'évènement spécifique à l'hôte ou au service.

### Activation des gestionnaires d'évènements

Les gestionnaires d'évènements peuvent être activés ou désactivés sur un collecteur.

Les gestionnaires d'évènements spécifiques à l'hôte et au service peuvent être activés ou désactivés dans vos définitions
d'hôte et de service. Les gestionnaires d'évènements spécifiques ne seront pas exécutés si l'option globale est désactivée
sur votre collecteur.

### Ordre d'exécution du gestionnaire d'évènements

Comme déjà mentionné, les gestionnaires d'évènements globaux d'hôte et de service sont exécutés immédiatement avant les
gestionnaires d'évènements spécifiques à l'hôte ou au service.

Les gestionnaires d'évènements sont exécutés pour les problèmes HARD et les états de récupération immédiatement après
l'envoi des notifications.

## Configuration

### Étape 1 : Créer une commande

Les commandes du gestionnaire d'évènements seront en général des scripts shell ou perl, mais il peut s'agir de
n'importe quel type d'exécutable pouvant être exécuté à partir d'un invite de commandes. Au minimum, les scripts doivent
prendre les macros suivantes comme arguments :

* Pour les services : $SERVICESTATE$, $SERVICESTATETYPE$, $SERVICEATTEMPT$
* Pour les hôtes : $HOSTSTATE$, $HOSTSTATETYPE$, $HOSTATTEMPT$

Les scripts doivent examiner les valeurs des arguments qui leur sont transmis et prendre toutes les mesures nécessaires
en fonction de ces valeurs.

Les commandes du gestionnaire d'évènements s'exécuteront normalement avec les mêmes autorisations que l'utilisateur sous
lequel Centreon Engine (utilisateur **centreon-engine**) s'exécute sur votre machine. Cela peut poser un problème si vous
souhaitez écrire un gestionnaire d'évènements qui redémarre les services système, car les privilèges **root** sont
généralement requis pour effectuer ce type de tâches.

Idéalement, vous devez évaluer les types de gestionnaires d'évènements que vous allez implémenter et accorder juste
assez de permissions à l'utilisateur Centreon Engine pour exécuter les commandes système nécessaires. Vous voudrez
peut-être essayer d'utiliser sudo pour ce faire.

1. Pour créer une commande, allez à la page **Configuration > Commandes > Divers**.
2. [Créez votre command comme décrit ici](./basic-objects/commands.md#créer-une-commande-personnalisée).
3. [Ajoutez votre nouvelle commande à la liste blanche des commandes du collecteur](./basic-objects/commands.md#command-whitelist) qui supervisera les ressources désirées.

### Étape 2 : Activer les gestionnaires d'évènements sur votre plateforme

1. Allez à la page **Configuration > Collecteurs > Configuration du moteur de collecte** et éditez les configurations Centreon Engine pour tous les serveurs qui superviseront des ressources avec gestionnaires d'évènements.

2. Dans l'onglet **Options de contrôle**, dans la section **Autres options**, assurez-vous que l'option **Gestionnaire d'évènements** est activée.

### Étape 3 : Configurer les gestionnaires d'évènements

#### Sur toutes les ressources supervisées par un collecteur

Pour définir une commande de gestionnaire d'évènements pour tous les hôtes et/ou services supervisés par un collecteur spécifique :

1. Allez à la page **Configuration > Collecteurs > Configuration du moteur de collecte** et éditez la configuration Centreon Engine pour ce collecteur.

2. Dans l'onglet **Options de contrôle**, dans la section **Gestionnaire d'évènements**, sélectionnez l'une des commandes créées à l'étape 1 (dans les champs **Gestionnaire global d’évènements d'hôte** or **Gestionnaire global d’évènements de service**).

3. Cliquez sur **Sauvegarder**.

#### Sur des ressources sélectionnées

1. Allez à la page **Configuration > Hôtes > Hôtes** ou à la page **Configuration > Services > Services par hôte** et éditez vos hôtes ou vos services.

2. Dans l'onglet **Traitement des données**, dans le champ **Gestionnaire d'évènements**, sélectionnez l'une des commandes créées à l'étape 1.

3. Cliquez sur **Sauvegarder**.

> Vous pouvez également configurer cette commande sur les [modèles d'hôtes](basic-objects/hosts-templates.md) ou les [modèles de services](basic-objects/services-templates.md).

### Exemple

L'exemple ci-dessous suppose que vous supervisez un serveur HTTP sur la machine locale. Nous supposerons que l'option
**Max Check Attempts** pour le service a une valeur de 4 ou plus (c'est-à-dire que le service est vérifié 4 fois avant
qu'il ne soit considéré comme ayant un réel problème).

1. On stocke le script du gestionnaire d'évènements dans **/usr/lib/centreon/plugins/eventhandlers/restart-httpd**.

```Shell
#!/bin/sh
#
# Event handler script for restarting the web server on the local machine
#
# Note: This script will only restart the web server if the service is
#       retried 3 times (in a "soft" state) or if the web service somehow
#       manages to fall into a "hard" error state.
#

# What state is the HTTP service in?
case "$1" in
OK)
	# The service just came back up, so don't do anything...
	;;
WARNING)
	# We don't really care about warning states, since the service is probably still running...
	;;
UNKNOWN)
	# We don't know what might be causing an unknown error, so don't do anything...
	;;
CRITICAL)
	# Aha!  The HTTP service appears to have a problem - perhaps we should restart the server...
	# Is this a "soft" or a "hard" state?
	case "$2" in

	# We're in a "soft" state, meaning that Centreon is in the middle of retrying the
	# check before it turns into a "hard" state and contacts get notified...
	SOFT)

		# What check attempt are we on?  We don't want to restart the web server on the first
		# check, because it may just be a fluke!
		case "$3" in

		# Wait until the check has been tried 3 times before restarting the web server.
		# If the check fails on the 4th time (after we restart the web server), the state
		# type will turn to "hard" and contacts will be notified of the problem.
		# Hopefully this will restart the web server successfully, so the 4th check will
		# result in a "soft" recovery.  If that happens no one gets notified because we
		# fixed the problem!
		3)
			echo -n "Restarting HTTP service (3rd soft critical state)..."
			# Call the init script to restart the HTTPD server
			/etc/rc.d/init.d/httpd restart
			;;
			esac
		;;

	# The HTTP service somehow managed to turn into a hard error without getting fixed.
	# It should have been restarted by the code above, but for some reason it didn't.
	# Let's give it one last try, shall we?  
	# Note: Contacts have already been notified of a problem with the service at this
	# point (unless you disabled notifications for this service)
	HARD)
		echo -n "Restarting HTTP service..."
		# Call the init script to restart the HTTPD server
		/etc/rc.d/init.d/httpd restart
		;;
	esac
	;;
esac
exit 0
```

L'exemple de script fourni ci-dessus tentera de redémarrer le serveur web sur la machine locale :

* Une fois que le service a été revérifié pour la troisième fois et est dans un état SOFT CRITICAL
* Une fois que le service passe pour la première fois dans un état HARD CRITICAL.

Le script devrait théoriquement redémarrer le serveur web et résoudre le problème avant que le service ne passe dans
un état de problème HARD, mais nous incluons un cas de secours dans le cas où cela ne fonctionne pas la première fois.
Dans ce cas, le gestionnaire d'évènements ne sera exécuté que la première fois que le service tombe dans un
état de problème HARD. Cela empêche Centreon d'exécuter en continu le script pour redémarrer le serveur web si le
service reste dans un état de problème HARD.

2. À la page **Configuration > Commandes > Divers**, on crée une commande avec les caractéristiques suivantes :

* Nom : **restart-httpd**
* Ligne de commande : `$CENTREONPLUGINS$/eventhandlers/restart-httpd  $SERVICESTATE$ $SERVICESTATETYPE$ $SERVICEATTEMPT$`

3. On édite le service désiré, puis on sélectionne la commande **restart-httpd** dans le champ **Gestionnaire d'évènements**.
