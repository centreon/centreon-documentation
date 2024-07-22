---
id: reports
title: Centreon Reports Beta
---

Centreon Reports est une solution de reporting disponible en Beta pour les utilisateurs Cloud. Vous pouvez créer des rapports dans l'interface Centreon et visualiser les données directement dans Grafana. L'accès à l'instance Grafana est gérée par Centreon et ne demande aucune installation. Les rapports résultants sont également prêts à l'emploi et ne demandent aucune configuration.

## Créer un rapport

1. Dans Centreon, allez à la page **Rapports > Reports** pour afficher la liste **Report list**.

2. Cliquez sur **Create a Report** afin d'afficher le formulaire de création.

3. Dans la liste **Report template**, sélectionnez un modèle de rapport:

   - **SLA_Template**: le rapport affiche des calculs basés sur les statuts des ressources (MTTR, MTRS, nombre de changements de statut...)
   - Un rapport basé sur les métriques sera ajouté bientôt.
   <!--- Metric_Template: le rapport présente des données agrégées relatives à des métriques (moyenne, max etc pendant une période donnée)-->

4. Dans la section **Report properties**, remplissez le champ **Name**. Vous pouvez également ajouter une description, qui sera affichée dans la tuile du rapport dans la liste des rapports.

5. Dans la liste **Calculations based on time period**, sélectionnez **24x7**. Cela signifie que toutes les données (disponibilité, nombre d'évènements) seront prises en compte dans les calculs.

<!--ça filtre les données utilisées pour faire les calculs (exemple si tu veux faire un calcul de taux de dispo sur working hours, les max les min, etc tout sera basé sur cette time period)-->

6. Dans la liste **Aggregation period**, sélectionnez une période d'agrégation (**Hourly** : par heure, ou **Daily** : par jour). La période d'agrégation est l'unité de temps représentée par un point de données dans le graphique (**Hourly** : un point de données représente une heure, **Daily** : un point de données représente un jour).

7. Dans la section **Report scope** :

   - Sélectionnez un type de données et raffinez votre filtre en sélectionnant une ou plusieurs ressources. Cliquez sur **Add filter** pour raffiner le filtre. Si vous sélectionnez par exemple un groupe d'hôtes, lorsque vous raffinez le filtre, seules les catégories d'hôtes qui sont inclues dans ce groupe d'hôtes vous sont proposées.

   > Le premier type de ressources que vous sélectionnez définit le type de statuts que le rapport affichera. Si vous sélectionnez un groupe d'hôtes, seuls les statuts des hôtes seront pris en compte. Si vous souhaitez afficher des statuts de services, sélectionnez directement un type de ressources ayant trait aux services.
   <!-- For the **Metric_Template** template, select the **Metrics** you want to display.-->

   La section **Resources preview** affiche la liste des ressources que vous avez sélectionnées. Il ne s'agit pas d'un aperçu de votre rapport.

8. Vérifiez vos paramètres soigneusement : dans Reports Beta, les rapports ne peuent pas être édités.

   > Si le bouton **Create** n'est pas disponible, vérifiez que vous avez défini toutes les options obligatoires.

9. Une fois la configuration terminée, cliquez sur **Create**. Votre rapport apparaît dans la liste **Report list** dans une nouvelle tuile, avec le statut **In progress**.

   > La génération du rapport peut prendre quelques minutes. Si cette phase dure trop longtemps, rafraîchissez la page.

   Votre rapport est maintenant créé et prêt à être affiché.

## Visualiser un rapport dans Grafana

1. Allez à la page **Report list**, qui affiche tous les rapports créés.

2. Cliquez sur la tuile du rapport que vous voulez afficher. Un nouvel onglet s'ouvre et affiche votre rapport dans l'interface Grafana. Vous devrez peut-être vous connecter à Grafana avec votre [compte CIAM](../ciam/ciam.md#quest-ce-que-centreon-ciam).

   Vous pouvez définir la période de temps couverte par le rapport et son intervalle de rafraîchissement en utilisant les menus en haut à droite de la fenêtre.

## Supprimer un rapport

Vous pouvez supprimer un rapport de la page **Report list** : cliquez sur l'icône **poubelle** en bas à gauche de la tuile, puis confirmez la suppression. Cette supression est définitive.
