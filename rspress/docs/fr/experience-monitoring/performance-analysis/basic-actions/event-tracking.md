---
id: event-tracking
title: Suivre et ajouter les évènements de son site dans Experience Monitoring
--- 

Cette page décrit comment ajouter vos propres commentaires via l’interface, mais il est également possible de les ajouter automatiquement (par exemple à chaque mise à jour). Rendez-vous sur cette page pour utiliser notre API:

[Suivre automatiquement les événements de mise en production](../../installation/monitor-production-events.md)

Vous avez la possibilité d'ajouter des évènements personnalisés dans Experience Monitoring de manière à ajouter de l'information sur les différents graphes.

Il est possible de remonter des évènements de différents types, et notamment:

- Commentaire: Ils permettent de commenter un graphique, par exemple pour fournir une potentielle explication lors d'un pic de temps de chargement.
- Déploiement de code: Ces évènements vous permettront de repérer visuellement les moments ou le code de votre site à été mis à jour
- Modification de configuration serveur: Grâce à ces informations, vous serez en mesure d'interpréter les graphes en prenant en compte les modifications effectuées sur l'infrastructure de votre site.

En outre, pour Magento, des évènements sont créés de manière automatique lorsque nous détectons des évènements ou lorsque qu'une modification des paramètres de vos serveurs ou scénarios web est effectuée.

Enfin, si vous avez besoin d'ajouter des évènements qui ne correspondent à aucune de ces catégories, vous pouvez utiliser le type d'évènement "custom" qui correspond à quelque chose de générique.

En bref, les évènements vous permettront de mieux travailler avec vos différents partenaires et vous aideront à utiliser l'outil au maximum de ses possibilités.

## Visualiser les évènements qui ont lieu sur votre site

Les évènements de votre site s'affichent au dessus des graphes (voir image ci-dessus), quelqu'ils soient. Afin de faciliter la lisibilité, seuls les évènements potentiellement en lien avec le graphe sont affichés (par exemple les évènements de modification des étapes d'un scénario ne s'afficheront pas dans les graphes système).

L'icône qui est affichée représente le type d'évènement (ou l'icône liée au Token API qui l'a ajouté s'il y a lieu), lorsque des évènements de différentes catégories sont présents, une icône générique est utilisée (petit drapeau).

En passant votre souris sur un des évènements, vous verrez apparaître le nombre d'évènement de chaque type. En cliquant sur l'icône, vous aurez alors le détail de chacun des évènements (avec l'heure exacte, l'auteur et le message associé à chaque fois), comme dans l'image ci-dessous.

## Ajouter des commentaires

Pour ajouter un commentaire, il vous suffit de cliquer sur le graphe à l'endroit où vous voulez ajouter un commentaire, de cliquer sur *Laisser un commentaire,* d'entrer votre message, et de cliquer sur *Envoyer* pour terminer l'ajout.
