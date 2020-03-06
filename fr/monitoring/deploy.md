---
id: deploy
title: Déployer une configuration
---

## Procédure

Lors de la création/suppression/modification des objets via l’interface de configuration, les changements effectués ne
sont pas appliqués de manière automatique aux serveurs de supervision. Afin de pouvoir appliquer les modifications
effectuées, il est nécessaire de suivre la procédure suivante ci-dessous.

> Cela doit toujours être fait en 2 étapes.

### Première étape

1. Rendez-vous dans le menu : **Configuration \> Pollers**
2. Choisissez les collecteurs sur lesquels exporter la configuration
3. Cliquez sur **Apply configuration**

![image](assets/configuration/poller_menu_generate.png)

4. Cochez les cases **Generate Configuration Files** et **Run monitoring engine debug (-v)**
5. Cliquez sur **Export**

![image](assets/configuration/poller_generate_1.png)

Vérifier qu’aucune erreur n’apparait lors de la génération.

> Si cela est le cas, corriger les erreurs et refaire la première étape.

### Deuxième étape

1. Décochez les cases **Generate Configuration Files** et **Run monitoring engine debug (-v)**
2. Puis cochez les cases **Move Export Files** et **Restart Monitoring Engine**
3. Cliquez sur **Export**

![image](assets/configuration/poller_generate_2.png)

> L’option **Post generation command** permet de demander l’exécution de la commande post-génération paramétrée au
> niveau de la configuration de l’ordonnanceur.

## Explications

Au sein de la page de génération de la configuration, plusieurs options sont disponibles :

* **Generate Configuration Files** : Génère les fichiers de configuration de l’ordonnanceur dans un répertoire
  temporaire. Cette configuration est générée à partir des objets configurés via l’interface web
* **Run monitoring engine debug (-v)** : Permet à l’ordonnanceur de vérifier la configuration générée
* **Move Export Files** : Déplace les fichiers de configuration du répertoire temporaire vers le répertoire de
  l’ordonnanceur
* **Restart Monitoring Engine** : Redémarre l’ordonnanceur afin d’appliquer les nouveaux fichiers de configuration
* **Post generation command** : Exécute la commande post-génération paramétrée au niveau de la configuration de
  l’ordonnanceur
