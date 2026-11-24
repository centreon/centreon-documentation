---
id: stm-zones-release-notes
title: Sonde interne - notes de release
description: "Changements apportés par chaque version de la sonde interne de vos zones STM privées : nouveautés, corrections et changements de comportement à vérifier."
---

La sonde interne est la sonde que vous déployez dans votre propre infrastructure pour exécuter des parcours utilisateur depuis une [zone STM privée](configuration/user-journey/stm-zones.md). Les sondes internes ne sont pas mises à jour automatiquement, et seule la dernière version est prise en charge : [mettez à jour vos sondes](configuration/user-journey/stm-zones.md#mettre-à-jour-une-sonde) à chaque nouvelle version.

Une sonde indique sa version dans ses logs au démarrage.

Les versions sont classées de la plus récente à la plus ancienne. Chaque changement porte l'un des libellés suivants :

- **Amélioration** : ajoute ou améliore une fonctionnalité.
- **Correction** : corrige un défaut.
- **Maintenance** : met à jour des composants.
- **Changement de comportement** : peut faire échouer un parcours existant après la mise à jour. Vérifiez vos parcours avant de mettre à jour.

<!--
Modèle pour une nouvelle version de la sonde (une entrée par image publiée, la plus récente en premier) :

## X.Y.Z

Date de sortie : J mois AAAA. [Procédure de mise à jour](configuration/user-journey/stm-zones.md#mettre-à-jour-une-sonde).

- **Amélioration** : ...
- **Correction** : ...
- **Correction, changement de comportement** : ... (dire ce qui se passait avant, ce qui se passe maintenant, et quels parcours sont concernés)
- **Maintenance** : ...

Ne pas recopier la procédure de mise à jour dans l'entrée : mettre un lien.
-->

## 1.0.5

Date de sortie : à venir. [Procédure de mise à jour](configuration/user-journey/stm-zones.md#mettre-à-jour-une-sonde).

- **Amélioration** : la sonde masque les valeurs de parcours marquées comme secrètes dans tout ce qu'elle envoie à la plateforme (logs, enregistrements réseau et résultats), quel que soit le nom de la valeur. Les captures d'écran ne sont pas masquées. Les sondes antérieures à la version 1.0.5 ignorent le marquage secret et ne masquent les valeurs que d'après leur nom : si vous utilisez des valeurs secrètes, mettez à jour vos sondes.
- **Correction, changement de comportement** : une étape de formulaire échoue désormais immédiatement lorsqu'un de ses champs est introuvable, et l'incident indique le nom de ce champ. Jusqu'ici, le champ était ignoré, le formulaire était tout de même envoyé et le parcours échouait plus tard, sur une étape sans rapport. Les parcours qui reposaient sur un champ ignoré sans avertissement vont se mettre à échouer.
- **Correction** : les logs de la sonde affichent le nom des parcours et des variables, et non plus leurs valeurs.
- **Amélioration** : chaque image porte, en plus du tag `latest`, un tag correspondant à sa version (par exemple `1.0.5`) : vous pouvez ainsi figer une sonde sur une version précise. Les images portent aussi des labels standard (produit, éditeur, licence, version, date de build), lisibles avec `docker inspect`.
- **Maintenance** : des composants tiers ont été mis à jour, dont l'environnement d'exécution Ruby (4.0.10).

## 1.0.4

Date de sortie : 9 novembre 2026.

- **Amélioration** : par défaut, la sonde se connecte à `exp.mycentreon.com`. L'ancienne adresse fonctionne toujours : les sondes démarrées avec une adresse explicite, ou les sondes plus anciennes, n'ont besoin d'aucune modification.

## 1.0.3

Date de sortie : 2 novembre 2026.

- **Correction, changement de comportement** : une attente portant sur une requête est désormais vérifiée comme une adresse web. Une valeur qui n'est pas une adresse web (valeur vide ou sélecteur de page) correspondait auparavant à toutes les requêtes : l'attente était donc validée par la première ressource chargée. L'étape échoue désormais en indiquant que l'adresse n'est pas valide. Les parcours qui contiennent une telle attente vont se mettre à échouer et doivent être corrigés.
- **Correction** : les caractères génériques sont acceptés dans les attentes portant sur une requête, par exemple pour accepter n'importe quel protocole, sous-domaine ou port.
- **Maintenance** : des composants tiers ont été mis à jour, dont l'environnement d'exécution Ruby (4.0.9).

## 1.0.2

Date de sortie : 30 septembre 2026.

- **Correction** : lorsque le navigateur s'arrête de manière inattendue pendant un parcours, l'exécution est signalée comme une étape en échec, avec un incident « browser exited » qui indique l'étape concernée. Jusqu'ici, rien n'était signalé, ce qui laissait un trou dans l'historique des statuts du parcours.
- **Correction** : un parcours qui ne peut pas démarrer du tout (échec du lancement du navigateur, parcours illisible) signale désormais un échec au lieu de ne rien remonter.

## 1.0.1

Date de sortie : 15 septembre 2026.

- **Correction** : les graphiques des parcours n'affichent plus de trous gris récurrents ni de barres en double : chaque résultat est rattaché à la période de mesure pour laquelle il était planifié, au lieu d'être réparti sur deux périodes.
- **Maintenance** : des composants tiers faisant l'objet d'avis de sécurité connus ont été mis à jour.

## 1.0.0

Date de sortie : 8 septembre 2026. Première version numérotée de la sonde interne.

- **Amélioration** : la sonde communique sa version à la plateforme et l'indique dans ses logs, au démarrage et au début de chaque parcours.
- **Amélioration** : les résultats ne sont plus perdus lorsque la plateforme est injoignable ou surchargée. La sonde stocke sur son disque les résultats non livrés et les renvoie plus tard, les plus anciens d'abord, une fois les résultats récents envoyés. Par défaut, ce stock est limité à 500 Mo. Au-delà, les résultats les plus anciens sont supprimés et la perte est consignée dans les logs.
- **Correction** : un parcours dont la définition ne peut pas être lue est signalé en échec, au lieu de ne produire aucun résultat.
- **Correction** : une attente portant sur une requête n'échoue plus lorsqu'un réseau de diffusion de contenu (CDN) sert le même fichier depuis une adresse de secours après une première tentative en échec.
- **Correction** : la recherche d'un élément par son texte ne porte plus que sur le texte réellement affiché sur la page. Le texte contenu dans les scripts, les styles ou le titre de la page est ignoré.
