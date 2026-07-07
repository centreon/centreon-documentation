---
id: synthetic-monitoring
title: Le Monitoring Synthétique (ou “Parcours Utilisateurs”)
--- 

Le Monitoring Synthétique consiste à naviguer à fréquence régulière sur un site cible en mesurant différents indicateurs de performance web.

![image](../assets/getting-started/synthetic-monitoring-1.png)

L'outil permet en particulier :

- de **surveiller le bon fonctionnement d’un parcours type** et de calculer son **taux de disponibilité** (ex: “il a été possible de naviguer et d’acheter sur le site ecommerce pendant 99,5% du temps ce mois-ci”)
- d’**alerter en temps réel** les gestionnaires du site en cas de dysfonctionnement du site, via l’envoi d’email, SMS ou autres notifications avec un rapport détaillé de l’incident contenant à la fois une capture d’écran de l’erreur rencontrée mais également un enregistrement précis du chargement de la page dans le navigateur.
- de **mesurer et d’historiser le temps de chargement des pages** selon plusieurs critères clés (temps de chargement du premier octet, Speed Index, temps de chargement complet de la page, ou encore au regard des “[Core Web Vitals](https://web.dev/vitals/)” de Google)
- d’analyser chaque page avec un moteur de règle permettant de lister précisément **les axes d’améliorations à mener** afin de rendre le site rapide (ex: pour améliorer le temps de chargement de la page d’accueil il est prioritaire d’optimiser telles et telles images, et de réduire le code javascript de tel fichier, etc.)

Comme vous pouvez le constater, pour une seule fonctionnalité, les “User Journeys”, Experience Monitoring va en réalité regrouper ici au moins **4 fonctionnalités majeures** permettant au gérant d’une application web de s’assurer de la bonne expérience sur celle-ci.

La notion de “**parcours type**” est centrale dans l’utilisation du Monitoring Synthétique. En effet, afin de surveiller et optimiser le site, il doit être fait le choix **d’un ou plusieurs scénarios de références**. Dans Experience Monitoring, la flexibilité dans la création de ces scénarios est extrêmement importante. Il est typiquement possible d’effectuer presque tout ce que pourrait faire un véritable internaute sur le site (ex: effectuer des clics, positionner le curseur à un endroit spécifique de la page, changer de page, cocher des cases, ajouter un produit au panier, remplir un formulaire, se rendre au checkout, réaliser une commande en ligne, rentrer un numéro de carte bleue, etc.).

Voici un exemple de parcours type, pour un site ecommerce :

![image](../assets/getting-started/synthetic-monitoring-2.png)

Ces parcours peuvent être effectués dans plusieurs conditions différentes, par exemple :

- en utilisant un navigateur en mode **Desktop ou Mobile**
- en décidant de charger ou non les **“third parties”** (ex: tags Google Analytics, AB Tasty, etc.)

Dans la plupart des cas, nous vous conseillons de choisir un ou plusieurs scénarios représentant **la majorité des usages** qui sont effectués par l’internaute sur le site. Ex : s’il s’agit d’un site de ecommerce, il sera important de tester la bonne connexion à un compte utilisateur car c’est une étape essentielle dans le tunnel de vente, ou encore le moteur de recherche s’il est central dans la navigation sur le site.

De cette manière, si un changement structurel du site (ex: nouvelle mise en prod, ajout de tag, etc.) entraine un dysfonctionnement non prévu sur l’une de ces étapes clés, Experience Monitoring pourra alerter automatiquement les bonnes personnes avec les explications correspondantes.

Le dysfonctionnement peut d’ailleurs ne pas être une erreur de fonctionnement, mais un **ralentissement sévère** à l’une des étapes, ce qui induirait une baisse drastique de l’expérience utilisateur et une potentielle perte immédiate de conversion. C’est pourquoi il est capital d’obtenir l’information **en temps réel** dans ce type de situation.

Pour compléter cet article, vous trouverez ci-dessous une vidéo montrant l’utilisation des [Parcours Utilisateurs dans Experience Monitoring](https://youtu.be/My1FGpvhhWM).
