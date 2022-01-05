---
id: deploying-a-configuration
title: Déployer une configuration
---

Lorsque vous créez, supprimez ou modifiez des objets via le menu
**Configuration**, les changements effectués ne sont pas appliqués de manière
automatique (ni sur le serveur central sur lequel vous avez créé, supprimé ou modifié l'objet, ni sur aucun collecteur ou serveur distant qui en dépendrait). Pour que les modifications soient prises en compte, il est nécessaire d'exporter la configuration.

Tout changement de configuration doit se faire et s'exporter via l'interface utilisateur ou l'API du serveur central, quel que soit le collecteur concerné par le changement (serveur central, serveur distant, collecteur).

## Exporter la configuration

1.  Allez à la page **Configuration > Collecteurs > Collecteurs**. La page affiche l'état de votre serveur central et de tous les collecteurs et serveurs distants qui y sont reliés : les changements sont signalés dans la colonne **Changement de configuration**. 

2.  Sélectionnez le serveur central, le serveur distant ou le collecteur dont la configuration a changé.

    ![image](../../assets/monitoring/monitoring-servers/export_conf.png)

3.  Cliquez sur **Exporter la configuration**.

4.  Cochez les cases suivantes (voir la section [**Options d'export**](#options-dexport)) :
    - **Générer les fichiers de configuration**
    - **Lancer le débogage du moteur de supervision (-v)**
    - **Déplacer les fichiers générés**
    - **Redémarrer l'ordonnanceur**. Utilisez la méthode : 
      - **Recharger** : lorsque vous avez créé, supprimé ou modifié des objets supervisés
      - **Redémarrer** : lorsque vous avez apporté des changements à la communication entre un collecteur et le serveur central, ou à la configuration du moteur de collecte. Un redémarrage prend plus de temps qu'un rechargement.

5.  Cliquez sur **Exporter**. Un log de l'export s'affiche.

    ![image](../../assets/monitoring/monitoring-servers/export_conf_done.png)

6. Dans le log, vérifiez que l'export a bien fonctionné et qu'aucune erreur n'a été remontée.

## Options d'export

Les différentes options fonctionnent de la manière suivante :

  - **Générer les fichiers de configuration** : Génère les fichiers de
    configuration du moteur de supervision dans un répertoire temporaire. Cette
    configuration est générée à partir des objets configurés via l’interface web.
  - **Lancer le débogage du moteur de supervision (-v)** : Effectue une vérification de l'intégrité des fichiers de configuration du moteur de supervision.
  - **Déplacer les fichiers générés** : Déplace les fichiers générés d'un répertoire temporaire vers le répertoire de configuration du moteur de supervision
  - **Redémarrer l'ordonnanceur** : Redémarre ou recharge le moteur de supervision afin d’appliquer
    la nouvelle configuration.
  - **Commande exécutée post-génération** : Exécute la commande post-génération
    paramétrée au niveau de la configuration du collecteur.

## Export instantané

Les administrateurs peuvent activer un bouton qui leur permet d'exporter la configuration de TOUS les collecteurs d'un seul coup (c'est-à-dire la configuration du serveur central, des serveurs distants et des collecteurs). Cette fonctionnalité est actuellement en mode bêta.

### Dans quels cas utiliser la fonctionnalité?

> N'utilisez PAS cette fonctionnalité si vous avez un grand nombre de collecteurs. Cette fonctionnalité n'est pas pertinente non plus si vous êtes un MSP et que chaque collecteur correspond à un client différent.

### Activer la fonctionnalité

En mode bêta, seuls les utilisateurs administrateurs ont accès à cette fonctionnalité. 

Pour activer la fonctionnalité :
1. Allez à la page **Administration > Paramètres > Mon compte**, ou bien cliquez sur l'icône profil dans le bandeau en haut à droite de l'écran puis cliquez sur **Éditer le profil**.
2. Dans la section **Préférences**, cochez la case **Activer le bouton d’export de la configuration des pollers en un seul clic [BETA]**.
3. Cliquez sur **Sauvegarder**.

### Exporter toutes les configurations

Pour exporter rapidement la configuration de tous les collecteurs :

1. Cliquez sur le menu **Collecteurs** en haut à gauche de l'écran, puis cliquez sur **Exporter la configuration**.

    ![image](../../assets/monitoring/monitoring-servers/export_all_pollers_button.png)

2. Dans la pop-up qui apparaît, confirmez l'export.
