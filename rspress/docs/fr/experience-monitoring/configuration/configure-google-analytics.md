---
id: configure-google-analytics
title: Configurer Google Analytics avec Experience Monitoring
--- 

## Questions fréquentes

### Pourquoi intégrer Google Analytics dans Experience Monitoring ?

L'intégration de ces données va permettre de corréler des données techniques (temps de réponse, charge serveur, etc) avec vos données Business (traffic, conversion, etc). Ces corrélations vous permettront de tirer des conclusions.

### Les sondes Experience Monitoring sont-elles comptabilisées dans GA ?

**Non**, Experience Monitoring est un ninja pour Google Analytics ! En effet nous n'appelons pas le tag Google Analytics présent sur les pages de votre site.

Ainsi vos statistiques ne seront pas affectées par nos sondes.

### Pourquoi je n'ai pas de données Analytics qui remonte dans Experience Monitoring ?

Google Analytics a toujours un certain retard, pouvant aller jusqu'à plusieurs heures. Étant donné que nous récupérons les données via leur API, tant qu'elles ne sont pas visibles dans GA, nous ne pouvons les récupérer.

### Pourquoi je n’ai pas de données Analytics en temps réel ?

Google Analytics a toujours un certain retard, pouvant aller jusqu'à plusieurs heures. Étant donné que nous récupérons les données via leur API, tant qu'elles ne sont pas visibles dans GA, nous ne pouvons les

### J’ai désactivé par erreur le module Google Analytics d'Experience Monitoring. Est-il possible de récupérer de l’historique ?

Pas de problème, nous récupérons toujours les 24 dernières heures de données. Attendez un peu et vous devriez les voir arriver.

Si vous souhaitez récupérer plus de 24h de retard, n'hésitez pas à contacter le support via le bouton "Aide" en bas à droit de votre écran quand vous êtes dans l'app.

## Lier Google Analytics à Experience Monitoring

Avec Experience Monitoring, vous pouvez corréler le temps d’exécution de vos webscénarios avec le traffic mesuré par Google Analytics sur la même période et ainsi analyser les effets du traffic sur les temps de chargement du site.

>Pour pouvoir ajouter/supprimer une liaison vous avez besoin d’avoir les permissions « Administrateur » ou « Propriétaire » sur votre Organisation dans Experience Monitoring.

Nous avons un [tutoriel vidéo](https://youtu.be/vOVU7zv_GZg?list=PLgmedpAAxo-5XqQVueiuwFwhKs_DifUDb) qui démontre comment lier Quanta à votre compte google.

Pour lier Experience Monitoring avec votre compte Google Analytics, rendez-vous dans l’onglet « Configuration » (icône qui ressemble à un engrenage en haut à droite de votre écran) sélectionnez le site (en cliquant sur son nom) pour lequel vous voulez lier votre compte Google Analytics.

Allez dans l’onglet « Intégrations ».

Pour créer la liaison, cliquez sur « Connecter ». Vous allez être redirigé sur la page d’authentification de Google, saisissez alors l’identifiant et le mot de passe du compte que vous voulez lier.

Une fois authentifié vous êtes de nouveau redirigé vers Experience Monitoring, vos profils Analytics sont importés dans l’interface et il ne vous reste plus qu’à choisir celui que vous souhaitez utiliser.
