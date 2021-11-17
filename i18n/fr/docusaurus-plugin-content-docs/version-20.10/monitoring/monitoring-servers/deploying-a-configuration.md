---
id: deploying-a-configuration
title: Déployer une configuration
---

Lors de la création/suppression/modification des objets via l’interface de
configuration, les changements effectués ne sont pas appliqués de manière
automatique aux serveurs de supervision. Afin de pouvoir appliquer les
modifications effectuées, il est nécessaire de suivre la procédure suivante
ci-dessous.

## Procédure

1.  Rendez-vous dans le menu `Configuration > Pollers`
2.  Choisissez les collecteurs sur lesquels exporter la configuration

![image](../../assets/monitoring/monitoring-servers/monitoring-servers-list.png)

3.  Cliquez sur **Exporter la configuration**
4.  Cochez les cases **Générer les fichiers de configuration**, **Lancer le
    débogage du moteur de supervision (-v)**, **Deplacer les fichiers générés**
    et **Redémarrer l'ordonnanceur**
5.  Cliquez sur **Exporter**

![image](../../assets/monitoring/monitoring-servers/monitoring-servers-generate-configuration.png)

> L’option **Commande exécutée post-génération** permet de demander l’exécution
> de la commande post-génération paramétrée au niveau de la configuration de
> l’ordonnanceur.

## Explications

Au sein de la page de génération de la configuration, plusieurs options sont
disponibles :

  - **Générer les fichiers de configuration** : Génère les fichiers de
    configuration de l’ordonnanceur dans un répertoire temporaire. Cette
    configuration est générée à partir des objets configurés via l’interface web
  - **Lancer le débogage du moteur de supervision (-v)** : Permet à
    l’ordonnanceur de vérifier la configuration générée
  - **Deplacer les fichiers générés** : Déplace les fichiers de configuration du
    répertoire temporaire vers le répertoire de l’ordonnanceur
  - **Redémarrer l'ordonnanceur** : Redémarre l’ordonnanceur afin d’appliquer
    les nouveaux fichiers de configuration
  - **Commande exécutée post-génération** : Exécute la commande post-génération
    paramétrée au niveau de la configuration de l’ordonnanceur
