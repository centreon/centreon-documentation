---
id: configure-google-analytics
title: Configurer Google Analytics avec Experience Monitoring
--- 

En intégrant les données de Google Analytics à Experience Monitoring, vous pouvez établir des corrélations entre les temps d’exécution des scénarios web et les indicateurs techniques (tels que le temps de réponse et la charge du serveur) d’une part, et les données métier (comme le trafic et les conversions) d’autre part. Cela vous aide à analyser l’impact du trafic sur les temps de chargement des pages et à en tirer des conclusions pertinentes.

## Associer Google Analytics à Experience Monitoring

> Pour connecter ou déconnecter Experience Monitoring à Google Analytics, vous devez disposer des [**droits administrateur** ou **owner**](../configuration/manage-users-and-rights.md) au sein de votre organisation dans Experience Monitoring.

Voici un [tutoriel vidéo](https://www.youtube.com/watch?v=qmeXwypUmL4&list=PLgmedpAAxo-40d8PaBsaQS7Hkrm6mdxjs&index=3) qui explique comment associer Experience Monitoring à votre compte Google. Vous pouvez également suivre la procédure ci-dessous.

Pour associer Experience Monitoring à votre compte Google Analytics :

1. Sélectionnez le site pour lequel vous souhaitez associer le compte Google Analytics (cliquez sur son nom).

2. Cliquez sur **Paramètres** (l'icône en forme d'engrenage en haut à droite de l'écran), puis sur l'onglet **Intégrations**.

4. Au bas de la section **Entreprise et analyses**, cliquez sur **Connecter**. Vous serez redirigé vers la page de connexion de Google : saisissez les identifiants du compte que vous souhaitez associer.

5. Une fois authentifié, vous serez redirigé vers Experience Monitoring. Sélectionnez la propriété Google Analytics que vous souhaitez utiliser.

## FAQ

### Les sondes d'Experience Monitoring sont-elles prises en compte dans GA ?

Non, Experience Monitoring est invisible pour Google Analytics : nous n'appelons pas la balise Google Analytics qui s'exécute sur les pages de votre site. Par conséquent, vos statistiques GA ne sont pas affectées par nos sondes.

### Pourquoi ne vois-je pas les données Analytics en temps réel dans Experience Monitoring ?

Les données Google Analytics peuvent mettre plusieurs heures à s'afficher. Comme nous récupérons les données via leur API, nous ne pouvons importer que celles qui sont visibles dans GA.

### J’ai désactivé par inadvertance le module Google Analytics dans Experience Monitoring. Puis-je récupérer l’historique ?

Pas de problème — nous importons toujours les données des dernières 24 heures. Patientez un peu et les données devraient s’afficher. Si vous avez besoin de récupérer plus de 24 heures de données historiques, contactez [le support Centreon](http://support.centreon.com/).
