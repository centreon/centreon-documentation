---
id: load-tests
title: Les tests de montée en charge
--- 

Cette section permet l’analyse du comportement de la plateforme qui héberge votre application Web, **dans des conditions de trafic intense**. Pour y accéder, rendez-vous dans le menu principal, puis **Tests de charge**.

Réaliser un Test de Montée en Charge (ou “TMC” pour les intimes) consiste à lancer, directement depuis Experience Monitoring, un grand nombre de navigateurs web en parallèle et les faire interagir avec un site Internet afin de “stresser” volontairement la plateforme et l’application web.

![image](../assets/getting-started/load-tests-1.png)

En quelques clics, il est donc possible de reproduire les conditions d’un jour de **très grande affluence** afin d’analyser volontairement le comportement du site dans ces conditions.

En fonction du besoin, un TMC peut répondre à **3 grands objectifs principaux** :

- **mesurer la capacité d’accueil** d’un site internet dans son architecture actuelle ou dans sa future architecture (on parlera dans ce cas de TMC en preprod, ou “future prod”).

Exemple de conclusion : “*Lors du TMC réalisé sur le site de production de MonSite.com, nous avons constaté l’atteinte de 1 450 pages vues / minutes avant dégradation de l’expérience utilisateur, soit l’équivalent de 43 500 visiteurs uniques par heure. En comparant cette donnée avec l’historique Google Analytics du site, on peut constater que le TMC a dépassé le dernier pic de trafic des soldes Janvier d’un facteur x4,5 dans un contexte de navigation confortable.*”
- **identifier le ou les goulots d’étranglements** principalement responsables de l’atteinte de la limite de la capacité d’accueil. L’identification de ces différents goulots d’étranglements (“bottlenecks” en anglais), va généralement permettre d’**orienter fortement les travaux d'optimisation** qui permettront d’augmenter la capacité d’accueil.

Exemple de conclusion : “*on constate que la fonction d’ajout au panier et la sélection de la livraison sont les étapes dont le temps va augmenter le plus rapidement. Peu avant la rupture, elles atteignent respectivement 18 et 34 secondes de temps de chargement moyen. Leur optimisation permettrait d’économiser des ressources et d’augmenter la capacité d’accueil.*”
- **analyser les symptômes des perturbations lors de la surcharge ainsi que la nature du “crash”** afin de guider les équipes DEV et OPS dans l’amélioration de la fiabilité de fonctionnement du site.

Exemple de conclusion : “*proche de l’atteinte de la limite, plusieurs erreurs 503 (internal server error) ont été repérées sur les webservices MonSiteEcommerce.com/reloadBasket.php rendant l’affichage du panier inopérant dans le navigateur de l’internaute, quelques minutes plus tard la sélection de la livraison avait [...]*”

Proposés avec ou sans accompagnement d’experts, les TMC Experience Monitoring font l’objet d’une facturation spécifique. Pour en savoir + n’hésitez pas à contacter votre commercial ou l’équipe commerciale Experience Monitoring by Centreon sur [sales@quanta.io](mailto:sales@quanta.io).
